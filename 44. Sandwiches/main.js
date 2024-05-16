// function making
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("MAking a sandwich with the following items: \n");
    items.forEach(function (singleitems) { return console.log(singleitems); });
    console.log("\nNow enjoy Sandwich");
}
// caling function 3 times different Arguments 
makeSandwich("Bread", "Chicken", "Cheese", "Egg");
makeSandwich("Bread", "Butter", "Mayo");
makeSandwich("Bread", "Jam");
