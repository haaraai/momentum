const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const body = document.querySelector('body');
const userName = document.querySelector('.name');

// Date, time and greeting //

const currentDate = new Date();
const currentHour = currentDate.getHours();
const dayTime = ['night', 'morning', 'afternoon', 'evening'];

const getTimeOfDay = () => {
      if (currentHour < 6) {
            return dayTime[0];
      }
      else if (currentHour >= 6 && currentHour < 12) {
            return dayTime[1];
      }
      else if (currentHour >= 12 && currentHour < 18) {
            return dayTime[2];
      }
      else {
            return dayTime[3];
      }
};


const timeOfDay = getTimeOfDay();

const showGreeting = () => {
      greeting.textContent = `Good ${timeOfDay},`;
};

const showDate = () => {
      const currentDate = new Date();
      const options = { weekday: 'long', month: 'long', day: 'numeric' };
      date.textContent = currentDate.toLocaleDateString('en-US', options);
};

const showTime = () => {
      const currentDate = new Date();
      time.textContent = currentDate.toLocaleTimeString('en-GB', { hour12: false });
      showDate();
      getTimeOfDay();
      showGreeting();
      setTimeout(showTime, 1000);
};
showTime();


// Input & storage //

const setLocalStorage = () => {
      localStorage.setItem('name', userName.value);
};
window.addEventListener('beforeunload', setLocalStorage);

const getLocalStorage = () => {
      if (localStorage.getItem('name')) {
            userName.value = localStorage.getItem('name');
      }
};
window.addEventListener('load', getLocalStorage);






