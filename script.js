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

function loadGameHtml() {
    const gameHtmlPath = 'tetris/game.html';
    fetch(gameHtmlPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(htmlContent => {
            
            const titleElement = document.querySelector('.title');
            titleElement.innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

