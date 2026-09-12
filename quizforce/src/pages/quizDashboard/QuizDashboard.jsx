import { useNavigate } from "react-router-dom";

function QuizMain() {
  const navigate = useNavigate();

  function HandleGoToChoix() {
    navigate("/choix");
  }

const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

  return (
    <div className="quizDashboard-page">
      <section className="quizDashboard-section">
        <h3>Zone Utilisateur</h3>
        <div>Nom:{userInfo.nom}</div>
        <div>Prenom:{userInfo.prenom}</div>
        <div>Email:{userInfo.email}</div>
        <div>Role:{userInfo.role_id}</div>
        <div>Equipe:{userInfo.equipe_id}</div>
      </section>
      <section className="quizDashboard-section">
        Zone Affection Tâches Objectifs
      </section>

      <section className="quizDashboard-section">
        <h3>Zone Statistiques</h3>
      </section>

      <section className="quizDashboard-section">
        <h3>Zone Actions</h3>
        <button onClick={HandleGoToChoix}>Acces aux thématiques</button>
      </section>
    </div>
  );
}

export default QuizMain;
