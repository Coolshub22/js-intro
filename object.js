// const address = ["11 Broadway", "2nd Floor", "New York", "NY 10004"];
// address[1] = "3rd Floor";
// console.log(address);

// const obj = {key: "value"};
// console.log(obj);
// const obj = { key1: value1, key2: value2};
// console.log(obj);
// const obj = {
//     key1: value1,key2: value2{innerKey1: innerValue1, innerKey2: innerValue2}}
const address = {
    street: {line1: "11 Broadway", line2: "2nd Floor" },
    city: "New York",
    state: "NY",
    zip: "10004"
};

// const meals = {
//     breakfast: "Cereal",
//     lunch: "Sandwich",
//     dinner: "Pasta"
// };
// console.log(meals.breakfast);
// console.log(meals.lunch);
// console.log(meals.dinner);

// we can use the dot notation or the bracket notation to access the values of an object

// const morningMeal = "breakfast";
// const middayMeal = "lunch";
// const eveningMeal = "dinner";

// const meals = {
//     [morningMeal]: "Cereal",
//     [middayMeal]: "Sandwich",
//     [eveningMeal]: "Pasta"
// };
// console.log(meals)


// const wednesdayMenu = {
//     cheesePlate:{
//         soft: "Brie",
//         semiSoft: "Gouda",
//         hard: "Parmesan"
//     },
//     fries: "Sweet Potato",
//     salad: "Caesar"
// };
// console.log(Object.keys(wednesdayMenu));
// console.log(Object.values(wednesdayMenu));

// Modify an Object
// Add an Object Property
// const circle ={};
// circle.radius = 5;
// console.log(circle);
// circle["diameter"] = 10;
// console.log(circle);
// circle.circumference = 31.42;
// circle.circumference = circle.diameter * Math.PI;
// console.log(circle);
// circle["area"] = 78.54;
// circle.area = Math.PI * Math.pow(circle.radius, 2);
// console.log(circle);

// // Modify an Object Property
// const mondayMenu = {
//     cheesePlate: {
//       soft: "Chèvre",
//       semiSoft: "Gruyère",
//       hard: "Manchego",
//     },
//     fries: "Curly",
//     salad: "Cobb",
//   };
//   mondayMenu.fries = "Sweet Potato";
//   console.log(mondayMenu);

//   function destructivelyUpdateObject(obj, key, value) {
//   obj[key] = value; //Why are we using bracket notation here?

//   return obj;
// }
// function destructivelyUpdateObject(obj, key, value) {
//     obj[key] = value;
//     return obj;
// }
// const tuesdayMenu = destructivelyUpdateObject(mondayMenu, "salad", "Caesar");
// console.log(tuesdayMenu);

// function nondestructivelyUpdateObject(obj, key, value) {
//     const newObj = {...obj};
//     newObj[key] = value;
//     return newObj;
//   }
//   const sundayMenu = nondestructivelyUpdateObject(tuesdayMenu, "fries", "Waffle");
// console.log(sundayMenu);

// Remove an Object Property

const wednesdayMenu = {
    cheesePlate: {
      soft: "Brie",
      semiSoft: "Fontina",
      hard: "Provolone",
    },
    fries: "Sweet potato",
    salad: "Southwestern",
  };
  delete wednesdayMenu.fries;
  console.log(wednesdayMenu);

  