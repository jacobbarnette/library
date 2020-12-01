let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author')
let bookPages = document.getElementById('pages');
let hasRead = document.getElementById('hasRead');
let addBookBtn = document.getElementById('addBookBtn');
let content = document.getElementById('content');
let card = document.getElementById('card');
let i = 0;


let myLib = [];

addBookBtn.addEventListener('click',function(e){
    e.preventDefault();
   
    let book = {
        bookTitle : title.value,
        bookAuthor :author.value,
        bookPages :pages.value,
        hasRead : true,
    }
    myLib.push(book);
   // console.log(myLib);
    loopThroughArr();
    
});
 


function loopThroughArr(){
    myLib.forEach(function(book){
        let makeCard = document.createElement('div');
        makeCard.classList = "bg-primary card card-body bookCard";
        for(const property in myLib[i]) {  
            let newInfo =  document.createElement('p');
           
           
            newInfo.textContent =  myLib[i][property];
            makeCard.appendChild(newInfo);
            content.appendChild(makeCard);
            console.log(newInfo)
        }
        createCard();
    }
    )};
//}

 
         
