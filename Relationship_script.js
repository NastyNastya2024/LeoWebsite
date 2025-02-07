const questions = [
    {
        question: "How do you usually resolve disagreements in your family?",
        answers: [
            { text: "a) I try to avoid conflicts and wait it out.", value: 1 },
            { text: "b) I express everything emotionally, then regret it.", value: 2 },
            { text: "c) I discuss the problem calmly and look for a compromise.", value: 3 },
            { text: "d) We discuss the issue and create an action plan.", value: 4 }
        ]
    },
    {
        question: "How do you show care for your loved ones?",
        answers: [
            { text: "a) I rarely express my feelings, everyone knows I love them.", value: 1 },
            { text: "b) I sometimes make surprises, but not consistently.", value: 2 },
            { text: "c) I speak kind words daily and inquire about their mood.", value: 3 },
            { text: "d) I support family traditions and invest time in relationships.", value: 4 }
        ]
    },
    {
        question: "How do you perceive household duties?",
        answers: [
            { text: "a) It's not my concern, let others handle it.", value: 1 },
            { text: "b) I help only if asked.", value: 2 },
            { text: "c) We divide the duties considering everyone's availability.", value: 3 },
            { text: "d) We have a clear plan and distribution of roles.", value: 4 }
        ]
    },
    {
        question: "How often do you share your feelings?",
        answers: [
            { text: "a) Almost never, I keep everything inside.", value: 1 },
            { text: "b) I only speak up when I've had enough.", value: 2 },
            { text: "c) I try to share when I feel it's important.", value: 3 },
            { text: "d) We have a culture of dialogue and openness.", value: 4 }
        ]
    },
    {
        question: "How are financial matters handled in your family?",
        answers: [
            { text: "a) One person handles everything, the others are not involved.", value: 1 },
            { text: "b) We discuss sometimes, but there is no clear plan.", value: 2 },
            { text: "c) We have a mutual understanding of the budget and goals.", value: 3 },
            { text: "d) We keep a family budget and analyze expenses.", value: 4 }
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
    if (score <= 10) {
        message = 'Your family might be lacking open dialogue and joint planning.';
    } else if (score <= 14) {
        message = 'You have a desire for harmony, but face communication challenges.';
    } else if (score <= 18) {
        message = 'You maintain a healthy atmosphere, but there is room for growth.';
    } else {
        message = 'Congratulations! You have harmonious and trusting family relationships!';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Your result: ${score} points. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();