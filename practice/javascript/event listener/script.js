const buttons = document.querySelectorAll('.myButton');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('heading').textContent = btn.textContent + ' clicked';
    });
});