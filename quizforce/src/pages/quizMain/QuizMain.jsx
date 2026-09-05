import { useNavigate } from "react-router-dom";
import geekImg from "/assets/geeklearning.png";

function QuizMain() {
  const navigate = useNavigate();

  function HandleConnexion() {
    navigate("/login");
  }

  return (
    <div className="quizMain-page-main">
      <section className="quizMain-section-details">
        <div className="quizMain-section-details-flex-container">
          <h1>BIENVENUE SUR AMCSE</h1>
          <h3>Application de montée en compétence et de suivi d’évolution</h3>
          <p>
            Faites monter en compétence les agents de votre entreprise grâce à :
          </p>
          <ul>
            <li>→ De nombreux quiz interactifs sur plusieurs thématiques</li>
            <li>→ Une interface intuitive et accessible</li>
            <li>→ Un tableau de bord avec suivi des progrès</li>
            <li>→ L'attribution de tâches ou d'objectifs personnalisés</li>
            <li>→ Une gestion des campagnes thématiques</li>
          </ul>
          <div className="quizMain-button-connexion" onClick={HandleConnexion}>
            Connexion
          </div>
        </div>
      </section>
      <section className="quizMain-section-img">
        <img src={geekImg} alt="" className="quizMain-page-img" />
      </section>
    </div>
  );
}

export default QuizMain;
