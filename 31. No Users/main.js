// Create Array
var UserNames = ["ALI", "Usman", "Zeeshan", "Admin", "Umer"];
UserNames = [];
if (UserNames.length === 0) {
    console.log("Your Array  in Empty we need to find some users!");
}
else {
    UserNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a staus again"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logged in again"));
        }
    });
}
