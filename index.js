const express = require("express")
const cors = require("cors")
const axios = require("axios")

const apiKey = "4NKQ3-815C2-8T5Q2-16318-55301"
const url = "https://devcore02.cimet.io/v1/generate-token"

const app = express()
const port = 3000

// Enable CORS
app.use(cors({ origin: "*" }))

// Routes
app.get("/token", (req, res) => {
	console.log("calling")
	fetch(url, {
		method: "POST",
		headers: {
			"Api-Key": "4NKQ3-815C2-8T5Q2-16318-55301",
		},
	})
		.then(response => response.json())
		.then(data => {
			res.status(200).json(data)
		})
		.catch(error => {
			// console.error("Error:", error)
			res.status(500).json(error)
		})
})

// Start the server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`)
})
