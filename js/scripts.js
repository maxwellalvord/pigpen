function Player() {
  this.score = 0;
  this.lastroll = 0;
  this.lastroll2 = [];
  this.lastroll4 = [];
  // this.newArray = [];
  // this.newArray2 = [];
}

// player1.prototype.AddScore = function() {
//   this.score += getRandomInt(6);
// }

let newPlayer = new Player(0,0, []);
let newPlayer2 = new Player(0,0, []);



// function getRandomInt(max) {
//   return Math.ceil(Math.random() * 6);
// }

Player.prototype.GetInt = function(max) {
    this.lastroll = Math.ceil(Math.random() * 6);
}

Player.prototype.GetInt2 = function(max) {
  let newArray = this.lastroll2.push(Math.ceil(Math.random() * 6));
  let newArray1 = this.lastroll4.push(Math.ceil(Math.random() * 6));
  console.log('hello');
}



Player.prototype.AddScore2 = function(){
  if ((this.lastroll2.toString() != "1") && (this.lastroll4.toString() != "1")){
    this.score += (parseInt(this.lastroll2) + parseInt(this.lastroll4));
  } else if  ((this.lastroll2.toString() != "1") || (this.lastroll4.toString() != "1")){
    this.score = this.score;
  } else  {
    this.score = 0;
  }
  
}

Player.prototype.AddScore = function(){
  if (this.lastroll != 1){
    this.score += this.lastroll;
  } else {
    // this.score = this.score;
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
  $("#buttonz").click(function(event) {
    event.preventDefault();
    newPlayer.GetInt2();
    newPlayer.AddScore2();
    $("#p1score").html(newPlayer.score);
    console.log(newPlayer);
    

  });

  $("#buttonx").click(function(event) {
    event.preventDefault();
    newPlayer2.GetInt2();
    newPlayer2.AddScore2();
    $("#p2score").html(newPlayer2.score);
    console.log(newPlayer2);
    

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
    newPlayer.score = 0;
    newPlayer2.score = 0;
    $("#p1score").html(newPlayer.score);
    $("#p2score").html(newPlayer2.score);
  });
});