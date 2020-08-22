exports.seed = async function(knex){
    await knex("cars").truncate()
    await knex("cars").insert([
        { make: "Mazda", model: "Mazda3", mileage: "100000.5" },
        { make: "Subaru", model: "Legacy", mileage: "55.56", title: "refurb" }
    ])
}