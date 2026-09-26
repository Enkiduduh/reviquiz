import React from "react";

function Utilisateur_details({utilisateurs_info}) {
  return <div>
     <h3 className="utilisateur_details-page-title">Zone Utilisateur</h3>
    <section className="utilisateur-recapitulatif-details">
          <div className="utilisateur_details-container">
            <div className="utilisateur_details-libelle">
              Nom:{" "}
            </div>
            <div className="utilisateur_details-value">
              {utilisateurs_info.nom}{" "}
            </div>
          </div>

          <div className="utilisateur_details-container">
            <div className="utilisateur_details-libelle">
              Prénom :{" "}
            </div>
            <div className="utilisateur_details-value">
              {utilisateurs_info.prenom}
            </div>
          </div>

          <div className="utilisateur_details-container">
            <div className="utilisateur_details-libelle">
              Grade :
            </div>
            <div className="utilisateur_details-value">
              {" "}
              {utilisateurs_info.grade}
            </div>
          </div>
          <div className="utilisateur_details-container">
            <div className="utilisateur_details-libelle">
              {" "}
              Rôle :{" "}
            </div>
            <div className="utilisateur_details-value">
              {" "}
              {utilisateurs_info.role_id}{" "}
            </div>
          </div>

          <div className="utilisateur_details-container">
            <div className="utilisateur_details-libelle">
              {" "}
              Equipe :{" "}
            </div>
            <div className="utilisateur_details-value">
              {" "}
              {utilisateurs_info.equipe_id}{" "}
            </div>
          </div>
        </section>
  </div>;
}

export default Utilisateur_details;
