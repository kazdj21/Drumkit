//document.querySelector(".w").addEventListener("click", function () {alert("I got clicked!");});
let classArr = document.querySelectorAll(".drum")
for (let i = 0; i < classArr.length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

  switch (i) {
    case 0:
      new Audio("sounds/tom-1.mp3").play();
      buttonAnimation(i);
      break;
    case 1:
      new Audio("sounds/tom-2.mp3").play();
      buttonAnimation(i);
      break;
    case 2:
      new Audio("sounds/tom-3.mp3").play();
      buttonAnimation(i);
      break;
    case 3:
      new Audio("sounds/tom-4.mp3").play();
      buttonAnimation(i);
      break;
    case 4:
      new Audio("sounds/crash.mp3").play();
      buttonAnimation(i);
      break;
    case 5:
      new Audio("sounds/kick-bass.mp3").play();
      buttonAnimation(i);
      break;
    case 6:
      new Audio("sounds/snare.mp3").play();
      buttonAnimation(i);
      break;
    default:
      break;
  }

  });

}

document.addEventListener("keydown", function(event){

  switch (event.key) {

    case "w":
      new Audio("sounds/tom-1.mp3").play();
      buttonAnimation(event.key);
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      buttonAnimation(event.key);
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      buttonAnimation(event.key);
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      buttonAnimation(event.key);
      break;
    case "j":
      new Audio("sounds/crash.mp3").play();
      buttonAnimation(event.key);
      break;
    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      buttonAnimation(event.key);
      break;
    case "l":
      new Audio("sounds/snare.mp3").play();
      buttonAnimation(event.key);
      break;
    default:
        break;

  }

})

function buttonAnimation(funcInput){

  if (Number.isInteger(funcInput)){
    document.querySelectorAll(".drum")[funcInput].classList.add("pressed");

    setTimeout(function(){
      document.querySelectorAll(".drum")[funcInput].classList.remove("pressed");
    },100)
  } else {
    document.querySelector("." + funcInput).classList.add("pressed");

    setTimeout(function(){
      document.querySelector("." + funcInput).classList.remove("pressed");
    },100)
  }

}
