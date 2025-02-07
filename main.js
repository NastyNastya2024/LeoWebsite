document.addEventListener("DOMContentLoaded", function () {
            const phrases = [
                "internal barriers to personal growth",
                "family conflicts",
                "PTSD consequences",
                "difficulties in communication with others"
            ];

            let index = 0;
            const highlightSpan = document.querySelector(".highlight");

            function changeText() {
                highlightSpan.textContent = phrases[index];
                index = (index + 1) % phrases.length;
            }

            setInterval(changeText, 4000); // Меняет текст каждые 3 секунды
        });

