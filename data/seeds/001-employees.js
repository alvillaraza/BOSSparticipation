
exports.seed = function(knex) {
  return knex('employees').insert([
    {name: 'Kristin Travis', activity_id: 1
  ])
   
};
