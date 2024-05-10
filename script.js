// Select all elements with class "faq-question" and store them in a variable
const faqQuestion = document.querySelectorAll(".faq-question");

// Select all elements with class "faq-answer" and store them in a variable
const faqAnswer = document.querySelectorAll(".faq-answer");

// Select all elements with class "showAnswerBtn" and store them in a variable
const showAnswerBtn = document.querySelectorAll(".showAnswerBtn");

// Log the selected elements to the console for debugging (optional)
console.log(faqQuestion, faqAnswer, showAnswerBtn);

// Loop through each question element
for (let index = 0; index < faqQuestion.length; index++) {

  // Add a click event listener to each question element
  faqQuestion[index].addEventListener("click", () => {

    // Toggle the class "showFaqAnswer" on the corresponding answer element
    faqAnswer[index].classList.toggle("showFaqAnswer");

    // Check if the class "showFaqAnswer" is now present on the answer element
    if (faqAnswer[index].classList.contains("showFaqAnswer")) {

      // If yes, change the button image to "icon-minus.svg" 
      showAnswerBtn[index].src = "./assets/images/icon-minus.svg";
      
     // Log message for debugging (optional)
       console.log("change to minus icon (answer shown)"); 
    }
    
    else {
      
      // If not, change the button image to "icon-plus.svg" 
        showAnswerBtn[index].src = "./assets/images/icon-plus.svg";
        
      // Log message for debugging (optional)
      console.log("change to plus icon (answer hidden)"); 
    }

    // Log a message for debugging (optional)
    console.log("button clicked");
  });
}
