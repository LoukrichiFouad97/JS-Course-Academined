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
 */

// const numbers = [51, 2, 3, 164, 32, 5, 5];
// console.log(numbers.filter((item) => item > 50));
// // Sort from lower to higher
// console.log(numbers.sort((a, b) => a - b));
// // sum all prices using reduce
// console.log(numbers.reduce((a, b) => a + b, 0));
const address = "Algeria;Msila;AinElMelh;28004";
const splited = address.split(";");
console.log(splited);
const joined = splited.join(",");
console.log(joined);
