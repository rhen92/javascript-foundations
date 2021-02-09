class Pirate {
  constructor(name, job = 'scallywag', cursed, booty) {
    this.name = name;
    this.job = job;
    this.cursed = false;
    this.booty = 0;
  }

  robShip() {
//robs the ship receives 100 gold
    if(this.booty < 500) {
      this.booty += 100;
      this.cursed = false;
      return 'YAARRR!';
    }
//cursed after robbing ship 5 times
    else {
      this.cursed = true;
      return 'ARG! I\'ve been cursed!';
    }
  }
  //lift curse for 300 booty
    liftCurse(){
      if(this.cursed === true && this.booty > 300) {
        this.booty -= 300;
        this.cursed = false;
        return 'Your curse has been lifted!'
      } else if(this.cursed === true && this.booty < 300) {
        this.cursed = true;
      }
//only able to lift the curse if cursed
      else if(this.cursed === false && this.booty < 500) {
        return 'You don\'t need to lift a curse!'
      }
      }
    }




module.exports = Pirate
