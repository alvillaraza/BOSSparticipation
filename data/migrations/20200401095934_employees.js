
exports.up = function (knex) {
  return knex.schema
  .createTable("employees", tbl => {
    tbl.increments();

    tbl.string("username", 255).notNullable().unique();
    tbl.string('password', 128).notNullable();

    tbl.boolean("is_admin");

    tbl
      .string("activity_id")
      .unsigned()
      .references("id")
      .inTable("activities")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('employees');

};
