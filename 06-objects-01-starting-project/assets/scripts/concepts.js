/**
 * remove property: delete object.property
 * reset property: object.property = null
 * obj[prop name]
 * Object.assign(target obj, objects to copy from)
 * Obj destructuring {key: alias} = Obj
 * function.bind(this, ...args) => return obj for future excution
 * function.call(this, ...args) => excute it right now
 * function.apply(this, [...args]) => like call() but it accepts [] as second arg
 * set key() {code block} set value, validate them ..etc
 * get key() {code block} read the value
 */

// const person = { name: "fouad", age: 23, hobbies: ["hacking", "coding"] };
// const person2 = { ...person, age: 20, hobbies: [...person.hobbies] };
// const person2 = Object.assign({...person});
// person.name = 'fofo'
// person.hobbies[0] = "learning";

// console.log(person);
// console.log(person2);

// (() => {
// 	"use strict";
// 	const person = {
// 		name: "fouad",
// 		age: 23,
// 		personality: ["leader", "thinker", "hack"],
// 		personalInfo() {
// 			this.personality.filter(function (x) {
// 				// console.log(x);
// 				return x.includes("hack") ? console.log('found'): console.log('No');;
// 			});
// 		},
// 	};
// 	console.log(person.personalInfo());
// })();

const person = {
	set name(val) {
		if (val.trim() === "") {
			val = "default";
			return;
		}
		this.setValue = val;
	},
	get name() {
		return this.setValue;
	},
};

console.log((person.name = "s"));
console.log(person.name);
