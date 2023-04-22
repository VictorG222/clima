import React, { useState, useEffect } from "react";
import "./WeatherApp.css"; 
import {getAuth, signInAnonymously} from "firebase/auth";
import {getToken, onMessage} from "firebase/messaging";
import { messaging } from "./firebase";
import {ToastContainer, toast} from 'react-toastify';

function Push() {
  const login = ()=>{
    signInAnonymously(getAuth()).then(usuario => console.log(usuario));
  }

  const activarMensajes = async ()=>{
    const token = await getToken(messaging, {
      vapidKey: ""
    }).catch(error => console.log("error al generar el token"));

    if(token) console.log("Este es tu token: " + token);
    if(!token) console.log("No tienes token paps")
  }

  React.useEffect(()=>{
    onMessage(messaging, message=>{
      console.log("Tu Mensaje: ", message);
      toast(message.notification.title);
    })
  }, []);

  return (
    <div>
      <h1>Hola mundo</h1>
      <ToastContainer/>
      <button onClick={login}>Logearse</button>
      <button onClick={activarMensajes}>Generar Token</button>
    </div>
  );
}



export default Push;