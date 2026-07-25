export const dataQuizz_bases_nosql_principes_usages_tres_difficiles = [
  {
    "id": 1,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn catalogue produit contient des fiches JSON hétérogènes avec attributs variables.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 01\n\nRéférence exercice : NOSQL-001`",
    "reponse_v": "Base orientée documents",
    "reponse_f1": "Base clé-valeur uniquement",
    "reponse_f2": "Base graphe",
    "explication": "Le modèle document convient aux structures JSON semi-structurées."
  },
  {
    "id": 2,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn cache distribué doit retrouver une valeur à partir d'une clé unique.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 02\n\nRéférence exercice : NOSQL-002`",
    "reponse_v": "Base clé-valeur",
    "reponse_f1": "Base graphe",
    "reponse_f2": "Base relationnelle analytique",
    "explication": "Le modèle clé-valeur optimise l'accès direct par clé."
  },
  {
    "id": 3,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn réseau social doit parcourir rapidement des relations d'amis sur plusieurs niveaux.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 03\n\nRéférence exercice : NOSQL-003`",
    "reponse_v": "Base graphe",
    "reponse_f1": "Base orientée colonnes",
    "reponse_f2": "Base clé-valeur",
    "explication": "Les bases graphe optimisent les parcours de relations."
  },
  {
    "id": 4,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne plateforme IoT écrit massivement des séries de mesures réparties par appareil et période.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 04\n\nRéférence exercice : NOSQL-004`",
    "reponse_v": "Base orientée colonnes larges",
    "reponse_f1": "Base graphe",
    "reponse_f2": "Base documentaire sans partitionnement",
    "explication": "Les wide-column stores sont adaptés aux écritures distribuées et accès par clé de partition."
  },
  {
    "id": 5,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne équipe veut faire évoluer le schéma sans migration globale immédiate.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 05\n\nRéférence exercice : NOSQL-005`",
    "reponse_v": "Schéma flexible contrôlé par l'application",
    "reponse_f1": "Absence totale de schéma et de validation",
    "reponse_f2": "Schéma SQL strict obligatoire",
    "explication": "NoSQL permet souvent un schéma flexible, mais pas l'absence de gouvernance."
  },
  {
    "id": 6,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn modèle doit regrouper les données souvent lues ensemble.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 06\n\nRéférence exercice : NOSQL-006`",
    "reponse_v": "Concevoir autour des agrégats et requêtes",
    "reponse_f1": "Normaliser systématiquement au maximum",
    "reponse_f2": "Répartir chaque attribut dans une collection distincte",
    "explication": "La modélisation NoSQL est souvent orientée accès."
  },
  {
    "id": 7,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne application exige des jointures complexes ad hoc.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 07\n\nRéférence exercice : NOSQL-007`",
    "reponse_v": "Un SGBD relationnel peut être plus adapté",
    "reponse_f1": "Une base clé-valeur est toujours idéale",
    "reponse_f2": "Une base graphe remplace toutes les jointures",
    "explication": "Le choix dépend du profil de requêtes."
  },
  {
    "id": 8,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn système doit scaler horizontalement sur plusieurs nœuds.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 08\n\nRéférence exercice : NOSQL-008`",
    "reponse_v": "Partitionnement et réplication",
    "reponse_f1": "Augmenter uniquement la RAM d'un serveur",
    "reponse_f2": "Créer davantage de tables normalisées",
    "explication": "Le scale-out repose sur la distribution des données."
  },
  {
    "id": 9,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne même entité est dupliquée dans plusieurs documents.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 09\n\nRéférence exercice : NOSQL-009`",
    "reponse_v": "Dénormalisation assumée avec gestion de cohérence",
    "reponse_f1": "Erreur toujours interdite",
    "reponse_f2": "Normalisation automatique par la base",
    "explication": "La dénormalisation réduit les lectures au prix de mises à jour plus complexes."
  },
  {
    "id": 10,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn projet utilise plusieurs types de bases selon les besoins.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 10\n\nRéférence exercice : NOSQL-010`",
    "reponse_v": "Polyglot persistence",
    "reponse_f1": "Monolithisme de stockage",
    "reponse_f2": "Normalisation universelle",
    "explication": "Chaque type de base peut répondre à un usage spécifique."
  },
  {
    "id": 11,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn catalogue produit contient des fiches JSON hétérogènes avec attributs variables.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 11\n\nRéférence exercice : NOSQL-011`",
    "reponse_v": "Base orientée documents",
    "reponse_f1": "Base clé-valeur uniquement",
    "reponse_f2": "Base graphe",
    "explication": "Le modèle document convient aux structures JSON semi-structurées."
  },
  {
    "id": 12,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn cache distribué doit retrouver une valeur à partir d'une clé unique.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 12\n\nRéférence exercice : NOSQL-012`",
    "reponse_v": "Base clé-valeur",
    "reponse_f1": "Base graphe",
    "reponse_f2": "Base relationnelle analytique",
    "explication": "Le modèle clé-valeur optimise l'accès direct par clé."
  },
  {
    "id": 13,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn réseau social doit parcourir rapidement des relations d'amis sur plusieurs niveaux.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 13\n\nRéférence exercice : NOSQL-013`",
    "reponse_v": "Base graphe",
    "reponse_f1": "Base orientée colonnes",
    "reponse_f2": "Base clé-valeur",
    "explication": "Les bases graphe optimisent les parcours de relations."
  },
  {
    "id": 14,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne plateforme IoT écrit massivement des séries de mesures réparties par appareil et période.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 14\n\nRéférence exercice : NOSQL-014`",
    "reponse_v": "Base orientée colonnes larges",
    "reponse_f1": "Base graphe",
    "reponse_f2": "Base documentaire sans partitionnement",
    "explication": "Les wide-column stores sont adaptés aux écritures distribuées et accès par clé de partition."
  },
  {
    "id": 15,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne équipe veut faire évoluer le schéma sans migration globale immédiate.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 15\n\nRéférence exercice : NOSQL-015`",
    "reponse_v": "Schéma flexible contrôlé par l'application",
    "reponse_f1": "Absence totale de schéma et de validation",
    "reponse_f2": "Schéma SQL strict obligatoire",
    "explication": "NoSQL permet souvent un schéma flexible, mais pas l'absence de gouvernance."
  },
  {
    "id": 16,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn modèle doit regrouper les données souvent lues ensemble.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 16\n\nRéférence exercice : NOSQL-016`",
    "reponse_v": "Concevoir autour des agrégats et requêtes",
    "reponse_f1": "Normaliser systématiquement au maximum",
    "reponse_f2": "Répartir chaque attribut dans une collection distincte",
    "explication": "La modélisation NoSQL est souvent orientée accès."
  },
  {
    "id": 17,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne application exige des jointures complexes ad hoc.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 17\n\nRéférence exercice : NOSQL-017`",
    "reponse_v": "Un SGBD relationnel peut être plus adapté",
    "reponse_f1": "Une base clé-valeur est toujours idéale",
    "reponse_f2": "Une base graphe remplace toutes les jointures",
    "explication": "Le choix dépend du profil de requêtes."
  },
  {
    "id": 18,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn système doit scaler horizontalement sur plusieurs nœuds.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 18\n\nRéférence exercice : NOSQL-018`",
    "reponse_v": "Partitionnement et réplication",
    "reponse_f1": "Augmenter uniquement la RAM d'un serveur",
    "reponse_f2": "Créer davantage de tables normalisées",
    "explication": "Le scale-out repose sur la distribution des données."
  },
  {
    "id": 19,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne même entité est dupliquée dans plusieurs documents.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 19\n\nRéférence exercice : NOSQL-019`",
    "reponse_v": "Dénormalisation assumée avec gestion de cohérence",
    "reponse_f1": "Erreur toujours interdite",
    "reponse_f2": "Normalisation automatique par la base",
    "explication": "La dénormalisation réduit les lectures au prix de mises à jour plus complexes."
  },
  {
    "id": 20,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn projet utilise plusieurs types de bases selon les besoins.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 20\n\nRéférence exercice : NOSQL-020`",
    "reponse_v": "Polyglot persistence",
    "reponse_f1": "Monolithisme de stockage",
    "reponse_f2": "Normalisation universelle",
    "explication": "Chaque type de base peut répondre à un usage spécifique."
  },
  {
    "id": 21,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn catalogue produit contient des fiches JSON hétérogènes avec attributs variables.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 21\n\nRéférence exercice : NOSQL-021`",
    "reponse_v": "Base orientée documents",
    "reponse_f1": "Base clé-valeur uniquement",
    "reponse_f2": "Base graphe",
    "explication": "Le modèle document convient aux structures JSON semi-structurées."
  },
  {
    "id": 22,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn cache distribué doit retrouver une valeur à partir d'une clé unique.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 22\n\nRéférence exercice : NOSQL-022`",
    "reponse_v": "Base clé-valeur",
    "reponse_f1": "Base graphe",
    "reponse_f2": "Base relationnelle analytique",
    "explication": "Le modèle clé-valeur optimise l'accès direct par clé."
  },
  {
    "id": 23,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn réseau social doit parcourir rapidement des relations d'amis sur plusieurs niveaux.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 23\n\nRéférence exercice : NOSQL-023`",
    "reponse_v": "Base graphe",
    "reponse_f1": "Base orientée colonnes",
    "reponse_f2": "Base clé-valeur",
    "explication": "Les bases graphe optimisent les parcours de relations."
  },
  {
    "id": 24,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne plateforme IoT écrit massivement des séries de mesures réparties par appareil et période.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 24\n\nRéférence exercice : NOSQL-024`",
    "reponse_v": "Base orientée colonnes larges",
    "reponse_f1": "Base graphe",
    "reponse_f2": "Base documentaire sans partitionnement",
    "explication": "Les wide-column stores sont adaptés aux écritures distribuées et accès par clé de partition."
  },
  {
    "id": 25,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne équipe veut faire évoluer le schéma sans migration globale immédiate.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 25\n\nRéférence exercice : NOSQL-025`",
    "reponse_v": "Schéma flexible contrôlé par l'application",
    "reponse_f1": "Absence totale de schéma et de validation",
    "reponse_f2": "Schéma SQL strict obligatoire",
    "explication": "NoSQL permet souvent un schéma flexible, mais pas l'absence de gouvernance."
  },
  {
    "id": 26,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn modèle doit regrouper les données souvent lues ensemble.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 26\n\nRéférence exercice : NOSQL-026`",
    "reponse_v": "Concevoir autour des agrégats et requêtes",
    "reponse_f1": "Normaliser systématiquement au maximum",
    "reponse_f2": "Répartir chaque attribut dans une collection distincte",
    "explication": "La modélisation NoSQL est souvent orientée accès."
  },
  {
    "id": 27,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne application exige des jointures complexes ad hoc.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 27\n\nRéférence exercice : NOSQL-027`",
    "reponse_v": "Un SGBD relationnel peut être plus adapté",
    "reponse_f1": "Une base clé-valeur est toujours idéale",
    "reponse_f2": "Une base graphe remplace toutes les jointures",
    "explication": "Le choix dépend du profil de requêtes."
  },
  {
    "id": 28,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn système doit scaler horizontalement sur plusieurs nœuds.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 28\n\nRéférence exercice : NOSQL-028`",
    "reponse_v": "Partitionnement et réplication",
    "reponse_f1": "Augmenter uniquement la RAM d'un serveur",
    "reponse_f2": "Créer davantage de tables normalisées",
    "explication": "Le scale-out repose sur la distribution des données."
  },
  {
    "id": 29,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne même entité est dupliquée dans plusieurs documents.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 29\n\nRéférence exercice : NOSQL-029`",
    "reponse_v": "Dénormalisation assumée avec gestion de cohérence",
    "reponse_f1": "Erreur toujours interdite",
    "reponse_f2": "Normalisation automatique par la base",
    "explication": "La dénormalisation réduit les lectures au prix de mises à jour plus complexes."
  },
  {
    "id": 30,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn projet utilise plusieurs types de bases selon les besoins.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 30\n\nRéférence exercice : NOSQL-030`",
    "reponse_v": "Polyglot persistence",
    "reponse_f1": "Monolithisme de stockage",
    "reponse_f2": "Normalisation universelle",
    "explication": "Chaque type de base peut répondre à un usage spécifique."
  },
  {
    "id": 31,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn catalogue produit contient des fiches JSON hétérogènes avec attributs variables.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 31\n\nRéférence exercice : NOSQL-031`",
    "reponse_v": "Base orientée documents",
    "reponse_f1": "Base clé-valeur uniquement",
    "reponse_f2": "Base graphe",
    "explication": "Le modèle document convient aux structures JSON semi-structurées."
  },
  {
    "id": 32,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn cache distribué doit retrouver une valeur à partir d'une clé unique.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 32\n\nRéférence exercice : NOSQL-032`",
    "reponse_v": "Base clé-valeur",
    "reponse_f1": "Base graphe",
    "reponse_f2": "Base relationnelle analytique",
    "explication": "Le modèle clé-valeur optimise l'accès direct par clé."
  },
  {
    "id": 33,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn réseau social doit parcourir rapidement des relations d'amis sur plusieurs niveaux.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 33\n\nRéférence exercice : NOSQL-033`",
    "reponse_v": "Base graphe",
    "reponse_f1": "Base orientée colonnes",
    "reponse_f2": "Base clé-valeur",
    "explication": "Les bases graphe optimisent les parcours de relations."
  },
  {
    "id": 34,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne plateforme IoT écrit massivement des séries de mesures réparties par appareil et période.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 34\n\nRéférence exercice : NOSQL-034`",
    "reponse_v": "Base orientée colonnes larges",
    "reponse_f1": "Base graphe",
    "reponse_f2": "Base documentaire sans partitionnement",
    "explication": "Les wide-column stores sont adaptés aux écritures distribuées et accès par clé de partition."
  },
  {
    "id": 35,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne équipe veut faire évoluer le schéma sans migration globale immédiate.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 35\n\nRéférence exercice : NOSQL-035`",
    "reponse_v": "Schéma flexible contrôlé par l'application",
    "reponse_f1": "Absence totale de schéma et de validation",
    "reponse_f2": "Schéma SQL strict obligatoire",
    "explication": "NoSQL permet souvent un schéma flexible, mais pas l'absence de gouvernance."
  },
  {
    "id": 36,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn modèle doit regrouper les données souvent lues ensemble.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 36\n\nRéférence exercice : NOSQL-036`",
    "reponse_v": "Concevoir autour des agrégats et requêtes",
    "reponse_f1": "Normaliser systématiquement au maximum",
    "reponse_f2": "Répartir chaque attribut dans une collection distincte",
    "explication": "La modélisation NoSQL est souvent orientée accès."
  },
  {
    "id": 37,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne application exige des jointures complexes ad hoc.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 37\n\nRéférence exercice : NOSQL-037`",
    "reponse_v": "Un SGBD relationnel peut être plus adapté",
    "reponse_f1": "Une base clé-valeur est toujours idéale",
    "reponse_f2": "Une base graphe remplace toutes les jointures",
    "explication": "Le choix dépend du profil de requêtes."
  },
  {
    "id": 38,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn système doit scaler horizontalement sur plusieurs nœuds.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 38\n\nRéférence exercice : NOSQL-038`",
    "reponse_v": "Partitionnement et réplication",
    "reponse_f1": "Augmenter uniquement la RAM d'un serveur",
    "reponse_f2": "Créer davantage de tables normalisées",
    "explication": "Le scale-out repose sur la distribution des données."
  },
  {
    "id": 39,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne même entité est dupliquée dans plusieurs documents.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 39\n\nRéférence exercice : NOSQL-039`",
    "reponse_v": "Dénormalisation assumée avec gestion de cohérence",
    "reponse_f1": "Erreur toujours interdite",
    "reponse_f2": "Normalisation automatique par la base",
    "explication": "La dénormalisation réduit les lectures au prix de mises à jour plus complexes."
  },
  {
    "id": 40,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn projet utilise plusieurs types de bases selon les besoins.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 40\n\nRéférence exercice : NOSQL-040`",
    "reponse_v": "Polyglot persistence",
    "reponse_f1": "Monolithisme de stockage",
    "reponse_f2": "Normalisation universelle",
    "explication": "Chaque type de base peut répondre à un usage spécifique."
  },
  {
    "id": 41,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn catalogue produit contient des fiches JSON hétérogènes avec attributs variables.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 41\n\nRéférence exercice : NOSQL-041`",
    "reponse_v": "Base orientée documents",
    "reponse_f1": "Base clé-valeur uniquement",
    "reponse_f2": "Base graphe",
    "explication": "Le modèle document convient aux structures JSON semi-structurées."
  },
  {
    "id": 42,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn cache distribué doit retrouver une valeur à partir d'une clé unique.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 42\n\nRéférence exercice : NOSQL-042`",
    "reponse_v": "Base clé-valeur",
    "reponse_f1": "Base graphe",
    "reponse_f2": "Base relationnelle analytique",
    "explication": "Le modèle clé-valeur optimise l'accès direct par clé."
  },
  {
    "id": 43,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn réseau social doit parcourir rapidement des relations d'amis sur plusieurs niveaux.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 43\n\nRéférence exercice : NOSQL-043`",
    "reponse_v": "Base graphe",
    "reponse_f1": "Base orientée colonnes",
    "reponse_f2": "Base clé-valeur",
    "explication": "Les bases graphe optimisent les parcours de relations."
  },
  {
    "id": 44,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne plateforme IoT écrit massivement des séries de mesures réparties par appareil et période.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 44\n\nRéférence exercice : NOSQL-044`",
    "reponse_v": "Base orientée colonnes larges",
    "reponse_f1": "Base graphe",
    "reponse_f2": "Base documentaire sans partitionnement",
    "explication": "Les wide-column stores sont adaptés aux écritures distribuées et accès par clé de partition."
  },
  {
    "id": 45,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne équipe veut faire évoluer le schéma sans migration globale immédiate.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 45\n\nRéférence exercice : NOSQL-045`",
    "reponse_v": "Schéma flexible contrôlé par l'application",
    "reponse_f1": "Absence totale de schéma et de validation",
    "reponse_f2": "Schéma SQL strict obligatoire",
    "explication": "NoSQL permet souvent un schéma flexible, mais pas l'absence de gouvernance."
  },
  {
    "id": 46,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn modèle doit regrouper les données souvent lues ensemble.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 46\n\nRéférence exercice : NOSQL-046`",
    "reponse_v": "Concevoir autour des agrégats et requêtes",
    "reponse_f1": "Normaliser systématiquement au maximum",
    "reponse_f2": "Répartir chaque attribut dans une collection distincte",
    "explication": "La modélisation NoSQL est souvent orientée accès."
  },
  {
    "id": 47,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne application exige des jointures complexes ad hoc.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 47\n\nRéférence exercice : NOSQL-047`",
    "reponse_v": "Un SGBD relationnel peut être plus adapté",
    "reponse_f1": "Une base clé-valeur est toujours idéale",
    "reponse_f2": "Une base graphe remplace toutes les jointures",
    "explication": "Le choix dépend du profil de requêtes."
  },
  {
    "id": 48,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn système doit scaler horizontalement sur plusieurs nœuds.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 48\n\nRéférence exercice : NOSQL-048`",
    "reponse_v": "Partitionnement et réplication",
    "reponse_f1": "Augmenter uniquement la RAM d'un serveur",
    "reponse_f2": "Créer davantage de tables normalisées",
    "explication": "Le scale-out repose sur la distribution des données."
  },
  {
    "id": 49,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUne même entité est dupliquée dans plusieurs documents.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 49\n\nRéférence exercice : NOSQL-049`",
    "reponse_v": "Dénormalisation assumée avec gestion de cohérence",
    "reponse_f1": "Erreur toujours interdite",
    "reponse_f2": "Normalisation automatique par la base",
    "explication": "La dénormalisation réduit les lectures au prix de mises à jour plus complexes."
  },
  {
    "id": 50,
    "question": "`Mini-TP NoSQL — principes et usages\n\nSituation :\nUn projet utilise plusieurs types de bases selon les besoins.\n\nQuelle analyse est la plus correcte ?\n\nCas principes : 50\n\nRéférence exercice : NOSQL-050`",
    "reponse_v": "Polyglot persistence",
    "reponse_f1": "Monolithisme de stockage",
    "reponse_f2": "Normalisation universelle",
    "explication": "Chaque type de base peut répondre à un usage spécifique."
  },
  {
    "id": 51,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nPendant une partition réseau, le système continue de répondre quitte à retourner une donnée ancienne.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 01\n\nRéférence exercice : NOSQL-051`",
    "reponse_v": "Privilégier disponibilité et tolérance au partitionnement",
    "reponse_f1": "Privilégier cohérence forte et arrêt des requêtes",
    "reponse_f2": "Garantir simultanément C, A et P sans compromis",
    "explication": "Sous partition, un système distribué doit arbitrer entre cohérence et disponibilité."
  },
  {
    "id": 52,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne lecture doit toujours refléter la dernière écriture validée.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 02\n\nRéférence exercice : NOSQL-052`",
    "reponse_v": "Cohérence forte",
    "reponse_f1": "Cohérence éventuelle",
    "reponse_f2": "Lecture monotone seulement",
    "explication": "La cohérence forte vise une vision immédiatement à jour."
  },
  {
    "id": 53,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nLes réplicas convergent après propagation asynchrone.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 03\n\nRéférence exercice : NOSQL-053`",
    "reponse_v": "Cohérence éventuelle",
    "reponse_f1": "Cohérence linéarisable",
    "reponse_f2": "Absence de réplication",
    "explication": "La cohérence éventuelle accepte un délai de convergence."
  },
  {
    "id": 54,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn client ne doit jamais relire une version plus ancienne que celle déjà observée.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 04\n\nRéférence exercice : NOSQL-054`",
    "reponse_v": "Lecture monotone",
    "reponse_f1": "Read your writes",
    "reponse_f2": "Écriture aveugle",
    "explication": "La lecture monotone garantit une progression non régressive."
  },
  {
    "id": 55,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn client doit retrouver immédiatement ses propres écritures.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 05\n\nRéférence exercice : NOSQL-055`",
    "reponse_v": "Read your writes",
    "reponse_f1": "Lecture monotone globale",
    "reponse_f2": "Eventual consistency sans garantie de session",
    "explication": "Cette garantie est centrée sur la session du client."
  },
  {
    "id": 56,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn quorum de lecture R et d'écriture W vérifie R+W>N.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 06\n\nRéférence exercice : NOSQL-056`",
    "reponse_v": "Les lectures et écritures ont un chevauchement de quorum",
    "reponse_f1": "La réplication est désactivée",
    "reponse_f2": "Toute partition devient impossible",
    "explication": "Le chevauchement augmente la probabilité de lire la dernière version."
  },
  {
    "id": 57,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nDeux réplicas acceptent des écritures concurrentes.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 07\n\nRéférence exercice : NOSQL-057`",
    "reponse_v": "Il faut une stratégie de résolution de conflits",
    "reponse_f1": "Le dernier serveur démarré gagne toujours",
    "reponse_f2": "Les conflits sont impossibles",
    "explication": "Les systèmes multi-maîtres doivent gérer les écritures concurrentes."
  },
  {
    "id": 58,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne horloge vectorielle est associée aux versions.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 08\n\nRéférence exercice : NOSQL-058`",
    "reponse_v": "Elle aide à détecter causalité et concurrence",
    "reponse_f1": "Elle remplace le partitionnement",
    "reponse_f2": "Elle garantit une horloge physique parfaite",
    "explication": "Les vector clocks distinguent versions causales et concurrentes."
  },
  {
    "id": 59,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne réplication synchrone est choisie.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 09\n\nRéférence exercice : NOSQL-059`",
    "reponse_v": "Latence d'écriture plus élevée mais cohérence renforcée",
    "reponse_f1": "Écritures toujours plus rapides",
    "reponse_f2": "Aucune dépendance aux réplicas",
    "explication": "Le commit attend plusieurs nœuds."
  },
  {
    "id": 60,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne réplication asynchrone est choisie.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 10\n\nRéférence exercice : NOSQL-060`",
    "reponse_v": "Risque de perte récente en cas de panne avant réplication",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Toutes les lectures sont fortes",
    "explication": "La propagation différée crée une fenêtre de risque."
  },
  {
    "id": 61,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nPendant une partition réseau, le système continue de répondre quitte à retourner une donnée ancienne.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 11\n\nRéférence exercice : NOSQL-061`",
    "reponse_v": "Privilégier disponibilité et tolérance au partitionnement",
    "reponse_f1": "Privilégier cohérence forte et arrêt des requêtes",
    "reponse_f2": "Garantir simultanément C, A et P sans compromis",
    "explication": "Sous partition, un système distribué doit arbitrer entre cohérence et disponibilité."
  },
  {
    "id": 62,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne lecture doit toujours refléter la dernière écriture validée.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 12\n\nRéférence exercice : NOSQL-062`",
    "reponse_v": "Cohérence forte",
    "reponse_f1": "Cohérence éventuelle",
    "reponse_f2": "Lecture monotone seulement",
    "explication": "La cohérence forte vise une vision immédiatement à jour."
  },
  {
    "id": 63,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nLes réplicas convergent après propagation asynchrone.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 13\n\nRéférence exercice : NOSQL-063`",
    "reponse_v": "Cohérence éventuelle",
    "reponse_f1": "Cohérence linéarisable",
    "reponse_f2": "Absence de réplication",
    "explication": "La cohérence éventuelle accepte un délai de convergence."
  },
  {
    "id": 64,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn client ne doit jamais relire une version plus ancienne que celle déjà observée.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 14\n\nRéférence exercice : NOSQL-064`",
    "reponse_v": "Lecture monotone",
    "reponse_f1": "Read your writes",
    "reponse_f2": "Écriture aveugle",
    "explication": "La lecture monotone garantit une progression non régressive."
  },
  {
    "id": 65,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn client doit retrouver immédiatement ses propres écritures.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 15\n\nRéférence exercice : NOSQL-065`",
    "reponse_v": "Read your writes",
    "reponse_f1": "Lecture monotone globale",
    "reponse_f2": "Eventual consistency sans garantie de session",
    "explication": "Cette garantie est centrée sur la session du client."
  },
  {
    "id": 66,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn quorum de lecture R et d'écriture W vérifie R+W>N.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 16\n\nRéférence exercice : NOSQL-066`",
    "reponse_v": "Les lectures et écritures ont un chevauchement de quorum",
    "reponse_f1": "La réplication est désactivée",
    "reponse_f2": "Toute partition devient impossible",
    "explication": "Le chevauchement augmente la probabilité de lire la dernière version."
  },
  {
    "id": 67,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nDeux réplicas acceptent des écritures concurrentes.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 17\n\nRéférence exercice : NOSQL-067`",
    "reponse_v": "Il faut une stratégie de résolution de conflits",
    "reponse_f1": "Le dernier serveur démarré gagne toujours",
    "reponse_f2": "Les conflits sont impossibles",
    "explication": "Les systèmes multi-maîtres doivent gérer les écritures concurrentes."
  },
  {
    "id": 68,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne horloge vectorielle est associée aux versions.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 18\n\nRéférence exercice : NOSQL-068`",
    "reponse_v": "Elle aide à détecter causalité et concurrence",
    "reponse_f1": "Elle remplace le partitionnement",
    "reponse_f2": "Elle garantit une horloge physique parfaite",
    "explication": "Les vector clocks distinguent versions causales et concurrentes."
  },
  {
    "id": 69,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne réplication synchrone est choisie.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 19\n\nRéférence exercice : NOSQL-069`",
    "reponse_v": "Latence d'écriture plus élevée mais cohérence renforcée",
    "reponse_f1": "Écritures toujours plus rapides",
    "reponse_f2": "Aucune dépendance aux réplicas",
    "explication": "Le commit attend plusieurs nœuds."
  },
  {
    "id": 70,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne réplication asynchrone est choisie.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 20\n\nRéférence exercice : NOSQL-070`",
    "reponse_v": "Risque de perte récente en cas de panne avant réplication",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Toutes les lectures sont fortes",
    "explication": "La propagation différée crée une fenêtre de risque."
  },
  {
    "id": 71,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nPendant une partition réseau, le système continue de répondre quitte à retourner une donnée ancienne.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 21\n\nRéférence exercice : NOSQL-071`",
    "reponse_v": "Privilégier disponibilité et tolérance au partitionnement",
    "reponse_f1": "Privilégier cohérence forte et arrêt des requêtes",
    "reponse_f2": "Garantir simultanément C, A et P sans compromis",
    "explication": "Sous partition, un système distribué doit arbitrer entre cohérence et disponibilité."
  },
  {
    "id": 72,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne lecture doit toujours refléter la dernière écriture validée.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 22\n\nRéférence exercice : NOSQL-072`",
    "reponse_v": "Cohérence forte",
    "reponse_f1": "Cohérence éventuelle",
    "reponse_f2": "Lecture monotone seulement",
    "explication": "La cohérence forte vise une vision immédiatement à jour."
  },
  {
    "id": 73,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nLes réplicas convergent après propagation asynchrone.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 23\n\nRéférence exercice : NOSQL-073`",
    "reponse_v": "Cohérence éventuelle",
    "reponse_f1": "Cohérence linéarisable",
    "reponse_f2": "Absence de réplication",
    "explication": "La cohérence éventuelle accepte un délai de convergence."
  },
  {
    "id": 74,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn client ne doit jamais relire une version plus ancienne que celle déjà observée.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 24\n\nRéférence exercice : NOSQL-074`",
    "reponse_v": "Lecture monotone",
    "reponse_f1": "Read your writes",
    "reponse_f2": "Écriture aveugle",
    "explication": "La lecture monotone garantit une progression non régressive."
  },
  {
    "id": 75,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn client doit retrouver immédiatement ses propres écritures.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 25\n\nRéférence exercice : NOSQL-075`",
    "reponse_v": "Read your writes",
    "reponse_f1": "Lecture monotone globale",
    "reponse_f2": "Eventual consistency sans garantie de session",
    "explication": "Cette garantie est centrée sur la session du client."
  },
  {
    "id": 76,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn quorum de lecture R et d'écriture W vérifie R+W>N.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 26\n\nRéférence exercice : NOSQL-076`",
    "reponse_v": "Les lectures et écritures ont un chevauchement de quorum",
    "reponse_f1": "La réplication est désactivée",
    "reponse_f2": "Toute partition devient impossible",
    "explication": "Le chevauchement augmente la probabilité de lire la dernière version."
  },
  {
    "id": 77,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nDeux réplicas acceptent des écritures concurrentes.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 27\n\nRéférence exercice : NOSQL-077`",
    "reponse_v": "Il faut une stratégie de résolution de conflits",
    "reponse_f1": "Le dernier serveur démarré gagne toujours",
    "reponse_f2": "Les conflits sont impossibles",
    "explication": "Les systèmes multi-maîtres doivent gérer les écritures concurrentes."
  },
  {
    "id": 78,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne horloge vectorielle est associée aux versions.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 28\n\nRéférence exercice : NOSQL-078`",
    "reponse_v": "Elle aide à détecter causalité et concurrence",
    "reponse_f1": "Elle remplace le partitionnement",
    "reponse_f2": "Elle garantit une horloge physique parfaite",
    "explication": "Les vector clocks distinguent versions causales et concurrentes."
  },
  {
    "id": 79,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne réplication synchrone est choisie.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 29\n\nRéférence exercice : NOSQL-079`",
    "reponse_v": "Latence d'écriture plus élevée mais cohérence renforcée",
    "reponse_f1": "Écritures toujours plus rapides",
    "reponse_f2": "Aucune dépendance aux réplicas",
    "explication": "Le commit attend plusieurs nœuds."
  },
  {
    "id": 80,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne réplication asynchrone est choisie.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 30\n\nRéférence exercice : NOSQL-080`",
    "reponse_v": "Risque de perte récente en cas de panne avant réplication",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Toutes les lectures sont fortes",
    "explication": "La propagation différée crée une fenêtre de risque."
  },
  {
    "id": 81,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nPendant une partition réseau, le système continue de répondre quitte à retourner une donnée ancienne.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 31\n\nRéférence exercice : NOSQL-081`",
    "reponse_v": "Privilégier disponibilité et tolérance au partitionnement",
    "reponse_f1": "Privilégier cohérence forte et arrêt des requêtes",
    "reponse_f2": "Garantir simultanément C, A et P sans compromis",
    "explication": "Sous partition, un système distribué doit arbitrer entre cohérence et disponibilité."
  },
  {
    "id": 82,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne lecture doit toujours refléter la dernière écriture validée.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 32\n\nRéférence exercice : NOSQL-082`",
    "reponse_v": "Cohérence forte",
    "reponse_f1": "Cohérence éventuelle",
    "reponse_f2": "Lecture monotone seulement",
    "explication": "La cohérence forte vise une vision immédiatement à jour."
  },
  {
    "id": 83,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nLes réplicas convergent après propagation asynchrone.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 33\n\nRéférence exercice : NOSQL-083`",
    "reponse_v": "Cohérence éventuelle",
    "reponse_f1": "Cohérence linéarisable",
    "reponse_f2": "Absence de réplication",
    "explication": "La cohérence éventuelle accepte un délai de convergence."
  },
  {
    "id": 84,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn client ne doit jamais relire une version plus ancienne que celle déjà observée.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 34\n\nRéférence exercice : NOSQL-084`",
    "reponse_v": "Lecture monotone",
    "reponse_f1": "Read your writes",
    "reponse_f2": "Écriture aveugle",
    "explication": "La lecture monotone garantit une progression non régressive."
  },
  {
    "id": 85,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn client doit retrouver immédiatement ses propres écritures.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 35\n\nRéférence exercice : NOSQL-085`",
    "reponse_v": "Read your writes",
    "reponse_f1": "Lecture monotone globale",
    "reponse_f2": "Eventual consistency sans garantie de session",
    "explication": "Cette garantie est centrée sur la session du client."
  },
  {
    "id": 86,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn quorum de lecture R et d'écriture W vérifie R+W>N.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 36\n\nRéférence exercice : NOSQL-086`",
    "reponse_v": "Les lectures et écritures ont un chevauchement de quorum",
    "reponse_f1": "La réplication est désactivée",
    "reponse_f2": "Toute partition devient impossible",
    "explication": "Le chevauchement augmente la probabilité de lire la dernière version."
  },
  {
    "id": 87,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nDeux réplicas acceptent des écritures concurrentes.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 37\n\nRéférence exercice : NOSQL-087`",
    "reponse_v": "Il faut une stratégie de résolution de conflits",
    "reponse_f1": "Le dernier serveur démarré gagne toujours",
    "reponse_f2": "Les conflits sont impossibles",
    "explication": "Les systèmes multi-maîtres doivent gérer les écritures concurrentes."
  },
  {
    "id": 88,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne horloge vectorielle est associée aux versions.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 38\n\nRéférence exercice : NOSQL-088`",
    "reponse_v": "Elle aide à détecter causalité et concurrence",
    "reponse_f1": "Elle remplace le partitionnement",
    "reponse_f2": "Elle garantit une horloge physique parfaite",
    "explication": "Les vector clocks distinguent versions causales et concurrentes."
  },
  {
    "id": 89,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne réplication synchrone est choisie.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 39\n\nRéférence exercice : NOSQL-089`",
    "reponse_v": "Latence d'écriture plus élevée mais cohérence renforcée",
    "reponse_f1": "Écritures toujours plus rapides",
    "reponse_f2": "Aucune dépendance aux réplicas",
    "explication": "Le commit attend plusieurs nœuds."
  },
  {
    "id": 90,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne réplication asynchrone est choisie.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 40\n\nRéférence exercice : NOSQL-090`",
    "reponse_v": "Risque de perte récente en cas de panne avant réplication",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Toutes les lectures sont fortes",
    "explication": "La propagation différée crée une fenêtre de risque."
  },
  {
    "id": 91,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nPendant une partition réseau, le système continue de répondre quitte à retourner une donnée ancienne.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 41\n\nRéférence exercice : NOSQL-091`",
    "reponse_v": "Privilégier disponibilité et tolérance au partitionnement",
    "reponse_f1": "Privilégier cohérence forte et arrêt des requêtes",
    "reponse_f2": "Garantir simultanément C, A et P sans compromis",
    "explication": "Sous partition, un système distribué doit arbitrer entre cohérence et disponibilité."
  },
  {
    "id": 92,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne lecture doit toujours refléter la dernière écriture validée.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 42\n\nRéférence exercice : NOSQL-092`",
    "reponse_v": "Cohérence forte",
    "reponse_f1": "Cohérence éventuelle",
    "reponse_f2": "Lecture monotone seulement",
    "explication": "La cohérence forte vise une vision immédiatement à jour."
  },
  {
    "id": 93,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nLes réplicas convergent après propagation asynchrone.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 43\n\nRéférence exercice : NOSQL-093`",
    "reponse_v": "Cohérence éventuelle",
    "reponse_f1": "Cohérence linéarisable",
    "reponse_f2": "Absence de réplication",
    "explication": "La cohérence éventuelle accepte un délai de convergence."
  },
  {
    "id": 94,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn client ne doit jamais relire une version plus ancienne que celle déjà observée.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 44\n\nRéférence exercice : NOSQL-094`",
    "reponse_v": "Lecture monotone",
    "reponse_f1": "Read your writes",
    "reponse_f2": "Écriture aveugle",
    "explication": "La lecture monotone garantit une progression non régressive."
  },
  {
    "id": 95,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn client doit retrouver immédiatement ses propres écritures.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 45\n\nRéférence exercice : NOSQL-095`",
    "reponse_v": "Read your writes",
    "reponse_f1": "Lecture monotone globale",
    "reponse_f2": "Eventual consistency sans garantie de session",
    "explication": "Cette garantie est centrée sur la session du client."
  },
  {
    "id": 96,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUn quorum de lecture R et d'écriture W vérifie R+W>N.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 46\n\nRéférence exercice : NOSQL-096`",
    "reponse_v": "Les lectures et écritures ont un chevauchement de quorum",
    "reponse_f1": "La réplication est désactivée",
    "reponse_f2": "Toute partition devient impossible",
    "explication": "Le chevauchement augmente la probabilité de lire la dernière version."
  },
  {
    "id": 97,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nDeux réplicas acceptent des écritures concurrentes.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 47\n\nRéférence exercice : NOSQL-097`",
    "reponse_v": "Il faut une stratégie de résolution de conflits",
    "reponse_f1": "Le dernier serveur démarré gagne toujours",
    "reponse_f2": "Les conflits sont impossibles",
    "explication": "Les systèmes multi-maîtres doivent gérer les écritures concurrentes."
  },
  {
    "id": 98,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne horloge vectorielle est associée aux versions.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 48\n\nRéférence exercice : NOSQL-098`",
    "reponse_v": "Elle aide à détecter causalité et concurrence",
    "reponse_f1": "Elle remplace le partitionnement",
    "reponse_f2": "Elle garantit une horloge physique parfaite",
    "explication": "Les vector clocks distinguent versions causales et concurrentes."
  },
  {
    "id": 99,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne réplication synchrone est choisie.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 49\n\nRéférence exercice : NOSQL-099`",
    "reponse_v": "Latence d'écriture plus élevée mais cohérence renforcée",
    "reponse_f1": "Écritures toujours plus rapides",
    "reponse_f2": "Aucune dépendance aux réplicas",
    "explication": "Le commit attend plusieurs nœuds."
  },
  {
    "id": 100,
    "question": "`Mini-TP NoSQL — CAP et cohérence\n\nSituation :\nUne réplication asynchrone est choisie.\n\nQuelle propriété ou conséquence est correcte ?\n\nCas cohérence : 50\n\nRéférence exercice : NOSQL-100`",
    "reponse_v": "Risque de perte récente en cas de panne avant réplication",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Toutes les lectures sont fortes",
    "explication": "La propagation différée crée une fenêtre de risque."
  },
  {
    "id": 101,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nToutes les écritures utilisent la même clé de partition.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 01\n\nRéférence exercice : NOSQL-101`",
    "reponse_v": "Création d'un hotspot",
    "reponse_f1": "Répartition uniforme garantie",
    "reponse_f2": "Suppression automatique du shard",
    "explication": "Une clé peu variée concentre la charge."
  },
  {
    "id": 102,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nLes données sont réparties par hachage de clé.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 02\n\nRéférence exercice : NOSQL-102`",
    "reponse_v": "Bonne distribution mais scans par plage moins naturels",
    "reponse_f1": "Ordre naturel parfait des clés",
    "reponse_f2": "Un seul shard utilisé",
    "explication": "Le hachage équilibre mais détruit l'ordre."
  },
  {
    "id": 103,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nLes données sont partitionnées par plage de dates.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 03\n\nRéférence exercice : NOSQL-103`",
    "reponse_v": "Requêtes temporelles efficaces mais risque de hotspot sur la période courante",
    "reponse_f1": "Distribution toujours uniforme",
    "reponse_f2": "Aucune nécessité de rééquilibrage",
    "explication": "Les écritures récentes peuvent cibler la même partition."
  },
  {
    "id": 104,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn nœud rejoint le cluster avec consistent hashing.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 04\n\nRéférence exercice : NOSQL-104`",
    "reponse_v": "Seule une partie des clés est remappée",
    "reponse_f1": "Toutes les clés changent de nœud",
    "reponse_f2": "Aucune clé ne bouge jamais",
    "explication": "Le consistent hashing limite les déplacements."
  },
  {
    "id": 105,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne clé de partition doit être choisie.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 05\n\nRéférence exercice : NOSQL-105`",
    "reponse_v": "Favoriser cardinalité élevée et distribution homogène",
    "reponse_f1": "Choisir une valeur constante",
    "reponse_f2": "Choisir uniquement la colonne la plus lisible",
    "explication": "La qualité de la clé conditionne la scalabilité."
  },
  {
    "id": 106,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne requête filtre sans clé de partition.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 06\n\nRéférence exercice : NOSQL-106`",
    "reponse_v": "Elle peut devenir un scatter-gather coûteux",
    "reponse_f1": "Elle vise toujours un seul shard",
    "reponse_f2": "Elle est automatiquement indexée globalement",
    "explication": "Sans ciblage, plusieurs partitions peuvent être interrogées."
  },
  {
    "id": 107,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn shard devient plus volumineux que les autres.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 07\n\nRéférence exercice : NOSQL-107`",
    "reponse_v": "Il faut envisager rebalancing ou nouvelle stratégie de clé",
    "reponse_f1": "Le laisser indéfiniment",
    "reponse_f2": "Supprimer les réplications",
    "explication": "Le déséquilibre affecte performances et capacité."
  },
  {
    "id": 108,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne partition contient des données liées souvent lues ensemble.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 08\n\nRéférence exercice : NOSQL-108`",
    "reponse_v": "La colocalisation peut réduire les appels inter-shards",
    "reponse_f1": "Il faut toujours les séparer",
    "reponse_f2": "La réplication devient inutile",
    "explication": "La locality améliore certaines requêtes."
  },
  {
    "id": 109,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne transaction touche plusieurs partitions.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 09\n\nRéférence exercice : NOSQL-109`",
    "reponse_v": "Elle est généralement plus coûteuse et complexe",
    "reponse_f1": "Elle devient toujours locale",
    "reponse_f2": "Elle est toujours interdite",
    "explication": "Les transactions distribuées ajoutent coordination et latence."
  },
  {
    "id": 110,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn identifiant séquentiel est utilisé comme shard key dans un partitionnement par plage.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 10\n\nRéférence exercice : NOSQL-110`",
    "reponse_v": "Risque de concentrer les nouvelles écritures",
    "reponse_f1": "Équilibrage parfait garanti",
    "reponse_f2": "Aucune conséquence",
    "explication": "Les valeurs croissantes ciblent la dernière plage."
  },
  {
    "id": 111,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nToutes les écritures utilisent la même clé de partition.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 11\n\nRéférence exercice : NOSQL-111`",
    "reponse_v": "Création d'un hotspot",
    "reponse_f1": "Répartition uniforme garantie",
    "reponse_f2": "Suppression automatique du shard",
    "explication": "Une clé peu variée concentre la charge."
  },
  {
    "id": 112,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nLes données sont réparties par hachage de clé.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 12\n\nRéférence exercice : NOSQL-112`",
    "reponse_v": "Bonne distribution mais scans par plage moins naturels",
    "reponse_f1": "Ordre naturel parfait des clés",
    "reponse_f2": "Un seul shard utilisé",
    "explication": "Le hachage équilibre mais détruit l'ordre."
  },
  {
    "id": 113,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nLes données sont partitionnées par plage de dates.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 13\n\nRéférence exercice : NOSQL-113`",
    "reponse_v": "Requêtes temporelles efficaces mais risque de hotspot sur la période courante",
    "reponse_f1": "Distribution toujours uniforme",
    "reponse_f2": "Aucune nécessité de rééquilibrage",
    "explication": "Les écritures récentes peuvent cibler la même partition."
  },
  {
    "id": 114,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn nœud rejoint le cluster avec consistent hashing.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 14\n\nRéférence exercice : NOSQL-114`",
    "reponse_v": "Seule une partie des clés est remappée",
    "reponse_f1": "Toutes les clés changent de nœud",
    "reponse_f2": "Aucune clé ne bouge jamais",
    "explication": "Le consistent hashing limite les déplacements."
  },
  {
    "id": 115,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne clé de partition doit être choisie.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 15\n\nRéférence exercice : NOSQL-115`",
    "reponse_v": "Favoriser cardinalité élevée et distribution homogène",
    "reponse_f1": "Choisir une valeur constante",
    "reponse_f2": "Choisir uniquement la colonne la plus lisible",
    "explication": "La qualité de la clé conditionne la scalabilité."
  },
  {
    "id": 116,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne requête filtre sans clé de partition.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 16\n\nRéférence exercice : NOSQL-116`",
    "reponse_v": "Elle peut devenir un scatter-gather coûteux",
    "reponse_f1": "Elle vise toujours un seul shard",
    "reponse_f2": "Elle est automatiquement indexée globalement",
    "explication": "Sans ciblage, plusieurs partitions peuvent être interrogées."
  },
  {
    "id": 117,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn shard devient plus volumineux que les autres.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 17\n\nRéférence exercice : NOSQL-117`",
    "reponse_v": "Il faut envisager rebalancing ou nouvelle stratégie de clé",
    "reponse_f1": "Le laisser indéfiniment",
    "reponse_f2": "Supprimer les réplications",
    "explication": "Le déséquilibre affecte performances et capacité."
  },
  {
    "id": 118,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne partition contient des données liées souvent lues ensemble.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 18\n\nRéférence exercice : NOSQL-118`",
    "reponse_v": "La colocalisation peut réduire les appels inter-shards",
    "reponse_f1": "Il faut toujours les séparer",
    "reponse_f2": "La réplication devient inutile",
    "explication": "La locality améliore certaines requêtes."
  },
  {
    "id": 119,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne transaction touche plusieurs partitions.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 19\n\nRéférence exercice : NOSQL-119`",
    "reponse_v": "Elle est généralement plus coûteuse et complexe",
    "reponse_f1": "Elle devient toujours locale",
    "reponse_f2": "Elle est toujours interdite",
    "explication": "Les transactions distribuées ajoutent coordination et latence."
  },
  {
    "id": 120,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn identifiant séquentiel est utilisé comme shard key dans un partitionnement par plage.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 20\n\nRéférence exercice : NOSQL-120`",
    "reponse_v": "Risque de concentrer les nouvelles écritures",
    "reponse_f1": "Équilibrage parfait garanti",
    "reponse_f2": "Aucune conséquence",
    "explication": "Les valeurs croissantes ciblent la dernière plage."
  },
  {
    "id": 121,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nToutes les écritures utilisent la même clé de partition.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 21\n\nRéférence exercice : NOSQL-121`",
    "reponse_v": "Création d'un hotspot",
    "reponse_f1": "Répartition uniforme garantie",
    "reponse_f2": "Suppression automatique du shard",
    "explication": "Une clé peu variée concentre la charge."
  },
  {
    "id": 122,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nLes données sont réparties par hachage de clé.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 22\n\nRéférence exercice : NOSQL-122`",
    "reponse_v": "Bonne distribution mais scans par plage moins naturels",
    "reponse_f1": "Ordre naturel parfait des clés",
    "reponse_f2": "Un seul shard utilisé",
    "explication": "Le hachage équilibre mais détruit l'ordre."
  },
  {
    "id": 123,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nLes données sont partitionnées par plage de dates.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 23\n\nRéférence exercice : NOSQL-123`",
    "reponse_v": "Requêtes temporelles efficaces mais risque de hotspot sur la période courante",
    "reponse_f1": "Distribution toujours uniforme",
    "reponse_f2": "Aucune nécessité de rééquilibrage",
    "explication": "Les écritures récentes peuvent cibler la même partition."
  },
  {
    "id": 124,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn nœud rejoint le cluster avec consistent hashing.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 24\n\nRéférence exercice : NOSQL-124`",
    "reponse_v": "Seule une partie des clés est remappée",
    "reponse_f1": "Toutes les clés changent de nœud",
    "reponse_f2": "Aucune clé ne bouge jamais",
    "explication": "Le consistent hashing limite les déplacements."
  },
  {
    "id": 125,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne clé de partition doit être choisie.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 25\n\nRéférence exercice : NOSQL-125`",
    "reponse_v": "Favoriser cardinalité élevée et distribution homogène",
    "reponse_f1": "Choisir une valeur constante",
    "reponse_f2": "Choisir uniquement la colonne la plus lisible",
    "explication": "La qualité de la clé conditionne la scalabilité."
  },
  {
    "id": 126,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne requête filtre sans clé de partition.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 26\n\nRéférence exercice : NOSQL-126`",
    "reponse_v": "Elle peut devenir un scatter-gather coûteux",
    "reponse_f1": "Elle vise toujours un seul shard",
    "reponse_f2": "Elle est automatiquement indexée globalement",
    "explication": "Sans ciblage, plusieurs partitions peuvent être interrogées."
  },
  {
    "id": 127,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn shard devient plus volumineux que les autres.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 27\n\nRéférence exercice : NOSQL-127`",
    "reponse_v": "Il faut envisager rebalancing ou nouvelle stratégie de clé",
    "reponse_f1": "Le laisser indéfiniment",
    "reponse_f2": "Supprimer les réplications",
    "explication": "Le déséquilibre affecte performances et capacité."
  },
  {
    "id": 128,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne partition contient des données liées souvent lues ensemble.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 28\n\nRéférence exercice : NOSQL-128`",
    "reponse_v": "La colocalisation peut réduire les appels inter-shards",
    "reponse_f1": "Il faut toujours les séparer",
    "reponse_f2": "La réplication devient inutile",
    "explication": "La locality améliore certaines requêtes."
  },
  {
    "id": 129,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne transaction touche plusieurs partitions.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 29\n\nRéférence exercice : NOSQL-129`",
    "reponse_v": "Elle est généralement plus coûteuse et complexe",
    "reponse_f1": "Elle devient toujours locale",
    "reponse_f2": "Elle est toujours interdite",
    "explication": "Les transactions distribuées ajoutent coordination et latence."
  },
  {
    "id": 130,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn identifiant séquentiel est utilisé comme shard key dans un partitionnement par plage.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 30\n\nRéférence exercice : NOSQL-130`",
    "reponse_v": "Risque de concentrer les nouvelles écritures",
    "reponse_f1": "Équilibrage parfait garanti",
    "reponse_f2": "Aucune conséquence",
    "explication": "Les valeurs croissantes ciblent la dernière plage."
  },
  {
    "id": 131,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nToutes les écritures utilisent la même clé de partition.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 31\n\nRéférence exercice : NOSQL-131`",
    "reponse_v": "Création d'un hotspot",
    "reponse_f1": "Répartition uniforme garantie",
    "reponse_f2": "Suppression automatique du shard",
    "explication": "Une clé peu variée concentre la charge."
  },
  {
    "id": 132,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nLes données sont réparties par hachage de clé.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 32\n\nRéférence exercice : NOSQL-132`",
    "reponse_v": "Bonne distribution mais scans par plage moins naturels",
    "reponse_f1": "Ordre naturel parfait des clés",
    "reponse_f2": "Un seul shard utilisé",
    "explication": "Le hachage équilibre mais détruit l'ordre."
  },
  {
    "id": 133,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nLes données sont partitionnées par plage de dates.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 33\n\nRéférence exercice : NOSQL-133`",
    "reponse_v": "Requêtes temporelles efficaces mais risque de hotspot sur la période courante",
    "reponse_f1": "Distribution toujours uniforme",
    "reponse_f2": "Aucune nécessité de rééquilibrage",
    "explication": "Les écritures récentes peuvent cibler la même partition."
  },
  {
    "id": 134,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn nœud rejoint le cluster avec consistent hashing.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 34\n\nRéférence exercice : NOSQL-134`",
    "reponse_v": "Seule une partie des clés est remappée",
    "reponse_f1": "Toutes les clés changent de nœud",
    "reponse_f2": "Aucune clé ne bouge jamais",
    "explication": "Le consistent hashing limite les déplacements."
  },
  {
    "id": 135,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne clé de partition doit être choisie.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 35\n\nRéférence exercice : NOSQL-135`",
    "reponse_v": "Favoriser cardinalité élevée et distribution homogène",
    "reponse_f1": "Choisir une valeur constante",
    "reponse_f2": "Choisir uniquement la colonne la plus lisible",
    "explication": "La qualité de la clé conditionne la scalabilité."
  },
  {
    "id": 136,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne requête filtre sans clé de partition.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 36\n\nRéférence exercice : NOSQL-136`",
    "reponse_v": "Elle peut devenir un scatter-gather coûteux",
    "reponse_f1": "Elle vise toujours un seul shard",
    "reponse_f2": "Elle est automatiquement indexée globalement",
    "explication": "Sans ciblage, plusieurs partitions peuvent être interrogées."
  },
  {
    "id": 137,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn shard devient plus volumineux que les autres.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 37\n\nRéférence exercice : NOSQL-137`",
    "reponse_v": "Il faut envisager rebalancing ou nouvelle stratégie de clé",
    "reponse_f1": "Le laisser indéfiniment",
    "reponse_f2": "Supprimer les réplications",
    "explication": "Le déséquilibre affecte performances et capacité."
  },
  {
    "id": 138,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne partition contient des données liées souvent lues ensemble.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 38\n\nRéférence exercice : NOSQL-138`",
    "reponse_v": "La colocalisation peut réduire les appels inter-shards",
    "reponse_f1": "Il faut toujours les séparer",
    "reponse_f2": "La réplication devient inutile",
    "explication": "La locality améliore certaines requêtes."
  },
  {
    "id": 139,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne transaction touche plusieurs partitions.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 39\n\nRéférence exercice : NOSQL-139`",
    "reponse_v": "Elle est généralement plus coûteuse et complexe",
    "reponse_f1": "Elle devient toujours locale",
    "reponse_f2": "Elle est toujours interdite",
    "explication": "Les transactions distribuées ajoutent coordination et latence."
  },
  {
    "id": 140,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn identifiant séquentiel est utilisé comme shard key dans un partitionnement par plage.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 40\n\nRéférence exercice : NOSQL-140`",
    "reponse_v": "Risque de concentrer les nouvelles écritures",
    "reponse_f1": "Équilibrage parfait garanti",
    "reponse_f2": "Aucune conséquence",
    "explication": "Les valeurs croissantes ciblent la dernière plage."
  },
  {
    "id": 141,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nToutes les écritures utilisent la même clé de partition.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 41\n\nRéférence exercice : NOSQL-141`",
    "reponse_v": "Création d'un hotspot",
    "reponse_f1": "Répartition uniforme garantie",
    "reponse_f2": "Suppression automatique du shard",
    "explication": "Une clé peu variée concentre la charge."
  },
  {
    "id": 142,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nLes données sont réparties par hachage de clé.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 42\n\nRéférence exercice : NOSQL-142`",
    "reponse_v": "Bonne distribution mais scans par plage moins naturels",
    "reponse_f1": "Ordre naturel parfait des clés",
    "reponse_f2": "Un seul shard utilisé",
    "explication": "Le hachage équilibre mais détruit l'ordre."
  },
  {
    "id": 143,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nLes données sont partitionnées par plage de dates.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 43\n\nRéférence exercice : NOSQL-143`",
    "reponse_v": "Requêtes temporelles efficaces mais risque de hotspot sur la période courante",
    "reponse_f1": "Distribution toujours uniforme",
    "reponse_f2": "Aucune nécessité de rééquilibrage",
    "explication": "Les écritures récentes peuvent cibler la même partition."
  },
  {
    "id": 144,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn nœud rejoint le cluster avec consistent hashing.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 44\n\nRéférence exercice : NOSQL-144`",
    "reponse_v": "Seule une partie des clés est remappée",
    "reponse_f1": "Toutes les clés changent de nœud",
    "reponse_f2": "Aucune clé ne bouge jamais",
    "explication": "Le consistent hashing limite les déplacements."
  },
  {
    "id": 145,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne clé de partition doit être choisie.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 45\n\nRéférence exercice : NOSQL-145`",
    "reponse_v": "Favoriser cardinalité élevée et distribution homogène",
    "reponse_f1": "Choisir une valeur constante",
    "reponse_f2": "Choisir uniquement la colonne la plus lisible",
    "explication": "La qualité de la clé conditionne la scalabilité."
  },
  {
    "id": 146,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne requête filtre sans clé de partition.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 46\n\nRéférence exercice : NOSQL-146`",
    "reponse_v": "Elle peut devenir un scatter-gather coûteux",
    "reponse_f1": "Elle vise toujours un seul shard",
    "reponse_f2": "Elle est automatiquement indexée globalement",
    "explication": "Sans ciblage, plusieurs partitions peuvent être interrogées."
  },
  {
    "id": 147,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn shard devient plus volumineux que les autres.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 47\n\nRéférence exercice : NOSQL-147`",
    "reponse_v": "Il faut envisager rebalancing ou nouvelle stratégie de clé",
    "reponse_f1": "Le laisser indéfiniment",
    "reponse_f2": "Supprimer les réplications",
    "explication": "Le déséquilibre affecte performances et capacité."
  },
  {
    "id": 148,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne partition contient des données liées souvent lues ensemble.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 48\n\nRéférence exercice : NOSQL-148`",
    "reponse_v": "La colocalisation peut réduire les appels inter-shards",
    "reponse_f1": "Il faut toujours les séparer",
    "reponse_f2": "La réplication devient inutile",
    "explication": "La locality améliore certaines requêtes."
  },
  {
    "id": 149,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUne transaction touche plusieurs partitions.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 49\n\nRéférence exercice : NOSQL-149`",
    "reponse_v": "Elle est généralement plus coûteuse et complexe",
    "reponse_f1": "Elle devient toujours locale",
    "reponse_f2": "Elle est toujours interdite",
    "explication": "Les transactions distribuées ajoutent coordination et latence."
  },
  {
    "id": 150,
    "question": "`Mini-TP NoSQL — partitionnement\n\nSituation :\nUn identifiant séquentiel est utilisé comme shard key dans un partitionnement par plage.\n\nQuelle conséquence ou pratique est la plus juste ?\n\nCas partitionnement : 50\n\nRéférence exercice : NOSQL-150`",
    "reponse_v": "Risque de concentrer les nouvelles écritures",
    "reponse_f1": "Équilibrage parfait garanti",
    "reponse_f2": "Aucune conséquence",
    "explication": "Les valeurs croissantes ciblent la dernière plage."
  },
  {
    "id": 151,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne commande est toujours lue avec ses lignes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 01\n\nRéférence exercice : NOSQL-151`",
    "reponse_v": "Imbriquer les lignes dans le document commande",
    "reponse_f1": "Créer une collection sans lien par attribut",
    "reponse_f2": "Utiliser un graphe pour chaque champ",
    "explication": "L'agrégat commande peut être stocké ensemble."
  },
  {
    "id": 152,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn client possède des millions d'événements.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 02\n\nRéférence exercice : NOSQL-152`",
    "reponse_v": "Référencer ou partitionner les événements plutôt que tout imbriquer",
    "reponse_f1": "Tout imbriquer dans un seul document illimité",
    "reponse_f2": "Supprimer l'identifiant client",
    "explication": "Les documents ont des limites de taille et de réécriture."
  },
  {
    "id": 153,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne requête wide-column utilise partition key et clustering key.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 03\n\nRéférence exercice : NOSQL-153`",
    "reponse_v": "La partition key localise, la clustering key ordonne dans la partition",
    "reponse_f1": "Les deux sont purement décoratives",
    "reponse_f2": "La clustering key choisit le datacenter",
    "explication": "Cette distinction structure le stockage."
  },
  {
    "id": 154,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne base graphe modélise Personne-AMI_DE->Personne.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 04\n\nRéférence exercice : NOSQL-154`",
    "reponse_v": "La relation est une arête",
    "reponse_f1": "La relation est toujours une table de jointure",
    "reponse_f2": "La relation est une clé de partition",
    "explication": "Les graphes représentent nœuds et arêtes."
  },
  {
    "id": 155,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn cache stocke sessionId -> session.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 05\n\nRéférence exercice : NOSQL-155`",
    "reponse_v": "Modèle clé-valeur adapté",
    "reponse_f1": "Modèle graphe obligatoire",
    "reponse_f2": "Modèle relationnel avec jointures complexes",
    "explication": "L'accès direct par clé convient aux sessions."
  },
  {
    "id": 156,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn document contient des champs rarement utilisés.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 06\n\nRéférence exercice : NOSQL-156`",
    "reponse_v": "Le schéma flexible peut les laisser optionnels",
    "reponse_f1": "Il faut créer une table par champ",
    "reponse_f2": "Ils doivent être dupliqués partout",
    "explication": "Les documents peuvent varier entre enregistrements."
  },
  {
    "id": 157,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn graphe doit trouver le plus court chemin.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 07\n\nRéférence exercice : NOSQL-157`",
    "reponse_v": "Utiliser un algorithme de parcours graphe",
    "reponse_f1": "Utiliser uniquement une recherche par clé",
    "reponse_f2": "Utiliser une agrégation CSV",
    "explication": "Les moteurs graphe optimisent ce type de parcours."
  },
  {
    "id": 158,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne wide-column table est conçue sans connaître les requêtes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 08\n\nRéférence exercice : NOSQL-158`",
    "reponse_v": "Le modèle risque d'être inadapté",
    "reponse_f1": "La base générera automatiquement toutes les vues",
    "reponse_f2": "La normalisation corrigera tout",
    "explication": "Ces bases se modélisent à partir des requêtes."
  },
  {
    "id": 159,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne relation N-N est fréquente dans une base document.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 09\n\nRéférence exercice : NOSQL-159`",
    "reponse_v": "Choisir références ou duplication selon les accès",
    "reponse_f1": "Toujours imbriquer des copies illimitées",
    "reponse_f2": "Toujours refuser la relation",
    "explication": "Le choix dépend taille, cardinalité et cohérence."
  },
  {
    "id": 160,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn compteur distribué subit de fortes écritures concurrentes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 10\n\nRéférence exercice : NOSQL-160`",
    "reponse_v": "Utiliser primitives atomiques ou compteurs distribués adaptés",
    "reponse_f1": "Lire-modifier-écrire sans contrôle",
    "reponse_f2": "Stocker le compteur dans un fichier local",
    "explication": "Les opérations atomiques évitent les pertes de mise à jour."
  },
  {
    "id": 161,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne commande est toujours lue avec ses lignes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 11\n\nRéférence exercice : NOSQL-161`",
    "reponse_v": "Imbriquer les lignes dans le document commande",
    "reponse_f1": "Créer une collection sans lien par attribut",
    "reponse_f2": "Utiliser un graphe pour chaque champ",
    "explication": "L'agrégat commande peut être stocké ensemble."
  },
  {
    "id": 162,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn client possède des millions d'événements.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 12\n\nRéférence exercice : NOSQL-162`",
    "reponse_v": "Référencer ou partitionner les événements plutôt que tout imbriquer",
    "reponse_f1": "Tout imbriquer dans un seul document illimité",
    "reponse_f2": "Supprimer l'identifiant client",
    "explication": "Les documents ont des limites de taille et de réécriture."
  },
  {
    "id": 163,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne requête wide-column utilise partition key et clustering key.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 13\n\nRéférence exercice : NOSQL-163`",
    "reponse_v": "La partition key localise, la clustering key ordonne dans la partition",
    "reponse_f1": "Les deux sont purement décoratives",
    "reponse_f2": "La clustering key choisit le datacenter",
    "explication": "Cette distinction structure le stockage."
  },
  {
    "id": 164,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne base graphe modélise Personne-AMI_DE->Personne.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 14\n\nRéférence exercice : NOSQL-164`",
    "reponse_v": "La relation est une arête",
    "reponse_f1": "La relation est toujours une table de jointure",
    "reponse_f2": "La relation est une clé de partition",
    "explication": "Les graphes représentent nœuds et arêtes."
  },
  {
    "id": 165,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn cache stocke sessionId -> session.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 15\n\nRéférence exercice : NOSQL-165`",
    "reponse_v": "Modèle clé-valeur adapté",
    "reponse_f1": "Modèle graphe obligatoire",
    "reponse_f2": "Modèle relationnel avec jointures complexes",
    "explication": "L'accès direct par clé convient aux sessions."
  },
  {
    "id": 166,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn document contient des champs rarement utilisés.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 16\n\nRéférence exercice : NOSQL-166`",
    "reponse_v": "Le schéma flexible peut les laisser optionnels",
    "reponse_f1": "Il faut créer une table par champ",
    "reponse_f2": "Ils doivent être dupliqués partout",
    "explication": "Les documents peuvent varier entre enregistrements."
  },
  {
    "id": 167,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn graphe doit trouver le plus court chemin.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 17\n\nRéférence exercice : NOSQL-167`",
    "reponse_v": "Utiliser un algorithme de parcours graphe",
    "reponse_f1": "Utiliser uniquement une recherche par clé",
    "reponse_f2": "Utiliser une agrégation CSV",
    "explication": "Les moteurs graphe optimisent ce type de parcours."
  },
  {
    "id": 168,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne wide-column table est conçue sans connaître les requêtes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 18\n\nRéférence exercice : NOSQL-168`",
    "reponse_v": "Le modèle risque d'être inadapté",
    "reponse_f1": "La base générera automatiquement toutes les vues",
    "reponse_f2": "La normalisation corrigera tout",
    "explication": "Ces bases se modélisent à partir des requêtes."
  },
  {
    "id": 169,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne relation N-N est fréquente dans une base document.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 19\n\nRéférence exercice : NOSQL-169`",
    "reponse_v": "Choisir références ou duplication selon les accès",
    "reponse_f1": "Toujours imbriquer des copies illimitées",
    "reponse_f2": "Toujours refuser la relation",
    "explication": "Le choix dépend taille, cardinalité et cohérence."
  },
  {
    "id": 170,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn compteur distribué subit de fortes écritures concurrentes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 20\n\nRéférence exercice : NOSQL-170`",
    "reponse_v": "Utiliser primitives atomiques ou compteurs distribués adaptés",
    "reponse_f1": "Lire-modifier-écrire sans contrôle",
    "reponse_f2": "Stocker le compteur dans un fichier local",
    "explication": "Les opérations atomiques évitent les pertes de mise à jour."
  },
  {
    "id": 171,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne commande est toujours lue avec ses lignes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 21\n\nRéférence exercice : NOSQL-171`",
    "reponse_v": "Imbriquer les lignes dans le document commande",
    "reponse_f1": "Créer une collection sans lien par attribut",
    "reponse_f2": "Utiliser un graphe pour chaque champ",
    "explication": "L'agrégat commande peut être stocké ensemble."
  },
  {
    "id": 172,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn client possède des millions d'événements.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 22\n\nRéférence exercice : NOSQL-172`",
    "reponse_v": "Référencer ou partitionner les événements plutôt que tout imbriquer",
    "reponse_f1": "Tout imbriquer dans un seul document illimité",
    "reponse_f2": "Supprimer l'identifiant client",
    "explication": "Les documents ont des limites de taille et de réécriture."
  },
  {
    "id": 173,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne requête wide-column utilise partition key et clustering key.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 23\n\nRéférence exercice : NOSQL-173`",
    "reponse_v": "La partition key localise, la clustering key ordonne dans la partition",
    "reponse_f1": "Les deux sont purement décoratives",
    "reponse_f2": "La clustering key choisit le datacenter",
    "explication": "Cette distinction structure le stockage."
  },
  {
    "id": 174,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne base graphe modélise Personne-AMI_DE->Personne.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 24\n\nRéférence exercice : NOSQL-174`",
    "reponse_v": "La relation est une arête",
    "reponse_f1": "La relation est toujours une table de jointure",
    "reponse_f2": "La relation est une clé de partition",
    "explication": "Les graphes représentent nœuds et arêtes."
  },
  {
    "id": 175,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn cache stocke sessionId -> session.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 25\n\nRéférence exercice : NOSQL-175`",
    "reponse_v": "Modèle clé-valeur adapté",
    "reponse_f1": "Modèle graphe obligatoire",
    "reponse_f2": "Modèle relationnel avec jointures complexes",
    "explication": "L'accès direct par clé convient aux sessions."
  },
  {
    "id": 176,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn document contient des champs rarement utilisés.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 26\n\nRéférence exercice : NOSQL-176`",
    "reponse_v": "Le schéma flexible peut les laisser optionnels",
    "reponse_f1": "Il faut créer une table par champ",
    "reponse_f2": "Ils doivent être dupliqués partout",
    "explication": "Les documents peuvent varier entre enregistrements."
  },
  {
    "id": 177,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn graphe doit trouver le plus court chemin.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 27\n\nRéférence exercice : NOSQL-177`",
    "reponse_v": "Utiliser un algorithme de parcours graphe",
    "reponse_f1": "Utiliser uniquement une recherche par clé",
    "reponse_f2": "Utiliser une agrégation CSV",
    "explication": "Les moteurs graphe optimisent ce type de parcours."
  },
  {
    "id": 178,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne wide-column table est conçue sans connaître les requêtes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 28\n\nRéférence exercice : NOSQL-178`",
    "reponse_v": "Le modèle risque d'être inadapté",
    "reponse_f1": "La base générera automatiquement toutes les vues",
    "reponse_f2": "La normalisation corrigera tout",
    "explication": "Ces bases se modélisent à partir des requêtes."
  },
  {
    "id": 179,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne relation N-N est fréquente dans une base document.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 29\n\nRéférence exercice : NOSQL-179`",
    "reponse_v": "Choisir références ou duplication selon les accès",
    "reponse_f1": "Toujours imbriquer des copies illimitées",
    "reponse_f2": "Toujours refuser la relation",
    "explication": "Le choix dépend taille, cardinalité et cohérence."
  },
  {
    "id": 180,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn compteur distribué subit de fortes écritures concurrentes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 30\n\nRéférence exercice : NOSQL-180`",
    "reponse_v": "Utiliser primitives atomiques ou compteurs distribués adaptés",
    "reponse_f1": "Lire-modifier-écrire sans contrôle",
    "reponse_f2": "Stocker le compteur dans un fichier local",
    "explication": "Les opérations atomiques évitent les pertes de mise à jour."
  },
  {
    "id": 181,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne commande est toujours lue avec ses lignes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 31\n\nRéférence exercice : NOSQL-181`",
    "reponse_v": "Imbriquer les lignes dans le document commande",
    "reponse_f1": "Créer une collection sans lien par attribut",
    "reponse_f2": "Utiliser un graphe pour chaque champ",
    "explication": "L'agrégat commande peut être stocké ensemble."
  },
  {
    "id": 182,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn client possède des millions d'événements.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 32\n\nRéférence exercice : NOSQL-182`",
    "reponse_v": "Référencer ou partitionner les événements plutôt que tout imbriquer",
    "reponse_f1": "Tout imbriquer dans un seul document illimité",
    "reponse_f2": "Supprimer l'identifiant client",
    "explication": "Les documents ont des limites de taille et de réécriture."
  },
  {
    "id": 183,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne requête wide-column utilise partition key et clustering key.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 33\n\nRéférence exercice : NOSQL-183`",
    "reponse_v": "La partition key localise, la clustering key ordonne dans la partition",
    "reponse_f1": "Les deux sont purement décoratives",
    "reponse_f2": "La clustering key choisit le datacenter",
    "explication": "Cette distinction structure le stockage."
  },
  {
    "id": 184,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne base graphe modélise Personne-AMI_DE->Personne.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 34\n\nRéférence exercice : NOSQL-184`",
    "reponse_v": "La relation est une arête",
    "reponse_f1": "La relation est toujours une table de jointure",
    "reponse_f2": "La relation est une clé de partition",
    "explication": "Les graphes représentent nœuds et arêtes."
  },
  {
    "id": 185,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn cache stocke sessionId -> session.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 35\n\nRéférence exercice : NOSQL-185`",
    "reponse_v": "Modèle clé-valeur adapté",
    "reponse_f1": "Modèle graphe obligatoire",
    "reponse_f2": "Modèle relationnel avec jointures complexes",
    "explication": "L'accès direct par clé convient aux sessions."
  },
  {
    "id": 186,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn document contient des champs rarement utilisés.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 36\n\nRéférence exercice : NOSQL-186`",
    "reponse_v": "Le schéma flexible peut les laisser optionnels",
    "reponse_f1": "Il faut créer une table par champ",
    "reponse_f2": "Ils doivent être dupliqués partout",
    "explication": "Les documents peuvent varier entre enregistrements."
  },
  {
    "id": 187,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn graphe doit trouver le plus court chemin.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 37\n\nRéférence exercice : NOSQL-187`",
    "reponse_v": "Utiliser un algorithme de parcours graphe",
    "reponse_f1": "Utiliser uniquement une recherche par clé",
    "reponse_f2": "Utiliser une agrégation CSV",
    "explication": "Les moteurs graphe optimisent ce type de parcours."
  },
  {
    "id": 188,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne wide-column table est conçue sans connaître les requêtes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 38\n\nRéférence exercice : NOSQL-188`",
    "reponse_v": "Le modèle risque d'être inadapté",
    "reponse_f1": "La base générera automatiquement toutes les vues",
    "reponse_f2": "La normalisation corrigera tout",
    "explication": "Ces bases se modélisent à partir des requêtes."
  },
  {
    "id": 189,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne relation N-N est fréquente dans une base document.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 39\n\nRéférence exercice : NOSQL-189`",
    "reponse_v": "Choisir références ou duplication selon les accès",
    "reponse_f1": "Toujours imbriquer des copies illimitées",
    "reponse_f2": "Toujours refuser la relation",
    "explication": "Le choix dépend taille, cardinalité et cohérence."
  },
  {
    "id": 190,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn compteur distribué subit de fortes écritures concurrentes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 40\n\nRéférence exercice : NOSQL-190`",
    "reponse_v": "Utiliser primitives atomiques ou compteurs distribués adaptés",
    "reponse_f1": "Lire-modifier-écrire sans contrôle",
    "reponse_f2": "Stocker le compteur dans un fichier local",
    "explication": "Les opérations atomiques évitent les pertes de mise à jour."
  },
  {
    "id": 191,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne commande est toujours lue avec ses lignes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 41\n\nRéférence exercice : NOSQL-191`",
    "reponse_v": "Imbriquer les lignes dans le document commande",
    "reponse_f1": "Créer une collection sans lien par attribut",
    "reponse_f2": "Utiliser un graphe pour chaque champ",
    "explication": "L'agrégat commande peut être stocké ensemble."
  },
  {
    "id": 192,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn client possède des millions d'événements.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 42\n\nRéférence exercice : NOSQL-192`",
    "reponse_v": "Référencer ou partitionner les événements plutôt que tout imbriquer",
    "reponse_f1": "Tout imbriquer dans un seul document illimité",
    "reponse_f2": "Supprimer l'identifiant client",
    "explication": "Les documents ont des limites de taille et de réécriture."
  },
  {
    "id": 193,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne requête wide-column utilise partition key et clustering key.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 43\n\nRéférence exercice : NOSQL-193`",
    "reponse_v": "La partition key localise, la clustering key ordonne dans la partition",
    "reponse_f1": "Les deux sont purement décoratives",
    "reponse_f2": "La clustering key choisit le datacenter",
    "explication": "Cette distinction structure le stockage."
  },
  {
    "id": 194,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne base graphe modélise Personne-AMI_DE->Personne.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 44\n\nRéférence exercice : NOSQL-194`",
    "reponse_v": "La relation est une arête",
    "reponse_f1": "La relation est toujours une table de jointure",
    "reponse_f2": "La relation est une clé de partition",
    "explication": "Les graphes représentent nœuds et arêtes."
  },
  {
    "id": 195,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn cache stocke sessionId -> session.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 45\n\nRéférence exercice : NOSQL-195`",
    "reponse_v": "Modèle clé-valeur adapté",
    "reponse_f1": "Modèle graphe obligatoire",
    "reponse_f2": "Modèle relationnel avec jointures complexes",
    "explication": "L'accès direct par clé convient aux sessions."
  },
  {
    "id": 196,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn document contient des champs rarement utilisés.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 46\n\nRéférence exercice : NOSQL-196`",
    "reponse_v": "Le schéma flexible peut les laisser optionnels",
    "reponse_f1": "Il faut créer une table par champ",
    "reponse_f2": "Ils doivent être dupliqués partout",
    "explication": "Les documents peuvent varier entre enregistrements."
  },
  {
    "id": 197,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn graphe doit trouver le plus court chemin.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 47\n\nRéférence exercice : NOSQL-197`",
    "reponse_v": "Utiliser un algorithme de parcours graphe",
    "reponse_f1": "Utiliser uniquement une recherche par clé",
    "reponse_f2": "Utiliser une agrégation CSV",
    "explication": "Les moteurs graphe optimisent ce type de parcours."
  },
  {
    "id": 198,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne wide-column table est conçue sans connaître les requêtes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 48\n\nRéférence exercice : NOSQL-198`",
    "reponse_v": "Le modèle risque d'être inadapté",
    "reponse_f1": "La base générera automatiquement toutes les vues",
    "reponse_f2": "La normalisation corrigera tout",
    "explication": "Ces bases se modélisent à partir des requêtes."
  },
  {
    "id": 199,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUne relation N-N est fréquente dans une base document.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 49\n\nRéférence exercice : NOSQL-199`",
    "reponse_v": "Choisir références ou duplication selon les accès",
    "reponse_f1": "Toujours imbriquer des copies illimitées",
    "reponse_f2": "Toujours refuser la relation",
    "explication": "Le choix dépend taille, cardinalité et cohérence."
  },
  {
    "id": 200,
    "question": "`Mini-TP NoSQL — modélisation\n\nContexte :\nUn compteur distribué subit de fortes écritures concurrentes.\n\nQuelle décision de modélisation est la plus pertinente ?\n\nCas modèle : 50\n\nRéférence exercice : NOSQL-200`",
    "reponse_v": "Utiliser primitives atomiques ou compteurs distribués adaptés",
    "reponse_f1": "Lire-modifier-écrire sans contrôle",
    "reponse_f2": "Stocker le compteur dans un fichier local",
    "explication": "Les opérations atomiques évitent les pertes de mise à jour."
  },
  {
    "id": 201,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête filtre souvent sur email.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 01\n\nRéférence exercice : NOSQL-201`",
    "reponse_v": "Créer un index adapté sur email",
    "reponse_f1": "Scanner toute la collection systématiquement",
    "reponse_f2": "Créer uniquement un index sur un champ jamais filtré",
    "explication": "Un index ciblé réduit les scans."
  },
  {
    "id": 202,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index contient de nombreux champs inutiles.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 02\n\nRéférence exercice : NOSQL-202`",
    "reponse_v": "Il augmente coût d'écriture et espace",
    "reponse_f1": "Il accélère toujours toutes les requêtes",
    "reponse_f2": "Il supprime les conflits",
    "explication": "Chaque index a un coût de maintenance."
  },
  {
    "id": 203,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête est couverte par un index.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 03\n\nRéférence exercice : NOSQL-203`",
    "reponse_v": "Les champs nécessaires sont servis depuis l'index",
    "reponse_f1": "La base doit lire tous les documents",
    "reponse_f2": "L'index est ignoré",
    "explication": "Un covering index évite l'accès aux données complètes."
  },
  {
    "id": 204,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index à faible sélectivité est utilisé seul.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 04\n\nRéférence exercice : NOSQL-204`",
    "reponse_v": "Son bénéfice peut être limité",
    "reponse_f1": "Il garantit toujours une recherche O(1)",
    "reponse_f2": "Il supprime la nécessité de filtre",
    "explication": "Peu de valeurs distinctes réduisent la sélectivité."
  },
  {
    "id": 205,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne base document exécute une agrégation complexe sur tout le cluster.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 05\n\nRéférence exercice : NOSQL-205`",
    "reponse_v": "Le coût peut être élevé et dépendre du pipeline",
    "reponse_f1": "Le coût est toujours constant",
    "reponse_f2": "L'agrégation ne lit jamais les données",
    "explication": "Les agrégations distribuées peuvent être lourdes."
  },
  {
    "id": 206,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête trie sans index compatible.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 06\n\nRéférence exercice : NOSQL-206`",
    "reponse_v": "Un tri en mémoire ou sur disque peut être nécessaire",
    "reponse_f1": "Le tri est toujours gratuit",
    "reponse_f2": "Le shard key devient automatiquement tri index",
    "explication": "Le tri non indexé peut être coûteux."
  },
  {
    "id": 207,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index secondaire global existe sur un cluster partitionné.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 07\n\nRéférence exercice : NOSQL-207`",
    "reponse_v": "Il ajoute coordination et coût de maintenance",
    "reponse_f1": "Il est gratuit",
    "reponse_f2": "Il remplace toute clé de partition",
    "explication": "Les index globaux sont plus complexes à maintenir."
  },
  {
    "id": 208,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête par préfixe doit rester efficace.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 08\n\nRéférence exercice : NOSQL-208`",
    "reponse_v": "Utiliser un index ordonné compatible",
    "reponse_f1": "Utiliser uniquement un hash index",
    "reponse_f2": "Supprimer le champ filtré",
    "explication": "Les recherches par plage exploitent un ordre."
  },
  {
    "id": 209,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nLe working set dépasse la mémoire.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 09\n\nRéférence exercice : NOSQL-209`",
    "reponse_v": "Les latences peuvent augmenter fortement",
    "reponse_f1": "Les performances augmentent",
    "reponse_f2": "Les index deviennent inutiles",
    "explication": "Les accès disque deviennent plus fréquents."
  },
  {
    "id": 210,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête nécessite plusieurs allers-retours réseau.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 10\n\nRéférence exercice : NOSQL-210`",
    "reponse_v": "Dénormaliser ou regrouper les données si pertinent",
    "reponse_f1": "Ajouter plus de jointures clientes",
    "reponse_f2": "Supprimer les index",
    "explication": "Réduire les round trips peut améliorer les performances."
  },
  {
    "id": 211,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête filtre souvent sur email.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 11\n\nRéférence exercice : NOSQL-211`",
    "reponse_v": "Créer un index adapté sur email",
    "reponse_f1": "Scanner toute la collection systématiquement",
    "reponse_f2": "Créer uniquement un index sur un champ jamais filtré",
    "explication": "Un index ciblé réduit les scans."
  },
  {
    "id": 212,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index contient de nombreux champs inutiles.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 12\n\nRéférence exercice : NOSQL-212`",
    "reponse_v": "Il augmente coût d'écriture et espace",
    "reponse_f1": "Il accélère toujours toutes les requêtes",
    "reponse_f2": "Il supprime les conflits",
    "explication": "Chaque index a un coût de maintenance."
  },
  {
    "id": 213,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête est couverte par un index.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 13\n\nRéférence exercice : NOSQL-213`",
    "reponse_v": "Les champs nécessaires sont servis depuis l'index",
    "reponse_f1": "La base doit lire tous les documents",
    "reponse_f2": "L'index est ignoré",
    "explication": "Un covering index évite l'accès aux données complètes."
  },
  {
    "id": 214,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index à faible sélectivité est utilisé seul.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 14\n\nRéférence exercice : NOSQL-214`",
    "reponse_v": "Son bénéfice peut être limité",
    "reponse_f1": "Il garantit toujours une recherche O(1)",
    "reponse_f2": "Il supprime la nécessité de filtre",
    "explication": "Peu de valeurs distinctes réduisent la sélectivité."
  },
  {
    "id": 215,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne base document exécute une agrégation complexe sur tout le cluster.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 15\n\nRéférence exercice : NOSQL-215`",
    "reponse_v": "Le coût peut être élevé et dépendre du pipeline",
    "reponse_f1": "Le coût est toujours constant",
    "reponse_f2": "L'agrégation ne lit jamais les données",
    "explication": "Les agrégations distribuées peuvent être lourdes."
  },
  {
    "id": 216,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête trie sans index compatible.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 16\n\nRéférence exercice : NOSQL-216`",
    "reponse_v": "Un tri en mémoire ou sur disque peut être nécessaire",
    "reponse_f1": "Le tri est toujours gratuit",
    "reponse_f2": "Le shard key devient automatiquement tri index",
    "explication": "Le tri non indexé peut être coûteux."
  },
  {
    "id": 217,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index secondaire global existe sur un cluster partitionné.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 17\n\nRéférence exercice : NOSQL-217`",
    "reponse_v": "Il ajoute coordination et coût de maintenance",
    "reponse_f1": "Il est gratuit",
    "reponse_f2": "Il remplace toute clé de partition",
    "explication": "Les index globaux sont plus complexes à maintenir."
  },
  {
    "id": 218,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête par préfixe doit rester efficace.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 18\n\nRéférence exercice : NOSQL-218`",
    "reponse_v": "Utiliser un index ordonné compatible",
    "reponse_f1": "Utiliser uniquement un hash index",
    "reponse_f2": "Supprimer le champ filtré",
    "explication": "Les recherches par plage exploitent un ordre."
  },
  {
    "id": 219,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nLe working set dépasse la mémoire.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 19\n\nRéférence exercice : NOSQL-219`",
    "reponse_v": "Les latences peuvent augmenter fortement",
    "reponse_f1": "Les performances augmentent",
    "reponse_f2": "Les index deviennent inutiles",
    "explication": "Les accès disque deviennent plus fréquents."
  },
  {
    "id": 220,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête nécessite plusieurs allers-retours réseau.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 20\n\nRéférence exercice : NOSQL-220`",
    "reponse_v": "Dénormaliser ou regrouper les données si pertinent",
    "reponse_f1": "Ajouter plus de jointures clientes",
    "reponse_f2": "Supprimer les index",
    "explication": "Réduire les round trips peut améliorer les performances."
  },
  {
    "id": 221,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête filtre souvent sur email.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 21\n\nRéférence exercice : NOSQL-221`",
    "reponse_v": "Créer un index adapté sur email",
    "reponse_f1": "Scanner toute la collection systématiquement",
    "reponse_f2": "Créer uniquement un index sur un champ jamais filtré",
    "explication": "Un index ciblé réduit les scans."
  },
  {
    "id": 222,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index contient de nombreux champs inutiles.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 22\n\nRéférence exercice : NOSQL-222`",
    "reponse_v": "Il augmente coût d'écriture et espace",
    "reponse_f1": "Il accélère toujours toutes les requêtes",
    "reponse_f2": "Il supprime les conflits",
    "explication": "Chaque index a un coût de maintenance."
  },
  {
    "id": 223,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête est couverte par un index.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 23\n\nRéférence exercice : NOSQL-223`",
    "reponse_v": "Les champs nécessaires sont servis depuis l'index",
    "reponse_f1": "La base doit lire tous les documents",
    "reponse_f2": "L'index est ignoré",
    "explication": "Un covering index évite l'accès aux données complètes."
  },
  {
    "id": 224,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index à faible sélectivité est utilisé seul.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 24\n\nRéférence exercice : NOSQL-224`",
    "reponse_v": "Son bénéfice peut être limité",
    "reponse_f1": "Il garantit toujours une recherche O(1)",
    "reponse_f2": "Il supprime la nécessité de filtre",
    "explication": "Peu de valeurs distinctes réduisent la sélectivité."
  },
  {
    "id": 225,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne base document exécute une agrégation complexe sur tout le cluster.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 25\n\nRéférence exercice : NOSQL-225`",
    "reponse_v": "Le coût peut être élevé et dépendre du pipeline",
    "reponse_f1": "Le coût est toujours constant",
    "reponse_f2": "L'agrégation ne lit jamais les données",
    "explication": "Les agrégations distribuées peuvent être lourdes."
  },
  {
    "id": 226,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête trie sans index compatible.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 26\n\nRéférence exercice : NOSQL-226`",
    "reponse_v": "Un tri en mémoire ou sur disque peut être nécessaire",
    "reponse_f1": "Le tri est toujours gratuit",
    "reponse_f2": "Le shard key devient automatiquement tri index",
    "explication": "Le tri non indexé peut être coûteux."
  },
  {
    "id": 227,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index secondaire global existe sur un cluster partitionné.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 27\n\nRéférence exercice : NOSQL-227`",
    "reponse_v": "Il ajoute coordination et coût de maintenance",
    "reponse_f1": "Il est gratuit",
    "reponse_f2": "Il remplace toute clé de partition",
    "explication": "Les index globaux sont plus complexes à maintenir."
  },
  {
    "id": 228,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête par préfixe doit rester efficace.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 28\n\nRéférence exercice : NOSQL-228`",
    "reponse_v": "Utiliser un index ordonné compatible",
    "reponse_f1": "Utiliser uniquement un hash index",
    "reponse_f2": "Supprimer le champ filtré",
    "explication": "Les recherches par plage exploitent un ordre."
  },
  {
    "id": 229,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nLe working set dépasse la mémoire.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 29\n\nRéférence exercice : NOSQL-229`",
    "reponse_v": "Les latences peuvent augmenter fortement",
    "reponse_f1": "Les performances augmentent",
    "reponse_f2": "Les index deviennent inutiles",
    "explication": "Les accès disque deviennent plus fréquents."
  },
  {
    "id": 230,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête nécessite plusieurs allers-retours réseau.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 30\n\nRéférence exercice : NOSQL-230`",
    "reponse_v": "Dénormaliser ou regrouper les données si pertinent",
    "reponse_f1": "Ajouter plus de jointures clientes",
    "reponse_f2": "Supprimer les index",
    "explication": "Réduire les round trips peut améliorer les performances."
  },
  {
    "id": 231,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête filtre souvent sur email.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 31\n\nRéférence exercice : NOSQL-231`",
    "reponse_v": "Créer un index adapté sur email",
    "reponse_f1": "Scanner toute la collection systématiquement",
    "reponse_f2": "Créer uniquement un index sur un champ jamais filtré",
    "explication": "Un index ciblé réduit les scans."
  },
  {
    "id": 232,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index contient de nombreux champs inutiles.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 32\n\nRéférence exercice : NOSQL-232`",
    "reponse_v": "Il augmente coût d'écriture et espace",
    "reponse_f1": "Il accélère toujours toutes les requêtes",
    "reponse_f2": "Il supprime les conflits",
    "explication": "Chaque index a un coût de maintenance."
  },
  {
    "id": 233,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête est couverte par un index.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 33\n\nRéférence exercice : NOSQL-233`",
    "reponse_v": "Les champs nécessaires sont servis depuis l'index",
    "reponse_f1": "La base doit lire tous les documents",
    "reponse_f2": "L'index est ignoré",
    "explication": "Un covering index évite l'accès aux données complètes."
  },
  {
    "id": 234,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index à faible sélectivité est utilisé seul.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 34\n\nRéférence exercice : NOSQL-234`",
    "reponse_v": "Son bénéfice peut être limité",
    "reponse_f1": "Il garantit toujours une recherche O(1)",
    "reponse_f2": "Il supprime la nécessité de filtre",
    "explication": "Peu de valeurs distinctes réduisent la sélectivité."
  },
  {
    "id": 235,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne base document exécute une agrégation complexe sur tout le cluster.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 35\n\nRéférence exercice : NOSQL-235`",
    "reponse_v": "Le coût peut être élevé et dépendre du pipeline",
    "reponse_f1": "Le coût est toujours constant",
    "reponse_f2": "L'agrégation ne lit jamais les données",
    "explication": "Les agrégations distribuées peuvent être lourdes."
  },
  {
    "id": 236,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête trie sans index compatible.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 36\n\nRéférence exercice : NOSQL-236`",
    "reponse_v": "Un tri en mémoire ou sur disque peut être nécessaire",
    "reponse_f1": "Le tri est toujours gratuit",
    "reponse_f2": "Le shard key devient automatiquement tri index",
    "explication": "Le tri non indexé peut être coûteux."
  },
  {
    "id": 237,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index secondaire global existe sur un cluster partitionné.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 37\n\nRéférence exercice : NOSQL-237`",
    "reponse_v": "Il ajoute coordination et coût de maintenance",
    "reponse_f1": "Il est gratuit",
    "reponse_f2": "Il remplace toute clé de partition",
    "explication": "Les index globaux sont plus complexes à maintenir."
  },
  {
    "id": 238,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête par préfixe doit rester efficace.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 38\n\nRéférence exercice : NOSQL-238`",
    "reponse_v": "Utiliser un index ordonné compatible",
    "reponse_f1": "Utiliser uniquement un hash index",
    "reponse_f2": "Supprimer le champ filtré",
    "explication": "Les recherches par plage exploitent un ordre."
  },
  {
    "id": 239,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nLe working set dépasse la mémoire.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 39\n\nRéférence exercice : NOSQL-239`",
    "reponse_v": "Les latences peuvent augmenter fortement",
    "reponse_f1": "Les performances augmentent",
    "reponse_f2": "Les index deviennent inutiles",
    "explication": "Les accès disque deviennent plus fréquents."
  },
  {
    "id": 240,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête nécessite plusieurs allers-retours réseau.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 40\n\nRéférence exercice : NOSQL-240`",
    "reponse_v": "Dénormaliser ou regrouper les données si pertinent",
    "reponse_f1": "Ajouter plus de jointures clientes",
    "reponse_f2": "Supprimer les index",
    "explication": "Réduire les round trips peut améliorer les performances."
  },
  {
    "id": 241,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête filtre souvent sur email.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 41\n\nRéférence exercice : NOSQL-241`",
    "reponse_v": "Créer un index adapté sur email",
    "reponse_f1": "Scanner toute la collection systématiquement",
    "reponse_f2": "Créer uniquement un index sur un champ jamais filtré",
    "explication": "Un index ciblé réduit les scans."
  },
  {
    "id": 242,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index contient de nombreux champs inutiles.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 42\n\nRéférence exercice : NOSQL-242`",
    "reponse_v": "Il augmente coût d'écriture et espace",
    "reponse_f1": "Il accélère toujours toutes les requêtes",
    "reponse_f2": "Il supprime les conflits",
    "explication": "Chaque index a un coût de maintenance."
  },
  {
    "id": 243,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête est couverte par un index.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 43\n\nRéférence exercice : NOSQL-243`",
    "reponse_v": "Les champs nécessaires sont servis depuis l'index",
    "reponse_f1": "La base doit lire tous les documents",
    "reponse_f2": "L'index est ignoré",
    "explication": "Un covering index évite l'accès aux données complètes."
  },
  {
    "id": 244,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index à faible sélectivité est utilisé seul.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 44\n\nRéférence exercice : NOSQL-244`",
    "reponse_v": "Son bénéfice peut être limité",
    "reponse_f1": "Il garantit toujours une recherche O(1)",
    "reponse_f2": "Il supprime la nécessité de filtre",
    "explication": "Peu de valeurs distinctes réduisent la sélectivité."
  },
  {
    "id": 245,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne base document exécute une agrégation complexe sur tout le cluster.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 45\n\nRéférence exercice : NOSQL-245`",
    "reponse_v": "Le coût peut être élevé et dépendre du pipeline",
    "reponse_f1": "Le coût est toujours constant",
    "reponse_f2": "L'agrégation ne lit jamais les données",
    "explication": "Les agrégations distribuées peuvent être lourdes."
  },
  {
    "id": 246,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête trie sans index compatible.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 46\n\nRéférence exercice : NOSQL-246`",
    "reponse_v": "Un tri en mémoire ou sur disque peut être nécessaire",
    "reponse_f1": "Le tri est toujours gratuit",
    "reponse_f2": "Le shard key devient automatiquement tri index",
    "explication": "Le tri non indexé peut être coûteux."
  },
  {
    "id": 247,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUn index secondaire global existe sur un cluster partitionné.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 47\n\nRéférence exercice : NOSQL-247`",
    "reponse_v": "Il ajoute coordination et coût de maintenance",
    "reponse_f1": "Il est gratuit",
    "reponse_f2": "Il remplace toute clé de partition",
    "explication": "Les index globaux sont plus complexes à maintenir."
  },
  {
    "id": 248,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête par préfixe doit rester efficace.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 48\n\nRéférence exercice : NOSQL-248`",
    "reponse_v": "Utiliser un index ordonné compatible",
    "reponse_f1": "Utiliser uniquement un hash index",
    "reponse_f2": "Supprimer le champ filtré",
    "explication": "Les recherches par plage exploitent un ordre."
  },
  {
    "id": 249,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nLe working set dépasse la mémoire.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 49\n\nRéférence exercice : NOSQL-249`",
    "reponse_v": "Les latences peuvent augmenter fortement",
    "reponse_f1": "Les performances augmentent",
    "reponse_f2": "Les index deviennent inutiles",
    "explication": "Les accès disque deviennent plus fréquents."
  },
  {
    "id": 250,
    "question": "`Mini-TP NoSQL — indexation et performance\n\nSituation :\nUne requête nécessite plusieurs allers-retours réseau.\n\nQuelle analyse est la plus correcte ?\n\nCas performance : 50\n\nRéférence exercice : NOSQL-250`",
    "reponse_v": "Dénormaliser ou regrouper les données si pertinent",
    "reponse_f1": "Ajouter plus de jointures clientes",
    "reponse_f2": "Supprimer les index",
    "explication": "Réduire les round trips peut améliorer les performances."
  },
  {
    "id": 251,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne opération doit modifier plusieurs documents atomiquement.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 01\n\nRéférence exercice : NOSQL-251`",
    "reponse_v": "Utiliser une transaction multi-documents si supportée et nécessaire",
    "reponse_f1": "Supposer l'atomicité globale automatique",
    "reponse_f2": "Faire plusieurs écritures sans contrôle",
    "explication": "Les transactions existent parfois mais ont un coût."
  },
  {
    "id": 252,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne écriture concerne un seul document.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 02\n\nRéférence exercice : NOSQL-252`",
    "reponse_v": "L'atomicité est souvent garantie au niveau du document",
    "reponse_f1": "Aucune atomicité n'existe",
    "reponse_f2": "Toute écriture nécessite un consensus global",
    "explication": "Beaucoup de bases document garantissent l'atomicité par document."
  },
  {
    "id": 253,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUn cluster doit survivre à la perte d'un nœud.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 03\n\nRéférence exercice : NOSQL-253`",
    "reponse_v": "Configurer réplication et quorum adaptés",
    "reponse_f1": "Utiliser un seul nœud",
    "reponse_f2": "Désactiver les sauvegardes",
    "explication": "La redondance doit être planifiée."
  },
  {
    "id": 254,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne sauvegarde cohérente est requise.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 04\n\nRéférence exercice : NOSQL-254`",
    "reponse_v": "Utiliser snapshot ou mécanisme natif coordonné",
    "reponse_f1": "Copier les fichiers à chaud sans contrôle",
    "reponse_f2": "Sauvegarder uniquement les logs applicatifs",
    "explication": "La cohérence dépend du moteur et de sa méthode de backup."
  },
  {
    "id": 255,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLes accès doivent être limités par application.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 05\n\nRéférence exercice : NOSQL-255`",
    "reponse_v": "Appliquer authentification, rôles et moindre privilège",
    "reponse_f1": "Partager un compte administrateur",
    "reponse_f2": "Rendre le cluster public",
    "explication": "La sécurité suit les mêmes principes que tout SI."
  },
  {
    "id": 256,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLes données sensibles sont stockées.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 06\n\nRéférence exercice : NOSQL-256`",
    "reponse_v": "Chiffrer en transit et au repos",
    "reponse_f1": "Compresser uniquement",
    "reponse_f2": "Masquer les noms de collections",
    "explication": "Le chiffrement protège confidentialité et exposition."
  },
  {
    "id": 257,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUn schéma évolue entre versions d'application.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 07\n\nRéférence exercice : NOSQL-257`",
    "reponse_v": "Prévoir compatibilité ascendante et migration progressive",
    "reponse_f1": "Changer tous les documents sans stratégie",
    "reponse_f2": "Ignorer les anciens documents",
    "explication": "Le schéma flexible exige une gestion de version."
  },
  {
    "id": 258,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne application exige reporting relationnel et graph traversal.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 08\n\nRéférence exercice : NOSQL-258`",
    "reponse_v": "Combiner éventuellement plusieurs moteurs spécialisés",
    "reponse_f1": "Forcer un seul moteur pour tous les usages",
    "reponse_f2": "Utiliser uniquement un cache",
    "explication": "Le polyglot persistence peut être justifié."
  },
  {
    "id": 259,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne base est choisie uniquement parce qu'elle est NoSQL.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 09\n\nRéférence exercice : NOSQL-259`",
    "reponse_v": "Le choix doit partir des besoins et requêtes",
    "reponse_f1": "NoSQL est toujours supérieur au SQL",
    "reponse_f2": "Le modèle n'a aucune importance",
    "explication": "La technologie doit correspondre au cas d'usage."
  },
  {
    "id": 260,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLe cluster est étendu sans tests de charge.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 10\n\nRéférence exercice : NOSQL-260`",
    "reponse_v": "Mesurer latence, throughput, rééquilibrage et pannes",
    "reponse_f1": "Supposer un scaling linéaire parfait",
    "reponse_f2": "Désactiver la supervision",
    "explication": "Le scale-out réel dépend du moteur et des accès."
  },
  {
    "id": 261,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne opération doit modifier plusieurs documents atomiquement.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 11\n\nRéférence exercice : NOSQL-261`",
    "reponse_v": "Utiliser une transaction multi-documents si supportée et nécessaire",
    "reponse_f1": "Supposer l'atomicité globale automatique",
    "reponse_f2": "Faire plusieurs écritures sans contrôle",
    "explication": "Les transactions existent parfois mais ont un coût."
  },
  {
    "id": 262,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne écriture concerne un seul document.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 12\n\nRéférence exercice : NOSQL-262`",
    "reponse_v": "L'atomicité est souvent garantie au niveau du document",
    "reponse_f1": "Aucune atomicité n'existe",
    "reponse_f2": "Toute écriture nécessite un consensus global",
    "explication": "Beaucoup de bases document garantissent l'atomicité par document."
  },
  {
    "id": 263,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUn cluster doit survivre à la perte d'un nœud.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 13\n\nRéférence exercice : NOSQL-263`",
    "reponse_v": "Configurer réplication et quorum adaptés",
    "reponse_f1": "Utiliser un seul nœud",
    "reponse_f2": "Désactiver les sauvegardes",
    "explication": "La redondance doit être planifiée."
  },
  {
    "id": 264,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne sauvegarde cohérente est requise.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 14\n\nRéférence exercice : NOSQL-264`",
    "reponse_v": "Utiliser snapshot ou mécanisme natif coordonné",
    "reponse_f1": "Copier les fichiers à chaud sans contrôle",
    "reponse_f2": "Sauvegarder uniquement les logs applicatifs",
    "explication": "La cohérence dépend du moteur et de sa méthode de backup."
  },
  {
    "id": 265,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLes accès doivent être limités par application.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 15\n\nRéférence exercice : NOSQL-265`",
    "reponse_v": "Appliquer authentification, rôles et moindre privilège",
    "reponse_f1": "Partager un compte administrateur",
    "reponse_f2": "Rendre le cluster public",
    "explication": "La sécurité suit les mêmes principes que tout SI."
  },
  {
    "id": 266,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLes données sensibles sont stockées.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 16\n\nRéférence exercice : NOSQL-266`",
    "reponse_v": "Chiffrer en transit et au repos",
    "reponse_f1": "Compresser uniquement",
    "reponse_f2": "Masquer les noms de collections",
    "explication": "Le chiffrement protège confidentialité et exposition."
  },
  {
    "id": 267,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUn schéma évolue entre versions d'application.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 17\n\nRéférence exercice : NOSQL-267`",
    "reponse_v": "Prévoir compatibilité ascendante et migration progressive",
    "reponse_f1": "Changer tous les documents sans stratégie",
    "reponse_f2": "Ignorer les anciens documents",
    "explication": "Le schéma flexible exige une gestion de version."
  },
  {
    "id": 268,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne application exige reporting relationnel et graph traversal.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 18\n\nRéférence exercice : NOSQL-268`",
    "reponse_v": "Combiner éventuellement plusieurs moteurs spécialisés",
    "reponse_f1": "Forcer un seul moteur pour tous les usages",
    "reponse_f2": "Utiliser uniquement un cache",
    "explication": "Le polyglot persistence peut être justifié."
  },
  {
    "id": 269,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne base est choisie uniquement parce qu'elle est NoSQL.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 19\n\nRéférence exercice : NOSQL-269`",
    "reponse_v": "Le choix doit partir des besoins et requêtes",
    "reponse_f1": "NoSQL est toujours supérieur au SQL",
    "reponse_f2": "Le modèle n'a aucune importance",
    "explication": "La technologie doit correspondre au cas d'usage."
  },
  {
    "id": 270,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLe cluster est étendu sans tests de charge.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 20\n\nRéférence exercice : NOSQL-270`",
    "reponse_v": "Mesurer latence, throughput, rééquilibrage et pannes",
    "reponse_f1": "Supposer un scaling linéaire parfait",
    "reponse_f2": "Désactiver la supervision",
    "explication": "Le scale-out réel dépend du moteur et des accès."
  },
  {
    "id": 271,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne opération doit modifier plusieurs documents atomiquement.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 21\n\nRéférence exercice : NOSQL-271`",
    "reponse_v": "Utiliser une transaction multi-documents si supportée et nécessaire",
    "reponse_f1": "Supposer l'atomicité globale automatique",
    "reponse_f2": "Faire plusieurs écritures sans contrôle",
    "explication": "Les transactions existent parfois mais ont un coût."
  },
  {
    "id": 272,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne écriture concerne un seul document.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 22\n\nRéférence exercice : NOSQL-272`",
    "reponse_v": "L'atomicité est souvent garantie au niveau du document",
    "reponse_f1": "Aucune atomicité n'existe",
    "reponse_f2": "Toute écriture nécessite un consensus global",
    "explication": "Beaucoup de bases document garantissent l'atomicité par document."
  },
  {
    "id": 273,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUn cluster doit survivre à la perte d'un nœud.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 23\n\nRéférence exercice : NOSQL-273`",
    "reponse_v": "Configurer réplication et quorum adaptés",
    "reponse_f1": "Utiliser un seul nœud",
    "reponse_f2": "Désactiver les sauvegardes",
    "explication": "La redondance doit être planifiée."
  },
  {
    "id": 274,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne sauvegarde cohérente est requise.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 24\n\nRéférence exercice : NOSQL-274`",
    "reponse_v": "Utiliser snapshot ou mécanisme natif coordonné",
    "reponse_f1": "Copier les fichiers à chaud sans contrôle",
    "reponse_f2": "Sauvegarder uniquement les logs applicatifs",
    "explication": "La cohérence dépend du moteur et de sa méthode de backup."
  },
  {
    "id": 275,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLes accès doivent être limités par application.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 25\n\nRéférence exercice : NOSQL-275`",
    "reponse_v": "Appliquer authentification, rôles et moindre privilège",
    "reponse_f1": "Partager un compte administrateur",
    "reponse_f2": "Rendre le cluster public",
    "explication": "La sécurité suit les mêmes principes que tout SI."
  },
  {
    "id": 276,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLes données sensibles sont stockées.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 26\n\nRéférence exercice : NOSQL-276`",
    "reponse_v": "Chiffrer en transit et au repos",
    "reponse_f1": "Compresser uniquement",
    "reponse_f2": "Masquer les noms de collections",
    "explication": "Le chiffrement protège confidentialité et exposition."
  },
  {
    "id": 277,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUn schéma évolue entre versions d'application.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 27\n\nRéférence exercice : NOSQL-277`",
    "reponse_v": "Prévoir compatibilité ascendante et migration progressive",
    "reponse_f1": "Changer tous les documents sans stratégie",
    "reponse_f2": "Ignorer les anciens documents",
    "explication": "Le schéma flexible exige une gestion de version."
  },
  {
    "id": 278,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne application exige reporting relationnel et graph traversal.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 28\n\nRéférence exercice : NOSQL-278`",
    "reponse_v": "Combiner éventuellement plusieurs moteurs spécialisés",
    "reponse_f1": "Forcer un seul moteur pour tous les usages",
    "reponse_f2": "Utiliser uniquement un cache",
    "explication": "Le polyglot persistence peut être justifié."
  },
  {
    "id": 279,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne base est choisie uniquement parce qu'elle est NoSQL.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 29\n\nRéférence exercice : NOSQL-279`",
    "reponse_v": "Le choix doit partir des besoins et requêtes",
    "reponse_f1": "NoSQL est toujours supérieur au SQL",
    "reponse_f2": "Le modèle n'a aucune importance",
    "explication": "La technologie doit correspondre au cas d'usage."
  },
  {
    "id": 280,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLe cluster est étendu sans tests de charge.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 30\n\nRéférence exercice : NOSQL-280`",
    "reponse_v": "Mesurer latence, throughput, rééquilibrage et pannes",
    "reponse_f1": "Supposer un scaling linéaire parfait",
    "reponse_f2": "Désactiver la supervision",
    "explication": "Le scale-out réel dépend du moteur et des accès."
  },
  {
    "id": 281,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne opération doit modifier plusieurs documents atomiquement.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 31\n\nRéférence exercice : NOSQL-281`",
    "reponse_v": "Utiliser une transaction multi-documents si supportée et nécessaire",
    "reponse_f1": "Supposer l'atomicité globale automatique",
    "reponse_f2": "Faire plusieurs écritures sans contrôle",
    "explication": "Les transactions existent parfois mais ont un coût."
  },
  {
    "id": 282,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne écriture concerne un seul document.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 32\n\nRéférence exercice : NOSQL-282`",
    "reponse_v": "L'atomicité est souvent garantie au niveau du document",
    "reponse_f1": "Aucune atomicité n'existe",
    "reponse_f2": "Toute écriture nécessite un consensus global",
    "explication": "Beaucoup de bases document garantissent l'atomicité par document."
  },
  {
    "id": 283,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUn cluster doit survivre à la perte d'un nœud.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 33\n\nRéférence exercice : NOSQL-283`",
    "reponse_v": "Configurer réplication et quorum adaptés",
    "reponse_f1": "Utiliser un seul nœud",
    "reponse_f2": "Désactiver les sauvegardes",
    "explication": "La redondance doit être planifiée."
  },
  {
    "id": 284,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne sauvegarde cohérente est requise.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 34\n\nRéférence exercice : NOSQL-284`",
    "reponse_v": "Utiliser snapshot ou mécanisme natif coordonné",
    "reponse_f1": "Copier les fichiers à chaud sans contrôle",
    "reponse_f2": "Sauvegarder uniquement les logs applicatifs",
    "explication": "La cohérence dépend du moteur et de sa méthode de backup."
  },
  {
    "id": 285,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLes accès doivent être limités par application.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 35\n\nRéférence exercice : NOSQL-285`",
    "reponse_v": "Appliquer authentification, rôles et moindre privilège",
    "reponse_f1": "Partager un compte administrateur",
    "reponse_f2": "Rendre le cluster public",
    "explication": "La sécurité suit les mêmes principes que tout SI."
  },
  {
    "id": 286,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLes données sensibles sont stockées.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 36\n\nRéférence exercice : NOSQL-286`",
    "reponse_v": "Chiffrer en transit et au repos",
    "reponse_f1": "Compresser uniquement",
    "reponse_f2": "Masquer les noms de collections",
    "explication": "Le chiffrement protège confidentialité et exposition."
  },
  {
    "id": 287,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUn schéma évolue entre versions d'application.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 37\n\nRéférence exercice : NOSQL-287`",
    "reponse_v": "Prévoir compatibilité ascendante et migration progressive",
    "reponse_f1": "Changer tous les documents sans stratégie",
    "reponse_f2": "Ignorer les anciens documents",
    "explication": "Le schéma flexible exige une gestion de version."
  },
  {
    "id": 288,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne application exige reporting relationnel et graph traversal.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 38\n\nRéférence exercice : NOSQL-288`",
    "reponse_v": "Combiner éventuellement plusieurs moteurs spécialisés",
    "reponse_f1": "Forcer un seul moteur pour tous les usages",
    "reponse_f2": "Utiliser uniquement un cache",
    "explication": "Le polyglot persistence peut être justifié."
  },
  {
    "id": 289,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne base est choisie uniquement parce qu'elle est NoSQL.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 39\n\nRéférence exercice : NOSQL-289`",
    "reponse_v": "Le choix doit partir des besoins et requêtes",
    "reponse_f1": "NoSQL est toujours supérieur au SQL",
    "reponse_f2": "Le modèle n'a aucune importance",
    "explication": "La technologie doit correspondre au cas d'usage."
  },
  {
    "id": 290,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLe cluster est étendu sans tests de charge.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 40\n\nRéférence exercice : NOSQL-290`",
    "reponse_v": "Mesurer latence, throughput, rééquilibrage et pannes",
    "reponse_f1": "Supposer un scaling linéaire parfait",
    "reponse_f2": "Désactiver la supervision",
    "explication": "Le scale-out réel dépend du moteur et des accès."
  },
  {
    "id": 291,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne opération doit modifier plusieurs documents atomiquement.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 41\n\nRéférence exercice : NOSQL-291`",
    "reponse_v": "Utiliser une transaction multi-documents si supportée et nécessaire",
    "reponse_f1": "Supposer l'atomicité globale automatique",
    "reponse_f2": "Faire plusieurs écritures sans contrôle",
    "explication": "Les transactions existent parfois mais ont un coût."
  },
  {
    "id": 292,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne écriture concerne un seul document.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 42\n\nRéférence exercice : NOSQL-292`",
    "reponse_v": "L'atomicité est souvent garantie au niveau du document",
    "reponse_f1": "Aucune atomicité n'existe",
    "reponse_f2": "Toute écriture nécessite un consensus global",
    "explication": "Beaucoup de bases document garantissent l'atomicité par document."
  },
  {
    "id": 293,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUn cluster doit survivre à la perte d'un nœud.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 43\n\nRéférence exercice : NOSQL-293`",
    "reponse_v": "Configurer réplication et quorum adaptés",
    "reponse_f1": "Utiliser un seul nœud",
    "reponse_f2": "Désactiver les sauvegardes",
    "explication": "La redondance doit être planifiée."
  },
  {
    "id": 294,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne sauvegarde cohérente est requise.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 44\n\nRéférence exercice : NOSQL-294`",
    "reponse_v": "Utiliser snapshot ou mécanisme natif coordonné",
    "reponse_f1": "Copier les fichiers à chaud sans contrôle",
    "reponse_f2": "Sauvegarder uniquement les logs applicatifs",
    "explication": "La cohérence dépend du moteur et de sa méthode de backup."
  },
  {
    "id": 295,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLes accès doivent être limités par application.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 45\n\nRéférence exercice : NOSQL-295`",
    "reponse_v": "Appliquer authentification, rôles et moindre privilège",
    "reponse_f1": "Partager un compte administrateur",
    "reponse_f2": "Rendre le cluster public",
    "explication": "La sécurité suit les mêmes principes que tout SI."
  },
  {
    "id": 296,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLes données sensibles sont stockées.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 46\n\nRéférence exercice : NOSQL-296`",
    "reponse_v": "Chiffrer en transit et au repos",
    "reponse_f1": "Compresser uniquement",
    "reponse_f2": "Masquer les noms de collections",
    "explication": "Le chiffrement protège confidentialité et exposition."
  },
  {
    "id": 297,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUn schéma évolue entre versions d'application.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 47\n\nRéférence exercice : NOSQL-297`",
    "reponse_v": "Prévoir compatibilité ascendante et migration progressive",
    "reponse_f1": "Changer tous les documents sans stratégie",
    "reponse_f2": "Ignorer les anciens documents",
    "explication": "Le schéma flexible exige une gestion de version."
  },
  {
    "id": 298,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne application exige reporting relationnel et graph traversal.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 48\n\nRéférence exercice : NOSQL-298`",
    "reponse_v": "Combiner éventuellement plusieurs moteurs spécialisés",
    "reponse_f1": "Forcer un seul moteur pour tous les usages",
    "reponse_f2": "Utiliser uniquement un cache",
    "explication": "Le polyglot persistence peut être justifié."
  },
  {
    "id": 299,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nUne base est choisie uniquement parce qu'elle est NoSQL.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 49\n\nRéférence exercice : NOSQL-299`",
    "reponse_v": "Le choix doit partir des besoins et requêtes",
    "reponse_f1": "NoSQL est toujours supérieur au SQL",
    "reponse_f2": "Le modèle n'a aucune importance",
    "explication": "La technologie doit correspondre au cas d'usage."
  },
  {
    "id": 300,
    "question": "`Mini-TP NoSQL — transactions et exploitation\n\nContexte :\nLe cluster est étendu sans tests de charge.\n\nQuelle décision est la plus rigoureuse ?\n\nCas exploitation : 50\n\nRéférence exercice : NOSQL-300`",
    "reponse_v": "Mesurer latence, throughput, rééquilibrage et pannes",
    "reponse_f1": "Supposer un scaling linéaire parfait",
    "reponse_f2": "Désactiver la supervision",
    "explication": "Le scale-out réel dépend du moteur et des accès."
  }
]
