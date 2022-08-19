import React, { useState } from "react";
import axios from "axios";

const Log = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const ipServ = process.env.REACT_APP_API_URL;

  // Verification Login Password + Droits Utilisateur
  const handleLogin = async (e) => {
    e.preventDefault();

    let ldap_Check = await validationLDAP();
    console.log("ldap_Check : " + ldap_Check);
  };

  // Verification login password sur le LDAP
  const validationLDAP = async () => {
    let userCheched = false;
    if ((login !== "") & (password !== "")) {
      let connection;
      try {
        connection = await axios({
          method: "post",
          url: `${ipServ}api/ldap/postLDAP_auth`,
          withCredentials: true,
          data: {
            userLogin: login,
            userPassword: password,
          },
        });

        userCheched = connection.data;
        if (!userCheched) {
          alert("Probleme Login ou Password");
        } else {
          window.location = "/home";
        }
      } catch (error) {
        alert(`Probleme d'identification`);
        console.log(error);
      }
    }

    return userCheched;
  };

  return (
    <div className="connection-form">
      <form action="" onSubmit={handleLogin} id="sign-up-form">
        <label htmlFor="login">Login</label>
        <br />
        <input
          type="text"
          name="login"
          id="login"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <div className="login error"></div>
        <br />
        <label htmlFor="password">Mot de passe</label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="password error"></div>
        <br />
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default Log;
