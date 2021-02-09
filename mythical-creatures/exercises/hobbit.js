class Hobbit {
  constructor(name, age, adult, old, hasRing) {
    this.name = name.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }
  //add 1 year for every birthday
  celebrateBirthday() {
    this.age += 1
  //child at age 32, adult at age 33, old at age 101
  if(this.age <= 32) {
    this.adult = false
  } else if(this.age >= 33 && this.age < 101) {
    this.adult = true
  } else {
    this.old = true;
  }
  }
//name is Frodo able to get ring
  getRing() {
    if(this.name === 'Frodo') {
      this.hasRing = true;
      return 'Here is the ring!';
    } else {
      this.hasRing = false;
      return 'You can\'t have it!';
    }
  }

}


module.exports = Hobbit;
