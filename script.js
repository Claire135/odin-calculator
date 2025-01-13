const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0]
const operands = ["+", "-", "*", "/"]

const screenDisplay = document.querySelector("#screenDisplay");
const numberButtons = document.querySelector("#numberButtons");
const operandButtons = document.querySelector("#operandButtons");
const equalsButton = document.querySelector("#equalsButton")

function getNumbers(numbers){
  const buttons = [];
  const buttons2 = [];
  let num1="";
  let num2="";
  let currentOperator = null;
  let result = null;

  //create and define behaviour for operand buttons
  for (let j=0; j<operands.length; j++){
    const opButton = document.createElement("button")
    opButton.classList.add("opButton")
    opButton.textContent = operands [j]
    operandButtons.appendChild(opButton)
    buttons2.push(opButton)

    opButton.addEventListener("click", function() {
      currentOperator = operands[j];
      screenDisplay.textContent = operands[j];
      console.log("you clicked:" + operands[j])
    });
  }

  //create and define behaviour for numbers buttons
  for (let i=0; i<numbers.length; i++){
    
      const indiButton = document.createElement("button")
      indiButton.classList.add("indiButton")
      indiButton.textContent = numbers[i]
      numberButtons.appendChild(indiButton)
      buttons.push(indiButton)
    
      indiButton.addEventListener("click", function() {
        if (currentOperator){ 
          num2 += numbers[i]
          screenDisplay.textContent = num2;
        }else {
          num1 += numbers[i];
          screenDisplay.textContent = num1;
        }
        
        console.log("you clicked:" + numbers[i])
        console.log(`Num1: ${num1}`);
        console.log(`Num2: ${num2}`);
      });
  }

  function getResults(){
    const n1 = parseFloat(num1);
    const n2= parseFloat(num2);
    
    if (n1 > 999999999999999 || n2 > 999999999999999) {
      screenDisplay.textContent = "Error!";
    }
    
    switch (currentOperator){
      case("+"):
        result = n1 + n2;
        break;
      
      case("-"):
        result = n1 - n2;
        break;
      
      case("*"):
        result = n1 * n2;
        break;
      
      case("/"):
        if (n2 === 0){
          result = "error!"
        } else {
        result = n1 / n2
        }
        break;
    }
    console.log(`Result: ${result}`);

  }

  //create and define behaviour for equals button
    const eqButton = document.createElement("button")
    eqButton.classList.add("eqButton")
    eqButton.textContent = "="
    equalsButton.appendChild(eqButton)

    eqButton.addEventListener("click", function() {
      getResults();
      screenDisplay.textContent = result
      num1 = result;
      num2 = "";
    }); 

  const restart = document.createElement("button");
  restart.classList.add("restart"); 
  restart.textContent = "A/C"; 
  numberButtons.appendChild(restart);

  restart.addEventListener("click", function() {    
    num1 = "";
    num2 = "";
    currentOperator = null;
    result = null;
    screenDisplay.textContent = "0";
    console.log(`Num1: ${num1}, Num2: ${num2}, Result: ${result}`)
  });


}

getNumbers(numbers)


