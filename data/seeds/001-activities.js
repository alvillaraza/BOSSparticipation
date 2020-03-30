
exports.seed = function(knex) {
  return knex('activities').insert([
    {name: 'Romantasy_Cabaret', points: '5', date: '12/22/2018', activity_type: 'choreography', description: 'choreographed performance for RC NYE', ec_name:'choregrapher', ec_points: '3'}
  ])
   
};
