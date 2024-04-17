import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import './CSS/main.css';
import './CSS/normolize.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
        <App tab="home"/>
    </Router>
);

