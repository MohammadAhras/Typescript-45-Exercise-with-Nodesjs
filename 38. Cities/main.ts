// Making a functiom
function describe_city(cityName: string="Lahore", CountryName: string= "Pakistan"){
    console.log(`${cityName} is in ${CountryName}.`)
}
// calling a function default values
describe_city("KArachi", "Pakistan")
describe_city()
describe_city("Sydney", "Australia")
