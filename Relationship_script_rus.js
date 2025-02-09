const questions = [
    {
        question: "Как вы обычно решаете разногласия в семье?",
        answers: [
            { text: "a) Стараюсь избегать конфликтов и просто жду, когда всё само уладится.", value: 1 },
            { text: "b) Выражаю всё эмоционально, а потом жалею об этом.", value: 2 },
            { text: "c) Спокойно обсуждаю проблему и ищу компромисс.", value: 3 },
            { text: "d) Мы обсуждаем вопрос и составляем план действий.", value: 4 }
        ]
    },
    {
        question: "Как вы проявляете заботу о близких?",
        answers: [
            { text: "a) Редко выражаю свои чувства, ведь и так понятно, что я их люблю.", value: 1 },
            { text: "b) Иногда делаю сюрпризы, но не регулярно.", value: 2 },
            { text: "c) Каждый день говорю добрые слова и интересуюсь их настроением.", value: 3 },
            { text: "d) Поддерживаю семейные традиции и уделяю время отношениям.", value: 4 }
        ]
    },
    {
        question: "Как вы относитесь к бытовым обязанностям?",
        answers: [
            { text: "a) Это не моя забота, пусть этим занимаются другие.", value: 1 },
            { text: "b) Помогаю только если меня попросят.", value: 2 },
            { text: "c) Мы распределяем обязанности с учетом занятости каждого.", value: 3 },
            { text: "d) У нас есть четкий план и распределение ролей.", value: 4 }
        ]
    },
    {
        question: "Как часто вы делитесь своими чувствами?",
        answers: [
            { text: "a) Почти никогда, держу всё в себе.", value: 1 },
            { text: "b) Говорю об этом только когда уже на пределе.", value: 2 },
            { text: "c) Стараюсь делиться, если чувствую, что это важно.", value: 3 },
            { text: "d) В нашей семье принята культура диалога и открытости.", value: 4 }
        ]
    },
    {
        question: "Как в вашей семье решаются финансовые вопросы?",
        answers: [
            { text: "a) Всем занимается один человек, остальные не вовлечены.", value: 1 },
            { text: "b) Иногда обсуждаем, но четкого плана нет.", value: 2 },
            { text: "c) У нас есть общее понимание бюджета и финансовых целей.", value: 3 },
            { text: "d) Мы ведем семейный бюджет и анализируем расходы.", value: 4 }
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
        alert('Пожалуйста, выберите ответ перед тем, как продолжить.');
        return;
    }
    score += parseInt(selectedAnswer.value);
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    let message = '';
    if (score <= 10) {
        message = 'В вашей семье, возможно, не хватает открытого диалога и совместного планирования.';
    } else if (score <= 14) {
        message = 'Вы стремитесь к гармонии, но сталкиваетесь с трудностями в общении.';
    } else if (score <= 18) {
        message = 'В вашей семье здоровая атмосфера, но есть куда расти.';
    } else {
        message = 'Поздравляем! У вас гармоничные и доверительные семейные отношения!';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Ваш результат: ${score} баллов. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();