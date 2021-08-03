import React from 'react'
import "./Login.css"
import {Button } from "@material-ui/core"
import { useDispatch } from 'react-redux'
import { auth, provider } from './firebase';
import { login } from './features/appSlice';



function Login() {
    const dispatch =useDispatch();

    const signIn =()=>{
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(login({
                username:result.user.displayName,
                profilePic:result.user.photoURL,
                id:result.user.uid,

            }))
        }).catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://variety.com/wp-content/uploads/2015/01/snapchat-logo.jpg?w=1000" alt=""/>
               <Button variant="outlined" onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login
