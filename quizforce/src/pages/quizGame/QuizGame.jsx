import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { dataQuizzLinux } from "../../data/dataQuizzLinux.js";
import { dataQuizzSecurite } from "../../data/dataQuizzSecurite.js";
import { dataQuizzReseau } from "../../data/dataQuizzReseau.js";
import { dataQuizzScriptShell } from "../../data/dataQuizzScriptShell.js";
import { dataQuizzJava } from "../../data/dataQuizzJavaFacile.js";
import { dataQuizzJavaExpert } from "../../data/dataQuizzJavaAvance.js";
import { dataQuizzJavaAffichage } from "../../data/dataQuizzJavaAffichage.js";
import { dataQuizzLogiqueFacile } from "../../data/dataQuizzLogiqueFacile.js";
import { dataQuizzAdministrationLinux } from "../../data/dataQuizzAdministrationLinux.js";
import { dataQuizzPostgresql } from "../../data/dataQuizzPostgresql.js";
import { dataQuizzPostgresqlDba } from "../../data/dataQuizzPostgresqlDba.js";
import { dataQuizzMerise } from "../../data/dataQuizzMerise.js";
import { dataQuizzUml } from "../../data/dataQuizzUml.js";
import { dataQuizzConceptsObjet } from "../../data/dataQuizzConceptsObjet.js";
import { dataQuizzUrbanisationSystemesInfo } from "../../data/dataQuizzUrbanisationSystemesInfo.js";
import { dataQuizzConduiteProjetInfo } from "../../data/dataQuizzConduiteProjetInfo.js";
import { dataQuizzPartenaireProjet } from "../../data/dataQuizzPartenaireProjet.js";
import { dataQuizzSchemaDirecteur } from "../../data/dataQuizzSchemaDirecteur.js";
import { dataQuizzCycleVieApplication } from "../../data/dataQuizzCycleVieApplication.js";
import { dataQuizzEvolutionLanguage } from "../../data/dataQuizzEvolutionLanguage.js";
import { dataQuizzProgrammationDeTest } from "../../data/dataQuizzProgrammationDeTest.js";
import { dataQuizzLinuxScripts } from "../../data/dataQuizzLinuxScripts.js";

import { dataQuizzSchemaConception } from "../../data/dataQuizzSchemaConception.js";
import { dataQuizzSQL } from "../../data/dataQuizzSQL.js";
import { dataQuizzLogiqueAvancee } from "../../data/dataQuizzLogiqueAvancee.js";

const dataQuizz = {
  linux: dataQuizzLinux,
  linux_admin: dataQuizzAdministrationLinux,
  linux_scripts: dataQuizzLinuxScripts,
  securite: dataQuizzSecurite,
  reseaux: dataQuizzReseau,
  java: dataQuizzJava,
  java_affichage: dataQuizzJavaAffichage,
  java_avance: dataQuizzJavaExpert,
  scriptshell: dataQuizzScriptShell,
  logique: dataQuizzLogiqueFacile,
  postgresql: dataQuizzPostgresql,
  postgresql_dba: dataQuizzPostgresqlDba,
  cycle_vie_application: dataQuizzCycleVieApplication,
  schema_directeur: dataQuizzSchemaDirecteur,
  partenaire_projet: dataQuizzPartenaireProjet,
  urbanisation_systeme_info: dataQuizzUrbanisationSystemesInfo,
  conduite_projet_info: dataQuizzConduiteProjetInfo,
  concepts_objet: dataQuizzConceptsObjet,
  merise: dataQuizzMerise,
  uml: dataQuizzUml,
  test: dataQuizzProgrammationDeTest,
  evolution_language: dataQuizzEvolutionLanguage,
  sql: dataQuizzSQL,
  logique_avancee: dataQuizzLogiqueAvancee,
  schema_conception: dataQuizzSchemaConception,
};

const titresThemes = {
  linux: "Linux",
  linux_admin: "Linux Admin",
  linux_scripts: "Linux Scripts",
  rsp: "RSP",
  securite: "Sécurité / SSH",
  reseaux: "Réseaux",
  java: "Java 1",
  java_affichage: "Java 2",
  java_avance: "Java avancé",
  scriptshell: "Script Shell",
  logique: "Logique",
  postgresql: "PostgreSQL",
  postgresql_dba: "PostgreSQL DBA",
  cycle_vie_application: "Cycle de vie d'une application",
  schema_directeur: "Schéma directeur",
  partenaire_projet: "Partenaires d'un projet",
  urbanisation_systeme_info: "Urbanisation des systèmes d'information",
  conduite_projet_info: "Conduite d'un projet informatique",
  concepts_objet: "Concepts objet",
  merise: "Merise",
  uml: "UML",
  test: "Programmation de test",
  evolution_language: "Évolution des langages de programmation",
  sql: "SQL",
  logique_avancee: "Logique Avancée",
  schema_conception: "Schéma de conception",
};

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

  const questionsInitiales = useMemo(() => {
    if (!themeQuiz || !dataQuizz[themeQuiz]) {
      return [];
    }

    return [...dataQuizz[themeQuiz]];
  }, [themeQuiz]);

  const [questions, setQuestions] = useState(questionsInitiales);

  const [questionActuelle, setQuestionActuelle] = useState(null);
  const [reponses, setReponses] = useState([]);

  const [quizCommence, setQuizCommence] = useState(false);
  const [quizTermine, setQuizTermine] = useState(false);

  const [compteur, setCompteur] = useState(0);
  const [roundQuestion, setRoundQuestion] = useState(1);

  const [choixEffectue, setChoixEffectue] = useState(false);
  const [reponseChoisie, setReponseChoisie] = useState(null);
  const [resultat, setResultat] = useState("");

  const titreTheme = titresThemes[themeQuiz] ?? themeQuiz;
  const nombreTotalQuestions = questionsInitiales.length;

  function afficherQuestion(listeQuestions) {
    if (listeQuestions.length === 0) {
      setQuestionActuelle(null);
      setReponses([]);
      setQuizTermine(true);
      return;
    }

    const indexAleatoire = Math.floor(Math.random() * listeQuestions.length);

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

  function commencerQuiz() {
    setQuizCommence(true);
    setQuizTermine(false);

    setCompteur(0);
    setRoundQuestion(1);

    setQuestions(questionsInitiales);
    afficherQuestion(questionsInitiales);
  }

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
    navigate("/");
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

  if (!themeQuiz || !dataQuizz[themeQuiz]) {
    return (
      <main className="quizz-page-main">
        <div className="quizz-score-container">
          <h1 className="quizz-score-title">Aucun thème sélectionné</h1>

          <button type="button" className="quizz-stop" onClick={arreterQuiz}>
            Retour aux thèmes
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="quizz-page-main">
      {!quizCommence && (
        <section
          className={`quizz-score-container-starter ${!quizCommence ? "quizchoix-container-center" : "quizchoix-container-normal"}`}
        >
          <h1 className="quizz-score-title">{titreTheme}</h1>
          {/* <span className="quizz-score-name">Quiz connaissances</span> */}
          <div className="quizz-score-name">
            <p>Ce quiz contient {nombreTotalQuestions} questions.</p>

            <button id="quizz-start" type="button" onClick={commencerQuiz}>
              Commencer le quiz
            </button>
          </div>
        </section>
      )}

      {quizCommence && !quizTermine && questionActuelle && (
        <>
          <section
            className={`quizz-score-container ${quizCommence ? "started" : ""}`}
          >
            <h1 className="quizz-theme">Quiz : {titreTheme}</h1>

            <p className="quizz-points">
              Point(s) : {compteur}/{roundQuestion - 1}
            </p>

            <p className="quizz-round">
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
                      <div>{questionActuelle.reponse_v}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="result-mauvais">{resultat}</div>

                    <div className="quizz-reponse-result">
                      <div>La bonne réponse est :</div>
                      <div>{questionActuelle.reponse_v}</div>
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
        <section className="quizz-score-container">
          <h1 className="quizz-score-title">Quiz terminé</h1>

          <div className="quizz-score-name">
            <p className="quizz-resultat">
              Ton score est de {compteur}/{roundQuestion}.
            </p>

            <div className="quizz-boutons-action">
              <button
                type="button"
                className="quizz-next"
                onClick={recommencerQuiz}
              >
                Recommencer
              </button>

              <button
                type="button"
                className="quizz-stop"
                onClick={arreterQuiz}
              >
                Choisir un autre thème
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default QuizGame;
