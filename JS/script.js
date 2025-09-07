let firstUi = document.querySelector(".firstUi");
let firstInput = document.querySelector(".firstInput");
let firstInputBtn = document.querySelector(".firstInputBtn");
let firstUiError = document.querySelector(".firstUiError");
let secondUi = document.querySelector(".secondUi");
let secondInput = document.querySelector(".secondInput");
let secondInputBtn = document.querySelector(".secondInputBtn");
let secondUiError = document.querySelector(".secondUiError");
let secondUiHeading = document.querySelector(".secondUiHeading");
let thirdUi = document.querySelector(".thirdUi");
let thirdInput = document.querySelector(".thirdInput");
let thirdInputBtn = document.querySelector(".thirdInputBtn");
let thirdUiError = document.querySelector(".thirdUiError");
let thirdUiHeading = document.querySelector(".thirdUiHeading");

// 🆕 add picture elements
let picOne = document.querySelector(".picOne");
let picFour = document.querySelector(".picFour");

// default: hide picFour
picFour.style.display = "none";

function errorHandle(element) {
    setTimeout(() => {
        element.innerHTML = "";
    }, 2000);
}

// Player One (name input)
firstInputBtn.addEventListener("click", () => {
    let value = firstInput.value.trim();
    if (value === "") {
        firstUiError.innerHTML = "*Please Enter a Valid Name";
        errorHandle(firstUiError);
    } else {
        firstUi.style.display = "none";
        secondUi.style.display = "block";
        secondUiHeading.innerHTML = "Player One " + value + " Welcome";
    }
});

// Player One (secret number input)
secondInputBtn.addEventListener("click", () => {
    let value = Number(secondInput.value);
    if (!value) {
        secondUiError.innerHTML = "*Please Enter a Number";
        errorHandle(secondUiError);
    } else if (value > 10 || value <= 0) {
        secondUiError.innerHTML = "*Please Enter a Number Between 1 and 10";
        errorHandle(secondUiError);
    } else {
        secondUi.style.display = "none";
        thirdUi.style.display = "block";
        thirdUiHeading.innerHTML = "Player Two, Start Guessing!";
    }
});

// Player Two (guessing logic)
let count = 5;
thirdInputBtn.addEventListener("click", () => {
    let value = Number(thirdInput.value);
    if (!value) {
        thirdUiError.innerHTML = "*Please Enter a Number";
        errorHandle(thirdUiError);
    } else if (value > 10 || value <= 0) {
        thirdUiError.innerHTML = "*Please Enter a Number Between 1 and 10";
        errorHandle(thirdUiError);
    } else {
        if (secondInput.value == value) {
            thirdUiHeading.innerHTML = "🎉 Player Two Wins!";
            thirdInput.style.display = "none";
            thirdInputBtn.style.display = "none";
            picOne.style.display = "none";   // hide picOne
            picFour.style.display = "block"; // show picFour
            thirdUiError.innerHTML = "";
        } else {
            count--;
            if (count > 0) {
                thirdUiError.innerHTML = "Your chances left: " + count;
            } else {
                thirdUiHeading.innerHTML = "❌ Your chances are over - Player One Wins!";
                thirdInput.style.display = "none";
                thirdInputBtn.style.display = "none";
                picOne.style.display = "none";   // hide picOne
                picFour.style.display = "block"; // show picFour
                thirdUiError.innerHTML = "";
            }
        }
    }
});
