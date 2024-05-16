//Name Case 2nd Question
//lower case
var PersonName = "MOHAMMAD AHRAS SHARIF";
console.log("lowercase:", PersonName.toLowerCase());
//Upper case
console.log("Uppercase:", PersonName.toLocaleUpperCase());
//Title case
console.log("titlecase:", PersonName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
