const shell = require('shelljs');

const getVehicles = () => {
  const files = shell.ls('data/vehicles')
  const vehicleNames = files.stdout.split("\n").filter(i => i.length > 0)
  return vehicleNames
}

const getSeeds = (vehicleNames, st) => {
  return vehicleNames.map((vehicle, i) => {
    const data = require(`../data/vehicles/${vehicle}`)

    const { VehicleNo } = data

    return {id: i, vehicle_no: VehicleNo}
  })
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vehicles').del()
    .then(function () {
      // const seeds = getSeeds()
      const st = require('knex-postgis')(knex);

      const vehicles = getVehicles()
      const seeds = getSeeds(vehicles, st)
      
      return knex('vehicles').insert(seeds)
  });
};
