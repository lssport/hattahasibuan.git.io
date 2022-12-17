import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import react from "react";
import App from "./App";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
