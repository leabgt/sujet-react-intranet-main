import './App.css'
import {BrowserRouter, NavLink, Route, Router, Routes} from "react-router-dom";

import Home from "./assets/views/Home";
import Login from "./assets/views/Login";
import Liste from "./assets/views/Liste"
import ChangeProfil from './assets/views/ChangeProfil';
import AddUser from './assets/views/AddUser';

function App() {

  return (
    <BrowserRouter>
      <nav>
          <NavLink to={'/home'}>Home</NavLink>
          <NavLink to={'/connexion'}>Connexion</NavLink>
          <NavLink to={'/liste'}>Liste</NavLink>
          <NavLink to={'/profil/:id'}>Profil</NavLink>
          <NavLink to={'/adduser'}>Ajouter</NavLink>
      </nav>
      <Routes>
          <Route path={'/home'} element={<Home />} />
          <Route path={'/connexion'} element={<Login />} />
          <Route path={'/liste'} element={<Liste />} />
          <Route path={'/profil/:id'} element={<ChangeProfil />} />
          <Route path={'/adduser'} element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
