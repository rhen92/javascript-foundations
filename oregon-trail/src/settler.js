class Settler {
  constructor(person) {
    this.name = person.name;
    this.age = person.age;
    this.nationality = person.nationality;
    if (!this.nationality) {
      this.nationality = 'unknown';
    }
    this.status = 'healthy';
    this.ailments = [];
  }

  experienceDistress(problem) {
    if (this.status !== 'dead') {
      this.ailments.push(problem);
    }
    if (this.ailments.length === 1) {
      this.status = 'fair';
    } else if (this.ailments.length === 2) {
      this.status = 'poor';
    } else {
      this.status = 'dead';
    }
  }

  heal() {
    if (this.status === 'dead') {
      return 'Sorry, we can\'t heal a corpse. Will needs a proper burial!'
    } else {
      this.ailments = [];
      this.status = 'healthy';
    }
  }
}
module.exports = Settler;
