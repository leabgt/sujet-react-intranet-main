import { useState } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "../actions/userActions";

import { withAuth } from "../components/auth/WithAuth";
import { Form } from "../components/forms/form";
import { LabelForm } from "../components/forms/LabelForm";
import { InputForm } from "../components/forms/InputForm";
import { SelectForm } from "../components/forms/SelectForm";

// import { useState } from "react";

const ChangeProfil = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();

  const [userGender, setUserGender] = useState(["male", "female"]);
  const [userCategory, setUserCategory] = useState([
    "Marketing",
    "Technique",
    "Client",
  ]);
  const [userName, setUserName] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userBirthDate, setUserBirthDate] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userCountry, setUserCountry] = useState("");
  const [userPictureURL, setUserPictureURL] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        user: {
          gender: userGender,
          category: userCategory,
          name: userName,
          firstname: userFirstName,
          email: userEmail,
          password: userPassword,
          phonenumber: userPhoneNumber,
          birthdate: userBirthDate,
          city: userCity,
          country: userCountry,
          pictureURL: userPictureURL,
        },
      })
    );

    setUserGender("");
    setUserCategory("");
    setUserName("");
    setUserFirstName("");
    setUserEmail("");
    setUserPassword("");
    setUserPhoneNumber("");
    setUserBirthDate("");
    setUserCity("");
    setUserCountry("");
    setUserPictureURL("");
  };

  return (
    <>
      <h1>Modifier mon profil</h1>;
      <Form onSubmit={handleAddUser} value="Modifier">
        <LabelForm text="Civilité"></LabelForm>
        <SelectForm
          onChange={(e) => setUserGender(e.target.value)}
          options={userGender}
          defaultValue={user.gender}
        ></SelectForm>
        <LabelForm text="Categorie"></LabelForm>
        <SelectForm
          onChange={(e) => setUserCategory(e.target.value)}
          options={userCategory}
          defaultValue={user.service}
        ></SelectForm>
        <LabelForm text="Nom"></LabelForm>
        <InputForm
          name="name"
          onChange={(e) => setUserName(e.target.value)}
          defaultValue={user.lastname}
        ></InputForm>
        <LabelForm text="Prénom"></LabelForm>
        <InputForm
          name="firstname"
          onChange={(e) => setUserFirstName(e.target.value)}
          defaultValue={user.firstname}
        ></InputForm>
        <LabelForm text="Email"></LabelForm>
        <InputForm
          type="email"
          name="email"
          onChange={(e) => setUserEmail(e.target.value)}
          defaultValue={user.email}
        ></InputForm>
        <LabelForm text="Mot de passe"></LabelForm>
        <InputForm
          type="password"
          name="password"
          onChange={(e) => setUserPassword(e.target.value)}
        ></InputForm>
        <LabelForm text="Numéro de téléphone"></LabelForm>
        <InputForm
          name="phonenumber"
          onChange={(e) => setUserPhoneNumber(e.target.value)}
          defaultValue={user.phone}
        ></InputForm>
        <LabelForm text="Date de naissance"></LabelForm>
        <InputForm
          name="birthdate"
          onChange={(e) => setUserBirthDate(e.target.value)}
          defaultValue={user.birthdate}
        ></InputForm>
        <LabelForm text="Ville"></LabelForm>
        <InputForm
          name="password"
          onChange={(e) => setUserCity(e.target.value)}
          defaultValue={user.city}
        ></InputForm>
        <LabelForm text="Pays"></LabelForm>
        <InputForm
          name="country"
          onChange={(e) => setUserCountry(e.target.value)}
          defaultValue={user.country}
        ></InputForm>
        <LabelForm text="URL de la photo"></LabelForm>
        <InputForm
          name="pictureURL"
          onChange={(e) => setUserPictureURL(e.target.value)}
          defaultValue={user.photo}
        ></InputForm>
      </Form>
    </>
  );
};

export default withAuth(ChangeProfil);
//  export default ChangeProfil;
