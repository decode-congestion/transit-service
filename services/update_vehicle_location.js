require('dotenv').config()
const TRANSLINK_KEY = process.env.TRANSLINK_KEY
const axios = require('axios')
const TRANSLINK = `https://api.translink.ca/rttiapi/v1/buses?apikey=${TRANSLINK_KEY}&routeNo=099`
const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../knexfile')[environment];    // require environment's settings from knexfile
const knex = require('knex')(configuration);              // connect to DB via knex using env's settings
const moment = require('moment')

const st = require('knex-postgis')(knex);

const scrapePositions = () => {
    return axios.get(TRANSLINK)
}

const insertPositions = positions => {
    const mappedPoss = positions.map(p => {
        return ({
            vehicle_no: p.VehicleNo,
            recorded_at: moment(p.RecordedTime, "hh:mm:ss a").format(),
            point: st.setSRID(st.geomFromGeoJSON(`{"type": "Point", "coordinates": [${p.Longitude},${p.Latitude}]}`), 4326)
        })
    })

    return knex('vehicle_positions').insert(mappedPoss)
}

const updateVehiclesLocationLoop = () => {
    setInterval(() => {
        scrapePositions()
        .then(({data}) => data.map(({ Latitude, Longitude, RecordedTime, VehicleNo }) => ({ Latitude, Longitude, RecordedTime, VehicleNo })))
        .then((p) => insertPositions(p))
        .then(() => process.stdout.write('✅'))
        .catch(e => console.log(e))
    }, 3000)
}

updateVehiclesLocationLoop()