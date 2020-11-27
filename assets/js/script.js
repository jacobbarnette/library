let myLib = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(obj){
    myLib.push(obj);
}

function loopThroughProperties() {
    for(let i = 0; i <= myLib.length; i++){
        for(const property in myLib[i]){
            console.log(myLib[i][property])
    }
}
}

let book1 = new Book('Book 1', 'Jacob Barnette', '987', 'true');
let book2 = new Book('Book 2', 'Jacob Barnette', '231', 'true');

addBook(book1);
addBook(book2);
loopThroughProperties();