import icon_utilisateur from "/assets/icons/utilisateur.png";
import icon_gestion_thematique from "/assets/icons/ajout_thematique.png";
import icon_gestion_utilisateur from "/assets/icons/gestion_utilisateurs.png";
import icon_gestion_quiz from "/assets/icons/ajout_quiz.png";
import icon_deconnexion from "/assets/icons/deconnexion.png";

function Administrateur_menu({
  onClickAdministrateur,
  onClickGestionUtilisateurs,
  onClickThematiques,
  onClickQuiz,
  onClickDeconnexion,
  onClickQuestions
}) {
  return (
    <section className="quizDashboard-section-left">
      <h3>Menu Dashboard</h3>

      <div className="quizDashboard-menu-line" onClick={onClickAdministrateur}>
        <img src={icon_utilisateur} alt="" className="quizDashboard-icon" />{" "}
        <div>Administrateur</div>
      </div>
      <div className="quizDashboard-menu-line" onClick={onClickGestionUtilisateurs}>
        <img
          src={icon_gestion_utilisateur}
          alt=""
          className="quizDashboard-icon"
        />{" "}
        <div>Gestion des utilisateurs</div>
      </div>
      <div className="quizDashboard-menu-line" onClick={onClickThematiques}>
        <img
          src={icon_gestion_thematique}
          alt=""
          className="quizDashboard-icon"
        />{" "}
        <div>Gestion des thématiques</div>
      </div>
      <div className="quizDashboard-menu-line" onClick={onClickQuiz}>
        <img src={icon_gestion_quiz} alt="" className="quizDashboard-icon" />{" "}
        <div>Gestion des quiz</div>
      </div>

       <div className="quizDashboard-menu-line" onClick={onClickQuestions}>
        <img src={icon_gestion_quiz} alt="" className="quizDashboard-icon" />{" "}
        <div>Gestion des questions</div>
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

export default Administrateur_menu;
