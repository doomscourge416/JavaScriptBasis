const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    console.log('Функция click сработала, вы видите console.log ');
})

const Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
    alert('Вы видите Alert, выведенный при помощи click')
})

const Prompt = document.querySelector('#Prompt');

Prompt.addEventListener('click', () => {
    let answer = prompt('Введите своё имя');
    alert('Здравствуйте, ' + answer +'!');
    alert('Вам была продемонстрирована функция propmt с дальнейшим выводом её результата на Alert');
})