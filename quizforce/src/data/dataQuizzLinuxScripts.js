export const dataQuizzLinuxScripts = [
  {
    id: 120,
    question:
      "Complétez la commande :\n\ncat /etc/passwd | _____ | wc -l\n\nObjectif : compter les utilisateurs utilisant le shell /bin/bash.",
    reponse_f1: "cut -d: -f1",
    reponse_v: "grep '/bin/bash'",
    reponse_f2: "sort",
  },
  {
    id: 121,
    question:
      "Complétez la commande :\n\nls -l | _____ | wc -l\n\nObjectif : compter uniquement les répertoires.",
    reponse_f1: "grep '^-'",
    reponse_v: "grep '^d'",
    reponse_f2: "grep '^l'",
  },
  {
    id: 122,
    question:
      "Complétez la commande :\n\nps -ef | _____ | wc -l\n\nObjectif : compter les processus Java.",
    reponse_f1: "sort",
    reponse_v: "grep java",
    reponse_f2: "uniq",
  },
  {
    id: 123,
    question:
      "Complétez la commande :\n\nfind . -name '*.log' _____\n\nObjectif : supprimer tous les fichiers .log trouvés.",
    reponse_f1: "| rm",
    reponse_v: "-delete",
    reponse_f2: "-remove",
  },
  {
    id: 124,
    question:
      "Complétez la commande :\n\ncat notes.txt | _____ | head -5\n\nObjectif : afficher les 5 meilleures notes.",
    reponse_f1: "sort",
    reponse_v: "sort -nr",
    reponse_f2: "uniq",
  },
  {
    id: 125,
    question:
      "Complétez la commande :\n\ncat /etc/passwd | _____\n\nObjectif : afficher uniquement les noms des utilisateurs.",
    reponse_f1: "grep root",
    reponse_v: "cut -d: -f1",
    reponse_f2: "wc -l",
  },
  {
    id: 126,
    question:
      "Complétez la commande :\n\nhistory | _____ | tail -10\n\nObjectif : afficher les 10 dernières commandes contenant 'git'.",
    reponse_f1: "cut -d' ' -f2",
    reponse_v: "grep git",
    reponse_f2: "uniq",
  },
  {
    id: 127,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ | wc -l\n\nObjectif : compter uniquement les fichiers Java.",
    reponse_f1: "sort",
    reponse_v: "grep '\\.java$'",
    reponse_f2: "uniq",
  },
  {
    id: 128,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____\n\nObjectif : afficher les 20 premières lignes.",
    reponse_f1: "tail -20",
    reponse_v: "head -20",
    reponse_f2: "wc -20",
  },
  {
    id: 129,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____\n\nObjectif : afficher les 15 dernières lignes.",
    reponse_f1: "head -15",
    reponse_v: "tail -15",
    reponse_f2: "sort -15",
  },
  {
    id: 130,
    question:
      "Complétez la commande :\n\ndu -sh * | _____\n\nObjectif : trier les répertoires du plus volumineux au plus petit.",
    reponse_f1: "sort",
    reponse_v: "sort -hr",
    reponse_f2: "uniq",
  },
  {
    id: 131,
    question:
      "Complétez la commande :\n\ncat fichier.csv | _____\n\nObjectif : afficher uniquement la première colonne (séparateur ';').",
    reponse_f1: "grep ';'",
    reponse_v: "cut -d';' -f1",
    reponse_f2: "awk '{print $2}'",
  },
  {
    id: 132,
    question:
      "Complétez la commande :\n\ngrep -r 'TODO' . | _____\n\nObjectif : compter le nombre d'occurrences.",
    reponse_f1: "sort",
    reponse_v: "wc -l",
    reponse_f2: "head",
  },
  {
    id: 133,
    question:
      "Complétez la commande :\n\nfind . -type f | _____\n\nObjectif : afficher uniquement les fichiers PDF.",
    reponse_f1: "grep txt",
    reponse_v: "grep '\\.pdf$'",
    reponse_f2: "grep java",
  },
  {
    id: 134,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____\n\nObjectif : supprimer les lignes en double.",
    reponse_f1: "sort",
    reponse_v: "uniq",
    reponse_f2: "head",
  },
  {
    id: 135,
    question:
      "Complétez la commande :\n\nls -l | _____\n\nObjectif : afficher uniquement les fichiers.",
    reponse_f1: "grep '^d'",
    reponse_v: "grep '^-'",
    reponse_f2: "grep '^l'",
  },
  {
    id: 136,
    question:
      "Complétez la commande :\n\nfind . -name '*.txt' | _____\n\nObjectif : afficher uniquement les 5 premiers résultats.",
    reponse_f1: "tail -5",
    reponse_v: "head -5",
    reponse_f2: "wc -5",
  },
  {
    id: 137,
    question:
      "Complétez la commande :\n\ncat /etc/passwd | _____ | sort\n\nObjectif : trier les noms des utilisateurs.",
    reponse_f1: "grep root",
    reponse_v: "cut -d: -f1",
    reponse_f2: "wc -l",
  },
  {
    id: 138,
    question:
      "Complétez la commande :\n\nfind . -type d | _____\n\nObjectif : compter le nombre de répertoires.",
    reponse_f1: "sort",
    reponse_v: "wc -l",
    reponse_f2: "uniq",
  },
  {
    id: 139,
    question:
      "Complétez la commande :\n\ncat fichier.log | _____ error\n\nObjectif : afficher les lignes contenant 'error'.",
    reponse_f1: "find",
    reponse_v: "grep",
    reponse_f2: "cut",
  },
  {
    id: 140,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ | sort\n\nObjectif : afficher uniquement les fichiers '.sh'.",
    reponse_f1: "grep txt",
    reponse_v: "grep '\\.sh$'",
    reponse_f2: "grep pdf",
  },
  {
    id: 141,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____\n\nObjectif : afficher le nombre de lignes.",
    reponse_f1: "head",
    reponse_v: "wc -l",
    reponse_f2: "sort",
  },
  {
    id: 142,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____\n\nObjectif : trier les lignes par ordre alphabétique.",
    reponse_f1: "uniq",
    reponse_v: "sort",
    reponse_f2: "grep",
  },
  {
    id: 143,
    question:
      "Complétez la commande :\n\nls | _____ '.txt$'\n\nObjectif : afficher uniquement les fichiers texte.",
    reponse_f1: "cut",
    reponse_v: "grep",
    reponse_f2: "wc",
  },
  {
    id: 144,
    question:
      "Complétez la commande :\n\nfind . -type f | _____\n\nObjectif : afficher les 10 derniers fichiers trouvés.",
    reponse_f1: "head -10",
    reponse_v: "tail -10",
    reponse_f2: "wc -10",
  },
  {
    id: 145,
    question:
      "Complétez la commande :\n\nfind . -type f -name '*.log' | _____ gzip\n\nObjectif : compresser tous les fichiers .log.",
    reponse_f1: "grep",
    reponse_v: "xargs",
    reponse_f2: "cut",
  },
  {
    id: 146,
    question:
      "Complétez la commande :\n\ncat fichier.csv | _____ -F';' '{print $2}'\n\nObjectif : afficher uniquement la deuxième colonne.",
    reponse_f1: "cut",
    reponse_v: "awk",
    reponse_f2: "sed",
  },
  {
    id: 147,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ 's/chatgpt/IA/g'\n\nObjectif : remplacer toutes les occurrences de 'chatgpt' par 'IA'.",
    reponse_f1: "awk",
    reponse_v: "sed",
    reponse_f2: "cut",
  },
  {
    id: 148,
    question:
      "Complétez la commande :\n\nfind . -type f _____\n\nObjectif : afficher les fichiers de plus de 10 Mo.",
    reponse_f1: "-size -10M",
    reponse_v: "-size +10M",
    reponse_f2: "-size 10M",
  },
  {
    id: 149,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ | wc -l\n\nObjectif : compter uniquement les fichiers '.sh'.",
    reponse_f1: "sort",
    reponse_v: "grep '\\.sh$'",
    reponse_f2: "uniq",
  },
  {
    id: 150,
    question:
      "Complétez la commande :\n\ncat /etc/passwd | _____ -F: '{print $1}'\n\nObjectif : afficher tous les noms d'utilisateurs.",
    reponse_f1: "cut",
    reponse_v: "awk",
    reponse_f2: "sed",
  },
  {
    id: 151,
    question:
      "Complétez la commande :\n\ngrep -r 'Exception' . | _____\n\nObjectif : enregistrer le résultat dans erreurs.txt.",
    reponse_f1: "< erreurs.txt",
    reponse_v: "> erreurs.txt",
    reponse_f2: ">> /dev/null",
  },
  {
    id: 152,
    question:
      "Complétez la commande :\n\nfind . -type f -name '*.java' | _____ 'Test'\n\nObjectif : afficher uniquement les fichiers dont le nom contient 'Test'.",
    reponse_f1: "sort",
    reponse_v: "grep",
    reponse_f2: "head",
  },
  {
    id: 153,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ -n\n\nObjectif : numéroter toutes les lignes.",
    reponse_f1: "grep",
    reponse_v: "cat",
    reponse_f2: "sort",
  },
  {
    id: 154,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ -n 1 basename\n\nObjectif : afficher uniquement le nom de chaque fichier trouvé.",
    reponse_f1: "grep",
    reponse_v: "xargs",
    reponse_f2: "cut",
  },
  {
    id: 155,
    question:
      "Complétez la commande :\n\nls -l | _____ '{print $5}'\n\nObjectif : afficher uniquement la taille des fichiers.",
    reponse_f1: "sed",
    reponse_v: "awk",
    reponse_f2: "cut",
  },
  {
    id: 156,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ -r rm\n\nObjectif : supprimer les fichiers trouvés.",
    reponse_f1: "grep",
    reponse_v: "xargs",
    reponse_f2: "sort",
  },
  {
    id: 157,
    question:
      "Complétez la commande :\n\ncat fichier.txt | sort | _____\n\nObjectif : supprimer les doublons.",
    reponse_f1: "grep",
    reponse_v: "uniq",
    reponse_f2: "head",
  },
  {
    id: 158,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ '^#'\n\nObjectif : afficher uniquement les lignes commençant par '#'.",
    reponse_f1: "cut",
    reponse_v: "grep",
    reponse_f2: "awk",
  },
  {
    id: 159,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ -20\n\nObjectif : afficher les 20 premiers fichiers trouvés.",
    reponse_f1: "tail",
    reponse_v: "head",
    reponse_f2: "wc",
  },
  {
    id: 160,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ '$'\n\nObjectif : afficher toutes les lignes (expression régulière correspondant à la fin de ligne).",
    reponse_f1: "sed",
    reponse_v: "grep",
    reponse_f2: "cut",
  },
  {
    id: 161,
    question:
      "Complétez la commande :\n\nfind . -type f -name '*.tmp' _____\n\nObjectif : supprimer chaque fichier trouvé avec rm.",
    reponse_f1: "-delete rm {}",
    reponse_v: "-exec rm {} \\;",
    reponse_f2: "-run rm {}",
  },
  {
    id: 162,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ '^[0-9]'\n\nObjectif : afficher les lignes commençant par un chiffre.",
    reponse_f1: "cut",
    reponse_v: "grep",
    reponse_f2: "sort",
  },
  {
    id: 163,
    question:
      "Complétez la commande :\n\nls -l | _____ '^d' | awk '{print $9}'\n\nObjectif : afficher uniquement les noms des répertoires.",
    reponse_f1: "sort",
    reponse_v: "grep",
    reponse_f2: "cut",
  },
  {
    id: 164,
    question:
      "Complétez la commande :\n\ncat fichier.csv | cut -d';' -f3 | _____\n\nObjectif : trier les valeurs de la troisième colonne.",
    reponse_f1: "uniq",
    reponse_v: "sort",
    reponse_f2: "grep",
  },
  {
    id: 165,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ '.pdf$' | wc -l\n\nObjectif : compter les fichiers PDF.",
    reponse_f1: "cut",
    reponse_v: "grep",
    reponse_f2: "awk",
  },
  {
    id: 166,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ '/erreur/d'\n\nObjectif : supprimer les lignes contenant 'erreur'.",
    reponse_f1: "awk",
    reponse_v: "sed",
    reponse_f2: "cut",
  },
  {
    id: 167,
    question:
      "Complétez la commande :\n\nhistory | _____ | head -5\n\nObjectif : afficher les cinq premières commandes contenant 'ssh'.",
    reponse_f1: "sort ssh",
    reponse_v: "grep ssh",
    reponse_f2: "cut ssh",
  },
  {
    id: 168,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ -l\n\nObjectif : compter le nombre de fichiers trouvés.",
    reponse_f1: "head",
    reponse_v: "wc",
    reponse_f2: "tail",
  },
  {
    id: 169,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ -v '^$'\n\nObjectif : supprimer les lignes vides.",
    reponse_f1: "awk",
    reponse_v: "grep",
    reponse_f2: "cut",
  },
  {
    id: 170,
    question:
      'Complétez la commande :\n\nfor f in *.txt; do _____ "$f"; done\n\nObjectif : afficher le contenu de chaque fichier texte.',
    reponse_f1: "grep",
    reponse_v: "cat",
    reponse_f2: "wc",
  },
  {
    id: 171,
    question:
      'Complétez la commande :\n\nfor f in *.log; do _____ "$f"; done\n\nObjectif : supprimer tous les fichiers .log.',
    reponse_f1: "cp",
    reponse_v: "rm",
    reponse_f2: "mv",
  },
  {
    id: 172,
    question:
      'Complétez la commande :\n\nwhile read ligne; do _____ "$ligne"; done < fichier.txt\n\nObjectif : afficher chaque ligne lue.',
    reponse_f1: "grep",
    reponse_v: "echo",
    reponse_f2: "cat",
  },
  {
    id: 173,
    question:
      "Complétez la commande :\n\nfind . -type f -name '*.java' | xargs _____\n\nObjectif : afficher le nombre de lignes de chaque fichier.",
    reponse_f1: "grep",
    reponse_v: "wc -l",
    reponse_f2: "sort",
  },
  {
    id: 174,
    question:
      "Complétez la commande :\n\nif [ -f fichier.txt ]; then _____; fi\n\nObjectif : afficher le contenu du fichier s'il existe.",
    reponse_f1: "ls fichier.txt",
    reponse_v: "cat fichier.txt",
    reponse_f2: "pwd",
  },
  {
    id: 175,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ | tail -1\n\nObjectif : afficher le plus grand nom de fichier par ordre alphabétique.",
    reponse_f1: "uniq",
    reponse_v: "sort",
    reponse_f2: "grep",
  },
  {
    id: 176,
    question:
      "Complétez la commande :\n\ncat /etc/passwd | awk -F: '{print $1}' | _____\n\nObjectif : afficher les utilisateurs dans l'ordre alphabétique sans doublon.",
    reponse_f1: "grep",
    reponse_v: "sort -u",
    reponse_f2: "tail",
  },
  {
    id: 177,
    question:
      "Complétez la commande :\n\nfind . -type f -name '*.sh' | _____ 'bash'\n\nObjectif : afficher les scripts contenant le mot 'bash'.",
    reponse_f1: "cut",
    reponse_v: "xargs grep -l",
    reponse_f2: "sort",
  },
  {
    id: 178,
    question:
      "Complétez la commande :\n\ncat fichier.txt | awk '{print _____}'\n\nObjectif : afficher uniquement la première colonne.",
    reponse_f1: "$2",
    reponse_v: "$1",
    reponse_f2: "$NF",
  },
  {
    id: 179,
    question:
      "Complétez la commande :\n\ncat fichier.txt | awk '{print _____}'\n\nObjectif : afficher uniquement la dernière colonne.",
    reponse_f1: "$1",
    reponse_v: "$NF",
    reponse_f2: "$2",
  },
  {
    id: 180,
    question:
      "Complétez la commande :\n\ngrep -r 'TODO' . | _____ ':' -f1\n\nObjectif : afficher uniquement les noms des fichiers.",
    reponse_f1: "awk",
    reponse_v: "cut -d",
    reponse_f2: "sed",
  },
  {
    id: 181,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ 'README'\n\nObjectif : rechercher uniquement les fichiers dont le nom contient README.",
    reponse_f1: "sort",
    reponse_v: "grep",
    reponse_f2: "uniq",
  },
  {
    id: 182,
    question:
      "Complétez la commande :\n\ncat fichier.txt | sort | uniq | _____\n\nObjectif : compter le nombre de lignes distinctes.",
    reponse_f1: "head",
    reponse_v: "wc -l",
    reponse_f2: "tail",
  },
  {
    id: 183,
    question:
      "Complétez la commande :\n\nfind . -type f -mtime _____\n\nObjectif : trouver les fichiers modifiés il y a moins de 7 jours.",
    reponse_f1: "+7",
    reponse_v: "-7",
    reponse_f2: "7",
  },
  {
    id: 184,
    question:
      "Complétez la commande :\n\nfind . -type f | xargs _____ -c\n\nObjectif : compter les mots de chaque fichier.",
    reponse_f1: "grep",
    reponse_v: "wc",
    reponse_f2: "sort",
  },
  {
    id: 185,
    question:
      "Complétez la commande :\n\ncat fichier.log | grep ERROR | _____\n\nObjectif : enregistrer le résultat à la fin du fichier erreurs.log.",
    reponse_f1: "> erreurs.log",
    reponse_v: ">> erreurs.log",
    reponse_f2: "< erreurs.log",
  },
  {
    id: 186,
    question:
      "Complétez la commande :\n\ncat fichier.txt | sed _____\n\nObjectif : supprimer la première ligne.",
    reponse_f1: "'2d'",
    reponse_v: "'1d'",
    reponse_f2: "'$d'",
  },
  {
    id: 187,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ -n '1,5p'\n\nObjectif : afficher uniquement les cinq premières lignes.",
    reponse_f1: "awk",
    reponse_v: "sed",
    reponse_f2: "grep",
  },
  {
    id: 188,
    question:
      "Complétez la commande :\n\nfind . -type f | xargs _____\n\nObjectif : afficher le type de chaque fichier.",
    reponse_f1: "grep",
    reponse_v: "file",
    reponse_f2: "sort",
  },
  {
    id: 189,
    question:
      "Complétez la commande :\n\nVAR=$( _____ )\n\nObjectif : stocker le répertoire courant dans la variable VAR.",
    reponse_f1: "ls",
    reponse_v: "pwd",
    reponse_f2: "whoami",
  },
  {
    id: 190,
    question:
      "Complétez la commande :\n\necho $HOME | _____ '/home'\n\nObjectif : vérifier que HOME contient '/home'.",
    reponse_f1: "cut",
    reponse_v: "grep",
    reponse_f2: "sort",
  },
  {
    id: 191,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ -n 5\n\nObjectif : afficher les cinq premiers fichiers trouvés.",
    reponse_f1: "tail",
    reponse_v: "head",
    reponse_f2: "wc",
  },
  {
    id: 192,
    question:
      "Complétez la commande :\n\ncat /etc/passwd | cut -d: -f7 | _____ | uniq\n\nObjectif : afficher les shells disponibles sans doublon.",
    reponse_f1: "grep",
    reponse_v: "sort",
    reponse_f2: "head",
  },
  {
    id: 193,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ '\\.conf$'\n\nObjectif : afficher uniquement les fichiers de configuration.",
    reponse_f1: "awk",
    reponse_v: "grep",
    reponse_f2: "cut",
  },
  {
    id: 194,
    question:
      "Complétez la commande :\n\ncat fichier.txt | awk 'END {print _____}'\n\nObjectif : afficher le nombre total de lignes.",
    reponse_f1: "NR-1",
    reponse_v: "NR",
    reponse_f2: "NF",
  },
  {
    id: 195,
    question:
      'Complétez le script :\n\n#!/bin/bash\nfor f in *.txt\ndo\n    _____ "$f"\ndone\n\nObjectif : afficher le nombre de lignes de chaque fichier.',
    reponse_f1: "grep",
    reponse_v: "wc -l",
    reponse_f2: "sort",
  },
  {
    id: 196,
    question:
      "Complétez le script :\n\n#!/bin/bash\nif [ -d sauvegarde ]\nthen\n    _____ sauvegarde\nfi\n\nObjectif : afficher le contenu du répertoire.",
    reponse_f1: "pwd",
    reponse_v: "ls",
    reponse_f2: "cd",
  },
  {
    id: 197,
    question:
      "Complétez le script :\n\n#!/bin/bash\nNB=$(find . -type f | _____)\necho $NB\n\nObjectif : afficher le nombre de fichiers.",
    reponse_f1: "head",
    reponse_v: "wc -l",
    reponse_f2: "sort",
  },
  {
    id: 198,
    question:
      'Complétez le script :\n\n#!/bin/bash\nfor f in *.log\ndo\n    _____ "$f"\ndone\n\nObjectif : renommer les fichiers en ajoutant l\'extension .bak.',
    reponse_f1: 'cp "$f"',
    reponse_v: 'mv "$f" "$f.bak"',
    reponse_f2: 'rm "$f"',
  },
  {
    id: 199,
    question:
      "Complétez la commande :\n\nfind . -type f -name '*.txt' | _____ grep 'erreur'\n\nObjectif : rechercher le mot 'erreur' dans tous les fichiers texte.",
    reponse_f1: "sort",
    reponse_v: "xargs",
    reponse_f2: "uniq",
  },
  {
    id: 200,
    question:
      "Complétez le script :\n\n#!/bin/bash\nif [ -f rapport.txt ]\nthen\n    _____ rapport.txt archive/\nfi\n\nObjectif : déplacer le fichier dans le dossier archive.",
    reponse_f1: "cp",
    reponse_v: "mv",
    reponse_f2: "rm",
  },
  {
    id: 201,
    question:
      "Complétez la commande :\n\ncat fichier.csv | awk -F';' '{print $3}' | _____\n\nObjectif : supprimer les doublons.",
    reponse_f1: "grep",
    reponse_v: "sort -u",
    reponse_f2: "head",
  },
  {
    id: 202,
    question:
      'Complétez le script :\n\n#!/bin/bash\nfor f in *.java\ndo\n    _____ "class" "$f"\ndone\n\nObjectif : rechercher le mot \'class\' dans chaque fichier.',
    reponse_f1: "cat",
    reponse_v: "grep",
    reponse_f2: "sed",
  },
  {
    id: 203,
    question:
      "Complétez la commande :\n\nfind . -type f | xargs _____ | sort -nr | head -1\n\nObjectif : afficher le fichier ayant le plus de lignes.",
    reponse_f1: "grep",
    reponse_v: "wc -l",
    reponse_f2: "basename",
  },
  {
    id: 204,
    question:
      "Complétez le script :\n\n#!/bin/bash\nwhile read ligne\ndo\n    _____ \"$ligne\"\ndone < liste.txt\n\nObjectif : afficher chaque ligne précédée du texte '->'.",
    reponse_f1: "cat",
    reponse_v: 'echo "-> $ligne"',
    reponse_f2: "grep",
  },
  {
    id: 205,
    question:
      "Complétez la commande :\n\ncat /etc/passwd | grep '/bin/bash' | _____ -d: -f1\n\nObjectif : afficher uniquement les noms des utilisateurs.",
    reponse_f1: "awk",
    reponse_v: "cut",
    reponse_f2: "sed",
  },
  {
    id: 206,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ '\\.(jpg|png)$'\n\nObjectif : afficher uniquement les images JPG ou PNG.",
    reponse_f1: "awk",
    reponse_v: "grep -E",
    reponse_f2: "cut",
  },
  {
    id: 207,
    question:
      "Complétez le script :\n\n#!/bin/bash\nDATE=$(_____)\necho $DATE\n\nObjectif : afficher la date courante.",
    reponse_f1: "time",
    reponse_v: "date",
    reponse_f2: "calendar",
  },
  {
    id: 208,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ -n '.txt'\n\nObjectif : afficher uniquement les fichiers contenant '.txt'.",
    reponse_f1: "grep",
    reponse_v: "sed",
    reponse_f2: "awk",
  },
  {
    id: 209,
    question:
      'Complétez le script :\n\n#!/bin/bash\nfor f in *.txt\ndo\n    _____ "$f"\ndone\n\nObjectif : afficher uniquement le nom de chaque fichier.',
    reponse_f1: "cat",
    reponse_v: "basename",
    reponse_f2: "wc",
  },
  {
    id: 210,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ '{print NR \":\" $0}'\n\nObjectif : numéroter les lignes.",
    reponse_f1: "grep",
    reponse_v: "awk",
    reponse_f2: "cut",
  },
  {
    id: 211,
    question:
      'Complétez le script :\n\n#!/bin/bash\nif [ -z "$1" ]\nthen\n    _____ "Paramètre manquant"\nfi\n\nObjectif : afficher un message d\'erreur.',
    reponse_f1: "cat",
    reponse_v: "echo",
    reponse_f2: "pwd",
  },
  {
    id: 212,
    question:
      "Complétez la commande :\n\nfind . -type f -name '*.java' | _____ -l TODO\n\nObjectif : afficher uniquement les fichiers contenant 'TODO'.",
    reponse_f1: "awk",
    reponse_v: "xargs grep",
    reponse_f2: "sort",
  },
  {
    id: 213,
    question:
      "Complétez le script :\n\n#!/bin/bash\nTOTAL=$(cat notes.txt | wc -l)\n_____ $TOTAL\n\nObjectif : afficher le nombre total de lignes.",
    reponse_f1: "cat",
    reponse_v: "echo",
    reponse_f2: "grep",
  },
  {
    id: 214,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ '/^[0-9]/p'\n\nObjectif : afficher uniquement les lignes commençant par un chiffre.",
    reponse_f1: "awk",
    reponse_v: "sed -n",
    reponse_f2: "cut",
  },
  {
    id: 215,
    question:
      'Complétez le script :\n\n#!/bin/bash\nfor f in *.log\ndo\n    gzip "$f"\ndone\n_____ "Compression terminée"\n\nObjectif : afficher un message de fin.',
    reponse_f1: "cat",
    reponse_v: "echo",
    reponse_f2: "pwd",
  },
  {
    id: 216,
    question:
      "Complétez la commande :\n\nls -l | awk '{print $9}' | _____ '\\.sh$'\n\nObjectif : afficher uniquement les scripts Shell.",
    reponse_f1: "sort",
    reponse_v: "grep",
    reponse_f2: "uniq",
  },
  {
    id: 217,
    question:
      "Complétez le script :\n\n#!/bin/bash\nREP=$(pwd)\n_____ $REP\n\nObjectif : afficher le répertoire courant.",
    reponse_f1: "cat",
    reponse_v: "echo",
    reponse_f2: "grep",
  },
  {
    id: 218,
    question:
      "Complétez la commande :\n\nfind . -type f | xargs file | _____ 'text'\n\nObjectif : afficher uniquement les fichiers texte.",
    reponse_f1: "cut",
    reponse_v: "grep",
    reponse_f2: "sort",
  },
  {
    id: 219,
    question:
      "Complétez le script :\n\n#!/bin/bash\nfind . -type f -name '*.tmp' -delete\n_____ \"Nettoyage terminé\"\n\nObjectif : afficher un message après la suppression.",
    reponse_f1: "cat",
    reponse_v: "echo",
    reponse_f2: "pwd",
  },
  {
    id: 220,
    question:
      'Complétez le script :\n\n#!/bin/bash\nfor f in *.txt\ndo\n    if [ -s "$f" ]\n    then\n        _____ "$f"\n    fi\ndone\n\nObjectif : afficher le nom des fichiers non vides.',
    reponse_f1: "cat",
    reponse_v: "echo",
    reponse_f2: "grep",
  },
  {
    id: 221,
    question:
      "Complétez la commande :\n\nfind . -type f -mtime -1 | _____ | wc -l\n\nObjectif : compter les fichiers Java modifiés aujourd'hui.",
    reponse_f1: "sort",
    reponse_v: "grep '\\.java$'",
    reponse_f2: "uniq",
  },
  {
    id: 222,
    question:
      "Complétez la commande :\n\ncat fichier.txt | awk '_____ {print}'\n\nObjectif : afficher uniquement les lignes contenant plus de 5 champs.",
    reponse_f1: "NR>5",
    reponse_v: "NF>5",
    reponse_f2: "$1>5",
  },
  {
    id: 223,
    question:
      'Complétez le script :\n\n#!/bin/bash\nNB=$(ls | wc -l)\nif [ $NB -gt 100 ]\nthen\n    _____ "Beaucoup de fichiers"\nfi',
    reponse_f1: "cat",
    reponse_v: "echo",
    reponse_f2: "grep",
  },
  {
    id: 224,
    question:
      "Complétez la commande :\n\nfind . -type f | xargs _____ | sort -nr | head -1\n\nObjectif : afficher le fichier le plus volumineux.",
    reponse_f1: "wc -l",
    reponse_v: "du -b",
    reponse_f2: "basename",
  },
  {
    id: 225,
    question:
      "Complétez le script :\n\n#!/bin/bash\nfor f in *.csv\ndo\n    cut -d';' -f1 \"$f\"\ndone | _____\n\nObjectif : supprimer les doublons des premières colonnes.",
    reponse_f1: "sort",
    reponse_v: "sort -u",
    reponse_f2: "uniq",
  },
  {
    id: 226,
    question:
      "Complétez la commande :\n\nfind . -type f -exec _____ {} \\;\n\nObjectif : afficher les permissions de chaque fichier.",
    reponse_f1: "cat",
    reponse_v: "ls -l",
    reponse_f2: "pwd",
  },
  {
    id: 227,
    question:
      "Complétez la commande :\n\ncat /etc/passwd | awk -F: '$3>=1000 {print _____}'\n\nObjectif : afficher les noms des utilisateurs ayant un UID >= 1000.",
    reponse_f1: "$3",
    reponse_v: "$1",
    reponse_f2: "$7",
  },
  {
    id: 228,
    question:
      'Complétez le script :\n\n#!/bin/bash\nif grep -q erreur fichier.log\nthen\n    _____ "Erreur détectée"\nfi',
    reponse_f1: "cat",
    reponse_v: "echo",
    reponse_f2: "pwd",
  },
  {
    id: 229,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ '.*\\.bak$'\n\nObjectif : exclure les fichiers .bak.",
    reponse_f1: "grep",
    reponse_v: "grep -v",
    reponse_f2: "sort",
  },
  {
    id: 230,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ '{print toupper($0)}'\n\nObjectif : convertir toutes les lignes en majuscules.",
    reponse_f1: "sed",
    reponse_v: "awk",
    reponse_f2: "cut",
  },
  {
    id: 231,
    question:
      "Complétez le script :\n\n#!/bin/bash\nREP=/tmp/test\n_____ -p \"$REP\"\n\nObjectif : créer le répertoire s'il n'existe pas.",
    reponse_f1: "cp",
    reponse_v: "mkdir",
    reponse_f2: "touch",
  },
  {
    id: 232,
    question:
      "Complétez la commande :\n\nfind . -type f | xargs grep -l TODO | _____\n\nObjectif : compter les fichiers contenant 'TODO'.",
    reponse_f1: "head",
    reponse_v: "wc -l",
    reponse_f2: "sort",
  },
  {
    id: 233,
    question:
      'Complétez le script :\n\n#!/bin/bash\nfor f in *.txt\ndo\n    cp "$f" sauvegarde/\ndone\n_____ "Sauvegarde terminée"',
    reponse_f1: "cat",
    reponse_v: "echo",
    reponse_f2: "pwd",
  },
  {
    id: 234,
    question:
      "Complétez la commande :\n\nls -l | awk '$5>1048576 {print _____}'\n\nObjectif : afficher le nom des fichiers de plus de 1 Mo.",
    reponse_f1: "$5",
    reponse_v: "$9",
    reponse_f2: "$1",
  },
  {
    id: 235,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ '/^#/d'\n\nObjectif : supprimer les lignes de commentaires.",
    reponse_f1: "awk",
    reponse_v: "sed",
    reponse_f2: "grep",
  },
  {
    id: 236,
    question:
      'Complétez le script :\n\n#!/bin/bash\nDATE=$(date +%Y%m%d)\ncp rapport.txt rapport_$DATE.txt\n_____ "Archive créée"',
    reponse_f1: "pwd",
    reponse_v: "echo",
    reponse_f2: "cat",
  },
  {
    id: 237,
    question:
      "Complétez la commande :\n\nfind . -type f | _____ '\\.(jpg|png|gif)$' | wc -l\n\nObjectif : compter toutes les images.",
    reponse_f1: "grep",
    reponse_v: "grep -E",
    reponse_f2: "sort",
  },
  {
    id: 238,
    question:
      "Complétez le script :\n\n#!/bin/bash\nif [ $# -eq 0 ]\nthen\n    _____ 1\nfi\n\nObjectif : quitter le script avec un code d'erreur.",
    reponse_f1: "return",
    reponse_v: "exit",
    reponse_f2: "break",
  },
  {
    id: 239,
    question:
      "Complétez la commande :\n\ncat fichier.txt | awk '{s+=NF} END {print _____}'\n\nObjectif : afficher le nombre total de champs.",
    reponse_f1: "NF",
    reponse_v: "s",
    reponse_f2: "NR",
  },
  {
    id: 240,
    question:
      "Complétez la commande :\n\nfind . -type f -exec chmod _____ {} \\;\n\nObjectif : donner les droits rw-r--r-- à chaque fichier.",
    reponse_f1: "6440",
    reponse_v: "644",
    reponse_f2: "755",
  },
  {
    id: 241,
    question:
      'Complétez le script :\n\n#!/bin/bash\nfor f in *.sh\n do\n    _____ "$f"\ndone\n\nObjectif : rendre chaque script exécutable.',
    reponse_f1: "chmod 644",
    reponse_v: "chmod +x",
    reponse_f2: "chown",
  },
  {
    id: 242,
    question:
      "Complétez la commande :\n\ncat fichier.txt | _____ -c\n\nObjectif : compter les occurrences des lignes identiques (après tri préalable).",
    reponse_f1: "sort",
    reponse_v: "uniq",
    reponse_f2: "grep",
  },
  {
    id: 243,
    question:
      "Complétez la commande :\n\nfind . -type f | xargs _____ | grep 'ELF'\n\nObjectif : afficher uniquement les exécutables Linux.",
    reponse_f1: "basename",
    reponse_v: "file",
    reponse_f2: "wc",
  },
  {
    id: 244,
    question:
      'Complétez le script :\n\n#!/bin/bash\nLOG=journal.log\necho "Début" _____ "$LOG"\n\nObjectif : ajouter \'Début\' à la fin du journal.',
    reponse_f1: ">",
    reponse_v: ">>",
    reponse_f2: "<",
  },
  {
    id: 245,
    question:
      "Complétez la commande :\n\nps -ef | grep java | _____ '{print $2}'\n\nObjectif : afficher uniquement les PID.",
    reponse_f1: "cut",
    reponse_v: "awk",
    reponse_f2: "sed",
  },
  {
    id: 246,
    question:
      'Complétez le script :\n\n#!/bin/bash\nif [ -r fichier.txt ]\nthen\n    _____ "Lecture autorisée"\nfi',
    reponse_f1: "cat",
    reponse_v: "echo",
    reponse_f2: "pwd",
  },
  {
    id: 247,
    question:
      "Complétez la commande :\n\nfind . -type f | sort | _____\n\nObjectif : afficher uniquement le premier fichier par ordre alphabétique.",
    reponse_f1: "tail -1",
    reponse_v: "head -1",
    reponse_f2: "wc -l",
  },
  {
    id: 248,
    question:
      "Complétez la commande :\n\ncat /etc/passwd | cut -d: -f7 | sort | _____\n\nObjectif : compter le nombre d'occurrences de chaque shell.",
    reponse_f1: "wc -l",
    reponse_v: "uniq -c",
    reponse_f2: "grep",
  },
  {
    id: 249,
    question:
      "Complétez le script :\n\n#!/bin/bash\nfind . -type f -name '*.tmp' -delete\necho \"Nettoyage terminé\"\n_____ 0\n\nObjectif : terminer le script avec un code de succès.",
    reponse_f1: "return",
    reponse_v: "exit",
    reponse_f2: "break",
  },
  {
    id: 250,
    question:
      "Complétez la commande :\n\nfind . -type f | xargs grep -l 'Exception' | _____ | head -5\n\nObjectif : afficher les cinq premiers fichiers, par ordre alphabétique, contenant 'Exception'.",
    reponse_f1: "uniq",
    reponse_v: "sort",
    reponse_f2: "wc -l",
  },
  {
    id: 251,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nDOSSIER=$1\n\nif [ -z "$DOSSIER" ]\nthen\n echo "Usage : $0 dossier"\n exit 1\nfi\n\nif [ ! -d "$DOSSIER" ]\nthen\n echo "Erreur : dossier introuvable"\n exit 2\nfi\n\n_____\n\necho "Nombre de fichiers : $NB"\n\nObjectif : compter le nombre de fichiers dans le dossier passé en paramètre.',
    reponse_f1: 'NB=$(ls "$DOSSIER")',
    reponse_v: 'NB=$(find "$DOSSIER" -type f | wc -l)',
    reponse_f2: 'NB=$(cat "$DOSSIER" | wc -l)',
  },
  {
    id: 252,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nLOG=$1\n\nif [ ! -f "$LOG" ]\nthen\n echo "Fichier log introuvable"\n exit 1\nfi\n\n_____\n\necho "Nombre d\'erreurs : $NB"\n\nObjectif : compter les lignes contenant ERROR dans un fichier log.',
    reponse_f1: 'NB=$(cat "$LOG" | wc -l)',
    reponse_v: "NB=$(grep 'ERROR' \"$LOG\" | wc -l)",
    reponse_f2: 'NB=$(find "$LOG" -name ERROR)',
  },
  {
    id: 253,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nSRC=$1\nDEST=$2\n\nif [ ! -d "$SRC" ]\nthen\n echo "Source invalide"\n exit 1\nfi\n\nmkdir -p "$DEST"\n\n_____\n\necho "Sauvegarde terminée"\n\nObjectif : copier tous les fichiers .txt du dossier source vers le dossier destination.',
    reponse_f1: 'mv "$SRC"/*.txt "$DEST"/',
    reponse_v: 'cp "$SRC"/*.txt "$DEST"/',
    reponse_f2: 'rm "$SRC"/*.txt',
  },
  {
    id: 254,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nFICHIER=$1\n\nif [ ! -f "$FICHIER" ]\nthen\n echo "Fichier introuvable"\n exit 1\nfi\n\n_____\n\necho "Lignes non vides : $NB"\n\nObjectif : compter les lignes non vides d\'un fichier.',
    reponse_f1: "NB=$(grep '^$' \"$FICHIER\" | wc -l)",
    reponse_v: "NB=$(grep -v '^$' \"$FICHIER\" | wc -l)",
    reponse_f2: 'NB=$(wc "$FICHIER")',
  },
  {
    id: 255,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nDOSSIER=$1\n\nif [ ! -d "$DOSSIER" ]\nthen\n echo "Dossier invalide"\n exit 1\nfi\n\n_____\n\necho "Fichiers Java trouvés : $NB"\n\nObjectif : compter les fichiers .java dans un dossier.',
    reponse_f1: "NB=$(find \"$DOSSIER\" -type d -name '*.java' | wc -l)",
    reponse_v: "NB=$(find \"$DOSSIER\" -type f -name '*.java' | wc -l)",
    reponse_f2: "NB=$(grep '*.java' \"$DOSSIER\" | wc -l)",
  },
  {
    id: 256,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nDOSSIER=$1\n\nif [ ! -d "$DOSSIER" ]\nthen\n echo "Dossier invalide"\n exit 1\nfi\n\n_____\n\necho "Fichiers vides : $NB"\n\nObjectif : compter les fichiers vides dans le dossier.',
    reponse_f1: 'NB=$(find "$DOSSIER" -type d -empty | wc -l)',
    reponse_v: 'NB=$(find "$DOSSIER" -type f -empty | wc -l)',
    reponse_f2: 'NB=$(ls "$DOSSIER" | wc -l)',
  },
  {
    id: 257,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nFICHIER=$1\n\nif [ ! -f "$FICHIER" ]\nthen\n echo "Fichier introuvable"\n exit 1\nfi\n\n_____\n\necho "Mots : $NB"\n\nObjectif : compter le nombre de mots du fichier.',
    reponse_f1: 'NB=$(wc -l < "$FICHIER")',
    reponse_v: 'NB=$(wc -w < "$FICHIER")',
    reponse_f2: 'NB=$(wc -c < "$FICHIER")',
  },
  {
    id: 258,
    question:
      'Une ligne est fausse :\n\n#!/bin/bash\nfor f in *.log\ndo\n echo "$f"\ndone | head -5\n\nObjectif : afficher les 5 derniers fichiers .log.\nQuelle correction faut-il appliquer ?',
    reponse_f1: "Remplacer echo par cat",
    reponse_v: "Remplacer head -5 par tail -5",
    reponse_f2: "Remplacer *.log par *.txt",
  },
  {
    id: 259,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nDOSSIER=$1\nMOT=$2\n\nif [ ! -d "$DOSSIER" ]\nthen\n echo "Dossier invalide"\n exit 1\nfi\n\n_____\n\nObjectif : afficher les fichiers du dossier contenant le mot recherché.',
    reponse_f1: 'find "$DOSSIER" -type f | wc -l',
    reponse_v: 'find "$DOSSIER" -type f | xargs grep -l "$MOT"',
    reponse_f2: 'grep "$DOSSIER" "$MOT"',
  },
  {
    id: 260,
    question:
      'Diagnostic :\n\n#!/bin/bash\nfor f in *.txt\ndo\n echo "$file"\ndone\n\nObjectif : afficher le nom de chaque fichier .txt.\nPourquoi le script n\'affiche-t-il pas les bons noms ?',
    reponse_f1: "Il manque un fi",
    reponse_v: "La variable utilisée devrait être $f et non $file",
    reponse_f2: "La boucle for ne fonctionne pas avec *.txt",
  },
  {
    id: 261,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nFICHIER=$1\n\nif [ ! -f "$FICHIER" ]\nthen\n echo "Fichier introuvable"\n exit 1\nfi\n\n_____\n\nObjectif : afficher les lignes du fichier sans les commentaires commençant par #.',
    reponse_f1: "grep '^#' \"$FICHIER\"",
    reponse_v: "grep -v '^#' \"$FICHIER\"",
    reponse_f2: "cut -d'#' -f1 \"$FICHIER\"",
  },
  {
    id: 262,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nARCHIVE=backup_$(date +%Y%m%d).tar.gz\n\n_____\n\necho "Archive créée : $ARCHIVE"\n\nObjectif : créer une archive compressée du dossier documents.',
    reponse_f1: 'gzip documents "$ARCHIVE"',
    reponse_v: 'tar -czf "$ARCHIVE" documents',
    reponse_f2: 'zip -x "$ARCHIVE" documents',
  },
  {
    id: 263,
    question:
      "Une ligne est fausse :\n\n#!/bin/bash\nfind . -type f -name '*.tmp' | rm\n\necho \"Nettoyage terminé\"\n\nObjectif : supprimer les fichiers .tmp.\nQuelle correction est correcte ?",
    reponse_f1: "find . -type f -name '*.tmp' | grep rm",
    reponse_v: "find . -type f -name '*.tmp' -delete",
    reponse_f2: "find . -type d -name '*.tmp' -delete",
  },
  {
    id: 264,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nFICHIER=$1\n\n_____\n\nObjectif : afficher les 10 lignes les plus longues du fichier.",
    reponse_f1: 'cat "$FICHIER" | sort | head -10',
    reponse_v: "awk '{ print length, $0 }' \"$FICHIER\" | sort -nr | head -10",
    reponse_f2: 'wc -l "$FICHIER" | head -10',
  },
  {
    id: 265,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nps -ef | grep java | _____\n\nObjectif : afficher uniquement les PID des processus Java.",
    reponse_f1: "cut -d: -f1",
    reponse_v: "awk '{print $2}'",
    reponse_f2: "sort -u",
  },
  {
    id: 266,
    question:
      'Diagnostic :\n\n#!/bin/bash\nif [ $1 = "admin" ]\nthen\n echo "OK"\nfi\n\nProblème : le script affiche une erreur si aucun paramètre n\'est fourni.\nQuelle correction est préférable ?',
    reponse_f1: "if [ $1 == admin ]",
    reponse_v: 'if [ "$1" = "admin" ]',
    reponse_f2: 'if [ -d "$1" ]',
  },
  {
    id: 267,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nDOSSIER=$1\n\nfor f in "$DOSSIER"/*.sh\ndo\n _____\ndone\n\nObjectif : rendre exécutables tous les scripts .sh du dossier.',
    reponse_f1: 'chmod 644 "$f"',
    reponse_v: 'chmod +x "$f"',
    reponse_f2: 'chown +x "$f"',
  },
  {
    id: 268,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nFICHIER=$1\n\n_____\n\nObjectif : afficher le nombre d'occurrences de chaque ligne identique.",
    reponse_f1: 'uniq -c "$FICHIER"',
    reponse_v: 'sort "$FICHIER" | uniq -c',
    reponse_f2: 'wc -c "$FICHIER"',
  },
  {
    id: 269,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nfind . -type f -name '*.conf' | _____\n\nObjectif : afficher uniquement les fichiers .conf contenant le mot 'port'.",
    reponse_f1: "grep port",
    reponse_v: "xargs grep -l 'port'",
    reponse_f2: "cut -d'port' -f1",
  },
  {
    id: 270,
    question:
      'Diagnostic :\n\n#!/bin/bash\nwhile read ligne\ndo\n echo "$ligne"\ndone\n\nObjectif : lire le fichier liste.txt ligne par ligne.\nQue manque-t-il ?',
    reponse_f1: "Un then",
    reponse_v: "La redirection finale : done < liste.txt",
    reponse_f2: "Un xargs",
  },
  {
    id: 271,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nFICHIER=$1\n\n_____\n\nObjectif : remplacer 'localhost' par '127.0.0.1' dans l'affichage, sans modifier le fichier.",
    reponse_f1: "sed -i 's/localhost/127.0.0.1/g' \"$FICHIER\"",
    reponse_v: "sed 's/localhost/127.0.0.1/g' \"$FICHIER\"",
    reponse_f2: "grep 'localhost/127.0.0.1' \"$FICHIER\"",
  },
  {
    id: 272,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nif [ -w sortie.txt ]\nthen\n _____\nfi\n\nObjectif : ajouter la date courante à la fin du fichier sortie.txt.",
    reponse_f1: "date > sortie.txt",
    reponse_v: "date >> sortie.txt",
    reponse_f2: "date < sortie.txt",
  },
  {
    id: 273,
    question:
      "Une ligne est fausse :\n\n#!/bin/bash\nNB=$(find . -type f -name '*.java' | wc -l)\necho \"Dossiers Java : $NB\"\n\nObjectif : compter les dossiers dont le nom se termine par .java.\nQuelle correction faut-il appliquer ?",
    reponse_f1: "Remplacer wc -l par wc -w",
    reponse_v: "Remplacer -type f par -type d",
    reponse_f2: "Remplacer echo par cat",
  },
  {
    id: 274,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nFICHIER=$1\n\n_____\n\nObjectif : afficher uniquement les adresses IPv4 présentes dans le fichier.",
    reponse_f1: "grep '[0-9]' \"$FICHIER\"",
    reponse_v: "grep -E '([0-9]{1,3}\\.){3}[0-9]{1,3}' \"$FICHIER\"",
    reponse_f2: "cut -d'.' -f1 \"$FICHIER\"",
  },
  {
    id: 275,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nDOSSIER=$1\n\n_____\n\nObjectif : afficher les 5 fichiers les plus récents du dossier.",
    reponse_f1: 'ls "$DOSSIER" | head -5',
    reponse_v: 'ls -t "$DOSSIER" | head -5',
    reponse_f2: 'ls -r "$DOSSIER" | wc -l',
  },
  {
    id: 276,
    question:
      "Diagnostic :\n\n#!/bin/bash\nmkdir sauvegarde\ncp *.txt sauvegarde/\n\nProblème : le script échoue si le dossier sauvegarde existe déjà.\nQuelle correction est préférable ?",
    reponse_f1: "mkdir -r sauvegarde",
    reponse_v: "mkdir -p sauvegarde",
    reponse_f2: "touch sauvegarde",
  },
  {
    id: 277,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nfor user in $(cut -d: -f1 /etc/passwd)\ndo\n _____\ndone\n\nObjectif : afficher chaque utilisateur avec le préfixe USER=.",
    reponse_f1: 'cat "USER=$user"',
    reponse_v: 'echo "USER=$user"',
    reponse_f2: 'grep "USER=$user"',
  },
  {
    id: 278,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nFICHIER=$1\n\n_____\n\nObjectif : afficher uniquement la deuxième colonne d'un CSV séparé par ';'.",
    reponse_f1: "cut -d',' -f2 \"$FICHIER\"",
    reponse_v: "cut -d';' -f2 \"$FICHIER\"",
    reponse_f2: "cut -d';' -f1 \"$FICHIER\"",
  },
  {
    id: 279,
    question:
      "Diagnostic :\n\n#!/bin/bash\nfind . -type f -name '*.log' -delete\necho Nettoyage terminé > journal.log\n\nProblème : le message remplace le contenu du journal.\nQuelle correction permet d'ajouter le message à la fin ?",
    reponse_f1: "echo Nettoyage terminé < journal.log",
    reponse_v: "echo Nettoyage terminé >> journal.log",
    reponse_f2: "echo Nettoyage terminé | journal.log",
  },
  {
    id: 280,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nfind . -type f -name '*.sh' | _____\n\nObjectif : compter les scripts contenant le mot 'function'.",
    reponse_f1: "grep -l 'function' | wc -l",
    reponse_v: "xargs grep -l 'function' | wc -l",
    reponse_f2: "cut -d'function' -f1 | wc -l",
  },
  {
    id: 281,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nif cp fichier.txt sauvegarde/\nthen\n _____\nfi\n\nObjectif : afficher 'Copie réussie' uniquement si la copie s'est bien déroulée.",
    reponse_f1: "echo $? ",
    reponse_v: 'echo "Copie réussie"',
    reponse_f2: "exit 1",
  },
  {
    id: 282,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\ncp fichier.txt sauvegarde/\n_____\n\necho "Code retour : $?"\n\nObjectif : mémoriser le code retour de la commande cp avant d\'autres traitements.',
    reponse_f1: "RESULT=$1",
    reponse_v: "RESULT=$?",
    reponse_f2: "RESULT=$#",
  },
  {
    id: 283,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\ncase "$1" in\n start)\n echo "Démarrage"\n ;;\n _____\n echo "Arrêt"\n ;;\nesac\n\nObjectif : gérer également la commande \'stop\'.',
    reponse_f1: "end)",
    reponse_v: "stop)",
    reponse_f2: "exit)",
  },
  {
    id: 284,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\ncase "$1" in\n start) echo "Go" ;;\n stop) echo "Stop" ;;\n _____\nesac\n\nObjectif : afficher \'Commande inconnue\' pour toutes les autres valeurs.',
    reponse_f1: '?) echo "Commande inconnue" ;;',
    reponse_v: '*) echo "Commande inconnue" ;;',
    reponse_f2: 'default) echo "Commande inconnue" ;;',
  },
  {
    id: 285,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nbonjour(){\n _____\n}\n\nbonjour\n\nObjectif : afficher 'Bonjour'.",
    reponse_f1: 'print "Bonjour"',
    reponse_v: 'echo "Bonjour"',
    reponse_f2: 'cat "Bonjour"',
  },
  {
    id: 286,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\naddition(){\n echo $(($1+$2))\n}\n\n_____\n\nObjectif : appeler la fonction avec les valeurs 4 et 7.",
    reponse_f1: "addition(4,7)",
    reponse_v: "addition 4 7",
    reponse_f2: 'addition "4,7"',
  },
  {
    id: 287,
    question:
      'Diagnostic :\n\n#!/bin/bash\nif [ -f "$1" ]\nthen\n cat "$2"\nfi\n\nObjectif : afficher le fichier passé en paramètre.\nPourquoi le script ne fonctionne-t-il pas ?',
    reponse_f1: "Il manque un else",
    reponse_v: "Le test porte sur $1 mais l'affichage utilise $2",
    reponse_f2: "cat ne fonctionne pas dans un if",
  },
  {
    id: 288,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nif [ _____ "$1" ]\nthen\n echo "Exécutable"\nfi\n\nObjectif : vérifier que le fichier est exécutable.',
    reponse_f1: "-r",
    reponse_v: "-x",
    reponse_f2: "-w",
  },
  {
    id: 289,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nfind . -type f -name '*.java' | while read f\n do\n _____\n done\n\nObjectif : afficher le nom de chaque fichier Java.",
    reponse_f1: 'cat "$f"',
    reponse_v: 'echo "$f"',
    reponse_f2: 'pwd "$f"',
  },
  {
    id: 290,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nTOTAL=0\nfor n in 4 8 10\n do\n TOTAL=$((TOTAL+n))\n done\n\n_____\n\nObjectif : afficher le résultat du calcul.",
    reponse_f1: "cat $TOTAL",
    reponse_v: "echo $TOTAL",
    reponse_f2: "print $TOTAL",
  },
  {
    id: 291,
    question:
      "Diagnostic :\n\n#!/bin/bash\nfor i in 1 2 3\n do\n echo $i\n\nObjectif : afficher 1 2 3.\nPourquoi le script est-il incorrect ?",
    reponse_f1: "Il manque un then",
    reponse_v: "Il manque le mot-clé done",
    reponse_f2: "Le for est incorrect",
  },
  {
    id: 292,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nNB=$(find . -type f | wc -l)\nif [ $NB -gt 100 ]\nthen\n _____\nfi\n\nObjectif : quitter le script avec un code d'erreur.",
    reponse_f1: "break",
    reponse_v: "exit 1",
    reponse_f2: "return",
  },
  {
    id: 293,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nfor f in *.txt\n do\n [ -f "$f" ] || _____\n echo "$f"\n done\n\nObjectif : ignorer les itérations où aucun fichier .txt n\'existe.',
    reponse_f1: "exit",
    reponse_v: "continue",
    reponse_f2: "break",
  },
  {
    id: 294,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nfind . -type f -name '*.log' | while read f\n do\n _____ \"$f\"\n done\n\nObjectif : compresser chaque fichier .log.",
    reponse_f1: "zip",
    reponse_v: "gzip",
    reponse_f2: "tar",
  },
  {
    id: 295,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nfor f in *.java\n do\n grep -q TODO "$f"\n if [ $? -eq 0 ]\n then\n _____\n fi\n done\n\nObjectif : afficher le nom des fichiers contenant TODO.',
    reponse_f1: 'cat "$f"',
    reponse_v: 'echo "$f"',
    reponse_f2: "pwd",
  },
  {
    id: 296,
    question:
      "Diagnostic :\n\n#!/bin/bash\necho 'Bonjour $USER'\n\nPourquoi le nom de l'utilisateur n'apparaît-il pas ?",
    reponse_f1: "USER n'existe pas",
    reponse_v: "Les quotes simples empêchent l'expansion des variables",
    reponse_f2: "echo ne supporte pas les variables",
  },
  {
    id: 297,
    question:
      "Complétez la ligne manquante :\n\n#!/bin/bash\nread NOM\n_____\n\nObjectif : afficher 'Bonjour Pierre' si l'utilisateur saisit Pierre.",
    reponse_f1: 'cat "Bonjour $NOM"',
    reponse_v: 'echo "Bonjour $NOM"',
    reponse_f2: 'print "Bonjour $NOM"',
  },
  {
    id: 298,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nfind . -type f | while read f\n do\n echo "$f"\n done _____ liste.txt\n\nObjectif : enregistrer le résultat dans liste.txt.',
    reponse_f1: ">>",
    reponse_v: ">",
    reponse_f2: "<",
  },
  {
    id: 299,
    question:
      'Complétez la ligne manquante :\n\n#!/bin/bash\nif [ $# -ne 2 ]\nthen\n echo "Usage : $0 fichier mot"\n _____\nfi\n\nObjectif : arrêter le script en cas de mauvais nombre de paramètres.',
    reponse_f1: "continue",
    reponse_v: "exit 1",
    reponse_f2: "break",
  },
  {
    id: 300,
    question:
      'Mini TP :\n\n#!/bin/bash\nDOSSIER=$1\n\nif [ ! -d "$DOSSIER" ]\nthen\n echo "Dossier invalide"\n exit 1\nfi\n\nPDF=$(find "$DOSSIER" -type f -name \'*.pdf\' | wc -l)\nJPG=$(find "$DOSSIER" -type f -name \'*.jpg\' | wc -l)\n\n_____\n\necho "PDF : $PDF"\necho "JPG : $JPG"\necho "TXT : $TXT"\n\nObjectif : compléter le script afin de compter les fichiers texte.',
    reponse_f1: "TXT=$(find \"$DOSSIER\" -type d -name '*.txt' | wc -l)",
    reponse_v: "TXT=$(find \"$DOSSIER\" -type f -name '*.txt' | wc -l)",
    reponse_f2: "TXT=$(grep '.txt' \"$DOSSIER\" | wc -l)",
  },
  {
    id: 302,
    question:
      'Mini TP Bash : complétez les 3 lignes manquantes.\n\n#!/bin/bash\nDOSSIER=$1\nEXT=$2\n\nif [ $# -ne 2 ]\nthen\n echo "Usage : $0 dossier extension"\n exit 1\nfi\n\nif [ ! -d "$DOSSIER" ]\nthen\n echo "Dossier invalide"\n exit 2\nfi\n\n_____\n_____\n_____\n\necho "Recherche terminée"\n\nObjectif :\n1. compter les fichiers ayant l\'extension demandée ;\n2. déterminer le plus gros fichier de cette extension ;\n3. afficher le résultat.',
    reponse_f1:
      'NB=$(find "$DOSSIER" -name "*.$EXT" | wc -l)\nPLUS_GROS=$(find "$DOSSIER" -type f -name "*.$EXT" | head -1)\necho "Total : $NB - Plus gros : $PLUS_GROS"',
    reponse_v:
      'NB=$(find "$DOSSIER" -type f -name "*.$EXT" | wc -l)\nPLUS_GROS=$(find "$DOSSIER" -type f -name "*.$EXT" -exec ls -S {} + | head -1)\necho "Total : $NB - Plus gros : $PLUS_GROS"',
    reponse_f2:
      'NB=$(ls "$DOSSIER" | wc -l)\nPLUS_GROS=$(du -sh "$DOSSIER")\necho "$PLUS_GROS"',
  },
  {
    id: 303,
    question:
      'Mini TP Bash : complétez les 3 lignes manquantes.\n\n#!/bin/bash\nLOG=$1\n\nif [ ! -f "$LOG" ]\nthen\n echo "Fichier introuvable"\n exit 1\nfi\n\n_____\n_____\n_____\n\nObjectif :\n1. compter les lignes contenant ERROR ;\n2. compter les lignes contenant WARNING ;\n3. afficher un résumé.',
    reponse_f1:
      'ERR=$(wc -l < "$LOG")\nWARN=$(grep WARNING "$LOG")\necho "$ERR $WARN"',
    reponse_v:
      'ERR=$(grep -c \'ERROR\' "$LOG")\nWARN=$(grep -c \'WARNING\' "$LOG")\necho "ERROR=$ERR WARNING=$WARN"',
    reponse_f2:
      'ERR=$(grep ERROR "$LOG")\nWARN=$(grep WARNING "$LOG")\ncat "$ERR"',
  },
  {
    id: 304,
    question:
      "Mini TP Bash : complétez les 3 lignes manquantes.\n\n#!/bin/bash\nDOSSIER=$1\n\nif [ ! -d \"$DOSSIER\" ]\nthen\n exit 1\nfi\n\n_____\n_____\n_____\n\nObjectif :\n1. créer le dossier archive s'il n'existe pas ;\n2. copier tous les fichiers .txt dans ce dossier ;\n3. afficher 'Sauvegarde terminée'.",
    reponse_f1:
      'mkdir archive\nmv "$DOSSIER"/*.txt archive/\ncat "Sauvegarde terminée"',
    reponse_v:
      'mkdir -p archive\ncp "$DOSSIER"/*.txt archive/\necho "Sauvegarde terminée"',
    reponse_f2:
      'mkdir archive\nrm "$DOSSIER"/*.txt\necho "Sauvegarde terminée"',
  },
];
