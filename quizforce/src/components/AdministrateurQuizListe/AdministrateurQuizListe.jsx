import { useState, useEffect, useMemo } from "react";
import icon_ajouter_thematique from "/assets/icons/ajout_utilisateur.png";
import icon_modifier_thematique from "/assets/icons/modifier_utilisateur.png";
import icon_supprimer_thematique from "/assets/icons/supprimer_utilisateur.png";
import { themes } from "../../data/themes/themes";

function AdministrateurQuizListe({ quizListe }) {
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

  const themesTries = useMemo(() => {
    if (!tri.colonne) return themes;

    return [...themes].sort((a, b) => {
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
  }, [themes, tri]);

  const getSortIcon = (colonne) => {
  if (tri.colonne !== colonne) return "↕";
  return tri.direction === "asc" ? "↑" : "↓";
};

  const nombreDeThematique = themes.length;
  console.log("Nombre de thematique:", nombreDeThematique);

  return (
    <section className="administrateur-liste-quiz-container">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("category")} >Thématique {getSortIcon("category")}</th>
            <th onClick={() => handleSort("label")}>Quiz {getSortIcon("label")}</th>
            <th onClick={() => handleSort("label_difficulte")}>Difficulté {getSortIcon("label_difficulte")}</th>
            <th onClick={() => handleSort("nb_questions")}>Nombre de questions {getSortIcon("nb_questions")}</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {themesTries.map((thematique) => (
            <tr key={thematique.id}>
              <td>{thematique.category}</td>
              <td>{thematique.label}</td>
              <td>{thematique.label_difficulte}</td>
              <td>{thematique.nb_questions}</td>
              <td>
                <button>
                  <img src={icon_modifier_thematique} alt="" />
                </button>
              </td>
              <td>
                <button>
                  <img src={icon_supprimer_thematique} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button>
        <img src={icon_ajouter_thematique} alt="" />
        Nouvel utilisateur
      </button>
    </section>
  );
}

export default AdministrateurQuizListe;
