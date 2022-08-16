let isPlay = false;
let playNum = 0;
const playBtn = document.querySelector('.play');
const playNext = document.querySelector('.play-next');
const playPrev = document.querySelector('.play-prev');
const audioPlayList = document.querySelector('.play-list');
const audio = new Audio();

import playlist from './playlist.js';

playBtn.addEventListener('click', () => {
  audio.src = playlist[playNum].src;
  audio.currentTime = 0;
  if (isPlay === false) {
    audio.play();
    playBtn.classList.toggle('pause');
    isPlay = true;
    addLiColor();
  } else {
    audio.pause();
    isPlay = false;
    playBtn.classList.toggle('pause');
  }
});


playPrev.addEventListener('click', () => {
  isPlay = true;
  playBtn.classList.add('pause');
  if (playNum >= 1) {
    playNum--;
    addLiColor();
  } else {
    playNum = playlist.length - 1;
  }
  audio.src = playlist[playNum].src;
  audio.currentTime = 0;
  audio.play();
});

playNext.addEventListener('click', () => {
  isPlay = true;
  playBtn.classList.add('pause');
  if (playNum < playlist.length - 1) {
    playNum++;
    addLiColor();
  } else {
    playNum = 0;
  }
  audio.src = playlist[playNum].src;
  audio.currentTime = 0;
  audio.play();
});


function addPlayList() {
  playlist.forEach(function (el) {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = el.title;
    audioPlayList.append(li);
  });
}
addPlayList();


function addLiColor() {
  const mainLi = document.querySelectorAll('.play-item');
  for (let i = 0; i < mainLi.length; i++) {
    if (playNum === i) {
      mainLi[i].classList.add('item-active');
    } else {
      mainLi[i].classList.remove('item-active');
    }
  }
}

console.log(playNum);
