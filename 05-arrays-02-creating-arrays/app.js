/**
 * push(add at the end), pop(remove from the end)
 * unshift(add at the start), shift(remove from the start)
 * splice(start cutting at index, how many item to remove, ...items to add)
 * slice(start cutting at index, End cutting at index)
 * concat(combine this array)
 * indexOf(search from the start), lastIndexOf(search from the end)
 * find((obj) => {true | false}), findIndex() same as find but returns index
 * includes(value) search in string for value return true or false
 */

const persons = [51, 2, 3, 564, 8, 5];
const search = 2;
const check = persons.includes(search);
if (check) {
	const checkIndex = persons.indexOf(search);
	console.log(`index of ${search} is: ${checkIndex}`);
} else {
	console.log(`you search for ${search} not found`);
}
