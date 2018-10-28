const { getData } = require('../model/getData.js');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(async function () {
      // Inserts seed entries
      return knex('categories').insert(await getData("category").catch(err => {
        if (err) throw err;
      }));
    });
};