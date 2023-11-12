fetch('http://api.weatherstack.com/current?access_key=6b1b30f702c108538c8e8ce7b1761174&query=San%20Jose')
  .then(response => response.json())
  .then(data => {
    // Extract the relevant weather information from the JSON response
    const temperature = data.current.temperature;
    const temperatureFahrenheit = (temperature * 9/5) + 32;
    const temperatureFahrenheitTruncated = Math.trunc(temperatureFahrenheit);

    // Display the weather information on your website
    document.getElementById('temperature').textContent = `San Jose ${temperatureFahrenheitTruncated}°`;
  });
