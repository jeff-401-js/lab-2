'use strict';

function List() {
  this.length = 0;
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  let returnValue = this[0];
  delete this[0];
  this.length--;
  return returnValue;
};

List.prototype.unshift = function(item) {

  for(let i = this.length; i > 0; i--){
    this[i] = this[i - 1];
  }
  this[0] = item;
  this.length++;
  return this.length;
};

module.exports = List;
