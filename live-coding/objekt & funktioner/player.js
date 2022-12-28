// constructor function (representation of some "thing")
// function Player(name, score, lifepoints, createdAt) {
//   this.name = name; // properties
//   this.score = score;
//   this.lifepoints = lifepoints;
//   this.createdAt = createdAt;
// }

// Player.prototype.addScore = function (points) {
//   this.score = this.score + points;
// }

class Player {
  constructor(name, score, lifepoints, createdAt) {
    this.name = name; //properties
    this.score = score;
    this.lifepoints = lifepoints;
    this.createdAt = createdAt;

    return this; //implicit ONLY for the constructor
  }

  addScore(points) { // method (same as function, but bound by a class)
    this.score = this.score + points;

    //return; // if no return is given, undefined is returned
    return this.score;
  }

  compareScore(player) {
    console.log(this);
    console.log(player);

    return this.score - player.score;
  }
}