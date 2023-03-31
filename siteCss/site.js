const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', () => {
    console.log('test');
    menu.classList.toggle('active')
})

const allLinks = document.querySelectorAll('.item-nav');
allLinks.forEach(item => {
    item.addEventListener('click', () => {
         menu.classList.toggle('active')
    })
})