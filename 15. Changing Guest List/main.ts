let guestlist =["Hamza","Usman","Ayesha", "Areeba"];
let dontcome= guestlist[0];
console.log(dontcome,"Nahi Aa Sakta");

guestlist.splice(0, 1,"Amir");
guestlist.forEach(guest => console.log(`Assalamoalaikum ${guest}, would you like invie dinner with me?`));
