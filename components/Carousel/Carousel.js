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


function makeCarousel() {
  let carouselParent = document.createElement('div');
  carouselParent.classList.add("carousel");

  let leftButton = document.createElement('div');
  leftButton.classList.add("left-button");

  let mountainImg = document.createElement('img');
  mountainImg.src = "./assets/carousel/mountains.jpeg"

  let computerImg = document.createElement('img');
  computerImg.src = document.createElement("./assets/carousel/computer.jpeg");

  let treesImage = document.createElement('img');
  treesImage.src = "./assets/carousel/trees.jpeg";

  let turntableImage = document.createElement('img');
  turntableImage.src = "./assets/carousel/trees.jpeg";

  let rightButton = document.createElement('div');
  rightButton.classList.add("right-button");

  carouselParent.appendChild(leftButton);
  carouselParent.appendChild(mountainImg);
  carouselParent.appendChild(computerImg);
  carouselParent.appendChild(treesImage);
  carouselParent.appendChild(turntableImage);
  carouselParent.appendChild(rightButton);

  return carouselParent;
}