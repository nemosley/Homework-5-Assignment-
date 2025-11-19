// Step 1 Access the DOM element
console.log("hdgddgh");

const greetings = document.getElementsByClassName('greeting');
console.log(greetings); // HTMLCollection of elements with class 'greeting'
console.log(greetings[0]); // First element with class 'greeting'
console.log(greetings[0].outerHTML); // Outer HTML of the first element with class 'greeting'

const outputDiv = document.querySelector('#output');
const changeColorBtn = document.querySelector('.change-color-btn');
const addItemBtn = document.querySelector('.add-item-btn');
const hoverBtn = document.querySelector('.hover-btn');

// Change color button event listener
changeColorBtn.addEventListener('click', () => {
    greetings[0].style.color = 'blue';
    const p = document.createElement('p');
    p.textContent = 'The color has been changed!';
    console.log(p.textContent);
    outputDiv.appendChild(p);
});

// Add paragraph button event listener
addItemBtn.addEventListener('click', () => {
    const newPara = document.createElement('p');
    newPara.textContent = "This is a new Paragraph added to the output div.";
    outputDiv.appendChild(newPara);
});

// Hover button event listener
hoverBtn.addEventListener('mouseover', () => {
    const hoverPara = document.createElement('p');
    hoverPara.textContent = "You hovered over the button!";
    outputDiv.appendChild(hoverPara);
});

hoverBtn.addEventListener('mouseout', () => {
  
    greetings[0].style.fontWeight = 'bold';

    const p = document.createElement('p');
    p.textContent = "You stopped hovering over the button!";
  
    outputDiv.appendChild(p);
});

document.addEventListener('keydown', (event) => {

    const key = event.key.toLowerCase();
    const p = document.createElement('p');
    if (key === 'u') {
        p.textContent = `You pressed the "u" key`;
    } else {
        p.textContent = `You pressed the "${event.key}" key.`;
    }
    outputDiv.appendChild(p);
});


