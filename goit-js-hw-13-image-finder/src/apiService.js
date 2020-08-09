const KEY = '17830816-9b8531d259e8c45339bfe655c';
const SEARCH =
    'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';
const PER_PAGE = 12;

export default function(search, currentPage, callback) {
    const URL =
        SEARCH +
        'page=' +
        currentPage +
        '&q=' +
        search +
        '&per_page=' +
        PER_PAGE +
        '&key=' +
        KEY;
    fetch(URL)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => error);
}