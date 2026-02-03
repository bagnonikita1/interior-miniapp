const tg = window.Telegram.WebApp;
tg.expand();

let currentImages = [];
let currentIndex = 0;

const projects = {
  1: {
    title: "Квартира для мужчины",
    images: ["./images/p1-1.jpg", "./images/p1-2.jpg"]
  },
  2: {
    title: "Квартира L-town",
    images: [
      "./images/p2-1.jpg",
      "./images/p2-2.jpg",
      "./images/p2-3.jpg",
      "./images/p2-4.jpg",
      "./images/p2-5.jpg",
      "./images/p2-6.jpg",
      "./images/p2-7.jpg",
      "./images/p2-8.jpg",
      "./images/p2-9.jpg",
      "./images/p2-10.jpg",
      "./images/p2-11.jpg",
      "./images/p2-12.jpg",
      "./images/p2-13.jpg"
    ]
  },
  3: {
    title: "Коммерческое пространство",
    images: ["./images/p3-1.jpg", "./images/p3-2.jpg"]
  }
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function openPortfolio() { showScreen('portfolio'); }
function openServices() { showScreen('services'); }
function openForm() { showScreen('form'); }
function goHome() { showScreen('home'); }

function openProject(id) {
  const p = projects[id];
  currentImages = p.images;
  currentIndex = 0;
  document.getElementById('project-title').innerText = p.title;
  updateImage();
  showScreen('project');
}

function updateImage() {
  document.getElementById('slider-img').src = currentImages[currentIndex];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateImage();
}

/* СВАЙП */
let startX = 0;
const swipeArea = document.getElementById('swipe-area');

swipeArea.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

swipeArea.addEventListener('touchend', e => {
  const diff = startX - e.changedTouches[0].clientX;
  if (diff > 50) nextImage();
  if (diff < -50) prevImage();
});

/* УСЛУГИ */
function showService(price) {
  document.querySelectorAll('.service').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

  document.getElementById(`service-${price}`).classList.add('active');
  document.getElementById(`tab-${price}`).classList.add('active');
}

function sendForm() {
  const data = {
    phone: phone.value,
    area: area.value,
    comment: comment.value
  };
  tg.sendData(JSON.stringify(data));
  tg.close();
}
