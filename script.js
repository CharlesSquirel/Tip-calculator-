const resetButton = document.querySelector(".calc-card__reset-btn");
const inputs = document.querySelectorAll("input[type=\"text\"]");
const personInput = document.getElementById("person");
const personWarning = document.querySelector(".calc-card__person-warning");

// RESET
const reset = () => {inputs.forEach(e => e.value = "")};
document.addEventListener("onload", reset);
resetButton.addEventListener("click", reset);


