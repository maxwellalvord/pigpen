const player1 = {
  score: 0,
  lastroll: 0,
}

const player2 = {
  score: 0,
  lastroll: 0,
}

player1.prototype.AddScore = function() {
  this.score += getRandomInt(6);
}



function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

player1.prototype.getInt()




$(document).ready(function() {
  $("#button1").click(function(event) {
    event.preventDefault();
    getRandomInt.AddScore(player1)
    console.log(player1);
    

  });
  $("#button2").click(function(event) {
    event.preventDefault();

  });
});