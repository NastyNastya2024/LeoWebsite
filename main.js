document.addEventListener("DOMContentLoaded", function () {
        let currentImageIndex = 0;
        const images = [
            'mockup/123.png',  // Первый путь к изображению
            'mockup/124.png',  // Второй путь к изображению
            'mockup/125.png'   // Третий путь к изображению
        ];

        const phoneImage = document.getElementById('phoneImage');

        // Функция для переключения на следующее изображение
        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;  // Циклично
            phoneImage.src = images[currentImageIndex];  // Обновляем источник изображения
        }

        // Функция для переключения на предыдущее изображение
        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;  // Циклично
            phoneImage.src = images[currentImageIndex];  // Обновляем источник изображения
        }

        // Привязываем функции к кнопкам
        const nextButton = document.getElementById('nextButton');  // Кнопка "следующее"
        const prevButton = document.getElementById('prevButton');  // Кнопка "предыдущее"

        nextButton.addEventListener('click', nextImage);  // При клике на кнопку "следующее" переключаем изображение
        prevButton.addEventListener('click', prevImage);  // При клике на кнопку "предыдущее" переключаем изображение
    });