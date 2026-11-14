import { useNavigate } from "react-router-dom";
import { titresThemes, dataQuizz } from "../../data/themes/themesData";

function QuizIntro() {
  const navigate = useNavigate();

  const themeQuiz = sessionStorage.getItem("themeQuiz");
  const formatQuiz = sessionStorage.getItem("formatQuiz");

  const titreTheme = titresThemes[themeQuiz] ?? themeQuiz;
  const nombreTotalQuestions = Number(formatQuiz);

  function commencerQuiz() {
    navigate("/quiz/jeu");
  }

  function arreterQuiz() {
    navigate("/quiz/selection");
  }

  if (!themeQuiz || !dataQuizz[themeQuiz]) {
    return (
      <div className="quizz-page-main">
        <div className="quizz-score-container">
          <h1 className="quizz-score-title">Aucun thème sélectionné</h1>

          <button type="button" className="quizz-stop" onClick={arreterQuiz}>
            Retour aux thèmes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quizz-page-main">
        <section
          className="quizz-score-container-starter"
        >
          <h1 className="quizz-score-title">{titreTheme}</h1>
          <div className="quizz-score-name">
            <p>Ce quiz contient {nombreTotalQuestions} questions.</p>

            <button id="quizz-start" type="button" onClick={commencerQuiz}>
              Commencer le quiz
            </button>

            <button id="quizz-retour" type="button" onClick={arreterQuiz}>
              Retour
            </button>
          </div>
        </section>
    </div>
  );
}

export default QuizIntro;
