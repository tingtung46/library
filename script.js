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

// appendBook.addEventListener('click', addBookToLibrary);

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

function addBookToLibrary() {
    const newBook = new Book(
        titleInput.value, 
        authorInput.value, 
        pageNumberInput.value, 
        readInput.checked
    );

    library.push(newBook);

    appendNewBook(newBook);

    form.reset();
    dialog.close();
};

function appendNewBook(newBook) {
    const book = document.createElement('div');
    
    bookContainer.appendChild(book);
    book.setAttribute('id', `${library.length}`);
    book.setAttribute('class', 'book');

    const title = document.createElement('h3');
    const author = document.createElement('p');
    const pageNumber = document.createElement('p');
    const read = document.createElement('button');
    const remove = document.createElement('button');

    read.setAttribute('id', 'read-status');
    remove.setAttribute('id', 'remove');

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pageNumber);
    book.appendChild(read);
    book.appendChild(remove);

    title.textContent = newBook.title;
    author.textContent = newBook.author;
    pageNumber.textContent = `${newBook.numberOfPages} pages`;
    read.textContent = newBook.readingStatus === true ? 'Read' : 'Not read';
    remove.textContent = 'Remove';

    read.addEventListener('click', () => {
        newBook.readingStatus = !newBook.readingStatus;
        if (newBook.readingStatus === true) {
            read.className = 'true';
            read.textContent = 'Read';
        } else {
            read.className = 'false';
            read.textContent = 'Not read';
        }
    });

    remove.addEventListener('click', removeBook);

    console.log(read);
};

function removeBook(e) {
    const parent = e.target.parentNode;
    library.splice(parent, 1);
    parent.remove();
};

console.log(library);

const form = document.querySelector('form');
const titleErr = document.querySelector('#book-title + .error');
const authorErr = document.querySelector('#book-author + .error');

const validateInp = () => {
    if (titleInput.validity.valid || titleInput.value.length === 0) {
        titleErr.textContent = '';
        titleErr.className = '';
        titleInput.className = 'valid';
    } 
    
    if (authorInput.validity.valid || authorInput.value.length === 0) {
        authorErr.textContent = '';
        authorErr.className = '';
        authorInput.className = 'valid';
    }
};

titleInput.addEventListener('input', validateInp);

authorInput.addEventListener('input', validateInp);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (titleInput.validity.valueMissing) {
        titleErr.textContent = '*You need to enter a book title';
        titleErr.className = 'error';
        titleInput.className = 'invalid';
        return;
    }

    if (authorInput.validity.valueMissing) {
        authorErr.textContent = '*You need to enter a book author';
        authorErr.className = 'error';
        authorInput.className = 'invalid';
        return;
    }

    addBookToLibrary();
});