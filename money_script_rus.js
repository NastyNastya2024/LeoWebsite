const questions = [
    {
        question: "Как вы относитесь к управлению личными финансами?",
        answers: [
            { text: "a) Я не планирую финансы и часто не знаю, куда уходят мои деньги.", value: 1 },
            { text: "b) Иногда составляю бюджет, но не всегда его придерживаюсь.", value: 2 },
            { text: "c) Веду бюджет, но часто от него отклоняюсь.", value: 3 },
            { text: "d) Всегда контролирую свои расходы и регулярно планирую финансы.", value: 4 }
        ]
    },
    {
        question: "Как вы воспринимаете возможность инвестирования денег?",
        answers: [
            { text: "a) Боюсь инвестировать и избегаю любых рисков.", value: 1 },
            { text: "b) Не уверен, стоит ли инвестировать, но иногда задумываюсь об этом.", value: 2 },
            { text: "c) Немного инвестирую, но пока не чувствую уверенности.", value: 3 },
            { text: "d) Активно инвестирую и считаю это важной частью своей финансовой стратегии.", value: 4 }
        ]
    },
    {
        question: "Как часто вы откладываете деньги на будущее?",
        answers: [
            { text: "a) Вообще не откладываю.", value: 1 },
            { text: "b) Иногда откладываю, но это происходит нерегулярно.", value: 2 },
            { text: "c) Откладываю регулярно, но суммы не всегда достаточны.", value: 3 },
            { text: "d) Всегда откладываю на будущее и регулярно накапливаю сбережения.", value: 4 }
        ]
    },
    {
        question: "Как вы реагируете, когда сталкиваетесь с финансовыми трудностями?",
        answers: [
            { text: "a) Паникую и не знаю, что делать.", value: 1 },
            { text: "b) Пытаюсь решить проблему, но часто испытываю тревогу.", value: 2 },
            { text: "c) Ищу пути решения и стараюсь справиться с трудностями.", value: 3 },
            { text: "d) Уверенно действую и не позволяю финансовым трудностям выбить меня из колеи.", value: 4 }
        ]
    },
    {
        question: "Как вы относитесь к идее дополнительного заработка?",
        answers: [
            { text: "a) Я не думаю о дополнительных источниках дохода.", value: 1 },
            { text: "b) Иногда задумываюсь о дополнительных возможностях, но не предпринимаю действий.", value: 2 },
            { text: "c) Рассматриваю дополнительные источники дохода и изучаю варианты.", value: 3 },
            { text: "d) Активно ищу возможности для увеличения дохода.", value: 4 }
        ]
    },
    {
        question: "Как часто вы изучаете финансовые стратегии и планирование?",
        answers: [
            { text: "a) Мне не интересны финансы, и я их не изучаю.", value: 1 },
            { text: "b) Иногда читаю о финансах, но не всегда применяю на практике.", value: 2 },
            { text: "c) Стараюсь изучать финансовые стратегии и внедрять их в свою жизнь.", value: 3 },
            { text: "d) Регулярно изучаю финансовые стратегии и активно применяю их.", value: 4 }
        ]
    },
    {
        question: "Как бы вы оценили свою финансовую независимость?",
        answers: [
            { text: "a) Полностью завишу от своего дохода и не имею сбережений.", value: 1 },
            { text: "b) Зависим от зарплаты, но у меня есть небольшие накопления.", value: 2 },
            { text: "c) В некоторой степени независим, у меня есть стабильные источники дохода.", value: 3 },
            { text: "d) Финансово независим, имею несколько источников дохода.", value: 4 }
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
    if (score >= 7 && score <= 10) {
        message = 'Вам стоит больше внимания уделять управлению финансами. Начните с простых шагов по планированию и сбережению, чтобы укрепить свою финансовую стабильность.';
    } else if (score >= 11 && score <= 14) {
        message = 'Вы на правильном пути, но вам нужно развивать больше уверенности в управлении финансами и инвестициях. Работайте над долгосрочными финансовыми целями.';
    } else if (score >= 15 && score <= 20) {
        message = 'У вас хорошие финансовые навыки, но есть куда расти. Продолжайте изучать и расширять свои знания в этой сфере.';
    } else if (score >= 21 && score <= 24) {
        message = 'Отлично! Вы готовы к финансовому успеху и применяете грамотные стратегии. Продолжайте развивать свою финансовую грамотность и создавайте более масштабные планы.';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Ваш результат: ${score} баллов. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();