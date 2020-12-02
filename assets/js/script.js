let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author')
let bookPages = document.getElementById('pages');
let hasRead = document.getElementById('hasRead');
let addBookBtn = document.getElementById('addBookBtn');
let content = document.getElementById('content');
let card = document.getElementById('card');
let i = 0;
let x = 0;
let newBook;
let counter = 0;
let myLib = [];
let makecard;

addBookBtn.addEventListener('click',addBook);

function renderBookCard() {
    if(i <= myLib.length -1 && i === 0) {
        createCard(myLib[i]);
        i++;
    } else if (i <= myLib.length) {
        createCard(myLib[i]);
        i++;
    }
    return i;
    }

class Book{
    constructor(title, author, pages, hasRead) {
        this.bookTitle = title.value;
        this.bookAuthor = author.value;
        this.bookPages = pages.value;
        this.hasRead = true;
    }
}

//create book object, push into lib arr
function addBook(e) {
    e.preventDefault();
    newBook = new Book(title, author, pages, hasRead);
    myLib.push(newBook);
    renderBookCard();
}

//create dom elements from array
function createCard(item, i){
    const makeCard = document.createElement('div');
    const titleDiv = document.createElement('p');
    const authorDiv = document.createElement('p');
    const pageDiv = document.createElement('p');
    const removeBtn = document.createElement('button')
    const readBtn = document.createElement('button');
    const btnContainer = document.createElement('div');

    makeCard.classList = 'bg-primary card card-body bookCard';
    makeCard.setAttribute('id', myLib.indexOf(myLib[i]));
    content.appendChild(makeCard); 

    titleDiv.textContent = item.bookTitle;
    makeCard.appendChild(titleDiv);

    authorDiv.textContent = item.bookAuthor;
    makeCard.appendChild(authorDiv);

    pageDiv.textContent = item.bookPages;
    makeCard.appendChild(pageDiv);

    removeBtn.classList = 'btn btn-danger bookCardBtn removeBtn';
    removeBtn.textContent = 'Delete';
    removeBtn.addEventListener('click', function(){
        if(myLib.indexOf(myLib[i] === makeCard.getAttribute('id'))); {
            myLib.splice(myLib.indexOf(myLib[i]), 1);
            renderBookCard();
        }
    })
    btnContainer.appendChild(removeBtn);

    readBtn.classList = 'btn btn-primary bookCardBtn hasRead';
    readBtn.textContent = 'Completed';
    btnContainer.appendChild(readBtn);

    makeCard.appendChild(btnContainer)
  
}