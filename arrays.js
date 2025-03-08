// const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
// const flowers = ["Rose", "Tulip", "Daisy", "Lily", "Daffodil", "Sunflower", "Orchid", "Iris", "Hyacinth"]

// console.log(primeNumbers);
// console.log(flowers);

// primeNumbers.length;
// flowers.length;

// const winningNumbers = [32, 9, 14, 33, 48, 5];

// function lohWinningNumbers(numbers){
//   console.log("Winning numbers:", numbers);  
// }
// lohWinningNumbers(winningNumbers);

// Accessing an array element
// const winningNumbers = [32, 9, 14, 33, 48, 5];

// winningNumbers[0];
// winningNumbers[1];
// winningNumbers[2];

// const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// alphabet.length;

// Updating the Value of an element
// const planets = ["Mercury", "Venus", "Earth", "Mars", "Juptier", "Saturn", "Uranus", "Neptune"];
// planets[4] = "Jupiter";
// planets[7] = "Pluto";
// planets.length;
// console.log(planets);

// const string = "Hello World";
// string.toUpperCase();

// Array Methods
// Add Elements to an Array
// .push and .unshift are destructive methods

const superheroes = ["Catwoman", "Storm", "Jessica Jones"];
superheroes.push("Wonder Woman");
superheroes.push("Black Widow");
console.log(superheroes);

const cities = ["Nairobi", "Kisumu", "Mombasa"];
cities.unshift("Nakuru");
cities.unshift("Eldoret");
console.log(cities);

// Spread operator (non-destructive)
const coolCities = ["New York", "Los Angeles", "Chicago"];
const copyOfCoolCities = [...coolCities];
console.log(copyOfCoolCities);
const allCities = [ "Atlanta", ...coolCities, "Miami"];
console.log(allCities);

const foods = ["Pizza", "Burger", "Fries"];
const allFoods = ["Salad", ...foods, "Ice Cream"];
console.log(allFoods);

const coolCats = ["Tom", "Garfield", "Sylvester"];
const allCoolCats = ["Felix", ...coolCats, "Simba"];
console.log(allCoolCats);

// Remove Elements from an Array
// .pop and .shift are destructive methods
// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// days.pop();
// console.log(days);
// days.shift();
// console.log(days);

// const months = ["January", "February", "March", "April", "May", "June", "July"];
// months.pop();
// console.log(months);
// months.shift();
// console.log(months);

// // Slice Method
// // .slice is a non-destructive method
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
days.slice(2,4);
console.log(days.slice(2,4));

// const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
// colors.slice(2,4);
// console.log(colors.slice(2,4));

// // Splice Method
// // .splice is a destructive method
// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// days.splice(3,3);
// console.log(days);

const cards = ["Ace of Spades", "Jack of Clubs", "Nine of Clubs", "Nine of Diamonds", "Three of Hearts"];
cards.splice(2,1, "Ace of Clubs", "Jack Harlow");
console.log(cards);

const menu = ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips", "French Fries", "Onion Rings"];

const newMenu = [...menu.slice(0,1),  "Veggie Burger", "House Salad","Teriyaki Tofu", ...menu.slice(3)];
console.log(newMenu);




