class Vehicle {
    public drive(): void {
        console.log('VROOM VROOM')
    }

    public honk(): void {
        console.log('BEEP BEEP')
    }
}

//inheritance
class Car extends Vehicle {
    private drive(): void {
        console.log('SKRRRRRRT')
    }

    startDrivingProcess(): void {
        this.drive()
    }
}

const car = new Car()

car.startDrivingProcess()
car.honk()