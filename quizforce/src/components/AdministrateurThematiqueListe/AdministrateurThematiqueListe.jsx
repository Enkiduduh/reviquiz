import { useState, useEffect, useMemo } from "react";
import icon_ajouter_thematique from "/assets/icons/ajout_utilisateur.png";
import icon_modifier_thematique from "/assets/icons/modifier_utilisateur.png";
import icon_supprimer_thematique from "/assets/icons/supprimer_utilisateur.png";
import { themes } from "../../data/themes/themes";

function AdministrateurThematiqueListe({ thematiquesListe }) {
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

  const thematiqueSet = [...new Set(themes.map(theme => theme.category))];

  function NbQuizDansThematique(thematique) {
    return themes.filter(th => th.category === thematique)
  }

  const thematiquesFinal = thematiqueSet.map(thematique => ({
  category: thematique,
  nbQuiz: NbQuizDansThematique(thematique).length
}));


  const themesTries = useMemo(() => {
    if (!tri.colonne) return thematiquesFinal;

    return [...thematiquesFinal].sort((a, b) => {
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


  return (
    <section className="administrateur-liste-thematique-container">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("category")} >Thématique {getSortIcon("category")}</th>
            <th onClick={() => handleSort("nbQuiz")}>Nombre de quiz {getSortIcon("nbQuiz")}</th>
            <th>Modifier</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {themesTries.map((thematique) => (
            <tr key={thematique.id}>
              <td>{thematique.category}</td>
              <td>{thematique.nbQuiz}</td>
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
        Nouvelle thématique
      </button>
    </section>
  );
}

export default AdministrateurThematiqueListe;
