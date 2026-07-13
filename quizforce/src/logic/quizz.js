import { dataQuizzLinux } from "../data/dataQuizzLinux.js";
import { dataQuizzSecurite } from "../data/dataQuizzSecurite.js";
import { dataQuizzRSP } from "../data/dataQuizzRSP.js";
import { dataQuizzReseau } from "../data/dataQuizzReseau.js";
import { dataQuizzScriptShell } from "../data/dataQuizzScriptShell.js";
import { dataQuizzJava } from "../data/dataQuizzJavaFacile.js";
import { dataQuizzJavaExpert } from "../data/dataQuizzJavaAvance.js";
import { dataQuizzJavaAffichage } from "../data/dataQuizzJavaAffichage.js";
import { dataQuizzLogiqueFacile } from "../data/dataQuizzLogiqueFacile.js";
import { dataQuizzAdministrationLinux } from "../data/dataQuizzAdministrationLinux.js";
import { dataQuizzPostgresql } from "../data/dataQuizzPostgresql.js";
import { dataQuizzPostgresqlDba } from "../data/dataQuizzPostgresqlDba.js";
import { dataQuizzMerise } from "../data/dataQuizzMerise.js";
import { dataQuizzUml } from "../data/dataQuizzUml.js";
import { dataQuizzConceptsObjet } from "../data/dataQuizzConceptsObjet.js";
import { dataQuizzUrbanisationSystemesInfo } from "../data/dataQuizzUrbanisationSystemesInfo.js";
import { dataQuizzConduiteProjetInfo } from "../data/dataQuizzConduiteProjetInfo.js";
import { dataQuizzPartenaireProjet } from "../data/dataQuizzPartenaireProjet.js";
import { dataQuizzSchemaDirecteur } from "../data/dataQuizzSchemaDirecteur.js";
import { dataQuizzCycleVieApplication } from "../data/dataQuizzCycleVieApplication.js";
import { dataQuizzEvolutionLanguage } from "../data/dataQuizzEvolutionLanguage.js";
import { dataQuizzProgrammationDeTest } from "../data/dataQuizzProgrammationDeTest.js";
import { dataQuizzLinuxScripts } from "../data/dataQuizzLinuxScripts.js";
const serveur = "http://localhost:3000";

const dataQuizz = {
  linux: dataQuizzLinux,
  linux_admin: dataQuizzAdministrationLinux,
  linux_scripts: dataQuizzLinuxScripts,
  rsp: dataQuizzRSP,
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
};

let questions = [];
const quizzContainer = document.querySelector(".quizz-container");

const questionNext = document.querySelector(".quizz-next");
const questionStop = document.querySelector(".quizz-stop");
const questionActionContainer = document.querySelector(".quizz-boutons-action");
const questionQuizz = document.querySelector(".quizz-question");
const quizzResultat = document.querySelector(".quizz-resultat");
const reponses = document.querySelectorAll(".quizz-reponse");
const points = document.querySelector(".quizz-points");
const round = document.querySelector(".quizz-round");

const themeQuiz = String(sessionStorage.getItem("themeQuiz"));
const themeTitre = document.querySelector(".quizz-score-title");
themeTitre.textContent = `Quiz test de connaissances : ${themeQuiz}`;
console.log(themeQuiz);
if (themeQuiz == "linux") {
  questions = [...dataQuizz.linux];
} else if (themeQuiz == "reseaux") {
  questions = [...dataQuizz.reseaux];
} else if (themeQuiz == "rsp") {
  questions = [...dataQuizz.rsp];
} else if (themeQuiz == "securite") {
  questions = [...dataQuizz.securite];
} else if (themeQuiz == "java") {
  questions = [...dataQuizz.java];
} else if (themeQuiz == "scriptshell") {
  questions = [...dataQuizz.scriptshell];
} else if (themeQuiz == "java_avance") {
  questions = [...dataQuizz.java_avance];
} else if (themeQuiz == "java_affichage") {
  questions = [...dataQuizz.java_avance];
} else if (themeQuiz == "logique") {
  questions = [...dataQuizz.logique];
} else if (themeQuiz == "linux_admin") {
  questions = [...dataQuizz.linux_admin];
} else if (themeQuiz == "postgresql") {
  questions = [...dataQuizz.postgresql];
} else if (themeQuiz == "postgresql_dba") {
  questions = [...dataQuizz.postgresql_dba];
} else if (themeQuiz == "merise") {
  questions = [...dataQuizz.merise];
} else if (themeQuiz == "uml") {
  questions = [...dataQuizz.uml];
} else if (themeQuiz == "concepts_objet") {
  questions = [...dataQuizz.concepts_objet];
} else if (themeQuiz == "conduite_projet_info") {
  questions = [...dataQuizz.conduite_projet_info];
} else if (themeQuiz == "urbanisation_systeme_info") {
  questions = [...dataQuizz.urbanisation_systeme_info];
} else if (themeQuiz == "partenaire_projet") {
  questions = [...dataQuizz.partenaire_projet];
} else if (themeQuiz == "schema_directeur") {
  questions = [...dataQuizz.schema_directeur];
} else if (themeQuiz == "cycle_vie_application") {
  questions = [...dataQuizz.cycle_vie_application];
} else if (themeQuiz == "evolution_language") {
  questions = [...dataQuizz.evolution_language];
} else if (themeQuiz == "test") {
  questions = [...dataQuizz.test];
} else if (themeQuiz == "linux_scripts") {
  questions = [...dataQuizz.linux_scripts];
  questionQuizz.style.fontSize = "20px";
  const separators = document.querySelectorAll(".quizz-separator");
  separators.forEach((sep) => {
    sep.style.display = "none";
  });
  quizzContainer.style.flexDirection = "inherit";
}

let questionActuelle = null;
let choixEffectue = false;
let compteur = 0;
let roundQuestion = 1;

let joueurNom = "";

const score = {
  nom: joueurNom,
  score_quiz: compteur,
  date_quiz: new Date().toISOString(), // format ISO 8601
  nb_questions: roundQuestion - 1,
  theme: themeQuiz,
};

fetch(`${serveur}/api/highscore/${themeQuiz}`)
  .then((response) => {
    if (!response.ok) throw new Error("Impossible de récuperer les données");
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const highscoreContainer = document.querySelector(
      ".quizz-highscore-joueurs",
    );
    let rowsHTML = "";

    for (let i = 0; i <= data.length; i++) {
      const iso = data[i].date_quiz;
      // Crée un objet Date (le constructeur gère le fuseau UTC)
      const date = new Date(iso);
      // Fonction d’ajout d’un zéro devant les nombres < 10
      const pad = (n) => String(n).padStart(2, "0");
      const jour = pad(date.getUTCDate()); // 14
      const mois = pad(date.getUTCMonth() + 1); // 06
      const annee = date.getUTCFullYear(); // 2026
      const resultat = `${jour}/${mois}/${annee}`;

      rowsHTML = `
              <tr class=highscore-joueur-${[i]}>
                <td >${data[i].nom}</td>
                <td >${data[i].score_quiz}</td>
                <td >${data[i].nb_questions}</td>
                <td >${resultat}</td>
              </tr>
                `;
      highscoreContainer.innerHTML += rowsHTML;
    }
  });

fetch(`${serveur}/api/score/${themeQuiz}`)
  .then((response) => {
    if (!response.ok) throw new Error("Impossible de récuperer les données");
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    const highscoreContainer = document.querySelector(".quizz-scores-joueurs");
    let rowsHTML = "";

    for (let i = 0; i <= data.length; i++) {
      const iso = data[i].date_quiz;
      // Crée un objet Date (le constructeur gère le fuseau UTC)
      const date = new Date(iso);
      // Fonction d’ajout d’un zéro devant les nombres < 10
      const pad = (n) => String(n).padStart(2, "0");
      const jour = pad(date.getUTCDate()); // 14
      const mois = pad(date.getUTCMonth() + 1); // 06
      const annee = date.getUTCFullYear(); // 2026
      const resultat = `${jour}/${mois}/${annee}`;

      rowsHTML = `
              <tr class=score-joueur score-joueur-${i}>
                <td >${data[i].nom}</td>
                <td >${data[i].score_quiz}</td>
                <td >${data[i].nb_questions}</td>
                <td >${resultat}</td>
              </tr>
                `;
      highscoreContainer.innerHTML += rowsHTML;
    }
  });

const lignesScore = document.querySelectorAll(".score-joueur");
console.log(lignesScore);
lignesScore.forEach((ligne, idx) => {
  if (idx % 2 == 0) {
    ligne.style.background = "grey";
  } else {
    ligne.style.background = "whitesmoke";
  }
});

function afficherQuestion() {
  choixEffectue = false;

  const random = Math.floor(Math.random() * questions.length);
  questionActuelle = questions[random];
  console.log(questions[random]);
  // questionActuelle.question.replace(/\r?\n/g, "<br>");
  questionQuizz.textContent = questionActuelle.question;

  const valeurs = [
    questionActuelle.reponse_f1,
    questionActuelle.reponse_f2,
    questionActuelle.reponse_v,
  ];

  for (let i = valeurs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // indice aléatoire entre 0 et i
    [valeurs[i], valeurs[j]] = [valeurs[j], valeurs[i]]; // échange
  }

  reponses[0].textContent = valeurs[0];
  reponses[1].textContent = valeurs[1];
  reponses[2].textContent = valeurs[2];

  questions.splice(random, 1);

  reponses.forEach((reponse) => {
    reponse.style.background = "lightgray";
    reponse.style.pointerEvents = "auto";
  });

  questionNext.style.display = "none";
  questionStop.style.display = "none";
  questionActionContainer.style.display = "none";
  quizzResultat.textContent = "";

  reponses.forEach((reponse) => {
    reponse.addEventListener("click", () => {
      if (choixEffectue) return;

      choixEffectue = true;
      if (reponse.textContent == questionActuelle.reponse_v) {
        quizzResultat.textContent = "Bonne réponse!";
        reponse.style.background = "lightgreen";
        compteur++;
      } else {
        quizzResultat.textContent = "Mauvaise réponse!";
        reponse.style.background = "lightcoral";
        reponses.forEach((reponse) => {
          if (reponse.textContent === questionActuelle.reponse_v) {
            reponse.style.background = "lightgreen";
          }
        });
      }
      score.score_quiz = compteur;
      score.nb_questions = roundQuestion;
      console.log(score);
      roundQuestion++;

      reponses.forEach((reponse) => {
        reponse.style.pointerEvents = "none";
      });
      questionNext.style.display = "flex";
      questionStop.style.display = "flex";
      console.log(questionActionContainer);
      questionActionContainer.style.display = "flex";
    });
  });
}
questionNext.addEventListener("click", () => {
  points.textContent = `Point(s) : ${compteur}/${roundQuestion - 1}`;
  round.textContent = `Question n°${roundQuestion} / ${questions.length} `;
  afficherQuestion();
  // console.log(questions.length);
});

afficherQuestion();

const quizzScoreContainer = document.querySelector(".quizz-score-container");
const startButton = document.getElementById("quizz-start");
const input = document.querySelector(".quizz-input-joueur");

const quizzTitle = document.querySelector(".quizz-score-title");
const quizzStart = document.querySelector(".quizz-score-name");

const quizzPoints = document.querySelector(".quizz-points");
const quizzRound = document.querySelector(".quizz-round");

const quizzScoreHTML = document.querySelectorAll(".quizz-score-table");

startButton.addEventListener("click", () => {
  const lignesScore = document.querySelectorAll(".score-joueur");
  const quizzTitre = document.querySelector(".quizz-theme");
  quizzTitre.textContent = `Quiz : ${themeQuiz}`;
  quizzScoreContainer.style.width = "20%";
  quizzContainer.style.width = "75%";

  quizzContainer.style.display = "flex";
  quizzTitle.style.display = "none";

  quizzScoreHTML.forEach((score) => {
    score.style.fontSize = "12px";
  });

  lignesScore.forEach((ligne, idx) => {
    if (idx % 2 == 0) {
      ligne.style.background = "grey";
    } else {
      ligne.style.background = "whitesmoke";
    }
  });

  quizzStart.style.display = "none";
  quizzPoints.style.display = "flex";
  quizzRound.style.display = "flex";

  score.nom = joueurNom;
  console.log(score);
});

questionStop.addEventListener("click", async () => {
  window.location.href = "quizz.html";
  console.log("Sauvegarde tentée...");
  // sauvegarderScore(score);
  try {
    const response = fetch(`${serveur}/api/score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom: joueurNom,
        score_quiz: compteur,
        date_quiz: new Date().toISOString(), // format ISO 8601
        nb_questions: roundQuestion - 1,
        theme: themeQuiz,
      }),
    });
    const data = await response.json();
    console.log("Score sauvegardé :", data);
  } catch (err) {
    console.error(err);
  }
  console.log("Après tentative de sauvegarde....");
  console.log(score);
});

input.addEventListener("input", function (e) {
  let len = input.value.length;
  if (len >= 3) {
    console.log("Condition vraie");
    startButton.style.opacity = "100%";
    startButton.style.pointerEvents = "all";
  } else if (len < 3) {
    startButton.style.opacity = "50%";
    startButton.style.pointerEvents = "none";
  }
  joueurNom = input.value;
});
