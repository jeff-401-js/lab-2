
'use strict';

const Vehicle = () => ({
  drive: () => {
    return 'Moving Forward';
  },
  stop: () => {
    return 'Stopping';
  }
});

function CarFactory(name, wheels) {
  let Car = Object.assign(
    {},
    {name},
    {wheels},
    Vehicle()
  );
  return Object.freeze(Car);
}

function MotorcycleFactory(name, wheels) {
  let Motorcycle = Object.assign(
    {},
    {name},
    {wheels},
    {wheelie},
    Vehicle()
  );
  function wheelie() {return 'Wheee!';}

  return Object.freeze(Motorcycle);
}

module.exports = {CarFactory, MotorcycleFactory};
