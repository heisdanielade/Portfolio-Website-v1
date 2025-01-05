// Display current year in footer
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

//Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("shown");
    }
  });
});

const hiddenElements = document.querySelectorAll(".not-shown");
hiddenElements.forEach((el) => observer.observe(el));

// // Page loader animation
// window.onload = function () {
//   // Set a timeout to hide the loader after 3 seconds
//   setTimeout(function () {
//     document.getElementById("page-loader").style.opacity = "0";
//     document.getElementById("page-loader").style.visibility = "hidden";
//   }, 1450); // 1450
// };

const greetings = [
    "Hello",
    "Hello",     // English
    "Cześć",     // Polish
    "안녕하세요",    // Korean
    "Привіт",    // Ukrainian
    "Bonjour",   // French
    "你好",        // Chinese
  ];
  
  let index = 0;
  
  function changeGreeting() {
    const greetingElement = document.querySelector(".greeting");
  
    // Slide out current greeting
    greetingElement.style.transform = "translateY(-100%)";
  
    // Wait for animation to finish, then update text and reset position
    setTimeout(() => {
      greetingElement.textContent = greetings[index];
      greetingElement.style.transform = "translateY(100%)";
      setTimeout(() => {
        greetingElement.style.transform = "translateY(0)";
      }, 50); // Small delay for smooth effect
    }, 300);
  
    index = (index + 1) % greetings.length; // Loop to the start
  }
  
  setInterval(changeGreeting, 700);
  
  setTimeout(() => {
    document.getElementById("page-loader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("page-loader").style.display = "none";
    }, 600);
  }, 3500);
  
