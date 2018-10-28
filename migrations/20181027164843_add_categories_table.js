exports.up = function (knex, Promise) {

    return knex.schema.createTable("categories", (t) => {
        t.increments()
            .index();

        t.text("name")
            .notNullable()
            .index();

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("categories");
};