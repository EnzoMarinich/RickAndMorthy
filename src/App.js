import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/Nav';
import SearchBar from './components/searchBar/SearchBar';
import axios from 'axios';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom"
import About from "./components/About"
import Details from "./components/details/Details"
import { Form } from './components/form/Form';
import MyFavorites from './components/favorites/MyFavorites';

function App() {

   const [characters, setCharacters] = useState([])
   const location = useLocation()
   const [acces, setAcces] = useState(false)
   const password = "44222186"
   const email = "marinichenzo@gmail.com"
   const navigate = useNavigate()

   const login = (data)=>{
      if(data.email == email && data.password == password){
         setAcces(true)
         navigate("/home")
      } else{
         alert("datos incorrectos")
      }
   }

   const onSearch = (id)=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(data=>{
         const resp = characters.findIndex(char=> char.id == data.data.id)
         if(resp == -1){
            setCharacters([...characters, data.data])
         } else {
            alert("ya esta agregado ese personaje")
         }
         
      })
      .catch(err=> console.log(err))
   }

   const onClose = (id)=>{
      const filtrado = characters.filter(chara=> Number(chara.id)  !== id )
      setCharacters(filtrado)
   }
   

   useEffect(()=>{
      !acces && navigate("/")
   }, [acces])

   return (
      <div className='App'>
         {location.pathname == "/"? 
            null 
            : <Nav> 
               <SearchBar setAcces={setAcces} onSearch={onSearch}/>
            </Nav>
         }
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/details/:id' element={<Details/>}/>
            <Route path='/favorites' element={<MyFavorites onClose={onClose}/>}/>
         </Routes>
      </div>
   );
}

export default App;
