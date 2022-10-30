import { expect } from 'chai';
import { calculateTimeFromDistance, getDistPerSecond } from './rocket';

describe('Rocket', () => {
  describe('calculateTime', () => {
    it('should return int, when distance is fibonachi number', () => {
      expect(calculateTimeFromDistance(317809)).to.be.eql(25);
    });

    it('should return float, when distance is not fibonachi number', () => {
      expect(calculateTimeFromDistance(384400)).to.be.eql(25.339026973088007);
    });

    it('should return float, when distance is float', () => {
      expect(calculateTimeFromDistance(15.6)).to.be.eql(4.575);
    });

    it('should succeed, when distance is between 1 and 3', () => {
      expect(calculateTimeFromDistance(2.7)).to.be.eql(1.85);
    });

    it('should succeed, when distance is lower than 1', () => {
      expect(calculateTimeFromDistance(0.7)).to.be.eql(0.7);
    });
  });

  describe('getDistPerSecond', () => {
    it('should calculate traversed distances, except first element', () => {
      expect(getDistPerSecond(12)).to.be.eql([3, 6, 11, 19]);
    });

    it('should calculate traversed distances, when distance is fibonachi number', () => {
      expect(getDistPerSecond(19)).to.be.eql([3, 6, 11, 19])
    })
  });
});
