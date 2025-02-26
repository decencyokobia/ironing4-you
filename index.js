const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const closebar = document.querySelector('.closebar');
const heroBtn = document.querySelector('.hero-btn')

menuBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
})

closebar.addEventListener('click', () => {
    sidebar.classList.toggle('active')
})

heroBtn.addEventListener('click', () => {
    window.location.href = 'Forms/contactform.html';
})