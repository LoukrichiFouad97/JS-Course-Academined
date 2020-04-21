/**
 * remove property: delete object.property
 * reset property: object.property = null
 * obj[prop name]
 * Object.assign(target obj, objects to copy from)
 * Obj destructuring {key: alias} = Obj
 */

const person = { name: "fouad", age: 23, hobbies: ["hacking", "coding"] };
// const person2 = { ...person, age: 20, hobbies: [...person.hobbies] };
const person2 = Object.assign({...person});
person.name = 'fofo'
person.hobbies[0] = "learning";

// console.log(person);
// console.log(person2);
