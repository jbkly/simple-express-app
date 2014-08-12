'use strict'
var palindrome = require('../app/palindrome');
var expect = require('chai').expect;

describe('palindrome', function() {
  it('checks if a string is a palindrome', function() {
    expect(palindrome('racecar')).to.equal(true);
  });
  // it('with spaces in it');
});
