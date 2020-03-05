let num1 = parseFloat(prompt("Enter any number"));
let num2 = parseFloat(prompt("Enter another number"));
let operation;
while(true) {
    operation = prompt("Enter what operation would you like to perform - add, subtract, multiply, divide?");
    if (operation === "add" || operation === "subtract" || operation === "multiply" || operation === "divide") {
        break;
    }
}
function calculate(x, y, z) {
    switch (z) {
        case "add":
            operation = num1 + num2;
            window.document.write("The sum of " + num1 + " and " + num2 + " equals " + operation + ".");
            break;
        case "subtract":
            operation = num1 - num2;
            window.document.write("The difference between " + num1 + " and " + num2 + " equals " + operation + ".");
            break;
        case "multiply":
            operation = x * y;
            window.document.write("The result of " + num1 + " * " + num2 + " equals " + operation + ".");
            break;
        case "divide":
            operation = x / y;
            window.document.write("The result of " + num1 + " / " + num2 + " equals " + operation + ".");
            break;
    }
}
calculate(num1, num2, operation);
