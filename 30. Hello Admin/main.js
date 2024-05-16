// Creating Array
var userName = ["MOHAMMAD ALI", "Mehraj", "Zeeshan", "Admin", "Usman"];
//using ForEach loop Array
userName.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", woule you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you logged in again."));
    }
});
