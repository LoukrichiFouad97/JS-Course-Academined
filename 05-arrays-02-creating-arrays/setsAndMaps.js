/**
 * new Set(iterable)
 * set.has(value), set.add(value), set.delete(value), set.entries(), set.values(),
 * new Map(key, value)
 * map.set(key, value), map.get(key),  map.entries()
 */
// const ids = new Set([1, 2, 3]);
// ids.add('d')
// console.log(ids.has(2));

// for (const i of ids.values()) {
// 	console.log(i);
// }
const person = { name: "fouad", age: 23 };
const person2 = { name: "moh", age: 52 };
const person3 = { name: "loukrichi", age: 52 };
const addData = new Map([
	[person, [{ job: "web dev" }]],
	[person2, [{ job: "hacker" }]],
]);

addData.set(person3, [{ job: "sys admin" }]);

for (const i of addData) {
	console.log(i);
}
