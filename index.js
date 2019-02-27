var enterButton = document.getElementById('submit');
var userName = document.getElementById('user-name');
var playButton = document.querySelectorAll("button");


//
// playButton.addEventListener("click", function() {
//
//   makeSound();
//   // Messups
//   // var buttonInnerHTML = this.innerHTML;
//   // makeSound(event.playButtons);
//   // makeSound(event.playButton);
// });



var clickedId = document.addEventListener("click", function(clickedId) {

  makeSound();

});


//ID
// For the above event, I have to get the browser to
//figure out what ID was clicked in order for it to play.


function makeSound(clickedId) {

  switch (clickedId) {
    case "red":
      var audio1 = new Audio("audio/unlock_1.wav");
      alert("Red is Pressed");
      audio1.play();
      break;

    case "blue":
      var audio2 = new Audio("audio/unlock_2.wav");
      alert("Blue is Pressed");
      audio2.play();
      break;

    case "green":
      var audio3 = new Audio("audio/unlock_3.wav");
      alert("Green is Pressed");
      audio3.play();
      break;

    case "yellow":
      var audio4 = new Audio("audio/unlock_4.wav");
      alert("Yellow is Pressed");
      audio4.play();
      break;
    default:
      console.log("Something was Pressed!");
  }
}




//-------More Messups-------


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
