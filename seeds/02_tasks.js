
exports.seed = async function(knex) {
  await knex("tasks").insert([
    { 
      "task_name": "stretch",
      "notes": "Make sure to stretch before and after every activity",
      "completed": true,
    },
    { 
      "task_name": "hydrate",
      "notes": "Make sure to hydrate with atleast 100oz of water everyday",
      "completed": true,
    },
    { 
      "task_name": "maintenance",
      "notes": "Make sure to check tire pressure, and oil/clean chain once a week",
      "completed": true,
    },
    { 
      "task_name": "eat well",
      "notes": "Make sure to eat green leafy vegetables every day and also watch out for sugar and carbs",
      "completed": true,
    },
    { 
      "task_name": "write code",
      "notes": "Just sit down and start coding something and you will eventually learn something",
      "completed": true,
    },
    { 
      "task_name": "podcasts",
      "notes": "Listen to some sort of media on coding everyday. Youtube videos, podcasts, blog posts...",
      "completed": true,
    },
  ])
};
