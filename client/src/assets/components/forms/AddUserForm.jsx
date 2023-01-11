import {useState} from "react";
import {useDispatch} from "react-redux";

import {addUser} from "../../actions/userActions";

import {Form} from './form'
import { LabelForm } from "./components/LabelForm";
import { InputForm } from "./components/InputForm";
import { SelectForm } from "./components/SelectForm";


export const AddUserForm = () => {
    
    const dispatch = useDispatch();

    const [ userGender, setUserGender ] = useState(['male', 'female']);
    const [ userCategory, setUserCategory ] = useState(['Marketing', 'Technique', 'Client']);
    const [ userName, setUserName ] = useState('');
    const [ userFirstName, setUserFirstName ] = useState('');
    const [ userEmail, setUserEmail ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');
    const [ userPhoneNumber, setUserPhoneNumber ] = useState('');
    const [ userBirthDate, setUserBirthDate ] = useState('');
    const [ userCity, setUserCity ] = useState('');
    const [ userCountry, setUserCountry ] = useState('');
    const [ userPictureURL, setUserPictureURL ] = useState('');

    const handleAddUser = (e) => {
        e.preventDefault();
        dispatch( addUser( {
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
            }
        }))
        ;

        setUserGender([]); 
        setUserCategory([]); 
        setUserName('');
        setUserFirstName(''); 
        setUserEmail(''); 
        setUserPassword('');
        setUserPhoneNumber(''); 
        setUserBirthDate(''); 
        setUserCity('');  
        setUserCountry(''); 
        setUserPictureURL('');  
    }

    return (
        <>  
            <Form onSubmit={handleAddUser} value="Ajouter">
                <LabelForm text="Civilité"></LabelForm>
                <SelectForm onChange={(e) => setUserGender(e.target.value)} options={userGender}></SelectForm>
                <LabelForm text="Categorie"></LabelForm>
                <SelectForm onChange={(e) => setUserCategory(e.target.value)} options={userCategory}></SelectForm>
                <LabelForm text="Nom"></LabelForm>
                <InputForm name="name" onChange={(e) => setUserName(e.target.value)}></InputForm>
                <LabelForm text="Prénom"></LabelForm>
                <InputForm name="firstname" onChange={(e) => setUserFirstName(e.target.value)}></InputForm>
                <LabelForm text="Email"></LabelForm>
                <InputForm type="email" name="email" onChange={(e) => setUserEmail(e.target.value)}></InputForm>
                <LabelForm text="Mot de passe"></LabelForm>
                <InputForm type="password" name="password" onChange={(e) => setUserPassword(e.target.value)}></InputForm>
                <LabelForm text="Numéro de téléphone"></LabelForm>
                <InputForm name="phonenumber" onChange={(e) => setUserPhoneNumber(e.target.value)}></InputForm>
                <LabelForm text="Date de naissance"></LabelForm>
                <InputForm name="birthdate" onChange={(e) => setUserBirthDate(e.target.value)}></InputForm>
                <LabelForm text="Ville"></LabelForm>
                <InputForm name="password" onChange={(e) => setUserCity(e.target.value)}></InputForm>
                <LabelForm text="Pays"></LabelForm>
                <InputForm name="country" onChange={(e) => setUserCountry(e.target.value)}></InputForm>
                <LabelForm text="URL de la photo"></LabelForm>
                <InputForm name="pictureURL" onChange={(e) => setUserPictureURL(e.target.value)}></InputForm>
            </Form>
        </>
    )
 }