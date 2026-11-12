import { Outlet, useNavigate } from "react-router-dom";
import Agent_menu from "../components/Agent_menu/Agent_menu";

function DashboardLayoutAgent() {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const navigate = useNavigate();

  function deconnexion() {
    sessionStorage.removeItem("userInfo");
    navigate("/login", { replace: true });
  }
  console.log("userinfo :", userInfo.role_id, userInfo.nom, userInfo.prenom)

  return (
    <div className="quizAffichageGlobal">
      {userInfo?.role_id === 1 && (
        <Agent_menu
          onClickAgent={() => navigate("/dashboard")}
          onClickTaches={() => navigate(`/agents/${userInfo.id}/taches`)}
          onClickAccesThematiques={() => navigate("/quiz")}
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
