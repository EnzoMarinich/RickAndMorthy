import React, { useState } from 'react'
import style from "./Form.module.css"
import { validation } from './validations'

export const Form = ({login}) => {

  
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const [errors, setErorrs] = useState({
    email:"Necesita un email valido",
    password:"minimo 6 caracteres y maximo 10, al menos un numero"
  })

   const handleChange = (e)=>{
    setUserData({
      ...userData,
      [e.target.name] : e.target.value
    })

    setErorrs(validation({
      ...userData,
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    login(userData)
  }



  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.img}>
        </div>
          <div className={style.input}>
              <label>Email:</label>
              <input onChange={handleChange} name="email" value={userData.email} type="text" />
            <p>{errors.email}</p>
          </div>
          <div className={style.input}>
              <label>Password:</label>
              <input onChange={handleChange} name='password' value={userData.password} type="password" />
              <p>{errors.password}</p>
          </div>
          <button className={style.button} typeof='submit'>Enviar</button>
      </form>
    </div>
  )
}
