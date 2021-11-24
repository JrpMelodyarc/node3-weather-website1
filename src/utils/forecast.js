const request = require('postman-request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0fed12c633600621010fb1c47dc08109&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees.' + ' With a ' + body.current.wind_speed + ' mph wind speed and a' + body.current.precip + '% Chance of rain')
    }
    })


}



module.exports = forecast





