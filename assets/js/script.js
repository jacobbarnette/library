let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author')
let bookPages = document.getElementById('pages');
let hasRead = document.getElementById('hasRead');
let addBookBtn = document.getElementById('addBookBtn');
let content = document.getElementById('content');
let card = document.getElementById('card');
let i = 0;
let newBook;
let counter = 0;
let myLib = [];
let makecard;


addBookBtn.addEventListener('click',function(e){
    e.preventDefault();
    console.log(counter);
    let book = {
        bookTitle : title.value,
        bookAuthor :author.value,
        bookPages :pages.value,
        hasRead : true,
    }
    myLib.push(book);

    //loopThroughArr(counter);
    //removeBook();
    renderBookCard();
    
    
});
 
// function loopThroughArr(counter){
//     for(let i = 0; i <= myLib.length; i++) {
//         if(counter === 0) {
//             let makeCard = document.createElement('div');
//             makeCard.classList = "bg-primary card card-body bookCard";
//                 for(const property in myLib[i]) {  
//                     let newInfo =  document.createElement('p');
//                     newInfo.textContent =  myLib[i][property];
//                     makeCard.appendChild(newInfo);
//                     content.appendChild(makeCard); 
//                     counter = 1;
//         }} else if(counter === counter) {
//             let makeCard = document.createElement('div');
//             makeCard.classList = "bg-primary card card-body bookCard";
//                 for(const property in myLib[i]) {  
//                     let newInfo =  document.createElement('p');
//                     newInfo.textContent =  myLib[i][property];
//                     makeCard.appendChild(newInfo);
//                     content.appendChild(makeCard);
//         }
//     }
//     } 
// return counter;
// }

function removeBook (){
    for(let x = 0; x <= bookCard.length; x++) {
        let x = 0;
        bookCard[x].addEventListener('click', function(){ 
            console.log(this);
            myLib.pop(this);
            x++;
            return x;
        })
    }
}


function renderBookCard() {
   if(myLib.length <= 0)
    for(let i = 0; i<myLib.length; i++) {
        createCard(myLib[i]);
    } else (myLib.length > 0)
        createCard(myLib[i]);
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
  newBook = new Book(title, author, pages, read);
  myLib.push(newBook);
  renderBookCard();
}

//create dom elements from array
function createCard(item){
    const makeCard = document.createElement('div');
    const titleDiv = document.createElement('p');
    const authorDiv = document.createElement('p');
    const pageDiv = document.createElement('p');
    const rempveBtn = document.createElement('button')
    const readBtn = document.createElement('button');

    makeCard.classList = 'bg-primary card card-body bookCard';
    content.appendChild(makeCard); 

    titleDiv.textContent = item.bookTitle;
    makeCard.appendChild(titleDiv);

    authorDiv.textContent = item.bookAuthor;
    makeCard.appendChild(authorDiv);

    pageDiv.textContent = item.bookPages;
    makeCard.appendChild(pageDiv)
    
    return makeCard;
}