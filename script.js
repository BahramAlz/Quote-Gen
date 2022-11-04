let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

btn.addEventListener("click", getQuote);

async function getQuote() {
    const res = await fetch("https://type.fit/api/quotes")
    const data = await res.json();

    quote.innerHTML = `"${data.text}"`; 
    author.innerHTML = data.author;
}