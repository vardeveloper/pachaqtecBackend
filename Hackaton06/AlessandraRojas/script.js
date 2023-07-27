// Exercise 1 - Button Click Event
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
  alert('Button clicked!');
});

// Exercise 2 - Mouseover Event
const myElement = document.getElementById('myElement');
myElement.addEventListener('mouseover', () => {
  myElement.style.backgroundColor = 'red';
});

myElement.addEventListener('mouseout', () => {
  myElement.style.backgroundColor = 'green';
});

// Exercise 3 - Dropdown Selection Event
const mySelect = document.getElementById('mySelect');
mySelect.addEventListener('change', () => {
  const selectedValue = mySelect.value;
  console.log('Selected option:', selectedValue);
});

// Exercise 4 - Keyboard Event
const textInput = document.getElementById('textInput');
textInput.addEventListener('keydown', (event) => {
  console.log('Key pressed:', event.key);
});

// Exercise 5 - Form Input Event
const inputField = document.getElementById('inputField');
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', () => {
  console.log('Form input value:', inputField.value);
});

// Exercise 6 - Scroll Event
window.addEventListener('scroll', () => {
  console.log('Page scrolled.');
});

// Exercise 7 - Click Event on Image
const myImage = document.getElementById('myImage');
myImage.addEventListener('click', () => {
  console.log('Image clicked!');
});

// Exercise 8 - Page Load Event
window.addEventListener('load', () => {
  alert('Welcome! The page has been fully loaded.');
});

// Exercise 9 - Click Event on Link
const myLink = document.getElementById('myLink');
myLink.addEventListener('click', () => {
  myLink.style.color = 'blue';
});

// Exercise 10 - Focus and Blur Events
const focusInput = document.getElementById('focusInput');
focusInput.addEventListener('focus', () => {
  console.log('Input field is focused.');
});

focusInput.addEventListener('blur', () => {
  console.log('Input field lost focus.');
});

// Exercise 11 - Click Event on List Items
const listItems = document.querySelectorAll('#myList li');
listItems.forEach((item) => {
  item.addEventListener('click', () => {
    console.log('Clicked on list item:', item.textContent);
  });
});

// Exercise 12 - Checkbox Change Event
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    console.log('Checkbox is checked.');
  } else {
    console.log('Checkbox is unchecked.');
  }
});

// Exercise 13 - Button Click to Hide/Show Element
const toggleButton = document.getElementById('toggleButton');
const toggleDiv = document.getElementById('toggleDiv');
toggleButton.addEventListener('click', () => {
  toggleDiv.classList.toggle('hidden');
});

// Exercise 14 - Double Click Event
const doubleClickElement = document.getElementById('doubleClickElement');
doubleClickElement.addEventListener('dblclick', () => {
  console.log('Double-clicked on the element.');
});

// Exercise 15 - Calculator
const display = document.getElementById('display');
const calculator = document.querySelector('.calculator');

calculator.addEventListener('click', (event) => {
  if (event.target.classList.contains('number')) {
    display.value += event.target.value;
  } else if (event.target.classList.contains('operator')) {
    display.value += ' ' + event.target.value + ' ';
  } else if (event.target.id === 'clear') {
    display.value = '';
  } else if (event.target.id === 'equal') {
    display.value = eval(display.value);
  }
});

// Exercise 16 - Timer Event
setInterval(() => {
  console.log('Timer event - One second has passed.');
}, 1000);

// Exercise 17 - Guessing Game
const guessButtons = document.querySelectorAll('.guess');
guessButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.value === '2') {
      alert('Congratulations! You guessed correctly.');
    } else {
      alert('Try again!');
    }
  });
});

// Exercise 18 - Window Resize Event
window.addEventListener('resize', () => {
  console.log('Window has been resized.');
});

// Exercise 19 - Random Number Generator
const generateNumberButton = document.getElementById('generateNumber');
generateNumberButton.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  alert(`Generated random number: ${randomNumber}`);
});

// Exercise 20 - Drag and Drop Event
const dragElement = document.getElementById('dragElement');
const dropZone = document.getElementById('dropZone');

dragElement.addEventListener('dragstart', () => {
  console.log('Element is being dragged.');
});

dropZone.addEventListener('dragover', (event) => {
  event.preventDefault();
});

dropZone.addEventListener('drop', () => {
  console.log('Element has been dropped.');
});
