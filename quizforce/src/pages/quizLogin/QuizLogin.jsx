import { useNavigate } from "react-router-dom";
import geekImg from "/assets/geeklearning.png";

function QuizMain() {
  const navigate = useNavigate();

  function HandleConnexion() {
    navigate("/choix");
  }

  return (
    <div className="quizLogin-page-main">
      <section className="quizLogin-section-details">
        <div className="quizLogin-section-details-flex-container">
          <h1>Connexion AMCSE</h1>
          <div className="quizLogin-login-credential">
            <span>Identifiant : </span>
            <input type="text" />
          </div>

          <div className="quizLogin-login-credential">
            <span>Mot de passe : </span>
            <input type="text" />
          </div>
          <span className="quizLogin-login-forgotten">Mot de passe oublié ?</span>
          <div className="quizLogin-button-connexion" onClick={HandleConnexion}>
            Connexion
          </div>
        </div>
      </section>
      <section className="quizLogin-section-img">
        <img src={geekImg} alt="" className="quizLogin-page-img" />
      </section>
    </div>
  );
}

export default QuizMain;
