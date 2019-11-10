require('dotenv').config()
const axios = require('axios')
const radii = require('./radii.json')
const TRANSLINK_KEY = process.env.TRANSLINK_KEY

const TRANSLINK = `https://api.translink.ca/rttiapi/v1/buses?apikey=${TRANSLINK_KEY}`
const fs = require('fs')

const saveVehicle = (vehicle) => {
    fs.writeFile(`./data/vehicles/${vehicle.VehicleNo}.json`, JSON.stringify(vehicle), function (err) {
        if (err) throw err;
        process.stdout.write('🚎');
    });
}

const scrapeVehicles = () => {
    return axios.get(TRANSLINK)
}

scrapeVehicles()
    .then(({data}) => data.map(v => saveVehicle(v)))
    .catch(e => console.log(e))