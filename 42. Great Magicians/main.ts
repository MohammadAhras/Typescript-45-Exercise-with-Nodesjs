// Define the functions name 
function show_magicians(magicians: string[]) {
    magicians.forEach(name => console.log(name));
}

// function to maicians great through.map() it will modified array
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

//Define an Array of magician_name
let magician_name = ["Harry", "Poter","Michael","James"];

//calling function make_great modified magicians names array
let great_magicians = make_great(magician_name);

console.log(great_magicians)

//call function show_magician show names modified list magicians
show_magicians(great_magicians);