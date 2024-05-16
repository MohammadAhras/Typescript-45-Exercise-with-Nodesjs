// Creating Array
let userName =["MOHAMMAD ALI" , "Mehraj", "Zeeshan", "Admin", "Usman"];

//using ForEach loop Array
userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, woule you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you logged in again.`)
    }
})