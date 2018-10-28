const { Restaurant } = require('../model/Restaurant.js');
const knex = require('../knex.js');



module.exports = {
    read(table) {
        return async (req, res) => {
            let result;
            //Conditional for if the table is restaurants
            let restaurantTable = (table === 'restaurants');
            if (restaurantTable) {
                // initialize result for restaurant
                result = await knex(table).select(['restaurants.*', 'areas.area', 'categories.category'])
                    .innerJoin("categories", "categories.id", "=", "restaurants.category_id")
                    .innerJoin(
                        "areas",
                        "areas.id",
                        "=",
                        "restaurants.area_id"
                    )
                    .map(restaurant => new Restaurant(restaurant));
            }
            else {
                // initialize result for categories or areas
                result = await knex(table)
                    .select();
            }
            if (Object.keys(req.query).length) {
                // set key for easy identification
                const key = Object.keys(req.query)[0];

                if (key === "id") {

                    if (restaurantTable) {
                        result = await knex(table).select(['restaurants.*', 'areas.area', 'categories.category'])
                            .innerJoin("categories", "categories.id", "=", "restaurants.category_id")
                            .innerJoin(
                                "areas",
                                "areas.id",
                                "=",
                                "restaurants.area_id"
                            )
                            .where({ "restaurants.id": req.query[key] })
                            .map(restaurant => {
                                return new Restaurant(restaurant);
                            });
                    }
                    else result = await knex(table).select()
                        .where({ id: req.query[key] });
                }
                else if (key === "name") {

                    if (restaurantTable) {
                        result = await knex(table).select(['restaurants.*', 'areas.area', 'categories.category'])
                            .innerJoin("categories", "categories.id", "=", "restaurants.category_id")
                            .innerJoin(
                                "areas",
                                "areas.id",
                                "=",
                                "restaurants.area_id"
                            ).where({ name: req.query[key] })
                            .map(restaurant => {
                                return new Restaurant(restaurant);
                            });
                    }
                    else result = await knex(table).select()
                        .where({ name: req.query[key] });
                }
                else {
                    res.sendStatus(400);
                    return;
                }
            }
            res.status(200).json(result);
        }
    },

    create() {
        return async (req, res) => {
            //It works but can definitely improve. 
            //Currently only POSTs if all the keys are assigned and it can only take category and area IDs but no area or category names.
            const newItem = req.body;
            await knex("restaurants").insert(newItem).into("restaurants");
            res.sendStatus(200);
        }
    }

}