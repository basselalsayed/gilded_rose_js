var {Shop, Item} = require('../src/gilded_rose_refactored.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it('sulfuras should remain unchanged', function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 2, 40) ]);
    // console.log(gildedRose.items[0].quality)
    const items = gildedRose.updateQuality();
  })

  it('when sellIn < 10 Backstage pass should increase quality by 2', function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 6, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(42)
  })

  it('when sellIn < 5 Backstage pass should increase quality by 3', function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 4, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(43)
    expect(items[0].sellIn).toEqual(3)
  })

  it('when sellIn < 0 Backstage pass quality is 0', function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", -1, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  })

  it('when sellin > 0 Aged brie quality should increase by 2', function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 1, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(41)
  })

  it('when sellin <= 0 Aged brie quality should increase by 3', function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 40) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(42)
    expect(items[0].sellIn).toEqual(-1)
  })
  it('reduces quality and sellin for a normal item', function() {
    const gildedRose = new Shop([ new Item("Old Shoe", 5, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9)
    expect(items[0].sellIn).toEqual(4)
  })
});
// backstage pass goes up by 2 when sellin <= 10, 3 when <= 5
// sulfuras quality does not decrease 
// brie quality goes up 2 when sellin 0 or less