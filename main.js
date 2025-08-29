// Step 1 - Find all the elements we need to interact with
const num1Input = document.getElementById('number1')
const num2Input = document.getElementById('number2')
const operatorSelect = document.getElementById('operator')
const calculateButton = document.getElementById('calculateButton')
const resultSpan = document.getElementById('result')

// Step 2 - Add an event listener to the button to call a function when clicked
calculateButton.addEventListener('click', calculate)

function calculate() {
    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value)
    const operator = operatorSelect.value;

    let result
    // if( operator === "+") {
    //     result = num1 + num2
    // }

    // VALIDATE THAT WE HAVE SOMETHING TO WORK WITH 
    if (isNaN(num1) || isNaN(num2)){
        resultSpan.innerText= "Please provide an operation and two numbers!";
        return;
    }

    
    // when using switch we use break after every operator or else they'll always overwrite each other
    switch(operator){
        case "+": result = num1 + num2;
        break;
        case "-": result = num1 - num2;
        break;
        case "*": result = num1 * num2;
        break;
        case "/": 
            if (num2 === 0) {
                calculateButton.textContent = "ERROR: CAN'T DEVIDE BY ZERO";
                resultSpan.innerText = "Undefined"
                return;
            }

            else{
                result = num1 / num2
            }
        break;
    }
    
    // Step 3 - update the result span with the result of the calculation
    resultSpan.innerText = result;
}