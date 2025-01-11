const numbers = [
  { label: "7", value: 7, action: () => console.log("Button 7 clicked") },
  { label: "8", value: 8, action: () => console.log("Button 8 clicked") },
  { label: "9", value: 9, action: () => console.log("Button 9 clicked") },
  { label: "4", value: 4, action: () => console.log("Button 4 clicked") },
  { label: "5", value: 5, action: () => console.log("Button 5 clicked") },
  { label: "6", value: 6, action: () => console.log("Button 6 clicked") },
  { label: "1", value: 1, action: () => console.log("Button 1 clicked") },
  { label: "2", value: 2, action: () => console.log("Button 2 clicked") },
  { label: "3", value: 3, action: () => console.log("Button 3 clicked") },
  { label: ".", value: ".", action: () => console.log("Button 0 clicked") },
  { label: "0", value: 0, action: () => console.log("Button 0 clicked") }
];

const input = document.querySelector("#input");
const numbersButtonContainer = document.querySelector("#numbersButton");
const operandButtonContainer = document.querySelector("#operandButton");

function createButton(label, className, onClick){
  const button = document.createElement("button");
  button.classList.add(className);
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

numbers.forEach((buttonObj) => {
  const indiButton = createButton(buttonObj.label, "indiButton", () => {
    input.value += buttonObj.label;
    buttonObj.action(); 
  });
  numbersButtonContainer.appendChild(indiButton);
});

const operands = [
  { label: "+", action: () => console.log("Plus clicked") },
  { label: "-", action: () => console.log("Minus clicked") },
  { label: "*", action: () => console.log("Multiply clicked") },
  { label: "/", action: () => console.log("Divide clicked") },
];

operands.forEach((operand) => {
  const operandButton = createButton(operand.label, "operandButton", () => {
    input.value += ` ${operand.label} `; // Add operand with spaces for clarity
    operand.action();
  });
  operandButtonContainer.appendChild(operandButton);
});


/*
  const sum = (num1, num2) => {return num1 + num2};

  const sumResult = sum(numbers[1].value, numbers[1].value)


  console.log(sumresult)*/