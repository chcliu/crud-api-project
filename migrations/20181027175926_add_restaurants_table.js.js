exports.up = function (knex, Promise) {

    return knex.schema.createTable("restaurants", (t) => {
        t.increments()
            .index();

        t.text("name")
            .unique()
            .notNullable()
            .index();

        t.integer("category_id").unsigned();
        t.foreign("category_id")
            .references("id")
            .inTable("categories")
            .onDelete("CASCADE");

        t.integer("area_id").unsigned();
        t.foreign("area_id")
            .references("id")
            .inTable("areas")
            .onDelete("CASCADE");

        t.text("budget")
            .notNullable();

        t.float("rating").unsigned();

        t.text("address")
            .notNullable();

        t.text("url")
            .notNullable();

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("restaurants");
};