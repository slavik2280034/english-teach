async function loadProfile() {
    try {
        // Отримуємо дані з окремого файлу
        const response = await fetch('data.json');
        const userData = await response.json();

        // Заповнюємо сторінку
        document.getElementById('full-name').innerText = `${userData.firstName} ${userData.lastName}`;
        document.getElementById('email').innerText = userData.email;
        document.getElementById('phone').innerText = userData.phone;
        document.getElementById('user-photo').src = userData.userPhoto;

        document.getElementById('teacher-name').innerText = userData.teacher.name;
        document.getElementById('teacher-photo').src = userData.teacher.photo;

        document.getElementById('paid-lessons').innerText = userData.stats.paid;
        document.getElementById('left-lessons').innerText = userData.stats.left;

        document.getElementById('lesson-link').href = userData.links.lesson;
        document.getElementById('board-link').href = userData.links.board;

        document.getElementById('homework-text').innerText = userData.homework;
    } catch (error) {
        console.error("Помилка завантаження JSON:", error);
    }
}

window.onload = loadProfile;