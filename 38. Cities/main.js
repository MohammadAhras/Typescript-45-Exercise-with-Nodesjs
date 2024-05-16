// Making a functiom
function describe_city(cityName, CountryName) {
    if (cityName === void 0) { cityName = "Lahore"; }
    if (CountryName === void 0) { CountryName = "Pakistan"; }
    console.log("".concat(cityName, " is in ").concat(CountryName, "."));
}
// calling a function default values
describe_city("KArachi", "Pakistan");
describe_city();
describe_city("Sydney", "Australia");
