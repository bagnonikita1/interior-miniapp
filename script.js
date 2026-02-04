const viewer = document.getElementById('viewer');
const viewerImage = document.getElementById('viewerImage');
const projectTitle = document.getElementById('project-title');
const imageCounter = document.getElementById('imageCounter');

let images = [];
let currentIndex = 0;

/* ===== МАССИВЫ ФОТО ===== */

// Проект 1 — квартира для мужчины
const project1Images = [
  'images/p1-1.jpg',
  'images/p1-2.jpg',
  'images/p1-3.jpg'
];

// Проект 2 — Квартира L-town (13 фото)
const project2Images = [
  'images/p2-1.jpg',
  'images/p2-2.jpg',
  'images/p2-3.jpg',
  'images/p2-4.jpg',
  'images/p2-5.jpg',
  'images/p2-6.jpg',
  'images/p2-7.jpg',
  'images/p2-8.jpg',
  'images/p2-9.jpg',
  'images/p2-10.jpg',
  'images/p2-11.jpg',
  'images/p2-12.jpg',
  'images/p2-13.jpg'
];

// Проект 3 — коммерческое пространство
const project3Images = [
  'images/p3-1.jpg',
  'images/p3-2.jpg',
  'images/p3-3.jpg'
];

/* ===== ЛОГИКА VIEWER ===== */

function openProject(title, imgs) {
  images = imgs;
  currentIndex = 0;
  projectTitle.innerText = title;
  viewer.style.display = 'flex';
  updateViewer();
}

function closeViewer() {
  viewer.style.display = 'none';
}

function updateViewer() {
  viewerImage.src = images[currentIndex];
  imageCounter.innerText = ${currentIndex + 1} / ${images.length};
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateViewer();
  }
}

function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateViewer();
  }
}
