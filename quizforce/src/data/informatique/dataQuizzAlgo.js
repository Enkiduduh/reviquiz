export const dataQuizzLinux = [
   {
    id: 51,
    question: "Quelle commande permet d’afficher le répertoire courant ?",
    reponse_f1: "ls",
    reponse_v: "pwd",
    reponse_f2: "cd",
  },
  {
    id: 52,
    question: "Comment créer un nouveau répertoire nommé 'docs' ?",
    reponse_f1: "create repertory docs",
    reponse_v: "mkdir docs",
    reponse_f2: "make dir docs",
  },
  {
    id: 53,
    question:
      "Quelle commande utilise-t-on pour copier un fichier a.txt vers b.txt ?",
    reponse_f1: "a.txt copy b.txt",
    reponse_v: "cp a.txt > b.txt",
    reponse_f2: "copy a.txt b.txt",
  },
  {
    id: 54,
    question:
      "Quelle option de ls affiche les fichiers cachés (commençant par .) ?",
    reponse_f1: "ls -c",
    reponse_v: "ls -a",
    reponse_f2: "ls -h",
  },
  {
    id: 55,
    question: "Quelle commande permet de déplacer (ou renommer) un fichier ?",
    reponse_f1: "move [options] source destination",
    reponse_v: "mv [options] source destination",
    reponse_f2: "replace [options] source destination",
  },
  {
    id: 56,
    question:
      "Comment afficher le contenu d’un fichier texte dans le terminal ?",
    reponse_f1: "read fichier.txt",
    reponse_v: "cat fichier.txt",
    reponse_f2: "echo 'fichier.txt'",
  },
  {
    id: 57,
    question: "Quelle commande permet de rechercher un texte dans un fichier ?",
    reponse_f1: "search 'texte_à_chercher' nom_du_fichier",
    reponse_v: "grep 'texte_à_chercher' nom_du_fichier",
    reponse_f2: "find 'texte_à_chercher' nom_du_fichier",
  },
  {
    id: 58,
    question: "Quel caractère représente le répertoire parent dans un chemin ?",
    reponse_f1: "/",
    reponse_v: "..",
    reponse_f2: ".",
  },
  {
    id: 59,
    question: "Quelle commande montre les processus en cours d’exécution ?",
    reponse_f1: "show processus",
    reponse_v: "ps",
    reponse_f2: "top",
  },
  {
    id: 60,
    question: "Comment arrêter un processus dont le PID est 1234 ?",
    reponse_f1: "stop pid 1234",
    reponse_v: "kill 1234",
    reponse_f2: "stop ps 1234",
  },
  {
    id: 61,
    question:
      "Quelle commande permet de changer les permissions d’un fichier en lecture-écriture pour le propriétaire uniquement ?",
    reponse_f1: "chmod 700 nom_du_fichier",
    reponse_v: "chmod 600 nom_du_fichier",
    reponse_f2: "chmod u=rwx, go= nom_du_fichier",
  },
  {
    id: 62,
    question:
      "Quelle commande permet de voir l’espace disque utilisé sur chaque partition ?",
    reponse_f1: "check disk",
    reponse_v: "df -h",
    reponse_f2: "diskfile check",
  },
  {
    id: 63,
    question: "Quelle est la signification exacte du champ “SUID” dans les permissions d’un fichier ?",
    reponse_f1: "Le fichier s’exécute avec les privilèges du groupe propriétaire",
    reponse_v: "Le fichier s’exécute avec les privilèges de son propriétaire",
    reponse_f2: "Le fichier ne peut être exécuté que par le propriétaire",
  },
  {
    id: 64,
    question:
      "Quelle commande permet d’installer un paquet avec apt sur les distributions Debian/Ubuntu ?",
    reponse_f1: "sudo apt download <nom_du_paquet>",
    reponse_v: "sudo apt install <nom_du_paquet>",
    reponse_f2: "sudo install apt <nom_du_paquet>",
  },
  {
    id: 65,
    question:
      "Quelle commande permet de mettre à jour la liste des paquets disponibles avec apt ?",
    reponse_f1: "sudo apt update install",
    reponse_v: "sudo apt update",
    reponse_f2: "sudo update apt",
  },
  {
    id: 66,
    question:
      "Quel symbole est utilisé pour rediriger la sortie d’une commande vers un fichier (écrasement) ?",
    reponse_f1: ">>",
    reponse_v: ">",
    reponse_f2: "<",
  },
  {
    id: 67,
    question:
      "Quel symbole est utilisé pour ajouter la sortie d’une commande à la fin d’un fichier existant ?",
    reponse_f1: ">",
    reponse_v: ">>",
    reponse_f2: "<<",
  },
  {
    id: 68,
    question:
      "Quelle commande permet de visualiser les 10 dernières lignes d’un fichier ?",
    reponse_f1: "head -n 10 fichier",
    reponse_v: "tail -n 10 fichier",
    reponse_f2: "cat -n 10 fichier",
  },
  {
    id: 69,
    question:
      "Quelle combinaison de touches permet d’interrompre une commande en cours d’exécution ?",
    reponse_f1: "ctrl + d",
    reponse_v: "ctrl + c",
    reponse_f2: "ctrl + s",
  },
  {
    id: 70,
    question:
      "Quel répertoire contient les fichiers de configuration système globaux (ex. fstab, hosts) ?",
    reponse_f1: "/usr",
    reponse_v: "/etc",
    reponse_f2: "/bin",
  },
  {
    id: 71,
    question:
      "Quelle commande permet de vérifier l’intégrité d’un système de fichiers ext4 ?",
    reponse_f1: "sudo fsck -f ext4 /dev/sda1",
    reponse_v: "sudo fsck -t ext4 /dev/sda1",
    reponse_f2: "sudo fsck -t ext4/dev/sda1",
  },
  {
    id: 72,
    question:
      "Quel utilitaire permet de visualiser les ports ouverts et les services qui les utilisent ?",
    reponse_f1: "showport --all",
    reponse_v: "netstat -tulnp",
    reponse_f2: "ip a",
  },
  {
    id: 73,
    question:
      "Comment planifier l’exécution d’un script backup.sh tous les dimanches à 3 h du matin ?",
    reponse_f1: "0 3 7 * * backup.sh",
    reponse_v: "0 3 * * 7 /bin/bash/backup.sh",
    reponse_f2: "0 3 7 * 7 /bin/bash/backup.sh",
  },
  {
    id: 74,
    question:
      "Comment rechercher le texte « error » dans tous les fichiers du répertoire /var/log ?",
    reponse_f1: "find -n 'error' /var/log",
    reponse_v: "grep 'error' /var/log",
    reponse_f2: "search 'error' in /var/log",
  },
  {
    id: 75,
    question:
      "Comment ajouter un utilisateur nommé julien avec un répertoire personnel ?",
    reponse_f1: "mkdir /home/julien\nsudo chown -R julien:julien /home/julien",
    reponse_v:
      "sudo useradd -m -s /bin/bash julien\nsudo passwd julien\ngetent passwd julien",
    reponse_f2: "sudo createuser julien\nsudo set -mdp\sudo testuser julien",
  },
  {
    id: 76,
    question:
      "Quelle commande permet de voir les processus en cours d’exécution triés par utilisation CPU ?",
    reponse_f1: "ps aux | grep '%cpu'",
    reponse_v: "ps aux --sort=-%cpu",
    reponse_f2: "show ps -s '%cpu'",
  },
  {
    id: 77,
    question:
      "Comment monter temporairement une clé USB située sur /dev/sdb1 dans le répertoire /mnt/usb ?",
    reponse_f1: "sudo umount /mnt/usb",
    reponse_v: "sudo mount /dev/sdb1 /mnt/usb",
    reponse_f2: "sudo mkdir -p /mnt/usb",
  },
  {
    id: 78,
    question: "Quel fichier contient la liste des utilisateurs du système ?",
    reponse_f1: "/usr/user",
    reponse_v: "/etc/passwd",
    reponse_f2: "/etc/host",
  },
  {
    id: 79,
    question:
      "Quelle est la différence entre cron et systemd-timer pour la planification de tâches ?",
    reponse_f1:
      "systemd-timer n'existe pas, seul cron permet la planification de tâches.",
    reponse_v:
      "cron reste le choix le plus simple et le plus portable pour des tâches planifiées à intervalles réguliers.\nsystemd‑timer offre une intégration profonde\navec le reste du système, des déclencheurs plus riches, une meilleure gestion des logs et des possibilités de sandboxing, au prix d’une configuration un peu plus\n verbeuse et d’une dépendance à systemd.",
    reponse_f2: "Aucune, cron et systemd-timer fonctionne de la même manière.",
  },
  {
    id: 80,
    question:
      "Quelle commande permet de visualiser les processus en cours avec une interface interactive ?",
    reponse_f1: "ps",
    reponse_v: "htop",
    reponse_f2: "jobs",
  },
  {
    id: 81,
    question: "Que fait l’option -r de la commande chmod ?",
    reponse_f1: " Change le propriétaire ",
    reponse_v: "Applique les droits récursivement ",
    reponse_f2: "Réinitialise les droits à 000",
  },
  {
    id: 82,
    question: "Quel est le rôle du démon systemd ?",
    reponse_f1: "Gérer les paquets",
    reponse_v: "Gérer le démarrage et les services",
    reponse_f2: "Gérer les utilisateurs",
  },
  {
    id: 83,
    question: "Lequel de ces systèmes de fichiers est journalisé ?",
    reponse_f1: "NTFS",
    reponse_v: "ext4",
    reponse_f2: "FAT32",
  },
  {
    id: 84,
    question: "Que signifie le symbole ~ dans un chemin d’accès ?",
    reponse_f1: "Le répertoire personnel de l'utilisateur",
    reponse_v: "Le répertoire racine /",
    reponse_f2: "Le répertoire de travail actuel",
  },
  {
    id: 85,
    question:
      "Quelle commande crée un lien symbolique nommé link pointant vers le fichier target ?",
    reponse_f1: "ln target link",
    reponse_v: "ln -s target link",
    reponse_f2: "mklink target link",
  },
  {
    id: 86,
    question:
      "Quel fichier contient les variables d’environnement globales pour tous les utilisateurs ?",
    reponse_f1: "/etc/profile ",
    reponse_v: "/etc/environment",
    reponse_f2: "/etc/bash.bashrc",
  },
  {
    id: 87,
    question:
      "Lequel de ces outils est utilisé pour surveiller les performances réseau en temps réel ?",
    reponse_f1: "netstat",
    reponse_v: "iftop",
    reponse_f2: "iostat",
  },
  {
    id: 88,
    question:
      "	Quel utilitaire permet de chiffrer un disque complet sous Linux ?",
    reponse_f1: "gpg",
    reponse_v: "cryptsetup",
    reponse_f2: "openssl",
  },
  {
    id: 89,
    question: "Que fait la commande systemctl isolate multi-user.target ?",
    reponse_f1: "Crée un nouveau groupe d’utilisateurs",
    reponse_v:
      "Passe en mode console multi-utilisateur (sans interface graphique) ",
    reponse_f2: "Active le service multi-user",
  },
  {
    id: 90,
    question:
      "Lequel de ces répertoires contient les exécutables système accessibles à tous les utilisateurs ?",
    reponse_f1: "/opt",
    reponse_v: "/usr/bin",
    reponse_f2: "/sbin",
  },
  {
    id: 91,
    question:
      "Quelle commande permet de créer une archive compressée au format tar.gz ?",
    reponse_f1: "tar -xzf",
    reponse_v: "tar -czf",
    reponse_f2: "gzip -c",
  },
  {
    id: 92,
    question:
      "Quel fichier stocke les informations de résolution DNS locales (hosts) ?",
    reponse_f1: "/etc/nsswitch.conf",
    reponse_v: "/etc/hosts",
    reponse_f2: "/etc/network/interfaces",
  },
  {
    id: 93,
    question:
      "Quelle combinaison de touches permet de passer du mode commande au mode insertion dans vim ?",
    reponse_f1: "Ctrl + c -> i",
    reponse_v: "Esc -> i",
    reponse_f2: "Ctrl + [ -> i",
  },
  {
    id: 94,
    question:
      "Quelle commande permet de voir les dépendances d’un paquet deb sans l’installer ?",
    reponse_f1: "dpkg -L",
    reponse_v: "apt-cache depends",
    reponse_f2: "yum deplist",
  },
  {
    id: 95,
    question: "Que signifie le préfixe /dev/ dans un chemin Linux ?",
    reponse_f1: "Répertoire de configuration",
    reponse_v: "Périphériques du noyau",
    reponse_f2: "Point de montage des systèmes de fichiers",
  },
  {
    id: 96,
    question: "Que fait la commande [sudo !!] ?",
    reponse_f1: "Ouvre un shell root",
    reponse_v: "Réexécute la dernière commande en tant que super-utilisateur",
    reponse_f2: "Vide le cache sudo",
  },
  {
    id: 97,
    question: "	Quel utilitaire permet de créer un volume logique (LVM) ?",
    reponse_f1: "fdisk",
    reponse_v: "pvcreate",
    reponse_f2: "mkfs",
  },
  {
    id: 98,
    question:
      "Quel utilitaire permet de montrer la hiérarchie des processus sous forme d’arbre ?",
    reponse_f1: "ps -ef",
    reponse_v: "pstree",
    reponse_f2: "htop",
  },
  {
    id: 99,
    question:
      "Lequel de ces répertoires contient les exécutables système accessibles à tous les utilisateurs ?",
    reponse_f1: "ps aux -n 5 --sort=-%mem",
    reponse_v: "ps aux --sort=-%mem | head -5",
    reponse_f2: "ps aux --sort=-%mem | grep -5",
  },
  {
    id: 100,
    question:
      "Quelle option de dd permet de copier un disque en spécifiant la taille du bloc à 4Ko ?",
    reponse_f1: "size=4K",
    reponse_v: "bs=4K",
    reponse_f2: "blocksize=4K",
  },
  {
    id: 101,
    question:
      "Quelle option de find permet de rechercher les fichiers modifiés il y a moins de 2 jours ?",
    reponse_f1: "-atime -2",
    reponse_v: "-mtime -2",
    reponse_f2: "-ctime -2",
  },

  {
    id: 102,
    question:
      "Quelle option de ssh permet de spécifier une clé privée différente de celle par défaut ?",
    reponse_f1: "-c",
    reponse_v: "-i",
    reponse_f2: "-k",
  },
  {
    id: 103,
    question:
      "Quelle option de mount permet de monter un système de fichiers en lecture-seule ?",
    reponse_f1: "-l ro",
    reponse_v: "-o ro",
    reponse_f2: "-t ro",
  },
  {
    id: 104,
    question:
      "Si le umask d’un utilisateur est réglé sur 027, quels seront les droits par défaut d’un fichier créé avec touch nouveau.txt (en supposant que le programme crée le fichier avec les permissions classiques 666 ?)",
    reponse_f1: "rw-rw----",
    reponse_v: "rw-r-----",
    reponse_f2: "rwxr-x---",
  },
  {
    id: 105,
    question:
      "Quelle option de chmod donne les droits de lecture, écriture et exécution à l’utilisateur, et lecture/exécution aux autres ?",
    reponse_f1: "644",
    reponse_v: "755",
    reponse_f2: "705",
  },
  {
    id: 106,
    question:
      "Quel fichier contient les paramètres de montage par défaut du noyau ?",
    reponse_f1: "/etc/fstab",
    reponse_v: "/etc/mtab",
    reponse_f2: "/proc/mounts",
  },
  {
    id: 107,
    question:
      "Quel utilitaire affiche les appels système d’un processus en temps réel ?",
    reponse_f1: "ltrace",
    reponse_v: "strace",
    reponse_f2: "ftrace",
  },
  {
    id: 108,
    question:
      "Quelle option de ssh désactive l’authentification par mot de passe ?",
    reponse_f1: "-K",
    reponse_v: "-o PasswordAuthentication=no",
    reponse_f2: "-P",
  },
  {
    id: 109,
    question:
      "	Quelle commande affiche les informations détaillées d’un disque (modèle, taille, partitions) ?",
    reponse_f1: "fdisk -l",
    reponse_v: "lsblk -f",
    reponse_f2: "blkid",
  },
  {
    id: 110,
    question: "Sous systemd, comment redémarrer le service networking ?",
    reponse_f1: "systemctl restart networking  ",
    reponse_v: "systemctl restart networking.service",
    reponse_f2: "service networking restart",
  },
  {
    id: 111,
    question:
      "Quel fichier stocke les règles du pare-feu iptables persistantes sur Debian/Ubuntu ?",
    reponse_f1: "/etc/firewall/iptables.rules",
    reponse_v: "/etc/iptables/rules.v4",
    reponse_f2: "/etc/netfilter/iptables.conf",
  },
  {
    id: 112,
    question:
      "Quelle option de grep permet d’afficher le numéro de ligne où apparaît le motif ?",
    reponse_f1: "-l",
    reponse_v: "-n",
    reponse_f2: "-c",
  },
  {
    id: 113,
    question:
      "Sous iptables, quelle cible indique que le paquet doit être accepté et que le traitement des règles doit s’arrêter ?",
    reponse_f1: "DROP",
    reponse_v: "ACCEPT",
    reponse_f2: "RETURN",
  },
  {
    id: 114,
    question:
      "Quel fichier contient la configuration du journal systemd (rotation, taille, etc.) ?",
    reponse_f1: "/etc/journald.conf",
    reponse_v: "/etc/systemd/journald.conf",
    reponse_f2: "/etc/systemd/system.conf",
  },
  {
    id: 115,
    question:
      "Quel fichier définit les aliases de shell globaux pour tous les utilisateurs (ex. ll=ls -l) ?",
    reponse_f1: "etc/profile ",
    reponse_v: "/etc/bash.bashrc",
    reponse_f2: "/etc/bashrc",
  },
  {
    id: 116,
    question:
      "Sous systemd, quel type d’unité est utilisé pour surveiller l’existence d’un fichier et déclencher un service lorsqu’il apparaît ?",
    reponse_f1: "socket",
    reponse_v: "path",
    reponse_f2: "target",
  },
  {
    id: 117,
    question:
      "Quelle option de chmod permet de définir les bits suid, sgid et sticky en même temps ?",
    reponse_f1: "-R",
    reponse_v: "-t",
    reponse_f2: "-s",
  },
  {
    id: 118,
    question:
      "Quel utilitaire permet de détecter les fuites de mémoire d’un processus en temps réel (ex. via perf) ?",
    reponse_f1: "valgrind --leak-check=full",
    reponse_v: "perf mem record",
    reponse_f2: "memcheck",
  },
  {
    id: 119,
    question:
      "Quel utilitaire netlink permet d’inspecter les tables de routage du noyau (IPv4/IPv6) de façon structurée ?",
    reponse_f1: "ip route show",
    reponse_v: "ip -details route show",
    reponse_f2: "route -n",
  },
  {
    id: 120,
    question:
      "Quelle commande permet d’afficher le contenu d’un fichier texte page par page ?",
    reponse_f1: "cat",
    reponse_v: "more",
    reponse_f2: "grep",
  },
];
