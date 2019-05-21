'use strict';

// const errorHandler = require('./error-handler.js');

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */

  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */

  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  shift() {
    let returnValue = this.data[0];
    delete this.data[0];
    this.length--;
    return returnValue;
  }

  unshift(item) {
    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }

  foreach(callback) {
    for(let i = 0; i < this.length; i++){
      this.data[i] = callback(this.data[i]);
    }
  }

}

module.exports = List;
