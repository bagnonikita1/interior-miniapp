const tg = window.Telegram.WebApp;
tg.expand();

let currentImages = [];
let currentIndex = 0;

const projects = {
  1: { images: ["images/p1-1.jpg","images/p1-2.jpg","images/p1-3.jpg"] },
  2: { images: Array.from({length:13},(_,i)=>`images/p2-${i+1}.jpg`) },
  3: { images: ["images/p3-1.jpg","images/p3-2.jpg","images/p3-3.jpg"] }
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goHome(){ showScreen('home'); }
function openPortfolio(){ showScreen('portfolio'); }
function openServices(){ showScreen('services'); }
function openForm(){ showScreen('form'); }

function openProject(id){
  currentImages = projects[id].images;
  currentIndex = 0;
  updateImage();
  showScreen('project');
}

function updateImage(){
  slider-img.src = currentImages[currentIndex];
  counter.innerText = ${currentIndex+1} / ${currentImages.length};
}

function nextImage(){
  currentIndex = (currentIndex+1)%currentImages.length;
  updateImage();
}

function prevImage(){
  currentIndex = (currentIndex-1+currentImages.length)%currentImages.length;
  updateImage();
}

function showService(price){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.service').forEach(s=>s.classList.remove('active'));

  if(price===2100){
    document.querySelectorAll('.tab')[0].classList.add('active');
    document.getElementById('service-2100').classList.add('active');
  } else {
    document.querySelectorAll('.tab')[1].classList.add('active');
    document.getElementById('service-2500').classList.add('active');
  }
}

function sendForm(){
  tg.sendData(JSON.stringify({
    phone: phone.value,
    area: area.value,
    comment: comment.value
  }));
  tg.close();
}
