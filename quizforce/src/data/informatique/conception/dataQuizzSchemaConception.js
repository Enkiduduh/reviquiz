export const dataQuizzSchemaConception = [
  {
    id: 1,
    question: `
                   +----------------------------------+
                   |      Gestion Bibliothèque        |
                   |                                  |
Lecteur ---------->| Emprunter un livre               |
                   |          ^                       |
                   |          |                       |
                   |      <<_____>>                   |
                   |          |                       |
                   | Vérifier abonnement              |
                   +----------------------------------+

Quel élément manque ?
`,
    reponse_f1: "<<extend>>",
    reponse_v: "<<include>>",
    reponse_f2: "Généralisation",
  },
  {
    id: 2,
    question: `
                  Administrateur
                         ^
                         |
                    __________
                         |
                    Gestionnaire

Quelle relation manque ?
`,
    reponse_f1: "Association",
    reponse_v: "Généralisation",
    reponse_f2: "<<include>>",
  },
  {
    id: 3,
    question: `
                   +----------------------------------+
                   |      Site e-commerce             |
                   |                                  |
Client ----------->| Passer commande                  |
                   |          |                       |
                   |     <<include>>                  |
                   |          |                       |
                   |        ?????                     |
                   +----------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Consulter catalogue",
    reponse_v: "Payer la commande",
    reponse_f2: "Créer un compte administrateur",
  },
  {
    id: 4,
    question: `
                 Client

                    |
                    |

             Consulter catalogue

                    |
                 <<_____>>

                    |

             Rechercher un produit

Quelle relation manque ?
`,
    reponse_f1: "<<extend>>",
    reponse_v: "<<include>>",
    reponse_f2: "Généralisation",
  },
  {
    id: 5,
    question: `
               +-------------------------------+
               | Gestion des comptes           |
               |                               |
Utilisateur -->| Se connecter                  |
               |                               |
Administrateur>| ?????                         |
               +-------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Modifier son mot de passe",
    reponse_v: "Créer un utilisateur",
    reponse_f2: "Consulter son profil",
  },
  {
    id: 6,
    question: `
                 Client

                    |
                    |

              Effectuer paiement

                    |
               <<_____>>

                    |

             Vérifier le paiement

Quel stéréotype manque ?
`,
    reponse_f1: "<<extend>>",
    reponse_v: "<<include>>",
    reponse_f2: "Association",
  },
  {
    id: 7,
    question: `
                 Employé
                    ^
                    |
              _____________
                    |
                 Manager

Quelle relation manque ?
`,
    reponse_f1: "<<include>>",
    reponse_v: "Généralisation",
    reponse_f2: "<<extend>>",
  },
  {
    id: 8,
    question: `
             +----------------------------------+
             | Gestion Hôtel                    |
             |                                  |
Client ----->| Réserver une chambre             |
             |                                  |
             | <<_____>>                        |
             |                                  |
             | Vérifier disponibilité           |
             +----------------------------------+

Quel élément manque ?
`,
    reponse_f1: "<<extend>>",
    reponse_v: "<<include>>",
    reponse_f2: "Association",
  },
  {
    id: 9,
    question: `
               Client

                  |
                  |

            Annuler commande

                  ^
                  |
             <<_____>>

                  |

          Envoyer un email

Quel stéréotype manque ?
`,
    reponse_f1: "<<include>>",
    reponse_v: "<<extend>>",
    reponse_f2: "Généralisation",
  },
  {
    id: 10,
    question: `
               +--------------------------------+
               | Gestion Banque                 |
               |                                |
Client ------->| Consulter ses comptes          |
               |                                |
Conseiller --->| ?????                          |
               +--------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Effectuer un virement",
    reponse_v: "Valider un crédit",
    reponse_f2: "Modifier son mot de passe",
  }, {
    id: 11,
    question: `
                 +--------------------------------------+
                 | Gestion des examens                  |
                 |                                      |
Étudiant ------->| Passer un examen                     |
                 |          |                           |
                 |     <<include>>                      |
                 |          |                           |
                 |       ?????                          |
                 +--------------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Consulter les notes",
    reponse_v: "S'authentifier",
    reponse_f2: "Créer un examen",
  },
  {
    id: 12,
    question: `
                     Administrateur
                           ^
                           |
                      _____________
                           |
                       SuperAdmin

Quelle relation manque ?
`,
    reponse_f1: "Association",
    reponse_v: "Généralisation",
    reponse_f2: "<<extend>>",
  },
  {
    id: 13,
    question: `
               +----------------------------------+
               | Gestion Cinéma                   |
               |                                  |
Client ------->| Réserver une séance              |
               |                                  |
Employé ------>| ?????                            |
               +----------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Acheter du popcorn",
    reponse_v: "Créer une séance",
    reponse_f2: "Consulter les horaires",
  },
  {
    id: 14,
    question: `
Utilisateur

     |

Consulter facture

     ^
     |

<<_____>>

     |

Télécharger PDF

Quel stéréotype manque ?
`,
    reponse_f1: "<<include>>",
    reponse_v: "<<extend>>",
    reponse_f2: "Association",
  },
  {
    id: 15,
    question: `
                +--------------------------------+
                | Gestion RH                     |
                |                                |
Employé ------->| Poser un congé                 |
                |                                |
                | <<_____>>                      |
                |                                |
                | Vérifier le solde              |
                +--------------------------------+

Quel élément manque ?
`,
    reponse_f1: "<<extend>>",
    reponse_v: "<<include>>",
    reponse_f2: "Généralisation",
  },
  {
    id: 16,
    question: `
                 Client

                    |
                    |

             Suivre une commande

                    |

                _________

                    |

          Consulter le statut

Quelle relation manque ?
`,
    reponse_f1: "<<extend>>",
    reponse_v: "<<include>>",
    reponse_f2: "Généralisation",
  },
  {
    id: 17,
    question: `
              +----------------------------------+
              | Gestion Médiathèque              |
              |                                  |
Lecteur ----->| Réserver un DVD                  |
              |                                  |
Bibliothécaire| ?????                            |
              +----------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Consulter catalogue",
    reponse_v: "Ajouter un DVD",
    reponse_f2: "Emprunter un DVD",
  },
  {
    id: 18,
    question: `
                Utilisateur

                     ^

                     |

                ___________

                     |

                  Client VIP

Quelle relation manque ?
`,
    reponse_f1: "Association",
    reponse_v: "Généralisation",
    reponse_f2: "<<include>>",
  },
  {
    id: 19,
    question: `
                +----------------------------------+
                | Gestion Parking                  |
                |                                  |
Conducteur ---->| Entrer dans le parking           |
                |                                  |
                | <<include>>                      |
                |                                  |
                | ?????                            |
                +----------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Choisir une place",
    reponse_v: "Contrôler le badge",
    reponse_f2: "Payer le stationnement",
  },
  {
    id: 20,
    question: `
                +-----------------------------------+
                | Gestion Université                |
                |                                   |
Étudiant ------>| S'inscrire à une UE               |
                |                                   |
Secrétariat --->| ?????                             |
                +-----------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Consulter son emploi du temps",
    reponse_v: "Créer une UE",
    reponse_f2: "Télécharger un relevé de notes",
  }, {
    id: 21,
    question: `
                    +--------------------------------------+
                    |      Gestion Bibliothèque            |
                    |                                      |
Lecteur ----------->| Rechercher un livre                  |
                    |                                      |
Lecteur ----------->| Emprunter un livre                   |
                    |          |                           |
                    |      <<_____>>                       |
                    |          |                           |
                    |      Vérifier abonnement             |
                    |                                      |
Bibliothécaire ---->| Enregistrer un retour                |
                    +--------------------------------------+

Quel élément manque ?
`,
    reponse_f1: "<<extend>>",
    reponse_v: "<<include>>",
    reponse_f2: "Association",
  },
  {
    id: 22,
    question: `
                  +--------------------------------------+
                  |      Gestion Banque                  |
                  |                                      |
Client ---------->| Effectuer un virement                |
                  |          |                           |
                  |      <<include>>                     |
                  |          |                           |
                  |        ?????                         |
                  |                                      |
Conseiller ------>| Valider un prêt                      |
                  +--------------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Consulter le solde",
    reponse_v: "S'authentifier",
    reponse_f2: "Créer un compte",
  },
  {
    id: 23,
    question: `
                 Utilisateur

                      ^

                      |

               __________________

                |             |

             Client       Employé

Quelle relation manque ?
`,
    reponse_f1: "Association",
    reponse_v: "Généralisation",
    reponse_f2: "<<include>>",
  },
  {
    id: 24,
    question: `
                +--------------------------------------+
                |      Gestion Hôtel                   |
                |                                      |
Client -------->| Réserver une chambre                 |
                |          |                           |
                |      <<include>>                     |
                |          |                           |
                |      Vérifier disponibilité          |
                |                                      |
Client -------->| ?????                                |
                +--------------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Créer une chambre",
    reponse_v: "Annuler une réservation",
    reponse_f2: "Consulter les employés",
  },
  {
    id: 25,
    question: `
                   Client

                      |

                Passer commande

                      ^

                 <<_____>>

                      |

                Appliquer un code promo

Quel stéréotype manque ?
`,
    reponse_f1: "<<include>>",
    reponse_v: "<<extend>>",
    reponse_f2: "Généralisation",
  },
  {
    id: 26,
    question: `
              +--------------------------------------+
              |      Gestion Université              |
              |                                      |
Étudiant ---->| S'inscrire à une UE                  |
              |                                      |
Étudiant ---->| Consulter ses notes                  |
              |                                      |
Secrétaire -->| ?????                                |
              +--------------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Passer un examen",
    reponse_v: "Créer une UE",
    reponse_f2: "Télécharger un relevé",
  },
  {
    id: 27,
    question: `
                 Administrateur

                        ^

                        |

                  _____________

                        |

                     Responsable

                        ^

                        |

                     Directeur

Les deux relations représentées sont des :
`,
    reponse_f1: "Associations",
    reponse_v: "Généralisations",
    reponse_f2: "<<include>>",
  },
  {
    id: 28,
    question: `
              +--------------------------------------+
              |      Gestion Restaurant              |
              |                                      |
Client ------>| Réserver une table                   |
              |                                      |
              | <<_____>>                            |
              |                                      |
              | Vérifier les disponibilités          |
              |                                      |
Serveur ----->| Enregistrer une commande             |
              +--------------------------------------+

Quel élément manque ?
`,
    reponse_f1: "<<extend>>",
    reponse_v: "<<include>>",
    reponse_f2: "Association",
  },
  {
    id: 29,
    question: `
                   +--------------------------------------+
                   |      Gestion Boutique                |
                   |                                      |
Client ----------->| Acheter un produit                   |
                   |          |                           |
                   |      <<include>>                     |
                   |          |                           |
                   |        ?????                         |
                   |                                      |
Client ----------->| Suivre une commande                  |
                   +--------------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Consulter les promotions",
    reponse_v: "Effectuer le paiement",
    reponse_f2: "Créer un fournisseur",
  },
  {
    id: 30,
    question: `
                  +--------------------------------------+
                  |      Gestion RH                      |
                  |                                      |
Employé --------->| Déclarer une absence                 |
                  |                                      |
Manager --------->| Valider une absence                  |
                  |                                      |
RH -------------->| ?????                                |
                  +--------------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Consulter son planning",
    reponse_v: "Créer un employé",
    reponse_f2: "Déclarer une absence",
  }, {
    id: 31,
    question: `
                   +--------------------------------------------+
                   |        Gestion d'une médiathèque           |
                   |                                            |
Lecteur ---------->| Emprunter un document                      |
                   |           |                                |
                   |      <<_____>>                             |
                   |           |                                |
                   | Vérifier les droits d'emprunt              |
                   |                                            |
Bibliothécaire --->| Enregistrer un retour                      |
                   +--------------------------------------------+

Quel stéréotype manque ?
`,
    reponse_f1: "<<extend>>",
    reponse_v: "<<include>>",
    reponse_f2: "Association",
  },
  {
    id: 32,
    question: `
                   +--------------------------------------------+
                   |          Gestion Hospitalière              |
                   |                                            |
Patient ---------->| Prendre un rendez-vous                     |
                   |                                            |
Médecin ---------->| ?????                                      |
                   |                                            |
Secrétaire ------->| Modifier un rendez-vous                    |
                   +--------------------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Consulter son dossier",
    reponse_v: "Consulter le dossier médical",
    reponse_f2: "Créer un patient",
  },
  {
    id: 33,
    question: `
                     Utilisateur

                          ^

                          |

                ______________________

                |                    |

            Employé            Prestataire

                                    ^

                                    |

                             Prestataire VIP

Combien de relations de généralisation contient ce diagramme ?
`,
    reponse_f1: "2",
    reponse_v: "3",
    reponse_f2: "4",
  },
  {
    id: 34,
    question: `
                +--------------------------------------------+
                |         Gestion Boutique                   |
                |                                            |
Client -------->| Passer une commande                        |
                |          |                                 |
                |     <<include>>                            |
                |          |                                 |
                |     Effectuer le paiement                  |
                |          ^                                 |
                |          |                                 |
                |     <<_____>>                              |
                |          |                                 |
                | Utiliser un bon de réduction               |
                +--------------------------------------------+

Quel stéréotype manque ?
`,
    reponse_f1: "<<include>>",
    reponse_v: "<<extend>>",
    reponse_f2: "Association",
  },
  {
    id: 35,
    question: `
                +--------------------------------------------+
                |         Gestion Université                 |
                |                                            |
Étudiant ------>| S'inscrire à une UE                        |
                |                                            |
Étudiant ------>| Consulter ses notes                        |
                |                                            |
Enseignant ---->| Saisir les notes                           |
                |                                            |
Administrateur->| ?????                                      |
                +--------------------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Passer un examen",
    reponse_v: "Créer une UE",
    reponse_f2: "Consulter les notes",
  },
  {
    id: 36,
    question: `
                    +----------------------------------------+
                    |          Gestion Banque                |
                    |                                        |
Client ------------>| Consulter ses comptes                  |
                    |                                        |
Client ------------>| Effectuer un virement                  |
                    |             |                          |
                    |        <<include>>                     |
                    |             |                          |
                    |       ?????                            |
                    |                                        |
Conseiller -------->| Valider un prêt                        |
                    +----------------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Créer un bénéficiaire",
    reponse_v: "S'authentifier",
    reponse_f2: "Télécharger un RIB",
  },
  {
    id: 37,
    question: `
              +---------------------------------------------+
              |         Gestion Restaurant                  |
              |                                             |
Client ------>| Réserver une table                          |
              |                                             |
Client ------>| Commander un repas                          |
              |            |                                |
              |      <<_____>>                              |
              |            |                                |
              | Vérifier la disponibilité des plats         |
              |                                             |
Serveur ----->| Encaisser le client                         |
              +---------------------------------------------+

Quel élément manque ?
`,
    reponse_f1: "<<extend>>",
    reponse_v: "<<include>>",
    reponse_f2: "Généralisation",
  },
  {
    id: 38,
    question: `
                Administrateur

                       ^

                       |

                  Responsable

                       ^

                       |

                  Chef d'équipe

                       ^

                       |

                    Employé

Combien d'acteurs sont représentés ?
`,
    reponse_f1: "3",
    reponse_v: "4",
    reponse_f2: "5",
  },
  {
    id: 39,
    question: `
                 +------------------------------------------+
                 |        Gestion Hôtel                     |
                 |                                          |
Client --------->| Réserver une chambre                     |
                 |                                          |
Client --------->| Annuler une réservation                  |
                 |                                          |
Réceptionniste ->| Attribuer une chambre                    |
                 |                                          |
Réceptionniste ->| ?????                                    |
                 +------------------------------------------+

Quel cas d'utilisation manque ?
`,
    reponse_f1: "Réserver une chambre",
    reponse_v: "Enregistrer le départ d'un client",
    reponse_f2: "Consulter les disponibilités",
  },
  {
    id: 40,
    question: `
                  +--------------------------------------------+
                  |      Gestion d'un site e-commerce          |
                  |                                            |
Client ---------->| Créer un compte                            |
Client ---------->| Passer une commande                        |
Client ---------->| Suivre une commande                        |
Administrateur --->| Gérer les produits                        |
Administrateur --->| Gérer les utilisateurs                    |
Gestionnaire ----->| ?????                                     |
                  +--------------------------------------------+

Quel cas d'utilisation est le plus cohérent ?
`,
    reponse_f1: "Passer une commande",
    reponse_v: "Gérer les commandes",
    reponse_f2: "Créer un compte",
  }, {
    id: 41,
    question: `
            +-----------+             +------------+
            |  Client   | ___________ | Commande   |
            +-----------+             +------------+

Quelle relation manque entre ces deux classes ?
`,
    reponse_f1: "Héritage",
    reponse_v: "Association",
    reponse_f2: "Composition",
  },
  {
    id: 42,
    question: `
            +-------------+
            |   Véhicule  |
            +-------------+
                   ^
                   |
              __________
                   |
            +-------------+
            |    Voiture  |
            +-------------+

Quelle relation manque ?
`,
    reponse_f1: "Association",
    reponse_v: "Généralisation (Héritage)",
    reponse_f2: "Agrégation",
  },
  {
    id: 43,
    question: `
+-----------+ ◇──────────── +----------+
| Equipe    |               | Joueur   |
+-----------+               +----------+

Quel type de relation représente le losange blanc ?
`,
    reponse_f1: "Composition",
    reponse_v: "Agrégation",
    reponse_f2: "Dépendance",
  },
  {
    id: 44,
    question: `
+-----------+ ◆──────────── +----------+
| Maison    |               | Pièce    |
+-----------+               +----------+

Quel type de relation représente le losange noir ?
`,
    reponse_f1: "Agrégation",
    reponse_v: "Composition",
    reponse_f2: "Association",
  },
  {
    id: 45,
    question: `
+------------+         +------------+
| Client     | 1 ____ *| Commande   |
+------------+         +------------+

Quelle cardinalité manque côté Commande ?
`,
    reponse_f1: "0..1",
    reponse_v: "0..*",
    reponse_f2: "1..1",
  },
  {
    id: 46,
    question: `
+------------+
| Compte     |
+------------+
| - numero   |
| _____ solde|
+------------+

Quel symbole de visibilité manque devant 'solde' pour représenter un attribut privé ?
`,
    reponse_f1: "+",
    reponse_v: "-",
    reponse_f2: "#",
  },
  {
    id: 47,
    question: `
+-------------+
| Animal      |
+-------------+
| + manger()  |
| ___________ |
+-------------+

Quel élément manque pour représenter une méthode abstraite ?
`,
    reponse_f1: "Souligner la méthode",
    reponse_v: "Écrire la méthode en italique (ou marquer la classe comme abstraite)",
    reponse_f2: "Ajouter un losange",
  },
  {
    id: 48,
    question: `
+-------------+
| Paiement    |
+-------------+
        ▲
        |
  - - - - - - -
        |
+-------------+
| CarteBleue  |
+-------------+

Quel type de relation est représenté par la ligne en pointillés ?
`,
    reponse_f1: "Association",
    reponse_v: "Réalisation (implémentation d'interface)",
    reponse_f2: "Composition",
  },
  {
    id: 49,
    question: `
+------------+           +------------+
| Facture    | --------> | Client     |
+------------+           +------------+

Cette flèche indique principalement :
`,
    reponse_f1: "Une composition",
    reponse_v: "Une association navigable",
    reponse_f2: "Une généralisation",
  },
  {
    id: 50,
    question: `
+------------+
| Produit    |
+------------+
| nom        |
| prix       |
| __________ |
+------------+

Quel élément manque ?
`,
    reponse_f1: "Une cardinalité",
    reponse_v: "Une opération (méthode)",
    reponse_f2: "Une interface",
  }, {
    id: 51,
    question: `
+------------+             +------------+
| Client     |1          ? | Adresse    |
+------------+-------------+------------+

Un client peut posséder plusieurs adresses.
Quelle cardinalité manque côté Adresse ?
`,
    reponse_f1: "0..1",
    reponse_v: "0..*",
    reponse_f2: "1",
  },
  {
    id: 52,
    question: `
+------------+             +------------+
| Commande   |*          1 | Client     |
+------------+-------------+------------+

Cette relation signifie que :
`,
    reponse_f1: "Une commande possède plusieurs clients.",
    reponse_v: "Un client peut avoir plusieurs commandes.",
    reponse_f2: "Chaque commande appartient à plusieurs clients.",
  },
  {
    id: 53,
    question: `
          <<interface>>

         +---------------+
         | Paiement      |
         +---------------+
         | +payer()      |
         +---------------+
                ▲
                |
        - - - - ? - - - -

         +---------------+
         | CarteBleue    |
         +---------------+

Quelle relation manque ?
`,
    reponse_f1: "Association",
    reponse_v: "Réalisation",
    reponse_f2: "Composition",
  },
  {
    id: 54,
    question: `
      <<abstract>>

      +----------------+
      | Animal         |
      +----------------+
      | +crier()       |
      +----------------+
             ^
             |
        __________
             |
      +----------------+
      | Chien          |
      +----------------+

Quelle relation manque ?
`,
    reponse_f1: "Association",
    reponse_v: "Généralisation",
    reponse_f2: "Agrégation",
  },
  {
    id: 55,
    question: `
+------------+ ◆──────────── +------------+
| Commande   |               | LigneCmd   |
+------------+               +------------+

Pourquoi utilise-t-on une composition ici ?
`,
    reponse_f1: "Pour améliorer les performances.",
    reponse_v: "Parce qu'une ligne de commande n'existe pas sans sa commande.",
    reponse_f2: "Parce que plusieurs commandes partagent la même ligne.",
  },
  {
    id: 56,
    question: `
+------------+
| Utilisateur|
+------------+
| +nom       |
| #email     |
| _____mdp   |
+------------+

Quel symbole manque devant 'mdp' pour représenter un attribut privé ?
`,
    reponse_f1: "#",
    reponse_v: "-",
    reponse_f2: "+",
  },
  {
    id: 57,
    question: `
+------------+          +------------+
| Produit    | ?------* | Catégorie  |
+------------+          +------------+

Un produit appartient à une seule catégorie.

Quelle cardinalité manque côté Produit ?
`,
    reponse_f1: "0..*",
    reponse_v: "1",
    reponse_f2: "0..1",
  },
  {
    id: 58,
    question: `
+------------+
| Facture    |
+------------+
| +calculer()|
| __________ |
+------------+

Quel compartiment manque sous les opérations ?
`,
    reponse_f1: "Les cardinalités",
    reponse_v: "Aucun, une classe UML ne possède que trois compartiments principaux.",
    reponse_f2: "Les associations",
  },
  {
    id: 59,
    question: `
+------------+
| Compte     |
+------------+
| +solde     |
|------------|
| +deposer() |
| +retirer() |
| _____      |
+------------+

Quel élément manque ?
`,
    reponse_f1: "Une cardinalité",
    reponse_v: "Une opération supplémentaire",
    reponse_f2: "Une généralisation",
  },
  {
    id: 60,
    question: `
+------------+         +------------+
| Employé    |<>------>| Service    |
+------------+         +------------+

Le losange blanc indique :
`,
    reponse_f1: "Une composition",
    reponse_v: "Une agrégation",
    reponse_f2: "Une dépendance",
  }, {
    id: 61,
    question: `
+-----------+      1      ?      +------------+
| Client    |--------------------| Commande   |
+-----------+                    +------------+

Un client peut passer plusieurs commandes.
Quelle cardinalité manque côté Commande ?
`,
    reponse_f1: "1",
    reponse_v: "0..*",
    reponse_f2: "0..1",
  },
  {
    id: 62,
    question: `
                <<interface>>
                +----------------+
                | Authentifiable |
                +----------------+
                | +login()       |
                +----------------+
                        ▲
                 - - - - ? - - - -
                        |
                +----------------+
                | Utilisateur    |
                +----------------+

Quelle relation manque ?
`,
    reponse_f1: "Association",
    reponse_v: "Réalisation",
    reponse_f2: "Composition",
  },
  {
    id: 63,
    question: `
+------------+ ◆──────────── +------------+
| Facture    |               | LigneFact. |
+------------+               +------------+

Si une facture est supprimée, que deviennent les lignes de facture ?
`,
    reponse_f1: "Elles restent en base.",
    reponse_v: "Elles sont supprimées également.",
    reponse_f2: "Elles sont transférées vers une autre facture.",
  },
  {
    id: 64,
    question: `
            +------------+
            | Personne   |
            +------------+
                   ^
                   |
              ____________
              |
      +---------------+
      | Étudiant      |
      +---------------+

Quel type de relation est représenté ?
`,
    reponse_f1: "Association",
    reponse_v: "Généralisation",
    reponse_f2: "Agrégation",
  },
  {
    id: 65,
    question: `
+-----------+  *        *  +-----------+
| Étudiant  |------------->| Cours     |
+-----------+              +-----------+

Cette cardinalité signifie que :
`,
    reponse_f1: "Un cours ne possède qu'un étudiant.",
    reponse_v: "Un étudiant suit plusieurs cours et un cours accueille plusieurs étudiants.",
    reponse_f2: "Chaque étudiant suit un seul cours.",
  },
  {
    id: 66,
    question: `
+------------+
| Compte     |
+------------+
| -numero    |
| -solde     |
|------------|
| +deposer() |
| +retirer() |
| _____       |
+------------+

Quel élément est le plus cohérent ?
`,
    reponse_f1: "Une cardinalité",
    reponse_v: "+consulterSolde()",
    reponse_f2: "Une composition",
  },
  {
    id: 67,
    question: `
+------------+ ◇──────────── +------------+
| Équipe     |               | Joueur     |
+------------+               +------------+

Pourquoi utilise-t-on une agrégation ?
`,
    reponse_f1: "Parce que les joueurs disparaissent lorsque l'équipe est supprimée.",
    reponse_v: "Parce qu'un joueur peut exister indépendamment de l'équipe.",
    reponse_f2: "Parce qu'une équipe ne contient qu'un seul joueur.",
  },
  {
    id: 68,
    question: `
             <<abstract>>
            +----------------+
            | Véhicule       |
            +----------------+
            | +demarrer()    |
            +----------------+
                    ^
                    |
             _____________
                    |
              +-------------+
              | Moto        |
              +-------------+

Une classe abstraite :
`,
    reponse_f1: "Peut être instanciée directement.",
    reponse_v: "Ne peut pas être instanciée directement.",
    reponse_f2: "Est forcément une interface.",
  },
  {
    id: 69,
    question: `
+-----------+       1     ?      +-----------+
| Département|-------------------| Employé   |
+-----------+                    +-----------+

Chaque employé appartient à un seul département.
Un département possède plusieurs employés.

Quelle cardinalité manque côté Employé ?
`,
    reponse_f1: "0..1",
    reponse_v: "0..*",
    reponse_f2: "1",
  },
  {
    id: 70,
    question: `
                 <<interface>>
                +----------------+
                | Exportable     |
                +----------------+
                | +exporter()    |
                +----------------+

                        ▲
                 - - - - - - -

                        |

              +------------------+
              | Facture          |
              +------------------+

Quelle affirmation est correcte ?
`,
    reponse_f1: "Facture hérite de Exportable.",
    reponse_v: "Facture implémente l'interface Exportable.",
    reponse_f2: "Facture est composée de Exportable.",
  }, , {
    id: 71,
    question: `
                   +-------------+
                   | Utilisateur |
                   +-------------+
                          ^
                          |
                     ____________
                    |            |
             Client          Employé
                                ^
                                |
                           Administrateur

Combien de relations de généralisation sont présentes ?
`,
    reponse_f1: "2",
    reponse_v: "3",
    reponse_f2: "4",
  },
  {
    id: 72,
    question: `
+------------+ ◆──────────── +---------------+
| Commande   |               | LigneCommande |
+------------+               +---------------+
      |                             |
      |                             |
      |1                          * |
      +-----------------------------+

Pourquoi la composition est-elle utilisée ?
`,
    reponse_f1: "Pour améliorer les performances.",
    reponse_v: "Une ligne de commande ne peut pas exister sans une commande.",
    reponse_f2: "Parce qu'une ligne peut appartenir à plusieurs commandes.",
  },
  {
    id: 73,
    question: `
                <<interface>>
               +----------------+
               | Imprimable     |
               +----------------+
               | +imprimer()    |
               +----------------+
                      ▲
                - - - - - -
                      |
          +----------------------+
          | Facture              |
          +----------------------+

Quel est le rôle de la classe Facture ?
`,
    reponse_f1: "Elle hérite de Imprimable.",
    reponse_v: "Elle implémente l'interface Imprimable.",
    reponse_f2: "Elle agrège Imprimable.",
  },
  {
    id: 74,
    question: `
+-----------+      1      ?      +-------------+
| Client    |--------------------| Adresse     |
+-----------+                    +-------------+

Un client doit posséder au moins une adresse et peut en posséder plusieurs.

Quelle cardinalité manque ?
`,
    reponse_f1: "0..*",
    reponse_v: "1..*",
    reponse_f2: "0..1",
  },
  {
    id: 75,
    question: `
+--------------------+
| Produit            |
+--------------------+
| -id                |
| -nom               |
| -prix              |
|--------------------|
| +modifierPrix()    |
| _____              |
+--------------------+

Quel élément est le plus cohérent ?
`,
    reponse_f1: "Une cardinalité",
    reponse_v: "+calculerTVA()",
    reponse_f2: "Une interface",
  },
  {
    id: 76,
    question: `
+-------------+ ◇──────────── +-------------+
| Bibliothèque|               | Livre       |
+-------------+               +-------------+

Si la bibliothèque est supprimée, les livres :
`,
    reponse_f1: "Sont supprimés automatiquement.",
    reponse_v: "Peuvent continuer d'exister.",
    reponse_f2: "Deviennent abstraits.",
  },
  {
    id: 77,
    question: `
+-------------+      *      *      +-------------+
| Étudiant    |--------------------| UE          |
+-------------+                    +-------------+

Cette association représente :
`,
    reponse_f1: "Une relation un-à-un.",
    reponse_v: "Une relation plusieurs-à-plusieurs.",
    reponse_f2: "Une composition.",
  },
  {
    id: 78,
    question: `
            <<abstract>>
           +----------------+
           | Paiement       |
           +----------------+
           | +payer()       |
           +----------------+
                 ^
          _______|_______
          |             |
      Carte       Virement

Pourquoi Paiement est-elle abstraite ?
`,
    reponse_f1: "Parce qu'elle possède des attributs privés.",
    reponse_v: "Parce qu'elle représente un concept général destiné à être spécialisé.",
    reponse_f2: "Parce qu'elle implémente une interface.",
  },
  {
    id: 79,
    question: `
+------------+      1      ?      +------------+
| Facture    |--------------------| Client     |
+------------+                    +------------+

Chaque facture est liée à un seul client.
Un client peut posséder plusieurs factures.

Quelle cardinalité manque côté Facture ?
`,
    reponse_f1: "0..*",
    reponse_v: "1",
    reponse_f2: "0..1",
  },
  {
    id: 80,
    question: `
+----------------+
|    Client      |
+----------------+
        |
        | 1
        |
        |------------+
                     |
                     | *
             +----------------+
             |   Commande      |
             +----------------+
                     |
                     | ◆
                     |
                     | *
             +----------------+
             | LigneCommande  |
             +----------------+
                     |
                     | *
                     |
                     | 1
             +----------------+
             |    Produit     |
             +----------------+

Quelle affirmation est correcte ?
`,
    reponse_f1: "Un produit appartient à une seule ligne de commande.",
    reponse_v: "Une commande est composée de plusieurs lignes de commande, et chaque ligne référence un seul produit.",
    reponse_f2: "Une ligne de commande peut exister sans commande.",
  }, {
    id: 81,
    question: `
            +-----------+           +-----------+
            | CLIENT    |           | COMMANDE  |
            +-----------+           +-----------+
                  \\                 /
                   \\               /
                    \\   ?????     /
                     \\           /
                    +-------------+

Quel élément manque ?
`,
    reponse_f1: "Une entité",
    reponse_v: "Une association",
    reponse_f2: "Une cardinalité",
  },
  {
    id: 82,
    question: `
             CLIENT
             (idClient)

              (1,N)

                 |

          PASSER COMMANDE

                 |

             (0,N)

              COMMANDE

Que signifie la cardinalité (1,N) côté CLIENT ?
`,
    reponse_f1: "Un client peut passer au maximum une commande.",
    reponse_v: "Un client passe au moins une commande et peut en passer plusieurs.",
    reponse_f2: "Une commande appartient à plusieurs clients.",
  },
  {
    id: 83,
    question: `
             +-------------+
             | PRODUIT     |
             +-------------+
             | idProduit   |
             | nom         |
             | prix        |
             | ?????       |
             +-------------+

Quel élément manque ?
`,
    reponse_f1: "Une cardinalité",
    reponse_v: "Un attribut",
    reponse_f2: "Une association",
  },
  {
    id: 84,
    question: `
          CLIENT

          (0,1)

             |

        POSSEDER

             |

          (1,1)

        CARTE_FIDELITE

Que signifie la cardinalité (0,1) ?
`,
    reponse_f1: "Le client possède obligatoirement plusieurs cartes.",
    reponse_v: "Le client peut ne posséder aucune carte ou une seule.",
    reponse_f2: "Le client possède obligatoirement une carte.",
  },
  {
    id: 85,
    question: `
        ETUDIANT

           |

      INSCRIPTION

           |

          UE

Dans un MCD, INSCRIPTION est :
`,
    reponse_f1: "Une entité",
    reponse_v: "Une association",
    reponse_f2: "Une clé primaire",
  },
  {
    id: 86,
    question: `
             +-------------+
             | EMPLOYE     |
             +-------------+
             | idEmploye   |
             | nom         |
             | prenom      |
             +-------------+

Quel attribut constitue généralement l'identifiant ?
`,
    reponse_f1: "nom",
    reponse_v: "idEmploye",
    reponse_f2: "prenom",
  },
  {
    id: 87,
    question: `
      CLIENT

      (1,1)

         |

     HABITER

         |

      (0,N)

      ADRESSE

Que signifie la cardinalité (0,N) côté ADRESSE ?
`,
    reponse_f1: "Une adresse appartient à un seul client.",
    reponse_v: "Une adresse peut être liée à aucun ou plusieurs clients.",
    reponse_f2: "Une adresse appartient obligatoirement à plusieurs clients.",
  },
  {
    id: 88,
    question: `
      COMMANDE

          |

      CONTENIR

          |

      PRODUIT

Dans Merise, CONTENIR représente :
`,
    reponse_f1: "Une entité faible",
    reponse_v: "Une association",
    reponse_f2: "Une clé étrangère",
  },
  {
    id: 89,
    question: `
          CLIENT

          (1,1)

             |

          PAYER

             |

          (1,N)

          FACTURE

Quelle affirmation est correcte ?
`,
    reponse_f1: "Une facture peut être payée par plusieurs clients.",
    reponse_v: "Chaque facture est payée par un seul client, qui peut payer plusieurs factures.",
    reponse_f2: "Un client ne peut payer qu'une seule facture.",
  },
  {
    id: 90,
    question: `
        Quel est l'objectif principal d'un MCD ?

A. Décrire les tables SQL.

B. Décrire les traitements d'un programme.

C. Décrire les données et leurs relations indépendamment du SGBD.
`,
    reponse_f1: "A",
    reponse_v: "C",
    reponse_f2: "B",
  }, {
    id: 91,
    question: `
            CLIENT

           (1,N)

              |

          PASSER

              |

           (1,1)

          COMMANDE

Que signifie la cardinalité (1,1) côté COMMANDE ?
`,
    reponse_f1: "Une commande appartient à plusieurs clients.",
    reponse_v: "Chaque commande est passée par un seul client.",
    reponse_f2: "Une commande peut ne pas avoir de client.",
  },
  {
    id: 92,
    question: `
           ETUDIANT

              |

          SUIVRE

              |

             UE

L'association SUIVRE possède l'attribut :

- note

Pourquoi cet attribut appartient-il à l'association ?
`,
    reponse_f1: "Parce qu'une UE possède une seule note.",
    reponse_v: "Parce que la note dépend du couple (Étudiant, UE).",
    reponse_f2: "Parce que l'étudiant possède une seule note.",
  },
  {
    id: 93,
    question: `
+------------+
| PRODUIT    |
+------------+
| idProduit  |
| nom        |
| prix       |
+------------+

Quel attribut est généralement choisi comme identifiant ?
`,
    reponse_f1: "nom",
    reponse_v: "idProduit",
    reponse_f2: "prix",
  },
  {
    id: 94,
    question: `
          FOURNISSEUR

            (0,N)

               |

          LIVRER

               |

            (1,N)

            PRODUIT

Quelle affirmation est correcte ?
`,
    reponse_f1: "Chaque produit est livré par un seul fournisseur.",
    reponse_v: "Un fournisseur peut livrer plusieurs produits et chaque produit est livré par au moins un fournisseur.",
    reponse_f2: "Un fournisseur livre obligatoirement un seul produit.",
  },
  {
    id: 95,
    question: `
           CLIENT

              |

         EFFECTUER

              |

          PAIEMENT

L'association EFFECTUER possède :

- datePaiement

Ce choix est :
`,
    reponse_f1: "Toujours faux.",
    reponse_v: "Pertinent si la date caractérise la relation entre Client et Paiement.",
    reponse_f2: "Impossible en Merise.",
  },
  {
    id: 96,
    question: `
            COMMANDE

             (1,N)

                |

           CONTENIR

                |

             (0,N)

             PRODUIT

Quelle cardinalité signifie "participation facultative" ?
`,
    reponse_f1: "(1,N)",
    reponse_v: "(0,N)",
    reponse_f2: "(1,1)",
  },
  {
    id: 97,
    question: `
        EMPLOYE

           |

      TRAVAILLER

           |

      DEPARTEMENT

Quel est le rôle principal d'une association dans un MCD ?
`,
    reponse_f1: "Créer une clé primaire.",
    reponse_v: "Représenter un lien métier entre deux entités.",
    reponse_f2: "Décrire un traitement informatique.",
  },
  {
    id: 98,
    question: `
             CLIENT

            (0,1)

               |

         POSSEDER

               |

            (1,1)

         ABONNEMENT

Quelle affirmation est correcte ?
`,
    reponse_f1: "Chaque client possède obligatoirement un abonnement.",
    reponse_v: "Un client peut ne posséder aucun abonnement ou un seul.",
    reponse_f2: "Un abonnement peut appartenir à plusieurs clients.",
  },
  {
    id: 99,
    question: `
+------------+
| FACTURE    |
+------------+
| idFacture  |
| date       |
| montant    |
+------------+

Quelle propriété doit posséder un identifiant ?
`,
    reponse_f1: "Être obligatoirement numérique.",
    reponse_v: "Identifier de manière unique chaque occurrence.",
    reponse_f2: "Être composé de plusieurs attributs.",
  },
  {
    id: 100,
    question: `
                CLIENT

                   |

            PASSER COMMANDE

                   |

               COMMANDE

Pourquoi crée-t-on une association plutôt que de fusionner les deux entités ?
`,
    reponse_f1: "Pour avoir moins de tables SQL.",
    reponse_v: "Parce qu'elles représentent deux concepts métier distincts reliés entre eux.",
    reponse_f2: "Parce que Merise interdit les relations directes.",
  },


  {
    id: 101,
    question: `
             CLIENT                  COMMANDE
          +----------+            +-----------+
          | idClient |            | idCmd     |
          +----------+            +-----------+
                \\                  /
                 \\                /
                  \\   PASSER     /
                   \\            /
                    ( 1,N )(1,1 )

Quelle cardinalité est correcte côté COMMANDE ?
`,
    reponse_f1: "(0,N)",
    reponse_v: "(1,1)",
    reponse_f2: "(0,1)",
  },
  {
    id: 102,
    question: `
             ETUDIANT

                 |

            SUIVRE

                 |

                UE

L'association SUIVRE possède :

- annéeUniversitaire
- note

Pourquoi ces attributs sont-ils placés dans l'association ?
`,
    reponse_f1: "Ils appartiennent à l'entité Étudiant.",
    reponse_v: "Ils caractérisent la relation entre un étudiant et une UE.",
    reponse_f2: "Ils doivent obligatoirement devenir des clés étrangères.",
  },
  {
    id: 103,
    question: `
             CLIENT

              (1,N)

                 |

              LOUER

                 |

              (1,N)

             VEHICULE

Quelle affirmation est correcte ?
`,
    reponse_f1: "Un véhicule est loué une seule fois.",
    reponse_v: "Un client peut louer plusieurs véhicules et un véhicule peut être loué plusieurs fois.",
    reponse_f2: "Chaque client loue obligatoirement un seul véhicule.",
  },
  {
    id: 104,
    question: `
             COMMANDE

                 |

            CONTENIR

                 |

             PRODUIT

L'association possède :

- quantité

Pourquoi quantité n'appartient-elle pas à PRODUIT ?
`,
    reponse_f1: "Parce qu'un produit ne peut pas avoir de quantité.",
    reponse_v: "Parce que la quantité dépend d'une commande donnée.",
    reponse_f2: "Parce que Merise interdit cet attribut dans une entité.",
  },
  {
    id: 105,
    question: `
            EMPLOYE

              (1,1)

                 |

           APPARTENIR

                 |

              (0,N)

          DEPARTEMENT

Que signifie la cardinalité (1,1) ?
`,
    reponse_f1: "Un employé appartient à plusieurs départements.",
    reponse_v: "Chaque employé appartient obligatoirement à un seul département.",
    reponse_f2: "L'employé peut ne dépendre d'aucun département.",
  },
  {
    id: 106,
    question: `
          PROJET

             |

        PARTICIPER

             |

         EMPLOYE

L'association possède :

- rôle
- dateDébut

Pourquoi est-ce un bon choix ?
`,
    reponse_f1: "Parce que ces attributs décrivent uniquement le projet.",
    reponse_v: "Parce qu'ils dépendent de la participation d'un employé à un projet.",
    reponse_f2: "Parce qu'ils deviendront automatiquement des clés primaires.",
  },
  {
    id: 107,
    question: `
             CLIENT

               |

          POSSEDER

               |

            COMPTE

Un compte bancaire ne peut exister sans client.

Quelle cardinalité est la plus adaptée côté COMPTE ?
`,
    reponse_f1: "(0,1)",
    reponse_v: "(1,1)",
    reponse_f2: "(0,N)",
  },
  {
    id: 108,
    question: `
             FOURNISSEUR

                 |

             FOURNIR

                 |

             PRODUIT

Quel est le rôle principal des cardinalités dans un MCD ?
`,
    reponse_f1: "Définir les clés primaires.",
    reponse_v: "Exprimer les règles de gestion entre les entités.",
    reponse_f2: "Déterminer les types SQL.",
  },
  {
    id: 109,
    question: `
            CLIENT

               |

           PASSER

               |

          COMMANDE

               |

          CONTENIR

               |

          PRODUIT

Combien d'associations contient ce MCD ?
`,
    reponse_f1: "1",
    reponse_v: "2",
    reponse_f2: "3",
  },
  {
    id: 110,
    question: `
Parmi les propositions suivantes, laquelle décrit le mieux un MCD ?

A. Un modèle physique spécifique à PostgreSQL.

B. Une représentation des traitements de l'application.

C. Une représentation des données, des associations et des règles de gestion, indépendante de toute implémentation.

Quelle est la bonne réponse ?
`,
    reponse_f1: "A",
    reponse_v: "C",
    reponse_f2: "B",
  }, {
    id: 111,
    question: `
MCD :

CLIENT (idClient, nom)

↓

MLD :

CLIENT(
    _____,
    nom
)

Quel élément manque ?
`,
    reponse_f1: "FK idClient",
    reponse_v: "PK idClient",
    reponse_f2: "UNIQUE nom",
  },
  {
    id: 112,
    question: `
MCD :

CLIENT (1,N) ----- PASSER ----- (1,1) COMMANDE

MLD :

CLIENT(
    idClient PK
)

COMMANDE(
    idCommande PK,
    _____
)

Quel attribut manque ?
`,
    reponse_f1: "idCommande FK",
    reponse_v: "idClient FK",
    reponse_f2: "nomClient",
  },
  {
    id: 113,
    question: `
MCD :

ETUDIANT (N,N) ----- SUIVRE ----- (N,N) UE

Quel modèle logique est correct ?
`,
    reponse_f1: "Une seule table ETUDIANT_UE",
    reponse_v: "Créer une table d'association SUIVRE avec les deux clés étrangères.",
    reponse_f2: "Ajouter une clé étrangère dans ETUDIANT uniquement.",
  },
  {
    id: 114,
    question: `
MLD

PRODUIT(
    idProduit PK,
    nom,
    prix
)

COMMANDE(
    idCommande PK,
    dateCommande
)

LIGNE_COMMANDE(
    _____,
    idProduit FK,
    quantite
)

Quel attribut manque ?
`,
    reponse_f1: "nomProduit",
    reponse_v: "idCommande FK",
    reponse_f2: "prix",
  },
  {
    id: 115,
    question: `
Quelle est la différence principale entre un MCD et un MLD ?

A. Le MLD introduit les clés primaires et étrangères.

B. Le MLD décrit les traitements.

C. Le MLD supprime les associations.

`,
    reponse_f1: "B",
    reponse_v: "A",
    reponse_f2: "C",
  },
  {
    id: 116,
    question: `
CLIENT(
    idClient PK,
    nom
)

COMMANDE(
    idCommande PK,
    dateCommande,
    idClient FK
)

Pourquoi la clé étrangère est-elle placée dans COMMANDE ?
`,
    reponse_f1: "Parce que CLIENT dépend de COMMANDE.",
    reponse_v: "Parce qu'une commande appartient à un client.",
    reponse_f2: "Parce que toutes les clés étrangères sont placées dans la première table.",
  },
  {
    id: 117,
    question: `
Une relation (N,N) est transformée en :

A. Une clé étrangère.

B. Une table supplémentaire.

C. Une vue SQL.

Quelle est la bonne réponse ?
`,
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "C",
  },
  {
    id: 118,
    question: `
LIGNE_COMMANDE(
    idCommande PK/FK,
    idProduit PK/FK,
    _____
)

Quel attribut est le plus cohérent ?
`,
    reponse_f1: "nomProduit",
    reponse_v: "quantite",
    reponse_f2: "nomClient",
  },
  {
    id: 119,
    question: `
CLIENT(
    idClient PK,
    nom,
    email
)

Quel est le rôle de la clé primaire ?

`,
    reponse_f1: "Créer automatiquement les index.",
    reponse_v: "Identifier de manière unique chaque ligne.",
    reponse_f2: "Empêcher les clés étrangères.",
  },
  {
    id: 120,
    question: `
MLD

CLIENT(
    idClient PK,
    nom
)

COMMANDE(
    idCommande PK,
    idClient FK
)

Quel est le type de relation représenté ?

`,
    reponse_f1: "N:N",
    reponse_v: "1:N",
    reponse_f2: "1:1",
  }, {
    id: 121,
    question: `
MLD

INSCRIPTION(
    _____,
    idUE PK/FK,
    dateInscription
)

La clé primaire est composée de :
`,
    reponse_f1: "dateInscription",
    reponse_v: "idEtudiant PK/FK",
    reponse_f2: "idInscription PK",
  },
  {
    id: 122,
    question: `
CLIENT(
    idClient PK,
    nom
)

COMMANDE(
    idCommande PK,
    idClient FK
)

Pourquoi n'ajoute-t-on pas également idCommande dans CLIENT ?
`,
    reponse_f1: "Parce qu'une clé étrangère est facultative.",
    reponse_v: "Parce que la relation 1:N se modélise avec la clé étrangère du côté N.",
    reponse_f2: "Parce que SQL l'interdit.",
  },
  {
    id: 123,
    question: `
PRODUIT(
    idProduit PK,
    libelle
)

FOURNISSEUR(
    idFournisseur PK,
    raisonSociale
)

Relation : N:N

Quel MLD est correct ?
`,
    reponse_f1: "Ajouter idProduit dans FOURNISSEUR.",
    reponse_v: "Créer une table FOURNIR(idProduit PK/FK, idFournisseur PK/FK).",
    reponse_f2: "Fusionner les deux tables.",
  },
  {
    id: 124,
    question: `
LIGNE_COMMANDE(
    idCommande PK/FK,
    idProduit PK/FK,
    quantite
)

Pourquoi idCommande fait-il partie de la clé primaire ?
`,
    reponse_f1: "Pour accélérer les requêtes.",
    reponse_v: "Parce que chaque ligne est identifiée par le couple (Commande, Produit).",
    reponse_f2: "Parce qu'une clé étrangère est toujours clé primaire.",
  },
  {
    id: 125,
    question: `
CLIENT(
    idClient PK,
    nom,
    ville
)

Cette table respecte :
`,
    reponse_f1: "Aucune forme normale.",
    reponse_v: "La première forme normale (1FN).",
    reponse_f2: "Uniquement la troisième forme normale.",
  },
  {
    id: 126,
    question: `
COMMANDE(
    idCommande PK,
    dateCommande,
    montant,
    idClient FK
)

Quel attribut est une clé étrangère ?
`,
    reponse_f1: "idCommande",
    reponse_v: "idClient",
    reponse_f2: "montant",
  },
  {
    id: 127,
    question: `
INSCRIPTION(
    idEtudiant PK/FK,
    idUE PK/FK,
    note
)

Pourquoi la note est-elle stockée ici ?
`,
    reponse_f1: "Parce qu'elle dépend uniquement de l'UE.",
    reponse_v: "Parce qu'elle dépend du couple (Étudiant, UE).",
    reponse_f2: "Parce qu'elle remplace une clé étrangère.",
  },
  {
    id: 128,
    question: `
Quelle affirmation est correcte concernant une clé étrangère ?

A. Elle identifie uniquement la table.

B. Elle référence une clé primaire d'une autre table.

C. Elle remplace une clé primaire.

`,
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "C",
  },
  {
    id: 129,
    question: `
COMMANDE(
    idCommande PK,
    dateCommande,
    idClient FK
)

CLIENT(
    idClient PK,
    nom
)

Combien de clés primaires possède ce modèle ?
`,
    reponse_f1: "1",
    reponse_v: "2",
    reponse_f2: "3",
  },
  {
    id: 130,
    question: `
Une relation 1:1 est généralement transformée en :

A. Une table d'association.

B. Une clé étrangère dans l'une des deux tables.

C. Deux tables supplémentaires.

`,
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "C",
  }, {
    id: 131,
    question: `
CLIENT(
    idClient PK,
    nom,
    ville,
    codePostal
)

Sachant que codePostal → ville, quelle anomalie apparaît ?
`,
    reponse_f1: "Violation de la 1FN",
    reponse_v: "Dépendance transitive (3FN non respectée)",
    reponse_f2: "Absence de clé primaire",
  },
  {
    id: 132,
    question: `
LIGNE_COMMANDE(
    idCommande PK/FK,
    idProduit PK/FK,
    nomProduit,
    quantite
)

Quel attribut devrait être déplacé dans une autre table ?
`,
    reponse_f1: "quantite",
    reponse_v: "nomProduit",
    reponse_f2: "idCommande",
  },
  {
    id: 133,
    question: `
EMPLOYE(
    idEmploye PK,
    nom,
    idService FK
)

SERVICE(
    idService PK,
    libelle
)

Pourquoi le libellé du service n'est-il pas stocké dans EMPLOYE ?
`,
    reponse_f1: "Parce qu'il est trop long.",
    reponse_v: "Pour éviter la redondance et respecter la normalisation.",
    reponse_f2: "Parce que SQL interdit les chaînes de caractères.",
  },
  {
    id: 134,
    question: `
INSCRIPTION(
    idEtudiant PK/FK,
    idUE PK/FK,
    semestre,
    note
)

Quel attribut ne fait PAS partie de la clé primaire ?
`,
    reponse_f1: "idEtudiant",
    reponse_v: "semestre",
    reponse_f2: "idUE",
  },
  {
    id: 135,
    question: `
COMMANDE(
    idCommande PK,
    dateCommande,
    idClient FK
)

CLIENT(
    idClient PK,
    nom,
    email
)

Combien de clés étrangères possède ce modèle ?
`,
    reponse_f1: "0",
    reponse_v: "1",
    reponse_f2: "2",
  },
  {
    id: 136,
    question: `
PRODUIT(
    idProduit PK,
    libelle,
    prix,
    categorie
)

Si plusieurs produits partagent la même catégorie, quelle amélioration est préférable ?
`,
    reponse_f1: "Créer une vue SQL.",
    reponse_v: "Créer une table CATEGORIE et utiliser une clé étrangère.",
    reponse_f2: "Dupliquer les catégories.",
  },
  {
    id: 137,
    question: `
Quelle forme normale impose que tous les attributs soient atomiques ?

A. 1FN

B. 2FN

C. 3FN
`,
    reponse_f1: "B",
    reponse_v: "A",
    reponse_f2: "C",
  },
  {
    id: 138,
    question: `
Une table possède une clé primaire composée de :

(idCommande, idProduit)

Tous les attributs doivent dépendre :

A. uniquement de idCommande.

B. de l'ensemble de la clé composée.

C. uniquement de idProduit.
`,
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "C",
  },
  {
    id: 139,
    question: `
Une dépendance partielle apparaît lorsqu'un attribut dépend :

A. d'une clé étrangère.

B. d'une partie seulement d'une clé composée.

C. de toutes les clés primaires.
`,
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "C",
  },
  {
    id: 140,
    question: `
Quel est l'objectif principal de la normalisation ?

A. Augmenter le nombre de tables sans raison.

B. Réduire les redondances et éviter les anomalies de mise à jour.

C. Accélérer uniquement les requêtes SELECT.
`,
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "C",
  }, {
    id: 141,
    question: `
          ●

          |

      S'authentifier

          |

         _____

          |

   Consulter son compte

Quel élément manque ?
`,
    reponse_f1: "Nœud final",
    reponse_v: "Flux de contrôle",
    reponse_f2: "Décision",
  },
  {
    id: 142,
    question: `
          ●

          |

      Saisir identifiant

          |

        ◇

      /       \\

[OK]      [Erreur]

Quel est le nom du losange ?
`,
    reponse_f1: "Fork",
    reponse_v: "Nœud de décision",
    reponse_f2: "Join",
  },
  {
    id: 143,
    question: `
          ●

          |

   Vérifier le stock

          |

        ◇

      /       \\

[Disponible]   [_____]

Quel garde (condition) manque ?
`,
    reponse_f1: "[Annuler]",
    reponse_v: "[Indisponible]",
    reponse_f2: "[Valider]",
  },
  {
    id: 144,
    question: `
          ●

          |

     Préparer commande

          |

      =========

      |       |

Emballer   Éditer facture

Quel élément est représenté par les deux barres parallèles ?
`,
    reponse_f1: "Nœud final",
    reponse_v: "Fork (parallélisme)",
    reponse_f2: "Décision",
  },
  {
    id: 145,
    question: `
Emballer colis

        |

=========
|       |
=========
        |

Expédier colis

Quel élément est représenté ici ?
`,
    reponse_f1: "Fork",
    reponse_v: "Join (synchronisation)",
    reponse_f2: "Décision",
  },
  {
    id: 146,
    question: `
          ●

          |

    Ajouter au panier

          |

    Passer commande

          |

          ◎

Quel symbole représente ◎ ?
`,
    reponse_f1: "Nœud initial",
    reponse_v: "Nœud final",
    reponse_f2: "Fork",
  },
  {
    id: 147,
    question: `
          ●

          |

    Vérifier paiement

          |

        ◇

      /       \\

[Accepté]  [Refusé]

          |

      _____

Quel élément manque sur chaque branche ?
`,
    reponse_f1: "Un nœud final",
    reponse_v: "Une action",
    reponse_f2: "Une interface",
  },
  {
    id: 148,
    question: `
+----------------------+
|      Client          |
|                      |
| Saisir commande      |
+----------------------+

+----------------------+
|      Système         |
|                      |
| Valider commande     |
+----------------------+

Ces deux rectangles représentent :
`,
    reponse_f1: "Des classes",
    reponse_v: "Des partitions (swimlanes)",
    reponse_f2: "Des composants",
  },
  {
    id: 149,
    question: `
Quel est le rôle principal d'un diagramme d'activités ?

A. Décrire les classes.

B. Décrire le déroulement d'un processus.

C. Décrire les relations entre tables.

`,
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "C",
  },
  {
    id: 150,
    question: `
          ●

          |

     Créer compte

          |

      Vérifier email

          |

      Activer compte

          |

          ◎

Combien d'actions contient ce diagramme ?
`,
    reponse_f1: "2",
    reponse_v: "3",
    reponse_f2: "4",
  }, {
    id: 151,
    question: `
            ●
            |
      Saisir mot de passe
            |
            ◇
         /       \\
[Correct]   [Incorrect]
                 |
          _____
                 |
        Saisir mot de passe

Quel élément manque ?
`,
    reponse_f1: "Nœud final",
    reponse_v: "Retour vers la décision (boucle)",
    reponse_f2: "Fork",
  },
  {
    id: 152,
    question: `
               ●
               |
        Valider commande
               |
          ==========
          |        |
Préparer colis  Générer facture
          |        |
          ==========
               |
        Expédier colis

Le premier ensemble de barres représente :
`,
    reponse_f1: "Un Join",
    reponse_v: "Un Fork",
    reponse_f2: "Une décision",
  },
  {
    id: 153,
    question: `
+-------------------------+
| Client                  |
|                         |
| Valider panier          |
+-------------------------+

+-------------------------+
| Système                 |
|                         |
| _____                   |
+-------------------------+

Quelle action est la plus logique ?
`,
    reponse_f1: "Créer un utilisateur",
    reponse_v: "Calculer le montant",
    reponse_f2: "Supprimer un produit",
  },
  {
    id: 154,
    question: `
               ●
               |
       Vérifier disponibilité
               |
              ◇
           /       \\
     [Oui]         [Non]
       |             |
Réserver       _____

Quelle action manque ?
`,
    reponse_f1: "Encaisser le paiement",
    reponse_v: "Afficher un message d'indisponibilité",
    reponse_f2: "Créer une réservation",
  },
  {
    id: 155,
    question: `
           ●
           |
    Saisir formulaire
           |
    Vérifier données
           |
          ◇
       /       \\
   [OK]     [Erreur]
               |
     Corriger les données
               |
           _____

Quel élément manque ?
`,
    reponse_f1: "Nœud final",
    reponse_v: "Retour vers « Vérifier données »",
    reponse_f2: "Join",
  },
  {
    id: 156,
    question: `
              ●
              |
         Créer commande
              |
          ==========
          |        |
      Envoyer mail
      Mettre à jour stock
          |        |
          ==========
              |
         Afficher confirmation

Le deuxième ensemble de barres représente :
`,
    reponse_f1: "Un Fork",
    reponse_v: "Un Join",
    reponse_f2: "Une décision",
  },
  {
    id: 157,
    question: `
+----------------------+
| Client               |
|                      |
| Effectuer paiement   |
+----------------------+

+----------------------+
| Banque               |
|                      |
| Vérifier carte       |
+----------------------+

+----------------------+
| Boutique             |
|                      |
| _____                |
+----------------------+

Quelle action est la plus logique ?
`,
    reponse_f1: "Créer un client",
    reponse_v: "Valider la commande",
    reponse_f2: "Modifier le prix",
  },
  {
    id: 158,
    question: `
              ●
              |
        Scanner badge
              |
             ◇
          /       \\
     [Autorisé] [Refusé]
         |          |
     Ouvrir porte  _____

Quelle action manque ?
`,
    reponse_f1: "Fermer la porte",
    reponse_v: "Afficher un accès refusé",
    reponse_f2: "Scanner un nouveau badge",
  },
  {
    id: 159,
    question: `
Dans un diagramme d'activités UML, une garde est :

A. Une méthode d'une classe.

B. Une condition qui détermine le chemin à suivre.

C. Une clé étrangère.

`,
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "C",
  },
  {
    id: 160,
    question: `
              ●
              |
      Authentifier
              |
      Charger profil
              |
      Afficher accueil
              |
              ◎

Quel est l'objectif principal de ce diagramme ?
`,
    reponse_f1: "Décrire la structure des données.",
    reponse_v: "Décrire le déroulement d'un processus.",
    reponse_f2: "Décrire les relations entre classes.",
  }, {
    id: 161,
    question: `
                   ●
                   |
           Saisir identifiant
                   |
           Saisir mot de passe
                   |
                  ◇
              /         \\
         [Valide]    [Invalide]
            |              |
     Charger profil   _____
            |              |
            +--------------+

Quel élément manque ?
`,
    reponse_f1: "Nœud final",
    reponse_v: "Retour vers « Saisir identifiant »",
    reponse_f2: "Fork",
  },
  {
    id: 162,
    question: `
                    ●
                    |
             Valider commande
                    |
             ================
             |              |
      Préparer colis   Générer facture
             |              |
             |         Envoyer facture
             |              |
             ================
                    |
             Expédier colis
                    |
                    ◎

Quel est le rôle des deux ensembles de barres ?
`,
    reponse_f1: "Deux décisions",
    reponse_v: "Fork puis Join",
    reponse_f2: "Deux nœuds finaux",
  },
  {
    id: 163,
    question: `
+----------------------+
| Client               |
|----------------------|
| Passer commande      |
+----------------------+

+----------------------+
| Système              |
|----------------------|
| Vérifier stock       |
| _____                |
+----------------------+

+----------------------+
| Banque               |
|----------------------|
| Débiter le compte    |
+----------------------+

Quelle action manque ?
`,
    reponse_f1: "Créer un utilisateur",
    reponse_v: "Calculer le montant",
    reponse_f2: "Supprimer le produit",
  },
  {
    id: 164,
    question: `
                 ●
                 |
         Scanner billet
                 |
                ◇
            /         \\
      [Valide]     [Invalide]
          |             |
Accéder au train   Afficher erreur
          |             |
          +------->_____

Quel élément manque ?
`,
    reponse_f1: "Fork",
    reponse_v: "Nœud final",
    reponse_f2: "Join",
  },
  {
    id: 165,
    question: `
                  ●
                  |
            Choisir article
                  |
          Ajouter au panier
                  |
                 ◇
            /           \\
      [Continuer]    [Commander]
          |               |
          |          Valider panier
          |               |
          +------->_____

Quel élément manque ?
`,
    reponse_f1: "Nœud final",
    reponse_v: "Retour vers « Choisir article »",
    reponse_f2: "Fork",
  },
  {
    id: 166,
    question: `
                   ●
                   |
              Authentifier
                   |
             ==============
             |            |
      Charger profil   Charger droits
             |            |
             ==============
                   |
          Afficher accueil
                   |
                   ◎

Pourquoi utilise-t-on un Fork ici ?
`,
    reponse_f1: "Pour choisir entre deux traitements.",
    reponse_v: "Pour exécuter plusieurs actions en parallèle.",
    reponse_f2: "Pour terminer le diagramme.",
  },
  {
    id: 167,
    question: `
+----------------------+
| Client               |
|----------------------|
| Payer                |
+----------------------+

+----------------------+
| Banque               |
|----------------------|
| Autoriser paiement   |
+----------------------+

+----------------------+
| Boutique             |
|----------------------|
| _____                |
+----------------------+

Quelle action est la plus logique après l'autorisation ?
`,
    reponse_f1: "Supprimer le client",
    reponse_v: "Valider la commande",
    reponse_f2: "Créer un produit",
  },
  {
    id: 168,
    question: `
                 ●
                 |
          Vérifier stock
                 |
                ◇
          /             \\
     [Disponible]   [Rupture]
          |              |
Préparer colis   Commander fournisseur
          |              |
          +-------->_____

Quel élément manque ?
`,
    reponse_f1: "Fork",
    reponse_v: "Join",
    reponse_f2: "Nœud initial",
  },
  {
    id: 169,
    question: `
Dans un diagramme d'activités UML, un Join sert principalement à :

A. Séparer plusieurs traitements.

B. Synchroniser plusieurs traitements parallèles.

C. Déclarer une nouvelle classe.

`,
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "C",
  },
  {
    id: 170,
    question: `
                 ●
                 |
      Saisir commande
                 |
      Vérifier stock
                 |
      Débiter le client
                 |
      Préparer colis
                 |
      Expédier commande
                 |
                 ◎

Quel est l'objectif principal de ce diagramme d'activités ?
`,
    reponse_f1: "Décrire les relations entre classes.",
    reponse_v: "Décrire l'enchaînement des activités d'un processus métier.",
    reponse_f2: "Décrire les tables d'une base de données.",
  }, {
    id: 171,
    question: `
               ●

               |

            Brouillon

               |

        Publier()

               |

            _________

Quel état manque ?
`,
    reponse_f1: "Archivé",
    reponse_v: "Publié",
    reponse_f2: "Supprimé",
  },
  {
    id: 172,
    question: `
            ●

            |

        En attente

            |

      paiementValidé

            |

         Payée

Dans ce diagramme, "paiementValidé" est :
`,
    reponse_f1: "Un état",
    reponse_v: "Un événement déclencheur",
    reponse_f2: "Une garde",
  },
  {
    id: 173,
    question: `
           Connecté

               |

        Déconnexion

               |

          __________

Quel état manque ?
`,
    reponse_f1: "Suspendu",
    reponse_v: "Déconnecté",
    reponse_f2: "Authentifié",
  },
  {
    id: 174,
    question: `
           En attente

                |

      [Stock disponible]

                |

          Préparation

L'expression entre crochets représente :
`,
    reponse_f1: "Une action",
    reponse_v: "Une garde",
    reponse_f2: "Un événement",
  },
  {
    id: 175,
    question: `
            +------------------+
            |     Ouvert       |
            |------------------|
            | entry / journal  |
            +------------------+

Le mot "entry" indique :
`,
    reponse_f1: "Une transition",
    reponse_v: "Une action exécutée à l'entrée de l'état",
    reponse_f2: "Une garde",
  },
  {
    id: 176,
    question: `
               ●

               |

         Commande créée

               |

        payer()

               |

        Commande payée

               |

      ___________

Quel événement est le plus logique ?
`,
    reponse_f1: "Créer client",
    reponse_v: "expédier()",
    reponse_f2: "Supprimer produit",
  },
  {
    id: 177,
    question: `
             Lecture

                |

          mettreEnPause()

                |

             ________

Quel état manque ?
`,
    reponse_f1: "Arrêt",
    reponse_v: "Pause",
    reponse_f2: "Chargement",
  },
  {
    id: 178,
    question: `
             Fermée

                |

         ouvrir()

                |

             Ouverte

Le texte "ouvrir()" représente :
`,
    reponse_f1: "Une garde",
    reponse_v: "Un événement déclencheur",
    reponse_f2: "Une action d'entrée",
  },
  {
    id: 179,
    question: `
             Téléchargement

                    |

             terminé()

                    |

                   ◎

Le symbole ◎ représente :
`,
    reponse_f1: "L'état initial",
    reponse_v: "L'état final",
    reponse_f2: "Une décision",
  },
  {
    id: 180,
    question: `
Quel est l'objectif principal d'un diagramme d'états-transitions ?

A. Décrire les tables d'une base de données.

B. Décrire l'évolution d'un objet selon les événements.

C. Décrire les relations entre classes.

`,
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "C",
  }, {
    id: 181,
    question: `
            +----------------------+
            |      Connecté        |
            |----------------------|
            | entry / chargerProfil|
            +----------------------+

L'action "entry" est exécutée :
`,
    reponse_f1: "À la sortie de l'état.",
    reponse_v: "À chaque entrée dans l'état.",
    reponse_f2: "Uniquement lors de la création de l'objet.",
  },
  {
    id: 182,
    question: `
            +------------------+
            | Téléchargement   |
            |------------------|
            | do / télécharger |
            +------------------+

Le mot-clé "do" indique :
`,
    reponse_f1: "Une transition.",
    reponse_v: "Une activité exécutée tant que l'état est actif.",
    reponse_f2: "Une action de sortie.",
  },
  {
    id: 183,
    question: `
           En attente

                |

      [paiement reçu]

                |

          Préparation

La condition entre crochets est :
`,
    reponse_f1: "Un événement",
    reponse_v: "Une garde",
    reponse_f2: "Une action",
  },
  {
    id: 184,
    question: `
            +----------------+
            |   Connecté     |
            |----------------|
            | exit / fermer  |
            +----------------+

L'action "exit" est exécutée :
`,
    reponse_f1: "À l'entrée de l'état.",
    reponse_v: "À la sortie de l'état.",
    reponse_f2: "À chaque transition entrante.",
  },
  {
    id: 185,
    question: `
             Brouillon

                 |

          publier()

                 |

             Publié

                 |

         modifier()

                 |

            _________

Quel état manque ?
`,
    reponse_f1: "Archivé",
    reponse_v: "Brouillon",
    reponse_f2: "Supprimé",
  },
  {
    id: 186,
    question: `
            Lecture

               |

       finDuMorceau()

               |

           Arrêt

Le texte "finDuMorceau()" représente :
`,
    reponse_f1: "Une garde",
    reponse_v: "Un événement déclencheur",
    reponse_f2: "Une action do",
  },
  {
    id: 187,
    question: `
              Verrouillée

                    |

          saisirCode()

                    |

               [code correct]

                    |

             Déverrouillée

La transition s'effectue uniquement si :
`,
    reponse_f1: "Le téléphone est allumé.",
    reponse_v: "La garde est vraie.",
    reponse_f2: "L'état est final.",
  },
  {
    id: 188,
    question: `
                ●

                |

          En préparation

                |

        annuler()

                |

            Annulée

                |

                ◎

Combien d'états possède ce diagramme (hors états initial et final) ?
`,
    reponse_f1: "2",
    reponse_v: "2",
    reponse_f2: "3",
  },
  {
    id: 189,
    question: `
            +--------------------+
            | Impression         |
            |--------------------|
            | do / imprimer      |
            | exit / fermerFlux  |
            +--------------------+

Quelle action est exécutée juste avant de quitter l'état ?
`,
    reponse_f1: "do / imprimer",
    reponse_v: "exit / fermerFlux",
    reponse_f2: "entry / ouvrirFlux",
  },
  {
    id: 190,
    question: `
Quel élément déclenche généralement une transition entre deux états ?

A. Une clé primaire.

B. Un événement.

C. Une cardinalité.

`,
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "C",
  }, {
    id: 191,
    question: `
                  ●
                  |
            En attente
                  |
              recevoir()
                  |
                 ◇
             /         \\
      [Stock OK]   [Stock KO]
          |             |
    Préparation     Refusée

Quel élément représente le losange ?
`,
    reponse_f1: "Un état composite",
    reponse_v: "Un nœud de décision",
    reponse_f2: "Un état final",
  },
  {
    id: 192,
    question: `
              +----------------------+
              | Téléchargement       |
              |----------------------|
              | entry / ouvrirFlux   |
              | do / télécharger     |
              | exit / fermerFlux    |
              +----------------------+

Quelle est la dernière action exécutée avant de quitter l'état ?
`,
    reponse_f1: "entry / ouvrirFlux",
    reponse_v: "exit / fermerFlux",
    reponse_f2: "do / télécharger",
  },
  {
    id: 193,
    question: `
            Brouillon
                 |
            publier()
                 |
              Publié
                 |
             archiver()
                 |
            _________

Quel état manque ?
`,
    reponse_f1: "Supprimé",
    reponse_v: "Archivé",
    reponse_f2: "Brouillon",
  },
  {
    id: 194,
    question: `
              Connecté
                  |
            deconnexion()
                  |
            Déconnecté
                  |
            connexion()
                  |
             _________

Quel état manque ?
`,
    reponse_f1: "Suspendu",
    reponse_v: "Connecté",
    reponse_f2: "Erreur",
  },
  {
    id: 195,
    question: `
                 ●
                 |
           Authentification
                 |
          motDePasseSaisi()
                 |
                ◇
            /          \\
      [Correct]    [Incorrect]
          |              |
      Accueil       Nouvelle saisie

Pourquoi utilise-t-on une garde ?
`,
    reponse_f1: "Pour créer un nouvel état.",
    reponse_v: "Pour choisir la transition selon une condition.",
    reponse_f2: "Pour représenter une interface.",
  },
  {
    id: 196,
    question: `
              +----------------+
              | Lecture        |
              |----------------|
              | do / lireAudio |
              +----------------+
                    |
               pause()
                    |
                 Pause

Le mot-clé "do" signifie :
`,
    reponse_f1: "Action exécutée uniquement à l'entrée.",
    reponse_v: "Activité exécutée tant que l'état est actif.",
    reponse_f2: "Événement déclencheur.",
  },
  {
    id: 197,
    question: `
            Commande créée
                  |
             payer()
                  |
            Commande payée
                  |
            expedier()
                  |
          Commande expédiée
                  |
           livrer()
                  |
                ◎

Combien de transitions sont représentées ?
`,
    reponse_f1: "2",
    reponse_v: "3",
    reponse_f2: "4",
  },
  {
    id: 198,
    question: `
              Fermée
                 |
             ouvrir()
                 |
             Ouverte
                 |
            fermer()
                 |
             Fermée

Ce diagramme illustre :
`,
    reponse_f1: "Une composition.",
    reponse_v: "Un cycle d'états.",
    reponse_f2: "Une généralisation.",
  },
  {
    id: 199,
    question: `
               En attente
                    |
             verifierStock()
                    |
                   ◇
             /             \\
      [Disponible]    [Indisponible]
            |                 |
      Préparation        Annulation
            |                 |
            +--------->_______

Quel élément manque ?
`,
    reponse_f1: "Un Fork",
    reponse_v: "Un état final",
    reponse_f2: "Un état composite",
  },
  {
    id: 200,
    question: `
Parmi les propositions suivantes, laquelle décrit correctement un diagramme d'états-transitions UML ?

A. Il représente la structure statique des classes.

B. Il décrit les différents états d'un objet ainsi que les événements provoquant les changements d'état.

C. Il décrit uniquement les traitements d'une base de données.

Quelle est la bonne réponse ?
`,
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "C",
  },
]
