// STEP 1 - v.1
function half_Number() {
    let value = Number(window.prompt("Enter any number"));
    window.document.write("Half of " + value + " is " + value/2 + ".");
}
half_Number();
window.document.write("<br>");

// STEP 1 - v.2
function halfNumber(vaLue) {
    window.document.write("Half of " + vaLue + " is " + vaLue/2 + ".");
}
halfNumber(7);
window.document.write("<br>");

// // STEP 2 - v.1
function squarefNumber1() {
    let sq = Number(window.prompt("Enter any number"));
    window.document.write("The result of squaring the number " + sq + " is " + Math.pow(sq, 2) + ".");
}
 squarefNumber1();
 window.document.write("<br>");

// STEP 2 - v.2
function squarefNumber(square) {
    window.document.write("The result of squaring the number " + square + " is " + Math.pow(square, 2) + ".");
}
 squarefNumber(7);
 window.document.write("<br>");

// STEP 3 - v.1
function percent_Of() {
    let num1 = Number(window.prompt("Enter the first number"));
    let num2 = Number(window.prompt("Enter the second number"));
    window.document.write(num1 + " is " + Math.round(num1/num2*100) + "% of " + num2 + ".");
}
percent_Of();
window.document.write("<br>");

// STEP 3 - v.2
function percentOf(numb1, numb2)
{
  window.document.write(numb1 + " is " + numb1/numb2*100 + "% of " + numb2 + ".");
}
percentOf(2, 10);
window.document.write("<br>");

// STEP 4 - v.1
function findModulus1() {
    let mod1 = Number(window.prompt("Enter the first number"));
    let mod2 = Number(window.prompt("Enter the second number"));
    window.document.write(mod2 % mod1 + " is the modulus of " + mod1 + " and " + mod2 + ".");
}
findModulus1();
window.document.write("<br>");

//STEP 4 - v.2
function findModulus(modulus1, modulus2) {
    window.document.write(modulus2 % modulus1 + " is the modulus of " + modulus1 + " and " + modulus2 + ".");
    }
findModulus(4, 10);
window.document.write("<br>");

// STEP 5
function findSum(sum1, sum2, sum3) {
    sum1 = Number(window.prompt("Enter the first number"));
    sum2 = Number(window.prompt("Enter the second number"));
    sum3 = Number(window.prompt("Enter the third number"));
    let sum = sum1 + sum2 + sum3;
    window.document.write("The sum of all of the arguments is " + sum + ".");
}
findSum();