import { withAdmin } from "../components/auth/WithAdmin";
import { AddUserForm } from "../components/forms/AddUserForm";

const AddUser = () => {


    return (
        <>
          <h1>Ajouter un utilisateur</h1>  
          <AddUserForm/>
        </>
    )
 }
 
export default withAdmin(AddUser);