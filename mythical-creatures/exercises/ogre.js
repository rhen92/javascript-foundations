class Ogre {
  constructor(monster) {
    this.name = monster.name;
    if (!monster.abode) {
      this.home = 'Swamp';
    } else {
      this.home = monster.abode;
    }
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter++;
    if (human.noticesOgre()) {
      this.swings++;
    }
    if (this.swings === 2) {
      human.knockedOut = true;
    }
  }

  swingAt(human) {
    this.swings++;
  }

  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
