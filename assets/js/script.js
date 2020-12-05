let myLib = [];
let sum = 0;
let i = 0;
let title = document.getElementById('title');
let author = document.getElementById('author');
let bookPages = document.getElementById('pages');
let pagesRead = document.getElementById('pagesRead');
let addBookBtn = document.getElementById('addBookBtn');
let content = document.getElementById('content');
let completedBooks = 0;

addBookBtn.addEventListener('click', createBook);

//create book obj push into myLib arr
function createBook(e){
    e.preventDefault()
    let newBook;
    newBook = new Book(title, author, bookPages, pagesRead);
    myLib.push(newBook);
    //prevent duplicating cards throughout array
    renderBookCards(myLib);
}

function Book(title, author, bookPages, pagesRead) {
    this.title =  title.value,
    this.author = author.value,
    this.bookPages = bookPages.value,
    this.pagesRead = pagesRead.value
}

//create dom elements for books
function createCard(newBook){
    let booksOwned = document.getElementById('booksOwned');
    let totalPages = document.getElementById('totalPages');
    let totalBooksRead = document.getElementById('booksRead');
    const bookCard = document.createElement('div');
    const bookTitleP = document.createElement('p');
    const bookAuthorP =  document.createElement('p');
    const bookpages =  document.createElement('p');
    const bookpagesRead = document.createElement('p');
    const removeBtn = document.createElement('button');
    const readBookBtn = document.createElement('button');
    const btnContainer = document.createElement('div');

    bookCard.setAttribute('id', myLib.indexOf(myLib[i]));
    bookTitleP.textContent = newBook.title;
    bookCard.appendChild(bookTitleP);

    bookAuthorP.textContent = newBook.author;
    bookCard.appendChild(bookAuthorP);

    bookpages.textContent = newBook.bookPages;
    bookCard.appendChild(bookpages);

    bookpagesRead.textContent = newBook.pagesRead;
    bookCard.appendChild(bookpagesRead);

    removeBtn.classList = 'btn btn-danger bookCardBtn removeBtn';
    removeBtn.textContent = 'Delete';
    removeBtn.addEventListener('click', function(){
      
       sum -= (Number(bookpagesRead.textContent))
       console.log(sum);
       totalPages.textContent = sum;
        
        myLib.splice(myLib.indexOf(myLib[i]), 1);
        let booksOwned = document.getElementById('booksOwned');
        if(myLib.length === 0 ){
            booksOwned.textContent = 0;
            totalBooksRead.textContent = myLib.length;
        } else {
            booksOwned.textContent = myLib.length;
            totalBooksRead.textContent = completedBooks;
        }
          
        content.removeChild(bookCard);
    })
    readBookBtn.classList = 'btn btn-primary bookCardBtn hasRead'; 
    readBookBtn.textContent = 'Completed';
    readBookBtn.addEventListener('click', function(){
        if(completedBooks > myLib.length) {
            totalBooksRead.textContent = myLib.length;
        } else if(completedBooks < myLib.length){
            completedBooks++;
            totalBooksRead.textContent = completedBooks;
        }
        
    })
    btnContainer.appendChild(removeBtn);
    btnContainer.appendChild(readBookBtn);
    bookCard.appendChild(btnContainer);
   

    bookCard.classList = 'bg-primary card card-body bookCard';
    content.appendChild(bookCard);
    
    // lib stats
    
    booksOwned.textContent = myLib.length;
            sum += Number(myLib[i].pagesRead);
            console.log(sum);
            totalPages.textContent = sum;
    totalBooksRead.textContent = completedBooks;
   
    }
    




function renderBookCards() {
    if(i <= myLib.length - 1 && i === 0) {
        createCard(myLib[i], i);
        i++;
    } else if (i <= myLib.length) {
        createCard(myLib[i], i);
        i++;
    }
    return i;
}

