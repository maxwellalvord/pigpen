function Player() {
  this.score = 0;
  this.lastroll = 0;
  this.lastroll2 = [];
  this.lastroll4 = [];
}

let newPlayer = new Player(0,0, [], []);
let newPlayer2 = new Player(0,0, [], []);


Player.prototype.GetInt = function(max) {
    this.lastroll = Math.ceil(Math.random() * 6);
}

Player.prototype.GetInt2 = function(max) {
  this.lastroll2.push(Math.ceil(Math.random() * 6));
  this.lastroll4.push(Math.ceil(Math.random() * 6));
}

Player.prototype.getMatch = function(array2, array4) {
    let matches = [];
    for (let i = 0; i < array2.length; i++) {
    if (array2[i] !== 1 && array4[i] !== 1) {
          let sum = array2[i] + array4[i];
           matches.unshift(sum);
        }
        let test = matches.reduce(function(a, b) { return a + b; }, 0);
        this.score = test;
        console.log(test);
    }
}	

function removeText() {
  $("#p1score2").empty();
  $("#p1score2").text(" ");
}

Player.prototype.AddScore2 = function(){
    result = $("#p1score2").text(" ");
  if ((this.lastroll2.toString() !== "1") && (this.lastroll4.toString() !== "1")){
    result =  $("#p1score2").text("keep rolling");
  } else if ((this.lastroll2.toString() === "1") || (this.lastroll4.toString() === "1")){
    // let a = $("#p1score2").text("");
    result = $("#p1score2").text("you got one 1, no points for you!");
  } else  {
    result = $("#p1score2").text("uh no theres goes all your points...");
  }
  return result;
}


// function test (){
//   if (('2' !== "1") && '4' !== "1"){
//       return  "keep rolling";
//     } else if (('2' === "1") || ('4' === "1")){
//       // let a = $("#p1score2").text("");
//       let b = "you got one 1, no points for you!";
//       return b;
//     } else  {
//       return "uh no theres goes all your points...";
//     }
//   }
//   undefined
//   test()
//   'keep rolling'
//   function test (){
//   if (('1' !== "1") && '1' !== "1"){
//       return  "keep rolling";
//     } else if (('2' === "1") || ('4' === "1")){
//       // let a = $("#p1score2").text("");
//       let b = "you got one 1, no points for you!";
//       return b;
//     } else  {
//       return "uh no theres goes all your points...";
//     }
//   }
//   undefined
//   test()
  
//   'uh no theres goes all your points...'










Player.prototype.AddScore = function(){
  if (this.lastroll != 1){
    this.score += this.lastroll;
    $("#p1score1").html("")
  } else {
    $("#p1score1").html("you got a one");
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
    newPlayer.getMatch(newPlayer.lastroll2, newPlayer.lastroll4);
    newPlayer.AddScore2(newPlayer.lastroll2, newPlayer2.lastroll4);
    $("#p1score").html(newPlayer.score);
    console.log(newPlayer);
  });

  $("#buttonx").click(function(event) {
    event.preventDefault();
    newPlayer2.GetInt2();
    newPlayer2.getMatch(newPlayer2.lastroll2,newPlayer2.lastroll4);
    newPlayer.AddScore2();
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
    event.preventDefault();
    $("#winner").html(newPlayer.DecideWin(newPlayer.score, newPlayer2.score));
    newPlayer.score = 0;
    newPlayer2.score = 0;
    newPlayer.lastroll = 0;
    newPlayer2.lastroll = 0;
    newPlayer.lastroll2 = [];
    newPlayer2.lastroll4 = [];
    $("#p1score").html(newPlayer.score);
    $("#p2score").html(newPlayer2.score);
  });

  $("#buttonw").click(function(event) {
    event.preventDefault()
    window.location.reload();
  });
  
  $("#buttonp").click(function(event) {
    event.preventDefault()
    $("#button2").hide();
    $("#buttonx").hide();
  });
  $("#buttonh").click(function(event) {
    event.preventDefault()
    window.location.reload();
  });
});
