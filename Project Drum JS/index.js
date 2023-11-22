// document.querySelector("button").addEventListener("click", handleClick );

// function handleClick(){
//     alert("I Got Clicked")
// }


//or you could use 
// document.querySelector("button").addEventListener("click", function(){
//     alert("i got clicked");
// })
    

// to Called all the elements we can use

var numberOfDrum = document.querySelectorAll(".drum").length;


for(var i=0; i<numberOfDrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
        var buttoninnerHTML = this.innerHTML;

        makeSound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);
    });
}


document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

});

function makeSound(key){


    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash1 = new Audio("sounds/crash.mp3");
            crash1.play();
            break;
        case "k":
            var kick1 = new Audio("sounds/kick-bass.mp3");
            kick1.play();
            break;
        case "l":
            var snare1 = new Audio("sounds/snare.mp3");
            snare1.play();
            break;
        default: console.log(buttoninnerHTML)
            break;
    }

}

function buttonAnimation(currentKey){
    var activateB = document.querySelector("." + currentKey);
    activateB.classList.add("pressed");

    setTimeout(function(){
        activateB.classList.remove("pressed");
    }, 100);

}
