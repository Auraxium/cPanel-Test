const express = require('express')
const app = express();
const cors = require('cors')

// RESULT: CANT, NEED DOMAIN WHICH SUCKS

app.use(cors({
	origin: "*",
	credentials: true,
	methods: "*",
	headers: "*",
}))

app.use(express.json())

app.get('/', (req, res) => {
	res.json({
		mate: 'y'
	})
})

app.get('/test', (req, res) => {
	res.json({
		heeeeeeeeeeeeeee: 'YA'
	})
})

const PORT = process.env.PORT || 1776;
app.listen(PORT, null, () => console.log("Running on " + PORT))