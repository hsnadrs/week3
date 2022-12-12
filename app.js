const image = document.getElementById ('myImage');
const imageURL= image.src;
//const visibility = image.style.display;
//console.log (visibility);
const button= document.getElementById ('button');
button.addEventListener ('click',  function() {
    if (image.style.display === "none") {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
});

/*

// Activity 1
const toggleBtn = document.querySelector('#toggleBtn')
const toggleImg = document.getElementsByClassName('toggleImg')[0]

toggleBtn.addEventListener('click', () => {
    if(toggleImg.style.display === "none"){
        toggleImg.style.display = "flex"
    } else {
        toggleImg.style.display = "none"
    }    
})
*/
