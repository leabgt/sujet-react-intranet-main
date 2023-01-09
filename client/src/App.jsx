import './App.css'
import {BrowserRouter, NavLink, Route, Router, Routes} from "react-router-dom";

import Home from "./assets/views/Home";
import Login from "./assets/views/LoginForm";
import Liste from "./assets/views/Liste"
import UserForm from './assets/views/UserForm';

function App() {
  

  return (
    <BrowserRouter>
      <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/connexion'}>Connexion</NavLink>
          <NavLink to={'/liste'}>Liste</NavLink>
          <NavLink to={'/profil'}>Ajouter</NavLink>
      </nav>
      <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/connexion'} element={<Login />} />
          <Route path={'/liste'} element={<Liste />} />
          <Route path={'/profil'} element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
