'use strict'
var expect = require('chai').expect;
describe('Array', function() {
  describe('#indexOf()', function() {
    it('returns -1 when the value is not present', function() {
      // assert.equal(-1, [1,2,3].indexOf(5));
      // assert.equal(-1, [1,2,3].indexOf(0));
      // assert.equal(-1, [4,8,7,13212,4].indexOf(7));
      expect([1,2,3,476584].indexOf(5647399333)).to.equal(-1);
    });
  });
});
