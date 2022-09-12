import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
//importing style
import "./styles/main.css";

const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

ReactDOM.render(
 <BrowserRouter>
 <App />
 </BrowserRouter>

, container);
