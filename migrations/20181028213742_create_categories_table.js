exports.up = function (knex, Promise) {

    return knex.schema.createTable("categories", (t) => {
        t.increments()
            .index();

        t.text("category")
            .notNullable()
            .index();

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("categories");
};