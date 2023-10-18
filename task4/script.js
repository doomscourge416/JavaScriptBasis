const linkTextSwap = document.querySelector('#linkTextSwap');

linkTextSwap.addEventListener('click', (event) => {
    const userText = prompt('Поменяйте текст ссылки');
    linkTextSwap.textContent = userText
    event.preventDefault(); //Если preventDefault не будет, то после выполнения замены текста переход по ссылке всё равно случится.
})