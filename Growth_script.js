const questions = [
    {
        question: "How do you feel about new opportunities (offers, ideas, projects)?",
        answers: [
            { text: "a) I find it difficult to commit to something new: too many doubts.", value: 1 },
            { text: "b) I weigh the pros and cons, often hesitate and delay making a decision.", value: 2 },
            { text: "c) I usually make decisions fairly quickly, especially if I see personal development benefits.", value: 3 },
            { text: "d) I enthusiastically seize the opportunity and figure out the details along the way.", value: 4 }
        ]
    },
    {
        question: "How do you react when things don't go as planned?",
        answers: [
            { text: "a) I get upset and tend to give up on what I started.", value: 1 },
            { text: "b) I get angry at myself or others, then dwell on the situation for a long time.", value: 2 },
            { text: "c) I try to figure out how to adjust the plan and steer the situation.", value: 3 },
            { text: "d) I see failures as experience and motivate myself with the phrase: 'Great, now I know how to do it better.'", value: 4 }
        ]
    },
    {
        question: "How open are you to learning new skills?",
        answers: [
            { text: "a) I don't have the time or energy for additional learning — I have enough on my plate.", value: 1 },
            { text: "b) It's interesting, but I often postpone courses and books for later.", value: 2 },
            { text: "c) I try to take online courses and read self-development books when I have the time and inspiration.", value: 3 },
            { text: "d) I'm constantly learning — I enroll in courses, listen to podcasts, read articles, and practice what I've learned.", value: 4 }
        ]
    },
    {
        question: "How do you define your goals?",
        answers: [
            { text: "a) I live 'as it comes', I don't like making plans.", value: 1 },
            { text: "b) I have a few goals in mind, but they are not very specific.", value: 2 },
            { text: "c) I like setting specific goals for the year and breaking them down into smaller tasks.", value: 3 },
            { text: "d) I have a big vision (goals for 5-10 years) and a detailed plan on how to move toward them.", value: 4 }
        ]
    },
    {
        question: "How do you feel about criticism from others?",
        answers: [
            { text: "a) I don't even like to think about being criticized.", value: 1 },
            { text: "b) Criticism bothers me, but if it's constructive, I try to learn from it.", value: 2 },
            { text: "c) I calmly analyze why the criticism came up and look for ways to fix or improve my work.", value: 3 },
            { text: "d) I'm grateful for any criticism as it helps me grow and see my blind spots.", value: 4 }
        ]
    },
    {
        question: "What format of self-development do you prefer?",
        answers: [
            { text: "a) None. I don't have resources for these 'trendy practices'.", value: 1 },
            { text: "b) I like inspiring videos or articles, but I rarely apply the advice in practice.", value: 2 },
            { text: "c) Short, but regular formats work for me (daily micro-practices, 15-minute coaching).", value: 3 },
            { text: "d) I use a wide range: I read, listen, practice, keep a journal, and attend workshops.", value: 4 }
        ]
    },
    {
        question: "What motivates you the most?",
        answers: [
            { text: "a) The fear of being 'left behind' or falling behind others.", value: 1 },
            { text: "b) The desire for recognition from people important to me.", value: 2 },
            { text: "c) The understanding that self-development will open new opportunities and perspectives.", value: 3 },
            { text: "d) The inner excitement of learning and the desire to maximize my potential.", value: 4 }
        ]
    },
    {
        question: "How do you react to other people's successes (on social media, at work, etc.)?",
        answers: [
            { text: "a) I feel envy and discouragement because I can't achieve that.", value: 1 },
            { text: "b) I think it's just luck or connections.", value: 2 },
            { text: "c) I get inspired by the example and ask myself: 'What can I apply from this in my own life?'.", value: 3 },
            { text: "d) I gladly congratulate them and adopt any tips that helped them grow.", value: 4 }
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
    if (score >= 8 && score <= 14) {
        message = 'Your desire for self-development is not yet formed or is constantly facing barriers. Start with small steps!';
    } else if (score >= 15 && score <= 23) {
        message = 'You are already interested in self-development, but often stop halfway. Try a more systematic approach.';
    } else if (score >= 24 && score <= 28) {
        message = 'You have a good level of awareness and a desire for growth. You regularly seek new information and try methods.';
    } else if (score >= 29 && score <= 32) {
        message = 'Congratulations! You are already a "lifelong learner" and actively seek new experiences. Excellent motivation and development!';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Your result: ${score} points. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();