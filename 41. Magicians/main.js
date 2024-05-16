//Define a function to print each magician name from array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//Define an array containing magicians name
var magicians_names = ["Harry", "poter", "Hamza", "Ali"];
// call the function to print message
show_magicians(magicians_names);
