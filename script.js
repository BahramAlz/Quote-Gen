let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

btn.addEventListener("click", getQuote);

async function getQuote() {
    const res = await fetch("http://api.quotable.io/random")
    const data = await res.json();

    quote.innerHTML = `"${data.content}"`; 
    author.innerHTML = data.author;
}