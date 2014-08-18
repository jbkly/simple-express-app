var expect = require('chai').expect,
    Counter = require('../../lib/counter');

describe('Counter object tests', function() {
  var counter;

  beforeEach(function() {
    counter = new Counter('A test counter');
  });

  describe('constructor', function() {
    it('counter should be truthy (exists)', function() {
      expect(counter).to.be.ok;
    });

    it('counter should have value property', function() {
      expect(counter).to.have.property('value');
    });

    it('counter value property should be at 0', function() {
      expect(counter.value).to.equal(0);
    });

    it('counter value should be 1 after increment', function() {
      expect(counter.increment()).to.be.ok;
      expect(counter.value).to.equal(1);
    });
  });
});
