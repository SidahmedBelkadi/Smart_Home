const openBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const menu = document.querySelector('.nav__items')
const items = menu.querySelectorAll('li')



/**
 * 
 * @param {string} property 
 * @param {HTMLElement} target 
 * 
 */
function changeStyleDisplay (target ,property) {
    target.style.display = property
}


openBtn.addEventListener ('click', () => {
    changeStyleDisplay(menu, 'block');
    changeStyleDisplay(openBtn, 'none');
    changeStyleDisplay(closeBtn, 'block')
})

function closeMenu () {
    changeStyleDisplay(menu, 'none');
    changeStyleDisplay(openBtn, 'block');
    changeStyleDisplay(closeBtn, 'none')
}

closeBtn.addEventListener ('click', closeMenu)

items.forEach(element => {
    element.addEventListener('click', closeMenu)
});



const faqs = document.querySelectorAll('.faq')
console.log(faqs);
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('closed');
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className == 'bi bi-plus') {
            icon.className = 'bi bi-dash'
        }else {
            icon.className = 'bi bi-plus'
        }
    })
})

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})