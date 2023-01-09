import { useState } from "react";
import {Form} from './form'
import { InputForm } from "./components/InputForm";
import { LabelForm } from "./components/LabelForm";



export const LoginForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function login(credentials) {
        return fetch('http://localhost:9000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
          .catch((error) => {
            console.error(error);
          });
    }

   const handleSubmit = async e => {
    e.preventDefault();

    const response = await login({
      email,
      password
    });

    if ('accessToken' in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      })
      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        window.location.href = "/liste";
      });
    } else {
        alert("Try again")
    }
  }

    // async function login(){
    //     let item={email, password};
    //     let result = fetch("http://localhost:9000/api/login",{
    //         method : 'POST',
    //         headers : { 'Content-Type': 'application/json'},
    //         body : JSON.stringify(item)
    //     });

    //     result = await result.json();
    //     localStorage.setItem("Login",JSON.stringify(item));
    //     history.push('/liste');
    //     console.log(result);
    // }
   
      

    return (
        <>
            <form onSubmit={handleSubmit}>
            
                <h1>CONNEXION</h1>
                <LabelForm >Email</LabelForm>
                <InputForm type="email" name="email" onChange={(e) => setEmail(e.target.value)} required></InputForm>

                <LabelForm name="password">Password</LabelForm>
                <InputForm type="password" name="password" onChange={(e) => setPassword(e.target.value)} required></InputForm>

                <button type="submit">CONNEXION</button>
            </form>
        </>
    )
}

