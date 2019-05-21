
'use strict';

const Vehicle = () => ({
  drive: () => {
    return 'Moving Forward';
  },
  stop: () => {
    return 'Stopping';
  }
})
function CarFactory() {

}

function MotorcycleFactory{

}

module.exports = {CarFactory, MotorcycleFactory};