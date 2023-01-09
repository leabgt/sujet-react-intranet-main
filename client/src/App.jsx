import './App.css'
import {BrowserRouter, NavLink, Route, Router, Routes} from "react-router-dom";

import Home from "./views/Home";
import AddUser from "./views/AddUser";
import LoginForm from "./views/LoginForm";
import Liste from "./views/Liste"

function App() {
  return (
    <BrowserRouter>
      <nav>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/connexion'}>Connexion</NavLink>
          <NavLink to={'/liste'}>Liste</NavLink>
          <NavLink to={'/adduser'}>Ajouter</NavLink>
      </nav>
      <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/connexion'} element={<LoginForm />} />
          <Route path={'/liste'} element={<Liste />} />
          <Route path={'/adduser'} element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
