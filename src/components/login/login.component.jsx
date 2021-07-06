import React,{useState,useEffect} from 'react';
import './login.styles.css';
import {Button} from '@material-ui/core';
import {auth,provider} from '../../firebase/firebase.utils';
import {useStateValue} from '../../StateProvider';
import {actionTypes } from '../../reducer';

const Login = () => {
  const [{},dispatch] = useStateValue();
  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(res => {
      dispatch({
        type:actionTypes.SET_USER,
        user:res.user
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://i.pinimg.com/originals/79/dc/31/79dc31280371b8ffbe56ec656418e122.png" alt="" />
        <div className="login__text">
          <h1>Sign In To WhatsApp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
        Sign In With Google
        </Button>

      </div>
    </div>
  )
}

export default Login;