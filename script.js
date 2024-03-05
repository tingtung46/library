const dialog = document.querySelector('#book-popup');
const addBook = document.querySelector('.adding-book');
const navAddBook = document.querySelector('#nav-append')
const closeBtn = document.querySelector('#cancel');

addBook.addEventListener('click', () => {
    dialog.showModal();
});

navAddBook.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});