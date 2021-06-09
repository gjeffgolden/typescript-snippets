var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log('Vroom vroom');
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
vehicle.drive();
