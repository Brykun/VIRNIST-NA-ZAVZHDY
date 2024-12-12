let currentSlide = 0; // Поточний слайд
const slides = document.querySelectorAll('.slides img'); // Всі слайди
const totalSlides = slides.length; // Загальна кількість слайдів
const slidesContainer = document.querySelector('.slides'); // Контейнер для слайдів

function showSlide(index) {
    // Переміщаємо слайдер на відповідний слайд
    slidesContainer.style.transform = `translateX(-${index * 33.3333}%)`;
}

function nextSlide() {
    // Переходимо до наступного слайду
    currentSlide = (currentSlide + 1) % totalSlides; // Повертаємось до першого слайду після останнього
    showSlide(currentSlide);
}

// Запускаємо слайдер
setInterval(nextSlide, 3000); // Перемикання кожні 3 секунди
