const shell = require('shelljs')
const stops = shell.ls('data/stops')
require('array-flat-polyfill')


// go through each stop, create a list of stop + bus pairs

const routes_stops = new Set()

stops.forEach(s => {
    const stop = require(`../data/stops/${s}`)
    const routes = stop.Routes ? stop.Routes.split(", ") : []
    routes.forEach(route => {
        routes_stops.add({
            stop: stop.StopNo,
            route: route
        })
    })
})

// console.log(stops.length)

console.log(routes_stops)

// console.log(routes_stops)

