

Quotes = [  {quote:"“Be yourself; everyone else is already taken.”",author:"Oscar Wilde"},
            {quote:"“So many books, so little time.”",author:"Frank Zappa"},
            {quote:"“A room without books is like a body without a soul.”",author:"Marcus Tullius Cicero"},
            {quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",author:"Bernard M. Baruch"},
            {quote:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",author:"William W. Purkey"},
            {quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",author:"Dr. Seuss"},
            {quote:"“You only live once, but if you do it right, once is enough.”",author:"Mae West"},
            {quote:"“In three words I can sum up everything I've learned about life: it goes on.”",author:"Robert Frost"},
            {quote:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",author:"J.K. Rowling, Harry Potter and the Goblet of Fire"},
            {quote:"“If you tell the truth, you don't have to remember anything.”",author:"Mark Twain"}
            ]

document.getElementById("quote").innerHTML = Quotes[0].quote;
document.getElementById("author").innerHTML = Quotes[0].author;
var o = 0;

function displayQuote(){
    var n = Math.floor(Math.random() * 10);
    while(o==n){
        n = Math.floor(Math.random() * 10);
    }
    document.getElementById("quote").innerHTML = Quotes[n].quote;
    document.getElementById("author").innerHTML = Quotes[n].author;
    o=n;
}
