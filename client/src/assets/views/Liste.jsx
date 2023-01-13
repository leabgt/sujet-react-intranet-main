import { useEffect, useReducer } from "react";
import { useState } from "react";

import * as Storage from "../services/storageService";
import * as API from "../services/apiService";

const Liste = () => {
  const token = Storage.get("token");
  const user = Storage.getJSON("user");

  const [collaborator, setCollaborator] = useState([]);
  const [category, setCategory] = useState();
  const [q, setQ] = useState();

  useEffect(() => {
    API.getCollaborateurs(token).then((list) => {
      setCollaborator(list);
    });
  }, []);

  function getFilteredList() {
    if (!category && !q) {
      return collaborator;
    }
    return collaborator
      .filter((data) => category === undefined || data.service === category)
      .filter(
        (data) =>
          data.firstname.toLowerCase().includes(q.toLowerCase()) ||
          data.lastname.toLowerCase().includes(q.toLowerCase())
      );
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    if (e.target.value == "All") {
      setCategory(undefined);
    }
  };

  const handleQueryChange = (e) => {
    setQ(e.target.value);
    console.log(q);
  };

  const handleDeleteUser = (e, id) => {
    e.preventDefault();

    API.deleteCollaborator(token, id).then((data) => {
      window.location.href = "/liste";
    });
  };

  // function classService() {
  //   if (data.service === "Marketing") {
  //     return "pink-label";
  //   } else if (data.service === "Technique") {
  //     return "blue-label";
  //   } else {
  //     return "green-label";
  //   }
  // }

  const filteredList = getFilteredList();

  return (
    <>
      <div className="liste-content">
        <h1>Liste des collaborateurs</h1>
        <div>
          <div>Filter by Category:</div>
          <div>
            <input
              type="search"
              name="search-bar"
              onChange={handleQueryChange}
            ></input>
          </div>
          <div>
            <select name="category-list" onChange={handleCategoryChange}>
              <option value="All">All</option>
              <option value="Marketing">Marketing</option>
              <option value="Technique">Technique</option>
              <option value="Client">Client</option>
            </select>
          </div>
        </div>
        {collaborator && (
          <div className="liste-cards">
            {filteredList.map(function (data, keys) {
              return (
                <div key={keys} className="liste-card">
                  <div className="photo-card">
                    <img src={data.photo} alt={data.firstname}></img>
                  </div>
                  <div className="content-card">
                    <div className="service-content">
                      <p>{data.service}</p>
                    </div>
                    <h3>
                      {" "}
                      {data.firstname} {data.lastname} ({data.age}ans){" "}
                    </h3>
                    <p>
                      {data.city}, {data.country}
                    </p>
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                    <p>Anniversaire {data.birthdate}</p>
                    {user.isAdmin && (
                      <button onClick={(e) => handleDeleteUser(e, data.id)}>
                        Supprimer
                      </button>
                    )}
                    {user.isAdmin && <button>Modifier</button>}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Liste;
