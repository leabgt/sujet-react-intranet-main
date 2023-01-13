import { useEffect } from "react";
import { useState } from "react";

import { FaBirthdayCake } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import "./style.css";

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

  const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const getBday = (dateString) => {
    const monthNames = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Auot",
      "Septembre",
      "Octobre",
      "Novembre",
      "Decembre",
    ];

    const birthDate = new Date(dateString);
    
  };

  return (
    <>

      <h2>Bienvenue {user.firstname} sur Intranet</h2>
      <p className="user-photo"><img src={user.photo} alt={user.name}></img></p>
      <div>
       
        {randomUser && (
          <>
            <h3>Avez vous dit bonjour à : </h3>
            <div className="random-user">
              <div className="random-img">
                <img src={randomUser.photo} alt={randomUser.firstname}></img>
              </div>
              <div className="random-info">
                <p>
                  {randomUser.firstname} {randomUser.lastname} ({" "}
                  {getAge(randomUser.birthdate)} ans)
                </p>
                <p className="random-service">{randomUser.service}</p>
                <p>
                  {randomUser.city} {randomUser.country}
                </p>
                <p>
                  <FaEnvelope />{" "}
                  <a href="mailto:{randomUser.email}">{randomUser.email}</a>
                </p>
                <p>
                  <FaPhone />{" "}
                  <a href="tel:{randomUser.phone}">{randomUser.phone}</a>
                </p>
                <p>
                  <FaBirthdayCake /> Anniversaire : {randomUser.birthdate}
                </p>
              </div>
            </div>
            <button onClick={fetchRandomCollaborator} className="buttons">
              DIRE BONJOUR À QUELQU'UN D'AUTRE
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
