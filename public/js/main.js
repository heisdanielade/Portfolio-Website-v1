


// Display current year in footer
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;


//Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('shown');
        } else {
            entry.target.classList.remove('shown')
        }
    });
});

const hiddenElements = document.querySelectorAll('.not-shown');
hiddenElements.forEach((el) => observer.observe(el));


// Page loader animation
 window.onload = function() {
    // Set a timeout to hide the loader after 3 seconds
    setTimeout(function() {
        document.getElementById('page-loader').style.opacity = '0';
        document.getElementById('page-loader').style.visibility = 'hidden';
    }, 1200);
};