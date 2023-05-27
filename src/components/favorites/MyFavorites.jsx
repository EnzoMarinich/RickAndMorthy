import React from 'react'
import { useSelector } from 'react-redux'
import Card from "../card/Card"
import style from "./MyFavorites.module.css"

const MyFavorites = ({onClose}) => {


    const myFavorites = useSelector(state => state.myFavorites)

  return (
    <div className={style.container}>
         {myFavorites.map(char=>{
            return <Card
            onClose={onClose}
            char={char}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species} 
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            /> 
        })}
      </div>
  )
}

export default MyFavorites