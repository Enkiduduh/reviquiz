import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import img_logique from "/assets/thumbnails_choice/thumbnail_logique.png";
import img_adminsys from "/assets/thumbnails_choice/thumbnail_adminsys.png";
import img_developpement from "/assets/thumbnails_choice/thumbnail_developpement.png";
import img_reseaux from "/assets/thumbnails_choice/thumbnail_reseaux.png";
import img_projet from "/assets/thumbnails_choice/thumbnail_projet.png";
import img_conception from "/assets/thumbnails_choice/thumbnail_conception.png";
import img_ia from "/assets/thumbnails_choice/thumbnail_ia.png";
import img_culture from "/assets/thumbnails_choice/thumbnail_culture.png";
import img_securite from "/assets/thumbnails_choice/thumbnail_securite.png";
import img_data from "/assets/thumbnails_choice/thumbnail_data.png";
import img_juridique from "/assets/thumbnails_choice/thumbnail_juridique.png";
import img_outils from "/assets/thumbnails_choice/thumbnail_outils.png";

import { themes } from "../../data/themes/themes";

function QuizChoix({ utilisateur_info }) {
  const [selectedThemes, setSelectedThemes] = useState(themes);
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  const selectionnerTheme = (theme) => {
    console.log("Thème sélectionné :", theme);

    sessionStorage.setItem("themeQuiz", theme);

    navigate("/quiz");
  };

  const themesObj = [
    {
      id: 1,
      libelle: "AdminSys",
      data: utilisateur_info.theme_adm,
      img: img_adminsys,
    },
    {
      id: 2,
      libelle: "Développement",
      data: utilisateur_info.theme_dev,
      img: img_developpement,
    },
    {
      id: 3,
      libelle: "Conception",
      data: utilisateur_info.theme_con,
      img: img_conception,
    },
    {
      id: 4,
      libelle: "Projet",
      data: utilisateur_info.theme_pro,
      img: img_projet,
    },
    {
      id: 5,
      libelle: "Logique",
      data: utilisateur_info.theme_log,
      img: img_logique,
    },
    {
      id: 6,
      libelle: "Réseaux",
      data: utilisateur_info.theme_res,
      img: img_reseaux,
    },
    {
      id: 7,
      libelle: "Juridique",
      data: utilisateur_info.theme_jur,
      img: img_juridique,
    },
    {
      id: 8,
      libelle: "Sécurité",
      data: utilisateur_info.theme_sec,
      img: img_securite,
    },
    {
      id: 9,
      libelle: "Outils",
      data: utilisateur_info.theme_out,
      img: img_outils,
    },
    {
      id: 10,
      libelle: "Data",
      data: utilisateur_info.theme_data,
      img: img_data,
    },
    { id: 11, libelle: "IA", data: utilisateur_info.theme_ia, img: img_ia },
    {
      id: 12,
      libelle: "Culture",
      data: utilisateur_info.theme_cult,
      img: img_culture,
    },
  ];

  //  console.log(utilisateur_info);
  // console.log(Object.keys(utilisateur_info));

  function handleFilterClick(e) {
    const selectedTheme = e.target.previousElementSibling.textContent;
    const selectedTheme2 =
      e.target.previousElementSibling.previousElementSibling.textContent;
    // console.log(selectedTheme);
    const filterTheme = themes.filter(
      (th) => th.category == selectedTheme || th.category == selectedTheme2,
    );
    setSelectedThemes(filterTheme);
    setSelected(true);
  }

  function handleExitModal() {
    setSelected(false);
  }

  return (
    // <main className="quizchoix-page-main">
    <div className="quizchoix-container">
      <section className="quizchoix-section-themes">
        {themesObj.map((th) => (
          <div className="quizchoix-theme" key={th.id}>
            <img src={th.img} alt="" className="quizchoix-filter-thumbnail" />
            <span>{th.libelle}</span>
            <div
              className="quizchoix-theme-visuel-container"
              style={{ "--progress": `${th.data?.stats * 3.6}deg` }}
            >
              <div className="quizchoix-theme-visuel-stat">
                {th.data?.stats}%
              </div>
            </div>
            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
        ))}
      </section>
      <div
        className={`quizchoix-quiz-wrapper  ${selected ? "quizchoix-quiz-wrapper-flex" : "quizchoix-quiz-wrapper-none"}`}
      >
        <div className="quizchoix-quiz-exit-modal" onClick={handleExitModal}>
          Retour thèmes
        </div>

        {selectedThemes.map((theme) => (
          <>
            <button
              key={theme.id}
              type="button"
              className={`quizchoix-quiz quizchoix-quiz-${theme.category}`}
              onClick={() => selectionnerTheme(theme.id)}
            >
              <img src={theme.icon} alt="" className="quizchoix-quiz-img" />
              <div className="quizchoix-quiz-theme quizchoix-quiz-vignette">
                {theme.label}
              </div>
              <p className="quizchoix-quiz-description">{theme.synopsys}</p>
              <div className="quizchoix-quiz-highscore">
                Meilleur score : ??/{theme.nb_questions}
              </div>
              <div className="quizchoix-quiz-tentative">
                Derniere tentative : ??/??/??
              </div>
              <div
                className={`quizchoix-quiz-diff quizchoix-quiz-vignette-${theme.difficulte}`}
              ></div>
              <div className="quizchoix-quiz-nbquestions">
                {theme.nb_questions} questions
              </div>
            </button>
          </>
        ))}
      </div>
    </div>
    // </main>
  );
}

export default QuizChoix;
