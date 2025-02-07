const questions = [
    {
        question: "How do you feel about managing personal finances?",
        answers: [
            { text: "a) I don't do any planning and often don't know where my money is going.", value: 1 },
            { text: "b) I sometimes create a budget, but I don't always stick to it.", value: 2 },
            { text: "c) I keep a budget, but often deviate from it.", value: 3 },
            { text: "d) I always control my expenses and regularly plan my finances.", value: 4 }
        ]
    },
    {
        question: "How do you perceive the opportunity to invest money?",
        answers: [
            { text: "a) I'm afraid to invest and avoid any risks.", value: 1 },
            { text: "b) I'm not sure if I should invest, but I sometimes think about it.", value: 2 },
            { text: "c) I invest a little, but I don't feel confident about it yet.", value: 3 },
            { text: "d) I actively invest and consider it an important part of my financial strategy.", value: 4 }
        ]
    },
    {
        question: "How often do you save money for the future?",
        answers: [
            { text: "a) I don't save money at all.", value: 1 },
            { text: "b) I save sometimes, but it's not always consistent.", value: 2 },
            { text: "c) I save regularly, but not always sufficient amounts.", value: 3 },
            { text: "d) I always save for the future and regularly accumulate savings.", value: 4 }
        ]
    },
    {
        question: "How do you react when you face financial difficulties?",
        answers: [
            { text: "a) I panic and don't know what to do.", value: 1 },
            { text: "b) I try to solve the problem, but I often feel anxious.", value: 2 },
            { text: "c) I look for ways to solve it and try to cope with the difficulties.", value: 3 },
            { text: "d) I confidently take action and don't let financial difficulties throw me off track.", value: 4 }
        ]
    },
    {
        question: "How do you feel about the idea of earning additional income?",
        answers: [
            { text: "a) I don't think about additional sources of income.", value: 1 },
            { text: "b) Sometimes I think about extra opportunities, but I don't take action.", value: 2 },
            { text: "c) I consider additional income sources and look at options.", value: 3 },
            { text: "d) I actively seek opportunities to increase my income.", value: 4 }
        ]
    },
    {
        question: "How often do you learn about financial strategies and planning?",
        answers: [
            { text: "a) I'm not interested in finances and don't learn about it.", value: 1 },
            { text: "b) I sometimes read about finances, but I don't always apply it in practice.", value: 2 },
            { text: "c) I try to learn financial strategies and implement them in my life.", value: 3 },
            { text: "d) I regularly study financial strategies and actively apply them.", value: 4 }
        ]
    },
    {
        question: "How would you rate your financial independence?",
        answers: [
            { text: "a) I'm completely dependent on my income and have no savings.", value: 1 },
            { text: "b) I depend on my salary, but I have some savings.", value: 2 },
            { text: "c) I'm somewhat independent and have stable income sources.", value: 3 },
            { text: "d) I'm financially independent and have multiple income sources.", value: 4 }
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
                <button id="nextButton">Next</button>
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
        alert('Please select an answer before continuing.');
        return;
    }
    score += parseInt(selectedAnswer.value);
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    let message = '';
    if (score >= 7 && score <= 10) {
        message = 'You should pay more attention to managing your finances. Start with simple steps for planning and saving to strengthen your financial stability.';
    } else if (score >= 11 && score <= 14) {
        message = 'You are on the right track, but you need to develop more confidence in managing finances and investing. Work on long-term financial goals.';
    } else if (score >= 15 && score <= 20) {
        message = 'You have good financial skills, but there is room for improvement. Keep learning and expanding your knowledge in this field.';
    } else if (score >= 21 && score <= 24) {
        message = 'Excellent! You are ready for financial success and applying sound strategies. Continue developing your financial literacy and create more extensive plans.';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Your result: ${score} points. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();