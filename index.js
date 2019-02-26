var enterButton = document.getElementById('submit');
var userName = document.getElementById('user-name');
var playButton = document.getElementsByTagName('button');

document.querySelectorAll("color").addEventListener("click", function() {
  // var buttonInnerHTML = this.innerHTML;
  makeSound(playButton);
  // makeSound(event.playButton);
});


function makeSound(playButton) {

  switch (playButton) {
    case "Red":
      var audio1 = new Audio("audio/unlock_1.wav");
      audio1.play();
      break;

    case "Blue":
      var audio2 = new Audio("audio/unlock_2.wav");
      audio2.play();
      break;

    case "Green":
      var audio3 = new Audio("audio/unlock_3.wav");
      audio3.play();
      break;

    case "Yellow":
      var audio4 = new Audio("audio/unlock_4.wav");
      audio4.play();
      break;
    default:
      console.log();
  }
}
//Break??-------


// function makeSound(playButton) {
//
//   var audio1 = new Audio("audio/unlock_1.wav");
//
//   var audio2 = new Audio("audio/unlock_2.wav");
//
//   var audio3 = new Audio("audio/unlock_3.wav");
//
//   var audio4 = new Audio("audio/unlock_4.wav");
//
//   audio1.play();
//   audio2.play();
//   audio3.play();
//   audio4.play();
//
// }
