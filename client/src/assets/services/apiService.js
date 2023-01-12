const API_ENDPOINT = "http://localhost:9000";

export async function login(email, password) {
  return fetch(`${API_ENDPOINT}/api/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .catch(handleError);
}

export async function getRandomCollaborator(token) {
  return fetch(`${API_ENDPOINT}/api/collaborateurs/random`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch(handleError);
}

export async function getCollaborateurs(token) {
  return fetch(`${API_ENDPOINT}/api/collaborateurs`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch(handleError);
}

export async function addCollaborator(
  token,
  gender,
  firstname,
  lastname,
  password,
  email,
  phone,
  birthdate,
  city,
  country,
  photo,
  service
) {
  fetch(`${API_ENDPOINT}/api/collaborateurs`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      gender,
      firstname,
      lastname,
      password,
      email,
      phone,
      birthdate,
      city,
      country,
      photo,
      service,
    }),
  })
    .then((res) => res.json())
    .catch(handleError);
}

export async function deleteCollaborator(token, id) {
  fetch(`${API_ENDPOINT}/api/collaborateurs/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch(handleError);
}

function handleError(err) {
  console.error("[ERREUR API]", err.message);
}
