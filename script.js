const tg = window.Telegram.WebApp;
tg.expand();

let currentImages = [];
let currentIndex = 0;

const projects = {
  1: {
    images: ["images/p1-1.jpg", "images/p1-2.jpg", "images/p1-3.jpg"]
  },
  2: {
    images: [
      "images/p2-1.jpg",
      "images/p2-2.jpg",
      "images/p2-3.jpg",
      "images/p2-4.jpg",
      "images/p2-5.jpg",
      "images/p2-6.jpg",
      "images/p2-7.jpg",
      "images/p2-8.jpg",
      "images/p2-9.jpg",
      "images/p2-10.jpg",
      "images/p2-11.jpg",
      "images/p2-12.jpg",
      "images/p2-13.jpg"
    ]
  },
  3: {
    images: ["images/p3-1.jpg", "images/p3-2.jpg", "images/p3-3.jpg"]
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
  currentImages = projects[id].images;
  currentIndex = 0;
  updateImage();
  showScreen('project');
}

function updateImage() {
  document.getElementById('slider-img').src = currentImages[currentIndex];
  document.getElementById('counter').innerText =
    ${currentIndex + 1} / ${currentImages.length};
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateImage();
}

/* 🔴 ВОТ ЭТОЙ ФУНКЦИИ НЕ ХВАТАЛО */
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
