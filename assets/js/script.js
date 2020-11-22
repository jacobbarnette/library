let myLib = []; 
let card = document.getElementById('card');

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

book.prototype.info = function () {
    console.log(`${this.title} by ${this.author}, ${pages}, ${read}`);
}

// card.addEventListener('mouseover', function(){
//     console.log('hi');
//     card.className = 'shadow p-3 mb-5 rounded';
// });