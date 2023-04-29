
const apiKey = 'fbd5f7b03c9c12e63cd6958e6e084baa';

document.getElementById('submitBtn').addEventListener('click', function(event) {
  event.preventDefault();
  const city = document.getElementById('city').value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0].description;
      const temperature = data.main.temp;
      const cityName = data.name;

      const weatherDiv = document.getElementById('weather');
      weatherDiv.innerHTML = `${cityName}: ${weather} ${temperature}°C`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
console.log(apiKey);
