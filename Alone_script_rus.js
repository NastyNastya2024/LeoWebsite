 const questions = [
    {
        question: "Как часто вы чувствуете себя одиноким?",
        answers: [
            { text: "a) Почти всегда. Ощущение, что никто меня не понимает.", value: 1 },
            { text: "b) Иногда, особенно когда рядом нет близких людей.", value: 2 },
            { text: "c) Редко, но бывают моменты, когда мне не хватает общения.", value: 3 },
            { text: "d) Очень редко, я окружён людьми, с которыми мне комфортно.", value: 4 }
        ]
    },
    {
        question: "Как вы реагируете при знакомстве с новыми людьми?",
        answers: [
            { text: "a) Я избегаю общения и стараюсь не заводить новых знакомств.", value: 1 },
            { text: "b) Мне сложно начать разговор, но я стараюсь.", value: 2 },
            { text: "c) Я общаюсь открыто, но не всегда чувствую связь с новыми людьми.", value: 3 },
            { text: "d) Мне легко находить общий язык и строить отношения.", value: 4 }
        ]
    },
    {
        question: "Как вы оцениваете свои отношения с близкими людьми?",
        answers: [
            { text: "a) У меня нет близких людей, с которыми я мог бы поделиться мыслями и чувствами.", value: 1 },
            { text: "b) У меня есть несколько близких людей, но я всё равно чувствую дистанцию.", value: 2 },
            { text: "c) Я ценю своих близких, но часто ощущаю, что чего-то не хватает.", value: 3 },
            { text: "d) Мои отношения с близкими очень крепкие и гармоничные.", value: 4 }
        ]
    },
    {
        question: "Как часто вы ищете возможности для общения или встреч с другими?",
        answers: [
            { text: "a) Почти никогда, мне неинтересно общение.", value: 1 },
            { text: "b) Редко, но иногда хочется провести время с кем-то.", value: 2 },
            { text: "c) Иногда активно ищу общения, но сложно найти подходящих людей.", value: 3 },
            { text: "d) Я часто нахожу возможности для общения и легко знакомлюсь с новыми людьми.", value: 4 }
        ]
    },
    {
        question: "Как вы оцениваете свою способность открываться другим людям?",
        answers: [
            { text: "a) Я почти никогда не делюсь личными чувствами и мыслями.", value: 1 },
            { text: "b) Иногда открываюсь, но часто чувствую себя уязвимым.", value: 2 },
            { text: "c) Я могу быть честным, но боюсь, что меня не поймут.", value: 3 },
            { text: "d) Мне легко открываться людям и делиться личным.", value: 4 }
        ]
    },
    {
        question: "Как вы относитесь к одиночеству?",
        answers: [
            { text: "a) Я избегаю одиночества любой ценой.", value: 1 },
            { text: "b) Мне не нравится быть одному, но иногда я справляюсь.", value: 2 },
            { text: "c) Я не боюсь одиночества, часто нахожу время для себя.", value: 3 },
            { text: "d) Мне комфортно быть наедине с собой, я получаю от этого удовольствие.", value: 4 }
        ]
    },
    {
        question: "Как вы воспринимаете свою способность строить отношения?",
        answers: [
            { text: "a) Мне кажется, что я не могу построить крепкие отношения.", value: 1 },
            { text: "b) Я думаю, что отношения возможны, но мне часто не хватает уверенности.", value: 2 },
            { text: "c) Я уверен, что могу строить отношения, но иногда это сложно.", value: 3 },
            { text: "d) Я уверен, что строю здоровые и гармоничные отношения.", value: 4 }
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
        message = 'Возможно, вам не хватает близких связей или уверенности в себе. Подумайте, как можно открыться новым отношениям и наладить контакт с окружающими.';
    } else if (score >= 11 && score <= 14) {
        message = 'Вы несколько замкнуты и можете чувствовать себя некомфортно в новых знакомствах. Это хорошее время для работы над уверенностью в себе и открытостью.';
    } else if (score >= 15 && score <= 20) {
        message = 'У вас хорошие социальные навыки, но временами вам хочется большего. Возможно, стоит улучшить качество отношений и быть более открытым.';
    } else if (score >= 21 && score <= 24) {
        message = 'Вы уверены в себе и своих отношениях с окружающими. Продолжайте развивать свои связи, и вы будете чувствовать себя ещё более связанным с миром.';
    }

    quizDiv.style.display = 'none';
    resultDiv.textContent = `Ваш результат: ${score} баллов. ${message}`;
    resultDiv.style.display = 'block';
}

loadQuestion();