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

function QuizChoix({ utilisateur_info, adm_stat, dev_stat, con_stat }) {
  const [selectedThemes, setSelectedThemes] = useState(themes);
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  const selectionnerTheme = (theme) => {
    console.log("Thème sélectionné :", theme);

    sessionStorage.setItem("themeQuiz", theme);

    navigate("/quiz");
  };

  useEffect(() => {});

  function handleFilterClick(e) {
    const selectedTheme = e.target.previousElementSibling.textContent;
    console.log(selectedTheme);
    const filterTheme = themes.filter((th) => th.category == selectedTheme);
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
        <div
          className="quizchoix-theme"
        >
          <img
            src={img_adminsys}
            alt=""
            className="quizchoix-filter-thumbnail"
          />
          <span>AdminSys</span>
          <div className="quizchoix-theme-visuel-container"  style={{ "--progress": `${adm_stat * 3.6}deg` }}>
            <div className="quizchoix-theme-visuel-stat">{utilisateur_info.theme_adm.stats}%</div>
          </div>
          <div
            className="quizchoix-filter-selection"
            onClick={handleFilterClick}
          >
            Sélectionner
          </div>
        </div>
        <div
          className="quizchoix-theme"
        >
          <img
            src={img_developpement}
            alt=""
            className="quizchoix-filter-thumbnail"
          />
          <span>Développement</span>
            <div className="quizchoix-theme-visuel-container"  style={{ "--progress": `${dev_stat * 3.6}deg` }}>
            <div className="quizchoix-theme-visuel-stat">{utilisateur_info.theme_dev.stats}%</div>
            </div>
          <div
            className="quizchoix-filter-selection"
            onClick={handleFilterClick}
          >
            Sélectionner
          </div>
        </div>
        <div
          className="quizchoix-theme"
        >
          <img
            src={img_conception}
            alt=""
            className="quizchoix-filter-thumbnail"
          />
          <span>Conception</span>
           <div className="quizchoix-theme-visuel-container"  style={{ "--progress": `${con_stat * 3.6}deg` }}>
            <div className="quizchoix-theme-visuel-stat">{utilisateur_info.theme_con.stats}%</div>
            </div>
          <div
            className="quizchoix-filter-selection"
            onClick={handleFilterClick}
          >
            Sélectionner
          </div>
        </div>
        <div
          className="quizchoix-theme"
        >
          <img src={img_projet} alt="" className="quizchoix-filter-thumbnail" />
          <span>Projet</span>
          <div
            className="quizchoix-filter-selection"
            onClick={handleFilterClick}
          >
            Sélectionner
          </div>
        </div>
        <div
          className="quizchoix-theme"
        >
          <img
            src={img_logique}
            alt=""
            className="quizchoix-filter-thumbnail"
          />
          <span>Logique</span>
          <div
            className="quizchoix-filter-selection"
            onClick={handleFilterClick}
          >
            Sélectionner
          </div>
        </div>
        <div
          className="quizchoix-theme"
        >
          <img
            src={img_reseaux}
            alt=""
            className="quizchoix-filter-thumbnail"
          />
          <span>Réseaux</span>
          <div
            className="quizchoix-filter-selection"
            onClick={handleFilterClick}
          >
            Sélectionner
          </div>
        </div>
        <div
          className="quizchoix-theme"
        >
          <img
            src={img_juridique}
            alt=""
            className="quizchoix-filter-thumbnail"
          />
          <span>Juridique</span>
          <div
            className="quizchoix-filter-selection"
            onClick={handleFilterClick}
          >
            Sélectionner
          </div>
        </div>
        <div
          className="quizchoix-theme"
        >
          <img
            src={img_securite}
            alt=""
            className="quizchoix-filter-thumbnail"
          />
          <span>Sécurité</span>
          <div
            className="quizchoix-filter-selection"
            onClick={handleFilterClick}
          >
            Sélectionner
          </div>
        </div>
        <div
          className="quizchoix-theme"
        >
          <img src={img_outils} alt="" className="quizchoix-filter-thumbnail" />
          <span>Outils</span>
          <div
            className="quizchoix-filter-selection"
            onClick={handleFilterClick}
          >
            Sélectionner
          </div>
        </div>
        <div
          className="quizchoix-theme"
        >
          <img src={img_data} alt="" className="quizchoix-filter-thumbnail" />
          <span>Data</span>
          <div
            className="quizchoix-filter-selection"
            onClick={handleFilterClick}
          >
            Sélectionner
          </div>
        </div>
        <div
          className="quizchoix-theme"
        >
          <img src={img_ia} alt="" className="quizchoix-filter-thumbnail" />
          <span>IA</span>
          <div
            className="quizchoix-filter-selection"
            onClick={handleFilterClick}
          >
            Sélectionner
          </div>
        </div>
        <div
          className="quizchoix-theme"
        >
          <img
            src={img_culture}
            alt=""
            className="quizchoix-filter-thumbnail"
          />
          <span>Culture</span>
          <div
            className="quizchoix-filter-selection"
            onClick={handleFilterClick}
          >
            Sélectionner
          </div>
        </div>
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
