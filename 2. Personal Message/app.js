var PersonName = "Eric";
console.log('Hello ${PersonName},would you like to learn some Python today?');
//Name Case 2nd Exercise
//lower case
var PersonName1 = "MOHAMMAD AHRAS SHARIF";
console.log("lowercase:", PersonName1.toLowerCase());
//Upper case
console.log("Uppercase:", PersonName.toLocaleUpperCase());
//Title case
console.log("titlecase:", PersonName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
