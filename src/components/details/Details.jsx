import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Details.module.css";

const Details = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate()


  const handleBack = ()=>{
    navigate("/home")
  } 

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((resp) => setCharacter(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={style.container}>
      <button className={style.back} onClick={handleBack}>↩</button>
      <div
        className={style.img}
        style={{ backgroundImage: `url(${character.image})` }}
      ></div>
      <div className={style.caracteristicas}>
        <h2>Nombre: {character.name}</h2>
        <h2>Status: {character.status}</h2>
        <h2>Species: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
      </div>
    </div>
  );
};

export default Details;
