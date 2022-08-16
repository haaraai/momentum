const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

const getNum = () => {
    return Math.floor(Math.random() * 20 + 1);
};
let dataNum = getNum();

async function getQuotes() {
    const quotes = (src = './js/data.json');
    const res = await fetch(quotes);
    const data = await res.json();

    quote.textContent = `${data[dataNum].quote}`;
    author.textContent = `${data[dataNum].author}`;
}
getQuotes();


changeQuote.addEventListener('click', () => {
if ((dataNum + 1) > 19) {
    dataNum = 1;
}
else {
    dataNum++;
}
getQuotes();
});
