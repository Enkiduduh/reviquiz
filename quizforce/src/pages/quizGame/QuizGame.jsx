import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
///////////////////////////// Adminsys
import { dataQuizzLinux } from "../../data/informatique/adminsys/dataQuizzLinux.js";
import { dataQuizzPostgresql } from "../../data/informatique/adminsys/dataQuizzPostgresql.js";
import { dataQuizzAdministrationLinux } from "../../data/informatique/adminsys/dataQuizzAdministrationLinux.js";
import { dataQuizzPostgresqlDba } from "../../data/informatique/adminsys/dataQuizzPostgresqlDba.js";
import { dataQuizzLinuxScripts } from "../../data/informatique/adminsys/dataQuizzLinuxScripts.js";
import { dataQuizzScriptShell } from "../../data/informatique/adminsys/dataQuizzScriptShell.js";
import { dataQuizzSQL } from "../../data/informatique/adminsys/dataQuizzSQL.js";
///////////////////////////// Securite
import { dataQuizzSecurite } from "../../data/informatique/securite/dataQuizzSecurite.js";
import { dataQuizz_chiffrement_certificats_gestion_cles_normes_protocoles_tres_difficiles } from "../../data/informatique/securite/dataQuizz_chiffrement_certificats_gestion_cles_normes_protocoles_tres_difficiles.js";
import { dataQuizz_cybersecurite_acteurs_principes_connaissances_generales_tres_difficiles } from "../../data/informatique/securite/dataQuizz_cybersecurite_acteurs_principes_connaissances_generales_tres_difficiles.js";
import { dataQuizz_gestion_identite_interconnexion_authentification_forte_tres_difficiles } from "../../data/informatique/securite/dataQuizz_gestion_identite_interconnexion_authentification_forte_tres_difficiles.js";
import { dataQuizz_resilience_pca_pra_haute_disponibilite_multisite_attaques_parades_tres_difficiles } from "../../data/informatique/securite/dataQuizz_resilience_pca_pra_haute_disponibilite_multisite_attaques_parades_tres_difficiles.js";
///////////////////////////// Reseaux
import { dataQuizzReseau } from "../../data/informatique/reseaux/dataQuizzReseau.js";
import { dataQuizz_cidr_plan_adressage_ipv4_ipv6_tres_difficiles } from "../../data/informatique/reseaux/dataQuizz_cidr_plan_adressage_ipv4_ipv6_tres_difficiles.js";
import { dataQuizz_cloud_computing_mini_tp_tres_difficiles } from "../../data/informatique/reseaux/dataQuizz_cloud_computing_mini_tp_tres_difficiles.js";
import { dataQuizz_modeles_osi_dod_mini_tp_tres_difficiles } from "../../data/informatique/reseaux/dataQuizz_modeles_osi_dod_mini_tp_tres_difficiles.js";
import { dataQuizz_pile_tcp_ip_typologies_protocoles_infrastructures_tres_difficiles } from "../../data/informatique/reseaux/dataQuizz_pile_tcp_ip_typologies_protocoles_infrastructures_tres_difficiles.js";
///////////////////////////// Developpement
import { dataQuizzJava } from "../../data/informatique/developpement/dataQuizzJavaFacile.js";
import { dataQuizzJavaAffichage } from "../../data/informatique/developpement/dataQuizzJavaAffichage.js";
import { dataQuizzJavaExpert } from "../../data/informatique/developpement/dataQuizzJavaAvance.js";
import { dataQuizzProgrammationDeTest } from "../../data/informatique/developpement/dataQuizzProgrammationDeTest.js";
import { dataQuizz_python_mini_tp_tres_difficiles } from "../../data/informatique/developpement/dataQuizz_python_mini_tp_tres_difficiles.js";
import { dataQuizz_java_mini_tp_tres_difficiles } from "../../data/informatique/developpement/dataQuizz_java_mini_tp_tres_difficiles.js";
import { dataQuizz_javascript_mini_tp_tres_difficiles } from "../../data/informatique/developpement/dataQuizz_javascript_mini_tp_tres_difficiles.js";
///////////////////////////// Conception et réalisation
import { dataQuizzMerise } from "../../data/informatique/conception/dataQuizzMerise.js";
import { dataQuizzUml } from "../../data/informatique/conception/dataQuizzUml.js";
import { dataQuizzSchemaConception } from "../../data/informatique/conception/dataQuizzSchemaConception.js";
import { dataQuizz_merise_cas_utilisation_etats_transitions_difficiles } from "../../data/informatique/conception/dataQuizz_merise_cas_utilisation_etats_transitions_difficiles.js";
import { dataQuizz_uml_mcd_mld_mini_tp_difficiles } from "../../data/informatique/conception/dataQuizz_uml_mcd_mld_mini_tp_difficiles.js";
import { dataQuizzMethodesAnalyse } from "../../data/informatique/conception/dataQuizzMethodesAnalyse.js";
import { dataQuizzConceptsObjet } from "../../data/informatique/culture/dataQuizzConceptsObjet.js";
///////////////////////////// Gestion de projet
import { dataQuizzUrbanisationSystemesInfo } from "../../data/informatique/gestion/dataQuizzUrbanisationSystemesInfo.js";
import { dataQuizzConduiteProjetInfo } from "../../data/informatique/gestion/dataQuizzConduiteProjetInfo.js";
import { dataQuizzPartenaireProjet } from "../../data/informatique/gestion/dataQuizzPartenaireProjet.js";
import { dataQuizzSchemaDirecteur } from "../../data/informatique/gestion/dataQuizzSchemaDirecteur.js";
import { dataQuizzCycleVieApplication } from "../../data/informatique/gestion/dataQuizzCycleVieApplication.js";

///////////////////////////// Logique
import { dataQuizzLogiqueAvancee } from "../../data/informatique/logique/dataQuizzLogiqueAvancee.js";
import { dataQuizzLogiqueFacile } from "../../data/informatique/logique/dataQuizzLogiqueFacile.js";
import { dataQuizz_logique_mini_tp_tres_difficiles } from "../../data/informatique/logique/dataQuizz_logique_mini_tp_tres_difficiles.js";
///////////////////////////// IA
import { dataQuizz_intelligence_artificielle_apprentissage_tres_difficiles } from "../../data/informatique/ia/dataQuizz_intelligence_artificielle_apprentissage_tres_difficiles.js";
///////////////////////////// Data
import { dataQuizz_bases_nosql_principes_usages_tres_difficiles } from "../../data/informatique/donnees/dataQuizz_bases_nosql_principes_usages_tres_difficiles.js";
import { dataQuizz_exposition_donnees_open_data_tres_difficiles } from "../../data/informatique/donnees/dataQuizz_exposition_donnees_open_data_tres_difficiles.js";
import { dataQuizz_sauvegarde_archivage_mini_tp_tres_difficiles } from "../../data/informatique/donnees/dataQuizz_sauvegarde_archivage_mini_tp_tres_difficiles.js";
///////////////////////////// Culture
import { dataQuizz_generalites_architectures_informatiques } from "../../data/informatique/culture/dataQuizz_generalites_architectures_informatiques.js";
import { dataQuizz_generalites_systemes_exploitation } from "../../data/informatique/culture/dataQuizz_generalites_systemes_exploitation.js";
import { dataQuizz_generations_principaux_langages_informatiques } from "../../data/informatique/culture/dataQuizz_generations_principaux_langages_informatiques.js";
import { dataQuizzEvolutionLanguage } from "../../data/informatique/culture/dataQuizzEvolutionLanguage.js";
///////////////////////////// Outils
import { dataQuizzOutilsTestsConfigurationDeploiement } from "../../data/informatique/outils/dataQuizzOutilsTestsConfigurationDeploiement.js";
import { dataQuizzOutilsAideRealisation } from "../../data/informatique/outils/dataQuizzOutilsAideRealisation.js";
import { dataQuizzOutilsAideConception } from "../../data/informatique/outils/dataQuizzOutilsAideConception.js";
///////////////////////////// Juridique
import { dataQuizz_cadre_juridique_communications_electroniques } from "../../data/informatique/juridique/dataQuizz_cadre_juridique_communications_electroniques.js";
import { dataQuizz_droit_informatique } from "../../data/informatique/juridique/dataQuizz_droit_informatique.js";
import { dataQuizzInstancesNormalisation } from "../../data/informatique/juridique/dataQuizzInstancesNormalisation.js";
import { dataQuizzMarchesPublics } from "../../data/informatique/juridique/dataQuizzMarchesPublics.js";
///////////////////////////// Test app
import { dataQuizzTestFin } from "../../data/informatique/dataQuizzTestFin.js";

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
  architectures_info: dataQuizz_generalites_architectures_informatiques,
  systemes_exploitation: dataQuizz_generalites_systemes_exploitation,
  tests_config_deploiement: dataQuizzOutilsTestsConfigurationDeploiement,
  aide_realisation: dataQuizzOutilsAideRealisation,
  aide_conception: dataQuizzOutilsAideConception,
  langages_informatiques:
    dataQuizz_generations_principaux_langages_informatiques,
  communications_electronique:
    dataQuizz_cadre_juridique_communications_electroniques,
  droit_informatique: dataQuizz_droit_informatique,
  instances_normalisation: dataQuizzInstancesNormalisation,
  marches_publics: dataQuizzMarchesPublics,
  test_fin: dataQuizzTestFin,

  chiffrement:
    dataQuizz_chiffrement_certificats_gestion_cles_normes_protocoles_tres_difficiles,
  cybersecurite:
    dataQuizz_cybersecurite_acteurs_principes_connaissances_generales_tres_difficiles,
  authentification:
    dataQuizz_gestion_identite_interconnexion_authentification_forte_tres_difficiles,
  resilience:
    dataQuizz_resilience_pca_pra_haute_disponibilite_multisite_attaques_parades_tres_difficiles,

  nosql: dataQuizz_bases_nosql_principes_usages_tres_difficiles,
  exposition_donnees: dataQuizz_exposition_donnees_open_data_tres_difficiles,
  sauvegarde_archivage: dataQuizz_sauvegarde_archivage_mini_tp_tres_difficiles,

  python_expert: dataQuizz_python_mini_tp_tres_difficiles,
  java_expert: dataQuizz_java_mini_tp_tres_difficiles,
  javascript_expert: dataQuizz_javascript_mini_tp_tres_difficiles,
  merise_exos: dataQuizz_merise_cas_utilisation_etats_transitions_difficiles,
  uml_exos: dataQuizz_uml_mcd_mld_mini_tp_difficiles,
  methodes_analyse: dataQuizzMethodesAnalyse,
  logique_expert: dataQuizz_logique_mini_tp_tres_difficiles,
  intelligence_artificielle:
    dataQuizz_intelligence_artificielle_apprentissage_tres_difficiles,

  cidr_ipv4_ipv6: dataQuizz_cidr_plan_adressage_ipv4_ipv6_tres_difficiles,
  cloud_computing: dataQuizz_cloud_computing_mini_tp_tres_difficiles,
  modele_osi_dod: dataQuizz_modeles_osi_dod_mini_tp_tres_difficiles,
  typologies_reseaux:
    dataQuizz_pile_tcp_ip_typologies_protocoles_infrastructures_tres_difficiles,
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
  architectures_info: "Architecture Informatique",
  systemes_exploitation: "Systèmes d'exploitation",
  tests_config_deploiement: "Outils de tests, configuration et déploirement",
  aide_realisation: "Outils d'aide à la réalisation",
  aide_conception: "Outils d'aide à la conception",
  langages_informatiques: "Principaux langages informatiques",
  communications_electronique:
    "Cadre juridique des communications électroniques",
  droit_informatique: "Droit informatique",
  instances_normalisation: "Instances de normalisation",
  marches_publics: "Marchés publics",
  test_fin: "Test de Fin",

  chiffrement:
    "Chiffrement, certificats, gestion de clés, normes et protocoless",
  cybersecurite: "Cybersecurite acteurs principes connaissances generales",
  authentification: "Gestion identite interconnexion authentification forte",
  resilience:
    "Resilience pca pra haute disponibilite multisite attaques parades",

  nosql: "Bases noSQL, principes et usages",
  exposition_donnees: "Exposition des données et open data",
  sauvegarde_archivage: "Sauvegarde et archivage mini_tp",

  python_expert: "Python expert",
  java_expert: "Java expert",
  javascript_expert: "Javascript expert",
  merise_exos: "Merise cas d'utilisation, états transitions",
  uml_exos: "Uml mcd mld exos",
  methodes_analyse: "Methodes d'analyse",
  logique_expert: "Logique expert",
  intelligence_artificielle: "Intelligence Artificielle Généralités",

  cidr_ipv4_ipv6: "CIDR, Plan d'adressage IPV4 et IPV6",
  cloud_computing: "Cloud computing",
  modele_osi_dod: "Modeles OSI et DOD",
  typologies_reseaux:
    "Pile TCP/IP, typologies, protocoles et infrastructures réseaux",
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
    navigate("/choix");
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

            <button id="quizz-retour" type="button" onClick={arreterQuiz}>
              Retour
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
    </main>
  );
}

export default QuizGame;
