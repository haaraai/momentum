let randomNum = 1;
const getRandomNum = () => {
      randomNum = Math.floor((Math.random() * 20) + 1);
};
getRandomNum();

let bgNum = randomNum.toString().padStart(2, '0');

const setBg = () => {
      const img = new Image();
      img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
      img.onload = () => {
            body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
      };
};
setBg();

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

const getSlideNext = () => {
      bgNum = randomNum.toString().padStart(2, '0');
      if ((randomNum + 1) > 20) {
            randomNum = 1;
            setBg();
      }
      else {
            randomNum++;
            setBg();
      }

};

slideNext.addEventListener('click', () => {
      getSlideNext();
});

const getSlidePrev = () => {
      bgNum = randomNum.toString().padStart(2, '0');
      if ((randomNum - 1) < 1) {
            randomNum = 20;
            setBg();
      }
      else {
            randomNum--;
            setBg();
      }
};

slidePrev.addEventListener('click', () => {
      getSlidePrev();
});