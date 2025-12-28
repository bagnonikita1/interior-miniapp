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

function openForm() {
  showScreen('form');
}

function goHome() {
  showScreen('home');
}

function sendForm() {
  const data = {
    phone: document.getElementById('phone').value,
    type: document.getElementById('type').value,
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
