/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src=""./assets/carousel/trees.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

console.log("test");

let carouselContainer = document.querySelector(".carousel-container");

carouselContainer.append(makeCarousel());

let leftB = document.querySelector('.left-button');
let rightB = document.querySelector('.right-button');

leftB.addEventListener('click', (event) => console.log("clicked L"));
rightB.addEventListener('click', (event) => console.log("clicked R"));




function makeCarousel() {
  let carouselParent = document.createElement('div');
  carouselParent.classList.add("carousel");

  let leftButton = document.createElement('div');
  leftButton.classList.add("left-button");

  let mountainImg = document.createElement('img');
  let computerImg = document.createElement('img');
  let treesImage = document.createElement('img');
  let turntableImage = document.createElement('img');
  
  let rightButton = document.createElement('div');
  rightButton.classList.add("right-button");

  carouselParent.appendChild(leftButton);
  carouselParent.appendChild(mountainImg);
  carouselParent.appendChild(computerImg);
  carouselParent.appendChild(treesImage);
  carouselParent.appendChild(turntableImage);
  carouselParent.appendChild(rightButton);


  mountainImg.src = "./assets/carousel/mountains.jpeg";
  computerImg.src = "./assets/sir.jpg";
  treesImage.src = "./assets/carousel/trees.jpeg";
  turntableImage.src = "./assets/carousel/trees.jpeg";

 
  return carouselParent;
}

console.log(makeCarousel());