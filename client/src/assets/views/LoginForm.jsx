import { LoginForm } from "../components/forms/LoginForm";
import { useState } from "react";


const Login = () => {
    const [email , setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isValid, setIsValid] = useState(false);
    return (
        <>           
		{email != 'owen.lopez@example.com'  && password != 'owen.lopez'? 
		(
			<LoginForm 
				setEmail={setEmail} 
				setPassword={setPassword}
				setIsValid={setIsValid}/>
		) 
		: 
		(
			<Liste/>
		)}
		
        </>
    )
 }
 
 export default Login;