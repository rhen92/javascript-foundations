class LunchBox {
  constructor(box) {
    this.owner = box.owner;
    this.material = box.madeOf;
    this.shape = box.shape;
    this.color = box.color;
    this.snacks = [];
    this.healthySnacks = [];
  }
  acquireSnack(fruitSnack) {
    this.snacks.push(fruitSnack);
    fruitSnack.isInLunchBox = true;
    }
  findHealthySnacks() {
    for(var i = 0; i < this.snacks.length; i++) {
      if(this.snacks[i].type.toLowerCase().includes('fruit')) {
        this.healthySnacks.push(this.snacks[i].type);
      }
    }
    return this.healthySnacks;
  }
  }



module.exports = LunchBox;
