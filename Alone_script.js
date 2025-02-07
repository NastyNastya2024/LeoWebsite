       const questions = [
    {
        question: "How often do you feel lonely?",
        answers: [
            { text: "a) Almost always. It feels like no one understands me.", value: 1 },
            { text: "b) Sometimes, especially when there are no close people around.", value: 2 },
            { text: "c) Rarely, but there are times when I miss socializing.", value: 3 },
            { text: "d) Very rarely, I am surrounded by people with whom I feel comfortable.", value: 4 }
        ]
    },
    {
        question: "How do you react when meeting new people?",
        answers: [
            { text: "a) I avoid communication and try not to make new connections.", value: 1 },
            { text: "b) It's hard for me to start a conversation, but I try.", value: 2 },
            { text: "c) I communicate openly, but don't always feel a connection with new people.", value: 3 },
            { text: "d) I find it easy to connect and build relationships.", value: 4 }
        ]
    },
    {
        question: "How do you evaluate your relationships with close people?",
        answers: [
            { text: "a) I don't have close people I can share my thoughts and feelings with.", value: 1 },
            { text: "b) I talk to a few close people, but I still feel a distance.", value: 2 },
            { text: "c) I value my close ones, but often feel like something is missing.", value: 3 },
            { text: "d) My relationships with close people are very strong and harmonious.", value: 4 }
        ]
    },
    {
        question: "How often do you look for opportunities to communicate or meet with others?",
        answers: [
            { text: "a) Almost never, I am not interested in socializing.", value: 1 },
            { text: "b) Rarely, but sometimes I want to spend time with someone.", value: 2 },
            { text: "c) Sometimes I actively look for socializing, but it's hard to find suitable people.", value: 3 },
            { text: "d) I often find opportunities to socialize and easily meet new people.", value: 4 }
        ]
    },
    {
        question: "How do you evaluate your ability to open up to others?",
        answers: [
            { text: "a) I almost never share personal feelings and thoughts.", value: 1 },
            { text: "b) Sometimes I open up, but I often feel vulnerable.", value: 2 },
            { text: "c) I can be honest, but I'm afraid people won't understand me.", value: 3 },
            { text: "d) It's easy for me to open up to others and share personal things.", value: 4 }
        ]
    },
    {
        question: "How do you feel about being alone?",
        answers: [
            { text: "a) I avoid being alone at all costs.", value: 1 },
            { text: "b) I don't like being alone, but I can handle it sometimes.", value: 2 },
            { text: "c) I am not afraid of being alone, I often find time for myself.", value: 3 },
            { text: "d) I feel comfortable being by myself and enjoy it.", value: 4 }
        ]
    },
    {
        question: "How do you perceive your ability to build relationships?",
        answers: [
            { text: "a) I feel like I can't build strong relationships.", value: 1 },
            { text: "b) I think relationships are possible, but I often lack confidence.", value: 2 },
            { text: "c) I am confident that I can build relationships, but sometimes it's difficult.", value: 3 },
            { text: "d) I am confident that I am building healthy and harmonious relationships.", value: 4 }
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
                <button id="nextButton">Next</button>
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
        message = 'You may lack close connections or confidence in yourself. Think about how to open up to new relationships and connect with those around you.';
    } else if (score >= 11 && score <= 14) {
        message = 'You are somewhat closed off and may feel uncomfortable in new encounters. This is a time to work on your confidence and openness with people.';
    } else if (score >= 15 && score <= 20) {
        message = 'You have good social skills, but there are times when you want more. Perhaps improving the quality of your relationships and opening your heart would help.';
    } else if (score >= 21 && score <= 24) {
        message = 'You are confident in yourself and your relationships with others. Keep nurturing and developing your connections with people, and you will feel even more connected to the world.';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Your result: ${score} points. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();