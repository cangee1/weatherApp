document.getElementById("searchBtn").addEventListener("click", function () {
  const apiKey = "e7a66e0476e8f7360b07e86409544988"; // Replace with your API key
  const city = document.getElementById("cityInput").value;
  const weatherInfo = document.getElementById("weatherInfo");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      weatherInfo.innerHTML = "Error fetching weather data.";
    });
});
