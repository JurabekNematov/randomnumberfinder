var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elResult = elForm.querySelector(".js-result")

function multiplication(userNumber) {

  if(userNumber <= 0) {
    return "Noto'g'ri raqam kiritdingiz !";
  }
  else if(userNumber % 3 === 0 && userNumber % 5 === 0) {
    return "FizzBuzz.";
  } 
  else if(userNumber % 3 === 0) {
    return "Fizz.";
  } 
  else if(userNumber % 5 === 0) {
    return "Buzz.";
  } 
  else if(userNumber = isNaN(userNumber)) {
    return "Raqam kiriting 💀!";
  } 
  else {
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
    return "Kiritilgan raqam random raqamdan katta !";
  }
  else if(userNum <= 0) {
    return "Noto'g'ri raqam kiritildi !";
  }
  else if(userNum = isNaN(userNum)) {
    return "Raqam kiriting !";
  }
  else if(userNum < randomNumber) {
    return "Kiritilgan raqam random raqamdan kichik !";
  } 
  else if(userNum = randomNumber) {
    return "Raqamni to'g'ri topdingiz 🙌";
  } 
  else{
    return "Raqamni topolmadingiz ☠️";
  }
}

function randomChanceAmount () {

  randomChance-=1;

  if(randomChance === 0) {
    elRandomChance.textContent = `Game Over`;
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
