let x = parseFloat(prompt("Enter any number"));
let y = parseFloat(prompt("Enter another number"));
let z;
while(true) {
    z = prompt("Enter what operation would you like to perform - add, subtract, multiply, divide?");
    if (z === "add" || z === "subtract" || z === "multiply" || z === "divide") {
        break;
    }
}
function calculate(x, y, z) {
    switch (z) {
        case "add":
            let sum = x + y;
            window.document.write("The sum of " + x + " and " + y + " equals " + sum + ".");
            break;
        case "subtract":
            let sub = x - y;
            window.document.write("The difference between " + x + " and " + y + " equals " + sub + ".");
            break;
        case "multiply":
            let mult = x * y;
            window.document.write("The result of " + x + " * " + y + " equals " + mult + ".");
            break;
        case "divide":
            let divis = x / y;
            window.document.write("The result of " + x + " / " + y + " equals " + divis + ".");
            break;
    }
}
calculate(x, y, z);
