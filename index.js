const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors({
	origin: "*",
	credentials: true,
	methods: "*",
	headers: "*",
}))

app.use(express.json())

app.get('/test', (req, res) => {
	
})