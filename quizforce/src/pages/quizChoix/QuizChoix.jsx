import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const themes = [
  {
    category: "AdminSys",
    id: "linux",
    nb_questions: "70",
    difficulte: "facile",
    label_difficulte: "Facile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Linux",
  },
  {
    category: "AdminSys",
    id: "linux_admin",
    nb_questions: "290",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Linux",
  },
  {
    category: "AdminSys",
    id: "scriptshell",
    nb_questions: "160",
    difficulte: "facile",
    label_difficulte: "Facile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Scriptshell",
  },
  {
    category: "AdminSys",
    id: "securite",
    nb_questions: "100",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Sécurité / SSH",
  },
  {
    category: "AdminSys",
    id: "postgresql",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "PostgreSQL",
  },
  {
    category: "AdminSys",
    id: "postgresql_dba",
    nb_questions: "195",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "PostgreSQL DBA",
  },
  {
    category: "AdminSys",
    id: "linux_scripts",
    nb_questions: "184",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Linux Scripts",
  },
  {
    category: "AdminSys",
    id: "sql",
    nb_questions: "250",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "SQL",
  },

  {
    category: "Logique",
    id: "logique",
    nb_questions: "100",
    difficulte: "facile",
    label_difficulte: "Facile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Logique",
  },
  {
    category: "Logique",
    id: "logique_avancee",
    nb_questions: "300",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Logique Avancée",
  },

  {
    category: "Développement",
    id: "java",
    nb_questions: "100",
    difficulte: "facile",
    label_difficulte: "Facile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Java 1",
  },
  {
    category: "Développement",
    id: "java_affichage",
    nb_questions: "100",
    difficulte: "facile",
    label_difficulte: "Facile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Java 2",
  },
  {
    category: "Développement",
    id: "java_avance",
    nb_questions: "276",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Java Avancé",
  },
  {
    category: "Réseaux",
    id: "reseaux",
    nb_questions: "150",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Réseaux",
  },
  {
    category: "Projet",
    id: "cycle_vie_application",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Cycle de vie d'une application",
  },
  {
    category: "Projet",
    id: "schema_directeur",
    nb_questions: "100",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Schéma Directeur",
  },
  {
    category: "Projet",
    id: "partenaire_projet",
    nb_questions: "75",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Partenaires d'un projet",
  },
  {
    category: "Projet",
    id: "urbanisation_systeme_info",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Urbanisation des SI",
  },
  {
    category: "Projet",
    id: "conduite_projet_info",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Conduite d'un projet informatique",
  },
  {
    category: "Conception",
    id: "concepts_objet",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Concepts Objet",
  },
  {
    category: "Conception",
    id: "merise",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Merise",
  },
  {
    category: "Conception",
    id: "uml",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "UML",
  },
  {
    category: "Conception",
    id: "test",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Programmation de test",
  },
  {
    category: "Conception",
    id: "evolution_language",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Évolution des langages de programmation",
  },
  {
    category: "Conception",
    id: "schema_conception",
    nb_questions: "201",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Schéma de Conception",
  },

  {
    category: "Culture",
    id: "architectures_info",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Architecture Informatique",
  },
  {
    category: "Culture",
    id: "systemes_exploitation",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Systèmes d'exploitation",
  },
  {
    category: "Culture",
    id: "langages_informatiques",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Principaux langages informatiques",
  },

  {
    category: "Outils",
    id: "aide_conception",
    nb_questions: "200",
    difficulte: "difficile",
    label_difficulte: "difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Outils d'aide à la conception",
  },
  {
    category: "Outils",
    id: "aide_realisation",
    nb_questions: "200",
    difficulte: "difficile",
    label_difficulte: "difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Outils d'aide à la réalisation",
  },
  {
    category: "Outils",
    id: "tests_config_deploiement",
    nb_questions: "200",
    difficulte: "difficile",
    label_difficulte: "difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Outils de tests, configuration et déploirement",
  },

  {
    category: "Juridique",
    id: "communications_electronique",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Cadre juridique des communications électroniques",
  },
  {
    category: "Juridique",
    id: "droit_informatique",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Droit informatique",
  },
  {
    category: "Juridique",
    id: "instances_normalisation",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Instances de normalisation",
  },
  {
    category: "Juridique",
    id: "marches_publics",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Marchés publics",
  },
  {
    category: "AdminSys",
    id: "test_fin",
    nb_questions: "3",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Test de Fin",
  },
];

function QuizChoix() {
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
    const selectedTheme = e.target.textContent;
    if (selectedTheme == "Tout") {
      setSelectedThemes(themes);
      setSelected(true);
    } else {
      const filterTheme = themes.filter((th) => th.category == selectedTheme);
      setSelectedThemes(filterTheme);
      setSelected(false);
    }
  }

   function handleDifficulteClick(e) {
    const selectedDiff = e.target.textContent;
    if (selectedDiff == "Tout") {
      setSelectedThemes(themes);
      setSelected(true);
    } else {
      const filterTheme = themes.filter((th) => th.label_difficulte == selectedDiff);
      setSelectedThemes(filterTheme);
      setSelected(false);
    }
  }



  return (
    <main className="quizchoix-page-main">
      <div className="quizchoix-container">
        <h1>Quiz de connaissances techniques</h1>
        <div id="quizchoix-footer">Made by Enkiduh</div>
        <section className="quizchoix-section-filter">
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleFilterClick}
          >
            Tout
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleFilterClick}
          >
            AdminSys
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleFilterClick}
          >
            Développement
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleFilterClick}
          >
            Conception
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleFilterClick}
          >
            Projet
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleFilterClick}
          >
            Logique
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleFilterClick}
          >
            Réseaux
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleFilterClick}
          >
            Juridique
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleFilterClick}
          >
            Outils
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleFilterClick}
          >
            Culture
          </div>
        </section>
        <section className="quizchoix-section-difficulte">
           <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleDifficulteClick}
          >
            Tout
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleDifficulteClick}
          >
            Facile
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleDifficulteClick}
          >
            Normal
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleDifficulteClick}
          >
            Difficile
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleDifficulteClick}
          >
            Expert
          </div>
        </section>
        <div className="quizchoix-quiz-wrapper">
          {selectedThemes.map((theme) => (
            <>
              <div>
                <button
                  key={theme.id}
                  type="button"
                  className={`quizchoix-quiz quizchoix-quiz-${theme.category}`}
                  onClick={() => selectionnerTheme(theme.id)}
                >
                  <div className="quizchoix-quiz-theme quizchoix-quiz-vignette">
                    {theme.label}
                  </div>
                  <div
                    className={`quizchoix-quiz-diff quizchoix-quiz-vignette-${theme.difficulte}`}
                  ></div>
                  <div className="quizchoix-quiz-nbquestions">
                    {theme.nb_questions} questions
                  </div>
                </button>
              </div>
              <div></div>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}

export default QuizChoix;
