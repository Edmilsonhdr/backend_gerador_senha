
exports.up = knex => knex.schema.createTable("passwords", table => {
    table.increments("id");
    table.integer("user_id").unsigned();
    table.foreign("user_id").references("users.id");
    table.string("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
});


exports.down = knex => knex.schema.dropTable("passwords");
