const tg = window.Telegram.WebApp;
tg.expand();

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
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
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.service').forEach(service => service.classList.remove('active'));

  if (price === 2100) {
    document.querySelectorAll('.tab')[0].classList.add('active');
    document.getElementById('service-2100').classList.add('active');
  } else {
    document.querySelectorAll('.tab')[1].classList.add('active');
    document.getElementById('service-2500').classList.add('active');
  }
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
