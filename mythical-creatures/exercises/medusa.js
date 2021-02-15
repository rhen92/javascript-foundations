var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(person) {
    var statue = new Statue(person.name);
    if(this.statues.length < 3) {
    this.statues.push(statue);
  } else {
    var freedPerson = this.statues.shift();
    this.statues.push(statue);
    return freedPerson.name = new Person(freedPerson.name, 'relieved');
  }
  }
}

module.exports = Medusa;
