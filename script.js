// const colorBtn = document.querySelector('.colorBtn');

// const bodyBcg = document.querySelector('body');

// const colors = ['yellow','red','green','#3b5998'];

// colorBtn.addEventListener('click',changeColor);

// function changeColor () {
//     let random = Math.floor(Math.random() * colors.length)
//     bodyBcg.style.backgroundColor = colors[random];
// }

// const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
// const hexBtn = document.querySelector('.hexBtn');
// const bodyBcg = document.querySelector('body');
// const hex = document.querySelector('.hex');

// hexBtn.addEventListener('click',getHex);

// function getHex () {
//     let hexCol = '#';

//     for(let i = 0 ; i<6;i++) {
//         let random = Math.floor(Math.random() * hexNumbers.length);
//        // console.log(random)
//        hexCol += hexNumbers[random];
//        //console.log(hexCol)
//     }

//     bodyBcg.style.backgroundColor = hexCol;
//     hex.innerHTML = hexCol;
// }



const quotes = [
    {
        name:'stepen King',
        quote:'get busy living or get busy dying.'
    },
    {
        name:'John Kennedy',
        quote:'Thise who dare to fail miserably can achieve greatly.'
    },
    {
        name:'Abraham Lincoin',
        quote:'Im a success today because I had a freind who believed in me and i didnt have the heart to let him down.'
    },
    {
        name:'Leonardo Do Vinci',
        quote:' It hed long since come to my attention that people of accomplishment rareiy sat back and let things happen to them.They went out and happend to things .'
    },
    {
        name:'Leo tolstoy',
        quote:'If you want to be happy ,be.'
    }

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', disPlayQuote);

function disPlayQuote() {
    let number = Math.floor (Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}