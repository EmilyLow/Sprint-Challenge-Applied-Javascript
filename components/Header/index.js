// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let header = document.createElement('div');
    header.classList.add("header");

    let date = document.createElement('span');
    date.classList.add("date");

    let nameHeader = document.createElement('h1');

    let temp = document.createElement("span");
    temp.classList.add("temp");
    
    //Adding together

    header.appendChild(date);
    header.appendChild(nameHeader);
    header.appendChild(temp);

    //Adding content

    date.textContent = "March 28, 2019";
    nameHeader.textContent = "Lambda Times";
    temp.textContent = "98°";

    return header;


}
const headerContainer = document.querySelector(".header-container");
headerContainer.append(Header());
