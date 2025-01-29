        const questions = [
    {
        question: "Как часто ты чувствуешь себя одиноко?",
        answers: [
            { text: "a) Почти всегда. Мне кажется, что никто меня не понимает.", value: 1 },
            { text: "b) Иногда, особенно когда нет рядом близких людей.", value: 2 },
            { text: "c) Редко, но бывает, что мне не хватает общения.", value: 3 },
            { text: "d) Очень редко, я окружён(а) людьми, с которыми мне комфортно.", value: 4 }
        ]
    },
    {
        question: "Как ты реагируешь, когда встречаешь новых людей?",
        answers: [
            { text: "a) Я избегаю общения и стараюсь не заводить новых контактов.", value: 1 },
            { text: "b) Мне сложно начать разговор, но я стараюсь.", value: 2 },
            { text: "c) Я открыто общаюсь, но не всегда чувствую связь с новыми людьми.", value: 3 },
            { text: "d) Мне легко находить общий язык и строить отношения.", value: 4 }
        ]
    },
    {
        question: "Как ты оцениваешь свои отношения с близкими людьми?",
        answers: [
            { text: "a) У меня нет близких людей, с которыми я могу поделиться своими мыслями и переживаниями.", value: 1 },
            { text: "b) Я общаюсь с несколькими близкими, но в целом чувствую дистанцию.", value: 2 },
            { text: "c) Я ценю своих близких, но часто ощущаю, что чего-то не хватает.", value: 3 },
            { text: "d) Мои отношения с близкими очень крепкие и гармоничные.", value: 4 }
        ]
    },
    {
        question: "Как часто ты ищешь возможность для общения или встреч с другими людьми?",
        answers: [
            { text: "a) Почти никогда, мне не интересно общаться.", value: 1 },
            { text: "b) Редко, но иногда мне хочется провести время с кем-то.", value: 2 },
            { text: "c) Иногда я активно ищу общения, но бывает трудно найти подходящих людей.", value: 3 },
            { text: "d) Я часто нахожу возможность общаться и легко нахожу новых людей.", value: 4 }
        ]
    },
    {
        question: "Как ты оцениваешь свою способность открываться другим людям?",
        answers: [
            { text: "a) Я почти никогда не делюсь личными переживаниями и мыслями.", value: 1 },
            { text: "b) Иногда я открываюсь, но часто чувствую себя уязвимым.", value: 2 },
            { text: "c) Я могу быть откровенным, но боюсь, что меня не поймут.", value: 3 },
            { text: "d) Мне несложно открыться другим людям и поделиться личным.", value: 4 }
        ]
    },
    {
        question: "Как ты относишься к одиночеству?",
        answers: [
            { text: "a) Я избегаю одиночества любой ценой.", value: 1 },
            { text: "b) Я не люблю оставаться один, но иногда могу пережить это.", value: 2 },
            { text: "c) Одиночество меня не пугает, я часто нахожу время для себя.", value: 3 },
            { text: "d) Мне комфортно быть наедине с собой и наслаждаться этим.", value: 4 }
        ]
    },
    {
        question: "Как ты воспринимаешь свои возможности для построения отношений?",
        answers: [
            { text: "a) Мне кажется, что я не могу построить крепкие отношения.", value: 1 },
            { text: "b) Я думаю, что отношения возможны, но часто мне не хватает уверенности.", value: 2 },
            { text: "c) Я уверен(а), что могу построить отношения, но иногда это сложно.", value: 3 },
            { text: "d) Я уверен(а), что строю здоровые и гармоничные отношения.", value: 4 }
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
                <button id="nextButton">Далее</button>
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
        message = 'Вам может не хватать близких контактов или уверенности в себе. Подумайте, как открыть себя для новых отношений и наладить связь с окружающими.';
    } else if (score >= 11 && score <= 14) {
        message = 'Вы немного закрыты, возможно, чувствуете себя неудобно в новых знакомствах. Это время для работы над уверенностью и открытостью к людям.';
    } else if (score >= 15 && score <= 20) {
        message = 'У вас есть хорошие социальные навыки, но бывают моменты, когда вам хочется большего. Возможно, стоит улучшить качество отношений и открыть своё сердце.';
    } else if (score >= 21 && score <= 24) {
        message = 'Вы уверены в себе и ваших отношениях с окружающими. Поддерживайте и развивайте связи с людьми, и вы будете чувствовать себя ещё более связанным с миром.';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Ваш результат: ${score} баллов. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();