const modal = document.getElementById('errorModal');
const overlay = document.getElementById('overlay');

function showError() {
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeError() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

// Також закриваємо при натисканні на саме затемнення
overlay.addEventListener('click', closeError);
