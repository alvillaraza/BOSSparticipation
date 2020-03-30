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

    .createTable("users", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();
      tbl.boolean("is_admin").notNullable();

      tbl
        .string("activity_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("activities")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("activities").dropTableIfExists("users");
};
