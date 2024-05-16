// list Arrays Current users
var current_users = ["Usama", "Ali", "Zain", "Nimra", "Usman"];
//Lists of Array of New users
var new_users = ["Usama", "Balach", "Zaid", "Saad", "Nimra"];
//loop through new_users to check current usernames
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken."));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is AVailable."));
    }
});
