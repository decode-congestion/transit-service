require('dotenv').config()
const axios = require('axios')
const routes = require('./bus_route_ids')
const TRANSLINK_API = process.env.TRANSLINK_API
const TRANSLINK = id => `https://api.translink.ca/rttiapi/v1/routes/${id}?apikey=${TRANSLINK_API}`
const fs = require('fs')

const saveRoute = (routeData) => {
    fs.writeFile(`./data/${routeData.RouteNo}.json`, JSON.stringify(routeData), function (err) {
        if (err) throw err;
        process.stdout.write('🚌');
    });
}

const scrapeRoute = (route) => {
    return axios.get(TRANSLINK(route))
}

for (route of routes) {
    scrapeRoute(route)
        .then(res => saveRoute(res.data))
}