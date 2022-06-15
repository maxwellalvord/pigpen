function Player() {
  this.score = 0;
  this.lastroll = 0;
}

// player1.prototype.AddScore = function() {
//   this.score += getRandomInt(6);
// }

let newPlayer = new Player(0,0);
let newPlayer2 = new Player(0,0);



// function getRandomInt(max) {
//   return Math.ceil(Math.random() * 6);
// }

Player.prototype.getInt = function(max) {
  this.lastroll = Math.ceil(Math.random() * 6);
}





$(document).ready(function() {
  $("#button1").click(function(event) {
    event.preventDefault();
    newPlayer.getInt();
    console.log(newPlayer);
    

  });
  $("#button2").click(function(event) {
    event.preventDefault();
    newPlayer2.getInt();
    console.log(newPlayer2);
  });
});