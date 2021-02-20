class Snowman {
  constructor(snowman) {
    this.carrots = snowman.carrots;
    this.coal = snowman.coal;
    this.buttons = snowman.buttons;
    this.snowballs = snowman.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if(this.coal < 2) {
      this.magicHat = false;
    } else if(this.buttons < 5) {
      this.magicHat = false;
    } else if (this.carrots < 1) {
      this.magicHat = false;
    } else if (this.snowballs < 2) {
      this.magicHat = false;
    } else {
      this.magicHat = true;
    }
}
}

module.exports = Snowman;
