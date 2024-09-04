import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCNahzTcnDhrzcLpu3oNvJ9sKH4Iuw9Owc",
  authDomain: "proyecto00-bd5bc.firebaseapp.com",
  projectId: "proyecto00-bd5bc",
  storageBucket: "proyecto00-bd5bc.appspot.com",
  messagingSenderId: "871178412392",
  appId: "1:871178412392:web:f8ed3aca768b691fdc36dd"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

