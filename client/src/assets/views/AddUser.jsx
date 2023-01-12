import { useState } from "react";

import * as API from "../services/apiService";
import * as Storage from "../services/storageService";

import { withAdmin } from "../components/auth/WithAdmin";
import { Form } from "../components/forms/form";
import { LabelForm } from "../components/forms/LabelForm";
import { InputForm } from "../components/forms/InputForm";
import { SelectForm } from "../components/forms/SelectForm";

function AddUser() {
  const token = Storage.get("token");

  const genderoptions = ["", "male", "female"];
  const serviceoptions = ["", "Marketing", "Technique", "Client"];

  const [gender, setGender] = useState("");
  const [service, setService] = useState("");
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

    API.addCollaborator(
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
    ).then((data) => {
      window.location.href = "/liste";
    });
  };

  return (
    <>
      <h1>Ajouter un utilisateur</h1>
      <Form onSubmit={(e) => handleAddUser(e)} value="Ajouter">
        <LabelForm text="* Civilité :"></LabelForm>
        <SelectForm
          onChange={(e) => setGender(e.target.value)}
          options={genderoptions}
        ></SelectForm>
        <LabelForm text="* Categorie :"></LabelForm>
        <SelectForm
          onChange={(e) => setService(e.target.value)}
          options={serviceoptions}
        ></SelectForm>
        <LabelForm text="* Nom :"></LabelForm>
        <InputForm
          type="text"
          name="name"
          onChange={(e) => setLastName(e.target.value)}
          required="required"
        ></InputForm>
        <LabelForm text="* Prénom :"></LabelForm>
        <InputForm
          type="text"
          name="firstname"
          onChange={(e) => setFirstName(e.target.value)}
          required="required"
        ></InputForm>
        <LabelForm text="* Email :"></LabelForm>
        <InputForm
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required="required"
        ></InputForm>
        <LabelForm text="* Mot de passe :"></LabelForm>
        <InputForm
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required="required"
        ></InputForm>
        <LabelForm text="* Téléphone :"></LabelForm>
        <InputForm
          type="tel"
          name="phonenumber"
          onChange={(e) => setPhone(e.target.value)}
          required="required"
        ></InputForm>
        <LabelForm text="* Date de naissance :"></LabelForm>
        <InputForm
          type="text"
          name="birthdate"
          onChange={(e) => setBirthDate(e.target.value)}
          required="required"
        ></InputForm>
        <LabelForm text="* Ville :"></LabelForm>
        <InputForm
          type="text"
          name="city"
          onChange={(e) => setCity(e.target.value)}
          required="required"
        ></InputForm>
        <LabelForm text="* Pays :"></LabelForm>
        <InputForm
          type="text"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
          required="required"
        ></InputForm>
        <LabelForm text="URL de la photo :"></LabelForm>
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
