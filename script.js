const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."]
const operands = ["+", "-", "*", "/"]
const equals = "="

const screenDisplay = document.querySelector("#screenDisplay");
const numberButtons = document.querySelector("#numberButtons");

function getNumbers(numbers){
  const buttons = [];
  const num1=[];

  for (let i=0; i<numbers.length; i++){
    
      const indiButton = document.createElement("button")
      indiButton.classList.add("indiButton")
      indiButton.textContent = numbers[i]
      numberButtons.appendChild(indiButton)
      buttons.push(indiButton)
    
      indiButton.addEventListener("click", function() {
        num1.push(numbers[i]);
        screenDisplay.textContent = num1.join("")
        console.log("you clicked:" + numbers[i])
        console.log(num1);
      });
  }
}

getNumbers(numbers);

/*
  const restart = document.createElement("button");
  restart.classList.add("restart"); 
  restart.textContent = "A/C"; 
  restartBtn.appendChild(restart);

restartBtn.addEventListener("click", (num1, num2, event) => {    
  document.querySelector("#input").textContent = " ";
  num1 = 0;
  num2 = 0;
});

*/
const num1 = [];
const num2= [];


//operand functions:

const add = ((num1, num2) => {
  return num1 + num2
});

const subtract = ((num1, num2) => {
	return num1 - (num2)
});

const multiply = function(numbers){
return numbers.reduce((total, curr) => total * curr,1);
}

const divide = function(numbers){
  return numbers.reduce((total, curr)=> total / curr,1);
}
