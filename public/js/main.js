


// Display current year in footer
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;


//Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('shown');
        }
    });
});

const hiddenElements = document.querySelectorAll('.not-shown');
hiddenElements.forEach((el) => observer.observe(el));


// else {
//     entry.target.classList.remove('shown');
// }