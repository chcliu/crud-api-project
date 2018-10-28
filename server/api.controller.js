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
                result = await knex(table)
                    .innerJoin("categories", "categories.id", "=", "restaurants.category_id")
                    .innerJoin(
                        "areas",
                        "areas.id",
                        "=",
                        "restaurants.area_id"
                    )
                    .select().map(restaurant => new Restaurant(restaurant));
                console.log("FIRST TEST POINT", result);
            }
            else {
                // initialize result for categories or areas
                result = await knex(table)
                    .select();
            }
            if (this.hasQuery()) {
                // set key for easy identification
                const key = Object.keys(req.query)[0];

                if (key === "id") {

                    if (restaurantTable) {
                        result = await knex(table)
                            .innerJoin("categories", "categories.id", "=", "restaurants.category_id")
                            .innerJoin(
                                "areas",
                                "areas.id",
                                "=",
                                "restaurants.area_id"
                            ).where({ id: req.query[key] })
                            .select();
                    }
                    else result = await knex(table).select()
                        .where({ id: req.query[key] });
                }
                else if (key === "name") {

                    if (restaurantTable) {
                        result = await knex(table)
                            .innerJoin("categories", "categories.id", "=", "restaurants.category_id")
                            .innerJoin(
                                "areas",
                                "areas.id",
                                "=",
                                "restaurants.area_id"
                            ).where({ name: req.query[key] })
                            .select();
                        console.log("MAIN TEST POINT", result);
                    }
                    else result = await knex(table).select()
                        .where({ name: req.query[key] });
                }
                else {
                    res.sendStatus(400);
                    return;
                }
            }
            console.log("NEAR END", result);
            res.status(200).json(result);
        }
    },

    hasQuery() {
        return (req, res) => {
            if (Object.keys(req.query).length) return true;
            else return false;
        }
    },

}