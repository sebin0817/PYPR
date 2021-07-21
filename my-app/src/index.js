import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import { config } from "./config/firebase";
import { firebase } from "@firebase/app";
import "@firebase/auth";
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <App />
    </FirebaseAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
