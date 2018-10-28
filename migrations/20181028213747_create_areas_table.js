exports.up = function (knex, Promise) {

    return knex.schema.createTable("areas", (t) => {
        t.increments()
            .index();

        t.text("area")
            .unique()
            .notNullable()
            .index();

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("areas");
};