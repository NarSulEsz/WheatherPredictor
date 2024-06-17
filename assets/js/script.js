const citiesContainer = document.getElementById('cities');
const city = document.getElementById('city-of-user');
const fetchButton = document.getElementById('fetch-button');
const APIKey = "15a686f297cf37379980ae5889d59df9";


function getApi(event) {
  event.preventDefault();

  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIKey}`;
    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        //Creating a "ul" element and a "li" element
        const listOfCities = document.createElement('ul');
        const currentWeather = document.createElement('li');

        //Setting the text of the h3 element and p element.
        listOfCities.textContent = data[i].login;
        currentWeather.textContent = data[i].html_url;

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        citiesContainer.appendChild(listOfCities);
        listOfCities.appendChild(currentWeather);
        return citiesContainer;
      }
    });

}
fetchButton.addEventListener('click', getApi);