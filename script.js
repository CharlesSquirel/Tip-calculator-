const resetButton = document.querySelector(".calc-card__reset-btn");
const inputs = document.querySelectorAll('input[type="text"]');
const personInput = document.getElementById("person");
const personWarning = document.querySelector(".calc-card__person-warning");
const billInput = document.querySelector(".calc-card__bill-input");
const totalAmount = document.querySelector(".total-number");
const tipAmount = document.querySelector(".tip-amount-number");
const tipButton5 = document.querySelector(".btn-5x");
const tipButton10 = document.querySelector(".btn-10");
const tipButton15 = document.querySelector(".btn-15");
const tipButton25 = document.querySelector(".btn-25");
const tipButton50 = document.querySelector(".btn-50");
const tipButtons = document.querySelectorAll(".btn");
const customTipButton = document.querySelector(".btn-custom");
let tip = 0;

// ERROR PEOPLE 0 MESSAGE
personInput.addEventListener("blur", () => {
  if (+personInput.value === 0) {
    personWarning.classList.remove("hidden");
  } else {
    personWarning.classList.add("hidden");
  }
});

// REMOVE DISABLED
const removeDisabledFromButton = () => {
  if (billInput.value.length > 0 && personInput.value.length > 0) {
    resetButton.classList.remove("btn-disabled");
  }
};
inputs.forEach((input) => {
  input.addEventListener("input", removeDisabledFromButton);
});

// RESET
resetButton.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });
  resetButton.classList.add("btn-disabled");
});

// Tip AMOUNT
tipButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.className.includes("btn-5x")) {
      tip = 5;
      console.log(tip);
    } else if (e.target.className.includes("btn-10")) {
      tip = 10;
      console.log(tip);
    } else if (e.target.className.includes("btn-15")) {
      tip = 15;
      console.log(tip);
    } else if (e.target.className.includes("btn-25")) {
      tip = 25;
      console.log(tip);
    } else if (e.target.className.includes("btn-50")) {
      tip = 50;
      console.log(tip);
    }
  });
});

customTipButton.addEventListener("input", () => {
    if (+customTipButton.value !== 0) {tip = (+customTipButton.value).toFixed(0)}
    else {tip = 0}
    console.log(tip);
})

// TOTAL AMOUNT
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (tip === 0) {
      +billInput.value !== 0 && +personInput.value !== 0
        ? (totalAmount.textContent =
            "$" + (billInput.value / personInput.value).toFixed(2))
        : (totalAmount.textContent = "$0.00");
    } else {
      let tipFromBill = (tip / 100) * +billInput.value;
      totalAmount.textContent =
        (+billInput.value + tipFromBill) / personInput.value;
      tipAmount.textContent = "$" + (tip / 100).toFixed(2);
    }
  });
});
