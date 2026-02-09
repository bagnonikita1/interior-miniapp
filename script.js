document.addEventListener('DOMContentLoaded', () => {

  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();

  let currentImages = [];
  let currentIndex = 0;

  const projects = {
    1: { images: ["images/p1-1.jpg","images/p1-2.jpg","images/p1-3.jpg"] },
    2: { images: Array.from({length:13},(_,i)=>`images/p2-${i+1}.jpg`) },
    3: { images: ["images/p3-1.jpg","images/p3-2.jpg","images/p3-3.jpg"] }
  };

  window.showScreen = function(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.

> Никита:
remove('active'));
    document.getElementById(id).classList.add('active');
  }

  window.goHome = () => showScreen('home');
  window.openPortfolio = () => showScreen('portfolio');
  window.openServices = () => showScreen('services');
  window.openForm = () => showScreen('form');

  window.openProject = function(id) {
    currentImages = projects[id].images;
    currentIndex = 0;
    updateImage();
    showScreen('project');
  }

  function updateImage() {
    document.getElementById('slider-img').src = currentImages[currentIndex];
    document.getElementById('counter').innerText =
      `${currentIndex + 1} / ${currentImages.length}`;
  }

  window.nextImage = function() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateImage();
  }

  window.prevImage = function() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateImage();
  }

  window.sendForm = function() {
    tg.sendData(JSON.stringify({
      phone: phone.value,
      area: area.value,
      comment: comment.value
    }));
    tg.close();
  }

})
