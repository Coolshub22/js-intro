// function exerciseByronthePoodie () {
//     console.log("Wake Byron the poodle");
//     console.log("Leash Byron the poodle");
//     console.log("Walk to the park Byron the poodle");
//     console.log("Throw the frisbee for Byron the poodle");
//     console.log("Walk home with Byron the poodle");
//     console.log("Unleash Byron the poodle"); 
// } 
// exerciseByronthePoodie ()

// IIFE FUNCTION
(function (firstName, lastName) {
    console.log(firstName + lastName);
}("Arnold", "Kulavi"));

// examples of different ways of declaring functions
const populi= (country, population) => 
`The total population of ${country} is ${population}`;
    
console.log(populi("Kenya", "55 million"));

const populis = (country, population) => {
    return `The total population of ${country} is ${population}`;
}
console.log(populis("Nigeria", "227 million"));
// Arrow function

function subtract(num1, num2) {
    return num1 - num2;
}
function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}

function output(num1, operator, num2) {
    return operator(num1, num2);
}
console.log(output(10, add, 10));
console.log(output(10, subtract, 10));
console.log(output(10, multiply, 10));
console.log(output(10, divide, 10));
// Callback function