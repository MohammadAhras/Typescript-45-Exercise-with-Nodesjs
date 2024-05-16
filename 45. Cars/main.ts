// Function make a car object
function create_car(manufacturer: string, model, ...options){
    //initialize the car object 
    let car ={
        manufacturer: manufacturer,
        model: model,
    };
// Added additional options to the car objects
options.forEach(options => {
    let [key , value] =options.split(":");
    car[key.trim()] = value.trim();

});

return car;

}

//calling function to create a car object
let my_car = create_car("Suzuki", "cultux", "color: Grey", "AirBag: true");

//print the variable to ensure all information store correctly car object
console.log(my_car);