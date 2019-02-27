      //  Fix these later for Name input

// var enterButton = document.getElementById('submit');
// var userName = document.getElementById('user-name');


var playButton = document.querySelectorAll("button");


var clickedId = document.addEventListener("click", function(playButton) {

  makeSound();

});
//ID
// For the above event, I have to get the browser to
//figure out what ID was clicked in order for it to play.


function makeSound(clickedId) {

  switch (clickedId) {
    case "red":
      var audio1 = new Audio("unlock_1.wav");
      alert("Red is Pressed");
      audio1.play();
      break;

    case "blue":
      var audio2 = new Audio("unlock_2.wav");
      alert("Blue is Pressed");
      audio2.play();
      break;

    case "green":
      var audio3 = new Audio("unlock_3.wav");
      alert("Green is Pressed");
      audio3.play();
      break;

    case "yellow":
      var audio4 = new Audio("unlock_4.wav");
      alert("Yellow is Pressed");
      audio4.play();
      break;
    default:
      console.log("Something was Pressed!");
  }
}
