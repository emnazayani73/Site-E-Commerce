import React, { useContext, useEffect } from "react";
import Axios from "axios";
import "./Style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Usercontext } from "../contexts/UserContext";

export default function Test() {
  const { user, setuser } = useContext(Usercontext);

  const [Erreurs, setErreurs] = useState({});

  let navigate = useNavigate();

  const SaveClient = async () => {
    const { data } = await Axios.get("http://localhost:3001/clients");
    return data;
  };
  const NewClient = () => {
    const newuser = {
      Nom: user.Nom,
      Prenom: user.Prenom,
      Telephone: user.Numtel,
      Email: user.Email,
      Motdepasse: user.Motdepasse,
    };
    console.log({ newuser });
    Axios.post("http://localhost:3001/inscription", newuser);
  };

  useEffect(() => {
    console.log("d5al fu leffect");
    SaveClient().then((dataaaaaaaa) => console.log({ dataaaaaaaa }));
  }, []);

  // hedhi bch nsta3mlou feha usecontext

  const handleChange = (e) => {
    const value = e.target.value;
    setuser({
      ...user,
      [e.target.name]: value,
    });

    console.log(user?.Prenom);
    console.log(user?.Nom);
    console.log(user?.Numtel);
  };

  // fonction pour handle les erreurs de validation d'un formulaire
  let valid = true;
  const handleErrors = (error = {}) => {
    let regexNom = /^[a-zA-Z ]+$/;
    let regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexNom.test(user?.Prenom)) {
      if (error) {
        error.MsgPrenom = "Prenom Invalid";
      }
      valid = false;
    }

    if (!regexNom.test(user?.Nom)) {
      error.MsgNom = "Nom Invalid";
      valid = false;
    }

    if (user?.Numtel?.length !== 8) {
      error.MsgNumtel = "Numero de Telephone Invalid";
      valid = false;
    }

    if (!String(user?.Email).toLowerCase().match(regexEmail)) {
      error.MsgEmail = "Email Invalid";
      valid = false;
    }

    if (user?.Motdepasse.length < 8 || user?.Motdepasse.length > 25) {
      error.MsgMotdepasse = "Mot de Passe Invalid";
      valid = false;
    }

    return valid;
    /*console.log(error.MsgNom);
    console.log(error.MsgPrenom);
    console.log(error.MsgMotdepasse);
    console.log(error.MsgEmail);
    console.log(error.MsgNumtel);*/
  };

  // fonction pour la redirection vers la page de login
  const RedirectionLoginPage = () => {
    if (valid) {
      navigate("/Connexion");
    }
  };

  //Fonction lors de submit d'un formulaire t3ayt ll handleErrors
  const handleSubmit = (e) => {
    e.preventDefault();
    let error = {};
    handleErrors(error);
    setErreurs(error);
    NewClient();
    // console.log(Erreurs);  3lech matmchi w tatl3 lista fer8a mafehich obket re8im l'objet tsna3
    RedirectionLoginPage();
  };

  return (
    <div>
      <div className="login-box">
        <h2 className="text-2xl font-font_fremid">Inscription</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            {Erreurs.MsgPrenom && (
              <p className=" py-3 p-2 text-xs text-red-100 font-font_fremid">
                {Erreurs.MsgPrenom}
              </p>
            )}
            <input
              className="text-sm text-beige-100 font-font_fremid"
              type="text"
              name="Prenom"
              onChange={handleChange}
              required
            />
            <label className="text-sm text-[white] font-font_fremid">
              Prenom
            </label>
          </div>

          <div className="user-box">
            {Erreurs.MsgNom && (
              <p className="py-3 p-2 text-xs text-red-100  font-font_fremid">
                {Erreurs.MsgNom}
              </p>
            )}
            <input
              className="text-sm text-beige-100  font-font_fremid"
              type="text"
              name="Nom"
              onChange={handleChange}
              required
            />
            <label className="text-sm text-[white] font-font_fremid">Nom</label>
          </div>

          <div className="user-box">
            {Erreurs.MsgNumtel && (
              <p className=" py-3 p-2 text-xs text-red-100  font-font_fremid">
                {Erreurs.MsgNumtel}
              </p>
            )}
            <input
              className="text-sm text-beige-100  font-font_fremid"
              type="text"
              name="Numtel"
              onChange={handleChange}
            />
            <label className="text-sm text-[white] font-font_fremid">
              Numero telephone
            </label>
          </div>

          <div className="user-box">
            {Erreurs.MsgEmail && (
              <p className=" py-3 p-2 text-xs text-red-100  font-font_fremid">
                {Erreurs.MsgEmail}
              </p>
            )}
            <input
              className="text-sm text-beige-100  font-font_fremid"
              type="text"
              name="Email"
              onChange={handleChange}
            />
            <label className="text-sm text-[white] font-font_fremid">
              Email
            </label>
          </div>

          <div className="user-box">
            {Erreurs.MsgMotdepasse && (
              <p className=" py-3 p-2 text-xs text-red-100  font-font_fremid">
                {Erreurs.MsgMotdepasse}
              </p>
            )}
            <input
              className="text-sm text-beige-100  font-font_fremid"
              type="password"
              name="Motdepasse"
              onChange={handleChange}
            />
            <label className="text-sm text-[white] font-font_fremid">
              Mot de passe
            </label>
          </div>

          <input
            className="bg-bluemarine-100 text-beige-100  cursor-pointer	text-[white] rounded  font-font_fremid p-2"
            type="submit"
            value="S'INSCRIRE"
          />
        </form>
      </div>
    </div>
  );
}
