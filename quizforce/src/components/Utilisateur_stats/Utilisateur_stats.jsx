import React from "react";

function Utilisateur_stats({ utilisateurs_info }) {
  const statsThemes = [
    {
      stats: utilisateurs_info.theme_adm,
      theme: "AdminSys",
      icon: "/assets/thumbnails_choice/thumbnail_adminsys.png",
    },
    {
      stats: utilisateurs_info.theme_dev,
      theme: "Développement",
      icon: "/assets/thumbnails_choice/thumbnail_developpement.png",
    },
    {
      stats: utilisateurs_info.theme_con,
      theme: "Conception",
      icon: "/assets/thumbnails_choice/thumbnail_conception.png",
    },
    {
      stats: utilisateurs_info.theme_pro,
      theme: "Projet Informatique",
      icon: "/assets/thumbnails_choice/thumbnail_projet.png",
    },
    {
      stats: utilisateurs_info.theme_log,
      theme: "Logique",
      icon: "/assets/thumbnails_choice/thumbnail_logique.png",
    },
    {
      stats: utilisateurs_info.theme_res,
      theme: "Réseaux",
      icon: "/assets/thumbnails_choice/thumbnail_reseaux.png",
    },
    {
      stats: utilisateurs_info.theme_jur,
      theme: "Juridique",
      icon: "/assets/thumbnails_choice/thumbnail_juridique.png",
    },
    {
      stats: utilisateurs_info.theme_sec,
      theme: "Sécurité",
      icon: "/assets/thumbnails_choice/thumbnail_securite.png",
    },
    {
      stats: utilisateurs_info.theme_out,
      theme: "Outils",
      icon: "/assets/thumbnails_choice/thumbnail_outils.png",
    },
    {
      stats: utilisateurs_info.theme_data,
      theme: "Data",
      icon: "/assets/thumbnails_choice/thumbnail_data.png",
    },
    {
      stats: utilisateurs_info.theme_ia,
      theme: "IA",
      icon: "/assets/thumbnails_choice/thumbnail_ia.png",
    },
    {
      stats: utilisateurs_info.theme_cult,
      theme: "Culture",
      icon: "/assets/thumbnails_choice/thumbnail_culture.png",
    },
  ];

  return (
    <>
      <h3>Zone Statistiques</h3>
      <div className="utilisateur_stats-page-container">
        <section className="utilisateur_stats-recapitulatif-details">
          <div className="utilisateur_stats_details-container">
            <div className="utilisateur_stats_details-libelle">
              Temps total (min) :{" "}
            </div>
            <div className="utilisateur_stats_details-value">
              {utilisateurs_info.temps_total_passe}{" "}
            </div>
          </div>

          <div className="utilisateur_stats_details-container">
            <div className="utilisateur_stats_details-libelle">
              Total de tentatives :{" "}
            </div>
            <div className="utilisateur_stats_details-value">
              {utilisateurs_info.nb_tentatives_total}
            </div>
          </div>

          <div className="utilisateur_stats_details-container">
            <div className="utilisateur_stats_details-libelle">
              Bonnes reponses :
            </div>
            <div className="utilisateur_stats_details-value">
              {" "}
              {utilisateurs_info.total_bonnes_reponses}
            </div>
          </div>

          <div className="utilisateur_stats_details-container">
            <div className="utilisateur_stats_details-libelle">
              {" "}
              Quiz terminés :{" "}
            </div>
            <div className="utilisateur_stats_details-value">
              {" "}
              {utilisateurs_info.total_terminés}{" "}
            </div>
          </div>
        </section>
        <section>
          <table className="utilisateurs_stats-table">
            <thead>
              <tr>
                <th>Thème</th>
                <th>Nombre de quiz</th>
                <th>Avancement</th>
                <th>Nombre de quiz terminés</th>
                <th>Nombre de bonnes réponses</th>
                <th>Temps passé (min)</th>
              </tr>
            </thead>
            <tbody>
              {statsThemes.map((theme) => (
                <tr>
                  <td>
                    <img
                      src={theme.icon}
                      alt=""
                      className="utilisateur_stats-section-stats-flex-icon"
                    />
                  </td>
                  <td>{theme.stats.nb_quiz_theme}</td>
                  <td className="utilisateurs_stats-table-avancement">
                    <div
                      className="utilisateur_stats-theme-visuel-container"
                      style={{ "--progress": `${theme.stats.stats * 3.6}deg` }}
                    >
                      <div className="utilisateur_stats-theme-visuel-stat">
                        {theme.stats.stats}%
                      </div>
                    </div>
                  </td>
                  <td>{theme.stats.nb_termines}</td>
                  <td>{theme.stats.nb_bonnes_reponses}</td>
                  <td>{theme.stats.temps_passe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default Utilisateur_stats;
