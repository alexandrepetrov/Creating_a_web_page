// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '') {
        alert('Пожалуйста, введите ваше имя.');
        return;
    }

    if (email.trim() === '' || !email.includes('@')) {
        alert('Пожалуйста, введите корректный email.');
        return;
    }

    if (message.trim() === '') {
        alert('Пожалуйста, введите ваше сообщение.');
        return;
    }

    alert('Форма успешно отправлена!');
    // Здесь можно добавить код для отправки данных на сервер
});