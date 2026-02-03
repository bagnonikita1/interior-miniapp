const tg = window.Telegram.WebApp;
tg.expand();

let currentImages = [];
let currentIndex = 0;

const projects = {
  1: {
    title: "Квартира для мужчины средних лет",
    desc: "Сейчас идёт реализация",
    images: ["images/p1-1.jpg", "images/p1-2.jpg"]
  },
  2: {
    title: "Квартира L-town",
    desc: "Проект реализован ✅",
    images: ["C:/Users/user/Desktop/interior-miniapp/images/p2-1.jpg", "images/p2-2.jpg"]
  },
  3: {
    title: "Коммерческое пространство для кофейни",
    desc: "Сейчас идёт реализация",
    images: ["images/p3-1.jpg", "images/p3-2.jpg"]
  }
};

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

function openProject(id) {
  const project = projects[id];
  currentImages = project.images;
  currentIndex = 0;

  document.getElementById('project-title').innerText = project.title;
  document.getElementById('project-desc').innerText = project.desc;
  document.getElementById('slider-img').src = currentImages[0];

  showScreen('project');
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  document.getElementById('slider-img').src = currentImages[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  document.getElementById('slider-img').src = currentImages[currentIndex];
}

function showService(price) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.service').forEach(s => s.classList.remove('active'));

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
    alert("Заполните телефон и площадь");
    return;
  }

  tg.sendData(JSON.stringify(data));
  tg.close();
}

