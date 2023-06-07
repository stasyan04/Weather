const WeatherRepository = require('../models/weather.model');

class dbService {
    async getAll() {
        const data = await WeatherRepository.find({});
        return data;
    }
    async pushWeather(weatherData){
        const {name, data} = weatherData;
        const {temp, feels_like, pressure, humidity} = data;
        const weather = await WeatherRepository.create(name, temp, feels_like, pressure, humidity);
        return weather;
    }
}

module.exports = new dbService();