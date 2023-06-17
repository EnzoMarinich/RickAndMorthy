import { ADD_FAV, REMOVE_FAV } from "./types";
import axios from "axios";


export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const data = await axios.post(endpoint, character)
            return dispatch({
                type: ADD_FAV,
                payload: data.data,
            })
        } catch (error) {
            console.log("error:", error)
        }
    };
};

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
            const data = await axios.delete(endpoint) 
            return dispatch({
                type: REMOVE_FAV,
                payload: data.data,
          });
        } catch (error) {
            console.log("error:", error)
        }
    };
 };


// export const addFav = (personaje)=>{
//     return {
//         type: ADD_FAV,
//         payload : personaje
//     }
// }

// export const removeFav = (id)=>{
//     return{
//         type: REMOVE_FAV,
//         payload: id
//     }
// }