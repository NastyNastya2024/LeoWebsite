const questions = [
    {
        question: "Как вы относитесь к новым возможностям (предложениям, идеям, проектам)?",
        answers: [
            { text: "a) Мне сложно принять что-то новое: слишком много сомнений.", value: 1 },
            { text: "b) Я взвешиваю все за и против, часто сомневаюсь и откладываю принятие решения.", value: 2 },
            { text: "c) Обычно я принимаю решения довольно быстро, особенно если вижу в этом выгоду для личного развития.", value: 3 },
            { text: "d) Я с энтузиазмом использую возможности и разбираюсь с деталями по ходу.", value: 4 }
        ]
    },
    {
        question: "Как вы реагируете, когда что-то идет не по плану?",
        answers: [
            { text: "a) Я расстраиваюсь и склонен бросать начатое.", value: 1 },
            { text: "b) Я злюсь на себя или на других, затем долго переживаю из-за ситуации.", value: 2 },
            { text: "c) Я пытаюсь разобраться, как скорректировать план и направить ситуацию в нужное русло.", value: 3 },
            { text: "d) Я рассматриваю неудачи как опыт и мотивирую себя фразой: «Здорово, теперь я знаю, как сделать лучше.»", value: 4 }
        ]
    },
    {
        question: "Насколько вы открыты к обучению новым навыкам?",
        answers: [
            { text: "a) У меня нет времени или энергии для дополнительного обучения — у меня и так много дел.", value: 1 },
            { text: "b) Это интересно, но я часто откладываю курсы и книги на потом.", value: 2 },
            { text: "c) Я стараюсь проходить онлайн-курсы и читать книги по саморазвитию, когда есть время и вдохновение.", value: 3 },
            { text: "d) Я постоянно учусь — записываюсь на курсы, слушаю подкасты, читаю статьи и практикую полученные знания.", value: 4 }
        ]
    },
    {
        question: "Как вы определяете свои цели?",
        answers: [
            { text: "a) Я живу «как получится», не люблю строить планы.", value: 1 },
            { text: "b) У меня есть несколько целей, но они не очень конкретные.", value: 2 },
            { text: "c) Мне нравится ставить конкретные цели на год и разбивать их на маленькие задачи.", value: 3 },
            { text: "d) У меня есть большая картина (цели на 5-10 лет) и детализированный план, как к ним двигаться.", value: 4 }
        ]
    },
    {
        question: "Как вы относитесь к критике со стороны других?",
        answers: [
            { text: "a) Я даже не люблю думать о том, что меня критикуют.", value: 1 },
            { text: "b) Критика меня беспокоит, но если она конструктивная, я стараюсь извлечь из неё урок.", value: 2 },
            { text: "c) Я спокойно анализирую, почему возникла критика, и ищу способы улучшить свою работу.", value: 3 },
            { text: "d) Я благодарен за любую критику, так как она помогает мне расти и видеть свои слепые зоны.", value: 4 }
        ]
    },
    {
        question: "Какой формат саморазвития вам подходит?",
        answers: [
            { text: "a) Никакой. У меня нет ресурсов для этих «модных практик».", value: 1 },
            { text: "b) Мне нравятся вдохновляющие видео или статьи, но я редко применяю советы на практике.", value: 2 },
            { text: "c) Мне подходят короткие, но регулярные форматы (ежедневные микро-практики, 15-минутное коучинг).", value: 3 },
            { text: "d) Я использую широкий спектр: читаю, слушаю, практикую, веду дневник и посещаю мастер-классы.", value: 4 }
        ]
    },
    {
        question: "Что вас мотивирует больше всего?",
        answers: [
            { text: "a) Страх отстать или не успеть за другими.", value: 1 },
            { text: "b) Желание признания от важных для меня людей.", value: 2 },
            { text: "c) Понимание, что саморазвитие откроет новые возможности и перспективы.", value: 3 },
            { text: "d) Внутреннее волнение от обучения и желание максимизировать свой потенциал.", value: 4 }
        ]
    },
    {
        question: "Как вы реагируете на успехи других людей (в социальных сетях, на работе и т.д.)?",
        answers: [
            { text: "a) Я чувствую зависть и разочарование, потому что не могу достичь этого.", value: 1 },
            { text: "b) Я думаю, что это просто удача или связи.", value: 2 },
            { text: "c) Меня вдохновляет их пример, и я задаю себе вопрос: «Что я могу применить из этого в своей жизни?».", value: 3 },
            { text: "d) Я с радостью поздравляю их и перенимаю советы, которые помогли им развиться.", value: 4 }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizDiv = document.getElementById('quiz');
const resultDiv = document.getElementById('result');

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        quizDiv.innerHTML = `
            <div class="question">
                <p>${questionData.question}</p>
                <div class="answers">
                    ${questionData.answers.map((answer, index) => `
                        <label>
                            <input type="radio" name="answer" value="${answer.value}"> ${answer.text}
                        </label>
                    `).join('')}
                </div>
                <button id="nextButton">Далее</button>
            </div>
        `;

        // Прикрепляем обработчик событий для кнопки
        document.getElementById('nextButton').addEventListener('click', nextQuestion);
    } else {
        showResult();
    }
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert('Пожалуйста, выберите ответ перед тем, как продолжить.');
        return;
    }
    score += parseInt(selectedAnswer.value);
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    let message = '';
    if (score >= 8 && score <= 14) {
        message = 'Ваше стремление к саморазвитию еще не сформировано или постоянно сталкивается с барьерами. Начните с маленьких шагов!';
    } else if (score >= 15 && score <= 23) {
        message = 'Вы уже заинтересованы в саморазвитии, но часто останавливаетесь на полпути. Попробуйте более системный подход.';
    } else if (score >= 24 && score <= 28) {
        message = 'У вас хороший уровень осведомленности и желание расти. Вы регулярно ищете новую информацию и пробуете методы.';
    } else if (score >= 29 && score <= 32) {
        message = 'Поздравляем! Вы уже «вечный ученик» и активно ищете новые переживания. Отличная мотивация и развитие!';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Ваш результат: ${score} баллов. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();