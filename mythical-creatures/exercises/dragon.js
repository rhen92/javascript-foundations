class Dragon {
  constructor(name, rider, hungry) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.mealsEaten = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    this.mealsEaten += 1
    if(this.mealsEaten <= 2) {
      this.hungry = true
    } else{
      this.hungry = false
    }
    }
  }


module.exports = Dragon
