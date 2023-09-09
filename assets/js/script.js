// This is an arrow function
const loadCountryAPI = () => {
    // fetch url of rest country from website
    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => displayCountries(data))
}
// Displaying all countries
const displayCountries = countries => {
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country))
    // Displaying div to html
    const container = document.getElementById("countries");
    container.innerHTML = countriesHTML.join(' ');
}

// get data and set it to html
const getCountry = (country) => {
    console.log(country);
    return `
    <div class="country-div">
    <img src="${country.flags.png}">
    <h2>${country.name.common}</h2>
    <h4>Population: ${country.population}</h4>
    <h4>Region: ${country.region}</h4>
    <h4>Capital: ${country.capital}</h4>
    </div>
    `
}
// call the function
loadCountryAPI();