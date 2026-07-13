const serveur = "http://localhost:3000";
const quizChoixAll = document.querySelectorAll(".quizchoix-quiz");

const themes = [
  "linux",
  "linux_scripts",
  "rsp",
  "reseaux",
  "java",
  "securite",
  "scriptshell",
  "java_affichage",
  "java_avance",
  "linux_admin",
  "logique",
  "postgresql",
  "postgresql_dba",
  "cycle_vie_application",
  "schema_directeur",
  "partenaire_projet",
  "urbanisation_systeme_info",
  "conduite_projet_info",
  "concepts_objet",
  "merise",
  "uml",
  "test",
  "evolution_language"
];


quizChoixAll.forEach((choix) => {
  choix.addEventListener("click", () => {
    verifierTheme(choix);
  });
});

function verifierTheme(themeChoix) {
  themes.forEach((theme) => {
    if (themeChoix.classList.contains(`quizchoix-quiz-${theme}`)) {
      console.log("Theme :", theme, "correspondant à", themeChoix);
      sessionStorage.setItem("themeQuiz", theme);
      window.location.href = "quizz.html";
    }
  });
}

quizChoixAll.forEach((choix) => {
  choix.addEventListener("mouseover", () => {
    themes.forEach((theme) => {
      if (choix.classList.contains(`quizchoix-quiz-${theme}`)) {
        afficherHighscore(theme);
      }
    });
  });
});

function afficherHighscore(themeQuiz) {
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
      highscoreContainer.innerHTML = "";
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
      <tr class=highscore-joueur-${i}>
      <td >${data[i].nom}</td>
      <td >${data[i].score_quiz}</td>
      <td >${data[i].nb_questions}</td>
      <td >${resultat}</td>
      </tr>
      `;
        highscoreContainer.innerHTML += rowsHTML;
      }
    });
}
