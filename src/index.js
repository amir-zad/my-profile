import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { core, theme } from "./components/material";
import * as serviceWorker from "./serviceWorker";

const { MuiThemeProvider } = core;

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
