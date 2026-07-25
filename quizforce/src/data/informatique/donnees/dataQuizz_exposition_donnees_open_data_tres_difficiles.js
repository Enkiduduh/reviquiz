export const dataQuizz_exposition_donnees_open_data_tres_difficiles = [
  {
    "id": 1,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu tabulaire simple doit être lisible par tableur et facilement réutilisable.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 01\n\nRéférence exercice : OPENDATA-001`",
    "reponse_v": "CSV avec encodage, séparateur et schéma documentés",
    "reponse_f1": "PDF image sans structure",
    "reponse_f2": "Capture d'écran du tableau",
    "explication": "CSV est adapté aux données tabulaires si son dialecte et son schéma sont explicités."
  },
  {
    "id": 2,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu contient des géométries, attributs et systèmes de coordonnées.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 02\n\nRéférence exercice : OPENDATA-002`",
    "reponse_v": "GeoJSON ou autre format géospatial ouvert adapté",
    "reponse_f1": "CSV sans colonnes géographiques",
    "reponse_f2": "Document texte libre",
    "explication": "Un format géospatial doit préserver géométries et système de référence."
  },
  {
    "id": 3,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUne API doit exposer des objets hiérarchiques facilement consommables en JavaScript.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 03\n\nRéférence exercice : OPENDATA-003`",
    "reponse_v": "JSON",
    "reponse_f1": "PDF",
    "reponse_f2": "XLSX binaire uniquement",
    "explication": "JSON représente naturellement des structures imbriquées."
  },
  {
    "id": 4,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn vocabulaire sémantique doit permettre de relier des ressources par URI.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 04\n\nRéférence exercice : OPENDATA-004`",
    "reponse_v": "RDF",
    "reponse_f1": "CSV brut sans identifiants",
    "reponse_f2": "PNG",
    "explication": "RDF permet de représenter des triplets et des liens sémantiques."
  },
  {
    "id": 5,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn fichier volumineux doit être publié avec un schéma stable et des types explicites.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 05\n\nRéférence exercice : OPENDATA-005`",
    "reponse_v": "Parquet ou format colonne documenté",
    "reponse_f1": "TXT non structuré",
    "reponse_f2": "Image bitmap",
    "explication": "Un format colonne conserve des types et réduit les coûts de lecture analytique."
  },
  {
    "id": 6,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn flux d'événements est publié en continu.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 06\n\nRéférence exercice : OPENDATA-006`",
    "reponse_v": "NDJSON ou format de streaming adapté",
    "reponse_f1": "Un unique tableau JSON jamais fermé",
    "reponse_f2": "Une archive ZIP remplacée à chaque événement",
    "explication": "NDJSON facilite le traitement ligne par ligne."
  },
  {
    "id": 7,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu doit être réutilisable par des outils très variés.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 07\n\nRéférence exercice : OPENDATA-007`",
    "reponse_v": "Privilégier un format ouvert et documenté",
    "reponse_f1": "Utiliser un format propriétaire sans spécification",
    "reponse_f2": "Fournir seulement une interface graphique",
    "explication": "L'ouverture du format améliore la portabilité et l'interopérabilité."
  },
  {
    "id": 8,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUne date est publiée pour des consommateurs internationaux.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 08\n\nRéférence exercice : OPENDATA-008`",
    "reponse_v": "Utiliser un format ISO 8601 documenté",
    "reponse_f1": "Utiliser 01/02/03 sans précision",
    "reponse_f2": "Écrire la date en langage naturel uniquement",
    "explication": "ISO 8601 réduit les ambiguïtés de format."
  },
  {
    "id": 9,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nDes valeurs manquantes existent dans un CSV.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 09\n\nRéférence exercice : OPENDATA-009`",
    "reponse_v": "Documenter explicitement la représentation des valeurs absentes",
    "reponse_f1": "Utiliser aléatoirement vide, N/A et 0",
    "reponse_f2": "Remplacer toutes les absences par zéro",
    "explication": "La convention des valeurs manquantes doit être stable et documentée."
  },
  {
    "id": 10,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn fichier contient des nombres décimaux pour plusieurs pays.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 10\n\nRéférence exercice : OPENDATA-010`",
    "reponse_v": "Fixer le séparateur décimal et le séparateur de colonnes",
    "reponse_f1": "Laisser chaque producteur choisir librement",
    "reponse_f2": "Mélanger virgule et point dans une même colonne",
    "explication": "Les conventions numériques doivent être homogènes."
  },
  {
    "id": 11,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu tabulaire simple doit être lisible par tableur et facilement réutilisable.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 11\n\nRéférence exercice : OPENDATA-011`",
    "reponse_v": "CSV avec encodage, séparateur et schéma documentés",
    "reponse_f1": "PDF image sans structure",
    "reponse_f2": "Capture d'écran du tableau",
    "explication": "CSV est adapté aux données tabulaires si son dialecte et son schéma sont explicités."
  },
  {
    "id": 12,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu contient des géométries, attributs et systèmes de coordonnées.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 12\n\nRéférence exercice : OPENDATA-012`",
    "reponse_v": "GeoJSON ou autre format géospatial ouvert adapté",
    "reponse_f1": "CSV sans colonnes géographiques",
    "reponse_f2": "Document texte libre",
    "explication": "Un format géospatial doit préserver géométries et système de référence."
  },
  {
    "id": 13,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUne API doit exposer des objets hiérarchiques facilement consommables en JavaScript.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 13\n\nRéférence exercice : OPENDATA-013`",
    "reponse_v": "JSON",
    "reponse_f1": "PDF",
    "reponse_f2": "XLSX binaire uniquement",
    "explication": "JSON représente naturellement des structures imbriquées."
  },
  {
    "id": 14,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn vocabulaire sémantique doit permettre de relier des ressources par URI.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 14\n\nRéférence exercice : OPENDATA-014`",
    "reponse_v": "RDF",
    "reponse_f1": "CSV brut sans identifiants",
    "reponse_f2": "PNG",
    "explication": "RDF permet de représenter des triplets et des liens sémantiques."
  },
  {
    "id": 15,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn fichier volumineux doit être publié avec un schéma stable et des types explicites.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 15\n\nRéférence exercice : OPENDATA-015`",
    "reponse_v": "Parquet ou format colonne documenté",
    "reponse_f1": "TXT non structuré",
    "reponse_f2": "Image bitmap",
    "explication": "Un format colonne conserve des types et réduit les coûts de lecture analytique."
  },
  {
    "id": 16,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn flux d'événements est publié en continu.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 16\n\nRéférence exercice : OPENDATA-016`",
    "reponse_v": "NDJSON ou format de streaming adapté",
    "reponse_f1": "Un unique tableau JSON jamais fermé",
    "reponse_f2": "Une archive ZIP remplacée à chaque événement",
    "explication": "NDJSON facilite le traitement ligne par ligne."
  },
  {
    "id": 17,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu doit être réutilisable par des outils très variés.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 17\n\nRéférence exercice : OPENDATA-017`",
    "reponse_v": "Privilégier un format ouvert et documenté",
    "reponse_f1": "Utiliser un format propriétaire sans spécification",
    "reponse_f2": "Fournir seulement une interface graphique",
    "explication": "L'ouverture du format améliore la portabilité et l'interopérabilité."
  },
  {
    "id": 18,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUne date est publiée pour des consommateurs internationaux.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 18\n\nRéférence exercice : OPENDATA-018`",
    "reponse_v": "Utiliser un format ISO 8601 documenté",
    "reponse_f1": "Utiliser 01/02/03 sans précision",
    "reponse_f2": "Écrire la date en langage naturel uniquement",
    "explication": "ISO 8601 réduit les ambiguïtés de format."
  },
  {
    "id": 19,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nDes valeurs manquantes existent dans un CSV.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 19\n\nRéférence exercice : OPENDATA-019`",
    "reponse_v": "Documenter explicitement la représentation des valeurs absentes",
    "reponse_f1": "Utiliser aléatoirement vide, N/A et 0",
    "reponse_f2": "Remplacer toutes les absences par zéro",
    "explication": "La convention des valeurs manquantes doit être stable et documentée."
  },
  {
    "id": 20,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn fichier contient des nombres décimaux pour plusieurs pays.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 20\n\nRéférence exercice : OPENDATA-020`",
    "reponse_v": "Fixer le séparateur décimal et le séparateur de colonnes",
    "reponse_f1": "Laisser chaque producteur choisir librement",
    "reponse_f2": "Mélanger virgule et point dans une même colonne",
    "explication": "Les conventions numériques doivent être homogènes."
  },
  {
    "id": 21,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu tabulaire simple doit être lisible par tableur et facilement réutilisable.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 21\n\nRéférence exercice : OPENDATA-021`",
    "reponse_v": "CSV avec encodage, séparateur et schéma documentés",
    "reponse_f1": "PDF image sans structure",
    "reponse_f2": "Capture d'écran du tableau",
    "explication": "CSV est adapté aux données tabulaires si son dialecte et son schéma sont explicités."
  },
  {
    "id": 22,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu contient des géométries, attributs et systèmes de coordonnées.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 22\n\nRéférence exercice : OPENDATA-022`",
    "reponse_v": "GeoJSON ou autre format géospatial ouvert adapté",
    "reponse_f1": "CSV sans colonnes géographiques",
    "reponse_f2": "Document texte libre",
    "explication": "Un format géospatial doit préserver géométries et système de référence."
  },
  {
    "id": 23,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUne API doit exposer des objets hiérarchiques facilement consommables en JavaScript.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 23\n\nRéférence exercice : OPENDATA-023`",
    "reponse_v": "JSON",
    "reponse_f1": "PDF",
    "reponse_f2": "XLSX binaire uniquement",
    "explication": "JSON représente naturellement des structures imbriquées."
  },
  {
    "id": 24,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn vocabulaire sémantique doit permettre de relier des ressources par URI.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 24\n\nRéférence exercice : OPENDATA-024`",
    "reponse_v": "RDF",
    "reponse_f1": "CSV brut sans identifiants",
    "reponse_f2": "PNG",
    "explication": "RDF permet de représenter des triplets et des liens sémantiques."
  },
  {
    "id": 25,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn fichier volumineux doit être publié avec un schéma stable et des types explicites.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 25\n\nRéférence exercice : OPENDATA-025`",
    "reponse_v": "Parquet ou format colonne documenté",
    "reponse_f1": "TXT non structuré",
    "reponse_f2": "Image bitmap",
    "explication": "Un format colonne conserve des types et réduit les coûts de lecture analytique."
  },
  {
    "id": 26,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn flux d'événements est publié en continu.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 26\n\nRéférence exercice : OPENDATA-026`",
    "reponse_v": "NDJSON ou format de streaming adapté",
    "reponse_f1": "Un unique tableau JSON jamais fermé",
    "reponse_f2": "Une archive ZIP remplacée à chaque événement",
    "explication": "NDJSON facilite le traitement ligne par ligne."
  },
  {
    "id": 27,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu doit être réutilisable par des outils très variés.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 27\n\nRéférence exercice : OPENDATA-027`",
    "reponse_v": "Privilégier un format ouvert et documenté",
    "reponse_f1": "Utiliser un format propriétaire sans spécification",
    "reponse_f2": "Fournir seulement une interface graphique",
    "explication": "L'ouverture du format améliore la portabilité et l'interopérabilité."
  },
  {
    "id": 28,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUne date est publiée pour des consommateurs internationaux.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 28\n\nRéférence exercice : OPENDATA-028`",
    "reponse_v": "Utiliser un format ISO 8601 documenté",
    "reponse_f1": "Utiliser 01/02/03 sans précision",
    "reponse_f2": "Écrire la date en langage naturel uniquement",
    "explication": "ISO 8601 réduit les ambiguïtés de format."
  },
  {
    "id": 29,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nDes valeurs manquantes existent dans un CSV.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 29\n\nRéférence exercice : OPENDATA-029`",
    "reponse_v": "Documenter explicitement la représentation des valeurs absentes",
    "reponse_f1": "Utiliser aléatoirement vide, N/A et 0",
    "reponse_f2": "Remplacer toutes les absences par zéro",
    "explication": "La convention des valeurs manquantes doit être stable et documentée."
  },
  {
    "id": 30,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn fichier contient des nombres décimaux pour plusieurs pays.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 30\n\nRéférence exercice : OPENDATA-030`",
    "reponse_v": "Fixer le séparateur décimal et le séparateur de colonnes",
    "reponse_f1": "Laisser chaque producteur choisir librement",
    "reponse_f2": "Mélanger virgule et point dans une même colonne",
    "explication": "Les conventions numériques doivent être homogènes."
  },
  {
    "id": 31,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu tabulaire simple doit être lisible par tableur et facilement réutilisable.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 31\n\nRéférence exercice : OPENDATA-031`",
    "reponse_v": "CSV avec encodage, séparateur et schéma documentés",
    "reponse_f1": "PDF image sans structure",
    "reponse_f2": "Capture d'écran du tableau",
    "explication": "CSV est adapté aux données tabulaires si son dialecte et son schéma sont explicités."
  },
  {
    "id": 32,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu contient des géométries, attributs et systèmes de coordonnées.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 32\n\nRéférence exercice : OPENDATA-032`",
    "reponse_v": "GeoJSON ou autre format géospatial ouvert adapté",
    "reponse_f1": "CSV sans colonnes géographiques",
    "reponse_f2": "Document texte libre",
    "explication": "Un format géospatial doit préserver géométries et système de référence."
  },
  {
    "id": 33,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUne API doit exposer des objets hiérarchiques facilement consommables en JavaScript.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 33\n\nRéférence exercice : OPENDATA-033`",
    "reponse_v": "JSON",
    "reponse_f1": "PDF",
    "reponse_f2": "XLSX binaire uniquement",
    "explication": "JSON représente naturellement des structures imbriquées."
  },
  {
    "id": 34,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn vocabulaire sémantique doit permettre de relier des ressources par URI.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 34\n\nRéférence exercice : OPENDATA-034`",
    "reponse_v": "RDF",
    "reponse_f1": "CSV brut sans identifiants",
    "reponse_f2": "PNG",
    "explication": "RDF permet de représenter des triplets et des liens sémantiques."
  },
  {
    "id": 35,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn fichier volumineux doit être publié avec un schéma stable et des types explicites.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 35\n\nRéférence exercice : OPENDATA-035`",
    "reponse_v": "Parquet ou format colonne documenté",
    "reponse_f1": "TXT non structuré",
    "reponse_f2": "Image bitmap",
    "explication": "Un format colonne conserve des types et réduit les coûts de lecture analytique."
  },
  {
    "id": 36,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn flux d'événements est publié en continu.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 36\n\nRéférence exercice : OPENDATA-036`",
    "reponse_v": "NDJSON ou format de streaming adapté",
    "reponse_f1": "Un unique tableau JSON jamais fermé",
    "reponse_f2": "Une archive ZIP remplacée à chaque événement",
    "explication": "NDJSON facilite le traitement ligne par ligne."
  },
  {
    "id": 37,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu doit être réutilisable par des outils très variés.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 37\n\nRéférence exercice : OPENDATA-037`",
    "reponse_v": "Privilégier un format ouvert et documenté",
    "reponse_f1": "Utiliser un format propriétaire sans spécification",
    "reponse_f2": "Fournir seulement une interface graphique",
    "explication": "L'ouverture du format améliore la portabilité et l'interopérabilité."
  },
  {
    "id": 38,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUne date est publiée pour des consommateurs internationaux.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 38\n\nRéférence exercice : OPENDATA-038`",
    "reponse_v": "Utiliser un format ISO 8601 documenté",
    "reponse_f1": "Utiliser 01/02/03 sans précision",
    "reponse_f2": "Écrire la date en langage naturel uniquement",
    "explication": "ISO 8601 réduit les ambiguïtés de format."
  },
  {
    "id": 39,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nDes valeurs manquantes existent dans un CSV.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 39\n\nRéférence exercice : OPENDATA-039`",
    "reponse_v": "Documenter explicitement la représentation des valeurs absentes",
    "reponse_f1": "Utiliser aléatoirement vide, N/A et 0",
    "reponse_f2": "Remplacer toutes les absences par zéro",
    "explication": "La convention des valeurs manquantes doit être stable et documentée."
  },
  {
    "id": 40,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn fichier contient des nombres décimaux pour plusieurs pays.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 40\n\nRéférence exercice : OPENDATA-040`",
    "reponse_v": "Fixer le séparateur décimal et le séparateur de colonnes",
    "reponse_f1": "Laisser chaque producteur choisir librement",
    "reponse_f2": "Mélanger virgule et point dans une même colonne",
    "explication": "Les conventions numériques doivent être homogènes."
  },
  {
    "id": 41,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu tabulaire simple doit être lisible par tableur et facilement réutilisable.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 41\n\nRéférence exercice : OPENDATA-041`",
    "reponse_v": "CSV avec encodage, séparateur et schéma documentés",
    "reponse_f1": "PDF image sans structure",
    "reponse_f2": "Capture d'écran du tableau",
    "explication": "CSV est adapté aux données tabulaires si son dialecte et son schéma sont explicités."
  },
  {
    "id": 42,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu contient des géométries, attributs et systèmes de coordonnées.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 42\n\nRéférence exercice : OPENDATA-042`",
    "reponse_v": "GeoJSON ou autre format géospatial ouvert adapté",
    "reponse_f1": "CSV sans colonnes géographiques",
    "reponse_f2": "Document texte libre",
    "explication": "Un format géospatial doit préserver géométries et système de référence."
  },
  {
    "id": 43,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUne API doit exposer des objets hiérarchiques facilement consommables en JavaScript.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 43\n\nRéférence exercice : OPENDATA-043`",
    "reponse_v": "JSON",
    "reponse_f1": "PDF",
    "reponse_f2": "XLSX binaire uniquement",
    "explication": "JSON représente naturellement des structures imbriquées."
  },
  {
    "id": 44,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn vocabulaire sémantique doit permettre de relier des ressources par URI.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 44\n\nRéférence exercice : OPENDATA-044`",
    "reponse_v": "RDF",
    "reponse_f1": "CSV brut sans identifiants",
    "reponse_f2": "PNG",
    "explication": "RDF permet de représenter des triplets et des liens sémantiques."
  },
  {
    "id": 45,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn fichier volumineux doit être publié avec un schéma stable et des types explicites.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 45\n\nRéférence exercice : OPENDATA-045`",
    "reponse_v": "Parquet ou format colonne documenté",
    "reponse_f1": "TXT non structuré",
    "reponse_f2": "Image bitmap",
    "explication": "Un format colonne conserve des types et réduit les coûts de lecture analytique."
  },
  {
    "id": 46,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn flux d'événements est publié en continu.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 46\n\nRéférence exercice : OPENDATA-046`",
    "reponse_v": "NDJSON ou format de streaming adapté",
    "reponse_f1": "Un unique tableau JSON jamais fermé",
    "reponse_f2": "Une archive ZIP remplacée à chaque événement",
    "explication": "NDJSON facilite le traitement ligne par ligne."
  },
  {
    "id": 47,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn jeu doit être réutilisable par des outils très variés.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 47\n\nRéférence exercice : OPENDATA-047`",
    "reponse_v": "Privilégier un format ouvert et documenté",
    "reponse_f1": "Utiliser un format propriétaire sans spécification",
    "reponse_f2": "Fournir seulement une interface graphique",
    "explication": "L'ouverture du format améliore la portabilité et l'interopérabilité."
  },
  {
    "id": 48,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUne date est publiée pour des consommateurs internationaux.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 48\n\nRéférence exercice : OPENDATA-048`",
    "reponse_v": "Utiliser un format ISO 8601 documenté",
    "reponse_f1": "Utiliser 01/02/03 sans précision",
    "reponse_f2": "Écrire la date en langage naturel uniquement",
    "explication": "ISO 8601 réduit les ambiguïtés de format."
  },
  {
    "id": 49,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nDes valeurs manquantes existent dans un CSV.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 49\n\nRéférence exercice : OPENDATA-049`",
    "reponse_v": "Documenter explicitement la représentation des valeurs absentes",
    "reponse_f1": "Utiliser aléatoirement vide, N/A et 0",
    "reponse_f2": "Remplacer toutes les absences par zéro",
    "explication": "La convention des valeurs manquantes doit être stable et documentée."
  },
  {
    "id": 50,
    "question": "`Mini-TP Open Data — formats et interopérabilité\n\nContexte :\nUn fichier contient des nombres décimaux pour plusieurs pays.\n\nContrainte :\nLe choix doit maximiser la réutilisabilité, la lisibilité machine et la pérennité.\n\nQuelle solution est la plus correcte ?\n\nCas format : 50\n\nRéférence exercice : OPENDATA-050`",
    "reponse_v": "Fixer le séparateur décimal et le séparateur de colonnes",
    "reponse_f1": "Laisser chaque producteur choisir librement",
    "reponse_f2": "Mélanger virgule et point dans une même colonne",
    "explication": "Les conventions numériques doivent être homogènes."
  },
  {
    "id": 51,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu est publié sans titre, description ni producteur.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 01\n\nRéférence exercice : OPENDATA-051`",
    "reponse_v": "Ajouter des métadonnées descriptives complètes",
    "reponse_f1": "Ajouter uniquement une couleur dans le portail",
    "reponse_f2": "Renommer le fichier en data.csv",
    "explication": "Les métadonnées rendent le jeu compréhensible et découvrable."
  },
  {
    "id": 52,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLa fréquence de mise à jour n'est pas connue.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 02\n\nRéférence exercice : OPENDATA-052`",
    "reponse_v": "Publier une fréquence et une date de dernière mise à jour",
    "reponse_f1": "Laisser l'utilisateur la deviner",
    "reponse_f2": "Masquer toute date",
    "explication": "La fraîcheur doit être explicitement documentée."
  },
  {
    "id": 53,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu dépend d'un territoire précis.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 03\n\nRéférence exercice : OPENDATA-053`",
    "reponse_v": "Ajouter une couverture spatiale normalisée",
    "reponse_f1": "Ajouter seulement une image de carte",
    "reponse_f2": "Inscrire le territoire dans le nom du fichier uniquement",
    "explication": "La couverture spatiale facilite recherche et filtrage."
  },
  {
    "id": 54,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe jeu couvre une période historique définie.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 04\n\nRéférence exercice : OPENDATA-054`",
    "reponse_v": "Publier une couverture temporelle",
    "reponse_f1": "Publier uniquement la date de téléchargement",
    "reponse_f2": "Remplacer la période par un commentaire libre",
    "explication": "La couverture temporelle décrit la période représentée par les données."
  },
  {
    "id": 55,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe portail doit permettre de filtrer les jeux par thème.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 05\n\nRéférence exercice : OPENDATA-055`",
    "reponse_v": "Utiliser des mots-clés et catégories contrôlés",
    "reponse_f1": "Créer un fichier différent par mot-clé",
    "reponse_f2": "Ajouter les mots-clés dans les valeurs du jeu",
    "explication": "Les vocabulaires contrôlés améliorent la recherche."
  },
  {
    "id": 56,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe schéma des colonnes évolue.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 06\n\nRéférence exercice : OPENDATA-056`",
    "reponse_v": "Versionner et publier le schéma de données",
    "reponse_f1": "Modifier silencieusement les colonnes",
    "reponse_f2": "Conserver seulement une capture d'écran",
    "explication": "Le versionnement du schéma protège les consommateurs."
  },
  {
    "id": 57,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu possède plusieurs distributions.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 07\n\nRéférence exercice : OPENDATA-057`",
    "reponse_v": "Décrire séparément la ressource logique et ses distributions",
    "reponse_f1": "Créer plusieurs fiches sans relation",
    "reponse_f2": "Ne publier qu'un lien générique",
    "explication": "Un même dataset peut avoir plusieurs fichiers, API ou formats."
  },
  {
    "id": 58,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe jeu provient d'une autre source.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 08\n\nRéférence exercice : OPENDATA-058`",
    "reponse_v": "Indiquer la provenance et la chaîne de transformation",
    "reponse_f1": "Supprimer toute mention de la source",
    "reponse_f2": "Mettre seulement le nom du portail",
    "explication": "La provenance renforce la traçabilité."
  },
  {
    "id": 59,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUne erreur connue affecte une colonne.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 09\n\nRéférence exercice : OPENDATA-059`",
    "reponse_v": "Documenter la limitation dans les métadonnées",
    "reponse_f1": "La cacher jusqu'à correction",
    "reponse_f2": "Supprimer la colonne sans avertir",
    "explication": "Les limites connues doivent être transparentes."
  },
  {
    "id": 60,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn catalogue agrège plusieurs producteurs.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 10\n\nRéférence exercice : OPENDATA-060`",
    "reponse_v": "Utiliser des identifiants stables pour les jeux et organismes",
    "reponse_f1": "Utiliser le titre comme seul identifiant",
    "reponse_f2": "Changer les URL à chaque mise à jour",
    "explication": "Les identifiants stables facilitent l'agrégation et les liens."
  },
  {
    "id": 61,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu est publié sans titre, description ni producteur.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 11\n\nRéférence exercice : OPENDATA-061`",
    "reponse_v": "Ajouter des métadonnées descriptives complètes",
    "reponse_f1": "Ajouter uniquement une couleur dans le portail",
    "reponse_f2": "Renommer le fichier en data.csv",
    "explication": "Les métadonnées rendent le jeu compréhensible et découvrable."
  },
  {
    "id": 62,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLa fréquence de mise à jour n'est pas connue.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 12\n\nRéférence exercice : OPENDATA-062`",
    "reponse_v": "Publier une fréquence et une date de dernière mise à jour",
    "reponse_f1": "Laisser l'utilisateur la deviner",
    "reponse_f2": "Masquer toute date",
    "explication": "La fraîcheur doit être explicitement documentée."
  },
  {
    "id": 63,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu dépend d'un territoire précis.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 13\n\nRéférence exercice : OPENDATA-063`",
    "reponse_v": "Ajouter une couverture spatiale normalisée",
    "reponse_f1": "Ajouter seulement une image de carte",
    "reponse_f2": "Inscrire le territoire dans le nom du fichier uniquement",
    "explication": "La couverture spatiale facilite recherche et filtrage."
  },
  {
    "id": 64,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe jeu couvre une période historique définie.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 14\n\nRéférence exercice : OPENDATA-064`",
    "reponse_v": "Publier une couverture temporelle",
    "reponse_f1": "Publier uniquement la date de téléchargement",
    "reponse_f2": "Remplacer la période par un commentaire libre",
    "explication": "La couverture temporelle décrit la période représentée par les données."
  },
  {
    "id": 65,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe portail doit permettre de filtrer les jeux par thème.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 15\n\nRéférence exercice : OPENDATA-065`",
    "reponse_v": "Utiliser des mots-clés et catégories contrôlés",
    "reponse_f1": "Créer un fichier différent par mot-clé",
    "reponse_f2": "Ajouter les mots-clés dans les valeurs du jeu",
    "explication": "Les vocabulaires contrôlés améliorent la recherche."
  },
  {
    "id": 66,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe schéma des colonnes évolue.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 16\n\nRéférence exercice : OPENDATA-066`",
    "reponse_v": "Versionner et publier le schéma de données",
    "reponse_f1": "Modifier silencieusement les colonnes",
    "reponse_f2": "Conserver seulement une capture d'écran",
    "explication": "Le versionnement du schéma protège les consommateurs."
  },
  {
    "id": 67,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu possède plusieurs distributions.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 17\n\nRéférence exercice : OPENDATA-067`",
    "reponse_v": "Décrire séparément la ressource logique et ses distributions",
    "reponse_f1": "Créer plusieurs fiches sans relation",
    "reponse_f2": "Ne publier qu'un lien générique",
    "explication": "Un même dataset peut avoir plusieurs fichiers, API ou formats."
  },
  {
    "id": 68,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe jeu provient d'une autre source.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 18\n\nRéférence exercice : OPENDATA-068`",
    "reponse_v": "Indiquer la provenance et la chaîne de transformation",
    "reponse_f1": "Supprimer toute mention de la source",
    "reponse_f2": "Mettre seulement le nom du portail",
    "explication": "La provenance renforce la traçabilité."
  },
  {
    "id": 69,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUne erreur connue affecte une colonne.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 19\n\nRéférence exercice : OPENDATA-069`",
    "reponse_v": "Documenter la limitation dans les métadonnées",
    "reponse_f1": "La cacher jusqu'à correction",
    "reponse_f2": "Supprimer la colonne sans avertir",
    "explication": "Les limites connues doivent être transparentes."
  },
  {
    "id": 70,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn catalogue agrège plusieurs producteurs.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 20\n\nRéférence exercice : OPENDATA-070`",
    "reponse_v": "Utiliser des identifiants stables pour les jeux et organismes",
    "reponse_f1": "Utiliser le titre comme seul identifiant",
    "reponse_f2": "Changer les URL à chaque mise à jour",
    "explication": "Les identifiants stables facilitent l'agrégation et les liens."
  },
  {
    "id": 71,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu est publié sans titre, description ni producteur.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 21\n\nRéférence exercice : OPENDATA-071`",
    "reponse_v": "Ajouter des métadonnées descriptives complètes",
    "reponse_f1": "Ajouter uniquement une couleur dans le portail",
    "reponse_f2": "Renommer le fichier en data.csv",
    "explication": "Les métadonnées rendent le jeu compréhensible et découvrable."
  },
  {
    "id": 72,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLa fréquence de mise à jour n'est pas connue.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 22\n\nRéférence exercice : OPENDATA-072`",
    "reponse_v": "Publier une fréquence et une date de dernière mise à jour",
    "reponse_f1": "Laisser l'utilisateur la deviner",
    "reponse_f2": "Masquer toute date",
    "explication": "La fraîcheur doit être explicitement documentée."
  },
  {
    "id": 73,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu dépend d'un territoire précis.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 23\n\nRéférence exercice : OPENDATA-073`",
    "reponse_v": "Ajouter une couverture spatiale normalisée",
    "reponse_f1": "Ajouter seulement une image de carte",
    "reponse_f2": "Inscrire le territoire dans le nom du fichier uniquement",
    "explication": "La couverture spatiale facilite recherche et filtrage."
  },
  {
    "id": 74,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe jeu couvre une période historique définie.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 24\n\nRéférence exercice : OPENDATA-074`",
    "reponse_v": "Publier une couverture temporelle",
    "reponse_f1": "Publier uniquement la date de téléchargement",
    "reponse_f2": "Remplacer la période par un commentaire libre",
    "explication": "La couverture temporelle décrit la période représentée par les données."
  },
  {
    "id": 75,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe portail doit permettre de filtrer les jeux par thème.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 25\n\nRéférence exercice : OPENDATA-075`",
    "reponse_v": "Utiliser des mots-clés et catégories contrôlés",
    "reponse_f1": "Créer un fichier différent par mot-clé",
    "reponse_f2": "Ajouter les mots-clés dans les valeurs du jeu",
    "explication": "Les vocabulaires contrôlés améliorent la recherche."
  },
  {
    "id": 76,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe schéma des colonnes évolue.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 26\n\nRéférence exercice : OPENDATA-076`",
    "reponse_v": "Versionner et publier le schéma de données",
    "reponse_f1": "Modifier silencieusement les colonnes",
    "reponse_f2": "Conserver seulement une capture d'écran",
    "explication": "Le versionnement du schéma protège les consommateurs."
  },
  {
    "id": 77,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu possède plusieurs distributions.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 27\n\nRéférence exercice : OPENDATA-077`",
    "reponse_v": "Décrire séparément la ressource logique et ses distributions",
    "reponse_f1": "Créer plusieurs fiches sans relation",
    "reponse_f2": "Ne publier qu'un lien générique",
    "explication": "Un même dataset peut avoir plusieurs fichiers, API ou formats."
  },
  {
    "id": 78,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe jeu provient d'une autre source.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 28\n\nRéférence exercice : OPENDATA-078`",
    "reponse_v": "Indiquer la provenance et la chaîne de transformation",
    "reponse_f1": "Supprimer toute mention de la source",
    "reponse_f2": "Mettre seulement le nom du portail",
    "explication": "La provenance renforce la traçabilité."
  },
  {
    "id": 79,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUne erreur connue affecte une colonne.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 29\n\nRéférence exercice : OPENDATA-079`",
    "reponse_v": "Documenter la limitation dans les métadonnées",
    "reponse_f1": "La cacher jusqu'à correction",
    "reponse_f2": "Supprimer la colonne sans avertir",
    "explication": "Les limites connues doivent être transparentes."
  },
  {
    "id": 80,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn catalogue agrège plusieurs producteurs.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 30\n\nRéférence exercice : OPENDATA-080`",
    "reponse_v": "Utiliser des identifiants stables pour les jeux et organismes",
    "reponse_f1": "Utiliser le titre comme seul identifiant",
    "reponse_f2": "Changer les URL à chaque mise à jour",
    "explication": "Les identifiants stables facilitent l'agrégation et les liens."
  },
  {
    "id": 81,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu est publié sans titre, description ni producteur.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 31\n\nRéférence exercice : OPENDATA-081`",
    "reponse_v": "Ajouter des métadonnées descriptives complètes",
    "reponse_f1": "Ajouter uniquement une couleur dans le portail",
    "reponse_f2": "Renommer le fichier en data.csv",
    "explication": "Les métadonnées rendent le jeu compréhensible et découvrable."
  },
  {
    "id": 82,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLa fréquence de mise à jour n'est pas connue.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 32\n\nRéférence exercice : OPENDATA-082`",
    "reponse_v": "Publier une fréquence et une date de dernière mise à jour",
    "reponse_f1": "Laisser l'utilisateur la deviner",
    "reponse_f2": "Masquer toute date",
    "explication": "La fraîcheur doit être explicitement documentée."
  },
  {
    "id": 83,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu dépend d'un territoire précis.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 33\n\nRéférence exercice : OPENDATA-083`",
    "reponse_v": "Ajouter une couverture spatiale normalisée",
    "reponse_f1": "Ajouter seulement une image de carte",
    "reponse_f2": "Inscrire le territoire dans le nom du fichier uniquement",
    "explication": "La couverture spatiale facilite recherche et filtrage."
  },
  {
    "id": 84,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe jeu couvre une période historique définie.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 34\n\nRéférence exercice : OPENDATA-084`",
    "reponse_v": "Publier une couverture temporelle",
    "reponse_f1": "Publier uniquement la date de téléchargement",
    "reponse_f2": "Remplacer la période par un commentaire libre",
    "explication": "La couverture temporelle décrit la période représentée par les données."
  },
  {
    "id": 85,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe portail doit permettre de filtrer les jeux par thème.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 35\n\nRéférence exercice : OPENDATA-085`",
    "reponse_v": "Utiliser des mots-clés et catégories contrôlés",
    "reponse_f1": "Créer un fichier différent par mot-clé",
    "reponse_f2": "Ajouter les mots-clés dans les valeurs du jeu",
    "explication": "Les vocabulaires contrôlés améliorent la recherche."
  },
  {
    "id": 86,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe schéma des colonnes évolue.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 36\n\nRéférence exercice : OPENDATA-086`",
    "reponse_v": "Versionner et publier le schéma de données",
    "reponse_f1": "Modifier silencieusement les colonnes",
    "reponse_f2": "Conserver seulement une capture d'écran",
    "explication": "Le versionnement du schéma protège les consommateurs."
  },
  {
    "id": 87,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu possède plusieurs distributions.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 37\n\nRéférence exercice : OPENDATA-087`",
    "reponse_v": "Décrire séparément la ressource logique et ses distributions",
    "reponse_f1": "Créer plusieurs fiches sans relation",
    "reponse_f2": "Ne publier qu'un lien générique",
    "explication": "Un même dataset peut avoir plusieurs fichiers, API ou formats."
  },
  {
    "id": 88,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe jeu provient d'une autre source.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 38\n\nRéférence exercice : OPENDATA-088`",
    "reponse_v": "Indiquer la provenance et la chaîne de transformation",
    "reponse_f1": "Supprimer toute mention de la source",
    "reponse_f2": "Mettre seulement le nom du portail",
    "explication": "La provenance renforce la traçabilité."
  },
  {
    "id": 89,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUne erreur connue affecte une colonne.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 39\n\nRéférence exercice : OPENDATA-089`",
    "reponse_v": "Documenter la limitation dans les métadonnées",
    "reponse_f1": "La cacher jusqu'à correction",
    "reponse_f2": "Supprimer la colonne sans avertir",
    "explication": "Les limites connues doivent être transparentes."
  },
  {
    "id": 90,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn catalogue agrège plusieurs producteurs.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 40\n\nRéférence exercice : OPENDATA-090`",
    "reponse_v": "Utiliser des identifiants stables pour les jeux et organismes",
    "reponse_f1": "Utiliser le titre comme seul identifiant",
    "reponse_f2": "Changer les URL à chaque mise à jour",
    "explication": "Les identifiants stables facilitent l'agrégation et les liens."
  },
  {
    "id": 91,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu est publié sans titre, description ni producteur.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 41\n\nRéférence exercice : OPENDATA-091`",
    "reponse_v": "Ajouter des métadonnées descriptives complètes",
    "reponse_f1": "Ajouter uniquement une couleur dans le portail",
    "reponse_f2": "Renommer le fichier en data.csv",
    "explication": "Les métadonnées rendent le jeu compréhensible et découvrable."
  },
  {
    "id": 92,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLa fréquence de mise à jour n'est pas connue.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 42\n\nRéférence exercice : OPENDATA-092`",
    "reponse_v": "Publier une fréquence et une date de dernière mise à jour",
    "reponse_f1": "Laisser l'utilisateur la deviner",
    "reponse_f2": "Masquer toute date",
    "explication": "La fraîcheur doit être explicitement documentée."
  },
  {
    "id": 93,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu dépend d'un territoire précis.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 43\n\nRéférence exercice : OPENDATA-093`",
    "reponse_v": "Ajouter une couverture spatiale normalisée",
    "reponse_f1": "Ajouter seulement une image de carte",
    "reponse_f2": "Inscrire le territoire dans le nom du fichier uniquement",
    "explication": "La couverture spatiale facilite recherche et filtrage."
  },
  {
    "id": 94,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe jeu couvre une période historique définie.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 44\n\nRéférence exercice : OPENDATA-094`",
    "reponse_v": "Publier une couverture temporelle",
    "reponse_f1": "Publier uniquement la date de téléchargement",
    "reponse_f2": "Remplacer la période par un commentaire libre",
    "explication": "La couverture temporelle décrit la période représentée par les données."
  },
  {
    "id": 95,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe portail doit permettre de filtrer les jeux par thème.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 45\n\nRéférence exercice : OPENDATA-095`",
    "reponse_v": "Utiliser des mots-clés et catégories contrôlés",
    "reponse_f1": "Créer un fichier différent par mot-clé",
    "reponse_f2": "Ajouter les mots-clés dans les valeurs du jeu",
    "explication": "Les vocabulaires contrôlés améliorent la recherche."
  },
  {
    "id": 96,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe schéma des colonnes évolue.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 46\n\nRéférence exercice : OPENDATA-096`",
    "reponse_v": "Versionner et publier le schéma de données",
    "reponse_f1": "Modifier silencieusement les colonnes",
    "reponse_f2": "Conserver seulement une capture d'écran",
    "explication": "Le versionnement du schéma protège les consommateurs."
  },
  {
    "id": 97,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn jeu possède plusieurs distributions.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 47\n\nRéférence exercice : OPENDATA-097`",
    "reponse_v": "Décrire séparément la ressource logique et ses distributions",
    "reponse_f1": "Créer plusieurs fiches sans relation",
    "reponse_f2": "Ne publier qu'un lien générique",
    "explication": "Un même dataset peut avoir plusieurs fichiers, API ou formats."
  },
  {
    "id": 98,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nLe jeu provient d'une autre source.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 48\n\nRéférence exercice : OPENDATA-098`",
    "reponse_v": "Indiquer la provenance et la chaîne de transformation",
    "reponse_f1": "Supprimer toute mention de la source",
    "reponse_f2": "Mettre seulement le nom du portail",
    "explication": "La provenance renforce la traçabilité."
  },
  {
    "id": 99,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUne erreur connue affecte une colonne.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 49\n\nRéférence exercice : OPENDATA-099`",
    "reponse_v": "Documenter la limitation dans les métadonnées",
    "reponse_f1": "La cacher jusqu'à correction",
    "reponse_f2": "Supprimer la colonne sans avertir",
    "explication": "Les limites connues doivent être transparentes."
  },
  {
    "id": 100,
    "question": "`Mini-TP Open Data — métadonnées et catalogue\n\nSituation :\nUn catalogue agrège plusieurs producteurs.\n\nObjectif :\nAméliorer la découvrabilité, la compréhension et la traçabilité du jeu.\n\nQuelle mesure faut-il appliquer ?\n\nCas métadonnées : 50\n\nRéférence exercice : OPENDATA-100`",
    "reponse_v": "Utiliser des identifiants stables pour les jeux et organismes",
    "reponse_f1": "Utiliser le titre comme seul identifiant",
    "reponse_f2": "Changer les URL à chaque mise à jour",
    "explication": "Les identifiants stables facilitent l'agrégation et les liens."
  },
  {
    "id": 101,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne API retourne des millions de lignes en une seule réponse.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 01\n\nRéférence exercice : OPENDATA-101`",
    "reponse_v": "Mettre en place pagination, limites et filtres",
    "reponse_f1": "Augmenter seulement le timeout",
    "reponse_f2": "Compresser les logs serveur",
    "explication": "La pagination protège serveur et client."
  },
  {
    "id": 102,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nLe client doit reprendre un parcours de résultats stable.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 02\n\nRéférence exercice : OPENDATA-102`",
    "reponse_v": "Utiliser une pagination par curseur ou un ordre stable",
    "reponse_f1": "Mélanger l'ordre à chaque requête",
    "reponse_f2": "Supprimer les identifiants",
    "explication": "Un ordre stable évite doublons et omissions."
  },
  {
    "id": 103,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne ressource est mise à jour fréquemment.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 03\n\nRéférence exercice : OPENDATA-103`",
    "reponse_v": "Fournir ETag ou Last-Modified pour la mise en cache conditionnelle",
    "reponse_f1": "Désactiver tout cache",
    "reponse_f2": "Changer l'URL à chaque appel",
    "explication": "Les validateurs HTTP réduisent les transferts inutiles."
  },
  {
    "id": 104,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne API publique subit des appels excessifs.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 04\n\nRéférence exercice : OPENDATA-104`",
    "reponse_v": "Appliquer un rate limiting documenté",
    "reponse_f1": "Bloquer tous les utilisateurs anonymes",
    "reponse_f2": "Renvoyer des erreurs aléatoires",
    "explication": "Le rate limiting protège le service sans rendre l'usage imprévisible."
  },
  {
    "id": 105,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nLe consommateur veut filtrer par date et territoire.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 05\n\nRéférence exercice : OPENDATA-105`",
    "reponse_v": "Exposer des paramètres de filtre documentés",
    "reponse_f1": "L'obliger à télécharger l'intégralité",
    "reponse_f2": "Créer une API différente par filtre",
    "explication": "Les filtres réduisent les volumes et améliorent l'usage."
  },
  {
    "id": 106,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne réponse d'erreur doit être exploitable.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 06\n\nRéférence exercice : OPENDATA-106`",
    "reponse_v": "Retourner un code HTTP pertinent et un corps d'erreur structuré",
    "reponse_f1": "Toujours retourner 200",
    "reponse_f2": "Retourner uniquement une page HTML générique",
    "explication": "Les erreurs doivent être explicites et machine-readable."
  },
  {
    "id": 107,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nL'API change de structure de manière incompatible.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 07\n\nRéférence exercice : OPENDATA-107`",
    "reponse_v": "Introduire une nouvelle version et annoncer la dépréciation",
    "reponse_f1": "Modifier silencieusement la réponse",
    "reponse_f2": "Supprimer l'ancienne version immédiatement",
    "explication": "Le versionnement évite de casser brutalement les clients."
  },
  {
    "id": 108,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUn export complet est demandé régulièrement.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 08\n\nRéférence exercice : OPENDATA-108`",
    "reponse_v": "Proposer un fichier bulk en complément de l'API",
    "reponse_f1": "Forcer des millions d'appels unitaires",
    "reponse_f2": "Limiter l'API à dix lignes sans export",
    "explication": "Les usages massifs sont mieux servis par un téléchargement complet."
  },
  {
    "id": 109,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne ressource doit être citée durablement.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 09\n\nRéférence exercice : OPENDATA-109`",
    "reponse_v": "Utiliser une URL stable ou un identifiant pérenne",
    "reponse_f1": "Changer le chemin à chaque publication",
    "reponse_f2": "Utiliser un lien de session temporaire",
    "explication": "La stabilité des URI facilite la citation et la réutilisation."
  },
  {
    "id": 110,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nL'API publie des dates et nombres.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 10\n\nRéférence exercice : OPENDATA-110`",
    "reponse_v": "Documenter précisément types, unités et fuseaux horaires",
    "reponse_f1": "Laisser les clients inférer les unités",
    "reponse_f2": "Mélanger secondes et millisecondes",
    "explication": "Les contrats doivent préciser les conventions de représentation."
  },
  {
    "id": 111,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne API retourne des millions de lignes en une seule réponse.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 11\n\nRéférence exercice : OPENDATA-111`",
    "reponse_v": "Mettre en place pagination, limites et filtres",
    "reponse_f1": "Augmenter seulement le timeout",
    "reponse_f2": "Compresser les logs serveur",
    "explication": "La pagination protège serveur et client."
  },
  {
    "id": 112,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nLe client doit reprendre un parcours de résultats stable.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 12\n\nRéférence exercice : OPENDATA-112`",
    "reponse_v": "Utiliser une pagination par curseur ou un ordre stable",
    "reponse_f1": "Mélanger l'ordre à chaque requête",
    "reponse_f2": "Supprimer les identifiants",
    "explication": "Un ordre stable évite doublons et omissions."
  },
  {
    "id": 113,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne ressource est mise à jour fréquemment.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 13\n\nRéférence exercice : OPENDATA-113`",
    "reponse_v": "Fournir ETag ou Last-Modified pour la mise en cache conditionnelle",
    "reponse_f1": "Désactiver tout cache",
    "reponse_f2": "Changer l'URL à chaque appel",
    "explication": "Les validateurs HTTP réduisent les transferts inutiles."
  },
  {
    "id": 114,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne API publique subit des appels excessifs.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 14\n\nRéférence exercice : OPENDATA-114`",
    "reponse_v": "Appliquer un rate limiting documenté",
    "reponse_f1": "Bloquer tous les utilisateurs anonymes",
    "reponse_f2": "Renvoyer des erreurs aléatoires",
    "explication": "Le rate limiting protège le service sans rendre l'usage imprévisible."
  },
  {
    "id": 115,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nLe consommateur veut filtrer par date et territoire.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 15\n\nRéférence exercice : OPENDATA-115`",
    "reponse_v": "Exposer des paramètres de filtre documentés",
    "reponse_f1": "L'obliger à télécharger l'intégralité",
    "reponse_f2": "Créer une API différente par filtre",
    "explication": "Les filtres réduisent les volumes et améliorent l'usage."
  },
  {
    "id": 116,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne réponse d'erreur doit être exploitable.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 16\n\nRéférence exercice : OPENDATA-116`",
    "reponse_v": "Retourner un code HTTP pertinent et un corps d'erreur structuré",
    "reponse_f1": "Toujours retourner 200",
    "reponse_f2": "Retourner uniquement une page HTML générique",
    "explication": "Les erreurs doivent être explicites et machine-readable."
  },
  {
    "id": 117,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nL'API change de structure de manière incompatible.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 17\n\nRéférence exercice : OPENDATA-117`",
    "reponse_v": "Introduire une nouvelle version et annoncer la dépréciation",
    "reponse_f1": "Modifier silencieusement la réponse",
    "reponse_f2": "Supprimer l'ancienne version immédiatement",
    "explication": "Le versionnement évite de casser brutalement les clients."
  },
  {
    "id": 118,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUn export complet est demandé régulièrement.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 18\n\nRéférence exercice : OPENDATA-118`",
    "reponse_v": "Proposer un fichier bulk en complément de l'API",
    "reponse_f1": "Forcer des millions d'appels unitaires",
    "reponse_f2": "Limiter l'API à dix lignes sans export",
    "explication": "Les usages massifs sont mieux servis par un téléchargement complet."
  },
  {
    "id": 119,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne ressource doit être citée durablement.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 19\n\nRéférence exercice : OPENDATA-119`",
    "reponse_v": "Utiliser une URL stable ou un identifiant pérenne",
    "reponse_f1": "Changer le chemin à chaque publication",
    "reponse_f2": "Utiliser un lien de session temporaire",
    "explication": "La stabilité des URI facilite la citation et la réutilisation."
  },
  {
    "id": 120,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nL'API publie des dates et nombres.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 20\n\nRéférence exercice : OPENDATA-120`",
    "reponse_v": "Documenter précisément types, unités et fuseaux horaires",
    "reponse_f1": "Laisser les clients inférer les unités",
    "reponse_f2": "Mélanger secondes et millisecondes",
    "explication": "Les contrats doivent préciser les conventions de représentation."
  },
  {
    "id": 121,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne API retourne des millions de lignes en une seule réponse.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 21\n\nRéférence exercice : OPENDATA-121`",
    "reponse_v": "Mettre en place pagination, limites et filtres",
    "reponse_f1": "Augmenter seulement le timeout",
    "reponse_f2": "Compresser les logs serveur",
    "explication": "La pagination protège serveur et client."
  },
  {
    "id": 122,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nLe client doit reprendre un parcours de résultats stable.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 22\n\nRéférence exercice : OPENDATA-122`",
    "reponse_v": "Utiliser une pagination par curseur ou un ordre stable",
    "reponse_f1": "Mélanger l'ordre à chaque requête",
    "reponse_f2": "Supprimer les identifiants",
    "explication": "Un ordre stable évite doublons et omissions."
  },
  {
    "id": 123,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne ressource est mise à jour fréquemment.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 23\n\nRéférence exercice : OPENDATA-123`",
    "reponse_v": "Fournir ETag ou Last-Modified pour la mise en cache conditionnelle",
    "reponse_f1": "Désactiver tout cache",
    "reponse_f2": "Changer l'URL à chaque appel",
    "explication": "Les validateurs HTTP réduisent les transferts inutiles."
  },
  {
    "id": 124,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne API publique subit des appels excessifs.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 24\n\nRéférence exercice : OPENDATA-124`",
    "reponse_v": "Appliquer un rate limiting documenté",
    "reponse_f1": "Bloquer tous les utilisateurs anonymes",
    "reponse_f2": "Renvoyer des erreurs aléatoires",
    "explication": "Le rate limiting protège le service sans rendre l'usage imprévisible."
  },
  {
    "id": 125,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nLe consommateur veut filtrer par date et territoire.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 25\n\nRéférence exercice : OPENDATA-125`",
    "reponse_v": "Exposer des paramètres de filtre documentés",
    "reponse_f1": "L'obliger à télécharger l'intégralité",
    "reponse_f2": "Créer une API différente par filtre",
    "explication": "Les filtres réduisent les volumes et améliorent l'usage."
  },
  {
    "id": 126,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne réponse d'erreur doit être exploitable.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 26\n\nRéférence exercice : OPENDATA-126`",
    "reponse_v": "Retourner un code HTTP pertinent et un corps d'erreur structuré",
    "reponse_f1": "Toujours retourner 200",
    "reponse_f2": "Retourner uniquement une page HTML générique",
    "explication": "Les erreurs doivent être explicites et machine-readable."
  },
  {
    "id": 127,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nL'API change de structure de manière incompatible.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 27\n\nRéférence exercice : OPENDATA-127`",
    "reponse_v": "Introduire une nouvelle version et annoncer la dépréciation",
    "reponse_f1": "Modifier silencieusement la réponse",
    "reponse_f2": "Supprimer l'ancienne version immédiatement",
    "explication": "Le versionnement évite de casser brutalement les clients."
  },
  {
    "id": 128,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUn export complet est demandé régulièrement.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 28\n\nRéférence exercice : OPENDATA-128`",
    "reponse_v": "Proposer un fichier bulk en complément de l'API",
    "reponse_f1": "Forcer des millions d'appels unitaires",
    "reponse_f2": "Limiter l'API à dix lignes sans export",
    "explication": "Les usages massifs sont mieux servis par un téléchargement complet."
  },
  {
    "id": 129,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne ressource doit être citée durablement.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 29\n\nRéférence exercice : OPENDATA-129`",
    "reponse_v": "Utiliser une URL stable ou un identifiant pérenne",
    "reponse_f1": "Changer le chemin à chaque publication",
    "reponse_f2": "Utiliser un lien de session temporaire",
    "explication": "La stabilité des URI facilite la citation et la réutilisation."
  },
  {
    "id": 130,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nL'API publie des dates et nombres.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 30\n\nRéférence exercice : OPENDATA-130`",
    "reponse_v": "Documenter précisément types, unités et fuseaux horaires",
    "reponse_f1": "Laisser les clients inférer les unités",
    "reponse_f2": "Mélanger secondes et millisecondes",
    "explication": "Les contrats doivent préciser les conventions de représentation."
  },
  {
    "id": 131,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne API retourne des millions de lignes en une seule réponse.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 31\n\nRéférence exercice : OPENDATA-131`",
    "reponse_v": "Mettre en place pagination, limites et filtres",
    "reponse_f1": "Augmenter seulement le timeout",
    "reponse_f2": "Compresser les logs serveur",
    "explication": "La pagination protège serveur et client."
  },
  {
    "id": 132,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nLe client doit reprendre un parcours de résultats stable.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 32\n\nRéférence exercice : OPENDATA-132`",
    "reponse_v": "Utiliser une pagination par curseur ou un ordre stable",
    "reponse_f1": "Mélanger l'ordre à chaque requête",
    "reponse_f2": "Supprimer les identifiants",
    "explication": "Un ordre stable évite doublons et omissions."
  },
  {
    "id": 133,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne ressource est mise à jour fréquemment.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 33\n\nRéférence exercice : OPENDATA-133`",
    "reponse_v": "Fournir ETag ou Last-Modified pour la mise en cache conditionnelle",
    "reponse_f1": "Désactiver tout cache",
    "reponse_f2": "Changer l'URL à chaque appel",
    "explication": "Les validateurs HTTP réduisent les transferts inutiles."
  },
  {
    "id": 134,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne API publique subit des appels excessifs.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 34\n\nRéférence exercice : OPENDATA-134`",
    "reponse_v": "Appliquer un rate limiting documenté",
    "reponse_f1": "Bloquer tous les utilisateurs anonymes",
    "reponse_f2": "Renvoyer des erreurs aléatoires",
    "explication": "Le rate limiting protège le service sans rendre l'usage imprévisible."
  },
  {
    "id": 135,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nLe consommateur veut filtrer par date et territoire.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 35\n\nRéférence exercice : OPENDATA-135`",
    "reponse_v": "Exposer des paramètres de filtre documentés",
    "reponse_f1": "L'obliger à télécharger l'intégralité",
    "reponse_f2": "Créer une API différente par filtre",
    "explication": "Les filtres réduisent les volumes et améliorent l'usage."
  },
  {
    "id": 136,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne réponse d'erreur doit être exploitable.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 36\n\nRéférence exercice : OPENDATA-136`",
    "reponse_v": "Retourner un code HTTP pertinent et un corps d'erreur structuré",
    "reponse_f1": "Toujours retourner 200",
    "reponse_f2": "Retourner uniquement une page HTML générique",
    "explication": "Les erreurs doivent être explicites et machine-readable."
  },
  {
    "id": 137,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nL'API change de structure de manière incompatible.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 37\n\nRéférence exercice : OPENDATA-137`",
    "reponse_v": "Introduire une nouvelle version et annoncer la dépréciation",
    "reponse_f1": "Modifier silencieusement la réponse",
    "reponse_f2": "Supprimer l'ancienne version immédiatement",
    "explication": "Le versionnement évite de casser brutalement les clients."
  },
  {
    "id": 138,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUn export complet est demandé régulièrement.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 38\n\nRéférence exercice : OPENDATA-138`",
    "reponse_v": "Proposer un fichier bulk en complément de l'API",
    "reponse_f1": "Forcer des millions d'appels unitaires",
    "reponse_f2": "Limiter l'API à dix lignes sans export",
    "explication": "Les usages massifs sont mieux servis par un téléchargement complet."
  },
  {
    "id": 139,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne ressource doit être citée durablement.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 39\n\nRéférence exercice : OPENDATA-139`",
    "reponse_v": "Utiliser une URL stable ou un identifiant pérenne",
    "reponse_f1": "Changer le chemin à chaque publication",
    "reponse_f2": "Utiliser un lien de session temporaire",
    "explication": "La stabilité des URI facilite la citation et la réutilisation."
  },
  {
    "id": 140,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nL'API publie des dates et nombres.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 40\n\nRéférence exercice : OPENDATA-140`",
    "reponse_v": "Documenter précisément types, unités et fuseaux horaires",
    "reponse_f1": "Laisser les clients inférer les unités",
    "reponse_f2": "Mélanger secondes et millisecondes",
    "explication": "Les contrats doivent préciser les conventions de représentation."
  },
  {
    "id": 141,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne API retourne des millions de lignes en une seule réponse.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 41\n\nRéférence exercice : OPENDATA-141`",
    "reponse_v": "Mettre en place pagination, limites et filtres",
    "reponse_f1": "Augmenter seulement le timeout",
    "reponse_f2": "Compresser les logs serveur",
    "explication": "La pagination protège serveur et client."
  },
  {
    "id": 142,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nLe client doit reprendre un parcours de résultats stable.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 42\n\nRéférence exercice : OPENDATA-142`",
    "reponse_v": "Utiliser une pagination par curseur ou un ordre stable",
    "reponse_f1": "Mélanger l'ordre à chaque requête",
    "reponse_f2": "Supprimer les identifiants",
    "explication": "Un ordre stable évite doublons et omissions."
  },
  {
    "id": 143,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne ressource est mise à jour fréquemment.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 43\n\nRéférence exercice : OPENDATA-143`",
    "reponse_v": "Fournir ETag ou Last-Modified pour la mise en cache conditionnelle",
    "reponse_f1": "Désactiver tout cache",
    "reponse_f2": "Changer l'URL à chaque appel",
    "explication": "Les validateurs HTTP réduisent les transferts inutiles."
  },
  {
    "id": 144,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne API publique subit des appels excessifs.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 44\n\nRéférence exercice : OPENDATA-144`",
    "reponse_v": "Appliquer un rate limiting documenté",
    "reponse_f1": "Bloquer tous les utilisateurs anonymes",
    "reponse_f2": "Renvoyer des erreurs aléatoires",
    "explication": "Le rate limiting protège le service sans rendre l'usage imprévisible."
  },
  {
    "id": 145,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nLe consommateur veut filtrer par date et territoire.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 45\n\nRéférence exercice : OPENDATA-145`",
    "reponse_v": "Exposer des paramètres de filtre documentés",
    "reponse_f1": "L'obliger à télécharger l'intégralité",
    "reponse_f2": "Créer une API différente par filtre",
    "explication": "Les filtres réduisent les volumes et améliorent l'usage."
  },
  {
    "id": 146,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne réponse d'erreur doit être exploitable.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 46\n\nRéférence exercice : OPENDATA-146`",
    "reponse_v": "Retourner un code HTTP pertinent et un corps d'erreur structuré",
    "reponse_f1": "Toujours retourner 200",
    "reponse_f2": "Retourner uniquement une page HTML générique",
    "explication": "Les erreurs doivent être explicites et machine-readable."
  },
  {
    "id": 147,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nL'API change de structure de manière incompatible.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 47\n\nRéférence exercice : OPENDATA-147`",
    "reponse_v": "Introduire une nouvelle version et annoncer la dépréciation",
    "reponse_f1": "Modifier silencieusement la réponse",
    "reponse_f2": "Supprimer l'ancienne version immédiatement",
    "explication": "Le versionnement évite de casser brutalement les clients."
  },
  {
    "id": 148,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUn export complet est demandé régulièrement.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 48\n\nRéférence exercice : OPENDATA-148`",
    "reponse_v": "Proposer un fichier bulk en complément de l'API",
    "reponse_f1": "Forcer des millions d'appels unitaires",
    "reponse_f2": "Limiter l'API à dix lignes sans export",
    "explication": "Les usages massifs sont mieux servis par un téléchargement complet."
  },
  {
    "id": 149,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nUne ressource doit être citée durablement.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 49\n\nRéférence exercice : OPENDATA-149`",
    "reponse_v": "Utiliser une URL stable ou un identifiant pérenne",
    "reponse_f1": "Changer le chemin à chaque publication",
    "reponse_f2": "Utiliser un lien de session temporaire",
    "explication": "La stabilité des URI facilite la citation et la réutilisation."
  },
  {
    "id": 150,
    "question": "`Mini-TP Open Data — exposition par API\n\nSituation :\nL'API publie des dates et nombres.\n\nContrainte :\nL'API doit rester stable, efficace et prévisible pour les réutilisateurs.\n\nQuelle solution est la plus adaptée ?\n\nCas API : 50\n\nRéférence exercice : OPENDATA-150`",
    "reponse_v": "Documenter précisément types, unités et fuseaux horaires",
    "reponse_f1": "Laisser les clients inférer les unités",
    "reponse_f2": "Mélanger secondes et millisecondes",
    "explication": "Les contrats doivent préciser les conventions de représentation."
  },
  {
    "id": 151,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe jeu est publié sans aucune information de réutilisation.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 01\n\nRéférence exercice : OPENDATA-151`",
    "reponse_v": "Associer une licence ouverte explicite",
    "reponse_f1": "Écrire seulement « libre »",
    "reponse_f2": "Ne rien préciser",
    "explication": "Une licence claire définit les droits et obligations."
  },
  {
    "id": 152,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe producteur exige la mention de la source.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 02\n\nRéférence exercice : OPENDATA-152`",
    "reponse_v": "Choisir une licence ouverte prévoyant l'attribution",
    "reponse_f1": "Interdire toute réutilisation commerciale",
    "reponse_f2": "Ajouter un mot de passe au fichier",
    "explication": "L'attribution peut être exigée tout en maintenant l'ouverture."
  },
  {
    "id": 153,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nDes données provenant de plusieurs producteurs sont agrégées.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 03\n\nRéférence exercice : OPENDATA-153`",
    "reponse_v": "Vérifier la compatibilité des licences",
    "reponse_f1": "Appliquer arbitrairement la licence la plus permissive",
    "reponse_f2": "Supprimer les mentions de source",
    "explication": "Les droits des sources doivent rester compatibles avec la redistribution."
  },
  {
    "id": 154,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne licence change pour les nouvelles versions.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 04\n\nRéférence exercice : OPENDATA-154`",
    "reponse_v": "Documenter la date et la version concernées",
    "reponse_f1": "Appliquer rétroactivement sans avertir",
    "reponse_f2": "Supprimer l'historique",
    "explication": "Les consommateurs doivent savoir quelles conditions s'appliquent à quelle version."
  },
  {
    "id": 155,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne donnée contient des éléments tiers protégés.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 05\n\nRéférence exercice : OPENDATA-155`",
    "reponse_v": "Identifier et exclure ou autoriser explicitement ces éléments",
    "reponse_f1": "Supposer qu'ils deviennent ouverts automatiquement",
    "reponse_f2": "Masquer leur origine",
    "explication": "Le producteur doit disposer des droits nécessaires."
  },
  {
    "id": 156,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne réutilisation doit citer la source correctement.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 06\n\nRéférence exercice : OPENDATA-156`",
    "reponse_v": "Fournir une formulation d'attribution recommandée",
    "reponse_f1": "Exiger une autorisation manuelle pour chaque usage",
    "reponse_f2": "Interdire toute modification",
    "explication": "Une attribution standard réduit l'ambiguïté."
  },
  {
    "id": 157,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe portail mélange licence de la donnée et conditions du site.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 07\n\nRéférence exercice : OPENDATA-157`",
    "reponse_v": "Séparer clairement licence des données et conditions d'utilisation du portail",
    "reponse_f1": "Appliquer les cookies comme licence",
    "reponse_f2": "Utiliser uniquement les CGU du site",
    "explication": "Les droits sur la donnée sont distincts des règles d'usage du portail."
  },
  {
    "id": 158,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUn dataset est retiré pour erreur majeure.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 08\n\nRéférence exercice : OPENDATA-158`",
    "reponse_v": "Conserver une notice de retrait et l'historique si possible",
    "reponse_f1": "Faire disparaître toute trace",
    "reponse_f2": "Réutiliser silencieusement la même URL pour un autre jeu",
    "explication": "La transparence sur le retrait protège la traçabilité."
  },
  {
    "id": 159,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUn organisme veut empêcher toute exploitation commerciale.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 09\n\nRéférence exercice : OPENDATA-159`",
    "reponse_v": "Ce choix n'est généralement pas compatible avec une ouverture maximale",
    "reponse_f1": "C'est obligatoire pour tout open data",
    "reponse_f2": "Cela rend automatiquement la donnée publique",
    "explication": "Une restriction commerciale réduit fortement la réutilisabilité."
  },
  {
    "id": 160,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne licence impose le partage à l'identique.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 10\n\nRéférence exercice : OPENDATA-160`",
    "reponse_v": "Les dérivés doivent être redistribués sous des conditions compatibles",
    "reponse_f1": "Toute modification est interdite",
    "reponse_f2": "L'attribution devient facultative",
    "explication": "Le partage à l'identique concerne la licence des œuvres dérivées."
  },
  {
    "id": 161,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe jeu est publié sans aucune information de réutilisation.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 11\n\nRéférence exercice : OPENDATA-161`",
    "reponse_v": "Associer une licence ouverte explicite",
    "reponse_f1": "Écrire seulement « libre »",
    "reponse_f2": "Ne rien préciser",
    "explication": "Une licence claire définit les droits et obligations."
  },
  {
    "id": 162,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe producteur exige la mention de la source.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 12\n\nRéférence exercice : OPENDATA-162`",
    "reponse_v": "Choisir une licence ouverte prévoyant l'attribution",
    "reponse_f1": "Interdire toute réutilisation commerciale",
    "reponse_f2": "Ajouter un mot de passe au fichier",
    "explication": "L'attribution peut être exigée tout en maintenant l'ouverture."
  },
  {
    "id": 163,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nDes données provenant de plusieurs producteurs sont agrégées.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 13\n\nRéférence exercice : OPENDATA-163`",
    "reponse_v": "Vérifier la compatibilité des licences",
    "reponse_f1": "Appliquer arbitrairement la licence la plus permissive",
    "reponse_f2": "Supprimer les mentions de source",
    "explication": "Les droits des sources doivent rester compatibles avec la redistribution."
  },
  {
    "id": 164,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne licence change pour les nouvelles versions.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 14\n\nRéférence exercice : OPENDATA-164`",
    "reponse_v": "Documenter la date et la version concernées",
    "reponse_f1": "Appliquer rétroactivement sans avertir",
    "reponse_f2": "Supprimer l'historique",
    "explication": "Les consommateurs doivent savoir quelles conditions s'appliquent à quelle version."
  },
  {
    "id": 165,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne donnée contient des éléments tiers protégés.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 15\n\nRéférence exercice : OPENDATA-165`",
    "reponse_v": "Identifier et exclure ou autoriser explicitement ces éléments",
    "reponse_f1": "Supposer qu'ils deviennent ouverts automatiquement",
    "reponse_f2": "Masquer leur origine",
    "explication": "Le producteur doit disposer des droits nécessaires."
  },
  {
    "id": 166,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne réutilisation doit citer la source correctement.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 16\n\nRéférence exercice : OPENDATA-166`",
    "reponse_v": "Fournir une formulation d'attribution recommandée",
    "reponse_f1": "Exiger une autorisation manuelle pour chaque usage",
    "reponse_f2": "Interdire toute modification",
    "explication": "Une attribution standard réduit l'ambiguïté."
  },
  {
    "id": 167,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe portail mélange licence de la donnée et conditions du site.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 17\n\nRéférence exercice : OPENDATA-167`",
    "reponse_v": "Séparer clairement licence des données et conditions d'utilisation du portail",
    "reponse_f1": "Appliquer les cookies comme licence",
    "reponse_f2": "Utiliser uniquement les CGU du site",
    "explication": "Les droits sur la donnée sont distincts des règles d'usage du portail."
  },
  {
    "id": 168,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUn dataset est retiré pour erreur majeure.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 18\n\nRéférence exercice : OPENDATA-168`",
    "reponse_v": "Conserver une notice de retrait et l'historique si possible",
    "reponse_f1": "Faire disparaître toute trace",
    "reponse_f2": "Réutiliser silencieusement la même URL pour un autre jeu",
    "explication": "La transparence sur le retrait protège la traçabilité."
  },
  {
    "id": 169,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUn organisme veut empêcher toute exploitation commerciale.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 19\n\nRéférence exercice : OPENDATA-169`",
    "reponse_v": "Ce choix n'est généralement pas compatible avec une ouverture maximale",
    "reponse_f1": "C'est obligatoire pour tout open data",
    "reponse_f2": "Cela rend automatiquement la donnée publique",
    "explication": "Une restriction commerciale réduit fortement la réutilisabilité."
  },
  {
    "id": 170,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne licence impose le partage à l'identique.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 20\n\nRéférence exercice : OPENDATA-170`",
    "reponse_v": "Les dérivés doivent être redistribués sous des conditions compatibles",
    "reponse_f1": "Toute modification est interdite",
    "reponse_f2": "L'attribution devient facultative",
    "explication": "Le partage à l'identique concerne la licence des œuvres dérivées."
  },
  {
    "id": 171,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe jeu est publié sans aucune information de réutilisation.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 21\n\nRéférence exercice : OPENDATA-171`",
    "reponse_v": "Associer une licence ouverte explicite",
    "reponse_f1": "Écrire seulement « libre »",
    "reponse_f2": "Ne rien préciser",
    "explication": "Une licence claire définit les droits et obligations."
  },
  {
    "id": 172,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe producteur exige la mention de la source.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 22\n\nRéférence exercice : OPENDATA-172`",
    "reponse_v": "Choisir une licence ouverte prévoyant l'attribution",
    "reponse_f1": "Interdire toute réutilisation commerciale",
    "reponse_f2": "Ajouter un mot de passe au fichier",
    "explication": "L'attribution peut être exigée tout en maintenant l'ouverture."
  },
  {
    "id": 173,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nDes données provenant de plusieurs producteurs sont agrégées.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 23\n\nRéférence exercice : OPENDATA-173`",
    "reponse_v": "Vérifier la compatibilité des licences",
    "reponse_f1": "Appliquer arbitrairement la licence la plus permissive",
    "reponse_f2": "Supprimer les mentions de source",
    "explication": "Les droits des sources doivent rester compatibles avec la redistribution."
  },
  {
    "id": 174,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne licence change pour les nouvelles versions.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 24\n\nRéférence exercice : OPENDATA-174`",
    "reponse_v": "Documenter la date et la version concernées",
    "reponse_f1": "Appliquer rétroactivement sans avertir",
    "reponse_f2": "Supprimer l'historique",
    "explication": "Les consommateurs doivent savoir quelles conditions s'appliquent à quelle version."
  },
  {
    "id": 175,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne donnée contient des éléments tiers protégés.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 25\n\nRéférence exercice : OPENDATA-175`",
    "reponse_v": "Identifier et exclure ou autoriser explicitement ces éléments",
    "reponse_f1": "Supposer qu'ils deviennent ouverts automatiquement",
    "reponse_f2": "Masquer leur origine",
    "explication": "Le producteur doit disposer des droits nécessaires."
  },
  {
    "id": 176,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne réutilisation doit citer la source correctement.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 26\n\nRéférence exercice : OPENDATA-176`",
    "reponse_v": "Fournir une formulation d'attribution recommandée",
    "reponse_f1": "Exiger une autorisation manuelle pour chaque usage",
    "reponse_f2": "Interdire toute modification",
    "explication": "Une attribution standard réduit l'ambiguïté."
  },
  {
    "id": 177,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe portail mélange licence de la donnée et conditions du site.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 27\n\nRéférence exercice : OPENDATA-177`",
    "reponse_v": "Séparer clairement licence des données et conditions d'utilisation du portail",
    "reponse_f1": "Appliquer les cookies comme licence",
    "reponse_f2": "Utiliser uniquement les CGU du site",
    "explication": "Les droits sur la donnée sont distincts des règles d'usage du portail."
  },
  {
    "id": 178,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUn dataset est retiré pour erreur majeure.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 28\n\nRéférence exercice : OPENDATA-178`",
    "reponse_v": "Conserver une notice de retrait et l'historique si possible",
    "reponse_f1": "Faire disparaître toute trace",
    "reponse_f2": "Réutiliser silencieusement la même URL pour un autre jeu",
    "explication": "La transparence sur le retrait protège la traçabilité."
  },
  {
    "id": 179,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUn organisme veut empêcher toute exploitation commerciale.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 29\n\nRéférence exercice : OPENDATA-179`",
    "reponse_v": "Ce choix n'est généralement pas compatible avec une ouverture maximale",
    "reponse_f1": "C'est obligatoire pour tout open data",
    "reponse_f2": "Cela rend automatiquement la donnée publique",
    "explication": "Une restriction commerciale réduit fortement la réutilisabilité."
  },
  {
    "id": 180,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne licence impose le partage à l'identique.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 30\n\nRéférence exercice : OPENDATA-180`",
    "reponse_v": "Les dérivés doivent être redistribués sous des conditions compatibles",
    "reponse_f1": "Toute modification est interdite",
    "reponse_f2": "L'attribution devient facultative",
    "explication": "Le partage à l'identique concerne la licence des œuvres dérivées."
  },
  {
    "id": 181,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe jeu est publié sans aucune information de réutilisation.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 31\n\nRéférence exercice : OPENDATA-181`",
    "reponse_v": "Associer une licence ouverte explicite",
    "reponse_f1": "Écrire seulement « libre »",
    "reponse_f2": "Ne rien préciser",
    "explication": "Une licence claire définit les droits et obligations."
  },
  {
    "id": 182,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe producteur exige la mention de la source.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 32\n\nRéférence exercice : OPENDATA-182`",
    "reponse_v": "Choisir une licence ouverte prévoyant l'attribution",
    "reponse_f1": "Interdire toute réutilisation commerciale",
    "reponse_f2": "Ajouter un mot de passe au fichier",
    "explication": "L'attribution peut être exigée tout en maintenant l'ouverture."
  },
  {
    "id": 183,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nDes données provenant de plusieurs producteurs sont agrégées.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 33\n\nRéférence exercice : OPENDATA-183`",
    "reponse_v": "Vérifier la compatibilité des licences",
    "reponse_f1": "Appliquer arbitrairement la licence la plus permissive",
    "reponse_f2": "Supprimer les mentions de source",
    "explication": "Les droits des sources doivent rester compatibles avec la redistribution."
  },
  {
    "id": 184,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne licence change pour les nouvelles versions.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 34\n\nRéférence exercice : OPENDATA-184`",
    "reponse_v": "Documenter la date et la version concernées",
    "reponse_f1": "Appliquer rétroactivement sans avertir",
    "reponse_f2": "Supprimer l'historique",
    "explication": "Les consommateurs doivent savoir quelles conditions s'appliquent à quelle version."
  },
  {
    "id": 185,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne donnée contient des éléments tiers protégés.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 35\n\nRéférence exercice : OPENDATA-185`",
    "reponse_v": "Identifier et exclure ou autoriser explicitement ces éléments",
    "reponse_f1": "Supposer qu'ils deviennent ouverts automatiquement",
    "reponse_f2": "Masquer leur origine",
    "explication": "Le producteur doit disposer des droits nécessaires."
  },
  {
    "id": 186,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne réutilisation doit citer la source correctement.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 36\n\nRéférence exercice : OPENDATA-186`",
    "reponse_v": "Fournir une formulation d'attribution recommandée",
    "reponse_f1": "Exiger une autorisation manuelle pour chaque usage",
    "reponse_f2": "Interdire toute modification",
    "explication": "Une attribution standard réduit l'ambiguïté."
  },
  {
    "id": 187,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe portail mélange licence de la donnée et conditions du site.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 37\n\nRéférence exercice : OPENDATA-187`",
    "reponse_v": "Séparer clairement licence des données et conditions d'utilisation du portail",
    "reponse_f1": "Appliquer les cookies comme licence",
    "reponse_f2": "Utiliser uniquement les CGU du site",
    "explication": "Les droits sur la donnée sont distincts des règles d'usage du portail."
  },
  {
    "id": 188,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUn dataset est retiré pour erreur majeure.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 38\n\nRéférence exercice : OPENDATA-188`",
    "reponse_v": "Conserver une notice de retrait et l'historique si possible",
    "reponse_f1": "Faire disparaître toute trace",
    "reponse_f2": "Réutiliser silencieusement la même URL pour un autre jeu",
    "explication": "La transparence sur le retrait protège la traçabilité."
  },
  {
    "id": 189,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUn organisme veut empêcher toute exploitation commerciale.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 39\n\nRéférence exercice : OPENDATA-189`",
    "reponse_v": "Ce choix n'est généralement pas compatible avec une ouverture maximale",
    "reponse_f1": "C'est obligatoire pour tout open data",
    "reponse_f2": "Cela rend automatiquement la donnée publique",
    "explication": "Une restriction commerciale réduit fortement la réutilisabilité."
  },
  {
    "id": 190,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne licence impose le partage à l'identique.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 40\n\nRéférence exercice : OPENDATA-190`",
    "reponse_v": "Les dérivés doivent être redistribués sous des conditions compatibles",
    "reponse_f1": "Toute modification est interdite",
    "reponse_f2": "L'attribution devient facultative",
    "explication": "Le partage à l'identique concerne la licence des œuvres dérivées."
  },
  {
    "id": 191,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe jeu est publié sans aucune information de réutilisation.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 41\n\nRéférence exercice : OPENDATA-191`",
    "reponse_v": "Associer une licence ouverte explicite",
    "reponse_f1": "Écrire seulement « libre »",
    "reponse_f2": "Ne rien préciser",
    "explication": "Une licence claire définit les droits et obligations."
  },
  {
    "id": 192,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe producteur exige la mention de la source.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 42\n\nRéférence exercice : OPENDATA-192`",
    "reponse_v": "Choisir une licence ouverte prévoyant l'attribution",
    "reponse_f1": "Interdire toute réutilisation commerciale",
    "reponse_f2": "Ajouter un mot de passe au fichier",
    "explication": "L'attribution peut être exigée tout en maintenant l'ouverture."
  },
  {
    "id": 193,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nDes données provenant de plusieurs producteurs sont agrégées.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 43\n\nRéférence exercice : OPENDATA-193`",
    "reponse_v": "Vérifier la compatibilité des licences",
    "reponse_f1": "Appliquer arbitrairement la licence la plus permissive",
    "reponse_f2": "Supprimer les mentions de source",
    "explication": "Les droits des sources doivent rester compatibles avec la redistribution."
  },
  {
    "id": 194,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne licence change pour les nouvelles versions.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 44\n\nRéférence exercice : OPENDATA-194`",
    "reponse_v": "Documenter la date et la version concernées",
    "reponse_f1": "Appliquer rétroactivement sans avertir",
    "reponse_f2": "Supprimer l'historique",
    "explication": "Les consommateurs doivent savoir quelles conditions s'appliquent à quelle version."
  },
  {
    "id": 195,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne donnée contient des éléments tiers protégés.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 45\n\nRéférence exercice : OPENDATA-195`",
    "reponse_v": "Identifier et exclure ou autoriser explicitement ces éléments",
    "reponse_f1": "Supposer qu'ils deviennent ouverts automatiquement",
    "reponse_f2": "Masquer leur origine",
    "explication": "Le producteur doit disposer des droits nécessaires."
  },
  {
    "id": 196,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne réutilisation doit citer la source correctement.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 46\n\nRéférence exercice : OPENDATA-196`",
    "reponse_v": "Fournir une formulation d'attribution recommandée",
    "reponse_f1": "Exiger une autorisation manuelle pour chaque usage",
    "reponse_f2": "Interdire toute modification",
    "explication": "Une attribution standard réduit l'ambiguïté."
  },
  {
    "id": 197,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nLe portail mélange licence de la donnée et conditions du site.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 47\n\nRéférence exercice : OPENDATA-197`",
    "reponse_v": "Séparer clairement licence des données et conditions d'utilisation du portail",
    "reponse_f1": "Appliquer les cookies comme licence",
    "reponse_f2": "Utiliser uniquement les CGU du site",
    "explication": "Les droits sur la donnée sont distincts des règles d'usage du portail."
  },
  {
    "id": 198,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUn dataset est retiré pour erreur majeure.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 48\n\nRéférence exercice : OPENDATA-198`",
    "reponse_v": "Conserver une notice de retrait et l'historique si possible",
    "reponse_f1": "Faire disparaître toute trace",
    "reponse_f2": "Réutiliser silencieusement la même URL pour un autre jeu",
    "explication": "La transparence sur le retrait protège la traçabilité."
  },
  {
    "id": 199,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUn organisme veut empêcher toute exploitation commerciale.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 49\n\nRéférence exercice : OPENDATA-199`",
    "reponse_v": "Ce choix n'est généralement pas compatible avec une ouverture maximale",
    "reponse_f1": "C'est obligatoire pour tout open data",
    "reponse_f2": "Cela rend automatiquement la donnée publique",
    "explication": "Une restriction commerciale réduit fortement la réutilisabilité."
  },
  {
    "id": 200,
    "question": "`Mini-TP Open Data — licences et gouvernance\n\nSituation :\nUne licence impose le partage à l'identique.\n\nObjectif :\nGarantir une réutilisation juridiquement claire et traçable.\n\nQuelle réponse est la plus juste ?\n\nCas licence : 50\n\nRéférence exercice : OPENDATA-200`",
    "reponse_v": "Les dérivés doivent être redistribués sous des conditions compatibles",
    "reponse_f1": "Toute modification est interdite",
    "reponse_f2": "L'attribution devient facultative",
    "explication": "Le partage à l'identique concerne la licence des œuvres dérivées."
  },
  {
    "id": 201,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn fichier contient des adresses e-mail nominatives.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 01\n\nRéférence exercice : OPENDATA-201`",
    "reponse_v": "Évaluer leur nécessité et anonymiser ou retirer les données personnelles",
    "reponse_f1": "Les publier car le fichier est public",
    "reponse_f2": "Remplacer seulement le symbole @",
    "explication": "L'ouverture ne dispense pas de protéger les données personnelles."
  },
  {
    "id": 202,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn identifiant pseudonyme est stable dans plusieurs jeux.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 02\n\nRéférence exercice : OPENDATA-202`",
    "reponse_v": "Évaluer le risque de réidentification par recoupement",
    "reponse_f1": "Considérer automatiquement le jeu comme anonyme",
    "reponse_f2": "Publier davantage d'attributs",
    "explication": "La pseudonymisation ne garantit pas l'anonymat."
  },
  {
    "id": 203,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne cellule rare permet d'identifier une personne.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 03\n\nRéférence exercice : OPENDATA-203`",
    "reponse_v": "Appliquer agrégation, suppression ou généralisation",
    "reponse_f1": "Ajouter une couleur à la cellule",
    "reponse_f2": "Publier le nom complet pour cohérence",
    "explication": "Les valeurs rares peuvent être fortement identifiantes."
  },
  {
    "id": 204,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne colonne contient plusieurs unités sans indication.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 04\n\nRéférence exercice : OPENDATA-204`",
    "reponse_v": "Normaliser les unités et publier leur définition",
    "reponse_f1": "Conserver le mélange",
    "reponse_f2": "Arrondir toutes les valeurs à zéro",
    "explication": "L'homogénéité des unités est essentielle à la qualité."
  },
  {
    "id": 205,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nDes doublons existent à cause de plusieurs sources.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 05\n\nRéférence exercice : OPENDATA-205`",
    "reponse_v": "Définir une règle de déduplication et un identifiant métier",
    "reponse_f1": "Supprimer une ligne sur deux",
    "reponse_f2": "Trier uniquement le fichier",
    "explication": "La déduplication doit reposer sur une règle reproductible."
  },
  {
    "id": 206,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne valeur est impossible au regard du domaine.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 06\n\nRéférence exercice : OPENDATA-206`",
    "reponse_v": "Mettre en place une validation métier et signaler l'anomalie",
    "reponse_f1": "La conserver comme valeur extrême",
    "reponse_f2": "La remplacer aléatoirement",
    "explication": "La qualité nécessite des contrôles de domaine."
  },
  {
    "id": 207,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn fichier est corrigé après publication.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 07\n\nRéférence exercice : OPENDATA-207`",
    "reponse_v": "Publier une nouvelle version et documenter la correction",
    "reponse_f1": "Remplacer silencieusement le fichier",
    "reponse_f2": "Changer uniquement son nom local",
    "explication": "Le versionnement rend les corrections traçables."
  },
  {
    "id": 208,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nDes données sensibles agrégées sont publiées par petite zone.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 08\n\nRéférence exercice : OPENDATA-208`",
    "reponse_v": "Tester le risque lié aux petits effectifs",
    "reponse_f1": "Supposer que toute agrégation est sûre",
    "reponse_f2": "Réduire encore la taille des groupes",
    "explication": "De petits groupes peuvent permettre une réidentification."
  },
  {
    "id": 209,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne API expose un champ interne non documenté.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 09\n\nRéférence exercice : OPENDATA-209`",
    "reponse_v": "Le retirer ou le documenter après analyse de sensibilité",
    "reponse_f1": "Le conserver car il est déjà visible",
    "reponse_f2": "Le renommer sans autre contrôle",
    "explication": "Tout champ exposé doit être intentionnel et évalué."
  },
  {
    "id": 210,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nLe dataset contient des données obsolètes mais présentées comme actuelles.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 10\n\nRéférence exercice : OPENDATA-210`",
    "reponse_v": "Corriger les métadonnées de fraîcheur ou retirer la publication",
    "reponse_f1": "Laisser les utilisateurs deviner",
    "reponse_f2": "Modifier seulement la couleur du portail",
    "explication": "La fraîcheur fait partie intégrante de la qualité."
  },
  {
    "id": 211,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn fichier contient des adresses e-mail nominatives.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 11\n\nRéférence exercice : OPENDATA-211`",
    "reponse_v": "Évaluer leur nécessité et anonymiser ou retirer les données personnelles",
    "reponse_f1": "Les publier car le fichier est public",
    "reponse_f2": "Remplacer seulement le symbole @",
    "explication": "L'ouverture ne dispense pas de protéger les données personnelles."
  },
  {
    "id": 212,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn identifiant pseudonyme est stable dans plusieurs jeux.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 12\n\nRéférence exercice : OPENDATA-212`",
    "reponse_v": "Évaluer le risque de réidentification par recoupement",
    "reponse_f1": "Considérer automatiquement le jeu comme anonyme",
    "reponse_f2": "Publier davantage d'attributs",
    "explication": "La pseudonymisation ne garantit pas l'anonymat."
  },
  {
    "id": 213,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne cellule rare permet d'identifier une personne.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 13\n\nRéférence exercice : OPENDATA-213`",
    "reponse_v": "Appliquer agrégation, suppression ou généralisation",
    "reponse_f1": "Ajouter une couleur à la cellule",
    "reponse_f2": "Publier le nom complet pour cohérence",
    "explication": "Les valeurs rares peuvent être fortement identifiantes."
  },
  {
    "id": 214,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne colonne contient plusieurs unités sans indication.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 14\n\nRéférence exercice : OPENDATA-214`",
    "reponse_v": "Normaliser les unités et publier leur définition",
    "reponse_f1": "Conserver le mélange",
    "reponse_f2": "Arrondir toutes les valeurs à zéro",
    "explication": "L'homogénéité des unités est essentielle à la qualité."
  },
  {
    "id": 215,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nDes doublons existent à cause de plusieurs sources.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 15\n\nRéférence exercice : OPENDATA-215`",
    "reponse_v": "Définir une règle de déduplication et un identifiant métier",
    "reponse_f1": "Supprimer une ligne sur deux",
    "reponse_f2": "Trier uniquement le fichier",
    "explication": "La déduplication doit reposer sur une règle reproductible."
  },
  {
    "id": 216,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne valeur est impossible au regard du domaine.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 16\n\nRéférence exercice : OPENDATA-216`",
    "reponse_v": "Mettre en place une validation métier et signaler l'anomalie",
    "reponse_f1": "La conserver comme valeur extrême",
    "reponse_f2": "La remplacer aléatoirement",
    "explication": "La qualité nécessite des contrôles de domaine."
  },
  {
    "id": 217,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn fichier est corrigé après publication.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 17\n\nRéférence exercice : OPENDATA-217`",
    "reponse_v": "Publier une nouvelle version et documenter la correction",
    "reponse_f1": "Remplacer silencieusement le fichier",
    "reponse_f2": "Changer uniquement son nom local",
    "explication": "Le versionnement rend les corrections traçables."
  },
  {
    "id": 218,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nDes données sensibles agrégées sont publiées par petite zone.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 18\n\nRéférence exercice : OPENDATA-218`",
    "reponse_v": "Tester le risque lié aux petits effectifs",
    "reponse_f1": "Supposer que toute agrégation est sûre",
    "reponse_f2": "Réduire encore la taille des groupes",
    "explication": "De petits groupes peuvent permettre une réidentification."
  },
  {
    "id": 219,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne API expose un champ interne non documenté.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 19\n\nRéférence exercice : OPENDATA-219`",
    "reponse_v": "Le retirer ou le documenter après analyse de sensibilité",
    "reponse_f1": "Le conserver car il est déjà visible",
    "reponse_f2": "Le renommer sans autre contrôle",
    "explication": "Tout champ exposé doit être intentionnel et évalué."
  },
  {
    "id": 220,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nLe dataset contient des données obsolètes mais présentées comme actuelles.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 20\n\nRéférence exercice : OPENDATA-220`",
    "reponse_v": "Corriger les métadonnées de fraîcheur ou retirer la publication",
    "reponse_f1": "Laisser les utilisateurs deviner",
    "reponse_f2": "Modifier seulement la couleur du portail",
    "explication": "La fraîcheur fait partie intégrante de la qualité."
  },
  {
    "id": 221,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn fichier contient des adresses e-mail nominatives.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 21\n\nRéférence exercice : OPENDATA-221`",
    "reponse_v": "Évaluer leur nécessité et anonymiser ou retirer les données personnelles",
    "reponse_f1": "Les publier car le fichier est public",
    "reponse_f2": "Remplacer seulement le symbole @",
    "explication": "L'ouverture ne dispense pas de protéger les données personnelles."
  },
  {
    "id": 222,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn identifiant pseudonyme est stable dans plusieurs jeux.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 22\n\nRéférence exercice : OPENDATA-222`",
    "reponse_v": "Évaluer le risque de réidentification par recoupement",
    "reponse_f1": "Considérer automatiquement le jeu comme anonyme",
    "reponse_f2": "Publier davantage d'attributs",
    "explication": "La pseudonymisation ne garantit pas l'anonymat."
  },
  {
    "id": 223,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne cellule rare permet d'identifier une personne.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 23\n\nRéférence exercice : OPENDATA-223`",
    "reponse_v": "Appliquer agrégation, suppression ou généralisation",
    "reponse_f1": "Ajouter une couleur à la cellule",
    "reponse_f2": "Publier le nom complet pour cohérence",
    "explication": "Les valeurs rares peuvent être fortement identifiantes."
  },
  {
    "id": 224,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne colonne contient plusieurs unités sans indication.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 24\n\nRéférence exercice : OPENDATA-224`",
    "reponse_v": "Normaliser les unités et publier leur définition",
    "reponse_f1": "Conserver le mélange",
    "reponse_f2": "Arrondir toutes les valeurs à zéro",
    "explication": "L'homogénéité des unités est essentielle à la qualité."
  },
  {
    "id": 225,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nDes doublons existent à cause de plusieurs sources.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 25\n\nRéférence exercice : OPENDATA-225`",
    "reponse_v": "Définir une règle de déduplication et un identifiant métier",
    "reponse_f1": "Supprimer une ligne sur deux",
    "reponse_f2": "Trier uniquement le fichier",
    "explication": "La déduplication doit reposer sur une règle reproductible."
  },
  {
    "id": 226,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne valeur est impossible au regard du domaine.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 26\n\nRéférence exercice : OPENDATA-226`",
    "reponse_v": "Mettre en place une validation métier et signaler l'anomalie",
    "reponse_f1": "La conserver comme valeur extrême",
    "reponse_f2": "La remplacer aléatoirement",
    "explication": "La qualité nécessite des contrôles de domaine."
  },
  {
    "id": 227,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn fichier est corrigé après publication.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 27\n\nRéférence exercice : OPENDATA-227`",
    "reponse_v": "Publier une nouvelle version et documenter la correction",
    "reponse_f1": "Remplacer silencieusement le fichier",
    "reponse_f2": "Changer uniquement son nom local",
    "explication": "Le versionnement rend les corrections traçables."
  },
  {
    "id": 228,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nDes données sensibles agrégées sont publiées par petite zone.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 28\n\nRéférence exercice : OPENDATA-228`",
    "reponse_v": "Tester le risque lié aux petits effectifs",
    "reponse_f1": "Supposer que toute agrégation est sûre",
    "reponse_f2": "Réduire encore la taille des groupes",
    "explication": "De petits groupes peuvent permettre une réidentification."
  },
  {
    "id": 229,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne API expose un champ interne non documenté.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 29\n\nRéférence exercice : OPENDATA-229`",
    "reponse_v": "Le retirer ou le documenter après analyse de sensibilité",
    "reponse_f1": "Le conserver car il est déjà visible",
    "reponse_f2": "Le renommer sans autre contrôle",
    "explication": "Tout champ exposé doit être intentionnel et évalué."
  },
  {
    "id": 230,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nLe dataset contient des données obsolètes mais présentées comme actuelles.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 30\n\nRéférence exercice : OPENDATA-230`",
    "reponse_v": "Corriger les métadonnées de fraîcheur ou retirer la publication",
    "reponse_f1": "Laisser les utilisateurs deviner",
    "reponse_f2": "Modifier seulement la couleur du portail",
    "explication": "La fraîcheur fait partie intégrante de la qualité."
  },
  {
    "id": 231,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn fichier contient des adresses e-mail nominatives.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 31\n\nRéférence exercice : OPENDATA-231`",
    "reponse_v": "Évaluer leur nécessité et anonymiser ou retirer les données personnelles",
    "reponse_f1": "Les publier car le fichier est public",
    "reponse_f2": "Remplacer seulement le symbole @",
    "explication": "L'ouverture ne dispense pas de protéger les données personnelles."
  },
  {
    "id": 232,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn identifiant pseudonyme est stable dans plusieurs jeux.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 32\n\nRéférence exercice : OPENDATA-232`",
    "reponse_v": "Évaluer le risque de réidentification par recoupement",
    "reponse_f1": "Considérer automatiquement le jeu comme anonyme",
    "reponse_f2": "Publier davantage d'attributs",
    "explication": "La pseudonymisation ne garantit pas l'anonymat."
  },
  {
    "id": 233,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne cellule rare permet d'identifier une personne.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 33\n\nRéférence exercice : OPENDATA-233`",
    "reponse_v": "Appliquer agrégation, suppression ou généralisation",
    "reponse_f1": "Ajouter une couleur à la cellule",
    "reponse_f2": "Publier le nom complet pour cohérence",
    "explication": "Les valeurs rares peuvent être fortement identifiantes."
  },
  {
    "id": 234,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne colonne contient plusieurs unités sans indication.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 34\n\nRéférence exercice : OPENDATA-234`",
    "reponse_v": "Normaliser les unités et publier leur définition",
    "reponse_f1": "Conserver le mélange",
    "reponse_f2": "Arrondir toutes les valeurs à zéro",
    "explication": "L'homogénéité des unités est essentielle à la qualité."
  },
  {
    "id": 235,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nDes doublons existent à cause de plusieurs sources.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 35\n\nRéférence exercice : OPENDATA-235`",
    "reponse_v": "Définir une règle de déduplication et un identifiant métier",
    "reponse_f1": "Supprimer une ligne sur deux",
    "reponse_f2": "Trier uniquement le fichier",
    "explication": "La déduplication doit reposer sur une règle reproductible."
  },
  {
    "id": 236,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne valeur est impossible au regard du domaine.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 36\n\nRéférence exercice : OPENDATA-236`",
    "reponse_v": "Mettre en place une validation métier et signaler l'anomalie",
    "reponse_f1": "La conserver comme valeur extrême",
    "reponse_f2": "La remplacer aléatoirement",
    "explication": "La qualité nécessite des contrôles de domaine."
  },
  {
    "id": 237,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn fichier est corrigé après publication.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 37\n\nRéférence exercice : OPENDATA-237`",
    "reponse_v": "Publier une nouvelle version et documenter la correction",
    "reponse_f1": "Remplacer silencieusement le fichier",
    "reponse_f2": "Changer uniquement son nom local",
    "explication": "Le versionnement rend les corrections traçables."
  },
  {
    "id": 238,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nDes données sensibles agrégées sont publiées par petite zone.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 38\n\nRéférence exercice : OPENDATA-238`",
    "reponse_v": "Tester le risque lié aux petits effectifs",
    "reponse_f1": "Supposer que toute agrégation est sûre",
    "reponse_f2": "Réduire encore la taille des groupes",
    "explication": "De petits groupes peuvent permettre une réidentification."
  },
  {
    "id": 239,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne API expose un champ interne non documenté.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 39\n\nRéférence exercice : OPENDATA-239`",
    "reponse_v": "Le retirer ou le documenter après analyse de sensibilité",
    "reponse_f1": "Le conserver car il est déjà visible",
    "reponse_f2": "Le renommer sans autre contrôle",
    "explication": "Tout champ exposé doit être intentionnel et évalué."
  },
  {
    "id": 240,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nLe dataset contient des données obsolètes mais présentées comme actuelles.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 40\n\nRéférence exercice : OPENDATA-240`",
    "reponse_v": "Corriger les métadonnées de fraîcheur ou retirer la publication",
    "reponse_f1": "Laisser les utilisateurs deviner",
    "reponse_f2": "Modifier seulement la couleur du portail",
    "explication": "La fraîcheur fait partie intégrante de la qualité."
  },
  {
    "id": 241,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn fichier contient des adresses e-mail nominatives.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 41\n\nRéférence exercice : OPENDATA-241`",
    "reponse_v": "Évaluer leur nécessité et anonymiser ou retirer les données personnelles",
    "reponse_f1": "Les publier car le fichier est public",
    "reponse_f2": "Remplacer seulement le symbole @",
    "explication": "L'ouverture ne dispense pas de protéger les données personnelles."
  },
  {
    "id": 242,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn identifiant pseudonyme est stable dans plusieurs jeux.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 42\n\nRéférence exercice : OPENDATA-242`",
    "reponse_v": "Évaluer le risque de réidentification par recoupement",
    "reponse_f1": "Considérer automatiquement le jeu comme anonyme",
    "reponse_f2": "Publier davantage d'attributs",
    "explication": "La pseudonymisation ne garantit pas l'anonymat."
  },
  {
    "id": 243,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne cellule rare permet d'identifier une personne.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 43\n\nRéférence exercice : OPENDATA-243`",
    "reponse_v": "Appliquer agrégation, suppression ou généralisation",
    "reponse_f1": "Ajouter une couleur à la cellule",
    "reponse_f2": "Publier le nom complet pour cohérence",
    "explication": "Les valeurs rares peuvent être fortement identifiantes."
  },
  {
    "id": 244,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne colonne contient plusieurs unités sans indication.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 44\n\nRéférence exercice : OPENDATA-244`",
    "reponse_v": "Normaliser les unités et publier leur définition",
    "reponse_f1": "Conserver le mélange",
    "reponse_f2": "Arrondir toutes les valeurs à zéro",
    "explication": "L'homogénéité des unités est essentielle à la qualité."
  },
  {
    "id": 245,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nDes doublons existent à cause de plusieurs sources.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 45\n\nRéférence exercice : OPENDATA-245`",
    "reponse_v": "Définir une règle de déduplication et un identifiant métier",
    "reponse_f1": "Supprimer une ligne sur deux",
    "reponse_f2": "Trier uniquement le fichier",
    "explication": "La déduplication doit reposer sur une règle reproductible."
  },
  {
    "id": 246,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne valeur est impossible au regard du domaine.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 46\n\nRéférence exercice : OPENDATA-246`",
    "reponse_v": "Mettre en place une validation métier et signaler l'anomalie",
    "reponse_f1": "La conserver comme valeur extrême",
    "reponse_f2": "La remplacer aléatoirement",
    "explication": "La qualité nécessite des contrôles de domaine."
  },
  {
    "id": 247,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUn fichier est corrigé après publication.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 47\n\nRéférence exercice : OPENDATA-247`",
    "reponse_v": "Publier une nouvelle version et documenter la correction",
    "reponse_f1": "Remplacer silencieusement le fichier",
    "reponse_f2": "Changer uniquement son nom local",
    "explication": "Le versionnement rend les corrections traçables."
  },
  {
    "id": 248,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nDes données sensibles agrégées sont publiées par petite zone.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 48\n\nRéférence exercice : OPENDATA-248`",
    "reponse_v": "Tester le risque lié aux petits effectifs",
    "reponse_f1": "Supposer que toute agrégation est sûre",
    "reponse_f2": "Réduire encore la taille des groupes",
    "explication": "De petits groupes peuvent permettre une réidentification."
  },
  {
    "id": 249,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nUne API expose un champ interne non documenté.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 49\n\nRéférence exercice : OPENDATA-249`",
    "reponse_v": "Le retirer ou le documenter après analyse de sensibilité",
    "reponse_f1": "Le conserver car il est déjà visible",
    "reponse_f2": "Le renommer sans autre contrôle",
    "explication": "Tout champ exposé doit être intentionnel et évalué."
  },
  {
    "id": 250,
    "question": "`Mini-TP Open Data — qualité et protection\n\nSituation :\nLe dataset contient des données obsolètes mais présentées comme actuelles.\n\nContrainte :\nLa publication doit rester utile tout en maîtrisant les risques de mauvaise interprétation ou de réidentification.\n\nQuelle action est la plus pertinente ?\n\nCas qualité : 50\n\nRéférence exercice : OPENDATA-250`",
    "reponse_v": "Corriger les métadonnées de fraîcheur ou retirer la publication",
    "reponse_f1": "Laisser les utilisateurs deviner",
    "reponse_f2": "Modifier seulement la couleur du portail",
    "explication": "La fraîcheur fait partie intégrante de la qualité."
  },
  {
    "id": 251,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe jeu est mis à jour chaque nuit.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 01\n\nRéférence exercice : OPENDATA-251`",
    "reponse_v": "Automatiser la chaîne de publication et superviser les échecs",
    "reponse_f1": "Mettre à jour manuellement sans journal",
    "reponse_f2": "Publier une fois par an",
    "explication": "Une fréquence élevée justifie automatisation et supervision."
  },
  {
    "id": 252,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe fichier publié est parfois vide à cause d'une panne amont.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 02\n\nRéférence exercice : OPENDATA-252`",
    "reponse_v": "Ajouter des contrôles avant publication",
    "reponse_f1": "Publier le fichier vide comme succès",
    "reponse_f2": "Supprimer l'historique",
    "explication": "Des contrôles de volume et de cohérence évitent les publications invalides."
  },
  {
    "id": 253,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe schéma change sans prévenir les consommateurs.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 03\n\nRéférence exercice : OPENDATA-253`",
    "reponse_v": "Mettre en place une politique de versionnement et de dépréciation",
    "reponse_f1": "Changer silencieusement",
    "reponse_f2": "Supprimer la documentation",
    "explication": "Les changements incompatibles doivent être annoncés."
  },
  {
    "id": 254,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe portail doit indiquer si une ressource est indisponible.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 04\n\nRéférence exercice : OPENDATA-254`",
    "reponse_v": "Publier un statut et une information d'incident",
    "reponse_f1": "Renvoyer systématiquement 200 avec une page vide",
    "reponse_f2": "Masquer la ressource sans explication",
    "explication": "La transparence opérationnelle aide les réutilisateurs."
  },
  {
    "id": 255,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne ancienne version doit rester reproductible.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 05\n\nRéférence exercice : OPENDATA-255`",
    "reponse_v": "Conserver des snapshots ou archives versionnées",
    "reponse_f1": "Écraser toujours la même ressource",
    "reponse_f2": "Ne garder que les logs",
    "explication": "L'archivage permet de reproduire des analyses passées."
  },
  {
    "id": 256,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe producteur veut mesurer l'usage.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 06\n\nRéférence exercice : OPENDATA-256`",
    "reponse_v": "Collecter des métriques d'accès respectueuses de la vie privée",
    "reponse_f1": "Exiger une inscription nominative pour tout téléchargement",
    "reponse_f2": "Tracer secrètement chaque utilisateur",
    "explication": "Les métriques doivent rester proportionnées et transparentes."
  },
  {
    "id": 257,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne anomalie est signalée par un réutilisateur.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 07\n\nRéférence exercice : OPENDATA-257`",
    "reponse_v": "Fournir un canal de retour et tracer la correction",
    "reponse_f1": "Ignorer les retours externes",
    "reponse_f2": "Modifier les données sans journal",
    "explication": "Les retours améliorent la qualité et doivent être suivis."
  },
  {
    "id": 258,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUn dataset n'est plus maintenu.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 08\n\nRéférence exercice : OPENDATA-258`",
    "reponse_v": "Le marquer comme archivé ou déprécié avec une date",
    "reponse_f1": "Le laisser présenté comme actif",
    "reponse_f2": "Supprimer toute métadonnée",
    "explication": "Le statut de cycle de vie doit être explicite."
  },
  {
    "id": 259,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nPlusieurs producteurs alimentent le même jeu.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 09\n\nRéférence exercice : OPENDATA-259`",
    "reponse_v": "Définir responsabilités, contrôles et règles de consolidation",
    "reponse_f1": "Laisser chacun publier librement dans le même fichier",
    "reponse_f2": "Supprimer les identifiants de source",
    "explication": "La gouvernance multi-producteurs exige des responsabilités claires."
  },
  {
    "id": 260,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne nouvelle version doit être testée avant publication.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 10\n\nRéférence exercice : OPENDATA-260`",
    "reponse_v": "Utiliser un environnement de prépublication avec validation",
    "reponse_f1": "Publier directement en production",
    "reponse_f2": "Envoyer uniquement un e-mail",
    "explication": "Une étape de validation réduit les erreurs de mise en ligne."
  },
  {
    "id": 261,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe jeu est mis à jour chaque nuit.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 11\n\nRéférence exercice : OPENDATA-261`",
    "reponse_v": "Automatiser la chaîne de publication et superviser les échecs",
    "reponse_f1": "Mettre à jour manuellement sans journal",
    "reponse_f2": "Publier une fois par an",
    "explication": "Une fréquence élevée justifie automatisation et supervision."
  },
  {
    "id": 262,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe fichier publié est parfois vide à cause d'une panne amont.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 12\n\nRéférence exercice : OPENDATA-262`",
    "reponse_v": "Ajouter des contrôles avant publication",
    "reponse_f1": "Publier le fichier vide comme succès",
    "reponse_f2": "Supprimer l'historique",
    "explication": "Des contrôles de volume et de cohérence évitent les publications invalides."
  },
  {
    "id": 263,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe schéma change sans prévenir les consommateurs.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 13\n\nRéférence exercice : OPENDATA-263`",
    "reponse_v": "Mettre en place une politique de versionnement et de dépréciation",
    "reponse_f1": "Changer silencieusement",
    "reponse_f2": "Supprimer la documentation",
    "explication": "Les changements incompatibles doivent être annoncés."
  },
  {
    "id": 264,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe portail doit indiquer si une ressource est indisponible.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 14\n\nRéférence exercice : OPENDATA-264`",
    "reponse_v": "Publier un statut et une information d'incident",
    "reponse_f1": "Renvoyer systématiquement 200 avec une page vide",
    "reponse_f2": "Masquer la ressource sans explication",
    "explication": "La transparence opérationnelle aide les réutilisateurs."
  },
  {
    "id": 265,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne ancienne version doit rester reproductible.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 15\n\nRéférence exercice : OPENDATA-265`",
    "reponse_v": "Conserver des snapshots ou archives versionnées",
    "reponse_f1": "Écraser toujours la même ressource",
    "reponse_f2": "Ne garder que les logs",
    "explication": "L'archivage permet de reproduire des analyses passées."
  },
  {
    "id": 266,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe producteur veut mesurer l'usage.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 16\n\nRéférence exercice : OPENDATA-266`",
    "reponse_v": "Collecter des métriques d'accès respectueuses de la vie privée",
    "reponse_f1": "Exiger une inscription nominative pour tout téléchargement",
    "reponse_f2": "Tracer secrètement chaque utilisateur",
    "explication": "Les métriques doivent rester proportionnées et transparentes."
  },
  {
    "id": 267,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne anomalie est signalée par un réutilisateur.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 17\n\nRéférence exercice : OPENDATA-267`",
    "reponse_v": "Fournir un canal de retour et tracer la correction",
    "reponse_f1": "Ignorer les retours externes",
    "reponse_f2": "Modifier les données sans journal",
    "explication": "Les retours améliorent la qualité et doivent être suivis."
  },
  {
    "id": 268,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUn dataset n'est plus maintenu.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 18\n\nRéférence exercice : OPENDATA-268`",
    "reponse_v": "Le marquer comme archivé ou déprécié avec une date",
    "reponse_f1": "Le laisser présenté comme actif",
    "reponse_f2": "Supprimer toute métadonnée",
    "explication": "Le statut de cycle de vie doit être explicite."
  },
  {
    "id": 269,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nPlusieurs producteurs alimentent le même jeu.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 19\n\nRéférence exercice : OPENDATA-269`",
    "reponse_v": "Définir responsabilités, contrôles et règles de consolidation",
    "reponse_f1": "Laisser chacun publier librement dans le même fichier",
    "reponse_f2": "Supprimer les identifiants de source",
    "explication": "La gouvernance multi-producteurs exige des responsabilités claires."
  },
  {
    "id": 270,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne nouvelle version doit être testée avant publication.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 20\n\nRéférence exercice : OPENDATA-270`",
    "reponse_v": "Utiliser un environnement de prépublication avec validation",
    "reponse_f1": "Publier directement en production",
    "reponse_f2": "Envoyer uniquement un e-mail",
    "explication": "Une étape de validation réduit les erreurs de mise en ligne."
  },
  {
    "id": 271,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe jeu est mis à jour chaque nuit.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 21\n\nRéférence exercice : OPENDATA-271`",
    "reponse_v": "Automatiser la chaîne de publication et superviser les échecs",
    "reponse_f1": "Mettre à jour manuellement sans journal",
    "reponse_f2": "Publier une fois par an",
    "explication": "Une fréquence élevée justifie automatisation et supervision."
  },
  {
    "id": 272,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe fichier publié est parfois vide à cause d'une panne amont.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 22\n\nRéférence exercice : OPENDATA-272`",
    "reponse_v": "Ajouter des contrôles avant publication",
    "reponse_f1": "Publier le fichier vide comme succès",
    "reponse_f2": "Supprimer l'historique",
    "explication": "Des contrôles de volume et de cohérence évitent les publications invalides."
  },
  {
    "id": 273,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe schéma change sans prévenir les consommateurs.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 23\n\nRéférence exercice : OPENDATA-273`",
    "reponse_v": "Mettre en place une politique de versionnement et de dépréciation",
    "reponse_f1": "Changer silencieusement",
    "reponse_f2": "Supprimer la documentation",
    "explication": "Les changements incompatibles doivent être annoncés."
  },
  {
    "id": 274,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe portail doit indiquer si une ressource est indisponible.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 24\n\nRéférence exercice : OPENDATA-274`",
    "reponse_v": "Publier un statut et une information d'incident",
    "reponse_f1": "Renvoyer systématiquement 200 avec une page vide",
    "reponse_f2": "Masquer la ressource sans explication",
    "explication": "La transparence opérationnelle aide les réutilisateurs."
  },
  {
    "id": 275,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne ancienne version doit rester reproductible.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 25\n\nRéférence exercice : OPENDATA-275`",
    "reponse_v": "Conserver des snapshots ou archives versionnées",
    "reponse_f1": "Écraser toujours la même ressource",
    "reponse_f2": "Ne garder que les logs",
    "explication": "L'archivage permet de reproduire des analyses passées."
  },
  {
    "id": 276,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe producteur veut mesurer l'usage.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 26\n\nRéférence exercice : OPENDATA-276`",
    "reponse_v": "Collecter des métriques d'accès respectueuses de la vie privée",
    "reponse_f1": "Exiger une inscription nominative pour tout téléchargement",
    "reponse_f2": "Tracer secrètement chaque utilisateur",
    "explication": "Les métriques doivent rester proportionnées et transparentes."
  },
  {
    "id": 277,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne anomalie est signalée par un réutilisateur.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 27\n\nRéférence exercice : OPENDATA-277`",
    "reponse_v": "Fournir un canal de retour et tracer la correction",
    "reponse_f1": "Ignorer les retours externes",
    "reponse_f2": "Modifier les données sans journal",
    "explication": "Les retours améliorent la qualité et doivent être suivis."
  },
  {
    "id": 278,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUn dataset n'est plus maintenu.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 28\n\nRéférence exercice : OPENDATA-278`",
    "reponse_v": "Le marquer comme archivé ou déprécié avec une date",
    "reponse_f1": "Le laisser présenté comme actif",
    "reponse_f2": "Supprimer toute métadonnée",
    "explication": "Le statut de cycle de vie doit être explicite."
  },
  {
    "id": 279,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nPlusieurs producteurs alimentent le même jeu.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 29\n\nRéférence exercice : OPENDATA-279`",
    "reponse_v": "Définir responsabilités, contrôles et règles de consolidation",
    "reponse_f1": "Laisser chacun publier librement dans le même fichier",
    "reponse_f2": "Supprimer les identifiants de source",
    "explication": "La gouvernance multi-producteurs exige des responsabilités claires."
  },
  {
    "id": 280,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne nouvelle version doit être testée avant publication.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 30\n\nRéférence exercice : OPENDATA-280`",
    "reponse_v": "Utiliser un environnement de prépublication avec validation",
    "reponse_f1": "Publier directement en production",
    "reponse_f2": "Envoyer uniquement un e-mail",
    "explication": "Une étape de validation réduit les erreurs de mise en ligne."
  },
  {
    "id": 281,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe jeu est mis à jour chaque nuit.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 31\n\nRéférence exercice : OPENDATA-281`",
    "reponse_v": "Automatiser la chaîne de publication et superviser les échecs",
    "reponse_f1": "Mettre à jour manuellement sans journal",
    "reponse_f2": "Publier une fois par an",
    "explication": "Une fréquence élevée justifie automatisation et supervision."
  },
  {
    "id": 282,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe fichier publié est parfois vide à cause d'une panne amont.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 32\n\nRéférence exercice : OPENDATA-282`",
    "reponse_v": "Ajouter des contrôles avant publication",
    "reponse_f1": "Publier le fichier vide comme succès",
    "reponse_f2": "Supprimer l'historique",
    "explication": "Des contrôles de volume et de cohérence évitent les publications invalides."
  },
  {
    "id": 283,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe schéma change sans prévenir les consommateurs.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 33\n\nRéférence exercice : OPENDATA-283`",
    "reponse_v": "Mettre en place une politique de versionnement et de dépréciation",
    "reponse_f1": "Changer silencieusement",
    "reponse_f2": "Supprimer la documentation",
    "explication": "Les changements incompatibles doivent être annoncés."
  },
  {
    "id": 284,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe portail doit indiquer si une ressource est indisponible.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 34\n\nRéférence exercice : OPENDATA-284`",
    "reponse_v": "Publier un statut et une information d'incident",
    "reponse_f1": "Renvoyer systématiquement 200 avec une page vide",
    "reponse_f2": "Masquer la ressource sans explication",
    "explication": "La transparence opérationnelle aide les réutilisateurs."
  },
  {
    "id": 285,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne ancienne version doit rester reproductible.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 35\n\nRéférence exercice : OPENDATA-285`",
    "reponse_v": "Conserver des snapshots ou archives versionnées",
    "reponse_f1": "Écraser toujours la même ressource",
    "reponse_f2": "Ne garder que les logs",
    "explication": "L'archivage permet de reproduire des analyses passées."
  },
  {
    "id": 286,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe producteur veut mesurer l'usage.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 36\n\nRéférence exercice : OPENDATA-286`",
    "reponse_v": "Collecter des métriques d'accès respectueuses de la vie privée",
    "reponse_f1": "Exiger une inscription nominative pour tout téléchargement",
    "reponse_f2": "Tracer secrètement chaque utilisateur",
    "explication": "Les métriques doivent rester proportionnées et transparentes."
  },
  {
    "id": 287,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne anomalie est signalée par un réutilisateur.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 37\n\nRéférence exercice : OPENDATA-287`",
    "reponse_v": "Fournir un canal de retour et tracer la correction",
    "reponse_f1": "Ignorer les retours externes",
    "reponse_f2": "Modifier les données sans journal",
    "explication": "Les retours améliorent la qualité et doivent être suivis."
  },
  {
    "id": 288,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUn dataset n'est plus maintenu.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 38\n\nRéférence exercice : OPENDATA-288`",
    "reponse_v": "Le marquer comme archivé ou déprécié avec une date",
    "reponse_f1": "Le laisser présenté comme actif",
    "reponse_f2": "Supprimer toute métadonnée",
    "explication": "Le statut de cycle de vie doit être explicite."
  },
  {
    "id": 289,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nPlusieurs producteurs alimentent le même jeu.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 39\n\nRéférence exercice : OPENDATA-289`",
    "reponse_v": "Définir responsabilités, contrôles et règles de consolidation",
    "reponse_f1": "Laisser chacun publier librement dans le même fichier",
    "reponse_f2": "Supprimer les identifiants de source",
    "explication": "La gouvernance multi-producteurs exige des responsabilités claires."
  },
  {
    "id": 290,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne nouvelle version doit être testée avant publication.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 40\n\nRéférence exercice : OPENDATA-290`",
    "reponse_v": "Utiliser un environnement de prépublication avec validation",
    "reponse_f1": "Publier directement en production",
    "reponse_f2": "Envoyer uniquement un e-mail",
    "explication": "Une étape de validation réduit les erreurs de mise en ligne."
  },
  {
    "id": 291,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe jeu est mis à jour chaque nuit.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 41\n\nRéférence exercice : OPENDATA-291`",
    "reponse_v": "Automatiser la chaîne de publication et superviser les échecs",
    "reponse_f1": "Mettre à jour manuellement sans journal",
    "reponse_f2": "Publier une fois par an",
    "explication": "Une fréquence élevée justifie automatisation et supervision."
  },
  {
    "id": 292,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe fichier publié est parfois vide à cause d'une panne amont.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 42\n\nRéférence exercice : OPENDATA-292`",
    "reponse_v": "Ajouter des contrôles avant publication",
    "reponse_f1": "Publier le fichier vide comme succès",
    "reponse_f2": "Supprimer l'historique",
    "explication": "Des contrôles de volume et de cohérence évitent les publications invalides."
  },
  {
    "id": 293,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe schéma change sans prévenir les consommateurs.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 43\n\nRéférence exercice : OPENDATA-293`",
    "reponse_v": "Mettre en place une politique de versionnement et de dépréciation",
    "reponse_f1": "Changer silencieusement",
    "reponse_f2": "Supprimer la documentation",
    "explication": "Les changements incompatibles doivent être annoncés."
  },
  {
    "id": 294,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe portail doit indiquer si une ressource est indisponible.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 44\n\nRéférence exercice : OPENDATA-294`",
    "reponse_v": "Publier un statut et une information d'incident",
    "reponse_f1": "Renvoyer systématiquement 200 avec une page vide",
    "reponse_f2": "Masquer la ressource sans explication",
    "explication": "La transparence opérationnelle aide les réutilisateurs."
  },
  {
    "id": 295,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne ancienne version doit rester reproductible.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 45\n\nRéférence exercice : OPENDATA-295`",
    "reponse_v": "Conserver des snapshots ou archives versionnées",
    "reponse_f1": "Écraser toujours la même ressource",
    "reponse_f2": "Ne garder que les logs",
    "explication": "L'archivage permet de reproduire des analyses passées."
  },
  {
    "id": 296,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nLe producteur veut mesurer l'usage.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 46\n\nRéférence exercice : OPENDATA-296`",
    "reponse_v": "Collecter des métriques d'accès respectueuses de la vie privée",
    "reponse_f1": "Exiger une inscription nominative pour tout téléchargement",
    "reponse_f2": "Tracer secrètement chaque utilisateur",
    "explication": "Les métriques doivent rester proportionnées et transparentes."
  },
  {
    "id": 297,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne anomalie est signalée par un réutilisateur.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 47\n\nRéférence exercice : OPENDATA-297`",
    "reponse_v": "Fournir un canal de retour et tracer la correction",
    "reponse_f1": "Ignorer les retours externes",
    "reponse_f2": "Modifier les données sans journal",
    "explication": "Les retours améliorent la qualité et doivent être suivis."
  },
  {
    "id": 298,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUn dataset n'est plus maintenu.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 48\n\nRéférence exercice : OPENDATA-298`",
    "reponse_v": "Le marquer comme archivé ou déprécié avec une date",
    "reponse_f1": "Le laisser présenté comme actif",
    "reponse_f2": "Supprimer toute métadonnée",
    "explication": "Le statut de cycle de vie doit être explicite."
  },
  {
    "id": 299,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nPlusieurs producteurs alimentent le même jeu.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 49\n\nRéférence exercice : OPENDATA-299`",
    "reponse_v": "Définir responsabilités, contrôles et règles de consolidation",
    "reponse_f1": "Laisser chacun publier librement dans le même fichier",
    "reponse_f2": "Supprimer les identifiants de source",
    "explication": "La gouvernance multi-producteurs exige des responsabilités claires."
  },
  {
    "id": 300,
    "question": "`Mini-TP Open Data — cycle de vie de publication\n\nSituation :\nUne nouvelle version doit être testée avant publication.\n\nObjectif :\nGarantir la continuité, la traçabilité et la fiabilité de l'exposition.\n\nQuelle pratique est la plus adaptée ?\n\nCas publication : 50\n\nRéférence exercice : OPENDATA-300`",
    "reponse_v": "Utiliser un environnement de prépublication avec validation",
    "reponse_f1": "Publier directement en production",
    "reponse_f2": "Envoyer uniquement un e-mail",
    "explication": "Une étape de validation réduit les erreurs de mise en ligne."
  }
]
