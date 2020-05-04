
exports.seed = async function(knex) {
  await knex("resources").insert([
    { 
      "resource_name": "shoes",
      "resource_description": "required"
    },
    { 
      "resource_name": "music",
      "resource_description": "optional"
    },
    { 
      "resource_name": "helmet",
      "resource_description": "required"
    },
    { 
      "resource_name": "cycling gear",
      "resource_description": "optional"
    },
    { 
      "resource_name": "bike",
      "resource_description": "required"
    },
    { 
      "resource_name": "computer",
      "resource_description": "required"
    },
    { 
      "resource_name": "internet access",
      "resource_description": "required"
    }
  ])
};
