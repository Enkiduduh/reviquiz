import { useNavigate } from "react-router-dom";

const themes = [
  { id: "rsp", label: "RSP" },
  { id: "linux", label: "Linux" },
  { id: "linux_admin", label: "Linux Admin" },
  { id: "reseaux", label: "Réseaux" },
  { id: "scriptshell", label: "Scriptshell" },
  { id: "logique", label: "Logique" },
  { id: "java", label: "Java 1" },
  { id: "java_affichage", label: "Java 2" },
  { id: "java_avance", label: "Java Avancé" },
  { id: "securite", label: "Sécurité / SSH" },
  { id: "postgresql", label: "PostgreSQL" },
  { id: "postgresql_dba", label: "PostgreSQL DBA" },
  {
    id: "cycle_vie_application",
    label: "Cycle de vie d'une application",
  },
  { id: "schema_directeur", label: "Schéma Directeur" },
  { id: "partenaire_projet", label: "Partenaires d'un projet" },
  {
    id: "urbanisation_systeme_info",
    label: "Urbanisation des SI",
  },
  {
    id: "conduite_projet_info",
    label: "Conduite d'un projet informatique",
  },
  { id: "concepts_objet", label: "Concepts Objet" },
  { id: "merise", label: "Merise" },
  { id: "uml", label: "UML" },
  {
    id: "evolution_language",
    label: "Évolution des langages de programmation",
  },
  { id: "test", label: "Programmation de test" },
  { id: "linux_scripts", label: "Linux Scripts" },
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
