var magician = class Magician {
  constructor(person) {
    this.name = `The Great ${person.name}`;
    this.assistant = person.assistant;
    this.favoriteAccessory = null;
    this.clothing = person.clothing;
    if(!this.clothing) {
      this.favoriteAccessory = 'top hat';
    } else {
      this.favoriteAccessory = person.clothing;
    }this.confidencePercentage = 10;
   }
    performIncantation(voice) {
      if(voice === 'abracadabra') {
        return 'ABRACADABRA!';
      }
      else if(voice === 'allakazaam') {
        return 'ALLAKAZAAM!';
      }
    }
    performTrick() {
      this.confidencePercentage += 10;
      if(this.favoriteAccessory === 'top hat') {
        return `PULL RABBIT FROM TOP HAT`;
      } else {
        return `PULL DOVE FROM SLEEVE`;
      }
    }
    performShowStopper() {
      if(this.confidencePercentage < 100 && this.assistant || !this.assistant) {
        return 'Oh no, this trick is not ready!';
      } else if(this.confidencePercentage > 100 && !this.assistant) {
        return 'Oh no, this trick is not ready!';
      } else {
        return 'WOW! The magician totally just sawed that person in half!';
      }
    }
}




module.exports = magician
