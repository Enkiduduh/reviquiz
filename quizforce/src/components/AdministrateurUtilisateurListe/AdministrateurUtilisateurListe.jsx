import { useState, useEffect, useMemo } from "react";
import icon_ajouter_utilisateur from "/assets/icons/ajout_utilisateur.png";
import icon_modifier_utilisateur from "/assets/icons/modifier_utilisateur.png";
import icon_supprimer_utilisateur from "/assets/icons/supprimer_utilisateur.png";

function AdministrateurUtilisateurListe({ utilisateursListe }) {
  function convertRoleIDToRole(role_id) {
    if (role_id == 1) {
      return "Responsable";
    } else if (role_id == 2) {
      return "Agent";
    } else if (role_id == 3) {
      return "Admin";
    }
  }

  const [tri, setTri] = useState({
    colonne: null,
    direction: "asc",
  });

  const handleSort = (colonne) => {
    setTri((prev) => ({
      colonne,
      direction:
        prev.colonne === colonne && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const utilisateursTries = useMemo(() => {
    if (!tri.colonne) return utilisateursListe;

    return [...utilisateursListe].sort((a, b) => {
      const valeurA = a[tri.colonne];
      const valeurB = b[tri.colonne];

      // Valeurs nulles en dernier
      if (valeurA == null && valeurB == null) return 0;
      if (valeurA == null) return 1;
      if (valeurB == null) return -1;

      let comparaison;

      if (typeof valeurA === "number" && typeof valeurB === "number") {
        comparaison = valeurA - valeurB;
      } else {
        comparaison = String(valeurA).localeCompare(String(valeurB), "fr", {
          sensitivity: "base",
          numeric: true,
        });
      }

      return tri.direction === "asc" ? comparaison : -comparaison;
    });
  }, [utilisateursListe, tri]);

  const getSortIcon = (colonne) => {
    if (tri.colonne !== colonne) return "↕";
    return tri.direction === "asc" ? "↑" : "↓";
  };

  return (
    <section className="administrateur-liste-utilisateur-container">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("role_id")}>
              Rôle {getSortIcon("role_id")}
            </th>
            <th onClick={() => handleSort("prenom")}>
              Prénom {getSortIcon("prenom")}
            </th>
            <th onClick={() => handleSort("nom")}>Nom {getSortIcon("nom")}</th>
            <th onClick={() => handleSort("equipe_id")}>
              Equipe {getSortIcon("equipe_id")}
            </th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {utilisateursTries.map((utilisateur) => (
            <tr key={utilisateur.id}>
              <td>{convertRoleIDToRole(utilisateur.role_id)}</td>
              <td>{utilisateur.prenom}</td>
              <td>{utilisateur.nom}</td>
              <td>{utilisateur.equipe_id}</td>
              <td>
                <button>
                  <img src={icon_modifier_utilisateur} alt="" />
                </button>
              </td>
              <td>
                <button>
                  <img src={icon_supprimer_utilisateur} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>
        <img src={icon_ajouter_utilisateur} alt="" />
        Nouvel utilisateur
      </button>
    </section>
  );
}

export default AdministrateurUtilisateurListe;
