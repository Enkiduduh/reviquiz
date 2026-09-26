import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { utilisateurs } from "../../data/utilisateur_dbb/utilisateurs";

// Import Components
import Utilisateurs_tab from "../../components/Utilisateurs_tab/Utilisateurs_tab";
import Utilisateur_stats from "../../components/Utilisateur_stats/Utilisateur_stats";
import Utilisateur_details from "../../components/Utilisateur_details/Utilisateur_details";
import Utilisateur_taches from "../../components/Utilisateur_taches/Utilisateur_taches";

import QuizChoix from "../quizChoix/QuizChoix";

import icon_utilisateur from "/assets/icons/utilisateur.png";
import icon_equipe from "/assets/icons/equipe.png";
import icon_graphique from "/assets/icons/graphique.png";
import icon_statistiques from "/assets/icons/statistiques.png";
import icon_progression from "/assets/icons/progression.png";
import icon_taches from "/assets/icons/taches.png";
import icon_quiz from "/assets/icons/quiz.png";
import icon_deconnexion from "/assets/icons/deconnexion.png";

function QuizMain() {
  const [displayUtilisateur, setDisplayUtilisateur] = useState(true);
  const [displayEquipe, setDisplayEquipe] = useState(false);
  const [displayTaches, setDisplayTaches] = useState(false);
  const [displayProgression, setDisplayProgression] = useState(false);
  const [displayStatistiques, setDisplayStatistiques] = useState(false);
  const [displayThemes, setDisplayThemes] = useState(false);

  const navigate = useNavigate();

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  // console.log(userInfo);

  // Filtre la liste complete des utilisateurs et affiche l'equipe du responsable
  let utilisateursListe = [];
  if (userInfo.role_id === 2) {
    const utilisateursListe1 = utilisateurs.filter(
      (utilisateur) => utilisateur.equipe_id === userInfo.equipe_id,
    );
    utilisateursListe = utilisateursListe1.filter(
      (utilisateur) => utilisateur.role_id != 2,
    );
  }

  function mettreTousLesAffichagesAFaux() {
    setDisplayEquipe(false);
    setDisplayUtilisateur(false);
    setDisplayProgression(false);
    setDisplayStatistiques(false);
    setDisplayTaches(false);
    setDisplayThemes(false);
  }

  function afficherElement(setDisplay) {
    mettreTousLesAffichagesAFaux();
    setDisplay(true);
  }

  function deconnexion() {
    navigate("/login");
  }

  return (
    <div className="quizDashboard-page">
      <section className="quizDashboard-section-left">
        <h3>Menu Dashboard</h3>

        <div
          className="quizDashboard-menu-line"
          onClick={() => afficherElement(setDisplayUtilisateur)}
        >
          <img src={icon_utilisateur} alt="" className="quizDashboard-icon" />{" "}
          <div>Utilisateur</div>
        </div>
        <div
          className="quizDashboard-menu-line"
          onClick={() => afficherElement(setDisplayEquipe)}
        >
          <img src={icon_equipe} alt="" className="quizDashboard-icon" />{" "}
          <div>Équipe</div>
        </div>
        <div
          className="quizDashboard-menu-line"
          onClick={() => afficherElement(setDisplayTaches)}
        >
          <img src={icon_taches} alt="" className="quizDashboard-icon" />{" "}
          <div>Tâches</div>
        </div>
        <div className="quizDashboard-menu-line">
          <img src={icon_progression} alt="" className="quizDashboard-icon" />{" "}
          <div>Progression</div>
        </div>
        <div
          className="quizDashboard-menu-line"
          onClick={() => afficherElement(setDisplayStatistiques)}
        >
          <img src={icon_statistiques} alt="" className="quizDashboard-icon" />{" "}
          <div>Statistiques</div>
        </div>

        <div
          className="quizDashboard-menu-line"
          // onClick={HandleGoToChoix}
          onClick={() => afficherElement(setDisplayThemes)}
        >
          <img src={icon_quiz} alt="" className="quizDashboard-icon" />{" "}
          <div>Accès aux thématiques</div>
        </div>

        <div
          className="quizDashboard-menu-line quizDashboard-deconnexion"
          onClick={deconnexion}
        >
          <img src={icon_deconnexion} alt="" className="quizDashboard-icon" />{" "}
          <div>Déconnexion</div>
        </div>
      </section>

      <section className="quizDashboard-section-right">
        {displayUtilisateur && (
          <Utilisateur_details utilisateurs_info={userInfo} />
        )}

        {displayEquipe && (
          <Utilisateurs_tab utilisateurs_liste={utilisateursListe} />
        )}

        {displayStatistiques && (
          <Utilisateur_stats utilisateurs_info={userInfo} />
        )}

        {displayTaches && <Utilisateur_taches utilisateurs_info={userInfo} />}

        {displayThemes && (
          <QuizChoix
            utilisateur_info={userInfo}
            // adm_stat={userInfo.theme_adm.stats}
            // dev_stat={userInfo.theme_dev.stats}
            // con_stat={userInfo.theme_con.stats}
            // pro_stat={userInfo.theme_pro.stats}
            // log_stat={userInfo.theme_log.stats}
            // res_stat={userInfo.theme_res.stats}
            // jur_stat={userInfo.theme_jur.stats}
            // sec_stat={userInfo.theme_sec.stats}
            // out_stat={userInfo.theme_out.stats}
            // data_stat={userInfo.theme_data.stats}
            // ia_stat={userInfo.theme_ia.stats}
            // cult_stat={userInfo.theme_cult.stats}
          />
        )}
      </section>
    </div>
  );
}

export default QuizMain;
