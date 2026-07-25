export const dataQuizz_uml_mcd_mld_mini_tp_difficiles = [
  {
    id: 1,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Client\nCas principal : « S'authentifier »\nCas secondaire : « Consulter le tableau de bord »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-001`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication:
      "L'authentification est obligatoire avant l'accès au tableau de bord.",
  },
  {
    id: 2,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Administrateur\nCas principal : « Passer une commande »\nCas secondaire : « Appliquer un code promotionnel »\n\nContrainte métier :\n- le cas secondaire est déclenché uniquement dans certains scénarios ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-002`",
    reponse_v: "<<extend>>",
    reponse_f1: "<<include>>",
    reponse_f2: "généralisation",
    explication:
      "L'application d'un code promotionnel est optionnelle lors de la commande.",
  },
  {
    id: 3,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Gestionnaire\nCas principal : « Créer un compte »\nCas secondaire : « Vérifier l'adresse e-mail »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-003`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication:
      "La vérification de l'adresse est une étape obligatoire de la création.",
  },
  {
    id: 4,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Technicien\nCas principal : « Payer une facture »\nCas secondaire : « Choisir un moyen de paiement »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-004`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication: "Le choix du moyen de paiement fait partie du paiement.",
  },
  {
    id: 5,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Comptable\nCas principal : « Consulter un dossier »\nCas secondaire : « Exporter le dossier »\n\nContrainte métier :\n- le cas secondaire est déclenché uniquement dans certains scénarios ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-005`",
    reponse_v: "<<extend>>",
    reponse_f1: "<<include>>",
    reponse_f2: "généralisation",
    explication: "L'export n'a lieu que si l'utilisateur le demande.",
  },
  {
    id: 6,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Client\nCas principal : « S'authentifier »\nCas secondaire : « Consulter le tableau de bord »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-006`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication:
      "L'authentification est obligatoire avant l'accès au tableau de bord.",
  },
  {
    id: 7,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Administrateur\nCas principal : « Passer une commande »\nCas secondaire : « Appliquer un code promotionnel »\n\nContrainte métier :\n- le cas secondaire est déclenché uniquement dans certains scénarios ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-007`",
    reponse_v: "<<extend>>",
    reponse_f1: "<<include>>",
    reponse_f2: "généralisation",
    explication:
      "L'application d'un code promotionnel est optionnelle lors de la commande.",
  },
  {
    id: 8,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Gestionnaire\nCas principal : « Créer un compte »\nCas secondaire : « Vérifier l'adresse e-mail »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-008`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication:
      "La vérification de l'adresse est une étape obligatoire de la création.",
  },
  {
    id: 9,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Technicien\nCas principal : « Payer une facture »\nCas secondaire : « Choisir un moyen de paiement »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-009`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication: "Le choix du moyen de paiement fait partie du paiement.",
  },
  {
    id: 10,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Comptable\nCas principal : « Consulter un dossier »\nCas secondaire : « Exporter le dossier »\n\nContrainte métier :\n- le cas secondaire est déclenché uniquement dans certains scénarios ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-010`",
    reponse_v: "<<extend>>",
    reponse_f1: "<<include>>",
    reponse_f2: "généralisation",
    explication: "L'export n'a lieu que si l'utilisateur le demande.",
  },
  {
    id: 11,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Client\nCas principal : « S'authentifier »\nCas secondaire : « Consulter le tableau de bord »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-011`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication:
      "L'authentification est obligatoire avant l'accès au tableau de bord.",
  },
  {
    id: 12,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Administrateur\nCas principal : « Passer une commande »\nCas secondaire : « Appliquer un code promotionnel »\n\nContrainte métier :\n- le cas secondaire est déclenché uniquement dans certains scénarios ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-012`",
    reponse_v: "<<extend>>",
    reponse_f1: "<<include>>",
    reponse_f2: "généralisation",
    explication:
      "L'application d'un code promotionnel est optionnelle lors de la commande.",
  },
  {
    id: 13,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Gestionnaire\nCas principal : « Créer un compte »\nCas secondaire : « Vérifier l'adresse e-mail »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-013`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication:
      "La vérification de l'adresse est une étape obligatoire de la création.",
  },
  {
    id: 14,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Technicien\nCas principal : « Payer une facture »\nCas secondaire : « Choisir un moyen de paiement »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-014`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication: "Le choix du moyen de paiement fait partie du paiement.",
  },
  {
    id: 15,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Comptable\nCas principal : « Consulter un dossier »\nCas secondaire : « Exporter le dossier »\n\nContrainte métier :\n- le cas secondaire est déclenché uniquement dans certains scénarios ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-015`",
    reponse_v: "<<extend>>",
    reponse_f1: "<<include>>",
    reponse_f2: "généralisation",
    explication: "L'export n'a lieu que si l'utilisateur le demande.",
  },
  {
    id: 16,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Client\nCas principal : « S'authentifier »\nCas secondaire : « Consulter le tableau de bord »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-016`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication:
      "L'authentification est obligatoire avant l'accès au tableau de bord.",
  },
  {
    id: 17,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Administrateur\nCas principal : « Passer une commande »\nCas secondaire : « Appliquer un code promotionnel »\n\nContrainte métier :\n- le cas secondaire est déclenché uniquement dans certains scénarios ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-017`",
    reponse_v: "<<extend>>",
    reponse_f1: "<<include>>",
    reponse_f2: "généralisation",
    explication:
      "L'application d'un code promotionnel est optionnelle lors de la commande.",
  },
  {
    id: 18,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Gestionnaire\nCas principal : « Créer un compte »\nCas secondaire : « Vérifier l'adresse e-mail »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-018`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication:
      "La vérification de l'adresse est une étape obligatoire de la création.",
  },
  {
    id: 19,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Technicien\nCas principal : « Payer une facture »\nCas secondaire : « Choisir un moyen de paiement »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-019`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication: "Le choix du moyen de paiement fait partie du paiement.",
  },
  {
    id: 20,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Comptable\nCas principal : « Consulter un dossier »\nCas secondaire : « Exporter le dossier »\n\nContrainte métier :\n- le cas secondaire est déclenché uniquement dans certains scénarios ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-020`",
    reponse_v: "<<extend>>",
    reponse_f1: "<<include>>",
    reponse_f2: "généralisation",
    explication: "L'export n'a lieu que si l'utilisateur le demande.",
  },
  {
    id: 21,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Client\nCas principal : « S'authentifier »\nCas secondaire : « Consulter le tableau de bord »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-021`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication:
      "L'authentification est obligatoire avant l'accès au tableau de bord.",
  },
  {
    id: 22,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Administrateur\nCas principal : « Passer une commande »\nCas secondaire : « Appliquer un code promotionnel »\n\nContrainte métier :\n- le cas secondaire est déclenché uniquement dans certains scénarios ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-022`",
    reponse_v: "<<extend>>",
    reponse_f1: "<<include>>",
    reponse_f2: "généralisation",
    explication:
      "L'application d'un code promotionnel est optionnelle lors de la commande.",
  },
  {
    id: 23,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Gestionnaire\nCas principal : « Créer un compte »\nCas secondaire : « Vérifier l'adresse e-mail »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-023`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication:
      "La vérification de l'adresse est une étape obligatoire de la création.",
  },
  {
    id: 24,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Technicien\nCas principal : « Payer une facture »\nCas secondaire : « Choisir un moyen de paiement »\n\nContrainte métier :\n- le cas secondaire est toujours exécuté ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-024`",
    reponse_v: "<<include>>",
    reponse_f1: "<<extend>>",
    reponse_f2: "généralisation",
    explication: "Le choix du moyen de paiement fait partie du paiement.",
  },
  {
    id: 25,
    question:
      "`Diagramme de cas d'utilisation UML — niveau difficile\n\nActeur principal : Comptable\nCas principal : « Consulter un dossier »\nCas secondaire : « Exporter le dossier »\n\nContrainte métier :\n- le cas secondaire est déclenché uniquement dans certains scénarios ;\n- le cas principal reste compréhensible indépendamment du nom technique de la relation ;\n- aucune généralisation d'acteur n'est impliquée.\n\nQuelle relation UML faut-il placer entre les deux cas d'utilisation ?\n\nRéférence exercice : CONCEPTION-025`",
    reponse_v: "<<extend>>",
    reponse_f1: "<<include>>",
    reponse_f2: "généralisation",
    explication: "L'export n'a lieu que si l'utilisateur le demande.",
  },
  {
    id: 26,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Commande\n- LigneCommande\n\nRègles :\n- un objet Commande est lié à 1..* objet(s) LigneCommande ;\n- un objet LigneCommande dépend fortement du cycle de vie de Commande si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-026`",
    reponse_v:
      "Composition entre Commande et LigneCommande, losange plein côté Commande, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Commande et LigneCommande, losange vide côté Commande, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Commande et LigneCommande, multiplicités 1 et 1..*",
    explication: "Une ligne de commande n'a pas de sens sans sa commande.",
  },
  {
    id: 27,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Équipe\n- Joueur\n\nRègles :\n- un objet Équipe est lié à 0..* objet(s) Joueur ;\n- un objet Joueur dépend fortement du cycle de vie de Équipe si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-027`",
    reponse_v:
      "Agrégation entre Équipe et Joueur, losange vide côté Équipe, multiplicités 1 et 0..*",
    reponse_f1:
      "Composition entre Équipe et Joueur, losange plein côté Équipe, multiplicités 1 et 0..*",
    reponse_f2:
      "Association simple entre Équipe et Joueur, multiplicités 1 et 0..*",
    explication: "Un joueur peut exister indépendamment de l'équipe.",
  },
  {
    id: 28,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Maison\n- Pièce\n\nRègles :\n- un objet Maison est lié à 1..* objet(s) Pièce ;\n- un objet Pièce dépend fortement du cycle de vie de Maison si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-028`",
    reponse_v:
      "Composition entre Maison et Pièce, losange plein côté Maison, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Maison et Pièce, losange vide côté Maison, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Maison et Pièce, multiplicités 1 et 1..*",
    explication:
      "La destruction de la maison entraîne celle de ses pièces dans le modèle.",
  },
  {
    id: 29,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Bibliothèque\n- Livre\n\nRègles :\n- un objet Bibliothèque est lié à 0..* objet(s) Livre ;\n- un objet Livre dépend fortement du cycle de vie de Bibliothèque si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-029`",
    reponse_v:
      "Agrégation entre Bibliothèque et Livre, losange vide côté Bibliothèque, multiplicités 1 et 0..*",
    reponse_f1:
      "Composition entre Bibliothèque et Livre, losange plein côté Bibliothèque, multiplicités 1 et 0..*",
    reponse_f2:
      "Association simple entre Bibliothèque et Livre, multiplicités 1 et 0..*",
    explication:
      "Un livre peut exister sans appartenir à une bibliothèque donnée.",
  },
  {
    id: 30,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Facture\n- LigneFacture\n\nRègles :\n- un objet Facture est lié à 1..* objet(s) LigneFacture ;\n- un objet LigneFacture dépend fortement du cycle de vie de Facture si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-030`",
    reponse_v:
      "Composition entre Facture et LigneFacture, losange plein côté Facture, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Facture et LigneFacture, losange vide côté Facture, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Facture et LigneFacture, multiplicités 1 et 1..*",
    explication: "Une ligne de facture dépend du cycle de vie de la facture.",
  },
  {
    id: 31,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Commande\n- LigneCommande\n\nRègles :\n- un objet Commande est lié à 1..* objet(s) LigneCommande ;\n- un objet LigneCommande dépend fortement du cycle de vie de Commande si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-031`",
    reponse_v:
      "Composition entre Commande et LigneCommande, losange plein côté Commande, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Commande et LigneCommande, losange vide côté Commande, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Commande et LigneCommande, multiplicités 1 et 1..*",
    explication: "Une ligne de commande n'a pas de sens sans sa commande.",
  },
  {
    id: 32,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Équipe\n- Joueur\n\nRègles :\n- un objet Équipe est lié à 0..* objet(s) Joueur ;\n- un objet Joueur dépend fortement du cycle de vie de Équipe si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-032`",
    reponse_v:
      "Agrégation entre Équipe et Joueur, losange vide côté Équipe, multiplicités 1 et 0..*",
    reponse_f1:
      "Composition entre Équipe et Joueur, losange plein côté Équipe, multiplicités 1 et 0..*",
    reponse_f2:
      "Association simple entre Équipe et Joueur, multiplicités 1 et 0..*",
    explication: "Un joueur peut exister indépendamment de l'équipe.",
  },
  {
    id: 33,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Maison\n- Pièce\n\nRègles :\n- un objet Maison est lié à 1..* objet(s) Pièce ;\n- un objet Pièce dépend fortement du cycle de vie de Maison si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-033`",
    reponse_v:
      "Composition entre Maison et Pièce, losange plein côté Maison, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Maison et Pièce, losange vide côté Maison, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Maison et Pièce, multiplicités 1 et 1..*",
    explication:
      "La destruction de la maison entraîne celle de ses pièces dans le modèle.",
  },
  {
    id: 34,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Bibliothèque\n- Livre\n\nRègles :\n- un objet Bibliothèque est lié à 0..* objet(s) Livre ;\n- un objet Livre dépend fortement du cycle de vie de Bibliothèque si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-034`",
    reponse_v:
      "Agrégation entre Bibliothèque et Livre, losange vide côté Bibliothèque, multiplicités 1 et 0..*",
    reponse_f1:
      "Composition entre Bibliothèque et Livre, losange plein côté Bibliothèque, multiplicités 1 et 0..*",
    reponse_f2:
      "Association simple entre Bibliothèque et Livre, multiplicités 1 et 0..*",
    explication:
      "Un livre peut exister sans appartenir à une bibliothèque donnée.",
  },
  {
    id: 35,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Facture\n- LigneFacture\n\nRègles :\n- un objet Facture est lié à 1..* objet(s) LigneFacture ;\n- un objet LigneFacture dépend fortement du cycle de vie de Facture si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-035`",
    reponse_v:
      "Composition entre Facture et LigneFacture, losange plein côté Facture, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Facture et LigneFacture, losange vide côté Facture, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Facture et LigneFacture, multiplicités 1 et 1..*",
    explication: "Une ligne de facture dépend du cycle de vie de la facture.",
  },
  {
    id: 36,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Commande\n- LigneCommande\n\nRègles :\n- un objet Commande est lié à 1..* objet(s) LigneCommande ;\n- un objet LigneCommande dépend fortement du cycle de vie de Commande si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-036`",
    reponse_v:
      "Composition entre Commande et LigneCommande, losange plein côté Commande, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Commande et LigneCommande, losange vide côté Commande, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Commande et LigneCommande, multiplicités 1 et 1..*",
    explication: "Une ligne de commande n'a pas de sens sans sa commande.",
  },
  {
    id: 37,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Équipe\n- Joueur\n\nRègles :\n- un objet Équipe est lié à 0..* objet(s) Joueur ;\n- un objet Joueur dépend fortement du cycle de vie de Équipe si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-037`",
    reponse_v:
      "Agrégation entre Équipe et Joueur, losange vide côté Équipe, multiplicités 1 et 0..*",
    reponse_f1:
      "Composition entre Équipe et Joueur, losange plein côté Équipe, multiplicités 1 et 0..*",
    reponse_f2:
      "Association simple entre Équipe et Joueur, multiplicités 1 et 0..*",
    explication: "Un joueur peut exister indépendamment de l'équipe.",
  },
  {
    id: 38,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Maison\n- Pièce\n\nRègles :\n- un objet Maison est lié à 1..* objet(s) Pièce ;\n- un objet Pièce dépend fortement du cycle de vie de Maison si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-038`",
    reponse_v:
      "Composition entre Maison et Pièce, losange plein côté Maison, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Maison et Pièce, losange vide côté Maison, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Maison et Pièce, multiplicités 1 et 1..*",
    explication:
      "La destruction de la maison entraîne celle de ses pièces dans le modèle.",
  },
  {
    id: 39,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Bibliothèque\n- Livre\n\nRègles :\n- un objet Bibliothèque est lié à 0..* objet(s) Livre ;\n- un objet Livre dépend fortement du cycle de vie de Bibliothèque si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-039`",
    reponse_v:
      "Agrégation entre Bibliothèque et Livre, losange vide côté Bibliothèque, multiplicités 1 et 0..*",
    reponse_f1:
      "Composition entre Bibliothèque et Livre, losange plein côté Bibliothèque, multiplicités 1 et 0..*",
    reponse_f2:
      "Association simple entre Bibliothèque et Livre, multiplicités 1 et 0..*",
    explication:
      "Un livre peut exister sans appartenir à une bibliothèque donnée.",
  },
  {
    id: 40,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Facture\n- LigneFacture\n\nRègles :\n- un objet Facture est lié à 1..* objet(s) LigneFacture ;\n- un objet LigneFacture dépend fortement du cycle de vie de Facture si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-040`",
    reponse_v:
      "Composition entre Facture et LigneFacture, losange plein côté Facture, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Facture et LigneFacture, losange vide côté Facture, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Facture et LigneFacture, multiplicités 1 et 1..*",
    explication: "Une ligne de facture dépend du cycle de vie de la facture.",
  },
  {
    id: 41,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Commande\n- LigneCommande\n\nRègles :\n- un objet Commande est lié à 1..* objet(s) LigneCommande ;\n- un objet LigneCommande dépend fortement du cycle de vie de Commande si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-041`",
    reponse_v:
      "Composition entre Commande et LigneCommande, losange plein côté Commande, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Commande et LigneCommande, losange vide côté Commande, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Commande et LigneCommande, multiplicités 1 et 1..*",
    explication: "Une ligne de commande n'a pas de sens sans sa commande.",
  },
  {
    id: 42,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Équipe\n- Joueur\n\nRègles :\n- un objet Équipe est lié à 0..* objet(s) Joueur ;\n- un objet Joueur dépend fortement du cycle de vie de Équipe si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-042`",
    reponse_v:
      "Agrégation entre Équipe et Joueur, losange vide côté Équipe, multiplicités 1 et 0..*",
    reponse_f1:
      "Composition entre Équipe et Joueur, losange plein côté Équipe, multiplicités 1 et 0..*",
    reponse_f2:
      "Association simple entre Équipe et Joueur, multiplicités 1 et 0..*",
    explication: "Un joueur peut exister indépendamment de l'équipe.",
  },
  {
    id: 43,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Maison\n- Pièce\n\nRègles :\n- un objet Maison est lié à 1..* objet(s) Pièce ;\n- un objet Pièce dépend fortement du cycle de vie de Maison si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-043`",
    reponse_v:
      "Composition entre Maison et Pièce, losange plein côté Maison, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Maison et Pièce, losange vide côté Maison, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Maison et Pièce, multiplicités 1 et 1..*",
    explication:
      "La destruction de la maison entraîne celle de ses pièces dans le modèle.",
  },
  {
    id: 44,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Bibliothèque\n- Livre\n\nRègles :\n- un objet Bibliothèque est lié à 0..* objet(s) Livre ;\n- un objet Livre dépend fortement du cycle de vie de Bibliothèque si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-044`",
    reponse_v:
      "Agrégation entre Bibliothèque et Livre, losange vide côté Bibliothèque, multiplicités 1 et 0..*",
    reponse_f1:
      "Composition entre Bibliothèque et Livre, losange plein côté Bibliothèque, multiplicités 1 et 0..*",
    reponse_f2:
      "Association simple entre Bibliothèque et Livre, multiplicités 1 et 0..*",
    explication:
      "Un livre peut exister sans appartenir à une bibliothèque donnée.",
  },
  {
    id: 45,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Facture\n- LigneFacture\n\nRègles :\n- un objet Facture est lié à 1..* objet(s) LigneFacture ;\n- un objet LigneFacture dépend fortement du cycle de vie de Facture si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-045`",
    reponse_v:
      "Composition entre Facture et LigneFacture, losange plein côté Facture, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Facture et LigneFacture, losange vide côté Facture, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Facture et LigneFacture, multiplicités 1 et 1..*",
    explication: "Une ligne de facture dépend du cycle de vie de la facture.",
  },
  {
    id: 46,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Commande\n- LigneCommande\n\nRègles :\n- un objet Commande est lié à 1..* objet(s) LigneCommande ;\n- un objet LigneCommande dépend fortement du cycle de vie de Commande si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-046`",
    reponse_v:
      "Composition entre Commande et LigneCommande, losange plein côté Commande, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Commande et LigneCommande, losange vide côté Commande, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Commande et LigneCommande, multiplicités 1 et 1..*",
    explication: "Une ligne de commande n'a pas de sens sans sa commande.",
  },
  {
    id: 47,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Équipe\n- Joueur\n\nRègles :\n- un objet Équipe est lié à 0..* objet(s) Joueur ;\n- un objet Joueur dépend fortement du cycle de vie de Équipe si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-047`",
    reponse_v:
      "Agrégation entre Équipe et Joueur, losange vide côté Équipe, multiplicités 1 et 0..*",
    reponse_f1:
      "Composition entre Équipe et Joueur, losange plein côté Équipe, multiplicités 1 et 0..*",
    reponse_f2:
      "Association simple entre Équipe et Joueur, multiplicités 1 et 0..*",
    explication: "Un joueur peut exister indépendamment de l'équipe.",
  },
  {
    id: 48,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Maison\n- Pièce\n\nRègles :\n- un objet Maison est lié à 1..* objet(s) Pièce ;\n- un objet Pièce dépend fortement du cycle de vie de Maison si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-048`",
    reponse_v:
      "Composition entre Maison et Pièce, losange plein côté Maison, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Maison et Pièce, losange vide côté Maison, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Maison et Pièce, multiplicités 1 et 1..*",
    explication:
      "La destruction de la maison entraîne celle de ses pièces dans le modèle.",
  },
  {
    id: 49,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Bibliothèque\n- Livre\n\nRègles :\n- un objet Bibliothèque est lié à 0..* objet(s) Livre ;\n- un objet Livre dépend fortement du cycle de vie de Bibliothèque si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-049`",
    reponse_v:
      "Agrégation entre Bibliothèque et Livre, losange vide côté Bibliothèque, multiplicités 1 et 0..*",
    reponse_f1:
      "Composition entre Bibliothèque et Livre, losange plein côté Bibliothèque, multiplicités 1 et 0..*",
    reponse_f2:
      "Association simple entre Bibliothèque et Livre, multiplicités 1 et 0..*",
    explication:
      "Un livre peut exister sans appartenir à une bibliothèque donnée.",
  },
  {
    id: 50,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Facture\n- LigneFacture\n\nRègles :\n- un objet Facture est lié à 1..* objet(s) LigneFacture ;\n- un objet LigneFacture dépend fortement du cycle de vie de Facture si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-050`",
    reponse_v:
      "Composition entre Facture et LigneFacture, losange plein côté Facture, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Facture et LigneFacture, losange vide côté Facture, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Facture et LigneFacture, multiplicités 1 et 1..*",
    explication: "Une ligne de facture dépend du cycle de vie de la facture.",
  },
  {
    id: 51,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Commande\n- LigneCommande\n\nRègles :\n- un objet Commande est lié à 1..* objet(s) LigneCommande ;\n- un objet LigneCommande dépend fortement du cycle de vie de Commande si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-051`",
    reponse_v:
      "Composition entre Commande et LigneCommande, losange plein côté Commande, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Commande et LigneCommande, losange vide côté Commande, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Commande et LigneCommande, multiplicités 1 et 1..*",
    explication: "Une ligne de commande n'a pas de sens sans sa commande.",
  },
  {
    id: 52,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Équipe\n- Joueur\n\nRègles :\n- un objet Équipe est lié à 0..* objet(s) Joueur ;\n- un objet Joueur dépend fortement du cycle de vie de Équipe si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-052`",
    reponse_v:
      "Agrégation entre Équipe et Joueur, losange vide côté Équipe, multiplicités 1 et 0..*",
    reponse_f1:
      "Composition entre Équipe et Joueur, losange plein côté Équipe, multiplicités 1 et 0..*",
    reponse_f2:
      "Association simple entre Équipe et Joueur, multiplicités 1 et 0..*",
    explication: "Un joueur peut exister indépendamment de l'équipe.",
  },
  {
    id: 53,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Maison\n- Pièce\n\nRègles :\n- un objet Maison est lié à 1..* objet(s) Pièce ;\n- un objet Pièce dépend fortement du cycle de vie de Maison si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-053`",
    reponse_v:
      "Composition entre Maison et Pièce, losange plein côté Maison, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Maison et Pièce, losange vide côté Maison, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Maison et Pièce, multiplicités 1 et 1..*",
    explication:
      "La destruction de la maison entraîne celle de ses pièces dans le modèle.",
  },
  {
    id: 54,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Bibliothèque\n- Livre\n\nRègles :\n- un objet Bibliothèque est lié à 0..* objet(s) Livre ;\n- un objet Livre dépend fortement du cycle de vie de Bibliothèque si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-054`",
    reponse_v:
      "Agrégation entre Bibliothèque et Livre, losange vide côté Bibliothèque, multiplicités 1 et 0..*",
    reponse_f1:
      "Composition entre Bibliothèque et Livre, losange plein côté Bibliothèque, multiplicités 1 et 0..*",
    reponse_f2:
      "Association simple entre Bibliothèque et Livre, multiplicités 1 et 0..*",
    explication:
      "Un livre peut exister sans appartenir à une bibliothèque donnée.",
  },
  {
    id: 55,
    question:
      "`Diagramme de classes UML — analyse de relation\n\nClasses :\n- Facture\n- LigneFacture\n\nRègles :\n- un objet Facture est lié à 1..* objet(s) LigneFacture ;\n- un objet LigneFacture dépend fortement du cycle de vie de Facture si cette dépendance est explicitement indiquée ;\n- la relation doit exprimer la nature sémantique la plus précise.\n\nQuelle représentation est la plus correcte ?\n\nRéférence exercice : CONCEPTION-055`",
    reponse_v:
      "Composition entre Facture et LigneFacture, losange plein côté Facture, multiplicités 1 et 1..*",
    reponse_f1:
      "Agrégation entre Facture et LigneFacture, losange vide côté Facture, multiplicités 1 et 1..*",
    reponse_f2:
      "Association simple entre Facture et LigneFacture, multiplicités 1 et 1..*",
    explication: "Une ligne de facture dépend du cycle de vie de la facture.",
  },
  {
    id: 56,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nUtilisateur → IHM → Service → Base\n\nContrainte :\nLe service attend la réponse de la base avant de poursuivre.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-056`",
    reponse_v: "message synchrone",
    reponse_f1: "message asynchrone",
    reponse_f2: "message de retour",
    explication: "Le service attend la réponse de la base avant de poursuivre.",
  },
  {
    id: 57,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nCapteur → Contrôleur → Journal → Superviseur\n\nContrainte :\nL'émetteur n'attend pas nécessairement la fin du traitement.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-057`",
    reponse_v: "message asynchrone",
    reponse_f1: "message synchrone",
    reponse_f2: "message de retour",
    explication: "L'émetteur n'attend pas nécessairement la fin du traitement.",
  },
  {
    id: 58,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nClient → API → ServicePaiement → Banque\n\nContrainte :\nDeux scénarios exclusifs dépendent du résultat du paiement.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-058`",
    reponse_v: "fragment alt",
    reponse_f1: "fragment opt",
    reponse_f2: "fragment loop",
    explication: "Deux scénarios exclusifs dépendent du résultat du paiement.",
  },
  {
    id: 59,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nApplication → Cache → Base → Utilisateur\n\nContrainte :\nLe bloc n'est exécuté que si le cache est vide.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-059`",
    reponse_v: "fragment opt",
    reponse_f1: "fragment alt",
    reponse_f2: "fragment loop",
    explication: "Le bloc n'est exécuté que si le cache est vide.",
  },
  {
    id: 60,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nService → FileMessages → Worker → Base\n\nContrainte :\nLe traitement est répété pour chaque message.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-060`",
    reponse_v: "fragment loop",
    reponse_f1: "fragment opt",
    reponse_f2: "fragment alt",
    explication: "Le traitement est répété pour chaque message.",
  },
  {
    id: 61,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nUtilisateur → IHM → Service → Base\n\nContrainte :\nLe service attend la réponse de la base avant de poursuivre.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-061`",
    reponse_v: "message synchrone",
    reponse_f1: "message asynchrone",
    reponse_f2: "message de retour",
    explication: "Le service attend la réponse de la base avant de poursuivre.",
  },
  {
    id: 62,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nCapteur → Contrôleur → Journal → Superviseur\n\nContrainte :\nL'émetteur n'attend pas nécessairement la fin du traitement.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-062`",
    reponse_v: "message asynchrone",
    reponse_f1: "message synchrone",
    reponse_f2: "message de retour",
    explication: "L'émetteur n'attend pas nécessairement la fin du traitement.",
  },
  {
    id: 63,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nClient → API → ServicePaiement → Banque\n\nContrainte :\nDeux scénarios exclusifs dépendent du résultat du paiement.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-063`",
    reponse_v: "fragment alt",
    reponse_f1: "fragment opt",
    reponse_f2: "fragment loop",
    explication: "Deux scénarios exclusifs dépendent du résultat du paiement.",
  },
  {
    id: 64,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nApplication → Cache → Base → Utilisateur\n\nContrainte :\nLe bloc n'est exécuté que si le cache est vide.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-064`",
    reponse_v: "fragment opt",
    reponse_f1: "fragment alt",
    reponse_f2: "fragment loop",
    explication: "Le bloc n'est exécuté que si le cache est vide.",
  },
  {
    id: 65,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nService → FileMessages → Worker → Base\n\nContrainte :\nLe traitement est répété pour chaque message.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-065`",
    reponse_v: "fragment loop",
    reponse_f1: "fragment opt",
    reponse_f2: "fragment alt",
    explication: "Le traitement est répété pour chaque message.",
  },
  {
    id: 66,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nUtilisateur → IHM → Service → Base\n\nContrainte :\nLe service attend la réponse de la base avant de poursuivre.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-066`",
    reponse_v: "message synchrone",
    reponse_f1: "message asynchrone",
    reponse_f2: "message de retour",
    explication: "Le service attend la réponse de la base avant de poursuivre.",
  },
  {
    id: 67,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nCapteur → Contrôleur → Journal → Superviseur\n\nContrainte :\nL'émetteur n'attend pas nécessairement la fin du traitement.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-067`",
    reponse_v: "message asynchrone",
    reponse_f1: "message synchrone",
    reponse_f2: "message de retour",
    explication: "L'émetteur n'attend pas nécessairement la fin du traitement.",
  },
  {
    id: 68,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nClient → API → ServicePaiement → Banque\n\nContrainte :\nDeux scénarios exclusifs dépendent du résultat du paiement.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-068`",
    reponse_v: "fragment alt",
    reponse_f1: "fragment opt",
    reponse_f2: "fragment loop",
    explication: "Deux scénarios exclusifs dépendent du résultat du paiement.",
  },
  {
    id: 69,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nApplication → Cache → Base → Utilisateur\n\nContrainte :\nLe bloc n'est exécuté que si le cache est vide.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-069`",
    reponse_v: "fragment opt",
    reponse_f1: "fragment alt",
    reponse_f2: "fragment loop",
    explication: "Le bloc n'est exécuté que si le cache est vide.",
  },
  {
    id: 70,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nService → FileMessages → Worker → Base\n\nContrainte :\nLe traitement est répété pour chaque message.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-070`",
    reponse_v: "fragment loop",
    reponse_f1: "fragment opt",
    reponse_f2: "fragment alt",
    explication: "Le traitement est répété pour chaque message.",
  },
  {
    id: 71,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nUtilisateur → IHM → Service → Base\n\nContrainte :\nLe service attend la réponse de la base avant de poursuivre.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-071`",
    reponse_v: "message synchrone",
    reponse_f1: "message asynchrone",
    reponse_f2: "message de retour",
    explication: "Le service attend la réponse de la base avant de poursuivre.",
  },
  {
    id: 72,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nCapteur → Contrôleur → Journal → Superviseur\n\nContrainte :\nL'émetteur n'attend pas nécessairement la fin du traitement.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-072`",
    reponse_v: "message asynchrone",
    reponse_f1: "message synchrone",
    reponse_f2: "message de retour",
    explication: "L'émetteur n'attend pas nécessairement la fin du traitement.",
  },
  {
    id: 73,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nClient → API → ServicePaiement → Banque\n\nContrainte :\nDeux scénarios exclusifs dépendent du résultat du paiement.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-073`",
    reponse_v: "fragment alt",
    reponse_f1: "fragment opt",
    reponse_f2: "fragment loop",
    explication: "Deux scénarios exclusifs dépendent du résultat du paiement.",
  },
  {
    id: 74,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nApplication → Cache → Base → Utilisateur\n\nContrainte :\nLe bloc n'est exécuté que si le cache est vide.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-074`",
    reponse_v: "fragment opt",
    reponse_f1: "fragment alt",
    reponse_f2: "fragment loop",
    explication: "Le bloc n'est exécuté que si le cache est vide.",
  },
  {
    id: 75,
    question:
      "`Diagramme de séquence UML — choix de notation\n\nParticipants :\nService → FileMessages → Worker → Base\n\nContrainte :\nLe traitement est répété pour chaque message.\n\nQuelle notation UML est la plus appropriée ?\n\nRéférence exercice : CONCEPTION-075`",
    reponse_v: "fragment loop",
    reponse_f1: "fragment opt",
    reponse_f2: "fragment alt",
    explication: "Le traitement est répété pour chaque message.",
  },
  {
    id: 76,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter plusieurs branches exclusives selon une condition.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-076`",
    reponse_v: "nœud de décision",
    reponse_f1: "nœud de fusion",
    reponse_f2: "fork",
    explication:
      "nœud de décision est l'élément adapté pour représenter plusieurs branches exclusives selon une condition.",
  },
  {
    id: 77,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter plusieurs traitements parallèles.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-077`",
    reponse_v: "fork",
    reponse_f1: "join",
    reponse_f2: "nœud de décision",
    explication:
      "fork est l'élément adapté pour représenter plusieurs traitements parallèles.",
  },
  {
    id: 78,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter synchronisation de plusieurs branches parallèles.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-078`",
    reponse_v: "join",
    reponse_f1: "fork",
    reponse_f2: "nœud de fusion",
    explication:
      "join est l'élément adapté pour représenter synchronisation de plusieurs branches parallèles.",
  },
  {
    id: 79,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter réunion de chemins alternatifs sans synchronisation.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-079`",
    reponse_v: "nœud de fusion",
    reponse_f1: "join",
    reponse_f2: "fork",
    explication:
      "nœud de fusion est l'élément adapté pour représenter réunion de chemins alternatifs sans synchronisation.",
  },
  {
    id: 80,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter fin d'un flux spécifique sans arrêter toute l'activité.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-080`",
    reponse_v: "nœud final de flux",
    reponse_f1: "nœud final d'activité",
    reponse_f2: "état final",
    explication:
      "nœud final de flux est l'élément adapté pour représenter fin d'un flux spécifique sans arrêter toute l'activité.",
  },
  {
    id: 81,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter plusieurs branches exclusives selon une condition.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-081`",
    reponse_v: "nœud de décision",
    reponse_f1: "nœud de fusion",
    reponse_f2: "fork",
    explication:
      "nœud de décision est l'élément adapté pour représenter plusieurs branches exclusives selon une condition.",
  },
  {
    id: 82,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter plusieurs traitements parallèles.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-082`",
    reponse_v: "fork",
    reponse_f1: "join",
    reponse_f2: "nœud de décision",
    explication:
      "fork est l'élément adapté pour représenter plusieurs traitements parallèles.",
  },
  {
    id: 83,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter synchronisation de plusieurs branches parallèles.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-083`",
    reponse_v: "join",
    reponse_f1: "fork",
    reponse_f2: "nœud de fusion",
    explication:
      "join est l'élément adapté pour représenter synchronisation de plusieurs branches parallèles.",
  },
  {
    id: 84,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter réunion de chemins alternatifs sans synchronisation.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-084`",
    reponse_v: "nœud de fusion",
    reponse_f1: "join",
    reponse_f2: "fork",
    explication:
      "nœud de fusion est l'élément adapté pour représenter réunion de chemins alternatifs sans synchronisation.",
  },
  {
    id: 85,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter fin d'un flux spécifique sans arrêter toute l'activité.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-085`",
    reponse_v: "nœud final de flux",
    reponse_f1: "nœud final d'activité",
    reponse_f2: "état final",
    explication:
      "nœud final de flux est l'élément adapté pour représenter fin d'un flux spécifique sans arrêter toute l'activité.",
  },
  {
    id: 86,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter plusieurs branches exclusives selon une condition.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-086`",
    reponse_v: "nœud de décision",
    reponse_f1: "nœud de fusion",
    reponse_f2: "fork",
    explication:
      "nœud de décision est l'élément adapté pour représenter plusieurs branches exclusives selon une condition.",
  },
  {
    id: 87,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter plusieurs traitements parallèles.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-087`",
    reponse_v: "fork",
    reponse_f1: "join",
    reponse_f2: "nœud de décision",
    explication:
      "fork est l'élément adapté pour représenter plusieurs traitements parallèles.",
  },
  {
    id: 88,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter synchronisation de plusieurs branches parallèles.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-088`",
    reponse_v: "join",
    reponse_f1: "fork",
    reponse_f2: "nœud de fusion",
    explication:
      "join est l'élément adapté pour représenter synchronisation de plusieurs branches parallèles.",
  },
  {
    id: 89,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter réunion de chemins alternatifs sans synchronisation.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-089`",
    reponse_v: "nœud de fusion",
    reponse_f1: "join",
    reponse_f2: "fork",
    explication:
      "nœud de fusion est l'élément adapté pour représenter réunion de chemins alternatifs sans synchronisation.",
  },
  {
    id: 90,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter fin d'un flux spécifique sans arrêter toute l'activité.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-090`",
    reponse_v: "nœud final de flux",
    reponse_f1: "nœud final d'activité",
    reponse_f2: "état final",
    explication:
      "nœud final de flux est l'élément adapté pour représenter fin d'un flux spécifique sans arrêter toute l'activité.",
  },
  {
    id: 91,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter plusieurs branches exclusives selon une condition.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-091`",
    reponse_v: "nœud de décision",
    reponse_f1: "nœud de fusion",
    reponse_f2: "fork",
    explication:
      "nœud de décision est l'élément adapté pour représenter plusieurs branches exclusives selon une condition.",
  },
  {
    id: 92,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter plusieurs traitements parallèles.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-092`",
    reponse_v: "fork",
    reponse_f1: "join",
    reponse_f2: "nœud de décision",
    explication:
      "fork est l'élément adapté pour représenter plusieurs traitements parallèles.",
  },
  {
    id: 93,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter synchronisation de plusieurs branches parallèles.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-093`",
    reponse_v: "join",
    reponse_f1: "fork",
    reponse_f2: "nœud de fusion",
    explication:
      "join est l'élément adapté pour représenter synchronisation de plusieurs branches parallèles.",
  },
  {
    id: 94,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter réunion de chemins alternatifs sans synchronisation.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-094`",
    reponse_v: "nœud de fusion",
    reponse_f1: "join",
    reponse_f2: "fork",
    explication:
      "nœud de fusion est l'élément adapté pour représenter réunion de chemins alternatifs sans synchronisation.",
  },
  {
    id: 95,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter fin d'un flux spécifique sans arrêter toute l'activité.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-095`",
    reponse_v: "nœud final de flux",
    reponse_f1: "nœud final d'activité",
    reponse_f2: "état final",
    explication:
      "nœud final de flux est l'élément adapté pour représenter fin d'un flux spécifique sans arrêter toute l'activité.",
  },
  {
    id: 96,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter plusieurs branches exclusives selon une condition.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-096`",
    reponse_v: "nœud de décision",
    reponse_f1: "nœud de fusion",
    reponse_f2: "fork",
    explication:
      "nœud de décision est l'élément adapté pour représenter plusieurs branches exclusives selon une condition.",
  },
  {
    id: 97,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter plusieurs traitements parallèles.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-097`",
    reponse_v: "fork",
    reponse_f1: "join",
    reponse_f2: "nœud de décision",
    explication:
      "fork est l'élément adapté pour représenter plusieurs traitements parallèles.",
  },
  {
    id: 98,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter synchronisation de plusieurs branches parallèles.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-098`",
    reponse_v: "join",
    reponse_f1: "fork",
    reponse_f2: "nœud de fusion",
    explication:
      "join est l'élément adapté pour représenter synchronisation de plusieurs branches parallèles.",
  },
  {
    id: 99,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter réunion de chemins alternatifs sans synchronisation.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-099`",
    reponse_v: "nœud de fusion",
    reponse_f1: "join",
    reponse_f2: "fork",
    explication:
      "nœud de fusion est l'élément adapté pour représenter réunion de chemins alternatifs sans synchronisation.",
  },
  {
    id: 100,
    question:
      "`UML — diagramme d'activité ou d'états\n\nSituation :\nLe modèle doit représenter fin d'un flux spécifique sans arrêter toute l'activité.\n\nLa notation doit être choisie avec précision afin d'éviter de confondre parallélisme, alternative et terminaison globale.\n\nQuel élément UML convient ?\n\nRéférence exercice : CONCEPTION-100`",
    reponse_v: "nœud final de flux",
    reponse_f1: "nœud final d'activité",
    reponse_f2: "état final",
    explication:
      "nœud final de flux est l'élément adapté pour représenter fin d'un flux spécifique sans arrêter toute l'activité.",
  },
  {
    id: 101,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- CLIENT\n- COMMANDE\n\nAssociation :\n- passer\n\nRègle de gestion :\nUn client peut ne passer aucune commande, mais une commande appartient à un seul client.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-101`",
    reponse_v: "CLIENT (0,n) — passer — (1,1) COMMANDE",
    reponse_f1: "CLIENT (1,1) — passer — (0,n) COMMANDE",
    reponse_f2: "CLIENT (1,n) — passer — (0,1) COMMANDE",
    explication:
      "Un client peut ne passer aucune commande, mais une commande appartient à un seul client.",
  },
  {
    id: 102,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- AUTEUR\n- LIVRE\n\nAssociation :\n- écrire\n\nRègle de gestion :\nUn auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-102`",
    reponse_v: "AUTEUR (0,n) — écrire — (1,n) LIVRE",
    reponse_f1: "AUTEUR (1,n) — écrire — (0,n) LIVRE",
    reponse_f2: "AUTEUR (1,n) — écrire — (0,1) LIVRE",
    explication:
      "Un auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.",
  },
  {
    id: 103,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- SALARIÉ\n- SERVICE\n\nAssociation :\n- affecter\n\nRègle de gestion :\nChaque salarié est affecté à un seul service, un service peut être vide.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-103`",
    reponse_v: "SALARIÉ (1,1) — affecter — (0,n) SERVICE",
    reponse_f1: "SALARIÉ (0,n) — affecter — (1,1) SERVICE",
    reponse_f2: "SALARIÉ (1,n) — affecter — (0,1) SERVICE",
    explication:
      "Chaque salarié est affecté à un seul service, un service peut être vide.",
  },
  {
    id: 104,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- ÉTUDIANT\n- COURS\n\nAssociation :\n- suivre\n\nRègle de gestion :\nUn étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-104`",
    reponse_v: "ÉTUDIANT (0,n) — suivre — (0,n) COURS",
    reponse_f1: "ÉTUDIANT (0,n) — suivre — (0,n) COURS (variante)",
    reponse_f2: "ÉTUDIANT (1,n) — suivre — (0,1) COURS",
    explication:
      "Un étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.",
  },
  {
    id: 105,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- FACTURE\n- PAIEMENT\n\nAssociation :\n- régler\n\nRègle de gestion :\nUne facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-105`",
    reponse_v: "FACTURE (0,n) — régler — (1,1) PAIEMENT",
    reponse_f1: "FACTURE (1,1) — régler — (0,n) PAIEMENT",
    reponse_f2: "FACTURE (1,n) — régler — (0,1) PAIEMENT",
    explication:
      "Une facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.",
  },
  {
    id: 106,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- CLIENT\n- COMMANDE\n\nAssociation :\n- passer\n\nRègle de gestion :\nUn client peut ne passer aucune commande, mais une commande appartient à un seul client.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-106`",
    reponse_v: "CLIENT (0,n) — passer — (1,1) COMMANDE",
    reponse_f1: "CLIENT (1,1) — passer — (0,n) COMMANDE",
    reponse_f2: "CLIENT (1,n) — passer — (0,1) COMMANDE",
    explication:
      "Un client peut ne passer aucune commande, mais une commande appartient à un seul client.",
  },
  {
    id: 107,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- AUTEUR\n- LIVRE\n\nAssociation :\n- écrire\n\nRègle de gestion :\nUn auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-107`",
    reponse_v: "AUTEUR (0,n) — écrire — (1,n) LIVRE",
    reponse_f1: "AUTEUR (1,n) — écrire — (0,n) LIVRE",
    reponse_f2: "AUTEUR (1,n) — écrire — (0,1) LIVRE",
    explication:
      "Un auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.",
  },
  {
    id: 108,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- SALARIÉ\n- SERVICE\n\nAssociation :\n- affecter\n\nRègle de gestion :\nChaque salarié est affecté à un seul service, un service peut être vide.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-108`",
    reponse_v: "SALARIÉ (1,1) — affecter — (0,n) SERVICE",
    reponse_f1: "SALARIÉ (0,n) — affecter — (1,1) SERVICE",
    reponse_f2: "SALARIÉ (1,n) — affecter — (0,1) SERVICE",
    explication:
      "Chaque salarié est affecté à un seul service, un service peut être vide.",
  },
  {
    id: 109,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- ÉTUDIANT\n- COURS\n\nAssociation :\n- suivre\n\nRègle de gestion :\nUn étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-109`",
    reponse_v: "ÉTUDIANT (0,n) — suivre — (0,n) COURS",
    reponse_f1: "ÉTUDIANT (0,n) — suivre — (0,n) COURS (variante)",
    reponse_f2: "ÉTUDIANT (1,n) — suivre — (0,1) COURS",
    explication:
      "Un étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.",
  },
  {
    id: 110,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- FACTURE\n- PAIEMENT\n\nAssociation :\n- régler\n\nRègle de gestion :\nUne facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-110`",
    reponse_v: "FACTURE (0,n) — régler — (1,1) PAIEMENT",
    reponse_f1: "FACTURE (1,1) — régler — (0,n) PAIEMENT",
    reponse_f2: "FACTURE (1,n) — régler — (0,1) PAIEMENT",
    explication:
      "Une facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.",
  },
  {
    id: 111,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- CLIENT\n- COMMANDE\n\nAssociation :\n- passer\n\nRègle de gestion :\nUn client peut ne passer aucune commande, mais une commande appartient à un seul client.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-111`",
    reponse_v: "CLIENT (0,n) — passer — (1,1) COMMANDE",
    reponse_f1: "CLIENT (1,1) — passer — (0,n) COMMANDE",
    reponse_f2: "CLIENT (1,n) — passer — (0,1) COMMANDE",
    explication:
      "Un client peut ne passer aucune commande, mais une commande appartient à un seul client.",
  },
  {
    id: 112,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- AUTEUR\n- LIVRE\n\nAssociation :\n- écrire\n\nRègle de gestion :\nUn auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-112`",
    reponse_v: "AUTEUR (0,n) — écrire — (1,n) LIVRE",
    reponse_f1: "AUTEUR (1,n) — écrire — (0,n) LIVRE",
    reponse_f2: "AUTEUR (1,n) — écrire — (0,1) LIVRE",
    explication:
      "Un auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.",
  },
  {
    id: 113,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- SALARIÉ\n- SERVICE\n\nAssociation :\n- affecter\n\nRègle de gestion :\nChaque salarié est affecté à un seul service, un service peut être vide.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-113`",
    reponse_v: "SALARIÉ (1,1) — affecter — (0,n) SERVICE",
    reponse_f1: "SALARIÉ (0,n) — affecter — (1,1) SERVICE",
    reponse_f2: "SALARIÉ (1,n) — affecter — (0,1) SERVICE",
    explication:
      "Chaque salarié est affecté à un seul service, un service peut être vide.",
  },
  {
    id: 114,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- ÉTUDIANT\n- COURS\n\nAssociation :\n- suivre\n\nRègle de gestion :\nUn étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-114`",
    reponse_v: "ÉTUDIANT (0,n) — suivre — (0,n) COURS",
    reponse_f1: "ÉTUDIANT (0,n) — suivre — (0,n) COURS (variante)",
    reponse_f2: "ÉTUDIANT (1,n) — suivre — (0,1) COURS",
    explication:
      "Un étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.",
  },
  {
    id: 115,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- FACTURE\n- PAIEMENT\n\nAssociation :\n- régler\n\nRègle de gestion :\nUne facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-115`",
    reponse_v: "FACTURE (0,n) — régler — (1,1) PAIEMENT",
    reponse_f1: "FACTURE (1,1) — régler — (0,n) PAIEMENT",
    reponse_f2: "FACTURE (1,n) — régler — (0,1) PAIEMENT",
    explication:
      "Une facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.",
  },
  {
    id: 116,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- CLIENT\n- COMMANDE\n\nAssociation :\n- passer\n\nRègle de gestion :\nUn client peut ne passer aucune commande, mais une commande appartient à un seul client.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-116`",
    reponse_v: "CLIENT (0,n) — passer — (1,1) COMMANDE",
    reponse_f1: "CLIENT (1,1) — passer — (0,n) COMMANDE",
    reponse_f2: "CLIENT (1,n) — passer — (0,1) COMMANDE",
    explication:
      "Un client peut ne passer aucune commande, mais une commande appartient à un seul client.",
  },
  {
    id: 117,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- AUTEUR\n- LIVRE\n\nAssociation :\n- écrire\n\nRègle de gestion :\nUn auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-117`",
    reponse_v: "AUTEUR (0,n) — écrire — (1,n) LIVRE",
    reponse_f1: "AUTEUR (1,n) — écrire — (0,n) LIVRE",
    reponse_f2: "AUTEUR (1,n) — écrire — (0,1) LIVRE",
    explication:
      "Un auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.",
  },
  {
    id: 118,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- SALARIÉ\n- SERVICE\n\nAssociation :\n- affecter\n\nRègle de gestion :\nChaque salarié est affecté à un seul service, un service peut être vide.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-118`",
    reponse_v: "SALARIÉ (1,1) — affecter — (0,n) SERVICE",
    reponse_f1: "SALARIÉ (0,n) — affecter — (1,1) SERVICE",
    reponse_f2: "SALARIÉ (1,n) — affecter — (0,1) SERVICE",
    explication:
      "Chaque salarié est affecté à un seul service, un service peut être vide.",
  },
  {
    id: 119,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- ÉTUDIANT\n- COURS\n\nAssociation :\n- suivre\n\nRègle de gestion :\nUn étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-119`",
    reponse_v: "ÉTUDIANT (0,n) — suivre — (0,n) COURS",
    reponse_f1: "ÉTUDIANT (0,n) — suivre — (0,n) COURS (variante)",
    reponse_f2: "ÉTUDIANT (1,n) — suivre — (0,1) COURS",
    explication:
      "Un étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.",
  },
  {
    id: 120,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- FACTURE\n- PAIEMENT\n\nAssociation :\n- régler\n\nRègle de gestion :\nUne facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-120`",
    reponse_v: "FACTURE (0,n) — régler — (1,1) PAIEMENT",
    reponse_f1: "FACTURE (1,1) — régler — (0,n) PAIEMENT",
    reponse_f2: "FACTURE (1,n) — régler — (0,1) PAIEMENT",
    explication:
      "Une facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.",
  },
  {
    id: 121,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- CLIENT\n- COMMANDE\n\nAssociation :\n- passer\n\nRègle de gestion :\nUn client peut ne passer aucune commande, mais une commande appartient à un seul client.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-121`",
    reponse_v: "CLIENT (0,n) — passer — (1,1) COMMANDE",
    reponse_f1: "CLIENT (1,1) — passer — (0,n) COMMANDE",
    reponse_f2: "CLIENT (1,n) — passer — (0,1) COMMANDE",
    explication:
      "Un client peut ne passer aucune commande, mais une commande appartient à un seul client.",
  },
  {
    id: 122,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- AUTEUR\n- LIVRE\n\nAssociation :\n- écrire\n\nRègle de gestion :\nUn auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-122`",
    reponse_v: "AUTEUR (0,n) — écrire — (1,n) LIVRE",
    reponse_f1: "AUTEUR (1,n) — écrire — (0,n) LIVRE",
    reponse_f2: "AUTEUR (1,n) — écrire — (0,1) LIVRE",
    explication:
      "Un auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.",
  },
  {
    id: 123,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- SALARIÉ\n- SERVICE\n\nAssociation :\n- affecter\n\nRègle de gestion :\nChaque salarié est affecté à un seul service, un service peut être vide.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-123`",
    reponse_v: "SALARIÉ (1,1) — affecter — (0,n) SERVICE",
    reponse_f1: "SALARIÉ (0,n) — affecter — (1,1) SERVICE",
    reponse_f2: "SALARIÉ (1,n) — affecter — (0,1) SERVICE",
    explication:
      "Chaque salarié est affecté à un seul service, un service peut être vide.",
  },
  {
    id: 124,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- ÉTUDIANT\n- COURS\n\nAssociation :\n- suivre\n\nRègle de gestion :\nUn étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-124`",
    reponse_v: "ÉTUDIANT (0,n) — suivre — (0,n) COURS",
    reponse_f1: "ÉTUDIANT (0,n) — suivre — (0,n) COURS (variante)",
    reponse_f2: "ÉTUDIANT (1,n) — suivre — (0,1) COURS",
    explication:
      "Un étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.",
  },
  {
    id: 125,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- FACTURE\n- PAIEMENT\n\nAssociation :\n- régler\n\nRègle de gestion :\nUne facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-125`",
    reponse_v: "FACTURE (0,n) — régler — (1,1) PAIEMENT",
    reponse_f1: "FACTURE (1,1) — régler — (0,n) PAIEMENT",
    reponse_f2: "FACTURE (1,n) — régler — (0,1) PAIEMENT",
    explication:
      "Une facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.",
  },
  {
    id: 126,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- CLIENT\n- COMMANDE\n\nAssociation :\n- passer\n\nRègle de gestion :\nUn client peut ne passer aucune commande, mais une commande appartient à un seul client.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-126`",
    reponse_v: "CLIENT (0,n) — passer — (1,1) COMMANDE",
    reponse_f1: "CLIENT (1,1) — passer — (0,n) COMMANDE",
    reponse_f2: "CLIENT (1,n) — passer — (0,1) COMMANDE",
    explication:
      "Un client peut ne passer aucune commande, mais une commande appartient à un seul client.",
  },
  {
    id: 127,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- AUTEUR\n- LIVRE\n\nAssociation :\n- écrire\n\nRègle de gestion :\nUn auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-127`",
    reponse_v: "AUTEUR (0,n) — écrire — (1,n) LIVRE",
    reponse_f1: "AUTEUR (1,n) — écrire — (0,n) LIVRE",
    reponse_f2: "AUTEUR (1,n) — écrire — (0,1) LIVRE",
    explication:
      "Un auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.",
  },
  {
    id: 128,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- SALARIÉ\n- SERVICE\n\nAssociation :\n- affecter\n\nRègle de gestion :\nChaque salarié est affecté à un seul service, un service peut être vide.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-128`",
    reponse_v: "SALARIÉ (1,1) — affecter — (0,n) SERVICE",
    reponse_f1: "SALARIÉ (0,n) — affecter — (1,1) SERVICE",
    reponse_f2: "SALARIÉ (1,n) — affecter — (0,1) SERVICE",
    explication:
      "Chaque salarié est affecté à un seul service, un service peut être vide.",
  },
  {
    id: 129,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- ÉTUDIANT\n- COURS\n\nAssociation :\n- suivre\n\nRègle de gestion :\nUn étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-129`",
    reponse_v: "ÉTUDIANT (0,n) — suivre — (0,n) COURS",
    reponse_f1: "ÉTUDIANT (0,n) — suivre — (0,n) COURS (variante)",
    reponse_f2: "ÉTUDIANT (1,n) — suivre — (0,1) COURS",
    explication:
      "Un étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.",
  },
  {
    id: 130,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- FACTURE\n- PAIEMENT\n\nAssociation :\n- régler\n\nRègle de gestion :\nUne facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-130`",
    reponse_v: "FACTURE (0,n) — régler — (1,1) PAIEMENT",
    reponse_f1: "FACTURE (1,1) — régler — (0,n) PAIEMENT",
    reponse_f2: "FACTURE (1,n) — régler — (0,1) PAIEMENT",
    explication:
      "Une facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.",
  },
  {
    id: 131,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- CLIENT\n- COMMANDE\n\nAssociation :\n- passer\n\nRègle de gestion :\nUn client peut ne passer aucune commande, mais une commande appartient à un seul client.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-131`",
    reponse_v: "CLIENT (0,n) — passer — (1,1) COMMANDE",
    reponse_f1: "CLIENT (1,1) — passer — (0,n) COMMANDE",
    reponse_f2: "CLIENT (1,n) — passer — (0,1) COMMANDE",
    explication:
      "Un client peut ne passer aucune commande, mais une commande appartient à un seul client.",
  },
  {
    id: 132,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- AUTEUR\n- LIVRE\n\nAssociation :\n- écrire\n\nRègle de gestion :\nUn auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-132`",
    reponse_v: "AUTEUR (0,n) — écrire — (1,n) LIVRE",
    reponse_f1: "AUTEUR (1,n) — écrire — (0,n) LIVRE",
    reponse_f2: "AUTEUR (1,n) — écrire — (0,1) LIVRE",
    explication:
      "Un auteur peut n'avoir écrit aucun livre enregistré, mais un livre possède au moins un auteur.",
  },
  {
    id: 133,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- SALARIÉ\n- SERVICE\n\nAssociation :\n- affecter\n\nRègle de gestion :\nChaque salarié est affecté à un seul service, un service peut être vide.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-133`",
    reponse_v: "SALARIÉ (1,1) — affecter — (0,n) SERVICE",
    reponse_f1: "SALARIÉ (0,n) — affecter — (1,1) SERVICE",
    reponse_f2: "SALARIÉ (1,n) — affecter — (0,1) SERVICE",
    explication:
      "Chaque salarié est affecté à un seul service, un service peut être vide.",
  },
  {
    id: 134,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- ÉTUDIANT\n- COURS\n\nAssociation :\n- suivre\n\nRègle de gestion :\nUn étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-134`",
    reponse_v: "ÉTUDIANT (0,n) — suivre — (0,n) COURS",
    reponse_f1: "ÉTUDIANT (0,n) — suivre — (0,n) COURS (variante)",
    reponse_f2: "ÉTUDIANT (1,n) — suivre — (0,1) COURS",
    explication:
      "Un étudiant peut suivre plusieurs cours et un cours peut accueillir plusieurs étudiants.",
  },
  {
    id: 135,
    question:
      "`Mini-TP MCD — cardinalités\n\nEntités :\n- FACTURE\n- PAIEMENT\n\nAssociation :\n- régler\n\nRègle de gestion :\nUne facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.\n\nQuelles cardinalités faut-il placer de part et d'autre de l'association ?\n\nRéférence exercice : CONCEPTION-135`",
    reponse_v: "FACTURE (0,n) — régler — (1,1) PAIEMENT",
    reponse_f1: "FACTURE (1,1) — régler — (0,n) PAIEMENT",
    reponse_f2: "FACTURE (1,n) — régler — (0,1) PAIEMENT",
    explication:
      "Une facture peut recevoir plusieurs paiements, chaque paiement concerne une seule facture.",
  },
  {
    id: 136,
    question:
      "`Mini-TP MCD — identification\n\nEntité : LIGNE_COMMANDE\nAttributs : numLigne, quantite\nEntité porteuse : COMMANDE\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-136`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "La ligne est identifiée dans le contexte de sa commande.",
  },
  {
    id: 137,
    question:
      "`Mini-TP MCD — identification\n\nEntité : CHAMBRE\nAttributs : numero, etage\nEntité porteuse : HOTEL\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-137`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication:
      "Le numéro d'une chambre n'est unique qu'à l'intérieur d'un hôtel.",
  },
  {
    id: 138,
    question:
      "`Mini-TP MCD — identification\n\nEntité : PRODUIT\nAttributs : idProduit, libelle\nAucune entité porteuse n'est nécessaire.\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-138`",
    reponse_v: "identifiant absolu",
    reponse_f1: "identifiant relatif",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "Le produit possède son propre identifiant indépendant.",
  },
  {
    id: 139,
    question:
      "`Mini-TP MCD — identification\n\nEntité : EMPLOYÉ\nAttributs : matricule, nom\nAucune entité porteuse n'est nécessaire.\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-139`",
    reponse_v: "identifiant absolu",
    reponse_f1: "identifiant relatif",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "Le matricule identifie l'employé dans tout le système.",
  },
  {
    id: 140,
    question:
      "`Mini-TP MCD — identification\n\nEntité : VERSION_DOCUMENT\nAttributs : numeroVersion, dateVersion\nEntité porteuse : DOCUMENT\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-140`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication:
      "Le numéro de version est unique seulement pour un document donné.",
  },
  {
    id: 141,
    question:
      "`Mini-TP MCD — identification\n\nEntité : LIGNE_COMMANDE\nAttributs : numLigne, quantite\nEntité porteuse : COMMANDE\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-141`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "La ligne est identifiée dans le contexte de sa commande.",
  },
  {
    id: 142,
    question:
      "`Mini-TP MCD — identification\n\nEntité : CHAMBRE\nAttributs : numero, etage\nEntité porteuse : HOTEL\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-142`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication:
      "Le numéro d'une chambre n'est unique qu'à l'intérieur d'un hôtel.",
  },
  {
    id: 143,
    question:
      "`Mini-TP MCD — identification\n\nEntité : PRODUIT\nAttributs : idProduit, libelle\nAucune entité porteuse n'est nécessaire.\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-143`",
    reponse_v: "identifiant absolu",
    reponse_f1: "identifiant relatif",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "Le produit possède son propre identifiant indépendant.",
  },
  {
    id: 144,
    question:
      "`Mini-TP MCD — identification\n\nEntité : EMPLOYÉ\nAttributs : matricule, nom\nAucune entité porteuse n'est nécessaire.\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-144`",
    reponse_v: "identifiant absolu",
    reponse_f1: "identifiant relatif",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "Le matricule identifie l'employé dans tout le système.",
  },
  {
    id: 145,
    question:
      "`Mini-TP MCD — identification\n\nEntité : VERSION_DOCUMENT\nAttributs : numeroVersion, dateVersion\nEntité porteuse : DOCUMENT\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-145`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication:
      "Le numéro de version est unique seulement pour un document donné.",
  },
  {
    id: 146,
    question:
      "`Mini-TP MCD — identification\n\nEntité : LIGNE_COMMANDE\nAttributs : numLigne, quantite\nEntité porteuse : COMMANDE\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-146`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "La ligne est identifiée dans le contexte de sa commande.",
  },
  {
    id: 147,
    question:
      "`Mini-TP MCD — identification\n\nEntité : CHAMBRE\nAttributs : numero, etage\nEntité porteuse : HOTEL\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-147`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication:
      "Le numéro d'une chambre n'est unique qu'à l'intérieur d'un hôtel.",
  },
  {
    id: 148,
    question:
      "`Mini-TP MCD — identification\n\nEntité : PRODUIT\nAttributs : idProduit, libelle\nAucune entité porteuse n'est nécessaire.\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-148`",
    reponse_v: "identifiant absolu",
    reponse_f1: "identifiant relatif",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "Le produit possède son propre identifiant indépendant.",
  },
  {
    id: 149,
    question:
      "`Mini-TP MCD — identification\n\nEntité : EMPLOYÉ\nAttributs : matricule, nom\nAucune entité porteuse n'est nécessaire.\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-149`",
    reponse_v: "identifiant absolu",
    reponse_f1: "identifiant relatif",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "Le matricule identifie l'employé dans tout le système.",
  },
  {
    id: 150,
    question:
      "`Mini-TP MCD — identification\n\nEntité : VERSION_DOCUMENT\nAttributs : numeroVersion, dateVersion\nEntité porteuse : DOCUMENT\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-150`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication:
      "Le numéro de version est unique seulement pour un document donné.",
  },
  {
    id: 151,
    question:
      "`Mini-TP MCD — identification\n\nEntité : LIGNE_COMMANDE\nAttributs : numLigne, quantite\nEntité porteuse : COMMANDE\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-151`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "La ligne est identifiée dans le contexte de sa commande.",
  },
  {
    id: 152,
    question:
      "`Mini-TP MCD — identification\n\nEntité : CHAMBRE\nAttributs : numero, etage\nEntité porteuse : HOTEL\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-152`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication:
      "Le numéro d'une chambre n'est unique qu'à l'intérieur d'un hôtel.",
  },
  {
    id: 153,
    question:
      "`Mini-TP MCD — identification\n\nEntité : PRODUIT\nAttributs : idProduit, libelle\nAucune entité porteuse n'est nécessaire.\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-153`",
    reponse_v: "identifiant absolu",
    reponse_f1: "identifiant relatif",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "Le produit possède son propre identifiant indépendant.",
  },
  {
    id: 154,
    question:
      "`Mini-TP MCD — identification\n\nEntité : EMPLOYÉ\nAttributs : matricule, nom\nAucune entité porteuse n'est nécessaire.\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-154`",
    reponse_v: "identifiant absolu",
    reponse_f1: "identifiant relatif",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "Le matricule identifie l'employé dans tout le système.",
  },
  {
    id: 155,
    question:
      "`Mini-TP MCD — identification\n\nEntité : VERSION_DOCUMENT\nAttributs : numeroVersion, dateVersion\nEntité porteuse : DOCUMENT\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-155`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication:
      "Le numéro de version est unique seulement pour un document donné.",
  },
  {
    id: 156,
    question:
      "`Mini-TP MCD — identification\n\nEntité : LIGNE_COMMANDE\nAttributs : numLigne, quantite\nEntité porteuse : COMMANDE\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-156`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "La ligne est identifiée dans le contexte de sa commande.",
  },
  {
    id: 157,
    question:
      "`Mini-TP MCD — identification\n\nEntité : CHAMBRE\nAttributs : numero, etage\nEntité porteuse : HOTEL\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-157`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication:
      "Le numéro d'une chambre n'est unique qu'à l'intérieur d'un hôtel.",
  },
  {
    id: 158,
    question:
      "`Mini-TP MCD — identification\n\nEntité : PRODUIT\nAttributs : idProduit, libelle\nAucune entité porteuse n'est nécessaire.\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-158`",
    reponse_v: "identifiant absolu",
    reponse_f1: "identifiant relatif",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "Le produit possède son propre identifiant indépendant.",
  },
  {
    id: 159,
    question:
      "`Mini-TP MCD — identification\n\nEntité : EMPLOYÉ\nAttributs : matricule, nom\nAucune entité porteuse n'est nécessaire.\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-159`",
    reponse_v: "identifiant absolu",
    reponse_f1: "identifiant relatif",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication: "Le matricule identifie l'employé dans tout le système.",
  },
  {
    id: 160,
    question:
      "`Mini-TP MCD — identification\n\nEntité : VERSION_DOCUMENT\nAttributs : numeroVersion, dateVersion\nEntité porteuse : DOCUMENT\n\nQuelle stratégie d'identification est la plus correcte ?\n\nRéférence exercice : CONCEPTION-160`",
    reponse_v: "identifiant relatif",
    reponse_f1: "identifiant absolu",
    reponse_f2: "absence d'identifiant dans le MCD",
    explication:
      "Le numéro de version est unique seulement pour un document donné.",
  },
  {
    id: 161,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- ÉTUDIANT\n- COURS\n\nAssociation envisagée :\n- INSCRIPTION\n\nDonnées à mémoriser :\n- dateInscription, noteFinale\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-161`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs dateInscription, noteFinale dépendent du lien entre ÉTUDIANT et COURS, pas d'une seule entité.",
  },
  {
    id: 162,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- PRODUIT\n- FOURNISSEUR\n\nAssociation envisagée :\n- PROPOSER\n\nDonnées à mémoriser :\n- prixAchat, delaiLivraison\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-162`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs prixAchat, delaiLivraison dépendent du lien entre PRODUIT et FOURNISSEUR, pas d'une seule entité.",
  },
  {
    id: 163,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- SALARIÉ\n- PROJET\n\nAssociation envisagée :\n- PARTICIPER\n\nDonnées à mémoriser :\n- role, tempsPasse\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-163`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs role, tempsPasse dépendent du lien entre SALARIÉ et PROJET, pas d'une seule entité.",
  },
  {
    id: 164,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- CLIENT\n- ABONNEMENT\n\nAssociation envisagée :\n- SOUSCRIRE\n\nDonnées à mémoriser :\n- dateDebut, dateFin\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-164`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs dateDebut, dateFin dépendent du lien entre CLIENT et ABONNEMENT, pas d'une seule entité.",
  },
  {
    id: 165,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- MÉDECIN\n- PATIENT\n\nAssociation envisagée :\n- CONSULTER\n\nDonnées à mémoriser :\n- dateHeure, diagnostic\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-165`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs dateHeure, diagnostic dépendent du lien entre MÉDECIN et PATIENT, pas d'une seule entité.",
  },
  {
    id: 166,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- ÉTUDIANT\n- COURS\n\nAssociation envisagée :\n- INSCRIPTION\n\nDonnées à mémoriser :\n- dateInscription, noteFinale\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-166`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs dateInscription, noteFinale dépendent du lien entre ÉTUDIANT et COURS, pas d'une seule entité.",
  },
  {
    id: 167,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- PRODUIT\n- FOURNISSEUR\n\nAssociation envisagée :\n- PROPOSER\n\nDonnées à mémoriser :\n- prixAchat, delaiLivraison\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-167`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs prixAchat, delaiLivraison dépendent du lien entre PRODUIT et FOURNISSEUR, pas d'une seule entité.",
  },
  {
    id: 168,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- SALARIÉ\n- PROJET\n\nAssociation envisagée :\n- PARTICIPER\n\nDonnées à mémoriser :\n- role, tempsPasse\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-168`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs role, tempsPasse dépendent du lien entre SALARIÉ et PROJET, pas d'une seule entité.",
  },
  {
    id: 169,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- CLIENT\n- ABONNEMENT\n\nAssociation envisagée :\n- SOUSCRIRE\n\nDonnées à mémoriser :\n- dateDebut, dateFin\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-169`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs dateDebut, dateFin dépendent du lien entre CLIENT et ABONNEMENT, pas d'une seule entité.",
  },
  {
    id: 170,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- MÉDECIN\n- PATIENT\n\nAssociation envisagée :\n- CONSULTER\n\nDonnées à mémoriser :\n- dateHeure, diagnostic\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-170`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs dateHeure, diagnostic dépendent du lien entre MÉDECIN et PATIENT, pas d'une seule entité.",
  },
  {
    id: 171,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- ÉTUDIANT\n- COURS\n\nAssociation envisagée :\n- INSCRIPTION\n\nDonnées à mémoriser :\n- dateInscription, noteFinale\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-171`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs dateInscription, noteFinale dépendent du lien entre ÉTUDIANT et COURS, pas d'une seule entité.",
  },
  {
    id: 172,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- PRODUIT\n- FOURNISSEUR\n\nAssociation envisagée :\n- PROPOSER\n\nDonnées à mémoriser :\n- prixAchat, delaiLivraison\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-172`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs prixAchat, delaiLivraison dépendent du lien entre PRODUIT et FOURNISSEUR, pas d'une seule entité.",
  },
  {
    id: 173,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- SALARIÉ\n- PROJET\n\nAssociation envisagée :\n- PARTICIPER\n\nDonnées à mémoriser :\n- role, tempsPasse\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-173`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs role, tempsPasse dépendent du lien entre SALARIÉ et PROJET, pas d'une seule entité.",
  },
  {
    id: 174,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- CLIENT\n- ABONNEMENT\n\nAssociation envisagée :\n- SOUSCRIRE\n\nDonnées à mémoriser :\n- dateDebut, dateFin\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-174`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs dateDebut, dateFin dépendent du lien entre CLIENT et ABONNEMENT, pas d'une seule entité.",
  },
  {
    id: 175,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- MÉDECIN\n- PATIENT\n\nAssociation envisagée :\n- CONSULTER\n\nDonnées à mémoriser :\n- dateHeure, diagnostic\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-175`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs dateHeure, diagnostic dépendent du lien entre MÉDECIN et PATIENT, pas d'une seule entité.",
  },
  {
    id: 176,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- ÉTUDIANT\n- COURS\n\nAssociation envisagée :\n- INSCRIPTION\n\nDonnées à mémoriser :\n- dateInscription, noteFinale\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-176`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs dateInscription, noteFinale dépendent du lien entre ÉTUDIANT et COURS, pas d'une seule entité.",
  },
  {
    id: 177,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- PRODUIT\n- FOURNISSEUR\n\nAssociation envisagée :\n- PROPOSER\n\nDonnées à mémoriser :\n- prixAchat, delaiLivraison\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-177`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs prixAchat, delaiLivraison dépendent du lien entre PRODUIT et FOURNISSEUR, pas d'une seule entité.",
  },
  {
    id: 178,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- SALARIÉ\n- PROJET\n\nAssociation envisagée :\n- PARTICIPER\n\nDonnées à mémoriser :\n- role, tempsPasse\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-178`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs role, tempsPasse dépendent du lien entre SALARIÉ et PROJET, pas d'une seule entité.",
  },
  {
    id: 179,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- CLIENT\n- ABONNEMENT\n\nAssociation envisagée :\n- SOUSCRIRE\n\nDonnées à mémoriser :\n- dateDebut, dateFin\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-179`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs dateDebut, dateFin dépendent du lien entre CLIENT et ABONNEMENT, pas d'une seule entité.",
  },
  {
    id: 180,
    question:
      "`Mini-TP MCD — association avec attributs\n\nEntités :\n- MÉDECIN\n- PATIENT\n\nAssociation envisagée :\n- CONSULTER\n\nDonnées à mémoriser :\n- dateHeure, diagnostic\n\nQuel choix de modélisation est le plus pertinent ?\n\nRéférence exercice : CONCEPTION-180`",
    reponse_v: "association porteuse de propriétés",
    reponse_f1: "simple association sans propriété",
    reponse_f2: "attributs placés dans l'une des deux entités",
    explication:
      "Les attributs dateHeure, diagnostic dépendent du lien entre MÉDECIN et PATIENT, pas d'une seule entité.",
  },
  {
    id: 181,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : PERSONNE\nSous-entités : CLIENT, SALARIÉ\n\nRègle :\nToute personne est au moins client ou salarié, et peut être les deux.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-181`",
    reponse_v: "spécialisation totale et non exclusive",
    reponse_f1: "spécialisation totale et exclusive",
    reponse_f2: "spécialisation partielle et exclusive",
    explication:
      "Toute personne est au moins client ou salarié, et peut être les deux.",
  },
  {
    id: 182,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : MOYEN_PAIEMENT\nSous-entités : CARTE, VIREMENT\n\nRègle :\nChaque moyen de paiement est exactement d'un seul sous-type.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-182`",
    reponse_v: "spécialisation totale et exclusive",
    reponse_f1: "spécialisation totale et non exclusive",
    reponse_f2: "spécialisation partielle et exclusive",
    explication: "Chaque moyen de paiement est exactement d'un seul sous-type.",
  },
  {
    id: 183,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : VÉHICULE\nSous-entités : VOITURE, MOTO\n\nRègle :\nCertains véhicules ne sont ni voiture ni moto, mais un véhicule ne peut être les deux.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-183`",
    reponse_v: "spécialisation partielle et exclusive",
    reponse_f1: "spécialisation totale et exclusive",
    reponse_f2: "spécialisation totale et non exclusive",
    explication:
      "Certains véhicules ne sont ni voiture ni moto, mais un véhicule ne peut être les deux.",
  },
  {
    id: 184,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : COMPTE\nSous-entités : COMPTE_COURANT, COMPTE_ÉPARGNE\n\nRègle :\nTout compte appartient exactement à une catégorie.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-184`",
    reponse_v: "spécialisation totale et exclusive",
    reponse_f1: "spécialisation totale et non exclusive",
    reponse_f2: "spécialisation partielle et exclusive",
    explication: "Tout compte appartient exactement à une catégorie.",
  },
  {
    id: 185,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : UTILISATEUR\nSous-entités : CLIENT, ADMINISTRATEUR\n\nRègle :\nUn utilisateur peut n'être aucun des deux ou cumuler les deux rôles.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-185`",
    reponse_v: "spécialisation partielle et non exclusive",
    reponse_f1: "spécialisation totale et exclusive",
    reponse_f2: "spécialisation totale et non exclusive",
    explication:
      "Un utilisateur peut n'être aucun des deux ou cumuler les deux rôles.",
  },
  {
    id: 186,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : PERSONNE\nSous-entités : CLIENT, SALARIÉ\n\nRègle :\nToute personne est au moins client ou salarié, et peut être les deux.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-186`",
    reponse_v: "spécialisation totale et non exclusive",
    reponse_f1: "spécialisation totale et exclusive",
    reponse_f2: "spécialisation partielle et exclusive",
    explication:
      "Toute personne est au moins client ou salarié, et peut être les deux.",
  },
  {
    id: 187,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : MOYEN_PAIEMENT\nSous-entités : CARTE, VIREMENT\n\nRègle :\nChaque moyen de paiement est exactement d'un seul sous-type.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-187`",
    reponse_v: "spécialisation totale et exclusive",
    reponse_f1: "spécialisation totale et non exclusive",
    reponse_f2: "spécialisation partielle et exclusive",
    explication: "Chaque moyen de paiement est exactement d'un seul sous-type.",
  },
  {
    id: 188,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : VÉHICULE\nSous-entités : VOITURE, MOTO\n\nRègle :\nCertains véhicules ne sont ni voiture ni moto, mais un véhicule ne peut être les deux.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-188`",
    reponse_v: "spécialisation partielle et exclusive",
    reponse_f1: "spécialisation totale et exclusive",
    reponse_f2: "spécialisation totale et non exclusive",
    explication:
      "Certains véhicules ne sont ni voiture ni moto, mais un véhicule ne peut être les deux.",
  },
  {
    id: 189,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : COMPTE\nSous-entités : COMPTE_COURANT, COMPTE_ÉPARGNE\n\nRègle :\nTout compte appartient exactement à une catégorie.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-189`",
    reponse_v: "spécialisation totale et exclusive",
    reponse_f1: "spécialisation totale et non exclusive",
    reponse_f2: "spécialisation partielle et exclusive",
    explication: "Tout compte appartient exactement à une catégorie.",
  },
  {
    id: 190,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : UTILISATEUR\nSous-entités : CLIENT, ADMINISTRATEUR\n\nRègle :\nUn utilisateur peut n'être aucun des deux ou cumuler les deux rôles.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-190`",
    reponse_v: "spécialisation partielle et non exclusive",
    reponse_f1: "spécialisation totale et exclusive",
    reponse_f2: "spécialisation totale et non exclusive",
    explication:
      "Un utilisateur peut n'être aucun des deux ou cumuler les deux rôles.",
  },
  {
    id: 191,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : PERSONNE\nSous-entités : CLIENT, SALARIÉ\n\nRègle :\nToute personne est au moins client ou salarié, et peut être les deux.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-191`",
    reponse_v: "spécialisation totale et non exclusive",
    reponse_f1: "spécialisation totale et exclusive",
    reponse_f2: "spécialisation partielle et exclusive",
    explication:
      "Toute personne est au moins client ou salarié, et peut être les deux.",
  },
  {
    id: 192,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : MOYEN_PAIEMENT\nSous-entités : CARTE, VIREMENT\n\nRègle :\nChaque moyen de paiement est exactement d'un seul sous-type.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-192`",
    reponse_v: "spécialisation totale et exclusive",
    reponse_f1: "spécialisation totale et non exclusive",
    reponse_f2: "spécialisation partielle et exclusive",
    explication: "Chaque moyen de paiement est exactement d'un seul sous-type.",
  },
  {
    id: 193,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : VÉHICULE\nSous-entités : VOITURE, MOTO\n\nRègle :\nCertains véhicules ne sont ni voiture ni moto, mais un véhicule ne peut être les deux.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-193`",
    reponse_v: "spécialisation partielle et exclusive",
    reponse_f1: "spécialisation totale et exclusive",
    reponse_f2: "spécialisation totale et non exclusive",
    explication:
      "Certains véhicules ne sont ni voiture ni moto, mais un véhicule ne peut être les deux.",
  },
  {
    id: 194,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : COMPTE\nSous-entités : COMPTE_COURANT, COMPTE_ÉPARGNE\n\nRègle :\nTout compte appartient exactement à une catégorie.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-194`",
    reponse_v: "spécialisation totale et exclusive",
    reponse_f1: "spécialisation totale et non exclusive",
    reponse_f2: "spécialisation partielle et exclusive",
    explication: "Tout compte appartient exactement à une catégorie.",
  },
  {
    id: 195,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : UTILISATEUR\nSous-entités : CLIENT, ADMINISTRATEUR\n\nRègle :\nUn utilisateur peut n'être aucun des deux ou cumuler les deux rôles.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-195`",
    reponse_v: "spécialisation partielle et non exclusive",
    reponse_f1: "spécialisation totale et exclusive",
    reponse_f2: "spécialisation totale et non exclusive",
    explication:
      "Un utilisateur peut n'être aucun des deux ou cumuler les deux rôles.",
  },
  {
    id: 196,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : PERSONNE\nSous-entités : CLIENT, SALARIÉ\n\nRègle :\nToute personne est au moins client ou salarié, et peut être les deux.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-196`",
    reponse_v: "spécialisation totale et non exclusive",
    reponse_f1: "spécialisation totale et exclusive",
    reponse_f2: "spécialisation partielle et exclusive",
    explication:
      "Toute personne est au moins client ou salarié, et peut être les deux.",
  },
  {
    id: 197,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : MOYEN_PAIEMENT\nSous-entités : CARTE, VIREMENT\n\nRègle :\nChaque moyen de paiement est exactement d'un seul sous-type.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-197`",
    reponse_v: "spécialisation totale et exclusive",
    reponse_f1: "spécialisation totale et non exclusive",
    reponse_f2: "spécialisation partielle et exclusive",
    explication: "Chaque moyen de paiement est exactement d'un seul sous-type.",
  },
  {
    id: 198,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : VÉHICULE\nSous-entités : VOITURE, MOTO\n\nRègle :\nCertains véhicules ne sont ni voiture ni moto, mais un véhicule ne peut être les deux.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-198`",
    reponse_v: "spécialisation partielle et exclusive",
    reponse_f1: "spécialisation totale et exclusive",
    reponse_f2: "spécialisation totale et non exclusive",
    explication:
      "Certains véhicules ne sont ni voiture ni moto, mais un véhicule ne peut être les deux.",
  },
  {
    id: 199,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : COMPTE\nSous-entités : COMPTE_COURANT, COMPTE_ÉPARGNE\n\nRègle :\nTout compte appartient exactement à une catégorie.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-199`",
    reponse_v: "spécialisation totale et exclusive",
    reponse_f1: "spécialisation totale et non exclusive",
    reponse_f2: "spécialisation partielle et exclusive",
    explication: "Tout compte appartient exactement à une catégorie.",
  },
  {
    id: 200,
    question:
      "`Mini-TP MCD — généralisation / spécialisation\n\nSuper-entité : UTILISATEUR\nSous-entités : CLIENT, ADMINISTRATEUR\n\nRègle :\nUn utilisateur peut n'être aucun des deux ou cumuler les deux rôles.\n\nQuelle contrainte de spécialisation faut-il retenir ?\n\nRéférence exercice : CONCEPTION-200`",
    reponse_v: "spécialisation partielle et non exclusive",
    reponse_f1: "spécialisation totale et exclusive",
    reponse_f2: "spécialisation totale et non exclusive",
    explication:
      "Un utilisateur peut n'être aucun des deux ou cumuler les deux rôles.",
  },
  {
    id: 201,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité CLIENT identifiée par idClient\n- Entité COMMANDE identifiée par idCommande\n- Cardinalités : CLIENT 0,n — COMMANDE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-201`",
    reponse_v: "COMMANDE(idCommande PK, idClient FK NOT NULL)",
    reponse_f1: "CLIENT(idClient PK, idCommande FK)",
    reponse_f2: "COMMANDE(idCommande PK, idClient FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans COMMANDE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 202,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité SERVICE identifiée par idService\n- Entité SALARIE identifiée par idSalarie\n- Cardinalités : SERVICE 0,n — SALARIE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-202`",
    reponse_v: "SALARIE(idSalarie PK, idService FK NOT NULL)",
    reponse_f1: "SERVICE(idService PK, idSalarie FK)",
    reponse_f2: "SALARIE(idSalarie PK, idService FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans SALARIE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 203,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité CATEGORIE identifiée par idCategorie\n- Entité PRODUIT identifiée par idProduit\n- Cardinalités : CATEGORIE 0,n — PRODUIT 0,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-203`",
    reponse_v: "PRODUIT(idProduit PK, idCategorie FK NULL)",
    reponse_f1: "CATEGORIE(idCategorie PK, idProduit FK)",
    reponse_f2: "PRODUIT(idProduit PK, idCategorie FK NOT NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans PRODUIT, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 204,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité AUTEUR identifiée par idAuteur\n- Entité ARTICLE identifiée par idArticle\n- Cardinalités : AUTEUR 0,n — ARTICLE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-204`",
    reponse_v: "ARTICLE(idArticle PK, idAuteur FK NOT NULL)",
    reponse_f1: "AUTEUR(idAuteur PK, idArticle FK)",
    reponse_f2: "ARTICLE(idArticle PK, idAuteur FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans ARTICLE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 205,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité AGENCE identifiée par idAgence\n- Entité EMPLOYE identifiée par idEmploye\n- Cardinalités : AGENCE 0,n — EMPLOYE 0,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-205`",
    reponse_v: "EMPLOYE(idEmploye PK, idAgence FK NULL)",
    reponse_f1: "AGENCE(idAgence PK, idEmploye FK)",
    reponse_f2: "EMPLOYE(idEmploye PK, idAgence FK NOT NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans EMPLOYE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 206,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité CLIENT identifiée par idClient\n- Entité COMMANDE identifiée par idCommande\n- Cardinalités : CLIENT 0,n — COMMANDE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-206`",
    reponse_v: "COMMANDE(idCommande PK, idClient FK NOT NULL)",
    reponse_f1: "CLIENT(idClient PK, idCommande FK)",
    reponse_f2: "COMMANDE(idCommande PK, idClient FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans COMMANDE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 207,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité SERVICE identifiée par idService\n- Entité SALARIE identifiée par idSalarie\n- Cardinalités : SERVICE 0,n — SALARIE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-207`",
    reponse_v: "SALARIE(idSalarie PK, idService FK NOT NULL)",
    reponse_f1: "SERVICE(idService PK, idSalarie FK)",
    reponse_f2: "SALARIE(idSalarie PK, idService FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans SALARIE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 208,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité CATEGORIE identifiée par idCategorie\n- Entité PRODUIT identifiée par idProduit\n- Cardinalités : CATEGORIE 0,n — PRODUIT 0,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-208`",
    reponse_v: "PRODUIT(idProduit PK, idCategorie FK NULL)",
    reponse_f1: "CATEGORIE(idCategorie PK, idProduit FK)",
    reponse_f2: "PRODUIT(idProduit PK, idCategorie FK NOT NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans PRODUIT, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 209,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité AUTEUR identifiée par idAuteur\n- Entité ARTICLE identifiée par idArticle\n- Cardinalités : AUTEUR 0,n — ARTICLE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-209`",
    reponse_v: "ARTICLE(idArticle PK, idAuteur FK NOT NULL)",
    reponse_f1: "AUTEUR(idAuteur PK, idArticle FK)",
    reponse_f2: "ARTICLE(idArticle PK, idAuteur FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans ARTICLE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 210,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité AGENCE identifiée par idAgence\n- Entité EMPLOYE identifiée par idEmploye\n- Cardinalités : AGENCE 0,n — EMPLOYE 0,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-210`",
    reponse_v: "EMPLOYE(idEmploye PK, idAgence FK NULL)",
    reponse_f1: "AGENCE(idAgence PK, idEmploye FK)",
    reponse_f2: "EMPLOYE(idEmploye PK, idAgence FK NOT NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans EMPLOYE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 211,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité CLIENT identifiée par idClient\n- Entité COMMANDE identifiée par idCommande\n- Cardinalités : CLIENT 0,n — COMMANDE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-211`",
    reponse_v: "COMMANDE(idCommande PK, idClient FK NOT NULL)",
    reponse_f1: "CLIENT(idClient PK, idCommande FK)",
    reponse_f2: "COMMANDE(idCommande PK, idClient FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans COMMANDE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 212,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité SERVICE identifiée par idService\n- Entité SALARIE identifiée par idSalarie\n- Cardinalités : SERVICE 0,n — SALARIE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-212`",
    reponse_v: "SALARIE(idSalarie PK, idService FK NOT NULL)",
    reponse_f1: "SERVICE(idService PK, idSalarie FK)",
    reponse_f2: "SALARIE(idSalarie PK, idService FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans SALARIE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 213,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité CATEGORIE identifiée par idCategorie\n- Entité PRODUIT identifiée par idProduit\n- Cardinalités : CATEGORIE 0,n — PRODUIT 0,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-213`",
    reponse_v: "PRODUIT(idProduit PK, idCategorie FK NULL)",
    reponse_f1: "CATEGORIE(idCategorie PK, idProduit FK)",
    reponse_f2: "PRODUIT(idProduit PK, idCategorie FK NOT NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans PRODUIT, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 214,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité AUTEUR identifiée par idAuteur\n- Entité ARTICLE identifiée par idArticle\n- Cardinalités : AUTEUR 0,n — ARTICLE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-214`",
    reponse_v: "ARTICLE(idArticle PK, idAuteur FK NOT NULL)",
    reponse_f1: "AUTEUR(idAuteur PK, idArticle FK)",
    reponse_f2: "ARTICLE(idArticle PK, idAuteur FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans ARTICLE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 215,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité AGENCE identifiée par idAgence\n- Entité EMPLOYE identifiée par idEmploye\n- Cardinalités : AGENCE 0,n — EMPLOYE 0,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-215`",
    reponse_v: "EMPLOYE(idEmploye PK, idAgence FK NULL)",
    reponse_f1: "AGENCE(idAgence PK, idEmploye FK)",
    reponse_f2: "EMPLOYE(idEmploye PK, idAgence FK NOT NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans EMPLOYE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 216,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité CLIENT identifiée par idClient\n- Entité COMMANDE identifiée par idCommande\n- Cardinalités : CLIENT 0,n — COMMANDE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-216`",
    reponse_v: "COMMANDE(idCommande PK, idClient FK NOT NULL)",
    reponse_f1: "CLIENT(idClient PK, idCommande FK)",
    reponse_f2: "COMMANDE(idCommande PK, idClient FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans COMMANDE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 217,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité SERVICE identifiée par idService\n- Entité SALARIE identifiée par idSalarie\n- Cardinalités : SERVICE 0,n — SALARIE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-217`",
    reponse_v: "SALARIE(idSalarie PK, idService FK NOT NULL)",
    reponse_f1: "SERVICE(idService PK, idSalarie FK)",
    reponse_f2: "SALARIE(idSalarie PK, idService FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans SALARIE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 218,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité CATEGORIE identifiée par idCategorie\n- Entité PRODUIT identifiée par idProduit\n- Cardinalités : CATEGORIE 0,n — PRODUIT 0,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-218`",
    reponse_v: "PRODUIT(idProduit PK, idCategorie FK NULL)",
    reponse_f1: "CATEGORIE(idCategorie PK, idProduit FK)",
    reponse_f2: "PRODUIT(idProduit PK, idCategorie FK NOT NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans PRODUIT, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 219,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité AUTEUR identifiée par idAuteur\n- Entité ARTICLE identifiée par idArticle\n- Cardinalités : AUTEUR 0,n — ARTICLE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-219`",
    reponse_v: "ARTICLE(idArticle PK, idAuteur FK NOT NULL)",
    reponse_f1: "AUTEUR(idAuteur PK, idArticle FK)",
    reponse_f2: "ARTICLE(idArticle PK, idAuteur FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans ARTICLE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 220,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité AGENCE identifiée par idAgence\n- Entité EMPLOYE identifiée par idEmploye\n- Cardinalités : AGENCE 0,n — EMPLOYE 0,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-220`",
    reponse_v: "EMPLOYE(idEmploye PK, idAgence FK NULL)",
    reponse_f1: "AGENCE(idAgence PK, idEmploye FK)",
    reponse_f2: "EMPLOYE(idEmploye PK, idAgence FK NOT NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans EMPLOYE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 221,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité CLIENT identifiée par idClient\n- Entité COMMANDE identifiée par idCommande\n- Cardinalités : CLIENT 0,n — COMMANDE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-221`",
    reponse_v: "COMMANDE(idCommande PK, idClient FK NOT NULL)",
    reponse_f1: "CLIENT(idClient PK, idCommande FK)",
    reponse_f2: "COMMANDE(idCommande PK, idClient FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans COMMANDE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 222,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité SERVICE identifiée par idService\n- Entité SALARIE identifiée par idSalarie\n- Cardinalités : SERVICE 0,n — SALARIE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-222`",
    reponse_v: "SALARIE(idSalarie PK, idService FK NOT NULL)",
    reponse_f1: "SERVICE(idService PK, idSalarie FK)",
    reponse_f2: "SALARIE(idSalarie PK, idService FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans SALARIE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 223,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité CATEGORIE identifiée par idCategorie\n- Entité PRODUIT identifiée par idProduit\n- Cardinalités : CATEGORIE 0,n — PRODUIT 0,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-223`",
    reponse_v: "PRODUIT(idProduit PK, idCategorie FK NULL)",
    reponse_f1: "CATEGORIE(idCategorie PK, idProduit FK)",
    reponse_f2: "PRODUIT(idProduit PK, idCategorie FK NOT NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans PRODUIT, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 224,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité AUTEUR identifiée par idAuteur\n- Entité ARTICLE identifiée par idArticle\n- Cardinalités : AUTEUR 0,n — ARTICLE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-224`",
    reponse_v: "ARTICLE(idArticle PK, idAuteur FK NOT NULL)",
    reponse_f1: "AUTEUR(idAuteur PK, idArticle FK)",
    reponse_f2: "ARTICLE(idArticle PK, idAuteur FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans ARTICLE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 225,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité AGENCE identifiée par idAgence\n- Entité EMPLOYE identifiée par idEmploye\n- Cardinalités : AGENCE 0,n — EMPLOYE 0,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-225`",
    reponse_v: "EMPLOYE(idEmploye PK, idAgence FK NULL)",
    reponse_f1: "AGENCE(idAgence PK, idEmploye FK)",
    reponse_f2: "EMPLOYE(idEmploye PK, idAgence FK NOT NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans EMPLOYE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 226,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité CLIENT identifiée par idClient\n- Entité COMMANDE identifiée par idCommande\n- Cardinalités : CLIENT 0,n — COMMANDE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-226`",
    reponse_v: "COMMANDE(idCommande PK, idClient FK NOT NULL)",
    reponse_f1: "CLIENT(idClient PK, idCommande FK)",
    reponse_f2: "COMMANDE(idCommande PK, idClient FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans COMMANDE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 227,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité SERVICE identifiée par idService\n- Entité SALARIE identifiée par idSalarie\n- Cardinalités : SERVICE 0,n — SALARIE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-227`",
    reponse_v: "SALARIE(idSalarie PK, idService FK NOT NULL)",
    reponse_f1: "SERVICE(idService PK, idSalarie FK)",
    reponse_f2: "SALARIE(idSalarie PK, idService FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans SALARIE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 228,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité CATEGORIE identifiée par idCategorie\n- Entité PRODUIT identifiée par idProduit\n- Cardinalités : CATEGORIE 0,n — PRODUIT 0,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-228`",
    reponse_v: "PRODUIT(idProduit PK, idCategorie FK NULL)",
    reponse_f1: "CATEGORIE(idCategorie PK, idProduit FK)",
    reponse_f2: "PRODUIT(idProduit PK, idCategorie FK NOT NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans PRODUIT, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 229,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité AUTEUR identifiée par idAuteur\n- Entité ARTICLE identifiée par idArticle\n- Cardinalités : AUTEUR 0,n — ARTICLE 1,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-229`",
    reponse_v: "ARTICLE(idArticle PK, idAuteur FK NOT NULL)",
    reponse_f1: "AUTEUR(idAuteur PK, idArticle FK)",
    reponse_f2: "ARTICLE(idArticle PK, idAuteur FK NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans ARTICLE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 230,
    question:
      "`Mini-TP MLD — transformation d'une association 1,n\n\nMCD :\n- Entité AGENCE identifiée par idAgence\n- Entité EMPLOYE identifiée par idEmploye\n- Cardinalités : AGENCE 0,n — EMPLOYE 0,1\n\nQuelle traduction relationnelle est correcte ?\n\nRéférence exercice : CONCEPTION-230`",
    reponse_v: "EMPLOYE(idEmploye PK, idAgence FK NULL)",
    reponse_f1: "AGENCE(idAgence PK, idEmploye FK)",
    reponse_f2: "EMPLOYE(idEmploye PK, idAgence FK NOT NULL)",
    explication:
      "La clé étrangère migre du côté n, donc dans EMPLOYE, avec une nullabilité dictée par la cardinalité minimale.",
  },
  {
    id: 231,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- ETUDIANT(idEtudiant)\n- COURS(idCours)\n- Association INSCRIPTION portant : dateInscription\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-231`",
    reponse_v: "INSCRIPTION(idEtudiant PK/FK, idCours PK/FK, dateInscription)",
    reponse_f1: "ETUDIANT(idEtudiant PK, idCours FK, dateInscription)",
    reponse_f2:
      "INSCRIPTION(idEtudiant FK, idCours FK, dateInscription) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 232,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- PRODUIT(idProduit)\n- FOURNISSEUR(idFournisseur)\n- Association PROPOSER portant : prixAchat\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-232`",
    reponse_v: "PROPOSER(idProduit PK/FK, idFournisseur PK/FK, prixAchat)",
    reponse_f1: "PRODUIT(idProduit PK, idFournisseur FK, prixAchat)",
    reponse_f2:
      "PROPOSER(idProduit FK, idFournisseur FK, prixAchat) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 233,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- SALARIE(idSalarie)\n- PROJET(idProjet)\n- Association PARTICIPER portant : role\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-233`",
    reponse_v: "PARTICIPER(idSalarie PK/FK, idProjet PK/FK, role)",
    reponse_f1: "SALARIE(idSalarie PK, idProjet FK, role)",
    reponse_f2: "PARTICIPER(idSalarie FK, idProjet FK, role) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 234,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- ACTEUR(idActeur)\n- FILM(idFilm)\n- Association JOUER portant : nomRole\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-234`",
    reponse_v: "JOUER(idActeur PK/FK, idFilm PK/FK, nomRole)",
    reponse_f1: "ACTEUR(idActeur PK, idFilm FK, nomRole)",
    reponse_f2: "JOUER(idActeur FK, idFilm FK, nomRole) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 235,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- CLIENT(idClient)\n- SERVICE(idService)\n- Association SOUSCRIRE portant : dateDebut\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-235`",
    reponse_v: "SOUSCRIRE(idClient PK/FK, idService PK/FK, dateDebut)",
    reponse_f1: "CLIENT(idClient PK, idService FK, dateDebut)",
    reponse_f2:
      "SOUSCRIRE(idClient FK, idService FK, dateDebut) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 236,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- ETUDIANT(idEtudiant)\n- COURS(idCours)\n- Association INSCRIPTION portant : dateInscription\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-236`",
    reponse_v: "INSCRIPTION(idEtudiant PK/FK, idCours PK/FK, dateInscription)",
    reponse_f1: "ETUDIANT(idEtudiant PK, idCours FK, dateInscription)",
    reponse_f2:
      "INSCRIPTION(idEtudiant FK, idCours FK, dateInscription) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 237,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- PRODUIT(idProduit)\n- FOURNISSEUR(idFournisseur)\n- Association PROPOSER portant : prixAchat\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-237`",
    reponse_v: "PROPOSER(idProduit PK/FK, idFournisseur PK/FK, prixAchat)",
    reponse_f1: "PRODUIT(idProduit PK, idFournisseur FK, prixAchat)",
    reponse_f2:
      "PROPOSER(idProduit FK, idFournisseur FK, prixAchat) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 238,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- SALARIE(idSalarie)\n- PROJET(idProjet)\n- Association PARTICIPER portant : role\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-238`",
    reponse_v: "PARTICIPER(idSalarie PK/FK, idProjet PK/FK, role)",
    reponse_f1: "SALARIE(idSalarie PK, idProjet FK, role)",
    reponse_f2: "PARTICIPER(idSalarie FK, idProjet FK, role) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 239,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- ACTEUR(idActeur)\n- FILM(idFilm)\n- Association JOUER portant : nomRole\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-239`",
    reponse_v: "JOUER(idActeur PK/FK, idFilm PK/FK, nomRole)",
    reponse_f1: "ACTEUR(idActeur PK, idFilm FK, nomRole)",
    reponse_f2: "JOUER(idActeur FK, idFilm FK, nomRole) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 240,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- CLIENT(idClient)\n- SERVICE(idService)\n- Association SOUSCRIRE portant : dateDebut\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-240`",
    reponse_v: "SOUSCRIRE(idClient PK/FK, idService PK/FK, dateDebut)",
    reponse_f1: "CLIENT(idClient PK, idService FK, dateDebut)",
    reponse_f2:
      "SOUSCRIRE(idClient FK, idService FK, dateDebut) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 241,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- ETUDIANT(idEtudiant)\n- COURS(idCours)\n- Association INSCRIPTION portant : dateInscription\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-241`",
    reponse_v: "INSCRIPTION(idEtudiant PK/FK, idCours PK/FK, dateInscription)",
    reponse_f1: "ETUDIANT(idEtudiant PK, idCours FK, dateInscription)",
    reponse_f2:
      "INSCRIPTION(idEtudiant FK, idCours FK, dateInscription) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 242,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- PRODUIT(idProduit)\n- FOURNISSEUR(idFournisseur)\n- Association PROPOSER portant : prixAchat\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-242`",
    reponse_v: "PROPOSER(idProduit PK/FK, idFournisseur PK/FK, prixAchat)",
    reponse_f1: "PRODUIT(idProduit PK, idFournisseur FK, prixAchat)",
    reponse_f2:
      "PROPOSER(idProduit FK, idFournisseur FK, prixAchat) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 243,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- SALARIE(idSalarie)\n- PROJET(idProjet)\n- Association PARTICIPER portant : role\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-243`",
    reponse_v: "PARTICIPER(idSalarie PK/FK, idProjet PK/FK, role)",
    reponse_f1: "SALARIE(idSalarie PK, idProjet FK, role)",
    reponse_f2: "PARTICIPER(idSalarie FK, idProjet FK, role) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 244,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- ACTEUR(idActeur)\n- FILM(idFilm)\n- Association JOUER portant : nomRole\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-244`",
    reponse_v: "JOUER(idActeur PK/FK, idFilm PK/FK, nomRole)",
    reponse_f1: "ACTEUR(idActeur PK, idFilm FK, nomRole)",
    reponse_f2: "JOUER(idActeur FK, idFilm FK, nomRole) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 245,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- CLIENT(idClient)\n- SERVICE(idService)\n- Association SOUSCRIRE portant : dateDebut\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-245`",
    reponse_v: "SOUSCRIRE(idClient PK/FK, idService PK/FK, dateDebut)",
    reponse_f1: "CLIENT(idClient PK, idService FK, dateDebut)",
    reponse_f2:
      "SOUSCRIRE(idClient FK, idService FK, dateDebut) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 246,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- ETUDIANT(idEtudiant)\n- COURS(idCours)\n- Association INSCRIPTION portant : dateInscription\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-246`",
    reponse_v: "INSCRIPTION(idEtudiant PK/FK, idCours PK/FK, dateInscription)",
    reponse_f1: "ETUDIANT(idEtudiant PK, idCours FK, dateInscription)",
    reponse_f2:
      "INSCRIPTION(idEtudiant FK, idCours FK, dateInscription) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 247,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- PRODUIT(idProduit)\n- FOURNISSEUR(idFournisseur)\n- Association PROPOSER portant : prixAchat\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-247`",
    reponse_v: "PROPOSER(idProduit PK/FK, idFournisseur PK/FK, prixAchat)",
    reponse_f1: "PRODUIT(idProduit PK, idFournisseur FK, prixAchat)",
    reponse_f2:
      "PROPOSER(idProduit FK, idFournisseur FK, prixAchat) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 248,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- SALARIE(idSalarie)\n- PROJET(idProjet)\n- Association PARTICIPER portant : role\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-248`",
    reponse_v: "PARTICIPER(idSalarie PK/FK, idProjet PK/FK, role)",
    reponse_f1: "SALARIE(idSalarie PK, idProjet FK, role)",
    reponse_f2: "PARTICIPER(idSalarie FK, idProjet FK, role) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 249,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- ACTEUR(idActeur)\n- FILM(idFilm)\n- Association JOUER portant : nomRole\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-249`",
    reponse_v: "JOUER(idActeur PK/FK, idFilm PK/FK, nomRole)",
    reponse_f1: "ACTEUR(idActeur PK, idFilm FK, nomRole)",
    reponse_f2: "JOUER(idActeur FK, idFilm FK, nomRole) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 250,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- CLIENT(idClient)\n- SERVICE(idService)\n- Association SOUSCRIRE portant : dateDebut\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-250`",
    reponse_v: "SOUSCRIRE(idClient PK/FK, idService PK/FK, dateDebut)",
    reponse_f1: "CLIENT(idClient PK, idService FK, dateDebut)",
    reponse_f2:
      "SOUSCRIRE(idClient FK, idService FK, dateDebut) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 251,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- ETUDIANT(idEtudiant)\n- COURS(idCours)\n- Association INSCRIPTION portant : dateInscription\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-251`",
    reponse_v: "INSCRIPTION(idEtudiant PK/FK, idCours PK/FK, dateInscription)",
    reponse_f1: "ETUDIANT(idEtudiant PK, idCours FK, dateInscription)",
    reponse_f2:
      "INSCRIPTION(idEtudiant FK, idCours FK, dateInscription) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 252,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- PRODUIT(idProduit)\n- FOURNISSEUR(idFournisseur)\n- Association PROPOSER portant : prixAchat\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-252`",
    reponse_v: "PROPOSER(idProduit PK/FK, idFournisseur PK/FK, prixAchat)",
    reponse_f1: "PRODUIT(idProduit PK, idFournisseur FK, prixAchat)",
    reponse_f2:
      "PROPOSER(idProduit FK, idFournisseur FK, prixAchat) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 253,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- SALARIE(idSalarie)\n- PROJET(idProjet)\n- Association PARTICIPER portant : role\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-253`",
    reponse_v: "PARTICIPER(idSalarie PK/FK, idProjet PK/FK, role)",
    reponse_f1: "SALARIE(idSalarie PK, idProjet FK, role)",
    reponse_f2: "PARTICIPER(idSalarie FK, idProjet FK, role) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 254,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- ACTEUR(idActeur)\n- FILM(idFilm)\n- Association JOUER portant : nomRole\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-254`",
    reponse_v: "JOUER(idActeur PK/FK, idFilm PK/FK, nomRole)",
    reponse_f1: "ACTEUR(idActeur PK, idFilm FK, nomRole)",
    reponse_f2: "JOUER(idActeur FK, idFilm FK, nomRole) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 255,
    question:
      "`Mini-TP MLD — transformation d'une association n,n\n\nMCD :\n- CLIENT(idClient)\n- SERVICE(idService)\n- Association SOUSCRIRE portant : dateDebut\n\nQuelle relation faut-il créer ?\n\nRéférence exercice : CONCEPTION-255`",
    reponse_v: "SOUSCRIRE(idClient PK/FK, idService PK/FK, dateDebut)",
    reponse_f1: "CLIENT(idClient PK, idService FK, dateDebut)",
    reponse_f2:
      "SOUSCRIRE(idClient FK, idService FK, dateDebut) sans clé primaire",
    explication:
      "Une association n,n devient une table d'association dont la clé primaire est généralement composée des deux clés étrangères.",
  },
  {
    id: 256,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nCOMMANDE(idCommande, idClient, nomClient, dateCommande)\n\nDépendances fonctionnelles :\nidCommande → idClient et idClient → nomClient\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-256`",
    reponse_v:
      "séparer CLIENT(idClient, nomClient) et COMMANDE(idCommande, idClient, dateCommande)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 257,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nLIGNE(idCommande, idProduit, quantite, libelleProduit)\n\nDépendances fonctionnelles :\n(idCommande,idProduit) → quantite et idProduit → libelleProduit\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-257`",
    reponse_v:
      "séparer PRODUIT(idProduit, libelleProduit) et LIGNE(idCommande, idProduit, quantite)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance partielle; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 258,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nSALARIE(idSalarie, idService, nomService)\n\nDépendances fonctionnelles :\nidSalarie → idService et idService → nomService\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-258`",
    reponse_v:
      "séparer SERVICE(idService, nomService) et SALARIE(idSalarie, idService)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 259,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nINSCRIPTION(idEtudiant, idCours, nomEtudiant, note)\n\nDépendances fonctionnelles :\n(idEtudiant,idCours) → note et idEtudiant → nomEtudiant\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-259`",
    reponse_v:
      "séparer ETUDIANT(idEtudiant, nomEtudiant) et INSCRIPTION(idEtudiant, idCours, note)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance partielle; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 260,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nPRODUIT(idProduit, idCategorie, libelleCategorie)\n\nDépendances fonctionnelles :\nidProduit → idCategorie et idCategorie → libelleCategorie\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-260`",
    reponse_v:
      "séparer CATEGORIE(idCategorie, libelleCategorie) et PRODUIT(idProduit, idCategorie)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 261,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nCOMMANDE(idCommande, idClient, nomClient, dateCommande)\n\nDépendances fonctionnelles :\nidCommande → idClient et idClient → nomClient\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-261`",
    reponse_v:
      "séparer CLIENT(idClient, nomClient) et COMMANDE(idCommande, idClient, dateCommande)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 262,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nLIGNE(idCommande, idProduit, quantite, libelleProduit)\n\nDépendances fonctionnelles :\n(idCommande,idProduit) → quantite et idProduit → libelleProduit\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-262`",
    reponse_v:
      "séparer PRODUIT(idProduit, libelleProduit) et LIGNE(idCommande, idProduit, quantite)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance partielle; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 263,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nSALARIE(idSalarie, idService, nomService)\n\nDépendances fonctionnelles :\nidSalarie → idService et idService → nomService\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-263`",
    reponse_v:
      "séparer SERVICE(idService, nomService) et SALARIE(idSalarie, idService)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 264,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nINSCRIPTION(idEtudiant, idCours, nomEtudiant, note)\n\nDépendances fonctionnelles :\n(idEtudiant,idCours) → note et idEtudiant → nomEtudiant\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-264`",
    reponse_v:
      "séparer ETUDIANT(idEtudiant, nomEtudiant) et INSCRIPTION(idEtudiant, idCours, note)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance partielle; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 265,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nPRODUIT(idProduit, idCategorie, libelleCategorie)\n\nDépendances fonctionnelles :\nidProduit → idCategorie et idCategorie → libelleCategorie\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-265`",
    reponse_v:
      "séparer CATEGORIE(idCategorie, libelleCategorie) et PRODUIT(idProduit, idCategorie)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 266,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nCOMMANDE(idCommande, idClient, nomClient, dateCommande)\n\nDépendances fonctionnelles :\nidCommande → idClient et idClient → nomClient\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-266`",
    reponse_v:
      "séparer CLIENT(idClient, nomClient) et COMMANDE(idCommande, idClient, dateCommande)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 267,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nLIGNE(idCommande, idProduit, quantite, libelleProduit)\n\nDépendances fonctionnelles :\n(idCommande,idProduit) → quantite et idProduit → libelleProduit\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-267`",
    reponse_v:
      "séparer PRODUIT(idProduit, libelleProduit) et LIGNE(idCommande, idProduit, quantite)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance partielle; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 268,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nSALARIE(idSalarie, idService, nomService)\n\nDépendances fonctionnelles :\nidSalarie → idService et idService → nomService\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-268`",
    reponse_v:
      "séparer SERVICE(idService, nomService) et SALARIE(idSalarie, idService)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 269,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nINSCRIPTION(idEtudiant, idCours, nomEtudiant, note)\n\nDépendances fonctionnelles :\n(idEtudiant,idCours) → note et idEtudiant → nomEtudiant\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-269`",
    reponse_v:
      "séparer ETUDIANT(idEtudiant, nomEtudiant) et INSCRIPTION(idEtudiant, idCours, note)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance partielle; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 270,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nPRODUIT(idProduit, idCategorie, libelleCategorie)\n\nDépendances fonctionnelles :\nidProduit → idCategorie et idCategorie → libelleCategorie\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-270`",
    reponse_v:
      "séparer CATEGORIE(idCategorie, libelleCategorie) et PRODUIT(idProduit, idCategorie)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 271,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nCOMMANDE(idCommande, idClient, nomClient, dateCommande)\n\nDépendances fonctionnelles :\nidCommande → idClient et idClient → nomClient\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-271`",
    reponse_v:
      "séparer CLIENT(idClient, nomClient) et COMMANDE(idCommande, idClient, dateCommande)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 272,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nLIGNE(idCommande, idProduit, quantite, libelleProduit)\n\nDépendances fonctionnelles :\n(idCommande,idProduit) → quantite et idProduit → libelleProduit\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-272`",
    reponse_v:
      "séparer PRODUIT(idProduit, libelleProduit) et LIGNE(idCommande, idProduit, quantite)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance partielle; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 273,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nSALARIE(idSalarie, idService, nomService)\n\nDépendances fonctionnelles :\nidSalarie → idService et idService → nomService\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-273`",
    reponse_v:
      "séparer SERVICE(idService, nomService) et SALARIE(idSalarie, idService)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 274,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nINSCRIPTION(idEtudiant, idCours, nomEtudiant, note)\n\nDépendances fonctionnelles :\n(idEtudiant,idCours) → note et idEtudiant → nomEtudiant\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-274`",
    reponse_v:
      "séparer ETUDIANT(idEtudiant, nomEtudiant) et INSCRIPTION(idEtudiant, idCours, note)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance partielle; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 275,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nPRODUIT(idProduit, idCategorie, libelleCategorie)\n\nDépendances fonctionnelles :\nidProduit → idCategorie et idCategorie → libelleCategorie\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-275`",
    reponse_v:
      "séparer CATEGORIE(idCategorie, libelleCategorie) et PRODUIT(idProduit, idCategorie)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 276,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nCOMMANDE(idCommande, idClient, nomClient, dateCommande)\n\nDépendances fonctionnelles :\nidCommande → idClient et idClient → nomClient\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-276`",
    reponse_v:
      "séparer CLIENT(idClient, nomClient) et COMMANDE(idCommande, idClient, dateCommande)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 277,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nLIGNE(idCommande, idProduit, quantite, libelleProduit)\n\nDépendances fonctionnelles :\n(idCommande,idProduit) → quantite et idProduit → libelleProduit\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-277`",
    reponse_v:
      "séparer PRODUIT(idProduit, libelleProduit) et LIGNE(idCommande, idProduit, quantite)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance partielle; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 278,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nSALARIE(idSalarie, idService, nomService)\n\nDépendances fonctionnelles :\nidSalarie → idService et idService → nomService\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-278`",
    reponse_v:
      "séparer SERVICE(idService, nomService) et SALARIE(idSalarie, idService)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 279,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nINSCRIPTION(idEtudiant, idCours, nomEtudiant, note)\n\nDépendances fonctionnelles :\n(idEtudiant,idCours) → note et idEtudiant → nomEtudiant\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-279`",
    reponse_v:
      "séparer ETUDIANT(idEtudiant, nomEtudiant) et INSCRIPTION(idEtudiant, idCours, note)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance partielle; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 280,
    question:
      "`Mini-TP MLD — normalisation difficile\n\nRelation initiale :\nPRODUIT(idProduit, idCategorie, libelleCategorie)\n\nDépendances fonctionnelles :\nidProduit → idCategorie et idCategorie → libelleCategorie\n\nQuelle décomposition est la plus correcte ?\n\nRéférence exercice : CONCEPTION-280`",
    reponse_v:
      "séparer CATEGORIE(idCategorie, libelleCategorie) et PRODUIT(idProduit, idCategorie)",
    reponse_f1: "conserver la relation telle quelle",
    reponse_f2:
      "supprimer l'attribut dépendant sans créer de nouvelle relation",
    explication:
      "La relation contient une dépendance transitive; la décomposition proposée supprime cette redondance.",
  },
  {
    id: 281,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nPERSONNE(idPersonne, nom)\n\nSous-types :\n- CLIENT(idPersonne, numeroClient)\n- SALARIE(idPersonne, matricule)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-281`",
    reponse_v:
      "une table mère PERSONNE et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 282,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nVEHICULE(idVehicule, marque)\n\nSous-types :\n- VOITURE(idVehicule, nbPortes)\n- MOTO(idVehicule, cylindree)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-282`",
    reponse_v:
      "une table mère VEHICULE et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 283,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nCOMPTE(idCompte, solde)\n\nSous-types :\n- COMPTE_COURANT(idCompte, decouvert)\n- COMPTE_EPARGNE(idCompte, taux)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-283`",
    reponse_v:
      "une table mère COMPTE et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 284,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nDOCUMENT(idDocument, titre)\n\nSous-types :\n- PDF(idDocument, nbPages)\n- VIDEO(idDocument, duree)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-284`",
    reponse_v:
      "une table mère DOCUMENT et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 285,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nUTILISATEUR(idUtilisateur, email)\n\nSous-types :\n- ADMIN(idUtilisateur, niveau)\n- CLIENT(idUtilisateur, dateInscription)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-285`",
    reponse_v:
      "une table mère UTILISATEUR et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 286,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nPERSONNE(idPersonne, nom)\n\nSous-types :\n- CLIENT(idPersonne, numeroClient)\n- SALARIE(idPersonne, matricule)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-286`",
    reponse_v:
      "une table mère PERSONNE et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 287,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nVEHICULE(idVehicule, marque)\n\nSous-types :\n- VOITURE(idVehicule, nbPortes)\n- MOTO(idVehicule, cylindree)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-287`",
    reponse_v:
      "une table mère VEHICULE et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 288,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nCOMPTE(idCompte, solde)\n\nSous-types :\n- COMPTE_COURANT(idCompte, decouvert)\n- COMPTE_EPARGNE(idCompte, taux)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-288`",
    reponse_v:
      "une table mère COMPTE et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 289,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nDOCUMENT(idDocument, titre)\n\nSous-types :\n- PDF(idDocument, nbPages)\n- VIDEO(idDocument, duree)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-289`",
    reponse_v:
      "une table mère DOCUMENT et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 290,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nUTILISATEUR(idUtilisateur, email)\n\nSous-types :\n- ADMIN(idUtilisateur, niveau)\n- CLIENT(idUtilisateur, dateInscription)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-290`",
    reponse_v:
      "une table mère UTILISATEUR et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 291,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nPERSONNE(idPersonne, nom)\n\nSous-types :\n- CLIENT(idPersonne, numeroClient)\n- SALARIE(idPersonne, matricule)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-291`",
    reponse_v:
      "une table mère PERSONNE et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 292,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nVEHICULE(idVehicule, marque)\n\nSous-types :\n- VOITURE(idVehicule, nbPortes)\n- MOTO(idVehicule, cylindree)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-292`",
    reponse_v:
      "une table mère VEHICULE et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 293,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nCOMPTE(idCompte, solde)\n\nSous-types :\n- COMPTE_COURANT(idCompte, decouvert)\n- COMPTE_EPARGNE(idCompte, taux)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-293`",
    reponse_v:
      "une table mère COMPTE et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 294,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nDOCUMENT(idDocument, titre)\n\nSous-types :\n- PDF(idDocument, nbPages)\n- VIDEO(idDocument, duree)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-294`",
    reponse_v:
      "une table mère DOCUMENT et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 295,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nUTILISATEUR(idUtilisateur, email)\n\nSous-types :\n- ADMIN(idUtilisateur, niveau)\n- CLIENT(idUtilisateur, dateInscription)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-295`",
    reponse_v:
      "une table mère UTILISATEUR et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 296,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nPERSONNE(idPersonne, nom)\n\nSous-types :\n- CLIENT(idPersonne, numeroClient)\n- SALARIE(idPersonne, matricule)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-296`",
    reponse_v:
      "une table mère PERSONNE et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 297,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nVEHICULE(idVehicule, marque)\n\nSous-types :\n- VOITURE(idVehicule, nbPortes)\n- MOTO(idVehicule, cylindree)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-297`",
    reponse_v:
      "une table mère VEHICULE et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 298,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nCOMPTE(idCompte, solde)\n\nSous-types :\n- COMPTE_COURANT(idCompte, decouvert)\n- COMPTE_EPARGNE(idCompte, taux)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-298`",
    reponse_v:
      "une table mère COMPTE et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 299,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nDOCUMENT(idDocument, titre)\n\nSous-types :\n- PDF(idDocument, nbPages)\n- VIDEO(idDocument, duree)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-299`",
    reponse_v:
      "une table mère DOCUMENT et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
  {
    id: 300,
    question:
      "`Mini-TP MLD — transformation d'une spécialisation\n\nSuper-type :\nUTILISATEUR(idUtilisateur, email)\n\nSous-types :\n- ADMIN(idUtilisateur, niveau)\n- CLIENT(idUtilisateur, dateInscription)\n\nQuelle stratégie relationnelle respecte le mieux la spécialisation tout en évitant la duplication des attributs communs ?\n\nRéférence exercice : CONCEPTION-300`",
    reponse_v:
      "une table mère UTILISATEUR et une table par sous-type avec PK également FK",
    reponse_f1:
      "une seule table contenant tous les attributs avec de nombreuses colonnes NULL",
    reponse_f2:
      "une table indépendante par sous-type sans clé étrangère vers la table mère",
    explication:
      "La stratégie table par type conserve les attributs communs dans la table mère et les spécifiques dans les tables filles.",
  },
];
