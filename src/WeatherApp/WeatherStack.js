const axios = require('axios');

const params = {
    access_key: 'b5f9ccf619a080676d42d49c392a30c1',
    units: 'm'
}

const foreCast = (latitude, longitude, callback) => {
  axios.get('http://api.weatherstack.com/current?query=' + encodeURIComponent(latitude)+','+encodeURIComponent(longitude), {params})
  .then(response => {
    if(response.data.error) {
      callback('Unable to find Location !',undefined)
    }else{
      const ApiResponse = response.data; 
      const WeatherIcon = ApiResponse.current.weather_icons[0]
      const message = `Current temperature in ${ApiResponse.location.name} is ${ApiResponse.current.temperature} ℃. 
        It Feels like ${ApiResponse.current.feelslike}`
      const country = `${ApiResponse.location.country}`
      const province = `${ApiResponse.location.region}`
      const city = `${ApiResponse.location.name}`
      const Location = `${country}/${province}/${city}`
      callback(undefined, message, WeatherIcon, Location);
      }
    })
    .catch(error => {
      if(error) {
        callback('Unable to connect to weather service!',undefined) 
        }
    } 
    );
}

module.exports = foreCast