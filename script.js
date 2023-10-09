function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function playMusic() {
  var audio = new Audio();

  audio.src = './assets/msc1.mp3';
  audio.play();
}
