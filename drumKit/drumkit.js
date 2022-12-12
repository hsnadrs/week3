let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

document.addEventListener('keypress', (keyValue) => { 

    let value = keyValue;
    value= value.keyCode;// get pressed key ASCII code
        console.log(value);
    goPlay (value);

})

//to detect mouse click//

let noOfSounds = document.querySelectorAll(".key").length;//find all key classes here 9


    for(let i=0 ; i<noOfSounds ; i++){
        document.querySelectorAll(".key")[i].addEventListener("click", function(){ //add listner to every key class
            let alpha= this.querySelector("p").innerHTML;// return content of <p> inside class i
            alpha= alpha.toLowerCase ( );// it is written capital, so change to lower case
            alpha= alpha.charCodeAt(0);//return ascii code
            goPlay(alpha); // play sound
           
        });
    }// end for
// play sound on noth click or key pressed
 function goPlay (Value) {
    // a
    console.log(Value);
    if (Value == 97) {  
        boom.play();
    }
    // s
    else if (Value  == 115) {
        clap.play();
    }
    // d
    else if (Value  == 100) {
        hihat.play();
    }
    // f
    else if (Value  == 102) {
        kick.play();
    }
    // g
    else if (Value  == 103) {
        openhat.play();
    }
    // h
    else if (Value  == 104) {
        ride.play();
    }
    // j
    else if (Value == 106) {
        snare.play();
    }
    // k
    else if (Value == 107) {
        tink.play();
    }
    // l
    else if (Value == 108) {
        tom.play();
    }
}

