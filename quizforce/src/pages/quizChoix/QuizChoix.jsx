import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const difficulté = ["Tout", "Facile", "Normal", "Avancé", "Expert"];

import img_logique from "/assets/thumbnails_choice/thumbnail_logique.png";
import img_adminsys from "/assets/thumbnails_choice/thumbnail_adminsys.png";
import img_developpement from "/assets/thumbnails_choice/thumbnail_developpement.png";
import img_reseaux from "/assets/thumbnails_choice/thumbnail_reseaux.png";
import img_projet from "/assets/thumbnails_choice/thumbnail_projet.png";
import img_conception from "/assets/thumbnails_choice/thumbnail_conception.png";
import img_ia from "/assets/thumbnails_choice/thumbnail_ia.png";
import img_culture from "/assets/thumbnails_choice/thumbnail_culture.png";
import img_securite from "/assets/thumbnails_choice/thumbnail_securite.png";
import img_data from "/assets/thumbnails_choice/thumbnail_data.png";
import img_juridique from "/assets/thumbnails_choice/thumbnail_juridique.png";
import img_outils from "/assets/thumbnails_choice/thumbnail_outils.png";

const themes = [
  {
    category: "AdminSys",
    id: "linux",
    nb_questions: "70",
    difficulte: "facile",
    label_difficulte: "Facile",
    synopsys: "Testez vos connaissances sur Linux, ses commandes essentielles, son système de fichiers et son fonctionnement au quotidien.",
    label: "Linux",
    icon: "/assets/thumbnails_choice/thumbnail_adminsys.png",
  },
  {
    category: "AdminSys",
    id: "linux_admin",
    nb_questions: "290",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Testez vos connaissances sur Linux, ses commandes essentielles, son système de fichiers et son fonctionnement au quotidien.",
    label: "Linux Admin",
    icon: "/assets/thumbnails_choice/thumbnail_adminsys.png",
  },
  {
    category: "AdminSys",
    icon: "/assets/thumbnails_choice/thumbnail_adminsys.png",
    id: "scriptshell",
    nb_questions: "160",
    difficulte: "facile",
    label_difficulte: "Facile",
    synopsys: "Mettez à l’épreuve votre maîtrise du Shell à travers les commandes, variables, conditions, boucles et automatisations.",
    label: "Scriptshell",
  },
  {
    category: "AdminSys",
    icon: "/assets/thumbnails_choice/thumbnail_adminsys.png",
    id: "securite",
    nb_questions: "100",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Évaluez vos connaissances en sécurité Linux, connexions SSH, authentification, permissions et bonnes pratiques de protection.",
    label: "Sécurité / SSH",
  },
  {
    category: "AdminSys",
    icon: "/assets/thumbnails_choice/thumbnail_adminsys.png",
    id: "postgresql",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Testez votre maîtrise de PostgreSQL, de la gestion des données aux principales fonctionnalités du système de base de données.",
    label: "PostgreSQL",
  },
  {
    category: "AdminSys",
    icon: "/assets/thumbnails_choice/thumbnail_adminsys.png",
    id: "postgresql_dba",
    nb_questions: "195",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Plongez dans l’administration PostgreSQL : utilisateurs, sauvegardes, performances, maintenance, sécurité et supervision.",
    label: "PostgreSQL DBA",
  },
  {
    category: "AdminSys",
    icon: "/assets/thumbnails_choice/thumbnail_adminsys.png",
    id: "linux_scripts",
    nb_questions: "184",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Relevez des défis mêlant administration Linux et scripting Shell pour tester votre maîtrise globale de l’environnement.",
    label: "Linux Scripts",
  },
  {
    category: "AdminSys",
    icon: "/assets/thumbnails_choice/thumbnail_adminsys.png",
    id: "sql",
    nb_questions: "250",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Mettez vos compétences SQL à l’épreuve à travers requêtes, jointures, agrégations, sous-requêtes et manipulation des données.",
    label: "SQL",
  },

  {
    category: "Logique",
    icon: "/assets/thumbnails_choice/thumbnail_logique.png",
    id: "logique",
    nb_questions: "100",
    difficulte: "facile",
    label_difficulte: "Facile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Logique",
  },
  {
    category: "Logique",
    icon: "/assets/thumbnails_choice/thumbnail_logique.png",
    id: "logique_avancee",
    nb_questions: "300",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Logique Avancée",
  },
  {
    category: "Logique",
    icon: "/assets/thumbnails_choice/thumbnail_logique.png",
    id: "logique_expert",
    nb_questions: "300",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Logique Expert",
  },
  {
    category: "Développement",
    icon: "/assets/thumbnails_choice/thumbnail_developpement.png",
    id: "java",
    nb_questions: "100",
    difficulte: "facile",
    label_difficulte: "Facile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Java 1",
  },
  {
    category: "Développement",
    icon: "/assets/thumbnails_choice/thumbnail_developpement.png",
    id: "java_affichage",
    nb_questions: "100",
    difficulte: "facile",
    label_difficulte: "Facile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Java 2",
  },
  {
    category: "Développement",
    icon: "/assets/thumbnails_choice/thumbnail_developpement.png",
    id: "java_avance",
    nb_questions: "276",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Java Avancé",
  },

  {
    category: "Développement",
    icon: "/assets/thumbnails_choice/thumbnail_developpement.png",
    id: "java_expert",
    nb_questions: "300",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Java Mini-TP - Expert",
  },
  {
    category: "Développement",
    icon: "/assets/thumbnails_choice/thumbnail_developpement.png",
    id: "javascript_expert",
    nb_questions: "300",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Javascript Mini-TP - Expert",
  },
  {
    category: "Développement",
    icon: "/assets/thumbnails_choice/thumbnail_developpement.png",
    id: "python_expert",
    nb_questions: "300",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Python Mini-TP - Expert",
  },

  {
    category: "Réseaux",
    icon: "/assets/thumbnails_choice/thumbnail_reseaux.png",
    id: "reseaux",
    nb_questions: "150",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Réseaux",
  },
  {
    category: "Réseaux",
    icon: "/assets/thumbnails_choice/thumbnail_reseaux.png",
    id: "cidr_ipv4_ipv6",
    nb_questions: "300",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "CIDR, Plan d'adressage IPV4 et IPV6",
  },
  {
    category: "Réseaux",
    icon: "/assets/thumbnails_choice/thumbnail_reseaux.png",
    id: "cloud_computing",
    nb_questions: "300",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Cloud computing",
  },
  {
    category: "Réseaux",
    icon: "/assets/thumbnails_choice/thumbnail_reseaux.png",
    id: "modele_osi_dod",
    nb_questions: "300",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Modeles OSI et DOD",
  },
  {
    category: "Réseaux",
    icon: "/assets/thumbnails_choice/thumbnail_reseaux.png",
    id: "typologies_reseaux",
    nb_questions: "300",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Pile TCP/IP, typologies, protocoles et infrastructures réseaux",
  },

  {
    category: "Projet",
    icon: "/assets/thumbnails_choice/thumbnail_projet.png",
    id: "cycle_vie_application",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Cycle de vie d'une application",
  },
  {
    category: "Projet",
    icon: "/assets/thumbnails_choice/thumbnail_projet.png",
    id: "schema_directeur",
    nb_questions: "100",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Schéma Directeur",
  },
  {
    category: "Projet",
    icon: "/assets/thumbnails_choice/thumbnail_projet.png",
    id: "partenaire_projet",
    nb_questions: "75",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Partenaires d'un projet",
  },
  {
    category: "Projet",
    icon: "/assets/thumbnails_choice/thumbnail_projet.png",
    id: "urbanisation_systeme_info",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Urbanisation des SI",
  },
  {
    category: "Projet",
    icon: "/assets/thumbnails_choice/thumbnail_projet.png",
    id: "conduite_projet_info",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Conduite d'un projet informatique",
  },
  {
    category: "Conception",
    icon: "/assets/thumbnails_choice/thumbnail_conception.png",
    id: "concepts_objet",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Concepts Objet",
  },
  {
    category: "Conception",
    icon: "/assets/thumbnails_choice/thumbnail_conception.png",
    id: "merise",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Merise",
  },
  {
    category: "Conception",
    icon: "/assets/thumbnails_choice/thumbnail_conception.png",
    id: "uml",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "UML",
  },
  {
    category: "Conception",
    icon: "/assets/thumbnails_choice/thumbnail_conception.png",
    id: "test",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Programmation de test",
  },
  {
    category: "Conception",
    icon: "/assets/thumbnails_choice/thumbnail_conception.png",
    id: "evolution_language",
    nb_questions: "150",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Évolution des langages de programmation",
  },
  {
    category: "Conception",
    icon: "/assets/thumbnails_choice/thumbnail_conception.png",
    id: "schema_conception",
    nb_questions: "201",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Schéma de Conception",
  },

  {
    category: "Conception",
    icon: "/assets/thumbnails_choice/thumbnail_conception.png",
    id: "merise_exos",
    nb_questions: "300",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Merise cas d'utilisation, états transitions",
  },
  {
    category: "Conception",
    icon: "/assets/thumbnails_choice/thumbnail_conception.png",
    id: "uml_exos",
    nb_questions: "300",
    difficulte: "difficile",
    label_difficulte: "Difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Uml mcd mld exos",
  },
  {
    category: "Conception",
    icon: "/assets/thumbnails_choice/thumbnail_conception.png",
    id: "methodes_analyse",
    nb_questions: "300",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Methodes d'analyse",
  },

  {
    category: "Culture",
    icon: "/assets/thumbnails_choice/thumbnail_culture.png",
    id: "architectures_info",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Architecture Informatique",
  },
  {
    category: "Culture",
    icon: "/assets/thumbnails_choice/thumbnail_culture.png",
    id: "systemes_exploitation",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Systèmes d'exploitation",
  },
  {
    category: "Culture",
    icon: "/assets/thumbnails_choice/thumbnail_culture.png",
    id: "langages_informatiques",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Principaux langages informatiques",
  },

  {
    category: "Outils",
    icon: "/assets/thumbnails_choice/thumbnail_outils.png",
    id: "aide_conception",
    nb_questions: "200",
    difficulte: "difficile",
    label_difficulte: "difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Outils d'aide à la conception",
  },
  {
    category: "Outils",
    icon: "/assets/thumbnails_choice/thumbnail_outils.png",
    id: "aide_realisation",
    nb_questions: "200",
    difficulte: "difficile",
    label_difficulte: "difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Outils d'aide à la réalisation",
  },
  {
    category: "Outils",
    icon: "/assets/thumbnails_choice/thumbnail_outils.png",
    id: "tests_config_deploiement",
    nb_questions: "200",
    difficulte: "difficile",
    label_difficulte: "difficile",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Outils de tests, configuration et déploiement",
  },

  {
    category: "Juridique",
    icon: "/assets/thumbnails_choice/thumbnail_juridique.png",
    id: "communications_electronique",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Cadre juridique des communications électroniques",
  },
  {
    category: "Juridique",
    icon: "/assets/thumbnails_choice/thumbnail_juridique.png",
    id: "droit_informatique",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Droit informatique",
  },
  {
    category: "Juridique",
    icon: "/assets/thumbnails_choice/thumbnail_juridique.png",
    id: "instances_normalisation",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Instances de normalisation",
  },
  {
    category: "Juridique",
    icon: "/assets/thumbnails_choice/thumbnail_juridique.png",
    id: "marches_publics",
    nb_questions: "200",
    difficulte: "normal",
    label_difficulte: "Normal",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Marchés publics",
  },
  {
    category: "Sécurité",
    icon: "/assets/thumbnails_choice/thumbnail_securite.png",
    id: "chiffrement",
    nb_questions: "300",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Chiffrement, certificats, gestion de clés, normes et protocoless",
  },
  {
    category: "Sécurité",
    icon: "/assets/thumbnails_choice/thumbnail_securite.png",
    id: "cybersecurite",
    nb_questions: "300",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Cybersecurite acteurs principes connaissances generales",
  },
  {
    category: "Sécurité",
    icon: "/assets/thumbnails_choice/thumbnail_securite.png",
    id: "authentification",
    nb_questions: "300",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Gestion identite interconnexion authentification forte",
  },
  {
    category: "Sécurité",
    icon: "/assets/thumbnails_choice/thumbnail_securite.png",
    id: "resilience",
    nb_questions: "300",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Resilience pca pra haute disponibilite multisite attaques parades",
  },

  {
    category: "Data",
    icon: "/assets/thumbnails_choice/thumbnail_data.png",
    id: "sauvegarde_archivage",
    nb_questions: "300",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Sauvegarde et archivage mini_tp",
  },

  {
    category: "Data",
    icon: "/assets/thumbnails_choice/thumbnail_data.png",
    id: "exposition_donnees",
    nb_questions: "300",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Exposition des données et open data",
  },

  {
    category: "Data",
    icon: "/assets/thumbnails_choice/thumbnail_data.png",
    id: "nosql",
    nb_questions: "300",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Bases noSQL, principes et usages",
  },

  {
    category: "IA",
    icon: "/assets/thumbnails_choice/thumbnail_ia.png",
    id: "intelligence_artificielle",
    nb_questions: "300",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Lorem Ipsum Magnolia Dex Aeternatos",
    label: "Intelligence Artificielle Généralités",
  },

  {
    category: "AdminSys",
    icon: "/assets/thumbnails_choice/thumbnail_adminsys.png",
    id: "test_fin",
    nb_questions: "3",
    difficulte: "expert",
    label_difficulte: "Expert",
    synopsys: "Test quiz pour vérifier la fin d'un quiz.",
    label: "Test de Fin",
  },
];

function QuizChoix() {
  const [selectedThemes, setSelectedThemes] = useState(themes);
  const [selected, setSelected] = useState(false);

  const navigate = useNavigate();

  const selectionnerTheme = (theme) => {
    console.log("Thème sélectionné :", theme);

    sessionStorage.setItem("themeQuiz", theme);

    navigate("/quiz");
  };

  useEffect(() => {});

  function handleFilterClick(e) {
    const selectedTheme = e.target.previousElementSibling.textContent;
    console.log(selectedTheme);
    const filterTheme = themes.filter((th) => th.category == selectedTheme);
    setSelectedThemes(filterTheme);
    setSelected(true);
  }

  function handleDifficulteClick(e) {
    const selectedDiff = e.target.textContent;
    if (selectedDiff == "Tout") {
      setSelectedThemes(themes);
      setSelected(true);
    } else {
      const filterTheme = themes.filter(
        (th) => th.label_difficulte == selectedDiff,
      );
      setSelectedThemes(filterTheme);
      setSelected(false);
    }
  }

  function handleExitModal() {
    setSelected(false);
  }

  return (
    <main className="quizchoix-page-main">
      <div className="quizchoix-container">
        {/* <h1>Quiz de connaissances techniques</h1>
        <div id="quizchoix-footer">Made by Enkiduh</div> */}
        <section className="quizchoix-section-filter">
          {/* <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            Tout
          </div> */}
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            <img
              src={img_adminsys}
              alt=""
              className="quizchoix-filter-thumbnail"
            />
            <span>AdminSys</span>

            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            <img
              src={img_developpement}
              alt=""
              className="quizchoix-filter-thumbnail"
            />
            <span>Développement</span>
            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            <img
              src={img_conception}
              alt=""
              className="quizchoix-filter-thumbnail"
            />
            <span>Conception</span>
            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            <img
              src={img_projet}
              alt=""
              className="quizchoix-filter-thumbnail"
            />
            <span>Projet</span>
            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            <img
              src={img_logique}
              alt=""
              className="quizchoix-filter-thumbnail"
            />
            <span>Logique</span>
            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            <img
              src={img_reseaux}
              alt=""
              className="quizchoix-filter-thumbnail"
            />
            <span>Réseaux</span>
            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            <img
              src={img_juridique}
              alt=""
              className="quizchoix-filter-thumbnail"
            />
            <span>Juridique</span>
            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            <img
              src={img_securite}
              alt=""
              className="quizchoix-filter-thumbnail"
            />
            <span>Sécurité</span>
            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            <img
              src={img_outils}
              alt=""
              className="quizchoix-filter-thumbnail"
            />
            <span>Outils</span>
            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            <img src={img_data} alt="" className="quizchoix-filter-thumbnail" />
            <span>Data</span>
            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            <img src={img_ia} alt="" className="quizchoix-filter-thumbnail" />
            <span>IA</span>
            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
          >
            <img
              src={img_culture}
              alt=""
              className="quizchoix-filter-thumbnail"
            />
            <span>Culture</span>
            <div
              className="quizchoix-filter-selection"
              onClick={handleFilterClick}
            >
              Sélectionner
            </div>
          </div>
        </section>
        {/* <section className="quizchoix-section-difficulte">
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleDifficulteClick}
          >
            Tout
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleDifficulteClick}
          >
            <div>Facile</div>
            <div className="quizchoix-quiz-filter-vignette-facile filter-vignette"></div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleDifficulteClick}
          >
            <div>Normal</div>
            <div className="quizchoix-quiz-filter-vignette-normal filter-vignette"></div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleDifficulteClick}
          >
            <div>Difficile</div>
            <div className="quizchoix-quiz-filter-vignette-difficile filter-vignette"></div>
          </div>
          <div
            className={`quizchoix-filter ${selected ? "quizchoix-filter-selected" : ""}`}
            onClick={handleDifficulteClick}
          >
            <div>Expert</div>
            <div className="quizchoix-quiz-filter-vignette-expert filter-vignette"></div>
          </div>
        </section> */}
        <div
          // className={`quizchoix-quiz-wrapper  ${selected ? "quizchoix-filter-selected" : ""}`}
          className={`quizchoix-quiz-wrapper  ${selected ? "quizchoix-quiz-wrapper-flex" : "quizchoix-quiz-wrapper-none"}`}
        >
          <div className="quizchoix-quiz-exit-modal" onClick={handleExitModal}>
            X
          </div>

          {selectedThemes.map((theme) => (
            <>
              <button
                key={theme.id}
                type="button"
                className={`quizchoix-quiz quizchoix-quiz-${theme.category}`}
                onClick={() => selectionnerTheme(theme.id)}
                >
                <img src={theme.icon} alt="" className="quizchoix-quiz-img"/>
                <div className="quizchoix-quiz-theme quizchoix-quiz-vignette">
                  {theme.label}
                </div>
                <p className="quizchoix-quiz-description">{theme.synopsys}</p>
                <div className="quizchoix-quiz-highscore">Meilleur score : ??/{theme.nb_questions}</div>
                <div className="quizchoix-quiz-tentative">Derniere tentative : ??/??/??</div>
                <div
                  className={`quizchoix-quiz-diff quizchoix-quiz-vignette-${theme.difficulte}`}
                ></div>
                <div className="quizchoix-quiz-nbquestions">
                  {theme.nb_questions} questions
                </div>
              </button>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}

export default QuizChoix;
