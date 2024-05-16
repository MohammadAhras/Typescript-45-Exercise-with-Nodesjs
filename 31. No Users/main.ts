// Create Array
let UserNames = ["ALI", "Usman", "Zeeshan", "Admin", "Umer"];
UserNames = [];

if(UserNames.length === 0){
    console.log("Your Array  in Empty we need to find some users!")
}
else{
    UserNames.forEach(oneUser =>{
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to see a staus again`)
        }else{
            console.log(`Hello ${oneUser}, thank you for logged in again`)   
        }
    })
}
