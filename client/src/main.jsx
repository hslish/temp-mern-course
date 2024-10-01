import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import './index.css'

//import customFetch from "./utils/customFetch.js";

//const data = await customFetch.get("/test");
//console.log(data);

//test
//fetch("/api/v1/test")
  //.then((res) => res.json())
  //.then((data) => console.log(data)); 



  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
      <ToastContainer position="top-center" />
    </React.StrictMode>
  );
