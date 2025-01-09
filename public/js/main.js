// Display current year in footer
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("shown");
    }else{
      entry.target.classList.remove("shown");
    }
  });
});
const hiddenElements = document.querySelectorAll(".not-shown");
hiddenElements.forEach((el) => observer.observe(el));


// Page loader: Word change animation
const words = [
  "",
  // "Hello", 
  "Cześć", 
  "Hallo",
  "привіт",
  "Pẹlẹ o",
];


let index = 0;

function changeWord() {
  const wordElement = document.querySelector(".word");
  // Slide out current word
  wordElement.style.transition = "transform 0.3s ease";
  wordElement.style.transform = "translateY(-100%)";

  setTimeout(() => {
    wordElement.textContent = words[index];
    wordElement.style.transform = "translateY(100%)";
    // Small delay before sliding in the new word
    setTimeout(() => {
      wordElement.style.transition = "transform 0.3s ease";
      wordElement.style.transform = "translateY(0)";
    }, 50);
  }, 300);
  // Increment the index, but stops the animation after the last word
  index++;
  if (index >= words.length) {
    clearInterval(wordChangeInterval); // Stop the interval once all words have been displayed
  }
}
const wordChangeInterval = setInterval(changeWord, 560);
setTimeout(() => {
  document.getElementById("page-loader").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("page-loader").style.display = "none";
  }, 600);
}, 3250);

  
// Second Page loader animation
// window.onload = function () {
//   // Set a timeout to hide the loader after 3 seconds
//   setTimeout(function () {
//     document.getElementById("page-loader").style.opacity = "0";
//     document.getElementById("page-loader").style.visibility = "hidden";
//   }, 1450); // 1450
// };
