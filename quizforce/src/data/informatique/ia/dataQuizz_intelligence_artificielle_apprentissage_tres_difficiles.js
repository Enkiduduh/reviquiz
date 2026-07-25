export const dataQuizz_intelligence_artificielle_apprentissage_tres_difficiles = [
  {
    "id": 1,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe score d'entraînement atteint 99 %, contre 70 % en validation.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 01\n\nRéférence exercice : IA-001`",
    "reponse_v": "Surapprentissage",
    "reponse_f1": "Sous-apprentissage",
    "reponse_f2": "Calibration parfaite",
    "explication": "L'écart train-validation indique une variance élevée."
  },
  {
    "id": 2,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes scores d'entraînement et de validation sont tous deux faibles.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 02\n\nRéférence exercice : IA-002`",
    "reponse_v": "Sous-apprentissage",
    "reponse_f1": "Surapprentissage",
    "reponse_f2": "Fuite de données",
    "explication": "Un biais élevé produit de mauvaises performances partout."
  },
  {
    "id": 3,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nUne variable calculée après la date de prédiction est utilisée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 03\n\nRéférence exercice : IA-003`",
    "reponse_v": "Fuite de données",
    "reponse_f1": "Régularisation",
    "reponse_f2": "Data augmentation",
    "explication": "Une information future fausse l'évaluation."
  },
  {
    "id": 4,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nDes données temporelles sont mélangées aléatoirement avant validation.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 04\n\nRéférence exercice : IA-004`",
    "reponse_v": "La validation risque de violer l'ordre temporel",
    "reponse_f1": "La validation devient plus robuste",
    "reponse_f2": "Aucun risque n'existe",
    "explication": "Il faut préserver la causalité temporelle."
  },
  {
    "id": 5,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLa classe positive représente 1 % des cas.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 05\n\nRéférence exercice : IA-005`",
    "reponse_v": "L'accuracy seule est insuffisante",
    "reponse_f1": "L'accuracy suffit toujours",
    "reponse_f2": "Il faut supprimer la classe rare",
    "explication": "Précision, rappel, F1 et PR-AUC sont plus informatifs."
  },
  {
    "id": 6,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes erreurs extrêmes doivent être moins influentes.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 06\n\nRéférence exercice : IA-006`",
    "reponse_v": "Privilégier MAE à MSE",
    "reponse_f1": "Privilégier MSE à MAE",
    "reponse_f2": "Utiliser uniquement R²",
    "explication": "MAE est moins sensible aux outliers."
  },
  {
    "id": 7,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes probabilités prédites doivent refléter les fréquences réelles.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 07\n\nRéférence exercice : IA-007`",
    "reponse_v": "Évaluer la calibration",
    "reponse_f1": "Évaluer uniquement l'accuracy",
    "reponse_f2": "Fixer arbitrairement le seuil à 0,5",
    "explication": "La calibration mesure la qualité probabiliste."
  },
  {
    "id": 8,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe rappel doit être augmenté.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 08\n\nRéférence exercice : IA-008`",
    "reponse_v": "Abaisser généralement le seuil de décision",
    "reponse_f1": "Augmenter toujours le seuil",
    "reponse_f2": "Le seuil n'a aucun effet",
    "explication": "Un seuil plus bas produit davantage de positifs."
  },
  {
    "id": 9,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nUn individu possède plusieurs lignes dans le dataset.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 09\n\nRéférence exercice : IA-009`",
    "reponse_v": "Regrouper ses lignes dans le même fold",
    "reponse_f1": "Répartir chaque ligne au hasard",
    "reponse_f2": "Supprimer l'identifiant uniquement",
    "explication": "Sinon, des informations peuvent fuiter entre folds."
  },
  {
    "id": 10,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe jeu de test a guidé de nombreux choix d'hyperparamètres.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 10\n\nRéférence exercice : IA-010`",
    "reponse_v": "Il n'est plus un test totalement neutre",
    "reponse_f1": "Il reste parfaitement indépendant",
    "reponse_f2": "Le modèle devient non supervisé",
    "explication": "Le test a été indirectement sur-optimisé."
  },
  {
    "id": 11,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne régression pénalisée reçoit des variables d'échelles très différentes.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 11\n\nRéférence exercice : IA-011`",
    "reponse_v": "Standardiser les variables",
    "reponse_f1": "Ne jamais mettre à l'échelle",
    "reponse_f2": "Convertir les nombres en texte",
    "explication": "La pénalisation dépend de la taille des coefficients."
  },
  {
    "id": 12,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUn arbre de décision est trop profond.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 12\n\nRéférence exercice : IA-012`",
    "reponse_v": "Limiter sa complexité",
    "reponse_f1": "Augmenter encore sa profondeur",
    "reponse_f2": "Supprimer la cible",
    "explication": "Le pruning ou les limites réduisent la variance."
  },
  {
    "id": 13,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUn Random Forest améliore un arbre unique.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 13\n\nRéférence exercice : IA-013`",
    "reponse_v": "Il réduit souvent la variance",
    "reponse_f1": "Il supprime toujours tout biais",
    "reponse_f2": "Il n'utilise qu'un arbre",
    "explication": "Le bagging agrège des arbres décorrelés."
  },
  {
    "id": 14,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLe gradient boosting ajoute des arbres successifs.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 14\n\nRéférence exercice : IA-014`",
    "reponse_v": "Chaque arbre corrige les erreurs précédentes",
    "reponse_f1": "Tous les arbres sont indépendants",
    "reponse_f2": "Il ne peut jamais surapprendre",
    "explication": "Le boosting est séquentiel."
  },
  {
    "id": 15,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne variable catégorielle possède 100 000 modalités.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 15\n\nRéférence exercice : IA-015`",
    "reponse_v": "Éviter un one-hot naïf",
    "reponse_f1": "Créer systématiquement 100 000 colonnes",
    "reponse_f2": "Supprimer toutes les autres variables",
    "explication": "La haute cardinalité peut exploser la dimension."
  },
  {
    "id": 16,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne variable ordinale contient faible, moyen, élevé.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 16\n\nRéférence exercice : IA-016`",
    "reponse_v": "Préserver l'ordre dans l'encodage",
    "reponse_f1": "Utiliser des identifiants aléatoires",
    "reponse_f2": "Traiter les modalités comme identiques",
    "explication": "L'ordre est une information utile."
  },
  {
    "id": 17,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nK-means reçoit des variables non standardisées.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 17\n\nRéférence exercice : IA-017`",
    "reponse_v": "Les grandes échelles dominent la distance",
    "reponse_f1": "La standardisation est interdite",
    "reponse_f2": "K-means devient supervisé",
    "explication": "K-means utilise les distances."
  },
  {
    "id": 18,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLes données contiennent de nombreux outliers.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 18\n\nRéférence exercice : IA-018`",
    "reponse_v": "Utiliser une transformation ou un scaler robuste",
    "reponse_f1": "Utiliser toujours min-max sans analyse",
    "reponse_f2": "Remplacer tous les outliers par zéro",
    "explication": "Les statistiques robustes limitent leur influence."
  },
  {
    "id": 19,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nL'imputation est calculée avant le split train-test.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 19\n\nRéférence exercice : IA-019`",
    "reponse_v": "Risque de fuite d'information",
    "reponse_f1": "Aucun risque possible",
    "reponse_f2": "Le test devient inutilement petit",
    "explication": "L'imputation doit être apprise sur le train."
  },
  {
    "id": 20,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLa PCA est calculée avant validation croisée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 20\n\nRéférence exercice : IA-020`",
    "reponse_v": "L'intégrer dans le pipeline de chaque fold",
    "reponse_f1": "La calculer sur toutes les données",
    "reponse_f2": "La remplacer par la cible",
    "explication": "Sinon, la validation fuit l'information."
  },
  {
    "id": 21,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUn réseau profond à sigmoïdes apprend très lentement.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 21\n\nRéférence exercice : IA-021`",
    "reponse_v": "Risque de vanishing gradient",
    "reponse_f1": "Explosion garantie du gradient",
    "reponse_f2": "Convergence toujours rapide",
    "explication": "Les dérivées de la sigmoïde peuvent être faibles."
  },
  {
    "id": 22,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nDe nombreuses ReLU restent toujours nulles.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 22\n\nRéférence exercice : IA-022`",
    "reponse_v": "Phénomène de dead ReLU",
    "reponse_f1": "Effet softmax",
    "reponse_f2": "Calibration parfaite",
    "explication": "Des activations négatives persistantes peuvent tuer les neurones."
  },
  {
    "id": 23,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLa loss train baisse mais la loss validation monte.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 23\n\nRéférence exercice : IA-023`",
    "reponse_v": "Début de surapprentissage",
    "reponse_f1": "Sous-apprentissage certain",
    "reponse_f2": "Validation inutile",
    "explication": "La généralisation se dégrade."
  },
  {
    "id": 24,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLe learning rate est trop élevé.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 24\n\nRéférence exercice : IA-024`",
    "reponse_v": "Oscillation ou divergence",
    "reponse_f1": "Convergence toujours plus rapide",
    "reponse_f2": "Gradient automatiquement nul",
    "explication": "Les pas dépassent les minima."
  },
  {
    "id": 25,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLe learning rate est trop faible.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 25\n\nRéférence exercice : IA-025`",
    "reponse_v": "Apprentissage très lent",
    "reponse_f1": "Convergence instantanée",
    "reponse_f2": "Loss nécessairement croissante",
    "explication": "Les mises à jour sont minuscules."
  },
  {
    "id": 26,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nBatch normalization est ajoutée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 26\n\nRéférence exercice : IA-026`",
    "reponse_v": "Elle stabilise souvent l'entraînement",
    "reponse_f1": "Elle remplace toute activation",
    "reponse_f2": "Elle garantit zéro overfitting",
    "explication": "Elle normalise les activations intermédiaires."
  },
  {
    "id": 27,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nDropout est actif pendant l'entraînement.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 27\n\nRéférence exercice : IA-027`",
    "reponse_v": "Des unités sont désactivées aléatoirement",
    "reponse_f1": "Tous les poids deviennent nuls",
    "reponse_f2": "Le modèle devient déterministe",
    "explication": "Dropout agit comme régularisation."
  },
  {
    "id": 28,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUne classification multiclasse exclusive est visée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 28\n\nRéférence exercice : IA-028`",
    "reponse_v": "Softmax et cross-entropy",
    "reponse_f1": "Sigmoïdes indépendantes uniquement",
    "reponse_f2": "Une ReLU scalaire",
    "explication": "Softmax produit une distribution exclusive."
  },
  {
    "id": 29,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUne classification multilabel est visée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 29\n\nRéférence exercice : IA-029`",
    "reponse_v": "Sigmoïde indépendante par classe",
    "reponse_f1": "Softmax exclusif",
    "reponse_f2": "Une seule sortie binaire globale",
    "explication": "Plusieurs labels peuvent être vrais."
  },
  {
    "id": 30,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLes gradients explosent dans un RNN.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 30\n\nRéférence exercice : IA-030`",
    "reponse_v": "Appliquer gradient clipping",
    "reponse_f1": "Augmenter le learning rate",
    "reponse_f2": "Supprimer la loss",
    "explication": "Le clipping borne la norme."
  },
  {
    "id": 31,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nDeux mots sémantiquement proches doivent avoir des vecteurs voisins.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 31\n\nRéférence exercice : IA-031`",
    "reponse_v": "Utiliser des embeddings",
    "reponse_f1": "Utiliser des identifiants arbitraires",
    "reponse_f2": "Utiliser seulement la longueur des mots",
    "explication": "Les embeddings apprennent une géométrie sémantique."
  },
  {
    "id": 32,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn modèle prédit le prochain token.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 32\n\nRéférence exercice : IA-032`",
    "reponse_v": "Il estime une distribution conditionnelle",
    "reponse_f1": "Il fait uniquement une classification binaire",
    "reponse_f2": "Il ignore le contexte",
    "explication": "Un LM autoregressif dépend des tokens précédents."
  },
  {
    "id": 33,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne séquence longue contient des dépendances distantes.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 33\n\nRéférence exercice : IA-033`",
    "reponse_v": "L'attention facilite les interactions globales",
    "reponse_f1": "Un bag-of-words conserve tout l'ordre",
    "reponse_f2": "Une convolution 1x1 suffit toujours",
    "explication": "L'attention relie directement les positions."
  },
  {
    "id": 34,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn Transformer n'a aucun encodage positionnel.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 34\n\nRéférence exercice : IA-034`",
    "reponse_v": "Il perd l'ordre explicite",
    "reponse_f1": "Il apprend toujours l'ordre exact",
    "reponse_f2": "Il devient un CNN",
    "explication": "L'attention seule est permutation-equivariant."
  },
  {
    "id": 35,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nDes images sont légèrement tournées et recadrées.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 35\n\nRéférence exercice : IA-035`",
    "reponse_v": "L'augmentation peut améliorer la généralisation",
    "reponse_f1": "Toute augmentation détruit les labels",
    "reponse_f2": "Elle remplace la validation",
    "explication": "Les transformations valides enrichissent les données."
  },
  {
    "id": 36,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn CNN partage ses filtres spatialement.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 36\n\nRéférence exercice : IA-036`",
    "reponse_v": "Cela réduit le nombre de paramètres",
    "reponse_f1": "Chaque pixel a son propre réseau",
    "reponse_f2": "Cela détruit toute structure locale",
    "explication": "Le partage exploite la localité."
  },
  {
    "id": 37,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne segmentation sémantique est demandée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 37\n\nRéférence exercice : IA-037`",
    "reponse_v": "Prédire une classe par pixel",
    "reponse_f1": "Prédire une classe par image",
    "reponse_f2": "Prédire seulement des boîtes",
    "explication": "La sortie est une carte dense."
  },
  {
    "id": 38,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne détection d'objets est demandée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 38\n\nRéférence exercice : IA-038`",
    "reponse_v": "Prédire classes et boîtes",
    "reponse_f1": "Prédire un score global uniquement",
    "reponse_f2": "Prédire des embeddings textuels",
    "explication": "La détection localise et classe."
  },
  {
    "id": 39,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nLe tokenizer produit trop de tokens inconnus.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 39\n\nRéférence exercice : IA-039`",
    "reponse_v": "Utiliser des sous-mots",
    "reponse_f1": "Supprimer tous les mots rares",
    "reponse_f2": "Utiliser une phrase entière comme token",
    "explication": "Le subword réduit les OOV."
  },
  {
    "id": 40,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne recherche sémantique est construite.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 40\n\nRéférence exercice : IA-040`",
    "reponse_v": "Comparer des embeddings",
    "reponse_f1": "Comparer uniquement les chaînes exactes",
    "reponse_f2": "Comparer les tailles de fichiers",
    "explication": "Les embeddings capturent le sens."
  },
  {
    "id": 41,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nK-means reçoit des clusters allongés et non sphériques.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 41\n\nRéférence exercice : IA-041`",
    "reponse_v": "Il peut être inadapté",
    "reponse_f1": "Il est toujours optimal",
    "reponse_f2": "Le nombre de clusters est sans importance",
    "explication": "K-means favorise des groupes sphériques."
  },
  {
    "id": 42,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nDBSCAN est utilisé.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 42\n\nRéférence exercice : IA-042`",
    "reponse_v": "Il peut détecter du bruit et des formes arbitraires",
    "reponse_f1": "Il exige toujours k",
    "reponse_f2": "Il ne détecte jamais d'outliers",
    "explication": "DBSCAN repose sur la densité."
  },
  {
    "id": 43,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne PCA conserve 95 % de variance.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 43\n\nRéférence exercice : IA-043`",
    "reponse_v": "Elle réduit la dimension en gardant l'essentiel de la variance linéaire",
    "reponse_f1": "Elle conserve toutes les informations",
    "reponse_f2": "Elle garde les variables originales",
    "explication": "La PCA projette sur des axes orthogonaux."
  },
  {
    "id": 44,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn autoencodeur possède un goulot d'étranglement.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 44\n\nRéférence exercice : IA-044`",
    "reponse_v": "Il peut apprendre une représentation compacte",
    "reponse_f1": "Il réalise uniquement une classification",
    "reponse_f2": "Il n'utilise aucune loss",
    "explication": "La reconstruction force une compression utile."
  },
  {
    "id": 45,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne récompense différée doit guider les actions.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 45\n\nRéférence exercice : IA-045`",
    "reponse_v": "Optimiser le retour cumulé actualisé",
    "reponse_f1": "Optimiser uniquement la récompense immédiate",
    "reponse_f2": "Ignorer les états futurs",
    "explication": "Le RL considère les conséquences futures."
  },
  {
    "id": 46,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne politique exploite toujours l'action estimée meilleure.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 46\n\nRéférence exercice : IA-046`",
    "reponse_v": "Elle peut manquer d'exploration",
    "reponse_f1": "Elle explore tout l'espace",
    "reponse_f2": "Elle est automatiquement optimale",
    "explication": "L'exploitation pure peut bloquer."
  },
  {
    "id": 47,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne stratégie epsilon-greedy est utilisée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 47\n\nRéférence exercice : IA-047`",
    "reponse_v": "Elle explore avec probabilité epsilon",
    "reponse_f1": "Elle n'exploite jamais",
    "reponse_f2": "Elle choisit toujours l'action la pire",
    "explication": "Elle équilibre exploration et exploitation."
  },
  {
    "id": 48,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn GAN oppose générateur et discriminateur.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 48\n\nRéférence exercice : IA-048`",
    "reponse_v": "Le générateur produit des exemples plausibles",
    "reponse_f1": "Le discriminateur génère les données finales",
    "reponse_f2": "Les deux ont le même objectif",
    "explication": "Le générateur tente de tromper le discriminateur."
  },
  {
    "id": 49,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn modèle génératif reproduit presque exactement le train.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 49\n\nRéférence exercice : IA-049`",
    "reponse_v": "Risque de mémorisation et fuite",
    "reponse_f1": "Preuve de généralisation parfaite",
    "reponse_f2": "Preuve d'anonymisation",
    "explication": "La mémorisation peut exposer des données."
  },
  {
    "id": 50,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn modèle de diffusion génère des données.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 50\n\nRéférence exercice : IA-050`",
    "reponse_v": "Il débruite progressivement",
    "reponse_f1": "Il fait uniquement du clustering",
    "reponse_f2": "Il n'apprend rien",
    "explication": "Il inverse un processus de bruit."
  },
  {
    "id": 51,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nLa distribution des features change en production.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 51\n\nRéférence exercice : IA-051`",
    "reponse_v": "Data drift",
    "reponse_f1": "Label leakage obligatoire",
    "reponse_f2": "Overfitting certain",
    "explication": "Le data drift touche les entrées."
  },
  {
    "id": 52,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nLa relation entre features et cible change.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 52\n\nRéférence exercice : IA-052`",
    "reponse_v": "Concept drift",
    "reponse_f1": "Simple changement de format",
    "reponse_f2": "Calibration parfaite",
    "explication": "La fonction cible évolue."
  },
  {
    "id": 53,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUn modèle est déployé sans suivi.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 53\n\nRéférence exercice : IA-053`",
    "reponse_v": "Ajouter monitoring et alertes",
    "reponse_f1": "Considérer la performance figée",
    "reponse_f2": "Supprimer les logs",
    "explication": "Les performances peuvent se dégrader."
  },
  {
    "id": 54,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne feature sensible influence fortement les décisions.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 54\n\nRéférence exercice : IA-054`",
    "reponse_v": "Évaluer l'équité et les risques de discrimination",
    "reponse_f1": "Masquer uniquement son nom",
    "reponse_f2": "Ignorer l'effet si l'accuracy est bonne",
    "explication": "La performance globale ne suffit pas."
  },
  {
    "id": 55,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne prédiction complexe doit être expliquée localement.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 55\n\nRéférence exercice : IA-055`",
    "reponse_v": "Utiliser une méthode locale avec prudence",
    "reponse_f1": "Utiliser seulement l'accuracy",
    "reponse_f2": "Lire des poids inexistants",
    "explication": "Les explications locales sont approximatives."
  },
  {
    "id": 56,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne importance par permutation est calculée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 56\n\nRéférence exercice : IA-056`",
    "reponse_v": "Elle mesure la perte de performance après perturbation",
    "reponse_f1": "Elle prouve une causalité",
    "reponse_f2": "Elle ignore les corrélations",
    "explication": "Elle mesure une dépendance prédictive."
  },
  {
    "id": 57,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUn modèle doit être reproduit plus tard.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 57\n\nRéférence exercice : IA-057`",
    "reponse_v": "Versionner code, données, paramètres et environnement",
    "reponse_f1": "Conserver uniquement le fichier modèle",
    "reponse_f2": "Noter seulement le score",
    "explication": "La reproductibilité couvre toute la chaîne."
  },
  {
    "id": 58,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nDeux modèles sont comparés en production.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 58\n\nRéférence exercice : IA-058`",
    "reponse_v": "Utiliser un A/B test contrôlé",
    "reponse_f1": "Remplacer immédiatement tout le trafic",
    "reponse_f2": "Comparer seulement les tailles de fichiers",
    "explication": "Un test contrôlé réduit le risque."
  },
  {
    "id": 59,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne nouvelle version reçoit 5 % du trafic.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 59\n\nRéférence exercice : IA-059`",
    "reponse_v": "Canary deployment",
    "reponse_f1": "Validation croisée",
    "reponse_f2": "Clustering hiérarchique",
    "explication": "Le canary limite l'exposition."
  },
  {
    "id": 60,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne décision automatisée est critique.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 1 — scénario : 60\n\nRéférence exercice : IA-060`",
    "reponse_v": "Prévoir supervision humaine et recours",
    "reponse_f1": "Supprimer toute intervention",
    "reponse_f2": "Utiliser uniquement la confiance maximale",
    "explication": "Les contextes critiques exigent des garde-fous."
  },
  {
    "id": 61,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe score d'entraînement atteint 99 %, contre 70 % en validation.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 01\n\nRéférence exercice : IA-061`",
    "reponse_v": "Surapprentissage",
    "reponse_f1": "Sous-apprentissage",
    "reponse_f2": "Calibration parfaite",
    "explication": "L'écart train-validation indique une variance élevée."
  },
  {
    "id": 62,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes scores d'entraînement et de validation sont tous deux faibles.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 02\n\nRéférence exercice : IA-062`",
    "reponse_v": "Sous-apprentissage",
    "reponse_f1": "Surapprentissage",
    "reponse_f2": "Fuite de données",
    "explication": "Un biais élevé produit de mauvaises performances partout."
  },
  {
    "id": 63,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nUne variable calculée après la date de prédiction est utilisée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 03\n\nRéférence exercice : IA-063`",
    "reponse_v": "Fuite de données",
    "reponse_f1": "Régularisation",
    "reponse_f2": "Data augmentation",
    "explication": "Une information future fausse l'évaluation."
  },
  {
    "id": 64,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nDes données temporelles sont mélangées aléatoirement avant validation.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 04\n\nRéférence exercice : IA-064`",
    "reponse_v": "La validation risque de violer l'ordre temporel",
    "reponse_f1": "La validation devient plus robuste",
    "reponse_f2": "Aucun risque n'existe",
    "explication": "Il faut préserver la causalité temporelle."
  },
  {
    "id": 65,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLa classe positive représente 1 % des cas.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 05\n\nRéférence exercice : IA-065`",
    "reponse_v": "L'accuracy seule est insuffisante",
    "reponse_f1": "L'accuracy suffit toujours",
    "reponse_f2": "Il faut supprimer la classe rare",
    "explication": "Précision, rappel, F1 et PR-AUC sont plus informatifs."
  },
  {
    "id": 66,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes erreurs extrêmes doivent être moins influentes.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 06\n\nRéférence exercice : IA-066`",
    "reponse_v": "Privilégier MAE à MSE",
    "reponse_f1": "Privilégier MSE à MAE",
    "reponse_f2": "Utiliser uniquement R²",
    "explication": "MAE est moins sensible aux outliers."
  },
  {
    "id": 67,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes probabilités prédites doivent refléter les fréquences réelles.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 07\n\nRéférence exercice : IA-067`",
    "reponse_v": "Évaluer la calibration",
    "reponse_f1": "Évaluer uniquement l'accuracy",
    "reponse_f2": "Fixer arbitrairement le seuil à 0,5",
    "explication": "La calibration mesure la qualité probabiliste."
  },
  {
    "id": 68,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe rappel doit être augmenté.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 08\n\nRéférence exercice : IA-068`",
    "reponse_v": "Abaisser généralement le seuil de décision",
    "reponse_f1": "Augmenter toujours le seuil",
    "reponse_f2": "Le seuil n'a aucun effet",
    "explication": "Un seuil plus bas produit davantage de positifs."
  },
  {
    "id": 69,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nUn individu possède plusieurs lignes dans le dataset.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 09\n\nRéférence exercice : IA-069`",
    "reponse_v": "Regrouper ses lignes dans le même fold",
    "reponse_f1": "Répartir chaque ligne au hasard",
    "reponse_f2": "Supprimer l'identifiant uniquement",
    "explication": "Sinon, des informations peuvent fuiter entre folds."
  },
  {
    "id": 70,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe jeu de test a guidé de nombreux choix d'hyperparamètres.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 10\n\nRéférence exercice : IA-070`",
    "reponse_v": "Il n'est plus un test totalement neutre",
    "reponse_f1": "Il reste parfaitement indépendant",
    "reponse_f2": "Le modèle devient non supervisé",
    "explication": "Le test a été indirectement sur-optimisé."
  },
  {
    "id": 71,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne régression pénalisée reçoit des variables d'échelles très différentes.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 11\n\nRéférence exercice : IA-071`",
    "reponse_v": "Standardiser les variables",
    "reponse_f1": "Ne jamais mettre à l'échelle",
    "reponse_f2": "Convertir les nombres en texte",
    "explication": "La pénalisation dépend de la taille des coefficients."
  },
  {
    "id": 72,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUn arbre de décision est trop profond.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 12\n\nRéférence exercice : IA-072`",
    "reponse_v": "Limiter sa complexité",
    "reponse_f1": "Augmenter encore sa profondeur",
    "reponse_f2": "Supprimer la cible",
    "explication": "Le pruning ou les limites réduisent la variance."
  },
  {
    "id": 73,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUn Random Forest améliore un arbre unique.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 13\n\nRéférence exercice : IA-073`",
    "reponse_v": "Il réduit souvent la variance",
    "reponse_f1": "Il supprime toujours tout biais",
    "reponse_f2": "Il n'utilise qu'un arbre",
    "explication": "Le bagging agrège des arbres décorrelés."
  },
  {
    "id": 74,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLe gradient boosting ajoute des arbres successifs.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 14\n\nRéférence exercice : IA-074`",
    "reponse_v": "Chaque arbre corrige les erreurs précédentes",
    "reponse_f1": "Tous les arbres sont indépendants",
    "reponse_f2": "Il ne peut jamais surapprendre",
    "explication": "Le boosting est séquentiel."
  },
  {
    "id": 75,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne variable catégorielle possède 100 000 modalités.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 15\n\nRéférence exercice : IA-075`",
    "reponse_v": "Éviter un one-hot naïf",
    "reponse_f1": "Créer systématiquement 100 000 colonnes",
    "reponse_f2": "Supprimer toutes les autres variables",
    "explication": "La haute cardinalité peut exploser la dimension."
  },
  {
    "id": 76,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne variable ordinale contient faible, moyen, élevé.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 16\n\nRéférence exercice : IA-076`",
    "reponse_v": "Préserver l'ordre dans l'encodage",
    "reponse_f1": "Utiliser des identifiants aléatoires",
    "reponse_f2": "Traiter les modalités comme identiques",
    "explication": "L'ordre est une information utile."
  },
  {
    "id": 77,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nK-means reçoit des variables non standardisées.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 17\n\nRéférence exercice : IA-077`",
    "reponse_v": "Les grandes échelles dominent la distance",
    "reponse_f1": "La standardisation est interdite",
    "reponse_f2": "K-means devient supervisé",
    "explication": "K-means utilise les distances."
  },
  {
    "id": 78,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLes données contiennent de nombreux outliers.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 18\n\nRéférence exercice : IA-078`",
    "reponse_v": "Utiliser une transformation ou un scaler robuste",
    "reponse_f1": "Utiliser toujours min-max sans analyse",
    "reponse_f2": "Remplacer tous les outliers par zéro",
    "explication": "Les statistiques robustes limitent leur influence."
  },
  {
    "id": 79,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nL'imputation est calculée avant le split train-test.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 19\n\nRéférence exercice : IA-079`",
    "reponse_v": "Risque de fuite d'information",
    "reponse_f1": "Aucun risque possible",
    "reponse_f2": "Le test devient inutilement petit",
    "explication": "L'imputation doit être apprise sur le train."
  },
  {
    "id": 80,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLa PCA est calculée avant validation croisée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 20\n\nRéférence exercice : IA-080`",
    "reponse_v": "L'intégrer dans le pipeline de chaque fold",
    "reponse_f1": "La calculer sur toutes les données",
    "reponse_f2": "La remplacer par la cible",
    "explication": "Sinon, la validation fuit l'information."
  },
  {
    "id": 81,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUn réseau profond à sigmoïdes apprend très lentement.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 21\n\nRéférence exercice : IA-081`",
    "reponse_v": "Risque de vanishing gradient",
    "reponse_f1": "Explosion garantie du gradient",
    "reponse_f2": "Convergence toujours rapide",
    "explication": "Les dérivées de la sigmoïde peuvent être faibles."
  },
  {
    "id": 82,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nDe nombreuses ReLU restent toujours nulles.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 22\n\nRéférence exercice : IA-082`",
    "reponse_v": "Phénomène de dead ReLU",
    "reponse_f1": "Effet softmax",
    "reponse_f2": "Calibration parfaite",
    "explication": "Des activations négatives persistantes peuvent tuer les neurones."
  },
  {
    "id": 83,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLa loss train baisse mais la loss validation monte.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 23\n\nRéférence exercice : IA-083`",
    "reponse_v": "Début de surapprentissage",
    "reponse_f1": "Sous-apprentissage certain",
    "reponse_f2": "Validation inutile",
    "explication": "La généralisation se dégrade."
  },
  {
    "id": 84,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLe learning rate est trop élevé.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 24\n\nRéférence exercice : IA-084`",
    "reponse_v": "Oscillation ou divergence",
    "reponse_f1": "Convergence toujours plus rapide",
    "reponse_f2": "Gradient automatiquement nul",
    "explication": "Les pas dépassent les minima."
  },
  {
    "id": 85,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLe learning rate est trop faible.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 25\n\nRéférence exercice : IA-085`",
    "reponse_v": "Apprentissage très lent",
    "reponse_f1": "Convergence instantanée",
    "reponse_f2": "Loss nécessairement croissante",
    "explication": "Les mises à jour sont minuscules."
  },
  {
    "id": 86,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nBatch normalization est ajoutée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 26\n\nRéférence exercice : IA-086`",
    "reponse_v": "Elle stabilise souvent l'entraînement",
    "reponse_f1": "Elle remplace toute activation",
    "reponse_f2": "Elle garantit zéro overfitting",
    "explication": "Elle normalise les activations intermédiaires."
  },
  {
    "id": 87,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nDropout est actif pendant l'entraînement.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 27\n\nRéférence exercice : IA-087`",
    "reponse_v": "Des unités sont désactivées aléatoirement",
    "reponse_f1": "Tous les poids deviennent nuls",
    "reponse_f2": "Le modèle devient déterministe",
    "explication": "Dropout agit comme régularisation."
  },
  {
    "id": 88,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUne classification multiclasse exclusive est visée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 28\n\nRéférence exercice : IA-088`",
    "reponse_v": "Softmax et cross-entropy",
    "reponse_f1": "Sigmoïdes indépendantes uniquement",
    "reponse_f2": "Une ReLU scalaire",
    "explication": "Softmax produit une distribution exclusive."
  },
  {
    "id": 89,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUne classification multilabel est visée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 29\n\nRéférence exercice : IA-089`",
    "reponse_v": "Sigmoïde indépendante par classe",
    "reponse_f1": "Softmax exclusif",
    "reponse_f2": "Une seule sortie binaire globale",
    "explication": "Plusieurs labels peuvent être vrais."
  },
  {
    "id": 90,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLes gradients explosent dans un RNN.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 30\n\nRéférence exercice : IA-090`",
    "reponse_v": "Appliquer gradient clipping",
    "reponse_f1": "Augmenter le learning rate",
    "reponse_f2": "Supprimer la loss",
    "explication": "Le clipping borne la norme."
  },
  {
    "id": 91,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nDeux mots sémantiquement proches doivent avoir des vecteurs voisins.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 31\n\nRéférence exercice : IA-091`",
    "reponse_v": "Utiliser des embeddings",
    "reponse_f1": "Utiliser des identifiants arbitraires",
    "reponse_f2": "Utiliser seulement la longueur des mots",
    "explication": "Les embeddings apprennent une géométrie sémantique."
  },
  {
    "id": 92,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn modèle prédit le prochain token.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 32\n\nRéférence exercice : IA-092`",
    "reponse_v": "Il estime une distribution conditionnelle",
    "reponse_f1": "Il fait uniquement une classification binaire",
    "reponse_f2": "Il ignore le contexte",
    "explication": "Un LM autoregressif dépend des tokens précédents."
  },
  {
    "id": 93,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne séquence longue contient des dépendances distantes.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 33\n\nRéférence exercice : IA-093`",
    "reponse_v": "L'attention facilite les interactions globales",
    "reponse_f1": "Un bag-of-words conserve tout l'ordre",
    "reponse_f2": "Une convolution 1x1 suffit toujours",
    "explication": "L'attention relie directement les positions."
  },
  {
    "id": 94,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn Transformer n'a aucun encodage positionnel.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 34\n\nRéférence exercice : IA-094`",
    "reponse_v": "Il perd l'ordre explicite",
    "reponse_f1": "Il apprend toujours l'ordre exact",
    "reponse_f2": "Il devient un CNN",
    "explication": "L'attention seule est permutation-equivariant."
  },
  {
    "id": 95,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nDes images sont légèrement tournées et recadrées.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 35\n\nRéférence exercice : IA-095`",
    "reponse_v": "L'augmentation peut améliorer la généralisation",
    "reponse_f1": "Toute augmentation détruit les labels",
    "reponse_f2": "Elle remplace la validation",
    "explication": "Les transformations valides enrichissent les données."
  },
  {
    "id": 96,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn CNN partage ses filtres spatialement.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 36\n\nRéférence exercice : IA-096`",
    "reponse_v": "Cela réduit le nombre de paramètres",
    "reponse_f1": "Chaque pixel a son propre réseau",
    "reponse_f2": "Cela détruit toute structure locale",
    "explication": "Le partage exploite la localité."
  },
  {
    "id": 97,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne segmentation sémantique est demandée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 37\n\nRéférence exercice : IA-097`",
    "reponse_v": "Prédire une classe par pixel",
    "reponse_f1": "Prédire une classe par image",
    "reponse_f2": "Prédire seulement des boîtes",
    "explication": "La sortie est une carte dense."
  },
  {
    "id": 98,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne détection d'objets est demandée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 38\n\nRéférence exercice : IA-098`",
    "reponse_v": "Prédire classes et boîtes",
    "reponse_f1": "Prédire un score global uniquement",
    "reponse_f2": "Prédire des embeddings textuels",
    "explication": "La détection localise et classe."
  },
  {
    "id": 99,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nLe tokenizer produit trop de tokens inconnus.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 39\n\nRéférence exercice : IA-099`",
    "reponse_v": "Utiliser des sous-mots",
    "reponse_f1": "Supprimer tous les mots rares",
    "reponse_f2": "Utiliser une phrase entière comme token",
    "explication": "Le subword réduit les OOV."
  },
  {
    "id": 100,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne recherche sémantique est construite.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 40\n\nRéférence exercice : IA-100`",
    "reponse_v": "Comparer des embeddings",
    "reponse_f1": "Comparer uniquement les chaînes exactes",
    "reponse_f2": "Comparer les tailles de fichiers",
    "explication": "Les embeddings capturent le sens."
  },
  {
    "id": 101,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nK-means reçoit des clusters allongés et non sphériques.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 41\n\nRéférence exercice : IA-101`",
    "reponse_v": "Il peut être inadapté",
    "reponse_f1": "Il est toujours optimal",
    "reponse_f2": "Le nombre de clusters est sans importance",
    "explication": "K-means favorise des groupes sphériques."
  },
  {
    "id": 102,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nDBSCAN est utilisé.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 42\n\nRéférence exercice : IA-102`",
    "reponse_v": "Il peut détecter du bruit et des formes arbitraires",
    "reponse_f1": "Il exige toujours k",
    "reponse_f2": "Il ne détecte jamais d'outliers",
    "explication": "DBSCAN repose sur la densité."
  },
  {
    "id": 103,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne PCA conserve 95 % de variance.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 43\n\nRéférence exercice : IA-103`",
    "reponse_v": "Elle réduit la dimension en gardant l'essentiel de la variance linéaire",
    "reponse_f1": "Elle conserve toutes les informations",
    "reponse_f2": "Elle garde les variables originales",
    "explication": "La PCA projette sur des axes orthogonaux."
  },
  {
    "id": 104,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn autoencodeur possède un goulot d'étranglement.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 44\n\nRéférence exercice : IA-104`",
    "reponse_v": "Il peut apprendre une représentation compacte",
    "reponse_f1": "Il réalise uniquement une classification",
    "reponse_f2": "Il n'utilise aucune loss",
    "explication": "La reconstruction force une compression utile."
  },
  {
    "id": 105,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne récompense différée doit guider les actions.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 45\n\nRéférence exercice : IA-105`",
    "reponse_v": "Optimiser le retour cumulé actualisé",
    "reponse_f1": "Optimiser uniquement la récompense immédiate",
    "reponse_f2": "Ignorer les états futurs",
    "explication": "Le RL considère les conséquences futures."
  },
  {
    "id": 106,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne politique exploite toujours l'action estimée meilleure.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 46\n\nRéférence exercice : IA-106`",
    "reponse_v": "Elle peut manquer d'exploration",
    "reponse_f1": "Elle explore tout l'espace",
    "reponse_f2": "Elle est automatiquement optimale",
    "explication": "L'exploitation pure peut bloquer."
  },
  {
    "id": 107,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne stratégie epsilon-greedy est utilisée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 47\n\nRéférence exercice : IA-107`",
    "reponse_v": "Elle explore avec probabilité epsilon",
    "reponse_f1": "Elle n'exploite jamais",
    "reponse_f2": "Elle choisit toujours l'action la pire",
    "explication": "Elle équilibre exploration et exploitation."
  },
  {
    "id": 108,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn GAN oppose générateur et discriminateur.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 48\n\nRéférence exercice : IA-108`",
    "reponse_v": "Le générateur produit des exemples plausibles",
    "reponse_f1": "Le discriminateur génère les données finales",
    "reponse_f2": "Les deux ont le même objectif",
    "explication": "Le générateur tente de tromper le discriminateur."
  },
  {
    "id": 109,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn modèle génératif reproduit presque exactement le train.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 49\n\nRéférence exercice : IA-109`",
    "reponse_v": "Risque de mémorisation et fuite",
    "reponse_f1": "Preuve de généralisation parfaite",
    "reponse_f2": "Preuve d'anonymisation",
    "explication": "La mémorisation peut exposer des données."
  },
  {
    "id": 110,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn modèle de diffusion génère des données.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 50\n\nRéférence exercice : IA-110`",
    "reponse_v": "Il débruite progressivement",
    "reponse_f1": "Il fait uniquement du clustering",
    "reponse_f2": "Il n'apprend rien",
    "explication": "Il inverse un processus de bruit."
  },
  {
    "id": 111,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nLa distribution des features change en production.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 51\n\nRéférence exercice : IA-111`",
    "reponse_v": "Data drift",
    "reponse_f1": "Label leakage obligatoire",
    "reponse_f2": "Overfitting certain",
    "explication": "Le data drift touche les entrées."
  },
  {
    "id": 112,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nLa relation entre features et cible change.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 52\n\nRéférence exercice : IA-112`",
    "reponse_v": "Concept drift",
    "reponse_f1": "Simple changement de format",
    "reponse_f2": "Calibration parfaite",
    "explication": "La fonction cible évolue."
  },
  {
    "id": 113,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUn modèle est déployé sans suivi.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 53\n\nRéférence exercice : IA-113`",
    "reponse_v": "Ajouter monitoring et alertes",
    "reponse_f1": "Considérer la performance figée",
    "reponse_f2": "Supprimer les logs",
    "explication": "Les performances peuvent se dégrader."
  },
  {
    "id": 114,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne feature sensible influence fortement les décisions.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 54\n\nRéférence exercice : IA-114`",
    "reponse_v": "Évaluer l'équité et les risques de discrimination",
    "reponse_f1": "Masquer uniquement son nom",
    "reponse_f2": "Ignorer l'effet si l'accuracy est bonne",
    "explication": "La performance globale ne suffit pas."
  },
  {
    "id": 115,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne prédiction complexe doit être expliquée localement.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 55\n\nRéférence exercice : IA-115`",
    "reponse_v": "Utiliser une méthode locale avec prudence",
    "reponse_f1": "Utiliser seulement l'accuracy",
    "reponse_f2": "Lire des poids inexistants",
    "explication": "Les explications locales sont approximatives."
  },
  {
    "id": 116,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne importance par permutation est calculée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 56\n\nRéférence exercice : IA-116`",
    "reponse_v": "Elle mesure la perte de performance après perturbation",
    "reponse_f1": "Elle prouve une causalité",
    "reponse_f2": "Elle ignore les corrélations",
    "explication": "Elle mesure une dépendance prédictive."
  },
  {
    "id": 117,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUn modèle doit être reproduit plus tard.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 57\n\nRéférence exercice : IA-117`",
    "reponse_v": "Versionner code, données, paramètres et environnement",
    "reponse_f1": "Conserver uniquement le fichier modèle",
    "reponse_f2": "Noter seulement le score",
    "explication": "La reproductibilité couvre toute la chaîne."
  },
  {
    "id": 118,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nDeux modèles sont comparés en production.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 58\n\nRéférence exercice : IA-118`",
    "reponse_v": "Utiliser un A/B test contrôlé",
    "reponse_f1": "Remplacer immédiatement tout le trafic",
    "reponse_f2": "Comparer seulement les tailles de fichiers",
    "explication": "Un test contrôlé réduit le risque."
  },
  {
    "id": 119,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne nouvelle version reçoit 5 % du trafic.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 59\n\nRéférence exercice : IA-119`",
    "reponse_v": "Canary deployment",
    "reponse_f1": "Validation croisée",
    "reponse_f2": "Clustering hiérarchique",
    "explication": "Le canary limite l'exposition."
  },
  {
    "id": 120,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne décision automatisée est critique.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 2 — scénario : 60\n\nRéférence exercice : IA-120`",
    "reponse_v": "Prévoir supervision humaine et recours",
    "reponse_f1": "Supprimer toute intervention",
    "reponse_f2": "Utiliser uniquement la confiance maximale",
    "explication": "Les contextes critiques exigent des garde-fous."
  },
  {
    "id": 121,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe score d'entraînement atteint 99 %, contre 70 % en validation.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 01\n\nRéférence exercice : IA-121`",
    "reponse_v": "Surapprentissage",
    "reponse_f1": "Sous-apprentissage",
    "reponse_f2": "Calibration parfaite",
    "explication": "L'écart train-validation indique une variance élevée."
  },
  {
    "id": 122,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes scores d'entraînement et de validation sont tous deux faibles.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 02\n\nRéférence exercice : IA-122`",
    "reponse_v": "Sous-apprentissage",
    "reponse_f1": "Surapprentissage",
    "reponse_f2": "Fuite de données",
    "explication": "Un biais élevé produit de mauvaises performances partout."
  },
  {
    "id": 123,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nUne variable calculée après la date de prédiction est utilisée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 03\n\nRéférence exercice : IA-123`",
    "reponse_v": "Fuite de données",
    "reponse_f1": "Régularisation",
    "reponse_f2": "Data augmentation",
    "explication": "Une information future fausse l'évaluation."
  },
  {
    "id": 124,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nDes données temporelles sont mélangées aléatoirement avant validation.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 04\n\nRéférence exercice : IA-124`",
    "reponse_v": "La validation risque de violer l'ordre temporel",
    "reponse_f1": "La validation devient plus robuste",
    "reponse_f2": "Aucun risque n'existe",
    "explication": "Il faut préserver la causalité temporelle."
  },
  {
    "id": 125,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLa classe positive représente 1 % des cas.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 05\n\nRéférence exercice : IA-125`",
    "reponse_v": "L'accuracy seule est insuffisante",
    "reponse_f1": "L'accuracy suffit toujours",
    "reponse_f2": "Il faut supprimer la classe rare",
    "explication": "Précision, rappel, F1 et PR-AUC sont plus informatifs."
  },
  {
    "id": 126,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes erreurs extrêmes doivent être moins influentes.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 06\n\nRéférence exercice : IA-126`",
    "reponse_v": "Privilégier MAE à MSE",
    "reponse_f1": "Privilégier MSE à MAE",
    "reponse_f2": "Utiliser uniquement R²",
    "explication": "MAE est moins sensible aux outliers."
  },
  {
    "id": 127,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes probabilités prédites doivent refléter les fréquences réelles.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 07\n\nRéférence exercice : IA-127`",
    "reponse_v": "Évaluer la calibration",
    "reponse_f1": "Évaluer uniquement l'accuracy",
    "reponse_f2": "Fixer arbitrairement le seuil à 0,5",
    "explication": "La calibration mesure la qualité probabiliste."
  },
  {
    "id": 128,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe rappel doit être augmenté.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 08\n\nRéférence exercice : IA-128`",
    "reponse_v": "Abaisser généralement le seuil de décision",
    "reponse_f1": "Augmenter toujours le seuil",
    "reponse_f2": "Le seuil n'a aucun effet",
    "explication": "Un seuil plus bas produit davantage de positifs."
  },
  {
    "id": 129,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nUn individu possède plusieurs lignes dans le dataset.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 09\n\nRéférence exercice : IA-129`",
    "reponse_v": "Regrouper ses lignes dans le même fold",
    "reponse_f1": "Répartir chaque ligne au hasard",
    "reponse_f2": "Supprimer l'identifiant uniquement",
    "explication": "Sinon, des informations peuvent fuiter entre folds."
  },
  {
    "id": 130,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe jeu de test a guidé de nombreux choix d'hyperparamètres.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 10\n\nRéférence exercice : IA-130`",
    "reponse_v": "Il n'est plus un test totalement neutre",
    "reponse_f1": "Il reste parfaitement indépendant",
    "reponse_f2": "Le modèle devient non supervisé",
    "explication": "Le test a été indirectement sur-optimisé."
  },
  {
    "id": 131,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne régression pénalisée reçoit des variables d'échelles très différentes.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 11\n\nRéférence exercice : IA-131`",
    "reponse_v": "Standardiser les variables",
    "reponse_f1": "Ne jamais mettre à l'échelle",
    "reponse_f2": "Convertir les nombres en texte",
    "explication": "La pénalisation dépend de la taille des coefficients."
  },
  {
    "id": 132,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUn arbre de décision est trop profond.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 12\n\nRéférence exercice : IA-132`",
    "reponse_v": "Limiter sa complexité",
    "reponse_f1": "Augmenter encore sa profondeur",
    "reponse_f2": "Supprimer la cible",
    "explication": "Le pruning ou les limites réduisent la variance."
  },
  {
    "id": 133,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUn Random Forest améliore un arbre unique.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 13\n\nRéférence exercice : IA-133`",
    "reponse_v": "Il réduit souvent la variance",
    "reponse_f1": "Il supprime toujours tout biais",
    "reponse_f2": "Il n'utilise qu'un arbre",
    "explication": "Le bagging agrège des arbres décorrelés."
  },
  {
    "id": 134,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLe gradient boosting ajoute des arbres successifs.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 14\n\nRéférence exercice : IA-134`",
    "reponse_v": "Chaque arbre corrige les erreurs précédentes",
    "reponse_f1": "Tous les arbres sont indépendants",
    "reponse_f2": "Il ne peut jamais surapprendre",
    "explication": "Le boosting est séquentiel."
  },
  {
    "id": 135,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne variable catégorielle possède 100 000 modalités.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 15\n\nRéférence exercice : IA-135`",
    "reponse_v": "Éviter un one-hot naïf",
    "reponse_f1": "Créer systématiquement 100 000 colonnes",
    "reponse_f2": "Supprimer toutes les autres variables",
    "explication": "La haute cardinalité peut exploser la dimension."
  },
  {
    "id": 136,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne variable ordinale contient faible, moyen, élevé.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 16\n\nRéférence exercice : IA-136`",
    "reponse_v": "Préserver l'ordre dans l'encodage",
    "reponse_f1": "Utiliser des identifiants aléatoires",
    "reponse_f2": "Traiter les modalités comme identiques",
    "explication": "L'ordre est une information utile."
  },
  {
    "id": 137,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nK-means reçoit des variables non standardisées.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 17\n\nRéférence exercice : IA-137`",
    "reponse_v": "Les grandes échelles dominent la distance",
    "reponse_f1": "La standardisation est interdite",
    "reponse_f2": "K-means devient supervisé",
    "explication": "K-means utilise les distances."
  },
  {
    "id": 138,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLes données contiennent de nombreux outliers.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 18\n\nRéférence exercice : IA-138`",
    "reponse_v": "Utiliser une transformation ou un scaler robuste",
    "reponse_f1": "Utiliser toujours min-max sans analyse",
    "reponse_f2": "Remplacer tous les outliers par zéro",
    "explication": "Les statistiques robustes limitent leur influence."
  },
  {
    "id": 139,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nL'imputation est calculée avant le split train-test.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 19\n\nRéférence exercice : IA-139`",
    "reponse_v": "Risque de fuite d'information",
    "reponse_f1": "Aucun risque possible",
    "reponse_f2": "Le test devient inutilement petit",
    "explication": "L'imputation doit être apprise sur le train."
  },
  {
    "id": 140,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLa PCA est calculée avant validation croisée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 20\n\nRéférence exercice : IA-140`",
    "reponse_v": "L'intégrer dans le pipeline de chaque fold",
    "reponse_f1": "La calculer sur toutes les données",
    "reponse_f2": "La remplacer par la cible",
    "explication": "Sinon, la validation fuit l'information."
  },
  {
    "id": 141,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUn réseau profond à sigmoïdes apprend très lentement.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 21\n\nRéférence exercice : IA-141`",
    "reponse_v": "Risque de vanishing gradient",
    "reponse_f1": "Explosion garantie du gradient",
    "reponse_f2": "Convergence toujours rapide",
    "explication": "Les dérivées de la sigmoïde peuvent être faibles."
  },
  {
    "id": 142,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nDe nombreuses ReLU restent toujours nulles.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 22\n\nRéférence exercice : IA-142`",
    "reponse_v": "Phénomène de dead ReLU",
    "reponse_f1": "Effet softmax",
    "reponse_f2": "Calibration parfaite",
    "explication": "Des activations négatives persistantes peuvent tuer les neurones."
  },
  {
    "id": 143,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLa loss train baisse mais la loss validation monte.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 23\n\nRéférence exercice : IA-143`",
    "reponse_v": "Début de surapprentissage",
    "reponse_f1": "Sous-apprentissage certain",
    "reponse_f2": "Validation inutile",
    "explication": "La généralisation se dégrade."
  },
  {
    "id": 144,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLe learning rate est trop élevé.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 24\n\nRéférence exercice : IA-144`",
    "reponse_v": "Oscillation ou divergence",
    "reponse_f1": "Convergence toujours plus rapide",
    "reponse_f2": "Gradient automatiquement nul",
    "explication": "Les pas dépassent les minima."
  },
  {
    "id": 145,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLe learning rate est trop faible.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 25\n\nRéférence exercice : IA-145`",
    "reponse_v": "Apprentissage très lent",
    "reponse_f1": "Convergence instantanée",
    "reponse_f2": "Loss nécessairement croissante",
    "explication": "Les mises à jour sont minuscules."
  },
  {
    "id": 146,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nBatch normalization est ajoutée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 26\n\nRéférence exercice : IA-146`",
    "reponse_v": "Elle stabilise souvent l'entraînement",
    "reponse_f1": "Elle remplace toute activation",
    "reponse_f2": "Elle garantit zéro overfitting",
    "explication": "Elle normalise les activations intermédiaires."
  },
  {
    "id": 147,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nDropout est actif pendant l'entraînement.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 27\n\nRéférence exercice : IA-147`",
    "reponse_v": "Des unités sont désactivées aléatoirement",
    "reponse_f1": "Tous les poids deviennent nuls",
    "reponse_f2": "Le modèle devient déterministe",
    "explication": "Dropout agit comme régularisation."
  },
  {
    "id": 148,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUne classification multiclasse exclusive est visée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 28\n\nRéférence exercice : IA-148`",
    "reponse_v": "Softmax et cross-entropy",
    "reponse_f1": "Sigmoïdes indépendantes uniquement",
    "reponse_f2": "Une ReLU scalaire",
    "explication": "Softmax produit une distribution exclusive."
  },
  {
    "id": 149,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUne classification multilabel est visée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 29\n\nRéférence exercice : IA-149`",
    "reponse_v": "Sigmoïde indépendante par classe",
    "reponse_f1": "Softmax exclusif",
    "reponse_f2": "Une seule sortie binaire globale",
    "explication": "Plusieurs labels peuvent être vrais."
  },
  {
    "id": 150,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLes gradients explosent dans un RNN.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 30\n\nRéférence exercice : IA-150`",
    "reponse_v": "Appliquer gradient clipping",
    "reponse_f1": "Augmenter le learning rate",
    "reponse_f2": "Supprimer la loss",
    "explication": "Le clipping borne la norme."
  },
  {
    "id": 151,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nDeux mots sémantiquement proches doivent avoir des vecteurs voisins.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 31\n\nRéférence exercice : IA-151`",
    "reponse_v": "Utiliser des embeddings",
    "reponse_f1": "Utiliser des identifiants arbitraires",
    "reponse_f2": "Utiliser seulement la longueur des mots",
    "explication": "Les embeddings apprennent une géométrie sémantique."
  },
  {
    "id": 152,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn modèle prédit le prochain token.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 32\n\nRéférence exercice : IA-152`",
    "reponse_v": "Il estime une distribution conditionnelle",
    "reponse_f1": "Il fait uniquement une classification binaire",
    "reponse_f2": "Il ignore le contexte",
    "explication": "Un LM autoregressif dépend des tokens précédents."
  },
  {
    "id": 153,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne séquence longue contient des dépendances distantes.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 33\n\nRéférence exercice : IA-153`",
    "reponse_v": "L'attention facilite les interactions globales",
    "reponse_f1": "Un bag-of-words conserve tout l'ordre",
    "reponse_f2": "Une convolution 1x1 suffit toujours",
    "explication": "L'attention relie directement les positions."
  },
  {
    "id": 154,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn Transformer n'a aucun encodage positionnel.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 34\n\nRéférence exercice : IA-154`",
    "reponse_v": "Il perd l'ordre explicite",
    "reponse_f1": "Il apprend toujours l'ordre exact",
    "reponse_f2": "Il devient un CNN",
    "explication": "L'attention seule est permutation-equivariant."
  },
  {
    "id": 155,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nDes images sont légèrement tournées et recadrées.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 35\n\nRéférence exercice : IA-155`",
    "reponse_v": "L'augmentation peut améliorer la généralisation",
    "reponse_f1": "Toute augmentation détruit les labels",
    "reponse_f2": "Elle remplace la validation",
    "explication": "Les transformations valides enrichissent les données."
  },
  {
    "id": 156,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn CNN partage ses filtres spatialement.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 36\n\nRéférence exercice : IA-156`",
    "reponse_v": "Cela réduit le nombre de paramètres",
    "reponse_f1": "Chaque pixel a son propre réseau",
    "reponse_f2": "Cela détruit toute structure locale",
    "explication": "Le partage exploite la localité."
  },
  {
    "id": 157,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne segmentation sémantique est demandée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 37\n\nRéférence exercice : IA-157`",
    "reponse_v": "Prédire une classe par pixel",
    "reponse_f1": "Prédire une classe par image",
    "reponse_f2": "Prédire seulement des boîtes",
    "explication": "La sortie est une carte dense."
  },
  {
    "id": 158,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne détection d'objets est demandée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 38\n\nRéférence exercice : IA-158`",
    "reponse_v": "Prédire classes et boîtes",
    "reponse_f1": "Prédire un score global uniquement",
    "reponse_f2": "Prédire des embeddings textuels",
    "explication": "La détection localise et classe."
  },
  {
    "id": 159,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nLe tokenizer produit trop de tokens inconnus.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 39\n\nRéférence exercice : IA-159`",
    "reponse_v": "Utiliser des sous-mots",
    "reponse_f1": "Supprimer tous les mots rares",
    "reponse_f2": "Utiliser une phrase entière comme token",
    "explication": "Le subword réduit les OOV."
  },
  {
    "id": 160,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne recherche sémantique est construite.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 40\n\nRéférence exercice : IA-160`",
    "reponse_v": "Comparer des embeddings",
    "reponse_f1": "Comparer uniquement les chaînes exactes",
    "reponse_f2": "Comparer les tailles de fichiers",
    "explication": "Les embeddings capturent le sens."
  },
  {
    "id": 161,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nK-means reçoit des clusters allongés et non sphériques.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 41\n\nRéférence exercice : IA-161`",
    "reponse_v": "Il peut être inadapté",
    "reponse_f1": "Il est toujours optimal",
    "reponse_f2": "Le nombre de clusters est sans importance",
    "explication": "K-means favorise des groupes sphériques."
  },
  {
    "id": 162,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nDBSCAN est utilisé.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 42\n\nRéférence exercice : IA-162`",
    "reponse_v": "Il peut détecter du bruit et des formes arbitraires",
    "reponse_f1": "Il exige toujours k",
    "reponse_f2": "Il ne détecte jamais d'outliers",
    "explication": "DBSCAN repose sur la densité."
  },
  {
    "id": 163,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne PCA conserve 95 % de variance.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 43\n\nRéférence exercice : IA-163`",
    "reponse_v": "Elle réduit la dimension en gardant l'essentiel de la variance linéaire",
    "reponse_f1": "Elle conserve toutes les informations",
    "reponse_f2": "Elle garde les variables originales",
    "explication": "La PCA projette sur des axes orthogonaux."
  },
  {
    "id": 164,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn autoencodeur possède un goulot d'étranglement.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 44\n\nRéférence exercice : IA-164`",
    "reponse_v": "Il peut apprendre une représentation compacte",
    "reponse_f1": "Il réalise uniquement une classification",
    "reponse_f2": "Il n'utilise aucune loss",
    "explication": "La reconstruction force une compression utile."
  },
  {
    "id": 165,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne récompense différée doit guider les actions.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 45\n\nRéférence exercice : IA-165`",
    "reponse_v": "Optimiser le retour cumulé actualisé",
    "reponse_f1": "Optimiser uniquement la récompense immédiate",
    "reponse_f2": "Ignorer les états futurs",
    "explication": "Le RL considère les conséquences futures."
  },
  {
    "id": 166,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne politique exploite toujours l'action estimée meilleure.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 46\n\nRéférence exercice : IA-166`",
    "reponse_v": "Elle peut manquer d'exploration",
    "reponse_f1": "Elle explore tout l'espace",
    "reponse_f2": "Elle est automatiquement optimale",
    "explication": "L'exploitation pure peut bloquer."
  },
  {
    "id": 167,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne stratégie epsilon-greedy est utilisée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 47\n\nRéférence exercice : IA-167`",
    "reponse_v": "Elle explore avec probabilité epsilon",
    "reponse_f1": "Elle n'exploite jamais",
    "reponse_f2": "Elle choisit toujours l'action la pire",
    "explication": "Elle équilibre exploration et exploitation."
  },
  {
    "id": 168,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn GAN oppose générateur et discriminateur.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 48\n\nRéférence exercice : IA-168`",
    "reponse_v": "Le générateur produit des exemples plausibles",
    "reponse_f1": "Le discriminateur génère les données finales",
    "reponse_f2": "Les deux ont le même objectif",
    "explication": "Le générateur tente de tromper le discriminateur."
  },
  {
    "id": 169,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn modèle génératif reproduit presque exactement le train.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 49\n\nRéférence exercice : IA-169`",
    "reponse_v": "Risque de mémorisation et fuite",
    "reponse_f1": "Preuve de généralisation parfaite",
    "reponse_f2": "Preuve d'anonymisation",
    "explication": "La mémorisation peut exposer des données."
  },
  {
    "id": 170,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn modèle de diffusion génère des données.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 50\n\nRéférence exercice : IA-170`",
    "reponse_v": "Il débruite progressivement",
    "reponse_f1": "Il fait uniquement du clustering",
    "reponse_f2": "Il n'apprend rien",
    "explication": "Il inverse un processus de bruit."
  },
  {
    "id": 171,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nLa distribution des features change en production.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 51\n\nRéférence exercice : IA-171`",
    "reponse_v": "Data drift",
    "reponse_f1": "Label leakage obligatoire",
    "reponse_f2": "Overfitting certain",
    "explication": "Le data drift touche les entrées."
  },
  {
    "id": 172,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nLa relation entre features et cible change.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 52\n\nRéférence exercice : IA-172`",
    "reponse_v": "Concept drift",
    "reponse_f1": "Simple changement de format",
    "reponse_f2": "Calibration parfaite",
    "explication": "La fonction cible évolue."
  },
  {
    "id": 173,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUn modèle est déployé sans suivi.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 53\n\nRéférence exercice : IA-173`",
    "reponse_v": "Ajouter monitoring et alertes",
    "reponse_f1": "Considérer la performance figée",
    "reponse_f2": "Supprimer les logs",
    "explication": "Les performances peuvent se dégrader."
  },
  {
    "id": 174,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne feature sensible influence fortement les décisions.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 54\n\nRéférence exercice : IA-174`",
    "reponse_v": "Évaluer l'équité et les risques de discrimination",
    "reponse_f1": "Masquer uniquement son nom",
    "reponse_f2": "Ignorer l'effet si l'accuracy est bonne",
    "explication": "La performance globale ne suffit pas."
  },
  {
    "id": 175,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne prédiction complexe doit être expliquée localement.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 55\n\nRéférence exercice : IA-175`",
    "reponse_v": "Utiliser une méthode locale avec prudence",
    "reponse_f1": "Utiliser seulement l'accuracy",
    "reponse_f2": "Lire des poids inexistants",
    "explication": "Les explications locales sont approximatives."
  },
  {
    "id": 176,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne importance par permutation est calculée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 56\n\nRéférence exercice : IA-176`",
    "reponse_v": "Elle mesure la perte de performance après perturbation",
    "reponse_f1": "Elle prouve une causalité",
    "reponse_f2": "Elle ignore les corrélations",
    "explication": "Elle mesure une dépendance prédictive."
  },
  {
    "id": 177,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUn modèle doit être reproduit plus tard.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 57\n\nRéférence exercice : IA-177`",
    "reponse_v": "Versionner code, données, paramètres et environnement",
    "reponse_f1": "Conserver uniquement le fichier modèle",
    "reponse_f2": "Noter seulement le score",
    "explication": "La reproductibilité couvre toute la chaîne."
  },
  {
    "id": 178,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nDeux modèles sont comparés en production.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 58\n\nRéférence exercice : IA-178`",
    "reponse_v": "Utiliser un A/B test contrôlé",
    "reponse_f1": "Remplacer immédiatement tout le trafic",
    "reponse_f2": "Comparer seulement les tailles de fichiers",
    "explication": "Un test contrôlé réduit le risque."
  },
  {
    "id": 179,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne nouvelle version reçoit 5 % du trafic.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 59\n\nRéférence exercice : IA-179`",
    "reponse_v": "Canary deployment",
    "reponse_f1": "Validation croisée",
    "reponse_f2": "Clustering hiérarchique",
    "explication": "Le canary limite l'exposition."
  },
  {
    "id": 180,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne décision automatisée est critique.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 3 — scénario : 60\n\nRéférence exercice : IA-180`",
    "reponse_v": "Prévoir supervision humaine et recours",
    "reponse_f1": "Supprimer toute intervention",
    "reponse_f2": "Utiliser uniquement la confiance maximale",
    "explication": "Les contextes critiques exigent des garde-fous."
  },
  {
    "id": 181,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe score d'entraînement atteint 99 %, contre 70 % en validation.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 01\n\nRéférence exercice : IA-181`",
    "reponse_v": "Surapprentissage",
    "reponse_f1": "Sous-apprentissage",
    "reponse_f2": "Calibration parfaite",
    "explication": "L'écart train-validation indique une variance élevée."
  },
  {
    "id": 182,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes scores d'entraînement et de validation sont tous deux faibles.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 02\n\nRéférence exercice : IA-182`",
    "reponse_v": "Sous-apprentissage",
    "reponse_f1": "Surapprentissage",
    "reponse_f2": "Fuite de données",
    "explication": "Un biais élevé produit de mauvaises performances partout."
  },
  {
    "id": 183,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nUne variable calculée après la date de prédiction est utilisée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 03\n\nRéférence exercice : IA-183`",
    "reponse_v": "Fuite de données",
    "reponse_f1": "Régularisation",
    "reponse_f2": "Data augmentation",
    "explication": "Une information future fausse l'évaluation."
  },
  {
    "id": 184,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nDes données temporelles sont mélangées aléatoirement avant validation.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 04\n\nRéférence exercice : IA-184`",
    "reponse_v": "La validation risque de violer l'ordre temporel",
    "reponse_f1": "La validation devient plus robuste",
    "reponse_f2": "Aucun risque n'existe",
    "explication": "Il faut préserver la causalité temporelle."
  },
  {
    "id": 185,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLa classe positive représente 1 % des cas.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 05\n\nRéférence exercice : IA-185`",
    "reponse_v": "L'accuracy seule est insuffisante",
    "reponse_f1": "L'accuracy suffit toujours",
    "reponse_f2": "Il faut supprimer la classe rare",
    "explication": "Précision, rappel, F1 et PR-AUC sont plus informatifs."
  },
  {
    "id": 186,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes erreurs extrêmes doivent être moins influentes.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 06\n\nRéférence exercice : IA-186`",
    "reponse_v": "Privilégier MAE à MSE",
    "reponse_f1": "Privilégier MSE à MAE",
    "reponse_f2": "Utiliser uniquement R²",
    "explication": "MAE est moins sensible aux outliers."
  },
  {
    "id": 187,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes probabilités prédites doivent refléter les fréquences réelles.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 07\n\nRéférence exercice : IA-187`",
    "reponse_v": "Évaluer la calibration",
    "reponse_f1": "Évaluer uniquement l'accuracy",
    "reponse_f2": "Fixer arbitrairement le seuil à 0,5",
    "explication": "La calibration mesure la qualité probabiliste."
  },
  {
    "id": 188,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe rappel doit être augmenté.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 08\n\nRéférence exercice : IA-188`",
    "reponse_v": "Abaisser généralement le seuil de décision",
    "reponse_f1": "Augmenter toujours le seuil",
    "reponse_f2": "Le seuil n'a aucun effet",
    "explication": "Un seuil plus bas produit davantage de positifs."
  },
  {
    "id": 189,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nUn individu possède plusieurs lignes dans le dataset.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 09\n\nRéférence exercice : IA-189`",
    "reponse_v": "Regrouper ses lignes dans le même fold",
    "reponse_f1": "Répartir chaque ligne au hasard",
    "reponse_f2": "Supprimer l'identifiant uniquement",
    "explication": "Sinon, des informations peuvent fuiter entre folds."
  },
  {
    "id": 190,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe jeu de test a guidé de nombreux choix d'hyperparamètres.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 10\n\nRéférence exercice : IA-190`",
    "reponse_v": "Il n'est plus un test totalement neutre",
    "reponse_f1": "Il reste parfaitement indépendant",
    "reponse_f2": "Le modèle devient non supervisé",
    "explication": "Le test a été indirectement sur-optimisé."
  },
  {
    "id": 191,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne régression pénalisée reçoit des variables d'échelles très différentes.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 11\n\nRéférence exercice : IA-191`",
    "reponse_v": "Standardiser les variables",
    "reponse_f1": "Ne jamais mettre à l'échelle",
    "reponse_f2": "Convertir les nombres en texte",
    "explication": "La pénalisation dépend de la taille des coefficients."
  },
  {
    "id": 192,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUn arbre de décision est trop profond.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 12\n\nRéférence exercice : IA-192`",
    "reponse_v": "Limiter sa complexité",
    "reponse_f1": "Augmenter encore sa profondeur",
    "reponse_f2": "Supprimer la cible",
    "explication": "Le pruning ou les limites réduisent la variance."
  },
  {
    "id": 193,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUn Random Forest améliore un arbre unique.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 13\n\nRéférence exercice : IA-193`",
    "reponse_v": "Il réduit souvent la variance",
    "reponse_f1": "Il supprime toujours tout biais",
    "reponse_f2": "Il n'utilise qu'un arbre",
    "explication": "Le bagging agrège des arbres décorrelés."
  },
  {
    "id": 194,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLe gradient boosting ajoute des arbres successifs.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 14\n\nRéférence exercice : IA-194`",
    "reponse_v": "Chaque arbre corrige les erreurs précédentes",
    "reponse_f1": "Tous les arbres sont indépendants",
    "reponse_f2": "Il ne peut jamais surapprendre",
    "explication": "Le boosting est séquentiel."
  },
  {
    "id": 195,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne variable catégorielle possède 100 000 modalités.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 15\n\nRéférence exercice : IA-195`",
    "reponse_v": "Éviter un one-hot naïf",
    "reponse_f1": "Créer systématiquement 100 000 colonnes",
    "reponse_f2": "Supprimer toutes les autres variables",
    "explication": "La haute cardinalité peut exploser la dimension."
  },
  {
    "id": 196,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne variable ordinale contient faible, moyen, élevé.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 16\n\nRéférence exercice : IA-196`",
    "reponse_v": "Préserver l'ordre dans l'encodage",
    "reponse_f1": "Utiliser des identifiants aléatoires",
    "reponse_f2": "Traiter les modalités comme identiques",
    "explication": "L'ordre est une information utile."
  },
  {
    "id": 197,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nK-means reçoit des variables non standardisées.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 17\n\nRéférence exercice : IA-197`",
    "reponse_v": "Les grandes échelles dominent la distance",
    "reponse_f1": "La standardisation est interdite",
    "reponse_f2": "K-means devient supervisé",
    "explication": "K-means utilise les distances."
  },
  {
    "id": 198,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLes données contiennent de nombreux outliers.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 18\n\nRéférence exercice : IA-198`",
    "reponse_v": "Utiliser une transformation ou un scaler robuste",
    "reponse_f1": "Utiliser toujours min-max sans analyse",
    "reponse_f2": "Remplacer tous les outliers par zéro",
    "explication": "Les statistiques robustes limitent leur influence."
  },
  {
    "id": 199,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nL'imputation est calculée avant le split train-test.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 19\n\nRéférence exercice : IA-199`",
    "reponse_v": "Risque de fuite d'information",
    "reponse_f1": "Aucun risque possible",
    "reponse_f2": "Le test devient inutilement petit",
    "explication": "L'imputation doit être apprise sur le train."
  },
  {
    "id": 200,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLa PCA est calculée avant validation croisée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 20\n\nRéférence exercice : IA-200`",
    "reponse_v": "L'intégrer dans le pipeline de chaque fold",
    "reponse_f1": "La calculer sur toutes les données",
    "reponse_f2": "La remplacer par la cible",
    "explication": "Sinon, la validation fuit l'information."
  },
  {
    "id": 201,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUn réseau profond à sigmoïdes apprend très lentement.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 21\n\nRéférence exercice : IA-201`",
    "reponse_v": "Risque de vanishing gradient",
    "reponse_f1": "Explosion garantie du gradient",
    "reponse_f2": "Convergence toujours rapide",
    "explication": "Les dérivées de la sigmoïde peuvent être faibles."
  },
  {
    "id": 202,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nDe nombreuses ReLU restent toujours nulles.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 22\n\nRéférence exercice : IA-202`",
    "reponse_v": "Phénomène de dead ReLU",
    "reponse_f1": "Effet softmax",
    "reponse_f2": "Calibration parfaite",
    "explication": "Des activations négatives persistantes peuvent tuer les neurones."
  },
  {
    "id": 203,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLa loss train baisse mais la loss validation monte.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 23\n\nRéférence exercice : IA-203`",
    "reponse_v": "Début de surapprentissage",
    "reponse_f1": "Sous-apprentissage certain",
    "reponse_f2": "Validation inutile",
    "explication": "La généralisation se dégrade."
  },
  {
    "id": 204,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLe learning rate est trop élevé.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 24\n\nRéférence exercice : IA-204`",
    "reponse_v": "Oscillation ou divergence",
    "reponse_f1": "Convergence toujours plus rapide",
    "reponse_f2": "Gradient automatiquement nul",
    "explication": "Les pas dépassent les minima."
  },
  {
    "id": 205,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLe learning rate est trop faible.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 25\n\nRéférence exercice : IA-205`",
    "reponse_v": "Apprentissage très lent",
    "reponse_f1": "Convergence instantanée",
    "reponse_f2": "Loss nécessairement croissante",
    "explication": "Les mises à jour sont minuscules."
  },
  {
    "id": 206,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nBatch normalization est ajoutée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 26\n\nRéférence exercice : IA-206`",
    "reponse_v": "Elle stabilise souvent l'entraînement",
    "reponse_f1": "Elle remplace toute activation",
    "reponse_f2": "Elle garantit zéro overfitting",
    "explication": "Elle normalise les activations intermédiaires."
  },
  {
    "id": 207,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nDropout est actif pendant l'entraînement.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 27\n\nRéférence exercice : IA-207`",
    "reponse_v": "Des unités sont désactivées aléatoirement",
    "reponse_f1": "Tous les poids deviennent nuls",
    "reponse_f2": "Le modèle devient déterministe",
    "explication": "Dropout agit comme régularisation."
  },
  {
    "id": 208,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUne classification multiclasse exclusive est visée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 28\n\nRéférence exercice : IA-208`",
    "reponse_v": "Softmax et cross-entropy",
    "reponse_f1": "Sigmoïdes indépendantes uniquement",
    "reponse_f2": "Une ReLU scalaire",
    "explication": "Softmax produit une distribution exclusive."
  },
  {
    "id": 209,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUne classification multilabel est visée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 29\n\nRéférence exercice : IA-209`",
    "reponse_v": "Sigmoïde indépendante par classe",
    "reponse_f1": "Softmax exclusif",
    "reponse_f2": "Une seule sortie binaire globale",
    "explication": "Plusieurs labels peuvent être vrais."
  },
  {
    "id": 210,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLes gradients explosent dans un RNN.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 30\n\nRéférence exercice : IA-210`",
    "reponse_v": "Appliquer gradient clipping",
    "reponse_f1": "Augmenter le learning rate",
    "reponse_f2": "Supprimer la loss",
    "explication": "Le clipping borne la norme."
  },
  {
    "id": 211,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nDeux mots sémantiquement proches doivent avoir des vecteurs voisins.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 31\n\nRéférence exercice : IA-211`",
    "reponse_v": "Utiliser des embeddings",
    "reponse_f1": "Utiliser des identifiants arbitraires",
    "reponse_f2": "Utiliser seulement la longueur des mots",
    "explication": "Les embeddings apprennent une géométrie sémantique."
  },
  {
    "id": 212,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn modèle prédit le prochain token.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 32\n\nRéférence exercice : IA-212`",
    "reponse_v": "Il estime une distribution conditionnelle",
    "reponse_f1": "Il fait uniquement une classification binaire",
    "reponse_f2": "Il ignore le contexte",
    "explication": "Un LM autoregressif dépend des tokens précédents."
  },
  {
    "id": 213,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne séquence longue contient des dépendances distantes.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 33\n\nRéférence exercice : IA-213`",
    "reponse_v": "L'attention facilite les interactions globales",
    "reponse_f1": "Un bag-of-words conserve tout l'ordre",
    "reponse_f2": "Une convolution 1x1 suffit toujours",
    "explication": "L'attention relie directement les positions."
  },
  {
    "id": 214,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn Transformer n'a aucun encodage positionnel.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 34\n\nRéférence exercice : IA-214`",
    "reponse_v": "Il perd l'ordre explicite",
    "reponse_f1": "Il apprend toujours l'ordre exact",
    "reponse_f2": "Il devient un CNN",
    "explication": "L'attention seule est permutation-equivariant."
  },
  {
    "id": 215,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nDes images sont légèrement tournées et recadrées.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 35\n\nRéférence exercice : IA-215`",
    "reponse_v": "L'augmentation peut améliorer la généralisation",
    "reponse_f1": "Toute augmentation détruit les labels",
    "reponse_f2": "Elle remplace la validation",
    "explication": "Les transformations valides enrichissent les données."
  },
  {
    "id": 216,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn CNN partage ses filtres spatialement.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 36\n\nRéférence exercice : IA-216`",
    "reponse_v": "Cela réduit le nombre de paramètres",
    "reponse_f1": "Chaque pixel a son propre réseau",
    "reponse_f2": "Cela détruit toute structure locale",
    "explication": "Le partage exploite la localité."
  },
  {
    "id": 217,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne segmentation sémantique est demandée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 37\n\nRéférence exercice : IA-217`",
    "reponse_v": "Prédire une classe par pixel",
    "reponse_f1": "Prédire une classe par image",
    "reponse_f2": "Prédire seulement des boîtes",
    "explication": "La sortie est une carte dense."
  },
  {
    "id": 218,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne détection d'objets est demandée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 38\n\nRéférence exercice : IA-218`",
    "reponse_v": "Prédire classes et boîtes",
    "reponse_f1": "Prédire un score global uniquement",
    "reponse_f2": "Prédire des embeddings textuels",
    "explication": "La détection localise et classe."
  },
  {
    "id": 219,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nLe tokenizer produit trop de tokens inconnus.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 39\n\nRéférence exercice : IA-219`",
    "reponse_v": "Utiliser des sous-mots",
    "reponse_f1": "Supprimer tous les mots rares",
    "reponse_f2": "Utiliser une phrase entière comme token",
    "explication": "Le subword réduit les OOV."
  },
  {
    "id": 220,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne recherche sémantique est construite.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 40\n\nRéférence exercice : IA-220`",
    "reponse_v": "Comparer des embeddings",
    "reponse_f1": "Comparer uniquement les chaînes exactes",
    "reponse_f2": "Comparer les tailles de fichiers",
    "explication": "Les embeddings capturent le sens."
  },
  {
    "id": 221,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nK-means reçoit des clusters allongés et non sphériques.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 41\n\nRéférence exercice : IA-221`",
    "reponse_v": "Il peut être inadapté",
    "reponse_f1": "Il est toujours optimal",
    "reponse_f2": "Le nombre de clusters est sans importance",
    "explication": "K-means favorise des groupes sphériques."
  },
  {
    "id": 222,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nDBSCAN est utilisé.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 42\n\nRéférence exercice : IA-222`",
    "reponse_v": "Il peut détecter du bruit et des formes arbitraires",
    "reponse_f1": "Il exige toujours k",
    "reponse_f2": "Il ne détecte jamais d'outliers",
    "explication": "DBSCAN repose sur la densité."
  },
  {
    "id": 223,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne PCA conserve 95 % de variance.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 43\n\nRéférence exercice : IA-223`",
    "reponse_v": "Elle réduit la dimension en gardant l'essentiel de la variance linéaire",
    "reponse_f1": "Elle conserve toutes les informations",
    "reponse_f2": "Elle garde les variables originales",
    "explication": "La PCA projette sur des axes orthogonaux."
  },
  {
    "id": 224,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn autoencodeur possède un goulot d'étranglement.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 44\n\nRéférence exercice : IA-224`",
    "reponse_v": "Il peut apprendre une représentation compacte",
    "reponse_f1": "Il réalise uniquement une classification",
    "reponse_f2": "Il n'utilise aucune loss",
    "explication": "La reconstruction force une compression utile."
  },
  {
    "id": 225,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne récompense différée doit guider les actions.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 45\n\nRéférence exercice : IA-225`",
    "reponse_v": "Optimiser le retour cumulé actualisé",
    "reponse_f1": "Optimiser uniquement la récompense immédiate",
    "reponse_f2": "Ignorer les états futurs",
    "explication": "Le RL considère les conséquences futures."
  },
  {
    "id": 226,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne politique exploite toujours l'action estimée meilleure.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 46\n\nRéférence exercice : IA-226`",
    "reponse_v": "Elle peut manquer d'exploration",
    "reponse_f1": "Elle explore tout l'espace",
    "reponse_f2": "Elle est automatiquement optimale",
    "explication": "L'exploitation pure peut bloquer."
  },
  {
    "id": 227,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne stratégie epsilon-greedy est utilisée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 47\n\nRéférence exercice : IA-227`",
    "reponse_v": "Elle explore avec probabilité epsilon",
    "reponse_f1": "Elle n'exploite jamais",
    "reponse_f2": "Elle choisit toujours l'action la pire",
    "explication": "Elle équilibre exploration et exploitation."
  },
  {
    "id": 228,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn GAN oppose générateur et discriminateur.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 48\n\nRéférence exercice : IA-228`",
    "reponse_v": "Le générateur produit des exemples plausibles",
    "reponse_f1": "Le discriminateur génère les données finales",
    "reponse_f2": "Les deux ont le même objectif",
    "explication": "Le générateur tente de tromper le discriminateur."
  },
  {
    "id": 229,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn modèle génératif reproduit presque exactement le train.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 49\n\nRéférence exercice : IA-229`",
    "reponse_v": "Risque de mémorisation et fuite",
    "reponse_f1": "Preuve de généralisation parfaite",
    "reponse_f2": "Preuve d'anonymisation",
    "explication": "La mémorisation peut exposer des données."
  },
  {
    "id": 230,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn modèle de diffusion génère des données.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 50\n\nRéférence exercice : IA-230`",
    "reponse_v": "Il débruite progressivement",
    "reponse_f1": "Il fait uniquement du clustering",
    "reponse_f2": "Il n'apprend rien",
    "explication": "Il inverse un processus de bruit."
  },
  {
    "id": 231,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nLa distribution des features change en production.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 51\n\nRéférence exercice : IA-231`",
    "reponse_v": "Data drift",
    "reponse_f1": "Label leakage obligatoire",
    "reponse_f2": "Overfitting certain",
    "explication": "Le data drift touche les entrées."
  },
  {
    "id": 232,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nLa relation entre features et cible change.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 52\n\nRéférence exercice : IA-232`",
    "reponse_v": "Concept drift",
    "reponse_f1": "Simple changement de format",
    "reponse_f2": "Calibration parfaite",
    "explication": "La fonction cible évolue."
  },
  {
    "id": 233,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUn modèle est déployé sans suivi.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 53\n\nRéférence exercice : IA-233`",
    "reponse_v": "Ajouter monitoring et alertes",
    "reponse_f1": "Considérer la performance figée",
    "reponse_f2": "Supprimer les logs",
    "explication": "Les performances peuvent se dégrader."
  },
  {
    "id": 234,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne feature sensible influence fortement les décisions.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 54\n\nRéférence exercice : IA-234`",
    "reponse_v": "Évaluer l'équité et les risques de discrimination",
    "reponse_f1": "Masquer uniquement son nom",
    "reponse_f2": "Ignorer l'effet si l'accuracy est bonne",
    "explication": "La performance globale ne suffit pas."
  },
  {
    "id": 235,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne prédiction complexe doit être expliquée localement.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 55\n\nRéférence exercice : IA-235`",
    "reponse_v": "Utiliser une méthode locale avec prudence",
    "reponse_f1": "Utiliser seulement l'accuracy",
    "reponse_f2": "Lire des poids inexistants",
    "explication": "Les explications locales sont approximatives."
  },
  {
    "id": 236,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne importance par permutation est calculée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 56\n\nRéférence exercice : IA-236`",
    "reponse_v": "Elle mesure la perte de performance après perturbation",
    "reponse_f1": "Elle prouve une causalité",
    "reponse_f2": "Elle ignore les corrélations",
    "explication": "Elle mesure une dépendance prédictive."
  },
  {
    "id": 237,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUn modèle doit être reproduit plus tard.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 57\n\nRéférence exercice : IA-237`",
    "reponse_v": "Versionner code, données, paramètres et environnement",
    "reponse_f1": "Conserver uniquement le fichier modèle",
    "reponse_f2": "Noter seulement le score",
    "explication": "La reproductibilité couvre toute la chaîne."
  },
  {
    "id": 238,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nDeux modèles sont comparés en production.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 58\n\nRéférence exercice : IA-238`",
    "reponse_v": "Utiliser un A/B test contrôlé",
    "reponse_f1": "Remplacer immédiatement tout le trafic",
    "reponse_f2": "Comparer seulement les tailles de fichiers",
    "explication": "Un test contrôlé réduit le risque."
  },
  {
    "id": 239,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne nouvelle version reçoit 5 % du trafic.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 59\n\nRéférence exercice : IA-239`",
    "reponse_v": "Canary deployment",
    "reponse_f1": "Validation croisée",
    "reponse_f2": "Clustering hiérarchique",
    "explication": "Le canary limite l'exposition."
  },
  {
    "id": 240,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne décision automatisée est critique.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 4 — scénario : 60\n\nRéférence exercice : IA-240`",
    "reponse_v": "Prévoir supervision humaine et recours",
    "reponse_f1": "Supprimer toute intervention",
    "reponse_f2": "Utiliser uniquement la confiance maximale",
    "explication": "Les contextes critiques exigent des garde-fous."
  },
  {
    "id": 241,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe score d'entraînement atteint 99 %, contre 70 % en validation.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 01\n\nRéférence exercice : IA-241`",
    "reponse_v": "Surapprentissage",
    "reponse_f1": "Sous-apprentissage",
    "reponse_f2": "Calibration parfaite",
    "explication": "L'écart train-validation indique une variance élevée."
  },
  {
    "id": 242,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes scores d'entraînement et de validation sont tous deux faibles.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 02\n\nRéférence exercice : IA-242`",
    "reponse_v": "Sous-apprentissage",
    "reponse_f1": "Surapprentissage",
    "reponse_f2": "Fuite de données",
    "explication": "Un biais élevé produit de mauvaises performances partout."
  },
  {
    "id": 243,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nUne variable calculée après la date de prédiction est utilisée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 03\n\nRéférence exercice : IA-243`",
    "reponse_v": "Fuite de données",
    "reponse_f1": "Régularisation",
    "reponse_f2": "Data augmentation",
    "explication": "Une information future fausse l'évaluation."
  },
  {
    "id": 244,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nDes données temporelles sont mélangées aléatoirement avant validation.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 04\n\nRéférence exercice : IA-244`",
    "reponse_v": "La validation risque de violer l'ordre temporel",
    "reponse_f1": "La validation devient plus robuste",
    "reponse_f2": "Aucun risque n'existe",
    "explication": "Il faut préserver la causalité temporelle."
  },
  {
    "id": 245,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLa classe positive représente 1 % des cas.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 05\n\nRéférence exercice : IA-245`",
    "reponse_v": "L'accuracy seule est insuffisante",
    "reponse_f1": "L'accuracy suffit toujours",
    "reponse_f2": "Il faut supprimer la classe rare",
    "explication": "Précision, rappel, F1 et PR-AUC sont plus informatifs."
  },
  {
    "id": 246,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes erreurs extrêmes doivent être moins influentes.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 06\n\nRéférence exercice : IA-246`",
    "reponse_v": "Privilégier MAE à MSE",
    "reponse_f1": "Privilégier MSE à MAE",
    "reponse_f2": "Utiliser uniquement R²",
    "explication": "MAE est moins sensible aux outliers."
  },
  {
    "id": 247,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLes probabilités prédites doivent refléter les fréquences réelles.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 07\n\nRéférence exercice : IA-247`",
    "reponse_v": "Évaluer la calibration",
    "reponse_f1": "Évaluer uniquement l'accuracy",
    "reponse_f2": "Fixer arbitrairement le seuil à 0,5",
    "explication": "La calibration mesure la qualité probabiliste."
  },
  {
    "id": 248,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe rappel doit être augmenté.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 08\n\nRéférence exercice : IA-248`",
    "reponse_v": "Abaisser généralement le seuil de décision",
    "reponse_f1": "Augmenter toujours le seuil",
    "reponse_f2": "Le seuil n'a aucun effet",
    "explication": "Un seuil plus bas produit davantage de positifs."
  },
  {
    "id": 249,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nUn individu possède plusieurs lignes dans le dataset.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 09\n\nRéférence exercice : IA-249`",
    "reponse_v": "Regrouper ses lignes dans le même fold",
    "reponse_f1": "Répartir chaque ligne au hasard",
    "reponse_f2": "Supprimer l'identifiant uniquement",
    "explication": "Sinon, des informations peuvent fuiter entre folds."
  },
  {
    "id": 250,
    "question": "`Mini-TP IA — apprentissage supervisé\n\nSituation :\nLe jeu de test a guidé de nombreux choix d'hyperparamètres.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 10\n\nRéférence exercice : IA-250`",
    "reponse_v": "Il n'est plus un test totalement neutre",
    "reponse_f1": "Il reste parfaitement indépendant",
    "reponse_f2": "Le modèle devient non supervisé",
    "explication": "Le test a été indirectement sur-optimisé."
  },
  {
    "id": 251,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne régression pénalisée reçoit des variables d'échelles très différentes.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 11\n\nRéférence exercice : IA-251`",
    "reponse_v": "Standardiser les variables",
    "reponse_f1": "Ne jamais mettre à l'échelle",
    "reponse_f2": "Convertir les nombres en texte",
    "explication": "La pénalisation dépend de la taille des coefficients."
  },
  {
    "id": 252,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUn arbre de décision est trop profond.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 12\n\nRéférence exercice : IA-252`",
    "reponse_v": "Limiter sa complexité",
    "reponse_f1": "Augmenter encore sa profondeur",
    "reponse_f2": "Supprimer la cible",
    "explication": "Le pruning ou les limites réduisent la variance."
  },
  {
    "id": 253,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUn Random Forest améliore un arbre unique.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 13\n\nRéférence exercice : IA-253`",
    "reponse_v": "Il réduit souvent la variance",
    "reponse_f1": "Il supprime toujours tout biais",
    "reponse_f2": "Il n'utilise qu'un arbre",
    "explication": "Le bagging agrège des arbres décorrelés."
  },
  {
    "id": 254,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLe gradient boosting ajoute des arbres successifs.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 14\n\nRéférence exercice : IA-254`",
    "reponse_v": "Chaque arbre corrige les erreurs précédentes",
    "reponse_f1": "Tous les arbres sont indépendants",
    "reponse_f2": "Il ne peut jamais surapprendre",
    "explication": "Le boosting est séquentiel."
  },
  {
    "id": 255,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne variable catégorielle possède 100 000 modalités.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 15\n\nRéférence exercice : IA-255`",
    "reponse_v": "Éviter un one-hot naïf",
    "reponse_f1": "Créer systématiquement 100 000 colonnes",
    "reponse_f2": "Supprimer toutes les autres variables",
    "explication": "La haute cardinalité peut exploser la dimension."
  },
  {
    "id": 256,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nUne variable ordinale contient faible, moyen, élevé.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 16\n\nRéférence exercice : IA-256`",
    "reponse_v": "Préserver l'ordre dans l'encodage",
    "reponse_f1": "Utiliser des identifiants aléatoires",
    "reponse_f2": "Traiter les modalités comme identiques",
    "explication": "L'ordre est une information utile."
  },
  {
    "id": 257,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nK-means reçoit des variables non standardisées.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 17\n\nRéférence exercice : IA-257`",
    "reponse_v": "Les grandes échelles dominent la distance",
    "reponse_f1": "La standardisation est interdite",
    "reponse_f2": "K-means devient supervisé",
    "explication": "K-means utilise les distances."
  },
  {
    "id": 258,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLes données contiennent de nombreux outliers.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 18\n\nRéférence exercice : IA-258`",
    "reponse_v": "Utiliser une transformation ou un scaler robuste",
    "reponse_f1": "Utiliser toujours min-max sans analyse",
    "reponse_f2": "Remplacer tous les outliers par zéro",
    "explication": "Les statistiques robustes limitent leur influence."
  },
  {
    "id": 259,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nL'imputation est calculée avant le split train-test.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 19\n\nRéférence exercice : IA-259`",
    "reponse_v": "Risque de fuite d'information",
    "reponse_f1": "Aucun risque possible",
    "reponse_f2": "Le test devient inutilement petit",
    "explication": "L'imputation doit être apprise sur le train."
  },
  {
    "id": 260,
    "question": "`Mini-TP IA — algorithmes classiques\n\nSituation :\nLa PCA est calculée avant validation croisée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 20\n\nRéférence exercice : IA-260`",
    "reponse_v": "L'intégrer dans le pipeline de chaque fold",
    "reponse_f1": "La calculer sur toutes les données",
    "reponse_f2": "La remplacer par la cible",
    "explication": "Sinon, la validation fuit l'information."
  },
  {
    "id": 261,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUn réseau profond à sigmoïdes apprend très lentement.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 21\n\nRéférence exercice : IA-261`",
    "reponse_v": "Risque de vanishing gradient",
    "reponse_f1": "Explosion garantie du gradient",
    "reponse_f2": "Convergence toujours rapide",
    "explication": "Les dérivées de la sigmoïde peuvent être faibles."
  },
  {
    "id": 262,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nDe nombreuses ReLU restent toujours nulles.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 22\n\nRéférence exercice : IA-262`",
    "reponse_v": "Phénomène de dead ReLU",
    "reponse_f1": "Effet softmax",
    "reponse_f2": "Calibration parfaite",
    "explication": "Des activations négatives persistantes peuvent tuer les neurones."
  },
  {
    "id": 263,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLa loss train baisse mais la loss validation monte.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 23\n\nRéférence exercice : IA-263`",
    "reponse_v": "Début de surapprentissage",
    "reponse_f1": "Sous-apprentissage certain",
    "reponse_f2": "Validation inutile",
    "explication": "La généralisation se dégrade."
  },
  {
    "id": 264,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLe learning rate est trop élevé.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 24\n\nRéférence exercice : IA-264`",
    "reponse_v": "Oscillation ou divergence",
    "reponse_f1": "Convergence toujours plus rapide",
    "reponse_f2": "Gradient automatiquement nul",
    "explication": "Les pas dépassent les minima."
  },
  {
    "id": 265,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLe learning rate est trop faible.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 25\n\nRéférence exercice : IA-265`",
    "reponse_v": "Apprentissage très lent",
    "reponse_f1": "Convergence instantanée",
    "reponse_f2": "Loss nécessairement croissante",
    "explication": "Les mises à jour sont minuscules."
  },
  {
    "id": 266,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nBatch normalization est ajoutée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 26\n\nRéférence exercice : IA-266`",
    "reponse_v": "Elle stabilise souvent l'entraînement",
    "reponse_f1": "Elle remplace toute activation",
    "reponse_f2": "Elle garantit zéro overfitting",
    "explication": "Elle normalise les activations intermédiaires."
  },
  {
    "id": 267,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nDropout est actif pendant l'entraînement.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 27\n\nRéférence exercice : IA-267`",
    "reponse_v": "Des unités sont désactivées aléatoirement",
    "reponse_f1": "Tous les poids deviennent nuls",
    "reponse_f2": "Le modèle devient déterministe",
    "explication": "Dropout agit comme régularisation."
  },
  {
    "id": 268,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUne classification multiclasse exclusive est visée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 28\n\nRéférence exercice : IA-268`",
    "reponse_v": "Softmax et cross-entropy",
    "reponse_f1": "Sigmoïdes indépendantes uniquement",
    "reponse_f2": "Une ReLU scalaire",
    "explication": "Softmax produit une distribution exclusive."
  },
  {
    "id": 269,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nUne classification multilabel est visée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 29\n\nRéférence exercice : IA-269`",
    "reponse_v": "Sigmoïde indépendante par classe",
    "reponse_f1": "Softmax exclusif",
    "reponse_f2": "Une seule sortie binaire globale",
    "explication": "Plusieurs labels peuvent être vrais."
  },
  {
    "id": 270,
    "question": "`Mini-TP IA — réseaux de neurones\n\nSituation :\nLes gradients explosent dans un RNN.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 30\n\nRéférence exercice : IA-270`",
    "reponse_v": "Appliquer gradient clipping",
    "reponse_f1": "Augmenter le learning rate",
    "reponse_f2": "Supprimer la loss",
    "explication": "Le clipping borne la norme."
  },
  {
    "id": 271,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nDeux mots sémantiquement proches doivent avoir des vecteurs voisins.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 31\n\nRéférence exercice : IA-271`",
    "reponse_v": "Utiliser des embeddings",
    "reponse_f1": "Utiliser des identifiants arbitraires",
    "reponse_f2": "Utiliser seulement la longueur des mots",
    "explication": "Les embeddings apprennent une géométrie sémantique."
  },
  {
    "id": 272,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn modèle prédit le prochain token.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 32\n\nRéférence exercice : IA-272`",
    "reponse_v": "Il estime une distribution conditionnelle",
    "reponse_f1": "Il fait uniquement une classification binaire",
    "reponse_f2": "Il ignore le contexte",
    "explication": "Un LM autoregressif dépend des tokens précédents."
  },
  {
    "id": 273,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne séquence longue contient des dépendances distantes.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 33\n\nRéférence exercice : IA-273`",
    "reponse_v": "L'attention facilite les interactions globales",
    "reponse_f1": "Un bag-of-words conserve tout l'ordre",
    "reponse_f2": "Une convolution 1x1 suffit toujours",
    "explication": "L'attention relie directement les positions."
  },
  {
    "id": 274,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn Transformer n'a aucun encodage positionnel.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 34\n\nRéférence exercice : IA-274`",
    "reponse_v": "Il perd l'ordre explicite",
    "reponse_f1": "Il apprend toujours l'ordre exact",
    "reponse_f2": "Il devient un CNN",
    "explication": "L'attention seule est permutation-equivariant."
  },
  {
    "id": 275,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nDes images sont légèrement tournées et recadrées.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 35\n\nRéférence exercice : IA-275`",
    "reponse_v": "L'augmentation peut améliorer la généralisation",
    "reponse_f1": "Toute augmentation détruit les labels",
    "reponse_f2": "Elle remplace la validation",
    "explication": "Les transformations valides enrichissent les données."
  },
  {
    "id": 276,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUn CNN partage ses filtres spatialement.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 36\n\nRéférence exercice : IA-276`",
    "reponse_v": "Cela réduit le nombre de paramètres",
    "reponse_f1": "Chaque pixel a son propre réseau",
    "reponse_f2": "Cela détruit toute structure locale",
    "explication": "Le partage exploite la localité."
  },
  {
    "id": 277,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne segmentation sémantique est demandée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 37\n\nRéférence exercice : IA-277`",
    "reponse_v": "Prédire une classe par pixel",
    "reponse_f1": "Prédire une classe par image",
    "reponse_f2": "Prédire seulement des boîtes",
    "explication": "La sortie est une carte dense."
  },
  {
    "id": 278,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne détection d'objets est demandée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 38\n\nRéférence exercice : IA-278`",
    "reponse_v": "Prédire classes et boîtes",
    "reponse_f1": "Prédire un score global uniquement",
    "reponse_f2": "Prédire des embeddings textuels",
    "explication": "La détection localise et classe."
  },
  {
    "id": 279,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nLe tokenizer produit trop de tokens inconnus.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 39\n\nRéférence exercice : IA-279`",
    "reponse_v": "Utiliser des sous-mots",
    "reponse_f1": "Supprimer tous les mots rares",
    "reponse_f2": "Utiliser une phrase entière comme token",
    "explication": "Le subword réduit les OOV."
  },
  {
    "id": 280,
    "question": "`Mini-TP IA — NLP et vision\n\nSituation :\nUne recherche sémantique est construite.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 40\n\nRéférence exercice : IA-280`",
    "reponse_v": "Comparer des embeddings",
    "reponse_f1": "Comparer uniquement les chaînes exactes",
    "reponse_f2": "Comparer les tailles de fichiers",
    "explication": "Les embeddings capturent le sens."
  },
  {
    "id": 281,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nK-means reçoit des clusters allongés et non sphériques.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 41\n\nRéférence exercice : IA-281`",
    "reponse_v": "Il peut être inadapté",
    "reponse_f1": "Il est toujours optimal",
    "reponse_f2": "Le nombre de clusters est sans importance",
    "explication": "K-means favorise des groupes sphériques."
  },
  {
    "id": 282,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nDBSCAN est utilisé.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 42\n\nRéférence exercice : IA-282`",
    "reponse_v": "Il peut détecter du bruit et des formes arbitraires",
    "reponse_f1": "Il exige toujours k",
    "reponse_f2": "Il ne détecte jamais d'outliers",
    "explication": "DBSCAN repose sur la densité."
  },
  {
    "id": 283,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne PCA conserve 95 % de variance.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 43\n\nRéférence exercice : IA-283`",
    "reponse_v": "Elle réduit la dimension en gardant l'essentiel de la variance linéaire",
    "reponse_f1": "Elle conserve toutes les informations",
    "reponse_f2": "Elle garde les variables originales",
    "explication": "La PCA projette sur des axes orthogonaux."
  },
  {
    "id": 284,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn autoencodeur possède un goulot d'étranglement.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 44\n\nRéférence exercice : IA-284`",
    "reponse_v": "Il peut apprendre une représentation compacte",
    "reponse_f1": "Il réalise uniquement une classification",
    "reponse_f2": "Il n'utilise aucune loss",
    "explication": "La reconstruction force une compression utile."
  },
  {
    "id": 285,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne récompense différée doit guider les actions.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 45\n\nRéférence exercice : IA-285`",
    "reponse_v": "Optimiser le retour cumulé actualisé",
    "reponse_f1": "Optimiser uniquement la récompense immédiate",
    "reponse_f2": "Ignorer les états futurs",
    "explication": "Le RL considère les conséquences futures."
  },
  {
    "id": 286,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne politique exploite toujours l'action estimée meilleure.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 46\n\nRéférence exercice : IA-286`",
    "reponse_v": "Elle peut manquer d'exploration",
    "reponse_f1": "Elle explore tout l'espace",
    "reponse_f2": "Elle est automatiquement optimale",
    "explication": "L'exploitation pure peut bloquer."
  },
  {
    "id": 287,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUne stratégie epsilon-greedy est utilisée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 47\n\nRéférence exercice : IA-287`",
    "reponse_v": "Elle explore avec probabilité epsilon",
    "reponse_f1": "Elle n'exploite jamais",
    "reponse_f2": "Elle choisit toujours l'action la pire",
    "explication": "Elle équilibre exploration et exploitation."
  },
  {
    "id": 288,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn GAN oppose générateur et discriminateur.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 48\n\nRéférence exercice : IA-288`",
    "reponse_v": "Le générateur produit des exemples plausibles",
    "reponse_f1": "Le discriminateur génère les données finales",
    "reponse_f2": "Les deux ont le même objectif",
    "explication": "Le générateur tente de tromper le discriminateur."
  },
  {
    "id": 289,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn modèle génératif reproduit presque exactement le train.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 49\n\nRéférence exercice : IA-289`",
    "reponse_v": "Risque de mémorisation et fuite",
    "reponse_f1": "Preuve de généralisation parfaite",
    "reponse_f2": "Preuve d'anonymisation",
    "explication": "La mémorisation peut exposer des données."
  },
  {
    "id": 290,
    "question": "`Mini-TP IA — apprentissage non supervisé et génératif\n\nSituation :\nUn modèle de diffusion génère des données.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 50\n\nRéférence exercice : IA-290`",
    "reponse_v": "Il débruite progressivement",
    "reponse_f1": "Il fait uniquement du clustering",
    "reponse_f2": "Il n'apprend rien",
    "explication": "Il inverse un processus de bruit."
  },
  {
    "id": 291,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nLa distribution des features change en production.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 51\n\nRéférence exercice : IA-291`",
    "reponse_v": "Data drift",
    "reponse_f1": "Label leakage obligatoire",
    "reponse_f2": "Overfitting certain",
    "explication": "Le data drift touche les entrées."
  },
  {
    "id": 292,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nLa relation entre features et cible change.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 52\n\nRéférence exercice : IA-292`",
    "reponse_v": "Concept drift",
    "reponse_f1": "Simple changement de format",
    "reponse_f2": "Calibration parfaite",
    "explication": "La fonction cible évolue."
  },
  {
    "id": 293,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUn modèle est déployé sans suivi.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 53\n\nRéférence exercice : IA-293`",
    "reponse_v": "Ajouter monitoring et alertes",
    "reponse_f1": "Considérer la performance figée",
    "reponse_f2": "Supprimer les logs",
    "explication": "Les performances peuvent se dégrader."
  },
  {
    "id": 294,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne feature sensible influence fortement les décisions.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 54\n\nRéférence exercice : IA-294`",
    "reponse_v": "Évaluer l'équité et les risques de discrimination",
    "reponse_f1": "Masquer uniquement son nom",
    "reponse_f2": "Ignorer l'effet si l'accuracy est bonne",
    "explication": "La performance globale ne suffit pas."
  },
  {
    "id": 295,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne prédiction complexe doit être expliquée localement.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 55\n\nRéférence exercice : IA-295`",
    "reponse_v": "Utiliser une méthode locale avec prudence",
    "reponse_f1": "Utiliser seulement l'accuracy",
    "reponse_f2": "Lire des poids inexistants",
    "explication": "Les explications locales sont approximatives."
  },
  {
    "id": 296,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne importance par permutation est calculée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 56\n\nRéférence exercice : IA-296`",
    "reponse_v": "Elle mesure la perte de performance après perturbation",
    "reponse_f1": "Elle prouve une causalité",
    "reponse_f2": "Elle ignore les corrélations",
    "explication": "Elle mesure une dépendance prédictive."
  },
  {
    "id": 297,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUn modèle doit être reproduit plus tard.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 57\n\nRéférence exercice : IA-297`",
    "reponse_v": "Versionner code, données, paramètres et environnement",
    "reponse_f1": "Conserver uniquement le fichier modèle",
    "reponse_f2": "Noter seulement le score",
    "explication": "La reproductibilité couvre toute la chaîne."
  },
  {
    "id": 298,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nDeux modèles sont comparés en production.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 58\n\nRéférence exercice : IA-298`",
    "reponse_v": "Utiliser un A/B test contrôlé",
    "reponse_f1": "Remplacer immédiatement tout le trafic",
    "reponse_f2": "Comparer seulement les tailles de fichiers",
    "explication": "Un test contrôlé réduit le risque."
  },
  {
    "id": 299,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne nouvelle version reçoit 5 % du trafic.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 59\n\nRéférence exercice : IA-299`",
    "reponse_v": "Canary deployment",
    "reponse_f1": "Validation croisée",
    "reponse_f2": "Clustering hiérarchique",
    "explication": "Le canary limite l'exposition."
  },
  {
    "id": 300,
    "question": "`Mini-TP IA — MLOps et IA responsable\n\nSituation :\nUne décision automatisée est critique.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?\n\nVariante : 5 — scénario : 60\n\nRéférence exercice : IA-300`",
    "reponse_v": "Prévoir supervision humaine et recours",
    "reponse_f1": "Supprimer toute intervention",
    "reponse_f2": "Utiliser uniquement la confiance maximale",
    "explication": "Les contextes critiques exigent des garde-fous."
  }
]
