import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { utilisateurs } from "../../data/utilisateur_dbb/utilisateurs";

// Import Components

import Utilisateur_details from "../../components/Utilisateur_details/Utilisateur_details";

import QuizChoix from "../quizChoix/QuizChoix";

function QuizMain({ userinfo_login }) {
  const navigate = useNavigate();

  // const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  // console.log(userInfo);

  // Filtre la liste complete des utilisateurs et affiche l'equipe du responsable
  let utilisateursListe = [];
  if (userinfo_login.role_id === 2) {
    const utilisateursListe1 = utilisateurs.filter(
      (utilisateur) => utilisateur.equipe_id === userinfo_login.equipe_id,
    );
    utilisateursListe = utilisateursListe1.filter(
      (utilisateur) => utilisateur.role_id != 2,
    );
  }

  return (
    <div className="quizDashboard-section-right">
      <Utilisateur_details utilisateurs_info={userinfo_login} />
    </div>
  );
}

export default QuizMain;
