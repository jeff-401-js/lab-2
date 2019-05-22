'use strict';


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
    if(!item) throw Error('no item provided');

    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */

  pop() {
    if(this.length < 1) throw Error('no array');
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }
  

  shift() {
    if(this.length < 1) throw Error('no array');
    let returnValue = this.data[0];
    delete this.data[0];
    for(let i = 0; i < this.length; i++){
      this.data[i] = this.data[i +1];
    }
    this.length--;
    return returnValue;
  }
  

  unshift(item) {
    if(!item) throw Error('no item provided');
    for(let i = this.length; i > 0; i--){
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }

  foreach(callback) {
    if(!callback) throw Error('no callback provided');
    for(let i = 0; i < this.length; i++){
      this.data[i] = callback(this.data[i]);
    }
  }
}

module.exports = List;
