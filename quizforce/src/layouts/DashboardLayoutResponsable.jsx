import { Outlet, useNavigate } from "react-router-dom";
import Responsable_menu from "../components/Responsable_menu/Responsable_menu";

function DashboardLayoutResponsable() {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  const navigate = useNavigate();

  function deconnexion() {
    sessionStorage.removeItem("userInfo");
    navigate("/login", { replace: true });
  }

  return (
    <div className="quizAffichageGlobal">
      {userInfo?.role_id === 2 && (
        <Responsable_menu
          onClickResponsable={() => navigate(`/dashboard`)}
          onClickGestion={() => navigate(`/responsable/equipe/gestion`)}
          onClickAccesAgentDetails={() =>
            navigate(`/responsable/equipe/gestion/agents/:id`)
          }
          onClickCampagne={() => navigate(`/responsable/equipe/campagne`)}
          onClickStatistiques={() =>
            navigate(`/responsable/equipe/statistiques`)
          }
          onClickDeconnexion={deconnexion}
        />
      )}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayoutResponsable;
