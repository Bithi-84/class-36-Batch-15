
let hElement = document.createElement('h1');

hElement.innerHTML = "Hello world from h1 tag";

document.body.append(hElement);

let pElement = document.createElement('p');

pElement.innerHTML = "Hi";

document.body.prepend(pElement);

let testDiv = document. querySelector("#testDiv");

let bTag = document.querySelector("#bTag");

testDiv.insertBefore(pElement,bTag);

let spanElement = document.createElement('span');

spanElement.innerHTML = "This is a span Tag";

testDiv.appendChild(spanElement);



