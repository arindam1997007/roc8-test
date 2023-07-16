const express = require("express")
const cors = require("cors")
const axios = require("axios")

const apiKey = "4NKQ3-815C2-8T5Q2-16318-55301"
const url = "https://devcore02.cimet.io/v1/generate-token"

const app = express()
const PORT = process.env.PORT || 3000

// Enable CORS
app.use(cors({ origin: "*" }))

// Routes
app.get("/token", async (req, res) => {
	console.log("calling token")
	try {
		const data = await axios.post(
			url,
			{ name: "John Doe" },
			{
				headers: {
					"content-type": "text/json",
					"Api-Key": "4NKQ3-815C2-8T5Q2-16318-55301",
				},
			}
		)
		res.status(200).json({ data: data.data })
	} catch (error) {
		res.status(500).json(error)
	}
})

app.get("/products", async (req, res) => {
	console.log({ headers: req.headers })
	console.log("calling products", req.headers["auth-token"])
	try {
		const data = await axios.post(
			"https://devcore02.cimet.io/v1/plan-list",
			{
				session_id:
					"eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9",
			},
			{
				headers: {
					"content-type": "text/json",
					"Api-Key": "4NKQ3-815C2-8T5Q2-16318-55301",
					"Auth-token": req.headers["auth-token"],
				},
			}
		)
		res.status(200).json({ data: data.data })
	} catch (error) {
		res.status(500).json(error)
	}
})

// Start the server
app.listen(PORT, () => {
	console.log(`Server running ${PORT}/`)
})
