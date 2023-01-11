import { useEffect } from "react";
import { useState } from "react";

import * as Storage from "../services/storageService";
import * as API from "../services/apiService";

const Liste = () => {
  const token = Storage.get("token");

  const [collaborator, setCollaborator] = useState(null);

  useEffect(() => {
    API.getCollaborateurs(token).then((list) => {
      setCollaborator(list);
    });
  }, []);

  return (
    <>
      <h2>Liste des collaborateurs</h2>

      {collaborator && (
        <div>
          {collaborator.map(function (data, keys) {
            return (
              <div key={keys}>
                <img src={data.photo} alt={data.firstname}></img>
                <h3>
                  {" "}
                  {data.firstname} {data.lastname} ({data.age}ans){" "}
                </h3>
                <p>{data.service}</p>
                <p>
                  {data.city} {data.country}
                </p>
                <p>{data.email}</p>
                <p>{data.phone}</p>
                <p>Anniversaire {data.birthdate}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Liste;
