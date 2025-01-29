const questions = [
    {
        question: "Как вы относитесь к новым возможностям (предложениям, идеям, проектам)?",
        answers: [
            { text: "a) Мне сложно решиться на что-то новое: слишком много сомнений.", value: 1 },
            { text: "b) Я взвешиваю «за» и «против», часто сомневаюсь и откладываю решение.", value: 2 },
            { text: "c) Я обычно довольно быстро принимаю решение, особенно если вижу пользу для развития.", value: 3 },
            { text: "d) Я с энтузиазмом хватаюсь за возможность и уже по ходу разбираюсь с деталями.", value: 4 }
        ]
    },
    {
        question: "Как вы реагируете, если что-то идёт не по плану?",
        answers: [
            { text: "a) Расстраиваюсь и склонен(а) бросить начатое.", value: 1 },
            { text: "b) Я злюсь на себя или окружающих, а потом долго «пережёвываю» эту ситуацию.", value: 2 },
            { text: "c) Я стараюсь понять, как можно скорректировать план и вырулить ситуацию.", value: 3 },
            { text: "d) Я воспринимаю неудачи как опыт и мотивирую себя фразой: «Отлично, теперь я знаю, как сделать лучше».", value: 4 }
        ]
    },
    {
        question: "Насколько вы готовы обучаться новым навыкам?",
        answers: [
            { text: "a) У меня нет времени и сил на дополнительное обучение — и так хватает забот.", value: 1 },
            { text: "b) Интересно, но я часто откладываю курсы и книги «на потом».", value: 2 },
            { text: "c) Я стараюсь проходить онлайн-курсы и читать книги по саморазвитию, когда появляется время и вдохновение.", value: 3 },
            { text: "d) Я постоянно учусь — записываюсь на курсы, слушаю подкасты, читаю статьи и практикую полученные знания.", value: 4 }
        ]
    },
    {
        question: "Как вы определяете свои цели?",
        answers: [
            { text: "a) Живу «как придётся», не люблю строить планы.", value: 1 },
            { text: "b) У меня в голове есть несколько целей, но они не очень конкретны.", value: 2 },
            { text: "c) Я люблю ставить конкретные цели на год и разбивать их на более мелкие задачи.", value: 3 },
            { text: "d) У меня есть масштабное видение (цели на 5–10 лет) и детальный план, как к ним двигаться.", value: 4 }
        ]
    },
    {
        question: "Как вы относитесь к критике со стороны окружающих?",
        answers: [
            { text: "a) Мне неприятно даже думать о том, что меня могут критиковать.", value: 1 },
            { text: "b) Меня задевает критика, но если она конструктивная, я пытаюсь извлечь уроки.", value: 2 },
            { text: "c) Я спокойно разбираюсь, почему возникла критика, и ищу способы исправить или улучшить свою работу.", value: 3 },
            { text: "d) Я благодарен(на) любой критике, ведь она помогает мне расти и видеть слепые зоны.", value: 4 }
        ]
    },
    {
        question: "Какой формат саморазвития вы предпочитаете?",
        answers: [
            { text: "a) Никакого. У меня нет ресурсов на «эти новомодные практики».", value: 1 },
            { text: "b) Мне нравятся вдохновляющие видео или статьи, но я редко применяю советы на практике.", value: 2 },
            { text: "c) Мне подходят краткие, но регулярные форматы (ежедневная микропрактика, 15-минутный коучинг).", value: 3 },
            { text: "d) Я использую максимально широкий спектр: читаю, слушаю, практикую, веду дневник, хожу на тренинги.", value: 4 }
        ]
    },
    {
        question: "Что мотивирует вас больше всего?",
        answers: [
            { text: "a) Страх остаться «за бортом» или отстать от окружающих.", value: 1 },
            { text: "b) Желание получить признание от важных для меня людей.", value: 2 },
            { text: "c) Понимание, что саморазвитие откроет для меня новые возможности и перспективы.", value: 3 },
            { text: "d) Внутренний азарт к познанию и желание максимально реализовать свой потенциал.", value: 4 }
        ]
    },
    {
        question: "Как вы реагируете на чужие успехи (в соцсетях, на работе и т.д.)?",
        answers: [
            { text: "a) Чувствую зависть и обескураженность, ведь у меня так не получается.", value: 1 },
            { text: "b) Думаю, что это просто удача или связи.", value: 2 },
            { text: "c) Вдохновляюсь примером и задаюсь вопросом: «А что из этого я могу применить в своей жизни?».", value: 3 },
            { text: "d) С удовольствием поздравляю и перенимаю лайфхаки, которые помогли человеку вырасти.", value: 4 }
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

        // Attach the click event listener to the button
        document.getElementById('nextButton').addEventListener('click', nextQuestion);
    } else {
        showResult();
    }
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert('Пожалуйста, выберите ответ перед продолжением.');
        return;
    }
    score += parseInt(selectedAnswer.value);
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    let message = '';
    if (score >= 8 && score <= 14) {
        message = 'Ваше желание к саморазвитию пока не сформировано или постоянно наталкивается на барьеры. Начать можно с маленьких шагов!';
    } else if (score >= 15 && score <= 23) {
        message = 'Вы уже интересуетесь саморазвитием, но часто останавливаетесь на полпути. Попробуйте более системный подход.';
    } else if (score >= 24 && score <= 28) {
        message = 'У вас хороший уровень осознанности и стремление к росту. Вы регулярно ищете новую информацию, пробуете методы.';
    } else if (score >= 29 && score <= 32) {
        message = 'Поздравляем! Вы уже являетесь «вечным учеником» и активно ищете новый опыт. Отличная мотивация и развитие!';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Ваш результат: ${score} баллов. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();