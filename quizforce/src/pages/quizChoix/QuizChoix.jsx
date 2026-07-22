import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const themes = [
  { category: "AdminSys", id: "linux", label: "Linux" },
  { category: "AdminSys", id: "linux_admin", label: "Linux Admin" },
  { category: "Réseaux", id: "reseaux", label: "Réseaux" },
  { category: "AdminSys", id: "scriptshell", label: "Scriptshell" },
  { category: "AdminSys", id: "securite", label: "Sécurité / SSH" },
  { category: "AdminSys", id: "postgresql", label: "PostgreSQL" },
  { category: "AdminSys", id: "postgresql_dba", label: "PostgreSQL DBA" },
  { category: "AdminSys", id: "linux_scripts", label: "Linux Scripts" },
  { category: "AdminSys", id: "sql", label: "SQL" },

  { category: "Logique", id: "logique", label: "Logique" },
  { category: "Logique", id: "logique_avancee", label: "Logique Avancée" },

  { category: "Développement", id: "java", label: "Java 1" },
  { category: "Développement", id: "java_affichage", label: "Java 2" },
  { category: "Développement", id: "java_avance", label: "Java Avancé" },
  {
    category: "Projet",
    id: "cycle_vie_application",
    label: "Cycle de vie d'une application",
  },
  {
    category: "Projet",
    id: "schema_directeur",
    label: "Schéma Directeur",
  },
  {
    category: "Projet",
    id: "partenaire_projet",
    label: "Partenaires d'un projet",
  },
  {
    category: "Projet",
    id: "urbanisation_systeme_info",
    label: "Urbanisation des SI",
  },
  {
    category: "Projet",
    id: "conduite_projet_info",
    label: "Conduite d'un projet informatique",
  },
  {
    category: "Conception",
    id: "concepts_objet",
    label: "Concepts Objet",
  },
  { category: "Conception", id: "merise", label: "Merise" },
  { category: "Conception", id: "uml", label: "UML" },
  {
    category: "Conception",
    id: "test",
    label: "Programmation de test",
  },
  {
    category: "Conception",
    id: "evolution_language",
    label: "Évolution des langages de programmation",
  },
  {
    category: "Conception",
    id: "schema_conception",
    label: "Schéma de Conception",
  },

  {
    category: "Culture",
    id: "architectures_info",
    label: "Architecture Informatique",
  },
  {
    category: "Culture",
    id: "systemes_exploitation",
    label: "Systèmes d'exploitation",
  },
  {
    category: "Culture",
    id: "langages_informatiques",
    label: "Principaux langages informatiques",
  },

  {
    category: "Outils",
    id: "aide_conception",
    label: "Outils d'aide à la conception",
  },
  {
    category: "Outils",
    id: "aide_realisation",
    label: "Outils d'aide à la réalisation",
  },
  {
    category: "Outils",
    id: "tests_config_deploiement",
    label: "Outils de tests, configuration et déploirement",
  },

  {
    category: "Juridique",
    id: "communications_electronique",
    label: "Cadre juridique des communications électroniques",
  },
  {
    category: "Juridique",
    id: "droit_informatique",
    label: "Droit informatique",
  },
  {
    category: "Juridique",
    id: "instances_normalisation",
    label: "Instances de normalisation",
  },
  { category: "Juridique", id: "marches_publics", label: "Marchés publics" },
  { category: "AdminSys", id: "test_fin", label: "Test de Fin" },
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
        <div className="quizchoix-quiz-wrapper">
          {selectedThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`quizchoix-quiz quizchoix-quiz-${theme.category}`}
              onClick={() => selectionnerTheme(theme.id)}
            >
              <span>{theme.label}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default QuizChoix;
