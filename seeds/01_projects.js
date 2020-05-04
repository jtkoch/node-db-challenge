
exports.seed = async function(knex) {
  await knex("projects").insert([
    { 
      "project_name": "run",
      "project_description": "Go outside and run atleast 10 miles a week",
      "completed": false,
    },
    {
      "project_name": "bike",
      "project_description": "Find a gravel route or road route to go biking on for atleast 3 hours a week",
      "completed": false,
    },
    {
      "project_name": "code",
      "project_description": "Get atleast 5 hours outside of Lambda a week for side projects and extra learning",
      "completed": false,
    }
  ])
};
