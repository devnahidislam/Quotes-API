
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote =document.getElementById("newQuote");
const tweetMe =document.getElementById("tweetMe");
let realData = "";
let quotesData = "";

const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}___${quotesData.author}`;
  window.open(tweetPost);
}

const getNewQuote = () => {
  let randomQuote = Math.floor(Math.random() * 1645);
  quotesData = realData[randomQuote];
  quote.innerText = `${quotesData.text}`;
  quotesData.author == null ? author.innerText = "Unknown" : author.innerText = `${quotesData.author}`;
}
const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realData = await data.json();
    getNewQuote();
  }catch (error) {}
};
tweetMe.addEventListener("click", tweetNow);
newQuote.addEventListener("click", getNewQuote);
getQuotes();