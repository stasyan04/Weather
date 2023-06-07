const {Schema, model} = require('mongoose');

const WeatherSchema = new Schema({
    name: {type: String, required: true},
    temp: {type: String, required: true},
    feels_like: {type: String, required: true},
    pressure: {type: String, required: true},
    humidity: {type: String, required: true}

})

module.exports = model('Weather', WeatherSchema);