import { useState } from "react";
import {Form} from './form'
import { InputForm } from "./components/InputForm";
import { LabelForm } from "./components/LabelForm";



export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
   const handleSubmit = async e => {
    e.preventDefault();

    if (email && password)
    
      fetch('http://localhost:9000/api/login', {
          method: 'POST',
          headers: {
            'Accept' : 'application/json',
            'Content-Type': 'application/json'},
          body: JSON.stringify({email, password})
        })
        .then(res => res.json())
        .then(
           res => {
         
            const { success, token, user } = res;

            console.log(success);
            console.log(token);
            console.log(user);

          }
        )
        .catch(console.log)
        .then(window.location.href = "/liste")


    setPassword('');
    setEmail('');
   
      

  
  }

    return (
        <>
            <form onSubmit={handleSubmit}>
            
                <h1>CONNEXION</h1>
                <LabelForm >Email</LabelForm>
                <p></p>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>

                <LabelForm name="password">Password</LabelForm>
                <div>
                  <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                
                <button type="submit">CONNEXION</button>
            </form>
        </>
    )
}

