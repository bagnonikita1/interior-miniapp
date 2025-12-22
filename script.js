const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById('requestBtn').addEventListener('click', () => {
  alert('Форма заявки будет на следующем шаге');
});