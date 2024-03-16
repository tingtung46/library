const dialog = document.querySelector('#book-popup');
const addBook = document.querySelector('.adding-book');
const navAddBook = document.querySelector('#nav-append')
const closeBtn = document.querySelector('#cancel');
const appendBook = document.querySelector('#append-book');
const bookContainer = document.querySelector('.hero');

addBook.addEventListener('click', () => {
    dialog.showModal();
});

navAddBook.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});

appendBook.addEventListener('submit', addBookToLibrary);

const titleInput = document.querySelector('#book-title');
const authorInput = document.querySelector('#book-author');
const pageNumberInput = document.querySelector('#page-number');
const readInput = document.querySelector('#read');

const library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = pages;
    this.readingStatus = read;
};

function addBookToLibrary(e) {
    const newBook = new Book(
        titleInput.value, 
        authorInput.value, 
        pageNumberInput.value, 
        readInput.checked
    );

    library.push(newBook);

    e.preventDefault();
    dialog.close();
};

function appendNewBook() {
    const book = document.createElement('div');
    
    bookContainer.appendChild(book);
    book.setAttribute('id', `${library.length}`);
    book.setAttribute('class', 'book');

    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pageNumber = document.createElement('p');
    const read = document.createElement('label');
    const checkbox = document.createElement('checkbox');
    const slider = document.createElement('span');
    const remove = document.createElement('button');

    read.append(checkbox, slider);
    read.setAttribute('id', 'read');
    remove.setAttribute('id', 'remove');

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pageNumber);
    book.appendChild(read);
    book.appendChild(remove);
};