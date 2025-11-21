import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from './src/Pages/LandingPage.jsx';

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LandingPage />
  </BrowserRouter>
);

