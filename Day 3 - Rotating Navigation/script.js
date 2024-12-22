const open = document.getElementById('open');
const close = document.getElementById('close');
const slide_open = document.getElementById('slide-open');
const slide_close = document.getElementById('slide-close');
const container = document.querySelector('.container');
const circle_container = document.querySelector('.circle-container');
const nav_container = document.querySelector('.nav-container');


open.addEventListener('click', () => {
    container.classList.add('show-nav');
    nav_container.classList.add('hidden');
})
close.addEventListener('click', () => {
    container.classList.remove('show-nav');
    nav_container.classList.remove('hidden');
})
slide_open.addEventListener('click', () => {
    container.classList.add('show-slide-nav');
    circle_container.classList.add('hidden');
})
slide_close.addEventListener('click', () => {
    container.classList.remove('show-slide-nav');
    circle_container.classList.remove('hidden');

})