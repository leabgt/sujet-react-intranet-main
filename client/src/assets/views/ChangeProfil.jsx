import { useState } from "react";
import { useDispatch } from "react-redux";

import * as API from "../services/apiService";
import * as Storage from "../services/storageService";

import { withAuth } from "../components/auth/WithAuth";
import { Form } from "../components/forms/form";
import { LabelForm } from "../components/forms/LabelForm";
import { InputForm } from "../components/forms/InputForm";
import { SelectForm } from "../components/forms/SelectForm";
import { useEffect } from "react";

// import { useState } from "react";

const ChangeProfil = () => {
  const user = Storage.getJSON("user");
  const token = Storage.get("token");
  const id = user.id;

  const dispatch = useDispatch();

  const genderoptions = ["male", "female"];
  const serviceoptions = ["Marketing", "Technique", "Client"];

  const [userGender, setUserGender] = useState("");
  const [userCategory, setUserCategory] = useState("");
  const [userName, setUserName] = useState();
  const [userFirstName, setUserFirstName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userBirthDate, setUserBirthDate] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userPictureURL, setUserPictureURL] = useState("");

  useEffect(() => {
    setUserGender(user.gender);
    setUserCategory(user.service);
    setUserName(user.lastname);
    setUserFirstName(user.firstname);
    setUserEmail(user.email);
    setUserPassword(user.password);
    setUserPhoneNumber(user.phone);
    setUserBirthDate(user.birthdate);
    setUserCity(user.city);
    setUserCountry(user.country);
    setUserPictureURL(user.photo);
  }, []);

  const handleModifyUser = (e, id) => {
    e.preventDefault();

    API.updateUser(
      token,
      id,
      userGender,
      userFirstName,
      userName,
      userPassword,
      userEmail,
      userPhoneNumber,
      userBirthDate,
      userCity,
      userCountry,
      userPictureURL,
      userCategory
    ).then((data) => {
      console.log(data);
    });

    window.location.href = '/home'
  };

  return (
    <>
      <div className="change-profil-content">
        <div className="change-profil-title">
          <h1>Modifier mon profil</h1>
        </div>

        <Form
          onSubmit={(e) => handleModifyUser(e, id)}
          value="MODIFIER"
          className="change-profil-form"
        >
          <div className="input-change-profil">
            <LabelForm text="Civilité"></LabelForm>
            <SelectForm
              onChange={(e) => setUserGender(e.target.value)}
              defaultValue={user.gender}
              options={genderoptions}
            ></SelectForm>
          </div>

          <div className="input-change-profil">
            <LabelForm text="Categorie"></LabelForm>
            <SelectForm
              onChange={(e) => setUserCategory(e.target.value)}
              defaultValue={user.service}
              options={serviceoptions}
            ></SelectForm>
          </div>

          <div className="input-change-profil">
            <LabelForm text="Nom"></LabelForm>
            <InputForm
              type="text"
              name="name"
              onChange={(e) => setUserName(e.target.value)}
              defaultValue={user.lastname}
            ></InputForm>
          </div>

          <div className="input-change-profil">
            <LabelForm text="Prénom"></LabelForm>
            <InputForm
              name="firstname"
              onChange={(e) => setUserFirstName(e.target.value)}
              defaultValue={user.firstname}
            ></InputForm>
          </div>

          <div className="input-change-profil">
            <LabelForm text="Email"></LabelForm>
            <InputForm
              type="email"
              name="email"
              onChange={(e) => setUserEmail(e.target.value)}
              defaultValue={user.email}
            ></InputForm>
          </div>

          <div className="input-change-profil">
            <LabelForm text="Mot de passe"></LabelForm>
            <InputForm
              type="password"
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            ></InputForm>
          </div>

          <div className="input-change-profil">
            <LabelForm text="Numéro de téléphone"></LabelForm>
            <InputForm
              name="phonenumber"
              onChange={(e) => setUserPhoneNumber(e.target.value)}
              defaultValue={user.phone}
            ></InputForm>
          </div>

          <div className="input-change-profil">
            <LabelForm text="Date de naissance"></LabelForm>
            <InputForm
              name="birthdate"
              onChange={(e) => setUserBirthDate(e.target.value)}
              defaultValue={user.birthdate}
            ></InputForm>
          </div>

          <div className="input-change-profil">
            <LabelForm text="Ville"></LabelForm>
            <InputForm
              name="password"
              onChange={(e) => setUserCity(e.target.value)}
              defaultValue={user.city}
            ></InputForm>
          </div>

          <div className="input-change-profil">
            <LabelForm text="Pays"></LabelForm>
            <InputForm
              name="country"
              onChange={(e) => setUserCountry(e.target.value)}
              defaultValue={user.country}
            ></InputForm>
          </div>

          <div className="input-change-profil">
            <LabelForm text="URL de la photo"></LabelForm>
            <InputForm
              name="pictureURL"
              onChange={(e) => setUserPictureURL(e.target.value)}
              defaultValue={user.photo}
            ></InputForm>
          </div>
        </Form>
      </div>
    </>
  );
};

//export default withAuth(ChangeProfil);
export default ChangeProfil;
