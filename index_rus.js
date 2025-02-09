document.addEventListener("DOMContentLoaded", function () {
           const phrases = [
            "внутренние барьеры личностного роста",
            "семейные конфликты",
            "последствия ПТСР",
            "трудности в общении с окружающими"
];

let index = 0;
const highlightSpan = document.querySelector(".highlight");

function changeText() {
    highlightSpan.textContent = phrases[index];
    index = (index + 1) % phrases.length;
}

setInterval(changeText, 10000); // Меняет текст каждые 10 секунд