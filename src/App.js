import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gapi } from 'gapi-script'
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import Login from "./component/login";
import Logout from "./component/logout";
import { Navigate } from "react-router-dom";


import './App.css'

const clientID = "713497724686-adsqr18kc5kr48urt7eg5uv2opev68l1.apps.googleusercontent.com";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [info, setInfo] = useState(null);
  

  const handleLogin = (res) => {
     
    setIsLoggedIn(true);
    // setInfo(res.profileObj.name);
    if (isLoggedIn === true) {
      // window.location.href = "/"; 
      navigate('/home');

    }
    console.log(isLoggedIn);


    console.log('Google login success:', res);
  };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: ""
      });
    }
    gapi.load('client:auth2', start);
  });

  return (
    
    <Routes>
      <Route
        path="/" element={<Login onLogin={handleLogin} />} />
      <Route path="/home" element={{ isLoggedIn } ? <HomePage/> : <Navigate to="/login" />} />
    </Routes>

  );
}

export default App;
