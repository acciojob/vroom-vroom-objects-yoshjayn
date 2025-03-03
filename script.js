// Complete the js code
class Car {
	constructor(make, model){
		this.make = make;
		this.model = model;
	}
}

class SportsCar extends Car{
	constructor(topSpeed){
		super(make, model)
		this.topSpeed = topSpeed
	}

    getTopSpeed(){
        return this.topSpeed
    }
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
