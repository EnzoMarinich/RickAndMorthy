import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import MyFavorites from "../favorites/MyFavorites";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const[volteada, setVolteada] =useState(false)
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    state.myFavorites.map((fav) => {
      if (fav.id == props.id) {
        setIsFav(true);
      }
    });
  }, [state.myFavorites, isFav]);

  const handleFav = (char) => {
    isFav == false ? dispatch(addFav(char)) : dispatch(removeFav(char.id));
    setIsFav(!isFav);
  };

  const handleOnClose = () => {
    if (isFav) {
      dispatch(removeFav(props.id));
    }
    props.onClose(props.id);
  };

  const handleVolteada = ()=>{
   setVolteada(!volteada)
  }

  return (
   <div onClick={handleVolteada} className={volteada? `${style.back}`: "" }>


    <div className={volteada? `${style.volteada}` : `${style.card}`} key={props.id} >
      
        <div
          style={{ backgroundImage: `url(${props.image})` }}
          className={style.cardImg}
        ></div>
        <h4>{props.name}</h4>

    </div>

    <div style={!volteada? {display:'none'} : null}>
      <div>
      <Link style={{ textDecoration: "none" }} to={`/details/${props.id}`}>
        <button className={style.buttonCard}>➕</button>
        </Link>
      </div>
        {isFav? <button  className={style.buttonCard} onClick={() => handleFav(props.char)}>💗</button> : <button
          onClick={() => handleFav(props.char)}
          className={style.buttonCard}
        >
          🤍
        </button> }

        <button className={style.close} onClick={handleOnClose}>x</button>
        
      </div>


   </div>
  );
}

{
  /* <div>
   
   <h2>{props.status}</h2>
   <h2>{props.species}</h2>
   <h2>{props.gender}</h2>
   <h2>{props.origin}</h2>
</div> */
}
