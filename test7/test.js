const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((number) => number * 2);
// console.log(result);
// console.log(numbers);

console.time("irish");
const squareOddNumbers = numbers
 .map((number) => number * number)
 .filter((number) => number % 2 !== 0);

console.timeEnd("irish");
console.log(squareOddNumbers);

fetch("https://jsonplaceholder.typicode.com/todos")
 .then((response) => response.json())
 .then((todo) => {
  const todosForUserMap = {};
  todosForUserMap.forEach((todo) => {
   if (todosForUserMap[todo.userId]) {
    todosForUserMap[todo.userId].push(todo);
   } else {
    todosForUserMap[todo.userId] = [todo];
   }
  });
 });
