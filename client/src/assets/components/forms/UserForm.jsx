import {useState} from "react";
// import {useDispatch} from "react-redux";

// import {addUser} from "../../actions/userActions";

import {Form} from './form'
import { LabelForm } from "./components/LabelForm";
import { InputForm } from "./components/InputForm";

const UserForm = () => {

    // const dispatch = useDispatch();

    const [ userGender, setUserGender ] = useState([]);
    const [ userCategory, setUserCategory ] = useState([]);
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
        // dispatch( addUser( {
        //     user: {
        //         id: new Date().getTime(),
        //         gender: userGender, 
        //         category: userCategory, 
        //         name: userName,
        //         firstname: userFirstName,
        //         email: userEmail, 
        //         password: userPassword, 
        //         phonenumber: userPhoneNumber, 
        //         birthdate: userBirthDate, 
        //         city: userCity, 
        //         country: userCountry, 
        //         pictureURL: userPictureURL, 
        //     }
        // }))
        // ;

        // setUserGender(['Homme', 'Femme']); 
        // setUserGender(['Marketing', 'Techinque']); 
        // setUserName('');
        // setUserFirstName(''); 
        // setUserEmail(''); 
        // setUserPassword('');
        // setUserPhoneNumber(''); 
        // setUserBirthDate(''); 
        // setUserCity('');  
        // setUserCountry(''); 
        // setUserCountry('');
        // setUserPictureURL('');  
        // setUserCategory(''); 
    }

    return (
        <>  
            <H1>TEST</H1>
            <Form onSubmit={handleAddUser}>
                <LabelForm >Email</LabelForm>
                <InputForm type="email" name="email" onChange={(e) => setUserEmail(e.target.value)}></InputForm>
            </Form>
        </>
    )
 }
 
 export default UserForm;