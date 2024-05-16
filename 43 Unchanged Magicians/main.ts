// Define the functions name 
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

// function to maicians great through.map() it will modified array
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

//Define an Array of magician_name
let magician_names = ["Harry", "Poter","Michael","James"];

// making a copy of Original array through .slice function
let copy_magician_names = magician_names.slice()

//modified the copy array to include "the great" with their names
make_great(copy_magician_names);

let copy_great_magicians = make_great(copy_magician_names);

// show both arrays original and copied
console.log("Original Array\n");
//Original
console.log(magician_names);

//copied
console.log("Copied Array\n");
console.log(copy_great_magicians);