// Creating a Guest List Array 
let guestlist =["Hamza", "Usman", "Ayesha", "Areeba"];

// making variable for those who cant come 

let dontcome = guestlist[0];

// Print the name Guest who can't come
console.log(dontcome, "Nahi Aa Sakta")

//Add or Remove Guest  From Guestlist Array
guestlist.splice(0, 1 ,"Amir");

//MEssage Print for Bigger Table
console.log("Good NEws ! We have found a Bigger Table For Dinner.");

// Adding a new Guest Starting index of Array
guestlist.unshift("Ali");

//Adding a NEw Value at ending Index of array
guestlist.push("Zain")

//Get a middle index of our guest list array
let middleIndex: number =Math.floor(guestlist.length / 2); 

//Adding a new guest middle index of array
guestlist.splice(middleIndex, 0, "Osama");

//Print message on Updated list
console.log("Updated list of our Guests.")

//Sending a invitational message to our guests one by one with their names
guestlist.forEach(oneguest => console.log(`Assalamoalaikum ${oneguest} , Would you like to invite dinner with me.`));
