const axios = require('axios');


const getClima = async(lat, lng) => {


    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=43c9d290b027ffa9da48e89f728fcade&units=metric`);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}