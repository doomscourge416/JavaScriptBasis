const linkTextSwap = document.querySelector('#linkTextSwap');

linkTextSwap.addEventListener('click', () => {
    const userText = prompt('Поменяйте текст ссылки');
    linkTextSwap.textContent = userText
    event.preventDefault();
})