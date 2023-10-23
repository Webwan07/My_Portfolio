function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var audio = new Audio();
audio.src = './assets/msc2.mp3';

function playMusic() {
  if (audio.paused || audio.ended) {
    audio.play();
    audio.onended = function() {
    };
  }
}
function openGame() {
    window.open('https://tetrisgamebyjosuan.onrender.com/', '_blank');
}
