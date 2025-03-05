// const day = 3
// if (day === 1) {
//   console.log('Sunday')
// }
// else if(day === 2) {
//   console.log('Monday')
// }
// else if(day === 3) {
//     console.log('Tuesday')
//     }
//     else if(day === 4) {
//     console.log('Wednesday')
//     }
//     else if(day === 5) {
//     console.log('Thursday')
//     }
//     else if(day === 6) {
//     console.log('Friday')
//     }
//     else if(day === 7) {
//     console.log('Saturday')
//     }
//     else {
//     console.log('Invalid day')
// }
// const dayNumber = 5
// let day;
// switch (dayNumber) {
//   case 1:
//     day = 'Sunday'
//     break;
//   case 2:
//     day = 'Monday'
//     break;
//   case 3:
//     day = 'Tuesday'
//     break;
//   case 4:
//     day = 'Wednesday'
//     break;
//   case 5:
//     day = 'Thursday'
//     break;
//   case 6:
//     day = 'Friday'
//     break;
//   case 7:
//     day = 'Saturday'
//     break;
//   default:
//     day = 'Invalid day'
// }
// console.log(day)

const dayNumber = 3; // You can change this number to test

const day = (dayNumber === 1) ? 'Sunday' :
           (dayNumber === 2) ? 'Monday' :
           (dayNumber === 3) ? 'Tuesday' :
           (dayNumber === 4) ? 'Wednesday' :
           (dayNumber === 5) ? 'Thursday' :
           (dayNumber === 6) ? 'Friday' :
           (dayNumber === 7) ? 'Saturday' :
           'Invalid day';

console.log(day);
