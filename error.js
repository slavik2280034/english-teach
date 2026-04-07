// Елементи модалки
const modal = document.getElementById('errorModal');
const overlay = document.getElementById('overlay');

// Функції для модалки (твоя частина)
function showError() {
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeError() {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// Закриваємо при натисканні на саме затемнення
overlay.addEventListener('click', closeError);

// --- ЛОГІКА ВХОДУ ---
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fName = document.getElementById('firstName').value;
    const lName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value; // Не забудь додати id="password" в HTML!

    try {
        // Використовуємо шлях, який точно спрацює на GitHub
        const response = await fetch('./data.json');
        if (!response.ok) throw new Error('Файл даних не знайдено');
        
        const userData = await response.json();

        // Перевірка всіх даних + пароль
        if (fName === userData.firstName && 
            lName === userData.lastName && 
            email === userData.email &&
            pass === userData.password) {
            
            alert('Вхід успішний! Вітаємо, ' + fName);
            window.location.href = 'yarik.html'; // Переконайся, що назва файлу з профілем правильна
        } else {
            alert('Упс! Дані не збігаються. Перевір пароль або написання імені.');
        }
    } catch (error) {
        console.error("Помилка:", error);
        alert('Помилка завантаження. Перевір консоль (F12)');
    }
});
