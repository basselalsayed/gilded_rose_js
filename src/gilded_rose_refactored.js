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
  updateSingleQuality(item, q) {
    if (item.quality < 50) {
      return item.quality += q
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
          this.updateSingleQuality(item, 2);
          console.log(item)
          if (item.sellIn < 0) {
            return item.quality = 0
          } else
          if (item.sellIn <= 5) {
            this.updateSingleQuality(item, 1);
          }
          this.addDay(item);
          return item
        } else 
        if (item.isAgedBrie()) {
          // if 
          
          
          this.addDay(item);
          return item
        }
      }
    })
    return this.items
    
  }
}

  // updateQuality() {
  //   for (var i = 0; i < this.items.length; i++) {
  //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //           this.items[i].quality = this.items[i].quality - 1;
  //         }
  //       }
  //     } else {
  //       if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1;
  //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != 'Aged Brie') {
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               this.items[i].quality = this.items[i].quality - 1;
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality;
  //         }
  //       } else {
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1;
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }
// }
module.exports = {
  Item,
  Shop
}