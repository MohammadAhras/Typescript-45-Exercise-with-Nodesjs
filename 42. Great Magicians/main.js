// Define the functions name 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an Array of magician_name
var magician_name = ["Harry", "Poter", "Michael", "James"];
var great_magicians = make_great(magician_name);
console.log(great_magicians);
//call function show_magician 
show_magicians(great_magicians);
