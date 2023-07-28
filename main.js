var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elResult = elForm.querySelector(".js-result")

function multiplication(userNumber) {

  if(userNumber % 3 === 0 && userNumber % 5 === 0) {
    elResult.classList.add("fizzbuzz-text");
    elResult.classList.remove("fizzbuzz-text-fizz");
    elResult.classList.remove("fizzbuzz-text-error")
    elResult.classList.remove("fizzbuzz-text-buzz");
    return "FizzBuzz.";
  } 
  if(userNumber % 3 === 0) {
    elResult.classList.add("fizzbuzz-text-fizz");
    elResult.classList.remove("fizzbuzz-text");
    elResult.classList.remove("fizzbuzz-text-error")
    elResult.classList.remove("fizzbuzz-text-buzz");
    return "Fizz.";

  } 
  if(userNumber % 5 === 0) {
    elResult.classList.add("fizzbuzz-text-buzz");
    elResult.classList.remove("fizzbuzz-text");
    elResult.classList.remove("fizzbuzz-text-error")
    elResult.classList.remove("fizzbuzz-text-fizz");
    return "Buzz.";
  } 
  else {
    elResult.classList.add("fizzbuzz-text-error")
    elResult.classList.remove("fizzbuzz-text");
    elResult.classList.remove("fizzbuzz-text-buzz");
    elResult.classList.remove("fizzbuzz-text-fizz");
    return "Kiritilgan son 3 ga va 5 ga bo'linmaydi.";
  }
}

elForm.addEventListener("submit", function(evt){
  evt.preventDefault()
  
  var inputValue = elInput.value;

  elResult.textContent = multiplication(inputValue);

}) 


var elRandomForm = document.querySelector(".js-random-form");
var elRandomInput = elRandomForm.querySelector(".js-random-input");
var elRandomChance = elRandomForm.querySelector(".js-random-chance");
var elRandomResult = elRandomForm.querySelector(".js-random-result");

var randomChance = 6;
elRandomChance.textContent = `Urinishlar soni: ${randomChance}`;
var randomNumber = Math.floor(Math.random() * 100) + 1;

function findRandomNumber (userNum){
  
  if(userNum > randomNumber) {
    elRandomResult.classList.add("result-text-big");
    elRandomResult.classList.remove("result-text");
    elRandomResult.classList.remove("result-text-little");
    elRandomResult.classList.remove("result-text-right");
    return "Kiritilgan raqam random raqamdan katta !";
  }
  if(userNum < randomNumber) {
    elRandomResult.classList.add("result-text-little");
    elRandomResult.classList.remove("result-text-big");
    elRandomResult.classList.remove("result-text");
    elRandomResult.classList.remove("result-text-right");
    return "Kiritilgan raqam random raqamdan kichik !";
  } 
  if(userNum = randomNumber) {
    elRandomResult.classList.add("result-text-right");
    elRandomResult.classList.remove("result-text-little");
    elRandomResult.classList.remove("result-text-big");
    elRandomResult.classList.remove("result-text");
    return "Raqamni to'g'ri topdingiz 🙌";
  } 
  else{
    return "Raqamni topolmadingiz ☠️";
  }
}

function randomChanceAmount () {

  randomChance-=1;

  if(randomChance === 0) {
    elRandomChance.classList.add("chanse-end");
    elRandomChance.classList.remove("chanse");
    elRandomChance.textContent = `Game Over ☠️`;
    elRandomInput.disabled = true;
  } else {
    elRandomChance.textContent = `Urinishlar soni: ${randomChance}`;
  }
}

elRandomForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  
  randomChanceAmount()
  
  var randomInputValue = elRandomInput.value;

  elRandomResult.textContent = findRandomNumber(randomInputValue)
})
