// Функції для модалки помилки (залишаємо як було)
function showError() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('errorModal').style.display = 'block';
}

function closeError() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('errorModal').style.display = 'none';
}

// Логіка входу
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Щоб сторінка не перезавантажилася

    // Отримуємо дані з форми
    const fName = document.getElementById('firstName').value;
    const lName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    try {
        // Тягнемо наш JSON (через Live Server)
        const response = await fetch('data.json');
        const userData = await response.json();

        // Перевірка (ім'я, прізвище та пошта мають збігатися)
        if (fName === userData.firstName && 
            lName === userData.lastName && 
            email === userData.email) {
            
            alert('Вхід успішний!');
            window.location.href = 'profile.html'; // Назва файлу твоєї сторінки з профілем
        } else {
            alert('Користувача не знайдено або дані невірні!');
        }
    } catch (error) {
        console.error("Помилка:", error);
        alert('Помилка сервера. Переконайся, що запущено Live Server!');
    }
});
