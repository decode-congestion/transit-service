const shell = require('shelljs');

const getStops = () => {
  const files = shell.ls('data/stops')
  const stopNames = files.stdout.split("\n").filter(i => i.length > 0)
  return stopNames
}

const getSeeds = (stopNames, st) => {
  return stopNames.map((stop, i) => {
    const data = require(`../data/stops/${stop}`)

    const { StopNo, Latitude, Longitude } = data

      return {id: i, stop_no: StopNo, point: st.setSRID(st.geomFromGeoJSON(`{"type": "Point", "coordinates": [${Longitude},${Latitude}]}`), 4326)
    }
  })
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('stops').del()
    .then(function () {
      // const seeds = getSeeds()
      const st = require('knex-postgis')(knex);

      const stops = getStops()
      const seeds = getSeeds(stops, st)
      
      return knex('stops').insert(seeds)
  });
};
