//Name Case 2nd Question
//lower case
let PersonName: string="MOHAMMAD AHRAS SHARIF";
console.log("lowercase:",PersonName.toLowerCase());

//Upper case
console.log("Uppercase:",PersonName.toLocaleUpperCase());

//Title case
console.log("titlecase:", PersonName.replace(/\bw/g,c=> c.toUpperCase()));