const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = function(req, res){
    const {id} = req.params
    axios.get(`${URL}${id}`)
    .then(data=>{
        const {id, status, name, species, origin, image, gender} = data.data
        name? res.status(200).json({id, status, name, species, origin, image, gender}) : res.status(404).send("Not fount")
    })
    .catch(err=> res.status(500).send(err.message))
}





module.exports = {
    getCharById
}