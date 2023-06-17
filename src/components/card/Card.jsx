import { Link, useLocation } from "react-router-dom";
import style from "./Card.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleInfo, faCircleXmark, faHeart, faHeartCircleCheck} from "@fortawesome/free-solid-svg-icons"


export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const location = useLocation()

  useEffect(() => {
    setIsFav(false)
    state.myFavorites.map((fav) => {
      if (fav.id == props.id) {
        setIsFav(true);
      }
    });
  }, [state.myFavorites, props.characters]);

  const handleFav = (char) => {
    isFav == false ? dispatch(addFav(char)) : dispatch(removeFav(char.id));
    setIsFav(!isFav);
  };

  const handleOnClose = () => {
    if(location.pathname == '/favorites'){
      if (isFav) {
        dispatch(removeFav(props.id));
      }
    }
    props.onClose(props.id);
  };


  return (
    <div key={props.img} className={style.card} style={{ backgroundImage: `url(${props.image})` }} >
      <div className={style.buttons}>
        <Link to={`/details/${props.id}`}> <FontAwesomeIcon  className={style.icons} icon={faCircleInfo} size="2xl" style={{cursor : "pointer"}}/> </Link>
        <FontAwesomeIcon onClick={()=>handleFav(props.char)} className={style.icons} icon={isFav? faHeartCircleCheck : faHeart} size="2xl" style={{cursor : "pointer"}}/>
        <FontAwesomeIcon onClick={handleOnClose} className={style.icons} icon={faCircleXmark} size="2xl" style={{cursor : "pointer"}}/>
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
