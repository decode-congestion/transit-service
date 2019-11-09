# Transit Service

Install:

- `npm i`

Create database:

- Go into `psql`, run `create database bus_jousting;`, then exist psql.

Knex:

- Fill out the `knexfile` with your info, only under the `development` section.
- Run migrations: `knex migrate:latest`
- Seed: `knex seed:run`