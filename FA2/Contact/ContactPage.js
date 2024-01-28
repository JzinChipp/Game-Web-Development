// Get the registration form element from the DOM
const form = document.getElementById("registration-form");
const submitButton = form.querySelector("button") ;

// Get the question input elementsfrom DOM by its ID
const questionInput = document.getElementById("question");
const confirmquestionInput = document.getElementById("question here");

const checkquestions = function(){
    // Compare question input
    const questionsmatch = questionInput.value===confirmquestionInput;

    // If questions do not match then display an error
    //If question match then clear error message
    if(questionsmatch){
        confirmquestionInput.setCustomValidity("");
    }else{
        confirmquestionInput.setCustomValidity("Your question does not match");
    }
};

const addquestionInputEventListner = function(){
    // Listen for input Events on question inputs
    questionInput.addEventListener("input", checkquestions, false);
    confirmquestionInput.addEventListener("input", checkquestions, false);
};

// Form submission 
const fromSubmissionAttemped = function(){
    form.classList.add("submission-attempted");
};

const addSubmitClickEventListner = function(){
    submitButton.addEventListener("click", fromSubmissionAttemped, false);
};

addquestionInputEventListner();
addSubmitClickEventListner();

/*review*/
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach((inputField) => {
      const tableRows = inputField
        .closest("table")
        .querySelectorAll("tbody > tr");
      const headerCell = inputField.closest("th");
      const otherHeaderCells = headerCell.closest("tr").children;
      const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);
      const searchableCells = Array.from(tableRows).map(
        (row) => row.querySelectorAll("td")[columnIndex]
      );
  
      inputField.addEventListener("input", () => {
        const searchQuery = inputField.value.toLowerCase();
  
        for (const tableCell of searchableCells) {
          const row = tableCell.closest("tr");
          const value = tableCell.textContent.toLowerCase().replace(",", "");
  
          row.style.visibility = null;
  
          if (value.search(searchQuery) === -1) {
            row.style.visibility = "collapse";
          }
        }
      });
    });
  });

  
  

