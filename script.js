document.getElementById('weatherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const city = document.getElementById('cityInput').value;
    const apiKey = '2f1817d20233ebef0aba928f0d81dabe';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    console.log('Fetching weather data for:', city);
    console.log('API URL:', url);
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);
            if (data.cod === 200) {
                document.getElementById('cityName').textContent = data.name;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('conditions').textContent = `Conditions: ${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
                
                document.getElementById('weatherInfo').classList.remove('hidden');
            } else {
                alert('City not found');
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data', error);
        });
});
