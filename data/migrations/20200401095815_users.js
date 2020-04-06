
exports.up = function (knex) {
  return knex.schema
  .createTable("users", users => {
    users.increments();

    users.string("username", 255).notNullable().unique();
    users.string('password', 128).notNullable();

    users.boolean("is_owner");

    users
      .string("activity_id")
      .unsigned()
      .references("id")
      .inTable("activities")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    
    users.integer('total_points');
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
