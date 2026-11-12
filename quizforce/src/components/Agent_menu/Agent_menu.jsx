import icon_utilisateur from "/assets/icons/utilisateur.png";
import icon_statistiques from "/assets/icons/statistiques.png";
import icon_progression from "/assets/icons/progression.png";
import icon_taches from "/assets/icons/taches.png";
import icon_quiz from "/assets/icons/quiz.png";
import icon_deconnexion from "/assets/icons/deconnexion.png";

function Agent_menu({
  onClickAccesThematiques,
  onClickProgression,
  onClickDeconnexion,
  onClickAgent,
  onClickStatistiques,
  onClickTaches,
}) {
  return (
    <section className="quizDashboard-section-left">
      <h3>Menu Dashboard</h3>

      <div className="quizDashboard-menu-line" onClick={onClickAgent}>
        <img src={icon_utilisateur} alt="" className="quizDashboard-icon" />{" "}
        <div>Agent</div>
      </div>

      <div className="quizDashboard-menu-line" onClick={onClickTaches}>
        <img src={icon_taches} alt="" className="quizDashboard-icon" />{" "}
        <div>Tâches</div>
      </div>
      <div className="quizDashboard-menu-line" onClick={onClickProgression}>
        <img src={icon_progression} alt="" className="quizDashboard-icon" />{" "}
        <div>Progression</div>
      </div>
      <div className="quizDashboard-menu-line" onClick={onClickStatistiques}>
        <img src={icon_statistiques} alt="" className="quizDashboard-icon" />{" "}
        <div>Statistiques</div>
      </div>

      <div
        className="quizDashboard-menu-line"
        onClick={onClickAccesThematiques}
      >
        <img src={icon_quiz} alt="" className="quizDashboard-icon" />{" "}
        <div>Accès aux thématiques</div>
      </div>

      <div
        className="quizDashboard-menu-line quizDashboard-deconnexion"
        onClick={onClickDeconnexion}
      >
        <img src={icon_deconnexion} alt="" className="quizDashboard-icon" />{" "}
        <div>Déconnexion</div>
      </div>
    </section>
  );
}

export default Agent_menu;
