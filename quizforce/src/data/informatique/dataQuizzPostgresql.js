export const dataQuizzPostgresql = [
  {
    id: 0,
    question:
      "Quelle commande permet d'afficher toutes les lignes d'une table nommée employe ?",
    reponse_f1: "SHOW employe;",
    reponse_v: "SELECT * FROM employe;",
    reponse_f2: "DISPLAY employe;",
  },
  {
    id: 1,
    question:
      "Quelle clause permet de filtrer les lignes retournées par une requête ?",
    reponse_f1: "ORDER BY",
    reponse_v: "WHERE",
    reponse_f2: "GROUP BY",
  },
  {
    id: 2,
    question:
      "Quelle requête retourne uniquement les employés dont l'âge est supérieur à 30 ans ?",
    reponse_f1: "SELECT * FROM employe HAVING age > 30;",
    reponse_v: "SELECT * FROM employe WHERE age > 30;",
    reponse_f2: "SELECT age > 30 FROM employe;",
  },
  {
    id: 3,
    question: "Quelle clause permet de trier les résultats ?",
    reponse_f1: "GROUP BY",
    reponse_v: "ORDER BY",
    reponse_f2: "SORT",
  },
  {
    id: 4,
    question: "Quelle requête trie les employés par salaire décroissant ?",
    reponse_f1: "ORDER salaire DESC",
    reponse_v: "SELECT * FROM employe ORDER BY salaire DESC;",
    reponse_f2: "SELECT * FROM employe SORT salaire DESC;",
  },
  {
    id: 5,
    question: "Quelle clause limite le nombre de lignes retournées ?",
    reponse_f1: "TOP",
    reponse_v: "LIMIT",
    reponse_f2: "MAX",
  },
  {
    id: 6,
    question: "Quelle requête retourne les 10 premiers employés ?",
    reponse_f1: "SELECT TOP 10 * FROM employe;",
    reponse_v: "SELECT * FROM employe LIMIT 10;",
    reponse_f2: "SELECT FIRST 10 * FROM employe;",
  },
  {
    id: 7,
    question: "Quelle fonction retourne le nombre de lignes d'une table ?",
    reponse_f1: "SUM(*)",
    reponse_v: "COUNT(*)",
    reponse_f2: "TOTAL(*)",
  },
  {
    id: 8,
    question: "Quelle fonction calcule la moyenne d'une colonne numérique ?",
    reponse_f1: "MEAN()",
    reponse_v: "AVG()",
    reponse_f2: "AVERAGE()",
  },
  {
    id: 9,
    question: "Quelle fonction retourne la somme d'une colonne ?",
    reponse_f1: "TOTAL()",
    reponse_v: "SUM()",
    reponse_f2: "ADD()",
  },
  {
    id: 10,
    question: "Quelle fonction retourne la plus grande valeur d'une colonne ?",
    reponse_f1: "TOP()",
    reponse_v: "MAX()",
    reponse_f2: "HIGH()",
  },
  {
    id: 11,
    question: "Quelle fonction retourne la plus petite valeur d'une colonne ?",
    reponse_f1: "LOW()",
    reponse_v: "MIN()",
    reponse_f2: "FIRST()",
  },
  {
    id: 12,
    question:
      "Quelle clause permet de regrouper les lignes ayant une valeur commune ?",
    reponse_f1: "ORDER BY",
    reponse_v: "GROUP BY",
    reponse_f2: "HAVING",
  },
  {
    id: 13,
    question:
      "Quelle clause permet de filtrer les groupes créés par GROUP BY ?",
    reponse_f1: "WHERE",
    reponse_v: "HAVING",
    reponse_f2: "FILTER",
  },
  {
    id: 14,
    question: "Quelle requête retourne le nombre d'employés par service ?",
    reponse_f1: "SELECT COUNT(*) FROM employe;",
    reponse_v: "SELECT service, COUNT(*) FROM employe GROUP BY service;",
    reponse_f2: "SELECT GROUP service FROM employe;",
  },
  {
    id: 15,
    question:
      "Quelle clause permet de supprimer les doublons dans le résultat ?",
    reponse_f1: "UNIQUE",
    reponse_v: "DISTINCT",
    reponse_f2: "REMOVE DUPLICATES",
  },
  {
    id: 16,
    question:
      "Quelle requête retourne les différents noms de service sans doublon ?",
    reponse_f1: "SELECT UNIQUE service FROM employe;",
    reponse_v: "SELECT DISTINCT service FROM employe;",
    reponse_f2: "SELECT service ONLY FROM employe;",
  },
  {
    id: 17,
    question:
      "Quel opérateur permet de rechercher une valeur comprise entre deux bornes ?",
    reponse_f1: "IN",
    reponse_v: "BETWEEN",
    reponse_f2: "RANGE",
  },
  {
    id: 18,
    question:
      "Quel opérateur permet de rechercher plusieurs valeurs possibles ?",
    reponse_f1: "BETWEEN",
    reponse_v: "IN",
    reponse_f2: "LIKE",
  },
  {
    id: 19,
    question:
      "Quel opérateur permet d'effectuer une recherche avec des caractères génériques ?",
    reponse_f1: "=",
    reponse_v: "LIKE",
    reponse_f2: "MATCH",
  },
  {
    id: 20,
    question: "Quel caractère remplace plusieurs caractères avec LIKE ?",
    reponse_f1: "_",
    reponse_v: "%",
    reponse_f2: "*",
  },
  {
    id: 21,
    question: "Quel caractère remplace exactement un caractère avec LIKE ?",
    reponse_f1: "%",
    reponse_v: "_",
    reponse_f2: "?",
  },
  {
    id: 22,
    question:
      "Quelle requête recherche les employés dont le nom commence par 'Mar' ?",
    reponse_f1: "SELECT * FROM employe WHERE nom = 'Mar*';",
    reponse_v: "SELECT * FROM employe WHERE nom LIKE 'Mar%';",
    reponse_f2: "SELECT * FROM employe WHERE nom MATCH 'Mar';",
  },
  {
    id: 23,
    question:
      "Quelle requête recherche les employés dont le nom se termine par 'son' ?",
    reponse_f1: "SELECT * FROM employe WHERE nom = '*son';",
    reponse_v: "SELECT * FROM employe WHERE nom LIKE '%son';",
    reponse_f2: "SELECT * FROM employe WHERE nom END 'son';",
  },
  {
    id: 24,
    question:
      "Quelle requête recherche les employés dont le prénom contient 'ann' ?",
    reponse_f1: "SELECT * FROM employe WHERE prenom = 'ann';",
    reponse_v: "SELECT * FROM employe WHERE prenom LIKE '%ann%';",
    reponse_f2: "SELECT * FROM employe WHERE prenom MATCH '%ann%';",
  },
  {
    id: 25,
    question:
      "Quel type de JOIN retourne uniquement les lignes ayant une correspondance dans les deux tables ?",
    reponse_f1: "LEFT JOIN",
    reponse_v: "INNER JOIN",
    reponse_f2: "FULL JOIN",
  },
  {
    id: 26,
    question:
      "Quel type de JOIN retourne toutes les lignes de la table de gauche, même sans correspondance ?",
    reponse_f1: "INNER JOIN",
    reponse_v: "LEFT JOIN",
    reponse_f2: "RIGHT JOIN",
  },
  {
    id: 27,
    question:
      "Quel type de JOIN retourne toutes les lignes de la table de droite, même sans correspondance ?",
    reponse_f1: "LEFT JOIN",
    reponse_v: "RIGHT JOIN",
    reponse_f2: "INNER JOIN",
  },
  {
    id: 28,
    question:
      "Quel type de JOIN retourne toutes les lignes des deux tables, avec ou sans correspondance ?",
    reponse_f1: "INNER JOIN",
    reponse_v: "FULL OUTER JOIN",
    reponse_f2: "LEFT JOIN",
  },
  {
    id: 29,
    question:
      "Quel type de JOIN retourne le produit cartésien de deux tables ?",
    reponse_f1: "FULL JOIN",
    reponse_v: "CROSS JOIN",
    reponse_f2: "INNER JOIN",
  },
  {
    id: 30,
    question: "Quelle clause permet de définir la condition de jointure ?",
    reponse_f1: "WHERE",
    reponse_v: "ON",
    reponse_f2: "HAVING",
  },
  {
    id: 31,
    question:
      "Quelle requête réalise une jointure entre employe et service via id_service ?",
    reponse_f1: "SELECT * FROM employe JOIN service;",
    reponse_v:
      "SELECT * FROM employe e INNER JOIN service s ON e.id_service = s.id;",
    reponse_f2: "SELECT * FROM employe WHERE service.id;",
  },
  {
    id: 32,
    question:
      "Dans une relation classique, où se trouve généralement la clé étrangère ?",
    reponse_f1: "Dans la table parent",
    reponse_v: "Dans la table enfant",
    reponse_f2: "Dans les deux tables",
  },
  {
    id: 33,
    question: "Quel est l'intérêt principal d'une clé étrangère ?",
    reponse_f1: "Accélérer les SELECT",
    reponse_v: "Garantir l'intégrité référentielle",
    reponse_f2: "Compresser les données",
  },
  {
    id: 34,
    question:
      "Que retourne un LEFT JOIN lorsqu'aucune correspondance n'existe dans la table de droite ?",
    reponse_f1: "La ligne est supprimée",
    reponse_v: "Les colonnes de droite valent NULL",
    reponse_f2: "Une erreur SQL",
  },
  {
    id: 35,
    question:
      "Que retourne un INNER JOIN lorsqu'aucune correspondance n'existe ?",
    reponse_f1: "Une ligne avec des NULL",
    reponse_v: "Aucune ligne",
    reponse_f2: "Une erreur PostgreSQL",
  },
  {
    id: 36,
    question:
      "Quelle requête retourne tous les employés ainsi que leur service, même si certains n'ont pas de service associé ?",
    reponse_f1: "INNER JOIN",
    reponse_v: "LEFT JOIN",
    reponse_f2: "CROSS JOIN",
  },
  {
    id: 37,
    question:
      "Quelle requête retourne uniquement les employés ayant un service associé ?",
    reponse_f1: "LEFT JOIN",
    reponse_v: "INNER JOIN",
    reponse_f2: "FULL JOIN",
  },
  {
    id: 38,
    question:
      "Quelle colonne est généralement utilisée pour effectuer une jointure ?",
    reponse_f1: "Une colonne texte quelconque",
    reponse_v: "La clé primaire et la clé étrangère",
    reponse_f2: "Une colonne DATE",
  },
  {
    id: 39,
    question:
      "Quelle est la différence principale entre WHERE et ON dans une jointure ?",
    reponse_f1: "Aucune différence",
    reponse_v: "ON définit la jointure, WHERE filtre le résultat",
    reponse_f2: "WHERE remplace toujours ON",
  },
  {
    id: 40,
    question:
      "Quel résultat produit un CROSS JOIN entre une table de 5 lignes et une table de 4 lignes ?",
    reponse_f1: "9 lignes",
    reponse_v: "20 lignes",
    reponse_f2: "5 lignes",
  },
  {
    id: 41,
    question:
      "Quelle clause est exécutée avant ORDER BY dans une requête SQL ?",
    reponse_f1: "LIMIT",
    reponse_v: "WHERE",
    reponse_f2: "OFFSET",
  },
  {
    id: 42,
    question: "Quelle clause est exécutée après GROUP BY ?",
    reponse_f1: "ORDER BY",
    reponse_v: "HAVING",
    reponse_f2: "LIMIT",
  },
  {
    id: 43,
    question: "Quel est le rôle de HAVING ?",
    reponse_f1: "Filtrer les lignes avant GROUP BY",
    reponse_v: "Filtrer les groupes après GROUP BY",
    reponse_f2: "Créer un index",
  },
  {
    id: 44,
    question:
      "Quelle requête retourne les services ayant plus de 10 employés ?",
    reponse_f1: "SELECT service FROM employe WHERE COUNT(*) > 10;",
    reponse_v:
      "SELECT service, COUNT(*) FROM employe GROUP BY service HAVING COUNT(*) > 10;",
    reponse_f2: "SELECT COUNT(service) > 10;",
  },
  {
    id: 45,
    question: "Quel mot-clé permet de donner un alias à une table ?",
    reponse_f1: "NAME",
    reponse_v: "AS",
    reponse_f2: "ALIAS",
  },
  {
    id: 46,
    question:
      "Quelle écriture est valide pour donner l'alias 'e' à la table employe ?",
    reponse_f1: "employe => e",
    reponse_v: "employe AS e",
    reponse_f2: "employe = e",
  },
  {
    id: 47,
    question: "Pourquoi utilise-t-on des alias dans les jointures ?",
    reponse_f1: "Pour améliorer les performances",
    reponse_v:
      "Pour rendre les requêtes plus lisibles et éviter les ambiguïtés",
    reponse_f2: "Pour créer des index",
  },
  {
    id: 48,
    question: "Dans une jointure, que signifie e.nom ?",
    reponse_f1: "La colonne 'e' de la table 'nom'",
    reponse_v: "La colonne 'nom' de la table aliasée 'e'",
    reponse_f2: "Une variable PostgreSQL",
  },
  {
    id: 49,
    question:
      "Quelle est la meilleure pratique lors de l'écriture de requêtes avec plusieurs tables ?",
    reponse_f1: "Toujours utiliser SELECT *",
    reponse_v: "Qualifier les colonnes avec leur table ou leur alias",
    reponse_f2: "Ne jamais utiliser d'alias",
  },
  {
    id: 50,
    question: "Quel est le rôle principal d'une PRIMARY KEY ?",
    reponse_f1: "Autoriser les doublons",
    reponse_v: "Identifier de manière unique chaque ligne d'une table",
    reponse_f2: "Créer automatiquement un index sur toutes les colonnes",
  },
  {
    id: 51,
    question: "Une table peut-elle contenir plusieurs PRIMARY KEY ?",
    reponse_f1: "Oui",
    reponse_v: "Non",
    reponse_f2: "Seulement avec PostgreSQL 15",
  },
  {
    id: 52,
    question: "Que garantit une contrainte PRIMARY KEY ?",
    reponse_f1: "Uniquement l'unicité",
    reponse_v: "L'unicité et l'absence de valeur NULL",
    reponse_f2: "L'ordre des lignes",
  },
  {
    id: 53,
    question: "Quel est le rôle principal d'une FOREIGN KEY ?",
    reponse_f1: "Accélérer les requêtes",
    reponse_v: "Garantir l'intégrité référentielle entre deux tables",
    reponse_f2: "Créer une sauvegarde automatique",
  },
  {
    id: 54,
    question: "Une FOREIGN KEY référence généralement...",
    reponse_f1: "N'importe quelle colonne",
    reponse_v: "Une PRIMARY KEY ou une colonne UNIQUE",
    reponse_f2: "Une vue",
  },
  {
    id: 55,
    question: "Quel est le rôle d'une contrainte UNIQUE ?",
    reponse_f1: "Empêcher les valeurs NULL",
    reponse_v:
      "Empêcher les doublons dans une colonne ou un ensemble de colonnes",
    reponse_f2: "Créer une clé étrangère",
  },
  {
    id: 56,
    question:
      "Contrairement à PRIMARY KEY, une colonne UNIQUE peut-elle contenir des valeurs NULL ?",
    reponse_f1: "Jamais",
    reponse_v: "Oui",
    reponse_f2: "Seulement avec SERIAL",
  },
  {
    id: 57,
    question: "Quel est le rôle de la contrainte NOT NULL ?",
    reponse_f1: "Empêcher les doublons",
    reponse_v: "Empêcher les valeurs NULL",
    reponse_f2: "Créer un index",
  },
  {
    id: 58,
    question: "Quel est le rôle d'une contrainte CHECK ?",
    reponse_f1: "Créer une clé primaire",
    reponse_v:
      "Vérifier qu'une condition est respectée avant l'insertion ou la mise à jour",
    reponse_f2: "Compresser les données",
  },
  {
    id: 59,
    question:
      "Quelle contrainte permet d'imposer qu'un âge soit supérieur ou égal à 18 ?",
    reponse_f1: "NOT NULL",
    reponse_v: "CHECK (age >= 18)",
    reponse_f2: "UNIQUE(age)",
  },
  {
    id: 60,
    question: "Quel est le rôle de DEFAULT ?",
    reponse_f1: "Empêcher les NULL",
    reponse_v: "Attribuer automatiquement une valeur si aucune n'est fournie",
    reponse_f2: "Créer une séquence",
  },
  {
    id: 61,
    question: "Que fait DEFAULT CURRENT_DATE ?",
    reponse_f1: "Insère la date du serveur PostgreSQL au démarrage",
    reponse_v: "Insère automatiquement la date du jour",
    reponse_f2: "Insère toujours le 1er janvier",
  },
  {
    id: 62,
    question:
      "Quel type PostgreSQL était historiquement utilisé pour générer automatiquement un identifiant ?",
    reponse_f1: "INTEGER AUTO",
    reponse_v: "SERIAL",
    reponse_f2: "AUTOINCREMENT",
  },
  {
    id: 63,
    question:
      "Quelle est aujourd'hui la méthode recommandée par PostgreSQL pour les identifiants auto-incrémentés ?",
    reponse_f1: "SERIAL",
    reponse_v: "GENERATED AS IDENTITY",
    reponse_f2: "AUTO_INCREMENT",
  },
  {
    id: 64,
    question: "Que crée automatiquement SERIAL ?",
    reponse_f1: "Une vue",
    reponse_v: "Une séquence associée à la colonne",
    reponse_f2: "Une clé étrangère",
  },
  {
    id: 65,
    question:
      "Que se passe-t-il si une insertion viole une contrainte UNIQUE ?",
    reponse_f1: "La ligne est ignorée",
    reponse_v: "PostgreSQL renvoie une erreur",
    reponse_f2: "La valeur est remplacée",
  },
  {
    id: 66,
    question:
      "Que se passe-t-il si une FOREIGN KEY référence une ligne inexistante ?",
    reponse_f1: "PostgreSQL crée automatiquement la ligne",
    reponse_v: "L'insertion échoue",
    reponse_f2: "La valeur devient NULL",
  },
  {
    id: 67,
    question: "Quel est l'effet de ON DELETE CASCADE ?",
    reponse_f1: "Supprime uniquement la table enfant",
    reponse_v:
      "Supprime automatiquement les lignes enfants lorsque la ligne parent est supprimée",
    reponse_f2: "Empêche toute suppression",
  },
  {
    id: 68,
    question: "Quel est l'effet de ON DELETE SET NULL ?",
    reponse_f1: "Supprime les lignes enfants",
    reponse_v: "Met la clé étrangère à NULL lors de la suppression du parent",
    reponse_f2: "Supprime la colonne",
  },
  {
    id: 69,
    question: "Quel est l'effet de ON DELETE RESTRICT ?",
    reponse_f1: "Supprime toutes les lignes",
    reponse_v: "Empêche la suppression si des lignes enfants existent",
    reponse_f2: "Ignore les clés étrangères",
  },
  {
    id: 70,
    question:
      "Quelle contrainte choisir pour garantir qu'une adresse e-mail soit unique ?",
    reponse_f1: "CHECK",
    reponse_v: "UNIQUE",
    reponse_f2: "DEFAULT",
  },
  {
    id: 71,
    question: "Quelle contrainte choisir pour empêcher un salaire négatif ?",
    reponse_f1: "UNIQUE",
    reponse_v: "CHECK (salaire >= 0)",
    reponse_f2: "NOT NULL",
  },
  {
    id: 72,
    question:
      "Quelle contrainte choisir pour qu'une date d'embauche soit obligatoire ?",
    reponse_f1: "CHECK",
    reponse_v: "NOT NULL",
    reponse_f2: "UNIQUE",
  },
  {
    id: 73,
    question:
      "Quelle contrainte garantit qu'un employé appartient à un service existant ?",
    reponse_f1: "PRIMARY KEY",
    reponse_v: "FOREIGN KEY",
    reponse_f2: "CHECK",
  },
  {
    id: 74,
    question:
      "Pourquoi est-il recommandé d'utiliser les contraintes plutôt que de vérifier uniquement dans le code Java ?",
    reponse_f1: "Les contraintes rendent PostgreSQL plus rapide",
    reponse_v:
      "Elles garantissent l'intégrité des données quel que soit le client qui accède à la base",
    reponse_f2: "Elles remplacent complètement les validations applicatives",
  },
  {
    id: 75,
    question:
      "Quelle instruction SQL permet d'ajouter une nouvelle ligne dans une table ?",
    reponse_f1: "ADD",
    reponse_v: "INSERT",
    reponse_f2: "CREATE",
  },
  {
    id: 76,
    question:
      "Quelle requête ajoute un employé nommé 'Dupont' dans la table employe ?",
    reponse_f1: "ADD INTO employe VALUES ('Dupont');",
    reponse_v: "INSERT INTO employe (nom) VALUES ('Dupont');",
    reponse_f2: "CREATE employe ('Dupont');",
  },
  {
    id: 77,
    question: "Quelle instruction permet de modifier des données existantes ?",
    reponse_f1: "CHANGE",
    reponse_v: "UPDATE",
    reponse_f2: "ALTER",
  },
  {
    id: 78,
    question: "Quelle instruction permet de supprimer des lignes d'une table ?",
    reponse_f1: "REMOVE",
    reponse_v: "DELETE",
    reponse_f2: "DROP",
  },
  {
    id: 79,
    question:
      "Que se passe-t-il avec cette requête ?\n\nUPDATE employe SET salaire = 2000;",
    reponse_f1: "Seule la première ligne est modifiée",
    reponse_v: "Toutes les lignes de la table sont mises à jour",
    reponse_f2: "Une erreur SQL est générée",
  },
  {
    id: 80,
    question:
      "Pourquoi est-il important d'utiliser une clause WHERE avec UPDATE ?",
    reponse_f1: "Pour accélérer la requête",
    reponse_v: "Pour éviter de modifier toutes les lignes",
    reponse_f2: "Pour créer un index",
  },
  {
    id: 81,
    question: "Que se passe-t-il avec cette requête ?\n\nDELETE FROM employe;",
    reponse_f1: "La table est supprimée",
    reponse_v: "Toutes les lignes sont supprimées",
    reponse_f2: "Seule la première ligne est supprimée",
  },
  {
    id: 82,
    question:
      "Quelle est la différence principale entre DELETE et DROP TABLE ?",
    reponse_f1: "Aucune",
    reponse_v: "DELETE supprime les lignes, DROP supprime la table",
    reponse_f2: "DROP est plus rapide mais conserve les données",
  },
  {
    id: 83,
    question: "Quelle instruction démarre explicitement une transaction ?",
    reponse_f1: "START",
    reponse_v: "BEGIN",
    reponse_f2: "OPEN",
  },
  {
    id: 84,
    question: "Quelle instruction valide définitivement une transaction ?",
    reponse_f1: "SAVE",
    reponse_v: "COMMIT",
    reponse_f2: "END",
  },
  {
    id: 85,
    question:
      "Quelle instruction annule toutes les modifications depuis le BEGIN ?",
    reponse_f1: "UNDO",
    reponse_v: "ROLLBACK",
    reponse_f2: "CANCEL",
  },
  {
    id: 86,
    question: "Quel est l'objectif principal d'une transaction ?",
    reponse_f1: "Accélérer les requêtes",
    reponse_v: "Garantir la cohérence des données",
    reponse_f2: "Créer des index automatiquement",
  },
  {
    id: 87,
    question: "Que signifie le 'A' de l'acronyme ACID ?",
    reponse_f1: "Access",
    reponse_v: "Atomicity",
    reponse_f2: "Allocation",
  },
  {
    id: 88,
    question: "Que signifie l'Atomicité d'une transaction ?",
    reponse_f1: "Les données sont toujours triées",
    reponse_v: "Toutes les opérations réussissent ou aucune n'est appliquée",
    reponse_f2: "Les requêtes sont exécutées en parallèle",
  },
  {
    id: 89,
    question: "Que signifie le 'C' de ACID ?",
    reponse_f1: "Control",
    reponse_v: "Consistency",
    reponse_f2: "Cache",
  },
  {
    id: 90,
    question: "Que garantit la Cohérence (Consistency) ?",
    reponse_f1: "Les requêtes sont plus rapides",
    reponse_v:
      "Les contraintes de la base restent respectées après la transaction",
    reponse_f2: "Les index sont reconstruits",
  },
  {
    id: 91,
    question: "Que signifie le 'I' de ACID ?",
    reponse_f1: "Index",
    reponse_v: "Isolation",
    reponse_f2: "Insert",
  },
  {
    id: 92,
    question: "Que garantit l'Isolation ?",
    reponse_f1: "Les utilisateurs sont isolés du réseau",
    reponse_v: "Les transactions concurrentes ne se perturbent pas",
    reponse_f2: "Les tables sont chiffrées",
  },
  {
    id: 93,
    question: "Que signifie le 'D' de ACID ?",
    reponse_f1: "Database",
    reponse_v: "Durability",
    reponse_f2: "Data",
  },
  {
    id: 94,
    question: "Que garantit la Durabilité ?",
    reponse_f1: "Les données sont compressées",
    reponse_v:
      "Les données validées par COMMIT sont conservées même après un redémarrage",
    reponse_f2: "Les requêtes sont sauvegardées",
  },
  {
    id: 95,
    question: "Que se passe-t-il après un ROLLBACK ?",
    reponse_f1: "La table est supprimée",
    reponse_v: "Toutes les modifications de la transaction sont annulées",
    reponse_f2: "Les index sont reconstruits",
  },
  {
    id: 96,
    question:
      "Analysez ce code :\n\nBEGIN;\nUPDATE compte SET solde = solde - 100 WHERE id = 1;\nUPDATE compte SET solde = solde + 100 WHERE id = 2;\nCOMMIT;\n\nQuel est l'intérêt principal de cette transaction ?",
    reponse_f1: "Accélérer les UPDATE",
    reponse_v: "Garantir que les deux opérations sont validées ensemble",
    reponse_f2: "Créer automatiquement un historique",
  },
  {
    id: 97,
    question:
      "Analysez ce code :\n\nBEGIN;\nUPDATE compte SET solde = solde - 100 WHERE id = 1;\nROLLBACK;\n\nQuel sera le solde final du compte ?",
    reponse_f1: "Diminué de 100",
    reponse_v: "Identique à celui d'avant la transaction",
    reponse_f2: "Mis à NULL",
  },
  {
    id: 98,
    question:
      "Quelle instruction permet de supprimer rapidement toutes les lignes d'une table sans supprimer sa structure ?",
    reponse_f1: "DROP TABLE",
    reponse_v: "TRUNCATE TABLE",
    reponse_f2: "REMOVE ALL",
  },
  {
    id: 99,
    question: "Quelle est la principale différence entre DELETE et TRUNCATE ?",
    reponse_f1: "Aucune",
    reponse_v:
      "TRUNCATE supprime toutes les lignes beaucoup plus rapidement et sans clause WHERE",
    reponse_f2: "DELETE supprime également la table",
  },
  {
    id: 100,
    question: "Quel est le rôle principal d'un index dans PostgreSQL ?",
    reponse_f1: "Réduire la taille de la base de données",
    reponse_v: "Accélérer les recherches de données",
    reponse_f2: "Créer automatiquement des sauvegardes",
  },
  {
    id: 101,
    question:
      "Quelle instruction crée un index sur la colonne nom de la table employe ?",
    reponse_f1: "ADD INDEX nom;",
    reponse_v: "CREATE INDEX idx_nom ON employe(nom);",
    reponse_f2: "INDEX CREATE nom;",
  },
  {
    id: 102,
    question: "Quel est le type d'index utilisé par défaut dans PostgreSQL ?",
    reponse_f1: "Hash",
    reponse_v: "B-tree",
    reponse_f2: "GIN",
  },
  {
    id: 103,
    question:
      "Quel type d'index est le plus adapté aux recherches d'égalité simples ?",
    reponse_f1: "GiST",
    reponse_v: "Hash",
    reponse_f2: "BRIN",
  },
  {
    id: 104,
    question:
      "Quel type d'index est particulièrement adapté aux recherches Full Text Search ?",
    reponse_f1: "Hash",
    reponse_v: "GIN",
    reponse_f2: "B-tree",
  },
  {
    id: 105,
    question:
      "Quel type d'index est particulièrement adapté aux très grandes tables dont les données sont ordonnées ?",
    reponse_f1: "GIN",
    reponse_v: "BRIN",
    reponse_f2: "Hash",
  },
  {
    id: 106,
    question: "Quel est l'inconvénient principal des index ?",
    reponse_f1: "Ils empêchent les SELECT",
    reponse_v: "Ils ralentissent les INSERT, UPDATE et DELETE",
    reponse_f2: "Ils empêchent les jointures",
  },
  {
    id: 107,
    question:
      "Pourquoi les INSERT sont-ils plus lents lorsqu'une table possède beaucoup d'index ?",
    reponse_f1: "Le processeur est bloqué",
    reponse_v: "Chaque index doit être mis à jour",
    reponse_f2: "Les transactions sont désactivées",
  },
  {
    id: 108,
    question:
      "Quelle commande permet d'afficher le plan d'exécution d'une requête ?",
    reponse_f1: "SHOW PLAN",
    reponse_v: "EXPLAIN",
    reponse_f2: "PLAN",
  },
  {
    id: 109,
    question:
      "Quelle commande affiche le plan d'exécution ainsi que le temps réel d'exécution ?",
    reponse_f1: "SHOW ANALYZE",
    reponse_v: "EXPLAIN ANALYZE",
    reponse_f2: "ANALYZE QUERY",
  },
  {
    id: 110,
    question: "À quoi sert principalement EXPLAIN ?",
    reponse_f1: "Créer un index",
    reponse_v: "Comprendre comment PostgreSQL exécute une requête",
    reponse_f2: "Sauvegarder une table",
  },
  {
    id: 111,
    question:
      "Analysez cette sortie :\n\nSeq Scan on employe\n\nQue signifie 'Seq Scan' ?",
    reponse_f1: "Utilisation d'un index",
    reponse_v: "Lecture séquentielle de toute la table",
    reponse_f2: "Lecture uniquement des lignes modifiées",
  },
  {
    id: 112,
    question:
      "Analysez cette sortie :\n\nIndex Scan using idx_nom\n\nQue peut-on conclure ?",
    reponse_f1: "La table est entièrement parcourue",
    reponse_v: "PostgreSQL utilise un index",
    reponse_f2: "La requête est incorrecte",
  },
  {
    id: 113,
    question:
      "Quelle commande met à jour les statistiques utilisées par l'optimiseur PostgreSQL ?",
    reponse_f1: "UPDATE STATS",
    reponse_v: "ANALYZE",
    reponse_f2: "STATISTICS",
  },
  {
    id: 114,
    question: "Pourquoi PostgreSQL utilise-t-il des statistiques ?",
    reponse_f1: "Pour sauvegarder la base",
    reponse_v: "Pour choisir le plan d'exécution le plus efficace",
    reponse_f2: "Pour créer des utilisateurs",
  },
  {
    id: 115,
    question: "À quoi sert la commande VACUUM ?",
    reponse_f1: "Créer des index",
    reponse_v: "Nettoyer les lignes mortes laissées par les UPDATE et DELETE",
    reponse_f2: "Compresser les sauvegardes",
  },
  {
    id: 116,
    question: "À quoi sert VACUUM ANALYZE ?",
    reponse_f1: "Supprimer toutes les données",
    reponse_v: "Nettoyer les lignes mortes et mettre à jour les statistiques",
    reponse_f2: "Créer automatiquement des index",
  },
  {
    id: 117,
    question:
      "Pourquoi PostgreSQL laisse-t-il des lignes mortes après un UPDATE ?",
    reponse_f1: "À cause des index",
    reponse_v: "À cause du mécanisme MVCC",
    reponse_f2: "À cause des transactions COMMIT",
  },
  {
    id: 118,
    question: "Que signifie MVCC ?",
    reponse_f1: "Multiple Version Cache Control",
    reponse_v: "Multi-Version Concurrency Control",
    reponse_f2: "Memory Version Control Center",
  },
  {
    id: 119,
    question: "Quel est l'avantage principal du MVCC ?",
    reponse_f1: "Accélérer uniquement les INSERT",
    reponse_v: "Permettre des lectures sans bloquer les écritures",
    reponse_f2: "Réduire la taille de la base",
  },
  {
    id: 120,
    question: "Quand est-il recommandé d'ajouter un index ?",
    reponse_f1: "Sur toutes les colonnes",
    reponse_v:
      "Sur les colonnes souvent utilisées dans les WHERE, JOIN ou ORDER BY",
    reponse_f2: "Uniquement sur les clés étrangères",
  },
  {
    id: 121,
    question: "Quel est le risque de créer trop d'index ?",
    reponse_f1: "Les SELECT deviennent impossibles",
    reponse_v:
      "Les performances d'écriture diminuent et l'espace disque augmente",
    reponse_f2: "Les transactions sont désactivées",
  },
  {
    id: 122,
    question: "Quelle colonne est généralement déjà indexée automatiquement ?",
    reponse_f1: "Toutes les colonnes TEXT",
    reponse_v: "La PRIMARY KEY",
    reponse_f2: "Toutes les FOREIGN KEY",
  },
  {
    id: 123,
    question:
      "Analysez cette sortie :\n\nPlanning Time: 0.120 ms\nExecution Time: 0.430 ms\n\nQue représente 'Execution Time' ?",
    reponse_f1: "Le temps de compilation de PostgreSQL",
    reponse_v: "Le temps réel nécessaire pour exécuter la requête",
    reponse_f2: "Le temps de création des index",
  },
  {
    id: 124,
    question:
      "Quelle est généralement la meilleure démarche lorsqu'une requête PostgreSQL est lente ?",
    reponse_f1: "Ajouter des index au hasard",
    reponse_v:
      "Analyser le plan d'exécution avec EXPLAIN ANALYZE avant toute optimisation",
    reponse_f2: "Redémarrer PostgreSQL",
  },
  {
    id: 125,
    question: "Que retourne cette requête ?\n\nSELECT COUNT(*)\nFROM employe;",
    reponse_f1: "La somme des identifiants",
    reponse_v: "Le nombre total de lignes de la table employe",
    reponse_f2: "Le nombre de colonnes de la table",
  },
  {
    id: 126,
    question:
      "Que retourne cette requête ?\n\nSELECT DISTINCT service\nFROM employe;",
    reponse_f1: "Tous les employés triés par service",
    reponse_v: "La liste des services sans doublons",
    reponse_f2: "Le service le plus fréquent",
  },
  {
    id: 127,
    question:
      "Que retourne cette requête ?\n\nSELECT nom\nFROM employe\nORDER BY salaire DESC\nLIMIT 1;",
    reponse_f1: "Le dernier employé ajouté",
    reponse_v: "Le nom de l'employé ayant le salaire le plus élevé",
    reponse_f2: "Le salaire maximum",
  },
  {
    id: 128,
    question:
      "Quelle est l'erreur dans cette requête ?\n\nSELECT nom\nFROM employe\nWHERE COUNT(*) > 5;",
    reponse_f1: "COUNT ne fonctionne pas avec SELECT",
    reponse_v: "COUNT ne peut pas être utilisé dans WHERE",
    reponse_f2: "FROM est inutile",
  },
  {
    id: 129,
    question: "Quelle est la bonne correction de la requête précédente ?",
    reponse_f1: "Utiliser ORDER BY",
    reponse_v: "Utiliser GROUP BY puis HAVING",
    reponse_f2: "Supprimer COUNT",
  },
  {
    id: 130,
    question:
      "Que retourne cette requête ?\n\nSELECT AVG(salaire)\nFROM employe;",
    reponse_f1: "Le salaire maximum",
    reponse_v: "Le salaire moyen",
    reponse_f2: "Le nombre de salaires",
  },
  {
    id: 131,
    question:
      "Que retourne cette requête ?\n\nSELECT COUNT(DISTINCT service)\nFROM employe;",
    reponse_f1: "Le nombre total d'employés",
    reponse_v: "Le nombre de services différents",
    reponse_f2: "Le nombre de services non vides",
  },
  {
    id: 132,
    question:
      "Que retourne cette requête ?\n\nSELECT nom\nFROM employe\nWHERE salaire BETWEEN 2000 AND 3000;",
    reponse_f1: "Les employés gagnant plus de 3000",
    reponse_v:
      "Les employés dont le salaire est compris entre 2000 et 3000 inclus",
    reponse_f2: "Les employés gagnant exactement 2000 ou 3000",
  },
  {
    id: 133,
    question:
      "Que retourne cette requête ?\n\nSELECT *\nFROM employe\nWHERE nom LIKE 'A%';",
    reponse_f1: "Les noms contenant la lettre A",
    reponse_v: "Les employés dont le nom commence par A",
    reponse_f2: "Les employés dont le nom se termine par A",
  },
  {
    id: 134,
    question:
      "Que retourne cette requête ?\n\nSELECT *\nFROM employe\nWHERE nom LIKE '%A';",
    reponse_f1: "Les noms commençant par A",
    reponse_v: "Les noms se terminant par A",
    reponse_f2: "Les noms contenant uniquement A",
  },
  {
    id: 135,
    question:
      "Que retourne cette requête ?\n\nSELECT service, COUNT(*)\nFROM employe\nGROUP BY service;",
    reponse_f1: "Le salaire moyen par service",
    reponse_v: "Le nombre d'employés par service",
    reponse_f2: "Le nombre total d'employés",
  },
  {
    id: 136,
    question:
      "Que retourne cette requête ?\n\nSELECT service, COUNT(*)\nFROM employe\nGROUP BY service\nHAVING COUNT(*) > 5;",
    reponse_f1: "Tous les services",
    reponse_v: "Les services ayant plus de 5 employés",
    reponse_f2: "Les services contenant exactement 5 employés",
  },
  {
    id: 137,
    question:
      "Que retourne cette requête ?\n\nSELECT *\nFROM employe\nORDER BY nom ASC;",
    reponse_f1: "Les employés triés du Z vers A",
    reponse_v: "Les employés triés alphabétiquement",
    reponse_f2: "Les employés triés par identifiant",
  },
  {
    id: 138,
    question:
      "Que retourne cette requête ?\n\nSELECT *\nFROM employe\nORDER BY salaire DESC\nLIMIT 5;",
    reponse_f1: "Les 5 employés les moins payés",
    reponse_v: "Les 5 employés les mieux payés",
    reponse_f2: "Les 5 premiers employés insérés",
  },
  {
    id: 139,
    question:
      "Que retourne cette requête ?\n\nSELECT nom\nFROM employe\nWHERE salaire > (SELECT AVG(salaire) FROM employe);",
    reponse_f1: "Les employés ayant le salaire minimum",
    reponse_v: "Les employés dont le salaire est supérieur à la moyenne",
    reponse_f2: "Le salaire moyen",
  },
  {
    id: 140,
    question: "Quelle est la meilleure pratique concernant SELECT * ?",
    reponse_f1: "Toujours utiliser SELECT *",
    reponse_v: "Sélectionner uniquement les colonnes nécessaires",
    reponse_f2: "SELECT * est obligatoire avec PostgreSQL",
  },
  {
    id: 141,
    question: "Pourquoi éviter SELECT * sur une grande table ?",
    reponse_f1: "Cela empêche l'utilisation des index",
    reponse_v: "Cela peut transférer beaucoup de données inutilement",
    reponse_f2: "Cela supprime les statistiques PostgreSQL",
  },
  {
    id: 142,
    question:
      "Quelle est la meilleure optimisation de cette requête ?\n\nSELECT * FROM employe WHERE nom = 'Martin';",
    reponse_f1: "Ajouter GROUP BY",
    reponse_v:
      "Créer un index sur la colonne nom si la recherche est fréquente",
    reponse_f2: "Utiliser DISTINCT",
  },
  {
    id: 143,
    question: "Quelle requête est généralement la plus performante ?",
    reponse_f1: "SELECT * FROM employe;",
    reponse_v: "SELECT nom FROM employe WHERE id = 10;",
    reponse_f2: "SELECT DISTINCT * FROM employe;",
  },
  {
    id: 144,
    question: "Que permet de vérifier EXPLAIN ANALYZE sur une requête ?",
    reponse_f1: "Uniquement la syntaxe",
    reponse_v: "Le plan d'exécution réel et les performances",
    reponse_f2: "Les droits des utilisateurs",
  },
  {
    id: 145,
    question:
      "Analysez cette sortie :\n\nSeq Scan on employe\nRows Removed by Filter: 999999\n\nQuelle optimisation est la plus pertinente ?",
    reponse_f1: "Supprimer la clause WHERE",
    reponse_v: "Créer un index sur la colonne filtrée",
    reponse_f2: "Utiliser LIMIT 1",
  },
  {
    id: 146,
    question:
      "Analysez cette sortie :\n\nIndex Scan using idx_nom\n\nQue peut-on conclure ?",
    reponse_f1: "La table est parcourue entièrement",
    reponse_v: "PostgreSQL utilise correctement l'index",
    reponse_f2: "L'index est ignoré",
  },
  {
    id: 147,
    question:
      "Quelle requête est généralement la plus performante sur une clé primaire ?",
    reponse_f1: "WHERE nom = 'Martin'",
    reponse_v: "WHERE id = 15",
    reponse_f2: "ORDER BY nom",
  },
  {
    id: 148,
    question:
      "Pourquoi une requête utilisant un index peut-elle malgré tout effectuer un Seq Scan ?",
    reponse_f1: "Les index ne fonctionnent qu'avec PostgreSQL 16",
    reponse_v: "L'optimiseur estime qu'un parcours complet est plus efficace",
    reponse_f2: "Parce que la table contient des NULL",
  },
  {
    id: 149,
    question:
      "Face à une requête PostgreSQL lente, quelle est généralement la meilleure démarche ?",
    reponse_f1: "Ajouter plusieurs index sans analyse",
    reponse_v:
      "Étudier le plan d'exécution avec EXPLAIN ANALYZE puis optimiser la requête ou les index",
    reponse_f2: "Redémarrer PostgreSQL",
  },
];
