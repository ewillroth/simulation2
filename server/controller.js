
const getHouses = (req,res,next) => {
	req.app.get("db").getHouses()
	.then(response=>res.status(200).json(response))
	.catch(err=>console.log(err))
}

const deleteHouse = (req, res, next) => {
	req.app.get("db").deleteHouse(req.params.id)
	.then(response=>res.status(200).json(response))
	.catch(err=>console.log(err))
}

const addHouse = (req,res,next) => {
	req.app.get("db").addHouse([req.body.name,req.body.address,req.body.city,req.body.state,req.body.zip,req.body.image,req.body.mortgage,req.body.rent])
	.then(response=>res.status(200).json(response))
	.catch(err=>console.log(err))
}

module.exports = {
	getHouses,
	deleteHouse,
	addHouse
}