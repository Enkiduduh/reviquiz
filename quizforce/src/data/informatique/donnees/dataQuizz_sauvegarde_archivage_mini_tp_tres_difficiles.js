export const dataQuizz_sauvegarde_archivage_mini_tp_tres_difficiles = [
  {
    "id": 1,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie toutes les données sélectionnées à chaque exécution.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 01\n\nRéférence exercice : BACKUP-001`",
    "reponse_v": "Sauvegarde complète",
    "reponse_f1": "Sauvegarde incrémentale",
    "reponse_f2": "Sauvegarde différentielle",
    "explication": "Une sauvegarde complète contient l'ensemble des données retenues."
  },
  {
    "id": 2,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie uniquement les changements depuis la dernière sauvegarde, quel qu'en soit le type.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 02\n\nRéférence exercice : BACKUP-002`",
    "reponse_v": "Sauvegarde incrémentale",
    "reponse_f1": "Sauvegarde différentielle",
    "reponse_f2": "Sauvegarde synthétique complète",
    "explication": "L'incrémentale dépend de la dernière sauvegarde de la chaîne."
  },
  {
    "id": 3,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie les changements depuis la dernière sauvegarde complète.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 03\n\nRéférence exercice : BACKUP-003`",
    "reponse_v": "Sauvegarde différentielle",
    "reponse_f1": "Sauvegarde incrémentale",
    "reponse_f2": "Snapshot crash-consistent",
    "explication": "La différentielle se base toujours sur la dernière complète."
  },
  {
    "id": 4,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde complète est reconstruite côté dépôt à partir d'une complète et d'incréments existants.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 04\n\nRéférence exercice : BACKUP-004`",
    "reponse_v": "Sauvegarde complète synthétique",
    "reponse_f1": "Sauvegarde miroir",
    "reponse_f2": "Sauvegarde différentielle",
    "explication": "La synthétique complète évite de relire toute la source."
  },
  {
    "id": 5,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne copie reproduit exactement l'état courant, suppressions comprises, sans historique de versions.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 05\n\nRéférence exercice : BACKUP-005`",
    "reponse_v": "Miroir",
    "reponse_f1": "Archivage long terme",
    "reponse_f2": "Sauvegarde incrémentale",
    "explication": "Un miroir améliore la disponibilité mais ne protège pas seul contre les suppressions logiques."
  },
  {
    "id": 6,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne image cohérente d'un volume est créée à un instant donné.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 06\n\nRéférence exercice : BACKUP-006`",
    "reponse_v": "Snapshot",
    "reponse_f1": "Déduplication",
    "reponse_f2": "Journalisation",
    "explication": "Un snapshot capture l'état logique d'un volume à un instant."
  },
  {
    "id": 7,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nLes blocs modifiés depuis un snapshot parent sont enregistrés.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 07\n\nRéférence exercice : BACKUP-007`",
    "reponse_v": "Snapshot incrémental au niveau bloc",
    "reponse_f1": "Sauvegarde complète fichier",
    "reponse_f2": "Archivage WORM",
    "explication": "Un snapshot incrémental ne stocke que les différences par rapport à sa base."
  },
  {
    "id": 8,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne copie indépendante est produite pour ne plus dépendre des snapshots parents.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 08\n\nRéférence exercice : BACKUP-008`",
    "reponse_v": "Clone complet ou consolidation indépendante",
    "reponse_f1": "Snapshot différentiel chaîné",
    "reponse_f2": "Journal circulaire",
    "explication": "Une copie indépendante réduit la dépendance à une chaîne de snapshots."
  },
  {
    "id": 9,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nLes journaux de transactions sont sauvegardés entre deux sauvegardes de base.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 09\n\nRéférence exercice : BACKUP-009`",
    "reponse_v": "Sauvegarde des logs transactionnels",
    "reponse_f1": "Sauvegarde miroir",
    "reponse_f2": "Archivage documentaire",
    "explication": "Les logs permettent une restauration à un point précis."
  },
  {
    "id": 10,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne machine entière doit être restaurée avec OS, applications et données.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 10\n\nRéférence exercice : BACKUP-010`",
    "reponse_v": "Sauvegarde image ou bare-metal",
    "reponse_f1": "Sauvegarde uniquement des fichiers utilisateurs",
    "reponse_f2": "Export CSV",
    "explication": "Une image système complète permet une reconstruction bare-metal."
  },
  {
    "id": 11,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie toutes les données sélectionnées à chaque exécution.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 11\n\nRéférence exercice : BACKUP-011`",
    "reponse_v": "Sauvegarde complète",
    "reponse_f1": "Sauvegarde incrémentale",
    "reponse_f2": "Sauvegarde différentielle",
    "explication": "Une sauvegarde complète contient l'ensemble des données retenues."
  },
  {
    "id": 12,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie uniquement les changements depuis la dernière sauvegarde, quel qu'en soit le type.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 12\n\nRéférence exercice : BACKUP-012`",
    "reponse_v": "Sauvegarde incrémentale",
    "reponse_f1": "Sauvegarde différentielle",
    "reponse_f2": "Sauvegarde synthétique complète",
    "explication": "L'incrémentale dépend de la dernière sauvegarde de la chaîne."
  },
  {
    "id": 13,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie les changements depuis la dernière sauvegarde complète.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 13\n\nRéférence exercice : BACKUP-013`",
    "reponse_v": "Sauvegarde différentielle",
    "reponse_f1": "Sauvegarde incrémentale",
    "reponse_f2": "Snapshot crash-consistent",
    "explication": "La différentielle se base toujours sur la dernière complète."
  },
  {
    "id": 14,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde complète est reconstruite côté dépôt à partir d'une complète et d'incréments existants.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 14\n\nRéférence exercice : BACKUP-014`",
    "reponse_v": "Sauvegarde complète synthétique",
    "reponse_f1": "Sauvegarde miroir",
    "reponse_f2": "Sauvegarde différentielle",
    "explication": "La synthétique complète évite de relire toute la source."
  },
  {
    "id": 15,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne copie reproduit exactement l'état courant, suppressions comprises, sans historique de versions.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 15\n\nRéférence exercice : BACKUP-015`",
    "reponse_v": "Miroir",
    "reponse_f1": "Archivage long terme",
    "reponse_f2": "Sauvegarde incrémentale",
    "explication": "Un miroir améliore la disponibilité mais ne protège pas seul contre les suppressions logiques."
  },
  {
    "id": 16,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne image cohérente d'un volume est créée à un instant donné.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 16\n\nRéférence exercice : BACKUP-016`",
    "reponse_v": "Snapshot",
    "reponse_f1": "Déduplication",
    "reponse_f2": "Journalisation",
    "explication": "Un snapshot capture l'état logique d'un volume à un instant."
  },
  {
    "id": 17,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nLes blocs modifiés depuis un snapshot parent sont enregistrés.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 17\n\nRéférence exercice : BACKUP-017`",
    "reponse_v": "Snapshot incrémental au niveau bloc",
    "reponse_f1": "Sauvegarde complète fichier",
    "reponse_f2": "Archivage WORM",
    "explication": "Un snapshot incrémental ne stocke que les différences par rapport à sa base."
  },
  {
    "id": 18,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne copie indépendante est produite pour ne plus dépendre des snapshots parents.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 18\n\nRéférence exercice : BACKUP-018`",
    "reponse_v": "Clone complet ou consolidation indépendante",
    "reponse_f1": "Snapshot différentiel chaîné",
    "reponse_f2": "Journal circulaire",
    "explication": "Une copie indépendante réduit la dépendance à une chaîne de snapshots."
  },
  {
    "id": 19,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nLes journaux de transactions sont sauvegardés entre deux sauvegardes de base.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 19\n\nRéférence exercice : BACKUP-019`",
    "reponse_v": "Sauvegarde des logs transactionnels",
    "reponse_f1": "Sauvegarde miroir",
    "reponse_f2": "Archivage documentaire",
    "explication": "Les logs permettent une restauration à un point précis."
  },
  {
    "id": 20,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne machine entière doit être restaurée avec OS, applications et données.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 20\n\nRéférence exercice : BACKUP-020`",
    "reponse_v": "Sauvegarde image ou bare-metal",
    "reponse_f1": "Sauvegarde uniquement des fichiers utilisateurs",
    "reponse_f2": "Export CSV",
    "explication": "Une image système complète permet une reconstruction bare-metal."
  },
  {
    "id": 21,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie toutes les données sélectionnées à chaque exécution.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 21\n\nRéférence exercice : BACKUP-021`",
    "reponse_v": "Sauvegarde complète",
    "reponse_f1": "Sauvegarde incrémentale",
    "reponse_f2": "Sauvegarde différentielle",
    "explication": "Une sauvegarde complète contient l'ensemble des données retenues."
  },
  {
    "id": 22,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie uniquement les changements depuis la dernière sauvegarde, quel qu'en soit le type.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 22\n\nRéférence exercice : BACKUP-022`",
    "reponse_v": "Sauvegarde incrémentale",
    "reponse_f1": "Sauvegarde différentielle",
    "reponse_f2": "Sauvegarde synthétique complète",
    "explication": "L'incrémentale dépend de la dernière sauvegarde de la chaîne."
  },
  {
    "id": 23,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie les changements depuis la dernière sauvegarde complète.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 23\n\nRéférence exercice : BACKUP-023`",
    "reponse_v": "Sauvegarde différentielle",
    "reponse_f1": "Sauvegarde incrémentale",
    "reponse_f2": "Snapshot crash-consistent",
    "explication": "La différentielle se base toujours sur la dernière complète."
  },
  {
    "id": 24,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde complète est reconstruite côté dépôt à partir d'une complète et d'incréments existants.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 24\n\nRéférence exercice : BACKUP-024`",
    "reponse_v": "Sauvegarde complète synthétique",
    "reponse_f1": "Sauvegarde miroir",
    "reponse_f2": "Sauvegarde différentielle",
    "explication": "La synthétique complète évite de relire toute la source."
  },
  {
    "id": 25,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne copie reproduit exactement l'état courant, suppressions comprises, sans historique de versions.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 25\n\nRéférence exercice : BACKUP-025`",
    "reponse_v": "Miroir",
    "reponse_f1": "Archivage long terme",
    "reponse_f2": "Sauvegarde incrémentale",
    "explication": "Un miroir améliore la disponibilité mais ne protège pas seul contre les suppressions logiques."
  },
  {
    "id": 26,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne image cohérente d'un volume est créée à un instant donné.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 26\n\nRéférence exercice : BACKUP-026`",
    "reponse_v": "Snapshot",
    "reponse_f1": "Déduplication",
    "reponse_f2": "Journalisation",
    "explication": "Un snapshot capture l'état logique d'un volume à un instant."
  },
  {
    "id": 27,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nLes blocs modifiés depuis un snapshot parent sont enregistrés.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 27\n\nRéférence exercice : BACKUP-027`",
    "reponse_v": "Snapshot incrémental au niveau bloc",
    "reponse_f1": "Sauvegarde complète fichier",
    "reponse_f2": "Archivage WORM",
    "explication": "Un snapshot incrémental ne stocke que les différences par rapport à sa base."
  },
  {
    "id": 28,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne copie indépendante est produite pour ne plus dépendre des snapshots parents.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 28\n\nRéférence exercice : BACKUP-028`",
    "reponse_v": "Clone complet ou consolidation indépendante",
    "reponse_f1": "Snapshot différentiel chaîné",
    "reponse_f2": "Journal circulaire",
    "explication": "Une copie indépendante réduit la dépendance à une chaîne de snapshots."
  },
  {
    "id": 29,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nLes journaux de transactions sont sauvegardés entre deux sauvegardes de base.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 29\n\nRéférence exercice : BACKUP-029`",
    "reponse_v": "Sauvegarde des logs transactionnels",
    "reponse_f1": "Sauvegarde miroir",
    "reponse_f2": "Archivage documentaire",
    "explication": "Les logs permettent une restauration à un point précis."
  },
  {
    "id": 30,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne machine entière doit être restaurée avec OS, applications et données.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 30\n\nRéférence exercice : BACKUP-030`",
    "reponse_v": "Sauvegarde image ou bare-metal",
    "reponse_f1": "Sauvegarde uniquement des fichiers utilisateurs",
    "reponse_f2": "Export CSV",
    "explication": "Une image système complète permet une reconstruction bare-metal."
  },
  {
    "id": 31,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie toutes les données sélectionnées à chaque exécution.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 31\n\nRéférence exercice : BACKUP-031`",
    "reponse_v": "Sauvegarde complète",
    "reponse_f1": "Sauvegarde incrémentale",
    "reponse_f2": "Sauvegarde différentielle",
    "explication": "Une sauvegarde complète contient l'ensemble des données retenues."
  },
  {
    "id": 32,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie uniquement les changements depuis la dernière sauvegarde, quel qu'en soit le type.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 32\n\nRéférence exercice : BACKUP-032`",
    "reponse_v": "Sauvegarde incrémentale",
    "reponse_f1": "Sauvegarde différentielle",
    "reponse_f2": "Sauvegarde synthétique complète",
    "explication": "L'incrémentale dépend de la dernière sauvegarde de la chaîne."
  },
  {
    "id": 33,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie les changements depuis la dernière sauvegarde complète.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 33\n\nRéférence exercice : BACKUP-033`",
    "reponse_v": "Sauvegarde différentielle",
    "reponse_f1": "Sauvegarde incrémentale",
    "reponse_f2": "Snapshot crash-consistent",
    "explication": "La différentielle se base toujours sur la dernière complète."
  },
  {
    "id": 34,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde complète est reconstruite côté dépôt à partir d'une complète et d'incréments existants.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 34\n\nRéférence exercice : BACKUP-034`",
    "reponse_v": "Sauvegarde complète synthétique",
    "reponse_f1": "Sauvegarde miroir",
    "reponse_f2": "Sauvegarde différentielle",
    "explication": "La synthétique complète évite de relire toute la source."
  },
  {
    "id": 35,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne copie reproduit exactement l'état courant, suppressions comprises, sans historique de versions.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 35\n\nRéférence exercice : BACKUP-035`",
    "reponse_v": "Miroir",
    "reponse_f1": "Archivage long terme",
    "reponse_f2": "Sauvegarde incrémentale",
    "explication": "Un miroir améliore la disponibilité mais ne protège pas seul contre les suppressions logiques."
  },
  {
    "id": 36,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne image cohérente d'un volume est créée à un instant donné.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 36\n\nRéférence exercice : BACKUP-036`",
    "reponse_v": "Snapshot",
    "reponse_f1": "Déduplication",
    "reponse_f2": "Journalisation",
    "explication": "Un snapshot capture l'état logique d'un volume à un instant."
  },
  {
    "id": 37,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nLes blocs modifiés depuis un snapshot parent sont enregistrés.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 37\n\nRéférence exercice : BACKUP-037`",
    "reponse_v": "Snapshot incrémental au niveau bloc",
    "reponse_f1": "Sauvegarde complète fichier",
    "reponse_f2": "Archivage WORM",
    "explication": "Un snapshot incrémental ne stocke que les différences par rapport à sa base."
  },
  {
    "id": 38,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne copie indépendante est produite pour ne plus dépendre des snapshots parents.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 38\n\nRéférence exercice : BACKUP-038`",
    "reponse_v": "Clone complet ou consolidation indépendante",
    "reponse_f1": "Snapshot différentiel chaîné",
    "reponse_f2": "Journal circulaire",
    "explication": "Une copie indépendante réduit la dépendance à une chaîne de snapshots."
  },
  {
    "id": 39,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nLes journaux de transactions sont sauvegardés entre deux sauvegardes de base.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 39\n\nRéférence exercice : BACKUP-039`",
    "reponse_v": "Sauvegarde des logs transactionnels",
    "reponse_f1": "Sauvegarde miroir",
    "reponse_f2": "Archivage documentaire",
    "explication": "Les logs permettent une restauration à un point précis."
  },
  {
    "id": 40,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne machine entière doit être restaurée avec OS, applications et données.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 40\n\nRéférence exercice : BACKUP-040`",
    "reponse_v": "Sauvegarde image ou bare-metal",
    "reponse_f1": "Sauvegarde uniquement des fichiers utilisateurs",
    "reponse_f2": "Export CSV",
    "explication": "Une image système complète permet une reconstruction bare-metal."
  },
  {
    "id": 41,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie toutes les données sélectionnées à chaque exécution.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 41\n\nRéférence exercice : BACKUP-041`",
    "reponse_v": "Sauvegarde complète",
    "reponse_f1": "Sauvegarde incrémentale",
    "reponse_f2": "Sauvegarde différentielle",
    "explication": "Une sauvegarde complète contient l'ensemble des données retenues."
  },
  {
    "id": 42,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie uniquement les changements depuis la dernière sauvegarde, quel qu'en soit le type.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 42\n\nRéférence exercice : BACKUP-042`",
    "reponse_v": "Sauvegarde incrémentale",
    "reponse_f1": "Sauvegarde différentielle",
    "reponse_f2": "Sauvegarde synthétique complète",
    "explication": "L'incrémentale dépend de la dernière sauvegarde de la chaîne."
  },
  {
    "id": 43,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde copie les changements depuis la dernière sauvegarde complète.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 43\n\nRéférence exercice : BACKUP-043`",
    "reponse_v": "Sauvegarde différentielle",
    "reponse_f1": "Sauvegarde incrémentale",
    "reponse_f2": "Snapshot crash-consistent",
    "explication": "La différentielle se base toujours sur la dernière complète."
  },
  {
    "id": 44,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne sauvegarde complète est reconstruite côté dépôt à partir d'une complète et d'incréments existants.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 44\n\nRéférence exercice : BACKUP-044`",
    "reponse_v": "Sauvegarde complète synthétique",
    "reponse_f1": "Sauvegarde miroir",
    "reponse_f2": "Sauvegarde différentielle",
    "explication": "La synthétique complète évite de relire toute la source."
  },
  {
    "id": 45,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne copie reproduit exactement l'état courant, suppressions comprises, sans historique de versions.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 45\n\nRéférence exercice : BACKUP-045`",
    "reponse_v": "Miroir",
    "reponse_f1": "Archivage long terme",
    "reponse_f2": "Sauvegarde incrémentale",
    "explication": "Un miroir améliore la disponibilité mais ne protège pas seul contre les suppressions logiques."
  },
  {
    "id": 46,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne image cohérente d'un volume est créée à un instant donné.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 46\n\nRéférence exercice : BACKUP-046`",
    "reponse_v": "Snapshot",
    "reponse_f1": "Déduplication",
    "reponse_f2": "Journalisation",
    "explication": "Un snapshot capture l'état logique d'un volume à un instant."
  },
  {
    "id": 47,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nLes blocs modifiés depuis un snapshot parent sont enregistrés.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 47\n\nRéférence exercice : BACKUP-047`",
    "reponse_v": "Snapshot incrémental au niveau bloc",
    "reponse_f1": "Sauvegarde complète fichier",
    "reponse_f2": "Archivage WORM",
    "explication": "Un snapshot incrémental ne stocke que les différences par rapport à sa base."
  },
  {
    "id": 48,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne copie indépendante est produite pour ne plus dépendre des snapshots parents.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 48\n\nRéférence exercice : BACKUP-048`",
    "reponse_v": "Clone complet ou consolidation indépendante",
    "reponse_f1": "Snapshot différentiel chaîné",
    "reponse_f2": "Journal circulaire",
    "explication": "Une copie indépendante réduit la dépendance à une chaîne de snapshots."
  },
  {
    "id": 49,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nLes journaux de transactions sont sauvegardés entre deux sauvegardes de base.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 49\n\nRéférence exercice : BACKUP-049`",
    "reponse_v": "Sauvegarde des logs transactionnels",
    "reponse_f1": "Sauvegarde miroir",
    "reponse_f2": "Archivage documentaire",
    "explication": "Les logs permettent une restauration à un point précis."
  },
  {
    "id": 50,
    "question": "`Mini-TP Sauvegarde — stratégie de copie\n\nSituation :\nUne machine entière doit être restaurée avec OS, applications et données.\n\nQuelle technologie ou stratégie correspond le mieux ?\n\nCas stratégie : 50\n\nRéférence exercice : BACKUP-050`",
    "reponse_v": "Sauvegarde image ou bare-metal",
    "reponse_f1": "Sauvegarde uniquement des fichiers utilisateurs",
    "reponse_f2": "Export CSV",
    "explication": "Une image système complète permet une reconstruction bare-metal."
  },
  {
    "id": 51,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne application accepte au maximum 15 minutes de perte de données.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 01\n\nRéférence exercice : BACKUP-051`",
    "reponse_v": "RPO = 15 minutes",
    "reponse_f1": "RTO = 15 minutes",
    "reponse_f2": "Rétention = 15 minutes",
    "explication": "Le RPO mesure la perte de données maximale acceptable."
  },
  {
    "id": 52,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe service doit être rétabli en moins de 2 heures.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 02\n\nRéférence exercice : BACKUP-052`",
    "reponse_v": "RTO = 2 heures",
    "reponse_f1": "RPO = 2 heures",
    "reponse_f2": "MTBF = 2 heures",
    "explication": "Le RTO mesure le délai maximal de reprise."
  },
  {
    "id": 53,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe système doit continuer à fonctionner en mode dégradé pendant l'incident.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 03\n\nRéférence exercice : BACKUP-053`",
    "reponse_v": "PCA",
    "reponse_f1": "PRA uniquement",
    "reponse_f2": "Archivage légal",
    "explication": "Le PCA vise la continuité de l'activité pendant la crise."
  },
  {
    "id": 54,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe système doit être reconstruit après sinistre sur un site secondaire.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 04\n\nRéférence exercice : BACKUP-054`",
    "reponse_v": "PRA",
    "reponse_f1": "PCA uniquement",
    "reponse_f2": "Déduplication",
    "explication": "Le PRA organise la reprise après interruption majeure."
  },
  {
    "id": 55,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLes applications doivent être restaurées dans un ordre métier défini.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 05\n\nRéférence exercice : BACKUP-055`",
    "reponse_v": "Établir des priorités et dépendances de reprise",
    "reponse_f1": "Restaurer aléatoirement",
    "reponse_f2": "Restaurer uniquement les plus gros volumes",
    "explication": "L'ordre de reprise dépend de la criticité et des dépendances."
  },
  {
    "id": 56,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne base dépend d'un annuaire et d'un stockage partagé.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 06\n\nRéférence exercice : BACKUP-056`",
    "reponse_v": "Restaurer d'abord les services prérequis",
    "reponse_f1": "Restaurer la base sans ses dépendances",
    "reponse_f2": "Restaurer uniquement les postes clients",
    "explication": "Les dépendances techniques conditionnent la reprise."
  },
  {
    "id": 57,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUn test de PRA dépasse systématiquement l'objectif de reprise.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 07\n\nRéférence exercice : BACKUP-057`",
    "reponse_v": "Réviser l'architecture, l'automatisation ou le RTO",
    "reponse_f1": "Ignorer le résultat",
    "reponse_f2": "Réduire la journalisation",
    "explication": "Un test non conforme exige une action corrective."
  },
  {
    "id": 58,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe RPO est inférieur à l'intervalle entre deux sauvegardes complètes.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 08\n\nRéférence exercice : BACKUP-058`",
    "reponse_v": "Ajouter des incréments, journaux ou réplication adaptée",
    "reponse_f1": "Augmenter encore l'intervalle",
    "reponse_f2": "Supprimer les sauvegardes intermédiaires",
    "explication": "La fréquence de capture doit être compatible avec le RPO."
  },
  {
    "id": 59,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne restauration technique réussit mais l'application reste incohérente.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 09\n\nRéférence exercice : BACKUP-059`",
    "reponse_v": "Le test doit inclure une validation fonctionnelle",
    "reponse_f1": "Le test est tout de même complet",
    "reponse_f2": "Il suffit de vérifier la taille des fichiers",
    "explication": "La reprise doit être validée au niveau applicatif et métier."
  },
  {
    "id": 60,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUn plan de reprise n'a jamais été testé.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 10\n\nRéférence exercice : BACKUP-060`",
    "reponse_v": "Il ne peut pas être considéré comme fiable",
    "reponse_f1": "Il est fiable s'il est bien documenté",
    "reponse_f2": "Il est valide tant qu'aucun incident n'a eu lieu",
    "explication": "Un PRA doit être testé régulièrement."
  },
  {
    "id": 61,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne application accepte au maximum 15 minutes de perte de données.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 11\n\nRéférence exercice : BACKUP-061`",
    "reponse_v": "RPO = 15 minutes",
    "reponse_f1": "RTO = 15 minutes",
    "reponse_f2": "Rétention = 15 minutes",
    "explication": "Le RPO mesure la perte de données maximale acceptable."
  },
  {
    "id": 62,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe service doit être rétabli en moins de 2 heures.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 12\n\nRéférence exercice : BACKUP-062`",
    "reponse_v": "RTO = 2 heures",
    "reponse_f1": "RPO = 2 heures",
    "reponse_f2": "MTBF = 2 heures",
    "explication": "Le RTO mesure le délai maximal de reprise."
  },
  {
    "id": 63,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe système doit continuer à fonctionner en mode dégradé pendant l'incident.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 13\n\nRéférence exercice : BACKUP-063`",
    "reponse_v": "PCA",
    "reponse_f1": "PRA uniquement",
    "reponse_f2": "Archivage légal",
    "explication": "Le PCA vise la continuité de l'activité pendant la crise."
  },
  {
    "id": 64,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe système doit être reconstruit après sinistre sur un site secondaire.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 14\n\nRéférence exercice : BACKUP-064`",
    "reponse_v": "PRA",
    "reponse_f1": "PCA uniquement",
    "reponse_f2": "Déduplication",
    "explication": "Le PRA organise la reprise après interruption majeure."
  },
  {
    "id": 65,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLes applications doivent être restaurées dans un ordre métier défini.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 15\n\nRéférence exercice : BACKUP-065`",
    "reponse_v": "Établir des priorités et dépendances de reprise",
    "reponse_f1": "Restaurer aléatoirement",
    "reponse_f2": "Restaurer uniquement les plus gros volumes",
    "explication": "L'ordre de reprise dépend de la criticité et des dépendances."
  },
  {
    "id": 66,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne base dépend d'un annuaire et d'un stockage partagé.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 16\n\nRéférence exercice : BACKUP-066`",
    "reponse_v": "Restaurer d'abord les services prérequis",
    "reponse_f1": "Restaurer la base sans ses dépendances",
    "reponse_f2": "Restaurer uniquement les postes clients",
    "explication": "Les dépendances techniques conditionnent la reprise."
  },
  {
    "id": 67,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUn test de PRA dépasse systématiquement l'objectif de reprise.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 17\n\nRéférence exercice : BACKUP-067`",
    "reponse_v": "Réviser l'architecture, l'automatisation ou le RTO",
    "reponse_f1": "Ignorer le résultat",
    "reponse_f2": "Réduire la journalisation",
    "explication": "Un test non conforme exige une action corrective."
  },
  {
    "id": 68,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe RPO est inférieur à l'intervalle entre deux sauvegardes complètes.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 18\n\nRéférence exercice : BACKUP-068`",
    "reponse_v": "Ajouter des incréments, journaux ou réplication adaptée",
    "reponse_f1": "Augmenter encore l'intervalle",
    "reponse_f2": "Supprimer les sauvegardes intermédiaires",
    "explication": "La fréquence de capture doit être compatible avec le RPO."
  },
  {
    "id": 69,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne restauration technique réussit mais l'application reste incohérente.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 19\n\nRéférence exercice : BACKUP-069`",
    "reponse_v": "Le test doit inclure une validation fonctionnelle",
    "reponse_f1": "Le test est tout de même complet",
    "reponse_f2": "Il suffit de vérifier la taille des fichiers",
    "explication": "La reprise doit être validée au niveau applicatif et métier."
  },
  {
    "id": 70,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUn plan de reprise n'a jamais été testé.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 20\n\nRéférence exercice : BACKUP-070`",
    "reponse_v": "Il ne peut pas être considéré comme fiable",
    "reponse_f1": "Il est fiable s'il est bien documenté",
    "reponse_f2": "Il est valide tant qu'aucun incident n'a eu lieu",
    "explication": "Un PRA doit être testé régulièrement."
  },
  {
    "id": 71,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne application accepte au maximum 15 minutes de perte de données.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 21\n\nRéférence exercice : BACKUP-071`",
    "reponse_v": "RPO = 15 minutes",
    "reponse_f1": "RTO = 15 minutes",
    "reponse_f2": "Rétention = 15 minutes",
    "explication": "Le RPO mesure la perte de données maximale acceptable."
  },
  {
    "id": 72,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe service doit être rétabli en moins de 2 heures.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 22\n\nRéférence exercice : BACKUP-072`",
    "reponse_v": "RTO = 2 heures",
    "reponse_f1": "RPO = 2 heures",
    "reponse_f2": "MTBF = 2 heures",
    "explication": "Le RTO mesure le délai maximal de reprise."
  },
  {
    "id": 73,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe système doit continuer à fonctionner en mode dégradé pendant l'incident.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 23\n\nRéférence exercice : BACKUP-073`",
    "reponse_v": "PCA",
    "reponse_f1": "PRA uniquement",
    "reponse_f2": "Archivage légal",
    "explication": "Le PCA vise la continuité de l'activité pendant la crise."
  },
  {
    "id": 74,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe système doit être reconstruit après sinistre sur un site secondaire.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 24\n\nRéférence exercice : BACKUP-074`",
    "reponse_v": "PRA",
    "reponse_f1": "PCA uniquement",
    "reponse_f2": "Déduplication",
    "explication": "Le PRA organise la reprise après interruption majeure."
  },
  {
    "id": 75,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLes applications doivent être restaurées dans un ordre métier défini.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 25\n\nRéférence exercice : BACKUP-075`",
    "reponse_v": "Établir des priorités et dépendances de reprise",
    "reponse_f1": "Restaurer aléatoirement",
    "reponse_f2": "Restaurer uniquement les plus gros volumes",
    "explication": "L'ordre de reprise dépend de la criticité et des dépendances."
  },
  {
    "id": 76,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne base dépend d'un annuaire et d'un stockage partagé.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 26\n\nRéférence exercice : BACKUP-076`",
    "reponse_v": "Restaurer d'abord les services prérequis",
    "reponse_f1": "Restaurer la base sans ses dépendances",
    "reponse_f2": "Restaurer uniquement les postes clients",
    "explication": "Les dépendances techniques conditionnent la reprise."
  },
  {
    "id": 77,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUn test de PRA dépasse systématiquement l'objectif de reprise.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 27\n\nRéférence exercice : BACKUP-077`",
    "reponse_v": "Réviser l'architecture, l'automatisation ou le RTO",
    "reponse_f1": "Ignorer le résultat",
    "reponse_f2": "Réduire la journalisation",
    "explication": "Un test non conforme exige une action corrective."
  },
  {
    "id": 78,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe RPO est inférieur à l'intervalle entre deux sauvegardes complètes.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 28\n\nRéférence exercice : BACKUP-078`",
    "reponse_v": "Ajouter des incréments, journaux ou réplication adaptée",
    "reponse_f1": "Augmenter encore l'intervalle",
    "reponse_f2": "Supprimer les sauvegardes intermédiaires",
    "explication": "La fréquence de capture doit être compatible avec le RPO."
  },
  {
    "id": 79,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne restauration technique réussit mais l'application reste incohérente.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 29\n\nRéférence exercice : BACKUP-079`",
    "reponse_v": "Le test doit inclure une validation fonctionnelle",
    "reponse_f1": "Le test est tout de même complet",
    "reponse_f2": "Il suffit de vérifier la taille des fichiers",
    "explication": "La reprise doit être validée au niveau applicatif et métier."
  },
  {
    "id": 80,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUn plan de reprise n'a jamais été testé.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 30\n\nRéférence exercice : BACKUP-080`",
    "reponse_v": "Il ne peut pas être considéré comme fiable",
    "reponse_f1": "Il est fiable s'il est bien documenté",
    "reponse_f2": "Il est valide tant qu'aucun incident n'a eu lieu",
    "explication": "Un PRA doit être testé régulièrement."
  },
  {
    "id": 81,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne application accepte au maximum 15 minutes de perte de données.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 31\n\nRéférence exercice : BACKUP-081`",
    "reponse_v": "RPO = 15 minutes",
    "reponse_f1": "RTO = 15 minutes",
    "reponse_f2": "Rétention = 15 minutes",
    "explication": "Le RPO mesure la perte de données maximale acceptable."
  },
  {
    "id": 82,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe service doit être rétabli en moins de 2 heures.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 32\n\nRéférence exercice : BACKUP-082`",
    "reponse_v": "RTO = 2 heures",
    "reponse_f1": "RPO = 2 heures",
    "reponse_f2": "MTBF = 2 heures",
    "explication": "Le RTO mesure le délai maximal de reprise."
  },
  {
    "id": 83,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe système doit continuer à fonctionner en mode dégradé pendant l'incident.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 33\n\nRéférence exercice : BACKUP-083`",
    "reponse_v": "PCA",
    "reponse_f1": "PRA uniquement",
    "reponse_f2": "Archivage légal",
    "explication": "Le PCA vise la continuité de l'activité pendant la crise."
  },
  {
    "id": 84,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe système doit être reconstruit après sinistre sur un site secondaire.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 34\n\nRéférence exercice : BACKUP-084`",
    "reponse_v": "PRA",
    "reponse_f1": "PCA uniquement",
    "reponse_f2": "Déduplication",
    "explication": "Le PRA organise la reprise après interruption majeure."
  },
  {
    "id": 85,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLes applications doivent être restaurées dans un ordre métier défini.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 35\n\nRéférence exercice : BACKUP-085`",
    "reponse_v": "Établir des priorités et dépendances de reprise",
    "reponse_f1": "Restaurer aléatoirement",
    "reponse_f2": "Restaurer uniquement les plus gros volumes",
    "explication": "L'ordre de reprise dépend de la criticité et des dépendances."
  },
  {
    "id": 86,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne base dépend d'un annuaire et d'un stockage partagé.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 36\n\nRéférence exercice : BACKUP-086`",
    "reponse_v": "Restaurer d'abord les services prérequis",
    "reponse_f1": "Restaurer la base sans ses dépendances",
    "reponse_f2": "Restaurer uniquement les postes clients",
    "explication": "Les dépendances techniques conditionnent la reprise."
  },
  {
    "id": 87,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUn test de PRA dépasse systématiquement l'objectif de reprise.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 37\n\nRéférence exercice : BACKUP-087`",
    "reponse_v": "Réviser l'architecture, l'automatisation ou le RTO",
    "reponse_f1": "Ignorer le résultat",
    "reponse_f2": "Réduire la journalisation",
    "explication": "Un test non conforme exige une action corrective."
  },
  {
    "id": 88,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe RPO est inférieur à l'intervalle entre deux sauvegardes complètes.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 38\n\nRéférence exercice : BACKUP-088`",
    "reponse_v": "Ajouter des incréments, journaux ou réplication adaptée",
    "reponse_f1": "Augmenter encore l'intervalle",
    "reponse_f2": "Supprimer les sauvegardes intermédiaires",
    "explication": "La fréquence de capture doit être compatible avec le RPO."
  },
  {
    "id": 89,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne restauration technique réussit mais l'application reste incohérente.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 39\n\nRéférence exercice : BACKUP-089`",
    "reponse_v": "Le test doit inclure une validation fonctionnelle",
    "reponse_f1": "Le test est tout de même complet",
    "reponse_f2": "Il suffit de vérifier la taille des fichiers",
    "explication": "La reprise doit être validée au niveau applicatif et métier."
  },
  {
    "id": 90,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUn plan de reprise n'a jamais été testé.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 40\n\nRéférence exercice : BACKUP-090`",
    "reponse_v": "Il ne peut pas être considéré comme fiable",
    "reponse_f1": "Il est fiable s'il est bien documenté",
    "reponse_f2": "Il est valide tant qu'aucun incident n'a eu lieu",
    "explication": "Un PRA doit être testé régulièrement."
  },
  {
    "id": 91,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne application accepte au maximum 15 minutes de perte de données.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 41\n\nRéférence exercice : BACKUP-091`",
    "reponse_v": "RPO = 15 minutes",
    "reponse_f1": "RTO = 15 minutes",
    "reponse_f2": "Rétention = 15 minutes",
    "explication": "Le RPO mesure la perte de données maximale acceptable."
  },
  {
    "id": 92,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe service doit être rétabli en moins de 2 heures.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 42\n\nRéférence exercice : BACKUP-092`",
    "reponse_v": "RTO = 2 heures",
    "reponse_f1": "RPO = 2 heures",
    "reponse_f2": "MTBF = 2 heures",
    "explication": "Le RTO mesure le délai maximal de reprise."
  },
  {
    "id": 93,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe système doit continuer à fonctionner en mode dégradé pendant l'incident.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 43\n\nRéférence exercice : BACKUP-093`",
    "reponse_v": "PCA",
    "reponse_f1": "PRA uniquement",
    "reponse_f2": "Archivage légal",
    "explication": "Le PCA vise la continuité de l'activité pendant la crise."
  },
  {
    "id": 94,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe système doit être reconstruit après sinistre sur un site secondaire.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 44\n\nRéférence exercice : BACKUP-094`",
    "reponse_v": "PRA",
    "reponse_f1": "PCA uniquement",
    "reponse_f2": "Déduplication",
    "explication": "Le PRA organise la reprise après interruption majeure."
  },
  {
    "id": 95,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLes applications doivent être restaurées dans un ordre métier défini.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 45\n\nRéférence exercice : BACKUP-095`",
    "reponse_v": "Établir des priorités et dépendances de reprise",
    "reponse_f1": "Restaurer aléatoirement",
    "reponse_f2": "Restaurer uniquement les plus gros volumes",
    "explication": "L'ordre de reprise dépend de la criticité et des dépendances."
  },
  {
    "id": 96,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne base dépend d'un annuaire et d'un stockage partagé.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 46\n\nRéférence exercice : BACKUP-096`",
    "reponse_v": "Restaurer d'abord les services prérequis",
    "reponse_f1": "Restaurer la base sans ses dépendances",
    "reponse_f2": "Restaurer uniquement les postes clients",
    "explication": "Les dépendances techniques conditionnent la reprise."
  },
  {
    "id": 97,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUn test de PRA dépasse systématiquement l'objectif de reprise.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 47\n\nRéférence exercice : BACKUP-097`",
    "reponse_v": "Réviser l'architecture, l'automatisation ou le RTO",
    "reponse_f1": "Ignorer le résultat",
    "reponse_f2": "Réduire la journalisation",
    "explication": "Un test non conforme exige une action corrective."
  },
  {
    "id": 98,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nLe RPO est inférieur à l'intervalle entre deux sauvegardes complètes.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 48\n\nRéférence exercice : BACKUP-098`",
    "reponse_v": "Ajouter des incréments, journaux ou réplication adaptée",
    "reponse_f1": "Augmenter encore l'intervalle",
    "reponse_f2": "Supprimer les sauvegardes intermédiaires",
    "explication": "La fréquence de capture doit être compatible avec le RPO."
  },
  {
    "id": 99,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUne restauration technique réussit mais l'application reste incohérente.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 49\n\nRéférence exercice : BACKUP-099`",
    "reponse_v": "Le test doit inclure une validation fonctionnelle",
    "reponse_f1": "Le test est tout de même complet",
    "reponse_f2": "Il suffit de vérifier la taille des fichiers",
    "explication": "La reprise doit être validée au niveau applicatif et métier."
  },
  {
    "id": 100,
    "question": "`Mini-TP Sauvegarde — continuité et reprise\n\nContexte :\nUn plan de reprise n'a jamais été testé.\n\nQuelle interprétation ou action est la plus correcte ?\n\nCas PRA/PCA : 50\n\nRéférence exercice : BACKUP-100`",
    "reponse_v": "Il ne peut pas être considéré comme fiable",
    "reponse_f1": "Il est fiable s'il est bien documenté",
    "reponse_f2": "Il est valide tant qu'aucun incident n'a eu lieu",
    "explication": "Un PRA doit être testé régulièrement."
  },
  {
    "id": 101,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nLes sauvegardes quotidiennes doivent être conservées 30 jours, les mensuelles 12 mois.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 01\n\nRéférence exercice : BACKUP-101`",
    "reponse_v": "Définir une politique de rétention multi-niveaux",
    "reponse_f1": "Conserver toutes les copies indéfiniment",
    "reponse_f2": "Supprimer chaque sauvegarde après restauration",
    "explication": "Une politique multi-niveaux adapte la conservation à la fréquence."
  },
  {
    "id": 102,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUn document doit être conservé dix ans pour exigence réglementaire.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 02\n\nRéférence exercice : BACKUP-102`",
    "reponse_v": "Mettre en place un archivage long terme avec durée documentée",
    "reponse_f1": "Le conserver uniquement dans le cache",
    "reponse_f2": "Le garder sur le poste de l'utilisateur",
    "explication": "L'archivage réglementaire exige durée, intégrité et traçabilité."
  },
  {
    "id": 103,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne donnée n'a plus de valeur métier après cinq ans.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 03\n\nRéférence exercice : BACKUP-103`",
    "reponse_v": "Prévoir une destruction contrôlée à l'échéance",
    "reponse_f1": "La conserver sans limite",
    "reponse_f2": "La supprimer immédiatement",
    "explication": "La conservation doit être limitée au besoin réel."
  },
  {
    "id": 104,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUn fichier archivé ne doit plus être modifiable.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 04\n\nRéférence exercice : BACKUP-104`",
    "reponse_v": "Utiliser un stockage immuable ou WORM",
    "reponse_f1": "Utiliser un répertoire partagé en écriture",
    "reponse_f2": "Utiliser seulement une compression ZIP",
    "explication": "WORM empêche la modification pendant la durée définie."
  },
  {
    "id": 105,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nLa durée de conservation est suspendue par un contentieux.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 05\n\nRéférence exercice : BACKUP-105`",
    "reponse_v": "Appliquer un legal hold",
    "reponse_f1": "Supprimer les archives à la date initiale",
    "reponse_f2": "Réduire la rétention",
    "explication": "Le legal hold suspend la suppression normale."
  },
  {
    "id": 106,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive doit rester lisible pendant plusieurs décennies.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 06\n\nRéférence exercice : BACKUP-106`",
    "reponse_v": "Prévoir migration de formats et contrôles périodiques",
    "reponse_f1": "Conserver uniquement le logiciel d'origine",
    "reponse_f2": "Ne jamais vérifier les supports",
    "explication": "La pérennité implique migration et surveillance."
  },
  {
    "id": 107,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive est déplacée vers une classe de stockage moins coûteuse.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 07\n\nRéférence exercice : BACKUP-107`",
    "reponse_v": "Configurer une politique de cycle de vie",
    "reponse_f1": "Créer une copie manuelle sans suivi",
    "reponse_f2": "Supprimer les métadonnées",
    "explication": "Le lifecycle automatise transition et expiration."
  },
  {
    "id": 108,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive doit être retrouvée rapidement malgré son ancienneté.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 08\n\nRéférence exercice : BACKUP-108`",
    "reponse_v": "Maintenir un index et des métadonnées de recherche",
    "reponse_f1": "Conserver uniquement le nom du fichier",
    "reponse_f2": "Supprimer tout catalogue",
    "explication": "L'archivage exige aussi la capacité de retrouver l'information."
  },
  {
    "id": 109,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne sauvegarde opérationnelle est confondue avec une archive probante.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 09\n\nRéférence exercice : BACKUP-109`",
    "reponse_v": "Distinguer les objectifs, durées et garanties",
    "reponse_f1": "Considérer les deux comme identiques",
    "reponse_f2": "Utiliser la sauvegarde la plus récente comme preuve",
    "explication": "Sauvegarde et archivage répondent à des finalités différentes."
  },
  {
    "id": 110,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nDes copies expirées restent physiquement présentes.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 10\n\nRéférence exercice : BACKUP-110`",
    "reponse_v": "Mettre en œuvre une purge vérifiable",
    "reponse_f1": "Les ignorer",
    "reponse_f2": "Ajouter une nouvelle couche de sauvegarde",
    "explication": "La politique de conservation doit inclure la suppression effective."
  },
  {
    "id": 111,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nLes sauvegardes quotidiennes doivent être conservées 30 jours, les mensuelles 12 mois.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 11\n\nRéférence exercice : BACKUP-111`",
    "reponse_v": "Définir une politique de rétention multi-niveaux",
    "reponse_f1": "Conserver toutes les copies indéfiniment",
    "reponse_f2": "Supprimer chaque sauvegarde après restauration",
    "explication": "Une politique multi-niveaux adapte la conservation à la fréquence."
  },
  {
    "id": 112,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUn document doit être conservé dix ans pour exigence réglementaire.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 12\n\nRéférence exercice : BACKUP-112`",
    "reponse_v": "Mettre en place un archivage long terme avec durée documentée",
    "reponse_f1": "Le conserver uniquement dans le cache",
    "reponse_f2": "Le garder sur le poste de l'utilisateur",
    "explication": "L'archivage réglementaire exige durée, intégrité et traçabilité."
  },
  {
    "id": 113,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne donnée n'a plus de valeur métier après cinq ans.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 13\n\nRéférence exercice : BACKUP-113`",
    "reponse_v": "Prévoir une destruction contrôlée à l'échéance",
    "reponse_f1": "La conserver sans limite",
    "reponse_f2": "La supprimer immédiatement",
    "explication": "La conservation doit être limitée au besoin réel."
  },
  {
    "id": 114,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUn fichier archivé ne doit plus être modifiable.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 14\n\nRéférence exercice : BACKUP-114`",
    "reponse_v": "Utiliser un stockage immuable ou WORM",
    "reponse_f1": "Utiliser un répertoire partagé en écriture",
    "reponse_f2": "Utiliser seulement une compression ZIP",
    "explication": "WORM empêche la modification pendant la durée définie."
  },
  {
    "id": 115,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nLa durée de conservation est suspendue par un contentieux.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 15\n\nRéférence exercice : BACKUP-115`",
    "reponse_v": "Appliquer un legal hold",
    "reponse_f1": "Supprimer les archives à la date initiale",
    "reponse_f2": "Réduire la rétention",
    "explication": "Le legal hold suspend la suppression normale."
  },
  {
    "id": 116,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive doit rester lisible pendant plusieurs décennies.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 16\n\nRéférence exercice : BACKUP-116`",
    "reponse_v": "Prévoir migration de formats et contrôles périodiques",
    "reponse_f1": "Conserver uniquement le logiciel d'origine",
    "reponse_f2": "Ne jamais vérifier les supports",
    "explication": "La pérennité implique migration et surveillance."
  },
  {
    "id": 117,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive est déplacée vers une classe de stockage moins coûteuse.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 17\n\nRéférence exercice : BACKUP-117`",
    "reponse_v": "Configurer une politique de cycle de vie",
    "reponse_f1": "Créer une copie manuelle sans suivi",
    "reponse_f2": "Supprimer les métadonnées",
    "explication": "Le lifecycle automatise transition et expiration."
  },
  {
    "id": 118,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive doit être retrouvée rapidement malgré son ancienneté.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 18\n\nRéférence exercice : BACKUP-118`",
    "reponse_v": "Maintenir un index et des métadonnées de recherche",
    "reponse_f1": "Conserver uniquement le nom du fichier",
    "reponse_f2": "Supprimer tout catalogue",
    "explication": "L'archivage exige aussi la capacité de retrouver l'information."
  },
  {
    "id": 119,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne sauvegarde opérationnelle est confondue avec une archive probante.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 19\n\nRéférence exercice : BACKUP-119`",
    "reponse_v": "Distinguer les objectifs, durées et garanties",
    "reponse_f1": "Considérer les deux comme identiques",
    "reponse_f2": "Utiliser la sauvegarde la plus récente comme preuve",
    "explication": "Sauvegarde et archivage répondent à des finalités différentes."
  },
  {
    "id": 120,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nDes copies expirées restent physiquement présentes.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 20\n\nRéférence exercice : BACKUP-120`",
    "reponse_v": "Mettre en œuvre une purge vérifiable",
    "reponse_f1": "Les ignorer",
    "reponse_f2": "Ajouter une nouvelle couche de sauvegarde",
    "explication": "La politique de conservation doit inclure la suppression effective."
  },
  {
    "id": 121,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nLes sauvegardes quotidiennes doivent être conservées 30 jours, les mensuelles 12 mois.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 21\n\nRéférence exercice : BACKUP-121`",
    "reponse_v": "Définir une politique de rétention multi-niveaux",
    "reponse_f1": "Conserver toutes les copies indéfiniment",
    "reponse_f2": "Supprimer chaque sauvegarde après restauration",
    "explication": "Une politique multi-niveaux adapte la conservation à la fréquence."
  },
  {
    "id": 122,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUn document doit être conservé dix ans pour exigence réglementaire.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 22\n\nRéférence exercice : BACKUP-122`",
    "reponse_v": "Mettre en place un archivage long terme avec durée documentée",
    "reponse_f1": "Le conserver uniquement dans le cache",
    "reponse_f2": "Le garder sur le poste de l'utilisateur",
    "explication": "L'archivage réglementaire exige durée, intégrité et traçabilité."
  },
  {
    "id": 123,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne donnée n'a plus de valeur métier après cinq ans.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 23\n\nRéférence exercice : BACKUP-123`",
    "reponse_v": "Prévoir une destruction contrôlée à l'échéance",
    "reponse_f1": "La conserver sans limite",
    "reponse_f2": "La supprimer immédiatement",
    "explication": "La conservation doit être limitée au besoin réel."
  },
  {
    "id": 124,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUn fichier archivé ne doit plus être modifiable.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 24\n\nRéférence exercice : BACKUP-124`",
    "reponse_v": "Utiliser un stockage immuable ou WORM",
    "reponse_f1": "Utiliser un répertoire partagé en écriture",
    "reponse_f2": "Utiliser seulement une compression ZIP",
    "explication": "WORM empêche la modification pendant la durée définie."
  },
  {
    "id": 125,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nLa durée de conservation est suspendue par un contentieux.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 25\n\nRéférence exercice : BACKUP-125`",
    "reponse_v": "Appliquer un legal hold",
    "reponse_f1": "Supprimer les archives à la date initiale",
    "reponse_f2": "Réduire la rétention",
    "explication": "Le legal hold suspend la suppression normale."
  },
  {
    "id": 126,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive doit rester lisible pendant plusieurs décennies.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 26\n\nRéférence exercice : BACKUP-126`",
    "reponse_v": "Prévoir migration de formats et contrôles périodiques",
    "reponse_f1": "Conserver uniquement le logiciel d'origine",
    "reponse_f2": "Ne jamais vérifier les supports",
    "explication": "La pérennité implique migration et surveillance."
  },
  {
    "id": 127,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive est déplacée vers une classe de stockage moins coûteuse.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 27\n\nRéférence exercice : BACKUP-127`",
    "reponse_v": "Configurer une politique de cycle de vie",
    "reponse_f1": "Créer une copie manuelle sans suivi",
    "reponse_f2": "Supprimer les métadonnées",
    "explication": "Le lifecycle automatise transition et expiration."
  },
  {
    "id": 128,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive doit être retrouvée rapidement malgré son ancienneté.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 28\n\nRéférence exercice : BACKUP-128`",
    "reponse_v": "Maintenir un index et des métadonnées de recherche",
    "reponse_f1": "Conserver uniquement le nom du fichier",
    "reponse_f2": "Supprimer tout catalogue",
    "explication": "L'archivage exige aussi la capacité de retrouver l'information."
  },
  {
    "id": 129,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne sauvegarde opérationnelle est confondue avec une archive probante.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 29\n\nRéférence exercice : BACKUP-129`",
    "reponse_v": "Distinguer les objectifs, durées et garanties",
    "reponse_f1": "Considérer les deux comme identiques",
    "reponse_f2": "Utiliser la sauvegarde la plus récente comme preuve",
    "explication": "Sauvegarde et archivage répondent à des finalités différentes."
  },
  {
    "id": 130,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nDes copies expirées restent physiquement présentes.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 30\n\nRéférence exercice : BACKUP-130`",
    "reponse_v": "Mettre en œuvre une purge vérifiable",
    "reponse_f1": "Les ignorer",
    "reponse_f2": "Ajouter une nouvelle couche de sauvegarde",
    "explication": "La politique de conservation doit inclure la suppression effective."
  },
  {
    "id": 131,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nLes sauvegardes quotidiennes doivent être conservées 30 jours, les mensuelles 12 mois.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 31\n\nRéférence exercice : BACKUP-131`",
    "reponse_v": "Définir une politique de rétention multi-niveaux",
    "reponse_f1": "Conserver toutes les copies indéfiniment",
    "reponse_f2": "Supprimer chaque sauvegarde après restauration",
    "explication": "Une politique multi-niveaux adapte la conservation à la fréquence."
  },
  {
    "id": 132,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUn document doit être conservé dix ans pour exigence réglementaire.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 32\n\nRéférence exercice : BACKUP-132`",
    "reponse_v": "Mettre en place un archivage long terme avec durée documentée",
    "reponse_f1": "Le conserver uniquement dans le cache",
    "reponse_f2": "Le garder sur le poste de l'utilisateur",
    "explication": "L'archivage réglementaire exige durée, intégrité et traçabilité."
  },
  {
    "id": 133,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne donnée n'a plus de valeur métier après cinq ans.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 33\n\nRéférence exercice : BACKUP-133`",
    "reponse_v": "Prévoir une destruction contrôlée à l'échéance",
    "reponse_f1": "La conserver sans limite",
    "reponse_f2": "La supprimer immédiatement",
    "explication": "La conservation doit être limitée au besoin réel."
  },
  {
    "id": 134,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUn fichier archivé ne doit plus être modifiable.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 34\n\nRéférence exercice : BACKUP-134`",
    "reponse_v": "Utiliser un stockage immuable ou WORM",
    "reponse_f1": "Utiliser un répertoire partagé en écriture",
    "reponse_f2": "Utiliser seulement une compression ZIP",
    "explication": "WORM empêche la modification pendant la durée définie."
  },
  {
    "id": 135,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nLa durée de conservation est suspendue par un contentieux.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 35\n\nRéférence exercice : BACKUP-135`",
    "reponse_v": "Appliquer un legal hold",
    "reponse_f1": "Supprimer les archives à la date initiale",
    "reponse_f2": "Réduire la rétention",
    "explication": "Le legal hold suspend la suppression normale."
  },
  {
    "id": 136,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive doit rester lisible pendant plusieurs décennies.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 36\n\nRéférence exercice : BACKUP-136`",
    "reponse_v": "Prévoir migration de formats et contrôles périodiques",
    "reponse_f1": "Conserver uniquement le logiciel d'origine",
    "reponse_f2": "Ne jamais vérifier les supports",
    "explication": "La pérennité implique migration et surveillance."
  },
  {
    "id": 137,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive est déplacée vers une classe de stockage moins coûteuse.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 37\n\nRéférence exercice : BACKUP-137`",
    "reponse_v": "Configurer une politique de cycle de vie",
    "reponse_f1": "Créer une copie manuelle sans suivi",
    "reponse_f2": "Supprimer les métadonnées",
    "explication": "Le lifecycle automatise transition et expiration."
  },
  {
    "id": 138,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive doit être retrouvée rapidement malgré son ancienneté.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 38\n\nRéférence exercice : BACKUP-138`",
    "reponse_v": "Maintenir un index et des métadonnées de recherche",
    "reponse_f1": "Conserver uniquement le nom du fichier",
    "reponse_f2": "Supprimer tout catalogue",
    "explication": "L'archivage exige aussi la capacité de retrouver l'information."
  },
  {
    "id": 139,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne sauvegarde opérationnelle est confondue avec une archive probante.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 39\n\nRéférence exercice : BACKUP-139`",
    "reponse_v": "Distinguer les objectifs, durées et garanties",
    "reponse_f1": "Considérer les deux comme identiques",
    "reponse_f2": "Utiliser la sauvegarde la plus récente comme preuve",
    "explication": "Sauvegarde et archivage répondent à des finalités différentes."
  },
  {
    "id": 140,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nDes copies expirées restent physiquement présentes.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 40\n\nRéférence exercice : BACKUP-140`",
    "reponse_v": "Mettre en œuvre une purge vérifiable",
    "reponse_f1": "Les ignorer",
    "reponse_f2": "Ajouter une nouvelle couche de sauvegarde",
    "explication": "La politique de conservation doit inclure la suppression effective."
  },
  {
    "id": 141,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nLes sauvegardes quotidiennes doivent être conservées 30 jours, les mensuelles 12 mois.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 41\n\nRéférence exercice : BACKUP-141`",
    "reponse_v": "Définir une politique de rétention multi-niveaux",
    "reponse_f1": "Conserver toutes les copies indéfiniment",
    "reponse_f2": "Supprimer chaque sauvegarde après restauration",
    "explication": "Une politique multi-niveaux adapte la conservation à la fréquence."
  },
  {
    "id": 142,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUn document doit être conservé dix ans pour exigence réglementaire.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 42\n\nRéférence exercice : BACKUP-142`",
    "reponse_v": "Mettre en place un archivage long terme avec durée documentée",
    "reponse_f1": "Le conserver uniquement dans le cache",
    "reponse_f2": "Le garder sur le poste de l'utilisateur",
    "explication": "L'archivage réglementaire exige durée, intégrité et traçabilité."
  },
  {
    "id": 143,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne donnée n'a plus de valeur métier après cinq ans.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 43\n\nRéférence exercice : BACKUP-143`",
    "reponse_v": "Prévoir une destruction contrôlée à l'échéance",
    "reponse_f1": "La conserver sans limite",
    "reponse_f2": "La supprimer immédiatement",
    "explication": "La conservation doit être limitée au besoin réel."
  },
  {
    "id": 144,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUn fichier archivé ne doit plus être modifiable.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 44\n\nRéférence exercice : BACKUP-144`",
    "reponse_v": "Utiliser un stockage immuable ou WORM",
    "reponse_f1": "Utiliser un répertoire partagé en écriture",
    "reponse_f2": "Utiliser seulement une compression ZIP",
    "explication": "WORM empêche la modification pendant la durée définie."
  },
  {
    "id": 145,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nLa durée de conservation est suspendue par un contentieux.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 45\n\nRéférence exercice : BACKUP-145`",
    "reponse_v": "Appliquer un legal hold",
    "reponse_f1": "Supprimer les archives à la date initiale",
    "reponse_f2": "Réduire la rétention",
    "explication": "Le legal hold suspend la suppression normale."
  },
  {
    "id": 146,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive doit rester lisible pendant plusieurs décennies.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 46\n\nRéférence exercice : BACKUP-146`",
    "reponse_v": "Prévoir migration de formats et contrôles périodiques",
    "reponse_f1": "Conserver uniquement le logiciel d'origine",
    "reponse_f2": "Ne jamais vérifier les supports",
    "explication": "La pérennité implique migration et surveillance."
  },
  {
    "id": 147,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive est déplacée vers une classe de stockage moins coûteuse.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 47\n\nRéférence exercice : BACKUP-147`",
    "reponse_v": "Configurer une politique de cycle de vie",
    "reponse_f1": "Créer une copie manuelle sans suivi",
    "reponse_f2": "Supprimer les métadonnées",
    "explication": "Le lifecycle automatise transition et expiration."
  },
  {
    "id": 148,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne archive doit être retrouvée rapidement malgré son ancienneté.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 48\n\nRéférence exercice : BACKUP-148`",
    "reponse_v": "Maintenir un index et des métadonnées de recherche",
    "reponse_f1": "Conserver uniquement le nom du fichier",
    "reponse_f2": "Supprimer tout catalogue",
    "explication": "L'archivage exige aussi la capacité de retrouver l'information."
  },
  {
    "id": 149,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nUne sauvegarde opérationnelle est confondue avec une archive probante.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 49\n\nRéférence exercice : BACKUP-149`",
    "reponse_v": "Distinguer les objectifs, durées et garanties",
    "reponse_f1": "Considérer les deux comme identiques",
    "reponse_f2": "Utiliser la sauvegarde la plus récente comme preuve",
    "explication": "Sauvegarde et archivage répondent à des finalités différentes."
  },
  {
    "id": 150,
    "question": "`Mini-TP Archivage — rétention et cycle de vie\n\nSituation :\nDes copies expirées restent physiquement présentes.\n\nQuelle mesure répond le mieux au besoin ?\n\nCas archivage : 50\n\nRéférence exercice : BACKUP-150`",
    "reponse_v": "Mettre en œuvre une purge vérifiable",
    "reponse_f1": "Les ignorer",
    "reponse_f2": "Ajouter une nouvelle couche de sauvegarde",
    "explication": "La politique de conservation doit inclure la suppression effective."
  },
  {
    "id": 151,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nL'organisation veut trois copies sur deux supports dont une hors site.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 01\n\nRéférence exercice : BACKUP-151`",
    "reponse_v": "Appliquer la règle 3-2-1",
    "reponse_f1": "Conserver trois copies sur le même disque",
    "reponse_f2": "Conserver une seule copie cloud",
    "explication": "La règle 3-2-1 réduit les risques communs."
  },
  {
    "id": 152,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne copie doit résister à un ransomware compromettant l'annuaire.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 02\n\nRéférence exercice : BACKUP-152`",
    "reponse_v": "Conserver une copie isolée ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture permanente",
    "reponse_f2": "Partager le même compte administrateur",
    "explication": "L'isolation réduit le risque de chiffrement simultané."
  },
  {
    "id": 153,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nDes volumes massifs doivent être conservés longtemps à faible coût.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 03\n\nRéférence exercice : BACKUP-153`",
    "reponse_v": "Utiliser des bandes ou une classe d'archive adaptée",
    "reponse_f1": "Utiliser uniquement du SSD haute performance",
    "reponse_f2": "Conserver les données en RAM",
    "explication": "Les supports froids sont adaptés au long terme."
  },
  {
    "id": 154,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne bande est stockée hors site.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 04\n\nRéférence exercice : BACKUP-154`",
    "reponse_v": "Chiffrer la bande et tracer sa chaîne de garde",
    "reponse_f1": "La laisser non chiffrée",
    "reponse_f2": "Supprimer son étiquette",
    "explication": "Le transport hors site exige confidentialité et traçabilité."
  },
  {
    "id": 155,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne réplication synchrone existe entre deux baies.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 05\n\nRéférence exercice : BACKUP-155`",
    "reponse_v": "Elle ne remplace pas une sauvegarde versionnée",
    "reponse_f1": "Elle protège toujours contre les suppressions logiques",
    "reponse_f2": "Elle constitue automatiquement une archive",
    "explication": "La réplication propage aussi erreurs et suppressions."
  },
  {
    "id": 156,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn snapshot reste sur la même baie que la production.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 06\n\nRéférence exercice : BACKUP-156`",
    "reponse_v": "Il ne protège pas contre la perte totale de la baie",
    "reponse_f1": "Il est toujours une copie hors site",
    "reponse_f2": "Il garantit l'archivage légal",
    "explication": "Un snapshot local partage certains risques avec la source."
  },
  {
    "id": 157,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn dépôt cloud est accessible avec les mêmes identifiants que la production.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 07\n\nRéférence exercice : BACKUP-157`",
    "reponse_v": "Séparer les comptes, rôles et domaines d'administration",
    "reponse_f1": "Conserver les mêmes privilèges globaux",
    "reponse_f2": "Rendre le bucket public",
    "explication": "La séparation administrative limite l'impact d'une compromission."
  },
  {
    "id": 158,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn objet sauvegardé doit être verrouillé pour une période donnée.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 08\n\nRéférence exercice : BACKUP-158`",
    "reponse_v": "Utiliser object lock avec rétention",
    "reponse_f1": "Utiliser un simple tag",
    "reponse_f2": "Utiliser uniquement la compression",
    "explication": "Object lock impose une immutabilité temporelle."
  },
  {
    "id": 159,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne bande ancienne doit être relue avant expiration du support.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 09\n\nRéférence exercice : BACKUP-159`",
    "reponse_v": "Planifier des tests de lecture et migrations",
    "reponse_f1": "Attendre l'incident",
    "reponse_f2": "Supprimer l'inventaire",
    "explication": "La fiabilité des supports doit être contrôlée périodiquement."
  },
  {
    "id": 160,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne copie hors site a un délai de récupération de plusieurs jours.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 10\n\nRéférence exercice : BACKUP-160`",
    "reponse_v": "Vérifier sa compatibilité avec le RTO",
    "reponse_f1": "Considérer uniquement son coût",
    "reponse_f2": "Ignorer les délais de rappel",
    "explication": "Le support choisi doit respecter les objectifs de reprise."
  },
  {
    "id": 161,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nL'organisation veut trois copies sur deux supports dont une hors site.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 11\n\nRéférence exercice : BACKUP-161`",
    "reponse_v": "Appliquer la règle 3-2-1",
    "reponse_f1": "Conserver trois copies sur le même disque",
    "reponse_f2": "Conserver une seule copie cloud",
    "explication": "La règle 3-2-1 réduit les risques communs."
  },
  {
    "id": 162,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne copie doit résister à un ransomware compromettant l'annuaire.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 12\n\nRéférence exercice : BACKUP-162`",
    "reponse_v": "Conserver une copie isolée ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture permanente",
    "reponse_f2": "Partager le même compte administrateur",
    "explication": "L'isolation réduit le risque de chiffrement simultané."
  },
  {
    "id": 163,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nDes volumes massifs doivent être conservés longtemps à faible coût.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 13\n\nRéférence exercice : BACKUP-163`",
    "reponse_v": "Utiliser des bandes ou une classe d'archive adaptée",
    "reponse_f1": "Utiliser uniquement du SSD haute performance",
    "reponse_f2": "Conserver les données en RAM",
    "explication": "Les supports froids sont adaptés au long terme."
  },
  {
    "id": 164,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne bande est stockée hors site.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 14\n\nRéférence exercice : BACKUP-164`",
    "reponse_v": "Chiffrer la bande et tracer sa chaîne de garde",
    "reponse_f1": "La laisser non chiffrée",
    "reponse_f2": "Supprimer son étiquette",
    "explication": "Le transport hors site exige confidentialité et traçabilité."
  },
  {
    "id": 165,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne réplication synchrone existe entre deux baies.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 15\n\nRéférence exercice : BACKUP-165`",
    "reponse_v": "Elle ne remplace pas une sauvegarde versionnée",
    "reponse_f1": "Elle protège toujours contre les suppressions logiques",
    "reponse_f2": "Elle constitue automatiquement une archive",
    "explication": "La réplication propage aussi erreurs et suppressions."
  },
  {
    "id": 166,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn snapshot reste sur la même baie que la production.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 16\n\nRéférence exercice : BACKUP-166`",
    "reponse_v": "Il ne protège pas contre la perte totale de la baie",
    "reponse_f1": "Il est toujours une copie hors site",
    "reponse_f2": "Il garantit l'archivage légal",
    "explication": "Un snapshot local partage certains risques avec la source."
  },
  {
    "id": 167,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn dépôt cloud est accessible avec les mêmes identifiants que la production.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 17\n\nRéférence exercice : BACKUP-167`",
    "reponse_v": "Séparer les comptes, rôles et domaines d'administration",
    "reponse_f1": "Conserver les mêmes privilèges globaux",
    "reponse_f2": "Rendre le bucket public",
    "explication": "La séparation administrative limite l'impact d'une compromission."
  },
  {
    "id": 168,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn objet sauvegardé doit être verrouillé pour une période donnée.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 18\n\nRéférence exercice : BACKUP-168`",
    "reponse_v": "Utiliser object lock avec rétention",
    "reponse_f1": "Utiliser un simple tag",
    "reponse_f2": "Utiliser uniquement la compression",
    "explication": "Object lock impose une immutabilité temporelle."
  },
  {
    "id": 169,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne bande ancienne doit être relue avant expiration du support.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 19\n\nRéférence exercice : BACKUP-169`",
    "reponse_v": "Planifier des tests de lecture et migrations",
    "reponse_f1": "Attendre l'incident",
    "reponse_f2": "Supprimer l'inventaire",
    "explication": "La fiabilité des supports doit être contrôlée périodiquement."
  },
  {
    "id": 170,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne copie hors site a un délai de récupération de plusieurs jours.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 20\n\nRéférence exercice : BACKUP-170`",
    "reponse_v": "Vérifier sa compatibilité avec le RTO",
    "reponse_f1": "Considérer uniquement son coût",
    "reponse_f2": "Ignorer les délais de rappel",
    "explication": "Le support choisi doit respecter les objectifs de reprise."
  },
  {
    "id": 171,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nL'organisation veut trois copies sur deux supports dont une hors site.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 21\n\nRéférence exercice : BACKUP-171`",
    "reponse_v": "Appliquer la règle 3-2-1",
    "reponse_f1": "Conserver trois copies sur le même disque",
    "reponse_f2": "Conserver une seule copie cloud",
    "explication": "La règle 3-2-1 réduit les risques communs."
  },
  {
    "id": 172,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne copie doit résister à un ransomware compromettant l'annuaire.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 22\n\nRéférence exercice : BACKUP-172`",
    "reponse_v": "Conserver une copie isolée ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture permanente",
    "reponse_f2": "Partager le même compte administrateur",
    "explication": "L'isolation réduit le risque de chiffrement simultané."
  },
  {
    "id": 173,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nDes volumes massifs doivent être conservés longtemps à faible coût.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 23\n\nRéférence exercice : BACKUP-173`",
    "reponse_v": "Utiliser des bandes ou une classe d'archive adaptée",
    "reponse_f1": "Utiliser uniquement du SSD haute performance",
    "reponse_f2": "Conserver les données en RAM",
    "explication": "Les supports froids sont adaptés au long terme."
  },
  {
    "id": 174,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne bande est stockée hors site.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 24\n\nRéférence exercice : BACKUP-174`",
    "reponse_v": "Chiffrer la bande et tracer sa chaîne de garde",
    "reponse_f1": "La laisser non chiffrée",
    "reponse_f2": "Supprimer son étiquette",
    "explication": "Le transport hors site exige confidentialité et traçabilité."
  },
  {
    "id": 175,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne réplication synchrone existe entre deux baies.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 25\n\nRéférence exercice : BACKUP-175`",
    "reponse_v": "Elle ne remplace pas une sauvegarde versionnée",
    "reponse_f1": "Elle protège toujours contre les suppressions logiques",
    "reponse_f2": "Elle constitue automatiquement une archive",
    "explication": "La réplication propage aussi erreurs et suppressions."
  },
  {
    "id": 176,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn snapshot reste sur la même baie que la production.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 26\n\nRéférence exercice : BACKUP-176`",
    "reponse_v": "Il ne protège pas contre la perte totale de la baie",
    "reponse_f1": "Il est toujours une copie hors site",
    "reponse_f2": "Il garantit l'archivage légal",
    "explication": "Un snapshot local partage certains risques avec la source."
  },
  {
    "id": 177,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn dépôt cloud est accessible avec les mêmes identifiants que la production.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 27\n\nRéférence exercice : BACKUP-177`",
    "reponse_v": "Séparer les comptes, rôles et domaines d'administration",
    "reponse_f1": "Conserver les mêmes privilèges globaux",
    "reponse_f2": "Rendre le bucket public",
    "explication": "La séparation administrative limite l'impact d'une compromission."
  },
  {
    "id": 178,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn objet sauvegardé doit être verrouillé pour une période donnée.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 28\n\nRéférence exercice : BACKUP-178`",
    "reponse_v": "Utiliser object lock avec rétention",
    "reponse_f1": "Utiliser un simple tag",
    "reponse_f2": "Utiliser uniquement la compression",
    "explication": "Object lock impose une immutabilité temporelle."
  },
  {
    "id": 179,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne bande ancienne doit être relue avant expiration du support.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 29\n\nRéférence exercice : BACKUP-179`",
    "reponse_v": "Planifier des tests de lecture et migrations",
    "reponse_f1": "Attendre l'incident",
    "reponse_f2": "Supprimer l'inventaire",
    "explication": "La fiabilité des supports doit être contrôlée périodiquement."
  },
  {
    "id": 180,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne copie hors site a un délai de récupération de plusieurs jours.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 30\n\nRéférence exercice : BACKUP-180`",
    "reponse_v": "Vérifier sa compatibilité avec le RTO",
    "reponse_f1": "Considérer uniquement son coût",
    "reponse_f2": "Ignorer les délais de rappel",
    "explication": "Le support choisi doit respecter les objectifs de reprise."
  },
  {
    "id": 181,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nL'organisation veut trois copies sur deux supports dont une hors site.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 31\n\nRéférence exercice : BACKUP-181`",
    "reponse_v": "Appliquer la règle 3-2-1",
    "reponse_f1": "Conserver trois copies sur le même disque",
    "reponse_f2": "Conserver une seule copie cloud",
    "explication": "La règle 3-2-1 réduit les risques communs."
  },
  {
    "id": 182,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne copie doit résister à un ransomware compromettant l'annuaire.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 32\n\nRéférence exercice : BACKUP-182`",
    "reponse_v": "Conserver une copie isolée ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture permanente",
    "reponse_f2": "Partager le même compte administrateur",
    "explication": "L'isolation réduit le risque de chiffrement simultané."
  },
  {
    "id": 183,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nDes volumes massifs doivent être conservés longtemps à faible coût.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 33\n\nRéférence exercice : BACKUP-183`",
    "reponse_v": "Utiliser des bandes ou une classe d'archive adaptée",
    "reponse_f1": "Utiliser uniquement du SSD haute performance",
    "reponse_f2": "Conserver les données en RAM",
    "explication": "Les supports froids sont adaptés au long terme."
  },
  {
    "id": 184,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne bande est stockée hors site.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 34\n\nRéférence exercice : BACKUP-184`",
    "reponse_v": "Chiffrer la bande et tracer sa chaîne de garde",
    "reponse_f1": "La laisser non chiffrée",
    "reponse_f2": "Supprimer son étiquette",
    "explication": "Le transport hors site exige confidentialité et traçabilité."
  },
  {
    "id": 185,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne réplication synchrone existe entre deux baies.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 35\n\nRéférence exercice : BACKUP-185`",
    "reponse_v": "Elle ne remplace pas une sauvegarde versionnée",
    "reponse_f1": "Elle protège toujours contre les suppressions logiques",
    "reponse_f2": "Elle constitue automatiquement une archive",
    "explication": "La réplication propage aussi erreurs et suppressions."
  },
  {
    "id": 186,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn snapshot reste sur la même baie que la production.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 36\n\nRéférence exercice : BACKUP-186`",
    "reponse_v": "Il ne protège pas contre la perte totale de la baie",
    "reponse_f1": "Il est toujours une copie hors site",
    "reponse_f2": "Il garantit l'archivage légal",
    "explication": "Un snapshot local partage certains risques avec la source."
  },
  {
    "id": 187,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn dépôt cloud est accessible avec les mêmes identifiants que la production.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 37\n\nRéférence exercice : BACKUP-187`",
    "reponse_v": "Séparer les comptes, rôles et domaines d'administration",
    "reponse_f1": "Conserver les mêmes privilèges globaux",
    "reponse_f2": "Rendre le bucket public",
    "explication": "La séparation administrative limite l'impact d'une compromission."
  },
  {
    "id": 188,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn objet sauvegardé doit être verrouillé pour une période donnée.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 38\n\nRéférence exercice : BACKUP-188`",
    "reponse_v": "Utiliser object lock avec rétention",
    "reponse_f1": "Utiliser un simple tag",
    "reponse_f2": "Utiliser uniquement la compression",
    "explication": "Object lock impose une immutabilité temporelle."
  },
  {
    "id": 189,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne bande ancienne doit être relue avant expiration du support.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 39\n\nRéférence exercice : BACKUP-189`",
    "reponse_v": "Planifier des tests de lecture et migrations",
    "reponse_f1": "Attendre l'incident",
    "reponse_f2": "Supprimer l'inventaire",
    "explication": "La fiabilité des supports doit être contrôlée périodiquement."
  },
  {
    "id": 190,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne copie hors site a un délai de récupération de plusieurs jours.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 40\n\nRéférence exercice : BACKUP-190`",
    "reponse_v": "Vérifier sa compatibilité avec le RTO",
    "reponse_f1": "Considérer uniquement son coût",
    "reponse_f2": "Ignorer les délais de rappel",
    "explication": "Le support choisi doit respecter les objectifs de reprise."
  },
  {
    "id": 191,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nL'organisation veut trois copies sur deux supports dont une hors site.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 41\n\nRéférence exercice : BACKUP-191`",
    "reponse_v": "Appliquer la règle 3-2-1",
    "reponse_f1": "Conserver trois copies sur le même disque",
    "reponse_f2": "Conserver une seule copie cloud",
    "explication": "La règle 3-2-1 réduit les risques communs."
  },
  {
    "id": 192,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne copie doit résister à un ransomware compromettant l'annuaire.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 42\n\nRéférence exercice : BACKUP-192`",
    "reponse_v": "Conserver une copie isolée ou immuable",
    "reponse_f1": "Monter toutes les sauvegardes en écriture permanente",
    "reponse_f2": "Partager le même compte administrateur",
    "explication": "L'isolation réduit le risque de chiffrement simultané."
  },
  {
    "id": 193,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nDes volumes massifs doivent être conservés longtemps à faible coût.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 43\n\nRéférence exercice : BACKUP-193`",
    "reponse_v": "Utiliser des bandes ou une classe d'archive adaptée",
    "reponse_f1": "Utiliser uniquement du SSD haute performance",
    "reponse_f2": "Conserver les données en RAM",
    "explication": "Les supports froids sont adaptés au long terme."
  },
  {
    "id": 194,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne bande est stockée hors site.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 44\n\nRéférence exercice : BACKUP-194`",
    "reponse_v": "Chiffrer la bande et tracer sa chaîne de garde",
    "reponse_f1": "La laisser non chiffrée",
    "reponse_f2": "Supprimer son étiquette",
    "explication": "Le transport hors site exige confidentialité et traçabilité."
  },
  {
    "id": 195,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne réplication synchrone existe entre deux baies.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 45\n\nRéférence exercice : BACKUP-195`",
    "reponse_v": "Elle ne remplace pas une sauvegarde versionnée",
    "reponse_f1": "Elle protège toujours contre les suppressions logiques",
    "reponse_f2": "Elle constitue automatiquement une archive",
    "explication": "La réplication propage aussi erreurs et suppressions."
  },
  {
    "id": 196,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn snapshot reste sur la même baie que la production.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 46\n\nRéférence exercice : BACKUP-196`",
    "reponse_v": "Il ne protège pas contre la perte totale de la baie",
    "reponse_f1": "Il est toujours une copie hors site",
    "reponse_f2": "Il garantit l'archivage légal",
    "explication": "Un snapshot local partage certains risques avec la source."
  },
  {
    "id": 197,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn dépôt cloud est accessible avec les mêmes identifiants que la production.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 47\n\nRéférence exercice : BACKUP-197`",
    "reponse_v": "Séparer les comptes, rôles et domaines d'administration",
    "reponse_f1": "Conserver les mêmes privilèges globaux",
    "reponse_f2": "Rendre le bucket public",
    "explication": "La séparation administrative limite l'impact d'une compromission."
  },
  {
    "id": 198,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUn objet sauvegardé doit être verrouillé pour une période donnée.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 48\n\nRéférence exercice : BACKUP-198`",
    "reponse_v": "Utiliser object lock avec rétention",
    "reponse_f1": "Utiliser un simple tag",
    "reponse_f2": "Utiliser uniquement la compression",
    "explication": "Object lock impose une immutabilité temporelle."
  },
  {
    "id": 199,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne bande ancienne doit être relue avant expiration du support.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 49\n\nRéférence exercice : BACKUP-199`",
    "reponse_v": "Planifier des tests de lecture et migrations",
    "reponse_f1": "Attendre l'incident",
    "reponse_f2": "Supprimer l'inventaire",
    "explication": "La fiabilité des supports doit être contrôlée périodiquement."
  },
  {
    "id": 200,
    "question": "`Mini-TP Sauvegarde — supports et résilience\n\nContexte :\nUne copie hors site a un délai de récupération de plusieurs jours.\n\nQuelle analyse ou architecture est la plus correcte ?\n\nCas support : 50\n\nRéférence exercice : BACKUP-200`",
    "reponse_v": "Vérifier sa compatibilité avec le RTO",
    "reponse_f1": "Considérer uniquement son coût",
    "reponse_f2": "Ignorer les délais de rappel",
    "explication": "Le support choisi doit respecter les objectifs de reprise."
  },
  {
    "id": 201,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes sauvegardes contiennent des données sensibles.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 01\n\nRéférence exercice : BACKUP-201`",
    "reponse_v": "Chiffrer en transit et au repos",
    "reponse_f1": "Compresser uniquement",
    "reponse_f2": "Masquer les noms de fichiers",
    "explication": "Le chiffrement protège la confidentialité."
  },
  {
    "id": 202,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLa clé de chiffrement est stockée avec les sauvegardes sans protection.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 02\n\nRéférence exercice : BACKUP-202`",
    "reponse_v": "Séparer et sécuriser la gestion des clés",
    "reponse_f1": "Conserver la clé dans le même fichier",
    "reponse_f2": "Publier la clé dans la documentation",
    "explication": "La séparation des clés est essentielle."
  },
  {
    "id": 203,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUne sauvegarde doit être vérifiée contre la corruption.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 03\n\nRéférence exercice : BACKUP-203`",
    "reponse_v": "Calculer et contrôler des sommes d'intégrité",
    "reponse_f1": "Vérifier uniquement la taille",
    "reponse_f2": "Renommer le fichier",
    "explication": "Les checksums détectent les altérations."
  },
  {
    "id": 204,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn compte de sauvegarde possède des droits administrateur sur tout le SI.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 04\n\nRéférence exercice : BACKUP-204`",
    "reponse_v": "Réduire ses privilèges au strict nécessaire",
    "reponse_f1": "Conserver les droits pour simplifier",
    "reponse_f2": "Partager ce compte",
    "explication": "Le moindre privilège limite l'impact d'une compromission."
  },
  {
    "id": 205,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes suppressions de sauvegardes doivent être tracées.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 05\n\nRéférence exercice : BACKUP-205`",
    "reponse_v": "Activer l'audit et les journaux immuables",
    "reponse_f1": "Désactiver les logs",
    "reponse_f2": "Utiliser seulement les logs locaux de l'attaquant",
    "explication": "Les événements critiques doivent être audités."
  },
  {
    "id": 206,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn opérateur peut modifier seul la rétention et supprimer les copies.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 06\n\nRéférence exercice : BACKUP-206`",
    "reponse_v": "Mettre en place une séparation des rôles",
    "reponse_f1": "Accorder encore plus de droits",
    "reponse_f2": "Supprimer l'authentification forte",
    "explication": "La séparation des fonctions réduit les abus."
  },
  {
    "id": 207,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUne restauration est demandée par un utilisateur non autorisé.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 07\n\nRéférence exercice : BACKUP-207`",
    "reponse_v": "Vérifier l'identité et l'autorisation avant restauration",
    "reponse_f1": "Restaurer immédiatement",
    "reponse_f2": "Envoyer directement l'archive par e-mail",
    "explication": "La restauration peut exposer des données sensibles."
  },
  {
    "id": 208,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn ransomware tente d'effacer les sauvegardes.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 08\n\nRéférence exercice : BACKUP-208`",
    "reponse_v": "Utiliser immutabilité, MFA et restrictions de suppression",
    "reponse_f1": "Désactiver les alertes",
    "reponse_f2": "Monter toutes les copies en écriture",
    "explication": "Plusieurs contrôles complémentaires sont nécessaires."
  },
  {
    "id": 209,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLa sauvegarde d'une base est cohérente au niveau fichier mais pas applicatif.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 09\n\nRéférence exercice : BACKUP-209`",
    "reponse_v": "Utiliser une sauvegarde application-consistent",
    "reponse_f1": "Ignorer les transactions en cours",
    "reponse_f2": "Copier uniquement les fichiers ouverts",
    "explication": "La cohérence applicative exige coordination avec l'application."
  },
  {
    "id": 210,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes journaux de sauvegarde signalent des erreurs récurrentes.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 10\n\nRéférence exercice : BACKUP-210`",
    "reponse_v": "Déclencher une investigation et corriger la cause",
    "reponse_f1": "Masquer les alertes",
    "reponse_f2": "Considérer les jobs comme réussis",
    "explication": "Une sauvegarde en erreur ne doit pas être supposée exploitable."
  },
  {
    "id": 211,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes sauvegardes contiennent des données sensibles.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 11\n\nRéférence exercice : BACKUP-211`",
    "reponse_v": "Chiffrer en transit et au repos",
    "reponse_f1": "Compresser uniquement",
    "reponse_f2": "Masquer les noms de fichiers",
    "explication": "Le chiffrement protège la confidentialité."
  },
  {
    "id": 212,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLa clé de chiffrement est stockée avec les sauvegardes sans protection.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 12\n\nRéférence exercice : BACKUP-212`",
    "reponse_v": "Séparer et sécuriser la gestion des clés",
    "reponse_f1": "Conserver la clé dans le même fichier",
    "reponse_f2": "Publier la clé dans la documentation",
    "explication": "La séparation des clés est essentielle."
  },
  {
    "id": 213,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUne sauvegarde doit être vérifiée contre la corruption.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 13\n\nRéférence exercice : BACKUP-213`",
    "reponse_v": "Calculer et contrôler des sommes d'intégrité",
    "reponse_f1": "Vérifier uniquement la taille",
    "reponse_f2": "Renommer le fichier",
    "explication": "Les checksums détectent les altérations."
  },
  {
    "id": 214,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn compte de sauvegarde possède des droits administrateur sur tout le SI.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 14\n\nRéférence exercice : BACKUP-214`",
    "reponse_v": "Réduire ses privilèges au strict nécessaire",
    "reponse_f1": "Conserver les droits pour simplifier",
    "reponse_f2": "Partager ce compte",
    "explication": "Le moindre privilège limite l'impact d'une compromission."
  },
  {
    "id": 215,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes suppressions de sauvegardes doivent être tracées.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 15\n\nRéférence exercice : BACKUP-215`",
    "reponse_v": "Activer l'audit et les journaux immuables",
    "reponse_f1": "Désactiver les logs",
    "reponse_f2": "Utiliser seulement les logs locaux de l'attaquant",
    "explication": "Les événements critiques doivent être audités."
  },
  {
    "id": 216,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn opérateur peut modifier seul la rétention et supprimer les copies.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 16\n\nRéférence exercice : BACKUP-216`",
    "reponse_v": "Mettre en place une séparation des rôles",
    "reponse_f1": "Accorder encore plus de droits",
    "reponse_f2": "Supprimer l'authentification forte",
    "explication": "La séparation des fonctions réduit les abus."
  },
  {
    "id": 217,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUne restauration est demandée par un utilisateur non autorisé.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 17\n\nRéférence exercice : BACKUP-217`",
    "reponse_v": "Vérifier l'identité et l'autorisation avant restauration",
    "reponse_f1": "Restaurer immédiatement",
    "reponse_f2": "Envoyer directement l'archive par e-mail",
    "explication": "La restauration peut exposer des données sensibles."
  },
  {
    "id": 218,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn ransomware tente d'effacer les sauvegardes.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 18\n\nRéférence exercice : BACKUP-218`",
    "reponse_v": "Utiliser immutabilité, MFA et restrictions de suppression",
    "reponse_f1": "Désactiver les alertes",
    "reponse_f2": "Monter toutes les copies en écriture",
    "explication": "Plusieurs contrôles complémentaires sont nécessaires."
  },
  {
    "id": 219,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLa sauvegarde d'une base est cohérente au niveau fichier mais pas applicatif.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 19\n\nRéférence exercice : BACKUP-219`",
    "reponse_v": "Utiliser une sauvegarde application-consistent",
    "reponse_f1": "Ignorer les transactions en cours",
    "reponse_f2": "Copier uniquement les fichiers ouverts",
    "explication": "La cohérence applicative exige coordination avec l'application."
  },
  {
    "id": 220,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes journaux de sauvegarde signalent des erreurs récurrentes.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 20\n\nRéférence exercice : BACKUP-220`",
    "reponse_v": "Déclencher une investigation et corriger la cause",
    "reponse_f1": "Masquer les alertes",
    "reponse_f2": "Considérer les jobs comme réussis",
    "explication": "Une sauvegarde en erreur ne doit pas être supposée exploitable."
  },
  {
    "id": 221,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes sauvegardes contiennent des données sensibles.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 21\n\nRéférence exercice : BACKUP-221`",
    "reponse_v": "Chiffrer en transit et au repos",
    "reponse_f1": "Compresser uniquement",
    "reponse_f2": "Masquer les noms de fichiers",
    "explication": "Le chiffrement protège la confidentialité."
  },
  {
    "id": 222,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLa clé de chiffrement est stockée avec les sauvegardes sans protection.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 22\n\nRéférence exercice : BACKUP-222`",
    "reponse_v": "Séparer et sécuriser la gestion des clés",
    "reponse_f1": "Conserver la clé dans le même fichier",
    "reponse_f2": "Publier la clé dans la documentation",
    "explication": "La séparation des clés est essentielle."
  },
  {
    "id": 223,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUne sauvegarde doit être vérifiée contre la corruption.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 23\n\nRéférence exercice : BACKUP-223`",
    "reponse_v": "Calculer et contrôler des sommes d'intégrité",
    "reponse_f1": "Vérifier uniquement la taille",
    "reponse_f2": "Renommer le fichier",
    "explication": "Les checksums détectent les altérations."
  },
  {
    "id": 224,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn compte de sauvegarde possède des droits administrateur sur tout le SI.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 24\n\nRéférence exercice : BACKUP-224`",
    "reponse_v": "Réduire ses privilèges au strict nécessaire",
    "reponse_f1": "Conserver les droits pour simplifier",
    "reponse_f2": "Partager ce compte",
    "explication": "Le moindre privilège limite l'impact d'une compromission."
  },
  {
    "id": 225,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes suppressions de sauvegardes doivent être tracées.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 25\n\nRéférence exercice : BACKUP-225`",
    "reponse_v": "Activer l'audit et les journaux immuables",
    "reponse_f1": "Désactiver les logs",
    "reponse_f2": "Utiliser seulement les logs locaux de l'attaquant",
    "explication": "Les événements critiques doivent être audités."
  },
  {
    "id": 226,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn opérateur peut modifier seul la rétention et supprimer les copies.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 26\n\nRéférence exercice : BACKUP-226`",
    "reponse_v": "Mettre en place une séparation des rôles",
    "reponse_f1": "Accorder encore plus de droits",
    "reponse_f2": "Supprimer l'authentification forte",
    "explication": "La séparation des fonctions réduit les abus."
  },
  {
    "id": 227,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUne restauration est demandée par un utilisateur non autorisé.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 27\n\nRéférence exercice : BACKUP-227`",
    "reponse_v": "Vérifier l'identité et l'autorisation avant restauration",
    "reponse_f1": "Restaurer immédiatement",
    "reponse_f2": "Envoyer directement l'archive par e-mail",
    "explication": "La restauration peut exposer des données sensibles."
  },
  {
    "id": 228,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn ransomware tente d'effacer les sauvegardes.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 28\n\nRéférence exercice : BACKUP-228`",
    "reponse_v": "Utiliser immutabilité, MFA et restrictions de suppression",
    "reponse_f1": "Désactiver les alertes",
    "reponse_f2": "Monter toutes les copies en écriture",
    "explication": "Plusieurs contrôles complémentaires sont nécessaires."
  },
  {
    "id": 229,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLa sauvegarde d'une base est cohérente au niveau fichier mais pas applicatif.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 29\n\nRéférence exercice : BACKUP-229`",
    "reponse_v": "Utiliser une sauvegarde application-consistent",
    "reponse_f1": "Ignorer les transactions en cours",
    "reponse_f2": "Copier uniquement les fichiers ouverts",
    "explication": "La cohérence applicative exige coordination avec l'application."
  },
  {
    "id": 230,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes journaux de sauvegarde signalent des erreurs récurrentes.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 30\n\nRéférence exercice : BACKUP-230`",
    "reponse_v": "Déclencher une investigation et corriger la cause",
    "reponse_f1": "Masquer les alertes",
    "reponse_f2": "Considérer les jobs comme réussis",
    "explication": "Une sauvegarde en erreur ne doit pas être supposée exploitable."
  },
  {
    "id": 231,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes sauvegardes contiennent des données sensibles.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 31\n\nRéférence exercice : BACKUP-231`",
    "reponse_v": "Chiffrer en transit et au repos",
    "reponse_f1": "Compresser uniquement",
    "reponse_f2": "Masquer les noms de fichiers",
    "explication": "Le chiffrement protège la confidentialité."
  },
  {
    "id": 232,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLa clé de chiffrement est stockée avec les sauvegardes sans protection.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 32\n\nRéférence exercice : BACKUP-232`",
    "reponse_v": "Séparer et sécuriser la gestion des clés",
    "reponse_f1": "Conserver la clé dans le même fichier",
    "reponse_f2": "Publier la clé dans la documentation",
    "explication": "La séparation des clés est essentielle."
  },
  {
    "id": 233,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUne sauvegarde doit être vérifiée contre la corruption.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 33\n\nRéférence exercice : BACKUP-233`",
    "reponse_v": "Calculer et contrôler des sommes d'intégrité",
    "reponse_f1": "Vérifier uniquement la taille",
    "reponse_f2": "Renommer le fichier",
    "explication": "Les checksums détectent les altérations."
  },
  {
    "id": 234,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn compte de sauvegarde possède des droits administrateur sur tout le SI.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 34\n\nRéférence exercice : BACKUP-234`",
    "reponse_v": "Réduire ses privilèges au strict nécessaire",
    "reponse_f1": "Conserver les droits pour simplifier",
    "reponse_f2": "Partager ce compte",
    "explication": "Le moindre privilège limite l'impact d'une compromission."
  },
  {
    "id": 235,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes suppressions de sauvegardes doivent être tracées.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 35\n\nRéférence exercice : BACKUP-235`",
    "reponse_v": "Activer l'audit et les journaux immuables",
    "reponse_f1": "Désactiver les logs",
    "reponse_f2": "Utiliser seulement les logs locaux de l'attaquant",
    "explication": "Les événements critiques doivent être audités."
  },
  {
    "id": 236,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn opérateur peut modifier seul la rétention et supprimer les copies.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 36\n\nRéférence exercice : BACKUP-236`",
    "reponse_v": "Mettre en place une séparation des rôles",
    "reponse_f1": "Accorder encore plus de droits",
    "reponse_f2": "Supprimer l'authentification forte",
    "explication": "La séparation des fonctions réduit les abus."
  },
  {
    "id": 237,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUne restauration est demandée par un utilisateur non autorisé.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 37\n\nRéférence exercice : BACKUP-237`",
    "reponse_v": "Vérifier l'identité et l'autorisation avant restauration",
    "reponse_f1": "Restaurer immédiatement",
    "reponse_f2": "Envoyer directement l'archive par e-mail",
    "explication": "La restauration peut exposer des données sensibles."
  },
  {
    "id": 238,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn ransomware tente d'effacer les sauvegardes.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 38\n\nRéférence exercice : BACKUP-238`",
    "reponse_v": "Utiliser immutabilité, MFA et restrictions de suppression",
    "reponse_f1": "Désactiver les alertes",
    "reponse_f2": "Monter toutes les copies en écriture",
    "explication": "Plusieurs contrôles complémentaires sont nécessaires."
  },
  {
    "id": 239,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLa sauvegarde d'une base est cohérente au niveau fichier mais pas applicatif.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 39\n\nRéférence exercice : BACKUP-239`",
    "reponse_v": "Utiliser une sauvegarde application-consistent",
    "reponse_f1": "Ignorer les transactions en cours",
    "reponse_f2": "Copier uniquement les fichiers ouverts",
    "explication": "La cohérence applicative exige coordination avec l'application."
  },
  {
    "id": 240,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes journaux de sauvegarde signalent des erreurs récurrentes.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 40\n\nRéférence exercice : BACKUP-240`",
    "reponse_v": "Déclencher une investigation et corriger la cause",
    "reponse_f1": "Masquer les alertes",
    "reponse_f2": "Considérer les jobs comme réussis",
    "explication": "Une sauvegarde en erreur ne doit pas être supposée exploitable."
  },
  {
    "id": 241,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes sauvegardes contiennent des données sensibles.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 41\n\nRéférence exercice : BACKUP-241`",
    "reponse_v": "Chiffrer en transit et au repos",
    "reponse_f1": "Compresser uniquement",
    "reponse_f2": "Masquer les noms de fichiers",
    "explication": "Le chiffrement protège la confidentialité."
  },
  {
    "id": 242,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLa clé de chiffrement est stockée avec les sauvegardes sans protection.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 42\n\nRéférence exercice : BACKUP-242`",
    "reponse_v": "Séparer et sécuriser la gestion des clés",
    "reponse_f1": "Conserver la clé dans le même fichier",
    "reponse_f2": "Publier la clé dans la documentation",
    "explication": "La séparation des clés est essentielle."
  },
  {
    "id": 243,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUne sauvegarde doit être vérifiée contre la corruption.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 43\n\nRéférence exercice : BACKUP-243`",
    "reponse_v": "Calculer et contrôler des sommes d'intégrité",
    "reponse_f1": "Vérifier uniquement la taille",
    "reponse_f2": "Renommer le fichier",
    "explication": "Les checksums détectent les altérations."
  },
  {
    "id": 244,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn compte de sauvegarde possède des droits administrateur sur tout le SI.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 44\n\nRéférence exercice : BACKUP-244`",
    "reponse_v": "Réduire ses privilèges au strict nécessaire",
    "reponse_f1": "Conserver les droits pour simplifier",
    "reponse_f2": "Partager ce compte",
    "explication": "Le moindre privilège limite l'impact d'une compromission."
  },
  {
    "id": 245,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes suppressions de sauvegardes doivent être tracées.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 45\n\nRéférence exercice : BACKUP-245`",
    "reponse_v": "Activer l'audit et les journaux immuables",
    "reponse_f1": "Désactiver les logs",
    "reponse_f2": "Utiliser seulement les logs locaux de l'attaquant",
    "explication": "Les événements critiques doivent être audités."
  },
  {
    "id": 246,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn opérateur peut modifier seul la rétention et supprimer les copies.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 46\n\nRéférence exercice : BACKUP-246`",
    "reponse_v": "Mettre en place une séparation des rôles",
    "reponse_f1": "Accorder encore plus de droits",
    "reponse_f2": "Supprimer l'authentification forte",
    "explication": "La séparation des fonctions réduit les abus."
  },
  {
    "id": 247,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUne restauration est demandée par un utilisateur non autorisé.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 47\n\nRéférence exercice : BACKUP-247`",
    "reponse_v": "Vérifier l'identité et l'autorisation avant restauration",
    "reponse_f1": "Restaurer immédiatement",
    "reponse_f2": "Envoyer directement l'archive par e-mail",
    "explication": "La restauration peut exposer des données sensibles."
  },
  {
    "id": 248,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nUn ransomware tente d'effacer les sauvegardes.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 48\n\nRéférence exercice : BACKUP-248`",
    "reponse_v": "Utiliser immutabilité, MFA et restrictions de suppression",
    "reponse_f1": "Désactiver les alertes",
    "reponse_f2": "Monter toutes les copies en écriture",
    "explication": "Plusieurs contrôles complémentaires sont nécessaires."
  },
  {
    "id": 249,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLa sauvegarde d'une base est cohérente au niveau fichier mais pas applicatif.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 49\n\nRéférence exercice : BACKUP-249`",
    "reponse_v": "Utiliser une sauvegarde application-consistent",
    "reponse_f1": "Ignorer les transactions en cours",
    "reponse_f2": "Copier uniquement les fichiers ouverts",
    "explication": "La cohérence applicative exige coordination avec l'application."
  },
  {
    "id": 250,
    "question": "`Mini-TP Sauvegarde — sécurité et intégrité\n\nSituation :\nLes journaux de sauvegarde signalent des erreurs récurrentes.\n\nQuelle mesure est la plus adaptée ?\n\nCas sécurité : 50\n\nRéférence exercice : BACKUP-250`",
    "reponse_v": "Déclencher une investigation et corriger la cause",
    "reponse_f1": "Masquer les alertes",
    "reponse_f2": "Considérer les jobs comme réussis",
    "explication": "Une sauvegarde en erreur ne doit pas être supposée exploitable."
  },
  {
    "id": 251,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde est marquée réussie mais jamais restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 01\n\nRéférence exercice : BACKUP-251`",
    "reponse_v": "Planifier des tests de restauration réguliers",
    "reponse_f1": "Considérer le succès du job comme preuve suffisante",
    "reponse_f2": "Supprimer les anciens rapports",
    "explication": "Seule une restauration valide réellement la sauvegarde."
  },
  {
    "id": 252,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne restauration doit retrouver l'état juste avant une erreur humaine.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 02\n\nRéférence exercice : BACKUP-252`",
    "reponse_v": "Utiliser une restauration à un point dans le temps",
    "reponse_f1": "Restaurer uniquement la dernière complète",
    "reponse_f2": "Répliquer l'erreur",
    "explication": "Le PITR permet de choisir un instant précis."
  },
  {
    "id": 253,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne chaîne incrémentale contient un incrément corrompu.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 03\n\nRéférence exercice : BACKUP-253`",
    "reponse_v": "La restauration au-delà de ce point peut échouer",
    "reponse_f1": "La chaîne reste toujours complète",
    "reponse_f2": "Seule la sauvegarde complète est affectée",
    "explication": "Les incréments suivants dépendent de la chaîne."
  },
  {
    "id": 254,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde différentielle du vendredi est restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 04\n\nRéférence exercice : BACKUP-254`",
    "reponse_v": "Il faut la dernière complète et la différentielle du vendredi",
    "reponse_f1": "Il faut toutes les différentielles de la semaine",
    "reponse_f2": "Il suffit de la différentielle seule",
    "explication": "Une différentielle contient tous les changements depuis la complète."
  },
  {
    "id": 255,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde incrémentale du vendredi est restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 05\n\nRéférence exercice : BACKUP-255`",
    "reponse_v": "Il faut la complète et tous les incréments nécessaires",
    "reponse_f1": "Il suffit du dernier incrément",
    "reponse_f2": "Il faut uniquement la différentielle du jeudi",
    "explication": "La restauration dépend de toute la chaîne incrémentale."
  },
  {
    "id": 256,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUn serveur doit être restauré sur un matériel différent.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 06\n\nRéférence exercice : BACKUP-256`",
    "reponse_v": "Vérifier la compatibilité bare-metal ou utiliser une restauration vers VM",
    "reponse_f1": "Supposer que tous les pilotes sont identiques",
    "reponse_f2": "Restaurer uniquement le nom d'hôte",
    "explication": "Le changement de matériel peut nécessiter adaptation des pilotes."
  },
  {
    "id": 257,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne restauration de base doit éviter les connexions utilisateurs pendant l'opération.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 07\n\nRéférence exercice : BACKUP-257`",
    "reponse_v": "Isoler la base et contrôler sa remise en service",
    "reponse_f1": "Laisser toutes les écritures actives",
    "reponse_f2": "Restaurer seulement les index",
    "explication": "Les écritures concurrentes peuvent compromettre la cohérence."
  },
  {
    "id": 258,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUn test de restauration utilise les données de production sensibles.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 08\n\nRéférence exercice : BACKUP-258`",
    "reponse_v": "Protéger l'environnement de test et limiter les accès",
    "reponse_f1": "Copier les données sur un poste personnel",
    "reponse_f2": "Rendre l'environnement public",
    "explication": "Les données restaurées restent soumises aux mêmes exigences de sécurité."
  },
  {
    "id": 259,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde logique SQL doit préserver schéma et données.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 09\n\nRéférence exercice : BACKUP-259`",
    "reponse_v": "Vérifier l'export des objets nécessaires et l'ordre de restauration",
    "reponse_f1": "Exporter uniquement quelques lignes",
    "reponse_f2": "Ignorer les contraintes et procédures",
    "explication": "Une restauration logique complète dépend de tous les objets requis."
  },
  {
    "id": 260,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nLes tests de restauration ne mesurent jamais leur durée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 10\n\nRéférence exercice : BACKUP-260`",
    "reponse_v": "Mesurer et comparer le temps réel au RTO",
    "reponse_f1": "Mesurer uniquement la taille du fichier",
    "reponse_f2": "Ignorer la durée tant que la restauration finit",
    "explication": "La conformité au RTO doit être démontrée."
  },
  {
    "id": 261,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde est marquée réussie mais jamais restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 11\n\nRéférence exercice : BACKUP-261`",
    "reponse_v": "Planifier des tests de restauration réguliers",
    "reponse_f1": "Considérer le succès du job comme preuve suffisante",
    "reponse_f2": "Supprimer les anciens rapports",
    "explication": "Seule une restauration valide réellement la sauvegarde."
  },
  {
    "id": 262,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne restauration doit retrouver l'état juste avant une erreur humaine.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 12\n\nRéférence exercice : BACKUP-262`",
    "reponse_v": "Utiliser une restauration à un point dans le temps",
    "reponse_f1": "Restaurer uniquement la dernière complète",
    "reponse_f2": "Répliquer l'erreur",
    "explication": "Le PITR permet de choisir un instant précis."
  },
  {
    "id": 263,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne chaîne incrémentale contient un incrément corrompu.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 13\n\nRéférence exercice : BACKUP-263`",
    "reponse_v": "La restauration au-delà de ce point peut échouer",
    "reponse_f1": "La chaîne reste toujours complète",
    "reponse_f2": "Seule la sauvegarde complète est affectée",
    "explication": "Les incréments suivants dépendent de la chaîne."
  },
  {
    "id": 264,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde différentielle du vendredi est restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 14\n\nRéférence exercice : BACKUP-264`",
    "reponse_v": "Il faut la dernière complète et la différentielle du vendredi",
    "reponse_f1": "Il faut toutes les différentielles de la semaine",
    "reponse_f2": "Il suffit de la différentielle seule",
    "explication": "Une différentielle contient tous les changements depuis la complète."
  },
  {
    "id": 265,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde incrémentale du vendredi est restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 15\n\nRéférence exercice : BACKUP-265`",
    "reponse_v": "Il faut la complète et tous les incréments nécessaires",
    "reponse_f1": "Il suffit du dernier incrément",
    "reponse_f2": "Il faut uniquement la différentielle du jeudi",
    "explication": "La restauration dépend de toute la chaîne incrémentale."
  },
  {
    "id": 266,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUn serveur doit être restauré sur un matériel différent.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 16\n\nRéférence exercice : BACKUP-266`",
    "reponse_v": "Vérifier la compatibilité bare-metal ou utiliser une restauration vers VM",
    "reponse_f1": "Supposer que tous les pilotes sont identiques",
    "reponse_f2": "Restaurer uniquement le nom d'hôte",
    "explication": "Le changement de matériel peut nécessiter adaptation des pilotes."
  },
  {
    "id": 267,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne restauration de base doit éviter les connexions utilisateurs pendant l'opération.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 17\n\nRéférence exercice : BACKUP-267`",
    "reponse_v": "Isoler la base et contrôler sa remise en service",
    "reponse_f1": "Laisser toutes les écritures actives",
    "reponse_f2": "Restaurer seulement les index",
    "explication": "Les écritures concurrentes peuvent compromettre la cohérence."
  },
  {
    "id": 268,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUn test de restauration utilise les données de production sensibles.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 18\n\nRéférence exercice : BACKUP-268`",
    "reponse_v": "Protéger l'environnement de test et limiter les accès",
    "reponse_f1": "Copier les données sur un poste personnel",
    "reponse_f2": "Rendre l'environnement public",
    "explication": "Les données restaurées restent soumises aux mêmes exigences de sécurité."
  },
  {
    "id": 269,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde logique SQL doit préserver schéma et données.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 19\n\nRéférence exercice : BACKUP-269`",
    "reponse_v": "Vérifier l'export des objets nécessaires et l'ordre de restauration",
    "reponse_f1": "Exporter uniquement quelques lignes",
    "reponse_f2": "Ignorer les contraintes et procédures",
    "explication": "Une restauration logique complète dépend de tous les objets requis."
  },
  {
    "id": 270,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nLes tests de restauration ne mesurent jamais leur durée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 20\n\nRéférence exercice : BACKUP-270`",
    "reponse_v": "Mesurer et comparer le temps réel au RTO",
    "reponse_f1": "Mesurer uniquement la taille du fichier",
    "reponse_f2": "Ignorer la durée tant que la restauration finit",
    "explication": "La conformité au RTO doit être démontrée."
  },
  {
    "id": 271,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde est marquée réussie mais jamais restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 21\n\nRéférence exercice : BACKUP-271`",
    "reponse_v": "Planifier des tests de restauration réguliers",
    "reponse_f1": "Considérer le succès du job comme preuve suffisante",
    "reponse_f2": "Supprimer les anciens rapports",
    "explication": "Seule une restauration valide réellement la sauvegarde."
  },
  {
    "id": 272,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne restauration doit retrouver l'état juste avant une erreur humaine.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 22\n\nRéférence exercice : BACKUP-272`",
    "reponse_v": "Utiliser une restauration à un point dans le temps",
    "reponse_f1": "Restaurer uniquement la dernière complète",
    "reponse_f2": "Répliquer l'erreur",
    "explication": "Le PITR permet de choisir un instant précis."
  },
  {
    "id": 273,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne chaîne incrémentale contient un incrément corrompu.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 23\n\nRéférence exercice : BACKUP-273`",
    "reponse_v": "La restauration au-delà de ce point peut échouer",
    "reponse_f1": "La chaîne reste toujours complète",
    "reponse_f2": "Seule la sauvegarde complète est affectée",
    "explication": "Les incréments suivants dépendent de la chaîne."
  },
  {
    "id": 274,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde différentielle du vendredi est restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 24\n\nRéférence exercice : BACKUP-274`",
    "reponse_v": "Il faut la dernière complète et la différentielle du vendredi",
    "reponse_f1": "Il faut toutes les différentielles de la semaine",
    "reponse_f2": "Il suffit de la différentielle seule",
    "explication": "Une différentielle contient tous les changements depuis la complète."
  },
  {
    "id": 275,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde incrémentale du vendredi est restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 25\n\nRéférence exercice : BACKUP-275`",
    "reponse_v": "Il faut la complète et tous les incréments nécessaires",
    "reponse_f1": "Il suffit du dernier incrément",
    "reponse_f2": "Il faut uniquement la différentielle du jeudi",
    "explication": "La restauration dépend de toute la chaîne incrémentale."
  },
  {
    "id": 276,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUn serveur doit être restauré sur un matériel différent.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 26\n\nRéférence exercice : BACKUP-276`",
    "reponse_v": "Vérifier la compatibilité bare-metal ou utiliser une restauration vers VM",
    "reponse_f1": "Supposer que tous les pilotes sont identiques",
    "reponse_f2": "Restaurer uniquement le nom d'hôte",
    "explication": "Le changement de matériel peut nécessiter adaptation des pilotes."
  },
  {
    "id": 277,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne restauration de base doit éviter les connexions utilisateurs pendant l'opération.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 27\n\nRéférence exercice : BACKUP-277`",
    "reponse_v": "Isoler la base et contrôler sa remise en service",
    "reponse_f1": "Laisser toutes les écritures actives",
    "reponse_f2": "Restaurer seulement les index",
    "explication": "Les écritures concurrentes peuvent compromettre la cohérence."
  },
  {
    "id": 278,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUn test de restauration utilise les données de production sensibles.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 28\n\nRéférence exercice : BACKUP-278`",
    "reponse_v": "Protéger l'environnement de test et limiter les accès",
    "reponse_f1": "Copier les données sur un poste personnel",
    "reponse_f2": "Rendre l'environnement public",
    "explication": "Les données restaurées restent soumises aux mêmes exigences de sécurité."
  },
  {
    "id": 279,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde logique SQL doit préserver schéma et données.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 29\n\nRéférence exercice : BACKUP-279`",
    "reponse_v": "Vérifier l'export des objets nécessaires et l'ordre de restauration",
    "reponse_f1": "Exporter uniquement quelques lignes",
    "reponse_f2": "Ignorer les contraintes et procédures",
    "explication": "Une restauration logique complète dépend de tous les objets requis."
  },
  {
    "id": 280,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nLes tests de restauration ne mesurent jamais leur durée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 30\n\nRéférence exercice : BACKUP-280`",
    "reponse_v": "Mesurer et comparer le temps réel au RTO",
    "reponse_f1": "Mesurer uniquement la taille du fichier",
    "reponse_f2": "Ignorer la durée tant que la restauration finit",
    "explication": "La conformité au RTO doit être démontrée."
  },
  {
    "id": 281,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde est marquée réussie mais jamais restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 31\n\nRéférence exercice : BACKUP-281`",
    "reponse_v": "Planifier des tests de restauration réguliers",
    "reponse_f1": "Considérer le succès du job comme preuve suffisante",
    "reponse_f2": "Supprimer les anciens rapports",
    "explication": "Seule une restauration valide réellement la sauvegarde."
  },
  {
    "id": 282,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne restauration doit retrouver l'état juste avant une erreur humaine.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 32\n\nRéférence exercice : BACKUP-282`",
    "reponse_v": "Utiliser une restauration à un point dans le temps",
    "reponse_f1": "Restaurer uniquement la dernière complète",
    "reponse_f2": "Répliquer l'erreur",
    "explication": "Le PITR permet de choisir un instant précis."
  },
  {
    "id": 283,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne chaîne incrémentale contient un incrément corrompu.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 33\n\nRéférence exercice : BACKUP-283`",
    "reponse_v": "La restauration au-delà de ce point peut échouer",
    "reponse_f1": "La chaîne reste toujours complète",
    "reponse_f2": "Seule la sauvegarde complète est affectée",
    "explication": "Les incréments suivants dépendent de la chaîne."
  },
  {
    "id": 284,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde différentielle du vendredi est restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 34\n\nRéférence exercice : BACKUP-284`",
    "reponse_v": "Il faut la dernière complète et la différentielle du vendredi",
    "reponse_f1": "Il faut toutes les différentielles de la semaine",
    "reponse_f2": "Il suffit de la différentielle seule",
    "explication": "Une différentielle contient tous les changements depuis la complète."
  },
  {
    "id": 285,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde incrémentale du vendredi est restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 35\n\nRéférence exercice : BACKUP-285`",
    "reponse_v": "Il faut la complète et tous les incréments nécessaires",
    "reponse_f1": "Il suffit du dernier incrément",
    "reponse_f2": "Il faut uniquement la différentielle du jeudi",
    "explication": "La restauration dépend de toute la chaîne incrémentale."
  },
  {
    "id": 286,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUn serveur doit être restauré sur un matériel différent.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 36\n\nRéférence exercice : BACKUP-286`",
    "reponse_v": "Vérifier la compatibilité bare-metal ou utiliser une restauration vers VM",
    "reponse_f1": "Supposer que tous les pilotes sont identiques",
    "reponse_f2": "Restaurer uniquement le nom d'hôte",
    "explication": "Le changement de matériel peut nécessiter adaptation des pilotes."
  },
  {
    "id": 287,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne restauration de base doit éviter les connexions utilisateurs pendant l'opération.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 37\n\nRéférence exercice : BACKUP-287`",
    "reponse_v": "Isoler la base et contrôler sa remise en service",
    "reponse_f1": "Laisser toutes les écritures actives",
    "reponse_f2": "Restaurer seulement les index",
    "explication": "Les écritures concurrentes peuvent compromettre la cohérence."
  },
  {
    "id": 288,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUn test de restauration utilise les données de production sensibles.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 38\n\nRéférence exercice : BACKUP-288`",
    "reponse_v": "Protéger l'environnement de test et limiter les accès",
    "reponse_f1": "Copier les données sur un poste personnel",
    "reponse_f2": "Rendre l'environnement public",
    "explication": "Les données restaurées restent soumises aux mêmes exigences de sécurité."
  },
  {
    "id": 289,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde logique SQL doit préserver schéma et données.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 39\n\nRéférence exercice : BACKUP-289`",
    "reponse_v": "Vérifier l'export des objets nécessaires et l'ordre de restauration",
    "reponse_f1": "Exporter uniquement quelques lignes",
    "reponse_f2": "Ignorer les contraintes et procédures",
    "explication": "Une restauration logique complète dépend de tous les objets requis."
  },
  {
    "id": 290,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nLes tests de restauration ne mesurent jamais leur durée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 40\n\nRéférence exercice : BACKUP-290`",
    "reponse_v": "Mesurer et comparer le temps réel au RTO",
    "reponse_f1": "Mesurer uniquement la taille du fichier",
    "reponse_f2": "Ignorer la durée tant que la restauration finit",
    "explication": "La conformité au RTO doit être démontrée."
  },
  {
    "id": 291,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde est marquée réussie mais jamais restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 41\n\nRéférence exercice : BACKUP-291`",
    "reponse_v": "Planifier des tests de restauration réguliers",
    "reponse_f1": "Considérer le succès du job comme preuve suffisante",
    "reponse_f2": "Supprimer les anciens rapports",
    "explication": "Seule une restauration valide réellement la sauvegarde."
  },
  {
    "id": 292,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne restauration doit retrouver l'état juste avant une erreur humaine.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 42\n\nRéférence exercice : BACKUP-292`",
    "reponse_v": "Utiliser une restauration à un point dans le temps",
    "reponse_f1": "Restaurer uniquement la dernière complète",
    "reponse_f2": "Répliquer l'erreur",
    "explication": "Le PITR permet de choisir un instant précis."
  },
  {
    "id": 293,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne chaîne incrémentale contient un incrément corrompu.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 43\n\nRéférence exercice : BACKUP-293`",
    "reponse_v": "La restauration au-delà de ce point peut échouer",
    "reponse_f1": "La chaîne reste toujours complète",
    "reponse_f2": "Seule la sauvegarde complète est affectée",
    "explication": "Les incréments suivants dépendent de la chaîne."
  },
  {
    "id": 294,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde différentielle du vendredi est restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 44\n\nRéférence exercice : BACKUP-294`",
    "reponse_v": "Il faut la dernière complète et la différentielle du vendredi",
    "reponse_f1": "Il faut toutes les différentielles de la semaine",
    "reponse_f2": "Il suffit de la différentielle seule",
    "explication": "Une différentielle contient tous les changements depuis la complète."
  },
  {
    "id": 295,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde incrémentale du vendredi est restaurée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 45\n\nRéférence exercice : BACKUP-295`",
    "reponse_v": "Il faut la complète et tous les incréments nécessaires",
    "reponse_f1": "Il suffit du dernier incrément",
    "reponse_f2": "Il faut uniquement la différentielle du jeudi",
    "explication": "La restauration dépend de toute la chaîne incrémentale."
  },
  {
    "id": 296,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUn serveur doit être restauré sur un matériel différent.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 46\n\nRéférence exercice : BACKUP-296`",
    "reponse_v": "Vérifier la compatibilité bare-metal ou utiliser une restauration vers VM",
    "reponse_f1": "Supposer que tous les pilotes sont identiques",
    "reponse_f2": "Restaurer uniquement le nom d'hôte",
    "explication": "Le changement de matériel peut nécessiter adaptation des pilotes."
  },
  {
    "id": 297,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne restauration de base doit éviter les connexions utilisateurs pendant l'opération.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 47\n\nRéférence exercice : BACKUP-297`",
    "reponse_v": "Isoler la base et contrôler sa remise en service",
    "reponse_f1": "Laisser toutes les écritures actives",
    "reponse_f2": "Restaurer seulement les index",
    "explication": "Les écritures concurrentes peuvent compromettre la cohérence."
  },
  {
    "id": 298,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUn test de restauration utilise les données de production sensibles.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 48\n\nRéférence exercice : BACKUP-298`",
    "reponse_v": "Protéger l'environnement de test et limiter les accès",
    "reponse_f1": "Copier les données sur un poste personnel",
    "reponse_f2": "Rendre l'environnement public",
    "explication": "Les données restaurées restent soumises aux mêmes exigences de sécurité."
  },
  {
    "id": 299,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nUne sauvegarde logique SQL doit préserver schéma et données.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 49\n\nRéférence exercice : BACKUP-299`",
    "reponse_v": "Vérifier l'export des objets nécessaires et l'ordre de restauration",
    "reponse_f1": "Exporter uniquement quelques lignes",
    "reponse_f2": "Ignorer les contraintes et procédures",
    "explication": "Une restauration logique complète dépend de tous les objets requis."
  },
  {
    "id": 300,
    "question": "`Mini-TP Sauvegarde — restauration et exploitation\n\nSituation :\nLes tests de restauration ne mesurent jamais leur durée.\n\nQuelle réponse est la plus correcte ?\n\nCas restauration : 50\n\nRéférence exercice : BACKUP-300`",
    "reponse_v": "Mesurer et comparer le temps réel au RTO",
    "reponse_f1": "Mesurer uniquement la taille du fichier",
    "reponse_f2": "Ignorer la durée tant que la restauration finit",
    "explication": "La conformité au RTO doit être démontrée."
  }
]
