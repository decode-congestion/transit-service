// const fs = require('fs')
const routes = require('../util/bus_route_ids')
require('array-flat-polyfill')
const getSeeds = () => {
  return routes.map((route, i) => {

    const routeName = route.toString().padStart(3, '0')
    const data = require(`../data/routes/${routeName}.json`)

    const { RouteNo, Name, Patterns } = data

    return Patterns.map((p, i2) => {
      return {id: Number(`${i}000${i2}`), route_no: RouteNo, name: Name, direction: p.Direction, destination: p.Destination}
    })
  }).flat()
}

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('routes').del()
    .then(function () {
      const seeds = getSeeds()
      return knex('routes').insert(seeds)
  });
};
