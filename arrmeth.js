const shoppingList = [
    "Bread",
    "Menengai soap",
    "Sugar",
    "Quarter",
    "Unga",
];

const arrLength = shoppingList.length;


console.log(shoppingList);

shoppingList.length
console.log(shoppingList.length);

// access elements in an array
console.log(shoppingList[3])
// access the last element in an array
console.log(shoppingList[arrLength - 1]);

// at method
console.log(shoppingList.at());

// array methods
// destructive and non destructive methods

const students = [];
console.log(students);

// append a student name inside the student array
students.push("Abdulhakim Sudi", "Alfa Mmosi", "Anderson Waithaka", 35);

console.log(students.unshift("Victor Ngigi", "Priscillah", "Natasha"));


// const list = ["Arnold Wainaina", "Aquila Jedidia", "Arnold Kulavi"];
// const allStudents =[...list, "Boniface Muguro", "Brian Kaloki"];

// console.log(allStudents);
// const invictus = [...students, ...list, ...allStudents]
// console.log(invictus);

students.pop();
console.log(students.pop());
