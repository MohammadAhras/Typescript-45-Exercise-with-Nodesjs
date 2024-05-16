// Function make a car object
function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize the car object 
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Added additional options to the car objects
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//calling function to create a car object
var my_car = create_car("Suzuki", "cultux", "color: Grey", "AirBag: true");
//print the variable to ensure all information store correctly car object
console.log(my_car);
