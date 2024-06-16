const usersContainer = document.getElementById('users');
const fetchButton = document.getElementById('fetch-button');
let city = document.getElementById('city-of-user');
const APIKey = "15a686f297cf37379980ae5889d59df9";


async function getApi() {
  const coordUrl = `${weatherApiRootUrl}/geo/1.0/direct?q=${search}&limit=5&appid=${weatherApiKey}`;
  
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${APIKey}`;
  console.log("testing");
console.log(queryURL)
  try {
    const response = await fetch(queryURL);
    const movies = await response.json();
    console.log('response', movies)
  } catch(err){
    console.log(err);
  }

 /* fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        //Creating a h3 element and a p element
        const cities = document.createElement('h3');
        const userUrl = document.createElement('p');

        //Setting the text of the h3 element and p element.
        userName.textContent = data[i].login;
        userUrl.textContent = data[i].html_url;

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        usersContainer.append(userName);
        usersContainer.append(userUrl);
      }
    });
*/
}
fetchButton.addEventListener('click', async function(){
  await getApi();
});
