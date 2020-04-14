const arvg = require('./config/yargs').arvg;

const lugar = require('./lugar/lugar');
const clima = require('./lugar/clima');

const descripcion = arvg.descripcion;


const getInfo = async(descripcion) => {

    try {
        const coords = await lugar.getLugarLatLng(descripcion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return {
            descripcion,
            temp
        }

    } catch (e) {
        console.log('No se pudo determinar', e);
    }



};


getInfo(descripcion)
    .then(console.log)
    .catch(console.log);