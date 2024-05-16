//MAking a Array countries and Print in Original orders
let countriestovisit: string[] = ["China"," Denmark", "Brazil" ,"Australia"];
console.log("Orignal ORder",countriestovisit);

//Print ALPHABETICAL ARRAY without modifying the actual list 
console.log("ALPHABETICAL ORDER : ", [...countriestovisit].sort());

//show that array still in Original array
console.log("STILL IN ORIGINAL ORDER:", countriestovisit);

//Reverse Alphabetical order without modifying the actual list 
console.log("Reverse Order : ", [...countriestovisit].reverse);

//show that array still in Original array 
console.log("STILL IN ORIGINAL ORDER:", countriestovisit);

// Change the originaal array Order in list
console.log("ORIGINAL ARRAY REVERSE:" , countriestovisit.reverse );

//Back to original Order Array in list
console.log("BACK ORIGINAL ORDER:" , countriestovisit.reverse() );

//Sorted in Alphabetical Order in the original List
console.log("SORTED IN ALPHABETICAL ORDER :" , countriestovisit.sort());

console.log("SORTED IN ALPHABETICAL ORDER :" , countriestovisit.sort());

// We have Change Again the originaal array Order Now in reverse order again
console.log("ORIGINAL ARRAY REVERSE:" , countriestovisit.reverse );
