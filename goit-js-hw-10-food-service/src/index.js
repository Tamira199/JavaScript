import './styles.css';
import menu from './menu.json';

const source = document.querySelector('#menu-template').innerHTML.trim();
const template = Handlebars.compile(source);

const greatMenu = template(menu);

const container = document.querySelector('#menu-container');
container.innerHTML = greatMenu;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const LOCAL_STORAGE_KEY = 'THEME_SWICH';
const checkSwich = document.querySelector('input');
const body = document.querySelector('body');

const currentTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
body.classList.add(currentTheme);
if (currentTheme === 'dark-theme') {
    checkSwich.checked = true;
} else {
    checkSwich.checked = false;
}

checkSwich.addEventListener('input', checkSwichState);

function checkSwichState(swich) {
    if (swich.target.checked === true) {
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
        localStorage.setItem(LOCAL_STORAGE_KEY, Theme.DARK);
        return;
    }
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem(LOCAL_STORAGE_KEY, Theme.LIGHT);
}