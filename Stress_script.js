const questions = [
    {
        question: "What type of morning is most typical for you?",
        answers: [
            { text: "a) I wake up with a heavy head and a mood of 'I don't want to see this world.'", value: 1 },
            { text: "b) I get up but feel slight anxiety: 'Will I be able to do everything I planned today?'", value: 2 },
            { text: "c) I start the day with planning and a short workout — it helps me get in the right mindset.", value: 3 },
            { text: "d) I wake up fairly energetic and look forward to the new day.", value: 4 }
        ]
    },
    {
        question: "What do you do when you realize you're not going to finish an important task on time?",
        answers: [
            { text: "a) I shut myself off from everything, postpone the task, and start blaming myself.", value: 1 },
            { text: "b) I panic and try to do everything at once in a chaotic way.", value: 2 },
            { text: "c) I ask colleagues or friends for help.", value: 3 },
            { text: "d) I accept the situation, extend the deadlines (if possible), and delegate part of the work.", value: 4 }
        ]
    },
    {
        question: "How often do you feel like your fatigue is 'insurmountable'?",
        answers: [
            { text: "a) Almost every day. I feel like I'm on the edge.", value: 1 },
            { text: "b) Several times a week, especially towards the end of the workday.", value: 2 },
            { text: "c) It happens, but I can recover over the weekends or during vacations.", value: 3 },
            { text: "d) Very rarely — I try to reset on time.", value: 4 }
        ]
    },
    {
        question: "How do you react to criticism from your boss or a client?",
        answers: [
            { text: "a) I get angry at myself and everyone around me, feeling it's unfair.", value: 1 },
            { text: "b) I close myself off and spend a long time thinking about what went wrong.", value: 2 },
            { text: "c) I analyze the feedback: what specific steps can I take to improve?", value: 3 },
            { text: "d) I accept it calmly and ask clarifying questions to understand exactly what needs to be changed.", value: 4 }
        ]
    },
    {
        question: "How do you usually recover after a hard workday?",
        answers: [
            { text: "a) I scroll through social media until late at night, falling asleep with my phone in hand.", value: 1 },
            { text: "b) I try to go to bed earlier, but often replay work situations in my mind.", value: 2 },
            { text: "c) I take a walk, exercise, or read something enjoyable — it distracts my thoughts.", value: 3 },
            { text: "d) I practice meditation/breathing exercises or keep a gratitude journal.", value: 4 }
        ]
    },
    {
        question: "What do you do when you can't solve a problem and deadlines are tight?",
        answers: [
            { text: "a) I disconnect from work (watch movies, play games) to stop thinking about the task.", value: 2 },
            { text: "b) I frantically try to find a solution, ignoring my exhaustion.", value: 1 },
            { text: "c) I break the task into smaller parts and figure out where to start.", value: 3 },
            { text: "d) I bring in the team or an expert — brainstorming together often leads to the best results.", value: 4 }
        ]
    },
    {
        question: "You've been invited to an important event, but you're feeling drained. What will you do?",
        answers: [
            { text: "a) I'll agree, grit my teeth, and then spend the whole night regretting that I wasted my time and energy.", value: 1 },
            { text: "b) I'll attend, but in a half-dazed state: 'Maybe I'll get through it.'", value: 2 },
            { text: "c) I'll decline, explaining that I need rest or suggest rescheduling the meeting.", value: 3 },
            { text: "d) I'll prepare in advance (short nap, light snack, mindset) to show up in better form.", value: 4 }
        ]
    },
    {
        question: "When you feel you're literally 'on the edge,' you...",
        answers: [
            { text: "a) Snap at family or colleagues.", value: 1 },
            { text: "b) Shut myself off and try not to show anyone how I'm feeling.", value: 2 },
            { text: "c) I realize it's a sign — it's time to take a break or ask for support.", value: 3 },
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
        message = 'You are likely in a state of deep stress or even close to burnout.';
    } else if (score <= 23) {
        message = 'Stress is present, and it's already affecting your daily life.';
    } else if (score <= 28) {
        message = 'You have good stress management and planning skills.';
    } else {
        message = 'Congratulations! You seem to truly know how to take care of yourself.';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Your result: ${score} points. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();