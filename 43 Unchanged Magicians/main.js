// Define the functions name 
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to maicians great through.map() it will modified array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an Array of magician_name
var magician_names = ["Harry", "Poter", "Michael", "James"];
// making a copy of Original array through .slice function
var copy_magician_names = magician_names.slice();
//modified the copy array to include "the great" with their names
make_great(copy_magician_names);
var copy_great_magicians = make_great(copy_magician_names);
// show both arrays original and copied
console.log("Original Array\n");
//Original
console.log(magician_names);
//copied
console.log("Copied Array\n");
console.log(copy_great_magicians);
