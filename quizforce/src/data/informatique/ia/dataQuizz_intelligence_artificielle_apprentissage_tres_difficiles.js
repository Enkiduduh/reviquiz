export const dataQuizz_intelligence_artificielle_apprentissage_tres_difficiles = [
  {
    "id": 1,
    "question": "Situation :\nLe score d'entraînement atteint 99 %, contre 70 % en validation.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Surapprentissage",
    "reponse_f1": "Sous-apprentissage",
    "reponse_f2": "Calibration parfaite",
    "explication": "L'écart train-validation indique une variance élevée."
  },
  {
    "id": 2,
    "question": "Situation :\nLes scores d'entraînement et de validation sont tous deux faibles.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Sous-apprentissage",
    "reponse_f1": "Surapprentissage",
    "reponse_f2": "Fuite de données",
    "explication": "Un biais élevé produit de mauvaises performances partout."
  },
  {
    "id": 3,
    "question": "Situation :\nUne variable calculée après la date de prédiction est utilisée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Fuite de données",
    "reponse_f1": "Régularisation",
    "reponse_f2": "Data augmentation",
    "explication": "Une information future fausse l'évaluation."
  },
  {
    "id": 4,
    "question": "Situation :\nDes données temporelles sont mélangées aléatoirement avant validation.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "La validation risque de violer l'ordre temporel",
    "reponse_f1": "La validation devient plus robuste",
    "reponse_f2": "Aucun risque n'existe",
    "explication": "Il faut préserver la causalité temporelle."
  },
  {
    "id": 5,
    "question": "Situation :\nLa classe positive représente 1 % des cas.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'accuracy seule est insuffisante",
    "reponse_f1": "L'accuracy suffit toujours",
    "reponse_f2": "Il faut supprimer la classe rare",
    "explication": "Précision, rappel, F1 et PR-AUC sont plus informatifs."
  },
  {
    "id": 6,
    "question": "Situation :\nLes erreurs extrêmes doivent être moins influentes.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Privilégier MAE à MSE",
    "reponse_f1": "Privilégier MSE à MAE",
    "reponse_f2": "Utiliser uniquement R²",
    "explication": "MAE est moins sensible aux outliers."
  },
  {
    "id": 7,
    "question": "Situation :\nLes probabilités prédites doivent refléter les fréquences réelles.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Évaluer la calibration",
    "reponse_f1": "Évaluer uniquement l'accuracy",
    "reponse_f2": "Fixer arbitrairement le seuil à 0,5",
    "explication": "La calibration mesure la qualité probabiliste."
  },
  {
    "id": 8,
    "question": "Situation :\nLe rappel doit être augmenté.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Abaisser généralement le seuil de décision",
    "reponse_f1": "Augmenter toujours le seuil",
    "reponse_f2": "Le seuil n'a aucun effet",
    "explication": "Un seuil plus bas produit davantage de positifs."
  },
  {
    "id": 9,
    "question": "Situation :\nUn individu possède plusieurs lignes dans le dataset.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Regrouper ses lignes dans le même fold",
    "reponse_f1": "Répartir chaque ligne au hasard",
    "reponse_f2": "Supprimer l'identifiant uniquement",
    "explication": "Sinon, des informations peuvent fuiter entre folds."
  },
  {
    "id": 10,
    "question": "Situation :\nLe jeu de test a guidé de nombreux choix d'hyperparamètres.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il n'est plus un test totalement neutre",
    "reponse_f1": "Il reste parfaitement indépendant",
    "reponse_f2": "Le modèle devient non supervisé",
    "explication": "Le test a été indirectement sur-optimisé."
  },
  {
    "id": 11,
    "question": "Situation :\nUne régression pénalisée reçoit des variables d'échelles très différentes.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Standardiser les variables",
    "reponse_f1": "Ne jamais mettre à l'échelle",
    "reponse_f2": "Convertir les nombres en texte",
    "explication": "La pénalisation dépend de la taille des coefficients."
  },
  {
    "id": 12,
    "question": "Situation :\nUn arbre de décision est trop profond.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Limiter sa complexité",
    "reponse_f1": "Augmenter encore sa profondeur",
    "reponse_f2": "Supprimer la cible",
    "explication": "Le pruning ou les limites réduisent la variance."
  },
  {
    "id": 13,
    "question": "Situation :\nUn Random Forest améliore un arbre unique.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il réduit souvent la variance",
    "reponse_f1": "Il supprime toujours tout biais",
    "reponse_f2": "Il n'utilise qu'un arbre",
    "explication": "Le bagging agrège des arbres décorrelés."
  },
  {
    "id": 14,
    "question": "Situation :\nLe gradient boosting ajoute des arbres successifs.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Chaque arbre corrige les erreurs précédentes",
    "reponse_f1": "Tous les arbres sont indépendants",
    "reponse_f2": "Il ne peut jamais surapprendre",
    "explication": "Le boosting est séquentiel."
  },
  {
    "id": 15,
    "question": "Situation :\nUne variable catégorielle possède 100 000 modalités.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Éviter un one-hot naïf",
    "reponse_f1": "Créer systématiquement 100 000 colonnes",
    "reponse_f2": "Supprimer toutes les autres variables",
    "explication": "La haute cardinalité peut exploser la dimension."
  },
  {
    "id": 16,
    "question": "Situation :\nUne variable ordinale contient faible, moyen, élevé.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Préserver l'ordre dans l'encodage",
    "reponse_f1": "Utiliser des identifiants aléatoires",
    "reponse_f2": "Traiter les modalités comme identiques",
    "explication": "L'ordre est une information utile."
  },
  {
    "id": 17,
    "question": "Situation :\nK-means reçoit des variables non standardisées.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Les grandes échelles dominent la distance",
    "reponse_f1": "La standardisation est interdite",
    "reponse_f2": "K-means devient supervisé",
    "explication": "K-means utilise les distances."
  },
  {
    "id": 18,
    "question": "Situation :\nLes données contiennent de nombreux outliers.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser une transformation ou un scaler robuste",
    "reponse_f1": "Utiliser toujours min-max sans analyse",
    "reponse_f2": "Remplacer tous les outliers par zéro",
    "explication": "Les statistiques robustes limitent leur influence."
  },
  {
    "id": 19,
    "question": "Situation :\nL'imputation est calculée avant le split train-test.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de fuite d'information",
    "reponse_f1": "Aucun risque possible",
    "reponse_f2": "Le test devient inutilement petit",
    "explication": "L'imputation doit être apprise sur le train."
  },
  {
    "id": 20,
    "question": "Situation :\nLa PCA est calculée avant validation croisée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'intégrer dans le pipeline de chaque fold",
    "reponse_f1": "La calculer sur toutes les données",
    "reponse_f2": "La remplacer par la cible",
    "explication": "Sinon, la validation fuit l'information."
  },
  {
    "id": 21,
    "question": "Situation :\nUn réseau profond à sigmoïdes apprend très lentement.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de vanishing gradient",
    "reponse_f1": "Explosion garantie du gradient",
    "reponse_f2": "Convergence toujours rapide",
    "explication": "Les dérivées de la sigmoïde peuvent être faibles."
  },
  {
    "id": 22,
    "question": "Situation :\nDe nombreuses ReLU restent toujours nulles.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Phénomène de dead ReLU",
    "reponse_f1": "Effet softmax",
    "reponse_f2": "Calibration parfaite",
    "explication": "Des activations négatives persistantes peuvent tuer les neurones."
  },
  {
    "id": 23,
    "question": "Situation :\nLa loss train baisse mais la loss validation monte.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Début de surapprentissage",
    "reponse_f1": "Sous-apprentissage certain",
    "reponse_f2": "Validation inutile",
    "explication": "La généralisation se dégrade."
  },
  {
    "id": 24,
    "question": "Situation :\nLe learning rate est trop élevé.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Oscillation ou divergence",
    "reponse_f1": "Convergence toujours plus rapide",
    "reponse_f2": "Gradient automatiquement nul",
    "explication": "Les pas dépassent les minima."
  },
  {
    "id": 25,
    "question": "Situation :\nLe learning rate est trop faible.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Apprentissage très lent",
    "reponse_f1": "Convergence instantanée",
    "reponse_f2": "Loss nécessairement croissante",
    "explication": "Les mises à jour sont minuscules."
  },
  {
    "id": 26,
    "question": "Situation :\nBatch normalization est ajoutée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle stabilise souvent l'entraînement",
    "reponse_f1": "Elle remplace toute activation",
    "reponse_f2": "Elle garantit zéro overfitting",
    "explication": "Elle normalise les activations intermédiaires."
  },
  {
    "id": 27,
    "question": "Situation :\nDropout est actif pendant l'entraînement.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Des unités sont désactivées aléatoirement",
    "reponse_f1": "Tous les poids deviennent nuls",
    "reponse_f2": "Le modèle devient déterministe",
    "explication": "Dropout agit comme régularisation."
  },
  {
    "id": 28,
    "question": "Situation :\nUne classification multiclasse exclusive est visée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Softmax et cross-entropy",
    "reponse_f1": "Sigmoïdes indépendantes uniquement",
    "reponse_f2": "Une ReLU scalaire",
    "explication": "Softmax produit une distribution exclusive."
  },
  {
    "id": 29,
    "question": "Situation :\nUne classification multilabel est visée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Sigmoïde indépendante par classe",
    "reponse_f1": "Softmax exclusif",
    "reponse_f2": "Une seule sortie binaire globale",
    "explication": "Plusieurs labels peuvent être vrais."
  },
  {
    "id": 30,
    "question": "Situation :\nLes gradients explosent dans un RNN.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Appliquer gradient clipping",
    "reponse_f1": "Augmenter le learning rate",
    "reponse_f2": "Supprimer la loss",
    "explication": "Le clipping borne la norme."
  },
  {
    "id": 31,
    "question": "Situation :\nDeux mots sémantiquement proches doivent avoir des vecteurs voisins.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser des embeddings",
    "reponse_f1": "Utiliser des identifiants arbitraires",
    "reponse_f2": "Utiliser seulement la longueur des mots",
    "explication": "Les embeddings apprennent une géométrie sémantique."
  },
  {
    "id": 32,
    "question": "Situation :\nUn modèle prédit le prochain token.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il estime une distribution conditionnelle",
    "reponse_f1": "Il fait uniquement une classification binaire",
    "reponse_f2": "Il ignore le contexte",
    "explication": "Un LM autoregressif dépend des tokens précédents."
  },
  {
    "id": 33,
    "question": "Situation :\nUne séquence longue contient des dépendances distantes.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'attention facilite les interactions globales",
    "reponse_f1": "Un bag-of-words conserve tout l'ordre",
    "reponse_f2": "Une convolution 1x1 suffit toujours",
    "explication": "L'attention relie directement les positions."
  },
  {
    "id": 34,
    "question": "Situation :\nUn Transformer n'a aucun encodage positionnel.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il perd l'ordre explicite",
    "reponse_f1": "Il apprend toujours l'ordre exact",
    "reponse_f2": "Il devient un CNN",
    "explication": "L'attention seule est permutation-equivariant."
  },
  {
    "id": 35,
    "question": "Situation :\nDes images sont légèrement tournées et recadrées.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'augmentation peut améliorer la généralisation",
    "reponse_f1": "Toute augmentation détruit les labels",
    "reponse_f2": "Elle remplace la validation",
    "explication": "Les transformations valides enrichissent les données."
  },
  {
    "id": 36,
    "question": "Situation :\nUn CNN partage ses filtres spatialement.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Cela réduit le nombre de paramètres",
    "reponse_f1": "Chaque pixel a son propre réseau",
    "reponse_f2": "Cela détruit toute structure locale",
    "explication": "Le partage exploite la localité."
  },
  {
    "id": 37,
    "question": "Situation :\nUne segmentation sémantique est demandée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prédire une classe par pixel",
    "reponse_f1": "Prédire une classe par image",
    "reponse_f2": "Prédire seulement des boîtes",
    "explication": "La sortie est une carte dense."
  },
  {
    "id": 38,
    "question": "Situation :\nUne détection d'objets est demandée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prédire classes et boîtes",
    "reponse_f1": "Prédire un score global uniquement",
    "reponse_f2": "Prédire des embeddings textuels",
    "explication": "La détection localise et classe."
  },
  {
    "id": 39,
    "question": "Situation :\nLe tokenizer produit trop de tokens inconnus.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser des sous-mots",
    "reponse_f1": "Supprimer tous les mots rares",
    "reponse_f2": "Utiliser une phrase entière comme token",
    "explication": "Le subword réduit les OOV."
  },
  {
    "id": 40,
    "question": "Situation :\nUne recherche sémantique est construite.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Comparer des embeddings",
    "reponse_f1": "Comparer uniquement les chaînes exactes",
    "reponse_f2": "Comparer les tailles de fichiers",
    "explication": "Les embeddings capturent le sens."
  },
  {
    "id": 41,
    "question": "Situation :\nK-means reçoit des clusters allongés et non sphériques.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut être inadapté",
    "reponse_f1": "Il est toujours optimal",
    "reponse_f2": "Le nombre de clusters est sans importance",
    "explication": "K-means favorise des groupes sphériques."
  },
  {
    "id": 42,
    "question": "Situation :\nDBSCAN est utilisé.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut détecter du bruit et des formes arbitraires",
    "reponse_f1": "Il exige toujours k",
    "reponse_f2": "Il ne détecte jamais d'outliers",
    "explication": "DBSCAN repose sur la densité."
  },
  {
    "id": 43,
    "question": "Situation :\nUne PCA conserve 95 % de variance.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle réduit la dimension en gardant l'essentiel de la variance linéaire",
    "reponse_f1": "Elle conserve toutes les informations",
    "reponse_f2": "Elle garde les variables originales",
    "explication": "La PCA projette sur des axes orthogonaux."
  },
  {
    "id": 44,
    "question": "Situation :\nUn autoencodeur possède un goulot d'étranglement.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut apprendre une représentation compacte",
    "reponse_f1": "Il réalise uniquement une classification",
    "reponse_f2": "Il n'utilise aucune loss",
    "explication": "La reconstruction force une compression utile."
  },
  {
    "id": 45,
    "question": "Situation :\nUne récompense différée doit guider les actions.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Optimiser le retour cumulé actualisé",
    "reponse_f1": "Optimiser uniquement la récompense immédiate",
    "reponse_f2": "Ignorer les états futurs",
    "explication": "Le RL considère les conséquences futures."
  },
  {
    "id": 46,
    "question": "Situation :\nUne politique exploite toujours l'action estimée meilleure.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle peut manquer d'exploration",
    "reponse_f1": "Elle explore tout l'espace",
    "reponse_f2": "Elle est automatiquement optimale",
    "explication": "L'exploitation pure peut bloquer."
  },
  {
    "id": 47,
    "question": "Situation :\nUne stratégie epsilon-greedy est utilisée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle explore avec probabilité epsilon",
    "reponse_f1": "Elle n'exploite jamais",
    "reponse_f2": "Elle choisit toujours l'action la pire",
    "explication": "Elle équilibre exploration et exploitation."
  },
  {
    "id": 48,
    "question": "Situation :\nUn GAN oppose générateur et discriminateur.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Le générateur produit des exemples plausibles",
    "reponse_f1": "Le discriminateur génère les données finales",
    "reponse_f2": "Les deux ont le même objectif",
    "explication": "Le générateur tente de tromper le discriminateur."
  },
  {
    "id": 49,
    "question": "Situation :\nUn modèle génératif reproduit presque exactement le train.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de mémorisation et fuite",
    "reponse_f1": "Preuve de généralisation parfaite",
    "reponse_f2": "Preuve d'anonymisation",
    "explication": "La mémorisation peut exposer des données."
  },
  {
    "id": 50,
    "question": "Situation :\nUn modèle de diffusion génère des données.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il débruite progressivement",
    "reponse_f1": "Il fait uniquement du clustering",
    "reponse_f2": "Il n'apprend rien",
    "explication": "Il inverse un processus de bruit."
  },
  {
    "id": 51,
    "question": "Situation :\nLa distribution des features change en production.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Data drift",
    "reponse_f1": "Label leakage obligatoire",
    "reponse_f2": "Overfitting certain",
    "explication": "Le data drift touche les entrées."
  },
  {
    "id": 52,
    "question": "Situation :\nLa relation entre features et cible change.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Concept drift",
    "reponse_f1": "Simple changement de format",
    "reponse_f2": "Calibration parfaite",
    "explication": "La fonction cible évolue."
  },
  {
    "id": 53,
    "question": "Situation :\nUn modèle est déployé sans suivi.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Ajouter monitoring et alertes",
    "reponse_f1": "Considérer la performance figée",
    "reponse_f2": "Supprimer les logs",
    "explication": "Les performances peuvent se dégrader."
  },
  {
    "id": 54,
    "question": "Situation :\nUne feature sensible influence fortement les décisions.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Évaluer l'équité et les risques de discrimination",
    "reponse_f1": "Masquer uniquement son nom",
    "reponse_f2": "Ignorer l'effet si l'accuracy est bonne",
    "explication": "La performance globale ne suffit pas."
  },
  {
    "id": 55,
    "question": "Situation :\nUne prédiction complexe doit être expliquée localement.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser une méthode locale avec prudence",
    "reponse_f1": "Utiliser seulement l'accuracy",
    "reponse_f2": "Lire des poids inexistants",
    "explication": "Les explications locales sont approximatives."
  },
  {
    "id": 56,
    "question": "Situation :\nUne importance par permutation est calculée.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle mesure la perte de performance après perturbation",
    "reponse_f1": "Elle prouve une causalité",
    "reponse_f2": "Elle ignore les corrélations",
    "explication": "Elle mesure une dépendance prédictive."
  },
  {
    "id": 57,
    "question": "Situation :\nUn modèle doit être reproduit plus tard.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Versionner code, données, paramètres et environnement",
    "reponse_f1": "Conserver uniquement le fichier modèle",
    "reponse_f2": "Noter seulement le score",
    "explication": "La reproductibilité couvre toute la chaîne."
  },
  {
    "id": 58,
    "question": "Situation :\nDeux modèles sont comparés en production.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser un A/B test contrôlé",
    "reponse_f1": "Remplacer immédiatement tout le trafic",
    "reponse_f2": "Comparer seulement les tailles de fichiers",
    "explication": "Un test contrôlé réduit le risque."
  },
  {
    "id": 59,
    "question": "Situation :\nUne nouvelle version reçoit 5 % du trafic.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Canary deployment",
    "reponse_f1": "Validation croisée",
    "reponse_f2": "Clustering hiérarchique",
    "explication": "Le canary limite l'exposition."
  },
  {
    "id": 60,
    "question": "Situation :\nUne décision automatisée est critique.\n\nContrainte complémentaire :\nLe système est évalué avant mise en production.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prévoir supervision humaine et recours",
    "reponse_f1": "Supprimer toute intervention",
    "reponse_f2": "Utiliser uniquement la confiance maximale",
    "explication": "Les contextes critiques exigent des garde-fous."
  },
  {
    "id": 61,
    "question": "Situation :\nLe score d'entraînement atteint 99 %, contre 70 % en validation.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Surapprentissage",
    "reponse_f1": "Sous-apprentissage",
    "reponse_f2": "Calibration parfaite",
    "explication": "L'écart train-validation indique une variance élevée."
  },
  {
    "id": 62,
    "question": "Situation :\nLes scores d'entraînement et de validation sont tous deux faibles.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Sous-apprentissage",
    "reponse_f1": "Surapprentissage",
    "reponse_f2": "Fuite de données",
    "explication": "Un biais élevé produit de mauvaises performances partout."
  },
  {
    "id": 63,
    "question": "Situation :\nUne variable calculée après la date de prédiction est utilisée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Fuite de données",
    "reponse_f1": "Régularisation",
    "reponse_f2": "Data augmentation",
    "explication": "Une information future fausse l'évaluation."
  },
  {
    "id": 64,
    "question": "Situation :\nDes données temporelles sont mélangées aléatoirement avant validation.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "La validation risque de violer l'ordre temporel",
    "reponse_f1": "La validation devient plus robuste",
    "reponse_f2": "Aucun risque n'existe",
    "explication": "Il faut préserver la causalité temporelle."
  },
  {
    "id": 65,
    "question": "Situation :\nLa classe positive représente 1 % des cas.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'accuracy seule est insuffisante",
    "reponse_f1": "L'accuracy suffit toujours",
    "reponse_f2": "Il faut supprimer la classe rare",
    "explication": "Précision, rappel, F1 et PR-AUC sont plus informatifs."
  },
  {
    "id": 66,
    "question": "Situation :\nLes erreurs extrêmes doivent être moins influentes.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Privilégier MAE à MSE",
    "reponse_f1": "Privilégier MSE à MAE",
    "reponse_f2": "Utiliser uniquement R²",
    "explication": "MAE est moins sensible aux outliers."
  },
  {
    "id": 67,
    "question": "Situation :\nLes probabilités prédites doivent refléter les fréquences réelles.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Évaluer la calibration",
    "reponse_f1": "Évaluer uniquement l'accuracy",
    "reponse_f2": "Fixer arbitrairement le seuil à 0,5",
    "explication": "La calibration mesure la qualité probabiliste."
  },
  {
    "id": 68,
    "question": "Situation :\nLe rappel doit être augmenté.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Abaisser généralement le seuil de décision",
    "reponse_f1": "Augmenter toujours le seuil",
    "reponse_f2": "Le seuil n'a aucun effet",
    "explication": "Un seuil plus bas produit davantage de positifs."
  },
  {
    "id": 69,
    "question": "Situation :\nUn individu possède plusieurs lignes dans le dataset.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Regrouper ses lignes dans le même fold",
    "reponse_f1": "Répartir chaque ligne au hasard",
    "reponse_f2": "Supprimer l'identifiant uniquement",
    "explication": "Sinon, des informations peuvent fuiter entre folds."
  },
  {
    "id": 70,
    "question": "Situation :\nLe jeu de test a guidé de nombreux choix d'hyperparamètres.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il n'est plus un test totalement neutre",
    "reponse_f1": "Il reste parfaitement indépendant",
    "reponse_f2": "Le modèle devient non supervisé",
    "explication": "Le test a été indirectement sur-optimisé."
  },
  {
    "id": 71,
    "question": "Situation :\nUne régression pénalisée reçoit des variables d'échelles très différentes.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Standardiser les variables",
    "reponse_f1": "Ne jamais mettre à l'échelle",
    "reponse_f2": "Convertir les nombres en texte",
    "explication": "La pénalisation dépend de la taille des coefficients."
  },
  {
    "id": 72,
    "question": "Situation :\nUn arbre de décision est trop profond.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Limiter sa complexité",
    "reponse_f1": "Augmenter encore sa profondeur",
    "reponse_f2": "Supprimer la cible",
    "explication": "Le pruning ou les limites réduisent la variance."
  },
  {
    "id": 73,
    "question": "Situation :\nUn Random Forest améliore un arbre unique.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il réduit souvent la variance",
    "reponse_f1": "Il supprime toujours tout biais",
    "reponse_f2": "Il n'utilise qu'un arbre",
    "explication": "Le bagging agrège des arbres décorrelés."
  },
  {
    "id": 74,
    "question": "Situation :\nLe gradient boosting ajoute des arbres successifs.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Chaque arbre corrige les erreurs précédentes",
    "reponse_f1": "Tous les arbres sont indépendants",
    "reponse_f2": "Il ne peut jamais surapprendre",
    "explication": "Le boosting est séquentiel."
  },
  {
    "id": 75,
    "question": "Situation :\nUne variable catégorielle possède 100 000 modalités.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Éviter un one-hot naïf",
    "reponse_f1": "Créer systématiquement 100 000 colonnes",
    "reponse_f2": "Supprimer toutes les autres variables",
    "explication": "La haute cardinalité peut exploser la dimension."
  },
  {
    "id": 76,
    "question": "Situation :\nUne variable ordinale contient faible, moyen, élevé.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Préserver l'ordre dans l'encodage",
    "reponse_f1": "Utiliser des identifiants aléatoires",
    "reponse_f2": "Traiter les modalités comme identiques",
    "explication": "L'ordre est une information utile."
  },
  {
    "id": 77,
    "question": "Situation :\nK-means reçoit des variables non standardisées.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Les grandes échelles dominent la distance",
    "reponse_f1": "La standardisation est interdite",
    "reponse_f2": "K-means devient supervisé",
    "explication": "K-means utilise les distances."
  },
  {
    "id": 78,
    "question": "Situation :\nLes données contiennent de nombreux outliers.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser une transformation ou un scaler robuste",
    "reponse_f1": "Utiliser toujours min-max sans analyse",
    "reponse_f2": "Remplacer tous les outliers par zéro",
    "explication": "Les statistiques robustes limitent leur influence."
  },
  {
    "id": 79,
    "question": "Situation :\nL'imputation est calculée avant le split train-test.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de fuite d'information",
    "reponse_f1": "Aucun risque possible",
    "reponse_f2": "Le test devient inutilement petit",
    "explication": "L'imputation doit être apprise sur le train."
  },
  {
    "id": 80,
    "question": "Situation :\nLa PCA est calculée avant validation croisée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'intégrer dans le pipeline de chaque fold",
    "reponse_f1": "La calculer sur toutes les données",
    "reponse_f2": "La remplacer par la cible",
    "explication": "Sinon, la validation fuit l'information."
  },
  {
    "id": 81,
    "question": "Situation :\nUn réseau profond à sigmoïdes apprend très lentement.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de vanishing gradient",
    "reponse_f1": "Explosion garantie du gradient",
    "reponse_f2": "Convergence toujours rapide",
    "explication": "Les dérivées de la sigmoïde peuvent être faibles."
  },
  {
    "id": 82,
    "question": "Situation :\nDe nombreuses ReLU restent toujours nulles.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Phénomène de dead ReLU",
    "reponse_f1": "Effet softmax",
    "reponse_f2": "Calibration parfaite",
    "explication": "Des activations négatives persistantes peuvent tuer les neurones."
  },
  {
    "id": 83,
    "question": "Situation :\nLa loss train baisse mais la loss validation monte.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Début de surapprentissage",
    "reponse_f1": "Sous-apprentissage certain",
    "reponse_f2": "Validation inutile",
    "explication": "La généralisation se dégrade."
  },
  {
    "id": 84,
    "question": "Situation :\nLe learning rate est trop élevé.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Oscillation ou divergence",
    "reponse_f1": "Convergence toujours plus rapide",
    "reponse_f2": "Gradient automatiquement nul",
    "explication": "Les pas dépassent les minima."
  },
  {
    "id": 85,
    "question": "Situation :\nLe learning rate est trop faible.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Apprentissage très lent",
    "reponse_f1": "Convergence instantanée",
    "reponse_f2": "Loss nécessairement croissante",
    "explication": "Les mises à jour sont minuscules."
  },
  {
    "id": 86,
    "question": "Situation :\nBatch normalization est ajoutée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle stabilise souvent l'entraînement",
    "reponse_f1": "Elle remplace toute activation",
    "reponse_f2": "Elle garantit zéro overfitting",
    "explication": "Elle normalise les activations intermédiaires."
  },
  {
    "id": 87,
    "question": "Situation :\nDropout est actif pendant l'entraînement.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Des unités sont désactivées aléatoirement",
    "reponse_f1": "Tous les poids deviennent nuls",
    "reponse_f2": "Le modèle devient déterministe",
    "explication": "Dropout agit comme régularisation."
  },
  {
    "id": 88,
    "question": "Situation :\nUne classification multiclasse exclusive est visée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Softmax et cross-entropy",
    "reponse_f1": "Sigmoïdes indépendantes uniquement",
    "reponse_f2": "Une ReLU scalaire",
    "explication": "Softmax produit une distribution exclusive."
  },
  {
    "id": 89,
    "question": "Situation :\nUne classification multilabel est visée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Sigmoïde indépendante par classe",
    "reponse_f1": "Softmax exclusif",
    "reponse_f2": "Une seule sortie binaire globale",
    "explication": "Plusieurs labels peuvent être vrais."
  },
  {
    "id": 90,
    "question": "Situation :\nLes gradients explosent dans un RNN.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Appliquer gradient clipping",
    "reponse_f1": "Augmenter le learning rate",
    "reponse_f2": "Supprimer la loss",
    "explication": "Le clipping borne la norme."
  },
  {
    "id": 91,
    "question": "Situation :\nDeux mots sémantiquement proches doivent avoir des vecteurs voisins.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser des embeddings",
    "reponse_f1": "Utiliser des identifiants arbitraires",
    "reponse_f2": "Utiliser seulement la longueur des mots",
    "explication": "Les embeddings apprennent une géométrie sémantique."
  },
  {
    "id": 92,
    "question": "Situation :\nUn modèle prédit le prochain token.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il estime une distribution conditionnelle",
    "reponse_f1": "Il fait uniquement une classification binaire",
    "reponse_f2": "Il ignore le contexte",
    "explication": "Un LM autoregressif dépend des tokens précédents."
  },
  {
    "id": 93,
    "question": "Situation :\nUne séquence longue contient des dépendances distantes.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'attention facilite les interactions globales",
    "reponse_f1": "Un bag-of-words conserve tout l'ordre",
    "reponse_f2": "Une convolution 1x1 suffit toujours",
    "explication": "L'attention relie directement les positions."
  },
  {
    "id": 94,
    "question": "Situation :\nUn Transformer n'a aucun encodage positionnel.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il perd l'ordre explicite",
    "reponse_f1": "Il apprend toujours l'ordre exact",
    "reponse_f2": "Il devient un CNN",
    "explication": "L'attention seule est permutation-equivariant."
  },
  {
    "id": 95,
    "question": "Situation :\nDes images sont légèrement tournées et recadrées.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'augmentation peut améliorer la généralisation",
    "reponse_f1": "Toute augmentation détruit les labels",
    "reponse_f2": "Elle remplace la validation",
    "explication": "Les transformations valides enrichissent les données."
  },
  {
    "id": 96,
    "question": "Situation :\nUn CNN partage ses filtres spatialement.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Cela réduit le nombre de paramètres",
    "reponse_f1": "Chaque pixel a son propre réseau",
    "reponse_f2": "Cela détruit toute structure locale",
    "explication": "Le partage exploite la localité."
  },
  {
    "id": 97,
    "question": "Situation :\nUne segmentation sémantique est demandée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prédire une classe par pixel",
    "reponse_f1": "Prédire une classe par image",
    "reponse_f2": "Prédire seulement des boîtes",
    "explication": "La sortie est une carte dense."
  },
  {
    "id": 98,
    "question": "Situation :\nUne détection d'objets est demandée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prédire classes et boîtes",
    "reponse_f1": "Prédire un score global uniquement",
    "reponse_f2": "Prédire des embeddings textuels",
    "explication": "La détection localise et classe."
  },
  {
    "id": 99,
    "question": "Situation :\nLe tokenizer produit trop de tokens inconnus.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser des sous-mots",
    "reponse_f1": "Supprimer tous les mots rares",
    "reponse_f2": "Utiliser une phrase entière comme token",
    "explication": "Le subword réduit les OOV."
  },
  {
    "id": 100,
    "question": "Situation :\nUne recherche sémantique est construite.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Comparer des embeddings",
    "reponse_f1": "Comparer uniquement les chaînes exactes",
    "reponse_f2": "Comparer les tailles de fichiers",
    "explication": "Les embeddings capturent le sens."
  },
  {
    "id": 101,
    "question": "Situation :\nK-means reçoit des clusters allongés et non sphériques.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut être inadapté",
    "reponse_f1": "Il est toujours optimal",
    "reponse_f2": "Le nombre de clusters est sans importance",
    "explication": "K-means favorise des groupes sphériques."
  },
  {
    "id": 102,
    "question": "Situation :\nDBSCAN est utilisé.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut détecter du bruit et des formes arbitraires",
    "reponse_f1": "Il exige toujours k",
    "reponse_f2": "Il ne détecte jamais d'outliers",
    "explication": "DBSCAN repose sur la densité."
  },
  {
    "id": 103,
    "question": "Situation :\nUne PCA conserve 95 % de variance.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle réduit la dimension en gardant l'essentiel de la variance linéaire",
    "reponse_f1": "Elle conserve toutes les informations",
    "reponse_f2": "Elle garde les variables originales",
    "explication": "La PCA projette sur des axes orthogonaux."
  },
  {
    "id": 104,
    "question": "Situation :\nUn autoencodeur possède un goulot d'étranglement.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut apprendre une représentation compacte",
    "reponse_f1": "Il réalise uniquement une classification",
    "reponse_f2": "Il n'utilise aucune loss",
    "explication": "La reconstruction force une compression utile."
  },
  {
    "id": 105,
    "question": "Situation :\nUne récompense différée doit guider les actions.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Optimiser le retour cumulé actualisé",
    "reponse_f1": "Optimiser uniquement la récompense immédiate",
    "reponse_f2": "Ignorer les états futurs",
    "explication": "Le RL considère les conséquences futures."
  },
  {
    "id": 106,
    "question": "Situation :\nUne politique exploite toujours l'action estimée meilleure.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle peut manquer d'exploration",
    "reponse_f1": "Elle explore tout l'espace",
    "reponse_f2": "Elle est automatiquement optimale",
    "explication": "L'exploitation pure peut bloquer."
  },
  {
    "id": 107,
    "question": "Situation :\nUne stratégie epsilon-greedy est utilisée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle explore avec probabilité epsilon",
    "reponse_f1": "Elle n'exploite jamais",
    "reponse_f2": "Elle choisit toujours l'action la pire",
    "explication": "Elle équilibre exploration et exploitation."
  },
  {
    "id": 108,
    "question": "Situation :\nUn GAN oppose générateur et discriminateur.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Le générateur produit des exemples plausibles",
    "reponse_f1": "Le discriminateur génère les données finales",
    "reponse_f2": "Les deux ont le même objectif",
    "explication": "Le générateur tente de tromper le discriminateur."
  },
  {
    "id": 109,
    "question": "Situation :\nUn modèle génératif reproduit presque exactement le train.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de mémorisation et fuite",
    "reponse_f1": "Preuve de généralisation parfaite",
    "reponse_f2": "Preuve d'anonymisation",
    "explication": "La mémorisation peut exposer des données."
  },
  {
    "id": 110,
    "question": "Situation :\nUn modèle de diffusion génère des données.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il débruite progressivement",
    "reponse_f1": "Il fait uniquement du clustering",
    "reponse_f2": "Il n'apprend rien",
    "explication": "Il inverse un processus de bruit."
  },
  {
    "id": 111,
    "question": "Situation :\nLa distribution des features change en production.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Data drift",
    "reponse_f1": "Label leakage obligatoire",
    "reponse_f2": "Overfitting certain",
    "explication": "Le data drift touche les entrées."
  },
  {
    "id": 112,
    "question": "Situation :\nLa relation entre features et cible change.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Concept drift",
    "reponse_f1": "Simple changement de format",
    "reponse_f2": "Calibration parfaite",
    "explication": "La fonction cible évolue."
  },
  {
    "id": 113,
    "question": "Situation :\nUn modèle est déployé sans suivi.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Ajouter monitoring et alertes",
    "reponse_f1": "Considérer la performance figée",
    "reponse_f2": "Supprimer les logs",
    "explication": "Les performances peuvent se dégrader."
  },
  {
    "id": 114,
    "question": "Situation :\nUne feature sensible influence fortement les décisions.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Évaluer l'équité et les risques de discrimination",
    "reponse_f1": "Masquer uniquement son nom",
    "reponse_f2": "Ignorer l'effet si l'accuracy est bonne",
    "explication": "La performance globale ne suffit pas."
  },
  {
    "id": 115,
    "question": "Situation :\nUne prédiction complexe doit être expliquée localement.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser une méthode locale avec prudence",
    "reponse_f1": "Utiliser seulement l'accuracy",
    "reponse_f2": "Lire des poids inexistants",
    "explication": "Les explications locales sont approximatives."
  },
  {
    "id": 116,
    "question": "Situation :\nUne importance par permutation est calculée.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle mesure la perte de performance après perturbation",
    "reponse_f1": "Elle prouve une causalité",
    "reponse_f2": "Elle ignore les corrélations",
    "explication": "Elle mesure une dépendance prédictive."
  },
  {
    "id": 117,
    "question": "Situation :\nUn modèle doit être reproduit plus tard.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Versionner code, données, paramètres et environnement",
    "reponse_f1": "Conserver uniquement le fichier modèle",
    "reponse_f2": "Noter seulement le score",
    "explication": "La reproductibilité couvre toute la chaîne."
  },
  {
    "id": 118,
    "question": "Situation :\nDeux modèles sont comparés en production.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser un A/B test contrôlé",
    "reponse_f1": "Remplacer immédiatement tout le trafic",
    "reponse_f2": "Comparer seulement les tailles de fichiers",
    "explication": "Un test contrôlé réduit le risque."
  },
  {
    "id": 119,
    "question": "Situation :\nUne nouvelle version reçoit 5 % du trafic.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Canary deployment",
    "reponse_f1": "Validation croisée",
    "reponse_f2": "Clustering hiérarchique",
    "explication": "Le canary limite l'exposition."
  },
  {
    "id": 120,
    "question": "Situation :\nUne décision automatisée est critique.\n\nContrainte complémentaire :\nLa contrainte principale est la généralisation hors échantillon.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prévoir supervision humaine et recours",
    "reponse_f1": "Supprimer toute intervention",
    "reponse_f2": "Utiliser uniquement la confiance maximale",
    "explication": "Les contextes critiques exigent des garde-fous."
  },
  {
    "id": 121,
    "question": "Situation :\nLe score d'entraînement atteint 99 %, contre 70 % en validation.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Surapprentissage",
    "reponse_f1": "Sous-apprentissage",
    "reponse_f2": "Calibration parfaite",
    "explication": "L'écart train-validation indique une variance élevée."
  },
  {
    "id": 122,
    "question": "Situation :\nLes scores d'entraînement et de validation sont tous deux faibles.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Sous-apprentissage",
    "reponse_f1": "Surapprentissage",
    "reponse_f2": "Fuite de données",
    "explication": "Un biais élevé produit de mauvaises performances partout."
  },
  {
    "id": 123,
    "question": "Situation :\nUne variable calculée après la date de prédiction est utilisée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Fuite de données",
    "reponse_f1": "Régularisation",
    "reponse_f2": "Data augmentation",
    "explication": "Une information future fausse l'évaluation."
  },
  {
    "id": 124,
    "question": "Situation :\nDes données temporelles sont mélangées aléatoirement avant validation.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "La validation risque de violer l'ordre temporel",
    "reponse_f1": "La validation devient plus robuste",
    "reponse_f2": "Aucun risque n'existe",
    "explication": "Il faut préserver la causalité temporelle."
  },
  {
    "id": 125,
    "question": "Situation :\nLa classe positive représente 1 % des cas.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'accuracy seule est insuffisante",
    "reponse_f1": "L'accuracy suffit toujours",
    "reponse_f2": "Il faut supprimer la classe rare",
    "explication": "Précision, rappel, F1 et PR-AUC sont plus informatifs."
  },
  {
    "id": 126,
    "question": "Situation :\nLes erreurs extrêmes doivent être moins influentes.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Privilégier MAE à MSE",
    "reponse_f1": "Privilégier MSE à MAE",
    "reponse_f2": "Utiliser uniquement R²",
    "explication": "MAE est moins sensible aux outliers."
  },
  {
    "id": 127,
    "question": "Situation :\nLes probabilités prédites doivent refléter les fréquences réelles.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Évaluer la calibration",
    "reponse_f1": "Évaluer uniquement l'accuracy",
    "reponse_f2": "Fixer arbitrairement le seuil à 0,5",
    "explication": "La calibration mesure la qualité probabiliste."
  },
  {
    "id": 128,
    "question": "Situation :\nLe rappel doit être augmenté.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Abaisser généralement le seuil de décision",
    "reponse_f1": "Augmenter toujours le seuil",
    "reponse_f2": "Le seuil n'a aucun effet",
    "explication": "Un seuil plus bas produit davantage de positifs."
  },
  {
    "id": 129,
    "question": "Situation :\nUn individu possède plusieurs lignes dans le dataset.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Regrouper ses lignes dans le même fold",
    "reponse_f1": "Répartir chaque ligne au hasard",
    "reponse_f2": "Supprimer l'identifiant uniquement",
    "explication": "Sinon, des informations peuvent fuiter entre folds."
  },
  {
    "id": 130,
    "question": "Situation :\nLe jeu de test a guidé de nombreux choix d'hyperparamètres.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il n'est plus un test totalement neutre",
    "reponse_f1": "Il reste parfaitement indépendant",
    "reponse_f2": "Le modèle devient non supervisé",
    "explication": "Le test a été indirectement sur-optimisé."
  },
  {
    "id": 131,
    "question": "Situation :\nUne régression pénalisée reçoit des variables d'échelles très différentes.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Standardiser les variables",
    "reponse_f1": "Ne jamais mettre à l'échelle",
    "reponse_f2": "Convertir les nombres en texte",
    "explication": "La pénalisation dépend de la taille des coefficients."
  },
  {
    "id": 132,
    "question": "Situation :\nUn arbre de décision est trop profond.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Limiter sa complexité",
    "reponse_f1": "Augmenter encore sa profondeur",
    "reponse_f2": "Supprimer la cible",
    "explication": "Le pruning ou les limites réduisent la variance."
  },
  {
    "id": 133,
    "question": "Situation :\nUn Random Forest améliore un arbre unique.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il réduit souvent la variance",
    "reponse_f1": "Il supprime toujours tout biais",
    "reponse_f2": "Il n'utilise qu'un arbre",
    "explication": "Le bagging agrège des arbres décorrelés."
  },
  {
    "id": 134,
    "question": "Situation :\nLe gradient boosting ajoute des arbres successifs.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Chaque arbre corrige les erreurs précédentes",
    "reponse_f1": "Tous les arbres sont indépendants",
    "reponse_f2": "Il ne peut jamais surapprendre",
    "explication": "Le boosting est séquentiel."
  },
  {
    "id": 135,
    "question": "Situation :\nUne variable catégorielle possède 100 000 modalités.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Éviter un one-hot naïf",
    "reponse_f1": "Créer systématiquement 100 000 colonnes",
    "reponse_f2": "Supprimer toutes les autres variables",
    "explication": "La haute cardinalité peut exploser la dimension."
  },
  {
    "id": 136,
    "question": "Situation :\nUne variable ordinale contient faible, moyen, élevé.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Préserver l'ordre dans l'encodage",
    "reponse_f1": "Utiliser des identifiants aléatoires",
    "reponse_f2": "Traiter les modalités comme identiques",
    "explication": "L'ordre est une information utile."
  },
  {
    "id": 137,
    "question": "Situation :\nK-means reçoit des variables non standardisées.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Les grandes échelles dominent la distance",
    "reponse_f1": "La standardisation est interdite",
    "reponse_f2": "K-means devient supervisé",
    "explication": "K-means utilise les distances."
  },
  {
    "id": 138,
    "question": "Situation :\nLes données contiennent de nombreux outliers.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser une transformation ou un scaler robuste",
    "reponse_f1": "Utiliser toujours min-max sans analyse",
    "reponse_f2": "Remplacer tous les outliers par zéro",
    "explication": "Les statistiques robustes limitent leur influence."
  },
  {
    "id": 139,
    "question": "Situation :\nL'imputation est calculée avant le split train-test.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de fuite d'information",
    "reponse_f1": "Aucun risque possible",
    "reponse_f2": "Le test devient inutilement petit",
    "explication": "L'imputation doit être apprise sur le train."
  },
  {
    "id": 140,
    "question": "Situation :\nLa PCA est calculée avant validation croisée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'intégrer dans le pipeline de chaque fold",
    "reponse_f1": "La calculer sur toutes les données",
    "reponse_f2": "La remplacer par la cible",
    "explication": "Sinon, la validation fuit l'information."
  },
  {
    "id": 141,
    "question": "Situation :\nUn réseau profond à sigmoïdes apprend très lentement.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de vanishing gradient",
    "reponse_f1": "Explosion garantie du gradient",
    "reponse_f2": "Convergence toujours rapide",
    "explication": "Les dérivées de la sigmoïde peuvent être faibles."
  },
  {
    "id": 142,
    "question": "Situation :\nDe nombreuses ReLU restent toujours nulles.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Phénomène de dead ReLU",
    "reponse_f1": "Effet softmax",
    "reponse_f2": "Calibration parfaite",
    "explication": "Des activations négatives persistantes peuvent tuer les neurones."
  },
  {
    "id": 143,
    "question": "Situation :\nLa loss train baisse mais la loss validation monte.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Début de surapprentissage",
    "reponse_f1": "Sous-apprentissage certain",
    "reponse_f2": "Validation inutile",
    "explication": "La généralisation se dégrade."
  },
  {
    "id": 144,
    "question": "Situation :\nLe learning rate est trop élevé.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Oscillation ou divergence",
    "reponse_f1": "Convergence toujours plus rapide",
    "reponse_f2": "Gradient automatiquement nul",
    "explication": "Les pas dépassent les minima."
  },
  {
    "id": 145,
    "question": "Situation :\nLe learning rate est trop faible.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Apprentissage très lent",
    "reponse_f1": "Convergence instantanée",
    "reponse_f2": "Loss nécessairement croissante",
    "explication": "Les mises à jour sont minuscules."
  },
  {
    "id": 146,
    "question": "Situation :\nBatch normalization est ajoutée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle stabilise souvent l'entraînement",
    "reponse_f1": "Elle remplace toute activation",
    "reponse_f2": "Elle garantit zéro overfitting",
    "explication": "Elle normalise les activations intermédiaires."
  },
  {
    "id": 147,
    "question": "Situation :\nDropout est actif pendant l'entraînement.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Des unités sont désactivées aléatoirement",
    "reponse_f1": "Tous les poids deviennent nuls",
    "reponse_f2": "Le modèle devient déterministe",
    "explication": "Dropout agit comme régularisation."
  },
  {
    "id": 148,
    "question": "Situation :\nUne classification multiclasse exclusive est visée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Softmax et cross-entropy",
    "reponse_f1": "Sigmoïdes indépendantes uniquement",
    "reponse_f2": "Une ReLU scalaire",
    "explication": "Softmax produit une distribution exclusive."
  },
  {
    "id": 149,
    "question": "Situation :\nUne classification multilabel est visée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Sigmoïde indépendante par classe",
    "reponse_f1": "Softmax exclusif",
    "reponse_f2": "Une seule sortie binaire globale",
    "explication": "Plusieurs labels peuvent être vrais."
  },
  {
    "id": 150,
    "question": "Situation :\nLes gradients explosent dans un RNN.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Appliquer gradient clipping",
    "reponse_f1": "Augmenter le learning rate",
    "reponse_f2": "Supprimer la loss",
    "explication": "Le clipping borne la norme."
  },
  {
    "id": 151,
    "question": "Situation :\nDeux mots sémantiquement proches doivent avoir des vecteurs voisins.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser des embeddings",
    "reponse_f1": "Utiliser des identifiants arbitraires",
    "reponse_f2": "Utiliser seulement la longueur des mots",
    "explication": "Les embeddings apprennent une géométrie sémantique."
  },
  {
    "id": 152,
    "question": "Situation :\nUn modèle prédit le prochain token.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il estime une distribution conditionnelle",
    "reponse_f1": "Il fait uniquement une classification binaire",
    "reponse_f2": "Il ignore le contexte",
    "explication": "Un LM autoregressif dépend des tokens précédents."
  },
  {
    "id": 153,
    "question": "Situation :\nUne séquence longue contient des dépendances distantes.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'attention facilite les interactions globales",
    "reponse_f1": "Un bag-of-words conserve tout l'ordre",
    "reponse_f2": "Une convolution 1x1 suffit toujours",
    "explication": "L'attention relie directement les positions."
  },
  {
    "id": 154,
    "question": "Situation :\nUn Transformer n'a aucun encodage positionnel.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il perd l'ordre explicite",
    "reponse_f1": "Il apprend toujours l'ordre exact",
    "reponse_f2": "Il devient un CNN",
    "explication": "L'attention seule est permutation-equivariant."
  },
  {
    "id": 155,
    "question": "Situation :\nDes images sont légèrement tournées et recadrées.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'augmentation peut améliorer la généralisation",
    "reponse_f1": "Toute augmentation détruit les labels",
    "reponse_f2": "Elle remplace la validation",
    "explication": "Les transformations valides enrichissent les données."
  },
  {
    "id": 156,
    "question": "Situation :\nUn CNN partage ses filtres spatialement.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Cela réduit le nombre de paramètres",
    "reponse_f1": "Chaque pixel a son propre réseau",
    "reponse_f2": "Cela détruit toute structure locale",
    "explication": "Le partage exploite la localité."
  },
  {
    "id": 157,
    "question": "Situation :\nUne segmentation sémantique est demandée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prédire une classe par pixel",
    "reponse_f1": "Prédire une classe par image",
    "reponse_f2": "Prédire seulement des boîtes",
    "explication": "La sortie est une carte dense."
  },
  {
    "id": 158,
    "question": "Situation :\nUne détection d'objets est demandée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prédire classes et boîtes",
    "reponse_f1": "Prédire un score global uniquement",
    "reponse_f2": "Prédire des embeddings textuels",
    "explication": "La détection localise et classe."
  },
  {
    "id": 159,
    "question": "Situation :\nLe tokenizer produit trop de tokens inconnus.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser des sous-mots",
    "reponse_f1": "Supprimer tous les mots rares",
    "reponse_f2": "Utiliser une phrase entière comme token",
    "explication": "Le subword réduit les OOV."
  },
  {
    "id": 160,
    "question": "Situation :\nUne recherche sémantique est construite.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Comparer des embeddings",
    "reponse_f1": "Comparer uniquement les chaînes exactes",
    "reponse_f2": "Comparer les tailles de fichiers",
    "explication": "Les embeddings capturent le sens."
  },
  {
    "id": 161,
    "question": "Situation :\nK-means reçoit des clusters allongés et non sphériques.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut être inadapté",
    "reponse_f1": "Il est toujours optimal",
    "reponse_f2": "Le nombre de clusters est sans importance",
    "explication": "K-means favorise des groupes sphériques."
  },
  {
    "id": 162,
    "question": "Situation :\nDBSCAN est utilisé.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut détecter du bruit et des formes arbitraires",
    "reponse_f1": "Il exige toujours k",
    "reponse_f2": "Il ne détecte jamais d'outliers",
    "explication": "DBSCAN repose sur la densité."
  },
  {
    "id": 163,
    "question": "Situation :\nUne PCA conserve 95 % de variance.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle réduit la dimension en gardant l'essentiel de la variance linéaire",
    "reponse_f1": "Elle conserve toutes les informations",
    "reponse_f2": "Elle garde les variables originales",
    "explication": "La PCA projette sur des axes orthogonaux."
  },
  {
    "id": 164,
    "question": "Situation :\nUn autoencodeur possède un goulot d'étranglement.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut apprendre une représentation compacte",
    "reponse_f1": "Il réalise uniquement une classification",
    "reponse_f2": "Il n'utilise aucune loss",
    "explication": "La reconstruction force une compression utile."
  },
  {
    "id": 165,
    "question": "Situation :\nUne récompense différée doit guider les actions.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Optimiser le retour cumulé actualisé",
    "reponse_f1": "Optimiser uniquement la récompense immédiate",
    "reponse_f2": "Ignorer les états futurs",
    "explication": "Le RL considère les conséquences futures."
  },
  {
    "id": 166,
    "question": "Situation :\nUne politique exploite toujours l'action estimée meilleure.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle peut manquer d'exploration",
    "reponse_f1": "Elle explore tout l'espace",
    "reponse_f2": "Elle est automatiquement optimale",
    "explication": "L'exploitation pure peut bloquer."
  },
  {
    "id": 167,
    "question": "Situation :\nUne stratégie epsilon-greedy est utilisée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle explore avec probabilité epsilon",
    "reponse_f1": "Elle n'exploite jamais",
    "reponse_f2": "Elle choisit toujours l'action la pire",
    "explication": "Elle équilibre exploration et exploitation."
  },
  {
    "id": 168,
    "question": "Situation :\nUn GAN oppose générateur et discriminateur.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Le générateur produit des exemples plausibles",
    "reponse_f1": "Le discriminateur génère les données finales",
    "reponse_f2": "Les deux ont le même objectif",
    "explication": "Le générateur tente de tromper le discriminateur."
  },
  {
    "id": 169,
    "question": "Situation :\nUn modèle génératif reproduit presque exactement le train.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de mémorisation et fuite",
    "reponse_f1": "Preuve de généralisation parfaite",
    "reponse_f2": "Preuve d'anonymisation",
    "explication": "La mémorisation peut exposer des données."
  },
  {
    "id": 170,
    "question": "Situation :\nUn modèle de diffusion génère des données.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il débruite progressivement",
    "reponse_f1": "Il fait uniquement du clustering",
    "reponse_f2": "Il n'apprend rien",
    "explication": "Il inverse un processus de bruit."
  },
  {
    "id": 171,
    "question": "Situation :\nLa distribution des features change en production.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Data drift",
    "reponse_f1": "Label leakage obligatoire",
    "reponse_f2": "Overfitting certain",
    "explication": "Le data drift touche les entrées."
  },
  {
    "id": 172,
    "question": "Situation :\nLa relation entre features et cible change.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Concept drift",
    "reponse_f1": "Simple changement de format",
    "reponse_f2": "Calibration parfaite",
    "explication": "La fonction cible évolue."
  },
  {
    "id": 173,
    "question": "Situation :\nUn modèle est déployé sans suivi.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Ajouter monitoring et alertes",
    "reponse_f1": "Considérer la performance figée",
    "reponse_f2": "Supprimer les logs",
    "explication": "Les performances peuvent se dégrader."
  },
  {
    "id": 174,
    "question": "Situation :\nUne feature sensible influence fortement les décisions.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Évaluer l'équité et les risques de discrimination",
    "reponse_f1": "Masquer uniquement son nom",
    "reponse_f2": "Ignorer l'effet si l'accuracy est bonne",
    "explication": "La performance globale ne suffit pas."
  },
  {
    "id": 175,
    "question": "Situation :\nUne prédiction complexe doit être expliquée localement.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser une méthode locale avec prudence",
    "reponse_f1": "Utiliser seulement l'accuracy",
    "reponse_f2": "Lire des poids inexistants",
    "explication": "Les explications locales sont approximatives."
  },
  {
    "id": 176,
    "question": "Situation :\nUne importance par permutation est calculée.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle mesure la perte de performance après perturbation",
    "reponse_f1": "Elle prouve une causalité",
    "reponse_f2": "Elle ignore les corrélations",
    "explication": "Elle mesure une dépendance prédictive."
  },
  {
    "id": 177,
    "question": "Situation :\nUn modèle doit être reproduit plus tard.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Versionner code, données, paramètres et environnement",
    "reponse_f1": "Conserver uniquement le fichier modèle",
    "reponse_f2": "Noter seulement le score",
    "explication": "La reproductibilité couvre toute la chaîne."
  },
  {
    "id": 178,
    "question": "Situation :\nDeux modèles sont comparés en production.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser un A/B test contrôlé",
    "reponse_f1": "Remplacer immédiatement tout le trafic",
    "reponse_f2": "Comparer seulement les tailles de fichiers",
    "explication": "Un test contrôlé réduit le risque."
  },
  {
    "id": 179,
    "question": "Situation :\nUne nouvelle version reçoit 5 % du trafic.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Canary deployment",
    "reponse_f1": "Validation croisée",
    "reponse_f2": "Clustering hiérarchique",
    "explication": "Le canary limite l'exposition."
  },
  {
    "id": 180,
    "question": "Situation :\nUne décision automatisée est critique.\n\nContrainte complémentaire :\nLa solution doit éviter toute fuite méthodologique.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prévoir supervision humaine et recours",
    "reponse_f1": "Supprimer toute intervention",
    "reponse_f2": "Utiliser uniquement la confiance maximale",
    "explication": "Les contextes critiques exigent des garde-fous."
  },
  {
    "id": 181,
    "question": "Situation :\nLe score d'entraînement atteint 99 %, contre 70 % en validation.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Surapprentissage",
    "reponse_f1": "Sous-apprentissage",
    "reponse_f2": "Calibration parfaite",
    "explication": "L'écart train-validation indique une variance élevée."
  },
  {
    "id": 182,
    "question": "Situation :\nLes scores d'entraînement et de validation sont tous deux faibles.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Sous-apprentissage",
    "reponse_f1": "Surapprentissage",
    "reponse_f2": "Fuite de données",
    "explication": "Un biais élevé produit de mauvaises performances partout."
  },
  {
    "id": 183,
    "question": "Situation :\nUne variable calculée après la date de prédiction est utilisée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Fuite de données",
    "reponse_f1": "Régularisation",
    "reponse_f2": "Data augmentation",
    "explication": "Une information future fausse l'évaluation."
  },
  {
    "id": 184,
    "question": "Situation :\nDes données temporelles sont mélangées aléatoirement avant validation.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "La validation risque de violer l'ordre temporel",
    "reponse_f1": "La validation devient plus robuste",
    "reponse_f2": "Aucun risque n'existe",
    "explication": "Il faut préserver la causalité temporelle."
  },
  {
    "id": 185,
    "question": "Situation :\nLa classe positive représente 1 % des cas.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'accuracy seule est insuffisante",
    "reponse_f1": "L'accuracy suffit toujours",
    "reponse_f2": "Il faut supprimer la classe rare",
    "explication": "Précision, rappel, F1 et PR-AUC sont plus informatifs."
  },
  {
    "id": 186,
    "question": "Situation :\nLes erreurs extrêmes doivent être moins influentes.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Privilégier MAE à MSE",
    "reponse_f1": "Privilégier MSE à MAE",
    "reponse_f2": "Utiliser uniquement R²",
    "explication": "MAE est moins sensible aux outliers."
  },
  {
    "id": 187,
    "question": "Situation :\nLes probabilités prédites doivent refléter les fréquences réelles.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Évaluer la calibration",
    "reponse_f1": "Évaluer uniquement l'accuracy",
    "reponse_f2": "Fixer arbitrairement le seuil à 0,5",
    "explication": "La calibration mesure la qualité probabiliste."
  },
  {
    "id": 188,
    "question": "Situation :\nLe rappel doit être augmenté.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Abaisser généralement le seuil de décision",
    "reponse_f1": "Augmenter toujours le seuil",
    "reponse_f2": "Le seuil n'a aucun effet",
    "explication": "Un seuil plus bas produit davantage de positifs."
  },
  {
    "id": 189,
    "question": "Situation :\nUn individu possède plusieurs lignes dans le dataset.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Regrouper ses lignes dans le même fold",
    "reponse_f1": "Répartir chaque ligne au hasard",
    "reponse_f2": "Supprimer l'identifiant uniquement",
    "explication": "Sinon, des informations peuvent fuiter entre folds."
  },
  {
    "id": 190,
    "question": "Situation :\nLe jeu de test a guidé de nombreux choix d'hyperparamètres.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il n'est plus un test totalement neutre",
    "reponse_f1": "Il reste parfaitement indépendant",
    "reponse_f2": "Le modèle devient non supervisé",
    "explication": "Le test a été indirectement sur-optimisé."
  },
  {
    "id": 191,
    "question": "Situation :\nUne régression pénalisée reçoit des variables d'échelles très différentes.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Standardiser les variables",
    "reponse_f1": "Ne jamais mettre à l'échelle",
    "reponse_f2": "Convertir les nombres en texte",
    "explication": "La pénalisation dépend de la taille des coefficients."
  },
  {
    "id": 192,
    "question": "Situation :\nUn arbre de décision est trop profond.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Limiter sa complexité",
    "reponse_f1": "Augmenter encore sa profondeur",
    "reponse_f2": "Supprimer la cible",
    "explication": "Le pruning ou les limites réduisent la variance."
  },
  {
    "id": 193,
    "question": "Situation :\nUn Random Forest améliore un arbre unique.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il réduit souvent la variance",
    "reponse_f1": "Il supprime toujours tout biais",
    "reponse_f2": "Il n'utilise qu'un arbre",
    "explication": "Le bagging agrège des arbres décorrelés."
  },
  {
    "id": 194,
    "question": "Situation :\nLe gradient boosting ajoute des arbres successifs.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Chaque arbre corrige les erreurs précédentes",
    "reponse_f1": "Tous les arbres sont indépendants",
    "reponse_f2": "Il ne peut jamais surapprendre",
    "explication": "Le boosting est séquentiel."
  },
  {
    "id": 195,
    "question": "Situation :\nUne variable catégorielle possède 100 000 modalités.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Éviter un one-hot naïf",
    "reponse_f1": "Créer systématiquement 100 000 colonnes",
    "reponse_f2": "Supprimer toutes les autres variables",
    "explication": "La haute cardinalité peut exploser la dimension."
  },
  {
    "id": 196,
    "question": "Situation :\nUne variable ordinale contient faible, moyen, élevé.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Préserver l'ordre dans l'encodage",
    "reponse_f1": "Utiliser des identifiants aléatoires",
    "reponse_f2": "Traiter les modalités comme identiques",
    "explication": "L'ordre est une information utile."
  },
  {
    "id": 197,
    "question": "Situation :\nK-means reçoit des variables non standardisées.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Les grandes échelles dominent la distance",
    "reponse_f1": "La standardisation est interdite",
    "reponse_f2": "K-means devient supervisé",
    "explication": "K-means utilise les distances."
  },
  {
    "id": 198,
    "question": "Situation :\nLes données contiennent de nombreux outliers.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser une transformation ou un scaler robuste",
    "reponse_f1": "Utiliser toujours min-max sans analyse",
    "reponse_f2": "Remplacer tous les outliers par zéro",
    "explication": "Les statistiques robustes limitent leur influence."
  },
  {
    "id": 199,
    "question": "Situation :\nL'imputation est calculée avant le split train-test.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de fuite d'information",
    "reponse_f1": "Aucun risque possible",
    "reponse_f2": "Le test devient inutilement petit",
    "explication": "L'imputation doit être apprise sur le train."
  },
  {
    "id": 200,
    "question": "Situation :\nLa PCA est calculée avant validation croisée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'intégrer dans le pipeline de chaque fold",
    "reponse_f1": "La calculer sur toutes les données",
    "reponse_f2": "La remplacer par la cible",
    "explication": "Sinon, la validation fuit l'information."
  },
  {
    "id": 201,
    "question": "Situation :\nUn réseau profond à sigmoïdes apprend très lentement.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de vanishing gradient",
    "reponse_f1": "Explosion garantie du gradient",
    "reponse_f2": "Convergence toujours rapide",
    "explication": "Les dérivées de la sigmoïde peuvent être faibles."
  },
  {
    "id": 202,
    "question": "Situation :\nDe nombreuses ReLU restent toujours nulles.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Phénomène de dead ReLU",
    "reponse_f1": "Effet softmax",
    "reponse_f2": "Calibration parfaite",
    "explication": "Des activations négatives persistantes peuvent tuer les neurones."
  },
  {
    "id": 203,
    "question": "Situation :\nLa loss train baisse mais la loss validation monte.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Début de surapprentissage",
    "reponse_f1": "Sous-apprentissage certain",
    "reponse_f2": "Validation inutile",
    "explication": "La généralisation se dégrade."
  },
  {
    "id": 204,
    "question": "Situation :\nLe learning rate est trop élevé.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Oscillation ou divergence",
    "reponse_f1": "Convergence toujours plus rapide",
    "reponse_f2": "Gradient automatiquement nul",
    "explication": "Les pas dépassent les minima."
  },
  {
    "id": 205,
    "question": "Situation :\nLe learning rate est trop faible.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Apprentissage très lent",
    "reponse_f1": "Convergence instantanée",
    "reponse_f2": "Loss nécessairement croissante",
    "explication": "Les mises à jour sont minuscules."
  },
  {
    "id": 206,
    "question": "Situation :\nBatch normalization est ajoutée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle stabilise souvent l'entraînement",
    "reponse_f1": "Elle remplace toute activation",
    "reponse_f2": "Elle garantit zéro overfitting",
    "explication": "Elle normalise les activations intermédiaires."
  },
  {
    "id": 207,
    "question": "Situation :\nDropout est actif pendant l'entraînement.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Des unités sont désactivées aléatoirement",
    "reponse_f1": "Tous les poids deviennent nuls",
    "reponse_f2": "Le modèle devient déterministe",
    "explication": "Dropout agit comme régularisation."
  },
  {
    "id": 208,
    "question": "Situation :\nUne classification multiclasse exclusive est visée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Softmax et cross-entropy",
    "reponse_f1": "Sigmoïdes indépendantes uniquement",
    "reponse_f2": "Une ReLU scalaire",
    "explication": "Softmax produit une distribution exclusive."
  },
  {
    "id": 209,
    "question": "Situation :\nUne classification multilabel est visée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Sigmoïde indépendante par classe",
    "reponse_f1": "Softmax exclusif",
    "reponse_f2": "Une seule sortie binaire globale",
    "explication": "Plusieurs labels peuvent être vrais."
  },
  {
    "id": 210,
    "question": "Situation :\nLes gradients explosent dans un RNN.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Appliquer gradient clipping",
    "reponse_f1": "Augmenter le learning rate",
    "reponse_f2": "Supprimer la loss",
    "explication": "Le clipping borne la norme."
  },
  {
    "id": 211,
    "question": "Situation :\nDeux mots sémantiquement proches doivent avoir des vecteurs voisins.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser des embeddings",
    "reponse_f1": "Utiliser des identifiants arbitraires",
    "reponse_f2": "Utiliser seulement la longueur des mots",
    "explication": "Les embeddings apprennent une géométrie sémantique."
  },
  {
    "id": 212,
    "question": "Situation :\nUn modèle prédit le prochain token.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il estime une distribution conditionnelle",
    "reponse_f1": "Il fait uniquement une classification binaire",
    "reponse_f2": "Il ignore le contexte",
    "explication": "Un LM autoregressif dépend des tokens précédents."
  },
  {
    "id": 213,
    "question": "Situation :\nUne séquence longue contient des dépendances distantes.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'attention facilite les interactions globales",
    "reponse_f1": "Un bag-of-words conserve tout l'ordre",
    "reponse_f2": "Une convolution 1x1 suffit toujours",
    "explication": "L'attention relie directement les positions."
  },
  {
    "id": 214,
    "question": "Situation :\nUn Transformer n'a aucun encodage positionnel.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il perd l'ordre explicite",
    "reponse_f1": "Il apprend toujours l'ordre exact",
    "reponse_f2": "Il devient un CNN",
    "explication": "L'attention seule est permutation-equivariant."
  },
  {
    "id": 215,
    "question": "Situation :\nDes images sont légèrement tournées et recadrées.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'augmentation peut améliorer la généralisation",
    "reponse_f1": "Toute augmentation détruit les labels",
    "reponse_f2": "Elle remplace la validation",
    "explication": "Les transformations valides enrichissent les données."
  },
  {
    "id": 216,
    "question": "Situation :\nUn CNN partage ses filtres spatialement.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Cela réduit le nombre de paramètres",
    "reponse_f1": "Chaque pixel a son propre réseau",
    "reponse_f2": "Cela détruit toute structure locale",
    "explication": "Le partage exploite la localité."
  },
  {
    "id": 217,
    "question": "Situation :\nUne segmentation sémantique est demandée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prédire une classe par pixel",
    "reponse_f1": "Prédire une classe par image",
    "reponse_f2": "Prédire seulement des boîtes",
    "explication": "La sortie est une carte dense."
  },
  {
    "id": 218,
    "question": "Situation :\nUne détection d'objets est demandée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prédire classes et boîtes",
    "reponse_f1": "Prédire un score global uniquement",
    "reponse_f2": "Prédire des embeddings textuels",
    "explication": "La détection localise et classe."
  },
  {
    "id": 219,
    "question": "Situation :\nLe tokenizer produit trop de tokens inconnus.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser des sous-mots",
    "reponse_f1": "Supprimer tous les mots rares",
    "reponse_f2": "Utiliser une phrase entière comme token",
    "explication": "Le subword réduit les OOV."
  },
  {
    "id": 220,
    "question": "Situation :\nUne recherche sémantique est construite.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Comparer des embeddings",
    "reponse_f1": "Comparer uniquement les chaînes exactes",
    "reponse_f2": "Comparer les tailles de fichiers",
    "explication": "Les embeddings capturent le sens."
  },
  {
    "id": 221,
    "question": "Situation :\nK-means reçoit des clusters allongés et non sphériques.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut être inadapté",
    "reponse_f1": "Il est toujours optimal",
    "reponse_f2": "Le nombre de clusters est sans importance",
    "explication": "K-means favorise des groupes sphériques."
  },
  {
    "id": 222,
    "question": "Situation :\nDBSCAN est utilisé.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut détecter du bruit et des formes arbitraires",
    "reponse_f1": "Il exige toujours k",
    "reponse_f2": "Il ne détecte jamais d'outliers",
    "explication": "DBSCAN repose sur la densité."
  },
  {
    "id": 223,
    "question": "Situation :\nUne PCA conserve 95 % de variance.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle réduit la dimension en gardant l'essentiel de la variance linéaire",
    "reponse_f1": "Elle conserve toutes les informations",
    "reponse_f2": "Elle garde les variables originales",
    "explication": "La PCA projette sur des axes orthogonaux."
  },
  {
    "id": 224,
    "question": "Situation :\nUn autoencodeur possède un goulot d'étranglement.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut apprendre une représentation compacte",
    "reponse_f1": "Il réalise uniquement une classification",
    "reponse_f2": "Il n'utilise aucune loss",
    "explication": "La reconstruction force une compression utile."
  },
  {
    "id": 225,
    "question": "Situation :\nUne récompense différée doit guider les actions.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Optimiser le retour cumulé actualisé",
    "reponse_f1": "Optimiser uniquement la récompense immédiate",
    "reponse_f2": "Ignorer les états futurs",
    "explication": "Le RL considère les conséquences futures."
  },
  {
    "id": 226,
    "question": "Situation :\nUne politique exploite toujours l'action estimée meilleure.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle peut manquer d'exploration",
    "reponse_f1": "Elle explore tout l'espace",
    "reponse_f2": "Elle est automatiquement optimale",
    "explication": "L'exploitation pure peut bloquer."
  },
  {
    "id": 227,
    "question": "Situation :\nUne stratégie epsilon-greedy est utilisée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle explore avec probabilité epsilon",
    "reponse_f1": "Elle n'exploite jamais",
    "reponse_f2": "Elle choisit toujours l'action la pire",
    "explication": "Elle équilibre exploration et exploitation."
  },
  {
    "id": 228,
    "question": "Situation :\nUn GAN oppose générateur et discriminateur.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Le générateur produit des exemples plausibles",
    "reponse_f1": "Le discriminateur génère les données finales",
    "reponse_f2": "Les deux ont le même objectif",
    "explication": "Le générateur tente de tromper le discriminateur."
  },
  {
    "id": 229,
    "question": "Situation :\nUn modèle génératif reproduit presque exactement le train.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de mémorisation et fuite",
    "reponse_f1": "Preuve de généralisation parfaite",
    "reponse_f2": "Preuve d'anonymisation",
    "explication": "La mémorisation peut exposer des données."
  },
  {
    "id": 230,
    "question": "Situation :\nUn modèle de diffusion génère des données.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il débruite progressivement",
    "reponse_f1": "Il fait uniquement du clustering",
    "reponse_f2": "Il n'apprend rien",
    "explication": "Il inverse un processus de bruit."
  },
  {
    "id": 231,
    "question": "Situation :\nLa distribution des features change en production.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Data drift",
    "reponse_f1": "Label leakage obligatoire",
    "reponse_f2": "Overfitting certain",
    "explication": "Le data drift touche les entrées."
  },
  {
    "id": 232,
    "question": "Situation :\nLa relation entre features et cible change.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Concept drift",
    "reponse_f1": "Simple changement de format",
    "reponse_f2": "Calibration parfaite",
    "explication": "La fonction cible évolue."
  },
  {
    "id": 233,
    "question": "Situation :\nUn modèle est déployé sans suivi.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Ajouter monitoring et alertes",
    "reponse_f1": "Considérer la performance figée",
    "reponse_f2": "Supprimer les logs",
    "explication": "Les performances peuvent se dégrader."
  },
  {
    "id": 234,
    "question": "Situation :\nUne feature sensible influence fortement les décisions.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Évaluer l'équité et les risques de discrimination",
    "reponse_f1": "Masquer uniquement son nom",
    "reponse_f2": "Ignorer l'effet si l'accuracy est bonne",
    "explication": "La performance globale ne suffit pas."
  },
  {
    "id": 235,
    "question": "Situation :\nUne prédiction complexe doit être expliquée localement.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser une méthode locale avec prudence",
    "reponse_f1": "Utiliser seulement l'accuracy",
    "reponse_f2": "Lire des poids inexistants",
    "explication": "Les explications locales sont approximatives."
  },
  {
    "id": 236,
    "question": "Situation :\nUne importance par permutation est calculée.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle mesure la perte de performance après perturbation",
    "reponse_f1": "Elle prouve une causalité",
    "reponse_f2": "Elle ignore les corrélations",
    "explication": "Elle mesure une dépendance prédictive."
  },
  {
    "id": 237,
    "question": "Situation :\nUn modèle doit être reproduit plus tard.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Versionner code, données, paramètres et environnement",
    "reponse_f1": "Conserver uniquement le fichier modèle",
    "reponse_f2": "Noter seulement le score",
    "explication": "La reproductibilité couvre toute la chaîne."
  },
  {
    "id": 238,
    "question": "Situation :\nDeux modèles sont comparés en production.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser un A/B test contrôlé",
    "reponse_f1": "Remplacer immédiatement tout le trafic",
    "reponse_f2": "Comparer seulement les tailles de fichiers",
    "explication": "Un test contrôlé réduit le risque."
  },
  {
    "id": 239,
    "question": "Situation :\nUne nouvelle version reçoit 5 % du trafic.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Canary deployment",
    "reponse_f1": "Validation croisée",
    "reponse_f2": "Clustering hiérarchique",
    "explication": "Le canary limite l'exposition."
  },
  {
    "id": 240,
    "question": "Situation :\nUne décision automatisée est critique.\n\nContrainte complémentaire :\nL'équipe cherche une décision techniquement justifiable.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prévoir supervision humaine et recours",
    "reponse_f1": "Supprimer toute intervention",
    "reponse_f2": "Utiliser uniquement la confiance maximale",
    "explication": "Les contextes critiques exigent des garde-fous."
  },
  {
    "id": 241,
    "question": "Situation :\nLe score d'entraînement atteint 99 %, contre 70 % en validation.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Surapprentissage",
    "reponse_f1": "Sous-apprentissage",
    "reponse_f2": "Calibration parfaite",
    "explication": "L'écart train-validation indique une variance élevée."
  },
  {
    "id": 242,
    "question": "Situation :\nLes scores d'entraînement et de validation sont tous deux faibles.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Sous-apprentissage",
    "reponse_f1": "Surapprentissage",
    "reponse_f2": "Fuite de données",
    "explication": "Un biais élevé produit de mauvaises performances partout."
  },
  {
    "id": 243,
    "question": "Situation :\nUne variable calculée après la date de prédiction est utilisée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Fuite de données",
    "reponse_f1": "Régularisation",
    "reponse_f2": "Data augmentation",
    "explication": "Une information future fausse l'évaluation."
  },
  {
    "id": 244,
    "question": "Situation :\nDes données temporelles sont mélangées aléatoirement avant validation.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "La validation risque de violer l'ordre temporel",
    "reponse_f1": "La validation devient plus robuste",
    "reponse_f2": "Aucun risque n'existe",
    "explication": "Il faut préserver la causalité temporelle."
  },
  {
    "id": 245,
    "question": "Situation :\nLa classe positive représente 1 % des cas.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'accuracy seule est insuffisante",
    "reponse_f1": "L'accuracy suffit toujours",
    "reponse_f2": "Il faut supprimer la classe rare",
    "explication": "Précision, rappel, F1 et PR-AUC sont plus informatifs."
  },
  {
    "id": 246,
    "question": "Situation :\nLes erreurs extrêmes doivent être moins influentes.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Privilégier MAE à MSE",
    "reponse_f1": "Privilégier MSE à MAE",
    "reponse_f2": "Utiliser uniquement R²",
    "explication": "MAE est moins sensible aux outliers."
  },
  {
    "id": 247,
    "question": "Situation :\nLes probabilités prédites doivent refléter les fréquences réelles.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Évaluer la calibration",
    "reponse_f1": "Évaluer uniquement l'accuracy",
    "reponse_f2": "Fixer arbitrairement le seuil à 0,5",
    "explication": "La calibration mesure la qualité probabiliste."
  },
  {
    "id": 248,
    "question": "Situation :\nLe rappel doit être augmenté.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Abaisser généralement le seuil de décision",
    "reponse_f1": "Augmenter toujours le seuil",
    "reponse_f2": "Le seuil n'a aucun effet",
    "explication": "Un seuil plus bas produit davantage de positifs."
  },
  {
    "id": 249,
    "question": "Situation :\nUn individu possède plusieurs lignes dans le dataset.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Regrouper ses lignes dans le même fold",
    "reponse_f1": "Répartir chaque ligne au hasard",
    "reponse_f2": "Supprimer l'identifiant uniquement",
    "explication": "Sinon, des informations peuvent fuiter entre folds."
  },
  {
    "id": 250,
    "question": "Situation :\nLe jeu de test a guidé de nombreux choix d'hyperparamètres.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il n'est plus un test totalement neutre",
    "reponse_f1": "Il reste parfaitement indépendant",
    "reponse_f2": "Le modèle devient non supervisé",
    "explication": "Le test a été indirectement sur-optimisé."
  },
  {
    "id": 251,
    "question": "Situation :\nUne régression pénalisée reçoit des variables d'échelles très différentes.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Standardiser les variables",
    "reponse_f1": "Ne jamais mettre à l'échelle",
    "reponse_f2": "Convertir les nombres en texte",
    "explication": "La pénalisation dépend de la taille des coefficients."
  },
  {
    "id": 252,
    "question": "Situation :\nUn arbre de décision est trop profond.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Limiter sa complexité",
    "reponse_f1": "Augmenter encore sa profondeur",
    "reponse_f2": "Supprimer la cible",
    "explication": "Le pruning ou les limites réduisent la variance."
  },
  {
    "id": 253,
    "question": "Situation :\nUn Random Forest améliore un arbre unique.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il réduit souvent la variance",
    "reponse_f1": "Il supprime toujours tout biais",
    "reponse_f2": "Il n'utilise qu'un arbre",
    "explication": "Le bagging agrège des arbres décorrelés."
  },
  {
    "id": 254,
    "question": "Situation :\nLe gradient boosting ajoute des arbres successifs.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Chaque arbre corrige les erreurs précédentes",
    "reponse_f1": "Tous les arbres sont indépendants",
    "reponse_f2": "Il ne peut jamais surapprendre",
    "explication": "Le boosting est séquentiel."
  },
  {
    "id": 255,
    "question": "Situation :\nUne variable catégorielle possède 100 000 modalités.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Éviter un one-hot naïf",
    "reponse_f1": "Créer systématiquement 100 000 colonnes",
    "reponse_f2": "Supprimer toutes les autres variables",
    "explication": "La haute cardinalité peut exploser la dimension."
  },
  {
    "id": 256,
    "question": "Situation :\nUne variable ordinale contient faible, moyen, élevé.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Préserver l'ordre dans l'encodage",
    "reponse_f1": "Utiliser des identifiants aléatoires",
    "reponse_f2": "Traiter les modalités comme identiques",
    "explication": "L'ordre est une information utile."
  },
  {
    "id": 257,
    "question": "Situation :\nK-means reçoit des variables non standardisées.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Les grandes échelles dominent la distance",
    "reponse_f1": "La standardisation est interdite",
    "reponse_f2": "K-means devient supervisé",
    "explication": "K-means utilise les distances."
  },
  {
    "id": 258,
    "question": "Situation :\nLes données contiennent de nombreux outliers.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser une transformation ou un scaler robuste",
    "reponse_f1": "Utiliser toujours min-max sans analyse",
    "reponse_f2": "Remplacer tous les outliers par zéro",
    "explication": "Les statistiques robustes limitent leur influence."
  },
  {
    "id": 259,
    "question": "Situation :\nL'imputation est calculée avant le split train-test.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de fuite d'information",
    "reponse_f1": "Aucun risque possible",
    "reponse_f2": "Le test devient inutilement petit",
    "explication": "L'imputation doit être apprise sur le train."
  },
  {
    "id": 260,
    "question": "Situation :\nLa PCA est calculée avant validation croisée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'intégrer dans le pipeline de chaque fold",
    "reponse_f1": "La calculer sur toutes les données",
    "reponse_f2": "La remplacer par la cible",
    "explication": "Sinon, la validation fuit l'information."
  },
  {
    "id": 261,
    "question": "Situation :\nUn réseau profond à sigmoïdes apprend très lentement.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de vanishing gradient",
    "reponse_f1": "Explosion garantie du gradient",
    "reponse_f2": "Convergence toujours rapide",
    "explication": "Les dérivées de la sigmoïde peuvent être faibles."
  },
  {
    "id": 262,
    "question": "Situation :\nDe nombreuses ReLU restent toujours nulles.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Phénomène de dead ReLU",
    "reponse_f1": "Effet softmax",
    "reponse_f2": "Calibration parfaite",
    "explication": "Des activations négatives persistantes peuvent tuer les neurones."
  },
  {
    "id": 263,
    "question": "Situation :\nLa loss train baisse mais la loss validation monte.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Début de surapprentissage",
    "reponse_f1": "Sous-apprentissage certain",
    "reponse_f2": "Validation inutile",
    "explication": "La généralisation se dégrade."
  },
  {
    "id": 264,
    "question": "Situation :\nLe learning rate est trop élevé.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Oscillation ou divergence",
    "reponse_f1": "Convergence toujours plus rapide",
    "reponse_f2": "Gradient automatiquement nul",
    "explication": "Les pas dépassent les minima."
  },
  {
    "id": 265,
    "question": "Situation :\nLe learning rate est trop faible.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Apprentissage très lent",
    "reponse_f1": "Convergence instantanée",
    "reponse_f2": "Loss nécessairement croissante",
    "explication": "Les mises à jour sont minuscules."
  },
  {
    "id": 266,
    "question": "Situation :\nBatch normalization est ajoutée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle stabilise souvent l'entraînement",
    "reponse_f1": "Elle remplace toute activation",
    "reponse_f2": "Elle garantit zéro overfitting",
    "explication": "Elle normalise les activations intermédiaires."
  },
  {
    "id": 267,
    "question": "Situation :\nDropout est actif pendant l'entraînement.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Des unités sont désactivées aléatoirement",
    "reponse_f1": "Tous les poids deviennent nuls",
    "reponse_f2": "Le modèle devient déterministe",
    "explication": "Dropout agit comme régularisation."
  },
  {
    "id": 268,
    "question": "Situation :\nUne classification multiclasse exclusive est visée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Softmax et cross-entropy",
    "reponse_f1": "Sigmoïdes indépendantes uniquement",
    "reponse_f2": "Une ReLU scalaire",
    "explication": "Softmax produit une distribution exclusive."
  },
  {
    "id": 269,
    "question": "Situation :\nUne classification multilabel est visée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Sigmoïde indépendante par classe",
    "reponse_f1": "Softmax exclusif",
    "reponse_f2": "Une seule sortie binaire globale",
    "explication": "Plusieurs labels peuvent être vrais."
  },
  {
    "id": 270,
    "question": "Situation :\nLes gradients explosent dans un RNN.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Appliquer gradient clipping",
    "reponse_f1": "Augmenter le learning rate",
    "reponse_f2": "Supprimer la loss",
    "explication": "Le clipping borne la norme."
  },
  {
    "id": 271,
    "question": "Situation :\nDeux mots sémantiquement proches doivent avoir des vecteurs voisins.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser des embeddings",
    "reponse_f1": "Utiliser des identifiants arbitraires",
    "reponse_f2": "Utiliser seulement la longueur des mots",
    "explication": "Les embeddings apprennent une géométrie sémantique."
  },
  {
    "id": 272,
    "question": "Situation :\nUn modèle prédit le prochain token.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il estime une distribution conditionnelle",
    "reponse_f1": "Il fait uniquement une classification binaire",
    "reponse_f2": "Il ignore le contexte",
    "explication": "Un LM autoregressif dépend des tokens précédents."
  },
  {
    "id": 273,
    "question": "Situation :\nUne séquence longue contient des dépendances distantes.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'attention facilite les interactions globales",
    "reponse_f1": "Un bag-of-words conserve tout l'ordre",
    "reponse_f2": "Une convolution 1x1 suffit toujours",
    "explication": "L'attention relie directement les positions."
  },
  {
    "id": 274,
    "question": "Situation :\nUn Transformer n'a aucun encodage positionnel.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il perd l'ordre explicite",
    "reponse_f1": "Il apprend toujours l'ordre exact",
    "reponse_f2": "Il devient un CNN",
    "explication": "L'attention seule est permutation-equivariant."
  },
  {
    "id": 275,
    "question": "Situation :\nDes images sont légèrement tournées et recadrées.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "L'augmentation peut améliorer la généralisation",
    "reponse_f1": "Toute augmentation détruit les labels",
    "reponse_f2": "Elle remplace la validation",
    "explication": "Les transformations valides enrichissent les données."
  },
  {
    "id": 276,
    "question": "Situation :\nUn CNN partage ses filtres spatialement.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Cela réduit le nombre de paramètres",
    "reponse_f1": "Chaque pixel a son propre réseau",
    "reponse_f2": "Cela détruit toute structure locale",
    "explication": "Le partage exploite la localité."
  },
  {
    "id": 277,
    "question": "Situation :\nUne segmentation sémantique est demandée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prédire une classe par pixel",
    "reponse_f1": "Prédire une classe par image",
    "reponse_f2": "Prédire seulement des boîtes",
    "explication": "La sortie est une carte dense."
  },
  {
    "id": 278,
    "question": "Situation :\nUne détection d'objets est demandée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prédire classes et boîtes",
    "reponse_f1": "Prédire un score global uniquement",
    "reponse_f2": "Prédire des embeddings textuels",
    "explication": "La détection localise et classe."
  },
  {
    "id": 279,
    "question": "Situation :\nLe tokenizer produit trop de tokens inconnus.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser des sous-mots",
    "reponse_f1": "Supprimer tous les mots rares",
    "reponse_f2": "Utiliser une phrase entière comme token",
    "explication": "Le subword réduit les OOV."
  },
  {
    "id": 280,
    "question": "Situation :\nUne recherche sémantique est construite.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Comparer des embeddings",
    "reponse_f1": "Comparer uniquement les chaînes exactes",
    "reponse_f2": "Comparer les tailles de fichiers",
    "explication": "Les embeddings capturent le sens."
  },
  {
    "id": 281,
    "question": "Situation :\nK-means reçoit des clusters allongés et non sphériques.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut être inadapté",
    "reponse_f1": "Il est toujours optimal",
    "reponse_f2": "Le nombre de clusters est sans importance",
    "explication": "K-means favorise des groupes sphériques."
  },
  {
    "id": 282,
    "question": "Situation :\nDBSCAN est utilisé.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut détecter du bruit et des formes arbitraires",
    "reponse_f1": "Il exige toujours k",
    "reponse_f2": "Il ne détecte jamais d'outliers",
    "explication": "DBSCAN repose sur la densité."
  },
  {
    "id": 283,
    "question": "Situation :\nUne PCA conserve 95 % de variance.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle réduit la dimension en gardant l'essentiel de la variance linéaire",
    "reponse_f1": "Elle conserve toutes les informations",
    "reponse_f2": "Elle garde les variables originales",
    "explication": "La PCA projette sur des axes orthogonaux."
  },
  {
    "id": 284,
    "question": "Situation :\nUn autoencodeur possède un goulot d'étranglement.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il peut apprendre une représentation compacte",
    "reponse_f1": "Il réalise uniquement une classification",
    "reponse_f2": "Il n'utilise aucune loss",
    "explication": "La reconstruction force une compression utile."
  },
  {
    "id": 285,
    "question": "Situation :\nUne récompense différée doit guider les actions.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Optimiser le retour cumulé actualisé",
    "reponse_f1": "Optimiser uniquement la récompense immédiate",
    "reponse_f2": "Ignorer les états futurs",
    "explication": "Le RL considère les conséquences futures."
  },
  {
    "id": 286,
    "question": "Situation :\nUne politique exploite toujours l'action estimée meilleure.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle peut manquer d'exploration",
    "reponse_f1": "Elle explore tout l'espace",
    "reponse_f2": "Elle est automatiquement optimale",
    "explication": "L'exploitation pure peut bloquer."
  },
  {
    "id": 287,
    "question": "Situation :\nUne stratégie epsilon-greedy est utilisée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle explore avec probabilité epsilon",
    "reponse_f1": "Elle n'exploite jamais",
    "reponse_f2": "Elle choisit toujours l'action la pire",
    "explication": "Elle équilibre exploration et exploitation."
  },
  {
    "id": 288,
    "question": "Situation :\nUn GAN oppose générateur et discriminateur.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Le générateur produit des exemples plausibles",
    "reponse_f1": "Le discriminateur génère les données finales",
    "reponse_f2": "Les deux ont le même objectif",
    "explication": "Le générateur tente de tromper le discriminateur."
  },
  {
    "id": 289,
    "question": "Situation :\nUn modèle génératif reproduit presque exactement le train.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Risque de mémorisation et fuite",
    "reponse_f1": "Preuve de généralisation parfaite",
    "reponse_f2": "Preuve d'anonymisation",
    "explication": "La mémorisation peut exposer des données."
  },
  {
    "id": 290,
    "question": "Situation :\nUn modèle de diffusion génère des données.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Il débruite progressivement",
    "reponse_f1": "Il fait uniquement du clustering",
    "reponse_f2": "Il n'apprend rien",
    "explication": "Il inverse un processus de bruit."
  },
  {
    "id": 291,
    "question": "Situation :\nLa distribution des features change en production.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Data drift",
    "reponse_f1": "Label leakage obligatoire",
    "reponse_f2": "Overfitting certain",
    "explication": "Le data drift touche les entrées."
  },
  {
    "id": 292,
    "question": "Situation :\nLa relation entre features et cible change.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Concept drift",
    "reponse_f1": "Simple changement de format",
    "reponse_f2": "Calibration parfaite",
    "explication": "La fonction cible évolue."
  },
  {
    "id": 293,
    "question": "Situation :\nUn modèle est déployé sans suivi.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Ajouter monitoring et alertes",
    "reponse_f1": "Considérer la performance figée",
    "reponse_f2": "Supprimer les logs",
    "explication": "Les performances peuvent se dégrader."
  },
  {
    "id": 294,
    "question": "Situation :\nUne feature sensible influence fortement les décisions.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Évaluer l'équité et les risques de discrimination",
    "reponse_f1": "Masquer uniquement son nom",
    "reponse_f2": "Ignorer l'effet si l'accuracy est bonne",
    "explication": "La performance globale ne suffit pas."
  },
  {
    "id": 295,
    "question": "Situation :\nUne prédiction complexe doit être expliquée localement.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser une méthode locale avec prudence",
    "reponse_f1": "Utiliser seulement l'accuracy",
    "reponse_f2": "Lire des poids inexistants",
    "explication": "Les explications locales sont approximatives."
  },
  {
    "id": 296,
    "question": "Situation :\nUne importance par permutation est calculée.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Elle mesure la perte de performance après perturbation",
    "reponse_f1": "Elle prouve une causalité",
    "reponse_f2": "Elle ignore les corrélations",
    "explication": "Elle mesure une dépendance prédictive."
  },
  {
    "id": 297,
    "question": "Situation :\nUn modèle doit être reproduit plus tard.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Versionner code, données, paramètres et environnement",
    "reponse_f1": "Conserver uniquement le fichier modèle",
    "reponse_f2": "Noter seulement le score",
    "explication": "La reproductibilité couvre toute la chaîne."
  },
  {
    "id": 298,
    "question": "Situation :\nDeux modèles sont comparés en production.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Utiliser un A/B test contrôlé",
    "reponse_f1": "Remplacer immédiatement tout le trafic",
    "reponse_f2": "Comparer seulement les tailles de fichiers",
    "explication": "Un test contrôlé réduit le risque."
  },
  {
    "id": 299,
    "question": "Situation :\nUne nouvelle version reçoit 5 % du trafic.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Canary deployment",
    "reponse_f1": "Validation croisée",
    "reponse_f2": "Clustering hiérarchique",
    "explication": "Le canary limite l'exposition."
  },
  {
    "id": 300,
    "question": "Situation :\nUne décision automatisée est critique.\n\nContrainte complémentaire :\nLe choix doit rester robuste sur des données nouvelles.\n\nQuelle réponse est la plus rigoureuse ?",
    "reponse_v": "Prévoir supervision humaine et recours",
    "reponse_f1": "Supprimer toute intervention",
    "reponse_f2": "Utiliser uniquement la confiance maximale",
    "explication": "Les contextes critiques exigent des garde-fous."
  }
]
