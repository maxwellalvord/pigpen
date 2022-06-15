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

Player.prototype.GetInt = function(max) {
    this.lastroll = Math.ceil(Math.random() * 6);
}


Player.prototype.AddScore = function(){
  if (this.lastroll != 1){
    this.score += this.lastroll;
  } else {
    this.score = this.score;
  }
  
}

Player.prototype.DecideWin = function(num, num1){
  if (newPlayer.score > newPlayer2.score){
    return "player one wins";
  } else if (newPlayer.score < newPlayer2.score){
    return "player two wins";
  } else{
    return "it is a tie, fight to the death"
  }
}



$(document).ready(function() {
  $("#button1").click(function(event) {
    event.preventDefault();
    newPlayer.GetInt();
    newPlayer.AddScore();
    $("#p1score").html(newPlayer.score);
    console.log(newPlayer);
    

  });
  $("#button2").click(function(event) {
    event.preventDefault();
    newPlayer2.GetInt();
    newPlayer2.AddScore();
    $("#p2score").html(newPlayer2.score);
    console.log(newPlayer2);
  });
  $("#button3").click(function(event) {
    event.preventDefault()
    $("#winner").html(newPlayer.DecideWin(newPlayer.score, newPlayer2.score));
  });
});