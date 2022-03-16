import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Inscription from "./Pages/Inscription";
import Connexion from "./Pages/Connexion";
import ErreurPage from "./Pages/ErreurPage";
import AcceuilClient from "./Pages/Client/AccueilClient";
import AccueilAdmin from "./Pages/Admin/AccueilAdmin";
import Conatct from "./Pages/Conatct";
import Apropos from "./Pages/Apropos";

const LayoutWrapper = (Component) => {
  return (
    <div>
      <Header />
      <div className="min-h-[50vh]">
        <Component />
      </div>
      <Footer />
    </div>
  );
};

function MainRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={LayoutWrapper(Accueil)} />
          <Route path="/Accueil" element={LayoutWrapper(Accueil)} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Erreur" element={<ErreurPage />} />
          <Route path="/AcceuilClient" element={<AcceuilClient />} />
          <Route path="/AcceuilAdmin" element={<AccueilAdmin />} />
          <Route path="/Contact" element={<Conatct />} />
          <Route path="/Apropos" element={<Apropos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MainRouter;
