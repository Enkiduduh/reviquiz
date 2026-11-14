import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { utilisateurs } from "./data/utilisateur_dbb/utilisateurs.js";
import { themes } from "./data/themes/themes";

import QuizChoix from "./pages/quizChoix/QuizChoix";
import QuizGame from "./pages/quizGame/QuizGame";
import QuizMain from "./pages/quizMain/QuizMain";
import QuizLogin from "./pages/quizLogin/QuizLogin";
import QuizDashboard from "./pages/quizDashboard/QuizDashboard";
import QuizIntro from "./pages/quizIntro/QuizIntro.jsx";

import DashboardLayoutAdmin from "./layouts/DashboardLayoutAdmin";
import AdministrateurUtilisateurListe from "./components/AdministrateurUtilisateurListe/AdministrateurUtilisateurListe";
import AdministrateurThematiqueListe from "./components/AdministrateurThematiqueListe/AdministrateurThematiqueListe.jsx";
import AdministrateurQuizListe from "./components/AdministrateurQuizListe/AdministrateurQuizListe.jsx";

import DashboardLayoutAgent from "./layouts/DashboardLayoutAgent";
import Utilisateur_stats from "./components/Utilisateur_stats/Utilisateur_stats";
import Utilisateur_taches from "./components/Utilisateur_taches/Utilisateur_taches";
import Utilisateur_details from "./components/Utilisateur_details/Utilisateur_details";

import DashboardLayoutResponsable from "./layouts/DashboardLayoutResponsable.jsx";
import Utilisateur_tab from "./components/Utilisateurs_tab/Utilisateurs_tab.jsx";

import "./App.css";

function App() {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo")) || "";

  let utilisateursListe = [];
  if (userInfo.role_id === 2) {
    const utilisateursListe1 = utilisateurs.filter(
      (utilisateur) => utilisateur.equipe_id === userInfo.equipe_id,
    );
    utilisateursListe = utilisateursListe1.filter(
      (utilisateur) => utilisateur.role_id != 2,
    );
  }
  if (userInfo.role_id === 3) {
    const utilisateursListe1 = utilisateurs.filter(
      (utilisateur) => utilisateur.id != userInfo.id,
    );
    utilisateursListe = utilisateursListe1;
  }

  return (
    <>
      <Router>
        <Routes>
          {/* Pages sans menu */}
          <Route path="/" element={<QuizMain />} />
          <Route path="/login" element={<QuizLogin />} />
          {/* <Route path="/quiz" element={<QuizGame />} /> */}

          {/* Pages avec menu */}
          {/* MENU ADMIN */}
          {userInfo.role_id === 3 && (
            <Route element={<DashboardLayoutAdmin />}>
              <Route
                path={`/dashboard`}
                element={<QuizDashboard userinfo_login={userInfo} />}
              />
              <Route
                path="/admins/gestion/utilisateurs"
                element={
                  <AdministrateurUtilisateurListe
                    utilisateursListe={utilisateursListe}
                  />
                }
              />
              <Route
                path="/admins/gestion/thematiques"
                element={
                  <AdministrateurThematiqueListe thematiquesListe={themes} />
                }
              />

              <Route
                path="/admins/gestion/quiz"
                element={<AdministrateurQuizListe quizListe={themes} />}
              />
            </Route>
          )}

            {/* MENU RESPONSABLE */}
          {userInfo.role_id === 2 && (
            <Route element={<DashboardLayoutResponsable />}>
              <Route
                path={`/dashboard`}
                element={<QuizDashboard userinfo_login={userInfo} />}
              />
              <Route
                path={`/responsable/equipe/gestion`}
                element={<Utilisateur_tab utilisateurs_liste={utilisateursListe} />}
              />
                <Route
                path={`/responsable/equipe/gestion/agents/:id`}
                element={<Utilisateur_taches />}
              />
              <Route
                path={`/responsable/equipe/statistiques`}
                element={<Utilisateur_details utilisateurs_info={userInfo} />}
              />
              <Route
                path={`/responsable/equipe/campagne`}
                element={<Utilisateur_stats utilisateurs_info={userInfo} />}
              />
            </Route>
          )}

          {/* MENU AGENT */}
          {userInfo.role_id === 1 && (
            <Route element={<DashboardLayoutAgent />}>
              <Route
                path={`/dashboard`}
                element={<QuizDashboard userinfo_login={userInfo} />}
              />
              <Route
                path={`/agents/${userInfo.id}/taches`}
                element={<Utilisateur_taches />}
              />
              <Route
                path={`/agents/${userInfo.id}/progression`}
                element={<Utilisateur_details utilisateurs_info={userInfo} />}
              />
              <Route
                path={`/agents/${userInfo.id}/statistiques`}
                element={<Utilisateur_stats utilisateurs_info={userInfo} />}
              />
              <Route path={`/quiz/selection`} element={<QuizChoix />} />
              <Route path={`/quiz/introduction`} element={<QuizIntro />} />
              <Route path={`/quiz/jeu`} element={<QuizGame />} />
            </Route>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
