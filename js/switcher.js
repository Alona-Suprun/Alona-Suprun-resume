const body = document.querySelector('body');
const sideboard = document.querySelector('.sideboard');
const toolbar = document.querySelector('.toolbar');
const aboutMe = document.querySelector('.about-me');
const socialsIcon1 = document.querySelector('#socials-icon1');
const socialsIcon2 = document.querySelector('#socials-icon2');
const socialsIcon3 = document.querySelector('#socials-icon3');

const switcher = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchTheme = (oldTheme, newTheme) => {
  aboutMe.classList.add(newTheme);
  aboutMe.classList.remove(oldTheme);
  sideboard.classList.add(newTheme);
  sideboard.classList.remove(oldTheme);
  toolbar.classList.add(newTheme);
  toolbar.classList.remove(oldTheme);
  socialsIcon1.classList.add(newTheme);
  socialsIcon1.classList.remove(oldTheme);
  socialsIcon2.classList.add(newTheme);
  socialsIcon2.classList.remove(oldTheme);
  socialsIcon3.classList.add(newTheme);
  socialsIcon3.classList.remove(oldTheme);
  localStorage.setItem('custom-theme', newTheme);
};

const onChangeSwitcherTheme = e => {
  if (e.target.checked) {
    switchTheme(Theme.LIGHT, Theme.DARK);
  } else {
    switchTheme(Theme.DARK, Theme.LIGHT);
  }
};

switcher.addEventListener('change', onChangeSwitcherTheme);

const saveTheme = () => {
  if (localStorage.getItem('custom-theme') === Theme.DARK) {
    aboutMe.classList.add(Theme.DARK);
    sideboard.classList.add(Theme.DARK);
    toolbar.classList.add(Theme.DARK);
    socialsIcon1.classList.add(Theme.DARK);
    socialsIcon2.classList.add(Theme.DARK);
    socialsIcon3.classList.add(Theme.DARK);
    switcher.checked = true;
  } else {
    aboutMe.classList.add(Theme.LIGHT);
    sideboard.classList.add(Theme.LIGHT);
    toolbar.classList.add(Theme.LIGHT);
    socialsIcon1.classList.add(Theme.LIGHT);
    socialsIcon2.classList.add(Theme.LIGHT);
    socialsIcon3.classList.add(Theme.LIGHT);
  }
};

saveTheme();
