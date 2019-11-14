const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripción de la ciudad para obtener el clima'
    }
}).argv;


// lugar.getLugar(argv.direccion)
//     .then(console.log)

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(err => {
//         console.log(err);
//     });

const getInfo = async(direccion) => {
    try {
        const location = await lugar.getLugar(direccion);
        const weather = await clima.getClima(location.lat, location.lng);

        return `El clima de ${direccion} es ${weather} ºC`;
    } catch (error) {
        console.log(error);
        return `No se pudo determinar el clima de: ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(err => console.log(err));