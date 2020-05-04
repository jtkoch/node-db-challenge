
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id")
    table.string("project_name").notNull().unique()
    table.string("project_description")
    table.boolean("completed").notNull().defaultTo(false)
  })

  await knex.schema.createTable("tasks", (table) => {
    table.increments("id")
    table.string("task_name").notNull()
    table.string("notes").notNull()
    table.boolean("completed").notNull().defaultTo(false)
  })
  
  await knex.schema.createTable("resources", (table) => {
    table.increments("id")
    table.string("resource_name").notNull().unique()
    table.string("resource_description")
  })

  await knex.schema.createTable("project_task", (table) => {
    table.increments("id")
    table.integer("project_id")
      .notNull()
      .references("projects.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table.integer("task_id")
      .notNull()
      .references("tasks.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })

  await knex.schema.createTable("project_resources", (table) => {
    table.increments("id")
    table.integer("project_id")
      .notNull()
      .references("projects.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table.integer("resource_id")
      .notNull()
      .references("resources.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("project_resources")
  await knex.schema.dropTableIfExists("project_task")
  await knex.schema.dropTableIfExists("resources")
  await knex.schema.dropTableIfExists("tasks")
  await knex.schema.dropTableIfExists("projects")
}
