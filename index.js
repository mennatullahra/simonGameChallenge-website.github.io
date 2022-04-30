if ((document.querySelector("h1").innerHTML)=== "Press A Key to Start"){

  $(document).keypress(function() {
    $("h1").html("level 1");
    var rand = Math.floor(Math.random() * 4) + 1;
    console.log(rand);
    makeSound(rand);
    buttonAnimation(rand);

  });
}

function makeSound(key) {
  switch (key) {
    case 4:
      var red = new Audio("sounds/red.mp3");
      red.play();
      break;

    case 1:
      var blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;

    case 2:
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;

    case 3:
      var green = new Audio("sounds/green.mp3");
      green.play();
      break;
  }
}
function buttonAnimation(currentButton){
  current = $("."+currentButton);
  current.addClass("pressed");

  setTimeout(function(){current.removeClass("pressed");}, 50);

}
