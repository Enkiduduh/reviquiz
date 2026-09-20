import React from "react";

function Utilisateur_details({utilisateurs_info}) {
  return <div>
     <h3>Zone utilisateur</h3>
     <div>Nom: {utilisateurs_info.nom}</div>
     <div>Prénom: {utilisateurs_info.prenom}</div>
     <div>Grade: {utilisateurs_info.grade}</div>
      <div>Nombre de tentatives totale: {utilisateurs_info.nb_tentatives_total}</div>
  </div>;
}

export default Utilisateur_details;
