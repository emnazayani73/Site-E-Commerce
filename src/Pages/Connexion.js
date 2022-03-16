import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Usercontext } from "../contexts/UserContext";
import "./Style.css";
import Axios from "axios";
function Login() {
  const { setuser, user } = useContext(Usercontext);

  let navigate = useNavigate();

  const [State, setState] = useState({
    mail: "",
    motdepasse: "",
  });

  const handlechange = (e) => {
    const value = e.target.value;
    setState({
      ...State,
      [e.target.name]: value,
    });
  };

  const connexion = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/connexion", {
      Email: State.mail,
      Motdepasee: State.motdepasse,
    })
      .then((response) => {
        console.log({ response });
        const { erreur, user } = response.data;
        if (!erreur) {
          navigate("/AcceuilClient");
        } else {
          alert("utilisateur non trouvé");
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <div>
      <div className="login-box">
        <h2 className="text-2xl font-font_fremid">Connexion</h2>
        <form onSubmit={connexion}>
          <div className="user-box">
            <input
              className="text-sm text-beige-100  font-font_fremid"
              type="text"
              name="mail"
              onChange={handlechange}
            />
            <label className="text-sm text-[white] font-font_fremid">
              Email
            </label>
          </div>

          <div className="user-box">
            <input
              className="text-sm text-beige-100  font-font_fremid"
              type="password"
              name="motdepasse"
              onChange={handlechange}
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

export default Login;
