// function making
function makeSandwich(...items: string[]){
    console.log("MAking a sandwich with the following items: \n");
    items.forEach(singleitems => console.log(singleitems));
    console.log("\nNow enjoy Sandwich")
}

// caling function 3 times different Arguments 
makeSandwich("Bread", "Chicken", "Cheese","Egg");

makeSandwich("Bread","Butter","Mayo");

makeSandwich("Bread", "Jam");

