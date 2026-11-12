import { Outlet, useNavigate } from "react-router-dom";
import Administrateur_menu from "../components/Administrateur_menu/Administrateur_menu";

function DashboardLayoutAdmin() {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const navigate = useNavigate();

  function deconnexion() {
    sessionStorage.removeItem("userInfo");
    navigate("/login", { replace: true });
  }

  return (
    <div className="quizAffichageGlobal">
      {userInfo?.role_id === 3 && (
        <Administrateur_menu
          onClickAdministrateur={() => navigate("/dashboard")}
          onClickGestionUtilisateurs={() => navigate("/gestion/utilisateurs")}
          onClickThematiques={() => navigate("/gestion/thematiques")}
          onClickQuiz={() => navigate("/gestion/quiz")}
          onClickQuestions={() => navigate("/gestion/questions")}
          onClickDeconnexion={deconnexion}
        />
      )}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayoutAdmin;
