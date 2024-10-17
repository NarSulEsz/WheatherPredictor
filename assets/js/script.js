const citiesContainer = document.getElementById('cities');
const city = document.getElementById('city-of-user');
const fetchButton = document.getElementById('fetch-button');
const APIKey = "15a686f297cf37379980ae5889d59df9";


function getApi(event) {
  event.preventDefault();

  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIKey}&units=imperial`;
    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      document.getElementById('city').textContent = data.name;
      document.getElementById('date').textContent = new Date(data.dt * 1000).toLocaleDateString();
      document.getElementById('temp').textContent = data.main.temp;
      document.getElementById('wind').textContent = data.wind.speed;
      document.getElementById('humidity').textContent = data.main.humidity;

      
    });

}
fetchButton.addEventListener('click', getApi);