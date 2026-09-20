import { useNavigate } from "react-router-dom";
import geekImg from "/assets/geeklearning.png";
import { utilisateurs } from "../../data/utilisateur_dbb/utilisateurs";
import { useState } from "react";

function QuizMain() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  sessionStorage.setItem("userInfo", null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login :", login);
    console.log("Mot de passe :", password);

    if (login == pers[0].login && password == pers[0].mdp) {
      sessionStorage.setItem("userInfo", JSON.stringify(utilisateurs[0]));
    } else if (login == pers[1].login && password == pers[1].mdp) {
      sessionStorage.setItem("userInfo", JSON.stringify(utilisateurs[1]));
    } else if (login == pers[2].login && password == pers[2].mdp) {
      sessionStorage.setItem("userInfo", JSON.stringify(utilisateurs[2]));
    }

    if (
      sessionStorage.getItem("userInfo") == JSON.stringify(utilisateurs[0]) ||
      sessionStorage.getItem("userInfo") == JSON.stringify(utilisateurs[1]) ||
      sessionStorage.getItem("userInfo") == JSON.stringify(utilisateurs[2])
    ) {
      navigate("/dashboard");
    } else {
      location.reload();
    }
  };

  const pers = [
    { role: "agent", login: "agent", mdp: "agent", user: utilisateurs[0] },
    { role: "resp", login: "resp", mdp: "resp", user: utilisateurs[1] },
    { role: "admin", login: "admin", mdp: "admin", user: utilisateurs[2] },
  ];

  return (
    <div className="quizLogin-page-main">
      <section className="quizLogin-section-details">
        <form
          className="quizLogin-section-details-flex-container"
          onSubmit={handleSubmit}
        >
          <h1>Connexion AMCSE</h1>
          <div className="quizLogin-login-credential">
            <label htmlFor="login">Identifiant : </label>
            <input
              id="login"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>

          <div className="quizLogin-login-credential">
            <label htmlFor="password">Mot de passe : </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <span className="quizLogin-login-forgotten">
            Mot de passe oublié ?
          </span>
          <input
            className="quizLogin-button-connexion"
            value="Connexion"
            type="submit"
          />
        </form>
      </section>
      <section className="quizLogin-section-img">
        <img src={geekImg} alt="" className="quizLogin-page-img" />
      </section>
    </div>
  );
}

export default QuizMain;
