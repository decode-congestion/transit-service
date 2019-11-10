const { createRoutesStopsSet } = require('../util/make_routes_stops')
const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
const fs = require('fs')

const getSeeds = (routesStopsSet, knex) => {
    const routesStops = Array.from(routesStopsSet)
    return routesStops.map((route_stop, i) => {
      const { stop, route } = route_stop
      return Promise.all([
        knex('routes').where({ route_no: route }),
        knex('stops').where({ stop_no: stop })
      ]).then(([routes_rows, stops_rows]) => {
        if (routes_rows[0] && stops_rows[0]) {
          const route_id = routes_rows[0].id
          const stop_id = stops_rows[0].id
          return ({id: i, stop_id, route_id })
        }
      })
  
    })
  }
  
  const routesStopsSet = createRoutesStopsSet()
  Promise.all(getSeeds(routesStopsSet, database)).then(s => {
    const filtered = s.filter(s => s !== undefined)

    fs.writeFile(`./data/routes_stops/data.json`, JSON.stringify(filtered), function (err) {
        if (err) throw err;
        process.stdout.write('🤔');
    });

  })