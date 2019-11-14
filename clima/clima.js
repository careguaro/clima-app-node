const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=833f481cb905c657eb3e171959fc298f`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}