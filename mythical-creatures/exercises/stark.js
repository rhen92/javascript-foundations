var Direwolf = require('./direwolf');

class Stark {
  constructor(monster) {
    if (monster !== undefined) {
      this.name = monster.name;
      if (!monster.area) {
        this.location = 'Winterfell'
      } else {
        this.location = monster.area;
      }
      this.safe = false;
    }
  }
  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers'
    } else {
      return 'Winter is Coming'
    }
  }
  callDirewolf(name, location) {
    var direwolf1 = new Direwolf(name, location)
    direwolf1.home = this.location;
    direwolf1.protect(this)
    return direwolf1;
  }
}
module.exports = Stark;
