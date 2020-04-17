// body styling
document.body.style.backgroundColor = "#272727";
document.body.style.color = "#f4f4f4";

const ul = document.querySelector("ul")

const static = ul.querySelectorAll("li");
console.log(static);
const live = ul.getElementsByTagName("li");
console.log(live);

// create new list item
const newLi = document.createElement("li");
ul.append(newLi)

newLi.textContent = 'item5';
newLi.style.color = "#BADA55";
newLi.style.fontSize = "1.5rem";

console.log(ul);


