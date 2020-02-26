class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
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
  updateSpecialQuality(item, q) {
    if (item.quality < 50) {
      return item.quality += q
    }
  }
  updateNormalQuality(item) {
    if (item.quality > 0) {
      return item.quality -= 1
    }
  }
  addDay(item) {
    if (item.quality < 50) {
      return item.sellIn --
    }
  }
  updateQuality() {
    this.items.forEach((item) => {
      if (this.isSulfuras(item)) {
        item
      } else
      if (this.isBackstagePass(item)) {
        if (item.sellIn <= 10) {
          this.updateSpecialQuality(item, 2);
          if (item.sellIn < 0) {
            return item.quality = 0
          } else
          if (item.sellIn <= 5) {
            this.updateSpecialQuality(item, 1);
          }
        }
      } else 
      if (this.isAgedBrie(item)) {
        this.updateSpecialQuality(item, 1)
        if (item.sellIn <= 0) {
          this.updateSpecialQuality(item, 1)
        }
      } else {

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