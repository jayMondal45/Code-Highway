document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        let answer = item.nextElementSibling;
        let icon = item.querySelector('.icon');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.textContent = '+';
        } else {
            answer.style.display = 'block';
            icon.textContent = '-';
        }
    });
});