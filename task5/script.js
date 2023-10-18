let UserInput = document.querySelector('input');
let duplicateField = document.querySelector('#duplicateField')


UserInput.addEventListener('keyup', function(e) {
    duplicateField.textContent = e.target.value
})

const btn = document.querySelector('button');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(duplicateField.textContent);
    duplicateField.textContent = '';
    UserInput.value ='';
})















// document.querySelector('input').onchange, function (event) => {
//     event.target.value = UserInput;
//     console.log(UserInput);
// }
// document.querySelector('input').onchange (function)(e) => {

//     document.querySelector('#duplicateField').textContent = e.target.value
// }

// document.querySelector('form').submit(function)(e) {
//     e.preventDefault();
//     let inputValue = e.target.elements[0].value;
//     console.log(inputValue);
//     document.querySelector('#duplicateField').textcontent = '';
//     inputValue = '';

// let UserInput = document.querySelector('input').value; 
//     console.log(input.value);
// document.querySelector('#copy').textContent = UserInput


// let input = document.querySelector('input');
// console.log(input.value)

// p.textContent = input.Value

// function CopyText() {
//     input.addEventListener('keyup', (e) => {
//         e.target.value
//         console.log(input.value)
//     })
    
// }

// function submit() {
//     button.addEventListener('click', () => {
//         console.log(input.value)
//         document.querySelector('p').textContent = UserText.value
//     })
// }

// function TextSubmit() {
//     document.querySelector('input').onchange = document.querySelector('p').textContent
// }