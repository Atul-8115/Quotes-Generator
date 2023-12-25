const getNewQuote = async () => {
    // api for quote
    var url = "https://type.fit/api/quotes"

    const response = await fetch(url)
    const allQuotes = await response.json()
    const index = Math.floor(Math.random()*allQuotes.length)
    console.log(index);

    const quot = allQuotes[index].text
    const auth = allQuotes[index].author
    if(auth == null) {
        auth = "Anonymous"
    }
    const quote = document.querySelector("#quote")
    const author = document.querySelector("#author")

    quote.innerHTML = quot
    author.innerHTML = "~ " + auth

    const tweetButton = document.getElementById('tweet')
    tweetButton.href = "https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;
}

getNewQuote();
