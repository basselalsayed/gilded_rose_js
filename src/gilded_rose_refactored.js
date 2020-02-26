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
    return (this.isSulfuras(item) || this.isBackstagePass(item) || this.isAgedBrie(item) )
  }
  updateSpecialProperty(item, q) {
    if (item.quality < 50) {
      return item.quality += q
    }
  }
  updateNormalProperty(item) {
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
  updateSpecialItem(item) {
      if (this.isSulfuras(item)) {
        return item
    } else if (this.isBackstagePass(item)) {
        this.updateBackstagePass(item)
    } else if (this.isAgedBrie(item)) {
        this.updateAgedBrie(item)
    }
  }
  addDay(item) {
    if (item.quality < 50) {
      return item.sellIn --
    }
  }
  updateQuality() {
    this.items.forEach((item) => {
      if (this.isSpecial(item)) {
          this.updateSpecialItem(item)
      } else {
          this.updateNormalProperty(item)
      }
      this.addDay(item);
      return item
    })

    return this.items
    
  }
}

module.exports = {
  Item,
  Shop
}