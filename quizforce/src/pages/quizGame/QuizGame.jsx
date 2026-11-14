import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { titresThemes, dataQuizz } from "../../data/themes/themesData";


function melangerReponses(reponses) {
  const reponsesMelangees = [...reponses];

  for (let i = reponsesMelangees.length - 1; i > 0; i--) {
    const indexAleatoire = Math.floor(Math.random() * (i + 1));

    [reponsesMelangees[i], reponsesMelangees[indexAleatoire]] = [
      reponsesMelangees[indexAleatoire],
      reponsesMelangees[i],
    ];
  }

  return reponsesMelangees;
}

function QuizGame() {
  const navigate = useNavigate();

  const themeQuiz = sessionStorage.getItem("themeQuiz");
 const formatQuiz = sessionStorage.getItem("formatQuiz");



  const questionsInitiales = useMemo(() => {
    if (!themeQuiz || !dataQuizz[themeQuiz]) {
      return [];
    }

    return [...dataQuizz[themeQuiz]];
  }, [themeQuiz]);

  const [questions, setQuestions] = useState(questionsInitiales);

  const [questionActuelle, setQuestionActuelle] = useState(null);
  const [reponses, setReponses] = useState([]);

  const [quizCommence, setQuizCommence] = useState(true);
  const [quizTermine, setQuizTermine] = useState(false);

  const [compteur, setCompteur] = useState(0);
  const [roundQuestion, setRoundQuestion] = useState(1);

  const [choixEffectue, setChoixEffectue] = useState(false);
  const [reponseChoisie, setReponseChoisie] = useState(null);
  const [resultat, setResultat] = useState("");

  const titreTheme = titresThemes[themeQuiz] ?? themeQuiz;
  const nombreTotalQuestions = Number(formatQuiz);

  function afficherQuestion(listeQuestions) {
    if (listeQuestions.length === 0) {
      setQuestionActuelle(null);
      setReponses([]);
      setQuizTermine(true);
      return;
    }

    const indexAleatoire = Math.floor(Math.random() * nombreTotalQuestions);

    const questionSelectionnee = listeQuestions[indexAleatoire];

    const questionsRestantes = listeQuestions.filter(
      (_, index) => index !== indexAleatoire,
    );

    const valeurs = melangerReponses([
      questionSelectionnee.reponse_f1,
      questionSelectionnee.reponse_f2,
      questionSelectionnee.reponse_v,
    ]);

    setQuestionActuelle(questionSelectionnee);
    setReponses(valeurs);
    setQuestions(questionsRestantes);

    setChoixEffectue(false);
    setReponseChoisie(null);
    setResultat("");
  }

  // function commencerQuiz() {
  //   setQuizCommence(true);
  //   setQuizTermine(false);

  //   setCompteur(0);
  //   setRoundQuestion(1);

  // }

  useEffect(() => {
    setQuestions(questionsInitiales);
    afficherQuestion(questionsInitiales);
  }, [])

  function verifierReponse(reponse) {
    if (choixEffectue || !questionActuelle) {
      return;
    }

    setChoixEffectue(true);
    setReponseChoisie(reponse);

    if (reponse === questionActuelle.reponse_v) {
      setResultat("Bonne réponse !");
      setCompteur((ancienCompteur) => ancienCompteur + 1);
    } else {
      setResultat("Mauvaise réponse !");
    }
  }

  function questionSuivante() {
    if (questions.length === 0) {
      setQuizTermine(true);
      return;
    }

    setRoundQuestion((ancienRound) => ancienRound + 1);
    afficherQuestion(questions);
  }

  function recommencerQuiz() {
    setCompteur(0);
    setRoundQuestion(1);
    setQuizTermine(false);

    setQuestions(questionsInitiales);
    afficherQuestion(questionsInitiales);
  }

  function arreterQuiz() {
    navigate("/quiz/selection");
  }

  function obtenirClasseReponse(reponse) {
    let classes = "quizz-reponse";

    if (!choixEffectue || !questionActuelle) {
      return classes;
    }

    if (reponse === questionActuelle.reponse_v) {
      classes += " quizz-reponse-correcte";
    } else if (reponse === reponseChoisie) {
      classes += " quizz-reponse-incorrecte";
    }

    return classes;
  }

  return (
    <div className="quizz-page-main">
      {quizCommence && !quizTermine && questionActuelle && (
        <>
          <section
            className={`quizz-score-container ${quizCommence ? "started" : ""}`}
          >
            <h1 className="quizz-theme">Quiz : {titreTheme}</h1>

            <p className="quizz-points">
              Point(s) : {compteur}/{roundQuestion - 1}
            </p>

            <p className="quizz-points">
              Question n°{roundQuestion} / {nombreTotalQuestions}
            </p>
            <button className="quizz-round" type="button" onClick={arreterQuiz}>
              Quitter
            </button>
          </section>

          <section className="quizz-container ">
            <div className="quizz-question-container">
              {themeQuiz === "schema_conception" ? (
                <>
                  <pre className="quizz-question-pre">
                    {questionActuelle.question}
                  </pre>
                </>
              ) : (
                <>
                  <p
                    className={`quizz-question ${
                      themeQuiz === "linux_scripts"
                        ? "quizz-question-linux-scripts"
                        : ""
                    }`}
                  >
                    {questionActuelle.question}
                  </p>
                </>
              )}
            </div>

            {/* <div className="quizz-separator" /> */}

            <div className="quizz-reponses">
              {reponses.map((reponse, index) => (
                <button
                  key={`${reponse}-${index}`}
                  type="button"
                  className={obtenirClasseReponse(reponse)}
                  onClick={() => verifierReponse(reponse)}
                  disabled={choixEffectue}
                >
                  {reponse}
                </button>
              ))}
            </div>

            {choixEffectue && (
              <div className="quizz-resultat">
                {resultat === "Bonne réponse !" ? (
                  <>
                    <div className="quizz-reponse-result-bon result-bon">
                      {resultat}
                    </div>
                    <div className="quizz-reponse-result">
                      <div>La bonne réponse est bien :</div>
                      <div className="quizz-reponse-result-reponse">
                        {questionActuelle.reponse_v}
                      </div>
                      {questionActuelle.explication &&
                      questionActuelle.explication ? (
                        <div>Explication: {questionActuelle.explication}</div>
                      ) : null}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="result-mauvais">{resultat}</div>

                    <div className="quizz-reponse-result">
                      <div>La bonne réponse est :</div>
                      <div className="quizz-reponse-result-reponse">
                        {questionActuelle.reponse_v}
                      </div>
                      {questionActuelle.explication &&
                      questionActuelle.explication ? (
                        <div>Explication: {questionActuelle.explication}</div>
                      ) : null}
                    </div>
                  </>
                )}

                <div
                  className={`quizz-boutons-action ${choixEffectue ? "quizz-boutons-flex" : "quizz-boutons-none"}`}
                >
                  <button
                    type="button"
                    className="quizz-next"
                    onClick={questionSuivante}
                  >
                    {questions.length > 0
                      ? "Question suivante"
                      : "Voir le résultat"}
                  </button>

                  <button
                    type="button"
                    className="quizz-stop"
                    onClick={arreterQuiz}
                  >
                    Arrêter le quiz
                  </button>
                </div>
              </div>
            )}
          </section>
        </>
      )}

      {quizCommence && quizTermine && (
        <section className="quizz-score-container ended">
          <div className="quizz-resultat ended">
            <h1 className="quizz-score-title ended">Quiz terminé</h1>
            <p>
              Ton score est de {compteur}/{roundQuestion}
            </p>

            <div className="quizz-boutons-action ended">
              <button
                type="button"
                className="quizz-next ended"
                onClick={recommencerQuiz}
              >
                Recommencer
              </button>

              <button
                type="button"
                className="quizz-stop ended"
                onClick={arreterQuiz}
              >
                Choisir un autre thème
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default QuizGame;
