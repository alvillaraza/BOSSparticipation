exports.up = function(knex) {
  return knex.schema
    .createTable("activities", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();

      tbl.integer("points").notNullable();

      tbl.date("date", 255).notNullable();

      tbl.string("activity_type", 255).notNullable();

      tbl.string("desc", 255);

      tbl.string("ec_name", 255);

      tbl.integer("ec_points");
    })

    .createTable("users", users => {
      users.increments();

      users.string("username", 255).notNullable().unique();
      users.string('password', 128).notNullable();

      users.boolean("is_admin");

      users
        .string("activity_id")
        .unsigned()
        .references("id")
        .inTable("activities")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("activities").dropTableIfExists("users");
};
