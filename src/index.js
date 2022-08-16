import{BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rich from './contact';
import reportWebVitals from './reportWebVitals';
import Ola from './about';
import Sola from './home';
import Devel from "./Devel";
import Niceone from './rich';
import Layout from './Layout';

export default function Main(){
  return(
    <BrowserRouter>
    <h1>Thegraywolf codeHub</h1>
    <Niceone />
    <Devel/>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<Ola />} />
        <Route path="contact" element={<Rich />} />
        <Route index element={<Sola />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Main />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
