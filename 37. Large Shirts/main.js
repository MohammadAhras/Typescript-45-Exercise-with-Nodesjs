"use strict";
// Making a Function
function make_shirt(Size = "Large", printMssage = "I love TypeScript") {
    console.log(`Creating a ${Size} shirt ${printMssage} prints on Shirts..`);
}
// Calling function By default values
make_shirt();
// Calling function now Medium Size and Default messsage
make_shirt("Meium");
//calling a function now with smal size and Different print messsage
make_shirt("Small", "I Love Javascript");
