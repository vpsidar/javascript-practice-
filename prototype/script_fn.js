console.log('Function parameter');
function Car() {
    this.fuel = 100;
    this.wheels = 4;
}

// Car();
Car.prototype.type = 'vehicle'
const obj = new Car();
const obj2 = new Car();

Car.prototype.addFuel = function (amount) {
    this.fuel = amount;
}
