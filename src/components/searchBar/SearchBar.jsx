import { useState } from "react"
import {NavLink} from "react-router-dom"
import style from "./SearchBar.module.css"

export default function SearchBar({onSearch, setAcces}) {

   const [id, setId] = useState("")

   const handleChange= (e)=>{
      setId(e.target.value)
   }

   const logOut = ()=>{
      setAcces(false)
   }

   const handleOnSearch = (e)=>{
      e.preventDefault()
      if(id)onSearch(id)
      setId("")
   }


   return ( 
      <div className={style.navBar}>
         <NavLink to={"/home"}>
            <button className={style.buttonNav}>Home</button>
         </NavLink>
         <NavLink to={"/favorites"}>
            <button className={style.buttonNav}>My favorites</button>
         </NavLink>
         <div className={style.buscador}>
            <form onSubmit={handleOnSearch} >
               <input type='search' value={id} onChange={handleChange}/>
               <button className={style.add} type="submit">Agregar</button>
            </form>
            <button className={style.add}   onClick={()=>onSearch(Math.floor(Math.random() * 860))}>Aleatorio</button>
         </div>
         <div style={{display: 'flex', gap: '5px'} }>
         <NavLink to={"/about"}>
            <button className={style.buttonNav}>About</button>
         </NavLink>
         <button onClick={logOut} className={style.buttonNav} style={{backgroundColor:"red"}}>LogOut</button>
         </div>
      </div>
   );
}

