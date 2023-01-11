import { useState } from "react";
import { Form } from "../components/forms/form";
import { InputForm } from "../components/forms/InputForm";
import { LabelForm } from "../components/forms/LabelForm";

import * as API from "../services/apiService";
import * as Storage from "../services/storageService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    API.login(email, password).then((res) => {
      const { token, user } = res;

      Storage.set("token", token);
      Storage.setJSON("user", user);

      window.location.href = "/home";
    });

    setPassword("");
    setEmail("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>CONNEXION</h1>
        <LabelForm>Email</LabelForm>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>

        <LabelForm name="password">Password</LabelForm>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>

        <button type="submit">CONNEXION</button>
      </form>
    </>
  );
};

export default Login;
