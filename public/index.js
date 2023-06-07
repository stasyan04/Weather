async function getData(url) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      return await response.json();
    } catch (error) {
      console.log('Error getting data:', error);
      return null;
    }
  }
  
  document.getElementById("weatherForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    var city = document.getElementById("city").value;
    var weatherData = await getData(`http://localhost:3000/weather?town=${city}`);
    var weatherDiv = document.getElementById("weatherData");
    if (!weatherData.data){
        weatherDiv.innerHTML = 'Incorrect city name! Please, enter the correct one!';
    }
    else {
        weatherDiv.innerHTML = `
        <h2>${weatherData.name}</h2>
        <p>Temperature: ${Math.trunc(weatherData.data.temp-273)}</p>
        <p>Feels Like: ${Math.trunc(weatherData.data.feels_like-273)}</p>
        <p>Pressure: ${weatherData.data.pressure}</p>
        <p>Humidity: ${weatherData.data.humidity}</p>
  `;
    }
    
    document.getElementById("city").value = "";
  });