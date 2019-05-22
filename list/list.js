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
    let returnValue = this.data[0];
    delete this.data[0];
    for(let i = 0; i < this.length; i++){
      this.data[i] = this.data[i +1];
    }
    this.length--;
    return returnValue;
  }
  

  unshift(item) {
    try{
      for(let i = this.length; i > 0; i--){
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = item;
      this.length++;
      return this.length;
    }
    catch(e){
      let error = {
        timestamp: new Date(),
        severity: 3,
        reason: 'Something went wrong',
        message: e.message,
        file: e.file,
        position: e.column,
        stack: e.stack,
      };
      errorHandler.dealWith(error);
    }
  }

  foreach(callback) {
    try{
      for(let i = 0; i < this.length; i++){
        this.data[i] = callback(this.data[i]);
      }
    }
    catch(e){
      let error = {
        timestamp: new Date(),
        severity: 3,
        reason: 'Something went wrong',
        message: e.message,
        file: e.file,
        position: e.column,
        stack: e.stack,
      };
      errorHandler.dealWith(error);
    }
  }
}

module.exports = List;
