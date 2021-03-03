class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    if (this.riddles.length < 3) {
      this.riddles.push(riddle);
    } else if(this.riddles.length === 3){
      this.riddles.push(riddle);
      this.riddles.splice(0,1);
    }
  }
  attemptAnswer(guess) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === guess && this.riddles.length > 1) {
        this.riddles.splice(i, 1);
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
      } else if(this.riddles[i].answer === guess && this.riddles.length === 1) {
        this.riddles.splice(i, 1);
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`
      }else {
        this.heroesEaten = 1;
      }
    }
  }
}
module.exports = Sphinx;
