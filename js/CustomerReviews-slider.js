
const sliderCR = document.getElementById("customerReviews__slider");
const slidesCR = document.querySelectorAll(".customerReviews__slide__content");
const bottomCR = document.querySelector(".customerReviews__slider__bottom");

let currentSlideIndexCR = 0;
const paginationCirclesCR = [];
const sliderWidthCR = document.getElementById('customerReviews__frame').clientWidth;

// Создать точку пагинации
function createPaginationCircleCR() {
    const divCR = document.createElement("div");
    divCR.className = "pagination-circle";
    bottomCR.appendChild(divCR);
    paginationCirclesCR.push(divCR);
}

// Добавить точки пагинации
function addPaginationCR() {
    slidesCR.forEach(createPaginationCircleCR);
    paginationCirclesCR[0].classList.add("active"); // Первая точка активна
    paginationCirclesCR.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlideCR(index));
    });
}

// Добавить активный класс текущей точке
function addActiveClassCR() {
    paginationCirclesCR[currentSlideIndexCR].classList.add("active");
}

// Удалить активный класс у предыдущей точки
function removeActiveClassCR() {
    paginationCirclesCR[currentSlideIndexCR].classList.remove("active");
}

// Показать текущий слайд
function showSlideCR() {
    sliderCR.style.transform = `translateX(-${currentSlideIndexCR * sliderWidthCR}px)`;
}

// Изменить слайд при клике на точку
function changeSlideCR(slideIndex) {
    removeActiveClassCR(); // Удалить активный класс у предыдущей точки
    currentSlideIndexCR = slideIndex; // Обновить индекс текущего слайда
    addActiveClassCR(); // Добавить активный класс новой точке
    showSlideCR(); // Прокрутить слайдер
}

// Добавить точки пагинации
addPaginationCR();