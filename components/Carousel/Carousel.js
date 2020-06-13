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

const imgArray = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];
let currentIndex = 0;

let carouselContainer = document.querySelector(".carousel-container");

useCarousel(makeCarousel());




function useCarousel(callback) {

  carouselContainer.append(callback);


  
  mainImage = document.querySelector(".main-image");
  
  //Click events

  let leftB = document.querySelector('.left-button');
  let rightB = document.querySelector('.right-button');

  leftB.addEventListener('click', (event) => { 
    currentIndex = currentIndex -1;
    if (currentIndex < 0) {
      currentIndex = 3;

    }
    mainImage.src = imgArray[currentIndex];

  });
  rightB.addEventListener('click', (event) => {
    currentIndex = currentIndex + 1;
    if (currentIndex > 3) {
      currentIndex = 0;

    }
    mainImage.src = imgArray[currentIndex];

  });

}

function makeCarousel() {
  let carouselParent = document.createElement('div');
  carouselParent.classList.add("carousel");

  let leftButton = document.createElement('div');
  leftButton.classList.add("left-button");

  let startingImage = document.createElement('img');
  startingImage.src = imgArray[currentIndex];
  startingImage.classList.add("main-image");
  startingImage.style.display = "inline";

  
  let rightButton = document.createElement('div');
  rightButton.classList.add("right-button");

  carouselParent.appendChild(leftButton);
  carouselParent.appendChild(startingImage);

  carouselParent.appendChild(rightButton);


 
  
  return carouselParent;
}
