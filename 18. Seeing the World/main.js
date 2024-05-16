var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//MAking a Array countries and Print in Original orders
var countriestovisit = ["China", " Denmark", "Brazil", "Australia"];
console.log("Orignal ORder", countriestovisit);
//Print ALPHABETICAL ARRAY without modifying the actual list 
console.log("ALPHABETICAL ORDER : ", __spreadArray([], countriestovisit, true).sort());
//show that array still in Original array
console.log("STILL IN ORIGINAL ORDER:", countriestovisit);
//Reverse Alphabetical order without modifying the actual list 
console.log("Reverse Order : ", __spreadArray([], countriestovisit, true).reverse);
//show that array still in Original array 
console.log("STILL IN ORIGINAL ORDER:", countriestovisit);
// Change the originaal array Order in list
console.log("ORIGINAL ARRAY REVERSE:", countriestovisit.reverse);
//Back to original Order Array in list
console.log("BACK ORIGINAL ORDER:", countriestovisit.reverse());
//Sorted in Alphabetical Order in the original List
console.log("SORTED IN ALPHABETICAL ORDER :", countriestovisit.sort());
console.log("SORTED IN ALPHABETICAL ORDER :", countriestovisit.sort());
// We have Change Again the originaal array Order Now in reverse order again
console.log("ORIGINAL ARRAY REVERSE:", countriestovisit.reverse);
