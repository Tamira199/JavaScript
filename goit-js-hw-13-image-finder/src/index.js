import form from './form.hbs';
import './index.css';
import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import api from './apiService.js';
import debounce from 'lodash.debounce';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import * as basicLightbox from '../node_modules/basiclightbox/dist/basicLightbox.min.js';

const refs = {
    body: document.querySelector('body'),
    container: (document.querySelector('.container').innerHTML = form()),
    gallery: document.querySelector('.gallery'),
    searchForm: document.querySelector('#search-form'),
    loadButton: document.querySelector('.load'),
};

let queryText;
let numberPage = 0;

refs.loadButton.addEventListener('click', loadMore);
refs.searchForm.addEventListener('input', debounce(onInput, 500));
refs.gallery.addEventListener('click', goModal);

function onInput({ target }) {
    if (target.value.length > 0) {
        if (target.value != queryText) {
            refs.gallery.innerHTML = '';
            numberPage = 0;
        }

        queryText = target.value;
        numberPage++;
        api(queryText, numberPage, toDo);
    }
}

function toDo(data) {
    const images = data.hits;
    if (images.length === 0) {
        error('Enter correct query!').delay = '2000';
    }
    markup(images);
    refs.loadButton.classList.add('visible');
    if (numberPage > 1) {
        scroll();
    }
}

function markup(data) {
    const markupList = data.reduce((acc, el) => {
        return (
            acc +
            `<li class="item">
<div class="photo-card">
<img src="${el.webformatURL}" data-large="${el.largeImageURL}" alt="" data-action="photo"/>
<div class="stats">
<p class="stats-item">
<i class="material-icons">thumb_up</i>
${el.likes}
</p>
<p class="stats-item">
<i class="material-icons">visibility</i>
${el.views}
</p>
<p class="stats-item">
<i class="material-icons">comment</i>
${el.comments}
</p>
<p class="stats-item">
<i class="material-icons">cloud_download</i>
${el.downloads}
</p>
</div>
</div>
</li>`
        );
    }, '');
    refs.gallery.insertAdjacentHTML('beforeend', markupList);
}

function scroll() {
    window.scrollBy(0, -window.innerHeight * 3);
}

function loadMore() {
    numberPage++;
    api(queryText, numberPage, toDo);
}

function goModal({ target }) {
    if (target.dataset.large) {
        const instance = basicLightbox.create(
            `<img src="${target.dataset.large}">`,
        );
        instance.show();
    }
}