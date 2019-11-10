require('dotenv').config()
const axios = require('axios')
const TRANSLINK_KEY = process.env.TRANSLINK_KEY

const TRANSLINK = `https://api.translink.ca/rttiapi/v1/buses?apikey=${TRANSLINK_KEY}`
const fs = require('fs')

const savePositions = (vehicle) => {
    fs.writeFile(`./data/positions/${vehicle.VehicleNo}.json`, JSON.stringify(vehicle), function (err) {
        if (err) throw err;
        process.stdout.write('⏱');
    });
}

const scrapePositions = () => {
    return axios.get(TRANSLINK)
}

scrapePositions()
    .then(({data}) => data.map(v => savePositions(v)))
    .catch(e => console.log(e))