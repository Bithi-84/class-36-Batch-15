
let hElement = document.createElement('h1');

hElement.innerHTML = "Hello world from h1 tag";

document.body.append(hElement);

let pElement = document.createElement('p');

pElement.innerHTML = "Hi"

document.body.prepend(pElement);

let testDiv = querySelector("#testDiv");

let bTag = querySelector("#bTag");

testDiv.insertBefore(pTag, bTag);

let spanElement = document.createElement('span');

spanElement.innerHTML = "This is a span Tag";

testDiv.appendChild(spanElement);



