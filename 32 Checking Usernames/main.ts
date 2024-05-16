// list Arrays Current users
let current_users = ["Usama", "Ali", "Zain", "Nimra", "Usman"];

//Lists of Array of New users
let new_users =["Usama","Balach","Zaid", "Saad","Nimra"];

//loop through new_users to check current usernames
new_users.forEach(new_one_user =>{
    
    //Making a Condition username for making already exists and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase()=== new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken.`)
    }else{
        console.log(`This Username ${new_one_user} is AVailable.`)
    }
})