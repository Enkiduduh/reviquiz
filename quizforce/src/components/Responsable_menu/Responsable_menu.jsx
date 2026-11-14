import icon_utilisateur from "/assets/icons/utilisateur.png";
import icon_equipe from "/assets/icons/equipe.png";
import icon_statistiques from "/assets/icons/statistiques_equipe.png";
import icon_campagne from "/assets/icons/campagne.png";
import icon_deconnexion from "/assets/icons/deconnexion.png";

function Responsable_menu({
  onClickResponsable,
  onClickStatistiques,
  onClickGestion,
  onClickCampagne,
  onClickDeconnexion,
}) {
  return (
    <section className="quizDashboard-section-left">
      <h3>Menu Dashboard</h3>

      <div className="quizDashboard-menu-line" onClick={onClickResponsable}>
        <img src={icon_utilisateur} alt="" className="quizDashboard-icon" />{" "}
        <div>Responsable</div>
      </div>
      <div className="quizDashboard-menu-line" onClick={onClickGestion}>
        <img src={icon_equipe} alt="" className="quizDashboard-icon" />{" "}
        <div>Gestion de l'équipe</div>
      </div>
      <div className="quizDashboard-menu-line" onClick={onClickCampagne}>
        <img src={icon_campagne} alt="" className="quizDashboard-icon" />{" "}
        <div>Suivi des campagnes</div>
      </div>

      <div className="quizDashboard-menu-line" onClick={onClickStatistiques}>
        <img src={icon_statistiques} alt="" className="quizDashboard-icon" />{" "}
        <div>Statistiques de l'équipe</div>
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

export default Responsable_menu;
