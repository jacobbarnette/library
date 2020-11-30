let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author')
let bookPages = document.getElementById('pages');
let hasRead = document.getElementById('hasRead');
let addBookBtn = document.getElementById('addBookBtn');


let myLib = [];

addBookBtn.addEventListener('click',function(){
    bookTitle = title.value;
    bookAuthor = author.value;
    bookPages = pages.value;
    hasRead = true;
    let book = new Book(bookTitle, bookAuthor, bookPages, hasRead);
    console.log(book);
    myLib.push(book);
    console.log(myLib);
    
});

function Book(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
 
}

