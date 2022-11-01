import { expect } from 'chai';
import { calculateTimeFromDistance } from './rocket';

describe('Rocket', () => {
  describe('calculateTimeForDistance', () => {
    it('should return int, when distance is fibonachi number', () => {
      expect(calculateTimeFromDistance(384400)).to.be.eql(27);
    });

    it('should return 4s for 7m distance', () => {
      expect(calculateTimeFromDistance(7)).to.be.eql(4);
    });

    it('should return 3s for 4m distance', () => {
      expect(calculateTimeFromDistance(4)).to.be.eql(3);
    });
  });
});
