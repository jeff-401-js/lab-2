'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pops items at the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.pop();
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('removes items at the beginning of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.shift();
    expect(stuff.length).toEqual(2);
    expect(stuff.data[0]).toEqual('b');
  });

  it('adds items at the beginning of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.push('c');
    stuff.unshift(1);
    expect(stuff.length).toEqual(4);
    expect(stuff.data[0]).toEqual(1);
  });

  it('do something to each item of the data set', () => {
    let stuff = new List();
    stuff.push(1);
    stuff.push(2);
    stuff.push(3);
    stuff.foreach((item) => {
      return item*2;
    });
    expect(stuff.length).toEqual(3);
    expect(stuff.data[0]).toEqual(2);
  });

});
