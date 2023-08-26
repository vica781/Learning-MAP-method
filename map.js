
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map()
const multiplyByTwo = function (num) {
  return num * 2;
}

const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);

// Simplified w/ map()
const simplfied = nums.map(function (num) { return num * 2 });
console.log(simplfied);

// Simplfied w/ map() + arrow function
let arrow = nums.map(num => num * 2);
console.log(arrow);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];
const object = students.map(student => [student.name, student.id]);
console.log(object);

const keyValue = students.map(student => {
  return {
    id: student.id,
    name: student.name
  }
});
console.log(keyValue);

const withAge = students.map(student => {
  return {
    ...student, // Spread the existing properties
    age: student.id === 1 ? 32 : (student.id === 2 ? 26 : 28) // Add age based on id
  };
});

console.log(withAge);