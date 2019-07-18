function Vehicle(){
    let speed = 0;
    this.speedUp = function() {
        speed++;
        showSpeed();
    };

    this.applyBrake = function() {
        if (speed > 0) {
            speed--;
        }
        showSpeed();
    };

    let showSpeed = function() {
        console.log(speed);
    };

    this.monitor = function() { //Arrow function here?
        console.log(this.type);
    };

    return this;
}

function Segway() {
    this.type = "Segway";
}
Segway.prototype = new Vehicle();

function Bike() {
    this.type = "Bike";
}
Bike.prototype = new Vehicle();

function MountainBike() {
    this.type = "MountainBike";
}
MountainBike.prototype = new Bike();

function HorseCarriage() {
    this.type = "HorseCarriage";
}
HorseCarriage.prototype = new Vehicle();

function Car() {
    this.type = "Car";
}
Car.prototype = new Vehicle();

let Garage = (function () {
	let instance;

	return function Construct_garage () {
		if (instance) {
			return instance;
		}
		if (this && this.constructor === Construct_garage) {
			instance = this;
		} else {
			return new Construct_garage();
		}
	}
}());

function testLogic() {
	let garage = new Garage();
	garage.vehicles = [new Segway(), new Bike(), new MountainBike(), new HorseCarriage(), new Car()];
	garage = new Garage();
	garage.vehicles.forEach(vehicle => {
		vehicle.monitor();
		vehicle.speedUp();
		vehicle.speedUp();
		vehicle.applyBrake();
	});
}