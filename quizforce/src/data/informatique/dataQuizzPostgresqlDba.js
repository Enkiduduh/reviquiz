export const dataQuizzPostgresqlDba = [
  {
    id: 0,
    question: "Quel est le rôle principal d'un DBA PostgreSQL ?",
    reponse_f1: "Développer des applications Java",
    reponse_v: "Administrer, sécuriser et maintenir les bases de données",
    reponse_f2: "Créer uniquement des requêtes SQL",
  },
  {
    id: 1,
    question:
      "Quel utilitaire permet de se connecter à PostgreSQL en ligne de commande ?",
    reponse_f1: "mysql",
    reponse_v: "psql",
    reponse_f2: "pgadmin",
  },
  {
    id: 2,
    question: "Quelle commande quitte le client psql ?",
    reponse_f1: "exit",
    reponse_v: "\\q",
    reponse_f2: "quit()",
  },
  {
    id: 3,
    question: "Quelle commande psql affiche la liste des bases de données ?",
    reponse_f1: "SHOW DATABASES;",
    reponse_v: "\\l",
    reponse_f2: "\\db",
  },
  {
    id: 4,
    question:
      "Quelle commande affiche les tables du schéma courant dans psql ?",
    reponse_f1: "\\table",
    reponse_v: "\\dt",
    reponse_f2: "\\tables",
  },
  {
    id: 5,
    question: "Quelle commande affiche la structure d'une table ?",
    reponse_f1: "\\show employe",
    reponse_v: "\\d employe",
    reponse_f2: "\\schema employe",
  },
  {
    id: 6,
    question: "Quelle commande permet de changer de base dans psql ?",
    reponse_f1: "\\db nom_base",
    reponse_v: "\\c nom_base",
    reponse_f2: "\\use nom_base",
  },
  {
    id: 7,
    question:
      "Quel fichier contient principalement la configuration de PostgreSQL ?",
    reponse_f1: "postgres.conf",
    reponse_v: "postgresql.conf",
    reponse_f2: "config.ini",
  },
  {
    id: 8,
    question:
      "Quel fichier contrôle principalement les autorisations de connexion des clients ?",
    reponse_f1: "users.conf",
    reponse_v: "pg_hba.conf",
    reponse_f2: "access.conf",
  },
  {
    id: 9,
    question:
      "Après modification de postgresql.conf, quelle action est souvent nécessaire ?",
    reponse_f1: "Supprimer le cache",
    reponse_v: "Recharger ou redémarrer PostgreSQL selon le paramètre modifié",
    reponse_f2: "Reconstruire les index",
  },
  {
    id: 10,
    question: "Quelle commande SQL crée un nouvel utilisateur PostgreSQL ?",
    reponse_f1: "ADD USER",
    reponse_v: "CREATE ROLE ... LOGIN",
    reponse_f2: "NEW USER",
  },
  {
    id: 11,
    question: "Quelle commande permet de modifier le mot de passe d'un rôle ?",
    reponse_f1: "UPDATE ROLE",
    reponse_v: "ALTER ROLE",
    reponse_f2: "CHANGE USER",
  },
  {
    id: 12,
    question: "Quel privilège permet de créer de nouvelles bases de données ?",
    reponse_f1: "SUPERUSER",
    reponse_v: "CREATEDB",
    reponse_f2: "CREATEUSER",
  },
  {
    id: 13,
    question: "Quel privilège permet de créer d'autres rôles ?",
    reponse_f1: "ADMIN",
    reponse_v: "CREATEROLE",
    reponse_f2: "SUPERLOGIN",
  },
  {
    id: 14,
    question:
      "Quel privilège donne tous les droits sur l'instance PostgreSQL ?",
    reponse_f1: "CREATEDB",
    reponse_v: "SUPERUSER",
    reponse_f2: "DBA",
  },
  {
    id: 15,
    question: "Quel utilitaire permet de sauvegarder une base PostgreSQL ?",
    reponse_f1: "pg_backup",
    reponse_v: "pg_dump",
    reponse_f2: "pg_export",
  },
  {
    id: 16,
    question:
      "Quel utilitaire restaure une sauvegarde au format personnalisé (.backup) ?",
    reponse_f1: "psql",
    reponse_v: "pg_restore",
    reponse_f2: "pg_dump",
  },
  {
    id: 17,
    question:
      "Quel utilitaire permet de sauvegarder toutes les bases du cluster PostgreSQL ?",
    reponse_f1: "pg_dumpall_db",
    reponse_v: "pg_dumpall",
    reponse_f2: "pg_cluster",
  },
  {
    id: 18,
    question: "À quoi sert principalement VACUUM ?",
    reponse_f1: "Créer des index",
    reponse_v: "Nettoyer les tuples morts créés par le MVCC",
    reponse_f2: "Sauvegarder les données",
  },
  {
    id: 19,
    question: "À quoi sert ANALYZE ?",
    reponse_f1: "Compresser les tables",
    reponse_v: "Mettre à jour les statistiques utilisées par l'optimiseur",
    reponse_f2: "Créer les contraintes",
  },
  {
    id: 20,
    question:
      "Quelle commande combine nettoyage et mise à jour des statistiques ?",
    reponse_f1: "VACUUM FULL",
    reponse_v: "VACUUM ANALYZE",
    reponse_f2: "ANALYZE FULL",
  },
  {
    id: 21,
    question:
      "Quelle vue système affiche les connexions actuellement ouvertes ?",
    reponse_f1: "pg_users",
    reponse_v: "pg_stat_activity",
    reponse_f2: "pg_connections",
  },
  {
    id: 22,
    question: "Quelle vue permet d'observer l'activité des requêtes en cours ?",
    reponse_f1: "pg_tables",
    reponse_v: "pg_stat_activity",
    reponse_f2: "pg_roles",
  },
  {
    id: 23,
    question: "Quelle fonction permet de connaître la version de PostgreSQL ?",
    reponse_f1: "SHOW VERSION;",
    reponse_v: "SELECT version();",
    reponse_f2: "SELECT pg_version();",
  },
  {
    id: 24,
    question:
      "Quelle est généralement la première étape lorsqu'une base PostgreSQL devient lente ?",
    reponse_f1: "Redémarrer immédiatement le serveur",
    reponse_v:
      "Identifier la cause avec les vues statistiques et EXPLAIN ANALYZE",
    reponse_f2: "Reconstruire tous les index",
  },
  {
    id: 25,
    question:
      "Quelle commande permet d'accorder le droit de connexion à une base de données ?",
    reponse_f1: "ALLOW CONNECT",
    reponse_v: "GRANT CONNECT ON DATABASE nom_base TO utilisateur;",
    reponse_f2: "CONNECT TO utilisateur;",
  },
  {
    id: 26,
    question:
      "Quelle commande permet de retirer un privilège à un utilisateur ?",
    reponse_f1: "REMOVE",
    reponse_v: "REVOKE",
    reponse_f2: "DENY",
  },
  {
    id: 27,
    question:
      "Quelle commande permet de donner tous les droits sur une table ?",
    reponse_f1: "ALLOW ALL",
    reponse_v: "GRANT ALL PRIVILEGES ON TABLE employe TO pierre;",
    reponse_f2: "FULL ACCESS employe;",
  },
  {
    id: 28,
    question:
      "Quel privilège permet uniquement de lire les données d'une table ?",
    reponse_f1: "READ",
    reponse_v: "SELECT",
    reponse_f2: "ACCESS",
  },
  {
    id: 29,
    question: "Quel privilège permet d'ajouter des lignes dans une table ?",
    reponse_f1: "CREATE",
    reponse_v: "INSERT",
    reponse_f2: "APPEND",
  },
  {
    id: 30,
    question: "Quel privilège permet de modifier les lignes existantes ?",
    reponse_f1: "ALTER",
    reponse_v: "UPDATE",
    reponse_f2: "MODIFY",
  },
  {
    id: 31,
    question: "Quel privilège permet de supprimer des lignes ?",
    reponse_f1: "REMOVE",
    reponse_v: "DELETE",
    reponse_f2: "DROP",
  },
  {
    id: 32,
    question: "Quel privilège permet d'utiliser une séquence PostgreSQL ?",
    reponse_f1: "SELECT",
    reponse_v: "USAGE",
    reponse_f2: "EXECUTE",
  },
  {
    id: 33,
    question: "À quoi sert principalement un schéma PostgreSQL ?",
    reponse_f1: "À créer une sauvegarde",
    reponse_v: "À organiser les objets d'une base de données",
    reponse_f2: "À remplacer une base de données",
  },
  {
    id: 34,
    question: "Quel est le schéma créé par défaut dans PostgreSQL ?",
    reponse_f1: "public_data",
    reponse_v: "public",
    reponse_f2: "default",
  },
  {
    id: 35,
    question: "Quelle commande crée un nouveau schéma ?",
    reponse_f1: "ADD SCHEMA",
    reponse_v: "CREATE SCHEMA comptabilite;",
    reponse_f2: "NEW SCHEMA",
  },
  {
    id: 36,
    question: "Quelle commande supprime un schéma vide ?",
    reponse_f1: "DELETE SCHEMA",
    reponse_v: "DROP SCHEMA nom_schema;",
    reponse_f2: "REMOVE SCHEMA",
  },
  {
    id: 37,
    question:
      "Quelle commande permet de donner le droit d'utiliser un schéma ?",
    reponse_f1: "GRANT ACCESS",
    reponse_v: "GRANT USAGE ON SCHEMA public TO pierre;",
    reponse_f2: "GRANT SCHEMA",
  },
  {
    id: 38,
    question:
      "Quelle commande permet d'autoriser la création d'objets dans un schéma ?",
    reponse_f1: "GRANT INSERT",
    reponse_v: "GRANT CREATE ON SCHEMA public TO pierre;",
    reponse_f2: "GRANT BUILD",
  },
  {
    id: 39,
    question: "Quelle commande affiche tous les rôles dans psql ?",
    reponse_f1: "\\du+roles",
    reponse_v: "\\du",
    reponse_f2: "\\roles",
  },
  {
    id: 40,
    question: "Quelle vue système contient les informations sur les rôles ?",
    reponse_f1: "pg_users_list",
    reponse_v: "pg_roles",
    reponse_f2: "pg_accounts",
  },
  {
    id: 41,
    question: "Quelle commande crée un rôle sans possibilité de connexion ?",
    reponse_f1: "CREATE USER",
    reponse_v: "CREATE ROLE developpeur;",
    reponse_f2: "CREATE LOGIN;",
  },
  {
    id: 42,
    question: "Pourquoi créer un rôle sans LOGIN ?",
    reponse_f1: "Pour accélérer PostgreSQL",
    reponse_v:
      "Pour regrouper des permissions attribuées ensuite aux utilisateurs",
    reponse_f2: "Pour créer une base automatiquement",
  },
  {
    id: 43,
    question: "Quelle commande attribue un rôle à un utilisateur ?",
    reponse_f1: "ADD ROLE",
    reponse_v: "GRANT developpeur TO pierre;",
    reponse_f2: "ASSIGN ROLE",
  },
  {
    id: 44,
    question: "Quelle commande retire un rôle à un utilisateur ?",
    reponse_f1: "DELETE ROLE",
    reponse_v: "REVOKE developpeur FROM pierre;",
    reponse_f2: "REMOVE ROLE",
  },
  {
    id: 45,
    question:
      "Pourquoi privilégier les rôles plutôt que d'accorder les droits utilisateur par utilisateur ?",
    reponse_f1: "Parce que PostgreSQL l'impose",
    reponse_v: "La gestion des permissions est plus simple et plus cohérente",
    reponse_f2: "Les performances sont meilleures",
  },
  {
    id: 46,
    question: "Quel est le principe du moindre privilège ?",
    reponse_f1: "Donner tous les droits à tous les utilisateurs",
    reponse_v: "Accorder uniquement les droits strictement nécessaires",
    reponse_f2: "Interdire toutes les connexions",
  },
  {
    id: 47,
    question:
      "Pourquoi éviter d'utiliser le rôle SUPERUSER pour les applications ?",
    reponse_f1: "Parce qu'il est plus lent",
    reponse_v:
      "Parce qu'il contourne toutes les protections et augmente les risques de sécurité",
    reponse_f2: "Parce qu'il ne peut pas créer de tables",
  },
  {
    id: 48,
    question:
      "Quelle est généralement la meilleure pratique pour une application métier ?",
    reponse_f1: "Utiliser le compte postgres",
    reponse_v: "Créer un rôle dédié avec uniquement les privilèges nécessaires",
    reponse_f2: "Utiliser systématiquement SUPERUSER",
  },
  {
    id: 49,
    question:
      "Vous devez donner un accès en lecture seule à une application. Quelle est la meilleure solution ?",
    reponse_f1: "Lui attribuer le rôle SUPERUSER",
    reponse_v:
      "Créer un rôle disposant uniquement du privilège SELECT sur les tables nécessaires",
    reponse_f2: "Lui donner GRANT ALL PRIVILEGES",
  },
  {
    id: 50,
    question:
      "Quel utilitaire permet d'effectuer une sauvegarde logique d'une base PostgreSQL ?",
    reponse_f1: "pg_restore",
    reponse_v: "pg_dump",
    reponse_f2: "pg_backup",
  },
  {
    id: 51,
    question:
      "Quel utilitaire permet de sauvegarder l'ensemble des bases d'un cluster PostgreSQL ?",
    reponse_f1: "pg_dump",
    reponse_v: "pg_dumpall",
    reponse_f2: "pg_cluster",
  },
  {
    id: 52,
    question:
      "Quel utilitaire permet de restaurer une sauvegarde au format personnalisé (.backup) ?",
    reponse_f1: "psql",
    reponse_v: "pg_restore",
    reponse_f2: "pg_dump",
  },
  {
    id: 53,
    question:
      "Quel format de pg_dump permet une restauration sélective des objets ?",
    reponse_f1: "Plain SQL",
    reponse_v: "Custom (-Fc)",
    reponse_f2: "CSV",
  },
  {
    id: 54,
    question: "Quel est l'avantage principal du format Custom (-Fc) ?",
    reponse_f1: "Il est lisible dans un éditeur de texte",
    reponse_v: "Il permet une restauration partielle et parallèle",
    reponse_f2: "Il est plus rapide à créer qu'un dump SQL",
  },
  {
    id: 55,
    question:
      "Quel est l'avantage principal d'une sauvegarde au format SQL (plain) ?",
    reponse_f1: "Elle est compressée automatiquement",
    reponse_v: "Elle est lisible et modifiable avec un éditeur de texte",
    reponse_f2: "Elle permet uniquement une restauration partielle",
  },
  {
    id: 56,
    question: "Comment restaure-t-on généralement un dump SQL (.sql) ?",
    reponse_f1: "Avec pg_restore",
    reponse_v: "Avec psql",
    reponse_f2: "Avec pg_dump",
  },
  {
    id: 57,
    question: "Que sauvegarde principalement pg_dump ?",
    reponse_f1: "Tout le serveur PostgreSQL",
    reponse_v: "Une base de données et ses objets",
    reponse_f2: "Uniquement les utilisateurs",
  },
  {
    id: 58,
    question: "Que sauvegarde principalement pg_dumpall ?",
    reponse_f1: "Une seule table",
    reponse_v: "Toutes les bases, les rôles et les tablespaces du cluster",
    reponse_f2: "Uniquement les index",
  },
  {
    id: 59,
    question:
      "Pourquoi est-il recommandé de tester régulièrement les sauvegardes ?",
    reponse_f1: "Pour les rendre plus petites",
    reponse_v: "Pour vérifier qu'elles sont réellement restaurables",
    reponse_f2: "Pour accélérer PostgreSQL",
  },
  {
    id: 60,
    question: "Quel est l'objectif principal d'une stratégie de sauvegarde ?",
    reponse_f1: "Accélérer les requêtes",
    reponse_v: "Permettre la restauration des données après un incident",
    reponse_f2: "Réduire la taille des tables",
  },
  {
    id: 61,
    question: "Qu'est-ce qu'une sauvegarde logique ?",
    reponse_f1: "Une copie des fichiers du cluster",
    reponse_v: "Une exportation des objets SQL et des données",
    reponse_f2: "Une copie de la mémoire vive",
  },
  {
    id: 62,
    question: "Qu'est-ce qu'une sauvegarde physique ?",
    reponse_f1: "Une exportation SQL",
    reponse_v: "Une copie des fichiers du cluster PostgreSQL",
    reponse_f2: "Une sauvegarde des utilisateurs uniquement",
  },
  {
    id: 63,
    question: "Que signifie PITR ?",
    reponse_f1: "PostgreSQL Internal Table Restore",
    reponse_v: "Point-In-Time Recovery",
    reponse_f2: "Primary Index Transaction Recovery",
  },
  {
    id: 64,
    question: "À quoi sert principalement le PITR ?",
    reponse_f1: "Optimiser les index",
    reponse_v: "Restaurer la base à un instant précis",
    reponse_f2: "Créer automatiquement des sauvegardes",
  },
  {
    id: 65,
    question:
      "Quel mécanisme PostgreSQL est indispensable pour mettre en œuvre un PITR ?",
    reponse_f1: "VACUUM",
    reponse_v: "Les fichiers WAL",
    reponse_f2: "ANALYZE",
  },
  {
    id: 66,
    question: "Que signifie WAL ?",
    reponse_f1: "Wide Access Log",
    reponse_v: "Write Ahead Log",
    reponse_f2: "Write Access Layer",
  },
  {
    id: 67,
    question: "Quel est le rôle principal des fichiers WAL ?",
    reponse_f1: "Stocker les sauvegardes SQL",
    reponse_v: "Journaliser les modifications avant leur écriture sur disque",
    reponse_f2: "Créer les index",
  },
  {
    id: 68,
    question: "Pourquoi PostgreSQL écrit-il d'abord dans les WAL ?",
    reponse_f1: "Pour réduire la mémoire utilisée",
    reponse_v: "Pour garantir la durabilité et la récupération après incident",
    reponse_f2: "Pour accélérer VACUUM",
  },
  {
    id: 69,
    question:
      "Quelle commande SQL permet de vérifier si l'archivage des WAL est activé ?",
    reponse_f1: "SHOW backup;",
    reponse_v: "SHOW archive_mode;",
    reponse_f2: "SHOW wal_archive;",
  },
  {
    id: 70,
    question: "Quel paramètre définit la commande d'archivage des WAL ?",
    reponse_f1: "wal_backup_command",
    reponse_v: "archive_command",
    reponse_f2: "backup_command",
  },
  {
    id: 71,
    question:
      "Pourquoi conserver les fichiers WAL après une sauvegarde complète ?",
    reponse_f1: "Pour accélérer PostgreSQL",
    reponse_v:
      "Pour pouvoir rejouer les transactions jusqu'à un instant précis",
    reponse_f2: "Pour reconstruire les index",
  },
  {
    id: 72,
    question:
      "Quel est le principal risque si les fichiers WAL nécessaires sont perdus ?",
    reponse_f1: "Les index disparaissent",
    reponse_v: "Le PITR devient impossible",
    reponse_f2: "Les utilisateurs ne peuvent plus se connecter",
  },
  {
    id: 73,
    question:
      "Quelle est généralement la meilleure pratique concernant les sauvegardes ?",
    reponse_f1: "Conserver une seule copie sur le serveur",
    reponse_v:
      "Conserver plusieurs copies, dont une hors du serveur de production",
    reponse_f2: "Ne sauvegarder que les tables importantes",
  },
  {
    id: 74,
    question:
      "Après une restauration réussie d'une base critique, quelle est généralement la première vérification à effectuer ?",
    reponse_f1: "Créer immédiatement de nouveaux index",
    reponse_v:
      "Vérifier l'intégrité des données et le bon fonctionnement des applications",
    reponse_f2: "Lancer immédiatement VACUUM FULL",
  },
  {
    id: 75,
    question: "Quel est le rôle principal d'Autovacuum dans PostgreSQL ?",
    reponse_f1: "Créer automatiquement des sauvegardes",
    reponse_v:
      "Nettoyer automatiquement les tuples morts et mettre à jour les statistiques",
    reponse_f2: "Créer automatiquement des index",
  },
  {
    id: 76,
    question: "Pourquoi Autovacuum est-il indispensable dans PostgreSQL ?",
    reponse_f1: "Pour permettre les connexions",
    reponse_v:
      "Pour éviter l'accumulation de tuples morts et maintenir les performances",
    reponse_f2: "Pour générer les WAL",
  },
  {
    id: 77,
    question:
      "Quel est le risque principal si Autovacuum est désactivé pendant une longue période ?",
    reponse_f1: "Les sauvegardes échouent",
    reponse_v:
      "La base peut fortement ralentir et même refuser certaines écritures à cause du wraparound",
    reponse_f2: "Les utilisateurs perdent leurs droits",
  },
  {
    id: 78,
    question: "Que représente un tuple mort (dead tuple) ?",
    reponse_f1: "Une ligne supprimée définitivement du disque",
    reponse_v:
      "Une ancienne version d'une ligne devenue inutile à cause du MVCC",
    reponse_f2: "Une ligne corrompue",
  },
  {
    id: 79,
    question:
      "Pourquoi PostgreSQL conserve-t-il temporairement les tuples morts ?",
    reponse_f1: "Pour accélérer les sauvegardes",
    reponse_v:
      "Pour permettre aux transactions concurrentes de continuer à voir une version cohérente des données",
    reponse_f2: "Pour reconstruire les index",
  },
  {
    id: 80,
    question: "Que signifie MVCC ?",
    reponse_f1: "Multi Version Cache Control",
    reponse_v: "Multi-Version Concurrency Control",
    reponse_f2: "Multiple Virtual Cluster Controller",
  },
  {
    id: 81,
    question: "Quel est l'avantage principal du MVCC ?",
    reponse_f1: "Réduire la mémoire utilisée",
    reponse_v: "Permettre aux lectures de ne pas bloquer les écritures",
    reponse_f2: "Supprimer automatiquement les index",
  },
  {
    id: 82,
    question: "Quel processus nettoie principalement les tuples morts ?",
    reponse_f1: "Checkpointer",
    reponse_v: "Autovacuum",
    reponse_f2: "Background Writer",
  },
  {
    id: 83,
    question: "À quoi sert principalement un checkpoint ?",
    reponse_f1: "Créer une sauvegarde",
    reponse_v: "Forcer l'écriture des pages mémoire sur disque",
    reponse_f2: "Reconstruire les index",
  },
  {
    id: 84,
    question: "Pourquoi les checkpoints sont-ils importants ?",
    reponse_f1: "Ils accélèrent les SELECT",
    reponse_v: "Ils réduisent le temps de récupération après un crash",
    reponse_f2: "Ils remplacent les sauvegardes",
  },
  {
    id: 85,
    question: "Quel est l'effet de checkpoints trop fréquents ?",
    reponse_f1: "Les index disparaissent",
    reponse_v:
      "Ils augmentent les écritures disque et peuvent dégrader les performances",
    reponse_f2: "Ils désactivent le WAL",
  },
  {
    id: 86,
    question:
      "Quel processus écrit progressivement les pages sales afin de limiter le travail des checkpoints ?",
    reponse_f1: "Autovacuum",
    reponse_v: "Background Writer",
    reponse_f2: "WAL Sender",
  },
  {
    id: 87,
    question: "Que signifie 'page sale' (dirty page) ?",
    reponse_f1: "Une page corrompue",
    reponse_v: "Une page modifiée en mémoire mais pas encore écrite sur disque",
    reponse_f2: "Une page supprimée",
  },
  {
    id: 88,
    question: "Quel est le rôle principal des WAL ?",
    reponse_f1: "Stocker les index",
    reponse_v:
      "Journaliser toutes les modifications avant leur écriture dans les fichiers de données",
    reponse_f2: "Sauvegarder les utilisateurs",
  },
  {
    id: 89,
    question: "Pourquoi PostgreSQL écrit-il d'abord dans les WAL ?",
    reponse_f1: "Pour gagner de l'espace disque",
    reponse_v: "Pour garantir la durabilité des transactions",
    reponse_f2: "Pour accélérer VACUUM",
  },
  {
    id: 90,
    question: "Qu'appelle-t-on le 'bloat' dans PostgreSQL ?",
    reponse_f1: "Une corruption des index",
    reponse_v:
      "L'espace inutile occupé par des tuples morts ou des pages peu remplies",
    reponse_f2: "Une saturation de la mémoire",
  },
  {
    id: 91,
    question:
      "Quelle commande permet généralement de réduire le bloat sans reconstruire complètement la table ?",
    reponse_f1: "CHECKPOINT",
    reponse_v: "VACUUM",
    reponse_f2: "ANALYZE",
  },
  {
    id: 92,
    question:
      "Quelle commande reconstruit physiquement une table afin de supprimer totalement le bloat ?",
    reponse_f1: "VACUUM",
    reponse_v: "VACUUM FULL",
    reponse_f2: "ANALYZE",
  },
  {
    id: 93,
    question: "Quel est l'inconvénient principal de VACUUM FULL ?",
    reponse_f1: "Il ne libère pas d'espace",
    reponse_v: "Il verrouille fortement la table pendant son exécution",
    reponse_f2: "Il désactive Autovacuum",
  },
  {
    id: 94,
    question: "À quoi sert l'opération FREEZE effectuée par Autovacuum ?",
    reponse_f1: "À compresser les tables",
    reponse_v: "À éviter le problème de Transaction ID Wraparound",
    reponse_f2: "À supprimer les index inutilisés",
  },
  {
    id: 95,
    question: "Qu'est-ce que le Transaction ID Wraparound ?",
    reponse_f1: "Une corruption des sauvegardes",
    reponse_v:
      "Le recyclage des identifiants de transaction pouvant mettre en danger l'intégrité des données",
    reponse_f2: "Une saturation des WAL",
  },
  {
    id: 96,
    question: "Quel est le rôle principal du processus Checkpointer ?",
    reponse_f1: "Créer des utilisateurs",
    reponse_v:
      "Déclencher les checkpoints et synchroniser les données sur disque",
    reponse_f2: "Nettoyer les tuples morts",
  },
  {
    id: 97,
    question:
      "Pourquoi une table très mise à jour nécessite-t-elle davantage de VACUUM ?",
    reponse_f1: "Parce qu'elle contient plus d'index",
    reponse_v: "Parce qu'elle génère davantage de tuples morts",
    reponse_f2: "Parce qu'elle change de tablespace",
  },
  {
    id: 98,
    question:
      "Quelle vue système permet notamment de surveiller l'activité d'Autovacuum ?",
    reponse_f1: "pg_tables",
    reponse_v: "pg_stat_activity",
    reponse_f2: "pg_indexes",
  },
  {
    id: 99,
    question:
      "En tant que DBA, quelle est généralement la meilleure stratégie concernant Autovacuum ?",
    reponse_f1: "Le désactiver pour gagner en performances",
    reponse_v:
      "Le laisser activé et ajuster sa configuration selon la charge du serveur",
    reponse_f2: "Le lancer uniquement une fois par semaine",
  },
  {
    id: 100,
    question:
      "Quel est le rôle principal des verrous (locks) dans PostgreSQL ?",
    reponse_f1: "Accélérer les requêtes",
    reponse_v: "Garantir la cohérence des données lors des accès concurrents",
    reponse_f2: "Créer des sauvegardes",
  },
  {
    id: 101,
    question:
      "Quelle vue système permet d'observer les verrous actuellement détenus ?",
    reponse_f1: "pg_stat_database",
    reponse_v: "pg_locks",
    reponse_f2: "pg_indexes",
  },
  {
    id: 102,
    question:
      "Quelle vue système permet d'identifier les sessions actuellement connectées ?",
    reponse_f1: "pg_connections",
    reponse_v: "pg_stat_activity",
    reponse_f2: "pg_users",
  },
  {
    id: 103,
    question:
      "Quelle colonne de pg_stat_activity indique l'état actuel d'une session ?",
    reponse_f1: "username",
    reponse_v: "state",
    reponse_f2: "backend",
  },
  {
    id: 104,
    question:
      "Que signifie généralement l'état 'active' dans pg_stat_activity ?",
    reponse_f1: "La session est déconnectée",
    reponse_v: "La session exécute actuellement une requête",
    reponse_f2: "La session est verrouillée",
  },
  {
    id: 105,
    question: "Que signifie généralement l'état 'idle' ?",
    reponse_f1: "La session est bloquée",
    reponse_v: "La session est connectée mais n'exécute aucune requête",
    reponse_f2: "La connexion est perdue",
  },
  {
    id: 106,
    question: "Que signifie l'état 'idle in transaction' ?",
    reponse_f1: "La transaction est terminée",
    reponse_v: "Une transaction est ouverte mais aucune requête n'est exécutée",
    reponse_f2: "La base est arrêtée",
  },
  {
    id: 107,
    question:
      "Pourquoi les sessions 'idle in transaction' sont-elles problématiques ?",
    reponse_f1: "Elles utilisent trop de CPU",
    reponse_v:
      "Elles peuvent conserver des verrous et empêcher VACUUM de nettoyer les tuples morts",
    reponse_f2: "Elles désactivent Autovacuum",
  },
  {
    id: 108,
    question: "Qu'est-ce qu'un deadlock ?",
    reponse_f1: "Une sauvegarde incomplète",
    reponse_v:
      "Deux transactions qui s'attendent mutuellement et ne peuvent plus progresser",
    reponse_f2: "Une corruption des WAL",
  },
  {
    id: 109,
    question: "Comment PostgreSQL réagit-il lorsqu'un deadlock est détecté ?",
    reponse_f1: "Il redémarre automatiquement",
    reponse_v: "Il annule une des transactions concernées",
    reponse_f2: "Il bloque définitivement les deux transactions",
  },
  {
    id: 110,
    question:
      "Quelle vue est généralement utilisée avec pg_locks pour identifier un blocage ?",
    reponse_f1: "pg_tables",
    reponse_v: "pg_stat_activity",
    reponse_f2: "pg_indexes",
  },
  {
    id: 111,
    question: "Quelle fonction permet de terminer une session PostgreSQL ?",
    reponse_f1: "pg_stop_backend()",
    reponse_v: "pg_terminate_backend(pid)",
    reponse_f2: "kill_backend()",
  },
  {
    id: 112,
    question:
      "Quelle fonction permet uniquement d'annuler la requête en cours sans fermer la connexion ?",
    reponse_f1: "pg_cancel()",
    reponse_v: "pg_cancel_backend(pid)",
    reponse_f2: "pg_stop_query()",
  },
  {
    id: 113,
    question:
      "Dans quel cas privilégie-t-on pg_cancel_backend() plutôt que pg_terminate_backend() ?",
    reponse_f1: "Jamais",
    reponse_v:
      "Lorsqu'on souhaite arrêter uniquement la requête sans déconnecter le client",
    reponse_f2: "Pour supprimer un utilisateur",
  },
  {
    id: 114,
    question:
      "Quelle est généralement la première étape avant de terminer une session bloquante ?",
    reponse_f1: "La tuer immédiatement",
    reponse_v: "Identifier la cause du blocage et vérifier son impact",
    reponse_f2: "Redémarrer PostgreSQL",
  },
  {
    id: 115,
    question:
      "Quel niveau d'isolation est utilisé par défaut dans PostgreSQL ?",
    reponse_f1: "READ UNCOMMITTED",
    reponse_v: "READ COMMITTED",
    reponse_f2: "SERIALIZABLE",
  },
  {
    id: 116,
    question:
      "Quel est le niveau d'isolation le plus strict proposé par PostgreSQL ?",
    reponse_f1: "READ COMMITTED",
    reponse_v: "SERIALIZABLE",
    reponse_f2: "REPEATABLE READ ONLY",
  },
  {
    id: 117,
    question: "Quel est l'avantage principal de READ COMMITTED ?",
    reponse_f1: "Aucune concurrence n'est possible",
    reponse_v: "Bon compromis entre cohérence et performances",
    reponse_f2: "Toutes les lectures sont figées",
  },
  {
    id: 118,
    question: "Pourquoi SERIALIZABLE est-il plus coûteux ?",
    reponse_f1: "Il désactive les index",
    reponse_v:
      "Il impose davantage de contrôles pour garantir une isolation maximale",
    reponse_f2: "Il désactive MVCC",
  },
  {
    id: 119,
    question: "Quelle commande verrouille explicitement une table ?",
    reponse_f1: "BLOCK TABLE",
    reponse_v: "LOCK TABLE",
    reponse_f2: "FREEZE TABLE",
  },
  {
    id: 120,
    question:
      "Pourquoi éviter de verrouiller une table plus longtemps que nécessaire ?",
    reponse_f1: "Les sauvegardes deviennent impossibles",
    reponse_v: "Les autres transactions peuvent être bloquées",
    reponse_f2: "Les index sont supprimés",
  },
  {
    id: 121,
    question:
      "Quelle colonne de pg_stat_activity contient la requête SQL actuellement exécutée ?",
    reponse_f1: "backend_type",
    reponse_v: "query",
    reponse_f2: "database",
  },
  {
    id: 122,
    question:
      "Quelle vue permet de connaître depuis combien de temps une transaction est ouverte ?",
    reponse_f1: "pg_database",
    reponse_v: "pg_stat_activity (via xact_start)",
    reponse_f2: "pg_tablespace",
  },
  {
    id: 123,
    question:
      "En production, quelle est généralement la meilleure façon d'éviter les deadlocks ?",
    reponse_f1: "Utiliser uniquement SERIALIZABLE",
    reponse_v:
      "Toujours accéder aux ressources dans le même ordre et garder des transactions courtes",
    reponse_f2: "Redémarrer régulièrement PostgreSQL",
  },
  {
    id: 124,
    question:
      "Face à un blocage important en production, quelle est généralement la meilleure démarche ?",
    reponse_f1: "Redémarrer immédiatement PostgreSQL",
    reponse_v:
      "Identifier la session bloquante avec pg_locks et pg_stat_activity, puis intervenir de manière ciblée",
    reponse_f2: "Lancer immédiatement VACUUM FULL sur toutes les tables",
  },

  {
    id: 125,
    question: "Quel est le principal objectif de la réplication PostgreSQL ?",
    reponse_f1: "Accélérer les requêtes SQL",
    reponse_v:
      "Assurer la haute disponibilité et/ou répartir la charge de lecture",
    reponse_f2: "Réduire la taille de la base",
  },
  {
    id: 126,
    question:
      "Quel type de réplication est utilisé par défaut par PostgreSQL ?",
    reponse_f1: "Réplication logique",
    reponse_v: "Réplication physique (Streaming Replication)",
    reponse_f2: "Réplication synchrone",
  },
  {
    id: 127,
    question:
      "Quel est le serveur contenant les données de référence dans une réplication PostgreSQL ?",
    reponse_f1: "Standby",
    reponse_v: "Primary",
    reponse_f2: "Replica",
  },
  {
    id: 128,
    question:
      "Comment appelle-t-on généralement le serveur qui reçoit les données répliquées ?",
    reponse_f1: "Master",
    reponse_v: "Standby",
    reponse_f2: "Publisher",
  },
  {
    id: 129,
    question:
      "Quel mécanisme transporte principalement les modifications lors d'une réplication physique ?",
    reponse_f1: "Les index",
    reponse_v: "Les fichiers WAL",
    reponse_f2: "Les vues",
  },
  {
    id: 130,
    question:
      "Quel paramètre doit être correctement configuré pour autoriser la réplication ?",
    reponse_f1: "shared_buffers",
    reponse_v: "wal_level",
    reponse_f2: "work_mem",
  },
  {
    id: 131,
    question:
      "Quelle valeur de wal_level est généralement utilisée pour la Streaming Replication ?",
    reponse_f1: "minimal",
    reponse_v: "replica",
    reponse_f2: "memory",
  },
  {
    id: 132,
    question: "Quel processus envoie les WAL depuis le serveur Primary ?",
    reponse_f1: "Checkpointer",
    reponse_v: "WAL Sender",
    reponse_f2: "Autovacuum",
  },
  {
    id: 133,
    question: "Quel processus reçoit les WAL sur le serveur Standby ?",
    reponse_f1: "Background Writer",
    reponse_v: "WAL Receiver",
    reponse_f2: "Checkpointer",
  },
  {
    id: 134,
    question:
      "Quelle vue système permet de surveiller les répliques connectées depuis le serveur Primary ?",
    reponse_f1: "pg_stat_activity",
    reponse_v: "pg_stat_replication",
    reponse_f2: "pg_replica_status",
  },
  {
    id: 135,
    question:
      "Quelle vue système permet de surveiller la réception des WAL sur un Standby ?",
    reponse_f1: "pg_stat_database",
    reponse_v: "pg_stat_wal_receiver",
    reponse_f2: "pg_stat_sender",
  },
  {
    id: 136,
    question: "Qu'est-ce qu'une réplication synchrone ?",
    reponse_f1: "Le Standby reçoit les données une fois par heure",
    reponse_v: "La transaction n'est validée qu'après confirmation du Standby",
    reponse_f2: "Les WAL sont copiés uniquement la nuit",
  },
  {
    id: 137,
    question: "Quel est l'inconvénient principal de la réplication synchrone ?",
    reponse_f1: "Elle désactive les sauvegardes",
    reponse_v: "Les temps de réponse peuvent augmenter",
    reponse_f2: "Elle empêche VACUUM",
  },
  {
    id: 138,
    question: "Quel est l'avantage principal de la réplication asynchrone ?",
    reponse_f1: "Aucune perte de données n'est possible",
    reponse_v: "Les performances d'écriture sont généralement meilleures",
    reponse_f2: "Elle ne nécessite pas de WAL",
  },
  {
    id: 139,
    question: "Quel est le principal risque d'une réplication asynchrone ?",
    reponse_f1: "Les index disparaissent",
    reponse_v:
      "Une perte des dernières transactions est possible en cas de panne du Primary",
    reponse_f2: "Les sauvegardes deviennent impossibles",
  },
  {
    id: 140,
    question: "Qu'est-ce qu'un Replication Slot ?",
    reponse_f1: "Un index spécialisé",
    reponse_v:
      "Un mécanisme empêchant PostgreSQL de supprimer des WAL encore nécessaires",
    reponse_f2: "Un tablespace dédié",
  },
  {
    id: 141,
    question: "Quel est le risque si un Replication Slot n'est plus utilisé ?",
    reponse_f1: "Les index sont supprimés",
    reponse_v: "Les fichiers WAL peuvent s'accumuler et remplir le disque",
    reponse_f2: "La réplication devient synchrone",
  },
  {
    id: 142,
    question: "Qu'est-ce que le Failover ?",
    reponse_f1: "Une sauvegarde complète",
    reponse_v: "Le basculement automatique ou manuel vers un serveur Standby",
    reponse_f2: "Une reconstruction des index",
  },
  {
    id: 143,
    question: "Que devient généralement un Standby après un Failover ?",
    reponse_f1: "Il est supprimé",
    reponse_v: "Il devient le nouveau serveur Primary",
    reponse_f2: "Il devient un WAL Sender",
  },
  {
    id: 144,
    question: "À quoi sert principalement la réplication logique ?",
    reponse_f1: "À recopier tout le cluster bit à bit",
    reponse_v: "À répliquer des tables ou publications spécifiques",
    reponse_f2: "À remplacer les sauvegardes",
  },
  {
    id: 145,
    question:
      "Quels objets sont utilisés par la réplication logique PostgreSQL ?",
    reponse_f1: "Views et Triggers",
    reponse_v: "Publication et Subscription",
    reponse_f2: "Schemas et Roles",
  },
  {
    id: 146,
    question:
      "Quelle commande SQL crée une publication en réplication logique ?",
    reponse_f1: "CREATE REPLICATION;",
    reponse_v: "CREATE PUBLICATION;",
    reponse_f2: "CREATE STREAM;",
  },
  {
    id: 147,
    question: "Quelle commande SQL crée un abonnement à une publication ?",
    reponse_f1: "CREATE REPLICA;",
    reponse_v: "CREATE SUBSCRIPTION;",
    reponse_f2: "CREATE FOLLOWER;",
  },
  {
    id: 148,
    question:
      "Quelle est généralement la première chose à vérifier lorsqu'une réplication semble en retard ?",
    reponse_f1: "Les index",
    reponse_v: "L'état de pg_stat_replication et le retard des WAL",
    reponse_f2: "Les utilisateurs connectés",
  },
  {
    id: 149,
    question:
      "En production, quelle est la meilleure pratique concernant une architecture Primary/Standby ?",
    reponse_f1: "Ne jamais tester le Failover",
    reponse_v: "Tester régulièrement les procédures de bascule et de reprise",
    reponse_f2: "Désactiver les WAL pour gagner en performances",
  },
  {
    id: 150,
    question:
      "Quel paramètre contrôle la quantité de mémoire utilisée pour le cache principal de PostgreSQL ?",
    reponse_f1: "work_mem",
    reponse_v: "shared_buffers",
    reponse_f2: "wal_buffers",
  },
  {
    id: 151,
    question: "À quoi sert principalement shared_buffers ?",
    reponse_f1: "Stocker les WAL",
    reponse_v:
      "Conserver les pages de données fréquemment utilisées en mémoire",
    reponse_f2: "Limiter le nombre de connexions",
  },
  {
    id: 152,
    question:
      "Quel paramètre détermine la mémoire maximale utilisable par une opération de tri ou de hash ?",
    reponse_f1: "shared_buffers",
    reponse_v: "work_mem",
    reponse_f2: "maintenance_work_mem",
  },
  {
    id: 153,
    question:
      "Pourquoi fixer work_mem à une valeur trop élevée peut-il être dangereux ?",
    reponse_f1: "Les index disparaissent",
    reponse_v:
      "Chaque opération peut consommer cette mémoire, entraînant une forte consommation globale",
    reponse_f2: "Les WAL sont désactivés",
  },
  {
    id: 154,
    question:
      "Quel paramètre est utilisé notamment lors de CREATE INDEX ou VACUUM ?",
    reponse_f1: "work_mem",
    reponse_v: "maintenance_work_mem",
    reponse_f2: "shared_buffers",
  },
  {
    id: 155,
    question: "Quel est le rôle principal de effective_cache_size ?",
    reponse_f1: "Limiter le cache système",
    reponse_v: "Indiquer à l'optimiseur la quantité de cache disponible",
    reponse_f2: "Définir la taille des WAL",
  },
  {
    id: 156,
    question: "effective_cache_size réserve-t-il réellement de la mémoire ?",
    reponse_f1: "Oui",
    reponse_v: "Non, il fournit uniquement une estimation à l'optimiseur",
    reponse_f2: "Seulement sous Linux",
  },
  {
    id: 157,
    question:
      "Quel paramètre contrôle le nombre maximal de connexions simultanées ?",
    reponse_f1: "max_clients",
    reponse_v: "max_connections",
    reponse_f2: "connection_limit",
  },
  {
    id: 158,
    question:
      "Pourquoi une valeur très élevée de max_connections peut-elle poser problème ?",
    reponse_f1: "Les index sont reconstruits",
    reponse_v: "Chaque connexion consomme de la mémoire et des ressources",
    reponse_f2: "VACUUM est désactivé",
  },
  {
    id: 159,
    question:
      "Quelle solution est généralement recommandée lorsque de nombreuses connexions sont nécessaires ?",
    reponse_f1: "Augmenter max_connections à 10000",
    reponse_v: "Utiliser un pool de connexions comme PgBouncer",
    reponse_f2: "Désactiver Autovacuum",
  },
  {
    id: 160,
    question:
      "Quel paramètre contrôle la fréquence maximale des checkpoints automatiques ?",
    reponse_f1: "checkpoint_buffers",
    reponse_v: "checkpoint_timeout",
    reponse_f2: "checkpoint_delay",
  },
  {
    id: 161,
    question:
      "Quel paramètre permet d'étaler le travail d'un checkpoint afin de limiter les pics d'E/S ?",
    reponse_f1: "checkpoint_speed",
    reponse_v: "checkpoint_completion_target",
    reponse_f2: "checkpoint_parallel",
  },
  {
    id: 162,
    question:
      "Quel est généralement l'effet d'un checkpoint_completion_target élevé ?",
    reponse_f1: "Les checkpoints sont désactivés",
    reponse_v: "Les écritures disque sont plus régulières",
    reponse_f2: "Les WAL disparaissent",
  },
  {
    id: 163,
    question:
      "Quel paramètre influence la taille des buffers utilisés pour les WAL ?",
    reponse_f1: "shared_buffers",
    reponse_v: "wal_buffers",
    reponse_f2: "work_mem",
  },
  {
    id: 164,
    question:
      "Quel paramètre représente le coût estimé d'un accès disque aléatoire ?",
    reponse_f1: "cpu_tuple_cost",
    reponse_v: "random_page_cost",
    reponse_f2: "disk_cost",
  },
  {
    id: 165,
    question:
      "Pourquoi réduit-on souvent random_page_cost sur un serveur équipé de SSD ?",
    reponse_f1: "Pour désactiver les index",
    reponse_v:
      "Parce que les accès aléatoires sont beaucoup plus rapides qu'avec un disque mécanique",
    reponse_f2: "Pour accélérer VACUUM",
  },
  {
    id: 166,
    question:
      "Quel paramètre indique le nombre maximal d'opérations d'E/S simultanées pouvant être exploitées ?",
    reponse_f1: "parallel_workers",
    reponse_v: "effective_io_concurrency",
    reponse_f2: "max_io_threads",
  },
  {
    id: 167,
    question:
      "Quelle commande SQL permet de consulter la valeur actuelle d'un paramètre PostgreSQL ?",
    reponse_f1: "SELECT CONFIG;",
    reponse_v: "SHOW nom_du_parametre;",
    reponse_f2: "DISPLAY PARAMETER;",
  },
  {
    id: 168,
    question: "Quelle commande SQL affiche la valeur de shared_buffers ?",
    reponse_f1: "SELECT shared_buffers;",
    reponse_v: "SHOW shared_buffers;",
    reponse_f2: "CONFIG shared_buffers;",
  },
  {
    id: 169,
    question:
      "Quelle vue système contient les paramètres actuellement chargés ?",
    reponse_f1: "pg_settings_view",
    reponse_v: "pg_settings",
    reponse_f2: "pg_parameters",
  },
  {
    id: 170,
    question:
      "Pourquoi est-il déconseillé de modifier plusieurs paramètres mémoire simultanément sans mesure ?",
    reponse_f1: "Les WAL deviennent invalides",
    reponse_v:
      "Il devient difficile d'identifier l'impact réel de chaque modification",
    reponse_f2: "Les index sont automatiquement reconstruits",
  },
  {
    id: 171,
    question:
      "Quelle est généralement la première étape avant d'optimiser la configuration PostgreSQL ?",
    reponse_f1: "Modifier directement postgresql.conf",
    reponse_v:
      "Mesurer les performances et identifier le véritable goulot d'étranglement",
    reponse_f2: "Augmenter tous les paramètres mémoire",
  },
  {
    id: 172,
    question:
      "Quel outil est le plus adapté pour analyser une requête lente avant de modifier la configuration ?",
    reponse_f1: "VACUUM",
    reponse_v: "EXPLAIN ANALYZE",
    reponse_f2: "CHECKPOINT",
  },
  {
    id: 173,
    question:
      "Pourquoi augmenter shared_buffers n'améliore-t-il pas toujours les performances ?",
    reponse_f1: "Parce que PostgreSQL n'utilise jamais ce paramètre",
    reponse_v:
      "Les performances dépendent du véritable goulot d'étranglement (CPU, I/O, requêtes, index…)",
    reponse_f2: "Parce que shared_buffers ne concerne que Windows",
  },
  {
    id: 174,
    question:
      "Quelle est généralement la meilleure approche pour le tuning PostgreSQL ?",
    reponse_f1: "Appliquer une configuration trouvée sur Internet",
    reponse_v:
      "Mesurer, modifier un paramètre à la fois, puis mesurer de nouveau",
    reponse_f2: "Doubler systématiquement tous les paramètres mémoire",
  },
  {
    id: 175,
    question:
      "Analysez cette sortie :\n\nSELECT pid, state, wait_event_type, wait_event\nFROM pg_stat_activity;\n\n pid | state  | wait_event_type | wait_event\n-----+--------+-----------------+-----------\n1254 | active | Lock            | transactionid\n\nQue peut-on conclure ?",
    reponse_f1: "Le serveur manque de mémoire",
    reponse_v: "La session est bloquée en attente d'un verrou",
    reponse_f2: "Autovacuum est arrêté",
  },
  {
    id: 176,
    question:
      "Analysez cette sortie :\n\nSELECT * FROM pg_stat_activity;\n\nstate = 'idle in transaction'\n\nQuel est le principal risque ?",
    reponse_f1: "Les sauvegardes échouent",
    reponse_v:
      "La transaction conserve des verrous et empêche le nettoyage MVCC",
    reponse_f2: "Les WAL sont supprimés",
  },
  {
    id: 177,
    question:
      "Analysez cette sortie :\n\nSELECT * FROM pg_locks;\n\n granted = false\n\nQue signifie cette information ?",
    reponse_f1: "Le verrou a expiré",
    reponse_v: "La session attend qu'un verrou soit accordé",
    reponse_f2: "Le verrou est corrompu",
  },
  {
    id: 178,
    question:
      "Analysez cette sortie :\n\nSELECT * FROM pg_stat_replication;\n\nwrite_lag = 15s\n\nQuel est le diagnostic ?",
    reponse_f1: "Le Primary est arrêté",
    reponse_v:
      "La réplication accuse un retard d'écriture d'environ 15 secondes",
    reponse_f2: "Les WAL sont désactivés",
  },
  {
    id: 179,
    question:
      "Analysez cette sortie :\n\nSELECT * FROM pg_stat_activity;\n\nquery_start = il y a 4 heures\nstate = active\n\nQuelle est la première vérification à effectuer ?",
    reponse_f1: "Redémarrer PostgreSQL",
    reponse_v:
      "Identifier la requête et comprendre pourquoi elle dure aussi longtemps",
    reponse_f2: "Lancer VACUUM FULL",
  },
  {
    id: 180,
    question:
      "Analysez cette sortie :\n\nEXPLAIN ANALYZE\nSeq Scan on employe\nRows Removed by Filter: 2500000\n\nQuelle optimisation est la plus pertinente ?",
    reponse_f1: "Supprimer le WHERE",
    reponse_v: "Créer un index sur la colonne filtrée si cela est pertinent",
    reponse_f2: "Augmenter shared_buffers",
  },
  {
    id: 181,
    question:
      "Analysez cette sortie :\n\nEXPLAIN ANALYZE\nExecution Time : 28 ms\nPlanning Time : 320 ms\n\nQuel élément paraît anormal ?",
    reponse_f1: "Execution Time",
    reponse_v: "Le temps de planification est inhabituellement élevé",
    reponse_f2: "Les deux valeurs sont identiques",
  },
  {
    id: 182,
    question:
      "Analysez cette sortie :\n\nSHOW shared_buffers;\n128MB\n\nSur un serveur possédant 64 Go de RAM, quelle conclusion peut-on envisager ?",
    reponse_f1: "Le paramètre est trop élevé",
    reponse_v: "Le paramètre paraît probablement sous-dimensionné",
    reponse_f2: "Ce paramètre n'influence jamais les performances",
  },
  {
    id: 183,
    question:
      "Analysez cette sortie :\n\nSHOW work_mem;\n64MB\n\n500 connexions simultanées sont possibles.\n\nQuel risque existe ?",
    reponse_f1: "Les index disparaissent",
    reponse_v:
      "Une consommation mémoire très importante si de nombreuses opérations utilisent work_mem",
    reponse_f2: "Les WAL deviennent trop petits",
  },
  {
    id: 184,
    question:
      "Analysez cette sortie :\n\nSELECT * FROM pg_stat_bgwriter;\ncheckpoints_req très élevé\n\nQue peut-on soupçonner ?",
    reponse_f1: "Le réseau est saturé",
    reponse_v: "Les checkpoints forcés sont trop fréquents",
    reponse_f2: "Autovacuum est désactivé",
  },
  {
    id: 185,
    question:
      "Analysez cette sortie :\n\nSELECT * FROM pg_stat_database;\nblks_hit très élevé\nblks_read très faible\n\nQue peut-on conclure ?",
    reponse_f1: "Le disque est saturé",
    reponse_v: "Le cache fonctionne efficacement",
    reponse_f2: "Les index sont inutilisés",
  },
  {
    id: 186,
    question:
      "Analysez cette sortie :\n\nSELECT * FROM pg_stat_database;\nblks_read très élevé\nblks_hit faible\n\nQuel diagnostic est le plus probable ?",
    reponse_f1: "Le CPU est saturé",
    reponse_v: "La base effectue beaucoup de lectures disque",
    reponse_f2: "Les WAL sont corrompus",
  },
  {
    id: 187,
    question:
      "Analysez cette sortie :\n\nAutovacuum: waiting\n\nUne session est 'idle in transaction' depuis plusieurs heures.\n\nQuelle relation existe entre ces deux informations ?",
    reponse_f1: "Aucune",
    reponse_v: "La transaction ouverte peut empêcher Autovacuum d'avancer",
    reponse_f2: "Autovacuum bloque la transaction",
  },
  {
    id: 188,
    question:
      "Analysez cette sortie :\n\nSELECT version();\nPostgreSQL 11\n\nQuelle réflexion un DBA peut-il avoir ?",
    reponse_f1: "La version est la plus récente",
    reponse_v:
      "Il faut vérifier le support de la version et planifier une montée de version si nécessaire",
    reponse_f2: "La réplication est impossible",
  },
  {
    id: 189,
    question:
      "Analysez cette sortie :\n\narchive_mode = off\n\nQuel impact cela peut-il avoir ?",
    reponse_f1: "VACUUM est désactivé",
    reponse_v: "Le Point-In-Time Recovery (PITR) n'est pas possible",
    reponse_f2: "Les index deviennent inutilisables",
  },
  {
    id: 190,
    question:
      "Analysez cette sortie :\n\npg_replication_slots\nactive = false\nrestart_lsn ancien\n\nQuel risque existe ?",
    reponse_f1: "Le CPU sera saturé",
    reponse_v: "Les fichiers WAL peuvent s'accumuler et remplir le disque",
    reponse_f2: "Les sauvegardes seront supprimées",
  },
  {
    id: 191,
    question:
      "Analysez cette sortie :\n\nmax_connections = 1200\n\nLe serveur possède seulement 8 Go de RAM.\n\nQuelle remarque est la plus pertinente ?",
    reponse_f1: "La valeur est forcément correcte",
    reponse_v:
      "Le nombre maximal de connexions paraît très élevé par rapport à la mémoire disponible",
    reponse_f2: "Cela améliore toujours les performances",
  },
  {
    id: 192,
    question:
      "Analysez cette sortie :\n\nSELECT * FROM pg_stat_activity;\n120 sessions 'idle'\n\nQuelle conclusion est la plus pertinente ?",
    reponse_f1: "Les sessions sont toutes bloquées",
    reponse_v:
      "Les connexions sont ouvertes mais inactives ; un pool de connexions peut être utile",
    reponse_f2: "Les transactions sont perdues",
  },
  {
    id: 193,
    question:
      "Analysez cette sortie :\n\nEXPLAIN ANALYZE\nIndex Scan\nExecution Time : 3 ms\n\nQuel diagnostic est le plus probable ?",
    reponse_f1: "La requête est mal optimisée",
    reponse_v: "La requête semble correctement optimisée",
    reponse_f2: "VACUUM FULL est nécessaire",
  },
  {
    id: 194,
    question:
      "En production, plusieurs utilisateurs signalent des lenteurs. Quelle est généralement la première étape d'un DBA ?",
    reponse_f1: "Modifier immédiatement postgresql.conf",
    reponse_v:
      "Collecter des mesures (pg_stat_activity, pg_locks, EXPLAIN ANALYZE, métriques système) avant toute modification",
    reponse_f2: "Redémarrer immédiatement le serveur",
  },
];
