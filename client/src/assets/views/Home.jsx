import { useEffect } from "react";
import { useState } from "react";

import * as Storage from "../services/storageService";
import * as API from "../services/apiService";

const Home = () => {
  const user = Storage.getJSON("user");
  const token = Storage.get("token");

  const [randomUser, setRandomUser] = useState(null);

  useEffect(() => {
    fetchRandomCollaborator();
  }, []);

  function fetchRandomCollaborator() {
    API.getRandomCollaborator(token).then((data) => {
      setRandomUser(data);
    });
  }

  const logout = () => {
    Storage.remove("token");
    Storage.remove("user");
    window.location.href = "/connexion";
  };

  const profil = () => {
    window.location.href = "/profil";
  };

  const showList = () => {
    window.location.href = "/liste";
  };

  return (
    <>
      <p onClick={showList}>Liste</p>
      <p onClick={logout}>Logout</p>

      <h2>Bienvenue {user.firstname} sur Intranet</h2>
      <img src={user.photo} alt={user.name} onClick={profil}></img>

      {randomUser && (
        <>
          <h3>Avez vous dit bonjour à : </h3>
          <div>
            <img src={randomUser.photo} alt={randomUser.firstname}></img>
            <p>
              {randomUser.firstname} {randomUser.lastname} ({randomUser.age}{" "}
              ans)
            </p>
            <p>{randomUser.email}</p>
            <p>{randomUser.phone}</p>
            <p>Anniversaire : {randomUser.birthdate}</p>
          </div>
          <button onClick={fetchRandomCollaborator}>Choisir qqn d'autre</button>
        </>
      )}
    </>
  );
};

export default Home;
