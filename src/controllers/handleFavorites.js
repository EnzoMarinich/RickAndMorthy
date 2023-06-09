let myFavorites = []

const postFav= function(req, res){
    const character = req.body
    myFavorites.push(character)
    res.json(myFavorites)
}

const deleteFav = (req, res)=>{
    const {id} = req.params
    const myFavoritesFilter = myFavorites.filter(char=> char.id !== Number(id))
    myFavorites = myFavoritesFilter
    res.json(myFavorites)
}

module.exports ={
    postFav,
    deleteFav
}