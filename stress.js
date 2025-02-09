const questions = [
    {
        question: "What kind of morning is most typical for you?",
        answers: [
            { text: "a) I wake up with a heavy head and thoughts: 'I don't want to face the world.'", value: 1 },
            { text: "b) I get up but feel slight anxiety: 'Will I manage everything I planned today?'", value: 2 },
            { text: "c) I start the day with planning and a small workout — it helps me set the tone.", value: 3 },
            { text: "d) I wake up full of energy and look forward to the new day.", value: 4 }
        ]
    },
    {
        question: "What do you do when you realize that you can't complete an important task on time?",
        answers: [
            { text: "a) I shut myself off from everything, procrastinate, and start blaming myself.", value: 1 },
            { text: "b) I panic and try to do everything at once in a chaotic way.", value: 2 },
            { text: "c) I ask for help from colleagues or friends.", value: 3 },
            { text: "d) I accept the situation, extend the deadline (if possible), and delegate part of the work.", value: 4 }
        ]
    },
    {
        question: "How often do you feel that your fatigue is 'overwhelming'?",
        answers: [
            { text: "a) Almost every day. I feel like I'm at my limit.", value: 1 },
            { text: "b) Several times a week, especially by the end of the workday.", value: 2 },
            { text: "c) It happens, but I can recover on weekends or during vacation.", value: 3 },
            { text: "d) Very rarely — I try to recharge on time.", value: 4 }
        ]
    },
    {
        question: "How do you react to criticism from your boss or a client?",
        answers: [
            { text: "a) I get angry with myself and everyone around, thinking it’s unfair.", value: 1 },
            { text: "b) I shut myself off and think about what went wrong for a long time.", value: 2 },
            { text: "c) I analyze the feedback: what specific steps can I take to improve?", value: 3 },
            { text: "d) I accept it calmly and ask clarifying questions to understand what exactly needs to be changed.", value: 4 }
        ]
    },
    {
        question: "How do you usually recover after a tough workday?",
        answers: [
            { text: "a) I scroll through social media until late at night, falling asleep with my phone in hand.", value: 1 },
            { text: "b) I try to go to bed early but often replay work moments in my head.", value: 2 },
            { text: "c) I go for a walk, exercise, or read something pleasant — it distracts my mind.", value: 3 },
            { text: "d) I practice meditation/breathing exercises or keep a gratitude journal.", value: 4 }
        ]
    },
    {
        question: "What do you do when you can't solve a problem, and the deadline is approaching?",
        answers: [
            { text: "a) I disconnect from work (watch movies, play games) to stop thinking about the task.", value: 2 },
            { text: "b) I frantically try to find a solution, ignoring my fatigue.", value: 1 },
            { text: "c) I break the task into smaller parts and figure out where to start.", value: 3 },
            { text: "d) I involve my team or an expert — a joint brainstorming session often yields better results.", value: 4 }
        ]
    },
    {
        question: "You are invited to an important event, but you feel exhausted. What will you do?",
        answers: [
            { text: "a) I'll agree, grit my teeth, and regret it all night for wasting my energy and time.", value: 1 },
            { text: "b) I'll go, but in a semi-conscious state: 'Maybe I'll survive somehow.'", value: 2 },
            { text: "c) I'll decline, explaining that I need rest, or suggest rescheduling the meeting.", value: 3 },
            { text: "d) I'll prepare in advance (short nap, light snack, mindset) to show up in better form.", value: 4 }
        ]
    },
    {
        question: "When you feel that you are literally 'at the edge', you...",
        answers: [
            { text: "a) I snap at my loved ones or colleagues.", value: 1 },
            { text: "b) I shut myself off and try not to show anyone how bad I feel.", value: 2 },
            { text: "c) I realize that this is a sign — it's time to take a break or ask for support.", value: 3 },
            { text: "d) I have a list of self-care techniques (breathing exercises, favorite hobbies) that quickly bring me back to normal.", value: 4 }
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
    if (score <= 14) {
        message = 'You are probably experiencing deep stress or are on the verge of burnout.';
    } else if (score <= 23) {
        message = 'Stress is present, and it is already affecting your daily life.';
    } else if (score <= 28) {
        message = 'You manage stress well and know how to plan.';
    } else {
        message = 'Congratulations! You really know how to take care of yourself.';
    }
    quizDiv.style.display = 'none';
    resultDiv.textContent = `Your score: ${score} points. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();