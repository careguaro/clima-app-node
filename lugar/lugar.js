const axios = require('axios');

const getLugar = async(direccion) => {
    const encodedParam = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedParam}`,
        headers: { 'x-rapidapi-key': '7da07a0d5emshfbbd85fa8486801p154318jsn55c7fe931555' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lng = data.lon

    return {
        address,
        lat,
        lng
    }
}

module.exports = {
    getLugar
}