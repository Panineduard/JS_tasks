function Vehicle(){
    let speed = 0;
    this.speedUp = function(){
        speed++;
        showSpeed();
    };

    this.applyBrake = function(){
        if (speed > 0) {
            speed--;
        }
        showSpeed();
    };

    let showSpeed = function () {
        console.log(speed);
    };

    this.monitor = function(){
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

function testLogic() {
    let car = new Segway();
    car.monitor();
}