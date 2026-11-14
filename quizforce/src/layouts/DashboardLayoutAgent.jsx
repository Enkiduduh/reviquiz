import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Agent_menu from "../components/Agent_menu/Agent_menu";

function DashboardLayoutAgent() {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const navigate = useNavigate();

  function deconnexion() {
    sessionStorage.removeItem("userInfo");
    navigate("/login", { replace: true });
  }


  const location = useLocation();
  const jeuActive = location.pathname === "/quiz/jeu";

  return (
    <div className="quizAffichageGlobal">
      {userInfo?.role_id === 1 && !jeuActive && (
        <Agent_menu
          onClickAgent={() => navigate(`/dashboard`)}
          onClickTaches={() => navigate(`/agents/${userInfo.id}/taches`)}
          onClickAccesThematiques={() => navigate(`/quiz/selection`)}
          onClickProgression={() => navigate(`/agents/${userInfo.id}/progression`)}
          onClickStatistiques={() => navigate(`/agents/${userInfo.id}/statistiques`)}
          onClickDeconnexion={deconnexion}
        />
      )}
       <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayoutAgent;
