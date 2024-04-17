import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Omni from "./pages/Omni";
import CRM from "./pages/CRM";
import Production from "./pages/Production";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App () {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/omnichannel" element={<Omni />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/production" element={<Production />} />
          <Route path="/contacts" element={<Contacts />} />
      </Routes>  
      <Footer />
    </div>
  );
}

