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

let newPlayer = new Player(0,0, [], []);
let newPlayer2 = new Player(0,0, [], []);


// function getRandomInt(max) {
//   return Math.ceil(Math.random() * 6);
// }

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
           matches.push(sum);
        }
        let test = matches.reduce(function(a, b) { return a + b; }, 0);
        this.score += test;
        console.log(test);
    }
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
    newPlayer.getMatch(newPlayer.lastroll2,newPlayer.lastroll4);
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




// function Player() {
//   this.score = 0;
//   this.diceRoll = 0;
//   // this.lastroll2 = [];
//   // this.lastroll4 = [];
//   // this.newArray = [];
//   // this.newArray2 = [];
// }

// // player1.prototype.AddScore = function() {
// //   this.score += getRandomInt(6);
// // }

// let newPlayer = new Player(0,0, []);
// let newPlayer2 = new Player(0,0, []);





// Player.prototype.GetInt = function(max) {
//     this.lastroll = Math.ceil(Math.random() * 6);
// }

// var lastRoll2 = [1,2,3],
//     lastRoll2 = [5,2,3];

// function getMatch(a, b) {
//     var matches = [];

	
//     for ( var i = 0; i < a.length; i++ ) {
//     if (a[i] !== 1 && b[i] !== 1) {
//             let sum = a[i] + b[i];
//            matches.push(sum);
//         }
//         console.log( matches);
//     }
// }	
// getMatch(array1, array2);

// // Player.prototype.GetInt2 = function(max) {
// //   let newArray = this.lastroll2.push(Math.ceil(Math.random() * 6));
// //   let newArray1 = this.lastroll4.push(Math.ceil(Math.random() * 6));
// //   return newArray + newArray1;
// // }


// // Player.prototype.rollDice = function() {
// //   var numDice = document.getElementById("diceNum").value;
// //   var container = document.getElementById("dieContainer");

// //   container.innerHTML = "";
// //   for (var i = 0; i < numDice; i++) {
// //     var diceRoll = Math.floor(Math.random() * 6) + 1;
// //     container.innerHTML += '<div class="dice">' + diceRoll + '</div>';
// //     console.log(container);
// //   };
// // };



// // Player.prototype.AddScore2 = function(){
// //   if ((this.lastroll2.toString() != "1") && (this.lastroll4.toString() != "1")){
// //     this.score += (parseInt(this.lastroll2) + parseInt(this.lastroll4));
// //   } else if  ((this.lastroll2.toString() != "1") || (this.lastroll4.toString() != "1")){
// //     this.score = this.score;
// //   } else  {
// //     this.score = 0;
// //   }
  
// // }

// Player.prototype.AddScore = function(){
//   if (this.lastroll != 1){
//     this.score += this.lastroll;
//   } else {
//     // this.score = this.score;
//   }
  
// }

// Player.prototype.DecideWin = function(num, num1){
//   if (newPlayer.score > newPlayer2.score){
//     return "player one wins";
//   } else if (newPlayer.score < newPlayer2.score){
//     return "player two wins";
//   } else{
//     return "it is a tie, fight to the death"
//   }
// }



// $(document).ready(function() {
//   $("#button1").click(function(event) {
//     event.preventDefault();
//     newPlayer.GetInt();
//     newPlayer.AddScore();
//     $("#p1score").html(newPlayer.score);
//     console.log(newPlayer);
    

//   });
//   $("#diceNum").click(function(event) {
//     event.preventDefault();
//     newPlayer.rollDice();
//     newPlayer.AddScore();
//     $("#p1score").html(newPlayer.score);
//     console.log(newPlayer);
    

//   });

//   $("#buttonx").click(function(event) {
//     event.preventDefault();
//     newPlayer2.GetInt();
//     newPlayer2.AddScore();
//     $("#p2score").html(newPlayer2.score);
//     console.log(newPlayer2);
    

//   });

//   $("#button2").click(function(event) {
//     event.preventDefault();
//     newPlayer2.GetInt();
//     newPlayer2.AddScore();
//     $("#p2score").html(newPlayer2.score);
//     console.log(newPlayer2);
//   });
//   $("#button3").click(function(event) {
//     event.preventDefault()
//     $("#winner").html(newPlayer.DecideWin(newPlayer.score, newPlayer2.score));
//     newPlayer.score = 0;
//     newPlayer2.score = 0;
//     $("#p1score").html(newPlayer.score);
//     $("#p2score").html(newPlayer2.score);
//   });
// });