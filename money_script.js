const questions = [
    {
        question: "Как вы относитесь к управлению личными финансами?",
        answers: [
            { text: "a) Я не занимаюсь планированием и часто не знаю, куда уходит деньги.", value: 1 },
            { text: "b) Я иногда составляю бюджет, но не всегда его придерживаюсь.", value: 2 },
            { text: "c) Я веду бюджет, но часто отклоняюсь от него.", value: 3 },
            { text: "d) Я всегда контролирую свои расходы и регулярно планирую финансы.", value: 4 }
        ]
    },
    {
        question: "Как вы воспринимаете возможность инвестировать деньги?",
        answers: [
            { text: "a) Я боюсь инвестировать и избегаю любых рисков.", value: 1 },
            { text: "b) Я не уверен(а), стоит ли инвестировать, но иногда думаю об этом.", value: 2 },
            { text: "c) Я немного инвестирую, но пока не чувствую себя уверенно в этом.", value: 3 },
            { text: "d) Я активно инвестирую и считаю это важной частью своей финансовой стратегии.", value: 4 }
        ]
    },
    {
        question: "Как часто вы откладываете деньги на будущее?",
        answers: [
            { text: "a) Я не откладываю деньги вообще.", value: 1 },
            { text: "b) Иногда откладываю, но это не всегда стабильно.", value: 2 },
            { text: "c) Я откладываю деньги регулярно, но не всегда достаточные суммы.", value: 3 },
            { text: "d) Я всегда откладываю на будущее и регулярно накапливаю сбережения.", value: 4 }
        ]
    },
    {
        question: "Как вы реагируете, если сталкиваетесь с финансовыми трудностями?",
        answers: [
            { text: "a) Я паникую и не знаю, что делать.", value: 1 },
            { text: "b) Я пытаюсь решить проблему, но часто чувствую беспокойство.", value: 2 },
            { text: "c) Я ищу способы решения и пытаюсь справиться с трудностями.", value: 3 },
            { text: "d) Я уверенно принимаю меры и не позволяю финансовым трудностям выбить меня из колеи.", value: 4 }
        ]
    },
    {
        question: "Как вы относитесь к идее получения дополнительного дохода?",
        answers: [
            { text: "a) Я не думаю о дополнительных источниках дохода.", value: 1 },
            { text: "b) Иногда думаю о дополнительных возможностях, но не предпринимаю шагов.", value: 2 },
            { text: "c) Я подумываю о дополнительных источниках дохода и рассматриваю варианты.", value: 3 },
            { text: "d) Я активно ищу возможности для увеличения дохода.", value: 4 }
        ]
    },
    {
        question: "Как часто вы обучаетесь финансовым стратегиям и планированию?",
        answers: [
            { text: "a) Я не интересуюсь вопросами финансов и не обучаюсь этому.", value: 1 },
            { text: "b) Иногда читаю о финансах, но не всегда применяю на практике.", value: 2 },
            { text: "c) Я стараюсь обучаться финансовым стратегиям и внедрять их в свою жизнь.", value: 3 },
            { text: "d) Я регулярно изучаю финансовые стратегии и активно применяю их.", value: 4 }
        ]
    },
    {
        question: "Как вы оцениваете свою финансовую независимость?",
        answers: [
            { text: "a) Я полностью зависим(а) от заработка и не имею сбережений.", value: 1 },
            { text: "b) Я завишу от зарплаты, но имею небольшие сбережения.", value: 2 },
            { text: "c) Я независим(а) в некоторой степени и имею стабильные источники дохода.", value: 3 },
            { text: "d) Я финансово независим(а) и имею несколько источников дохода.", value: 4 }
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
    if (score >= 7 && score <= 10) {
        message = 'Вам стоит уделить больше внимания управлению финансами. Начните с простых шагов по планированию и сбережению, чтобы укрепить свою финансовую стабильность.';
    } else if (score >= 11 && score <= 14) {
        message = 'Вы на верном пути, но вам нужно развивать уверенность в управлении финансами и инвестировании. Работайте над долгосрочными финансовыми целями.';
    } else if (score >= 15 && score <= 20) {
        message = 'Вы обладаете хорошими финансовыми навыками, но есть потенциал для улучшения. Постоянно учитесь и расширяйте свои знания в этой области.';
    } else if (score >= 21 && score <= 24) {
        message = 'Отлично! Вы готовы к финансовому успеху и применяете грамотные стратегии. Продолжайте развивать финансовую грамотность и создавайте более масштабные планы.';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Ваш результат: ${score} баллов. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();
