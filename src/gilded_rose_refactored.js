class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]) {
    this.items = items;
  }
  isSulfuras(item) {
    return (item.name === 'Sulfuras, Hand of Ragnaros')
  }
  isBackstagePass(item) {
    return (item.name === 'Backstage passes to a TAFKAL80ETC concert') 
  }
  isAgedBrie(item) {
    return (item.name === 'Aged Brie')
  }
  isSpecial(item) {
    return (this.isBackstagePass(item) || this.isAgedBrie(item) )
  }
  updateSpecialProperty(item, q) {
    if ((item.quality + q) < 50) {
      return item.quality += q
    } else {
      return item.quality = 50
    }
  }
  updateNormal(item) {
    if (item.quality > 0) {
      return item.quality -= 1
    }
  }
  updateBackstagePass(item) {
    if (item.sellIn <= 10) {
      this.updateSpecialProperty(item, 2);
      if (item.sellIn < 0) {
          return item.quality = 0
      } else if (item.sellIn <= 5) {
          this.updateSpecialProperty(item, 1);
      }
    }
  }
  updateAgedBrie(item) {
    this.updateSpecialProperty(item, 1)
    if (item.sellIn <= 0) {
      this.updateSpecialProperty(item, 1)
    }
  }
  updateSpecial(item) {
    if (this.isBackstagePass(item)) {
        this.updateBackstagePass(item)
    } else if (this.isAgedBrie(item)) {
        this.updateAgedBrie(item)
    }
  }
  updateAll(item) {
    if (this.isSulfuras(item)) {
      return item
    } 
    if (this.isSpecial(item)) {
        this.updateSpecial(item)
    } else {
        this.updateNormal(item)
    }
    this.addDay(item);
    return item
  }
  addDay(item) {
    if (item.quality < 50) {
      return item.sellIn --
    }
  }
  updateQuality() {
    this.items.forEach((item) => {
      this.updateAll(item)
    })

    return this.items
    
  }
}

module.exports = {
  Item,
  Shop
}