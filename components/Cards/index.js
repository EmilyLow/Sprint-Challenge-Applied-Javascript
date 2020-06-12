// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardRequest = axios
.get("https://lambda-times-backend.herokuapp.com/articles")
.then( (result) => {
    
    console.log(result);
    let cardInfo = result["data"]["articles"];
   for (var label in cardInfo) {
       console.log(label);
   }
 

})
.catch ( (err) => {
    console.log("There was a card error: ", err);
});
//headlineText, imgSrc, authorName
function makeCard() {
    let cardParent = document.createElement("div");
    cardParent.classList.add("card");

    let headline = document.createElement("div");
    headline.classList.add("headline");

    let author = document.createElement("div");
    author.classList.add("author");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    let authorImg = document.createElement("img");

    let byline = document.createElement("span");

    //Appending
    cardParent.appendChild(headline);
    cardParent.appendChild(author);

    author.appendChild(imgContainer);

    imgContainer.appendChild(authorImg);

    author.appendChild(byline);

    return cardParent;
}
