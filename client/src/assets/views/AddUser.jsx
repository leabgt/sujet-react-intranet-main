import { useState } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "../actions/userActions";

import { withAdmin } from "../components/auth/WithAdmin";
import { Form } from "../components/forms/form";
import { LabelForm } from "../components/forms/LabelForm";
import { InputForm } from "../components/forms/InputForm";
import { SelectForm } from "../components/forms/SelectForm";

function AddUser() {
  // const dispatch = useDispatch();

  // const [ userID, setUserID ] = useState();
  const [gender, setGender] = useState(["male", "female"]);
  const [service, setService] = useState(["Marketing", "Technique", "Client"]);
  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [photo, setPhoto] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();

    let api = "http://localhost:9000/api/collaborateurs";
    let auth = JSON.parse(localStorage.getItem("token"));
    console.log(auth);

    fetch(api, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth}`,
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
      .then((res) => {
        const token = res;
        console.log(token);
        console.log(res);
      })
      .catch(console.log("err"));

    //     setUserID(userID + 1);
    //     setUserGender([]);
    //     setUserCategory([]);
    //     setUserName('');
    //     setUserFirstName('');
    //     setUserEmail('');
    //     setUserPassword('');
    //     setUserPhoneNumber('');
    //     setUserBirthDate('');
    //     setUserCity('');
    //     setUserCountry('');
    //     setUserPictureURL('');
  };

  return (
    <>
      <h1>Ajouter un utilisateur</h1>
      <Form onSubmit={(e) => handleAddUser(e)} value="Ajouter">
        <LabelForm text="Civilité"></LabelForm>
        <SelectForm
          onChange={(e) => setGender(e.target.value)}
          options={gender}
        ></SelectForm>
        <LabelForm text="Categorie"></LabelForm>
        <SelectForm
          onChange={(e) => setService(e.target.value)}
          options={service}
        ></SelectForm>
        <LabelForm text="Nom"></LabelForm>
        <InputForm
          type="text"
          name="name"
          onChange={(e) => setLastName(e.target.value)}
        ></InputForm>
        <LabelForm text="Prénom"></LabelForm>
        <InputForm
          type="text"
          name="firstname"
          onChange={(e) => setFirstName(e.target.value)}
        ></InputForm>
        <LabelForm text="Email"></LabelForm>
        <InputForm
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        ></InputForm>
        <LabelForm text="Mot de passe"></LabelForm>
        <InputForm
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></InputForm>
        <LabelForm text="Numéro de téléphone"></LabelForm>
        <InputForm
          type="tel"
          name="phonenumber"
          onChange={(e) => setPhone(e.target.value)}
        ></InputForm>
        <LabelForm text="Date de naissance"></LabelForm>
        <InputForm
          type="text"
          name="birthdate"
          onChange={(e) => setBirthDate(e.target.value)}
        ></InputForm>
        <LabelForm text="Ville"></LabelForm>
        <InputForm
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
        ></InputForm>
        <LabelForm text="Pays"></LabelForm>
        <InputForm
          type="text"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
        ></InputForm>
        <LabelForm text="URL de la photo"></LabelForm>
        <InputForm
          type="url"
          name="pictureURL"
          onChange={(e) => setPhoto(e.target.value)}
        ></InputForm>
      </Form>
    </>
  );
}

export default withAdmin(AddUser);
