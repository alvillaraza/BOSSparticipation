exports.seed = function(knex) {
  return knex("activities").insert([
    {
      name: "Romantasy Cabaret",
      points: "5",
      date: "12/22/2018",
      activity_type: "choreography",
      desc: "choreographed performance for RC NYE",
      ec_name: "choregrapher",
      ec_points: "3"
    },
    {
      name: "Fundraiser: Car Wash",
      points: "5",
      date: "04/23/2018",
      activity_type: "team building",
      desc: "raise money for a cause",
      ec_name: "brought supplies",
      ec_points: "3"
    },
    {
      name: "Costume Design",
      points: "5",
      date: "05/23/2018",
      activity_type: "costume design",
      desc: "design a full costumes"
    }
  ]);
};
