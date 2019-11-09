require('dotenv').config()
const axios = require('axios')
const radii = require('./radii.json')
const TRANSLINK_KEY = process.env.TRANSLINK_KEY
const TRANSLINK = (lat, lng) => `https://api.translink.ca/rttiapi/v1/stops?apikey=${TRANSLINK_KEY}&Lat=${lat.toString().slice(0, 9)}&Long=${lng.toString().slice(0, 9)}&Radius=2000`
const fs = require('fs')

const saveStop = (stop) => {
    fs.writeFile(`./data/stops/${stop.StopNo}.json`, JSON.stringify(stop), function (err) {
        if (err) throw err;
        process.stdout.write('🚏');
    });
}

const scrapeStops = (radius) => {
    return axios.get(TRANSLINK(...radius))
}

for (radius of radii) {
    scrapeStops(radius)
        .then(({data}) => data.map(s => saveStop(s)))
        .catch(e => console.log(e))
}