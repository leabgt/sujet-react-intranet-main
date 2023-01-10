import { useState } from "react";
import {Form} from './form'
import { InputForm } from "./components/InputForm";
import { LabelForm } from "./components/LabelForm";


export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
  const handleSubmit = async e => {
	e.preventDefault();
    
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

            // console.log(success);
            // console.log(token);
            // console.log(user);

			localStorage.setItem('token', JSON.stringify(token));
			localStorage.setItem('status', JSON.stringify(success))
			localStorage.setItem('user', JSON.stringify(user));
			random();
			collaborateurs();
			window.location.href = '/home'

          }
        )
        .catch(console.log)
      
    setPassword('');
    setEmail('');

  }

  const random = () => {
    let auth = JSON.parse(localStorage.getItem("token"));

    fetch("http://localhost:9000/api/collaborateurs/random", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const random = res;
        // console.log(random);

        localStorage.setItem("random", JSON.stringify(random));
      });
  }

  const collaborateurs = () => {
	let auth = JSON.parse(localStorage.getItem("token"));

	fetch('http://localhost:9000/api/collaborateurs', {
		method: 'GET',
		headers: { 
			Authorization: `Bearer ${auth}`,
		},
	})
	.then(res => res.json()
	.then(res => {
		const collaborator = res;

		console.log(collaborator);

		localStorage.setItem("collaborator", JSON.stringify(collaborator))


	}))
  }

    return (
        <>
            <form onSubmit={handleSubmit}>
            
                <h1>CONNEXION</h1>
                <LabelForm >Email</LabelForm>
                <div>
                  <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                </div>

                <LabelForm name="password">Password</LabelForm>
                <div>
                  <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                
                <button type="submit">CONNEXION</button>
            </form>
        </>
    )
}

