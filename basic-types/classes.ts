//public => called anywhere, anytime (default)
//private => can be called by other methods within THIS class
//protected => can be called by other methods in THIS class, or by other methods within CHILD classes

class Vehicle {
    
    constructor(public color: string) {}

    protected honk(): void {
        console.log('BEEP BEEP')
    }
}

const vehicle = new Vehicle('orange')
console.log(vehicle.color)

//inheritance
class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color)
        //super is a reference to the constructor in parent class
    }

    private drive(): void {
        console.log('SKRRRRRRT')
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

const car = new Car(4, 'red')

car.startDrivingProcess()

//doesn't work because honk() is marked as protected or private
//car.honk()