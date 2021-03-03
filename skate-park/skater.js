class Skater {
  constructor(person) {
    this.name = person.name;
    this.skill = person.skill;
    this.tricks = person.tricks;
    this.money = person.cash;
    this.frustration = 0;
  }
  practice(trick) {
    if(!this.tricks[trick]) {
      this.frustration++
    } if(this.frustration === 3) {
      this.tricks[trick] = true;
      this.frustration = 0;
      return `I just learned to ${trick}!!!`;
    }
  }
}

module.exports = Skater;
