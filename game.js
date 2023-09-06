var color = ["green", "red", "yellow", "blue"];
var random = [];
var click = [];
var game = false;
var level = 0;


  document.querySelector("body").addEventListener("keydown", function() {
    if (!game) {
      document.querySelector("#level-title").innerHTML = "Level " + level;
      randomClick();
      game = true;
    }
  });


    for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
      document.querySelectorAll(".btn")[i].addEventListener("click", function() {
        var selectedClassColor = this.classList[1];
        click.push(selectedClassColor);
        document.querySelector("#" + selectedClassColor).classList.add("pressed");
        playSound(selectedClassColor);
        setTimeout(animationRemove2, 100);

        function animationRemove2() {
          document.querySelector("#" + selectedClassColor).classList.remove("pressed")
        }
        checkAnswer(click.length - 1);
      });

    }


function randomClick() {
  click = [];
  level++;
  document.querySelector("#level-title").innerHTML = "Level " + level;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = color[randomNumber];
  random.push(randomColor);
  document.querySelector("#" + randomColor).classList.add("randomAnimate");
  playSound(randomColor);
  setTimeout(animationRemove, 100);

  function animationRemove() {
    document.querySelector("#" + randomColor).classList.remove("randomAnimate")
  }
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}



// checkAnswer function

function checkAnswer(checking) {
  if (click[checking] === random[checking]) {
    if (click.length === random.length) {
      setTimeout(randomClick, 1000);
    }

  } else {
    document.querySelector("#level-title").innerHTML = "Game Over, Press Any Key to Restart";
    setTimeout(playSound("wrong"), 100);
    start();
  }
}

function start(){
  level = 0;
  game = false;
  random = [];
}
