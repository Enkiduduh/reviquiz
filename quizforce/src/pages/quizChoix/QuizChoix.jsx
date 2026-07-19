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
    category: "Conception/Réalisation",
    id: "concepts_objet",
    label: "Concepts Objet",
  },
  { category: "Conception/Réalisation", id: "merise", label: "Merise" },
  { category: "Conception/Réalisation", id: "uml", label: "UML" },
  {
    category: "Conception/Réalisation",
    id: "test",
    label: "Programmation de test",
  },
  {
    category: "Conception/Réalisation",
    id: "evolution_language",
    label: "Évolution des langages de programmation",
  },
  {
    category: "Conception/Réalisation",
    id: "schema_conception",
    label: "Schéma de Conception",
  },
];

function QuizChoix() {
  const [selectedThemes, setSelectedThemes] = useState(themes);
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
    } else {
      const filterTheme = themes.filter((th) => th.category == selectedTheme);
      setSelectedThemes(filterTheme);
    }
  }

  return (
    <main className="quizchoix-page-main">
      <div className="quizchoix-container">
        <h1>Quiz de connaissances techniques</h1>
        <section className="quizchoix-section-filter">
          <div className="quizchoix-filter" onClick={handleFilterClick}>
            Tout
          </div>
          <div className="quizchoix-filter" onClick={handleFilterClick}>
            AdminSys
          </div>
          <div className="quizchoix-filter" onClick={handleFilterClick}>
            Développement
          </div>
          <div className="quizchoix-filter" onClick={handleFilterClick}>
            Conception/Réalisation
          </div>
          <div className="quizchoix-filter" onClick={handleFilterClick}>
            Projet
          </div>
          <div className="quizchoix-filter" onClick={handleFilterClick}>
            Logique
          </div>
          <div className="quizchoix-filter" onClick={handleFilterClick}>
            Réseaux
          </div>
        </section>
        <div className="quizchoix-quiz-wrapper">
          {selectedThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`quizchoix-quiz quizchoix-quiz-${theme.id}`}
              onClick={() => selectionnerTheme(theme.id)}
            >
              <span>{theme.label}</span>
            </button>
          ))}
        </div>
        <span id="quizchoix-footer">Made by Enkiduh</span>
      </div>
    </main>
  );
}

export default QuizChoix;
