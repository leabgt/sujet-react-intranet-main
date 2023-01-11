import { UserForm } from "../components/forms/UserForm";
import { withAuth } from "../components/auth/WithAuth";
// import { useState } from "react";

const ChangeProfil = () => {
    // const [userEmail , setUserEmail] = useState('');

    return (
        <>
            <h1>Modifier mon profil</h1>
            <UserForm/>
        </>
    )
 }
 
 export default withAuth(ChangeProfil);
//  export default ChangeProfil;