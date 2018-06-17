const request = require('request');

var getWeather = (lat,lng,callback) => {
    request({
        url:`https://api.darksky.net/forecast/7db264285314d2717920306c5d01dfaa/${lat},${lng}`,
        json:true
    },(error,response,body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server');
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200){
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemplature:body.currently.apparentTemperature
            });
        }
    })
};

module.exports.getWeather = getWeather;