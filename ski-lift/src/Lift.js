var Skier = require('./Skier');

class Lift {
  constructor(limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  admitSkier(skier, value) {
    skier = new Skier(skier)
    if (!value) {
      return `Sorry, Hannah. You need a lift ticket!`
    } else if (this.skiers.length < this.limit && value) {
      this.skiers.push(skier);
    } else {
      return 'Sorry, Kayla. Please wait for the next lift!'
    }
  }

  startLift() {
    if (this.skiers.length === 4) {
      this.safetyBar = 'down';
    } else {
      var remaining = this.limit - this.skiers.length
      if (remaining === 1) {
        return `We still need ${remaining} more skier!`;
      } else {
        return `We still need ${remaining} more skiers!`
      }
    }
  }
}
module.exports = Lift;
