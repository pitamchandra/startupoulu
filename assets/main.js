// navbar toggle
const toggle_btn = document.querySelector('.toggle_btn');
const mobile_nav_bar = document.querySelector('.mobile_nav_bar');
const close_btn = document.querySelector('.close_btn');

toggle_btn.addEventListener('click', () => {
    mobile_nav_bar.classList.add('active');
    mobile_nav_bar.style.transition = '1s';
});
close_btn.addEventListener('click', () => {
    mobile_nav_bar.classList.remove('active');
    mobile_nav_bar.style.transition = '1s';
});