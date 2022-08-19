import React from 'react'
import "../index.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    token ?
     navigate('../dashboard') 
     :
     navigate('../login')
  }, [token])
  return (
    <>
      <Routes>        
        <Route path="/login" element={<Login  />} />
        <Route path="/dashboard" element={<Dashboard  /> } />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
