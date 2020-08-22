const express = require("express")
const knex = require("knex")
const db = require("./data/config")

const router = express.Router()

router.get("/cars", async (req, res, next) => {
	try {
		res.json(await db("cars"))

	} catch(err) {
		next(err)
	}
})

router.get("/cars/:id", async (req, res, next) => {
	try {
		const car = await db("cars").where("VIN", req.params.id)
		res.json(car)

	} catch(err) {
		next(err)
	}
})

router.post("/cars", async (req, res, next) => {
	try {
		const [id] = await db.insert(req.body).into("cars")
		const newCar = await db("cars")
			.where( "VIN", id )
			.first()

		res.status(201).json(newCar)
	} catch(err) {
		next(err)
	}
})

module.exports = router