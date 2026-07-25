export const dataQuizz_resilience_pca_pra_haute_disponibilite_multisite_attaques_parades_tres_difficiles = [
  {
    "id": 1,
    "question": "`Mini-TP PCA/PRA — objectifs\n\nApplication : paiement instantané\nVolume protégé : 120 Go\nRPO : 5 min\nRTO : 20 min\nMTD : 50 min\n\nQuelle interprétation est exacte ?\n\nRéférence exercice : RESILIENCE-001`",
    "reponse_v": "Perte maximale 5 min, reprise 20 min, interruption tolérée 50 min",
    "reponse_f1": "Reprise 5 min, perte maximale 20 min, interruption tolérée 50 min",
    "reponse_f2": "Perte maximale 5 min, interruption 20 min, reprise 50 min",
    "explication": "RPO, RTO et MTD mesurent respectivement perte de données, délai de reprise et interruption maximale."
  },
  {
    "id": 2,
    "question": "`Mini-TP PRA — sauvegardes\n\nApplication : portail usager\nVolume protégé : 157 Go\nRPO : 10 min\nRTO : 35 min\nMTD : 80 min\nSauvegarde toutes les 20 min\n\nQuelle conclusion est correcte ?\n\nRéférence exercice : RESILIENCE-002`",
    "reponse_v": "La fréquence ne garantit pas le RPO",
    "reponse_f1": "La fréquence respecte exactement le RPO",
    "reponse_f2": "Le RPO dépend uniquement du temps de redémarrage",
    "explication": "L'intervalle de capture dépasse l'objectif de perte admissible."
  },
  {
    "id": 3,
    "question": "`Mini-TP PCA — mode dégradé\n\nApplication : ERP financier\nVolume protégé : 194 Go\nRPO : 15 min\nRTO : 50 min\nMTD : 110 min\nCapacité manuelle maintenue : 40 %\n\nQuel dispositif est principalement mobilisé ?\n\nRéférence exercice : RESILIENCE-003`",
    "reponse_v": "Le PCA",
    "reponse_f1": "Le PRA exclusivement",
    "reponse_f2": "La politique d'archivage",
    "explication": "Le PCA organise la continuité de l'activité pendant l'incident."
  },
  {
    "id": 4,
    "question": "`Mini-TP BIA — criticité\n\nApplication : messagerie sécurisée\nVolume protégé : 231 Go\nRPO : 20 min\nRTO : 65 min\nMTD : 140 min\nDépendances : DNS, annuaire, base\n\nQuelle décision est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-004`",
    "reponse_v": "Classer le service prioritaire et documenter ses dépendances",
    "reponse_f1": "Le classer uniquement selon son volume",
    "reponse_f2": "Définir sa priorité après le sinistre",
    "explication": "Le BIA classe selon impacts et dépendances."
  },
  {
    "id": 5,
    "question": "`Mini-TP PRA — ordre de reprise\n\nApplication : annuaire d'entreprise\nVolume protégé : 268 Go\nRPO : 25 min\nRTO : 80 min\nMTD : 170 min\nChaîne : DNS → annuaire → base → application\n\nQuel ordre faut-il appliquer ?\n\nRéférence exercice : RESILIENCE-005`",
    "reponse_v": "DNS, annuaire, base, application",
    "reponse_f1": "Application, base, annuaire, DNS",
    "reponse_f2": "Base, application, DNS, annuaire",
    "explication": "Les prérequis doivent être rétablis avant les services dépendants."
  },
  {
    "id": 6,
    "question": "`Mini-TP PRA — test réel\n\nApplication : supervision réseau\nVolume protégé : 305 Go\nRPO : 30 min\nRTO : 95 min\nMTD : 200 min\nReprise mesurée : 120 min\nValidation fonctionnelle : réussie\n\nQuel constat retenir ?\n\nRéférence exercice : RESILIENCE-006`",
    "reponse_v": "Le service fonctionne mais le RTO n'est pas respecté",
    "reponse_f1": "Le PRA est conforme car la validation fonctionnelle réussit",
    "reponse_f2": "Le RPO est nécessairement non respecté",
    "explication": "Le respect fonctionnel ne compense pas un dépassement du RTO."
  },
  {
    "id": 7,
    "question": "`Mini-TP PCA/PRA — objectifs\n\nApplication : gestion documentaire\nVolume protégé : 342 Go\nRPO : 35 min\nRTO : 110 min\nMTD : 140 min\n\nQuelle interprétation est exacte ?\n\nRéférence exercice : RESILIENCE-007`",
    "reponse_v": "Perte maximale 35 min, reprise 110 min, interruption tolérée 140 min",
    "reponse_f1": "Reprise 35 min, perte maximale 110 min, interruption tolérée 140 min",
    "reponse_f2": "Perte maximale 35 min, interruption 110 min, reprise 140 min",
    "explication": "RPO, RTO et MTD mesurent respectivement perte de données, délai de reprise et interruption maximale."
  },
  {
    "id": 8,
    "question": "`Mini-TP PRA — sauvegardes\n\nApplication : plateforme e-commerce\nVolume protégé : 379 Go\nRPO : 40 min\nRTO : 125 min\nMTD : 170 min\nSauvegarde toutes les 50 min\n\nQuelle conclusion est correcte ?\n\nRéférence exercice : RESILIENCE-008`",
    "reponse_v": "La fréquence ne garantit pas le RPO",
    "reponse_f1": "La fréquence respecte exactement le RPO",
    "reponse_f2": "Le RPO dépend uniquement du temps de redémarrage",
    "explication": "L'intervalle de capture dépasse l'objectif de perte admissible."
  },
  {
    "id": 9,
    "question": "`Mini-TP PCA — mode dégradé\n\nApplication : API partenaires\nVolume protégé : 416 Go\nRPO : 45 min\nRTO : 140 min\nMTD : 200 min\nCapacité manuelle maintenue : 30 %\n\nQuel dispositif est principalement mobilisé ?\n\nRéférence exercice : RESILIENCE-009`",
    "reponse_v": "Le PCA",
    "reponse_f1": "Le PRA exclusivement",
    "reponse_f2": "La politique d'archivage",
    "explication": "Le PCA organise la continuité de l'activité pendant l'incident."
  },
  {
    "id": 10,
    "question": "`Mini-TP BIA — criticité\n\nApplication : base clients\nVolume protégé : 453 Go\nRPO : 50 min\nRTO : 155 min\nMTD : 230 min\nDépendances : DNS, annuaire, base\n\nQuelle décision est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-010`",
    "reponse_v": "Classer le service prioritaire et documenter ses dépendances",
    "reponse_f1": "Le classer uniquement selon son volume",
    "reponse_f2": "Définir sa priorité après le sinistre",
    "explication": "Le BIA classe selon impacts et dépendances."
  },
  {
    "id": 11,
    "question": "`Mini-TP PRA — ordre de reprise\n\nApplication : gestion RH\nVolume protégé : 490 Go\nRPO : 55 min\nRTO : 20 min\nMTD : 110 min\nChaîne : DNS → annuaire → base → application\n\nQuel ordre faut-il appliquer ?\n\nRéférence exercice : RESILIENCE-011`",
    "reponse_v": "DNS, annuaire, base, application",
    "reponse_f1": "Application, base, annuaire, DNS",
    "reponse_f2": "Base, application, DNS, annuaire",
    "explication": "Les prérequis doivent être rétablis avant les services dépendants."
  },
  {
    "id": 12,
    "question": "`Mini-TP PRA — test réel\n\nApplication : système de réservation\nVolume protégé : 527 Go\nRPO : 60 min\nRTO : 35 min\nMTD : 140 min\nReprise mesurée : 60 min\nValidation fonctionnelle : réussie\n\nQuel constat retenir ?\n\nRéférence exercice : RESILIENCE-012`",
    "reponse_v": "Le service fonctionne mais le RTO n'est pas respecté",
    "reponse_f1": "Le PRA est conforme car la validation fonctionnelle réussit",
    "reponse_f2": "Le RPO est nécessairement non respecté",
    "explication": "Le respect fonctionnel ne compense pas un dépassement du RTO."
  },
  {
    "id": 13,
    "question": "`Mini-TP PCA/PRA — objectifs\n\nApplication : gestion des identités\nVolume protégé : 564 Go\nRPO : 5 min\nRTO : 50 min\nMTD : 80 min\n\nQuelle interprétation est exacte ?\n\nRéférence exercice : RESILIENCE-013`",
    "reponse_v": "Perte maximale 5 min, reprise 50 min, interruption tolérée 80 min",
    "reponse_f1": "Reprise 5 min, perte maximale 50 min, interruption tolérée 80 min",
    "reponse_f2": "Perte maximale 5 min, interruption 50 min, reprise 80 min",
    "explication": "RPO, RTO et MTD mesurent respectivement perte de données, délai de reprise et interruption maximale."
  },
  {
    "id": 14,
    "question": "`Mini-TP PRA — sauvegardes\n\nApplication : collecte de télémétrie\nVolume protégé : 601 Go\nRPO : 10 min\nRTO : 65 min\nMTD : 110 min\nSauvegarde toutes les 20 min\n\nQuelle conclusion est correcte ?\n\nRéférence exercice : RESILIENCE-014`",
    "reponse_v": "La fréquence ne garantit pas le RPO",
    "reponse_f1": "La fréquence respecte exactement le RPO",
    "reponse_f2": "Le RPO dépend uniquement du temps de redémarrage",
    "explication": "L'intervalle de capture dépasse l'objectif de perte admissible."
  },
  {
    "id": 15,
    "question": "`Mini-TP PCA — mode dégradé\n\nApplication : plateforme de facturation\nVolume protégé : 638 Go\nRPO : 15 min\nRTO : 80 min\nMTD : 140 min\nCapacité manuelle maintenue : 20 %\n\nQuel dispositif est principalement mobilisé ?\n\nRéférence exercice : RESILIENCE-015`",
    "reponse_v": "Le PCA",
    "reponse_f1": "Le PRA exclusivement",
    "reponse_f2": "La politique d'archivage",
    "explication": "Le PCA organise la continuité de l'activité pendant l'incident."
  },
  {
    "id": 16,
    "question": "`Mini-TP BIA — criticité\n\nApplication : paiement instantané\nVolume protégé : 675 Go\nRPO : 20 min\nRTO : 95 min\nMTD : 170 min\nDépendances : DNS, annuaire, base\n\nQuelle décision est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-016`",
    "reponse_v": "Classer le service prioritaire et documenter ses dépendances",
    "reponse_f1": "Le classer uniquement selon son volume",
    "reponse_f2": "Définir sa priorité après le sinistre",
    "explication": "Le BIA classe selon impacts et dépendances."
  },
  {
    "id": 17,
    "question": "`Mini-TP PRA — ordre de reprise\n\nApplication : portail usager\nVolume protégé : 712 Go\nRPO : 25 min\nRTO : 110 min\nMTD : 200 min\nChaîne : DNS → annuaire → base → application\n\nQuel ordre faut-il appliquer ?\n\nRéférence exercice : RESILIENCE-017`",
    "reponse_v": "DNS, annuaire, base, application",
    "reponse_f1": "Application, base, annuaire, DNS",
    "reponse_f2": "Base, application, DNS, annuaire",
    "explication": "Les prérequis doivent être rétablis avant les services dépendants."
  },
  {
    "id": 18,
    "question": "`Mini-TP PRA — test réel\n\nApplication : ERP financier\nVolume protégé : 749 Go\nRPO : 30 min\nRTO : 125 min\nMTD : 230 min\nReprise mesurée : 150 min\nValidation fonctionnelle : réussie\n\nQuel constat retenir ?\n\nRéférence exercice : RESILIENCE-018`",
    "reponse_v": "Le service fonctionne mais le RTO n'est pas respecté",
    "reponse_f1": "Le PRA est conforme car la validation fonctionnelle réussit",
    "reponse_f2": "Le RPO est nécessairement non respecté",
    "explication": "Le respect fonctionnel ne compense pas un dépassement du RTO."
  },
  {
    "id": 19,
    "question": "`Mini-TP PCA/PRA — objectifs\n\nApplication : messagerie sécurisée\nVolume protégé : 786 Go\nRPO : 35 min\nRTO : 140 min\nMTD : 170 min\n\nQuelle interprétation est exacte ?\n\nRéférence exercice : RESILIENCE-019`",
    "reponse_v": "Perte maximale 35 min, reprise 140 min, interruption tolérée 170 min",
    "reponse_f1": "Reprise 35 min, perte maximale 140 min, interruption tolérée 170 min",
    "reponse_f2": "Perte maximale 35 min, interruption 140 min, reprise 170 min",
    "explication": "RPO, RTO et MTD mesurent respectivement perte de données, délai de reprise et interruption maximale."
  },
  {
    "id": 20,
    "question": "`Mini-TP PRA — sauvegardes\n\nApplication : annuaire d'entreprise\nVolume protégé : 823 Go\nRPO : 40 min\nRTO : 155 min\nMTD : 200 min\nSauvegarde toutes les 50 min\n\nQuelle conclusion est correcte ?\n\nRéférence exercice : RESILIENCE-020`",
    "reponse_v": "La fréquence ne garantit pas le RPO",
    "reponse_f1": "La fréquence respecte exactement le RPO",
    "reponse_f2": "Le RPO dépend uniquement du temps de redémarrage",
    "explication": "L'intervalle de capture dépasse l'objectif de perte admissible."
  },
  {
    "id": 21,
    "question": "`Mini-TP PCA — mode dégradé\n\nApplication : supervision réseau\nVolume protégé : 860 Go\nRPO : 45 min\nRTO : 20 min\nMTD : 80 min\nCapacité manuelle maintenue : 80 %\n\nQuel dispositif est principalement mobilisé ?\n\nRéférence exercice : RESILIENCE-021`",
    "reponse_v": "Le PCA",
    "reponse_f1": "Le PRA exclusivement",
    "reponse_f2": "La politique d'archivage",
    "explication": "Le PCA organise la continuité de l'activité pendant l'incident."
  },
  {
    "id": 22,
    "question": "`Mini-TP BIA — criticité\n\nApplication : gestion documentaire\nVolume protégé : 897 Go\nRPO : 50 min\nRTO : 35 min\nMTD : 110 min\nDépendances : DNS, annuaire, base\n\nQuelle décision est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-022`",
    "reponse_v": "Classer le service prioritaire et documenter ses dépendances",
    "reponse_f1": "Le classer uniquement selon son volume",
    "reponse_f2": "Définir sa priorité après le sinistre",
    "explication": "Le BIA classe selon impacts et dépendances."
  },
  {
    "id": 23,
    "question": "`Mini-TP PRA — ordre de reprise\n\nApplication : plateforme e-commerce\nVolume protégé : 934 Go\nRPO : 55 min\nRTO : 50 min\nMTD : 140 min\nChaîne : DNS → annuaire → base → application\n\nQuel ordre faut-il appliquer ?\n\nRéférence exercice : RESILIENCE-023`",
    "reponse_v": "DNS, annuaire, base, application",
    "reponse_f1": "Application, base, annuaire, DNS",
    "reponse_f2": "Base, application, DNS, annuaire",
    "explication": "Les prérequis doivent être rétablis avant les services dépendants."
  },
  {
    "id": 24,
    "question": "`Mini-TP PRA — test réel\n\nApplication : API partenaires\nVolume protégé : 971 Go\nRPO : 60 min\nRTO : 65 min\nMTD : 170 min\nReprise mesurée : 90 min\nValidation fonctionnelle : réussie\n\nQuel constat retenir ?\n\nRéférence exercice : RESILIENCE-024`",
    "reponse_v": "Le service fonctionne mais le RTO n'est pas respecté",
    "reponse_f1": "Le PRA est conforme car la validation fonctionnelle réussit",
    "reponse_f2": "Le RPO est nécessairement non respecté",
    "explication": "Le respect fonctionnel ne compense pas un dépassement du RTO."
  },
  {
    "id": 25,
    "question": "`Mini-TP PCA/PRA — objectifs\n\nApplication : base clients\nVolume protégé : 1008 Go\nRPO : 5 min\nRTO : 80 min\nMTD : 110 min\n\nQuelle interprétation est exacte ?\n\nRéférence exercice : RESILIENCE-025`",
    "reponse_v": "Perte maximale 5 min, reprise 80 min, interruption tolérée 110 min",
    "reponse_f1": "Reprise 5 min, perte maximale 80 min, interruption tolérée 110 min",
    "reponse_f2": "Perte maximale 5 min, interruption 80 min, reprise 110 min",
    "explication": "RPO, RTO et MTD mesurent respectivement perte de données, délai de reprise et interruption maximale."
  },
  {
    "id": 26,
    "question": "`Mini-TP PRA — sauvegardes\n\nApplication : gestion RH\nVolume protégé : 1045 Go\nRPO : 10 min\nRTO : 95 min\nMTD : 140 min\nSauvegarde toutes les 20 min\n\nQuelle conclusion est correcte ?\n\nRéférence exercice : RESILIENCE-026`",
    "reponse_v": "La fréquence ne garantit pas le RPO",
    "reponse_f1": "La fréquence respecte exactement le RPO",
    "reponse_f2": "Le RPO dépend uniquement du temps de redémarrage",
    "explication": "L'intervalle de capture dépasse l'objectif de perte admissible."
  },
  {
    "id": 27,
    "question": "`Mini-TP PCA — mode dégradé\n\nApplication : système de réservation\nVolume protégé : 1082 Go\nRPO : 15 min\nRTO : 110 min\nMTD : 170 min\nCapacité manuelle maintenue : 70 %\n\nQuel dispositif est principalement mobilisé ?\n\nRéférence exercice : RESILIENCE-027`",
    "reponse_v": "Le PCA",
    "reponse_f1": "Le PRA exclusivement",
    "reponse_f2": "La politique d'archivage",
    "explication": "Le PCA organise la continuité de l'activité pendant l'incident."
  },
  {
    "id": 28,
    "question": "`Mini-TP BIA — criticité\n\nApplication : gestion des identités\nVolume protégé : 1119 Go\nRPO : 20 min\nRTO : 125 min\nMTD : 200 min\nDépendances : DNS, annuaire, base\n\nQuelle décision est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-028`",
    "reponse_v": "Classer le service prioritaire et documenter ses dépendances",
    "reponse_f1": "Le classer uniquement selon son volume",
    "reponse_f2": "Définir sa priorité après le sinistre",
    "explication": "Le BIA classe selon impacts et dépendances."
  },
  {
    "id": 29,
    "question": "`Mini-TP PRA — ordre de reprise\n\nApplication : collecte de télémétrie\nVolume protégé : 1156 Go\nRPO : 25 min\nRTO : 140 min\nMTD : 230 min\nChaîne : DNS → annuaire → base → application\n\nQuel ordre faut-il appliquer ?\n\nRéférence exercice : RESILIENCE-029`",
    "reponse_v": "DNS, annuaire, base, application",
    "reponse_f1": "Application, base, annuaire, DNS",
    "reponse_f2": "Base, application, DNS, annuaire",
    "explication": "Les prérequis doivent être rétablis avant les services dépendants."
  },
  {
    "id": 30,
    "question": "`Mini-TP PRA — test réel\n\nApplication : plateforme de facturation\nVolume protégé : 1193 Go\nRPO : 30 min\nRTO : 155 min\nMTD : 260 min\nReprise mesurée : 180 min\nValidation fonctionnelle : réussie\n\nQuel constat retenir ?\n\nRéférence exercice : RESILIENCE-030`",
    "reponse_v": "Le service fonctionne mais le RTO n'est pas respecté",
    "reponse_f1": "Le PRA est conforme car la validation fonctionnelle réussit",
    "reponse_f2": "Le RPO est nécessairement non respecté",
    "explication": "Le respect fonctionnel ne compense pas un dépassement du RTO."
  },
  {
    "id": 31,
    "question": "`Mini-TP PCA/PRA — objectifs\n\nApplication : paiement instantané\nVolume protégé : 1230 Go\nRPO : 35 min\nRTO : 20 min\nMTD : 50 min\n\nQuelle interprétation est exacte ?\n\nRéférence exercice : RESILIENCE-031`",
    "reponse_v": "Perte maximale 35 min, reprise 20 min, interruption tolérée 50 min",
    "reponse_f1": "Reprise 35 min, perte maximale 20 min, interruption tolérée 50 min",
    "reponse_f2": "Perte maximale 35 min, interruption 20 min, reprise 50 min",
    "explication": "RPO, RTO et MTD mesurent respectivement perte de données, délai de reprise et interruption maximale."
  },
  {
    "id": 32,
    "question": "`Mini-TP PRA — sauvegardes\n\nApplication : portail usager\nVolume protégé : 1267 Go\nRPO : 40 min\nRTO : 35 min\nMTD : 80 min\nSauvegarde toutes les 50 min\n\nQuelle conclusion est correcte ?\n\nRéférence exercice : RESILIENCE-032`",
    "reponse_v": "La fréquence ne garantit pas le RPO",
    "reponse_f1": "La fréquence respecte exactement le RPO",
    "reponse_f2": "Le RPO dépend uniquement du temps de redémarrage",
    "explication": "L'intervalle de capture dépasse l'objectif de perte admissible."
  },
  {
    "id": 33,
    "question": "`Mini-TP PCA — mode dégradé\n\nApplication : ERP financier\nVolume protégé : 1304 Go\nRPO : 45 min\nRTO : 50 min\nMTD : 110 min\nCapacité manuelle maintenue : 60 %\n\nQuel dispositif est principalement mobilisé ?\n\nRéférence exercice : RESILIENCE-033`",
    "reponse_v": "Le PCA",
    "reponse_f1": "Le PRA exclusivement",
    "reponse_f2": "La politique d'archivage",
    "explication": "Le PCA organise la continuité de l'activité pendant l'incident."
  },
  {
    "id": 34,
    "question": "`Mini-TP BIA — criticité\n\nApplication : messagerie sécurisée\nVolume protégé : 1341 Go\nRPO : 50 min\nRTO : 65 min\nMTD : 140 min\nDépendances : DNS, annuaire, base\n\nQuelle décision est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-034`",
    "reponse_v": "Classer le service prioritaire et documenter ses dépendances",
    "reponse_f1": "Le classer uniquement selon son volume",
    "reponse_f2": "Définir sa priorité après le sinistre",
    "explication": "Le BIA classe selon impacts et dépendances."
  },
  {
    "id": 35,
    "question": "`Mini-TP PRA — ordre de reprise\n\nApplication : annuaire d'entreprise\nVolume protégé : 1378 Go\nRPO : 55 min\nRTO : 80 min\nMTD : 170 min\nChaîne : DNS → annuaire → base → application\n\nQuel ordre faut-il appliquer ?\n\nRéférence exercice : RESILIENCE-035`",
    "reponse_v": "DNS, annuaire, base, application",
    "reponse_f1": "Application, base, annuaire, DNS",
    "reponse_f2": "Base, application, DNS, annuaire",
    "explication": "Les prérequis doivent être rétablis avant les services dépendants."
  },
  {
    "id": 36,
    "question": "`Mini-TP PRA — test réel\n\nApplication : supervision réseau\nVolume protégé : 1415 Go\nRPO : 60 min\nRTO : 95 min\nMTD : 200 min\nReprise mesurée : 120 min\nValidation fonctionnelle : réussie\n\nQuel constat retenir ?\n\nRéférence exercice : RESILIENCE-036`",
    "reponse_v": "Le service fonctionne mais le RTO n'est pas respecté",
    "reponse_f1": "Le PRA est conforme car la validation fonctionnelle réussit",
    "reponse_f2": "Le RPO est nécessairement non respecté",
    "explication": "Le respect fonctionnel ne compense pas un dépassement du RTO."
  },
  {
    "id": 37,
    "question": "`Mini-TP PCA/PRA — objectifs\n\nApplication : gestion documentaire\nVolume protégé : 1452 Go\nRPO : 5 min\nRTO : 110 min\nMTD : 140 min\n\nQuelle interprétation est exacte ?\n\nRéférence exercice : RESILIENCE-037`",
    "reponse_v": "Perte maximale 5 min, reprise 110 min, interruption tolérée 140 min",
    "reponse_f1": "Reprise 5 min, perte maximale 110 min, interruption tolérée 140 min",
    "reponse_f2": "Perte maximale 5 min, interruption 110 min, reprise 140 min",
    "explication": "RPO, RTO et MTD mesurent respectivement perte de données, délai de reprise et interruption maximale."
  },
  {
    "id": 38,
    "question": "`Mini-TP PRA — sauvegardes\n\nApplication : plateforme e-commerce\nVolume protégé : 1489 Go\nRPO : 10 min\nRTO : 125 min\nMTD : 170 min\nSauvegarde toutes les 20 min\n\nQuelle conclusion est correcte ?\n\nRéférence exercice : RESILIENCE-038`",
    "reponse_v": "La fréquence ne garantit pas le RPO",
    "reponse_f1": "La fréquence respecte exactement le RPO",
    "reponse_f2": "Le RPO dépend uniquement du temps de redémarrage",
    "explication": "L'intervalle de capture dépasse l'objectif de perte admissible."
  },
  {
    "id": 39,
    "question": "`Mini-TP PCA — mode dégradé\n\nApplication : API partenaires\nVolume protégé : 1526 Go\nRPO : 15 min\nRTO : 140 min\nMTD : 200 min\nCapacité manuelle maintenue : 50 %\n\nQuel dispositif est principalement mobilisé ?\n\nRéférence exercice : RESILIENCE-039`",
    "reponse_v": "Le PCA",
    "reponse_f1": "Le PRA exclusivement",
    "reponse_f2": "La politique d'archivage",
    "explication": "Le PCA organise la continuité de l'activité pendant l'incident."
  },
  {
    "id": 40,
    "question": "`Mini-TP BIA — criticité\n\nApplication : base clients\nVolume protégé : 1563 Go\nRPO : 20 min\nRTO : 155 min\nMTD : 230 min\nDépendances : DNS, annuaire, base\n\nQuelle décision est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-040`",
    "reponse_v": "Classer le service prioritaire et documenter ses dépendances",
    "reponse_f1": "Le classer uniquement selon son volume",
    "reponse_f2": "Définir sa priorité après le sinistre",
    "explication": "Le BIA classe selon impacts et dépendances."
  },
  {
    "id": 41,
    "question": "`Mini-TP PRA — ordre de reprise\n\nApplication : gestion RH\nVolume protégé : 1600 Go\nRPO : 25 min\nRTO : 20 min\nMTD : 110 min\nChaîne : DNS → annuaire → base → application\n\nQuel ordre faut-il appliquer ?\n\nRéférence exercice : RESILIENCE-041`",
    "reponse_v": "DNS, annuaire, base, application",
    "reponse_f1": "Application, base, annuaire, DNS",
    "reponse_f2": "Base, application, DNS, annuaire",
    "explication": "Les prérequis doivent être rétablis avant les services dépendants."
  },
  {
    "id": 42,
    "question": "`Mini-TP PRA — test réel\n\nApplication : système de réservation\nVolume protégé : 1637 Go\nRPO : 30 min\nRTO : 35 min\nMTD : 140 min\nReprise mesurée : 60 min\nValidation fonctionnelle : réussie\n\nQuel constat retenir ?\n\nRéférence exercice : RESILIENCE-042`",
    "reponse_v": "Le service fonctionne mais le RTO n'est pas respecté",
    "reponse_f1": "Le PRA est conforme car la validation fonctionnelle réussit",
    "reponse_f2": "Le RPO est nécessairement non respecté",
    "explication": "Le respect fonctionnel ne compense pas un dépassement du RTO."
  },
  {
    "id": 43,
    "question": "`Mini-TP PCA/PRA — objectifs\n\nApplication : gestion des identités\nVolume protégé : 1674 Go\nRPO : 35 min\nRTO : 50 min\nMTD : 80 min\n\nQuelle interprétation est exacte ?\n\nRéférence exercice : RESILIENCE-043`",
    "reponse_v": "Perte maximale 35 min, reprise 50 min, interruption tolérée 80 min",
    "reponse_f1": "Reprise 35 min, perte maximale 50 min, interruption tolérée 80 min",
    "reponse_f2": "Perte maximale 35 min, interruption 50 min, reprise 80 min",
    "explication": "RPO, RTO et MTD mesurent respectivement perte de données, délai de reprise et interruption maximale."
  },
  {
    "id": 44,
    "question": "`Mini-TP PRA — sauvegardes\n\nApplication : collecte de télémétrie\nVolume protégé : 1711 Go\nRPO : 40 min\nRTO : 65 min\nMTD : 110 min\nSauvegarde toutes les 50 min\n\nQuelle conclusion est correcte ?\n\nRéférence exercice : RESILIENCE-044`",
    "reponse_v": "La fréquence ne garantit pas le RPO",
    "reponse_f1": "La fréquence respecte exactement le RPO",
    "reponse_f2": "Le RPO dépend uniquement du temps de redémarrage",
    "explication": "L'intervalle de capture dépasse l'objectif de perte admissible."
  },
  {
    "id": 45,
    "question": "`Mini-TP PCA — mode dégradé\n\nApplication : plateforme de facturation\nVolume protégé : 1748 Go\nRPO : 45 min\nRTO : 80 min\nMTD : 140 min\nCapacité manuelle maintenue : 40 %\n\nQuel dispositif est principalement mobilisé ?\n\nRéférence exercice : RESILIENCE-045`",
    "reponse_v": "Le PCA",
    "reponse_f1": "Le PRA exclusivement",
    "reponse_f2": "La politique d'archivage",
    "explication": "Le PCA organise la continuité de l'activité pendant l'incident."
  },
  {
    "id": 46,
    "question": "`Mini-TP BIA — criticité\n\nApplication : paiement instantané\nVolume protégé : 1785 Go\nRPO : 50 min\nRTO : 95 min\nMTD : 170 min\nDépendances : DNS, annuaire, base\n\nQuelle décision est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-046`",
    "reponse_v": "Classer le service prioritaire et documenter ses dépendances",
    "reponse_f1": "Le classer uniquement selon son volume",
    "reponse_f2": "Définir sa priorité après le sinistre",
    "explication": "Le BIA classe selon impacts et dépendances."
  },
  {
    "id": 47,
    "question": "`Mini-TP PRA — ordre de reprise\n\nApplication : portail usager\nVolume protégé : 1822 Go\nRPO : 55 min\nRTO : 110 min\nMTD : 200 min\nChaîne : DNS → annuaire → base → application\n\nQuel ordre faut-il appliquer ?\n\nRéférence exercice : RESILIENCE-047`",
    "reponse_v": "DNS, annuaire, base, application",
    "reponse_f1": "Application, base, annuaire, DNS",
    "reponse_f2": "Base, application, DNS, annuaire",
    "explication": "Les prérequis doivent être rétablis avant les services dépendants."
  },
  {
    "id": 48,
    "question": "`Mini-TP PRA — test réel\n\nApplication : ERP financier\nVolume protégé : 1859 Go\nRPO : 60 min\nRTO : 125 min\nMTD : 230 min\nReprise mesurée : 150 min\nValidation fonctionnelle : réussie\n\nQuel constat retenir ?\n\nRéférence exercice : RESILIENCE-048`",
    "reponse_v": "Le service fonctionne mais le RTO n'est pas respecté",
    "reponse_f1": "Le PRA est conforme car la validation fonctionnelle réussit",
    "reponse_f2": "Le RPO est nécessairement non respecté",
    "explication": "Le respect fonctionnel ne compense pas un dépassement du RTO."
  },
  {
    "id": 49,
    "question": "`Mini-TP PCA/PRA — objectifs\n\nApplication : messagerie sécurisée\nVolume protégé : 1896 Go\nRPO : 5 min\nRTO : 140 min\nMTD : 170 min\n\nQuelle interprétation est exacte ?\n\nRéférence exercice : RESILIENCE-049`",
    "reponse_v": "Perte maximale 5 min, reprise 140 min, interruption tolérée 170 min",
    "reponse_f1": "Reprise 5 min, perte maximale 140 min, interruption tolérée 170 min",
    "reponse_f2": "Perte maximale 5 min, interruption 140 min, reprise 170 min",
    "explication": "RPO, RTO et MTD mesurent respectivement perte de données, délai de reprise et interruption maximale."
  },
  {
    "id": 50,
    "question": "`Mini-TP PRA — sauvegardes\n\nApplication : annuaire d'entreprise\nVolume protégé : 1933 Go\nRPO : 10 min\nRTO : 155 min\nMTD : 200 min\nSauvegarde toutes les 20 min\n\nQuelle conclusion est correcte ?\n\nRéférence exercice : RESILIENCE-050`",
    "reponse_v": "La fréquence ne garantit pas le RPO",
    "reponse_f1": "La fréquence respecte exactement le RPO",
    "reponse_f2": "Le RPO dépend uniquement du temps de redémarrage",
    "explication": "L'intervalle de capture dépasse l'objectif de perte admissible."
  },
  {
    "id": 51,
    "question": "`Mini-TP PCA — mode dégradé\n\nApplication : supervision réseau\nVolume protégé : 1970 Go\nRPO : 15 min\nRTO : 20 min\nMTD : 80 min\nCapacité manuelle maintenue : 30 %\n\nQuel dispositif est principalement mobilisé ?\n\nRéférence exercice : RESILIENCE-051`",
    "reponse_v": "Le PCA",
    "reponse_f1": "Le PRA exclusivement",
    "reponse_f2": "La politique d'archivage",
    "explication": "Le PCA organise la continuité de l'activité pendant l'incident."
  },
  {
    "id": 52,
    "question": "`Mini-TP BIA — criticité\n\nApplication : gestion documentaire\nVolume protégé : 2007 Go\nRPO : 20 min\nRTO : 35 min\nMTD : 110 min\nDépendances : DNS, annuaire, base\n\nQuelle décision est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-052`",
    "reponse_v": "Classer le service prioritaire et documenter ses dépendances",
    "reponse_f1": "Le classer uniquement selon son volume",
    "reponse_f2": "Définir sa priorité après le sinistre",
    "explication": "Le BIA classe selon impacts et dépendances."
  },
  {
    "id": 53,
    "question": "`Mini-TP PRA — ordre de reprise\n\nApplication : plateforme e-commerce\nVolume protégé : 2044 Go\nRPO : 25 min\nRTO : 50 min\nMTD : 140 min\nChaîne : DNS → annuaire → base → application\n\nQuel ordre faut-il appliquer ?\n\nRéférence exercice : RESILIENCE-053`",
    "reponse_v": "DNS, annuaire, base, application",
    "reponse_f1": "Application, base, annuaire, DNS",
    "reponse_f2": "Base, application, DNS, annuaire",
    "explication": "Les prérequis doivent être rétablis avant les services dépendants."
  },
  {
    "id": 54,
    "question": "`Mini-TP PRA — test réel\n\nApplication : API partenaires\nVolume protégé : 2081 Go\nRPO : 30 min\nRTO : 65 min\nMTD : 170 min\nReprise mesurée : 90 min\nValidation fonctionnelle : réussie\n\nQuel constat retenir ?\n\nRéférence exercice : RESILIENCE-054`",
    "reponse_v": "Le service fonctionne mais le RTO n'est pas respecté",
    "reponse_f1": "Le PRA est conforme car la validation fonctionnelle réussit",
    "reponse_f2": "Le RPO est nécessairement non respecté",
    "explication": "Le respect fonctionnel ne compense pas un dépassement du RTO."
  },
  {
    "id": 55,
    "question": "`Mini-TP PCA/PRA — objectifs\n\nApplication : base clients\nVolume protégé : 2118 Go\nRPO : 35 min\nRTO : 80 min\nMTD : 110 min\n\nQuelle interprétation est exacte ?\n\nRéférence exercice : RESILIENCE-055`",
    "reponse_v": "Perte maximale 35 min, reprise 80 min, interruption tolérée 110 min",
    "reponse_f1": "Reprise 35 min, perte maximale 80 min, interruption tolérée 110 min",
    "reponse_f2": "Perte maximale 35 min, interruption 80 min, reprise 110 min",
    "explication": "RPO, RTO et MTD mesurent respectivement perte de données, délai de reprise et interruption maximale."
  },
  {
    "id": 56,
    "question": "`Mini-TP PRA — sauvegardes\n\nApplication : gestion RH\nVolume protégé : 2155 Go\nRPO : 40 min\nRTO : 95 min\nMTD : 140 min\nSauvegarde toutes les 50 min\n\nQuelle conclusion est correcte ?\n\nRéférence exercice : RESILIENCE-056`",
    "reponse_v": "La fréquence ne garantit pas le RPO",
    "reponse_f1": "La fréquence respecte exactement le RPO",
    "reponse_f2": "Le RPO dépend uniquement du temps de redémarrage",
    "explication": "L'intervalle de capture dépasse l'objectif de perte admissible."
  },
  {
    "id": 57,
    "question": "`Mini-TP PCA — mode dégradé\n\nApplication : système de réservation\nVolume protégé : 2192 Go\nRPO : 45 min\nRTO : 110 min\nMTD : 170 min\nCapacité manuelle maintenue : 20 %\n\nQuel dispositif est principalement mobilisé ?\n\nRéférence exercice : RESILIENCE-057`",
    "reponse_v": "Le PCA",
    "reponse_f1": "Le PRA exclusivement",
    "reponse_f2": "La politique d'archivage",
    "explication": "Le PCA organise la continuité de l'activité pendant l'incident."
  },
  {
    "id": 58,
    "question": "`Mini-TP BIA — criticité\n\nApplication : gestion des identités\nVolume protégé : 2229 Go\nRPO : 50 min\nRTO : 125 min\nMTD : 200 min\nDépendances : DNS, annuaire, base\n\nQuelle décision est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-058`",
    "reponse_v": "Classer le service prioritaire et documenter ses dépendances",
    "reponse_f1": "Le classer uniquement selon son volume",
    "reponse_f2": "Définir sa priorité après le sinistre",
    "explication": "Le BIA classe selon impacts et dépendances."
  },
  {
    "id": 59,
    "question": "`Mini-TP PRA — ordre de reprise\n\nApplication : collecte de télémétrie\nVolume protégé : 2266 Go\nRPO : 55 min\nRTO : 140 min\nMTD : 230 min\nChaîne : DNS → annuaire → base → application\n\nQuel ordre faut-il appliquer ?\n\nRéférence exercice : RESILIENCE-059`",
    "reponse_v": "DNS, annuaire, base, application",
    "reponse_f1": "Application, base, annuaire, DNS",
    "reponse_f2": "Base, application, DNS, annuaire",
    "explication": "Les prérequis doivent être rétablis avant les services dépendants."
  },
  {
    "id": 60,
    "question": "`Mini-TP PRA — test réel\n\nApplication : plateforme de facturation\nVolume protégé : 2303 Go\nRPO : 60 min\nRTO : 155 min\nMTD : 260 min\nReprise mesurée : 180 min\nValidation fonctionnelle : réussie\n\nQuel constat retenir ?\n\nRéférence exercice : RESILIENCE-060`",
    "reponse_v": "Le service fonctionne mais le RTO n'est pas respecté",
    "reponse_f1": "Le PRA est conforme car la validation fonctionnelle réussit",
    "reponse_f2": "Le RPO est nécessairement non respecté",
    "explication": "Le respect fonctionnel ne compense pas un dépassement du RTO."
  },
  {
    "id": 61,
    "question": "`Mini-TP HA — architecture\n\nService : paiement instantané\nNœuds : 2\nSessions simultanées : 500\nTous les nœuds traitent du trafic.\n\nQuelle architecture est décrite ?\n\nRéférence exercice : RESILIENCE-061`",
    "reponse_v": "Active-active",
    "reponse_f1": "Active-passive",
    "reponse_f2": "Cold standby",
    "explication": "Tous les nœuds actifs servent simultanément."
  },
  {
    "id": 62,
    "question": "`Mini-TP HA — split-brain\n\nService : ERP financier\nNœuds : 3\nSessions simultanées : 613\nPerte du réseau de cluster, stockage partagé encore accessible.\n\nQuelle parade est prioritaire ?\n\nRéférence exercice : RESILIENCE-062`",
    "reponse_v": "Quorum et fencing",
    "reponse_f1": "Round-robin DNS uniquement",
    "reponse_f2": "Compression des logs",
    "explication": "Le quorum et le fencing évitent les doubles maîtres."
  },
  {
    "id": 63,
    "question": "`Mini-TP HA — health check\n\nService : annuaire d'entreprise\nNœuds : 4\nSessions simultanées : 726\nPing OK, HTTP 500 sur un nœud.\n\nQuelle correction appliquer ?\n\nRéférence exercice : RESILIENCE-063`",
    "reponse_v": "Health check applicatif",
    "reponse_f1": "Test ICMP uniquement",
    "reponse_f2": "Aucun contrôle de santé",
    "explication": "Un contrôle applicatif détecte une panne logique."
  },
  {
    "id": 64,
    "question": "`Mini-TP HA — sessions\n\nService : gestion documentaire\nNœuds : 5\nSessions simultanées : 839\nSessions conservées uniquement en mémoire locale.\n\nQuel risque lors d'une bascule ?\n\nRéférence exercice : RESILIENCE-064`",
    "reponse_v": "Perte de session",
    "reponse_f1": "Aucun risque grâce au DNS",
    "reponse_f2": "Reconstruction garantie par le load balancer",
    "explication": "L'état local doit être répliqué ou externalisé."
  },
  {
    "id": 65,
    "question": "`Mini-TP HA — maintenance\n\nService : API partenaires\nNœuds : 6\nSessions simultanées : 952\nCorrectif urgent sans interruption.\n\nQuelle méthode choisir ?\n\nRéférence exercice : RESILIENCE-065`",
    "reponse_v": "Drainage, patch, test puis réintégration progressive",
    "reponse_f1": "Arrêt simultané de tous les nœuds",
    "reponse_f2": "Patch direct du nœud le plus chargé",
    "explication": "La maintenance roulante préserve le service."
  },
  {
    "id": 66,
    "question": "`Mini-TP HA — architecture\n\nService : gestion RH\nNœuds : 2\nSessions simultanées : 1065\nTous les nœuds traitent du trafic.\n\nQuelle architecture est décrite ?\n\nRéférence exercice : RESILIENCE-066`",
    "reponse_v": "Active-active",
    "reponse_f1": "Active-passive",
    "reponse_f2": "Cold standby",
    "explication": "Tous les nœuds actifs servent simultanément."
  },
  {
    "id": 67,
    "question": "`Mini-TP HA — split-brain\n\nService : gestion des identités\nNœuds : 3\nSessions simultanées : 1178\nPerte du réseau de cluster, stockage partagé encore accessible.\n\nQuelle parade est prioritaire ?\n\nRéférence exercice : RESILIENCE-067`",
    "reponse_v": "Quorum et fencing",
    "reponse_f1": "Round-robin DNS uniquement",
    "reponse_f2": "Compression des logs",
    "explication": "Le quorum et le fencing évitent les doubles maîtres."
  },
  {
    "id": 68,
    "question": "`Mini-TP HA — health check\n\nService : plateforme de facturation\nNœuds : 4\nSessions simultanées : 1291\nPing OK, HTTP 500 sur un nœud.\n\nQuelle correction appliquer ?\n\nRéférence exercice : RESILIENCE-068`",
    "reponse_v": "Health check applicatif",
    "reponse_f1": "Test ICMP uniquement",
    "reponse_f2": "Aucun contrôle de santé",
    "explication": "Un contrôle applicatif détecte une panne logique."
  },
  {
    "id": 69,
    "question": "`Mini-TP HA — sessions\n\nService : portail usager\nNœuds : 5\nSessions simultanées : 1404\nSessions conservées uniquement en mémoire locale.\n\nQuel risque lors d'une bascule ?\n\nRéférence exercice : RESILIENCE-069`",
    "reponse_v": "Perte de session",
    "reponse_f1": "Aucun risque grâce au DNS",
    "reponse_f2": "Reconstruction garantie par le load balancer",
    "explication": "L'état local doit être répliqué ou externalisé."
  },
  {
    "id": 70,
    "question": "`Mini-TP HA — maintenance\n\nService : messagerie sécurisée\nNœuds : 6\nSessions simultanées : 1517\nCorrectif urgent sans interruption.\n\nQuelle méthode choisir ?\n\nRéférence exercice : RESILIENCE-070`",
    "reponse_v": "Drainage, patch, test puis réintégration progressive",
    "reponse_f1": "Arrêt simultané de tous les nœuds",
    "reponse_f2": "Patch direct du nœud le plus chargé",
    "explication": "La maintenance roulante préserve le service."
  },
  {
    "id": 71,
    "question": "`Mini-TP HA — architecture\n\nService : supervision réseau\nNœuds : 2\nSessions simultanées : 1630\nTous les nœuds traitent du trafic.\n\nQuelle architecture est décrite ?\n\nRéférence exercice : RESILIENCE-071`",
    "reponse_v": "Active-active",
    "reponse_f1": "Active-passive",
    "reponse_f2": "Cold standby",
    "explication": "Tous les nœuds actifs servent simultanément."
  },
  {
    "id": 72,
    "question": "`Mini-TP HA — split-brain\n\nService : plateforme e-commerce\nNœuds : 3\nSessions simultanées : 1743\nPerte du réseau de cluster, stockage partagé encore accessible.\n\nQuelle parade est prioritaire ?\n\nRéférence exercice : RESILIENCE-072`",
    "reponse_v": "Quorum et fencing",
    "reponse_f1": "Round-robin DNS uniquement",
    "reponse_f2": "Compression des logs",
    "explication": "Le quorum et le fencing évitent les doubles maîtres."
  },
  {
    "id": 73,
    "question": "`Mini-TP HA — health check\n\nService : base clients\nNœuds : 4\nSessions simultanées : 1856\nPing OK, HTTP 500 sur un nœud.\n\nQuelle correction appliquer ?\n\nRéférence exercice : RESILIENCE-073`",
    "reponse_v": "Health check applicatif",
    "reponse_f1": "Test ICMP uniquement",
    "reponse_f2": "Aucun contrôle de santé",
    "explication": "Un contrôle applicatif détecte une panne logique."
  },
  {
    "id": 74,
    "question": "`Mini-TP HA — sessions\n\nService : système de réservation\nNœuds : 5\nSessions simultanées : 1969\nSessions conservées uniquement en mémoire locale.\n\nQuel risque lors d'une bascule ?\n\nRéférence exercice : RESILIENCE-074`",
    "reponse_v": "Perte de session",
    "reponse_f1": "Aucun risque grâce au DNS",
    "reponse_f2": "Reconstruction garantie par le load balancer",
    "explication": "L'état local doit être répliqué ou externalisé."
  },
  {
    "id": 75,
    "question": "`Mini-TP HA — maintenance\n\nService : collecte de télémétrie\nNœuds : 6\nSessions simultanées : 2082\nCorrectif urgent sans interruption.\n\nQuelle méthode choisir ?\n\nRéférence exercice : RESILIENCE-075`",
    "reponse_v": "Drainage, patch, test puis réintégration progressive",
    "reponse_f1": "Arrêt simultané de tous les nœuds",
    "reponse_f2": "Patch direct du nœud le plus chargé",
    "explication": "La maintenance roulante préserve le service."
  },
  {
    "id": 76,
    "question": "`Mini-TP HA — architecture\n\nService : paiement instantané\nNœuds : 2\nSessions simultanées : 2195\nTous les nœuds traitent du trafic.\n\nQuelle architecture est décrite ?\n\nRéférence exercice : RESILIENCE-076`",
    "reponse_v": "Active-active",
    "reponse_f1": "Active-passive",
    "reponse_f2": "Cold standby",
    "explication": "Tous les nœuds actifs servent simultanément."
  },
  {
    "id": 77,
    "question": "`Mini-TP HA — split-brain\n\nService : ERP financier\nNœuds : 3\nSessions simultanées : 2308\nPerte du réseau de cluster, stockage partagé encore accessible.\n\nQuelle parade est prioritaire ?\n\nRéférence exercice : RESILIENCE-077`",
    "reponse_v": "Quorum et fencing",
    "reponse_f1": "Round-robin DNS uniquement",
    "reponse_f2": "Compression des logs",
    "explication": "Le quorum et le fencing évitent les doubles maîtres."
  },
  {
    "id": 78,
    "question": "`Mini-TP HA — health check\n\nService : annuaire d'entreprise\nNœuds : 4\nSessions simultanées : 2421\nPing OK, HTTP 500 sur un nœud.\n\nQuelle correction appliquer ?\n\nRéférence exercice : RESILIENCE-078`",
    "reponse_v": "Health check applicatif",
    "reponse_f1": "Test ICMP uniquement",
    "reponse_f2": "Aucun contrôle de santé",
    "explication": "Un contrôle applicatif détecte une panne logique."
  },
  {
    "id": 79,
    "question": "`Mini-TP HA — sessions\n\nService : gestion documentaire\nNœuds : 5\nSessions simultanées : 2534\nSessions conservées uniquement en mémoire locale.\n\nQuel risque lors d'une bascule ?\n\nRéférence exercice : RESILIENCE-079`",
    "reponse_v": "Perte de session",
    "reponse_f1": "Aucun risque grâce au DNS",
    "reponse_f2": "Reconstruction garantie par le load balancer",
    "explication": "L'état local doit être répliqué ou externalisé."
  },
  {
    "id": 80,
    "question": "`Mini-TP HA — maintenance\n\nService : API partenaires\nNœuds : 6\nSessions simultanées : 2647\nCorrectif urgent sans interruption.\n\nQuelle méthode choisir ?\n\nRéférence exercice : RESILIENCE-080`",
    "reponse_v": "Drainage, patch, test puis réintégration progressive",
    "reponse_f1": "Arrêt simultané de tous les nœuds",
    "reponse_f2": "Patch direct du nœud le plus chargé",
    "explication": "La maintenance roulante préserve le service."
  },
  {
    "id": 81,
    "question": "`Mini-TP HA — architecture\n\nService : gestion RH\nNœuds : 2\nSessions simultanées : 2760\nTous les nœuds traitent du trafic.\n\nQuelle architecture est décrite ?\n\nRéférence exercice : RESILIENCE-081`",
    "reponse_v": "Active-active",
    "reponse_f1": "Active-passive",
    "reponse_f2": "Cold standby",
    "explication": "Tous les nœuds actifs servent simultanément."
  },
  {
    "id": 82,
    "question": "`Mini-TP HA — split-brain\n\nService : gestion des identités\nNœuds : 3\nSessions simultanées : 2873\nPerte du réseau de cluster, stockage partagé encore accessible.\n\nQuelle parade est prioritaire ?\n\nRéférence exercice : RESILIENCE-082`",
    "reponse_v": "Quorum et fencing",
    "reponse_f1": "Round-robin DNS uniquement",
    "reponse_f2": "Compression des logs",
    "explication": "Le quorum et le fencing évitent les doubles maîtres."
  },
  {
    "id": 83,
    "question": "`Mini-TP HA — health check\n\nService : plateforme de facturation\nNœuds : 4\nSessions simultanées : 2986\nPing OK, HTTP 500 sur un nœud.\n\nQuelle correction appliquer ?\n\nRéférence exercice : RESILIENCE-083`",
    "reponse_v": "Health check applicatif",
    "reponse_f1": "Test ICMP uniquement",
    "reponse_f2": "Aucun contrôle de santé",
    "explication": "Un contrôle applicatif détecte une panne logique."
  },
  {
    "id": 84,
    "question": "`Mini-TP HA — sessions\n\nService : portail usager\nNœuds : 5\nSessions simultanées : 3099\nSessions conservées uniquement en mémoire locale.\n\nQuel risque lors d'une bascule ?\n\nRéférence exercice : RESILIENCE-084`",
    "reponse_v": "Perte de session",
    "reponse_f1": "Aucun risque grâce au DNS",
    "reponse_f2": "Reconstruction garantie par le load balancer",
    "explication": "L'état local doit être répliqué ou externalisé."
  },
  {
    "id": 85,
    "question": "`Mini-TP HA — maintenance\n\nService : messagerie sécurisée\nNœuds : 6\nSessions simultanées : 3212\nCorrectif urgent sans interruption.\n\nQuelle méthode choisir ?\n\nRéférence exercice : RESILIENCE-085`",
    "reponse_v": "Drainage, patch, test puis réintégration progressive",
    "reponse_f1": "Arrêt simultané de tous les nœuds",
    "reponse_f2": "Patch direct du nœud le plus chargé",
    "explication": "La maintenance roulante préserve le service."
  },
  {
    "id": 86,
    "question": "`Mini-TP HA — architecture\n\nService : supervision réseau\nNœuds : 2\nSessions simultanées : 3325\nTous les nœuds traitent du trafic.\n\nQuelle architecture est décrite ?\n\nRéférence exercice : RESILIENCE-086`",
    "reponse_v": "Active-active",
    "reponse_f1": "Active-passive",
    "reponse_f2": "Cold standby",
    "explication": "Tous les nœuds actifs servent simultanément."
  },
  {
    "id": 87,
    "question": "`Mini-TP HA — split-brain\n\nService : plateforme e-commerce\nNœuds : 3\nSessions simultanées : 3438\nPerte du réseau de cluster, stockage partagé encore accessible.\n\nQuelle parade est prioritaire ?\n\nRéférence exercice : RESILIENCE-087`",
    "reponse_v": "Quorum et fencing",
    "reponse_f1": "Round-robin DNS uniquement",
    "reponse_f2": "Compression des logs",
    "explication": "Le quorum et le fencing évitent les doubles maîtres."
  },
  {
    "id": 88,
    "question": "`Mini-TP HA — health check\n\nService : base clients\nNœuds : 4\nSessions simultanées : 3551\nPing OK, HTTP 500 sur un nœud.\n\nQuelle correction appliquer ?\n\nRéférence exercice : RESILIENCE-088`",
    "reponse_v": "Health check applicatif",
    "reponse_f1": "Test ICMP uniquement",
    "reponse_f2": "Aucun contrôle de santé",
    "explication": "Un contrôle applicatif détecte une panne logique."
  },
  {
    "id": 89,
    "question": "`Mini-TP HA — sessions\n\nService : système de réservation\nNœuds : 5\nSessions simultanées : 3664\nSessions conservées uniquement en mémoire locale.\n\nQuel risque lors d'une bascule ?\n\nRéférence exercice : RESILIENCE-089`",
    "reponse_v": "Perte de session",
    "reponse_f1": "Aucun risque grâce au DNS",
    "reponse_f2": "Reconstruction garantie par le load balancer",
    "explication": "L'état local doit être répliqué ou externalisé."
  },
  {
    "id": 90,
    "question": "`Mini-TP HA — maintenance\n\nService : collecte de télémétrie\nNœuds : 6\nSessions simultanées : 3777\nCorrectif urgent sans interruption.\n\nQuelle méthode choisir ?\n\nRéférence exercice : RESILIENCE-090`",
    "reponse_v": "Drainage, patch, test puis réintégration progressive",
    "reponse_f1": "Arrêt simultané de tous les nœuds",
    "reponse_f2": "Patch direct du nœud le plus chargé",
    "explication": "La maintenance roulante préserve le service."
  },
  {
    "id": 91,
    "question": "`Mini-TP HA — architecture\n\nService : paiement instantané\nNœuds : 2\nSessions simultanées : 3890\nTous les nœuds traitent du trafic.\n\nQuelle architecture est décrite ?\n\nRéférence exercice : RESILIENCE-091`",
    "reponse_v": "Active-active",
    "reponse_f1": "Active-passive",
    "reponse_f2": "Cold standby",
    "explication": "Tous les nœuds actifs servent simultanément."
  },
  {
    "id": 92,
    "question": "`Mini-TP HA — split-brain\n\nService : ERP financier\nNœuds : 3\nSessions simultanées : 4003\nPerte du réseau de cluster, stockage partagé encore accessible.\n\nQuelle parade est prioritaire ?\n\nRéférence exercice : RESILIENCE-092`",
    "reponse_v": "Quorum et fencing",
    "reponse_f1": "Round-robin DNS uniquement",
    "reponse_f2": "Compression des logs",
    "explication": "Le quorum et le fencing évitent les doubles maîtres."
  },
  {
    "id": 93,
    "question": "`Mini-TP HA — health check\n\nService : annuaire d'entreprise\nNœuds : 4\nSessions simultanées : 4116\nPing OK, HTTP 500 sur un nœud.\n\nQuelle correction appliquer ?\n\nRéférence exercice : RESILIENCE-093`",
    "reponse_v": "Health check applicatif",
    "reponse_f1": "Test ICMP uniquement",
    "reponse_f2": "Aucun contrôle de santé",
    "explication": "Un contrôle applicatif détecte une panne logique."
  },
  {
    "id": 94,
    "question": "`Mini-TP HA — sessions\n\nService : gestion documentaire\nNœuds : 5\nSessions simultanées : 4229\nSessions conservées uniquement en mémoire locale.\n\nQuel risque lors d'une bascule ?\n\nRéférence exercice : RESILIENCE-094`",
    "reponse_v": "Perte de session",
    "reponse_f1": "Aucun risque grâce au DNS",
    "reponse_f2": "Reconstruction garantie par le load balancer",
    "explication": "L'état local doit être répliqué ou externalisé."
  },
  {
    "id": 95,
    "question": "`Mini-TP HA — maintenance\n\nService : API partenaires\nNœuds : 6\nSessions simultanées : 4342\nCorrectif urgent sans interruption.\n\nQuelle méthode choisir ?\n\nRéférence exercice : RESILIENCE-095`",
    "reponse_v": "Drainage, patch, test puis réintégration progressive",
    "reponse_f1": "Arrêt simultané de tous les nœuds",
    "reponse_f2": "Patch direct du nœud le plus chargé",
    "explication": "La maintenance roulante préserve le service."
  },
  {
    "id": 96,
    "question": "`Mini-TP HA — architecture\n\nService : gestion RH\nNœuds : 2\nSessions simultanées : 4455\nTous les nœuds traitent du trafic.\n\nQuelle architecture est décrite ?\n\nRéférence exercice : RESILIENCE-096`",
    "reponse_v": "Active-active",
    "reponse_f1": "Active-passive",
    "reponse_f2": "Cold standby",
    "explication": "Tous les nœuds actifs servent simultanément."
  },
  {
    "id": 97,
    "question": "`Mini-TP HA — split-brain\n\nService : gestion des identités\nNœuds : 3\nSessions simultanées : 4568\nPerte du réseau de cluster, stockage partagé encore accessible.\n\nQuelle parade est prioritaire ?\n\nRéférence exercice : RESILIENCE-097`",
    "reponse_v": "Quorum et fencing",
    "reponse_f1": "Round-robin DNS uniquement",
    "reponse_f2": "Compression des logs",
    "explication": "Le quorum et le fencing évitent les doubles maîtres."
  },
  {
    "id": 98,
    "question": "`Mini-TP HA — health check\n\nService : plateforme de facturation\nNœuds : 4\nSessions simultanées : 4681\nPing OK, HTTP 500 sur un nœud.\n\nQuelle correction appliquer ?\n\nRéférence exercice : RESILIENCE-098`",
    "reponse_v": "Health check applicatif",
    "reponse_f1": "Test ICMP uniquement",
    "reponse_f2": "Aucun contrôle de santé",
    "explication": "Un contrôle applicatif détecte une panne logique."
  },
  {
    "id": 99,
    "question": "`Mini-TP HA — sessions\n\nService : portail usager\nNœuds : 5\nSessions simultanées : 4794\nSessions conservées uniquement en mémoire locale.\n\nQuel risque lors d'une bascule ?\n\nRéférence exercice : RESILIENCE-099`",
    "reponse_v": "Perte de session",
    "reponse_f1": "Aucun risque grâce au DNS",
    "reponse_f2": "Reconstruction garantie par le load balancer",
    "explication": "L'état local doit être répliqué ou externalisé."
  },
  {
    "id": 100,
    "question": "`Mini-TP HA — maintenance\n\nService : messagerie sécurisée\nNœuds : 6\nSessions simultanées : 4907\nCorrectif urgent sans interruption.\n\nQuelle méthode choisir ?\n\nRéférence exercice : RESILIENCE-100`",
    "reponse_v": "Drainage, patch, test puis réintégration progressive",
    "reponse_f1": "Arrêt simultané de tous les nœuds",
    "reponse_f2": "Patch direct du nœud le plus chargé",
    "explication": "La maintenance roulante préserve le service."
  },
  {
    "id": 101,
    "question": "`Mini-TP HA — architecture\n\nService : supervision réseau\nNœuds : 2\nSessions simultanées : 5020\nTous les nœuds traitent du trafic.\n\nQuelle architecture est décrite ?\n\nRéférence exercice : RESILIENCE-101`",
    "reponse_v": "Active-active",
    "reponse_f1": "Active-passive",
    "reponse_f2": "Cold standby",
    "explication": "Tous les nœuds actifs servent simultanément."
  },
  {
    "id": 102,
    "question": "`Mini-TP HA — split-brain\n\nService : plateforme e-commerce\nNœuds : 3\nSessions simultanées : 5133\nPerte du réseau de cluster, stockage partagé encore accessible.\n\nQuelle parade est prioritaire ?\n\nRéférence exercice : RESILIENCE-102`",
    "reponse_v": "Quorum et fencing",
    "reponse_f1": "Round-robin DNS uniquement",
    "reponse_f2": "Compression des logs",
    "explication": "Le quorum et le fencing évitent les doubles maîtres."
  },
  {
    "id": 103,
    "question": "`Mini-TP HA — health check\n\nService : base clients\nNœuds : 4\nSessions simultanées : 5246\nPing OK, HTTP 500 sur un nœud.\n\nQuelle correction appliquer ?\n\nRéférence exercice : RESILIENCE-103`",
    "reponse_v": "Health check applicatif",
    "reponse_f1": "Test ICMP uniquement",
    "reponse_f2": "Aucun contrôle de santé",
    "explication": "Un contrôle applicatif détecte une panne logique."
  },
  {
    "id": 104,
    "question": "`Mini-TP HA — sessions\n\nService : système de réservation\nNœuds : 5\nSessions simultanées : 5359\nSessions conservées uniquement en mémoire locale.\n\nQuel risque lors d'une bascule ?\n\nRéférence exercice : RESILIENCE-104`",
    "reponse_v": "Perte de session",
    "reponse_f1": "Aucun risque grâce au DNS",
    "reponse_f2": "Reconstruction garantie par le load balancer",
    "explication": "L'état local doit être répliqué ou externalisé."
  },
  {
    "id": 105,
    "question": "`Mini-TP HA — maintenance\n\nService : collecte de télémétrie\nNœuds : 6\nSessions simultanées : 5472\nCorrectif urgent sans interruption.\n\nQuelle méthode choisir ?\n\nRéférence exercice : RESILIENCE-105`",
    "reponse_v": "Drainage, patch, test puis réintégration progressive",
    "reponse_f1": "Arrêt simultané de tous les nœuds",
    "reponse_f2": "Patch direct du nœud le plus chargé",
    "explication": "La maintenance roulante préserve le service."
  },
  {
    "id": 106,
    "question": "`Mini-TP HA — architecture\n\nService : paiement instantané\nNœuds : 2\nSessions simultanées : 5585\nTous les nœuds traitent du trafic.\n\nQuelle architecture est décrite ?\n\nRéférence exercice : RESILIENCE-106`",
    "reponse_v": "Active-active",
    "reponse_f1": "Active-passive",
    "reponse_f2": "Cold standby",
    "explication": "Tous les nœuds actifs servent simultanément."
  },
  {
    "id": 107,
    "question": "`Mini-TP HA — split-brain\n\nService : ERP financier\nNœuds : 3\nSessions simultanées : 5698\nPerte du réseau de cluster, stockage partagé encore accessible.\n\nQuelle parade est prioritaire ?\n\nRéférence exercice : RESILIENCE-107`",
    "reponse_v": "Quorum et fencing",
    "reponse_f1": "Round-robin DNS uniquement",
    "reponse_f2": "Compression des logs",
    "explication": "Le quorum et le fencing évitent les doubles maîtres."
  },
  {
    "id": 108,
    "question": "`Mini-TP HA — health check\n\nService : annuaire d'entreprise\nNœuds : 4\nSessions simultanées : 5811\nPing OK, HTTP 500 sur un nœud.\n\nQuelle correction appliquer ?\n\nRéférence exercice : RESILIENCE-108`",
    "reponse_v": "Health check applicatif",
    "reponse_f1": "Test ICMP uniquement",
    "reponse_f2": "Aucun contrôle de santé",
    "explication": "Un contrôle applicatif détecte une panne logique."
  },
  {
    "id": 109,
    "question": "`Mini-TP HA — sessions\n\nService : gestion documentaire\nNœuds : 5\nSessions simultanées : 5924\nSessions conservées uniquement en mémoire locale.\n\nQuel risque lors d'une bascule ?\n\nRéférence exercice : RESILIENCE-109`",
    "reponse_v": "Perte de session",
    "reponse_f1": "Aucun risque grâce au DNS",
    "reponse_f2": "Reconstruction garantie par le load balancer",
    "explication": "L'état local doit être répliqué ou externalisé."
  },
  {
    "id": 110,
    "question": "`Mini-TP HA — maintenance\n\nService : API partenaires\nNœuds : 6\nSessions simultanées : 6037\nCorrectif urgent sans interruption.\n\nQuelle méthode choisir ?\n\nRéférence exercice : RESILIENCE-110`",
    "reponse_v": "Drainage, patch, test puis réintégration progressive",
    "reponse_f1": "Arrêt simultané de tous les nœuds",
    "reponse_f2": "Patch direct du nœud le plus chargé",
    "explication": "La maintenance roulante préserve le service."
  },
  {
    "id": 111,
    "question": "`Mini-TP multisite — réplication synchrone\n\nSite A : Nantes\nSite B : Toulouse\nRTT : 3 ms\nÉcritures/minute : 800\n\nQuel compromis principal ?\n\nRéférence exercice : RESILIENCE-111`",
    "reponse_v": "RPO proche de zéro mais latence d'écriture accrue",
    "reponse_f1": "RPO élevé avec latence toujours plus faible",
    "reponse_f2": "Aucun impact de la RTT",
    "explication": "L'acquittement distant augmente la latence."
  },
  {
    "id": 112,
    "question": "`Mini-TP multisite — réplication asynchrone\n\nSite A : Paris\nSite B : Bordeaux\nRTT : 4 ms\nÉcritures/minute : 841\nRetard moyen : 3 s\n\nQuelle perte est plausible ?\n\nRéférence exercice : RESILIENCE-112`",
    "reponse_v": "Environ les 3 dernières secondes non répliquées",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Exactement 30 minutes",
    "explication": "Le retard de réplication matérialise le RPO potentiel."
  },
  {
    "id": 113,
    "question": "`Mini-TP multisite — bascule DNS\n\nSite A : Lyon\nSite B : Lille\nRTT : 5 ms\nÉcritures/minute : 882\nTTL : 90 s\nSite A indisponible.\n\nQuelle conséquence ?\n\nRéférence exercice : RESILIENCE-113`",
    "reponse_v": "Des clients peuvent conserver l'ancienne adresse jusqu'à expiration",
    "reponse_f1": "Tous les clients basculent immédiatement",
    "reponse_f2": "Le TTL ne concerne jamais les caches",
    "explication": "Les caches DNS retardent parfois la bascule."
  },
  {
    "id": 114,
    "question": "`Mini-TP multisite — active-active\n\nSite A : Marseille\nSite B : Strasbourg\nRTT : 6 ms\nÉcritures/minute : 923\nLes deux sites écrivent sur la même donnée pendant une coupure.\n\nQuel risque ?\n\nRéférence exercice : RESILIENCE-114`",
    "reponse_v": "Conflits d'écriture et divergence",
    "reponse_f1": "Suppression automatique de la réplication",
    "reponse_f2": "Absence garantie de split-brain",
    "explication": "L'active-active impose une stratégie de résolution."
  },
  {
    "id": 115,
    "question": "`Mini-TP multisite — routage global\n\nSite A : Toulouse\nSite B : Rennes\nRTT : 7 ms\nÉcritures/minute : 964\nSondes HTTP disponibles.\n\nQuelle solution ?\n\nRéférence exercice : RESILIENCE-115`",
    "reponse_v": "GSLB avec sondes de santé",
    "reponse_f1": "Route statique unique",
    "reponse_f2": "VLAN étendu sans sonde",
    "explication": "Le GSLB combine proximité et disponibilité."
  },
  {
    "id": 116,
    "question": "`Mini-TP multisite — réplication synchrone\n\nSite A : Bordeaux\nSite B : Orléans\nRTT : 8 ms\nÉcritures/minute : 1005\n\nQuel compromis principal ?\n\nRéférence exercice : RESILIENCE-116`",
    "reponse_v": "RPO proche de zéro mais latence d'écriture accrue",
    "reponse_f1": "RPO élevé avec latence toujours plus faible",
    "reponse_f2": "Aucun impact de la RTT",
    "explication": "L'acquittement distant augmente la latence."
  },
  {
    "id": 117,
    "question": "`Mini-TP multisite — réplication asynchrone\n\nSite A : Lille\nSite B : Nantes\nRTT : 9 ms\nÉcritures/minute : 1046\nRetard moyen : 8 s\n\nQuelle perte est plausible ?\n\nRéférence exercice : RESILIENCE-117`",
    "reponse_v": "Environ les 8 dernières secondes non répliquées",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Exactement 80 minutes",
    "explication": "Le retard de réplication matérialise le RPO potentiel."
  },
  {
    "id": 118,
    "question": "`Mini-TP multisite — bascule DNS\n\nSite A : Strasbourg\nSite B : Paris\nRTT : 10 ms\nÉcritures/minute : 1087\nTTL : 240 s\nSite A indisponible.\n\nQuelle conséquence ?\n\nRéférence exercice : RESILIENCE-118`",
    "reponse_v": "Des clients peuvent conserver l'ancienne adresse jusqu'à expiration",
    "reponse_f1": "Tous les clients basculent immédiatement",
    "reponse_f2": "Le TTL ne concerne jamais les caches",
    "explication": "Les caches DNS retardent parfois la bascule."
  },
  {
    "id": 119,
    "question": "`Mini-TP multisite — active-active\n\nSite A : Rennes\nSite B : Lyon\nRTT : 11 ms\nÉcritures/minute : 1128\nLes deux sites écrivent sur la même donnée pendant une coupure.\n\nQuel risque ?\n\nRéférence exercice : RESILIENCE-119`",
    "reponse_v": "Conflits d'écriture et divergence",
    "reponse_f1": "Suppression automatique de la réplication",
    "reponse_f2": "Absence garantie de split-brain",
    "explication": "L'active-active impose une stratégie de résolution."
  },
  {
    "id": 120,
    "question": "`Mini-TP multisite — routage global\n\nSite A : Orléans\nSite B : Marseille\nRTT : 12 ms\nÉcritures/minute : 1169\nSondes HTTP disponibles.\n\nQuelle solution ?\n\nRéférence exercice : RESILIENCE-120`",
    "reponse_v": "GSLB avec sondes de santé",
    "reponse_f1": "Route statique unique",
    "reponse_f2": "VLAN étendu sans sonde",
    "explication": "Le GSLB combine proximité et disponibilité."
  },
  {
    "id": 121,
    "question": "`Mini-TP multisite — réplication synchrone\n\nSite A : Nantes\nSite B : Toulouse\nRTT : 13 ms\nÉcritures/minute : 1210\n\nQuel compromis principal ?\n\nRéférence exercice : RESILIENCE-121`",
    "reponse_v": "RPO proche de zéro mais latence d'écriture accrue",
    "reponse_f1": "RPO élevé avec latence toujours plus faible",
    "reponse_f2": "Aucun impact de la RTT",
    "explication": "L'acquittement distant augmente la latence."
  },
  {
    "id": 122,
    "question": "`Mini-TP multisite — réplication asynchrone\n\nSite A : Paris\nSite B : Bordeaux\nRTT : 14 ms\nÉcritures/minute : 1251\nRetard moyen : 13 s\n\nQuelle perte est plausible ?\n\nRéférence exercice : RESILIENCE-122`",
    "reponse_v": "Environ les 13 dernières secondes non répliquées",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Exactement 130 minutes",
    "explication": "Le retard de réplication matérialise le RPO potentiel."
  },
  {
    "id": 123,
    "question": "`Mini-TP multisite — bascule DNS\n\nSite A : Lyon\nSite B : Lille\nRTT : 15 ms\nÉcritures/minute : 1292\nTTL : 390 s\nSite A indisponible.\n\nQuelle conséquence ?\n\nRéférence exercice : RESILIENCE-123`",
    "reponse_v": "Des clients peuvent conserver l'ancienne adresse jusqu'à expiration",
    "reponse_f1": "Tous les clients basculent immédiatement",
    "reponse_f2": "Le TTL ne concerne jamais les caches",
    "explication": "Les caches DNS retardent parfois la bascule."
  },
  {
    "id": 124,
    "question": "`Mini-TP multisite — active-active\n\nSite A : Marseille\nSite B : Strasbourg\nRTT : 16 ms\nÉcritures/minute : 1333\nLes deux sites écrivent sur la même donnée pendant une coupure.\n\nQuel risque ?\n\nRéférence exercice : RESILIENCE-124`",
    "reponse_v": "Conflits d'écriture et divergence",
    "reponse_f1": "Suppression automatique de la réplication",
    "reponse_f2": "Absence garantie de split-brain",
    "explication": "L'active-active impose une stratégie de résolution."
  },
  {
    "id": 125,
    "question": "`Mini-TP multisite — routage global\n\nSite A : Toulouse\nSite B : Rennes\nRTT : 17 ms\nÉcritures/minute : 1374\nSondes HTTP disponibles.\n\nQuelle solution ?\n\nRéférence exercice : RESILIENCE-125`",
    "reponse_v": "GSLB avec sondes de santé",
    "reponse_f1": "Route statique unique",
    "reponse_f2": "VLAN étendu sans sonde",
    "explication": "Le GSLB combine proximité et disponibilité."
  },
  {
    "id": 126,
    "question": "`Mini-TP multisite — réplication synchrone\n\nSite A : Bordeaux\nSite B : Orléans\nRTT : 18 ms\nÉcritures/minute : 1415\n\nQuel compromis principal ?\n\nRéférence exercice : RESILIENCE-126`",
    "reponse_v": "RPO proche de zéro mais latence d'écriture accrue",
    "reponse_f1": "RPO élevé avec latence toujours plus faible",
    "reponse_f2": "Aucun impact de la RTT",
    "explication": "L'acquittement distant augmente la latence."
  },
  {
    "id": 127,
    "question": "`Mini-TP multisite — réplication asynchrone\n\nSite A : Lille\nSite B : Nantes\nRTT : 19 ms\nÉcritures/minute : 1456\nRetard moyen : 18 s\n\nQuelle perte est plausible ?\n\nRéférence exercice : RESILIENCE-127`",
    "reponse_v": "Environ les 18 dernières secondes non répliquées",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Exactement 180 minutes",
    "explication": "Le retard de réplication matérialise le RPO potentiel."
  },
  {
    "id": 128,
    "question": "`Mini-TP multisite — bascule DNS\n\nSite A : Strasbourg\nSite B : Paris\nRTT : 20 ms\nÉcritures/minute : 1497\nTTL : 540 s\nSite A indisponible.\n\nQuelle conséquence ?\n\nRéférence exercice : RESILIENCE-128`",
    "reponse_v": "Des clients peuvent conserver l'ancienne adresse jusqu'à expiration",
    "reponse_f1": "Tous les clients basculent immédiatement",
    "reponse_f2": "Le TTL ne concerne jamais les caches",
    "explication": "Les caches DNS retardent parfois la bascule."
  },
  {
    "id": 129,
    "question": "`Mini-TP multisite — active-active\n\nSite A : Rennes\nSite B : Lyon\nRTT : 21 ms\nÉcritures/minute : 1538\nLes deux sites écrivent sur la même donnée pendant une coupure.\n\nQuel risque ?\n\nRéférence exercice : RESILIENCE-129`",
    "reponse_v": "Conflits d'écriture et divergence",
    "reponse_f1": "Suppression automatique de la réplication",
    "reponse_f2": "Absence garantie de split-brain",
    "explication": "L'active-active impose une stratégie de résolution."
  },
  {
    "id": 130,
    "question": "`Mini-TP multisite — routage global\n\nSite A : Orléans\nSite B : Marseille\nRTT : 22 ms\nÉcritures/minute : 1579\nSondes HTTP disponibles.\n\nQuelle solution ?\n\nRéférence exercice : RESILIENCE-130`",
    "reponse_v": "GSLB avec sondes de santé",
    "reponse_f1": "Route statique unique",
    "reponse_f2": "VLAN étendu sans sonde",
    "explication": "Le GSLB combine proximité et disponibilité."
  },
  {
    "id": 131,
    "question": "`Mini-TP multisite — réplication synchrone\n\nSite A : Nantes\nSite B : Toulouse\nRTT : 23 ms\nÉcritures/minute : 1620\n\nQuel compromis principal ?\n\nRéférence exercice : RESILIENCE-131`",
    "reponse_v": "RPO proche de zéro mais latence d'écriture accrue",
    "reponse_f1": "RPO élevé avec latence toujours plus faible",
    "reponse_f2": "Aucun impact de la RTT",
    "explication": "L'acquittement distant augmente la latence."
  },
  {
    "id": 132,
    "question": "`Mini-TP multisite — réplication asynchrone\n\nSite A : Paris\nSite B : Bordeaux\nRTT : 24 ms\nÉcritures/minute : 1661\nRetard moyen : 3 s\n\nQuelle perte est plausible ?\n\nRéférence exercice : RESILIENCE-132`",
    "reponse_v": "Environ les 3 dernières secondes non répliquées",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Exactement 30 minutes",
    "explication": "Le retard de réplication matérialise le RPO potentiel."
  },
  {
    "id": 133,
    "question": "`Mini-TP multisite — bascule DNS\n\nSite A : Lyon\nSite B : Lille\nRTT : 25 ms\nÉcritures/minute : 1702\nTTL : 690 s\nSite A indisponible.\n\nQuelle conséquence ?\n\nRéférence exercice : RESILIENCE-133`",
    "reponse_v": "Des clients peuvent conserver l'ancienne adresse jusqu'à expiration",
    "reponse_f1": "Tous les clients basculent immédiatement",
    "reponse_f2": "Le TTL ne concerne jamais les caches",
    "explication": "Les caches DNS retardent parfois la bascule."
  },
  {
    "id": 134,
    "question": "`Mini-TP multisite — active-active\n\nSite A : Marseille\nSite B : Strasbourg\nRTT : 26 ms\nÉcritures/minute : 1743\nLes deux sites écrivent sur la même donnée pendant une coupure.\n\nQuel risque ?\n\nRéférence exercice : RESILIENCE-134`",
    "reponse_v": "Conflits d'écriture et divergence",
    "reponse_f1": "Suppression automatique de la réplication",
    "reponse_f2": "Absence garantie de split-brain",
    "explication": "L'active-active impose une stratégie de résolution."
  },
  {
    "id": 135,
    "question": "`Mini-TP multisite — routage global\n\nSite A : Toulouse\nSite B : Rennes\nRTT : 27 ms\nÉcritures/minute : 1784\nSondes HTTP disponibles.\n\nQuelle solution ?\n\nRéférence exercice : RESILIENCE-135`",
    "reponse_v": "GSLB avec sondes de santé",
    "reponse_f1": "Route statique unique",
    "reponse_f2": "VLAN étendu sans sonde",
    "explication": "Le GSLB combine proximité et disponibilité."
  },
  {
    "id": 136,
    "question": "`Mini-TP multisite — réplication synchrone\n\nSite A : Bordeaux\nSite B : Orléans\nRTT : 28 ms\nÉcritures/minute : 1825\n\nQuel compromis principal ?\n\nRéférence exercice : RESILIENCE-136`",
    "reponse_v": "RPO proche de zéro mais latence d'écriture accrue",
    "reponse_f1": "RPO élevé avec latence toujours plus faible",
    "reponse_f2": "Aucun impact de la RTT",
    "explication": "L'acquittement distant augmente la latence."
  },
  {
    "id": 137,
    "question": "`Mini-TP multisite — réplication asynchrone\n\nSite A : Lille\nSite B : Nantes\nRTT : 29 ms\nÉcritures/minute : 1866\nRetard moyen : 8 s\n\nQuelle perte est plausible ?\n\nRéférence exercice : RESILIENCE-137`",
    "reponse_v": "Environ les 8 dernières secondes non répliquées",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Exactement 80 minutes",
    "explication": "Le retard de réplication matérialise le RPO potentiel."
  },
  {
    "id": 138,
    "question": "`Mini-TP multisite — bascule DNS\n\nSite A : Strasbourg\nSite B : Paris\nRTT : 30 ms\nÉcritures/minute : 1907\nTTL : 840 s\nSite A indisponible.\n\nQuelle conséquence ?\n\nRéférence exercice : RESILIENCE-138`",
    "reponse_v": "Des clients peuvent conserver l'ancienne adresse jusqu'à expiration",
    "reponse_f1": "Tous les clients basculent immédiatement",
    "reponse_f2": "Le TTL ne concerne jamais les caches",
    "explication": "Les caches DNS retardent parfois la bascule."
  },
  {
    "id": 139,
    "question": "`Mini-TP multisite — active-active\n\nSite A : Rennes\nSite B : Lyon\nRTT : 31 ms\nÉcritures/minute : 1948\nLes deux sites écrivent sur la même donnée pendant une coupure.\n\nQuel risque ?\n\nRéférence exercice : RESILIENCE-139`",
    "reponse_v": "Conflits d'écriture et divergence",
    "reponse_f1": "Suppression automatique de la réplication",
    "reponse_f2": "Absence garantie de split-brain",
    "explication": "L'active-active impose une stratégie de résolution."
  },
  {
    "id": 140,
    "question": "`Mini-TP multisite — routage global\n\nSite A : Orléans\nSite B : Marseille\nRTT : 32 ms\nÉcritures/minute : 1989\nSondes HTTP disponibles.\n\nQuelle solution ?\n\nRéférence exercice : RESILIENCE-140`",
    "reponse_v": "GSLB avec sondes de santé",
    "reponse_f1": "Route statique unique",
    "reponse_f2": "VLAN étendu sans sonde",
    "explication": "Le GSLB combine proximité et disponibilité."
  },
  {
    "id": 141,
    "question": "`Mini-TP multisite — réplication synchrone\n\nSite A : Nantes\nSite B : Toulouse\nRTT : 33 ms\nÉcritures/minute : 2030\n\nQuel compromis principal ?\n\nRéférence exercice : RESILIENCE-141`",
    "reponse_v": "RPO proche de zéro mais latence d'écriture accrue",
    "reponse_f1": "RPO élevé avec latence toujours plus faible",
    "reponse_f2": "Aucun impact de la RTT",
    "explication": "L'acquittement distant augmente la latence."
  },
  {
    "id": 142,
    "question": "`Mini-TP multisite — réplication asynchrone\n\nSite A : Paris\nSite B : Bordeaux\nRTT : 34 ms\nÉcritures/minute : 2071\nRetard moyen : 13 s\n\nQuelle perte est plausible ?\n\nRéférence exercice : RESILIENCE-142`",
    "reponse_v": "Environ les 13 dernières secondes non répliquées",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Exactement 130 minutes",
    "explication": "Le retard de réplication matérialise le RPO potentiel."
  },
  {
    "id": 143,
    "question": "`Mini-TP multisite — bascule DNS\n\nSite A : Lyon\nSite B : Lille\nRTT : 35 ms\nÉcritures/minute : 2112\nTTL : 990 s\nSite A indisponible.\n\nQuelle conséquence ?\n\nRéférence exercice : RESILIENCE-143`",
    "reponse_v": "Des clients peuvent conserver l'ancienne adresse jusqu'à expiration",
    "reponse_f1": "Tous les clients basculent immédiatement",
    "reponse_f2": "Le TTL ne concerne jamais les caches",
    "explication": "Les caches DNS retardent parfois la bascule."
  },
  {
    "id": 144,
    "question": "`Mini-TP multisite — active-active\n\nSite A : Marseille\nSite B : Strasbourg\nRTT : 36 ms\nÉcritures/minute : 2153\nLes deux sites écrivent sur la même donnée pendant une coupure.\n\nQuel risque ?\n\nRéférence exercice : RESILIENCE-144`",
    "reponse_v": "Conflits d'écriture et divergence",
    "reponse_f1": "Suppression automatique de la réplication",
    "reponse_f2": "Absence garantie de split-brain",
    "explication": "L'active-active impose une stratégie de résolution."
  },
  {
    "id": 145,
    "question": "`Mini-TP multisite — routage global\n\nSite A : Toulouse\nSite B : Rennes\nRTT : 37 ms\nÉcritures/minute : 2194\nSondes HTTP disponibles.\n\nQuelle solution ?\n\nRéférence exercice : RESILIENCE-145`",
    "reponse_v": "GSLB avec sondes de santé",
    "reponse_f1": "Route statique unique",
    "reponse_f2": "VLAN étendu sans sonde",
    "explication": "Le GSLB combine proximité et disponibilité."
  },
  {
    "id": 146,
    "question": "`Mini-TP multisite — réplication synchrone\n\nSite A : Bordeaux\nSite B : Orléans\nRTT : 38 ms\nÉcritures/minute : 2235\n\nQuel compromis principal ?\n\nRéférence exercice : RESILIENCE-146`",
    "reponse_v": "RPO proche de zéro mais latence d'écriture accrue",
    "reponse_f1": "RPO élevé avec latence toujours plus faible",
    "reponse_f2": "Aucun impact de la RTT",
    "explication": "L'acquittement distant augmente la latence."
  },
  {
    "id": 147,
    "question": "`Mini-TP multisite — réplication asynchrone\n\nSite A : Lille\nSite B : Nantes\nRTT : 39 ms\nÉcritures/minute : 2276\nRetard moyen : 18 s\n\nQuelle perte est plausible ?\n\nRéférence exercice : RESILIENCE-147`",
    "reponse_v": "Environ les 18 dernières secondes non répliquées",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Exactement 180 minutes",
    "explication": "Le retard de réplication matérialise le RPO potentiel."
  },
  {
    "id": 148,
    "question": "`Mini-TP multisite — bascule DNS\n\nSite A : Strasbourg\nSite B : Paris\nRTT : 40 ms\nÉcritures/minute : 2317\nTTL : 1140 s\nSite A indisponible.\n\nQuelle conséquence ?\n\nRéférence exercice : RESILIENCE-148`",
    "reponse_v": "Des clients peuvent conserver l'ancienne adresse jusqu'à expiration",
    "reponse_f1": "Tous les clients basculent immédiatement",
    "reponse_f2": "Le TTL ne concerne jamais les caches",
    "explication": "Les caches DNS retardent parfois la bascule."
  },
  {
    "id": 149,
    "question": "`Mini-TP multisite — active-active\n\nSite A : Rennes\nSite B : Lyon\nRTT : 41 ms\nÉcritures/minute : 2358\nLes deux sites écrivent sur la même donnée pendant une coupure.\n\nQuel risque ?\n\nRéférence exercice : RESILIENCE-149`",
    "reponse_v": "Conflits d'écriture et divergence",
    "reponse_f1": "Suppression automatique de la réplication",
    "reponse_f2": "Absence garantie de split-brain",
    "explication": "L'active-active impose une stratégie de résolution."
  },
  {
    "id": 150,
    "question": "`Mini-TP multisite — routage global\n\nSite A : Orléans\nSite B : Marseille\nRTT : 42 ms\nÉcritures/minute : 2399\nSondes HTTP disponibles.\n\nQuelle solution ?\n\nRéférence exercice : RESILIENCE-150`",
    "reponse_v": "GSLB avec sondes de santé",
    "reponse_f1": "Route statique unique",
    "reponse_f2": "VLAN étendu sans sonde",
    "explication": "Le GSLB combine proximité et disponibilité."
  },
  {
    "id": 151,
    "question": "`Mini-TP multisite — réplication synchrone\n\nSite A : Nantes\nSite B : Toulouse\nRTT : 43 ms\nÉcritures/minute : 2440\n\nQuel compromis principal ?\n\nRéférence exercice : RESILIENCE-151`",
    "reponse_v": "RPO proche de zéro mais latence d'écriture accrue",
    "reponse_f1": "RPO élevé avec latence toujours plus faible",
    "reponse_f2": "Aucun impact de la RTT",
    "explication": "L'acquittement distant augmente la latence."
  },
  {
    "id": 152,
    "question": "`Mini-TP multisite — réplication asynchrone\n\nSite A : Paris\nSite B : Bordeaux\nRTT : 44 ms\nÉcritures/minute : 2481\nRetard moyen : 3 s\n\nQuelle perte est plausible ?\n\nRéférence exercice : RESILIENCE-152`",
    "reponse_v": "Environ les 3 dernières secondes non répliquées",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Exactement 30 minutes",
    "explication": "Le retard de réplication matérialise le RPO potentiel."
  },
  {
    "id": 153,
    "question": "`Mini-TP multisite — bascule DNS\n\nSite A : Lyon\nSite B : Lille\nRTT : 45 ms\nÉcritures/minute : 2522\nTTL : 1290 s\nSite A indisponible.\n\nQuelle conséquence ?\n\nRéférence exercice : RESILIENCE-153`",
    "reponse_v": "Des clients peuvent conserver l'ancienne adresse jusqu'à expiration",
    "reponse_f1": "Tous les clients basculent immédiatement",
    "reponse_f2": "Le TTL ne concerne jamais les caches",
    "explication": "Les caches DNS retardent parfois la bascule."
  },
  {
    "id": 154,
    "question": "`Mini-TP multisite — active-active\n\nSite A : Marseille\nSite B : Strasbourg\nRTT : 46 ms\nÉcritures/minute : 2563\nLes deux sites écrivent sur la même donnée pendant une coupure.\n\nQuel risque ?\n\nRéférence exercice : RESILIENCE-154`",
    "reponse_v": "Conflits d'écriture et divergence",
    "reponse_f1": "Suppression automatique de la réplication",
    "reponse_f2": "Absence garantie de split-brain",
    "explication": "L'active-active impose une stratégie de résolution."
  },
  {
    "id": 155,
    "question": "`Mini-TP multisite — routage global\n\nSite A : Toulouse\nSite B : Rennes\nRTT : 47 ms\nÉcritures/minute : 2604\nSondes HTTP disponibles.\n\nQuelle solution ?\n\nRéférence exercice : RESILIENCE-155`",
    "reponse_v": "GSLB avec sondes de santé",
    "reponse_f1": "Route statique unique",
    "reponse_f2": "VLAN étendu sans sonde",
    "explication": "Le GSLB combine proximité et disponibilité."
  },
  {
    "id": 156,
    "question": "`Mini-TP multisite — réplication synchrone\n\nSite A : Bordeaux\nSite B : Orléans\nRTT : 48 ms\nÉcritures/minute : 2645\n\nQuel compromis principal ?\n\nRéférence exercice : RESILIENCE-156`",
    "reponse_v": "RPO proche de zéro mais latence d'écriture accrue",
    "reponse_f1": "RPO élevé avec latence toujours plus faible",
    "reponse_f2": "Aucun impact de la RTT",
    "explication": "L'acquittement distant augmente la latence."
  },
  {
    "id": 157,
    "question": "`Mini-TP multisite — réplication asynchrone\n\nSite A : Lille\nSite B : Nantes\nRTT : 49 ms\nÉcritures/minute : 2686\nRetard moyen : 8 s\n\nQuelle perte est plausible ?\n\nRéférence exercice : RESILIENCE-157`",
    "reponse_v": "Environ les 8 dernières secondes non répliquées",
    "reponse_f1": "Aucune perte possible",
    "reponse_f2": "Exactement 80 minutes",
    "explication": "Le retard de réplication matérialise le RPO potentiel."
  },
  {
    "id": 158,
    "question": "`Mini-TP multisite — bascule DNS\n\nSite A : Strasbourg\nSite B : Paris\nRTT : 50 ms\nÉcritures/minute : 2727\nTTL : 1440 s\nSite A indisponible.\n\nQuelle conséquence ?\n\nRéférence exercice : RESILIENCE-158`",
    "reponse_v": "Des clients peuvent conserver l'ancienne adresse jusqu'à expiration",
    "reponse_f1": "Tous les clients basculent immédiatement",
    "reponse_f2": "Le TTL ne concerne jamais les caches",
    "explication": "Les caches DNS retardent parfois la bascule."
  },
  {
    "id": 159,
    "question": "`Mini-TP multisite — active-active\n\nSite A : Rennes\nSite B : Lyon\nRTT : 51 ms\nÉcritures/minute : 2768\nLes deux sites écrivent sur la même donnée pendant une coupure.\n\nQuel risque ?\n\nRéférence exercice : RESILIENCE-159`",
    "reponse_v": "Conflits d'écriture et divergence",
    "reponse_f1": "Suppression automatique de la réplication",
    "reponse_f2": "Absence garantie de split-brain",
    "explication": "L'active-active impose une stratégie de résolution."
  },
  {
    "id": 160,
    "question": "`Mini-TP multisite — routage global\n\nSite A : Orléans\nSite B : Marseille\nRTT : 52 ms\nÉcritures/minute : 2809\nSondes HTTP disponibles.\n\nQuelle solution ?\n\nRéférence exercice : RESILIENCE-160`",
    "reponse_v": "GSLB avec sondes de santé",
    "reponse_f1": "Route statique unique",
    "reponse_f2": "VLAN étendu sans sonde",
    "explication": "Le GSLB combine proximité et disponibilité."
  },
  {
    "id": 161,
    "question": "`Mini-TP sauvegarde immuable\n\nService : paiement instantané\nVolume : 250 Go\nRétention immuable : 15 jours\n\nQuelle protection principale ?\n\nRéférence exercice : RESILIENCE-161`",
    "reponse_v": "Empêcher modification ou suppression pendant la rétention",
    "reponse_f1": "Garantir automatiquement un RTO nul",
    "reponse_f2": "Supprimer le besoin de test",
    "explication": "L'immutabilité protège la copie, pas toute la chaîne de reprise."
  },
  {
    "id": 162,
    "question": "`Mini-TP ransomware\n\nService : annuaire d'entreprise\nVolume : 279 Go\nRétention immuable : 16 jours\nLes sauvegardes utilisent l'annuaire de production.\n\nQuelle correction prioritaire ?\n\nRéférence exercice : RESILIENCE-162`",
    "reponse_v": "Séparer les identités et conserver une copie offline ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture",
    "reponse_f2": "Réutiliser les mêmes secrets",
    "explication": "La séparation administrative limite la compromission simultanée."
  },
  {
    "id": 163,
    "question": "`Mini-TP restauration\n\nService : API partenaires\nVolume : 308 Go\nRétention immuable : 17 jours\nJobs réussis, aucun test de restauration.\n\nQuelle conclusion ?\n\nRéférence exercice : RESILIENCE-163`",
    "reponse_v": "La restaurabilité n'est pas démontrée",
    "reponse_f1": "Le statut succès suffit",
    "reponse_f2": "Les checksums garantissent la cohérence applicative",
    "explication": "Seule une restauration testée valide le dispositif."
  },
  {
    "id": 164,
    "question": "`Mini-TP réplication\n\nService : gestion des identités\nVolume : 337 Go\nRétention immuable : 18 jours\nSuppression logique massive répliquée en temps réel.\n\nQuelle limite apparaît ?\n\nRéférence exercice : RESILIENCE-164`",
    "reponse_v": "La réplication propage la suppression",
    "reponse_f1": "La réplication annule la suppression",
    "reponse_f2": "Le site secondaire devient une archive",
    "explication": "La réplication ne remplace pas l'historique de sauvegarde."
  },
  {
    "id": 165,
    "question": "`Mini-TP sauvegarde immuable\n\nService : portail usager\nVolume : 366 Go\nRétention immuable : 19 jours\n\nQuelle protection principale ?\n\nRéférence exercice : RESILIENCE-165`",
    "reponse_v": "Empêcher modification ou suppression pendant la rétention",
    "reponse_f1": "Garantir automatiquement un RTO nul",
    "reponse_f2": "Supprimer le besoin de test",
    "explication": "L'immutabilité protège la copie, pas toute la chaîne de reprise."
  },
  {
    "id": 166,
    "question": "`Mini-TP ransomware\n\nService : supervision réseau\nVolume : 395 Go\nRétention immuable : 20 jours\nLes sauvegardes utilisent l'annuaire de production.\n\nQuelle correction prioritaire ?\n\nRéférence exercice : RESILIENCE-166`",
    "reponse_v": "Séparer les identités et conserver une copie offline ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture",
    "reponse_f2": "Réutiliser les mêmes secrets",
    "explication": "La séparation administrative limite la compromission simultanée."
  },
  {
    "id": 167,
    "question": "`Mini-TP restauration\n\nService : base clients\nVolume : 424 Go\nRétention immuable : 21 jours\nJobs réussis, aucun test de restauration.\n\nQuelle conclusion ?\n\nRéférence exercice : RESILIENCE-167`",
    "reponse_v": "La restaurabilité n'est pas démontrée",
    "reponse_f1": "Le statut succès suffit",
    "reponse_f2": "Les checksums garantissent la cohérence applicative",
    "explication": "Seule une restauration testée valide le dispositif."
  },
  {
    "id": 168,
    "question": "`Mini-TP réplication\n\nService : collecte de télémétrie\nVolume : 453 Go\nRétention immuable : 22 jours\nSuppression logique massive répliquée en temps réel.\n\nQuelle limite apparaît ?\n\nRéférence exercice : RESILIENCE-168`",
    "reponse_v": "La réplication propage la suppression",
    "reponse_f1": "La réplication annule la suppression",
    "reponse_f2": "Le site secondaire devient une archive",
    "explication": "La réplication ne remplace pas l'historique de sauvegarde."
  },
  {
    "id": 169,
    "question": "`Mini-TP sauvegarde immuable\n\nService : ERP financier\nVolume : 482 Go\nRétention immuable : 23 jours\n\nQuelle protection principale ?\n\nRéférence exercice : RESILIENCE-169`",
    "reponse_v": "Empêcher modification ou suppression pendant la rétention",
    "reponse_f1": "Garantir automatiquement un RTO nul",
    "reponse_f2": "Supprimer le besoin de test",
    "explication": "L'immutabilité protège la copie, pas toute la chaîne de reprise."
  },
  {
    "id": 170,
    "question": "`Mini-TP ransomware\n\nService : gestion documentaire\nVolume : 511 Go\nRétention immuable : 24 jours\nLes sauvegardes utilisent l'annuaire de production.\n\nQuelle correction prioritaire ?\n\nRéférence exercice : RESILIENCE-170`",
    "reponse_v": "Séparer les identités et conserver une copie offline ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture",
    "reponse_f2": "Réutiliser les mêmes secrets",
    "explication": "La séparation administrative limite la compromission simultanée."
  },
  {
    "id": 171,
    "question": "`Mini-TP restauration\n\nService : gestion RH\nVolume : 540 Go\nRétention immuable : 25 jours\nJobs réussis, aucun test de restauration.\n\nQuelle conclusion ?\n\nRéférence exercice : RESILIENCE-171`",
    "reponse_v": "La restaurabilité n'est pas démontrée",
    "reponse_f1": "Le statut succès suffit",
    "reponse_f2": "Les checksums garantissent la cohérence applicative",
    "explication": "Seule une restauration testée valide le dispositif."
  },
  {
    "id": 172,
    "question": "`Mini-TP réplication\n\nService : plateforme de facturation\nVolume : 569 Go\nRétention immuable : 26 jours\nSuppression logique massive répliquée en temps réel.\n\nQuelle limite apparaît ?\n\nRéférence exercice : RESILIENCE-172`",
    "reponse_v": "La réplication propage la suppression",
    "reponse_f1": "La réplication annule la suppression",
    "reponse_f2": "Le site secondaire devient une archive",
    "explication": "La réplication ne remplace pas l'historique de sauvegarde."
  },
  {
    "id": 173,
    "question": "`Mini-TP sauvegarde immuable\n\nService : messagerie sécurisée\nVolume : 598 Go\nRétention immuable : 27 jours\n\nQuelle protection principale ?\n\nRéférence exercice : RESILIENCE-173`",
    "reponse_v": "Empêcher modification ou suppression pendant la rétention",
    "reponse_f1": "Garantir automatiquement un RTO nul",
    "reponse_f2": "Supprimer le besoin de test",
    "explication": "L'immutabilité protège la copie, pas toute la chaîne de reprise."
  },
  {
    "id": 174,
    "question": "`Mini-TP ransomware\n\nService : plateforme e-commerce\nVolume : 627 Go\nRétention immuable : 28 jours\nLes sauvegardes utilisent l'annuaire de production.\n\nQuelle correction prioritaire ?\n\nRéférence exercice : RESILIENCE-174`",
    "reponse_v": "Séparer les identités et conserver une copie offline ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture",
    "reponse_f2": "Réutiliser les mêmes secrets",
    "explication": "La séparation administrative limite la compromission simultanée."
  },
  {
    "id": 175,
    "question": "`Mini-TP restauration\n\nService : système de réservation\nVolume : 656 Go\nRétention immuable : 29 jours\nJobs réussis, aucun test de restauration.\n\nQuelle conclusion ?\n\nRéférence exercice : RESILIENCE-175`",
    "reponse_v": "La restaurabilité n'est pas démontrée",
    "reponse_f1": "Le statut succès suffit",
    "reponse_f2": "Les checksums garantissent la cohérence applicative",
    "explication": "Seule une restauration testée valide le dispositif."
  },
  {
    "id": 176,
    "question": "`Mini-TP réplication\n\nService : paiement instantané\nVolume : 685 Go\nRétention immuable : 30 jours\nSuppression logique massive répliquée en temps réel.\n\nQuelle limite apparaît ?\n\nRéférence exercice : RESILIENCE-176`",
    "reponse_v": "La réplication propage la suppression",
    "reponse_f1": "La réplication annule la suppression",
    "reponse_f2": "Le site secondaire devient une archive",
    "explication": "La réplication ne remplace pas l'historique de sauvegarde."
  },
  {
    "id": 177,
    "question": "`Mini-TP sauvegarde immuable\n\nService : annuaire d'entreprise\nVolume : 714 Go\nRétention immuable : 31 jours\n\nQuelle protection principale ?\n\nRéférence exercice : RESILIENCE-177`",
    "reponse_v": "Empêcher modification ou suppression pendant la rétention",
    "reponse_f1": "Garantir automatiquement un RTO nul",
    "reponse_f2": "Supprimer le besoin de test",
    "explication": "L'immutabilité protège la copie, pas toute la chaîne de reprise."
  },
  {
    "id": 178,
    "question": "`Mini-TP ransomware\n\nService : API partenaires\nVolume : 743 Go\nRétention immuable : 32 jours\nLes sauvegardes utilisent l'annuaire de production.\n\nQuelle correction prioritaire ?\n\nRéférence exercice : RESILIENCE-178`",
    "reponse_v": "Séparer les identités et conserver une copie offline ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture",
    "reponse_f2": "Réutiliser les mêmes secrets",
    "explication": "La séparation administrative limite la compromission simultanée."
  },
  {
    "id": 179,
    "question": "`Mini-TP restauration\n\nService : gestion des identités\nVolume : 772 Go\nRétention immuable : 33 jours\nJobs réussis, aucun test de restauration.\n\nQuelle conclusion ?\n\nRéférence exercice : RESILIENCE-179`",
    "reponse_v": "La restaurabilité n'est pas démontrée",
    "reponse_f1": "Le statut succès suffit",
    "reponse_f2": "Les checksums garantissent la cohérence applicative",
    "explication": "Seule une restauration testée valide le dispositif."
  },
  {
    "id": 180,
    "question": "`Mini-TP réplication\n\nService : portail usager\nVolume : 801 Go\nRétention immuable : 34 jours\nSuppression logique massive répliquée en temps réel.\n\nQuelle limite apparaît ?\n\nRéférence exercice : RESILIENCE-180`",
    "reponse_v": "La réplication propage la suppression",
    "reponse_f1": "La réplication annule la suppression",
    "reponse_f2": "Le site secondaire devient une archive",
    "explication": "La réplication ne remplace pas l'historique de sauvegarde."
  },
  {
    "id": 181,
    "question": "`Mini-TP sauvegarde immuable\n\nService : supervision réseau\nVolume : 830 Go\nRétention immuable : 35 jours\n\nQuelle protection principale ?\n\nRéférence exercice : RESILIENCE-181`",
    "reponse_v": "Empêcher modification ou suppression pendant la rétention",
    "reponse_f1": "Garantir automatiquement un RTO nul",
    "reponse_f2": "Supprimer le besoin de test",
    "explication": "L'immutabilité protège la copie, pas toute la chaîne de reprise."
  },
  {
    "id": 182,
    "question": "`Mini-TP ransomware\n\nService : base clients\nVolume : 859 Go\nRétention immuable : 36 jours\nLes sauvegardes utilisent l'annuaire de production.\n\nQuelle correction prioritaire ?\n\nRéférence exercice : RESILIENCE-182`",
    "reponse_v": "Séparer les identités et conserver une copie offline ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture",
    "reponse_f2": "Réutiliser les mêmes secrets",
    "explication": "La séparation administrative limite la compromission simultanée."
  },
  {
    "id": 183,
    "question": "`Mini-TP restauration\n\nService : collecte de télémétrie\nVolume : 888 Go\nRétention immuable : 37 jours\nJobs réussis, aucun test de restauration.\n\nQuelle conclusion ?\n\nRéférence exercice : RESILIENCE-183`",
    "reponse_v": "La restaurabilité n'est pas démontrée",
    "reponse_f1": "Le statut succès suffit",
    "reponse_f2": "Les checksums garantissent la cohérence applicative",
    "explication": "Seule une restauration testée valide le dispositif."
  },
  {
    "id": 184,
    "question": "`Mini-TP réplication\n\nService : ERP financier\nVolume : 917 Go\nRétention immuable : 38 jours\nSuppression logique massive répliquée en temps réel.\n\nQuelle limite apparaît ?\n\nRéférence exercice : RESILIENCE-184`",
    "reponse_v": "La réplication propage la suppression",
    "reponse_f1": "La réplication annule la suppression",
    "reponse_f2": "Le site secondaire devient une archive",
    "explication": "La réplication ne remplace pas l'historique de sauvegarde."
  },
  {
    "id": 185,
    "question": "`Mini-TP sauvegarde immuable\n\nService : gestion documentaire\nVolume : 946 Go\nRétention immuable : 39 jours\n\nQuelle protection principale ?\n\nRéférence exercice : RESILIENCE-185`",
    "reponse_v": "Empêcher modification ou suppression pendant la rétention",
    "reponse_f1": "Garantir automatiquement un RTO nul",
    "reponse_f2": "Supprimer le besoin de test",
    "explication": "L'immutabilité protège la copie, pas toute la chaîne de reprise."
  },
  {
    "id": 186,
    "question": "`Mini-TP ransomware\n\nService : gestion RH\nVolume : 975 Go\nRétention immuable : 40 jours\nLes sauvegardes utilisent l'annuaire de production.\n\nQuelle correction prioritaire ?\n\nRéférence exercice : RESILIENCE-186`",
    "reponse_v": "Séparer les identités et conserver une copie offline ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture",
    "reponse_f2": "Réutiliser les mêmes secrets",
    "explication": "La séparation administrative limite la compromission simultanée."
  },
  {
    "id": 187,
    "question": "`Mini-TP restauration\n\nService : plateforme de facturation\nVolume : 1004 Go\nRétention immuable : 41 jours\nJobs réussis, aucun test de restauration.\n\nQuelle conclusion ?\n\nRéférence exercice : RESILIENCE-187`",
    "reponse_v": "La restaurabilité n'est pas démontrée",
    "reponse_f1": "Le statut succès suffit",
    "reponse_f2": "Les checksums garantissent la cohérence applicative",
    "explication": "Seule une restauration testée valide le dispositif."
  },
  {
    "id": 188,
    "question": "`Mini-TP réplication\n\nService : messagerie sécurisée\nVolume : 1033 Go\nRétention immuable : 42 jours\nSuppression logique massive répliquée en temps réel.\n\nQuelle limite apparaît ?\n\nRéférence exercice : RESILIENCE-188`",
    "reponse_v": "La réplication propage la suppression",
    "reponse_f1": "La réplication annule la suppression",
    "reponse_f2": "Le site secondaire devient une archive",
    "explication": "La réplication ne remplace pas l'historique de sauvegarde."
  },
  {
    "id": 189,
    "question": "`Mini-TP sauvegarde immuable\n\nService : plateforme e-commerce\nVolume : 1062 Go\nRétention immuable : 43 jours\n\nQuelle protection principale ?\n\nRéférence exercice : RESILIENCE-189`",
    "reponse_v": "Empêcher modification ou suppression pendant la rétention",
    "reponse_f1": "Garantir automatiquement un RTO nul",
    "reponse_f2": "Supprimer le besoin de test",
    "explication": "L'immutabilité protège la copie, pas toute la chaîne de reprise."
  },
  {
    "id": 190,
    "question": "`Mini-TP ransomware\n\nService : système de réservation\nVolume : 1091 Go\nRétention immuable : 44 jours\nLes sauvegardes utilisent l'annuaire de production.\n\nQuelle correction prioritaire ?\n\nRéférence exercice : RESILIENCE-190`",
    "reponse_v": "Séparer les identités et conserver une copie offline ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture",
    "reponse_f2": "Réutiliser les mêmes secrets",
    "explication": "La séparation administrative limite la compromission simultanée."
  },
  {
    "id": 191,
    "question": "`Mini-TP restauration\n\nService : paiement instantané\nVolume : 1120 Go\nRétention immuable : 45 jours\nJobs réussis, aucun test de restauration.\n\nQuelle conclusion ?\n\nRéférence exercice : RESILIENCE-191`",
    "reponse_v": "La restaurabilité n'est pas démontrée",
    "reponse_f1": "Le statut succès suffit",
    "reponse_f2": "Les checksums garantissent la cohérence applicative",
    "explication": "Seule une restauration testée valide le dispositif."
  },
  {
    "id": 192,
    "question": "`Mini-TP réplication\n\nService : annuaire d'entreprise\nVolume : 1149 Go\nRétention immuable : 46 jours\nSuppression logique massive répliquée en temps réel.\n\nQuelle limite apparaît ?\n\nRéférence exercice : RESILIENCE-192`",
    "reponse_v": "La réplication propage la suppression",
    "reponse_f1": "La réplication annule la suppression",
    "reponse_f2": "Le site secondaire devient une archive",
    "explication": "La réplication ne remplace pas l'historique de sauvegarde."
  },
  {
    "id": 193,
    "question": "`Mini-TP sauvegarde immuable\n\nService : API partenaires\nVolume : 1178 Go\nRétention immuable : 47 jours\n\nQuelle protection principale ?\n\nRéférence exercice : RESILIENCE-193`",
    "reponse_v": "Empêcher modification ou suppression pendant la rétention",
    "reponse_f1": "Garantir automatiquement un RTO nul",
    "reponse_f2": "Supprimer le besoin de test",
    "explication": "L'immutabilité protège la copie, pas toute la chaîne de reprise."
  },
  {
    "id": 194,
    "question": "`Mini-TP ransomware\n\nService : gestion des identités\nVolume : 1207 Go\nRétention immuable : 48 jours\nLes sauvegardes utilisent l'annuaire de production.\n\nQuelle correction prioritaire ?\n\nRéférence exercice : RESILIENCE-194`",
    "reponse_v": "Séparer les identités et conserver une copie offline ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture",
    "reponse_f2": "Réutiliser les mêmes secrets",
    "explication": "La séparation administrative limite la compromission simultanée."
  },
  {
    "id": 195,
    "question": "`Mini-TP restauration\n\nService : portail usager\nVolume : 1236 Go\nRétention immuable : 49 jours\nJobs réussis, aucun test de restauration.\n\nQuelle conclusion ?\n\nRéférence exercice : RESILIENCE-195`",
    "reponse_v": "La restaurabilité n'est pas démontrée",
    "reponse_f1": "Le statut succès suffit",
    "reponse_f2": "Les checksums garantissent la cohérence applicative",
    "explication": "Seule une restauration testée valide le dispositif."
  },
  {
    "id": 196,
    "question": "`Mini-TP réplication\n\nService : supervision réseau\nVolume : 1265 Go\nRétention immuable : 50 jours\nSuppression logique massive répliquée en temps réel.\n\nQuelle limite apparaît ?\n\nRéférence exercice : RESILIENCE-196`",
    "reponse_v": "La réplication propage la suppression",
    "reponse_f1": "La réplication annule la suppression",
    "reponse_f2": "Le site secondaire devient une archive",
    "explication": "La réplication ne remplace pas l'historique de sauvegarde."
  },
  {
    "id": 197,
    "question": "`Mini-TP sauvegarde immuable\n\nService : base clients\nVolume : 1294 Go\nRétention immuable : 51 jours\n\nQuelle protection principale ?\n\nRéférence exercice : RESILIENCE-197`",
    "reponse_v": "Empêcher modification ou suppression pendant la rétention",
    "reponse_f1": "Garantir automatiquement un RTO nul",
    "reponse_f2": "Supprimer le besoin de test",
    "explication": "L'immutabilité protège la copie, pas toute la chaîne de reprise."
  },
  {
    "id": 198,
    "question": "`Mini-TP ransomware\n\nService : collecte de télémétrie\nVolume : 1323 Go\nRétention immuable : 52 jours\nLes sauvegardes utilisent l'annuaire de production.\n\nQuelle correction prioritaire ?\n\nRéférence exercice : RESILIENCE-198`",
    "reponse_v": "Séparer les identités et conserver une copie offline ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture",
    "reponse_f2": "Réutiliser les mêmes secrets",
    "explication": "La séparation administrative limite la compromission simultanée."
  },
  {
    "id": 199,
    "question": "`Mini-TP restauration\n\nService : ERP financier\nVolume : 1352 Go\nRétention immuable : 53 jours\nJobs réussis, aucun test de restauration.\n\nQuelle conclusion ?\n\nRéférence exercice : RESILIENCE-199`",
    "reponse_v": "La restaurabilité n'est pas démontrée",
    "reponse_f1": "Le statut succès suffit",
    "reponse_f2": "Les checksums garantissent la cohérence applicative",
    "explication": "Seule une restauration testée valide le dispositif."
  },
  {
    "id": 200,
    "question": "`Mini-TP réplication\n\nService : gestion documentaire\nVolume : 1381 Go\nRétention immuable : 54 jours\nSuppression logique massive répliquée en temps réel.\n\nQuelle limite apparaît ?\n\nRéférence exercice : RESILIENCE-200`",
    "reponse_v": "La réplication propage la suppression",
    "reponse_f1": "La réplication annule la suppression",
    "reponse_f2": "Le site secondaire devient une archive",
    "explication": "La réplication ne remplace pas l'historique de sauvegarde."
  },
  {
    "id": 201,
    "question": "`Mini-TP attaque et parade\n\nService : paiement instantané\nAttaque : phishing ciblé\nSymptôme : échecs d'authentification\nSIEM : 11 événements corrélés en 1 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-201`",
    "reponse_v": "MFA résistante au phishing, filtrage et sensibilisation",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de phishing ciblé."
  },
  {
    "id": 202,
    "question": "`Mini-TP attaque et parade\n\nService : plateforme e-commerce\nAttaque : credential stuffing\nSymptôme : trafic sortant anormal\nSIEM : 14 événements corrélés en 2 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-202`",
    "reponse_v": "MFA, détection d'anomalies et blocage des mots de passe compromis",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de credential stuffing."
  },
  {
    "id": 203,
    "question": "`Mini-TP attaque et parade\n\nService : plateforme de facturation\nAttaque : password spraying\nSymptôme : fichiers chiffrés\nSIEM : 17 événements corrélés en 3 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-203`",
    "reponse_v": "MFA et détection de tentatives distribuées",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de password spraying."
  },
  {
    "id": 204,
    "question": "`Mini-TP attaque et parade\n\nService : gestion documentaire\nAttaque : ransomware\nSymptôme : requêtes HTTP atypiques\nSIEM : 20 événements corrélés en 4 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-204`",
    "reponse_v": "segmentation, EDR et sauvegardes immuables testées",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de ransomware."
  },
  {
    "id": 205,
    "question": "`Mini-TP attaque et parade\n\nService : collecte de télémétrie\nAttaque : DDoS volumétrique\nSymptôme : pics DNS\nSIEM : 23 événements corrélés en 5 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-205`",
    "reponse_v": "protection anti-DDoS et absorption amont",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de DDoS volumétrique."
  },
  {
    "id": 206,
    "question": "`Mini-TP attaque et parade\n\nService : supervision réseau\nAttaque : injection SQL\nSymptôme : élévation de privilèges\nSIEM : 26 événements corrélés en 6 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-206`",
    "reponse_v": "requêtes préparées et moindre privilège SQL",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de injection SQL."
  },
  {
    "id": 207,
    "question": "`Mini-TP attaque et parade\n\nService : gestion des identités\nAttaque : XSS stocké\nSymptôme : latence soudaine\nSIEM : 29 événements corrélés en 7 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-207`",
    "reponse_v": "encodage de sortie et CSP",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de XSS stocké."
  },
  {
    "id": 208,
    "question": "`Mini-TP attaque et parade\n\nService : annuaire d'entreprise\nAttaque : CSRF\nSymptôme : échecs d'authentification\nSIEM : 32 événements corrélés en 8 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-208`",
    "reponse_v": "jetons anti-CSRF et cookies SameSite",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de CSRF."
  },
  {
    "id": 209,
    "question": "`Mini-TP attaque et parade\n\nService : système de réservation\nAttaque : attaque MITM\nSymptôme : trafic sortant anormal\nSIEM : 35 événements corrélés en 9 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-209`",
    "reponse_v": "TLS validé et authentification des pairs",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de attaque MITM."
  },
  {
    "id": 210,
    "question": "`Mini-TP attaque et parade\n\nService : messagerie sécurisée\nAttaque : ARP spoofing\nSymptôme : fichiers chiffrés\nSIEM : 38 événements corrélés en 10 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-210`",
    "reponse_v": "DHCP snooping et inspection ARP dynamique",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de ARP spoofing."
  },
  {
    "id": 211,
    "question": "`Mini-TP attaque et parade\n\nService : gestion RH\nAttaque : DNS cache poisoning\nSymptôme : requêtes HTTP atypiques\nSIEM : 41 événements corrélés en 11 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-211`",
    "reponse_v": "DNSSEC et résolveurs durcis",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de DNS cache poisoning."
  },
  {
    "id": 212,
    "question": "`Mini-TP attaque et parade\n\nService : ERP financier\nAttaque : exfiltration DNS\nSymptôme : pics DNS\nSIEM : 44 événements corrélés en 12 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-212`",
    "reponse_v": "filtrage et analyse des requêtes DNS",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de exfiltration DNS."
  },
  {
    "id": 213,
    "question": "`Mini-TP attaque et parade\n\nService : base clients\nAttaque : supply chain compromise\nSymptôme : élévation de privilèges\nSIEM : 47 événements corrélés en 13 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-213`",
    "reponse_v": "SBOM, signatures et contrôles CI/CD",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de supply chain compromise."
  },
  {
    "id": 214,
    "question": "`Mini-TP attaque et parade\n\nService : portail usager\nAttaque : attaque zero-day\nSymptôme : latence soudaine\nSIEM : 50 événements corrélés en 14 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-214`",
    "reponse_v": "défense en profondeur et réduction de surface",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de attaque zero-day."
  },
  {
    "id": 215,
    "question": "`Mini-TP attaque et parade\n\nService : API partenaires\nAttaque : phishing ciblé\nSymptôme : échecs d'authentification\nSIEM : 53 événements corrélés en 15 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-215`",
    "reponse_v": "MFA résistante au phishing, filtrage et sensibilisation",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de phishing ciblé."
  },
  {
    "id": 216,
    "question": "`Mini-TP attaque et parade\n\nService : paiement instantané\nAttaque : credential stuffing\nSymptôme : trafic sortant anormal\nSIEM : 56 événements corrélés en 1 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-216`",
    "reponse_v": "MFA, détection d'anomalies et blocage des mots de passe compromis",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de credential stuffing."
  },
  {
    "id": 217,
    "question": "`Mini-TP attaque et parade\n\nService : plateforme e-commerce\nAttaque : password spraying\nSymptôme : fichiers chiffrés\nSIEM : 59 événements corrélés en 2 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-217`",
    "reponse_v": "MFA et détection de tentatives distribuées",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de password spraying."
  },
  {
    "id": 218,
    "question": "`Mini-TP attaque et parade\n\nService : plateforme de facturation\nAttaque : ransomware\nSymptôme : requêtes HTTP atypiques\nSIEM : 62 événements corrélés en 3 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-218`",
    "reponse_v": "segmentation, EDR et sauvegardes immuables testées",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de ransomware."
  },
  {
    "id": 219,
    "question": "`Mini-TP attaque et parade\n\nService : gestion documentaire\nAttaque : DDoS volumétrique\nSymptôme : pics DNS\nSIEM : 65 événements corrélés en 4 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-219`",
    "reponse_v": "protection anti-DDoS et absorption amont",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de DDoS volumétrique."
  },
  {
    "id": 220,
    "question": "`Mini-TP attaque et parade\n\nService : collecte de télémétrie\nAttaque : injection SQL\nSymptôme : élévation de privilèges\nSIEM : 68 événements corrélés en 5 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-220`",
    "reponse_v": "requêtes préparées et moindre privilège SQL",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de injection SQL."
  },
  {
    "id": 221,
    "question": "`Mini-TP attaque et parade\n\nService : supervision réseau\nAttaque : XSS stocké\nSymptôme : latence soudaine\nSIEM : 71 événements corrélés en 6 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-221`",
    "reponse_v": "encodage de sortie et CSP",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de XSS stocké."
  },
  {
    "id": 222,
    "question": "`Mini-TP attaque et parade\n\nService : gestion des identités\nAttaque : CSRF\nSymptôme : échecs d'authentification\nSIEM : 74 événements corrélés en 7 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-222`",
    "reponse_v": "jetons anti-CSRF et cookies SameSite",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de CSRF."
  },
  {
    "id": 223,
    "question": "`Mini-TP attaque et parade\n\nService : annuaire d'entreprise\nAttaque : attaque MITM\nSymptôme : trafic sortant anormal\nSIEM : 77 événements corrélés en 8 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-223`",
    "reponse_v": "TLS validé et authentification des pairs",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de attaque MITM."
  },
  {
    "id": 224,
    "question": "`Mini-TP attaque et parade\n\nService : système de réservation\nAttaque : ARP spoofing\nSymptôme : fichiers chiffrés\nSIEM : 80 événements corrélés en 9 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-224`",
    "reponse_v": "DHCP snooping et inspection ARP dynamique",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de ARP spoofing."
  },
  {
    "id": 225,
    "question": "`Mini-TP attaque et parade\n\nService : messagerie sécurisée\nAttaque : DNS cache poisoning\nSymptôme : requêtes HTTP atypiques\nSIEM : 83 événements corrélés en 10 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-225`",
    "reponse_v": "DNSSEC et résolveurs durcis",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de DNS cache poisoning."
  },
  {
    "id": 226,
    "question": "`Mini-TP attaque et parade\n\nService : gestion RH\nAttaque : exfiltration DNS\nSymptôme : pics DNS\nSIEM : 86 événements corrélés en 11 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-226`",
    "reponse_v": "filtrage et analyse des requêtes DNS",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de exfiltration DNS."
  },
  {
    "id": 227,
    "question": "`Mini-TP attaque et parade\n\nService : ERP financier\nAttaque : supply chain compromise\nSymptôme : élévation de privilèges\nSIEM : 89 événements corrélés en 12 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-227`",
    "reponse_v": "SBOM, signatures et contrôles CI/CD",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de supply chain compromise."
  },
  {
    "id": 228,
    "question": "`Mini-TP attaque et parade\n\nService : base clients\nAttaque : attaque zero-day\nSymptôme : latence soudaine\nSIEM : 92 événements corrélés en 13 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-228`",
    "reponse_v": "défense en profondeur et réduction de surface",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de attaque zero-day."
  },
  {
    "id": 229,
    "question": "`Mini-TP attaque et parade\n\nService : portail usager\nAttaque : phishing ciblé\nSymptôme : échecs d'authentification\nSIEM : 95 événements corrélés en 14 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-229`",
    "reponse_v": "MFA résistante au phishing, filtrage et sensibilisation",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de phishing ciblé."
  },
  {
    "id": 230,
    "question": "`Mini-TP attaque et parade\n\nService : API partenaires\nAttaque : credential stuffing\nSymptôme : trafic sortant anormal\nSIEM : 98 événements corrélés en 15 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-230`",
    "reponse_v": "MFA, détection d'anomalies et blocage des mots de passe compromis",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de credential stuffing."
  },
  {
    "id": 231,
    "question": "`Mini-TP attaque et parade\n\nService : paiement instantané\nAttaque : password spraying\nSymptôme : fichiers chiffrés\nSIEM : 101 événements corrélés en 1 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-231`",
    "reponse_v": "MFA et détection de tentatives distribuées",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de password spraying."
  },
  {
    "id": 232,
    "question": "`Mini-TP attaque et parade\n\nService : plateforme e-commerce\nAttaque : ransomware\nSymptôme : requêtes HTTP atypiques\nSIEM : 104 événements corrélés en 2 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-232`",
    "reponse_v": "segmentation, EDR et sauvegardes immuables testées",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de ransomware."
  },
  {
    "id": 233,
    "question": "`Mini-TP attaque et parade\n\nService : plateforme de facturation\nAttaque : DDoS volumétrique\nSymptôme : pics DNS\nSIEM : 107 événements corrélés en 3 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-233`",
    "reponse_v": "protection anti-DDoS et absorption amont",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de DDoS volumétrique."
  },
  {
    "id": 234,
    "question": "`Mini-TP attaque et parade\n\nService : gestion documentaire\nAttaque : injection SQL\nSymptôme : élévation de privilèges\nSIEM : 110 événements corrélés en 4 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-234`",
    "reponse_v": "requêtes préparées et moindre privilège SQL",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de injection SQL."
  },
  {
    "id": 235,
    "question": "`Mini-TP attaque et parade\n\nService : collecte de télémétrie\nAttaque : XSS stocké\nSymptôme : latence soudaine\nSIEM : 113 événements corrélés en 5 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-235`",
    "reponse_v": "encodage de sortie et CSP",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de XSS stocké."
  },
  {
    "id": 236,
    "question": "`Mini-TP attaque et parade\n\nService : supervision réseau\nAttaque : CSRF\nSymptôme : échecs d'authentification\nSIEM : 116 événements corrélés en 6 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-236`",
    "reponse_v": "jetons anti-CSRF et cookies SameSite",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de CSRF."
  },
  {
    "id": 237,
    "question": "`Mini-TP attaque et parade\n\nService : gestion des identités\nAttaque : attaque MITM\nSymptôme : trafic sortant anormal\nSIEM : 119 événements corrélés en 7 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-237`",
    "reponse_v": "TLS validé et authentification des pairs",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de attaque MITM."
  },
  {
    "id": 238,
    "question": "`Mini-TP attaque et parade\n\nService : annuaire d'entreprise\nAttaque : ARP spoofing\nSymptôme : fichiers chiffrés\nSIEM : 122 événements corrélés en 8 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-238`",
    "reponse_v": "DHCP snooping et inspection ARP dynamique",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de ARP spoofing."
  },
  {
    "id": 239,
    "question": "`Mini-TP attaque et parade\n\nService : système de réservation\nAttaque : DNS cache poisoning\nSymptôme : requêtes HTTP atypiques\nSIEM : 125 événements corrélés en 9 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-239`",
    "reponse_v": "DNSSEC et résolveurs durcis",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de DNS cache poisoning."
  },
  {
    "id": 240,
    "question": "`Mini-TP attaque et parade\n\nService : messagerie sécurisée\nAttaque : exfiltration DNS\nSymptôme : pics DNS\nSIEM : 128 événements corrélés en 10 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-240`",
    "reponse_v": "filtrage et analyse des requêtes DNS",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de exfiltration DNS."
  },
  {
    "id": 241,
    "question": "`Mini-TP attaque et parade\n\nService : gestion RH\nAttaque : supply chain compromise\nSymptôme : élévation de privilèges\nSIEM : 131 événements corrélés en 11 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-241`",
    "reponse_v": "SBOM, signatures et contrôles CI/CD",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de supply chain compromise."
  },
  {
    "id": 242,
    "question": "`Mini-TP attaque et parade\n\nService : ERP financier\nAttaque : attaque zero-day\nSymptôme : latence soudaine\nSIEM : 134 événements corrélés en 12 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-242`",
    "reponse_v": "défense en profondeur et réduction de surface",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de attaque zero-day."
  },
  {
    "id": 243,
    "question": "`Mini-TP attaque et parade\n\nService : base clients\nAttaque : phishing ciblé\nSymptôme : échecs d'authentification\nSIEM : 137 événements corrélés en 13 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-243`",
    "reponse_v": "MFA résistante au phishing, filtrage et sensibilisation",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de phishing ciblé."
  },
  {
    "id": 244,
    "question": "`Mini-TP attaque et parade\n\nService : portail usager\nAttaque : credential stuffing\nSymptôme : trafic sortant anormal\nSIEM : 140 événements corrélés en 14 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-244`",
    "reponse_v": "MFA, détection d'anomalies et blocage des mots de passe compromis",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de credential stuffing."
  },
  {
    "id": 245,
    "question": "`Mini-TP attaque et parade\n\nService : API partenaires\nAttaque : password spraying\nSymptôme : fichiers chiffrés\nSIEM : 143 événements corrélés en 15 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-245`",
    "reponse_v": "MFA et détection de tentatives distribuées",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de password spraying."
  },
  {
    "id": 246,
    "question": "`Mini-TP attaque et parade\n\nService : paiement instantané\nAttaque : ransomware\nSymptôme : requêtes HTTP atypiques\nSIEM : 146 événements corrélés en 1 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-246`",
    "reponse_v": "segmentation, EDR et sauvegardes immuables testées",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de ransomware."
  },
  {
    "id": 247,
    "question": "`Mini-TP attaque et parade\n\nService : plateforme e-commerce\nAttaque : DDoS volumétrique\nSymptôme : pics DNS\nSIEM : 149 événements corrélés en 2 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-247`",
    "reponse_v": "protection anti-DDoS et absorption amont",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de DDoS volumétrique."
  },
  {
    "id": 248,
    "question": "`Mini-TP attaque et parade\n\nService : plateforme de facturation\nAttaque : injection SQL\nSymptôme : élévation de privilèges\nSIEM : 152 événements corrélés en 3 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-248`",
    "reponse_v": "requêtes préparées et moindre privilège SQL",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de injection SQL."
  },
  {
    "id": 249,
    "question": "`Mini-TP attaque et parade\n\nService : gestion documentaire\nAttaque : XSS stocké\nSymptôme : latence soudaine\nSIEM : 155 événements corrélés en 4 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-249`",
    "reponse_v": "encodage de sortie et CSP",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de XSS stocké."
  },
  {
    "id": 250,
    "question": "`Mini-TP attaque et parade\n\nService : collecte de télémétrie\nAttaque : CSRF\nSymptôme : échecs d'authentification\nSIEM : 158 événements corrélés en 5 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-250`",
    "reponse_v": "jetons anti-CSRF et cookies SameSite",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de CSRF."
  },
  {
    "id": 251,
    "question": "`Mini-TP attaque et parade\n\nService : supervision réseau\nAttaque : attaque MITM\nSymptôme : trafic sortant anormal\nSIEM : 161 événements corrélés en 6 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-251`",
    "reponse_v": "TLS validé et authentification des pairs",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de attaque MITM."
  },
  {
    "id": 252,
    "question": "`Mini-TP attaque et parade\n\nService : gestion des identités\nAttaque : ARP spoofing\nSymptôme : fichiers chiffrés\nSIEM : 164 événements corrélés en 7 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-252`",
    "reponse_v": "DHCP snooping et inspection ARP dynamique",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de ARP spoofing."
  },
  {
    "id": 253,
    "question": "`Mini-TP attaque et parade\n\nService : annuaire d'entreprise\nAttaque : DNS cache poisoning\nSymptôme : requêtes HTTP atypiques\nSIEM : 167 événements corrélés en 8 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-253`",
    "reponse_v": "DNSSEC et résolveurs durcis",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de DNS cache poisoning."
  },
  {
    "id": 254,
    "question": "`Mini-TP attaque et parade\n\nService : système de réservation\nAttaque : exfiltration DNS\nSymptôme : pics DNS\nSIEM : 170 événements corrélés en 9 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-254`",
    "reponse_v": "filtrage et analyse des requêtes DNS",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de exfiltration DNS."
  },
  {
    "id": 255,
    "question": "`Mini-TP attaque et parade\n\nService : messagerie sécurisée\nAttaque : supply chain compromise\nSymptôme : élévation de privilèges\nSIEM : 173 événements corrélés en 10 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-255`",
    "reponse_v": "SBOM, signatures et contrôles CI/CD",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de supply chain compromise."
  },
  {
    "id": 256,
    "question": "`Mini-TP attaque et parade\n\nService : gestion RH\nAttaque : attaque zero-day\nSymptôme : latence soudaine\nSIEM : 176 événements corrélés en 11 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-256`",
    "reponse_v": "défense en profondeur et réduction de surface",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de attaque zero-day."
  },
  {
    "id": 257,
    "question": "`Mini-TP attaque et parade\n\nService : ERP financier\nAttaque : phishing ciblé\nSymptôme : échecs d'authentification\nSIEM : 179 événements corrélés en 12 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-257`",
    "reponse_v": "MFA résistante au phishing, filtrage et sensibilisation",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de phishing ciblé."
  },
  {
    "id": 258,
    "question": "`Mini-TP attaque et parade\n\nService : base clients\nAttaque : credential stuffing\nSymptôme : trafic sortant anormal\nSIEM : 182 événements corrélés en 13 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-258`",
    "reponse_v": "MFA, détection d'anomalies et blocage des mots de passe compromis",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de credential stuffing."
  },
  {
    "id": 259,
    "question": "`Mini-TP attaque et parade\n\nService : portail usager\nAttaque : password spraying\nSymptôme : fichiers chiffrés\nSIEM : 185 événements corrélés en 14 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-259`",
    "reponse_v": "MFA et détection de tentatives distribuées",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de password spraying."
  },
  {
    "id": 260,
    "question": "`Mini-TP attaque et parade\n\nService : API partenaires\nAttaque : ransomware\nSymptôme : requêtes HTTP atypiques\nSIEM : 188 événements corrélés en 15 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-260`",
    "reponse_v": "segmentation, EDR et sauvegardes immuables testées",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de ransomware."
  },
  {
    "id": 261,
    "question": "`Mini-TP attaque et parade\n\nService : paiement instantané\nAttaque : DDoS volumétrique\nSymptôme : pics DNS\nSIEM : 191 événements corrélés en 1 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-261`",
    "reponse_v": "protection anti-DDoS et absorption amont",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de DDoS volumétrique."
  },
  {
    "id": 262,
    "question": "`Mini-TP attaque et parade\n\nService : plateforme e-commerce\nAttaque : injection SQL\nSymptôme : élévation de privilèges\nSIEM : 194 événements corrélés en 2 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-262`",
    "reponse_v": "requêtes préparées et moindre privilège SQL",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de injection SQL."
  },
  {
    "id": 263,
    "question": "`Mini-TP attaque et parade\n\nService : plateforme de facturation\nAttaque : XSS stocké\nSymptôme : latence soudaine\nSIEM : 197 événements corrélés en 3 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-263`",
    "reponse_v": "encodage de sortie et CSP",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de XSS stocké."
  },
  {
    "id": 264,
    "question": "`Mini-TP attaque et parade\n\nService : gestion documentaire\nAttaque : CSRF\nSymptôme : échecs d'authentification\nSIEM : 200 événements corrélés en 4 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-264`",
    "reponse_v": "jetons anti-CSRF et cookies SameSite",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de CSRF."
  },
  {
    "id": 265,
    "question": "`Mini-TP attaque et parade\n\nService : collecte de télémétrie\nAttaque : attaque MITM\nSymptôme : trafic sortant anormal\nSIEM : 203 événements corrélés en 5 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-265`",
    "reponse_v": "TLS validé et authentification des pairs",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de attaque MITM."
  },
  {
    "id": 266,
    "question": "`Mini-TP attaque et parade\n\nService : supervision réseau\nAttaque : ARP spoofing\nSymptôme : fichiers chiffrés\nSIEM : 206 événements corrélés en 6 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-266`",
    "reponse_v": "DHCP snooping et inspection ARP dynamique",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de ARP spoofing."
  },
  {
    "id": 267,
    "question": "`Mini-TP attaque et parade\n\nService : gestion des identités\nAttaque : DNS cache poisoning\nSymptôme : requêtes HTTP atypiques\nSIEM : 209 événements corrélés en 7 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-267`",
    "reponse_v": "DNSSEC et résolveurs durcis",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de DNS cache poisoning."
  },
  {
    "id": 268,
    "question": "`Mini-TP attaque et parade\n\nService : annuaire d'entreprise\nAttaque : exfiltration DNS\nSymptôme : pics DNS\nSIEM : 212 événements corrélés en 8 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-268`",
    "reponse_v": "filtrage et analyse des requêtes DNS",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de exfiltration DNS."
  },
  {
    "id": 269,
    "question": "`Mini-TP attaque et parade\n\nService : système de réservation\nAttaque : supply chain compromise\nSymptôme : élévation de privilèges\nSIEM : 215 événements corrélés en 9 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-269`",
    "reponse_v": "SBOM, signatures et contrôles CI/CD",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de supply chain compromise."
  },
  {
    "id": 270,
    "question": "`Mini-TP attaque et parade\n\nService : messagerie sécurisée\nAttaque : attaque zero-day\nSymptôme : latence soudaine\nSIEM : 218 événements corrélés en 10 minutes\n\nQuelle parade est la plus pertinente ?\n\nRéférence exercice : RESILIENCE-270`",
    "reponse_v": "défense en profondeur et réduction de surface",
    "reponse_f1": "Désactiver les journaux et augmenter les privilèges",
    "reponse_f2": "Ouvrir davantage de ports pour réduire les erreurs",
    "explication": "La parade doit cibler le vecteur principal de attaque zero-day."
  },
  {
    "id": 271,
    "question": "`Mini-TP exercice de résilience\n\nApplication : paiement instantané\nScénario : perte de zone\nRTO cible : 15 minutes\nUtilisateurs simulés : 100\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-271`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 272,
    "question": "`Mini-TP exercice de résilience\n\nApplication : système de réservation\nScénario : coupure intersite\nRTO cible : 20 minutes\nUtilisateurs simulés : 147\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-272`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 273,
    "question": "`Mini-TP exercice de résilience\n\nApplication : plateforme e-commerce\nScénario : panne du load balancer\nRTO cible : 25 minutes\nUtilisateurs simulés : 194\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-273`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 274,
    "question": "`Mini-TP exercice de résilience\n\nApplication : messagerie sécurisée\nScénario : corruption de base\nRTO cible : 30 minutes\nUtilisateurs simulés : 241\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-274`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 275,
    "question": "`Mini-TP exercice de résilience\n\nApplication : plateforme de facturation\nScénario : indisponibilité DNS\nRTO cible : 35 minutes\nUtilisateurs simulés : 288\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-275`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 276,
    "question": "`Mini-TP exercice de résilience\n\nApplication : gestion RH\nScénario : perte de l'annuaire\nRTO cible : 40 minutes\nUtilisateurs simulés : 335\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-276`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 277,
    "question": "`Mini-TP exercice de résilience\n\nApplication : gestion documentaire\nScénario : saturation WAN\nRTO cible : 45 minutes\nUtilisateurs simulés : 382\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-277`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 278,
    "question": "`Mini-TP exercice de résilience\n\nApplication : ERP financier\nScénario : arrêt du stockage\nRTO cible : 50 minutes\nUtilisateurs simulés : 429\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-278`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 279,
    "question": "`Mini-TP exercice de résilience\n\nApplication : collecte de télémétrie\nScénario : panne d'un nœud\nRTO cible : 55 minutes\nUtilisateurs simulés : 476\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-279`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 280,
    "question": "`Mini-TP exercice de résilience\n\nApplication : base clients\nScénario : expiration d'un certificat\nRTO cible : 60 minutes\nUtilisateurs simulés : 523\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-280`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 281,
    "question": "`Mini-TP exercice de résilience\n\nApplication : supervision réseau\nScénario : perte de zone\nRTO cible : 65 minutes\nUtilisateurs simulés : 570\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-281`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 282,
    "question": "`Mini-TP exercice de résilience\n\nApplication : portail usager\nScénario : coupure intersite\nRTO cible : 70 minutes\nUtilisateurs simulés : 617\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-282`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 283,
    "question": "`Mini-TP exercice de résilience\n\nApplication : gestion des identités\nScénario : panne du load balancer\nRTO cible : 75 minutes\nUtilisateurs simulés : 664\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-283`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 284,
    "question": "`Mini-TP exercice de résilience\n\nApplication : API partenaires\nScénario : corruption de base\nRTO cible : 80 minutes\nUtilisateurs simulés : 711\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-284`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 285,
    "question": "`Mini-TP exercice de résilience\n\nApplication : annuaire d'entreprise\nScénario : indisponibilité DNS\nRTO cible : 85 minutes\nUtilisateurs simulés : 758\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-285`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 286,
    "question": "`Mini-TP exercice de résilience\n\nApplication : paiement instantané\nScénario : perte de l'annuaire\nRTO cible : 90 minutes\nUtilisateurs simulés : 805\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-286`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 287,
    "question": "`Mini-TP exercice de résilience\n\nApplication : système de réservation\nScénario : saturation WAN\nRTO cible : 95 minutes\nUtilisateurs simulés : 852\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-287`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 288,
    "question": "`Mini-TP exercice de résilience\n\nApplication : plateforme e-commerce\nScénario : arrêt du stockage\nRTO cible : 100 minutes\nUtilisateurs simulés : 899\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-288`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 289,
    "question": "`Mini-TP exercice de résilience\n\nApplication : messagerie sécurisée\nScénario : panne d'un nœud\nRTO cible : 105 minutes\nUtilisateurs simulés : 946\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-289`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 290,
    "question": "`Mini-TP exercice de résilience\n\nApplication : plateforme de facturation\nScénario : expiration d'un certificat\nRTO cible : 110 minutes\nUtilisateurs simulés : 993\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-290`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 291,
    "question": "`Mini-TP exercice de résilience\n\nApplication : gestion RH\nScénario : perte de zone\nRTO cible : 115 minutes\nUtilisateurs simulés : 1040\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-291`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 292,
    "question": "`Mini-TP exercice de résilience\n\nApplication : gestion documentaire\nScénario : coupure intersite\nRTO cible : 120 minutes\nUtilisateurs simulés : 1087\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-292`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 293,
    "question": "`Mini-TP exercice de résilience\n\nApplication : ERP financier\nScénario : panne du load balancer\nRTO cible : 125 minutes\nUtilisateurs simulés : 1134\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-293`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 294,
    "question": "`Mini-TP exercice de résilience\n\nApplication : collecte de télémétrie\nScénario : corruption de base\nRTO cible : 130 minutes\nUtilisateurs simulés : 1181\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-294`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 295,
    "question": "`Mini-TP exercice de résilience\n\nApplication : base clients\nScénario : indisponibilité DNS\nRTO cible : 135 minutes\nUtilisateurs simulés : 1228\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-295`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 296,
    "question": "`Mini-TP exercice de résilience\n\nApplication : supervision réseau\nScénario : perte de l'annuaire\nRTO cible : 140 minutes\nUtilisateurs simulés : 1275\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-296`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 297,
    "question": "`Mini-TP exercice de résilience\n\nApplication : portail usager\nScénario : saturation WAN\nRTO cible : 145 minutes\nUtilisateurs simulés : 1322\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-297`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 298,
    "question": "`Mini-TP exercice de résilience\n\nApplication : gestion des identités\nScénario : arrêt du stockage\nRTO cible : 150 minutes\nUtilisateurs simulés : 1369\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-298`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 299,
    "question": "`Mini-TP exercice de résilience\n\nApplication : API partenaires\nScénario : panne d'un nœud\nRTO cible : 155 minutes\nUtilisateurs simulés : 1416\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-299`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  },
  {
    "id": 300,
    "question": "`Mini-TP exercice de résilience\n\nApplication : annuaire d'entreprise\nScénario : expiration d'un certificat\nRTO cible : 160 minutes\nUtilisateurs simulés : 1463\n\nQuelle démarche est la plus rigoureuse ?\n\nRéférence exercice : RESILIENCE-300`",
    "reponse_v": "Mesurer la durée réelle, vérifier les dépendances et valider fonctionnellement",
    "reponse_f1": "Vérifier uniquement le ping",
    "reponse_f2": "Considérer l'exercice réussi dès l'alerte",
    "explication": "Un exercice doit démontrer la reprise technique et métier."
  }
]
