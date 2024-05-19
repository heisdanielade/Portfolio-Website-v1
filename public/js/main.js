
// ================== SHOW MENU=====================
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// ======---- Menu Show ----======
// validate if constants exists
if (navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
// ======---- Menu Hidden ----======
// validate if contants exists
if (navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ================== SHOW MENU=====================

// ================== SHOW MENU=====================