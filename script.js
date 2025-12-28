const tg = window.Telegram.WebApp;
tg.expand();

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function openPortfolio() {
  showScreen('portfolio');
}

function openServices() {
  showScreen('services');
}

function openForm() {
  showScreen('form');
}

function goHome() {
  showScreen('home');
}

function showService(price) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.service').forEach(s => s.classList.remove('active'));

  document.querySelector(`.tab[onclick="showService(${price})"]`).classList.add('active');
  document.getElementById(`service-${price}`).classList.add('active');
}

function sendForm() {
  const data = {
    phone: document.getElementById('phone').value,
    area: document.getElementById('area').value,
    comment: document.getElementById('comment').value
  };

  if (!data.phone || !data.area) {
    alert('Заполните телефон и площадь');
    return;
  }

  tg.sendData(JSON.stringify(data));
  tg.close();
}
