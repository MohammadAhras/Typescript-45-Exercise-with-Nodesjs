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

// Inform that only two guest invited dinner
console.log("Unfortunately, The new Dinner table wont arrive on time, So i can invite only two Guests dinner with me.")

// Usine while loop to Remove the guests from array until two names remain
while(guestlist.length > 2) {
    let RemoveGuest =guestlist.pop()
    console.log(`Sorry, ${RemoveGuest}, I Can't invite you to dinner. `)
}

//print Invitations to the last two guests on the  list
console.log("Invitations to the last two Guests.")
guestlist.forEach(lasttwo => console.log(`Luckily ${lasttwo}, you are Still invited to Dinner.`))

//Removing the last two Guest from the lists.
guestlist.pop();
guestlist.pop();

console.log("Empty list:", guestlist);