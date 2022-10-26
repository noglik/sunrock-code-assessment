import { expect } from 'chai';
import { add } from './rocket';

describe('add', () => {
  it('should return sum of two numbers', () => {
    expect(add(2, 2)).to.be.eql(4);
  });
});
