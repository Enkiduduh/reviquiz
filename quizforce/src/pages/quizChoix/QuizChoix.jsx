import { useNavigate } from "react-router-dom";

const themes = [
  { category: "adminsys", id: "linux", label: "Linux" },
  { category: "adminsys", id: "linux_admin", label: "Linux Admin" },
  { category: "adminsys", id: "reseaux", label: "Réseaux" },
  { category: "adminsys", id: "scriptshell", label: "Scriptshell" },
  { category: "adminsys", id: "securite", label: "Sécurité / SSH" },
  { category: "adminsys", id: "postgresql", label: "PostgreSQL" },
  { category: "adminsys", id: "postgresql_dba", label: "PostgreSQL DBA" },
  { category: "adminsys", id: "linux_scripts", label: "Linux Scripts" },
  { category: "adminsys", id: "sql", label: "SQL" },

  { category: "logique", id: "logique", label: "Logique" },
  { category: "logique", id: "logique_avancee", label: "Logique Avancée" },

  { category: "developpement", id: "java", label: "Java 1" },
  { category: "developpement", id: "java_affichage", label: "Java 2" },
  { category: "developpement", id: "java_avance", label: "Java Avancé" },
  {
    category: "projet_info",
    id: "cycle_vie_application",
    label: "Cycle de vie d'une application",
  },
  {
    category: "projet_info",
    id: "schema_directeur",
    label: "Schéma Directeur",
  },
  {
    category: "projet_info",
    id: "partenaire_projet",
    label: "Partenaires d'un projet",
  },
  {
    category: "projet_info",
    id: "urbanisation_systeme_info",
    label: "Urbanisation des SI",
  },
  {
    category: "projet_info",
    id: "conduite_projet_info",
    label: "Conduite d'un projet informatique",
  },
  {
    category: "conception_info",
    id: "concepts_objet",
    label: "Concepts Objet",
  },
  { category: "conception_info", id: "merise", label: "Merise" },
  { category: "conception_info", id: "uml", label: "UML" },
  { category: "conception_info", id: "test", label: "Programmation de test" },
  {
    category: "conception_info",
    id: "evolution_language",
    label: "Évolution des langages de programmation",
  },
  {
    category: "conception_info",
    id: "schema_conception",
    label: "Schéma de Conception",
  },
];

function QuizChoix() {
  const navigate = useNavigate();

  const selectionnerTheme = (theme) => {
    console.log("Thème sélectionné :", theme);

    sessionStorage.setItem("themeQuiz", theme);

    navigate("/quiz");
  };

  return (
    <main className="quizchoix-page-main">
      <div className="quizchoix-container">
        <h1>Quiz de connaissances</h1>

        <div className="quizchoix-quiz-wrapper">
          {themes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              className={`quizchoix-quiz quizchoix-quiz-${theme.id}`}
              onClick={() => selectionnerTheme(theme.id)}
            >
              <span>{theme.label}</span>
            </button>
          ))}

          <button
            type="button"
            className="quizchoix-quiz quizchoix-quiz-bientot"
            disabled
          >
            <span>Bientôt disponible</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default QuizChoix;
