// new --> an instance of Player is created
let players = [
  new Player("UberGarderner", 700, 100, "2022-06-03"),
  new Player("UberFlower", 513, 76, "2022-05-05")
];

console.table(players);

// players[1].score = players[1].score + 100;
let newScore = players[1].addScore(100);

// console.log("New score is " + newScore);

function printWinner(players) {
  // Compare player scores
  let scoreDiff = players[0].compareScore(players[1]);
  if (scoreDiff > 0) {
    console.log("Player 1 has " + scoreDiff + " more points");
  } else {
    console.log("Player 2 has " + (-1 * scoreDiff) + " more points");
  }
}

printWinner(players);