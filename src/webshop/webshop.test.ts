import { expect } from 'chai';
import { getTotalForCategories } from './webshop';
import categories from './categories.json';

describe('Webshop', () => {
  describe('getTotalForCategories', () => {
    it('should return record with category name and total product amount', () => {
      expect(getTotalForCategories(categories)).to.be.eql({
        electronics: 350,
        books: 9137,
        accessories: 277,
        all_in_one_desktops: 7,
        chomebook_laptops: 8,
        computers_accessories: 350,
        desktops: 30,
        educational_books: 8867,
        gaming_desktops: 12,
        gaming_laptops: 22,
        hybrid_laptops: 13,
        input_devices: 114,
        keyboards: 62,
        kids_books: 270,
        laptops: 43,
        memory_cards: 26,
        mini_desktops: 6,
        monitors: 128,
        mouses: 47,
        parenting_books: 0,
        software_books: 1337,
        tower_desktops: 5,
        usb_sticks: 9,
      });
    });
  });
});
