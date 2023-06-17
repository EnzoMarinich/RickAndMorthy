import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/Nav";
import SearchBar from "./components/searchBar/SearchBar";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Details from "./components/details/Details";
import { Form } from "./components/form/Form";
import MyFavorites from "./components/favorites/MyFavorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [acces, setAcces] = useState(false);
  const navigate = useNavigate();

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login";
    axios
      .get(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
        const { acces } = data;
        setAcces(acces);
        acces && navigate("/home");
      })
      .catch((err) => console.log("error:", err));
  }

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((data) => {
        const resp = characters.findIndex((char) => char.id == data.data.id);
        if (resp == -1) {
          setCharacters([...characters, data.data]);
        } else {
          alert("ya esta agregado ese personaje");
        }
      })
      .catch((err) => console.log("error"));
  };

  const onClose = (id) => {
    const filtrado = characters.filter((chara) => Number(chara.id) !== id);
    setCharacters(filtrado);
  };

  useEffect(() => {
    !acces && navigate("/");
  }, [acces]);

  return (
    <div className="App">
      {location.pathname == "/" ? null : (
        <Nav>
          <SearchBar setAcces={setAcces} onSearch={onSearch} />
        </Nav>
      )}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favorites" element={<MyFavorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
