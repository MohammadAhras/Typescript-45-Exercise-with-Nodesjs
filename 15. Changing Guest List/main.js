var guestlist = ["Hamza", "Usman", "Ayesha", "Areeba"];
var dontcome = guestlist[0];
console.log(dontcome, "Nahi Aa Sakta");
guestlist.splice(0, 1, "Amir");
guestlist.forEach(function (guest) { return console.log("Assalamoalaikum ".concat(guest, ", would you like invie dinner with me?")); });
