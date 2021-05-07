import React from 'react';
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import axios from 'axios';

function Register() {

    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm();
    const onSubmit = data => {
         
         const obj = {
            username: data.username,
            email: data.email,
            password: data.password
         };
         
         axios.post("/users/register", obj)
         .then((res) => {
             console.log(res);
         })
         .catch( (err) => {
            console.log(err);
         })
    }

    return (
        <>
            <Link to="/login">Go to Login</Link><br /><br />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter email" {...register("email", { required: true,
                    pattern: {
                        value: /\S+@\S+.\S+/,
                        message: "Invalid Email ID"
                    }
                })} /><br />
                {errors.email ? (errors.email.message ? errors.email.message : "This field is required") : ""}<br /><br />

                <input placeholder="Enter username" {...register("username", { required: true,
                    minLength: {
                        value: 5,
                        message: "min length is 5"
                    }
                })} /><br />
                {errors.username ? (errors.username.message ? errors.username.message : "This field is required ") : ""}<br /><br />

                <input placeholder="Enter password" {...register("password", { required: true })} /><br />
                {errors.password && <span>This field is required</span>}<br /><br />

                <input placeholder="Enter confirm password" {...register("cpassword", { required: true,
                    validate: {
                        matchesPreviousPassword: (value) => {
                          const { password } = getValues();
                          return password === value || "Passwords should match!";
                        }
                    }
                })} /><br />
                {errors.cpassword ? (errors.cpassword.message ? errors.cpassword.message : "This field is required") : ""}<br /><br />

                <input type="submit" />
            </form>
        </>
    )
}

export default Register;