//... https://gist.github.com/johnmuir2001

const submitBtn = document.getElementById('submitBtn')
const input = document.getElementById('toDoInput')
const list = document.getElementById('list')
const removeBtn = document.getElementById('removeBtn')

// createElement generates a new element
submitBtn.addEventListener('click', () => {
    // stor the new element in a variable
    let newItem = document.createElement('li')
    // make any changes to the new element (adding the text that is in the input to the new tags text)
    newItem.textContent = input.value
    // appendChild method adds new item to the page so we can see it on the browser
    list.appendChild(newItem)
})

// removeChild method removes a specified child elemnt
removeBtn.addEventListener('click', () => {
    // target the last li element it can find
    let lastItem = document.querySelector('li:last-child')
    // remove the li element from the ul
    list.removeChild(lastItem)
})


// ADD EVENT TO MULTIPLE ELEMENTS
// using the forEach array method to apply the same event listener to multiple items
// return an array of all li elements
const allListItems = document.querySelectorAll('li');

// loop through the array of li elements using the forEach method
allListItems.forEach((listItem) => {
    // the 'listItem' parameter is a reference to each individual item in the array
    listItem.addEventListener('click', (event) => {
        // removing the element that triggered the event (event.target) and removing it from the ul tag
        list.removeChild(event.target)
    })

})

// EVENT BUBBLING
// making use of event bubbling to add a hover effect to each li element whilst only applying the event to the ul tag
list.addEventListener('mouseover', (event) => {
    // gets the textContent of the element that triggered the event (each li tag in the ul) and changing it to uppercase
    event.target.textContent = event.target.textContent.toUpperCase()
})
list.addEventListener('mouseout', (event) => {
    // does the same as the above code but changes the text to lowercase when the mouse leaves the element
    event.target.textContent = event.target.textContent.toLowerCase()
})