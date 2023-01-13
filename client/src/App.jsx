import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
} from "react-router-dom";

import * as Storage from "./assets/services/storageService";
import * as API from "./assets/services/apiService";

import { FaSignOutAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";

import Home from "./assets/views/Home";
import Login from "./assets/views/Login";
import Liste from "./assets/views/Liste";
import ChangeProfil from "./assets/views/ChangeProfil";
import AddUser from "./assets/views/AddUser";
import "./assets/views/style.css";

function App() {
  const user = Storage.getJSON("user");
  const token = Storage.get("token");

  const logout = () => {
    Storage.remove("token");
    Storage.remove("user");
    window.location.href = "/";
  };

  return (
    <BrowserRouter>
      <nav>
        <div className="navbar">
          <NavLink>
            {" "}
            <FaNetworkWired /> Intranet{" "}
          </NavLink>
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/liste"}>
            {" "}
            <FaList /> Liste{" "}
          </NavLink>
          <NavLink to={"/profil/:id"}>
            Profil
            {/* <img
            src={user.photo}
            alt={user.name}
            className="img-modify"
          ></img> */}
          </NavLink>
          <NavLink to={"/"}>
            <FaSignOutAlt /> Deconnexion
          </NavLink>
          {user.isAdmin && <NavLink to={"/adduser"}>Ajouter</NavLink>}
        </div>
      </nav>

      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/liste"} element={<Liste />} />
        <Route path={"/profil/:id"} element={<ChangeProfil />} />
        <Route path={"/adduser"} element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
