const axios = require('axios');

const GoeCode = ( city, province, country ,callback) => {
  axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/,'+encodeURIComponent(city)+','+encodeURIComponent(province)+','+encodeURIComponent(country)+'.json?access_token=pk.eyJ1IjoiYXJzbW9oYW1lZCIsImEiOiJja2JydDBqZHcyNWx2MnJ0bW54d2kwOWtnIn0.jFqMm_liVWqdB7QKOa2uig&limit=1')
  .then(response => {
    if(response.data.features.length === 0){
        callback("Unable to find location, Please try another One ");
    }
        const latitude = response.data.features[0].center[1]
        const longitude = response.data.features[0].center[0]
        const location = response.data.features[0].place_name
        callback({latitude, longitude, location});
    }).catch((e)=> {
      if(e){
        callback('Unable to connect to weather service!',undefined)
      }
    }) 
}

module.exports = GoeCode