import { ADD_FAV, REMOVE_FAV } from "./types"

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action)=>{

    switch(action.type){
        case ADD_FAV:{
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        }

        case REMOVE_FAV:{
            const filtered = state.myFavorites.filter(pers=>pers.id != Number(action.payload))
            return {
                ...state,
                myFavorites : filtered
            }   
        }
        default:
            return {...state}

    }

}

export default reducer