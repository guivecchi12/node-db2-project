
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) =>{
      table.integer("VIN").notNull().unique().primary()
      // table.increments("VIN")
      table.text("make").notNull()
      table.text("model").notNull()
      table.float("mileage").notNull()
      table.text("title").default("Not yet defined")
    })
  };
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
  };
  