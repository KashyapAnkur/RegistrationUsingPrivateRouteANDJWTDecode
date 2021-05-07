import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Login() {

    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        let obj = {
            email: data.email,
            password: data.password
        };

        axios.post("/users/login", obj)
        .then( (res) => {
            console.log(res.data.token);
            localStorage.setItem("token",res.data.token);
            history.push("/members");
        })
        .catch( (err) => {
            console.log("user might got deleted while u delete data folder of mongod. REGISTER AGAIN");
        })
    }

    return (
        <>
            <Link to="/">Go to Register</Link><br /><br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter email" {...register("email", { required: true,
                    pattern: {
                        value: /\S+@\S+.\S+/,
                        message: "Invalid email id"
                    }
                })} /><br />
                {errors.email ? (errors.email.message ? errors.email.message : "This field is required!") : ""}<br /><br />

                <input placeholder="Enter password" {...register("password", { required: true })} /><br />
                {errors.password && "This field is required!"}<br /><br />

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;