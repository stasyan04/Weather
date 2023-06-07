const axios = require('axios');
const UniversalErrorHandler = require('../exceptions/UniversalErrorHandler');
const dbService = require('./dbService');
require('dotenv').config();

class WeatherService {

    async getWeatherByTown(townName){
            let weatherData;
            await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${townName}&appid=5c75a9dbecd4370ac12e893d33e3259c`)
                .then((response) => {
                    weatherData = response.data;
            })
                .catch((e) => {
                    throw e;
            })

            const sendData = {
                name: townName,
                data: {...weatherData.main}
            }
            return sendData;
                
    }
    
    getAll() {
        const data = [
    
        ]

        return data;
    }
}

module.exports = new WeatherService();