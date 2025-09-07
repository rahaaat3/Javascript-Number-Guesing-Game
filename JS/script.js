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
let picOne = document.querySelector(".picOne");
let picFour = document.querySelector(".picFour");

function errorHandle(element) {
    setTimeout(()=>{
        element.innerHTML = "";
    },2000)
}



firstInputBtn.addEventListener("click",()=>{
        let value = Number(firstInput.value) ;
        if(value){
            firstUiError.innerHTML = "*Please Enter a Valid Name"
            errorHandle(firstUiError)
        } else if (value == ""){
            firstUiError.innerHTML = "*Please Enter a Valid Name"
            errorHandle(firstUiError)
        }
          else {
            firstUi.style.display ="none"
            secondUi.style.display ="block"
            secondUiHeading.innerHTML = "Player One " + firstInput.value + " Welcome"
        }
    });

secondInputBtn.addEventListener("click",()=>{
    let value = Number(secondInput.value) ;
    if(!value){
        secondUiError.innerHTML = "*Please Enter a Number"
    } else if (value == ""){
    secondUiError.innerHTML = "*Please Fill the Input"
   
    } else if ( value > 10 || value <= 0){
        secondUiError.innerHTML = "*Please Enter a Number Between 1 and 10"
        errorHandle(firstUiError)
    }
     else {
        secondUi.style.display ="none"
        thirdUi.style.display ="block"
        thirdUiHeading.innerHTML = "Player Two"
    }
})


let count  = 5
thirdInputBtn.addEventListener("click",()=>{
    let value = Number(thirdInput.value) ;
    if(!value){
        thirdUiError.innerHTML = "*Please Enter a Number"
        errorHandle(firstUiError)
    } else if (value == ""){
        thirdUiError.innerHTML = "*Please Enter a Number"
        errorHandle(firstUiError)
    } else if (value > 10 || value <= 0){
        thirdUiError.innerHTML = "*Please Enter a Number Between 1 and 10"
        errorHandle(firstUiError)
    }
     else {
        if(secondInput.value == value){
            thirdUiHeading.innerHTML = "Player Two is Winner"
            thirdInput.style.display = "none"
            thirdInputBtn.style.display = "none"
            picOne.style.display = "none"

        } else{
            count--
            thirdUiError.innerHTML = "your chances left: " + count
            if(count == 0){
                thirdUiHeading.innerHTML = "Your chances are over \n youre loose player one win"
                thirdInput.style.display = "none"
                thirdInputBtn.style.display = "none"
                picOne.style.display = "none"
            }
        }
    }
})




let demo = "this is line break \n we are trying to learn in js"

console.log(demo)