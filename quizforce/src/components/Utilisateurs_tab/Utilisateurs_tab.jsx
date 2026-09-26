import React from "react";
import icon_utilisateur from "/assets/icons/utilisateur.png";

function Utilisateurs_tab({ utilisateurs_liste }) {
  return (
    <div>
      <h3 className="utilisateur_table-page-title">Zone Equipe</h3>
      <table className="utilisateurs-table">
        <thead>
          <tr>
            <th>Selection</th>
            <th className="utilisateurs-table-th-grand">Agent</th>
            <th className="utilisateurs-table-th-petit">Attributions</th>
            <th className="utilisateurs-table-th-grand">Tentatives totales</th>
            <th className="utilisateurs-table-th-moyen">Terminés</th>
            <th className="utilisateurs-table-th-moyen">AdminSys</th>
            <th className="utilisateurs-table-th-moyen">Developpement</th>
            <th className="utilisateurs-table-th-moyen">Conception</th>
          </tr>
        </thead>
        <tbody>
          {utilisateurs_liste.map((utilisateur) => (
            <tr key={utilisateur.id}>
              <td>id</td>
              <td className="utilisateurs-table-th-agent-flex">
                <div>
                  <img src={icon_utilisateur} alt="" />
                </div>
                <div className="utilisateurs-table-th-agent-details">
                  <span className="utilisateurs-table-th-agent-details-identite">
                    {utilisateur.prenom} {utilisateur.nom}
                  </span>
                  <span className="utilisateurs-table-th-agent-details-grade">
                    {utilisateur.grade}
                  </span>
                </div>
              </td>
              <td>4/5</td>
              <td>{utilisateur.nb_tentatives_total}</td>
              <td>
                {utilisateur.theme_adm.nb_termines +
                  utilisateur.theme_con.nb_termines +
                  utilisateur.theme_dev.nb_termines}
              </td>
              <td>{utilisateur.theme_adm.stats}</td>
              <td>{utilisateur.theme_dev.stats}</td>
              <td>{utilisateur.theme_con.stats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Utilisateurs_tab;
