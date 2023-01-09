import { Form } from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import Form from "./forms/form"

const UserForm = () => {

    const dispatch = useDispatch();

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
                id: new Date().getTime(),
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
        }));

        setUserName('');
        setUserFirstName(''); 
        setUserEmail(''); 
        setUserPassword('');
        setUserPhoneNumber(''); 
        setUserBirthDate(''); 
        setUserCity('');  
        setUserCountry(''); 
        setUserCountry(''); 
    }

    return (
        <>
            <h1>This is UserForm</h1>
        </>
    )
 }
 
 export default UserForm;