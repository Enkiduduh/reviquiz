import { useNavigate } from "react-router-dom";

function QuizMain() {
  const navigate = useNavigate();

  function HandleGoToChoix() {
    navigate("/choix");
  }

  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  console.log(userInfo);
  const statsThemes = [
    {
      stats: userInfo.theme_adm,
      theme: "AdminSys",
      icon: "/assets/thumbnails_choice/thumbnail_adminsys.png",
    },
    {
      stats: userInfo.theme_dev,
      theme: "Développement",
      icon: "/assets/thumbnails_choice/thumbnail_developpement.png",
    },
    {
      stats: userInfo.theme_con,
      theme: "Conception",
      icon: "/assets/thumbnails_choice/thumbnail_conception.png",
    },
    {
      stats: userInfo.theme_pro,
      theme: "Projet Informatique",
      icon: "/assets/thumbnails_choice/thumbnail_projet.png",
    },
    {
      stats: userInfo.theme_log,
      theme: "Logique",
      icon: "/assets/thumbnails_choice/thumbnail_logique.png",
    },
    {
      stats: userInfo.theme_res,
      theme: "Réseaux",
      icon: "/assets/thumbnails_choice/thumbnail_reseaux.png",
    },
    {
      stats: userInfo.theme_jur,
      theme: "Juridique",
      icon: "/assets/thumbnails_choice/thumbnail_juridique.png",
    },
    {
      stats: userInfo.theme_sec,
      theme: "Sécurité",
      icon: "/assets/thumbnails_choice/thumbnail_securite.png",
    },
    {
      stats: userInfo.theme_out,
      theme: "Outils",
      icon: "/assets/thumbnails_choice/thumbnail_outils.png",
    },
    {
      stats: userInfo.theme_dat,
      theme: "Data",
      icon: "/assets/thumbnails_choice/thumbnail_data.png",
    },
    {
      stats: userInfo.theme_ia,
      theme: "IA",
      icon: "/assets/thumbnails_choice/thumbnail_ia.png",
    },
    {
      stats: userInfo.theme_cult,
      theme: "Culture",
      icon: "/assets/thumbnails_choice/thumbnail_culture.png",
    },
  ];

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
        <div>Nombre de tentatives totale: {userInfo.nb_tentatives_total}</div>
        <div>
          {statsThemes.map((theme) => (
            <div className="quizDashboard-section-stats-flex-container">
              <img
                src={theme.icon}
                alt=""
                className="quizDashboard-section-stats-flex-icon"
              />
              <div>
                <div className="quizDashboard-section-stats-flex-line">
                  <div className="quizDashboard-section-stats-flex-line-theme">
                    {theme.theme}:
                  </div>
                  <div className="quizDashboard-section-stats-flex-line-stats">
                    {theme.stats.stats}%
                  </div>
                </div>
                <div className="quizDashboard-section-stats-flex-line">
                  <div className="quizDashboard-section-stats-flex-line-theme">
                    Nb quiz: {theme.stats.nb_quiz_theme}
                  </div>
                  <div className="quizDashboard-section-stats-flex-line-theme">
                    Tentatives: {theme.stats.nb_tentatives}
                  </div>
                  <div className="quizDashboard-section-stats-flex-line-theme">
                    Terminés: {theme.stats.nb_termines}
                  </div>
                </div>
                <div className="quizDashboard-section-stats-flex-line">
                  <div className="quizDashboard-section-stats-flex-line-theme">
                    Total bonnes réponses : {theme.stats.nb_bonnes_reponses}
                  </div>
                  <div className="quizDashboard-section-stats-flex-line-theme">
                    Temps passé: {theme.stats.temps_passe} min
                  </div>
                </div>
                <div className="quizDashboard-section-stats-flex-line">
                  <div className="quizDashboard-section-stats-flex-line-theme">
                   {"details ->"}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="quizDashboard-section">
        <h3>Zone Actions</h3>
        <button onClick={HandleGoToChoix}>Acces aux thématiques</button>
      </section>
    </div>
  );
}

export default QuizMain;
