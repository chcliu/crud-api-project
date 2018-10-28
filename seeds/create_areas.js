const { getData } = require('../model/getData.js');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  knex('restaurants').del()
  return knex('areas').del()
    .then(async function () {
      // Inserts seed entries
      return knex('areas').insert(await getData("area").catch(err => {
        if (err) throw err;
      }));
    });
};
