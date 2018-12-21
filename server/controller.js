
const getHouses = (req,res,next) => {
	req.app.get("db").getHouses()
	.then(response=>res.status(200).json(response))
	.catch(err=>console.log(err))
}

module.exports = {
	getHouses
}