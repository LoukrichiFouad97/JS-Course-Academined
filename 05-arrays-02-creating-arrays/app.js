/**
 * push(add at the end), pop(remove from the end)
 * unshift(add at the start), shift(remove from the start)
 * splice(start cutting at index, how many item to remove, ...items to add)
 * slice(start cutting at index, End cutting at index)
 * concat(combine this array)
 * indexOf(search from the start), lastIndexOf(search from the end)
 * find((obj) => {true | false}), findIndex() same as find but returns index
 * includes(value) search in string for value return true or false
 * forEach((array item, index) => {}) go through each array item
 * map() same as forEach but it has to return something
 * sort() sort array
 * filter() create new filtred array
 * reduce((previousValue,currentValue), initializeValue)
 * split(seperator) splits string to array
 * join(seperator) joins array to string
 * ...Spread Operator pulls out array elements & copy them
 * array destructuring const [var1, var2, ...rest] = array
 */

// const numbers = [51, 2, 3, 164, 32, 5, 5];
// console.log(numbers.filter((item) => item > 50));
// // Sort from lower to higher
// console.log(numbers.sort((a, b) => a - b));
// // sum all prices using reduce
// console.log(numbers.reduce((a, b) => a + b, 0));

/** SPREAD OPERATOR */
// const person = [
// 	{ name: "fouad", age: 22 },
// 	{ name: "moh", age: 23 },
// ];

// const fullCopy = person.map((item) => {
// 	return {
// 		name: item.name,
// 		age: item.age,
// 	};
// });

// person[0].name = "fofo";

// console.log(person);
// console.log(fullCopy);

const frontend = ["html", "css", "js", "css preprocessor", "js framework"];
const [html, css, js, ...other] = frontend;

console.log(html, css, js, other);
