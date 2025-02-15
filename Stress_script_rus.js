const questions = [
    {
        question: "Какое утро для вас наиболее типично?",
        answers: [
            { text: "a) Просыпаюсь с тяжёлой головой и мыслями: 'Не хочу видеть этот мир.'", value: 1 },
            { text: "b) Встаю, но чувствую лёгкую тревогу: 'Справлюсь ли я со всем, что запланировал сегодня?'", value: 2 },
            { text: "c) Начинаю день с планирования и небольшой тренировки — это помогает настроиться.", value: 3 },
            { text: "d) Просыпаюсь достаточно энергичным и с радостью жду новый день.", value: 4 }
        ]
    },
    {
        question: "Что вы делаете, когда понимаете, что не успеваете выполнить важное задание вовремя?",
        answers: [
            { text: "a) Закрываюсь от всего, откладываю задание и начинаю винить себя.", value: 1 },
            { text: "b) Паникую и пытаюсь сделать всё сразу хаотично.", value: 2 },
            { text: "c) Обращаюсь за помощью к коллегам или друзьям.", value: 3 },
            { text: "d) Принимаю ситуацию, продлеваю дедлайн (если возможно) и делегирую часть работы.", value: 4 }
        ]
    },
    {
        question: "Как часто вы чувствуете, что ваша усталость 'непреодолима'?",
        answers: [
            { text: "a) Почти каждый день. Чувствую, что нахожусь на пределе.", value: 1 },
            { text: "b) Несколько раз в неделю, особенно к концу рабочего дня.", value: 2 },
            { text: "c) Бывает, но я могу восстановиться на выходных или в отпуске.", value: 3 },
            { text: "d) Очень редко — я стараюсь вовремя перезагружаться.", value: 4 }
        ]
    },
    {
        question: "Как вы реагируете на критику со стороны начальника или клиента?",
        answers: [
            { text: "a) Злюсь на себя и всех вокруг, считая её несправедливой.", value: 1 },
            { text: "b) Закрываюсь в себе и долго обдумываю, что пошло не так.", value: 2 },
            { text: "c) Анализирую обратную связь: какие конкретные шаги могу предпринять для улучшения?", value: 3 },
            { text: "d) Принимаю её спокойно и задаю уточняющие вопросы, чтобы понять, что именно нужно изменить.", value: 4 }
        ]
    },
    {
        question: "Как вы обычно восстанавливаетесь после тяжёлого рабочего дня?",
        answers: [
            { text: "a) Листаю соцсети до поздней ночи, засыпая с телефоном в руках.", value: 1 },
            { text: "b) Стараюсь лечь спать пораньше, но часто прокручиваю рабочие моменты в голове.", value: 2 },
            { text: "c) Гуляю, занимаюсь спортом или читаю что-то приятное — это отвлекает мысли.", value: 3 },
            { text: "d) Практикую медитацию/дыхательные упражнения или веду дневник благодарности.", value: 4 }
        ]
    },
    {
        question: "Что вы делаете, когда не можете решить проблему, а сроки поджимают?",
        answers: [
            { text: "a) Отключаюсь от работы (смотрю фильмы, играю в игры), чтобы перестать думать о задаче.", value: 2 },
            { text: "b) Лихорадочно пытаюсь найти решение, игнорируя усталость.", value: 1 },
            { text: "c) Разбиваю задачу на более мелкие части и выясняю, с чего можно начать.", value: 3 },
            { text: "d) Привлекаю команду или эксперта — совместный мозговой штурм часто даёт лучший результат.", value: 4 }
        ]
    },
    {
        question: "Вас пригласили на важное мероприятие, но вы чувствуете себя вымотанным. Что будете делать?",
        answers: [
            { text: "a) Соглашусь, стиснув зубы, а потом всю ночь буду жалеть, что потратил силы и время.", value: 1 },
            { text: "b) Пойду, но в полубессознательном состоянии: 'Может, как-нибудь переживу.'", value: 2 },
            { text: "c) Откажусь, объяснив, что мне нужен отдых, или предложу перенести встречу.", value: 3 },
            { text: "d) Заранее подготовлюсь (короткий сон, лёгкий перекус, настрой), чтобы прийти в лучшей форме.", value: 4 }
        ]
    },
    {
        question: "Когда чувствуете, что буквально 'на грани', вы...",
        answers: [
            { text: "a) Срываетесь на близких или коллег.", value: 1 },
            { text: "b) Закрываетесь в себе и стараетесь не показывать никому, как вам плохо.", value: 2 },
            { text: "c) Осознаёте, что это сигнал — пора сделать паузу или попросить поддержку.", value: 3 },
            { text: "d) У меня есть список техник заботы о себе (дыхательные упражнения, любимые хобби), которые быстро возвращают меня в норму.", value: 4 }
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
                    ${questionData.answers.map(answer => `
                        <label>
                            <input type="radio" name="answer" value="${answer.value}"> ${answer.text}
                        </label>
                    `).join('')}
                </div>
                <button id="nextButton">Далее</button>
            </div>
        `;
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
    if (score <= 14) {
        message = 'Вы, вероятно, испытываете глубокий стресс или даже на грани выгорания.';
    } else if (score <= 23) {
        message = 'Стресс присутствует, и он уже влияет на вашу повседневную жизнь.';
    } else if (score <= 28) {
        message = 'Вы хорошо справляетесь со стрессом и умеете планировать.';
    } else {
        message = 'Поздравляем! Вы действительно умеете заботиться о себе.';
    }
    quizDiv.style.display = 'none';
    resultDiv.textContent = `Ваш результат: ${score} баллов. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();