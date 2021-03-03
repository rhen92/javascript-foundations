class Snack {
  constructor(object) {
    this.deliciousLevel = 'extra';
    this.type = object;
    this.amount = 100;
    this.isInLunchBox = false;
    this.cuttingItClose = false;
    this.healthy = false;
  }
  getEaten() {
    this.amount -= 10;
    if(this.amount <= 20) {
      this.cuttingItClose = true;
    }
  }
  checkForHealthy() {
    if(this.type === 'Fruit') {
      this.healthy = true;
    } else if(this.type === 'Mixed fruit') {
      this.healthy = true;
    } else {
      this.healthy = false;
    }
  }
}

module.exports = Snack;
