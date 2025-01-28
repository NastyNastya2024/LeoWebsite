        const questions = [
            {
                question: "1. Какое утро для вас самое характерное?",
                answers: [
                    { text: "a) Просыпаюсь с тяжёлой головой и в настроении «не хочу видеть этот мир».", value: 1 },
                    { text: "b) Встаю, но ощущаю лёгкую тревогу: «Успею ли я сегодня всё, что запланировал(а)?».", value: 2 },
                    { text: "c) Начинаю день с планирования и короткой зарядки — это помогает настроиться.", value: 3 },
                    { text: "d) Просыпаюсь довольно бодрым(ой) и радуюсь новому дню.", value: 4 }
                ]
            },
            {
                question: "2. Что вы делаете, когда понимаете, что не успеваете в срок с важной задачей?",
                answers: [
                    { text: "a) Закрываюсь от всего, откладываю задачу и начинаю себя корить.", value: 1 },
                    { text: "b) Паникую и хаотично пытаюсь сделать всё сразу.", value: 2 },
                    { text: "c) Прошу коллег или друзей о помощи.", value: 3 },
                    { text: "d) Принимаю ситуацию, переношу сроки (если возможно) и делегирую часть работы.", value: 4 }
                ]
            },
            {
                question: "8. Когда вы чувствуете, что буквально «на грани», то…",
                answers: [
                    { text: "a) Срываюсь на близких или коллегах.", value: 1 },
                    { text: "b) Замыкаюсь в себе и стараюсь никому не показывать своё состояние.", value: 2 },
                    { text: "c) Понимаю, что это сигнал — пора брать паузу или обращаться за поддержкой.", value: 3 },
                    { text: "d) У меня есть список техник самопомощи (дыхательные упражнения, любимые хобби), которые быстро приводят меня в норму.", value: 4 }
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
            if (score >= 8 && score <= 14) {
                message = 'Вы, вероятно, находитесь в состоянии глубокого стресса или даже близки к выгоранию. Важно срочно обратить на себя внимание и начать принимать меры.';
            } else if (score >= 15 && score <= 23) {
                message = 'Стресс присутствует, и он уже влияет на вашу повседневную жизнь. Но вы готовы искать способы решить её.';
            } else if (score >= 24 && score <= 28) {
                message = 'У вас уже есть неплохие навыки управления стрессом и планирования, но всегда есть пространство для улучшения!';
            } else if (score >= 29 && score <= 32) {
                message = 'Поздравляем! Вы действительно умеете заботиться о себе.';
            }

            quizDiv.style.display = 'none';
            resultDiv.textContent = `Ваш результат: ${score} баллов. ${message}`;
            resultDiv.style.display = 'block';
        }

        loadQuestion();