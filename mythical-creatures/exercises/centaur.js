class Centaur {
  constructor(monster) {
    this.name = monster.name;
    this.breed = monster.type;
    this.cranky = false;
    this.standing = true;
    this.exercise = 0;
    this.layingDown = false;
  }
  shootBow() {
    this.exercise++;
    if(this.exercise >= 3){
      this.cranky = true;
      return 'NO!';
    }
    if(this.layingDown) {
      return 'NO!'
    }
    return 'Twang!!!';
  }

  run() {
    this.exercise++;
    if(this.exercise >=3){
      this.cranky = true;
      return 'NO!'
    }
    if(this.layingDown) {
      return 'NO!'
    }
    return 'Clop clop clop clop!!!';
  }
  sleep() {
    if(this.layingDown) {
      this.cranky = false;
      this.exercise = 0;
      return 'ZZZZ'
    }
    return 'NO!';
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.standing = true;
    this.layingDown = false;
  }
  drinkPotion() {
    if(this.layingDown) {
      return 'Not while I\'m laying down!'
    } else {
    this.cranky = false;
  }
}
}
module.exports = Centaur;
