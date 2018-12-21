require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const controller = require('./controller')
const app = express();
const cors = require('cors')


massive(process.env.CONNECTION_STRING)
.then(db => {
	app.set('db', db); 
	console.log('database connected');
})

app.use(json())
app.use(cors())

app.get('/api/houses', controller.getHouses)
app.delete('/api.houses/id', controller.deleteHouse)

app.listen(process.env.PORT, console.log(`listening on port ${process.env.PORT}`))