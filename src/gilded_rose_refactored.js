class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  get isSulfuras() {
    return this.name === 'Sulfuras, Hand of Ragnaros';
  }
  get isBackstagePass() {
    return this.name === 'Backstage passes to a TAFKAL80ETC concert';
  }
  get isAgedBrie() {
    return this.name === 'Aged Brie';
  }
  get isSpecial() {
    return this.isBackstagePass || this.isAgedBrie;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateSpecialProperty(item, q) {
    if (item.quality + q < 50) {
      item.quality += q;
    } else {
      item.quality = 50;
    }
  }
  updateNormal(item) {
    if (item.quality > 0) item.quality -= 1;
  }
  updateBackstagePass(item) {
    if (item.sellIn <= 10) {
      this.updateSpecialProperty(item, 2);
      if (item.sellIn < 0) {
        item.quality = 0;
      } else if (item.sellIn <= 5) {
        this.updateSpecialProperty(item, 1);
      }
    }
  }
  updateAgedBrie(item) {
    this.updateSpecialProperty(item, 1);
    if (item.sellIn <= 0) {
      this.updateSpecialProperty(item, 1);
    }
  }
  updateSpecial(item) {
    if (item.isBackstagePass) this.updateBackstagePass(item);

    if (item.isAgedBrie) this.updateAgedBrie(item);
  }

  updateAll(item) {
    if (item.isSulfuras) {
      return item;
    }
    if (item.isSpecial) {
      this.updateSpecial(item);
    } else {
      this.updateNormal(item);
    }
    this.addDay(item);
    return item;
  }

  addDay(item) {
    if (item.quality < 50) {
      item.sellIn--;
    }
  }

  updateQuality() {
    this.items = this.items.map(this.updateAll.bind(this));

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
