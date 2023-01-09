import { useState } from "react";
import {Form} from './form'
import { InputForm } from "./components/InputForm";
import { LabelForm } from "./components/LabelForm";

export const LoginForm = ({setEmail, setPassword}) => {

    const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Enter");
	}

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h1>CONNEXION</h1>
                <LabelForm >Email</LabelForm>
                <InputForm type="email" name="email" onChange={(e) => setEmail(e.target.value)} required></InputForm>

                <LabelForm name="password">Password</LabelForm>
                <InputForm type="password" name="password" onChange={(e) => setPassword(e.target.value)} required></InputForm>

                <button type="submit">CONNEXION</button>
            </Form>
        </>
    )
}