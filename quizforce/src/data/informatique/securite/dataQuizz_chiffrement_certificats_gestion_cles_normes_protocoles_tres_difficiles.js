export const dataQuizz_chiffrement_certificats_gestion_cles_normes_protocoles_tres_difficiles =[
  {
    "id": 1,
    "question": "`Mini-TP cryptographie — AES-GCM avec nonce unique\n\nSystème : serveur d'administration\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-101-12648\nDurée de protection requise : 4 ans\nVolume moyen : 1217 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-001`",
    "reponse_v": "Utiliser AES-GCM en garantissant l'unicité du nonce",
    "reponse_f1": "Utiliser AES-ECB",
    "reponse_f2": "Réutiliser le même nonce",
    "explication": "GCM fournit confidentialité et intégrité si le nonce n'est pas réutilisé."
  },
  {
    "id": 2,
    "question": "`Mini-TP cryptographie — réutilisation de nonce GCM\n\nSystème : plateforme de signature\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-102-20567\nDurée de protection requise : 5 ans\nVolume moyen : 1234 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-002`",
    "reponse_v": "Changer immédiatement la clé et corriger la génération des nonces",
    "reponse_f1": "Continuer à utiliser la même paire clé/nonce",
    "reponse_f2": "Ajouter Base64",
    "explication": "La réutilisation d'un nonce en GCM compromet la sécurité."
  },
  {
    "id": 3,
    "question": "`Mini-TP cryptographie — stockage de mots de passe\n\nSystème : VPN intersite\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-103-28486\nDurée de protection requise : 6 ans\nVolume moyen : 1251 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-003`",
    "reponse_v": "Utiliser Argon2id avec sel unique et paramètres robustes",
    "reponse_f1": "Utiliser SHA-256 seul sans sel",
    "reponse_f2": "Chiffrer les mots de passe avec une clé commune",
    "explication": "Les mots de passe doivent être dérivés avec une KDF lente."
  },
  {
    "id": 4,
    "question": "`Mini-TP cryptographie — intégrité avec secret partagé\n\nSystème : service de sauvegarde\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-104-36405\nDurée de protection requise : 3 ans\nVolume moyen : 1268 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-004`",
    "reponse_v": "Utiliser HMAC-SHA-256 ou équivalent",
    "reponse_f1": "Utiliser un checksum CRC",
    "reponse_f2": "Utiliser seulement Base64",
    "explication": "HMAC fournit authenticité et intégrité avec un secret."
  },
  {
    "id": 5,
    "question": "`Mini-TP cryptographie — chiffrement de gros volumes\n\nSystème : registre de conteneurs\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-105-44324\nDurée de protection requise : 4 ans\nVolume moyen : 1285 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-005`",
    "reponse_v": "Utiliser un chiffrement symétrique moderne",
    "reponse_f1": "Utiliser RSA directement sur tout le flux",
    "reponse_f2": "Utiliser un simple hachage",
    "explication": "Le chiffrement symétrique est adapté aux gros volumes."
  },
  {
    "id": 6,
    "question": "`Mini-TP cryptographie — motifs visibles avec ECB\n\nSystème : portail citoyen\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-106-52243\nDurée de protection requise : 5 ans\nVolume moyen : 1302 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-006`",
    "reponse_v": "Remplacer ECB par un mode authentifié comme GCM",
    "reponse_f1": "Conserver ECB et compresser",
    "reponse_f2": "Ajouter un sel au ciphertext",
    "explication": "ECB révèle les motifs répétitifs."
  },
  {
    "id": 7,
    "question": "`Mini-TP cryptographie — dérivation depuis un mot de passe\n\nSystème : annuaire d'entreprise\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-107-60162\nDurée de protection requise : 6 ans\nVolume moyen : 1319 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-007`",
    "reponse_v": "Utiliser une KDF dédiée avec sel et coût adapté",
    "reponse_f1": "Utiliser directement le mot de passe comme clé",
    "reponse_f2": "Hasher une seule fois sans sel",
    "explication": "Une KDF ralentit les attaques hors ligne."
  },
  {
    "id": 8,
    "question": "`Mini-TP cryptographie — vérification d'intégrité sans secret\n\nSystème : plateforme e-commerce\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-108-68081\nDurée de protection requise : 3 ans\nVolume moyen : 1336 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-008`",
    "reponse_v": "Utiliser une fonction de hachage moderne",
    "reponse_f1": "Utiliser un chiffrement réversible",
    "reponse_f2": "Utiliser un encodage hexadécimal",
    "explication": "Le hachage détecte les modifications."
  },
  {
    "id": 9,
    "question": "`Mini-TP cryptographie — sel de mot de passe\n\nSystème : service IoT\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-109-76000\nDurée de protection requise : 4 ans\nVolume moyen : 1353 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-009`",
    "reponse_v": "Générer un sel aléatoire distinct par mot de passe",
    "reponse_f1": "Réutiliser un sel global fixe",
    "reponse_f2": "Supprimer le sel",
    "explication": "Un sel unique empêche les hachages identiques."
  },
  {
    "id": 10,
    "question": "`Mini-TP cryptographie — clé de session éphémère\n\nSystème : système de paiement\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-110-83919\nDurée de protection requise : 5 ans\nVolume moyen : 1370 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-010`",
    "reponse_v": "Détruire la clé après usage et ne pas la réutiliser",
    "reponse_f1": "Conserver la clé indéfiniment",
    "reponse_f2": "Partager la clé entre toutes les sessions",
    "explication": "Une clé éphémère limite l'impact d'une compromission."
  },
  {
    "id": 11,
    "question": "`Mini-TP cryptographie — chiffrement pour un destinataire\n\nSystème : outil de télémaintenance\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-111-91838\nDurée de protection requise : 6 ans\nVolume moyen : 1387 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-011`",
    "reponse_v": "Chiffrer avec la clé publique du destinataire",
    "reponse_f1": "Chiffrer avec sa clé privée",
    "reponse_f2": "Signer avec sa clé publique",
    "explication": "Seule la clé privée correspondante permet le déchiffrement."
  },
  {
    "id": 12,
    "question": "`Mini-TP cryptographie — signature numérique\n\nSystème : portail bancaire\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-112-99757\nDurée de protection requise : 3 ans\nVolume moyen : 1404 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-012`",
    "reponse_v": "Signer l'empreinte avec la clé privée",
    "reponse_f1": "Signer avec la clé publique",
    "reponse_f2": "Hasher sans clé et appeler cela une signature",
    "explication": "La clé privée produit la signature vérifiée par la clé publique."
  },
  {
    "id": 13,
    "question": "`Mini-TP cryptographie — forward secrecy\n\nSystème : API partenaire\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-113-07676\nDurée de protection requise : 4 ans\nVolume moyen : 1421 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-013`",
    "reponse_v": "Utiliser un échange éphémère comme ECDHE",
    "reponse_f1": "Utiliser une clé RSA statique pour toutes les sessions",
    "reponse_f2": "Réutiliser un secret permanent",
    "explication": "ECDHE protège les anciennes sessions si la clé long terme est compromise."
  },
  {
    "id": 14,
    "question": "`Mini-TP cryptographie — chiffrement hybride\n\nSystème : messagerie interne\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-114-15595\nDurée de protection requise : 5 ans\nVolume moyen : 1438 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-014`",
    "reponse_v": "Chiffrer les données avec une clé symétrique puis protéger cette clé asymétriquement",
    "reponse_f1": "Chiffrer tout le fichier avec RSA",
    "reponse_f2": "Hasher le fichier uniquement",
    "explication": "Le chiffrement hybride combine efficacité et distribution sécurisée."
  },
  {
    "id": 15,
    "question": "`Mini-TP cryptographie — Diffie-Hellman non authentifié\n\nSystème : application mobile\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-115-23514\nDurée de protection requise : 6 ans\nVolume moyen : 1455 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-015`",
    "reponse_v": "Ajouter une authentification pour éviter un MITM",
    "reponse_f1": "Considérer DH seul comme authentifié",
    "reponse_f2": "Publier le secret partagé",
    "explication": "DH sans authentification reste vulnérable à l'interposition."
  },
  {
    "id": 16,
    "question": "`Mini-TP cryptographie — RSA-OAEP\n\nSystème : serveur d'administration\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-116-31433\nDurée de protection requise : 3 ans\nVolume moyen : 1472 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-016`",
    "reponse_v": "Utiliser OAEP pour le chiffrement RSA",
    "reponse_f1": "Utiliser RSA brut",
    "reponse_f2": "Utiliser RSA-PSS pour chiffrer",
    "explication": "OAEP est un padding adapté au chiffrement RSA."
  },
  {
    "id": 17,
    "question": "`Mini-TP cryptographie — RSA-PSS\n\nSystème : plateforme de signature\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-117-39352\nDurée de protection requise : 4 ans\nVolume moyen : 1489 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-017`",
    "reponse_v": "Utiliser PSS pour la signature RSA",
    "reponse_f1": "Utiliser OAEP pour signer",
    "reponse_f2": "Utiliser AES-CBC",
    "explication": "PSS est conçu pour les signatures RSA."
  },
  {
    "id": 18,
    "question": "`Mini-TP cryptographie — courbes elliptiques\n\nSystème : VPN intersite\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-118-47271\nDurée de protection requise : 5 ans\nVolume moyen : 1506 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-018`",
    "reponse_v": "Utiliser ECC pour des clés plus courtes à sécurité comparable",
    "reponse_f1": "Utiliser DES",
    "reponse_f2": "Utiliser MD5",
    "explication": "ECC offre une bonne sécurité avec des clés compactes."
  },
  {
    "id": 19,
    "question": "`Mini-TP cryptographie — non-répudiation\n\nSystème : service de sauvegarde\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-119-55190\nDurée de protection requise : 6 ans\nVolume moyen : 1523 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-019`",
    "reponse_v": "Protéger la clé privée de signature et journaliser l'opération",
    "reponse_f1": "Partager la clé privée",
    "reponse_f2": "Chiffrer seulement les données",
    "explication": "La non-répudiation suppose une clé privée sous contrôle exclusif."
  },
  {
    "id": 20,
    "question": "`Mini-TP cryptographie — signature puis chiffrement\n\nSystème : registre de conteneurs\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-120-63109\nDurée de protection requise : 3 ans\nVolume moyen : 1540 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-020`",
    "reponse_v": "Signer puis chiffrer selon le protocole choisi",
    "reponse_f1": "Encoder en Base64",
    "reponse_f2": "Hasher sans clé",
    "explication": "Signature et chiffrement répondent à des objectifs distincts."
  },
  {
    "id": 21,
    "question": "`Mini-TP cryptographie — chaîne X.509\n\nSystème : portail citoyen\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-121-71028\nDurée de protection requise : 4 ans\nVolume moyen : 1557 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-021`",
    "reponse_v": "Valider chaque signature jusqu'à une racine de confiance",
    "reponse_f1": "Faire confiance uniquement à la date",
    "reponse_f2": "Ignorer les intermédiaires",
    "explication": "La confiance repose sur la chaîne complète."
  },
  {
    "id": 22,
    "question": "`Mini-TP cryptographie — SAN absent\n\nSystème : annuaire d'entreprise\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-122-78947\nDurée de protection requise : 5 ans\nVolume moyen : 1574 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-022`",
    "reponse_v": "Refuser le certificat si le nom demandé n'est pas couvert",
    "reponse_f1": "Accepter grâce au CN uniquement dans tous les cas",
    "reponse_f2": "Ignorer le nom d'hôte",
    "explication": "Le nom doit correspondre à une identité du certificat."
  },
  {
    "id": 23,
    "question": "`Mini-TP cryptographie — clé privée compromise\n\nSystème : plateforme e-commerce\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-123-86866\nDurée de protection requise : 6 ans\nVolume moyen : 1591 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-023`",
    "reponse_v": "Révoquer le certificat et générer une nouvelle paire de clés",
    "reponse_f1": "Attendre l'expiration",
    "reponse_f2": "Publier la clé privée",
    "explication": "Une compromission impose révocation et remplacement."
  },
  {
    "id": 24,
    "question": "`Mini-TP cryptographie — OCSP\n\nSystème : service IoT\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-124-94785\nDurée de protection requise : 3 ans\nVolume moyen : 1608 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-024`",
    "reponse_v": "Interroger un répondeur OCSP pour l'état de révocation",
    "reponse_f1": "Interroger NTP",
    "reponse_f2": "Interroger DHCP",
    "explication": "OCSP fournit l'état d'un certificat."
  },
  {
    "id": 25,
    "question": "`Mini-TP cryptographie — CRL\n\nSystème : système de paiement\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-125-02704\nDurée de protection requise : 4 ans\nVolume moyen : 1625 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-025`",
    "reponse_v": "Télécharger et vérifier la liste de révocation signée",
    "reponse_f1": "Utiliser une table ARP",
    "reponse_f2": "Utiliser DNS uniquement",
    "explication": "Une CRL recense les certificats révoqués."
  },
  {
    "id": 26,
    "question": "`Mini-TP cryptographie — CA intermédiaire\n\nSystème : outil de télémaintenance\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-126-10623\nDurée de protection requise : 5 ans\nVolume moyen : 1642 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-026`",
    "reponse_v": "Utiliser une intermédiaire pour protéger la racine hors ligne",
    "reponse_f1": "Faire signer tous les certificats directement par une racine en ligne",
    "reponse_f2": "Supprimer la chaîne",
    "explication": "L'intermédiaire réduit l'exposition de la racine."
  },
  {
    "id": 27,
    "question": "`Mini-TP cryptographie — Basic Constraints\n\nSystème : portail bancaire\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-127-18542\nDurée de protection requise : 6 ans\nVolume moyen : 1659 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-027`",
    "reponse_v": "Mettre CA=FALSE pour un certificat d'entité finale",
    "reponse_f1": "Mettre CA=TRUE",
    "reponse_f2": "Supprimer l'extension systématiquement",
    "explication": "Basic Constraints distingue CA et entité finale."
  },
  {
    "id": 28,
    "question": "`Mini-TP cryptographie — Key Usage\n\nSystème : API partenaire\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-128-26461\nDurée de protection requise : 3 ans\nVolume moyen : 1676 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-028`",
    "reponse_v": "Limiter les usages à ceux réellement nécessaires",
    "reponse_f1": "Autoriser tous les usages",
    "reponse_f2": "Ignorer l'extension",
    "explication": "Key Usage encadre les opérations permises."
  },
  {
    "id": 29,
    "question": "`Mini-TP cryptographie — certificate pinning\n\nSystème : messagerie interne\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-129-34380\nDurée de protection requise : 4 ans\nVolume moyen : 1693 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-029`",
    "reponse_v": "Épingler une clé ou un certificat avec stratégie de rotation",
    "reponse_f1": "Épingler sans plan de renouvellement",
    "reponse_f2": "Accepter toute CA",
    "explication": "Le pinning réduit la surface de confiance mais exige une rotation maîtrisée."
  },
  {
    "id": 30,
    "question": "`Mini-TP cryptographie — certificat auto-signé\n\nSystème : application mobile\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-130-42299\nDurée de protection requise : 5 ans\nVolume moyen : 1710 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-030`",
    "reponse_v": "Ajouter explicitement un ancrage de confiance si l'usage est légitime",
    "reponse_f1": "Le considérer automatiquement public",
    "reponse_f2": "Ignorer toute vérification",
    "explication": "Un certificat auto-signé n'est pas fiable par défaut."
  },
  {
    "id": 31,
    "question": "`Mini-TP cryptographie — HSM\n\nSystème : serveur d'administration\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-131-50218\nDurée de protection requise : 6 ans\nVolume moyen : 1727 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-031`",
    "reponse_v": "Conserver la clé non exportable dans un HSM",
    "reponse_f1": "Stocker la clé en clair dans un fichier",
    "reponse_f2": "Placer la clé dans le dépôt Git",
    "explication": "Un HSM protège et utilise les clés sensibles."
  },
  {
    "id": 32,
    "question": "`Mini-TP cryptographie — rotation de clé\n\nSystème : plateforme de signature\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-132-58137\nDurée de protection requise : 3 ans\nVolume moyen : 1744 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-032`",
    "reponse_v": "Planifier la rotation et conserver les anciennes clés nécessaires",
    "reponse_f1": "Supprimer toutes les anciennes clés immédiatement",
    "reponse_f2": "Ne jamais faire tourner les clés",
    "explication": "La rotation doit préserver l'accès aux données historiques."
  },
  {
    "id": 33,
    "question": "`Mini-TP cryptographie — sauvegarde de clé maître\n\nSystème : VPN intersite\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-133-66056\nDurée de protection requise : 4 ans\nVolume moyen : 1761 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-033`",
    "reponse_v": "Conserver une copie chiffrée, séparée et testée",
    "reponse_f1": "Copier la clé en clair avec les données",
    "reponse_f2": "Ne jamais tester la restauration",
    "explication": "La sauvegarde de clé doit être protégée et restaurable."
  },
  {
    "id": 34,
    "question": "`Mini-TP cryptographie — envelope encryption\n\nSystème : service de sauvegarde\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-134-73975\nDurée de protection requise : 5 ans\nVolume moyen : 1778 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-034`",
    "reponse_v": "Utiliser une clé de données protégée par une clé maître",
    "reponse_f1": "Utiliser une seule clé codée en dur",
    "reponse_f2": "Remplacer le chiffrement par un checksum",
    "explication": "Le chiffrement d'enveloppe sépare les rôles des clés."
  },
  {
    "id": 35,
    "question": "`Mini-TP cryptographie — génération de clé\n\nSystème : registre de conteneurs\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-135-81894\nDurée de protection requise : 6 ans\nVolume moyen : 1795 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-035`",
    "reponse_v": "Utiliser un CSPRNG",
    "reponse_f1": "Utiliser l'heure système seule",
    "reponse_f2": "Utiliser un compteur",
    "explication": "Les clés nécessitent une forte entropie."
  },
  {
    "id": 36,
    "question": "`Mini-TP cryptographie — destruction de clé\n\nSystème : portail citoyen\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-136-89813\nDurée de protection requise : 3 ans\nVolume moyen : 1812 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-036`",
    "reponse_v": "Effectuer une destruction cryptographique contrôlée et auditée",
    "reponse_f1": "Renommer la clé",
    "reponse_f2": "Masquer l'interface",
    "explication": "La destruction doit empêcher toute récupération."
  },
  {
    "id": 37,
    "question": "`Mini-TP cryptographie — KMS\n\nSystème : annuaire d'entreprise\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-137-97732\nDurée de protection requise : 4 ans\nVolume moyen : 1829 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-037`",
    "reponse_v": "Centraliser politiques, rotation et audit dans un KMS",
    "reponse_f1": "Utiliser un serveur DNS",
    "reponse_f2": "Utiliser un fichier partagé",
    "explication": "Un KMS gère le cycle de vie des clés."
  },
  {
    "id": 38,
    "question": "`Mini-TP cryptographie — séparation des rôles\n\nSystème : plateforme e-commerce\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-138-05651\nDurée de protection requise : 5 ans\nVolume moyen : 1846 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-038`",
    "reponse_v": "Séparer création, activation et audit des clés",
    "reponse_f1": "Donner tous les droits à une seule personne",
    "reponse_f2": "Partager un compte administrateur",
    "explication": "La séparation des tâches réduit les abus."
  },
  {
    "id": 39,
    "question": "`Mini-TP cryptographie — compromission de clé\n\nSystème : service IoT\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-139-13570\nDurée de protection requise : 6 ans\nVolume moyen : 1863 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-039`",
    "reponse_v": "Désactiver la clé, la remplacer et analyser l'exposition",
    "reponse_f1": "Continuer jusqu'à expiration",
    "reponse_f2": "Publier la clé",
    "explication": "Une compromission exige confinement et rotation."
  },
  {
    "id": 40,
    "question": "`Mini-TP cryptographie — escrow de clés\n\nSystème : système de paiement\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-140-21489\nDurée de protection requise : 3 ans\nVolume moyen : 1880 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-040`",
    "reponse_v": "Encadrer strictement l'accès au mécanisme de récupération",
    "reponse_f1": "Donner l'accès à tous les administrateurs",
    "reponse_f2": "Supprimer toute journalisation",
    "explication": "L'escrow concentre la confiance et doit être fortement contrôlé."
  },
  {
    "id": 41,
    "question": "`Mini-TP cryptographie — TLS 1.3\n\nSystème : outil de télémaintenance\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-141-29408\nDurée de protection requise : 4 ans\nVolume moyen : 1897 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-041`",
    "reponse_v": "Privilégier TLS 1.3 si compatible",
    "reponse_f1": "Utiliser SSL 3.0",
    "reponse_f2": "Forcer TLS 1.0",
    "explication": "TLS 1.3 retire de nombreux mécanismes obsolètes."
  },
  {
    "id": 42,
    "question": "`Mini-TP cryptographie — mTLS\n\nSystème : portail bancaire\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-142-37327\nDurée de protection requise : 5 ans\nVolume moyen : 1914 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-042`",
    "reponse_v": "Présenter et vérifier des certificats côté client et serveur",
    "reponse_f1": "Vérifier uniquement le serveur",
    "reponse_f2": "Désactiver la validation",
    "explication": "mTLS authentifie les deux extrémités."
  },
  {
    "id": 43,
    "question": "`Mini-TP cryptographie — SSH par clé\n\nSystème : API partenaire\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-143-45246\nDurée de protection requise : 6 ans\nVolume moyen : 1931 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-043`",
    "reponse_v": "Installer la clé publique sur le serveur et protéger la clé privée",
    "reponse_f1": "Installer la clé privée sur le serveur",
    "reponse_f2": "Partager la clé privée",
    "explication": "SSH vérifie la preuve produite avec la clé privée."
  },
  {
    "id": 44,
    "question": "`Mini-TP cryptographie — IPsec tunnel\n\nSystème : messagerie interne\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-144-53165\nDurée de protection requise : 3 ans\nVolume moyen : 1948 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-044`",
    "reponse_v": "Utiliser le mode tunnel entre passerelles",
    "reponse_f1": "Utiliser uniquement le mode transport pour deux réseaux",
    "reponse_f2": "Utiliser ARP",
    "explication": "Le mode tunnel encapsule le paquet IP complet."
  },
  {
    "id": 45,
    "question": "`Mini-TP cryptographie — IPsec ESP\n\nSystème : application mobile\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-145-61084\nDurée de protection requise : 4 ans\nVolume moyen : 1965 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-045`",
    "reponse_v": "Utiliser ESP pour confidentialité et intégrité",
    "reponse_f1": "Utiliser ICMP",
    "reponse_f2": "Utiliser DHCP",
    "explication": "ESP protège le trafic IP."
  },
  {
    "id": 46,
    "question": "`Mini-TP cryptographie — S/MIME\n\nSystème : serveur d'administration\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-146-69003\nDurée de protection requise : 5 ans\nVolume moyen : 1982 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-046`",
    "reponse_v": "Utiliser S/MIME avec des certificats X.509",
    "reponse_f1": "Utiliser SNMP",
    "reponse_f2": "Utiliser NTP",
    "explication": "S/MIME sécurise les courriels avec X.509."
  },
  {
    "id": 47,
    "question": "`Mini-TP cryptographie — OpenPGP\n\nSystème : plateforme de signature\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-147-76922\nDurée de protection requise : 6 ans\nVolume moyen : 1999 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-047`",
    "reponse_v": "Utiliser le modèle de confiance OpenPGP adapté",
    "reponse_f1": "Utiliser uniquement une CA racine obligatoire",
    "reponse_f2": "Utiliser DHCP",
    "explication": "OpenPGP peut s'appuyer sur une toile de confiance."
  },
  {
    "id": 48,
    "question": "`Mini-TP cryptographie — TLS downgrade\n\nSystème : VPN intersite\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-148-84841\nDurée de protection requise : 3 ans\nVolume moyen : 2016 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-048`",
    "reponse_v": "Désactiver les versions et suites faibles",
    "reponse_f1": "Autoriser toutes les versions",
    "reponse_f2": "Désactiver les certificats",
    "explication": "La restriction de négociation évite les downgrades."
  },
  {
    "id": 49,
    "question": "`Mini-TP cryptographie — TLS session resumption\n\nSystème : service de sauvegarde\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-149-92760\nDurée de protection requise : 4 ans\nVolume moyen : 2033 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-049`",
    "reponse_v": "Utiliser tickets ou reprise de session",
    "reponse_f1": "Émettre un certificat à chaque requête",
    "reponse_f2": "Désactiver le chiffrement",
    "explication": "La reprise réduit le coût des connexions répétées."
  },
  {
    "id": 50,
    "question": "`Mini-TP cryptographie — validation de certificat TLS\n\nSystème : registre de conteneurs\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-150-00679\nDurée de protection requise : 5 ans\nVolume moyen : 2050 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-050`",
    "reponse_v": "Vérifier chaîne, dates, usages, nom et révocation selon la politique",
    "reponse_f1": "Vérifier uniquement la date",
    "reponse_f2": "Accepter tout certificat chiffré",
    "explication": "Une validation TLS complète couvre plusieurs propriétés."
  },
  {
    "id": 51,
    "question": "`Mini-TP cryptographie — FIPS 140-3\n\nSystème : portail citoyen\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-151-08598\nDurée de protection requise : 6 ans\nVolume moyen : 2067 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-051`",
    "reponse_v": "Utiliser un module validé FIPS 140-3 si l'exigence s'applique",
    "reponse_f1": "Utiliser HTTP/1.1",
    "reponse_f2": "Utiliser IEEE 802.1Q",
    "explication": "FIPS 140-3 concerne les modules cryptographiques."
  },
  {
    "id": 52,
    "question": "`Mini-TP cryptographie — ISO/IEC 27001\n\nSystème : annuaire d'entreprise\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-152-16517\nDurée de protection requise : 3 ans\nVolume moyen : 2084 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-052`",
    "reponse_v": "Structurer un SMSI selon ISO/IEC 27001",
    "reponse_f1": "Utiliser RFC 1918",
    "reponse_f2": "Utiliser SMTP",
    "explication": "ISO/IEC 27001 définit les exigences d'un SMSI."
  },
  {
    "id": 53,
    "question": "`Mini-TP cryptographie — PCI DSS\n\nSystème : plateforme e-commerce\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-153-24436\nDurée de protection requise : 4 ans\nVolume moyen : 2101 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-053`",
    "reponse_v": "Appliquer PCI DSS pour les données de carte",
    "reponse_f1": "Appliquer uniquement DNSSEC",
    "reponse_f2": "Appliquer BGP",
    "explication": "PCI DSS encadre les environnements de paiement."
  },
  {
    "id": 54,
    "question": "`Mini-TP cryptographie — crypto-agilité\n\nSystème : service IoT\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-154-32355\nDurée de protection requise : 5 ans\nVolume moyen : 2118 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-054`",
    "reponse_v": "Prévoir le remplacement des algorithmes et formats",
    "reponse_f1": "Figer tous les choix définitivement",
    "reponse_f2": "Supprimer les identifiants d'algorithme",
    "explication": "La crypto-agilité facilite les migrations."
  },
  {
    "id": 55,
    "question": "`Mini-TP cryptographie — MD5 obsolète\n\nSystème : système de paiement\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-155-40274\nDurée de protection requise : 6 ans\nVolume moyen : 2135 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-055`",
    "reponse_v": "Remplacer MD5 pour les usages de sécurité",
    "reponse_f1": "Ajouter Base64 à MD5",
    "reponse_f2": "Conserver MD5 car il est rapide",
    "explication": "MD5 présente des collisions pratiques."
  },
  {
    "id": 56,
    "question": "`Mini-TP cryptographie — 3DES obsolète\n\nSystème : outil de télémaintenance\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-156-48193\nDurée de protection requise : 3 ans\nVolume moyen : 2152 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-056`",
    "reponse_v": "Remplacer 3DES dans les nouveaux systèmes",
    "reponse_f1": "Préférer 3DES à AES",
    "reponse_f2": "Utiliser DES simple",
    "explication": "3DES est obsolète et limité par sa taille de bloc."
  },
  {
    "id": 57,
    "question": "`Mini-TP cryptographie — politique cryptographique\n\nSystème : portail bancaire\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-157-56112\nDurée de protection requise : 4 ans\nVolume moyen : 2169 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-057`",
    "reponse_v": "Formaliser algorithmes, tailles, rotation, stockage et révocation",
    "reponse_f1": "Rédiger uniquement un plan IP",
    "reponse_f2": "Ne rien documenter",
    "explication": "Une politique rend les choix cohérents et auditables."
  },
  {
    "id": 58,
    "question": "`Mini-TP cryptographie — inventaire cryptographique\n\nSystème : API partenaire\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-158-64031\nDurée de protection requise : 5 ans\nVolume moyen : 2186 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-058`",
    "reponse_v": "Recenser certificats, clés, algorithmes et dépendances",
    "reponse_f1": "Inventorier seulement les serveurs",
    "reponse_f2": "Ignorer les certificats internes",
    "explication": "L'inventaire est indispensable à la maîtrise du risque."
  },
  {
    "id": 59,
    "question": "`Mini-TP cryptographie — durée de protection\n\nSystème : messagerie interne\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-159-71950\nDurée de protection requise : 6 ans\nVolume moyen : 2203 opérations cryptographiques/jour\nIndisponibilité maximale : 4 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-059`",
    "reponse_v": "Adapter le niveau cryptographique à la durée de sensibilité",
    "reponse_f1": "Choisir toujours la plus petite clé",
    "reponse_f2": "Choisir selon le nom du service",
    "explication": "La durée de protection influe sur les choix."
  },
  {
    "id": 60,
    "question": "`Mini-TP cryptographie — audit cryptographique\n\nSystème : application mobile\nContexte : environnement de production\nIdentifiant de clé ou certificat : K-160-79869\nDurée de protection requise : 3 ans\nVolume moyen : 2220 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-060`",
    "reponse_v": "Prioriser les écarts et suivre un plan de remédiation",
    "reponse_f1": "Masquer les alertes",
    "reponse_f2": "Renouveler uniquement les certificats visibles",
    "explication": "Un audit doit conduire à des corrections traçables."
  },
  {
    "id": 61,
    "question": "`Mini-TP cryptographie — AES-GCM avec nonce unique\n\nSystème : service de sauvegarde\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-201-17377\nDurée de protection requise : 6 ans\nVolume moyen : 4817 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-061`",
    "reponse_v": "Utiliser AES-GCM en garantissant l'unicité du nonce",
    "reponse_f1": "Utiliser AES-ECB",
    "reponse_f2": "Réutiliser le même nonce",
    "explication": "GCM fournit confidentialité et intégrité si le nonce n'est pas réutilisé."
  },
  {
    "id": 62,
    "question": "`Mini-TP cryptographie — réutilisation de nonce GCM\n\nSystème : registre de conteneurs\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-202-25296\nDurée de protection requise : 7 ans\nVolume moyen : 4834 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-062`",
    "reponse_v": "Changer immédiatement la clé et corriger la génération des nonces",
    "reponse_f1": "Continuer à utiliser la même paire clé/nonce",
    "reponse_f2": "Ajouter Base64",
    "explication": "La réutilisation d'un nonce en GCM compromet la sécurité."
  },
  {
    "id": 63,
    "question": "`Mini-TP cryptographie — stockage de mots de passe\n\nSystème : portail citoyen\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-203-33215\nDurée de protection requise : 8 ans\nVolume moyen : 4851 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-063`",
    "reponse_v": "Utiliser Argon2id avec sel unique et paramètres robustes",
    "reponse_f1": "Utiliser SHA-256 seul sans sel",
    "reponse_f2": "Chiffrer les mots de passe avec une clé commune",
    "explication": "Les mots de passe doivent être dérivés avec une KDF lente."
  },
  {
    "id": 64,
    "question": "`Mini-TP cryptographie — intégrité avec secret partagé\n\nSystème : annuaire d'entreprise\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-204-41134\nDurée de protection requise : 5 ans\nVolume moyen : 4868 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-064`",
    "reponse_v": "Utiliser HMAC-SHA-256 ou équivalent",
    "reponse_f1": "Utiliser un checksum CRC",
    "reponse_f2": "Utiliser seulement Base64",
    "explication": "HMAC fournit authenticité et intégrité avec un secret."
  },
  {
    "id": 65,
    "question": "`Mini-TP cryptographie — chiffrement de gros volumes\n\nSystème : plateforme e-commerce\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-205-49053\nDurée de protection requise : 6 ans\nVolume moyen : 4885 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-065`",
    "reponse_v": "Utiliser un chiffrement symétrique moderne",
    "reponse_f1": "Utiliser RSA directement sur tout le flux",
    "reponse_f2": "Utiliser un simple hachage",
    "explication": "Le chiffrement symétrique est adapté aux gros volumes."
  },
  {
    "id": 66,
    "question": "`Mini-TP cryptographie — motifs visibles avec ECB\n\nSystème : service IoT\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-206-56972\nDurée de protection requise : 7 ans\nVolume moyen : 4902 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-066`",
    "reponse_v": "Remplacer ECB par un mode authentifié comme GCM",
    "reponse_f1": "Conserver ECB et compresser",
    "reponse_f2": "Ajouter un sel au ciphertext",
    "explication": "ECB révèle les motifs répétitifs."
  },
  {
    "id": 67,
    "question": "`Mini-TP cryptographie — dérivation depuis un mot de passe\n\nSystème : système de paiement\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-207-64891\nDurée de protection requise : 8 ans\nVolume moyen : 4919 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-067`",
    "reponse_v": "Utiliser une KDF dédiée avec sel et coût adapté",
    "reponse_f1": "Utiliser directement le mot de passe comme clé",
    "reponse_f2": "Hasher une seule fois sans sel",
    "explication": "Une KDF ralentit les attaques hors ligne."
  },
  {
    "id": 68,
    "question": "`Mini-TP cryptographie — vérification d'intégrité sans secret\n\nSystème : outil de télémaintenance\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-208-72810\nDurée de protection requise : 5 ans\nVolume moyen : 4936 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-068`",
    "reponse_v": "Utiliser une fonction de hachage moderne",
    "reponse_f1": "Utiliser un chiffrement réversible",
    "reponse_f2": "Utiliser un encodage hexadécimal",
    "explication": "Le hachage détecte les modifications."
  },
  {
    "id": 69,
    "question": "`Mini-TP cryptographie — sel de mot de passe\n\nSystème : portail bancaire\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-209-80729\nDurée de protection requise : 6 ans\nVolume moyen : 4953 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-069`",
    "reponse_v": "Générer un sel aléatoire distinct par mot de passe",
    "reponse_f1": "Réutiliser un sel global fixe",
    "reponse_f2": "Supprimer le sel",
    "explication": "Un sel unique empêche les hachages identiques."
  },
  {
    "id": 70,
    "question": "`Mini-TP cryptographie — clé de session éphémère\n\nSystème : API partenaire\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-210-88648\nDurée de protection requise : 7 ans\nVolume moyen : 4970 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-070`",
    "reponse_v": "Détruire la clé après usage et ne pas la réutiliser",
    "reponse_f1": "Conserver la clé indéfiniment",
    "reponse_f2": "Partager la clé entre toutes les sessions",
    "explication": "Une clé éphémère limite l'impact d'une compromission."
  },
  {
    "id": 71,
    "question": "`Mini-TP cryptographie — chiffrement pour un destinataire\n\nSystème : messagerie interne\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-211-96567\nDurée de protection requise : 8 ans\nVolume moyen : 4987 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-071`",
    "reponse_v": "Chiffrer avec la clé publique du destinataire",
    "reponse_f1": "Chiffrer avec sa clé privée",
    "reponse_f2": "Signer avec sa clé publique",
    "explication": "Seule la clé privée correspondante permet le déchiffrement."
  },
  {
    "id": 72,
    "question": "`Mini-TP cryptographie — signature numérique\n\nSystème : application mobile\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-212-04486\nDurée de protection requise : 5 ans\nVolume moyen : 5004 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-072`",
    "reponse_v": "Signer l'empreinte avec la clé privée",
    "reponse_f1": "Signer avec la clé publique",
    "reponse_f2": "Hasher sans clé et appeler cela une signature",
    "explication": "La clé privée produit la signature vérifiée par la clé publique."
  },
  {
    "id": 73,
    "question": "`Mini-TP cryptographie — forward secrecy\n\nSystème : serveur d'administration\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-213-12405\nDurée de protection requise : 6 ans\nVolume moyen : 5021 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-073`",
    "reponse_v": "Utiliser un échange éphémère comme ECDHE",
    "reponse_f1": "Utiliser une clé RSA statique pour toutes les sessions",
    "reponse_f2": "Réutiliser un secret permanent",
    "explication": "ECDHE protège les anciennes sessions si la clé long terme est compromise."
  },
  {
    "id": 74,
    "question": "`Mini-TP cryptographie — chiffrement hybride\n\nSystème : plateforme de signature\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-214-20324\nDurée de protection requise : 7 ans\nVolume moyen : 5038 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-074`",
    "reponse_v": "Chiffrer les données avec une clé symétrique puis protéger cette clé asymétriquement",
    "reponse_f1": "Chiffrer tout le fichier avec RSA",
    "reponse_f2": "Hasher le fichier uniquement",
    "explication": "Le chiffrement hybride combine efficacité et distribution sécurisée."
  },
  {
    "id": 75,
    "question": "`Mini-TP cryptographie — Diffie-Hellman non authentifié\n\nSystème : VPN intersite\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-215-28243\nDurée de protection requise : 8 ans\nVolume moyen : 5055 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-075`",
    "reponse_v": "Ajouter une authentification pour éviter un MITM",
    "reponse_f1": "Considérer DH seul comme authentifié",
    "reponse_f2": "Publier le secret partagé",
    "explication": "DH sans authentification reste vulnérable à l'interposition."
  },
  {
    "id": 76,
    "question": "`Mini-TP cryptographie — RSA-OAEP\n\nSystème : service de sauvegarde\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-216-36162\nDurée de protection requise : 5 ans\nVolume moyen : 5072 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-076`",
    "reponse_v": "Utiliser OAEP pour le chiffrement RSA",
    "reponse_f1": "Utiliser RSA brut",
    "reponse_f2": "Utiliser RSA-PSS pour chiffrer",
    "explication": "OAEP est un padding adapté au chiffrement RSA."
  },
  {
    "id": 77,
    "question": "`Mini-TP cryptographie — RSA-PSS\n\nSystème : registre de conteneurs\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-217-44081\nDurée de protection requise : 6 ans\nVolume moyen : 5089 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-077`",
    "reponse_v": "Utiliser PSS pour la signature RSA",
    "reponse_f1": "Utiliser OAEP pour signer",
    "reponse_f2": "Utiliser AES-CBC",
    "explication": "PSS est conçu pour les signatures RSA."
  },
  {
    "id": 78,
    "question": "`Mini-TP cryptographie — courbes elliptiques\n\nSystème : portail citoyen\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-218-52000\nDurée de protection requise : 7 ans\nVolume moyen : 5106 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-078`",
    "reponse_v": "Utiliser ECC pour des clés plus courtes à sécurité comparable",
    "reponse_f1": "Utiliser DES",
    "reponse_f2": "Utiliser MD5",
    "explication": "ECC offre une bonne sécurité avec des clés compactes."
  },
  {
    "id": 79,
    "question": "`Mini-TP cryptographie — non-répudiation\n\nSystème : annuaire d'entreprise\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-219-59919\nDurée de protection requise : 8 ans\nVolume moyen : 5123 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-079`",
    "reponse_v": "Protéger la clé privée de signature et journaliser l'opération",
    "reponse_f1": "Partager la clé privée",
    "reponse_f2": "Chiffrer seulement les données",
    "explication": "La non-répudiation suppose une clé privée sous contrôle exclusif."
  },
  {
    "id": 80,
    "question": "`Mini-TP cryptographie — signature puis chiffrement\n\nSystème : plateforme e-commerce\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-220-67838\nDurée de protection requise : 5 ans\nVolume moyen : 5140 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-080`",
    "reponse_v": "Signer puis chiffrer selon le protocole choisi",
    "reponse_f1": "Encoder en Base64",
    "reponse_f2": "Hasher sans clé",
    "explication": "Signature et chiffrement répondent à des objectifs distincts."
  },
  {
    "id": 81,
    "question": "`Mini-TP cryptographie — chaîne X.509\n\nSystème : service IoT\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-221-75757\nDurée de protection requise : 6 ans\nVolume moyen : 5157 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-081`",
    "reponse_v": "Valider chaque signature jusqu'à une racine de confiance",
    "reponse_f1": "Faire confiance uniquement à la date",
    "reponse_f2": "Ignorer les intermédiaires",
    "explication": "La confiance repose sur la chaîne complète."
  },
  {
    "id": 82,
    "question": "`Mini-TP cryptographie — SAN absent\n\nSystème : système de paiement\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-222-83676\nDurée de protection requise : 7 ans\nVolume moyen : 5174 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-082`",
    "reponse_v": "Refuser le certificat si le nom demandé n'est pas couvert",
    "reponse_f1": "Accepter grâce au CN uniquement dans tous les cas",
    "reponse_f2": "Ignorer le nom d'hôte",
    "explication": "Le nom doit correspondre à une identité du certificat."
  },
  {
    "id": 83,
    "question": "`Mini-TP cryptographie — clé privée compromise\n\nSystème : outil de télémaintenance\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-223-91595\nDurée de protection requise : 8 ans\nVolume moyen : 5191 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-083`",
    "reponse_v": "Révoquer le certificat et générer une nouvelle paire de clés",
    "reponse_f1": "Attendre l'expiration",
    "reponse_f2": "Publier la clé privée",
    "explication": "Une compromission impose révocation et remplacement."
  },
  {
    "id": 84,
    "question": "`Mini-TP cryptographie — OCSP\n\nSystème : portail bancaire\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-224-99514\nDurée de protection requise : 5 ans\nVolume moyen : 5208 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-084`",
    "reponse_v": "Interroger un répondeur OCSP pour l'état de révocation",
    "reponse_f1": "Interroger NTP",
    "reponse_f2": "Interroger DHCP",
    "explication": "OCSP fournit l'état d'un certificat."
  },
  {
    "id": 85,
    "question": "`Mini-TP cryptographie — CRL\n\nSystème : API partenaire\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-225-07433\nDurée de protection requise : 6 ans\nVolume moyen : 5225 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-085`",
    "reponse_v": "Télécharger et vérifier la liste de révocation signée",
    "reponse_f1": "Utiliser une table ARP",
    "reponse_f2": "Utiliser DNS uniquement",
    "explication": "Une CRL recense les certificats révoqués."
  },
  {
    "id": 86,
    "question": "`Mini-TP cryptographie — CA intermédiaire\n\nSystème : messagerie interne\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-226-15352\nDurée de protection requise : 7 ans\nVolume moyen : 5242 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-086`",
    "reponse_v": "Utiliser une intermédiaire pour protéger la racine hors ligne",
    "reponse_f1": "Faire signer tous les certificats directement par une racine en ligne",
    "reponse_f2": "Supprimer la chaîne",
    "explication": "L'intermédiaire réduit l'exposition de la racine."
  },
  {
    "id": 87,
    "question": "`Mini-TP cryptographie — Basic Constraints\n\nSystème : application mobile\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-227-23271\nDurée de protection requise : 8 ans\nVolume moyen : 5259 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-087`",
    "reponse_v": "Mettre CA=FALSE pour un certificat d'entité finale",
    "reponse_f1": "Mettre CA=TRUE",
    "reponse_f2": "Supprimer l'extension systématiquement",
    "explication": "Basic Constraints distingue CA et entité finale."
  },
  {
    "id": 88,
    "question": "`Mini-TP cryptographie — Key Usage\n\nSystème : serveur d'administration\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-228-31190\nDurée de protection requise : 5 ans\nVolume moyen : 5276 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-088`",
    "reponse_v": "Limiter les usages à ceux réellement nécessaires",
    "reponse_f1": "Autoriser tous les usages",
    "reponse_f2": "Ignorer l'extension",
    "explication": "Key Usage encadre les opérations permises."
  },
  {
    "id": 89,
    "question": "`Mini-TP cryptographie — certificate pinning\n\nSystème : plateforme de signature\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-229-39109\nDurée de protection requise : 6 ans\nVolume moyen : 5293 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-089`",
    "reponse_v": "Épingler une clé ou un certificat avec stratégie de rotation",
    "reponse_f1": "Épingler sans plan de renouvellement",
    "reponse_f2": "Accepter toute CA",
    "explication": "Le pinning réduit la surface de confiance mais exige une rotation maîtrisée."
  },
  {
    "id": 90,
    "question": "`Mini-TP cryptographie — certificat auto-signé\n\nSystème : VPN intersite\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-230-47028\nDurée de protection requise : 7 ans\nVolume moyen : 5310 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-090`",
    "reponse_v": "Ajouter explicitement un ancrage de confiance si l'usage est légitime",
    "reponse_f1": "Le considérer automatiquement public",
    "reponse_f2": "Ignorer toute vérification",
    "explication": "Un certificat auto-signé n'est pas fiable par défaut."
  },
  {
    "id": 91,
    "question": "`Mini-TP cryptographie — HSM\n\nSystème : service de sauvegarde\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-231-54947\nDurée de protection requise : 8 ans\nVolume moyen : 5327 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-091`",
    "reponse_v": "Conserver la clé non exportable dans un HSM",
    "reponse_f1": "Stocker la clé en clair dans un fichier",
    "reponse_f2": "Placer la clé dans le dépôt Git",
    "explication": "Un HSM protège et utilise les clés sensibles."
  },
  {
    "id": 92,
    "question": "`Mini-TP cryptographie — rotation de clé\n\nSystème : registre de conteneurs\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-232-62866\nDurée de protection requise : 5 ans\nVolume moyen : 5344 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-092`",
    "reponse_v": "Planifier la rotation et conserver les anciennes clés nécessaires",
    "reponse_f1": "Supprimer toutes les anciennes clés immédiatement",
    "reponse_f2": "Ne jamais faire tourner les clés",
    "explication": "La rotation doit préserver l'accès aux données historiques."
  },
  {
    "id": 93,
    "question": "`Mini-TP cryptographie — sauvegarde de clé maître\n\nSystème : portail citoyen\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-233-70785\nDurée de protection requise : 6 ans\nVolume moyen : 5361 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-093`",
    "reponse_v": "Conserver une copie chiffrée, séparée et testée",
    "reponse_f1": "Copier la clé en clair avec les données",
    "reponse_f2": "Ne jamais tester la restauration",
    "explication": "La sauvegarde de clé doit être protégée et restaurable."
  },
  {
    "id": 94,
    "question": "`Mini-TP cryptographie — envelope encryption\n\nSystème : annuaire d'entreprise\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-234-78704\nDurée de protection requise : 7 ans\nVolume moyen : 5378 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-094`",
    "reponse_v": "Utiliser une clé de données protégée par une clé maître",
    "reponse_f1": "Utiliser une seule clé codée en dur",
    "reponse_f2": "Remplacer le chiffrement par un checksum",
    "explication": "Le chiffrement d'enveloppe sépare les rôles des clés."
  },
  {
    "id": 95,
    "question": "`Mini-TP cryptographie — génération de clé\n\nSystème : plateforme e-commerce\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-235-86623\nDurée de protection requise : 8 ans\nVolume moyen : 5395 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-095`",
    "reponse_v": "Utiliser un CSPRNG",
    "reponse_f1": "Utiliser l'heure système seule",
    "reponse_f2": "Utiliser un compteur",
    "explication": "Les clés nécessitent une forte entropie."
  },
  {
    "id": 96,
    "question": "`Mini-TP cryptographie — destruction de clé\n\nSystème : service IoT\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-236-94542\nDurée de protection requise : 5 ans\nVolume moyen : 5412 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-096`",
    "reponse_v": "Effectuer une destruction cryptographique contrôlée et auditée",
    "reponse_f1": "Renommer la clé",
    "reponse_f2": "Masquer l'interface",
    "explication": "La destruction doit empêcher toute récupération."
  },
  {
    "id": 97,
    "question": "`Mini-TP cryptographie — KMS\n\nSystème : système de paiement\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-237-02461\nDurée de protection requise : 6 ans\nVolume moyen : 5429 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-097`",
    "reponse_v": "Centraliser politiques, rotation et audit dans un KMS",
    "reponse_f1": "Utiliser un serveur DNS",
    "reponse_f2": "Utiliser un fichier partagé",
    "explication": "Un KMS gère le cycle de vie des clés."
  },
  {
    "id": 98,
    "question": "`Mini-TP cryptographie — séparation des rôles\n\nSystème : outil de télémaintenance\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-238-10380\nDurée de protection requise : 7 ans\nVolume moyen : 5446 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-098`",
    "reponse_v": "Séparer création, activation et audit des clés",
    "reponse_f1": "Donner tous les droits à une seule personne",
    "reponse_f2": "Partager un compte administrateur",
    "explication": "La séparation des tâches réduit les abus."
  },
  {
    "id": 99,
    "question": "`Mini-TP cryptographie — compromission de clé\n\nSystème : portail bancaire\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-239-18299\nDurée de protection requise : 8 ans\nVolume moyen : 5463 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-099`",
    "reponse_v": "Désactiver la clé, la remplacer et analyser l'exposition",
    "reponse_f1": "Continuer jusqu'à expiration",
    "reponse_f2": "Publier la clé",
    "explication": "Une compromission exige confinement et rotation."
  },
  {
    "id": 100,
    "question": "`Mini-TP cryptographie — escrow de clés\n\nSystème : API partenaire\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-240-26218\nDurée de protection requise : 5 ans\nVolume moyen : 5480 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-100`",
    "reponse_v": "Encadrer strictement l'accès au mécanisme de récupération",
    "reponse_f1": "Donner l'accès à tous les administrateurs",
    "reponse_f2": "Supprimer toute journalisation",
    "explication": "L'escrow concentre la confiance et doit être fortement contrôlé."
  },
  {
    "id": 101,
    "question": "`Mini-TP cryptographie — TLS 1.3\n\nSystème : messagerie interne\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-241-34137\nDurée de protection requise : 6 ans\nVolume moyen : 5497 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-101`",
    "reponse_v": "Privilégier TLS 1.3 si compatible",
    "reponse_f1": "Utiliser SSL 3.0",
    "reponse_f2": "Forcer TLS 1.0",
    "explication": "TLS 1.3 retire de nombreux mécanismes obsolètes."
  },
  {
    "id": 102,
    "question": "`Mini-TP cryptographie — mTLS\n\nSystème : application mobile\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-242-42056\nDurée de protection requise : 7 ans\nVolume moyen : 5514 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-102`",
    "reponse_v": "Présenter et vérifier des certificats côté client et serveur",
    "reponse_f1": "Vérifier uniquement le serveur",
    "reponse_f2": "Désactiver la validation",
    "explication": "mTLS authentifie les deux extrémités."
  },
  {
    "id": 103,
    "question": "`Mini-TP cryptographie — SSH par clé\n\nSystème : serveur d'administration\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-243-49975\nDurée de protection requise : 8 ans\nVolume moyen : 5531 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-103`",
    "reponse_v": "Installer la clé publique sur le serveur et protéger la clé privée",
    "reponse_f1": "Installer la clé privée sur le serveur",
    "reponse_f2": "Partager la clé privée",
    "explication": "SSH vérifie la preuve produite avec la clé privée."
  },
  {
    "id": 104,
    "question": "`Mini-TP cryptographie — IPsec tunnel\n\nSystème : plateforme de signature\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-244-57894\nDurée de protection requise : 5 ans\nVolume moyen : 5548 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-104`",
    "reponse_v": "Utiliser le mode tunnel entre passerelles",
    "reponse_f1": "Utiliser uniquement le mode transport pour deux réseaux",
    "reponse_f2": "Utiliser ARP",
    "explication": "Le mode tunnel encapsule le paquet IP complet."
  },
  {
    "id": 105,
    "question": "`Mini-TP cryptographie — IPsec ESP\n\nSystème : VPN intersite\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-245-65813\nDurée de protection requise : 6 ans\nVolume moyen : 5565 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-105`",
    "reponse_v": "Utiliser ESP pour confidentialité et intégrité",
    "reponse_f1": "Utiliser ICMP",
    "reponse_f2": "Utiliser DHCP",
    "explication": "ESP protège le trafic IP."
  },
  {
    "id": 106,
    "question": "`Mini-TP cryptographie — S/MIME\n\nSystème : service de sauvegarde\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-246-73732\nDurée de protection requise : 7 ans\nVolume moyen : 5582 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-106`",
    "reponse_v": "Utiliser S/MIME avec des certificats X.509",
    "reponse_f1": "Utiliser SNMP",
    "reponse_f2": "Utiliser NTP",
    "explication": "S/MIME sécurise les courriels avec X.509."
  },
  {
    "id": 107,
    "question": "`Mini-TP cryptographie — OpenPGP\n\nSystème : registre de conteneurs\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-247-81651\nDurée de protection requise : 8 ans\nVolume moyen : 5599 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-107`",
    "reponse_v": "Utiliser le modèle de confiance OpenPGP adapté",
    "reponse_f1": "Utiliser uniquement une CA racine obligatoire",
    "reponse_f2": "Utiliser DHCP",
    "explication": "OpenPGP peut s'appuyer sur une toile de confiance."
  },
  {
    "id": 108,
    "question": "`Mini-TP cryptographie — TLS downgrade\n\nSystème : portail citoyen\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-248-89570\nDurée de protection requise : 5 ans\nVolume moyen : 5616 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-108`",
    "reponse_v": "Désactiver les versions et suites faibles",
    "reponse_f1": "Autoriser toutes les versions",
    "reponse_f2": "Désactiver les certificats",
    "explication": "La restriction de négociation évite les downgrades."
  },
  {
    "id": 109,
    "question": "`Mini-TP cryptographie — TLS session resumption\n\nSystème : annuaire d'entreprise\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-249-97489\nDurée de protection requise : 6 ans\nVolume moyen : 5633 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-109`",
    "reponse_v": "Utiliser tickets ou reprise de session",
    "reponse_f1": "Émettre un certificat à chaque requête",
    "reponse_f2": "Désactiver le chiffrement",
    "explication": "La reprise réduit le coût des connexions répétées."
  },
  {
    "id": 110,
    "question": "`Mini-TP cryptographie — validation de certificat TLS\n\nSystème : plateforme e-commerce\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-250-05408\nDurée de protection requise : 7 ans\nVolume moyen : 5650 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-110`",
    "reponse_v": "Vérifier chaîne, dates, usages, nom et révocation selon la politique",
    "reponse_f1": "Vérifier uniquement la date",
    "reponse_f2": "Accepter tout certificat chiffré",
    "explication": "Une validation TLS complète couvre plusieurs propriétés."
  },
  {
    "id": 111,
    "question": "`Mini-TP cryptographie — FIPS 140-3\n\nSystème : service IoT\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-251-13327\nDurée de protection requise : 8 ans\nVolume moyen : 5667 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-111`",
    "reponse_v": "Utiliser un module validé FIPS 140-3 si l'exigence s'applique",
    "reponse_f1": "Utiliser HTTP/1.1",
    "reponse_f2": "Utiliser IEEE 802.1Q",
    "explication": "FIPS 140-3 concerne les modules cryptographiques."
  },
  {
    "id": 112,
    "question": "`Mini-TP cryptographie — ISO/IEC 27001\n\nSystème : système de paiement\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-252-21246\nDurée de protection requise : 5 ans\nVolume moyen : 5684 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-112`",
    "reponse_v": "Structurer un SMSI selon ISO/IEC 27001",
    "reponse_f1": "Utiliser RFC 1918",
    "reponse_f2": "Utiliser SMTP",
    "explication": "ISO/IEC 27001 définit les exigences d'un SMSI."
  },
  {
    "id": 113,
    "question": "`Mini-TP cryptographie — PCI DSS\n\nSystème : outil de télémaintenance\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-253-29165\nDurée de protection requise : 6 ans\nVolume moyen : 5701 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-113`",
    "reponse_v": "Appliquer PCI DSS pour les données de carte",
    "reponse_f1": "Appliquer uniquement DNSSEC",
    "reponse_f2": "Appliquer BGP",
    "explication": "PCI DSS encadre les environnements de paiement."
  },
  {
    "id": 114,
    "question": "`Mini-TP cryptographie — crypto-agilité\n\nSystème : portail bancaire\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-254-37084\nDurée de protection requise : 7 ans\nVolume moyen : 5718 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-114`",
    "reponse_v": "Prévoir le remplacement des algorithmes et formats",
    "reponse_f1": "Figer tous les choix définitivement",
    "reponse_f2": "Supprimer les identifiants d'algorithme",
    "explication": "La crypto-agilité facilite les migrations."
  },
  {
    "id": 115,
    "question": "`Mini-TP cryptographie — MD5 obsolète\n\nSystème : API partenaire\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-255-45003\nDurée de protection requise : 8 ans\nVolume moyen : 5735 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-115`",
    "reponse_v": "Remplacer MD5 pour les usages de sécurité",
    "reponse_f1": "Ajouter Base64 à MD5",
    "reponse_f2": "Conserver MD5 car il est rapide",
    "explication": "MD5 présente des collisions pratiques."
  },
  {
    "id": 116,
    "question": "`Mini-TP cryptographie — 3DES obsolète\n\nSystème : messagerie interne\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-256-52922\nDurée de protection requise : 5 ans\nVolume moyen : 5752 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-116`",
    "reponse_v": "Remplacer 3DES dans les nouveaux systèmes",
    "reponse_f1": "Préférer 3DES à AES",
    "reponse_f2": "Utiliser DES simple",
    "explication": "3DES est obsolète et limité par sa taille de bloc."
  },
  {
    "id": 117,
    "question": "`Mini-TP cryptographie — politique cryptographique\n\nSystème : application mobile\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-257-60841\nDurée de protection requise : 6 ans\nVolume moyen : 5769 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-117`",
    "reponse_v": "Formaliser algorithmes, tailles, rotation, stockage et révocation",
    "reponse_f1": "Rédiger uniquement un plan IP",
    "reponse_f2": "Ne rien documenter",
    "explication": "Une politique rend les choix cohérents et auditables."
  },
  {
    "id": 118,
    "question": "`Mini-TP cryptographie — inventaire cryptographique\n\nSystème : serveur d'administration\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-258-68760\nDurée de protection requise : 7 ans\nVolume moyen : 5786 opérations cryptographiques/jour\nIndisponibilité maximale : 6 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-118`",
    "reponse_v": "Recenser certificats, clés, algorithmes et dépendances",
    "reponse_f1": "Inventorier seulement les serveurs",
    "reponse_f2": "Ignorer les certificats internes",
    "explication": "L'inventaire est indispensable à la maîtrise du risque."
  },
  {
    "id": 119,
    "question": "`Mini-TP cryptographie — durée de protection\n\nSystème : plateforme de signature\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-259-76679\nDurée de protection requise : 8 ans\nVolume moyen : 5803 opérations cryptographiques/jour\nIndisponibilité maximale : 7 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-119`",
    "reponse_v": "Adapter le niveau cryptographique à la durée de sensibilité",
    "reponse_f1": "Choisir toujours la plus petite clé",
    "reponse_f2": "Choisir selon le nom du service",
    "explication": "La durée de protection influe sur les choix."
  },
  {
    "id": 120,
    "question": "`Mini-TP cryptographie — audit cryptographique\n\nSystème : VPN intersite\nContexte : plateforme critique multisite\nIdentifiant de clé ou certificat : K-260-84598\nDurée de protection requise : 5 ans\nVolume moyen : 5820 opérations cryptographiques/jour\nIndisponibilité maximale : 5 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-120`",
    "reponse_v": "Prioriser les écarts et suivre un plan de remédiation",
    "reponse_f1": "Masquer les alertes",
    "reponse_f2": "Renouveler uniquement les certificats visibles",
    "explication": "Un audit doit conduire à des corrections traçables."
  },
  {
    "id": 121,
    "question": "`Mini-TP cryptographie — AES-GCM avec nonce unique\n\nSystème : annuaire d'entreprise\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-301-22106\nDurée de protection requise : 8 ans\nVolume moyen : 9517 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-121`",
    "reponse_v": "Utiliser AES-GCM en garantissant l'unicité du nonce",
    "reponse_f1": "Utiliser AES-ECB",
    "reponse_f2": "Réutiliser le même nonce",
    "explication": "GCM fournit confidentialité et intégrité si le nonce n'est pas réutilisé."
  },
  {
    "id": 122,
    "question": "`Mini-TP cryptographie — réutilisation de nonce GCM\n\nSystème : plateforme e-commerce\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-302-30025\nDurée de protection requise : 9 ans\nVolume moyen : 9534 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-122`",
    "reponse_v": "Changer immédiatement la clé et corriger la génération des nonces",
    "reponse_f1": "Continuer à utiliser la même paire clé/nonce",
    "reponse_f2": "Ajouter Base64",
    "explication": "La réutilisation d'un nonce en GCM compromet la sécurité."
  },
  {
    "id": 123,
    "question": "`Mini-TP cryptographie — stockage de mots de passe\n\nSystème : service IoT\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-303-37944\nDurée de protection requise : 10 ans\nVolume moyen : 9551 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-123`",
    "reponse_v": "Utiliser Argon2id avec sel unique et paramètres robustes",
    "reponse_f1": "Utiliser SHA-256 seul sans sel",
    "reponse_f2": "Chiffrer les mots de passe avec une clé commune",
    "explication": "Les mots de passe doivent être dérivés avec une KDF lente."
  },
  {
    "id": 124,
    "question": "`Mini-TP cryptographie — intégrité avec secret partagé\n\nSystème : système de paiement\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-304-45863\nDurée de protection requise : 7 ans\nVolume moyen : 9568 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-124`",
    "reponse_v": "Utiliser HMAC-SHA-256 ou équivalent",
    "reponse_f1": "Utiliser un checksum CRC",
    "reponse_f2": "Utiliser seulement Base64",
    "explication": "HMAC fournit authenticité et intégrité avec un secret."
  },
  {
    "id": 125,
    "question": "`Mini-TP cryptographie — chiffrement de gros volumes\n\nSystème : outil de télémaintenance\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-305-53782\nDurée de protection requise : 8 ans\nVolume moyen : 9585 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-125`",
    "reponse_v": "Utiliser un chiffrement symétrique moderne",
    "reponse_f1": "Utiliser RSA directement sur tout le flux",
    "reponse_f2": "Utiliser un simple hachage",
    "explication": "Le chiffrement symétrique est adapté aux gros volumes."
  },
  {
    "id": 126,
    "question": "`Mini-TP cryptographie — motifs visibles avec ECB\n\nSystème : portail bancaire\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-306-61701\nDurée de protection requise : 9 ans\nVolume moyen : 9602 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-126`",
    "reponse_v": "Remplacer ECB par un mode authentifié comme GCM",
    "reponse_f1": "Conserver ECB et compresser",
    "reponse_f2": "Ajouter un sel au ciphertext",
    "explication": "ECB révèle les motifs répétitifs."
  },
  {
    "id": 127,
    "question": "`Mini-TP cryptographie — dérivation depuis un mot de passe\n\nSystème : API partenaire\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-307-69620\nDurée de protection requise : 10 ans\nVolume moyen : 9619 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-127`",
    "reponse_v": "Utiliser une KDF dédiée avec sel et coût adapté",
    "reponse_f1": "Utiliser directement le mot de passe comme clé",
    "reponse_f2": "Hasher une seule fois sans sel",
    "explication": "Une KDF ralentit les attaques hors ligne."
  },
  {
    "id": 128,
    "question": "`Mini-TP cryptographie — vérification d'intégrité sans secret\n\nSystème : messagerie interne\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-308-77539\nDurée de protection requise : 7 ans\nVolume moyen : 9636 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-128`",
    "reponse_v": "Utiliser une fonction de hachage moderne",
    "reponse_f1": "Utiliser un chiffrement réversible",
    "reponse_f2": "Utiliser un encodage hexadécimal",
    "explication": "Le hachage détecte les modifications."
  },
  {
    "id": 129,
    "question": "`Mini-TP cryptographie — sel de mot de passe\n\nSystème : application mobile\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-309-85458\nDurée de protection requise : 8 ans\nVolume moyen : 9653 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-129`",
    "reponse_v": "Générer un sel aléatoire distinct par mot de passe",
    "reponse_f1": "Réutiliser un sel global fixe",
    "reponse_f2": "Supprimer le sel",
    "explication": "Un sel unique empêche les hachages identiques."
  },
  {
    "id": 130,
    "question": "`Mini-TP cryptographie — clé de session éphémère\n\nSystème : serveur d'administration\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-310-93377\nDurée de protection requise : 9 ans\nVolume moyen : 9670 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-130`",
    "reponse_v": "Détruire la clé après usage et ne pas la réutiliser",
    "reponse_f1": "Conserver la clé indéfiniment",
    "reponse_f2": "Partager la clé entre toutes les sessions",
    "explication": "Une clé éphémère limite l'impact d'une compromission."
  },
  {
    "id": 131,
    "question": "`Mini-TP cryptographie — chiffrement pour un destinataire\n\nSystème : plateforme de signature\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-311-01296\nDurée de protection requise : 10 ans\nVolume moyen : 9687 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-131`",
    "reponse_v": "Chiffrer avec la clé publique du destinataire",
    "reponse_f1": "Chiffrer avec sa clé privée",
    "reponse_f2": "Signer avec sa clé publique",
    "explication": "Seule la clé privée correspondante permet le déchiffrement."
  },
  {
    "id": 132,
    "question": "`Mini-TP cryptographie — signature numérique\n\nSystème : VPN intersite\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-312-09215\nDurée de protection requise : 7 ans\nVolume moyen : 9704 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-132`",
    "reponse_v": "Signer l'empreinte avec la clé privée",
    "reponse_f1": "Signer avec la clé publique",
    "reponse_f2": "Hasher sans clé et appeler cela une signature",
    "explication": "La clé privée produit la signature vérifiée par la clé publique."
  },
  {
    "id": 133,
    "question": "`Mini-TP cryptographie — forward secrecy\n\nSystème : service de sauvegarde\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-313-17134\nDurée de protection requise : 8 ans\nVolume moyen : 9721 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-133`",
    "reponse_v": "Utiliser un échange éphémère comme ECDHE",
    "reponse_f1": "Utiliser une clé RSA statique pour toutes les sessions",
    "reponse_f2": "Réutiliser un secret permanent",
    "explication": "ECDHE protège les anciennes sessions si la clé long terme est compromise."
  },
  {
    "id": 134,
    "question": "`Mini-TP cryptographie — chiffrement hybride\n\nSystème : registre de conteneurs\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-314-25053\nDurée de protection requise : 9 ans\nVolume moyen : 9738 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-134`",
    "reponse_v": "Chiffrer les données avec une clé symétrique puis protéger cette clé asymétriquement",
    "reponse_f1": "Chiffrer tout le fichier avec RSA",
    "reponse_f2": "Hasher le fichier uniquement",
    "explication": "Le chiffrement hybride combine efficacité et distribution sécurisée."
  },
  {
    "id": 135,
    "question": "`Mini-TP cryptographie — Diffie-Hellman non authentifié\n\nSystème : portail citoyen\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-315-32972\nDurée de protection requise : 10 ans\nVolume moyen : 9755 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-135`",
    "reponse_v": "Ajouter une authentification pour éviter un MITM",
    "reponse_f1": "Considérer DH seul comme authentifié",
    "reponse_f2": "Publier le secret partagé",
    "explication": "DH sans authentification reste vulnérable à l'interposition."
  },
  {
    "id": 136,
    "question": "`Mini-TP cryptographie — RSA-OAEP\n\nSystème : annuaire d'entreprise\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-316-40891\nDurée de protection requise : 7 ans\nVolume moyen : 9772 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-136`",
    "reponse_v": "Utiliser OAEP pour le chiffrement RSA",
    "reponse_f1": "Utiliser RSA brut",
    "reponse_f2": "Utiliser RSA-PSS pour chiffrer",
    "explication": "OAEP est un padding adapté au chiffrement RSA."
  },
  {
    "id": 137,
    "question": "`Mini-TP cryptographie — RSA-PSS\n\nSystème : plateforme e-commerce\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-317-48810\nDurée de protection requise : 8 ans\nVolume moyen : 9789 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-137`",
    "reponse_v": "Utiliser PSS pour la signature RSA",
    "reponse_f1": "Utiliser OAEP pour signer",
    "reponse_f2": "Utiliser AES-CBC",
    "explication": "PSS est conçu pour les signatures RSA."
  },
  {
    "id": 138,
    "question": "`Mini-TP cryptographie — courbes elliptiques\n\nSystème : service IoT\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-318-56729\nDurée de protection requise : 9 ans\nVolume moyen : 9806 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-138`",
    "reponse_v": "Utiliser ECC pour des clés plus courtes à sécurité comparable",
    "reponse_f1": "Utiliser DES",
    "reponse_f2": "Utiliser MD5",
    "explication": "ECC offre une bonne sécurité avec des clés compactes."
  },
  {
    "id": 139,
    "question": "`Mini-TP cryptographie — non-répudiation\n\nSystème : système de paiement\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-319-64648\nDurée de protection requise : 10 ans\nVolume moyen : 9823 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-139`",
    "reponse_v": "Protéger la clé privée de signature et journaliser l'opération",
    "reponse_f1": "Partager la clé privée",
    "reponse_f2": "Chiffrer seulement les données",
    "explication": "La non-répudiation suppose une clé privée sous contrôle exclusif."
  },
  {
    "id": 140,
    "question": "`Mini-TP cryptographie — signature puis chiffrement\n\nSystème : outil de télémaintenance\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-320-72567\nDurée de protection requise : 7 ans\nVolume moyen : 9840 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-140`",
    "reponse_v": "Signer puis chiffrer selon le protocole choisi",
    "reponse_f1": "Encoder en Base64",
    "reponse_f2": "Hasher sans clé",
    "explication": "Signature et chiffrement répondent à des objectifs distincts."
  },
  {
    "id": 141,
    "question": "`Mini-TP cryptographie — chaîne X.509\n\nSystème : portail bancaire\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-321-80486\nDurée de protection requise : 8 ans\nVolume moyen : 9857 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-141`",
    "reponse_v": "Valider chaque signature jusqu'à une racine de confiance",
    "reponse_f1": "Faire confiance uniquement à la date",
    "reponse_f2": "Ignorer les intermédiaires",
    "explication": "La confiance repose sur la chaîne complète."
  },
  {
    "id": 142,
    "question": "`Mini-TP cryptographie — SAN absent\n\nSystème : API partenaire\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-322-88405\nDurée de protection requise : 9 ans\nVolume moyen : 9874 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-142`",
    "reponse_v": "Refuser le certificat si le nom demandé n'est pas couvert",
    "reponse_f1": "Accepter grâce au CN uniquement dans tous les cas",
    "reponse_f2": "Ignorer le nom d'hôte",
    "explication": "Le nom doit correspondre à une identité du certificat."
  },
  {
    "id": 143,
    "question": "`Mini-TP cryptographie — clé privée compromise\n\nSystème : messagerie interne\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-323-96324\nDurée de protection requise : 10 ans\nVolume moyen : 9891 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-143`",
    "reponse_v": "Révoquer le certificat et générer une nouvelle paire de clés",
    "reponse_f1": "Attendre l'expiration",
    "reponse_f2": "Publier la clé privée",
    "explication": "Une compromission impose révocation et remplacement."
  },
  {
    "id": 144,
    "question": "`Mini-TP cryptographie — OCSP\n\nSystème : application mobile\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-324-04243\nDurée de protection requise : 7 ans\nVolume moyen : 9908 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-144`",
    "reponse_v": "Interroger un répondeur OCSP pour l'état de révocation",
    "reponse_f1": "Interroger NTP",
    "reponse_f2": "Interroger DHCP",
    "explication": "OCSP fournit l'état d'un certificat."
  },
  {
    "id": 145,
    "question": "`Mini-TP cryptographie — CRL\n\nSystème : serveur d'administration\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-325-12162\nDurée de protection requise : 8 ans\nVolume moyen : 9925 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-145`",
    "reponse_v": "Télécharger et vérifier la liste de révocation signée",
    "reponse_f1": "Utiliser une table ARP",
    "reponse_f2": "Utiliser DNS uniquement",
    "explication": "Une CRL recense les certificats révoqués."
  },
  {
    "id": 146,
    "question": "`Mini-TP cryptographie — CA intermédiaire\n\nSystème : plateforme de signature\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-326-20081\nDurée de protection requise : 9 ans\nVolume moyen : 9942 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-146`",
    "reponse_v": "Utiliser une intermédiaire pour protéger la racine hors ligne",
    "reponse_f1": "Faire signer tous les certificats directement par une racine en ligne",
    "reponse_f2": "Supprimer la chaîne",
    "explication": "L'intermédiaire réduit l'exposition de la racine."
  },
  {
    "id": 147,
    "question": "`Mini-TP cryptographie — Basic Constraints\n\nSystème : VPN intersite\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-327-28000\nDurée de protection requise : 10 ans\nVolume moyen : 9959 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-147`",
    "reponse_v": "Mettre CA=FALSE pour un certificat d'entité finale",
    "reponse_f1": "Mettre CA=TRUE",
    "reponse_f2": "Supprimer l'extension systématiquement",
    "explication": "Basic Constraints distingue CA et entité finale."
  },
  {
    "id": 148,
    "question": "`Mini-TP cryptographie — Key Usage\n\nSystème : service de sauvegarde\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-328-35919\nDurée de protection requise : 7 ans\nVolume moyen : 9976 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-148`",
    "reponse_v": "Limiter les usages à ceux réellement nécessaires",
    "reponse_f1": "Autoriser tous les usages",
    "reponse_f2": "Ignorer l'extension",
    "explication": "Key Usage encadre les opérations permises."
  },
  {
    "id": 149,
    "question": "`Mini-TP cryptographie — certificate pinning\n\nSystème : registre de conteneurs\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-329-43838\nDurée de protection requise : 8 ans\nVolume moyen : 9993 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-149`",
    "reponse_v": "Épingler une clé ou un certificat avec stratégie de rotation",
    "reponse_f1": "Épingler sans plan de renouvellement",
    "reponse_f2": "Accepter toute CA",
    "explication": "Le pinning réduit la surface de confiance mais exige une rotation maîtrisée."
  },
  {
    "id": 150,
    "question": "`Mini-TP cryptographie — certificat auto-signé\n\nSystème : portail citoyen\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-330-51757\nDurée de protection requise : 9 ans\nVolume moyen : 10010 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-150`",
    "reponse_v": "Ajouter explicitement un ancrage de confiance si l'usage est légitime",
    "reponse_f1": "Le considérer automatiquement public",
    "reponse_f2": "Ignorer toute vérification",
    "explication": "Un certificat auto-signé n'est pas fiable par défaut."
  },
  {
    "id": 151,
    "question": "`Mini-TP cryptographie — HSM\n\nSystème : annuaire d'entreprise\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-331-59676\nDurée de protection requise : 10 ans\nVolume moyen : 10027 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-151`",
    "reponse_v": "Conserver la clé non exportable dans un HSM",
    "reponse_f1": "Stocker la clé en clair dans un fichier",
    "reponse_f2": "Placer la clé dans le dépôt Git",
    "explication": "Un HSM protège et utilise les clés sensibles."
  },
  {
    "id": 152,
    "question": "`Mini-TP cryptographie — rotation de clé\n\nSystème : plateforme e-commerce\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-332-67595\nDurée de protection requise : 7 ans\nVolume moyen : 10044 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-152`",
    "reponse_v": "Planifier la rotation et conserver les anciennes clés nécessaires",
    "reponse_f1": "Supprimer toutes les anciennes clés immédiatement",
    "reponse_f2": "Ne jamais faire tourner les clés",
    "explication": "La rotation doit préserver l'accès aux données historiques."
  },
  {
    "id": 153,
    "question": "`Mini-TP cryptographie — sauvegarde de clé maître\n\nSystème : service IoT\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-333-75514\nDurée de protection requise : 8 ans\nVolume moyen : 10061 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-153`",
    "reponse_v": "Conserver une copie chiffrée, séparée et testée",
    "reponse_f1": "Copier la clé en clair avec les données",
    "reponse_f2": "Ne jamais tester la restauration",
    "explication": "La sauvegarde de clé doit être protégée et restaurable."
  },
  {
    "id": 154,
    "question": "`Mini-TP cryptographie — envelope encryption\n\nSystème : système de paiement\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-334-83433\nDurée de protection requise : 9 ans\nVolume moyen : 10078 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-154`",
    "reponse_v": "Utiliser une clé de données protégée par une clé maître",
    "reponse_f1": "Utiliser une seule clé codée en dur",
    "reponse_f2": "Remplacer le chiffrement par un checksum",
    "explication": "Le chiffrement d'enveloppe sépare les rôles des clés."
  },
  {
    "id": 155,
    "question": "`Mini-TP cryptographie — génération de clé\n\nSystème : outil de télémaintenance\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-335-91352\nDurée de protection requise : 10 ans\nVolume moyen : 10095 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-155`",
    "reponse_v": "Utiliser un CSPRNG",
    "reponse_f1": "Utiliser l'heure système seule",
    "reponse_f2": "Utiliser un compteur",
    "explication": "Les clés nécessitent une forte entropie."
  },
  {
    "id": 156,
    "question": "`Mini-TP cryptographie — destruction de clé\n\nSystème : portail bancaire\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-336-99271\nDurée de protection requise : 7 ans\nVolume moyen : 10112 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-156`",
    "reponse_v": "Effectuer une destruction cryptographique contrôlée et auditée",
    "reponse_f1": "Renommer la clé",
    "reponse_f2": "Masquer l'interface",
    "explication": "La destruction doit empêcher toute récupération."
  },
  {
    "id": 157,
    "question": "`Mini-TP cryptographie — KMS\n\nSystème : API partenaire\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-337-07190\nDurée de protection requise : 8 ans\nVolume moyen : 10129 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-157`",
    "reponse_v": "Centraliser politiques, rotation et audit dans un KMS",
    "reponse_f1": "Utiliser un serveur DNS",
    "reponse_f2": "Utiliser un fichier partagé",
    "explication": "Un KMS gère le cycle de vie des clés."
  },
  {
    "id": 158,
    "question": "`Mini-TP cryptographie — séparation des rôles\n\nSystème : messagerie interne\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-338-15109\nDurée de protection requise : 9 ans\nVolume moyen : 10146 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-158`",
    "reponse_v": "Séparer création, activation et audit des clés",
    "reponse_f1": "Donner tous les droits à une seule personne",
    "reponse_f2": "Partager un compte administrateur",
    "explication": "La séparation des tâches réduit les abus."
  },
  {
    "id": 159,
    "question": "`Mini-TP cryptographie — compromission de clé\n\nSystème : application mobile\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-339-23028\nDurée de protection requise : 10 ans\nVolume moyen : 10163 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-159`",
    "reponse_v": "Désactiver la clé, la remplacer et analyser l'exposition",
    "reponse_f1": "Continuer jusqu'à expiration",
    "reponse_f2": "Publier la clé",
    "explication": "Une compromission exige confinement et rotation."
  },
  {
    "id": 160,
    "question": "`Mini-TP cryptographie — escrow de clés\n\nSystème : serveur d'administration\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-340-30947\nDurée de protection requise : 7 ans\nVolume moyen : 10180 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-160`",
    "reponse_v": "Encadrer strictement l'accès au mécanisme de récupération",
    "reponse_f1": "Donner l'accès à tous les administrateurs",
    "reponse_f2": "Supprimer toute journalisation",
    "explication": "L'escrow concentre la confiance et doit être fortement contrôlé."
  },
  {
    "id": 161,
    "question": "`Mini-TP cryptographie — TLS 1.3\n\nSystème : plateforme de signature\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-341-38866\nDurée de protection requise : 8 ans\nVolume moyen : 10197 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-161`",
    "reponse_v": "Privilégier TLS 1.3 si compatible",
    "reponse_f1": "Utiliser SSL 3.0",
    "reponse_f2": "Forcer TLS 1.0",
    "explication": "TLS 1.3 retire de nombreux mécanismes obsolètes."
  },
  {
    "id": 162,
    "question": "`Mini-TP cryptographie — mTLS\n\nSystème : VPN intersite\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-342-46785\nDurée de protection requise : 9 ans\nVolume moyen : 10214 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-162`",
    "reponse_v": "Présenter et vérifier des certificats côté client et serveur",
    "reponse_f1": "Vérifier uniquement le serveur",
    "reponse_f2": "Désactiver la validation",
    "explication": "mTLS authentifie les deux extrémités."
  },
  {
    "id": 163,
    "question": "`Mini-TP cryptographie — SSH par clé\n\nSystème : service de sauvegarde\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-343-54704\nDurée de protection requise : 10 ans\nVolume moyen : 10231 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-163`",
    "reponse_v": "Installer la clé publique sur le serveur et protéger la clé privée",
    "reponse_f1": "Installer la clé privée sur le serveur",
    "reponse_f2": "Partager la clé privée",
    "explication": "SSH vérifie la preuve produite avec la clé privée."
  },
  {
    "id": 164,
    "question": "`Mini-TP cryptographie — IPsec tunnel\n\nSystème : registre de conteneurs\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-344-62623\nDurée de protection requise : 7 ans\nVolume moyen : 10248 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-164`",
    "reponse_v": "Utiliser le mode tunnel entre passerelles",
    "reponse_f1": "Utiliser uniquement le mode transport pour deux réseaux",
    "reponse_f2": "Utiliser ARP",
    "explication": "Le mode tunnel encapsule le paquet IP complet."
  },
  {
    "id": 165,
    "question": "`Mini-TP cryptographie — IPsec ESP\n\nSystème : portail citoyen\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-345-70542\nDurée de protection requise : 8 ans\nVolume moyen : 10265 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-165`",
    "reponse_v": "Utiliser ESP pour confidentialité et intégrité",
    "reponse_f1": "Utiliser ICMP",
    "reponse_f2": "Utiliser DHCP",
    "explication": "ESP protège le trafic IP."
  },
  {
    "id": 166,
    "question": "`Mini-TP cryptographie — S/MIME\n\nSystème : annuaire d'entreprise\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-346-78461\nDurée de protection requise : 9 ans\nVolume moyen : 10282 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-166`",
    "reponse_v": "Utiliser S/MIME avec des certificats X.509",
    "reponse_f1": "Utiliser SNMP",
    "reponse_f2": "Utiliser NTP",
    "explication": "S/MIME sécurise les courriels avec X.509."
  },
  {
    "id": 167,
    "question": "`Mini-TP cryptographie — OpenPGP\n\nSystème : plateforme e-commerce\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-347-86380\nDurée de protection requise : 10 ans\nVolume moyen : 10299 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-167`",
    "reponse_v": "Utiliser le modèle de confiance OpenPGP adapté",
    "reponse_f1": "Utiliser uniquement une CA racine obligatoire",
    "reponse_f2": "Utiliser DHCP",
    "explication": "OpenPGP peut s'appuyer sur une toile de confiance."
  },
  {
    "id": 168,
    "question": "`Mini-TP cryptographie — TLS downgrade\n\nSystème : service IoT\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-348-94299\nDurée de protection requise : 7 ans\nVolume moyen : 10316 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-168`",
    "reponse_v": "Désactiver les versions et suites faibles",
    "reponse_f1": "Autoriser toutes les versions",
    "reponse_f2": "Désactiver les certificats",
    "explication": "La restriction de négociation évite les downgrades."
  },
  {
    "id": 169,
    "question": "`Mini-TP cryptographie — TLS session resumption\n\nSystème : système de paiement\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-349-02218\nDurée de protection requise : 8 ans\nVolume moyen : 10333 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-169`",
    "reponse_v": "Utiliser tickets ou reprise de session",
    "reponse_f1": "Émettre un certificat à chaque requête",
    "reponse_f2": "Désactiver le chiffrement",
    "explication": "La reprise réduit le coût des connexions répétées."
  },
  {
    "id": 170,
    "question": "`Mini-TP cryptographie — validation de certificat TLS\n\nSystème : outil de télémaintenance\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-350-10137\nDurée de protection requise : 9 ans\nVolume moyen : 10350 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-170`",
    "reponse_v": "Vérifier chaîne, dates, usages, nom et révocation selon la politique",
    "reponse_f1": "Vérifier uniquement la date",
    "reponse_f2": "Accepter tout certificat chiffré",
    "explication": "Une validation TLS complète couvre plusieurs propriétés."
  },
  {
    "id": 171,
    "question": "`Mini-TP cryptographie — FIPS 140-3\n\nSystème : portail bancaire\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-351-18056\nDurée de protection requise : 10 ans\nVolume moyen : 10367 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-171`",
    "reponse_v": "Utiliser un module validé FIPS 140-3 si l'exigence s'applique",
    "reponse_f1": "Utiliser HTTP/1.1",
    "reponse_f2": "Utiliser IEEE 802.1Q",
    "explication": "FIPS 140-3 concerne les modules cryptographiques."
  },
  {
    "id": 172,
    "question": "`Mini-TP cryptographie — ISO/IEC 27001\n\nSystème : API partenaire\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-352-25975\nDurée de protection requise : 7 ans\nVolume moyen : 10384 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-172`",
    "reponse_v": "Structurer un SMSI selon ISO/IEC 27001",
    "reponse_f1": "Utiliser RFC 1918",
    "reponse_f2": "Utiliser SMTP",
    "explication": "ISO/IEC 27001 définit les exigences d'un SMSI."
  },
  {
    "id": 173,
    "question": "`Mini-TP cryptographie — PCI DSS\n\nSystème : messagerie interne\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-353-33894\nDurée de protection requise : 8 ans\nVolume moyen : 10401 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-173`",
    "reponse_v": "Appliquer PCI DSS pour les données de carte",
    "reponse_f1": "Appliquer uniquement DNSSEC",
    "reponse_f2": "Appliquer BGP",
    "explication": "PCI DSS encadre les environnements de paiement."
  },
  {
    "id": 174,
    "question": "`Mini-TP cryptographie — crypto-agilité\n\nSystème : application mobile\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-354-41813\nDurée de protection requise : 9 ans\nVolume moyen : 10418 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-174`",
    "reponse_v": "Prévoir le remplacement des algorithmes et formats",
    "reponse_f1": "Figer tous les choix définitivement",
    "reponse_f2": "Supprimer les identifiants d'algorithme",
    "explication": "La crypto-agilité facilite les migrations."
  },
  {
    "id": 175,
    "question": "`Mini-TP cryptographie — MD5 obsolète\n\nSystème : serveur d'administration\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-355-49732\nDurée de protection requise : 10 ans\nVolume moyen : 10435 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-175`",
    "reponse_v": "Remplacer MD5 pour les usages de sécurité",
    "reponse_f1": "Ajouter Base64 à MD5",
    "reponse_f2": "Conserver MD5 car il est rapide",
    "explication": "MD5 présente des collisions pratiques."
  },
  {
    "id": 176,
    "question": "`Mini-TP cryptographie — 3DES obsolète\n\nSystème : plateforme de signature\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-356-57651\nDurée de protection requise : 7 ans\nVolume moyen : 10452 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-176`",
    "reponse_v": "Remplacer 3DES dans les nouveaux systèmes",
    "reponse_f1": "Préférer 3DES à AES",
    "reponse_f2": "Utiliser DES simple",
    "explication": "3DES est obsolète et limité par sa taille de bloc."
  },
  {
    "id": 177,
    "question": "`Mini-TP cryptographie — politique cryptographique\n\nSystème : VPN intersite\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-357-65570\nDurée de protection requise : 8 ans\nVolume moyen : 10469 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-177`",
    "reponse_v": "Formaliser algorithmes, tailles, rotation, stockage et révocation",
    "reponse_f1": "Rédiger uniquement un plan IP",
    "reponse_f2": "Ne rien documenter",
    "explication": "Une politique rend les choix cohérents et auditables."
  },
  {
    "id": 178,
    "question": "`Mini-TP cryptographie — inventaire cryptographique\n\nSystème : service de sauvegarde\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-358-73489\nDurée de protection requise : 9 ans\nVolume moyen : 10486 opérations cryptographiques/jour\nIndisponibilité maximale : 2 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-178`",
    "reponse_v": "Recenser certificats, clés, algorithmes et dépendances",
    "reponse_f1": "Inventorier seulement les serveurs",
    "reponse_f2": "Ignorer les certificats internes",
    "explication": "L'inventaire est indispensable à la maîtrise du risque."
  },
  {
    "id": 179,
    "question": "`Mini-TP cryptographie — durée de protection\n\nSystème : registre de conteneurs\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-359-81408\nDurée de protection requise : 10 ans\nVolume moyen : 10503 opérations cryptographiques/jour\nIndisponibilité maximale : 3 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-179`",
    "reponse_v": "Adapter le niveau cryptographique à la durée de sensibilité",
    "reponse_f1": "Choisir toujours la plus petite clé",
    "reponse_f2": "Choisir selon le nom du service",
    "explication": "La durée de protection influe sur les choix."
  },
  {
    "id": 180,
    "question": "`Mini-TP cryptographie — audit cryptographique\n\nSystème : portail citoyen\nContexte : service exposé à Internet\nIdentifiant de clé ou certificat : K-360-89327\nDurée de protection requise : 7 ans\nVolume moyen : 10520 opérations cryptographiques/jour\nIndisponibilité maximale : 1 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-180`",
    "reponse_v": "Prioriser les écarts et suivre un plan de remédiation",
    "reponse_f1": "Masquer les alertes",
    "reponse_f2": "Renouveler uniquement les certificats visibles",
    "explication": "Un audit doit conduire à des corrections traçables."
  },
  {
    "id": 181,
    "question": "`Mini-TP cryptographie — AES-GCM avec nonce unique\n\nSystème : système de paiement\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-401-26835\nDurée de protection requise : 11 ans\nVolume moyen : 22017 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-181`",
    "reponse_v": "Utiliser AES-GCM en garantissant l'unicité du nonce",
    "reponse_f1": "Utiliser AES-ECB",
    "reponse_f2": "Réutiliser le même nonce",
    "explication": "GCM fournit confidentialité et intégrité si le nonce n'est pas réutilisé."
  },
  {
    "id": 182,
    "question": "`Mini-TP cryptographie — réutilisation de nonce GCM\n\nSystème : outil de télémaintenance\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-402-34754\nDurée de protection requise : 12 ans\nVolume moyen : 22034 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-182`",
    "reponse_v": "Changer immédiatement la clé et corriger la génération des nonces",
    "reponse_f1": "Continuer à utiliser la même paire clé/nonce",
    "reponse_f2": "Ajouter Base64",
    "explication": "La réutilisation d'un nonce en GCM compromet la sécurité."
  },
  {
    "id": 183,
    "question": "`Mini-TP cryptographie — stockage de mots de passe\n\nSystème : portail bancaire\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-403-42673\nDurée de protection requise : 13 ans\nVolume moyen : 22051 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-183`",
    "reponse_v": "Utiliser Argon2id avec sel unique et paramètres robustes",
    "reponse_f1": "Utiliser SHA-256 seul sans sel",
    "reponse_f2": "Chiffrer les mots de passe avec une clé commune",
    "explication": "Les mots de passe doivent être dérivés avec une KDF lente."
  },
  {
    "id": 184,
    "question": "`Mini-TP cryptographie — intégrité avec secret partagé\n\nSystème : API partenaire\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-404-50592\nDurée de protection requise : 10 ans\nVolume moyen : 22068 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-184`",
    "reponse_v": "Utiliser HMAC-SHA-256 ou équivalent",
    "reponse_f1": "Utiliser un checksum CRC",
    "reponse_f2": "Utiliser seulement Base64",
    "explication": "HMAC fournit authenticité et intégrité avec un secret."
  },
  {
    "id": 185,
    "question": "`Mini-TP cryptographie — chiffrement de gros volumes\n\nSystème : messagerie interne\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-405-58511\nDurée de protection requise : 11 ans\nVolume moyen : 22085 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-185`",
    "reponse_v": "Utiliser un chiffrement symétrique moderne",
    "reponse_f1": "Utiliser RSA directement sur tout le flux",
    "reponse_f2": "Utiliser un simple hachage",
    "explication": "Le chiffrement symétrique est adapté aux gros volumes."
  },
  {
    "id": 186,
    "question": "`Mini-TP cryptographie — motifs visibles avec ECB\n\nSystème : application mobile\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-406-66430\nDurée de protection requise : 12 ans\nVolume moyen : 22102 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-186`",
    "reponse_v": "Remplacer ECB par un mode authentifié comme GCM",
    "reponse_f1": "Conserver ECB et compresser",
    "reponse_f2": "Ajouter un sel au ciphertext",
    "explication": "ECB révèle les motifs répétitifs."
  },
  {
    "id": 187,
    "question": "`Mini-TP cryptographie — dérivation depuis un mot de passe\n\nSystème : serveur d'administration\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-407-74349\nDurée de protection requise : 13 ans\nVolume moyen : 22119 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-187`",
    "reponse_v": "Utiliser une KDF dédiée avec sel et coût adapté",
    "reponse_f1": "Utiliser directement le mot de passe comme clé",
    "reponse_f2": "Hasher une seule fois sans sel",
    "explication": "Une KDF ralentit les attaques hors ligne."
  },
  {
    "id": 188,
    "question": "`Mini-TP cryptographie — vérification d'intégrité sans secret\n\nSystème : plateforme de signature\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-408-82268\nDurée de protection requise : 10 ans\nVolume moyen : 22136 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-188`",
    "reponse_v": "Utiliser une fonction de hachage moderne",
    "reponse_f1": "Utiliser un chiffrement réversible",
    "reponse_f2": "Utiliser un encodage hexadécimal",
    "explication": "Le hachage détecte les modifications."
  },
  {
    "id": 189,
    "question": "`Mini-TP cryptographie — sel de mot de passe\n\nSystème : VPN intersite\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-409-90187\nDurée de protection requise : 11 ans\nVolume moyen : 22153 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-189`",
    "reponse_v": "Générer un sel aléatoire distinct par mot de passe",
    "reponse_f1": "Réutiliser un sel global fixe",
    "reponse_f2": "Supprimer le sel",
    "explication": "Un sel unique empêche les hachages identiques."
  },
  {
    "id": 190,
    "question": "`Mini-TP cryptographie — clé de session éphémère\n\nSystème : service de sauvegarde\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-410-98106\nDurée de protection requise : 12 ans\nVolume moyen : 22170 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-190`",
    "reponse_v": "Détruire la clé après usage et ne pas la réutiliser",
    "reponse_f1": "Conserver la clé indéfiniment",
    "reponse_f2": "Partager la clé entre toutes les sessions",
    "explication": "Une clé éphémère limite l'impact d'une compromission."
  },
  {
    "id": 191,
    "question": "`Mini-TP cryptographie — chiffrement pour un destinataire\n\nSystème : registre de conteneurs\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-411-06025\nDurée de protection requise : 13 ans\nVolume moyen : 22187 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-191`",
    "reponse_v": "Chiffrer avec la clé publique du destinataire",
    "reponse_f1": "Chiffrer avec sa clé privée",
    "reponse_f2": "Signer avec sa clé publique",
    "explication": "Seule la clé privée correspondante permet le déchiffrement."
  },
  {
    "id": 192,
    "question": "`Mini-TP cryptographie — signature numérique\n\nSystème : portail citoyen\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-412-13944\nDurée de protection requise : 10 ans\nVolume moyen : 22204 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-192`",
    "reponse_v": "Signer l'empreinte avec la clé privée",
    "reponse_f1": "Signer avec la clé publique",
    "reponse_f2": "Hasher sans clé et appeler cela une signature",
    "explication": "La clé privée produit la signature vérifiée par la clé publique."
  },
  {
    "id": 193,
    "question": "`Mini-TP cryptographie — forward secrecy\n\nSystème : annuaire d'entreprise\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-413-21863\nDurée de protection requise : 11 ans\nVolume moyen : 22221 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-193`",
    "reponse_v": "Utiliser un échange éphémère comme ECDHE",
    "reponse_f1": "Utiliser une clé RSA statique pour toutes les sessions",
    "reponse_f2": "Réutiliser un secret permanent",
    "explication": "ECDHE protège les anciennes sessions si la clé long terme est compromise."
  },
  {
    "id": 194,
    "question": "`Mini-TP cryptographie — chiffrement hybride\n\nSystème : plateforme e-commerce\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-414-29782\nDurée de protection requise : 12 ans\nVolume moyen : 22238 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-194`",
    "reponse_v": "Chiffrer les données avec une clé symétrique puis protéger cette clé asymétriquement",
    "reponse_f1": "Chiffrer tout le fichier avec RSA",
    "reponse_f2": "Hasher le fichier uniquement",
    "explication": "Le chiffrement hybride combine efficacité et distribution sécurisée."
  },
  {
    "id": 195,
    "question": "`Mini-TP cryptographie — Diffie-Hellman non authentifié\n\nSystème : service IoT\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-415-37701\nDurée de protection requise : 13 ans\nVolume moyen : 22255 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-195`",
    "reponse_v": "Ajouter une authentification pour éviter un MITM",
    "reponse_f1": "Considérer DH seul comme authentifié",
    "reponse_f2": "Publier le secret partagé",
    "explication": "DH sans authentification reste vulnérable à l'interposition."
  },
  {
    "id": 196,
    "question": "`Mini-TP cryptographie — RSA-OAEP\n\nSystème : système de paiement\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-416-45620\nDurée de protection requise : 10 ans\nVolume moyen : 22272 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-196`",
    "reponse_v": "Utiliser OAEP pour le chiffrement RSA",
    "reponse_f1": "Utiliser RSA brut",
    "reponse_f2": "Utiliser RSA-PSS pour chiffrer",
    "explication": "OAEP est un padding adapté au chiffrement RSA."
  },
  {
    "id": 197,
    "question": "`Mini-TP cryptographie — RSA-PSS\n\nSystème : outil de télémaintenance\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-417-53539\nDurée de protection requise : 11 ans\nVolume moyen : 22289 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-197`",
    "reponse_v": "Utiliser PSS pour la signature RSA",
    "reponse_f1": "Utiliser OAEP pour signer",
    "reponse_f2": "Utiliser AES-CBC",
    "explication": "PSS est conçu pour les signatures RSA."
  },
  {
    "id": 198,
    "question": "`Mini-TP cryptographie — courbes elliptiques\n\nSystème : portail bancaire\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-418-61458\nDurée de protection requise : 12 ans\nVolume moyen : 22306 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-198`",
    "reponse_v": "Utiliser ECC pour des clés plus courtes à sécurité comparable",
    "reponse_f1": "Utiliser DES",
    "reponse_f2": "Utiliser MD5",
    "explication": "ECC offre une bonne sécurité avec des clés compactes."
  },
  {
    "id": 199,
    "question": "`Mini-TP cryptographie — non-répudiation\n\nSystème : API partenaire\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-419-69377\nDurée de protection requise : 13 ans\nVolume moyen : 22323 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-199`",
    "reponse_v": "Protéger la clé privée de signature et journaliser l'opération",
    "reponse_f1": "Partager la clé privée",
    "reponse_f2": "Chiffrer seulement les données",
    "explication": "La non-répudiation suppose une clé privée sous contrôle exclusif."
  },
  {
    "id": 200,
    "question": "`Mini-TP cryptographie — signature puis chiffrement\n\nSystème : messagerie interne\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-420-77296\nDurée de protection requise : 10 ans\nVolume moyen : 22340 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-200`",
    "reponse_v": "Signer puis chiffrer selon le protocole choisi",
    "reponse_f1": "Encoder en Base64",
    "reponse_f2": "Hasher sans clé",
    "explication": "Signature et chiffrement répondent à des objectifs distincts."
  },
  {
    "id": 201,
    "question": "`Mini-TP cryptographie — chaîne X.509\n\nSystème : application mobile\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-421-85215\nDurée de protection requise : 11 ans\nVolume moyen : 22357 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-201`",
    "reponse_v": "Valider chaque signature jusqu'à une racine de confiance",
    "reponse_f1": "Faire confiance uniquement à la date",
    "reponse_f2": "Ignorer les intermédiaires",
    "explication": "La confiance repose sur la chaîne complète."
  },
  {
    "id": 202,
    "question": "`Mini-TP cryptographie — SAN absent\n\nSystème : serveur d'administration\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-422-93134\nDurée de protection requise : 12 ans\nVolume moyen : 22374 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-202`",
    "reponse_v": "Refuser le certificat si le nom demandé n'est pas couvert",
    "reponse_f1": "Accepter grâce au CN uniquement dans tous les cas",
    "reponse_f2": "Ignorer le nom d'hôte",
    "explication": "Le nom doit correspondre à une identité du certificat."
  },
  {
    "id": 203,
    "question": "`Mini-TP cryptographie — clé privée compromise\n\nSystème : plateforme de signature\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-423-01053\nDurée de protection requise : 13 ans\nVolume moyen : 22391 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-203`",
    "reponse_v": "Révoquer le certificat et générer une nouvelle paire de clés",
    "reponse_f1": "Attendre l'expiration",
    "reponse_f2": "Publier la clé privée",
    "explication": "Une compromission impose révocation et remplacement."
  },
  {
    "id": 204,
    "question": "`Mini-TP cryptographie — OCSP\n\nSystème : VPN intersite\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-424-08972\nDurée de protection requise : 10 ans\nVolume moyen : 22408 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-204`",
    "reponse_v": "Interroger un répondeur OCSP pour l'état de révocation",
    "reponse_f1": "Interroger NTP",
    "reponse_f2": "Interroger DHCP",
    "explication": "OCSP fournit l'état d'un certificat."
  },
  {
    "id": 205,
    "question": "`Mini-TP cryptographie — CRL\n\nSystème : service de sauvegarde\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-425-16891\nDurée de protection requise : 11 ans\nVolume moyen : 22425 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-205`",
    "reponse_v": "Télécharger et vérifier la liste de révocation signée",
    "reponse_f1": "Utiliser une table ARP",
    "reponse_f2": "Utiliser DNS uniquement",
    "explication": "Une CRL recense les certificats révoqués."
  },
  {
    "id": 206,
    "question": "`Mini-TP cryptographie — CA intermédiaire\n\nSystème : registre de conteneurs\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-426-24810\nDurée de protection requise : 12 ans\nVolume moyen : 22442 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-206`",
    "reponse_v": "Utiliser une intermédiaire pour protéger la racine hors ligne",
    "reponse_f1": "Faire signer tous les certificats directement par une racine en ligne",
    "reponse_f2": "Supprimer la chaîne",
    "explication": "L'intermédiaire réduit l'exposition de la racine."
  },
  {
    "id": 207,
    "question": "`Mini-TP cryptographie — Basic Constraints\n\nSystème : portail citoyen\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-427-32729\nDurée de protection requise : 13 ans\nVolume moyen : 22459 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-207`",
    "reponse_v": "Mettre CA=FALSE pour un certificat d'entité finale",
    "reponse_f1": "Mettre CA=TRUE",
    "reponse_f2": "Supprimer l'extension systématiquement",
    "explication": "Basic Constraints distingue CA et entité finale."
  },
  {
    "id": 208,
    "question": "`Mini-TP cryptographie — Key Usage\n\nSystème : annuaire d'entreprise\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-428-40648\nDurée de protection requise : 10 ans\nVolume moyen : 22476 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-208`",
    "reponse_v": "Limiter les usages à ceux réellement nécessaires",
    "reponse_f1": "Autoriser tous les usages",
    "reponse_f2": "Ignorer l'extension",
    "explication": "Key Usage encadre les opérations permises."
  },
  {
    "id": 209,
    "question": "`Mini-TP cryptographie — certificate pinning\n\nSystème : plateforme e-commerce\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-429-48567\nDurée de protection requise : 11 ans\nVolume moyen : 22493 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-209`",
    "reponse_v": "Épingler une clé ou un certificat avec stratégie de rotation",
    "reponse_f1": "Épingler sans plan de renouvellement",
    "reponse_f2": "Accepter toute CA",
    "explication": "Le pinning réduit la surface de confiance mais exige une rotation maîtrisée."
  },
  {
    "id": 210,
    "question": "`Mini-TP cryptographie — certificat auto-signé\n\nSystème : service IoT\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-430-56486\nDurée de protection requise : 12 ans\nVolume moyen : 22510 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-210`",
    "reponse_v": "Ajouter explicitement un ancrage de confiance si l'usage est légitime",
    "reponse_f1": "Le considérer automatiquement public",
    "reponse_f2": "Ignorer toute vérification",
    "explication": "Un certificat auto-signé n'est pas fiable par défaut."
  },
  {
    "id": 211,
    "question": "`Mini-TP cryptographie — HSM\n\nSystème : système de paiement\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-431-64405\nDurée de protection requise : 13 ans\nVolume moyen : 22527 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-211`",
    "reponse_v": "Conserver la clé non exportable dans un HSM",
    "reponse_f1": "Stocker la clé en clair dans un fichier",
    "reponse_f2": "Placer la clé dans le dépôt Git",
    "explication": "Un HSM protège et utilise les clés sensibles."
  },
  {
    "id": 212,
    "question": "`Mini-TP cryptographie — rotation de clé\n\nSystème : outil de télémaintenance\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-432-72324\nDurée de protection requise : 10 ans\nVolume moyen : 22544 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-212`",
    "reponse_v": "Planifier la rotation et conserver les anciennes clés nécessaires",
    "reponse_f1": "Supprimer toutes les anciennes clés immédiatement",
    "reponse_f2": "Ne jamais faire tourner les clés",
    "explication": "La rotation doit préserver l'accès aux données historiques."
  },
  {
    "id": 213,
    "question": "`Mini-TP cryptographie — sauvegarde de clé maître\n\nSystème : portail bancaire\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-433-80243\nDurée de protection requise : 11 ans\nVolume moyen : 22561 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-213`",
    "reponse_v": "Conserver une copie chiffrée, séparée et testée",
    "reponse_f1": "Copier la clé en clair avec les données",
    "reponse_f2": "Ne jamais tester la restauration",
    "explication": "La sauvegarde de clé doit être protégée et restaurable."
  },
  {
    "id": 214,
    "question": "`Mini-TP cryptographie — envelope encryption\n\nSystème : API partenaire\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-434-88162\nDurée de protection requise : 12 ans\nVolume moyen : 22578 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-214`",
    "reponse_v": "Utiliser une clé de données protégée par une clé maître",
    "reponse_f1": "Utiliser une seule clé codée en dur",
    "reponse_f2": "Remplacer le chiffrement par un checksum",
    "explication": "Le chiffrement d'enveloppe sépare les rôles des clés."
  },
  {
    "id": 215,
    "question": "`Mini-TP cryptographie — génération de clé\n\nSystème : messagerie interne\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-435-96081\nDurée de protection requise : 13 ans\nVolume moyen : 22595 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-215`",
    "reponse_v": "Utiliser un CSPRNG",
    "reponse_f1": "Utiliser l'heure système seule",
    "reponse_f2": "Utiliser un compteur",
    "explication": "Les clés nécessitent une forte entropie."
  },
  {
    "id": 216,
    "question": "`Mini-TP cryptographie — destruction de clé\n\nSystème : application mobile\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-436-04000\nDurée de protection requise : 10 ans\nVolume moyen : 22612 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-216`",
    "reponse_v": "Effectuer une destruction cryptographique contrôlée et auditée",
    "reponse_f1": "Renommer la clé",
    "reponse_f2": "Masquer l'interface",
    "explication": "La destruction doit empêcher toute récupération."
  },
  {
    "id": 217,
    "question": "`Mini-TP cryptographie — KMS\n\nSystème : serveur d'administration\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-437-11919\nDurée de protection requise : 11 ans\nVolume moyen : 22629 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-217`",
    "reponse_v": "Centraliser politiques, rotation et audit dans un KMS",
    "reponse_f1": "Utiliser un serveur DNS",
    "reponse_f2": "Utiliser un fichier partagé",
    "explication": "Un KMS gère le cycle de vie des clés."
  },
  {
    "id": 218,
    "question": "`Mini-TP cryptographie — séparation des rôles\n\nSystème : plateforme de signature\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-438-19838\nDurée de protection requise : 12 ans\nVolume moyen : 22646 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-218`",
    "reponse_v": "Séparer création, activation et audit des clés",
    "reponse_f1": "Donner tous les droits à une seule personne",
    "reponse_f2": "Partager un compte administrateur",
    "explication": "La séparation des tâches réduit les abus."
  },
  {
    "id": 219,
    "question": "`Mini-TP cryptographie — compromission de clé\n\nSystème : VPN intersite\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-439-27757\nDurée de protection requise : 13 ans\nVolume moyen : 22663 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-219`",
    "reponse_v": "Désactiver la clé, la remplacer et analyser l'exposition",
    "reponse_f1": "Continuer jusqu'à expiration",
    "reponse_f2": "Publier la clé",
    "explication": "Une compromission exige confinement et rotation."
  },
  {
    "id": 220,
    "question": "`Mini-TP cryptographie — escrow de clés\n\nSystème : service de sauvegarde\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-440-35676\nDurée de protection requise : 10 ans\nVolume moyen : 22680 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-220`",
    "reponse_v": "Encadrer strictement l'accès au mécanisme de récupération",
    "reponse_f1": "Donner l'accès à tous les administrateurs",
    "reponse_f2": "Supprimer toute journalisation",
    "explication": "L'escrow concentre la confiance et doit être fortement contrôlé."
  },
  {
    "id": 221,
    "question": "`Mini-TP cryptographie — TLS 1.3\n\nSystème : registre de conteneurs\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-441-43595\nDurée de protection requise : 11 ans\nVolume moyen : 22697 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-221`",
    "reponse_v": "Privilégier TLS 1.3 si compatible",
    "reponse_f1": "Utiliser SSL 3.0",
    "reponse_f2": "Forcer TLS 1.0",
    "explication": "TLS 1.3 retire de nombreux mécanismes obsolètes."
  },
  {
    "id": 222,
    "question": "`Mini-TP cryptographie — mTLS\n\nSystème : portail citoyen\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-442-51514\nDurée de protection requise : 12 ans\nVolume moyen : 22714 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-222`",
    "reponse_v": "Présenter et vérifier des certificats côté client et serveur",
    "reponse_f1": "Vérifier uniquement le serveur",
    "reponse_f2": "Désactiver la validation",
    "explication": "mTLS authentifie les deux extrémités."
  },
  {
    "id": 223,
    "question": "`Mini-TP cryptographie — SSH par clé\n\nSystème : annuaire d'entreprise\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-443-59433\nDurée de protection requise : 13 ans\nVolume moyen : 22731 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-223`",
    "reponse_v": "Installer la clé publique sur le serveur et protéger la clé privée",
    "reponse_f1": "Installer la clé privée sur le serveur",
    "reponse_f2": "Partager la clé privée",
    "explication": "SSH vérifie la preuve produite avec la clé privée."
  },
  {
    "id": 224,
    "question": "`Mini-TP cryptographie — IPsec tunnel\n\nSystème : plateforme e-commerce\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-444-67352\nDurée de protection requise : 10 ans\nVolume moyen : 22748 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-224`",
    "reponse_v": "Utiliser le mode tunnel entre passerelles",
    "reponse_f1": "Utiliser uniquement le mode transport pour deux réseaux",
    "reponse_f2": "Utiliser ARP",
    "explication": "Le mode tunnel encapsule le paquet IP complet."
  },
  {
    "id": 225,
    "question": "`Mini-TP cryptographie — IPsec ESP\n\nSystème : service IoT\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-445-75271\nDurée de protection requise : 11 ans\nVolume moyen : 22765 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-225`",
    "reponse_v": "Utiliser ESP pour confidentialité et intégrité",
    "reponse_f1": "Utiliser ICMP",
    "reponse_f2": "Utiliser DHCP",
    "explication": "ESP protège le trafic IP."
  },
  {
    "id": 226,
    "question": "`Mini-TP cryptographie — S/MIME\n\nSystème : système de paiement\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-446-83190\nDurée de protection requise : 12 ans\nVolume moyen : 22782 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-226`",
    "reponse_v": "Utiliser S/MIME avec des certificats X.509",
    "reponse_f1": "Utiliser SNMP",
    "reponse_f2": "Utiliser NTP",
    "explication": "S/MIME sécurise les courriels avec X.509."
  },
  {
    "id": 227,
    "question": "`Mini-TP cryptographie — OpenPGP\n\nSystème : outil de télémaintenance\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-447-91109\nDurée de protection requise : 13 ans\nVolume moyen : 22799 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-227`",
    "reponse_v": "Utiliser le modèle de confiance OpenPGP adapté",
    "reponse_f1": "Utiliser uniquement une CA racine obligatoire",
    "reponse_f2": "Utiliser DHCP",
    "explication": "OpenPGP peut s'appuyer sur une toile de confiance."
  },
  {
    "id": 228,
    "question": "`Mini-TP cryptographie — TLS downgrade\n\nSystème : portail bancaire\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-448-99028\nDurée de protection requise : 10 ans\nVolume moyen : 22816 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-228`",
    "reponse_v": "Désactiver les versions et suites faibles",
    "reponse_f1": "Autoriser toutes les versions",
    "reponse_f2": "Désactiver les certificats",
    "explication": "La restriction de négociation évite les downgrades."
  },
  {
    "id": 229,
    "question": "`Mini-TP cryptographie — TLS session resumption\n\nSystème : API partenaire\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-449-06947\nDurée de protection requise : 11 ans\nVolume moyen : 22833 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-229`",
    "reponse_v": "Utiliser tickets ou reprise de session",
    "reponse_f1": "Émettre un certificat à chaque requête",
    "reponse_f2": "Désactiver le chiffrement",
    "explication": "La reprise réduit le coût des connexions répétées."
  },
  {
    "id": 230,
    "question": "`Mini-TP cryptographie — validation de certificat TLS\n\nSystème : messagerie interne\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-450-14866\nDurée de protection requise : 12 ans\nVolume moyen : 22850 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-230`",
    "reponse_v": "Vérifier chaîne, dates, usages, nom et révocation selon la politique",
    "reponse_f1": "Vérifier uniquement la date",
    "reponse_f2": "Accepter tout certificat chiffré",
    "explication": "Une validation TLS complète couvre plusieurs propriétés."
  },
  {
    "id": 231,
    "question": "`Mini-TP cryptographie — FIPS 140-3\n\nSystème : application mobile\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-451-22785\nDurée de protection requise : 13 ans\nVolume moyen : 22867 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-231`",
    "reponse_v": "Utiliser un module validé FIPS 140-3 si l'exigence s'applique",
    "reponse_f1": "Utiliser HTTP/1.1",
    "reponse_f2": "Utiliser IEEE 802.1Q",
    "explication": "FIPS 140-3 concerne les modules cryptographiques."
  },
  {
    "id": 232,
    "question": "`Mini-TP cryptographie — ISO/IEC 27001\n\nSystème : serveur d'administration\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-452-30704\nDurée de protection requise : 10 ans\nVolume moyen : 22884 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-232`",
    "reponse_v": "Structurer un SMSI selon ISO/IEC 27001",
    "reponse_f1": "Utiliser RFC 1918",
    "reponse_f2": "Utiliser SMTP",
    "explication": "ISO/IEC 27001 définit les exigences d'un SMSI."
  },
  {
    "id": 233,
    "question": "`Mini-TP cryptographie — PCI DSS\n\nSystème : plateforme de signature\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-453-38623\nDurée de protection requise : 11 ans\nVolume moyen : 22901 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-233`",
    "reponse_v": "Appliquer PCI DSS pour les données de carte",
    "reponse_f1": "Appliquer uniquement DNSSEC",
    "reponse_f2": "Appliquer BGP",
    "explication": "PCI DSS encadre les environnements de paiement."
  },
  {
    "id": 234,
    "question": "`Mini-TP cryptographie — crypto-agilité\n\nSystème : VPN intersite\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-454-46542\nDurée de protection requise : 12 ans\nVolume moyen : 22918 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-234`",
    "reponse_v": "Prévoir le remplacement des algorithmes et formats",
    "reponse_f1": "Figer tous les choix définitivement",
    "reponse_f2": "Supprimer les identifiants d'algorithme",
    "explication": "La crypto-agilité facilite les migrations."
  },
  {
    "id": 235,
    "question": "`Mini-TP cryptographie — MD5 obsolète\n\nSystème : service de sauvegarde\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-455-54461\nDurée de protection requise : 13 ans\nVolume moyen : 22935 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-235`",
    "reponse_v": "Remplacer MD5 pour les usages de sécurité",
    "reponse_f1": "Ajouter Base64 à MD5",
    "reponse_f2": "Conserver MD5 car il est rapide",
    "explication": "MD5 présente des collisions pratiques."
  },
  {
    "id": 236,
    "question": "`Mini-TP cryptographie — 3DES obsolète\n\nSystème : registre de conteneurs\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-456-62380\nDurée de protection requise : 10 ans\nVolume moyen : 22952 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-236`",
    "reponse_v": "Remplacer 3DES dans les nouveaux systèmes",
    "reponse_f1": "Préférer 3DES à AES",
    "reponse_f2": "Utiliser DES simple",
    "explication": "3DES est obsolète et limité par sa taille de bloc."
  },
  {
    "id": 237,
    "question": "`Mini-TP cryptographie — politique cryptographique\n\nSystème : portail citoyen\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-457-70299\nDurée de protection requise : 11 ans\nVolume moyen : 22969 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-237`",
    "reponse_v": "Formaliser algorithmes, tailles, rotation, stockage et révocation",
    "reponse_f1": "Rédiger uniquement un plan IP",
    "reponse_f2": "Ne rien documenter",
    "explication": "Une politique rend les choix cohérents et auditables."
  },
  {
    "id": 238,
    "question": "`Mini-TP cryptographie — inventaire cryptographique\n\nSystème : annuaire d'entreprise\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-458-78218\nDurée de protection requise : 12 ans\nVolume moyen : 22986 opérations cryptographiques/jour\nIndisponibilité maximale : 11 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-238`",
    "reponse_v": "Recenser certificats, clés, algorithmes et dépendances",
    "reponse_f1": "Inventorier seulement les serveurs",
    "reponse_f2": "Ignorer les certificats internes",
    "explication": "L'inventaire est indispensable à la maîtrise du risque."
  },
  {
    "id": 239,
    "question": "`Mini-TP cryptographie — durée de protection\n\nSystème : plateforme e-commerce\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-459-86137\nDurée de protection requise : 13 ans\nVolume moyen : 23003 opérations cryptographiques/jour\nIndisponibilité maximale : 12 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-239`",
    "reponse_v": "Adapter le niveau cryptographique à la durée de sensibilité",
    "reponse_f1": "Choisir toujours la plus petite clé",
    "reponse_f2": "Choisir selon le nom du service",
    "explication": "La durée de protection influe sur les choix."
  },
  {
    "id": 240,
    "question": "`Mini-TP cryptographie — audit cryptographique\n\nSystème : service IoT\nContexte : infrastructure réglementée\nIdentifiant de clé ou certificat : K-460-94056\nDurée de protection requise : 10 ans\nVolume moyen : 23020 opérations cryptographiques/jour\nIndisponibilité maximale : 10 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-240`",
    "reponse_v": "Prioriser les écarts et suivre un plan de remédiation",
    "reponse_f1": "Masquer les alertes",
    "reponse_f2": "Renouveler uniquement les certificats visibles",
    "explication": "Un audit doit conduire à des corrections traçables."
  },
  {
    "id": 241,
    "question": "`Mini-TP cryptographie — AES-GCM avec nonce unique\n\nSystème : API partenaire\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-501-31564\nDurée de protection requise : 21 ans\nVolume moyen : 65017 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-241`",
    "reponse_v": "Utiliser AES-GCM en garantissant l'unicité du nonce",
    "reponse_f1": "Utiliser AES-ECB",
    "reponse_f2": "Réutiliser le même nonce",
    "explication": "GCM fournit confidentialité et intégrité si le nonce n'est pas réutilisé."
  },
  {
    "id": 242,
    "question": "`Mini-TP cryptographie — réutilisation de nonce GCM\n\nSystème : messagerie interne\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-502-39483\nDurée de protection requise : 22 ans\nVolume moyen : 65034 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-242`",
    "reponse_v": "Changer immédiatement la clé et corriger la génération des nonces",
    "reponse_f1": "Continuer à utiliser la même paire clé/nonce",
    "reponse_f2": "Ajouter Base64",
    "explication": "La réutilisation d'un nonce en GCM compromet la sécurité."
  },
  {
    "id": 243,
    "question": "`Mini-TP cryptographie — stockage de mots de passe\n\nSystème : application mobile\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-503-47402\nDurée de protection requise : 23 ans\nVolume moyen : 65051 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-243`",
    "reponse_v": "Utiliser Argon2id avec sel unique et paramètres robustes",
    "reponse_f1": "Utiliser SHA-256 seul sans sel",
    "reponse_f2": "Chiffrer les mots de passe avec une clé commune",
    "explication": "Les mots de passe doivent être dérivés avec une KDF lente."
  },
  {
    "id": 244,
    "question": "`Mini-TP cryptographie — intégrité avec secret partagé\n\nSystème : serveur d'administration\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-504-55321\nDurée de protection requise : 20 ans\nVolume moyen : 65068 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-244`",
    "reponse_v": "Utiliser HMAC-SHA-256 ou équivalent",
    "reponse_f1": "Utiliser un checksum CRC",
    "reponse_f2": "Utiliser seulement Base64",
    "explication": "HMAC fournit authenticité et intégrité avec un secret."
  },
  {
    "id": 245,
    "question": "`Mini-TP cryptographie — chiffrement de gros volumes\n\nSystème : plateforme de signature\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-505-63240\nDurée de protection requise : 21 ans\nVolume moyen : 65085 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-245`",
    "reponse_v": "Utiliser un chiffrement symétrique moderne",
    "reponse_f1": "Utiliser RSA directement sur tout le flux",
    "reponse_f2": "Utiliser un simple hachage",
    "explication": "Le chiffrement symétrique est adapté aux gros volumes."
  },
  {
    "id": 246,
    "question": "`Mini-TP cryptographie — motifs visibles avec ECB\n\nSystème : VPN intersite\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-506-71159\nDurée de protection requise : 22 ans\nVolume moyen : 65102 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-246`",
    "reponse_v": "Remplacer ECB par un mode authentifié comme GCM",
    "reponse_f1": "Conserver ECB et compresser",
    "reponse_f2": "Ajouter un sel au ciphertext",
    "explication": "ECB révèle les motifs répétitifs."
  },
  {
    "id": 247,
    "question": "`Mini-TP cryptographie — dérivation depuis un mot de passe\n\nSystème : service de sauvegarde\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-507-79078\nDurée de protection requise : 23 ans\nVolume moyen : 65119 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-247`",
    "reponse_v": "Utiliser une KDF dédiée avec sel et coût adapté",
    "reponse_f1": "Utiliser directement le mot de passe comme clé",
    "reponse_f2": "Hasher une seule fois sans sel",
    "explication": "Une KDF ralentit les attaques hors ligne."
  },
  {
    "id": 248,
    "question": "`Mini-TP cryptographie — vérification d'intégrité sans secret\n\nSystème : registre de conteneurs\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-508-86997\nDurée de protection requise : 20 ans\nVolume moyen : 65136 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-248`",
    "reponse_v": "Utiliser une fonction de hachage moderne",
    "reponse_f1": "Utiliser un chiffrement réversible",
    "reponse_f2": "Utiliser un encodage hexadécimal",
    "explication": "Le hachage détecte les modifications."
  },
  {
    "id": 249,
    "question": "`Mini-TP cryptographie — sel de mot de passe\n\nSystème : portail citoyen\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-509-94916\nDurée de protection requise : 21 ans\nVolume moyen : 65153 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-249`",
    "reponse_v": "Générer un sel aléatoire distinct par mot de passe",
    "reponse_f1": "Réutiliser un sel global fixe",
    "reponse_f2": "Supprimer le sel",
    "explication": "Un sel unique empêche les hachages identiques."
  },
  {
    "id": 250,
    "question": "`Mini-TP cryptographie — clé de session éphémère\n\nSystème : annuaire d'entreprise\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-510-02835\nDurée de protection requise : 22 ans\nVolume moyen : 65170 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-250`",
    "reponse_v": "Détruire la clé après usage et ne pas la réutiliser",
    "reponse_f1": "Conserver la clé indéfiniment",
    "reponse_f2": "Partager la clé entre toutes les sessions",
    "explication": "Une clé éphémère limite l'impact d'une compromission."
  },
  {
    "id": 251,
    "question": "`Mini-TP cryptographie — chiffrement pour un destinataire\n\nSystème : plateforme e-commerce\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-511-10754\nDurée de protection requise : 23 ans\nVolume moyen : 65187 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-251`",
    "reponse_v": "Chiffrer avec la clé publique du destinataire",
    "reponse_f1": "Chiffrer avec sa clé privée",
    "reponse_f2": "Signer avec sa clé publique",
    "explication": "Seule la clé privée correspondante permet le déchiffrement."
  },
  {
    "id": 252,
    "question": "`Mini-TP cryptographie — signature numérique\n\nSystème : service IoT\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-512-18673\nDurée de protection requise : 20 ans\nVolume moyen : 65204 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-252`",
    "reponse_v": "Signer l'empreinte avec la clé privée",
    "reponse_f1": "Signer avec la clé publique",
    "reponse_f2": "Hasher sans clé et appeler cela une signature",
    "explication": "La clé privée produit la signature vérifiée par la clé publique."
  },
  {
    "id": 253,
    "question": "`Mini-TP cryptographie — forward secrecy\n\nSystème : système de paiement\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-513-26592\nDurée de protection requise : 21 ans\nVolume moyen : 65221 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-253`",
    "reponse_v": "Utiliser un échange éphémère comme ECDHE",
    "reponse_f1": "Utiliser une clé RSA statique pour toutes les sessions",
    "reponse_f2": "Réutiliser un secret permanent",
    "explication": "ECDHE protège les anciennes sessions si la clé long terme est compromise."
  },
  {
    "id": 254,
    "question": "`Mini-TP cryptographie — chiffrement hybride\n\nSystème : outil de télémaintenance\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-514-34511\nDurée de protection requise : 22 ans\nVolume moyen : 65238 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-254`",
    "reponse_v": "Chiffrer les données avec une clé symétrique puis protéger cette clé asymétriquement",
    "reponse_f1": "Chiffrer tout le fichier avec RSA",
    "reponse_f2": "Hasher le fichier uniquement",
    "explication": "Le chiffrement hybride combine efficacité et distribution sécurisée."
  },
  {
    "id": 255,
    "question": "`Mini-TP cryptographie — Diffie-Hellman non authentifié\n\nSystème : portail bancaire\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-515-42430\nDurée de protection requise : 23 ans\nVolume moyen : 65255 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-255`",
    "reponse_v": "Ajouter une authentification pour éviter un MITM",
    "reponse_f1": "Considérer DH seul comme authentifié",
    "reponse_f2": "Publier le secret partagé",
    "explication": "DH sans authentification reste vulnérable à l'interposition."
  },
  {
    "id": 256,
    "question": "`Mini-TP cryptographie — RSA-OAEP\n\nSystème : API partenaire\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-516-50349\nDurée de protection requise : 20 ans\nVolume moyen : 65272 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-256`",
    "reponse_v": "Utiliser OAEP pour le chiffrement RSA",
    "reponse_f1": "Utiliser RSA brut",
    "reponse_f2": "Utiliser RSA-PSS pour chiffrer",
    "explication": "OAEP est un padding adapté au chiffrement RSA."
  },
  {
    "id": 257,
    "question": "`Mini-TP cryptographie — RSA-PSS\n\nSystème : messagerie interne\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-517-58268\nDurée de protection requise : 21 ans\nVolume moyen : 65289 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-257`",
    "reponse_v": "Utiliser PSS pour la signature RSA",
    "reponse_f1": "Utiliser OAEP pour signer",
    "reponse_f2": "Utiliser AES-CBC",
    "explication": "PSS est conçu pour les signatures RSA."
  },
  {
    "id": 258,
    "question": "`Mini-TP cryptographie — courbes elliptiques\n\nSystème : application mobile\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-518-66187\nDurée de protection requise : 22 ans\nVolume moyen : 65306 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-258`",
    "reponse_v": "Utiliser ECC pour des clés plus courtes à sécurité comparable",
    "reponse_f1": "Utiliser DES",
    "reponse_f2": "Utiliser MD5",
    "explication": "ECC offre une bonne sécurité avec des clés compactes."
  },
  {
    "id": 259,
    "question": "`Mini-TP cryptographie — non-répudiation\n\nSystème : serveur d'administration\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-519-74106\nDurée de protection requise : 23 ans\nVolume moyen : 65323 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-259`",
    "reponse_v": "Protéger la clé privée de signature et journaliser l'opération",
    "reponse_f1": "Partager la clé privée",
    "reponse_f2": "Chiffrer seulement les données",
    "explication": "La non-répudiation suppose une clé privée sous contrôle exclusif."
  },
  {
    "id": 260,
    "question": "`Mini-TP cryptographie — signature puis chiffrement\n\nSystème : plateforme de signature\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-520-82025\nDurée de protection requise : 20 ans\nVolume moyen : 65340 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-260`",
    "reponse_v": "Signer puis chiffrer selon le protocole choisi",
    "reponse_f1": "Encoder en Base64",
    "reponse_f2": "Hasher sans clé",
    "explication": "Signature et chiffrement répondent à des objectifs distincts."
  },
  {
    "id": 261,
    "question": "`Mini-TP cryptographie — chaîne X.509\n\nSystème : VPN intersite\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-521-89944\nDurée de protection requise : 21 ans\nVolume moyen : 65357 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-261`",
    "reponse_v": "Valider chaque signature jusqu'à une racine de confiance",
    "reponse_f1": "Faire confiance uniquement à la date",
    "reponse_f2": "Ignorer les intermédiaires",
    "explication": "La confiance repose sur la chaîne complète."
  },
  {
    "id": 262,
    "question": "`Mini-TP cryptographie — SAN absent\n\nSystème : service de sauvegarde\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-522-97863\nDurée de protection requise : 22 ans\nVolume moyen : 65374 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-262`",
    "reponse_v": "Refuser le certificat si le nom demandé n'est pas couvert",
    "reponse_f1": "Accepter grâce au CN uniquement dans tous les cas",
    "reponse_f2": "Ignorer le nom d'hôte",
    "explication": "Le nom doit correspondre à une identité du certificat."
  },
  {
    "id": 263,
    "question": "`Mini-TP cryptographie — clé privée compromise\n\nSystème : registre de conteneurs\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-523-05782\nDurée de protection requise : 23 ans\nVolume moyen : 65391 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-263`",
    "reponse_v": "Révoquer le certificat et générer une nouvelle paire de clés",
    "reponse_f1": "Attendre l'expiration",
    "reponse_f2": "Publier la clé privée",
    "explication": "Une compromission impose révocation et remplacement."
  },
  {
    "id": 264,
    "question": "`Mini-TP cryptographie — OCSP\n\nSystème : portail citoyen\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-524-13701\nDurée de protection requise : 20 ans\nVolume moyen : 65408 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-264`",
    "reponse_v": "Interroger un répondeur OCSP pour l'état de révocation",
    "reponse_f1": "Interroger NTP",
    "reponse_f2": "Interroger DHCP",
    "explication": "OCSP fournit l'état d'un certificat."
  },
  {
    "id": 265,
    "question": "`Mini-TP cryptographie — CRL\n\nSystème : annuaire d'entreprise\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-525-21620\nDurée de protection requise : 21 ans\nVolume moyen : 65425 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-265`",
    "reponse_v": "Télécharger et vérifier la liste de révocation signée",
    "reponse_f1": "Utiliser une table ARP",
    "reponse_f2": "Utiliser DNS uniquement",
    "explication": "Une CRL recense les certificats révoqués."
  },
  {
    "id": 266,
    "question": "`Mini-TP cryptographie — CA intermédiaire\n\nSystème : plateforme e-commerce\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-526-29539\nDurée de protection requise : 22 ans\nVolume moyen : 65442 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-266`",
    "reponse_v": "Utiliser une intermédiaire pour protéger la racine hors ligne",
    "reponse_f1": "Faire signer tous les certificats directement par une racine en ligne",
    "reponse_f2": "Supprimer la chaîne",
    "explication": "L'intermédiaire réduit l'exposition de la racine."
  },
  {
    "id": 267,
    "question": "`Mini-TP cryptographie — Basic Constraints\n\nSystème : service IoT\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-527-37458\nDurée de protection requise : 23 ans\nVolume moyen : 65459 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-267`",
    "reponse_v": "Mettre CA=FALSE pour un certificat d'entité finale",
    "reponse_f1": "Mettre CA=TRUE",
    "reponse_f2": "Supprimer l'extension systématiquement",
    "explication": "Basic Constraints distingue CA et entité finale."
  },
  {
    "id": 268,
    "question": "`Mini-TP cryptographie — Key Usage\n\nSystème : système de paiement\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-528-45377\nDurée de protection requise : 20 ans\nVolume moyen : 65476 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-268`",
    "reponse_v": "Limiter les usages à ceux réellement nécessaires",
    "reponse_f1": "Autoriser tous les usages",
    "reponse_f2": "Ignorer l'extension",
    "explication": "Key Usage encadre les opérations permises."
  },
  {
    "id": 269,
    "question": "`Mini-TP cryptographie — certificate pinning\n\nSystème : outil de télémaintenance\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-529-53296\nDurée de protection requise : 21 ans\nVolume moyen : 65493 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-269`",
    "reponse_v": "Épingler une clé ou un certificat avec stratégie de rotation",
    "reponse_f1": "Épingler sans plan de renouvellement",
    "reponse_f2": "Accepter toute CA",
    "explication": "Le pinning réduit la surface de confiance mais exige une rotation maîtrisée."
  },
  {
    "id": 270,
    "question": "`Mini-TP cryptographie — certificat auto-signé\n\nSystème : portail bancaire\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-530-61215\nDurée de protection requise : 22 ans\nVolume moyen : 65510 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-270`",
    "reponse_v": "Ajouter explicitement un ancrage de confiance si l'usage est légitime",
    "reponse_f1": "Le considérer automatiquement public",
    "reponse_f2": "Ignorer toute vérification",
    "explication": "Un certificat auto-signé n'est pas fiable par défaut."
  },
  {
    "id": 271,
    "question": "`Mini-TP cryptographie — HSM\n\nSystème : API partenaire\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-531-69134\nDurée de protection requise : 23 ans\nVolume moyen : 65527 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-271`",
    "reponse_v": "Conserver la clé non exportable dans un HSM",
    "reponse_f1": "Stocker la clé en clair dans un fichier",
    "reponse_f2": "Placer la clé dans le dépôt Git",
    "explication": "Un HSM protège et utilise les clés sensibles."
  },
  {
    "id": 272,
    "question": "`Mini-TP cryptographie — rotation de clé\n\nSystème : messagerie interne\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-532-77053\nDurée de protection requise : 20 ans\nVolume moyen : 65544 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-272`",
    "reponse_v": "Planifier la rotation et conserver les anciennes clés nécessaires",
    "reponse_f1": "Supprimer toutes les anciennes clés immédiatement",
    "reponse_f2": "Ne jamais faire tourner les clés",
    "explication": "La rotation doit préserver l'accès aux données historiques."
  },
  {
    "id": 273,
    "question": "`Mini-TP cryptographie — sauvegarde de clé maître\n\nSystème : application mobile\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-533-84972\nDurée de protection requise : 21 ans\nVolume moyen : 65561 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-273`",
    "reponse_v": "Conserver une copie chiffrée, séparée et testée",
    "reponse_f1": "Copier la clé en clair avec les données",
    "reponse_f2": "Ne jamais tester la restauration",
    "explication": "La sauvegarde de clé doit être protégée et restaurable."
  },
  {
    "id": 274,
    "question": "`Mini-TP cryptographie — envelope encryption\n\nSystème : serveur d'administration\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-534-92891\nDurée de protection requise : 22 ans\nVolume moyen : 65578 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-274`",
    "reponse_v": "Utiliser une clé de données protégée par une clé maître",
    "reponse_f1": "Utiliser une seule clé codée en dur",
    "reponse_f2": "Remplacer le chiffrement par un checksum",
    "explication": "Le chiffrement d'enveloppe sépare les rôles des clés."
  },
  {
    "id": 275,
    "question": "`Mini-TP cryptographie — génération de clé\n\nSystème : plateforme de signature\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-535-00810\nDurée de protection requise : 23 ans\nVolume moyen : 65595 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-275`",
    "reponse_v": "Utiliser un CSPRNG",
    "reponse_f1": "Utiliser l'heure système seule",
    "reponse_f2": "Utiliser un compteur",
    "explication": "Les clés nécessitent une forte entropie."
  },
  {
    "id": 276,
    "question": "`Mini-TP cryptographie — destruction de clé\n\nSystème : VPN intersite\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-536-08729\nDurée de protection requise : 20 ans\nVolume moyen : 65612 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-276`",
    "reponse_v": "Effectuer une destruction cryptographique contrôlée et auditée",
    "reponse_f1": "Renommer la clé",
    "reponse_f2": "Masquer l'interface",
    "explication": "La destruction doit empêcher toute récupération."
  },
  {
    "id": 277,
    "question": "`Mini-TP cryptographie — KMS\n\nSystème : service de sauvegarde\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-537-16648\nDurée de protection requise : 21 ans\nVolume moyen : 65629 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-277`",
    "reponse_v": "Centraliser politiques, rotation et audit dans un KMS",
    "reponse_f1": "Utiliser un serveur DNS",
    "reponse_f2": "Utiliser un fichier partagé",
    "explication": "Un KMS gère le cycle de vie des clés."
  },
  {
    "id": 278,
    "question": "`Mini-TP cryptographie — séparation des rôles\n\nSystème : registre de conteneurs\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-538-24567\nDurée de protection requise : 22 ans\nVolume moyen : 65646 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-278`",
    "reponse_v": "Séparer création, activation et audit des clés",
    "reponse_f1": "Donner tous les droits à une seule personne",
    "reponse_f2": "Partager un compte administrateur",
    "explication": "La séparation des tâches réduit les abus."
  },
  {
    "id": 279,
    "question": "`Mini-TP cryptographie — compromission de clé\n\nSystème : portail citoyen\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-539-32486\nDurée de protection requise : 23 ans\nVolume moyen : 65663 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-279`",
    "reponse_v": "Désactiver la clé, la remplacer et analyser l'exposition",
    "reponse_f1": "Continuer jusqu'à expiration",
    "reponse_f2": "Publier la clé",
    "explication": "Une compromission exige confinement et rotation."
  },
  {
    "id": 280,
    "question": "`Mini-TP cryptographie — escrow de clés\n\nSystème : annuaire d'entreprise\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-540-40405\nDurée de protection requise : 20 ans\nVolume moyen : 65680 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-280`",
    "reponse_v": "Encadrer strictement l'accès au mécanisme de récupération",
    "reponse_f1": "Donner l'accès à tous les administrateurs",
    "reponse_f2": "Supprimer toute journalisation",
    "explication": "L'escrow concentre la confiance et doit être fortement contrôlé."
  },
  {
    "id": 281,
    "question": "`Mini-TP cryptographie — TLS 1.3\n\nSystème : plateforme e-commerce\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-541-48324\nDurée de protection requise : 21 ans\nVolume moyen : 65697 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-281`",
    "reponse_v": "Privilégier TLS 1.3 si compatible",
    "reponse_f1": "Utiliser SSL 3.0",
    "reponse_f2": "Forcer TLS 1.0",
    "explication": "TLS 1.3 retire de nombreux mécanismes obsolètes."
  },
  {
    "id": 282,
    "question": "`Mini-TP cryptographie — mTLS\n\nSystème : service IoT\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-542-56243\nDurée de protection requise : 22 ans\nVolume moyen : 65714 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-282`",
    "reponse_v": "Présenter et vérifier des certificats côté client et serveur",
    "reponse_f1": "Vérifier uniquement le serveur",
    "reponse_f2": "Désactiver la validation",
    "explication": "mTLS authentifie les deux extrémités."
  },
  {
    "id": 283,
    "question": "`Mini-TP cryptographie — SSH par clé\n\nSystème : système de paiement\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-543-64162\nDurée de protection requise : 23 ans\nVolume moyen : 65731 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-283`",
    "reponse_v": "Installer la clé publique sur le serveur et protéger la clé privée",
    "reponse_f1": "Installer la clé privée sur le serveur",
    "reponse_f2": "Partager la clé privée",
    "explication": "SSH vérifie la preuve produite avec la clé privée."
  },
  {
    "id": 284,
    "question": "`Mini-TP cryptographie — IPsec tunnel\n\nSystème : outil de télémaintenance\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-544-72081\nDurée de protection requise : 20 ans\nVolume moyen : 65748 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-284`",
    "reponse_v": "Utiliser le mode tunnel entre passerelles",
    "reponse_f1": "Utiliser uniquement le mode transport pour deux réseaux",
    "reponse_f2": "Utiliser ARP",
    "explication": "Le mode tunnel encapsule le paquet IP complet."
  },
  {
    "id": 285,
    "question": "`Mini-TP cryptographie — IPsec ESP\n\nSystème : portail bancaire\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-545-80000\nDurée de protection requise : 21 ans\nVolume moyen : 65765 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-285`",
    "reponse_v": "Utiliser ESP pour confidentialité et intégrité",
    "reponse_f1": "Utiliser ICMP",
    "reponse_f2": "Utiliser DHCP",
    "explication": "ESP protège le trafic IP."
  },
  {
    "id": 286,
    "question": "`Mini-TP cryptographie — S/MIME\n\nSystème : API partenaire\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-546-87919\nDurée de protection requise : 22 ans\nVolume moyen : 65782 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-286`",
    "reponse_v": "Utiliser S/MIME avec des certificats X.509",
    "reponse_f1": "Utiliser SNMP",
    "reponse_f2": "Utiliser NTP",
    "explication": "S/MIME sécurise les courriels avec X.509."
  },
  {
    "id": 287,
    "question": "`Mini-TP cryptographie — OpenPGP\n\nSystème : messagerie interne\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-547-95838\nDurée de protection requise : 23 ans\nVolume moyen : 65799 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-287`",
    "reponse_v": "Utiliser le modèle de confiance OpenPGP adapté",
    "reponse_f1": "Utiliser uniquement une CA racine obligatoire",
    "reponse_f2": "Utiliser DHCP",
    "explication": "OpenPGP peut s'appuyer sur une toile de confiance."
  },
  {
    "id": 288,
    "question": "`Mini-TP cryptographie — TLS downgrade\n\nSystème : application mobile\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-548-03757\nDurée de protection requise : 20 ans\nVolume moyen : 65816 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-288`",
    "reponse_v": "Désactiver les versions et suites faibles",
    "reponse_f1": "Autoriser toutes les versions",
    "reponse_f2": "Désactiver les certificats",
    "explication": "La restriction de négociation évite les downgrades."
  },
  {
    "id": 289,
    "question": "`Mini-TP cryptographie — TLS session resumption\n\nSystème : serveur d'administration\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-549-11676\nDurée de protection requise : 21 ans\nVolume moyen : 65833 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-289`",
    "reponse_v": "Utiliser tickets ou reprise de session",
    "reponse_f1": "Émettre un certificat à chaque requête",
    "reponse_f2": "Désactiver le chiffrement",
    "explication": "La reprise réduit le coût des connexions répétées."
  },
  {
    "id": 290,
    "question": "`Mini-TP cryptographie — validation de certificat TLS\n\nSystème : plateforme de signature\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-550-19595\nDurée de protection requise : 22 ans\nVolume moyen : 65850 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-290`",
    "reponse_v": "Vérifier chaîne, dates, usages, nom et révocation selon la politique",
    "reponse_f1": "Vérifier uniquement la date",
    "reponse_f2": "Accepter tout certificat chiffré",
    "explication": "Une validation TLS complète couvre plusieurs propriétés."
  },
  {
    "id": 291,
    "question": "`Mini-TP cryptographie — FIPS 140-3\n\nSystème : VPN intersite\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-551-27514\nDurée de protection requise : 23 ans\nVolume moyen : 65867 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-291`",
    "reponse_v": "Utiliser un module validé FIPS 140-3 si l'exigence s'applique",
    "reponse_f1": "Utiliser HTTP/1.1",
    "reponse_f2": "Utiliser IEEE 802.1Q",
    "explication": "FIPS 140-3 concerne les modules cryptographiques."
  },
  {
    "id": 292,
    "question": "`Mini-TP cryptographie — ISO/IEC 27001\n\nSystème : service de sauvegarde\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-552-35433\nDurée de protection requise : 20 ans\nVolume moyen : 65884 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-292`",
    "reponse_v": "Structurer un SMSI selon ISO/IEC 27001",
    "reponse_f1": "Utiliser RFC 1918",
    "reponse_f2": "Utiliser SMTP",
    "explication": "ISO/IEC 27001 définit les exigences d'un SMSI."
  },
  {
    "id": 293,
    "question": "`Mini-TP cryptographie — PCI DSS\n\nSystème : registre de conteneurs\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-553-43352\nDurée de protection requise : 21 ans\nVolume moyen : 65901 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-293`",
    "reponse_v": "Appliquer PCI DSS pour les données de carte",
    "reponse_f1": "Appliquer uniquement DNSSEC",
    "reponse_f2": "Appliquer BGP",
    "explication": "PCI DSS encadre les environnements de paiement."
  },
  {
    "id": 294,
    "question": "`Mini-TP cryptographie — crypto-agilité\n\nSystème : portail citoyen\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-554-51271\nDurée de protection requise : 22 ans\nVolume moyen : 65918 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-294`",
    "reponse_v": "Prévoir le remplacement des algorithmes et formats",
    "reponse_f1": "Figer tous les choix définitivement",
    "reponse_f2": "Supprimer les identifiants d'algorithme",
    "explication": "La crypto-agilité facilite les migrations."
  },
  {
    "id": 295,
    "question": "`Mini-TP cryptographie — MD5 obsolète\n\nSystème : annuaire d'entreprise\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-555-59190\nDurée de protection requise : 23 ans\nVolume moyen : 65935 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-295`",
    "reponse_v": "Remplacer MD5 pour les usages de sécurité",
    "reponse_f1": "Ajouter Base64 à MD5",
    "reponse_f2": "Conserver MD5 car il est rapide",
    "explication": "MD5 présente des collisions pratiques."
  },
  {
    "id": 296,
    "question": "`Mini-TP cryptographie — 3DES obsolète\n\nSystème : plateforme e-commerce\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-556-67109\nDurée de protection requise : 20 ans\nVolume moyen : 65952 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-296`",
    "reponse_v": "Remplacer 3DES dans les nouveaux systèmes",
    "reponse_f1": "Préférer 3DES à AES",
    "reponse_f2": "Utiliser DES simple",
    "explication": "3DES est obsolète et limité par sa taille de bloc."
  },
  {
    "id": 297,
    "question": "`Mini-TP cryptographie — politique cryptographique\n\nSystème : service IoT\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-557-75028\nDurée de protection requise : 21 ans\nVolume moyen : 65969 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-297`",
    "reponse_v": "Formaliser algorithmes, tailles, rotation, stockage et révocation",
    "reponse_f1": "Rédiger uniquement un plan IP",
    "reponse_f2": "Ne rien documenter",
    "explication": "Une politique rend les choix cohérents et auditables."
  },
  {
    "id": 298,
    "question": "`Mini-TP cryptographie — inventaire cryptographique\n\nSystème : système de paiement\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-558-82947\nDurée de protection requise : 22 ans\nVolume moyen : 65986 opérations cryptographiques/jour\nIndisponibilité maximale : 16 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-298`",
    "reponse_v": "Recenser certificats, clés, algorithmes et dépendances",
    "reponse_f1": "Inventorier seulement les serveurs",
    "reponse_f2": "Ignorer les certificats internes",
    "explication": "L'inventaire est indispensable à la maîtrise du risque."
  },
  {
    "id": 299,
    "question": "`Mini-TP cryptographie — durée de protection\n\nSystème : outil de télémaintenance\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-559-90866\nDurée de protection requise : 23 ans\nVolume moyen : 66003 opérations cryptographiques/jour\nIndisponibilité maximale : 17 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-299`",
    "reponse_v": "Adapter le niveau cryptographique à la durée de sensibilité",
    "reponse_f1": "Choisir toujours la plus petite clé",
    "reponse_f2": "Choisir selon le nom du service",
    "explication": "La durée de protection influe sur les choix."
  },
  {
    "id": 300,
    "question": "`Mini-TP cryptographie — audit cryptographique\n\nSystème : portail bancaire\nContexte : système à conservation longue\nIdentifiant de clé ou certificat : K-560-98785\nDurée de protection requise : 20 ans\nVolume moyen : 66020 opérations cryptographiques/jour\nIndisponibilité maximale : 15 minutes\n\nQuelle décision technique est la plus rigoureuse ?\n\nRéférence exercice : CRYPTO-300`",
    "reponse_v": "Prioriser les écarts et suivre un plan de remédiation",
    "reponse_f1": "Masquer les alertes",
    "reponse_f2": "Renouveler uniquement les certificats visibles",
    "explication": "Un audit doit conduire à des corrections traçables."
  }
]
