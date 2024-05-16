// Defined VAriables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["Aplple", "Grapes", "Mango"];
// Test for equality and ineaquality with strings
console.log("Is apple equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple not equal to apple?");
console.log(apple != "apple");
// Test using lower case equality
console.log("IS APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("IS APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Test for Numerical involving equality and inequality,
console.log("\nIs 10 is equal to twenty?");
console.log(ten == twenty);
console.log("\nIs 10 is not equal to twenty?");
console.log(ten != twenty);
//Greater than
console.log("\nIs ten is greater than to zero?");
console.log(ten > 0);
console.log("\nIs twenty is less than to ten?");
console.log(twenty < 10);
//greater than equal to
console.log("\nIs ten is greater than equal to 5?");
console.log(ten >= 5);
//less than equal to
console.log("\nIs twenty is less than equal to 10?");
console.log(twenty <= 10);
// Test for "and" and "or" operators
console.log("\n twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != 10 && twenty > 30);
// test using || (OR)
console.log("\n twenty is greater than fifty OR twenty is equal to twenty");
console.log(20 > 50 || 20 == 20);
//  Test Using not equal to 
console.log("\n twenty is greater than fifty OR twenty is not equal to twenty");
console.log(20 > 50 || 20 != 20);
// Test whether in items array
console.log("\nIS Grapes imclude in my fruits array");
console.log(fruits.includes("Grapes"));
// Test not include
console.log("\nIS Grapes not include my fruits array");
console.log(!fruits.includes("Grapes"));
