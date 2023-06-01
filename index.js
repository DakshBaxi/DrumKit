
for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        makeSound(this.innerHTML);
    });

}
 



function makeSound(key){
    switch (key) {
        case "w":
              var play = new Audio("sounds/tom-1.mp3");
     play.play();
            break;
            case "a":
                var play = new Audio("sounds/tom-2.mp3");
       play.play();
              break;
              case "s":
                var play = new Audio("sounds/tom-3.mp3");
       play.play();
              break;
              case "d":
                var play = new Audio("sounds/tom-4.mp3");
       play.play();
              break;
              case "j":
                var play = new Audio("sounds/crash.mp3");
       play.play();
              break;
              case "k":
                var play = new Audio("sounds/kick-bass.mp3");
       play.play();
              break;
              case "l":
                var play = new Audio("sounds/snare.mp3");
       play.play();
              break;
        default:

            break;
    }
}

addEventListener("keydown", function(event){
   makeSound(event.key);
}
);
