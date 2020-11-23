let myLib = [];
let addBookBtn = document.getElementById('modalBtn');

function createBook(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

createBook.prototype.info = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`);
}

let book1 = new createBook('First Book', 'Jacob Barnette', '250 pages', 'read');
let book2 = new createBook('Book Two', 'Jacob Barnette', '350 pages', 'read');  

function addBook() { 
    myLib.push();
    for(let i = 0; i <= myLib.length; i++)
        for(property in myLib[i]) {
            console.log(this.property);
        }           
        
    }
     
addBook()