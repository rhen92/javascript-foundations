class SkatePark {
  constructor(park) {
    this.name = park.name;
    this.yearFounded = park.year;
    this.style = park.type;
    this.features = park.features;
    this.isPrivate = park.isPrivate || false;
    this.cost = park.price || 0;
    this.occupants = [];
  }

  admit(skater) {
    if(!this.isPrivate && this.occupants.length < 3) {
      this.occupants.push(skater);
      return 'Welcome to the free Major Taylor Skatepark!'
    } else if(skater.money < this.cost) {
      return `Sorry, you don't have enough money.`;
    } else if(this.occupants.length < 3){
      skater.money -= this.cost;
      this.occupants.push(skater);
      return 'Welcome to Curbside, the cost will be $12.00.'
    } else {
      return 'Sorry, we are at max capacity. Thank you for understanding.'
    }
  }
}

module.exports = SkatePark;
