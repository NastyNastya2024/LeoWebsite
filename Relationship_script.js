const questions = [
    {
        question: "Как вы обычно решаете разногласия в семье?",
        answers: [
            { text: "a) Стараюсь избегать конфликтов, переждать.", value: 1 },
            { text: "b) Высказываю всё эмоционально, а потом жалею.", value: 2 },
            { text: "c) Обсуждаю проблему спокойно, ищу компромисс.", value: 3 },
            { text: "d) Обсуждаем проблему, формируем план действий.", value: 4 }
        ]
    },
    {
        question: "Как вы проявляете заботу о близких?",
        answers: [
            { text: "a) Редко выражаю чувства, все и так знают, что я их люблю.", value: 1 },
            { text: "b) Иногда делаю сюрпризы, но не систематически.", value: 2 },
            { text: "c) Ежедневно говорю тёплые слова, интересуюсь настроением.", value: 3 },
            { text: "d) Поддерживаю семейные традиции, вкладываю время в отношения.", value: 4 }
        ]
    },
    {
        question: "Как вы воспринимаете обязанности по дому?",
        answers: [
            { text: "a) Это не моя забота, пусть другие этим занимаются.", value: 1 },
            { text: "b) Помогаю только, если попросят.", value: 2 },
            { text: "c) Распределяем обязанности с учётом занятости.", value: 3 },
            { text: "d) У нас есть чёткий план и распределение ролей.", value: 4 }
        ]
    },
    {
        question: "Как часто вы делитесь своими чувствами?",
        answers: [
            { text: "a) Почти никогда, держу всё в себе.", value: 1 },
            { text: "b) Высказываюсь только, когда накипело.", value: 2 },
            { text: "c) Стараюсь делиться, когда чувствую, что это важно.", value: 3 },
            { text: "d) У нас принята культура диалога и открытости.", value: 4 }
        ]
    },
    {
        question: "Как решаются финансовые вопросы в семье?",
        answers: [
            { text: "a) Один решает всё, остальные не в курсе.", value: 1 },
            { text: "b) Иногда обсуждаем, но нет чёткого плана.", value: 2 },
            { text: "c) Есть общее понимание бюджета и целей.", value: 3 },
            { text: "d) Ведём семейный бюджет, анализируем траты.", value: 4 }
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
    if (score <= 10) {
        message = 'Вашей семье может не хватать открытого диалога и совместного планирования.';
    } else if (score <= 14) {
        message = 'У вас есть стремление к гармонии, но бывают трудности в коммуникации.';
    } else if (score <= 18) {
        message = 'Вы поддерживаете здоровую атмосферу, но есть куда расти.';
    } else {
        message = 'Поздравляем! У вас гармоничные и доверительные семейные отношения!';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Ваш результат: ${score} баллов. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();