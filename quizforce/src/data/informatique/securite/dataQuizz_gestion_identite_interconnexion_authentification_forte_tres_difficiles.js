export const dataQuizz_gestion_identite_interconnexion_authentification_forte_tres_difficiles =[
  {
    "id": 1,
    "question": "`Mini-TP gestion d'identité — cycle de vie d'un compte\n\nApplication : plateforme e-commerce\nContexte : production interne\nPopulation : 303 identités\nDurée d'un access token : 20 minutes\nDurée maximale de session : 18 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-001`",
    "reponse_v": "Automatiser création, modification et suppression selon les événements RH",
    "reponse_f1": "Créer les comptes manuellement sans processus de sortie",
    "reponse_f2": "Conserver les comptes après départ",
    "explication": "Le cycle de vie doit suivre les arrivées, mobilités et départs."
  },
  {
    "id": 2,
    "question": "`Mini-TP gestion d'identité — joiner-mover-leaver\n\nApplication : outil de ticketing\nContexte : production interne\nPopulation : 306 identités\nDurée d'un access token : 25 minutes\nDurée maximale de session : 28 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-002`",
    "reponse_v": "Réévaluer les droits à chaque changement de poste",
    "reponse_f1": "Conserver tous les anciens droits",
    "reponse_f2": "Supprimer seulement le mot de passe",
    "explication": "Le modèle JML évite l'accumulation de privilèges."
  },
  {
    "id": 3,
    "question": "`Mini-TP gestion d'identité — identité de référence\n\nApplication : application mobile\nContexte : production interne\nPopulation : 309 identités\nDurée d'un access token : 30 minutes\nDurée maximale de session : 38 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-003`",
    "reponse_v": "Définir une source autoritative claire",
    "reponse_f1": "Utiliser chaque application comme source maîtresse",
    "reponse_f2": "Fusionner les identités sans règle",
    "explication": "Une source autoritative évite les divergences."
  },
  {
    "id": 4,
    "question": "`Mini-TP gestion d'identité — compte orphelin\n\nApplication : VPN d'entreprise\nContexte : production interne\nPopulation : 312 identités\nDurée d'un access token : 35 minutes\nDurée maximale de session : 48 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-004`",
    "reponse_v": "Identifier puis désactiver ou supprimer le compte",
    "reponse_f1": "Le conserver indéfiniment",
    "reponse_f2": "Changer seulement son nom",
    "explication": "Un compte sans propriétaire est un risque."
  },
  {
    "id": 5,
    "question": "`Mini-TP gestion d'identité — identité unique\n\nApplication : console cloud\nContexte : production interne\nPopulation : 315 identités\nDurée d'un access token : 40 minutes\nDurée maximale de session : 58 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-005`",
    "reponse_v": "Utiliser un identifiant pérenne non réattribué",
    "reponse_f1": "Réutiliser les identifiants des anciens salariés",
    "reponse_f2": "Utiliser uniquement le prénom",
    "explication": "Un identifiant stable évite les collisions."
  },
  {
    "id": 6,
    "question": "`Mini-TP gestion d'identité — moindre privilège\n\nApplication : annuaire interne\nContexte : production interne\nPopulation : 318 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 68 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-006`",
    "reponse_v": "Accorder seulement les droits nécessaires",
    "reponse_f1": "Donner les droits administrateur par défaut",
    "reponse_f2": "Cumuler les rôles historiques",
    "explication": "Le moindre privilège limite l'impact d'une compromission."
  },
  {
    "id": 7,
    "question": "`Mini-TP gestion d'identité — séparation des tâches\n\nApplication : plateforme de signature\nContexte : production interne\nPopulation : 321 identités\nDurée d'un access token : 15 minutes\nDurée maximale de session : 78 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-007`",
    "reponse_v": "Empêcher qu'une même personne crée et valide une opération sensible",
    "reponse_f1": "Autoriser une seule personne à tout faire",
    "reponse_f2": "Partager un compte commun",
    "explication": "La séparation des tâches réduit fraude et erreur."
  },
  {
    "id": 8,
    "question": "`Mini-TP gestion d'identité — recertification des accès\n\nApplication : gestion documentaire\nContexte : production interne\nPopulation : 324 identités\nDurée d'un access token : 20 minutes\nDurée maximale de session : 88 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-008`",
    "reponse_v": "Faire valider périodiquement les droits par les responsables",
    "reponse_f1": "Considérer les droits permanents",
    "reponse_f2": "Réviser uniquement les mots de passe",
    "explication": "La recertification réduit les privilèges obsolètes."
  },
  {
    "id": 9,
    "question": "`Mini-TP gestion d'identité — identité humaine et technique\n\nApplication : supervision réseau\nContexte : production interne\nPopulation : 327 identités\nDurée d'un access token : 25 minutes\nDurée maximale de session : 8 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-009`",
    "reponse_v": "Distinguer clairement comptes utilisateurs et comptes de service",
    "reponse_f1": "Utiliser les comptes personnels pour les traitements automatiques",
    "reponse_f2": "Partager un même compte pour tous",
    "explication": "Les identités techniques ont un cycle de vie différent."
  },
  {
    "id": 10,
    "question": "`Mini-TP gestion d'identité — gouvernance IAM\n\nApplication : extranet fournisseur\nContexte : production interne\nPopulation : 330 identités\nDurée d'un access token : 30 minutes\nDurée maximale de session : 18 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-010`",
    "reponse_v": "Définir propriétaires, règles, contrôles et indicateurs",
    "reponse_f1": "Limiter l'IAM à l'écran de connexion",
    "reponse_f2": "Laisser chaque application décider sans coordination",
    "explication": "La gouvernance couvre tout le cycle de vie et les responsabilités."
  },
  {
    "id": 11,
    "question": "`Mini-TP gestion d'identité — SSO\n\nApplication : portail citoyen\nContexte : production interne\nPopulation : 333 identités\nDurée d'un access token : 35 minutes\nDurée maximale de session : 28 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-011`",
    "reponse_v": "Centraliser l'authentification tout en conservant des sessions applicatives distinctes",
    "reponse_f1": "Partager un mot de passe entre toutes les applications",
    "reponse_f2": "Supprimer toute authentification locale sans fédération",
    "explication": "Le SSO réduit les authentifications répétées."
  },
  {
    "id": 12,
    "question": "`Mini-TP gestion d'identité — fédération d'identité\n\nApplication : ERP financier\nContexte : production interne\nPopulation : 336 identités\nDurée d'un access token : 40 minutes\nDurée maximale de session : 38 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-012`",
    "reponse_v": "Établir une relation de confiance entre fournisseur d'identité et fournisseur de service",
    "reponse_f1": "Dupliquer les mots de passe dans chaque application",
    "reponse_f2": "Utiliser seulement un VPN",
    "explication": "La fédération transporte des assertions ou jetons de confiance."
  },
  {
    "id": 13,
    "question": "`Mini-TP gestion d'identité — SAML 2.0\n\nApplication : application RH\nContexte : production interne\nPopulation : 339 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 48 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-013`",
    "reponse_v": "Utiliser des assertions signées entre IdP et SP",
    "reponse_f1": "Utiliser uniquement des cookies locaux",
    "reponse_f2": "Utiliser DHCP",
    "explication": "SAML est adapté au SSO web d'entreprise."
  },
  {
    "id": 14,
    "question": "`Mini-TP gestion d'identité — OpenID Connect\n\nApplication : API partenaires\nContexte : production interne\nPopulation : 342 identités\nDurée d'un access token : 15 minutes\nDurée maximale de session : 58 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-014`",
    "reponse_v": "Utiliser OIDC pour authentifier l'utilisateur au-dessus d'OAuth 2.0",
    "reponse_f1": "Utiliser OAuth 2.0 seul comme preuve d'identité",
    "reponse_f2": "Utiliser LDAP directement dans le navigateur",
    "explication": "OIDC ajoute une couche d'identité à OAuth 2.0."
  },
  {
    "id": 15,
    "question": "`Mini-TP gestion d'identité — OAuth 2.0\n\nApplication : messagerie collaborative\nContexte : production interne\nPopulation : 345 identités\nDurée d'un access token : 20 minutes\nDurée maximale de session : 68 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-015`",
    "reponse_v": "Utiliser OAuth 2.0 pour déléguer un accès à une ressource",
    "reponse_f1": "Utiliser OAuth 2.0 comme annuaire",
    "reponse_f2": "Utiliser OAuth 2.0 pour chiffrer les données",
    "explication": "OAuth 2.0 est un cadre d'autorisation déléguée."
  },
  {
    "id": 16,
    "question": "`Mini-TP gestion d'identité — IdP\n\nApplication : plateforme e-commerce\nContexte : production interne\nPopulation : 348 identités\nDurée d'un access token : 25 minutes\nDurée maximale de session : 78 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-016`",
    "reponse_v": "Centraliser l'authentification et émettre des assertions ou jetons",
    "reponse_f1": "Héberger uniquement les données métier",
    "reponse_f2": "Remplacer le pare-feu",
    "explication": "L'IdP authentifie l'utilisateur."
  },
  {
    "id": 17,
    "question": "`Mini-TP gestion d'identité — SP ou RP\n\nApplication : outil de ticketing\nContexte : production interne\nPopulation : 351 identités\nDurée d'un access token : 30 minutes\nDurée maximale de session : 88 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-017`",
    "reponse_v": "Consommer l'identité fournie par l'IdP",
    "reponse_f1": "Émettre toujours les mots de passe",
    "reponse_f2": "Gérer le routage réseau",
    "explication": "Le SP/RP fait confiance au fournisseur d'identité."
  },
  {
    "id": 18,
    "question": "`Mini-TP gestion d'identité — single logout\n\nApplication : application mobile\nContexte : production interne\nPopulation : 354 identités\nDurée d'un access token : 35 minutes\nDurée maximale de session : 8 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-018`",
    "reponse_v": "Propager la fermeture de session selon les capacités du protocole",
    "reponse_f1": "Supprimer uniquement le cookie d'une application",
    "reponse_f2": "Révoquer le compte utilisateur",
    "explication": "Le SLO tente de fermer les sessions fédérées."
  },
  {
    "id": 19,
    "question": "`Mini-TP gestion d'identité — home realm discovery\n\nApplication : VPN d'entreprise\nContexte : production interne\nPopulation : 357 identités\nDurée d'un access token : 40 minutes\nDurée maximale de session : 18 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-019`",
    "reponse_v": "Identifier le bon fournisseur d'identité pour l'utilisateur",
    "reponse_f1": "Créer un nouveau compte local à chaque connexion",
    "reponse_f2": "Désactiver les domaines externes",
    "explication": "La découverte de domaine oriente vers l'IdP approprié."
  },
  {
    "id": 20,
    "question": "`Mini-TP gestion d'identité — fédération B2B\n\nApplication : console cloud\nContexte : production interne\nPopulation : 360 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 28 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-020`",
    "reponse_v": "Utiliser des identités externes avec politiques dédiées",
    "reponse_f1": "Créer systématiquement des comptes internes permanents",
    "reponse_f2": "Partager un compte générique fournisseur",
    "explication": "La fédération B2B limite la duplication d'identités."
  },
  {
    "id": 21,
    "question": "`Mini-TP gestion d'identité — MFA\n\nApplication : annuaire interne\nContexte : production interne\nPopulation : 363 identités\nDurée d'un access token : 15 minutes\nDurée maximale de session : 38 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-021`",
    "reponse_v": "Combiner au moins deux facteurs indépendants",
    "reponse_f1": "Demander deux fois le même mot de passe",
    "reponse_f2": "Utiliser deux questions secrètes",
    "explication": "Deux facteurs doivent appartenir à des catégories différentes."
  },
  {
    "id": 22,
    "question": "`Mini-TP gestion d'identité — TOTP\n\nApplication : plateforme de signature\nContexte : production interne\nPopulation : 366 identités\nDurée d'un access token : 20 minutes\nDurée maximale de session : 48 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-022`",
    "reponse_v": "Utiliser un secret partagé et des codes temporels courts",
    "reponse_f1": "Utiliser un mot de passe fixe envoyé par e-mail",
    "reponse_f2": "Utiliser un certificat serveur",
    "explication": "TOTP génère des codes à durée limitée."
  },
  {
    "id": 23,
    "question": "`Mini-TP gestion d'identité — WebAuthn\n\nApplication : gestion documentaire\nContexte : production interne\nPopulation : 369 identités\nDurée d'un access token : 25 minutes\nDurée maximale de session : 58 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-023`",
    "reponse_v": "Utiliser une authentification résistante au phishing liée au domaine",
    "reponse_f1": "Utiliser un OTP SMS comme équivalent exact",
    "reponse_f2": "Utiliser une question secrète",
    "explication": "WebAuthn repose sur des clés asymétriques et l'origine web."
  },
  {
    "id": 24,
    "question": "`Mini-TP gestion d'identité — FIDO2\n\nApplication : supervision réseau\nContexte : production interne\nPopulation : 372 identités\nDurée d'un access token : 30 minutes\nDurée maximale de session : 68 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-024`",
    "reponse_v": "Combiner WebAuthn et CTAP pour une authentification forte",
    "reponse_f1": "Utiliser uniquement LDAP simple",
    "reponse_f2": "Utiliser un cookie persistant comme facteur",
    "explication": "FIDO2 permet l'authentification sans mot de passe."
  },
  {
    "id": 25,
    "question": "`Mini-TP gestion d'identité — push MFA fatigue\n\nApplication : extranet fournisseur\nContexte : production interne\nPopulation : 375 identités\nDurée d'un access token : 35 minutes\nDurée maximale de session : 78 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-025`",
    "reponse_v": "Limiter les sollicitations, utiliser number matching et détection d'anomalies",
    "reponse_f1": "Envoyer davantage de notifications",
    "reponse_f2": "Autoriser toute validation automatique",
    "explication": "Les attaques de fatigue exploitent les approbations répétées."
  },
  {
    "id": 26,
    "question": "`Mini-TP gestion d'identité — SMS OTP\n\nApplication : portail citoyen\nContexte : production interne\nPopulation : 378 identités\nDurée d'un access token : 40 minutes\nDurée maximale de session : 88 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-026`",
    "reponse_v": "Le considérer moins résistant que WebAuthn aux interceptions et au SIM swap",
    "reponse_f1": "Le considérer invulnérable",
    "reponse_f2": "Le préférer à toute autre méthode",
    "explication": "Le SMS présente des risques spécifiques."
  },
  {
    "id": 27,
    "question": "`Mini-TP gestion d'identité — certificat client\n\nApplication : ERP financier\nContexte : production interne\nPopulation : 381 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 8 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-027`",
    "reponse_v": "Utiliser un certificat personnel pour authentifier le terminal ou l'utilisateur",
    "reponse_f1": "Utiliser le certificat serveur du site",
    "reponse_f2": "Utiliser uniquement un mot de passe partagé",
    "explication": "Un certificat client fournit une preuve asymétrique."
  },
  {
    "id": 28,
    "question": "`Mini-TP gestion d'identité — step-up authentication\n\nApplication : application RH\nContexte : production interne\nPopulation : 384 identités\nDurée d'un access token : 15 minutes\nDurée maximale de session : 18 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-028`",
    "reponse_v": "Demander un facteur supplémentaire pour une action sensible",
    "reponse_f1": "Réauthentifier moins fortement",
    "reponse_f2": "Augmenter seulement la durée de session",
    "explication": "Le step-up adapte le niveau d'assurance au risque."
  },
  {
    "id": 29,
    "question": "`Mini-TP gestion d'identité — authentification adaptative\n\nApplication : API partenaires\nContexte : production interne\nPopulation : 387 identités\nDurée d'un access token : 20 minutes\nDurée maximale de session : 28 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-029`",
    "reponse_v": "Tenir compte du contexte, du terminal et du risque",
    "reponse_f1": "Appliquer toujours la même règle sans contexte",
    "reponse_f2": "Supprimer la MFA pour les connexions externes",
    "explication": "L'authentification adaptative ajuste les contrôles."
  },
  {
    "id": 30,
    "question": "`Mini-TP gestion d'identité — passwordless\n\nApplication : messagerie collaborative\nContexte : production interne\nPopulation : 390 identités\nDurée d'un access token : 25 minutes\nDurée maximale de session : 38 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-030`",
    "reponse_v": "Utiliser une clé cryptographique ou un lien sécurisé sans mot de passe permanent",
    "reponse_f1": "Stocker un mot de passe caché dans l'application",
    "reponse_f2": "Envoyer le mot de passe en clair",
    "explication": "Le passwordless supprime le secret mémorisé par l'utilisateur."
  },
  {
    "id": 31,
    "question": "`Mini-TP gestion d'identité — SCIM\n\nApplication : plateforme e-commerce\nContexte : production interne\nPopulation : 393 identités\nDurée d'un access token : 30 minutes\nDurée maximale de session : 48 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-031`",
    "reponse_v": "Utiliser SCIM pour provisionner utilisateurs et groupes entre systèmes",
    "reponse_f1": "Utiliser SAML pour synchroniser les comptes",
    "reponse_f2": "Utiliser DNS",
    "explication": "SCIM standardise le provisioning d'identités."
  },
  {
    "id": 32,
    "question": "`Mini-TP gestion d'identité — provisioning just-in-time\n\nApplication : outil de ticketing\nContexte : production interne\nPopulation : 396 identités\nDurée d'un access token : 35 minutes\nDurée maximale de session : 58 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-032`",
    "reponse_v": "Créer le compte lors de la première connexion fédérée",
    "reponse_f1": "Créer tous les comptes des années à l'avance",
    "reponse_f2": "Conserver les comptes après révocation",
    "explication": "Le JIT crée le compte au moment du besoin."
  },
  {
    "id": 33,
    "question": "`Mini-TP gestion d'identité — deprovisioning\n\nApplication : application mobile\nContexte : production interne\nPopulation : 399 identités\nDurée d'un access token : 40 minutes\nDurée maximale de session : 68 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-033`",
    "reponse_v": "Révoquer rapidement sessions, jetons et accès lors d'un départ",
    "reponse_f1": "Supprimer uniquement l'adresse e-mail",
    "reponse_f2": "Attendre l'expiration naturelle de tous les jetons",
    "explication": "La sortie doit couper tous les accès."
  },
  {
    "id": 34,
    "question": "`Mini-TP gestion d'identité — LDAP bind\n\nApplication : VPN d'entreprise\nContexte : production interne\nPopulation : 402 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 78 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-034`",
    "reponse_v": "Authentifier une application auprès de l'annuaire avec un compte dédié minimal",
    "reponse_f1": "Utiliser un compte administrateur global",
    "reponse_f2": "Partager le mot de passe d'un utilisateur",
    "explication": "Le compte de bind doit suivre le moindre privilège."
  },
  {
    "id": 35,
    "question": "`Mini-TP gestion d'identité — LDAPS\n\nApplication : console cloud\nContexte : production interne\nPopulation : 405 identités\nDurée d'un access token : 15 minutes\nDurée maximale de session : 88 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-035`",
    "reponse_v": "Protéger les échanges LDAP avec TLS",
    "reponse_f1": "Utiliser LDAP simple sur Internet",
    "reponse_f2": "Encoder seulement en Base64",
    "explication": "LDAPS protège les identifiants et les requêtes."
  },
  {
    "id": 36,
    "question": "`Mini-TP gestion d'identité — synchronisation de groupes\n\nApplication : annuaire interne\nContexte : production interne\nPopulation : 408 identités\nDurée d'un access token : 20 minutes\nDurée maximale de session : 8 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-036`",
    "reponse_v": "Mapper explicitement les groupes entre IdP et applications",
    "reponse_f1": "Supposer que tous les noms sont identiques",
    "reponse_f2": "Créer des droits locaux sans gouvernance",
    "explication": "Le mapping doit être contrôlé."
  },
  {
    "id": 37,
    "question": "`Mini-TP gestion d'identité — attribut obligatoire\n\nApplication : plateforme de signature\nContexte : production interne\nPopulation : 411 identités\nDurée d'un access token : 25 minutes\nDurée maximale de session : 18 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-037`",
    "reponse_v": "Valider la présence et le format avant provisioning",
    "reponse_f1": "Créer le compte avec des données incohérentes",
    "reponse_f2": "Remplacer les valeurs absentes par zéro",
    "explication": "Les attributs alimentent les règles d'accès."
  },
  {
    "id": 38,
    "question": "`Mini-TP gestion d'identité — source autoritative RH\n\nApplication : gestion documentaire\nContexte : production interne\nPopulation : 414 identités\nDurée d'un access token : 30 minutes\nDurée maximale de session : 28 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-038`",
    "reponse_v": "Propager les changements RH vers l'IAM",
    "reponse_f1": "Laisser les applications modifier le statut d'emploi",
    "reponse_f2": "Conserver des comptes déconnectés du RH",
    "explication": "Le RH est souvent la source des identités humaines."
  },
  {
    "id": 39,
    "question": "`Mini-TP gestion d'identité — identité corrélée\n\nApplication : supervision réseau\nContexte : production interne\nPopulation : 417 identités\nDurée d'un access token : 35 minutes\nDurée maximale de session : 38 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-039`",
    "reponse_v": "Utiliser des règles fiables pour rapprocher les comptes d'une même personne",
    "reponse_f1": "Fusionner sur le prénom uniquement",
    "reponse_f2": "Créer une identité par application sans lien",
    "explication": "La corrélation évite doublons et erreurs."
  },
  {
    "id": 40,
    "question": "`Mini-TP gestion d'identité — réconciliation\n\nApplication : extranet fournisseur\nContexte : production interne\nPopulation : 420 identités\nDurée d'un access token : 40 minutes\nDurée maximale de session : 48 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-040`",
    "reponse_v": "Comparer périodiquement l'état attendu et l'état réel des comptes",
    "reponse_f1": "Faire confiance uniquement aux événements",
    "reponse_f2": "Ne jamais vérifier les écarts",
    "explication": "La réconciliation détecte les dérives."
  },
  {
    "id": 41,
    "question": "`Mini-TP gestion d'identité — access token\n\nApplication : portail citoyen\nContexte : production interne\nPopulation : 423 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 58 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-041`",
    "reponse_v": "Limiter sa durée et son audience",
    "reponse_f1": "Le rendre permanent et universel",
    "reponse_f2": "Le stocker dans une URL publique",
    "explication": "Un access token doit être limité et protégé."
  },
  {
    "id": 42,
    "question": "`Mini-TP gestion d'identité — refresh token\n\nApplication : ERP financier\nContexte : production interne\nPopulation : 426 identités\nDurée d'un access token : 15 minutes\nDurée maximale de session : 68 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-042`",
    "reponse_v": "Le protéger davantage et prévoir rotation ou révocation",
    "reponse_f1": "Le traiter comme un identifiant public",
    "reponse_f2": "Le partager entre applications",
    "explication": "Un refresh token permet d'obtenir de nouveaux access tokens."
  },
  {
    "id": 43,
    "question": "`Mini-TP gestion d'identité — ID token\n\nApplication : application RH\nContexte : production interne\nPopulation : 429 identités\nDurée d'un access token : 20 minutes\nDurée maximale de session : 78 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-043`",
    "reponse_v": "L'utiliser comme preuve d'authentification pour le client prévu",
    "reponse_f1": "L'utiliser comme jeton universel d'accès à toutes les API",
    "reponse_f2": "Le considérer comme un mot de passe",
    "explication": "L'ID token décrit l'authentification de l'utilisateur."
  },
  {
    "id": 44,
    "question": "`Mini-TP gestion d'identité — audience d'un jeton\n\nApplication : API partenaires\nContexte : production interne\nPopulation : 432 identités\nDurée d'un access token : 25 minutes\nDurée maximale de session : 88 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-044`",
    "reponse_v": "Vérifier que le jeton vise bien le service destinataire",
    "reponse_f1": "Ignorer le champ aud",
    "reponse_f2": "Accepter tout jeton signé",
    "explication": "L'audience empêche la réutilisation entre services."
  },
  {
    "id": 45,
    "question": "`Mini-TP gestion d'identité — issuer d'un jeton\n\nApplication : messagerie collaborative\nContexte : production interne\nPopulation : 435 identités\nDurée d'un access token : 30 minutes\nDurée maximale de session : 8 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-045`",
    "reponse_v": "Vérifier l'émetteur attendu",
    "reponse_f1": "Faire confiance à tout issuer",
    "reponse_f2": "Se baser uniquement sur le nom utilisateur",
    "explication": "L'issuer identifie l'autorité qui a émis le jeton."
  },
  {
    "id": 46,
    "question": "`Mini-TP gestion d'identité — expiration de session\n\nApplication : plateforme e-commerce\nContexte : production interne\nPopulation : 438 identités\nDurée d'un access token : 35 minutes\nDurée maximale de session : 18 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-046`",
    "reponse_v": "Définir des durées adaptées au risque et à l'activité",
    "reponse_f1": "Utiliser des sessions infinies",
    "reponse_f2": "Expirer toutes les sessions après une seconde",
    "explication": "La durée doit équilibrer sécurité et usage."
  },
  {
    "id": 47,
    "question": "`Mini-TP gestion d'identité — révocation de session\n\nApplication : outil de ticketing\nContexte : production interne\nPopulation : 441 identités\nDurée d'un access token : 40 minutes\nDurée maximale de session : 28 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-047`",
    "reponse_v": "Invalider les sessions lors d'un incident ou d'un départ",
    "reponse_f1": "Attendre toujours l'expiration",
    "reponse_f2": "Changer seulement le mot de passe local",
    "explication": "La révocation doit couper l'accès actif."
  },
  {
    "id": 48,
    "question": "`Mini-TP gestion d'identité — cookie de session\n\nApplication : application mobile\nContexte : production interne\nPopulation : 444 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 38 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-048`",
    "reponse_v": "Utiliser Secure, HttpOnly et SameSite adaptés",
    "reponse_f1": "Le rendre accessible à tous les scripts",
    "reponse_f2": "Le transmettre en HTTP",
    "explication": "Les attributs réduisent les risques de vol et CSRF."
  },
  {
    "id": 49,
    "question": "`Mini-TP gestion d'identité — token binding au contexte\n\nApplication : VPN d'entreprise\nContexte : production interne\nPopulation : 447 identités\nDurée d'un access token : 15 minutes\nDurée maximale de session : 48 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-049`",
    "reponse_v": "Limiter l'usage du jeton au client ou au canal prévu",
    "reponse_f1": "Rendre le jeton utilisable partout",
    "reponse_f2": "Supprimer toute vérification d'origine",
    "explication": "Le binding réduit le rejeu."
  },
  {
    "id": 50,
    "question": "`Mini-TP gestion d'identité — rejeu de jeton\n\nApplication : console cloud\nContexte : production interne\nPopulation : 450 identités\nDurée d'un access token : 20 minutes\nDurée maximale de session : 58 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-050`",
    "reponse_v": "Utiliser nonce, courte durée et détection d'anomalies",
    "reponse_f1": "Allonger la durée de vie",
    "reponse_f2": "Désactiver la journalisation",
    "explication": "Le rejeu exploite un jeton volé encore valide."
  },
  {
    "id": 51,
    "question": "`Mini-TP gestion d'identité — RBAC\n\nApplication : annuaire interne\nContexte : production interne\nPopulation : 453 identités\nDurée d'un access token : 25 minutes\nDurée maximale de session : 68 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-051`",
    "reponse_v": "Associer les permissions à des rôles métiers",
    "reponse_f1": "Attribuer tous les droits individuellement sans modèle",
    "reponse_f2": "Utiliser l'adresse IP comme seul rôle",
    "explication": "RBAC simplifie la gouvernance des accès."
  },
  {
    "id": 52,
    "question": "`Mini-TP gestion d'identité — ABAC\n\nApplication : plateforme de signature\nContexte : production interne\nPopulation : 456 identités\nDurée d'un access token : 30 minutes\nDurée maximale de session : 78 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-052`",
    "reponse_v": "Évaluer des attributs du sujet, de la ressource et du contexte",
    "reponse_f1": "Utiliser uniquement un rôle fixe",
    "reponse_f2": "Utiliser un mot de passe partagé",
    "explication": "ABAC permet des décisions fines et contextuelles."
  },
  {
    "id": 53,
    "question": "`Mini-TP gestion d'identité — ReBAC\n\nApplication : gestion documentaire\nContexte : production interne\nPopulation : 459 identités\nDurée d'un access token : 35 minutes\nDurée maximale de session : 88 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-053`",
    "reponse_v": "Décider selon les relations entre entités",
    "reponse_f1": "Décider uniquement selon l'heure",
    "reponse_f2": "Décider uniquement selon le mot de passe",
    "explication": "ReBAC exploite les relations dans un graphe d'autorisation."
  },
  {
    "id": 54,
    "question": "`Mini-TP gestion d'identité — PAM\n\nApplication : supervision réseau\nContexte : production interne\nPopulation : 462 identités\nDurée d'un access token : 40 minutes\nDurée maximale de session : 8 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-054`",
    "reponse_v": "Gérer, contrôler et enregistrer les accès à privilèges",
    "reponse_f1": "Partager les comptes administrateurs",
    "reponse_f2": "Désactiver la MFA des administrateurs",
    "explication": "Le PAM réduit le risque des comptes sensibles."
  },
  {
    "id": 55,
    "question": "`Mini-TP gestion d'identité — just-in-time privilege\n\nApplication : extranet fournisseur\nContexte : production interne\nPopulation : 465 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 18 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-055`",
    "reponse_v": "Accorder un privilège temporaire pour une durée limitée",
    "reponse_f1": "Donner un accès permanent",
    "reponse_f2": "Créer un compte administrateur partagé",
    "explication": "Le JIT réduit la fenêtre d'exposition."
  },
  {
    "id": 56,
    "question": "`Mini-TP gestion d'identité — break-glass account\n\nApplication : portail citoyen\nContexte : production interne\nPopulation : 468 identités\nDurée d'un access token : 15 minutes\nDurée maximale de session : 28 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-056`",
    "reponse_v": "Conserver un compte d'urgence fortement protégé et surveillé",
    "reponse_f1": "Utiliser le compte d'urgence au quotidien",
    "reponse_f2": "Partager son secret sans contrôle",
    "explication": "Un compte break-glass sert aux situations exceptionnelles."
  },
  {
    "id": 57,
    "question": "`Mini-TP gestion d'identité — consentement OAuth\n\nApplication : ERP financier\nContexte : production interne\nPopulation : 471 identités\nDurée d'un access token : 20 minutes\nDurée maximale de session : 38 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-057`",
    "reponse_v": "Limiter les scopes demandés et informer l'utilisateur",
    "reponse_f1": "Demander tous les scopes par défaut",
    "reponse_f2": "Ignorer les permissions",
    "explication": "Le consentement doit être proportionné."
  },
  {
    "id": 58,
    "question": "`Mini-TP gestion d'identité — scope OAuth\n\nApplication : application RH\nContexte : production interne\nPopulation : 474 identités\nDurée d'un access token : 25 minutes\nDurée maximale de session : 48 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-058`",
    "reponse_v": "Définir des permissions précises pour l'API",
    "reponse_f1": "Utiliser un scope unique administrateur",
    "reponse_f2": "Confondre scope et mot de passe",
    "explication": "Les scopes bornent les capacités du jeton."
  },
  {
    "id": 59,
    "question": "`Mini-TP gestion d'identité — service account\n\nApplication : API partenaires\nContexte : production interne\nPopulation : 477 identités\nDurée d'un access token : 30 minutes\nDurée maximale de session : 58 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-059`",
    "reponse_v": "Utiliser une identité technique dédiée avec secret ou clé gérée",
    "reponse_f1": "Utiliser le compte personnel d'un développeur",
    "reponse_f2": "Partager un compte humain",
    "explication": "Les comptes de service doivent être gérés séparément."
  },
  {
    "id": 60,
    "question": "`Mini-TP gestion d'identité — architecture IAM résiliente\n\nApplication : messagerie collaborative\nContexte : production interne\nPopulation : 480 identités\nDurée d'un access token : 35 minutes\nDurée maximale de session : 68 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-060`",
    "reponse_v": "Redonder IdP, annuaire et mécanismes de secours",
    "reponse_f1": "Dépendre d'un seul serveur sans PRA",
    "reponse_f2": "Supprimer toute authentification locale de secours",
    "explication": "L'IAM est critique et doit être hautement disponible."
  },
  {
    "id": 61,
    "question": "`Mini-TP gestion d'identité — cycle de vie d'un compte\n\nApplication : console cloud\nContexte : extranet B2B\nPopulation : 1204 identités\nDurée d'un access token : 50 minutes\nDurée maximale de session : 30 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-061`",
    "reponse_v": "Automatiser création, modification et suppression selon les événements RH",
    "reponse_f1": "Créer les comptes manuellement sans processus de sortie",
    "reponse_f2": "Conserver les comptes après départ",
    "explication": "Le cycle de vie doit suivre les arrivées, mobilités et départs."
  },
  {
    "id": 62,
    "question": "`Mini-TP gestion d'identité — joiner-mover-leaver\n\nApplication : annuaire interne\nContexte : extranet B2B\nPopulation : 1208 identités\nDurée d'un access token : 55 minutes\nDurée maximale de session : 40 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-062`",
    "reponse_v": "Réévaluer les droits à chaque changement de poste",
    "reponse_f1": "Conserver tous les anciens droits",
    "reponse_f2": "Supprimer seulement le mot de passe",
    "explication": "Le modèle JML évite l'accumulation de privilèges."
  },
  {
    "id": 63,
    "question": "`Mini-TP gestion d'identité — identité de référence\n\nApplication : plateforme de signature\nContexte : extranet B2B\nPopulation : 1212 identités\nDurée d'un access token : 60 minutes\nDurée maximale de session : 50 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-063`",
    "reponse_v": "Définir une source autoritative claire",
    "reponse_f1": "Utiliser chaque application comme source maîtresse",
    "reponse_f2": "Fusionner les identités sans règle",
    "explication": "Une source autoritative évite les divergences."
  },
  {
    "id": 64,
    "question": "`Mini-TP gestion d'identité — compte orphelin\n\nApplication : gestion documentaire\nContexte : extranet B2B\nPopulation : 1216 identités\nDurée d'un access token : 65 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-064`",
    "reponse_v": "Identifier puis désactiver ou supprimer le compte",
    "reponse_f1": "Le conserver indéfiniment",
    "reponse_f2": "Changer seulement son nom",
    "explication": "Un compte sans propriétaire est un risque."
  },
  {
    "id": 65,
    "question": "`Mini-TP gestion d'identité — identité unique\n\nApplication : supervision réseau\nContexte : extranet B2B\nPopulation : 1220 identités\nDurée d'un access token : 70 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-065`",
    "reponse_v": "Utiliser un identifiant pérenne non réattribué",
    "reponse_f1": "Réutiliser les identifiants des anciens salariés",
    "reponse_f2": "Utiliser uniquement le prénom",
    "explication": "Un identifiant stable évite les collisions."
  },
  {
    "id": 66,
    "question": "`Mini-TP gestion d'identité — moindre privilège\n\nApplication : extranet fournisseur\nContexte : extranet B2B\nPopulation : 1224 identités\nDurée d'un access token : 75 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-066`",
    "reponse_v": "Accorder seulement les droits nécessaires",
    "reponse_f1": "Donner les droits administrateur par défaut",
    "reponse_f2": "Cumuler les rôles historiques",
    "explication": "Le moindre privilège limite l'impact d'une compromission."
  },
  {
    "id": 67,
    "question": "`Mini-TP gestion d'identité — séparation des tâches\n\nApplication : portail citoyen\nContexte : extranet B2B\nPopulation : 1228 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-067`",
    "reponse_v": "Empêcher qu'une même personne crée et valide une opération sensible",
    "reponse_f1": "Autoriser une seule personne à tout faire",
    "reponse_f2": "Partager un compte commun",
    "explication": "La séparation des tâches réduit fraude et erreur."
  },
  {
    "id": 68,
    "question": "`Mini-TP gestion d'identité — recertification des accès\n\nApplication : ERP financier\nContexte : extranet B2B\nPopulation : 1232 identités\nDurée d'un access token : 50 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-068`",
    "reponse_v": "Faire valider périodiquement les droits par les responsables",
    "reponse_f1": "Considérer les droits permanents",
    "reponse_f2": "Réviser uniquement les mots de passe",
    "explication": "La recertification réduit les privilèges obsolètes."
  },
  {
    "id": 69,
    "question": "`Mini-TP gestion d'identité — identité humaine et technique\n\nApplication : application RH\nContexte : extranet B2B\nPopulation : 1236 identités\nDurée d'un access token : 55 minutes\nDurée maximale de session : 20 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-069`",
    "reponse_v": "Distinguer clairement comptes utilisateurs et comptes de service",
    "reponse_f1": "Utiliser les comptes personnels pour les traitements automatiques",
    "reponse_f2": "Partager un même compte pour tous",
    "explication": "Les identités techniques ont un cycle de vie différent."
  },
  {
    "id": 70,
    "question": "`Mini-TP gestion d'identité — gouvernance IAM\n\nApplication : API partenaires\nContexte : extranet B2B\nPopulation : 1240 identités\nDurée d'un access token : 60 minutes\nDurée maximale de session : 30 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-070`",
    "reponse_v": "Définir propriétaires, règles, contrôles et indicateurs",
    "reponse_f1": "Limiter l'IAM à l'écran de connexion",
    "reponse_f2": "Laisser chaque application décider sans coordination",
    "explication": "La gouvernance couvre tout le cycle de vie et les responsabilités."
  },
  {
    "id": 71,
    "question": "`Mini-TP gestion d'identité — SSO\n\nApplication : messagerie collaborative\nContexte : extranet B2B\nPopulation : 1244 identités\nDurée d'un access token : 65 minutes\nDurée maximale de session : 40 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-071`",
    "reponse_v": "Centraliser l'authentification tout en conservant des sessions applicatives distinctes",
    "reponse_f1": "Partager un mot de passe entre toutes les applications",
    "reponse_f2": "Supprimer toute authentification locale sans fédération",
    "explication": "Le SSO réduit les authentifications répétées."
  },
  {
    "id": 72,
    "question": "`Mini-TP gestion d'identité — fédération d'identité\n\nApplication : plateforme e-commerce\nContexte : extranet B2B\nPopulation : 1248 identités\nDurée d'un access token : 70 minutes\nDurée maximale de session : 50 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-072`",
    "reponse_v": "Établir une relation de confiance entre fournisseur d'identité et fournisseur de service",
    "reponse_f1": "Dupliquer les mots de passe dans chaque application",
    "reponse_f2": "Utiliser seulement un VPN",
    "explication": "La fédération transporte des assertions ou jetons de confiance."
  },
  {
    "id": 73,
    "question": "`Mini-TP gestion d'identité — SAML 2.0\n\nApplication : outil de ticketing\nContexte : extranet B2B\nPopulation : 1252 identités\nDurée d'un access token : 75 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-073`",
    "reponse_v": "Utiliser des assertions signées entre IdP et SP",
    "reponse_f1": "Utiliser uniquement des cookies locaux",
    "reponse_f2": "Utiliser DHCP",
    "explication": "SAML est adapté au SSO web d'entreprise."
  },
  {
    "id": 74,
    "question": "`Mini-TP gestion d'identité — OpenID Connect\n\nApplication : application mobile\nContexte : extranet B2B\nPopulation : 1256 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-074`",
    "reponse_v": "Utiliser OIDC pour authentifier l'utilisateur au-dessus d'OAuth 2.0",
    "reponse_f1": "Utiliser OAuth 2.0 seul comme preuve d'identité",
    "reponse_f2": "Utiliser LDAP directement dans le navigateur",
    "explication": "OIDC ajoute une couche d'identité à OAuth 2.0."
  },
  {
    "id": 75,
    "question": "`Mini-TP gestion d'identité — OAuth 2.0\n\nApplication : VPN d'entreprise\nContexte : extranet B2B\nPopulation : 1260 identités\nDurée d'un access token : 50 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-075`",
    "reponse_v": "Utiliser OAuth 2.0 pour déléguer un accès à une ressource",
    "reponse_f1": "Utiliser OAuth 2.0 comme annuaire",
    "reponse_f2": "Utiliser OAuth 2.0 pour chiffrer les données",
    "explication": "OAuth 2.0 est un cadre d'autorisation déléguée."
  },
  {
    "id": 76,
    "question": "`Mini-TP gestion d'identité — IdP\n\nApplication : console cloud\nContexte : extranet B2B\nPopulation : 1264 identités\nDurée d'un access token : 55 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-076`",
    "reponse_v": "Centraliser l'authentification et émettre des assertions ou jetons",
    "reponse_f1": "Héberger uniquement les données métier",
    "reponse_f2": "Remplacer le pare-feu",
    "explication": "L'IdP authentifie l'utilisateur."
  },
  {
    "id": 77,
    "question": "`Mini-TP gestion d'identité — SP ou RP\n\nApplication : annuaire interne\nContexte : extranet B2B\nPopulation : 1268 identités\nDurée d'un access token : 60 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-077`",
    "reponse_v": "Consommer l'identité fournie par l'IdP",
    "reponse_f1": "Émettre toujours les mots de passe",
    "reponse_f2": "Gérer le routage réseau",
    "explication": "Le SP/RP fait confiance au fournisseur d'identité."
  },
  {
    "id": 78,
    "question": "`Mini-TP gestion d'identité — single logout\n\nApplication : plateforme de signature\nContexte : extranet B2B\nPopulation : 1272 identités\nDurée d'un access token : 65 minutes\nDurée maximale de session : 20 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-078`",
    "reponse_v": "Propager la fermeture de session selon les capacités du protocole",
    "reponse_f1": "Supprimer uniquement le cookie d'une application",
    "reponse_f2": "Révoquer le compte utilisateur",
    "explication": "Le SLO tente de fermer les sessions fédérées."
  },
  {
    "id": 79,
    "question": "`Mini-TP gestion d'identité — home realm discovery\n\nApplication : gestion documentaire\nContexte : extranet B2B\nPopulation : 1276 identités\nDurée d'un access token : 70 minutes\nDurée maximale de session : 30 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-079`",
    "reponse_v": "Identifier le bon fournisseur d'identité pour l'utilisateur",
    "reponse_f1": "Créer un nouveau compte local à chaque connexion",
    "reponse_f2": "Désactiver les domaines externes",
    "explication": "La découverte de domaine oriente vers l'IdP approprié."
  },
  {
    "id": 80,
    "question": "`Mini-TP gestion d'identité — fédération B2B\n\nApplication : supervision réseau\nContexte : extranet B2B\nPopulation : 1280 identités\nDurée d'un access token : 75 minutes\nDurée maximale de session : 40 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-080`",
    "reponse_v": "Utiliser des identités externes avec politiques dédiées",
    "reponse_f1": "Créer systématiquement des comptes internes permanents",
    "reponse_f2": "Partager un compte générique fournisseur",
    "explication": "La fédération B2B limite la duplication d'identités."
  },
  {
    "id": 81,
    "question": "`Mini-TP gestion d'identité — MFA\n\nApplication : extranet fournisseur\nContexte : extranet B2B\nPopulation : 1284 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 50 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-081`",
    "reponse_v": "Combiner au moins deux facteurs indépendants",
    "reponse_f1": "Demander deux fois le même mot de passe",
    "reponse_f2": "Utiliser deux questions secrètes",
    "explication": "Deux facteurs doivent appartenir à des catégories différentes."
  },
  {
    "id": 82,
    "question": "`Mini-TP gestion d'identité — TOTP\n\nApplication : portail citoyen\nContexte : extranet B2B\nPopulation : 1288 identités\nDurée d'un access token : 50 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-082`",
    "reponse_v": "Utiliser un secret partagé et des codes temporels courts",
    "reponse_f1": "Utiliser un mot de passe fixe envoyé par e-mail",
    "reponse_f2": "Utiliser un certificat serveur",
    "explication": "TOTP génère des codes à durée limitée."
  },
  {
    "id": 83,
    "question": "`Mini-TP gestion d'identité — WebAuthn\n\nApplication : ERP financier\nContexte : extranet B2B\nPopulation : 1292 identités\nDurée d'un access token : 55 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-083`",
    "reponse_v": "Utiliser une authentification résistante au phishing liée au domaine",
    "reponse_f1": "Utiliser un OTP SMS comme équivalent exact",
    "reponse_f2": "Utiliser une question secrète",
    "explication": "WebAuthn repose sur des clés asymétriques et l'origine web."
  },
  {
    "id": 84,
    "question": "`Mini-TP gestion d'identité — FIDO2\n\nApplication : application RH\nContexte : extranet B2B\nPopulation : 1296 identités\nDurée d'un access token : 60 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-084`",
    "reponse_v": "Combiner WebAuthn et CTAP pour une authentification forte",
    "reponse_f1": "Utiliser uniquement LDAP simple",
    "reponse_f2": "Utiliser un cookie persistant comme facteur",
    "explication": "FIDO2 permet l'authentification sans mot de passe."
  },
  {
    "id": 85,
    "question": "`Mini-TP gestion d'identité — push MFA fatigue\n\nApplication : API partenaires\nContexte : extranet B2B\nPopulation : 1300 identités\nDurée d'un access token : 65 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-085`",
    "reponse_v": "Limiter les sollicitations, utiliser number matching et détection d'anomalies",
    "reponse_f1": "Envoyer davantage de notifications",
    "reponse_f2": "Autoriser toute validation automatique",
    "explication": "Les attaques de fatigue exploitent les approbations répétées."
  },
  {
    "id": 86,
    "question": "`Mini-TP gestion d'identité — SMS OTP\n\nApplication : messagerie collaborative\nContexte : extranet B2B\nPopulation : 1304 identités\nDurée d'un access token : 70 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-086`",
    "reponse_v": "Le considérer moins résistant que WebAuthn aux interceptions et au SIM swap",
    "reponse_f1": "Le considérer invulnérable",
    "reponse_f2": "Le préférer à toute autre méthode",
    "explication": "Le SMS présente des risques spécifiques."
  },
  {
    "id": 87,
    "question": "`Mini-TP gestion d'identité — certificat client\n\nApplication : plateforme e-commerce\nContexte : extranet B2B\nPopulation : 1308 identités\nDurée d'un access token : 75 minutes\nDurée maximale de session : 20 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-087`",
    "reponse_v": "Utiliser un certificat personnel pour authentifier le terminal ou l'utilisateur",
    "reponse_f1": "Utiliser le certificat serveur du site",
    "reponse_f2": "Utiliser uniquement un mot de passe partagé",
    "explication": "Un certificat client fournit une preuve asymétrique."
  },
  {
    "id": 88,
    "question": "`Mini-TP gestion d'identité — step-up authentication\n\nApplication : outil de ticketing\nContexte : extranet B2B\nPopulation : 1312 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 30 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-088`",
    "reponse_v": "Demander un facteur supplémentaire pour une action sensible",
    "reponse_f1": "Réauthentifier moins fortement",
    "reponse_f2": "Augmenter seulement la durée de session",
    "explication": "Le step-up adapte le niveau d'assurance au risque."
  },
  {
    "id": 89,
    "question": "`Mini-TP gestion d'identité — authentification adaptative\n\nApplication : application mobile\nContexte : extranet B2B\nPopulation : 1316 identités\nDurée d'un access token : 50 minutes\nDurée maximale de session : 40 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-089`",
    "reponse_v": "Tenir compte du contexte, du terminal et du risque",
    "reponse_f1": "Appliquer toujours la même règle sans contexte",
    "reponse_f2": "Supprimer la MFA pour les connexions externes",
    "explication": "L'authentification adaptative ajuste les contrôles."
  },
  {
    "id": 90,
    "question": "`Mini-TP gestion d'identité — passwordless\n\nApplication : VPN d'entreprise\nContexte : extranet B2B\nPopulation : 1320 identités\nDurée d'un access token : 55 minutes\nDurée maximale de session : 50 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-090`",
    "reponse_v": "Utiliser une clé cryptographique ou un lien sécurisé sans mot de passe permanent",
    "reponse_f1": "Stocker un mot de passe caché dans l'application",
    "reponse_f2": "Envoyer le mot de passe en clair",
    "explication": "Le passwordless supprime le secret mémorisé par l'utilisateur."
  },
  {
    "id": 91,
    "question": "`Mini-TP gestion d'identité — SCIM\n\nApplication : console cloud\nContexte : extranet B2B\nPopulation : 1324 identités\nDurée d'un access token : 60 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-091`",
    "reponse_v": "Utiliser SCIM pour provisionner utilisateurs et groupes entre systèmes",
    "reponse_f1": "Utiliser SAML pour synchroniser les comptes",
    "reponse_f2": "Utiliser DNS",
    "explication": "SCIM standardise le provisioning d'identités."
  },
  {
    "id": 92,
    "question": "`Mini-TP gestion d'identité — provisioning just-in-time\n\nApplication : annuaire interne\nContexte : extranet B2B\nPopulation : 1328 identités\nDurée d'un access token : 65 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-092`",
    "reponse_v": "Créer le compte lors de la première connexion fédérée",
    "reponse_f1": "Créer tous les comptes des années à l'avance",
    "reponse_f2": "Conserver les comptes après révocation",
    "explication": "Le JIT crée le compte au moment du besoin."
  },
  {
    "id": 93,
    "question": "`Mini-TP gestion d'identité — deprovisioning\n\nApplication : plateforme de signature\nContexte : extranet B2B\nPopulation : 1332 identités\nDurée d'un access token : 70 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-093`",
    "reponse_v": "Révoquer rapidement sessions, jetons et accès lors d'un départ",
    "reponse_f1": "Supprimer uniquement l'adresse e-mail",
    "reponse_f2": "Attendre l'expiration naturelle de tous les jetons",
    "explication": "La sortie doit couper tous les accès."
  },
  {
    "id": 94,
    "question": "`Mini-TP gestion d'identité — LDAP bind\n\nApplication : gestion documentaire\nContexte : extranet B2B\nPopulation : 1336 identités\nDurée d'un access token : 75 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-094`",
    "reponse_v": "Authentifier une application auprès de l'annuaire avec un compte dédié minimal",
    "reponse_f1": "Utiliser un compte administrateur global",
    "reponse_f2": "Partager le mot de passe d'un utilisateur",
    "explication": "Le compte de bind doit suivre le moindre privilège."
  },
  {
    "id": 95,
    "question": "`Mini-TP gestion d'identité — LDAPS\n\nApplication : supervision réseau\nContexte : extranet B2B\nPopulation : 1340 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-095`",
    "reponse_v": "Protéger les échanges LDAP avec TLS",
    "reponse_f1": "Utiliser LDAP simple sur Internet",
    "reponse_f2": "Encoder seulement en Base64",
    "explication": "LDAPS protège les identifiants et les requêtes."
  },
  {
    "id": 96,
    "question": "`Mini-TP gestion d'identité — synchronisation de groupes\n\nApplication : extranet fournisseur\nContexte : extranet B2B\nPopulation : 1344 identités\nDurée d'un access token : 50 minutes\nDurée maximale de session : 20 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-096`",
    "reponse_v": "Mapper explicitement les groupes entre IdP et applications",
    "reponse_f1": "Supposer que tous les noms sont identiques",
    "reponse_f2": "Créer des droits locaux sans gouvernance",
    "explication": "Le mapping doit être contrôlé."
  },
  {
    "id": 97,
    "question": "`Mini-TP gestion d'identité — attribut obligatoire\n\nApplication : portail citoyen\nContexte : extranet B2B\nPopulation : 1348 identités\nDurée d'un access token : 55 minutes\nDurée maximale de session : 30 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-097`",
    "reponse_v": "Valider la présence et le format avant provisioning",
    "reponse_f1": "Créer le compte avec des données incohérentes",
    "reponse_f2": "Remplacer les valeurs absentes par zéro",
    "explication": "Les attributs alimentent les règles d'accès."
  },
  {
    "id": 98,
    "question": "`Mini-TP gestion d'identité — source autoritative RH\n\nApplication : ERP financier\nContexte : extranet B2B\nPopulation : 1352 identités\nDurée d'un access token : 60 minutes\nDurée maximale de session : 40 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-098`",
    "reponse_v": "Propager les changements RH vers l'IAM",
    "reponse_f1": "Laisser les applications modifier le statut d'emploi",
    "reponse_f2": "Conserver des comptes déconnectés du RH",
    "explication": "Le RH est souvent la source des identités humaines."
  },
  {
    "id": 99,
    "question": "`Mini-TP gestion d'identité — identité corrélée\n\nApplication : application RH\nContexte : extranet B2B\nPopulation : 1356 identités\nDurée d'un access token : 65 minutes\nDurée maximale de session : 50 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-099`",
    "reponse_v": "Utiliser des règles fiables pour rapprocher les comptes d'une même personne",
    "reponse_f1": "Fusionner sur le prénom uniquement",
    "reponse_f2": "Créer une identité par application sans lien",
    "explication": "La corrélation évite doublons et erreurs."
  },
  {
    "id": 100,
    "question": "`Mini-TP gestion d'identité — réconciliation\n\nApplication : API partenaires\nContexte : extranet B2B\nPopulation : 1360 identités\nDurée d'un access token : 70 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-100`",
    "reponse_v": "Comparer périodiquement l'état attendu et l'état réel des comptes",
    "reponse_f1": "Faire confiance uniquement aux événements",
    "reponse_f2": "Ne jamais vérifier les écarts",
    "explication": "La réconciliation détecte les dérives."
  },
  {
    "id": 101,
    "question": "`Mini-TP gestion d'identité — access token\n\nApplication : messagerie collaborative\nContexte : extranet B2B\nPopulation : 1364 identités\nDurée d'un access token : 75 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-101`",
    "reponse_v": "Limiter sa durée et son audience",
    "reponse_f1": "Le rendre permanent et universel",
    "reponse_f2": "Le stocker dans une URL publique",
    "explication": "Un access token doit être limité et protégé."
  },
  {
    "id": 102,
    "question": "`Mini-TP gestion d'identité — refresh token\n\nApplication : plateforme e-commerce\nContexte : extranet B2B\nPopulation : 1368 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-102`",
    "reponse_v": "Le protéger davantage et prévoir rotation ou révocation",
    "reponse_f1": "Le traiter comme un identifiant public",
    "reponse_f2": "Le partager entre applications",
    "explication": "Un refresh token permet d'obtenir de nouveaux access tokens."
  },
  {
    "id": 103,
    "question": "`Mini-TP gestion d'identité — ID token\n\nApplication : outil de ticketing\nContexte : extranet B2B\nPopulation : 1372 identités\nDurée d'un access token : 50 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-103`",
    "reponse_v": "L'utiliser comme preuve d'authentification pour le client prévu",
    "reponse_f1": "L'utiliser comme jeton universel d'accès à toutes les API",
    "reponse_f2": "Le considérer comme un mot de passe",
    "explication": "L'ID token décrit l'authentification de l'utilisateur."
  },
  {
    "id": 104,
    "question": "`Mini-TP gestion d'identité — audience d'un jeton\n\nApplication : application mobile\nContexte : extranet B2B\nPopulation : 1376 identités\nDurée d'un access token : 55 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-104`",
    "reponse_v": "Vérifier que le jeton vise bien le service destinataire",
    "reponse_f1": "Ignorer le champ aud",
    "reponse_f2": "Accepter tout jeton signé",
    "explication": "L'audience empêche la réutilisation entre services."
  },
  {
    "id": 105,
    "question": "`Mini-TP gestion d'identité — issuer d'un jeton\n\nApplication : VPN d'entreprise\nContexte : extranet B2B\nPopulation : 1380 identités\nDurée d'un access token : 60 minutes\nDurée maximale de session : 20 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-105`",
    "reponse_v": "Vérifier l'émetteur attendu",
    "reponse_f1": "Faire confiance à tout issuer",
    "reponse_f2": "Se baser uniquement sur le nom utilisateur",
    "explication": "L'issuer identifie l'autorité qui a émis le jeton."
  },
  {
    "id": 106,
    "question": "`Mini-TP gestion d'identité — expiration de session\n\nApplication : console cloud\nContexte : extranet B2B\nPopulation : 1384 identités\nDurée d'un access token : 65 minutes\nDurée maximale de session : 30 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-106`",
    "reponse_v": "Définir des durées adaptées au risque et à l'activité",
    "reponse_f1": "Utiliser des sessions infinies",
    "reponse_f2": "Expirer toutes les sessions après une seconde",
    "explication": "La durée doit équilibrer sécurité et usage."
  },
  {
    "id": 107,
    "question": "`Mini-TP gestion d'identité — révocation de session\n\nApplication : annuaire interne\nContexte : extranet B2B\nPopulation : 1388 identités\nDurée d'un access token : 70 minutes\nDurée maximale de session : 40 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-107`",
    "reponse_v": "Invalider les sessions lors d'un incident ou d'un départ",
    "reponse_f1": "Attendre toujours l'expiration",
    "reponse_f2": "Changer seulement le mot de passe local",
    "explication": "La révocation doit couper l'accès actif."
  },
  {
    "id": 108,
    "question": "`Mini-TP gestion d'identité — cookie de session\n\nApplication : plateforme de signature\nContexte : extranet B2B\nPopulation : 1392 identités\nDurée d'un access token : 75 minutes\nDurée maximale de session : 50 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-108`",
    "reponse_v": "Utiliser Secure, HttpOnly et SameSite adaptés",
    "reponse_f1": "Le rendre accessible à tous les scripts",
    "reponse_f2": "Le transmettre en HTTP",
    "explication": "Les attributs réduisent les risques de vol et CSRF."
  },
  {
    "id": 109,
    "question": "`Mini-TP gestion d'identité — token binding au contexte\n\nApplication : gestion documentaire\nContexte : extranet B2B\nPopulation : 1396 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-109`",
    "reponse_v": "Limiter l'usage du jeton au client ou au canal prévu",
    "reponse_f1": "Rendre le jeton utilisable partout",
    "reponse_f2": "Supprimer toute vérification d'origine",
    "explication": "Le binding réduit le rejeu."
  },
  {
    "id": 110,
    "question": "`Mini-TP gestion d'identité — rejeu de jeton\n\nApplication : supervision réseau\nContexte : extranet B2B\nPopulation : 1400 identités\nDurée d'un access token : 50 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-110`",
    "reponse_v": "Utiliser nonce, courte durée et détection d'anomalies",
    "reponse_f1": "Allonger la durée de vie",
    "reponse_f2": "Désactiver la journalisation",
    "explication": "Le rejeu exploite un jeton volé encore valide."
  },
  {
    "id": 111,
    "question": "`Mini-TP gestion d'identité — RBAC\n\nApplication : extranet fournisseur\nContexte : extranet B2B\nPopulation : 1404 identités\nDurée d'un access token : 55 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-111`",
    "reponse_v": "Associer les permissions à des rôles métiers",
    "reponse_f1": "Attribuer tous les droits individuellement sans modèle",
    "reponse_f2": "Utiliser l'adresse IP comme seul rôle",
    "explication": "RBAC simplifie la gouvernance des accès."
  },
  {
    "id": 112,
    "question": "`Mini-TP gestion d'identité — ABAC\n\nApplication : portail citoyen\nContexte : extranet B2B\nPopulation : 1408 identités\nDurée d'un access token : 60 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-112`",
    "reponse_v": "Évaluer des attributs du sujet, de la ressource et du contexte",
    "reponse_f1": "Utiliser uniquement un rôle fixe",
    "reponse_f2": "Utiliser un mot de passe partagé",
    "explication": "ABAC permet des décisions fines et contextuelles."
  },
  {
    "id": 113,
    "question": "`Mini-TP gestion d'identité — ReBAC\n\nApplication : ERP financier\nContexte : extranet B2B\nPopulation : 1412 identités\nDurée d'un access token : 65 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-113`",
    "reponse_v": "Décider selon les relations entre entités",
    "reponse_f1": "Décider uniquement selon l'heure",
    "reponse_f2": "Décider uniquement selon le mot de passe",
    "explication": "ReBAC exploite les relations dans un graphe d'autorisation."
  },
  {
    "id": 114,
    "question": "`Mini-TP gestion d'identité — PAM\n\nApplication : application RH\nContexte : extranet B2B\nPopulation : 1416 identités\nDurée d'un access token : 70 minutes\nDurée maximale de session : 20 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-114`",
    "reponse_v": "Gérer, contrôler et enregistrer les accès à privilèges",
    "reponse_f1": "Partager les comptes administrateurs",
    "reponse_f2": "Désactiver la MFA des administrateurs",
    "explication": "Le PAM réduit le risque des comptes sensibles."
  },
  {
    "id": 115,
    "question": "`Mini-TP gestion d'identité — just-in-time privilege\n\nApplication : API partenaires\nContexte : extranet B2B\nPopulation : 1420 identités\nDurée d'un access token : 75 minutes\nDurée maximale de session : 30 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-115`",
    "reponse_v": "Accorder un privilège temporaire pour une durée limitée",
    "reponse_f1": "Donner un accès permanent",
    "reponse_f2": "Créer un compte administrateur partagé",
    "explication": "Le JIT réduit la fenêtre d'exposition."
  },
  {
    "id": 116,
    "question": "`Mini-TP gestion d'identité — break-glass account\n\nApplication : messagerie collaborative\nContexte : extranet B2B\nPopulation : 1424 identités\nDurée d'un access token : 45 minutes\nDurée maximale de session : 40 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-116`",
    "reponse_v": "Conserver un compte d'urgence fortement protégé et surveillé",
    "reponse_f1": "Utiliser le compte d'urgence au quotidien",
    "reponse_f2": "Partager son secret sans contrôle",
    "explication": "Un compte break-glass sert aux situations exceptionnelles."
  },
  {
    "id": 117,
    "question": "`Mini-TP gestion d'identité — consentement OAuth\n\nApplication : plateforme e-commerce\nContexte : extranet B2B\nPopulation : 1428 identités\nDurée d'un access token : 50 minutes\nDurée maximale de session : 50 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-117`",
    "reponse_v": "Limiter les scopes demandés et informer l'utilisateur",
    "reponse_f1": "Demander tous les scopes par défaut",
    "reponse_f2": "Ignorer les permissions",
    "explication": "Le consentement doit être proportionné."
  },
  {
    "id": 118,
    "question": "`Mini-TP gestion d'identité — scope OAuth\n\nApplication : outil de ticketing\nContexte : extranet B2B\nPopulation : 1432 identités\nDurée d'un access token : 55 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-118`",
    "reponse_v": "Définir des permissions précises pour l'API",
    "reponse_f1": "Utiliser un scope unique administrateur",
    "reponse_f2": "Confondre scope et mot de passe",
    "explication": "Les scopes bornent les capacités du jeton."
  },
  {
    "id": 119,
    "question": "`Mini-TP gestion d'identité — service account\n\nApplication : application mobile\nContexte : extranet B2B\nPopulation : 1436 identités\nDurée d'un access token : 60 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-119`",
    "reponse_v": "Utiliser une identité technique dédiée avec secret ou clé gérée",
    "reponse_f1": "Utiliser le compte personnel d'un développeur",
    "reponse_f2": "Partager un compte humain",
    "explication": "Les comptes de service doivent être gérés séparément."
  },
  {
    "id": 120,
    "question": "`Mini-TP gestion d'identité — architecture IAM résiliente\n\nApplication : VPN d'entreprise\nContexte : extranet B2B\nPopulation : 1440 identités\nDurée d'un access token : 65 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-120`",
    "reponse_v": "Redonder IdP, annuaire et mécanismes de secours",
    "reponse_f1": "Dépendre d'un seul serveur sans PRA",
    "reponse_f2": "Supprimer toute authentification locale de secours",
    "explication": "L'IAM est critique et doit être hautement disponible."
  },
  {
    "id": 121,
    "question": "`Mini-TP gestion d'identité — cycle de vie d'un compte\n\nApplication : supervision réseau\nContexte : plateforme cloud\nPopulation : 5005 identités\nDurée d'un access token : 95 minutes\nDurée maximale de session : 45 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-121`",
    "reponse_v": "Automatiser création, modification et suppression selon les événements RH",
    "reponse_f1": "Créer les comptes manuellement sans processus de sortie",
    "reponse_f2": "Conserver les comptes après départ",
    "explication": "Le cycle de vie doit suivre les arrivées, mobilités et départs."
  },
  {
    "id": 122,
    "question": "`Mini-TP gestion d'identité — joiner-mover-leaver\n\nApplication : extranet fournisseur\nContexte : plateforme cloud\nPopulation : 5010 identités\nDurée d'un access token : 100 minutes\nDurée maximale de session : 55 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-122`",
    "reponse_v": "Réévaluer les droits à chaque changement de poste",
    "reponse_f1": "Conserver tous les anciens droits",
    "reponse_f2": "Supprimer seulement le mot de passe",
    "explication": "Le modèle JML évite l'accumulation de privilèges."
  },
  {
    "id": 123,
    "question": "`Mini-TP gestion d'identité — identité de référence\n\nApplication : portail citoyen\nContexte : plateforme cloud\nPopulation : 5015 identités\nDurée d'un access token : 105 minutes\nDurée maximale de session : 65 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-123`",
    "reponse_v": "Définir une source autoritative claire",
    "reponse_f1": "Utiliser chaque application comme source maîtresse",
    "reponse_f2": "Fusionner les identités sans règle",
    "explication": "Une source autoritative évite les divergences."
  },
  {
    "id": 124,
    "question": "`Mini-TP gestion d'identité — compte orphelin\n\nApplication : ERP financier\nContexte : plateforme cloud\nPopulation : 5020 identités\nDurée d'un access token : 110 minutes\nDurée maximale de session : 75 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-124`",
    "reponse_v": "Identifier puis désactiver ou supprimer le compte",
    "reponse_f1": "Le conserver indéfiniment",
    "reponse_f2": "Changer seulement son nom",
    "explication": "Un compte sans propriétaire est un risque."
  },
  {
    "id": 125,
    "question": "`Mini-TP gestion d'identité — identité unique\n\nApplication : application RH\nContexte : plateforme cloud\nPopulation : 5025 identités\nDurée d'un access token : 115 minutes\nDurée maximale de session : 85 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-125`",
    "reponse_v": "Utiliser un identifiant pérenne non réattribué",
    "reponse_f1": "Réutiliser les identifiants des anciens salariés",
    "reponse_f2": "Utiliser uniquement le prénom",
    "explication": "Un identifiant stable évite les collisions."
  },
  {
    "id": 126,
    "question": "`Mini-TP gestion d'identité — moindre privilège\n\nApplication : API partenaires\nContexte : plateforme cloud\nPopulation : 5030 identités\nDurée d'un access token : 120 minutes\nDurée maximale de session : 95 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-126`",
    "reponse_v": "Accorder seulement les droits nécessaires",
    "reponse_f1": "Donner les droits administrateur par défaut",
    "reponse_f2": "Cumuler les rôles historiques",
    "explication": "Le moindre privilège limite l'impact d'une compromission."
  },
  {
    "id": 127,
    "question": "`Mini-TP gestion d'identité — séparation des tâches\n\nApplication : messagerie collaborative\nContexte : plateforme cloud\nPopulation : 5035 identités\nDurée d'un access token : 90 minutes\nDurée maximale de session : 105 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-127`",
    "reponse_v": "Empêcher qu'une même personne crée et valide une opération sensible",
    "reponse_f1": "Autoriser une seule personne à tout faire",
    "reponse_f2": "Partager un compte commun",
    "explication": "La séparation des tâches réduit fraude et erreur."
  },
  {
    "id": 128,
    "question": "`Mini-TP gestion d'identité — recertification des accès\n\nApplication : plateforme e-commerce\nContexte : plateforme cloud\nPopulation : 5040 identités\nDurée d'un access token : 95 minutes\nDurée maximale de session : 115 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-128`",
    "reponse_v": "Faire valider périodiquement les droits par les responsables",
    "reponse_f1": "Considérer les droits permanents",
    "reponse_f2": "Réviser uniquement les mots de passe",
    "explication": "La recertification réduit les privilèges obsolètes."
  },
  {
    "id": 129,
    "question": "`Mini-TP gestion d'identité — identité humaine et technique\n\nApplication : outil de ticketing\nContexte : plateforme cloud\nPopulation : 5045 identités\nDurée d'un access token : 100 minutes\nDurée maximale de session : 35 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-129`",
    "reponse_v": "Distinguer clairement comptes utilisateurs et comptes de service",
    "reponse_f1": "Utiliser les comptes personnels pour les traitements automatiques",
    "reponse_f2": "Partager un même compte pour tous",
    "explication": "Les identités techniques ont un cycle de vie différent."
  },
  {
    "id": 130,
    "question": "`Mini-TP gestion d'identité — gouvernance IAM\n\nApplication : application mobile\nContexte : plateforme cloud\nPopulation : 5050 identités\nDurée d'un access token : 105 minutes\nDurée maximale de session : 45 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-130`",
    "reponse_v": "Définir propriétaires, règles, contrôles et indicateurs",
    "reponse_f1": "Limiter l'IAM à l'écran de connexion",
    "reponse_f2": "Laisser chaque application décider sans coordination",
    "explication": "La gouvernance couvre tout le cycle de vie et les responsabilités."
  },
  {
    "id": 131,
    "question": "`Mini-TP gestion d'identité — SSO\n\nApplication : VPN d'entreprise\nContexte : plateforme cloud\nPopulation : 5055 identités\nDurée d'un access token : 110 minutes\nDurée maximale de session : 55 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-131`",
    "reponse_v": "Centraliser l'authentification tout en conservant des sessions applicatives distinctes",
    "reponse_f1": "Partager un mot de passe entre toutes les applications",
    "reponse_f2": "Supprimer toute authentification locale sans fédération",
    "explication": "Le SSO réduit les authentifications répétées."
  },
  {
    "id": 132,
    "question": "`Mini-TP gestion d'identité — fédération d'identité\n\nApplication : console cloud\nContexte : plateforme cloud\nPopulation : 5060 identités\nDurée d'un access token : 115 minutes\nDurée maximale de session : 65 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-132`",
    "reponse_v": "Établir une relation de confiance entre fournisseur d'identité et fournisseur de service",
    "reponse_f1": "Dupliquer les mots de passe dans chaque application",
    "reponse_f2": "Utiliser seulement un VPN",
    "explication": "La fédération transporte des assertions ou jetons de confiance."
  },
  {
    "id": 133,
    "question": "`Mini-TP gestion d'identité — SAML 2.0\n\nApplication : annuaire interne\nContexte : plateforme cloud\nPopulation : 5065 identités\nDurée d'un access token : 120 minutes\nDurée maximale de session : 75 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-133`",
    "reponse_v": "Utiliser des assertions signées entre IdP et SP",
    "reponse_f1": "Utiliser uniquement des cookies locaux",
    "reponse_f2": "Utiliser DHCP",
    "explication": "SAML est adapté au SSO web d'entreprise."
  },
  {
    "id": 134,
    "question": "`Mini-TP gestion d'identité — OpenID Connect\n\nApplication : plateforme de signature\nContexte : plateforme cloud\nPopulation : 5070 identités\nDurée d'un access token : 90 minutes\nDurée maximale de session : 85 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-134`",
    "reponse_v": "Utiliser OIDC pour authentifier l'utilisateur au-dessus d'OAuth 2.0",
    "reponse_f1": "Utiliser OAuth 2.0 seul comme preuve d'identité",
    "reponse_f2": "Utiliser LDAP directement dans le navigateur",
    "explication": "OIDC ajoute une couche d'identité à OAuth 2.0."
  },
  {
    "id": 135,
    "question": "`Mini-TP gestion d'identité — OAuth 2.0\n\nApplication : gestion documentaire\nContexte : plateforme cloud\nPopulation : 5075 identités\nDurée d'un access token : 95 minutes\nDurée maximale de session : 95 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-135`",
    "reponse_v": "Utiliser OAuth 2.0 pour déléguer un accès à une ressource",
    "reponse_f1": "Utiliser OAuth 2.0 comme annuaire",
    "reponse_f2": "Utiliser OAuth 2.0 pour chiffrer les données",
    "explication": "OAuth 2.0 est un cadre d'autorisation déléguée."
  },
  {
    "id": 136,
    "question": "`Mini-TP gestion d'identité — IdP\n\nApplication : supervision réseau\nContexte : plateforme cloud\nPopulation : 5080 identités\nDurée d'un access token : 100 minutes\nDurée maximale de session : 105 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-136`",
    "reponse_v": "Centraliser l'authentification et émettre des assertions ou jetons",
    "reponse_f1": "Héberger uniquement les données métier",
    "reponse_f2": "Remplacer le pare-feu",
    "explication": "L'IdP authentifie l'utilisateur."
  },
  {
    "id": 137,
    "question": "`Mini-TP gestion d'identité — SP ou RP\n\nApplication : extranet fournisseur\nContexte : plateforme cloud\nPopulation : 5085 identités\nDurée d'un access token : 105 minutes\nDurée maximale de session : 115 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-137`",
    "reponse_v": "Consommer l'identité fournie par l'IdP",
    "reponse_f1": "Émettre toujours les mots de passe",
    "reponse_f2": "Gérer le routage réseau",
    "explication": "Le SP/RP fait confiance au fournisseur d'identité."
  },
  {
    "id": 138,
    "question": "`Mini-TP gestion d'identité — single logout\n\nApplication : portail citoyen\nContexte : plateforme cloud\nPopulation : 5090 identités\nDurée d'un access token : 110 minutes\nDurée maximale de session : 35 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-138`",
    "reponse_v": "Propager la fermeture de session selon les capacités du protocole",
    "reponse_f1": "Supprimer uniquement le cookie d'une application",
    "reponse_f2": "Révoquer le compte utilisateur",
    "explication": "Le SLO tente de fermer les sessions fédérées."
  },
  {
    "id": 139,
    "question": "`Mini-TP gestion d'identité — home realm discovery\n\nApplication : ERP financier\nContexte : plateforme cloud\nPopulation : 5095 identités\nDurée d'un access token : 115 minutes\nDurée maximale de session : 45 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-139`",
    "reponse_v": "Identifier le bon fournisseur d'identité pour l'utilisateur",
    "reponse_f1": "Créer un nouveau compte local à chaque connexion",
    "reponse_f2": "Désactiver les domaines externes",
    "explication": "La découverte de domaine oriente vers l'IdP approprié."
  },
  {
    "id": 140,
    "question": "`Mini-TP gestion d'identité — fédération B2B\n\nApplication : application RH\nContexte : plateforme cloud\nPopulation : 5100 identités\nDurée d'un access token : 120 minutes\nDurée maximale de session : 55 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-140`",
    "reponse_v": "Utiliser des identités externes avec politiques dédiées",
    "reponse_f1": "Créer systématiquement des comptes internes permanents",
    "reponse_f2": "Partager un compte générique fournisseur",
    "explication": "La fédération B2B limite la duplication d'identités."
  },
  {
    "id": 141,
    "question": "`Mini-TP gestion d'identité — MFA\n\nApplication : API partenaires\nContexte : plateforme cloud\nPopulation : 5105 identités\nDurée d'un access token : 90 minutes\nDurée maximale de session : 65 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-141`",
    "reponse_v": "Combiner au moins deux facteurs indépendants",
    "reponse_f1": "Demander deux fois le même mot de passe",
    "reponse_f2": "Utiliser deux questions secrètes",
    "explication": "Deux facteurs doivent appartenir à des catégories différentes."
  },
  {
    "id": 142,
    "question": "`Mini-TP gestion d'identité — TOTP\n\nApplication : messagerie collaborative\nContexte : plateforme cloud\nPopulation : 5110 identités\nDurée d'un access token : 95 minutes\nDurée maximale de session : 75 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-142`",
    "reponse_v": "Utiliser un secret partagé et des codes temporels courts",
    "reponse_f1": "Utiliser un mot de passe fixe envoyé par e-mail",
    "reponse_f2": "Utiliser un certificat serveur",
    "explication": "TOTP génère des codes à durée limitée."
  },
  {
    "id": 143,
    "question": "`Mini-TP gestion d'identité — WebAuthn\n\nApplication : plateforme e-commerce\nContexte : plateforme cloud\nPopulation : 5115 identités\nDurée d'un access token : 100 minutes\nDurée maximale de session : 85 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-143`",
    "reponse_v": "Utiliser une authentification résistante au phishing liée au domaine",
    "reponse_f1": "Utiliser un OTP SMS comme équivalent exact",
    "reponse_f2": "Utiliser une question secrète",
    "explication": "WebAuthn repose sur des clés asymétriques et l'origine web."
  },
  {
    "id": 144,
    "question": "`Mini-TP gestion d'identité — FIDO2\n\nApplication : outil de ticketing\nContexte : plateforme cloud\nPopulation : 5120 identités\nDurée d'un access token : 105 minutes\nDurée maximale de session : 95 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-144`",
    "reponse_v": "Combiner WebAuthn et CTAP pour une authentification forte",
    "reponse_f1": "Utiliser uniquement LDAP simple",
    "reponse_f2": "Utiliser un cookie persistant comme facteur",
    "explication": "FIDO2 permet l'authentification sans mot de passe."
  },
  {
    "id": 145,
    "question": "`Mini-TP gestion d'identité — push MFA fatigue\n\nApplication : application mobile\nContexte : plateforme cloud\nPopulation : 5125 identités\nDurée d'un access token : 110 minutes\nDurée maximale de session : 105 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-145`",
    "reponse_v": "Limiter les sollicitations, utiliser number matching et détection d'anomalies",
    "reponse_f1": "Envoyer davantage de notifications",
    "reponse_f2": "Autoriser toute validation automatique",
    "explication": "Les attaques de fatigue exploitent les approbations répétées."
  },
  {
    "id": 146,
    "question": "`Mini-TP gestion d'identité — SMS OTP\n\nApplication : VPN d'entreprise\nContexte : plateforme cloud\nPopulation : 5130 identités\nDurée d'un access token : 115 minutes\nDurée maximale de session : 115 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-146`",
    "reponse_v": "Le considérer moins résistant que WebAuthn aux interceptions et au SIM swap",
    "reponse_f1": "Le considérer invulnérable",
    "reponse_f2": "Le préférer à toute autre méthode",
    "explication": "Le SMS présente des risques spécifiques."
  },
  {
    "id": 147,
    "question": "`Mini-TP gestion d'identité — certificat client\n\nApplication : console cloud\nContexte : plateforme cloud\nPopulation : 5135 identités\nDurée d'un access token : 120 minutes\nDurée maximale de session : 35 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-147`",
    "reponse_v": "Utiliser un certificat personnel pour authentifier le terminal ou l'utilisateur",
    "reponse_f1": "Utiliser le certificat serveur du site",
    "reponse_f2": "Utiliser uniquement un mot de passe partagé",
    "explication": "Un certificat client fournit une preuve asymétrique."
  },
  {
    "id": 148,
    "question": "`Mini-TP gestion d'identité — step-up authentication\n\nApplication : annuaire interne\nContexte : plateforme cloud\nPopulation : 5140 identités\nDurée d'un access token : 90 minutes\nDurée maximale de session : 45 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-148`",
    "reponse_v": "Demander un facteur supplémentaire pour une action sensible",
    "reponse_f1": "Réauthentifier moins fortement",
    "reponse_f2": "Augmenter seulement la durée de session",
    "explication": "Le step-up adapte le niveau d'assurance au risque."
  },
  {
    "id": 149,
    "question": "`Mini-TP gestion d'identité — authentification adaptative\n\nApplication : plateforme de signature\nContexte : plateforme cloud\nPopulation : 5145 identités\nDurée d'un access token : 95 minutes\nDurée maximale de session : 55 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-149`",
    "reponse_v": "Tenir compte du contexte, du terminal et du risque",
    "reponse_f1": "Appliquer toujours la même règle sans contexte",
    "reponse_f2": "Supprimer la MFA pour les connexions externes",
    "explication": "L'authentification adaptative ajuste les contrôles."
  },
  {
    "id": 150,
    "question": "`Mini-TP gestion d'identité — passwordless\n\nApplication : gestion documentaire\nContexte : plateforme cloud\nPopulation : 5150 identités\nDurée d'un access token : 100 minutes\nDurée maximale de session : 65 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-150`",
    "reponse_v": "Utiliser une clé cryptographique ou un lien sécurisé sans mot de passe permanent",
    "reponse_f1": "Stocker un mot de passe caché dans l'application",
    "reponse_f2": "Envoyer le mot de passe en clair",
    "explication": "Le passwordless supprime le secret mémorisé par l'utilisateur."
  },
  {
    "id": 151,
    "question": "`Mini-TP gestion d'identité — SCIM\n\nApplication : supervision réseau\nContexte : plateforme cloud\nPopulation : 5155 identités\nDurée d'un access token : 105 minutes\nDurée maximale de session : 75 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-151`",
    "reponse_v": "Utiliser SCIM pour provisionner utilisateurs et groupes entre systèmes",
    "reponse_f1": "Utiliser SAML pour synchroniser les comptes",
    "reponse_f2": "Utiliser DNS",
    "explication": "SCIM standardise le provisioning d'identités."
  },
  {
    "id": 152,
    "question": "`Mini-TP gestion d'identité — provisioning just-in-time\n\nApplication : extranet fournisseur\nContexte : plateforme cloud\nPopulation : 5160 identités\nDurée d'un access token : 110 minutes\nDurée maximale de session : 85 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-152`",
    "reponse_v": "Créer le compte lors de la première connexion fédérée",
    "reponse_f1": "Créer tous les comptes des années à l'avance",
    "reponse_f2": "Conserver les comptes après révocation",
    "explication": "Le JIT crée le compte au moment du besoin."
  },
  {
    "id": 153,
    "question": "`Mini-TP gestion d'identité — deprovisioning\n\nApplication : portail citoyen\nContexte : plateforme cloud\nPopulation : 5165 identités\nDurée d'un access token : 115 minutes\nDurée maximale de session : 95 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-153`",
    "reponse_v": "Révoquer rapidement sessions, jetons et accès lors d'un départ",
    "reponse_f1": "Supprimer uniquement l'adresse e-mail",
    "reponse_f2": "Attendre l'expiration naturelle de tous les jetons",
    "explication": "La sortie doit couper tous les accès."
  },
  {
    "id": 154,
    "question": "`Mini-TP gestion d'identité — LDAP bind\n\nApplication : ERP financier\nContexte : plateforme cloud\nPopulation : 5170 identités\nDurée d'un access token : 120 minutes\nDurée maximale de session : 105 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-154`",
    "reponse_v": "Authentifier une application auprès de l'annuaire avec un compte dédié minimal",
    "reponse_f1": "Utiliser un compte administrateur global",
    "reponse_f2": "Partager le mot de passe d'un utilisateur",
    "explication": "Le compte de bind doit suivre le moindre privilège."
  },
  {
    "id": 155,
    "question": "`Mini-TP gestion d'identité — LDAPS\n\nApplication : application RH\nContexte : plateforme cloud\nPopulation : 5175 identités\nDurée d'un access token : 90 minutes\nDurée maximale de session : 115 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-155`",
    "reponse_v": "Protéger les échanges LDAP avec TLS",
    "reponse_f1": "Utiliser LDAP simple sur Internet",
    "reponse_f2": "Encoder seulement en Base64",
    "explication": "LDAPS protège les identifiants et les requêtes."
  },
  {
    "id": 156,
    "question": "`Mini-TP gestion d'identité — synchronisation de groupes\n\nApplication : API partenaires\nContexte : plateforme cloud\nPopulation : 5180 identités\nDurée d'un access token : 95 minutes\nDurée maximale de session : 35 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-156`",
    "reponse_v": "Mapper explicitement les groupes entre IdP et applications",
    "reponse_f1": "Supposer que tous les noms sont identiques",
    "reponse_f2": "Créer des droits locaux sans gouvernance",
    "explication": "Le mapping doit être contrôlé."
  },
  {
    "id": 157,
    "question": "`Mini-TP gestion d'identité — attribut obligatoire\n\nApplication : messagerie collaborative\nContexte : plateforme cloud\nPopulation : 5185 identités\nDurée d'un access token : 100 minutes\nDurée maximale de session : 45 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-157`",
    "reponse_v": "Valider la présence et le format avant provisioning",
    "reponse_f1": "Créer le compte avec des données incohérentes",
    "reponse_f2": "Remplacer les valeurs absentes par zéro",
    "explication": "Les attributs alimentent les règles d'accès."
  },
  {
    "id": 158,
    "question": "`Mini-TP gestion d'identité — source autoritative RH\n\nApplication : plateforme e-commerce\nContexte : plateforme cloud\nPopulation : 5190 identités\nDurée d'un access token : 105 minutes\nDurée maximale de session : 55 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-158`",
    "reponse_v": "Propager les changements RH vers l'IAM",
    "reponse_f1": "Laisser les applications modifier le statut d'emploi",
    "reponse_f2": "Conserver des comptes déconnectés du RH",
    "explication": "Le RH est souvent la source des identités humaines."
  },
  {
    "id": 159,
    "question": "`Mini-TP gestion d'identité — identité corrélée\n\nApplication : outil de ticketing\nContexte : plateforme cloud\nPopulation : 5195 identités\nDurée d'un access token : 110 minutes\nDurée maximale de session : 65 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-159`",
    "reponse_v": "Utiliser des règles fiables pour rapprocher les comptes d'une même personne",
    "reponse_f1": "Fusionner sur le prénom uniquement",
    "reponse_f2": "Créer une identité par application sans lien",
    "explication": "La corrélation évite doublons et erreurs."
  },
  {
    "id": 160,
    "question": "`Mini-TP gestion d'identité — réconciliation\n\nApplication : application mobile\nContexte : plateforme cloud\nPopulation : 5200 identités\nDurée d'un access token : 115 minutes\nDurée maximale de session : 75 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-160`",
    "reponse_v": "Comparer périodiquement l'état attendu et l'état réel des comptes",
    "reponse_f1": "Faire confiance uniquement aux événements",
    "reponse_f2": "Ne jamais vérifier les écarts",
    "explication": "La réconciliation détecte les dérives."
  },
  {
    "id": 161,
    "question": "`Mini-TP gestion d'identité — access token\n\nApplication : VPN d'entreprise\nContexte : plateforme cloud\nPopulation : 5205 identités\nDurée d'un access token : 120 minutes\nDurée maximale de session : 85 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-161`",
    "reponse_v": "Limiter sa durée et son audience",
    "reponse_f1": "Le rendre permanent et universel",
    "reponse_f2": "Le stocker dans une URL publique",
    "explication": "Un access token doit être limité et protégé."
  },
  {
    "id": 162,
    "question": "`Mini-TP gestion d'identité — refresh token\n\nApplication : console cloud\nContexte : plateforme cloud\nPopulation : 5210 identités\nDurée d'un access token : 90 minutes\nDurée maximale de session : 95 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-162`",
    "reponse_v": "Le protéger davantage et prévoir rotation ou révocation",
    "reponse_f1": "Le traiter comme un identifiant public",
    "reponse_f2": "Le partager entre applications",
    "explication": "Un refresh token permet d'obtenir de nouveaux access tokens."
  },
  {
    "id": 163,
    "question": "`Mini-TP gestion d'identité — ID token\n\nApplication : annuaire interne\nContexte : plateforme cloud\nPopulation : 5215 identités\nDurée d'un access token : 95 minutes\nDurée maximale de session : 105 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-163`",
    "reponse_v": "L'utiliser comme preuve d'authentification pour le client prévu",
    "reponse_f1": "L'utiliser comme jeton universel d'accès à toutes les API",
    "reponse_f2": "Le considérer comme un mot de passe",
    "explication": "L'ID token décrit l'authentification de l'utilisateur."
  },
  {
    "id": 164,
    "question": "`Mini-TP gestion d'identité — audience d'un jeton\n\nApplication : plateforme de signature\nContexte : plateforme cloud\nPopulation : 5220 identités\nDurée d'un access token : 100 minutes\nDurée maximale de session : 115 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-164`",
    "reponse_v": "Vérifier que le jeton vise bien le service destinataire",
    "reponse_f1": "Ignorer le champ aud",
    "reponse_f2": "Accepter tout jeton signé",
    "explication": "L'audience empêche la réutilisation entre services."
  },
  {
    "id": 165,
    "question": "`Mini-TP gestion d'identité — issuer d'un jeton\n\nApplication : gestion documentaire\nContexte : plateforme cloud\nPopulation : 5225 identités\nDurée d'un access token : 105 minutes\nDurée maximale de session : 35 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-165`",
    "reponse_v": "Vérifier l'émetteur attendu",
    "reponse_f1": "Faire confiance à tout issuer",
    "reponse_f2": "Se baser uniquement sur le nom utilisateur",
    "explication": "L'issuer identifie l'autorité qui a émis le jeton."
  },
  {
    "id": 166,
    "question": "`Mini-TP gestion d'identité — expiration de session\n\nApplication : supervision réseau\nContexte : plateforme cloud\nPopulation : 5230 identités\nDurée d'un access token : 110 minutes\nDurée maximale de session : 45 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-166`",
    "reponse_v": "Définir des durées adaptées au risque et à l'activité",
    "reponse_f1": "Utiliser des sessions infinies",
    "reponse_f2": "Expirer toutes les sessions après une seconde",
    "explication": "La durée doit équilibrer sécurité et usage."
  },
  {
    "id": 167,
    "question": "`Mini-TP gestion d'identité — révocation de session\n\nApplication : extranet fournisseur\nContexte : plateforme cloud\nPopulation : 5235 identités\nDurée d'un access token : 115 minutes\nDurée maximale de session : 55 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-167`",
    "reponse_v": "Invalider les sessions lors d'un incident ou d'un départ",
    "reponse_f1": "Attendre toujours l'expiration",
    "reponse_f2": "Changer seulement le mot de passe local",
    "explication": "La révocation doit couper l'accès actif."
  },
  {
    "id": 168,
    "question": "`Mini-TP gestion d'identité — cookie de session\n\nApplication : portail citoyen\nContexte : plateforme cloud\nPopulation : 5240 identités\nDurée d'un access token : 120 minutes\nDurée maximale de session : 65 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-168`",
    "reponse_v": "Utiliser Secure, HttpOnly et SameSite adaptés",
    "reponse_f1": "Le rendre accessible à tous les scripts",
    "reponse_f2": "Le transmettre en HTTP",
    "explication": "Les attributs réduisent les risques de vol et CSRF."
  },
  {
    "id": 169,
    "question": "`Mini-TP gestion d'identité — token binding au contexte\n\nApplication : ERP financier\nContexte : plateforme cloud\nPopulation : 5245 identités\nDurée d'un access token : 90 minutes\nDurée maximale de session : 75 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-169`",
    "reponse_v": "Limiter l'usage du jeton au client ou au canal prévu",
    "reponse_f1": "Rendre le jeton utilisable partout",
    "reponse_f2": "Supprimer toute vérification d'origine",
    "explication": "Le binding réduit le rejeu."
  },
  {
    "id": 170,
    "question": "`Mini-TP gestion d'identité — rejeu de jeton\n\nApplication : application RH\nContexte : plateforme cloud\nPopulation : 5250 identités\nDurée d'un access token : 95 minutes\nDurée maximale de session : 85 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-170`",
    "reponse_v": "Utiliser nonce, courte durée et détection d'anomalies",
    "reponse_f1": "Allonger la durée de vie",
    "reponse_f2": "Désactiver la journalisation",
    "explication": "Le rejeu exploite un jeton volé encore valide."
  },
  {
    "id": 171,
    "question": "`Mini-TP gestion d'identité — RBAC\n\nApplication : API partenaires\nContexte : plateforme cloud\nPopulation : 5255 identités\nDurée d'un access token : 100 minutes\nDurée maximale de session : 95 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-171`",
    "reponse_v": "Associer les permissions à des rôles métiers",
    "reponse_f1": "Attribuer tous les droits individuellement sans modèle",
    "reponse_f2": "Utiliser l'adresse IP comme seul rôle",
    "explication": "RBAC simplifie la gouvernance des accès."
  },
  {
    "id": 172,
    "question": "`Mini-TP gestion d'identité — ABAC\n\nApplication : messagerie collaborative\nContexte : plateforme cloud\nPopulation : 5260 identités\nDurée d'un access token : 105 minutes\nDurée maximale de session : 105 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-172`",
    "reponse_v": "Évaluer des attributs du sujet, de la ressource et du contexte",
    "reponse_f1": "Utiliser uniquement un rôle fixe",
    "reponse_f2": "Utiliser un mot de passe partagé",
    "explication": "ABAC permet des décisions fines et contextuelles."
  },
  {
    "id": 173,
    "question": "`Mini-TP gestion d'identité — ReBAC\n\nApplication : plateforme e-commerce\nContexte : plateforme cloud\nPopulation : 5265 identités\nDurée d'un access token : 110 minutes\nDurée maximale de session : 115 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-173`",
    "reponse_v": "Décider selon les relations entre entités",
    "reponse_f1": "Décider uniquement selon l'heure",
    "reponse_f2": "Décider uniquement selon le mot de passe",
    "explication": "ReBAC exploite les relations dans un graphe d'autorisation."
  },
  {
    "id": 174,
    "question": "`Mini-TP gestion d'identité — PAM\n\nApplication : outil de ticketing\nContexte : plateforme cloud\nPopulation : 5270 identités\nDurée d'un access token : 115 minutes\nDurée maximale de session : 35 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-174`",
    "reponse_v": "Gérer, contrôler et enregistrer les accès à privilèges",
    "reponse_f1": "Partager les comptes administrateurs",
    "reponse_f2": "Désactiver la MFA des administrateurs",
    "explication": "Le PAM réduit le risque des comptes sensibles."
  },
  {
    "id": 175,
    "question": "`Mini-TP gestion d'identité — just-in-time privilege\n\nApplication : application mobile\nContexte : plateforme cloud\nPopulation : 5275 identités\nDurée d'un access token : 120 minutes\nDurée maximale de session : 45 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-175`",
    "reponse_v": "Accorder un privilège temporaire pour une durée limitée",
    "reponse_f1": "Donner un accès permanent",
    "reponse_f2": "Créer un compte administrateur partagé",
    "explication": "Le JIT réduit la fenêtre d'exposition."
  },
  {
    "id": 176,
    "question": "`Mini-TP gestion d'identité — break-glass account\n\nApplication : VPN d'entreprise\nContexte : plateforme cloud\nPopulation : 5280 identités\nDurée d'un access token : 90 minutes\nDurée maximale de session : 55 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-176`",
    "reponse_v": "Conserver un compte d'urgence fortement protégé et surveillé",
    "reponse_f1": "Utiliser le compte d'urgence au quotidien",
    "reponse_f2": "Partager son secret sans contrôle",
    "explication": "Un compte break-glass sert aux situations exceptionnelles."
  },
  {
    "id": 177,
    "question": "`Mini-TP gestion d'identité — consentement OAuth\n\nApplication : console cloud\nContexte : plateforme cloud\nPopulation : 5285 identités\nDurée d'un access token : 95 minutes\nDurée maximale de session : 65 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-177`",
    "reponse_v": "Limiter les scopes demandés et informer l'utilisateur",
    "reponse_f1": "Demander tous les scopes par défaut",
    "reponse_f2": "Ignorer les permissions",
    "explication": "Le consentement doit être proportionné."
  },
  {
    "id": 178,
    "question": "`Mini-TP gestion d'identité — scope OAuth\n\nApplication : annuaire interne\nContexte : plateforme cloud\nPopulation : 5290 identités\nDurée d'un access token : 100 minutes\nDurée maximale de session : 75 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-178`",
    "reponse_v": "Définir des permissions précises pour l'API",
    "reponse_f1": "Utiliser un scope unique administrateur",
    "reponse_f2": "Confondre scope et mot de passe",
    "explication": "Les scopes bornent les capacités du jeton."
  },
  {
    "id": 179,
    "question": "`Mini-TP gestion d'identité — service account\n\nApplication : plateforme de signature\nContexte : plateforme cloud\nPopulation : 5295 identités\nDurée d'un access token : 105 minutes\nDurée maximale de session : 85 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-179`",
    "reponse_v": "Utiliser une identité technique dédiée avec secret ou clé gérée",
    "reponse_f1": "Utiliser le compte personnel d'un développeur",
    "reponse_f2": "Partager un compte humain",
    "explication": "Les comptes de service doivent être gérés séparément."
  },
  {
    "id": 180,
    "question": "`Mini-TP gestion d'identité — architecture IAM résiliente\n\nApplication : gestion documentaire\nContexte : plateforme cloud\nPopulation : 5300 identités\nDurée d'un access token : 110 minutes\nDurée maximale de session : 95 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-180`",
    "reponse_v": "Redonder IdP, annuaire et mécanismes de secours",
    "reponse_f1": "Dépendre d'un seul serveur sans PRA",
    "reponse_f2": "Supprimer toute authentification locale de secours",
    "explication": "L'IAM est critique et doit être hautement disponible."
  },
  {
    "id": 181,
    "question": "`Mini-TP gestion d'identité — cycle de vie d'un compte\n\nApplication : application RH\nContexte : application critique\nPopulation : 18006 identités\nDurée d'un access token : 185 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-181`",
    "reponse_v": "Automatiser création, modification et suppression selon les événements RH",
    "reponse_f1": "Créer les comptes manuellement sans processus de sortie",
    "reponse_f2": "Conserver les comptes après départ",
    "explication": "Le cycle de vie doit suivre les arrivées, mobilités et départs."
  },
  {
    "id": 182,
    "question": "`Mini-TP gestion d'identité — joiner-mover-leaver\n\nApplication : API partenaires\nContexte : application critique\nPopulation : 18012 identités\nDurée d'un access token : 190 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-182`",
    "reponse_v": "Réévaluer les droits à chaque changement de poste",
    "reponse_f1": "Conserver tous les anciens droits",
    "reponse_f2": "Supprimer seulement le mot de passe",
    "explication": "Le modèle JML évite l'accumulation de privilèges."
  },
  {
    "id": 183,
    "question": "`Mini-TP gestion d'identité — identité de référence\n\nApplication : messagerie collaborative\nContexte : application critique\nPopulation : 18018 identités\nDurée d'un access token : 195 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-183`",
    "reponse_v": "Définir une source autoritative claire",
    "reponse_f1": "Utiliser chaque application comme source maîtresse",
    "reponse_f2": "Fusionner les identités sans règle",
    "explication": "Une source autoritative évite les divergences."
  },
  {
    "id": 184,
    "question": "`Mini-TP gestion d'identité — compte orphelin\n\nApplication : plateforme e-commerce\nContexte : application critique\nPopulation : 18024 identités\nDurée d'un access token : 200 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-184`",
    "reponse_v": "Identifier puis désactiver ou supprimer le compte",
    "reponse_f1": "Le conserver indéfiniment",
    "reponse_f2": "Changer seulement son nom",
    "explication": "Un compte sans propriétaire est un risque."
  },
  {
    "id": 185,
    "question": "`Mini-TP gestion d'identité — identité unique\n\nApplication : outil de ticketing\nContexte : application critique\nPopulation : 18030 identités\nDurée d'un access token : 205 minutes\nDurée maximale de session : 110 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-185`",
    "reponse_v": "Utiliser un identifiant pérenne non réattribué",
    "reponse_f1": "Réutiliser les identifiants des anciens salariés",
    "reponse_f2": "Utiliser uniquement le prénom",
    "explication": "Un identifiant stable évite les collisions."
  },
  {
    "id": 186,
    "question": "`Mini-TP gestion d'identité — moindre privilège\n\nApplication : application mobile\nContexte : application critique\nPopulation : 18036 identités\nDurée d'un access token : 210 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-186`",
    "reponse_v": "Accorder seulement les droits nécessaires",
    "reponse_f1": "Donner les droits administrateur par défaut",
    "reponse_f2": "Cumuler les rôles historiques",
    "explication": "Le moindre privilège limite l'impact d'une compromission."
  },
  {
    "id": 187,
    "question": "`Mini-TP gestion d'identité — séparation des tâches\n\nApplication : VPN d'entreprise\nContexte : application critique\nPopulation : 18042 identités\nDurée d'un access token : 180 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-187`",
    "reponse_v": "Empêcher qu'une même personne crée et valide une opération sensible",
    "reponse_f1": "Autoriser une seule personne à tout faire",
    "reponse_f2": "Partager un compte commun",
    "explication": "La séparation des tâches réduit fraude et erreur."
  },
  {
    "id": 188,
    "question": "`Mini-TP gestion d'identité — recertification des accès\n\nApplication : console cloud\nContexte : application critique\nPopulation : 18048 identités\nDurée d'un access token : 185 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-188`",
    "reponse_v": "Faire valider périodiquement les droits par les responsables",
    "reponse_f1": "Considérer les droits permanents",
    "reponse_f2": "Réviser uniquement les mots de passe",
    "explication": "La recertification réduit les privilèges obsolètes."
  },
  {
    "id": 189,
    "question": "`Mini-TP gestion d'identité — identité humaine et technique\n\nApplication : annuaire interne\nContexte : application critique\nPopulation : 18054 identités\nDurée d'un access token : 190 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-189`",
    "reponse_v": "Distinguer clairement comptes utilisateurs et comptes de service",
    "reponse_f1": "Utiliser les comptes personnels pour les traitements automatiques",
    "reponse_f2": "Partager un même compte pour tous",
    "explication": "Les identités techniques ont un cycle de vie différent."
  },
  {
    "id": 190,
    "question": "`Mini-TP gestion d'identité — gouvernance IAM\n\nApplication : plateforme de signature\nContexte : application critique\nPopulation : 18060 identités\nDurée d'un access token : 195 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-190`",
    "reponse_v": "Définir propriétaires, règles, contrôles et indicateurs",
    "reponse_f1": "Limiter l'IAM à l'écran de connexion",
    "reponse_f2": "Laisser chaque application décider sans coordination",
    "explication": "La gouvernance couvre tout le cycle de vie et les responsabilités."
  },
  {
    "id": 191,
    "question": "`Mini-TP gestion d'identité — SSO\n\nApplication : gestion documentaire\nContexte : application critique\nPopulation : 18066 identités\nDurée d'un access token : 200 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-191`",
    "reponse_v": "Centraliser l'authentification tout en conservant des sessions applicatives distinctes",
    "reponse_f1": "Partager un mot de passe entre toutes les applications",
    "reponse_f2": "Supprimer toute authentification locale sans fédération",
    "explication": "Le SSO réduit les authentifications répétées."
  },
  {
    "id": 192,
    "question": "`Mini-TP gestion d'identité — fédération d'identité\n\nApplication : supervision réseau\nContexte : application critique\nPopulation : 18072 identités\nDurée d'un access token : 205 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-192`",
    "reponse_v": "Établir une relation de confiance entre fournisseur d'identité et fournisseur de service",
    "reponse_f1": "Dupliquer les mots de passe dans chaque application",
    "reponse_f2": "Utiliser seulement un VPN",
    "explication": "La fédération transporte des assertions ou jetons de confiance."
  },
  {
    "id": 193,
    "question": "`Mini-TP gestion d'identité — SAML 2.0\n\nApplication : extranet fournisseur\nContexte : application critique\nPopulation : 18078 identités\nDurée d'un access token : 210 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-193`",
    "reponse_v": "Utiliser des assertions signées entre IdP et SP",
    "reponse_f1": "Utiliser uniquement des cookies locaux",
    "reponse_f2": "Utiliser DHCP",
    "explication": "SAML est adapté au SSO web d'entreprise."
  },
  {
    "id": 194,
    "question": "`Mini-TP gestion d'identité — OpenID Connect\n\nApplication : portail citoyen\nContexte : application critique\nPopulation : 18084 identités\nDurée d'un access token : 180 minutes\nDurée maximale de session : 110 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-194`",
    "reponse_v": "Utiliser OIDC pour authentifier l'utilisateur au-dessus d'OAuth 2.0",
    "reponse_f1": "Utiliser OAuth 2.0 seul comme preuve d'identité",
    "reponse_f2": "Utiliser LDAP directement dans le navigateur",
    "explication": "OIDC ajoute une couche d'identité à OAuth 2.0."
  },
  {
    "id": 195,
    "question": "`Mini-TP gestion d'identité — OAuth 2.0\n\nApplication : ERP financier\nContexte : application critique\nPopulation : 18090 identités\nDurée d'un access token : 185 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-195`",
    "reponse_v": "Utiliser OAuth 2.0 pour déléguer un accès à une ressource",
    "reponse_f1": "Utiliser OAuth 2.0 comme annuaire",
    "reponse_f2": "Utiliser OAuth 2.0 pour chiffrer les données",
    "explication": "OAuth 2.0 est un cadre d'autorisation déléguée."
  },
  {
    "id": 196,
    "question": "`Mini-TP gestion d'identité — IdP\n\nApplication : application RH\nContexte : application critique\nPopulation : 18096 identités\nDurée d'un access token : 190 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-196`",
    "reponse_v": "Centraliser l'authentification et émettre des assertions ou jetons",
    "reponse_f1": "Héberger uniquement les données métier",
    "reponse_f2": "Remplacer le pare-feu",
    "explication": "L'IdP authentifie l'utilisateur."
  },
  {
    "id": 197,
    "question": "`Mini-TP gestion d'identité — SP ou RP\n\nApplication : API partenaires\nContexte : application critique\nPopulation : 18102 identités\nDurée d'un access token : 195 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-197`",
    "reponse_v": "Consommer l'identité fournie par l'IdP",
    "reponse_f1": "Émettre toujours les mots de passe",
    "reponse_f2": "Gérer le routage réseau",
    "explication": "Le SP/RP fait confiance au fournisseur d'identité."
  },
  {
    "id": 198,
    "question": "`Mini-TP gestion d'identité — single logout\n\nApplication : messagerie collaborative\nContexte : application critique\nPopulation : 18108 identités\nDurée d'un access token : 200 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-198`",
    "reponse_v": "Propager la fermeture de session selon les capacités du protocole",
    "reponse_f1": "Supprimer uniquement le cookie d'une application",
    "reponse_f2": "Révoquer le compte utilisateur",
    "explication": "Le SLO tente de fermer les sessions fédérées."
  },
  {
    "id": 199,
    "question": "`Mini-TP gestion d'identité — home realm discovery\n\nApplication : plateforme e-commerce\nContexte : application critique\nPopulation : 18114 identités\nDurée d'un access token : 205 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-199`",
    "reponse_v": "Identifier le bon fournisseur d'identité pour l'utilisateur",
    "reponse_f1": "Créer un nouveau compte local à chaque connexion",
    "reponse_f2": "Désactiver les domaines externes",
    "explication": "La découverte de domaine oriente vers l'IdP approprié."
  },
  {
    "id": 200,
    "question": "`Mini-TP gestion d'identité — fédération B2B\n\nApplication : outil de ticketing\nContexte : application critique\nPopulation : 18120 identités\nDurée d'un access token : 210 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-200`",
    "reponse_v": "Utiliser des identités externes avec politiques dédiées",
    "reponse_f1": "Créer systématiquement des comptes internes permanents",
    "reponse_f2": "Partager un compte générique fournisseur",
    "explication": "La fédération B2B limite la duplication d'identités."
  },
  {
    "id": 201,
    "question": "`Mini-TP gestion d'identité — MFA\n\nApplication : application mobile\nContexte : application critique\nPopulation : 18126 identités\nDurée d'un access token : 180 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-201`",
    "reponse_v": "Combiner au moins deux facteurs indépendants",
    "reponse_f1": "Demander deux fois le même mot de passe",
    "reponse_f2": "Utiliser deux questions secrètes",
    "explication": "Deux facteurs doivent appartenir à des catégories différentes."
  },
  {
    "id": 202,
    "question": "`Mini-TP gestion d'identité — TOTP\n\nApplication : VPN d'entreprise\nContexte : application critique\nPopulation : 18132 identités\nDurée d'un access token : 185 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-202`",
    "reponse_v": "Utiliser un secret partagé et des codes temporels courts",
    "reponse_f1": "Utiliser un mot de passe fixe envoyé par e-mail",
    "reponse_f2": "Utiliser un certificat serveur",
    "explication": "TOTP génère des codes à durée limitée."
  },
  {
    "id": 203,
    "question": "`Mini-TP gestion d'identité — WebAuthn\n\nApplication : console cloud\nContexte : application critique\nPopulation : 18138 identités\nDurée d'un access token : 190 minutes\nDurée maximale de session : 110 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-203`",
    "reponse_v": "Utiliser une authentification résistante au phishing liée au domaine",
    "reponse_f1": "Utiliser un OTP SMS comme équivalent exact",
    "reponse_f2": "Utiliser une question secrète",
    "explication": "WebAuthn repose sur des clés asymétriques et l'origine web."
  },
  {
    "id": 204,
    "question": "`Mini-TP gestion d'identité — FIDO2\n\nApplication : annuaire interne\nContexte : application critique\nPopulation : 18144 identités\nDurée d'un access token : 195 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-204`",
    "reponse_v": "Combiner WebAuthn et CTAP pour une authentification forte",
    "reponse_f1": "Utiliser uniquement LDAP simple",
    "reponse_f2": "Utiliser un cookie persistant comme facteur",
    "explication": "FIDO2 permet l'authentification sans mot de passe."
  },
  {
    "id": 205,
    "question": "`Mini-TP gestion d'identité — push MFA fatigue\n\nApplication : plateforme de signature\nContexte : application critique\nPopulation : 18150 identités\nDurée d'un access token : 200 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-205`",
    "reponse_v": "Limiter les sollicitations, utiliser number matching et détection d'anomalies",
    "reponse_f1": "Envoyer davantage de notifications",
    "reponse_f2": "Autoriser toute validation automatique",
    "explication": "Les attaques de fatigue exploitent les approbations répétées."
  },
  {
    "id": 206,
    "question": "`Mini-TP gestion d'identité — SMS OTP\n\nApplication : gestion documentaire\nContexte : application critique\nPopulation : 18156 identités\nDurée d'un access token : 205 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-206`",
    "reponse_v": "Le considérer moins résistant que WebAuthn aux interceptions et au SIM swap",
    "reponse_f1": "Le considérer invulnérable",
    "reponse_f2": "Le préférer à toute autre méthode",
    "explication": "Le SMS présente des risques spécifiques."
  },
  {
    "id": 207,
    "question": "`Mini-TP gestion d'identité — certificat client\n\nApplication : supervision réseau\nContexte : application critique\nPopulation : 18162 identités\nDurée d'un access token : 210 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-207`",
    "reponse_v": "Utiliser un certificat personnel pour authentifier le terminal ou l'utilisateur",
    "reponse_f1": "Utiliser le certificat serveur du site",
    "reponse_f2": "Utiliser uniquement un mot de passe partagé",
    "explication": "Un certificat client fournit une preuve asymétrique."
  },
  {
    "id": 208,
    "question": "`Mini-TP gestion d'identité — step-up authentication\n\nApplication : extranet fournisseur\nContexte : application critique\nPopulation : 18168 identités\nDurée d'un access token : 180 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-208`",
    "reponse_v": "Demander un facteur supplémentaire pour une action sensible",
    "reponse_f1": "Réauthentifier moins fortement",
    "reponse_f2": "Augmenter seulement la durée de session",
    "explication": "Le step-up adapte le niveau d'assurance au risque."
  },
  {
    "id": 209,
    "question": "`Mini-TP gestion d'identité — authentification adaptative\n\nApplication : portail citoyen\nContexte : application critique\nPopulation : 18174 identités\nDurée d'un access token : 185 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-209`",
    "reponse_v": "Tenir compte du contexte, du terminal et du risque",
    "reponse_f1": "Appliquer toujours la même règle sans contexte",
    "reponse_f2": "Supprimer la MFA pour les connexions externes",
    "explication": "L'authentification adaptative ajuste les contrôles."
  },
  {
    "id": 210,
    "question": "`Mini-TP gestion d'identité — passwordless\n\nApplication : ERP financier\nContexte : application critique\nPopulation : 18180 identités\nDurée d'un access token : 190 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-210`",
    "reponse_v": "Utiliser une clé cryptographique ou un lien sécurisé sans mot de passe permanent",
    "reponse_f1": "Stocker un mot de passe caché dans l'application",
    "reponse_f2": "Envoyer le mot de passe en clair",
    "explication": "Le passwordless supprime le secret mémorisé par l'utilisateur."
  },
  {
    "id": 211,
    "question": "`Mini-TP gestion d'identité — SCIM\n\nApplication : application RH\nContexte : application critique\nPopulation : 18186 identités\nDurée d'un access token : 195 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-211`",
    "reponse_v": "Utiliser SCIM pour provisionner utilisateurs et groupes entre systèmes",
    "reponse_f1": "Utiliser SAML pour synchroniser les comptes",
    "reponse_f2": "Utiliser DNS",
    "explication": "SCIM standardise le provisioning d'identités."
  },
  {
    "id": 212,
    "question": "`Mini-TP gestion d'identité — provisioning just-in-time\n\nApplication : API partenaires\nContexte : application critique\nPopulation : 18192 identités\nDurée d'un access token : 200 minutes\nDurée maximale de session : 110 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-212`",
    "reponse_v": "Créer le compte lors de la première connexion fédérée",
    "reponse_f1": "Créer tous les comptes des années à l'avance",
    "reponse_f2": "Conserver les comptes après révocation",
    "explication": "Le JIT crée le compte au moment du besoin."
  },
  {
    "id": 213,
    "question": "`Mini-TP gestion d'identité — deprovisioning\n\nApplication : messagerie collaborative\nContexte : application critique\nPopulation : 18198 identités\nDurée d'un access token : 205 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-213`",
    "reponse_v": "Révoquer rapidement sessions, jetons et accès lors d'un départ",
    "reponse_f1": "Supprimer uniquement l'adresse e-mail",
    "reponse_f2": "Attendre l'expiration naturelle de tous les jetons",
    "explication": "La sortie doit couper tous les accès."
  },
  {
    "id": 214,
    "question": "`Mini-TP gestion d'identité — LDAP bind\n\nApplication : plateforme e-commerce\nContexte : application critique\nPopulation : 18204 identités\nDurée d'un access token : 210 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-214`",
    "reponse_v": "Authentifier une application auprès de l'annuaire avec un compte dédié minimal",
    "reponse_f1": "Utiliser un compte administrateur global",
    "reponse_f2": "Partager le mot de passe d'un utilisateur",
    "explication": "Le compte de bind doit suivre le moindre privilège."
  },
  {
    "id": 215,
    "question": "`Mini-TP gestion d'identité — LDAPS\n\nApplication : outil de ticketing\nContexte : application critique\nPopulation : 18210 identités\nDurée d'un access token : 180 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-215`",
    "reponse_v": "Protéger les échanges LDAP avec TLS",
    "reponse_f1": "Utiliser LDAP simple sur Internet",
    "reponse_f2": "Encoder seulement en Base64",
    "explication": "LDAPS protège les identifiants et les requêtes."
  },
  {
    "id": 216,
    "question": "`Mini-TP gestion d'identité — synchronisation de groupes\n\nApplication : application mobile\nContexte : application critique\nPopulation : 18216 identités\nDurée d'un access token : 185 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-216`",
    "reponse_v": "Mapper explicitement les groupes entre IdP et applications",
    "reponse_f1": "Supposer que tous les noms sont identiques",
    "reponse_f2": "Créer des droits locaux sans gouvernance",
    "explication": "Le mapping doit être contrôlé."
  },
  {
    "id": 217,
    "question": "`Mini-TP gestion d'identité — attribut obligatoire\n\nApplication : VPN d'entreprise\nContexte : application critique\nPopulation : 18222 identités\nDurée d'un access token : 190 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-217`",
    "reponse_v": "Valider la présence et le format avant provisioning",
    "reponse_f1": "Créer le compte avec des données incohérentes",
    "reponse_f2": "Remplacer les valeurs absentes par zéro",
    "explication": "Les attributs alimentent les règles d'accès."
  },
  {
    "id": 218,
    "question": "`Mini-TP gestion d'identité — source autoritative RH\n\nApplication : console cloud\nContexte : application critique\nPopulation : 18228 identités\nDurée d'un access token : 195 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-218`",
    "reponse_v": "Propager les changements RH vers l'IAM",
    "reponse_f1": "Laisser les applications modifier le statut d'emploi",
    "reponse_f2": "Conserver des comptes déconnectés du RH",
    "explication": "Le RH est souvent la source des identités humaines."
  },
  {
    "id": 219,
    "question": "`Mini-TP gestion d'identité — identité corrélée\n\nApplication : annuaire interne\nContexte : application critique\nPopulation : 18234 identités\nDurée d'un access token : 200 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-219`",
    "reponse_v": "Utiliser des règles fiables pour rapprocher les comptes d'une même personne",
    "reponse_f1": "Fusionner sur le prénom uniquement",
    "reponse_f2": "Créer une identité par application sans lien",
    "explication": "La corrélation évite doublons et erreurs."
  },
  {
    "id": 220,
    "question": "`Mini-TP gestion d'identité — réconciliation\n\nApplication : plateforme de signature\nContexte : application critique\nPopulation : 18240 identités\nDurée d'un access token : 205 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-220`",
    "reponse_v": "Comparer périodiquement l'état attendu et l'état réel des comptes",
    "reponse_f1": "Faire confiance uniquement aux événements",
    "reponse_f2": "Ne jamais vérifier les écarts",
    "explication": "La réconciliation détecte les dérives."
  },
  {
    "id": 221,
    "question": "`Mini-TP gestion d'identité — access token\n\nApplication : gestion documentaire\nContexte : application critique\nPopulation : 18246 identités\nDurée d'un access token : 210 minutes\nDurée maximale de session : 110 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-221`",
    "reponse_v": "Limiter sa durée et son audience",
    "reponse_f1": "Le rendre permanent et universel",
    "reponse_f2": "Le stocker dans une URL publique",
    "explication": "Un access token doit être limité et protégé."
  },
  {
    "id": 222,
    "question": "`Mini-TP gestion d'identité — refresh token\n\nApplication : supervision réseau\nContexte : application critique\nPopulation : 18252 identités\nDurée d'un access token : 180 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-222`",
    "reponse_v": "Le protéger davantage et prévoir rotation ou révocation",
    "reponse_f1": "Le traiter comme un identifiant public",
    "reponse_f2": "Le partager entre applications",
    "explication": "Un refresh token permet d'obtenir de nouveaux access tokens."
  },
  {
    "id": 223,
    "question": "`Mini-TP gestion d'identité — ID token\n\nApplication : extranet fournisseur\nContexte : application critique\nPopulation : 18258 identités\nDurée d'un access token : 185 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-223`",
    "reponse_v": "L'utiliser comme preuve d'authentification pour le client prévu",
    "reponse_f1": "L'utiliser comme jeton universel d'accès à toutes les API",
    "reponse_f2": "Le considérer comme un mot de passe",
    "explication": "L'ID token décrit l'authentification de l'utilisateur."
  },
  {
    "id": 224,
    "question": "`Mini-TP gestion d'identité — audience d'un jeton\n\nApplication : portail citoyen\nContexte : application critique\nPopulation : 18264 identités\nDurée d'un access token : 190 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-224`",
    "reponse_v": "Vérifier que le jeton vise bien le service destinataire",
    "reponse_f1": "Ignorer le champ aud",
    "reponse_f2": "Accepter tout jeton signé",
    "explication": "L'audience empêche la réutilisation entre services."
  },
  {
    "id": 225,
    "question": "`Mini-TP gestion d'identité — issuer d'un jeton\n\nApplication : ERP financier\nContexte : application critique\nPopulation : 18270 identités\nDurée d'un access token : 195 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-225`",
    "reponse_v": "Vérifier l'émetteur attendu",
    "reponse_f1": "Faire confiance à tout issuer",
    "reponse_f2": "Se baser uniquement sur le nom utilisateur",
    "explication": "L'issuer identifie l'autorité qui a émis le jeton."
  },
  {
    "id": 226,
    "question": "`Mini-TP gestion d'identité — expiration de session\n\nApplication : application RH\nContexte : application critique\nPopulation : 18276 identités\nDurée d'un access token : 200 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-226`",
    "reponse_v": "Définir des durées adaptées au risque et à l'activité",
    "reponse_f1": "Utiliser des sessions infinies",
    "reponse_f2": "Expirer toutes les sessions après une seconde",
    "explication": "La durée doit équilibrer sécurité et usage."
  },
  {
    "id": 227,
    "question": "`Mini-TP gestion d'identité — révocation de session\n\nApplication : API partenaires\nContexte : application critique\nPopulation : 18282 identités\nDurée d'un access token : 205 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-227`",
    "reponse_v": "Invalider les sessions lors d'un incident ou d'un départ",
    "reponse_f1": "Attendre toujours l'expiration",
    "reponse_f2": "Changer seulement le mot de passe local",
    "explication": "La révocation doit couper l'accès actif."
  },
  {
    "id": 228,
    "question": "`Mini-TP gestion d'identité — cookie de session\n\nApplication : messagerie collaborative\nContexte : application critique\nPopulation : 18288 identités\nDurée d'un access token : 210 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-228`",
    "reponse_v": "Utiliser Secure, HttpOnly et SameSite adaptés",
    "reponse_f1": "Le rendre accessible à tous les scripts",
    "reponse_f2": "Le transmettre en HTTP",
    "explication": "Les attributs réduisent les risques de vol et CSRF."
  },
  {
    "id": 229,
    "question": "`Mini-TP gestion d'identité — token binding au contexte\n\nApplication : plateforme e-commerce\nContexte : application critique\nPopulation : 18294 identités\nDurée d'un access token : 180 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-229`",
    "reponse_v": "Limiter l'usage du jeton au client ou au canal prévu",
    "reponse_f1": "Rendre le jeton utilisable partout",
    "reponse_f2": "Supprimer toute vérification d'origine",
    "explication": "Le binding réduit le rejeu."
  },
  {
    "id": 230,
    "question": "`Mini-TP gestion d'identité — rejeu de jeton\n\nApplication : outil de ticketing\nContexte : application critique\nPopulation : 18300 identités\nDurée d'un access token : 185 minutes\nDurée maximale de session : 110 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-230`",
    "reponse_v": "Utiliser nonce, courte durée et détection d'anomalies",
    "reponse_f1": "Allonger la durée de vie",
    "reponse_f2": "Désactiver la journalisation",
    "explication": "Le rejeu exploite un jeton volé encore valide."
  },
  {
    "id": 231,
    "question": "`Mini-TP gestion d'identité — RBAC\n\nApplication : application mobile\nContexte : application critique\nPopulation : 18306 identités\nDurée d'un access token : 190 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-231`",
    "reponse_v": "Associer les permissions à des rôles métiers",
    "reponse_f1": "Attribuer tous les droits individuellement sans modèle",
    "reponse_f2": "Utiliser l'adresse IP comme seul rôle",
    "explication": "RBAC simplifie la gouvernance des accès."
  },
  {
    "id": 232,
    "question": "`Mini-TP gestion d'identité — ABAC\n\nApplication : VPN d'entreprise\nContexte : application critique\nPopulation : 18312 identités\nDurée d'un access token : 195 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-232`",
    "reponse_v": "Évaluer des attributs du sujet, de la ressource et du contexte",
    "reponse_f1": "Utiliser uniquement un rôle fixe",
    "reponse_f2": "Utiliser un mot de passe partagé",
    "explication": "ABAC permet des décisions fines et contextuelles."
  },
  {
    "id": 233,
    "question": "`Mini-TP gestion d'identité — ReBAC\n\nApplication : console cloud\nContexte : application critique\nPopulation : 18318 identités\nDurée d'un access token : 200 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-233`",
    "reponse_v": "Décider selon les relations entre entités",
    "reponse_f1": "Décider uniquement selon l'heure",
    "reponse_f2": "Décider uniquement selon le mot de passe",
    "explication": "ReBAC exploite les relations dans un graphe d'autorisation."
  },
  {
    "id": 234,
    "question": "`Mini-TP gestion d'identité — PAM\n\nApplication : annuaire interne\nContexte : application critique\nPopulation : 18324 identités\nDurée d'un access token : 205 minutes\nDurée maximale de session : 60 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-234`",
    "reponse_v": "Gérer, contrôler et enregistrer les accès à privilèges",
    "reponse_f1": "Partager les comptes administrateurs",
    "reponse_f2": "Désactiver la MFA des administrateurs",
    "explication": "Le PAM réduit le risque des comptes sensibles."
  },
  {
    "id": 235,
    "question": "`Mini-TP gestion d'identité — just-in-time privilege\n\nApplication : plateforme de signature\nContexte : application critique\nPopulation : 18330 identités\nDurée d'un access token : 210 minutes\nDurée maximale de session : 70 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-235`",
    "reponse_v": "Accorder un privilège temporaire pour une durée limitée",
    "reponse_f1": "Donner un accès permanent",
    "reponse_f2": "Créer un compte administrateur partagé",
    "explication": "Le JIT réduit la fenêtre d'exposition."
  },
  {
    "id": 236,
    "question": "`Mini-TP gestion d'identité — break-glass account\n\nApplication : gestion documentaire\nContexte : application critique\nPopulation : 18336 identités\nDurée d'un access token : 180 minutes\nDurée maximale de session : 80 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-236`",
    "reponse_v": "Conserver un compte d'urgence fortement protégé et surveillé",
    "reponse_f1": "Utiliser le compte d'urgence au quotidien",
    "reponse_f2": "Partager son secret sans contrôle",
    "explication": "Un compte break-glass sert aux situations exceptionnelles."
  },
  {
    "id": 237,
    "question": "`Mini-TP gestion d'identité — consentement OAuth\n\nApplication : supervision réseau\nContexte : application critique\nPopulation : 18342 identités\nDurée d'un access token : 185 minutes\nDurée maximale de session : 90 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-237`",
    "reponse_v": "Limiter les scopes demandés et informer l'utilisateur",
    "reponse_f1": "Demander tous les scopes par défaut",
    "reponse_f2": "Ignorer les permissions",
    "explication": "Le consentement doit être proportionné."
  },
  {
    "id": 238,
    "question": "`Mini-TP gestion d'identité — scope OAuth\n\nApplication : extranet fournisseur\nContexte : application critique\nPopulation : 18348 identités\nDurée d'un access token : 190 minutes\nDurée maximale de session : 100 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-238`",
    "reponse_v": "Définir des permissions précises pour l'API",
    "reponse_f1": "Utiliser un scope unique administrateur",
    "reponse_f2": "Confondre scope et mot de passe",
    "explication": "Les scopes bornent les capacités du jeton."
  },
  {
    "id": 239,
    "question": "`Mini-TP gestion d'identité — service account\n\nApplication : portail citoyen\nContexte : application critique\nPopulation : 18354 identités\nDurée d'un access token : 195 minutes\nDurée maximale de session : 110 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-239`",
    "reponse_v": "Utiliser une identité technique dédiée avec secret ou clé gérée",
    "reponse_f1": "Utiliser le compte personnel d'un développeur",
    "reponse_f2": "Partager un compte humain",
    "explication": "Les comptes de service doivent être gérés séparément."
  },
  {
    "id": 240,
    "question": "`Mini-TP gestion d'identité — architecture IAM résiliente\n\nApplication : ERP financier\nContexte : application critique\nPopulation : 18360 identités\nDurée d'un access token : 200 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-240`",
    "reponse_v": "Redonder IdP, annuaire et mécanismes de secours",
    "reponse_f1": "Dépendre d'un seul serveur sans PRA",
    "reponse_f2": "Supprimer toute authentification locale de secours",
    "explication": "L'IAM est critique et doit être hautement disponible."
  },
  {
    "id": 241,
    "question": "`Mini-TP gestion d'identité — cycle de vie d'un compte\n\nApplication : outil de ticketing\nContexte : écosystème multisite\nPopulation : 42007 identités\nDurée d'un access token : 370 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-241`",
    "reponse_v": "Automatiser création, modification et suppression selon les événements RH",
    "reponse_f1": "Créer les comptes manuellement sans processus de sortie",
    "reponse_f2": "Conserver les comptes après départ",
    "explication": "Le cycle de vie doit suivre les arrivées, mobilités et départs."
  },
  {
    "id": 242,
    "question": "`Mini-TP gestion d'identité — joiner-mover-leaver\n\nApplication : application mobile\nContexte : écosystème multisite\nPopulation : 42014 identités\nDurée d'un access token : 375 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-242`",
    "reponse_v": "Réévaluer les droits à chaque changement de poste",
    "reponse_f1": "Conserver tous les anciens droits",
    "reponse_f2": "Supprimer seulement le mot de passe",
    "explication": "Le modèle JML évite l'accumulation de privilèges."
  },
  {
    "id": 243,
    "question": "`Mini-TP gestion d'identité — identité de référence\n\nApplication : VPN d'entreprise\nContexte : écosystème multisite\nPopulation : 42021 identités\nDurée d'un access token : 380 minutes\nDurée maximale de session : 150 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-243`",
    "reponse_v": "Définir une source autoritative claire",
    "reponse_f1": "Utiliser chaque application comme source maîtresse",
    "reponse_f2": "Fusionner les identités sans règle",
    "explication": "Une source autoritative évite les divergences."
  },
  {
    "id": 244,
    "question": "`Mini-TP gestion d'identité — compte orphelin\n\nApplication : console cloud\nContexte : écosystème multisite\nPopulation : 42028 identités\nDurée d'un access token : 385 minutes\nDurée maximale de session : 160 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-244`",
    "reponse_v": "Identifier puis désactiver ou supprimer le compte",
    "reponse_f1": "Le conserver indéfiniment",
    "reponse_f2": "Changer seulement son nom",
    "explication": "Un compte sans propriétaire est un risque."
  },
  {
    "id": 245,
    "question": "`Mini-TP gestion d'identité — identité unique\n\nApplication : annuaire interne\nContexte : écosystème multisite\nPopulation : 42035 identités\nDurée d'un access token : 390 minutes\nDurée maximale de session : 170 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-245`",
    "reponse_v": "Utiliser un identifiant pérenne non réattribué",
    "reponse_f1": "Réutiliser les identifiants des anciens salariés",
    "reponse_f2": "Utiliser uniquement le prénom",
    "explication": "Un identifiant stable évite les collisions."
  },
  {
    "id": 246,
    "question": "`Mini-TP gestion d'identité — moindre privilège\n\nApplication : plateforme de signature\nContexte : écosystème multisite\nPopulation : 42042 identités\nDurée d'un access token : 395 minutes\nDurée maximale de session : 180 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-246`",
    "reponse_v": "Accorder seulement les droits nécessaires",
    "reponse_f1": "Donner les droits administrateur par défaut",
    "reponse_f2": "Cumuler les rôles historiques",
    "explication": "Le moindre privilège limite l'impact d'une compromission."
  },
  {
    "id": 247,
    "question": "`Mini-TP gestion d'identité — séparation des tâches\n\nApplication : gestion documentaire\nContexte : écosystème multisite\nPopulation : 42049 identités\nDurée d'un access token : 365 minutes\nDurée maximale de session : 190 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-247`",
    "reponse_v": "Empêcher qu'une même personne crée et valide une opération sensible",
    "reponse_f1": "Autoriser une seule personne à tout faire",
    "reponse_f2": "Partager un compte commun",
    "explication": "La séparation des tâches réduit fraude et erreur."
  },
  {
    "id": 248,
    "question": "`Mini-TP gestion d'identité — recertification des accès\n\nApplication : supervision réseau\nContexte : écosystème multisite\nPopulation : 42056 identités\nDurée d'un access token : 370 minutes\nDurée maximale de session : 200 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-248`",
    "reponse_v": "Faire valider périodiquement les droits par les responsables",
    "reponse_f1": "Considérer les droits permanents",
    "reponse_f2": "Réviser uniquement les mots de passe",
    "explication": "La recertification réduit les privilèges obsolètes."
  },
  {
    "id": 249,
    "question": "`Mini-TP gestion d'identité — identité humaine et technique\n\nApplication : extranet fournisseur\nContexte : écosystème multisite\nPopulation : 42063 identités\nDurée d'un access token : 375 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-249`",
    "reponse_v": "Distinguer clairement comptes utilisateurs et comptes de service",
    "reponse_f1": "Utiliser les comptes personnels pour les traitements automatiques",
    "reponse_f2": "Partager un même compte pour tous",
    "explication": "Les identités techniques ont un cycle de vie différent."
  },
  {
    "id": 250,
    "question": "`Mini-TP gestion d'identité — gouvernance IAM\n\nApplication : portail citoyen\nContexte : écosystème multisite\nPopulation : 42070 identités\nDurée d'un access token : 380 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-250`",
    "reponse_v": "Définir propriétaires, règles, contrôles et indicateurs",
    "reponse_f1": "Limiter l'IAM à l'écran de connexion",
    "reponse_f2": "Laisser chaque application décider sans coordination",
    "explication": "La gouvernance couvre tout le cycle de vie et les responsabilités."
  },
  {
    "id": 251,
    "question": "`Mini-TP gestion d'identité — SSO\n\nApplication : ERP financier\nContexte : écosystème multisite\nPopulation : 42077 identités\nDurée d'un access token : 385 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-251`",
    "reponse_v": "Centraliser l'authentification tout en conservant des sessions applicatives distinctes",
    "reponse_f1": "Partager un mot de passe entre toutes les applications",
    "reponse_f2": "Supprimer toute authentification locale sans fédération",
    "explication": "Le SSO réduit les authentifications répétées."
  },
  {
    "id": 252,
    "question": "`Mini-TP gestion d'identité — fédération d'identité\n\nApplication : application RH\nContexte : écosystème multisite\nPopulation : 42084 identités\nDurée d'un access token : 390 minutes\nDurée maximale de session : 150 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-252`",
    "reponse_v": "Établir une relation de confiance entre fournisseur d'identité et fournisseur de service",
    "reponse_f1": "Dupliquer les mots de passe dans chaque application",
    "reponse_f2": "Utiliser seulement un VPN",
    "explication": "La fédération transporte des assertions ou jetons de confiance."
  },
  {
    "id": 253,
    "question": "`Mini-TP gestion d'identité — SAML 2.0\n\nApplication : API partenaires\nContexte : écosystème multisite\nPopulation : 42091 identités\nDurée d'un access token : 395 minutes\nDurée maximale de session : 160 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-253`",
    "reponse_v": "Utiliser des assertions signées entre IdP et SP",
    "reponse_f1": "Utiliser uniquement des cookies locaux",
    "reponse_f2": "Utiliser DHCP",
    "explication": "SAML est adapté au SSO web d'entreprise."
  },
  {
    "id": 254,
    "question": "`Mini-TP gestion d'identité — OpenID Connect\n\nApplication : messagerie collaborative\nContexte : écosystème multisite\nPopulation : 42098 identités\nDurée d'un access token : 365 minutes\nDurée maximale de session : 170 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-254`",
    "reponse_v": "Utiliser OIDC pour authentifier l'utilisateur au-dessus d'OAuth 2.0",
    "reponse_f1": "Utiliser OAuth 2.0 seul comme preuve d'identité",
    "reponse_f2": "Utiliser LDAP directement dans le navigateur",
    "explication": "OIDC ajoute une couche d'identité à OAuth 2.0."
  },
  {
    "id": 255,
    "question": "`Mini-TP gestion d'identité — OAuth 2.0\n\nApplication : plateforme e-commerce\nContexte : écosystème multisite\nPopulation : 42105 identités\nDurée d'un access token : 370 minutes\nDurée maximale de session : 180 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-255`",
    "reponse_v": "Utiliser OAuth 2.0 pour déléguer un accès à une ressource",
    "reponse_f1": "Utiliser OAuth 2.0 comme annuaire",
    "reponse_f2": "Utiliser OAuth 2.0 pour chiffrer les données",
    "explication": "OAuth 2.0 est un cadre d'autorisation déléguée."
  },
  {
    "id": 256,
    "question": "`Mini-TP gestion d'identité — IdP\n\nApplication : outil de ticketing\nContexte : écosystème multisite\nPopulation : 42112 identités\nDurée d'un access token : 375 minutes\nDurée maximale de session : 190 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-256`",
    "reponse_v": "Centraliser l'authentification et émettre des assertions ou jetons",
    "reponse_f1": "Héberger uniquement les données métier",
    "reponse_f2": "Remplacer le pare-feu",
    "explication": "L'IdP authentifie l'utilisateur."
  },
  {
    "id": 257,
    "question": "`Mini-TP gestion d'identité — SP ou RP\n\nApplication : application mobile\nContexte : écosystème multisite\nPopulation : 42119 identités\nDurée d'un access token : 380 minutes\nDurée maximale de session : 200 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-257`",
    "reponse_v": "Consommer l'identité fournie par l'IdP",
    "reponse_f1": "Émettre toujours les mots de passe",
    "reponse_f2": "Gérer le routage réseau",
    "explication": "Le SP/RP fait confiance au fournisseur d'identité."
  },
  {
    "id": 258,
    "question": "`Mini-TP gestion d'identité — single logout\n\nApplication : VPN d'entreprise\nContexte : écosystème multisite\nPopulation : 42126 identités\nDurée d'un access token : 385 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-258`",
    "reponse_v": "Propager la fermeture de session selon les capacités du protocole",
    "reponse_f1": "Supprimer uniquement le cookie d'une application",
    "reponse_f2": "Révoquer le compte utilisateur",
    "explication": "Le SLO tente de fermer les sessions fédérées."
  },
  {
    "id": 259,
    "question": "`Mini-TP gestion d'identité — home realm discovery\n\nApplication : console cloud\nContexte : écosystème multisite\nPopulation : 42133 identités\nDurée d'un access token : 390 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-259`",
    "reponse_v": "Identifier le bon fournisseur d'identité pour l'utilisateur",
    "reponse_f1": "Créer un nouveau compte local à chaque connexion",
    "reponse_f2": "Désactiver les domaines externes",
    "explication": "La découverte de domaine oriente vers l'IdP approprié."
  },
  {
    "id": 260,
    "question": "`Mini-TP gestion d'identité — fédération B2B\n\nApplication : annuaire interne\nContexte : écosystème multisite\nPopulation : 42140 identités\nDurée d'un access token : 395 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-260`",
    "reponse_v": "Utiliser des identités externes avec politiques dédiées",
    "reponse_f1": "Créer systématiquement des comptes internes permanents",
    "reponse_f2": "Partager un compte générique fournisseur",
    "explication": "La fédération B2B limite la duplication d'identités."
  },
  {
    "id": 261,
    "question": "`Mini-TP gestion d'identité — MFA\n\nApplication : plateforme de signature\nContexte : écosystème multisite\nPopulation : 42147 identités\nDurée d'un access token : 365 minutes\nDurée maximale de session : 150 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-261`",
    "reponse_v": "Combiner au moins deux facteurs indépendants",
    "reponse_f1": "Demander deux fois le même mot de passe",
    "reponse_f2": "Utiliser deux questions secrètes",
    "explication": "Deux facteurs doivent appartenir à des catégories différentes."
  },
  {
    "id": 262,
    "question": "`Mini-TP gestion d'identité — TOTP\n\nApplication : gestion documentaire\nContexte : écosystème multisite\nPopulation : 42154 identités\nDurée d'un access token : 370 minutes\nDurée maximale de session : 160 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-262`",
    "reponse_v": "Utiliser un secret partagé et des codes temporels courts",
    "reponse_f1": "Utiliser un mot de passe fixe envoyé par e-mail",
    "reponse_f2": "Utiliser un certificat serveur",
    "explication": "TOTP génère des codes à durée limitée."
  },
  {
    "id": 263,
    "question": "`Mini-TP gestion d'identité — WebAuthn\n\nApplication : supervision réseau\nContexte : écosystème multisite\nPopulation : 42161 identités\nDurée d'un access token : 375 minutes\nDurée maximale de session : 170 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-263`",
    "reponse_v": "Utiliser une authentification résistante au phishing liée au domaine",
    "reponse_f1": "Utiliser un OTP SMS comme équivalent exact",
    "reponse_f2": "Utiliser une question secrète",
    "explication": "WebAuthn repose sur des clés asymétriques et l'origine web."
  },
  {
    "id": 264,
    "question": "`Mini-TP gestion d'identité — FIDO2\n\nApplication : extranet fournisseur\nContexte : écosystème multisite\nPopulation : 42168 identités\nDurée d'un access token : 380 minutes\nDurée maximale de session : 180 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-264`",
    "reponse_v": "Combiner WebAuthn et CTAP pour une authentification forte",
    "reponse_f1": "Utiliser uniquement LDAP simple",
    "reponse_f2": "Utiliser un cookie persistant comme facteur",
    "explication": "FIDO2 permet l'authentification sans mot de passe."
  },
  {
    "id": 265,
    "question": "`Mini-TP gestion d'identité — push MFA fatigue\n\nApplication : portail citoyen\nContexte : écosystème multisite\nPopulation : 42175 identités\nDurée d'un access token : 385 minutes\nDurée maximale de session : 190 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-265`",
    "reponse_v": "Limiter les sollicitations, utiliser number matching et détection d'anomalies",
    "reponse_f1": "Envoyer davantage de notifications",
    "reponse_f2": "Autoriser toute validation automatique",
    "explication": "Les attaques de fatigue exploitent les approbations répétées."
  },
  {
    "id": 266,
    "question": "`Mini-TP gestion d'identité — SMS OTP\n\nApplication : ERP financier\nContexte : écosystème multisite\nPopulation : 42182 identités\nDurée d'un access token : 390 minutes\nDurée maximale de session : 200 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-266`",
    "reponse_v": "Le considérer moins résistant que WebAuthn aux interceptions et au SIM swap",
    "reponse_f1": "Le considérer invulnérable",
    "reponse_f2": "Le préférer à toute autre méthode",
    "explication": "Le SMS présente des risques spécifiques."
  },
  {
    "id": 267,
    "question": "`Mini-TP gestion d'identité — certificat client\n\nApplication : application RH\nContexte : écosystème multisite\nPopulation : 42189 identités\nDurée d'un access token : 395 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-267`",
    "reponse_v": "Utiliser un certificat personnel pour authentifier le terminal ou l'utilisateur",
    "reponse_f1": "Utiliser le certificat serveur du site",
    "reponse_f2": "Utiliser uniquement un mot de passe partagé",
    "explication": "Un certificat client fournit une preuve asymétrique."
  },
  {
    "id": 268,
    "question": "`Mini-TP gestion d'identité — step-up authentication\n\nApplication : API partenaires\nContexte : écosystème multisite\nPopulation : 42196 identités\nDurée d'un access token : 365 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-268`",
    "reponse_v": "Demander un facteur supplémentaire pour une action sensible",
    "reponse_f1": "Réauthentifier moins fortement",
    "reponse_f2": "Augmenter seulement la durée de session",
    "explication": "Le step-up adapte le niveau d'assurance au risque."
  },
  {
    "id": 269,
    "question": "`Mini-TP gestion d'identité — authentification adaptative\n\nApplication : messagerie collaborative\nContexte : écosystème multisite\nPopulation : 42203 identités\nDurée d'un access token : 370 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-269`",
    "reponse_v": "Tenir compte du contexte, du terminal et du risque",
    "reponse_f1": "Appliquer toujours la même règle sans contexte",
    "reponse_f2": "Supprimer la MFA pour les connexions externes",
    "explication": "L'authentification adaptative ajuste les contrôles."
  },
  {
    "id": 270,
    "question": "`Mini-TP gestion d'identité — passwordless\n\nApplication : plateforme e-commerce\nContexte : écosystème multisite\nPopulation : 42210 identités\nDurée d'un access token : 375 minutes\nDurée maximale de session : 150 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-270`",
    "reponse_v": "Utiliser une clé cryptographique ou un lien sécurisé sans mot de passe permanent",
    "reponse_f1": "Stocker un mot de passe caché dans l'application",
    "reponse_f2": "Envoyer le mot de passe en clair",
    "explication": "Le passwordless supprime le secret mémorisé par l'utilisateur."
  },
  {
    "id": 271,
    "question": "`Mini-TP gestion d'identité — SCIM\n\nApplication : outil de ticketing\nContexte : écosystème multisite\nPopulation : 42217 identités\nDurée d'un access token : 380 minutes\nDurée maximale de session : 160 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-271`",
    "reponse_v": "Utiliser SCIM pour provisionner utilisateurs et groupes entre systèmes",
    "reponse_f1": "Utiliser SAML pour synchroniser les comptes",
    "reponse_f2": "Utiliser DNS",
    "explication": "SCIM standardise le provisioning d'identités."
  },
  {
    "id": 272,
    "question": "`Mini-TP gestion d'identité — provisioning just-in-time\n\nApplication : application mobile\nContexte : écosystème multisite\nPopulation : 42224 identités\nDurée d'un access token : 385 minutes\nDurée maximale de session : 170 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-272`",
    "reponse_v": "Créer le compte lors de la première connexion fédérée",
    "reponse_f1": "Créer tous les comptes des années à l'avance",
    "reponse_f2": "Conserver les comptes après révocation",
    "explication": "Le JIT crée le compte au moment du besoin."
  },
  {
    "id": 273,
    "question": "`Mini-TP gestion d'identité — deprovisioning\n\nApplication : VPN d'entreprise\nContexte : écosystème multisite\nPopulation : 42231 identités\nDurée d'un access token : 390 minutes\nDurée maximale de session : 180 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-273`",
    "reponse_v": "Révoquer rapidement sessions, jetons et accès lors d'un départ",
    "reponse_f1": "Supprimer uniquement l'adresse e-mail",
    "reponse_f2": "Attendre l'expiration naturelle de tous les jetons",
    "explication": "La sortie doit couper tous les accès."
  },
  {
    "id": 274,
    "question": "`Mini-TP gestion d'identité — LDAP bind\n\nApplication : console cloud\nContexte : écosystème multisite\nPopulation : 42238 identités\nDurée d'un access token : 395 minutes\nDurée maximale de session : 190 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-274`",
    "reponse_v": "Authentifier une application auprès de l'annuaire avec un compte dédié minimal",
    "reponse_f1": "Utiliser un compte administrateur global",
    "reponse_f2": "Partager le mot de passe d'un utilisateur",
    "explication": "Le compte de bind doit suivre le moindre privilège."
  },
  {
    "id": 275,
    "question": "`Mini-TP gestion d'identité — LDAPS\n\nApplication : annuaire interne\nContexte : écosystème multisite\nPopulation : 42245 identités\nDurée d'un access token : 365 minutes\nDurée maximale de session : 200 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-275`",
    "reponse_v": "Protéger les échanges LDAP avec TLS",
    "reponse_f1": "Utiliser LDAP simple sur Internet",
    "reponse_f2": "Encoder seulement en Base64",
    "explication": "LDAPS protège les identifiants et les requêtes."
  },
  {
    "id": 276,
    "question": "`Mini-TP gestion d'identité — synchronisation de groupes\n\nApplication : plateforme de signature\nContexte : écosystème multisite\nPopulation : 42252 identités\nDurée d'un access token : 370 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-276`",
    "reponse_v": "Mapper explicitement les groupes entre IdP et applications",
    "reponse_f1": "Supposer que tous les noms sont identiques",
    "reponse_f2": "Créer des droits locaux sans gouvernance",
    "explication": "Le mapping doit être contrôlé."
  },
  {
    "id": 277,
    "question": "`Mini-TP gestion d'identité — attribut obligatoire\n\nApplication : gestion documentaire\nContexte : écosystème multisite\nPopulation : 42259 identités\nDurée d'un access token : 375 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-277`",
    "reponse_v": "Valider la présence et le format avant provisioning",
    "reponse_f1": "Créer le compte avec des données incohérentes",
    "reponse_f2": "Remplacer les valeurs absentes par zéro",
    "explication": "Les attributs alimentent les règles d'accès."
  },
  {
    "id": 278,
    "question": "`Mini-TP gestion d'identité — source autoritative RH\n\nApplication : supervision réseau\nContexte : écosystème multisite\nPopulation : 42266 identités\nDurée d'un access token : 380 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-278`",
    "reponse_v": "Propager les changements RH vers l'IAM",
    "reponse_f1": "Laisser les applications modifier le statut d'emploi",
    "reponse_f2": "Conserver des comptes déconnectés du RH",
    "explication": "Le RH est souvent la source des identités humaines."
  },
  {
    "id": 279,
    "question": "`Mini-TP gestion d'identité — identité corrélée\n\nApplication : extranet fournisseur\nContexte : écosystème multisite\nPopulation : 42273 identités\nDurée d'un access token : 385 minutes\nDurée maximale de session : 150 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-279`",
    "reponse_v": "Utiliser des règles fiables pour rapprocher les comptes d'une même personne",
    "reponse_f1": "Fusionner sur le prénom uniquement",
    "reponse_f2": "Créer une identité par application sans lien",
    "explication": "La corrélation évite doublons et erreurs."
  },
  {
    "id": 280,
    "question": "`Mini-TP gestion d'identité — réconciliation\n\nApplication : portail citoyen\nContexte : écosystème multisite\nPopulation : 42280 identités\nDurée d'un access token : 390 minutes\nDurée maximale de session : 160 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-280`",
    "reponse_v": "Comparer périodiquement l'état attendu et l'état réel des comptes",
    "reponse_f1": "Faire confiance uniquement aux événements",
    "reponse_f2": "Ne jamais vérifier les écarts",
    "explication": "La réconciliation détecte les dérives."
  },
  {
    "id": 281,
    "question": "`Mini-TP gestion d'identité — access token\n\nApplication : ERP financier\nContexte : écosystème multisite\nPopulation : 42287 identités\nDurée d'un access token : 395 minutes\nDurée maximale de session : 170 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-281`",
    "reponse_v": "Limiter sa durée et son audience",
    "reponse_f1": "Le rendre permanent et universel",
    "reponse_f2": "Le stocker dans une URL publique",
    "explication": "Un access token doit être limité et protégé."
  },
  {
    "id": 282,
    "question": "`Mini-TP gestion d'identité — refresh token\n\nApplication : application RH\nContexte : écosystème multisite\nPopulation : 42294 identités\nDurée d'un access token : 365 minutes\nDurée maximale de session : 180 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-282`",
    "reponse_v": "Le protéger davantage et prévoir rotation ou révocation",
    "reponse_f1": "Le traiter comme un identifiant public",
    "reponse_f2": "Le partager entre applications",
    "explication": "Un refresh token permet d'obtenir de nouveaux access tokens."
  },
  {
    "id": 283,
    "question": "`Mini-TP gestion d'identité — ID token\n\nApplication : API partenaires\nContexte : écosystème multisite\nPopulation : 42301 identités\nDurée d'un access token : 370 minutes\nDurée maximale de session : 190 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-283`",
    "reponse_v": "L'utiliser comme preuve d'authentification pour le client prévu",
    "reponse_f1": "L'utiliser comme jeton universel d'accès à toutes les API",
    "reponse_f2": "Le considérer comme un mot de passe",
    "explication": "L'ID token décrit l'authentification de l'utilisateur."
  },
  {
    "id": 284,
    "question": "`Mini-TP gestion d'identité — audience d'un jeton\n\nApplication : messagerie collaborative\nContexte : écosystème multisite\nPopulation : 42308 identités\nDurée d'un access token : 375 minutes\nDurée maximale de session : 200 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-284`",
    "reponse_v": "Vérifier que le jeton vise bien le service destinataire",
    "reponse_f1": "Ignorer le champ aud",
    "reponse_f2": "Accepter tout jeton signé",
    "explication": "L'audience empêche la réutilisation entre services."
  },
  {
    "id": 285,
    "question": "`Mini-TP gestion d'identité — issuer d'un jeton\n\nApplication : plateforme e-commerce\nContexte : écosystème multisite\nPopulation : 42315 identités\nDurée d'un access token : 380 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-285`",
    "reponse_v": "Vérifier l'émetteur attendu",
    "reponse_f1": "Faire confiance à tout issuer",
    "reponse_f2": "Se baser uniquement sur le nom utilisateur",
    "explication": "L'issuer identifie l'autorité qui a émis le jeton."
  },
  {
    "id": 286,
    "question": "`Mini-TP gestion d'identité — expiration de session\n\nApplication : outil de ticketing\nContexte : écosystème multisite\nPopulation : 42322 identités\nDurée d'un access token : 385 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-286`",
    "reponse_v": "Définir des durées adaptées au risque et à l'activité",
    "reponse_f1": "Utiliser des sessions infinies",
    "reponse_f2": "Expirer toutes les sessions après une seconde",
    "explication": "La durée doit équilibrer sécurité et usage."
  },
  {
    "id": 287,
    "question": "`Mini-TP gestion d'identité — révocation de session\n\nApplication : application mobile\nContexte : écosystème multisite\nPopulation : 42329 identités\nDurée d'un access token : 390 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-287`",
    "reponse_v": "Invalider les sessions lors d'un incident ou d'un départ",
    "reponse_f1": "Attendre toujours l'expiration",
    "reponse_f2": "Changer seulement le mot de passe local",
    "explication": "La révocation doit couper l'accès actif."
  },
  {
    "id": 288,
    "question": "`Mini-TP gestion d'identité — cookie de session\n\nApplication : VPN d'entreprise\nContexte : écosystème multisite\nPopulation : 42336 identités\nDurée d'un access token : 395 minutes\nDurée maximale de session : 150 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-288`",
    "reponse_v": "Utiliser Secure, HttpOnly et SameSite adaptés",
    "reponse_f1": "Le rendre accessible à tous les scripts",
    "reponse_f2": "Le transmettre en HTTP",
    "explication": "Les attributs réduisent les risques de vol et CSRF."
  },
  {
    "id": 289,
    "question": "`Mini-TP gestion d'identité — token binding au contexte\n\nApplication : console cloud\nContexte : écosystème multisite\nPopulation : 42343 identités\nDurée d'un access token : 365 minutes\nDurée maximale de session : 160 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-289`",
    "reponse_v": "Limiter l'usage du jeton au client ou au canal prévu",
    "reponse_f1": "Rendre le jeton utilisable partout",
    "reponse_f2": "Supprimer toute vérification d'origine",
    "explication": "Le binding réduit le rejeu."
  },
  {
    "id": 290,
    "question": "`Mini-TP gestion d'identité — rejeu de jeton\n\nApplication : annuaire interne\nContexte : écosystème multisite\nPopulation : 42350 identités\nDurée d'un access token : 370 minutes\nDurée maximale de session : 170 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-290`",
    "reponse_v": "Utiliser nonce, courte durée et détection d'anomalies",
    "reponse_f1": "Allonger la durée de vie",
    "reponse_f2": "Désactiver la journalisation",
    "explication": "Le rejeu exploite un jeton volé encore valide."
  },
  {
    "id": 291,
    "question": "`Mini-TP gestion d'identité — RBAC\n\nApplication : plateforme de signature\nContexte : écosystème multisite\nPopulation : 42357 identités\nDurée d'un access token : 375 minutes\nDurée maximale de session : 180 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-291`",
    "reponse_v": "Associer les permissions à des rôles métiers",
    "reponse_f1": "Attribuer tous les droits individuellement sans modèle",
    "reponse_f2": "Utiliser l'adresse IP comme seul rôle",
    "explication": "RBAC simplifie la gouvernance des accès."
  },
  {
    "id": 292,
    "question": "`Mini-TP gestion d'identité — ABAC\n\nApplication : gestion documentaire\nContexte : écosystème multisite\nPopulation : 42364 identités\nDurée d'un access token : 380 minutes\nDurée maximale de session : 190 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-292`",
    "reponse_v": "Évaluer des attributs du sujet, de la ressource et du contexte",
    "reponse_f1": "Utiliser uniquement un rôle fixe",
    "reponse_f2": "Utiliser un mot de passe partagé",
    "explication": "ABAC permet des décisions fines et contextuelles."
  },
  {
    "id": 293,
    "question": "`Mini-TP gestion d'identité — ReBAC\n\nApplication : supervision réseau\nContexte : écosystème multisite\nPopulation : 42371 identités\nDurée d'un access token : 385 minutes\nDurée maximale de session : 200 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-293`",
    "reponse_v": "Décider selon les relations entre entités",
    "reponse_f1": "Décider uniquement selon l'heure",
    "reponse_f2": "Décider uniquement selon le mot de passe",
    "explication": "ReBAC exploite les relations dans un graphe d'autorisation."
  },
  {
    "id": 294,
    "question": "`Mini-TP gestion d'identité — PAM\n\nApplication : extranet fournisseur\nContexte : écosystème multisite\nPopulation : 42378 identités\nDurée d'un access token : 390 minutes\nDurée maximale de session : 120 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-294`",
    "reponse_v": "Gérer, contrôler et enregistrer les accès à privilèges",
    "reponse_f1": "Partager les comptes administrateurs",
    "reponse_f2": "Désactiver la MFA des administrateurs",
    "explication": "Le PAM réduit le risque des comptes sensibles."
  },
  {
    "id": 295,
    "question": "`Mini-TP gestion d'identité — just-in-time privilege\n\nApplication : portail citoyen\nContexte : écosystème multisite\nPopulation : 42385 identités\nDurée d'un access token : 395 minutes\nDurée maximale de session : 130 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-295`",
    "reponse_v": "Accorder un privilège temporaire pour une durée limitée",
    "reponse_f1": "Donner un accès permanent",
    "reponse_f2": "Créer un compte administrateur partagé",
    "explication": "Le JIT réduit la fenêtre d'exposition."
  },
  {
    "id": 296,
    "question": "`Mini-TP gestion d'identité — break-glass account\n\nApplication : ERP financier\nContexte : écosystème multisite\nPopulation : 42392 identités\nDurée d'un access token : 365 minutes\nDurée maximale de session : 140 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-296`",
    "reponse_v": "Conserver un compte d'urgence fortement protégé et surveillé",
    "reponse_f1": "Utiliser le compte d'urgence au quotidien",
    "reponse_f2": "Partager son secret sans contrôle",
    "explication": "Un compte break-glass sert aux situations exceptionnelles."
  },
  {
    "id": 297,
    "question": "`Mini-TP gestion d'identité — consentement OAuth\n\nApplication : application RH\nContexte : écosystème multisite\nPopulation : 42399 identités\nDurée d'un access token : 370 minutes\nDurée maximale de session : 150 minutes\nNiveau d'assurance attendu : 3\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-297`",
    "reponse_v": "Limiter les scopes demandés et informer l'utilisateur",
    "reponse_f1": "Demander tous les scopes par défaut",
    "reponse_f2": "Ignorer les permissions",
    "explication": "Le consentement doit être proportionné."
  },
  {
    "id": 298,
    "question": "`Mini-TP gestion d'identité — scope OAuth\n\nApplication : API partenaires\nContexte : écosystème multisite\nPopulation : 42406 identités\nDurée d'un access token : 375 minutes\nDurée maximale de session : 160 minutes\nNiveau d'assurance attendu : 4\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-298`",
    "reponse_v": "Définir des permissions précises pour l'API",
    "reponse_f1": "Utiliser un scope unique administrateur",
    "reponse_f2": "Confondre scope et mot de passe",
    "explication": "Les scopes bornent les capacités du jeton."
  },
  {
    "id": 299,
    "question": "`Mini-TP gestion d'identité — service account\n\nApplication : messagerie collaborative\nContexte : écosystème multisite\nPopulation : 42413 identités\nDurée d'un access token : 380 minutes\nDurée maximale de session : 170 minutes\nNiveau d'assurance attendu : 1\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-299`",
    "reponse_v": "Utiliser une identité technique dédiée avec secret ou clé gérée",
    "reponse_f1": "Utiliser le compte personnel d'un développeur",
    "reponse_f2": "Partager un compte humain",
    "explication": "Les comptes de service doivent être gérés séparément."
  },
  {
    "id": 300,
    "question": "`Mini-TP gestion d'identité — architecture IAM résiliente\n\nApplication : plateforme e-commerce\nContexte : écosystème multisite\nPopulation : 42420 identités\nDurée d'un access token : 385 minutes\nDurée maximale de session : 180 minutes\nNiveau d'assurance attendu : 2\n\nQuelle décision d'architecture ou de sécurité est la plus rigoureuse ?\n\nRéférence exercice : IAM-300`",
    "reponse_v": "Redonder IdP, annuaire et mécanismes de secours",
    "reponse_f1": "Dépendre d'un seul serveur sans PRA",
    "reponse_f2": "Supprimer toute authentification locale de secours",
    "explication": "L'IAM est critique et doit être hautement disponible."
  }
]
