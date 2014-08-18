function Counter() {
  this.value = 0;
  this.increment = function() {
    this.value += 1;
    return this.value;
  };
  this.getValue = function() {
    return this.value;
  }
}

module.exports = Counter;
