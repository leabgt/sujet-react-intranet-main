import { useState } from "react";
import { LabelForm } from "../components/forms/LabelForm";
import "./style.css";

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
      <form onSubmit={handleSubmit} className="form-login">
        <h1>CONNEXION</h1>
        <div className="login-email">
          <LabelForm text="Email : "></LabelForm>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div className="login-password">
          <LabelForm text="Password : "></LabelForm>

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>

        <button type="submit" className="buttons">CONNEXION</button>
      </form>
    </>
  );
};

export default Login;

