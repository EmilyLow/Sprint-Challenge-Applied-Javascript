// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

//Getting data

const topics = document.querySelector(".topics");

const request = axios
.get("https://lambda-times-backend.herokuapp.com/topics")
.then( (result) => {
    console.log(result);
    let topicArray = result["data"]["topics"];
    topicArray.forEach((topic) => {
        console.log(topic);
        let newTab = document.createElement('div');
        newTab.classList.add("tab");
        newTab.textContent = topic;
        topics.appendChild(newTab);

    }

    );
})
.catch ( (err) => {
    console.log("There was a tab error: ", err);
});