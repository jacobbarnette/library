let myLib = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

book.prototype.info = function () {
    console.log(`${this.title} by ${this.author}, ${pages}, ${read}`);
}

