const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById('sendBtn').addEventListener('click', () => {
  const user = tg.initDataUnsafe.user;

  const data = {
    name: user ? user.first_name : 'Не указано',
    username: user?.username || '',
    phone: document.getElementById('phone').value,
    type: document.getElementById('type').value,
    area: document.getElementById('area').value,
    comment: document.getElementById('comment').value
  };

  if (!data.phone || !data.area) {
    alert('Пожалуйста, заполните телефон и площадь');
    return;
  }

  tg.sendData(JSON.stringify(data));
  tg.close();
});
