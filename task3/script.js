let trafficLightEl1 = document.querySelector('#trafficLight1')
let trafficLightEl2 = document.querySelector('#trafficLight2')
let trafficLightEl3 = document.querySelector('#trafficLight3')



function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');

    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl2.removeEventListener('click', makeGreen);
    trafficLightEl3.removeEventListener('click', makeGreen);

    trafficLightEl2.addEventListener('click', makeYellow);
    trafficLightEl1.addEventListener('click', makeYellow);
    trafficLightEl3.addEventListener('click', makeYellow);

    
    
}

function makeYellow() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('Yellow');
    trafficLightEl3.style.background = ('black');

    trafficLightEl1.removeEventListener('click', makeYellow);
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl3.removeEventListener('click', makeYellow);

    trafficLightEl1.addEventListener('click', makeRed);
    trafficLightEl2.addEventListener('click', makeRed);
    trafficLightEl3.addEventListener('click', makeRed);
    
}


function makeRed() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');

    trafficLightEl1.removeEventListener('click', makeRed);
    trafficLightEl2.removeEventListener('click', makeRed);
    trafficLightEl3.removeEventListener('click', makeRed);

    trafficLightEl1.addEventListener('click', makeGreen);
    trafficLightEl2.addEventListener('click', makeGreen);
    trafficLightEl3.addEventListener('click', makeGreen);
    
}


trafficLightEl1.addEventListener('click', makeGreen);
trafficLightEl2.addEventListener('click', makeGreen);
trafficLightEl3.addEventListener('click', makeGreen);





/* Почти рабочее решение, не могу зациклить последнюю функцию

let MultipleLights = document.querySelectorAll('.trafficLights')
let trafficLightEl1 = document.querySelector('#trafficLight1')
let trafficLightEl2 = document.querySelector('#trafficLight2')
let trafficLightEl3 = document.querySelector('#trafficLight3')
function makeGreen() {
     trafficLightEl1.style.background = ('green');
     trafficLightEl2.style.background = ('black');
     trafficLightEl3.style.background = ('black');
    for (let i = 0; i < MultipleLights.length; i++) {
        MultipleLights[i].addEventListener('click', makeYellow)
    }
}
function makeYellow() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('Yellow');
    trafficLightEl3.style.background = ('black');
  
    for (let i = 0; i < MultipleLights.length; i++) {
         MultipleLights[i].addEventListener('click', makeRed)
    }
}
function makeRed() {
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');
    for (let i = 0; i < MultipleLights.length; i++) {
        MultipleLights[i].addEventListener('click', makeGreen)
    }
 }
for (let i = 0; i < MultipleLights.length; i++) {
    MultipleLights[i].addEventListener('click', makeGreen)
} */


