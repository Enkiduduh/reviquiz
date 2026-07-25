export const dataQuizz_pile_tcp_ip_typologies_protocoles_infrastructures_tres_difficiles = [
  {
    "id": 1,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application web transmet une requête HTTPS sur Ethernet.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 01\n\nRéférence exercice : TCPIP-INFRA-001`",
    "reponse_v": "Données applicatives → segment TCP → paquet IP → trame Ethernet → bits",
    "reponse_f1": "Données applicatives → paquet IP → segment TCP → trame Ethernet → bits",
    "reponse_f2": "Données applicatives → trame Ethernet → segment TCP → paquet IP → bits",
    "explication": "La pile ajoute successivement les en-têtes transport, Internet puis accès réseau."
  },
  {
    "id": 2,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn routeur reçoit une trame Ethernet contenant un paquet IPv4.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 02\n\nRéférence exercice : TCPIP-INFRA-002`",
    "reponse_v": "Il retire l'en-tête de liaison, traite le paquet IP puis crée une nouvelle trame",
    "reponse_f1": "Il transmet la trame Ethernet initiale sans modification",
    "reponse_f2": "Il retire l'en-tête TCP avant d'examiner l'adresse IP",
    "explication": "L'encapsulation de couche accès réseau est locale à chaque lien."
  },
  {
    "id": 3,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application nécessite une livraison ordonnée et la retransmission des pertes.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 03\n\nRéférence exercice : TCPIP-INFRA-003`",
    "reponse_v": "Utiliser TCP",
    "reponse_f1": "Utiliser UDP",
    "reponse_f2": "Utiliser ARP",
    "explication": "TCP fournit séquencement, accusés de réception et retransmissions."
  },
  {
    "id": 4,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application temps réel accepte quelques pertes mais exige une faible latence.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 04\n\nRéférence exercice : TCPIP-INFRA-004`",
    "reponse_v": "Utiliser UDP avec mécanismes applicatifs adaptés",
    "reponse_f1": "Utiliser obligatoirement TCP avec retransmissions illimitées",
    "reponse_f2": "Utiliser ICMP comme transport applicatif",
    "explication": "UDP réduit la surcharge et évite le blocage lié aux retransmissions."
  },
  {
    "id": 5,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nLe champ TTL d'un paquet IPv4 vaut 1 lorsqu'il arrive sur un routeur.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 05\n\nRéférence exercice : TCPIP-INFRA-005`",
    "reponse_v": "Le routeur détruit le paquet après décrément et peut envoyer ICMP Time Exceeded",
    "reponse_f1": "Le routeur transmet le paquet avec TTL 0",
    "reponse_f2": "Le commutateur voisin augmente automatiquement le TTL",
    "explication": "Le TTL empêche les paquets de circuler indéfiniment."
  },
  {
    "id": 6,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn client ouvre une connexion TCP vers le port 443 d'un serveur.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 06\n\nRéférence exercice : TCPIP-INFRA-006`",
    "reponse_v": "Le port destination identifie le service HTTPS, le port source identifie le socket client",
    "reponse_f1": "Le port 443 remplace l'adresse IP du serveur",
    "reponse_f2": "Le port source appartient à la couche liaison",
    "explication": "Les ports assurent le multiplexage à la couche transport."
  },
  {
    "id": 7,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nLe ping fonctionne vers une adresse IP mais pas vers son nom DNS.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 07\n\nRéférence exercice : TCPIP-INFRA-007`",
    "reponse_v": "La connectivité IP est présente ; il faut vérifier la résolution DNS",
    "reponse_f1": "La couche physique est nécessairement en panne",
    "reponse_f2": "Le routage IP est forcément absent",
    "explication": "Le symptôme isole principalement un problème applicatif de résolution."
  },
  {
    "id": 8,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn hôte reçoit une réponse ICMP Destination Unreachable, port unreachable.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 08\n\nRéférence exercice : TCPIP-INFRA-008`",
    "reponse_v": "Le paquet a atteint l'hôte mais aucun service UDP n'écoute sur le port visé",
    "reponse_f1": "Le câble Ethernet est débranché",
    "reponse_f2": "Le serveur DNS a expiré",
    "explication": "ICMP port unreachable est typiquement généré quand aucun socket UDP n'écoute."
  },
  {
    "id": 9,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne session TCP reçoit plusieurs segments hors ordre.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 09\n\nRéférence exercice : TCPIP-INFRA-009`",
    "reponse_v": "TCP peut les réordonner grâce aux numéros de séquence",
    "reponse_f1": "IP réordonne obligatoirement les paquets avant TCP",
    "reponse_f2": "Ethernet renvoie les trames dans l'ordre exact",
    "explication": "Le réordonnancement de bout en bout appartient à TCP."
  },
  {
    "id": 10,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne MTU trop faible provoque l'échec de gros transferts mais pas des petits paquets.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 10\n\nRéférence exercice : TCPIP-INFRA-010`",
    "reponse_v": "Suspecter fragmentation, PMTUD ou MSS mal ajustée",
    "reponse_f1": "Suspecter uniquement un conflit d'adresse MAC",
    "reponse_f2": "Suspecter uniquement une erreur DNS",
    "explication": "Les problèmes de taille de paquets apparaissent souvent sur les flux volumineux."
  },
  {
    "id": 11,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application web transmet une requête HTTPS sur Ethernet.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 11\n\nRéférence exercice : TCPIP-INFRA-011`",
    "reponse_v": "Données applicatives → segment TCP → paquet IP → trame Ethernet → bits",
    "reponse_f1": "Données applicatives → paquet IP → segment TCP → trame Ethernet → bits",
    "reponse_f2": "Données applicatives → trame Ethernet → segment TCP → paquet IP → bits",
    "explication": "La pile ajoute successivement les en-têtes transport, Internet puis accès réseau."
  },
  {
    "id": 12,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn routeur reçoit une trame Ethernet contenant un paquet IPv4.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 12\n\nRéférence exercice : TCPIP-INFRA-012`",
    "reponse_v": "Il retire l'en-tête de liaison, traite le paquet IP puis crée une nouvelle trame",
    "reponse_f1": "Il transmet la trame Ethernet initiale sans modification",
    "reponse_f2": "Il retire l'en-tête TCP avant d'examiner l'adresse IP",
    "explication": "L'encapsulation de couche accès réseau est locale à chaque lien."
  },
  {
    "id": 13,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application nécessite une livraison ordonnée et la retransmission des pertes.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 13\n\nRéférence exercice : TCPIP-INFRA-013`",
    "reponse_v": "Utiliser TCP",
    "reponse_f1": "Utiliser UDP",
    "reponse_f2": "Utiliser ARP",
    "explication": "TCP fournit séquencement, accusés de réception et retransmissions."
  },
  {
    "id": 14,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application temps réel accepte quelques pertes mais exige une faible latence.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 14\n\nRéférence exercice : TCPIP-INFRA-014`",
    "reponse_v": "Utiliser UDP avec mécanismes applicatifs adaptés",
    "reponse_f1": "Utiliser obligatoirement TCP avec retransmissions illimitées",
    "reponse_f2": "Utiliser ICMP comme transport applicatif",
    "explication": "UDP réduit la surcharge et évite le blocage lié aux retransmissions."
  },
  {
    "id": 15,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nLe champ TTL d'un paquet IPv4 vaut 1 lorsqu'il arrive sur un routeur.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 15\n\nRéférence exercice : TCPIP-INFRA-015`",
    "reponse_v": "Le routeur détruit le paquet après décrément et peut envoyer ICMP Time Exceeded",
    "reponse_f1": "Le routeur transmet le paquet avec TTL 0",
    "reponse_f2": "Le commutateur voisin augmente automatiquement le TTL",
    "explication": "Le TTL empêche les paquets de circuler indéfiniment."
  },
  {
    "id": 16,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn client ouvre une connexion TCP vers le port 443 d'un serveur.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 16\n\nRéférence exercice : TCPIP-INFRA-016`",
    "reponse_v": "Le port destination identifie le service HTTPS, le port source identifie le socket client",
    "reponse_f1": "Le port 443 remplace l'adresse IP du serveur",
    "reponse_f2": "Le port source appartient à la couche liaison",
    "explication": "Les ports assurent le multiplexage à la couche transport."
  },
  {
    "id": 17,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nLe ping fonctionne vers une adresse IP mais pas vers son nom DNS.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 17\n\nRéférence exercice : TCPIP-INFRA-017`",
    "reponse_v": "La connectivité IP est présente ; il faut vérifier la résolution DNS",
    "reponse_f1": "La couche physique est nécessairement en panne",
    "reponse_f2": "Le routage IP est forcément absent",
    "explication": "Le symptôme isole principalement un problème applicatif de résolution."
  },
  {
    "id": 18,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn hôte reçoit une réponse ICMP Destination Unreachable, port unreachable.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 18\n\nRéférence exercice : TCPIP-INFRA-018`",
    "reponse_v": "Le paquet a atteint l'hôte mais aucun service UDP n'écoute sur le port visé",
    "reponse_f1": "Le câble Ethernet est débranché",
    "reponse_f2": "Le serveur DNS a expiré",
    "explication": "ICMP port unreachable est typiquement généré quand aucun socket UDP n'écoute."
  },
  {
    "id": 19,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne session TCP reçoit plusieurs segments hors ordre.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 19\n\nRéférence exercice : TCPIP-INFRA-019`",
    "reponse_v": "TCP peut les réordonner grâce aux numéros de séquence",
    "reponse_f1": "IP réordonne obligatoirement les paquets avant TCP",
    "reponse_f2": "Ethernet renvoie les trames dans l'ordre exact",
    "explication": "Le réordonnancement de bout en bout appartient à TCP."
  },
  {
    "id": 20,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne MTU trop faible provoque l'échec de gros transferts mais pas des petits paquets.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 20\n\nRéférence exercice : TCPIP-INFRA-020`",
    "reponse_v": "Suspecter fragmentation, PMTUD ou MSS mal ajustée",
    "reponse_f1": "Suspecter uniquement un conflit d'adresse MAC",
    "reponse_f2": "Suspecter uniquement une erreur DNS",
    "explication": "Les problèmes de taille de paquets apparaissent souvent sur les flux volumineux."
  },
  {
    "id": 21,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application web transmet une requête HTTPS sur Ethernet.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 21\n\nRéférence exercice : TCPIP-INFRA-021`",
    "reponse_v": "Données applicatives → segment TCP → paquet IP → trame Ethernet → bits",
    "reponse_f1": "Données applicatives → paquet IP → segment TCP → trame Ethernet → bits",
    "reponse_f2": "Données applicatives → trame Ethernet → segment TCP → paquet IP → bits",
    "explication": "La pile ajoute successivement les en-têtes transport, Internet puis accès réseau."
  },
  {
    "id": 22,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn routeur reçoit une trame Ethernet contenant un paquet IPv4.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 22\n\nRéférence exercice : TCPIP-INFRA-022`",
    "reponse_v": "Il retire l'en-tête de liaison, traite le paquet IP puis crée une nouvelle trame",
    "reponse_f1": "Il transmet la trame Ethernet initiale sans modification",
    "reponse_f2": "Il retire l'en-tête TCP avant d'examiner l'adresse IP",
    "explication": "L'encapsulation de couche accès réseau est locale à chaque lien."
  },
  {
    "id": 23,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application nécessite une livraison ordonnée et la retransmission des pertes.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 23\n\nRéférence exercice : TCPIP-INFRA-023`",
    "reponse_v": "Utiliser TCP",
    "reponse_f1": "Utiliser UDP",
    "reponse_f2": "Utiliser ARP",
    "explication": "TCP fournit séquencement, accusés de réception et retransmissions."
  },
  {
    "id": 24,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application temps réel accepte quelques pertes mais exige une faible latence.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 24\n\nRéférence exercice : TCPIP-INFRA-024`",
    "reponse_v": "Utiliser UDP avec mécanismes applicatifs adaptés",
    "reponse_f1": "Utiliser obligatoirement TCP avec retransmissions illimitées",
    "reponse_f2": "Utiliser ICMP comme transport applicatif",
    "explication": "UDP réduit la surcharge et évite le blocage lié aux retransmissions."
  },
  {
    "id": 25,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nLe champ TTL d'un paquet IPv4 vaut 1 lorsqu'il arrive sur un routeur.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 25\n\nRéférence exercice : TCPIP-INFRA-025`",
    "reponse_v": "Le routeur détruit le paquet après décrément et peut envoyer ICMP Time Exceeded",
    "reponse_f1": "Le routeur transmet le paquet avec TTL 0",
    "reponse_f2": "Le commutateur voisin augmente automatiquement le TTL",
    "explication": "Le TTL empêche les paquets de circuler indéfiniment."
  },
  {
    "id": 26,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn client ouvre une connexion TCP vers le port 443 d'un serveur.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 26\n\nRéférence exercice : TCPIP-INFRA-026`",
    "reponse_v": "Le port destination identifie le service HTTPS, le port source identifie le socket client",
    "reponse_f1": "Le port 443 remplace l'adresse IP du serveur",
    "reponse_f2": "Le port source appartient à la couche liaison",
    "explication": "Les ports assurent le multiplexage à la couche transport."
  },
  {
    "id": 27,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nLe ping fonctionne vers une adresse IP mais pas vers son nom DNS.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 27\n\nRéférence exercice : TCPIP-INFRA-027`",
    "reponse_v": "La connectivité IP est présente ; il faut vérifier la résolution DNS",
    "reponse_f1": "La couche physique est nécessairement en panne",
    "reponse_f2": "Le routage IP est forcément absent",
    "explication": "Le symptôme isole principalement un problème applicatif de résolution."
  },
  {
    "id": 28,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn hôte reçoit une réponse ICMP Destination Unreachable, port unreachable.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 28\n\nRéférence exercice : TCPIP-INFRA-028`",
    "reponse_v": "Le paquet a atteint l'hôte mais aucun service UDP n'écoute sur le port visé",
    "reponse_f1": "Le câble Ethernet est débranché",
    "reponse_f2": "Le serveur DNS a expiré",
    "explication": "ICMP port unreachable est typiquement généré quand aucun socket UDP n'écoute."
  },
  {
    "id": 29,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne session TCP reçoit plusieurs segments hors ordre.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 29\n\nRéférence exercice : TCPIP-INFRA-029`",
    "reponse_v": "TCP peut les réordonner grâce aux numéros de séquence",
    "reponse_f1": "IP réordonne obligatoirement les paquets avant TCP",
    "reponse_f2": "Ethernet renvoie les trames dans l'ordre exact",
    "explication": "Le réordonnancement de bout en bout appartient à TCP."
  },
  {
    "id": 30,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne MTU trop faible provoque l'échec de gros transferts mais pas des petits paquets.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 30\n\nRéférence exercice : TCPIP-INFRA-030`",
    "reponse_v": "Suspecter fragmentation, PMTUD ou MSS mal ajustée",
    "reponse_f1": "Suspecter uniquement un conflit d'adresse MAC",
    "reponse_f2": "Suspecter uniquement une erreur DNS",
    "explication": "Les problèmes de taille de paquets apparaissent souvent sur les flux volumineux."
  },
  {
    "id": 31,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application web transmet une requête HTTPS sur Ethernet.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 31\n\nRéférence exercice : TCPIP-INFRA-031`",
    "reponse_v": "Données applicatives → segment TCP → paquet IP → trame Ethernet → bits",
    "reponse_f1": "Données applicatives → paquet IP → segment TCP → trame Ethernet → bits",
    "reponse_f2": "Données applicatives → trame Ethernet → segment TCP → paquet IP → bits",
    "explication": "La pile ajoute successivement les en-têtes transport, Internet puis accès réseau."
  },
  {
    "id": 32,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn routeur reçoit une trame Ethernet contenant un paquet IPv4.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 32\n\nRéférence exercice : TCPIP-INFRA-032`",
    "reponse_v": "Il retire l'en-tête de liaison, traite le paquet IP puis crée une nouvelle trame",
    "reponse_f1": "Il transmet la trame Ethernet initiale sans modification",
    "reponse_f2": "Il retire l'en-tête TCP avant d'examiner l'adresse IP",
    "explication": "L'encapsulation de couche accès réseau est locale à chaque lien."
  },
  {
    "id": 33,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application nécessite une livraison ordonnée et la retransmission des pertes.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 33\n\nRéférence exercice : TCPIP-INFRA-033`",
    "reponse_v": "Utiliser TCP",
    "reponse_f1": "Utiliser UDP",
    "reponse_f2": "Utiliser ARP",
    "explication": "TCP fournit séquencement, accusés de réception et retransmissions."
  },
  {
    "id": 34,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application temps réel accepte quelques pertes mais exige une faible latence.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 34\n\nRéférence exercice : TCPIP-INFRA-034`",
    "reponse_v": "Utiliser UDP avec mécanismes applicatifs adaptés",
    "reponse_f1": "Utiliser obligatoirement TCP avec retransmissions illimitées",
    "reponse_f2": "Utiliser ICMP comme transport applicatif",
    "explication": "UDP réduit la surcharge et évite le blocage lié aux retransmissions."
  },
  {
    "id": 35,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nLe champ TTL d'un paquet IPv4 vaut 1 lorsqu'il arrive sur un routeur.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 35\n\nRéférence exercice : TCPIP-INFRA-035`",
    "reponse_v": "Le routeur détruit le paquet après décrément et peut envoyer ICMP Time Exceeded",
    "reponse_f1": "Le routeur transmet le paquet avec TTL 0",
    "reponse_f2": "Le commutateur voisin augmente automatiquement le TTL",
    "explication": "Le TTL empêche les paquets de circuler indéfiniment."
  },
  {
    "id": 36,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn client ouvre une connexion TCP vers le port 443 d'un serveur.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 36\n\nRéférence exercice : TCPIP-INFRA-036`",
    "reponse_v": "Le port destination identifie le service HTTPS, le port source identifie le socket client",
    "reponse_f1": "Le port 443 remplace l'adresse IP du serveur",
    "reponse_f2": "Le port source appartient à la couche liaison",
    "explication": "Les ports assurent le multiplexage à la couche transport."
  },
  {
    "id": 37,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nLe ping fonctionne vers une adresse IP mais pas vers son nom DNS.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 37\n\nRéférence exercice : TCPIP-INFRA-037`",
    "reponse_v": "La connectivité IP est présente ; il faut vérifier la résolution DNS",
    "reponse_f1": "La couche physique est nécessairement en panne",
    "reponse_f2": "Le routage IP est forcément absent",
    "explication": "Le symptôme isole principalement un problème applicatif de résolution."
  },
  {
    "id": 38,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn hôte reçoit une réponse ICMP Destination Unreachable, port unreachable.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 38\n\nRéférence exercice : TCPIP-INFRA-038`",
    "reponse_v": "Le paquet a atteint l'hôte mais aucun service UDP n'écoute sur le port visé",
    "reponse_f1": "Le câble Ethernet est débranché",
    "reponse_f2": "Le serveur DNS a expiré",
    "explication": "ICMP port unreachable est typiquement généré quand aucun socket UDP n'écoute."
  },
  {
    "id": 39,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne session TCP reçoit plusieurs segments hors ordre.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 39\n\nRéférence exercice : TCPIP-INFRA-039`",
    "reponse_v": "TCP peut les réordonner grâce aux numéros de séquence",
    "reponse_f1": "IP réordonne obligatoirement les paquets avant TCP",
    "reponse_f2": "Ethernet renvoie les trames dans l'ordre exact",
    "explication": "Le réordonnancement de bout en bout appartient à TCP."
  },
  {
    "id": 40,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne MTU trop faible provoque l'échec de gros transferts mais pas des petits paquets.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 40\n\nRéférence exercice : TCPIP-INFRA-040`",
    "reponse_v": "Suspecter fragmentation, PMTUD ou MSS mal ajustée",
    "reponse_f1": "Suspecter uniquement un conflit d'adresse MAC",
    "reponse_f2": "Suspecter uniquement une erreur DNS",
    "explication": "Les problèmes de taille de paquets apparaissent souvent sur les flux volumineux."
  },
  {
    "id": 41,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application web transmet une requête HTTPS sur Ethernet.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 41\n\nRéférence exercice : TCPIP-INFRA-041`",
    "reponse_v": "Données applicatives → segment TCP → paquet IP → trame Ethernet → bits",
    "reponse_f1": "Données applicatives → paquet IP → segment TCP → trame Ethernet → bits",
    "reponse_f2": "Données applicatives → trame Ethernet → segment TCP → paquet IP → bits",
    "explication": "La pile ajoute successivement les en-têtes transport, Internet puis accès réseau."
  },
  {
    "id": 42,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn routeur reçoit une trame Ethernet contenant un paquet IPv4.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 42\n\nRéférence exercice : TCPIP-INFRA-042`",
    "reponse_v": "Il retire l'en-tête de liaison, traite le paquet IP puis crée une nouvelle trame",
    "reponse_f1": "Il transmet la trame Ethernet initiale sans modification",
    "reponse_f2": "Il retire l'en-tête TCP avant d'examiner l'adresse IP",
    "explication": "L'encapsulation de couche accès réseau est locale à chaque lien."
  },
  {
    "id": 43,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application nécessite une livraison ordonnée et la retransmission des pertes.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 43\n\nRéférence exercice : TCPIP-INFRA-043`",
    "reponse_v": "Utiliser TCP",
    "reponse_f1": "Utiliser UDP",
    "reponse_f2": "Utiliser ARP",
    "explication": "TCP fournit séquencement, accusés de réception et retransmissions."
  },
  {
    "id": 44,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application temps réel accepte quelques pertes mais exige une faible latence.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 44\n\nRéférence exercice : TCPIP-INFRA-044`",
    "reponse_v": "Utiliser UDP avec mécanismes applicatifs adaptés",
    "reponse_f1": "Utiliser obligatoirement TCP avec retransmissions illimitées",
    "reponse_f2": "Utiliser ICMP comme transport applicatif",
    "explication": "UDP réduit la surcharge et évite le blocage lié aux retransmissions."
  },
  {
    "id": 45,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nLe champ TTL d'un paquet IPv4 vaut 1 lorsqu'il arrive sur un routeur.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 45\n\nRéférence exercice : TCPIP-INFRA-045`",
    "reponse_v": "Le routeur détruit le paquet après décrément et peut envoyer ICMP Time Exceeded",
    "reponse_f1": "Le routeur transmet le paquet avec TTL 0",
    "reponse_f2": "Le commutateur voisin augmente automatiquement le TTL",
    "explication": "Le TTL empêche les paquets de circuler indéfiniment."
  },
  {
    "id": 46,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn client ouvre une connexion TCP vers le port 443 d'un serveur.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 46\n\nRéférence exercice : TCPIP-INFRA-046`",
    "reponse_v": "Le port destination identifie le service HTTPS, le port source identifie le socket client",
    "reponse_f1": "Le port 443 remplace l'adresse IP du serveur",
    "reponse_f2": "Le port source appartient à la couche liaison",
    "explication": "Les ports assurent le multiplexage à la couche transport."
  },
  {
    "id": 47,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nLe ping fonctionne vers une adresse IP mais pas vers son nom DNS.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 47\n\nRéférence exercice : TCPIP-INFRA-047`",
    "reponse_v": "La connectivité IP est présente ; il faut vérifier la résolution DNS",
    "reponse_f1": "La couche physique est nécessairement en panne",
    "reponse_f2": "Le routage IP est forcément absent",
    "explication": "Le symptôme isole principalement un problème applicatif de résolution."
  },
  {
    "id": 48,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn hôte reçoit une réponse ICMP Destination Unreachable, port unreachable.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 48\n\nRéférence exercice : TCPIP-INFRA-048`",
    "reponse_v": "Le paquet a atteint l'hôte mais aucun service UDP n'écoute sur le port visé",
    "reponse_f1": "Le câble Ethernet est débranché",
    "reponse_f2": "Le serveur DNS a expiré",
    "explication": "ICMP port unreachable est typiquement généré quand aucun socket UDP n'écoute."
  },
  {
    "id": 49,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne session TCP reçoit plusieurs segments hors ordre.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 49\n\nRéférence exercice : TCPIP-INFRA-049`",
    "reponse_v": "TCP peut les réordonner grâce aux numéros de séquence",
    "reponse_f1": "IP réordonne obligatoirement les paquets avant TCP",
    "reponse_f2": "Ethernet renvoie les trames dans l'ordre exact",
    "explication": "Le réordonnancement de bout en bout appartient à TCP."
  },
  {
    "id": 50,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne MTU trop faible provoque l'échec de gros transferts mais pas des petits paquets.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 50\n\nRéférence exercice : TCPIP-INFRA-050`",
    "reponse_v": "Suspecter fragmentation, PMTUD ou MSS mal ajustée",
    "reponse_f1": "Suspecter uniquement un conflit d'adresse MAC",
    "reponse_f2": "Suspecter uniquement une erreur DNS",
    "explication": "Les problèmes de taille de paquets apparaissent souvent sur les flux volumineux."
  },
  {
    "id": 51,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application web transmet une requête HTTPS sur Ethernet.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 51\n\nRéférence exercice : TCPIP-INFRA-051`",
    "reponse_v": "Données applicatives → segment TCP → paquet IP → trame Ethernet → bits",
    "reponse_f1": "Données applicatives → paquet IP → segment TCP → trame Ethernet → bits",
    "reponse_f2": "Données applicatives → trame Ethernet → segment TCP → paquet IP → bits",
    "explication": "La pile ajoute successivement les en-têtes transport, Internet puis accès réseau."
  },
  {
    "id": 52,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn routeur reçoit une trame Ethernet contenant un paquet IPv4.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 52\n\nRéférence exercice : TCPIP-INFRA-052`",
    "reponse_v": "Il retire l'en-tête de liaison, traite le paquet IP puis crée une nouvelle trame",
    "reponse_f1": "Il transmet la trame Ethernet initiale sans modification",
    "reponse_f2": "Il retire l'en-tête TCP avant d'examiner l'adresse IP",
    "explication": "L'encapsulation de couche accès réseau est locale à chaque lien."
  },
  {
    "id": 53,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application nécessite une livraison ordonnée et la retransmission des pertes.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 53\n\nRéférence exercice : TCPIP-INFRA-053`",
    "reponse_v": "Utiliser TCP",
    "reponse_f1": "Utiliser UDP",
    "reponse_f2": "Utiliser ARP",
    "explication": "TCP fournit séquencement, accusés de réception et retransmissions."
  },
  {
    "id": 54,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne application temps réel accepte quelques pertes mais exige une faible latence.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 54\n\nRéférence exercice : TCPIP-INFRA-054`",
    "reponse_v": "Utiliser UDP avec mécanismes applicatifs adaptés",
    "reponse_f1": "Utiliser obligatoirement TCP avec retransmissions illimitées",
    "reponse_f2": "Utiliser ICMP comme transport applicatif",
    "explication": "UDP réduit la surcharge et évite le blocage lié aux retransmissions."
  },
  {
    "id": 55,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nLe champ TTL d'un paquet IPv4 vaut 1 lorsqu'il arrive sur un routeur.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 55\n\nRéférence exercice : TCPIP-INFRA-055`",
    "reponse_v": "Le routeur détruit le paquet après décrément et peut envoyer ICMP Time Exceeded",
    "reponse_f1": "Le routeur transmet le paquet avec TTL 0",
    "reponse_f2": "Le commutateur voisin augmente automatiquement le TTL",
    "explication": "Le TTL empêche les paquets de circuler indéfiniment."
  },
  {
    "id": 56,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn client ouvre une connexion TCP vers le port 443 d'un serveur.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 56\n\nRéférence exercice : TCPIP-INFRA-056`",
    "reponse_v": "Le port destination identifie le service HTTPS, le port source identifie le socket client",
    "reponse_f1": "Le port 443 remplace l'adresse IP du serveur",
    "reponse_f2": "Le port source appartient à la couche liaison",
    "explication": "Les ports assurent le multiplexage à la couche transport."
  },
  {
    "id": 57,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nLe ping fonctionne vers une adresse IP mais pas vers son nom DNS.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 57\n\nRéférence exercice : TCPIP-INFRA-057`",
    "reponse_v": "La connectivité IP est présente ; il faut vérifier la résolution DNS",
    "reponse_f1": "La couche physique est nécessairement en panne",
    "reponse_f2": "Le routage IP est forcément absent",
    "explication": "Le symptôme isole principalement un problème applicatif de résolution."
  },
  {
    "id": 58,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUn hôte reçoit une réponse ICMP Destination Unreachable, port unreachable.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 58\n\nRéférence exercice : TCPIP-INFRA-058`",
    "reponse_v": "Le paquet a atteint l'hôte mais aucun service UDP n'écoute sur le port visé",
    "reponse_f1": "Le câble Ethernet est débranché",
    "reponse_f2": "Le serveur DNS a expiré",
    "explication": "ICMP port unreachable est typiquement généré quand aucun socket UDP n'écoute."
  },
  {
    "id": 59,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne session TCP reçoit plusieurs segments hors ordre.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 59\n\nRéférence exercice : TCPIP-INFRA-059`",
    "reponse_v": "TCP peut les réordonner grâce aux numéros de séquence",
    "reponse_f1": "IP réordonne obligatoirement les paquets avant TCP",
    "reponse_f2": "Ethernet renvoie les trames dans l'ordre exact",
    "explication": "Le réordonnancement de bout en bout appartient à TCP."
  },
  {
    "id": 60,
    "question": "`Mini-TP Pile TCP/IP\n\nSituation :\nUne MTU trop faible provoque l'échec de gros transferts mais pas des petits paquets.\n\nQuelle analyse est la plus rigoureuse ?\n\nCas pile : 60\n\nRéférence exercice : TCPIP-INFRA-060`",
    "reponse_v": "Suspecter fragmentation, PMTUD ou MSS mal ajustée",
    "reponse_f1": "Suspecter uniquement un conflit d'adresse MAC",
    "reponse_f2": "Suspecter uniquement une erreur DNS",
    "explication": "Les problèmes de taille de paquets apparaissent souvent sur les flux volumineux."
  },
  {
    "id": 61,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn réseau couvre un bâtiment et relie postes, imprimantes et serveurs locaux.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 01\n\nRéférence exercice : TCPIP-INFRA-061`",
    "reponse_v": "LAN",
    "reponse_f1": "WAN",
    "reponse_f2": "SAN",
    "explication": "Un LAN couvre une zone locale limitée."
  },
  {
    "id": 62,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn opérateur relie plusieurs sites distants à l'échelle nationale.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 02\n\nRéférence exercice : TCPIP-INFRA-062`",
    "reponse_v": "WAN",
    "reponse_f1": "LAN",
    "reponse_f2": "PAN",
    "explication": "Un WAN interconnecte des réseaux sur de grandes distances."
  },
  {
    "id": 63,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn réseau métropolitain relie plusieurs bâtiments d'une même ville.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 03\n\nRéférence exercice : TCPIP-INFRA-063`",
    "reponse_v": "MAN",
    "reponse_f1": "PAN",
    "reponse_f2": "SAN",
    "explication": "Un MAN couvre typiquement une agglomération."
  },
  {
    "id": 64,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes périphériques personnels communiquent autour d'un utilisateur via Bluetooth.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 04\n\nRéférence exercice : TCPIP-INFRA-064`",
    "reponse_v": "PAN",
    "reponse_f1": "WAN",
    "reponse_f2": "MAN",
    "explication": "Un PAN couvre une très courte portée autour d'une personne."
  },
  {
    "id": 65,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes serveurs accèdent à des baies de stockage via Fibre Channel.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 05\n\nRéférence exercice : TCPIP-INFRA-065`",
    "reponse_v": "SAN",
    "reponse_f1": "WLAN",
    "reponse_f2": "PAN",
    "explication": "Un SAN est dédié au transport de données de stockage en bloc."
  },
  {
    "id": 66,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes terminaux se connectent par Wi-Fi au réseau de l'entreprise.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 06\n\nRéférence exercice : TCPIP-INFRA-066`",
    "reponse_v": "WLAN",
    "reponse_f1": "SAN",
    "reponse_f2": "MAN",
    "explication": "Un WLAN est un réseau local sans fil."
  },
  {
    "id": 67,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUne architecture relie chaque nœud à tous les autres pour maximiser la redondance.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 07\n\nRéférence exercice : TCPIP-INFRA-067`",
    "reponse_v": "Topologie maillée complète",
    "reponse_f1": "Topologie en bus",
    "reponse_f2": "Topologie en étoile simple",
    "explication": "Une maille complète multiplie les chemins entre nœuds."
  },
  {
    "id": 68,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nTous les postes sont reliés à un commutateur central.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 08\n\nRéférence exercice : TCPIP-INFRA-068`",
    "reponse_v": "Topologie en étoile",
    "reponse_f1": "Topologie en anneau",
    "reponse_f2": "Topologie en bus",
    "explication": "L'étoile repose sur un point de concentration central."
  },
  {
    "id": 69,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nLes commutateurs d'accès remontent vers une couche distribution puis cœur.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 09\n\nRéférence exercice : TCPIP-INFRA-069`",
    "reponse_v": "Topologie hiérarchique",
    "reponse_f1": "Topologie point-à-point uniquement",
    "reponse_f2": "Topologie en bus partagé",
    "explication": "Le modèle accès-distribution-cœur structure les réseaux d'entreprise."
  },
  {
    "id": 70,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDans un datacenter leaf-spine, chaque leaf est connecté à chaque spine.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 10\n\nRéférence exercice : TCPIP-INFRA-070`",
    "reponse_v": "Topologie Clos favorisant des chemins est-ouest prévisibles",
    "reponse_f1": "Topologie en anneau unique",
    "reponse_f2": "Topologie en bus Ethernet",
    "explication": "Leaf-spine fournit une faible profondeur et plusieurs chemins équivalents."
  },
  {
    "id": 71,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn réseau couvre un bâtiment et relie postes, imprimantes et serveurs locaux.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 11\n\nRéférence exercice : TCPIP-INFRA-071`",
    "reponse_v": "LAN",
    "reponse_f1": "WAN",
    "reponse_f2": "SAN",
    "explication": "Un LAN couvre une zone locale limitée."
  },
  {
    "id": 72,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn opérateur relie plusieurs sites distants à l'échelle nationale.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 12\n\nRéférence exercice : TCPIP-INFRA-072`",
    "reponse_v": "WAN",
    "reponse_f1": "LAN",
    "reponse_f2": "PAN",
    "explication": "Un WAN interconnecte des réseaux sur de grandes distances."
  },
  {
    "id": 73,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn réseau métropolitain relie plusieurs bâtiments d'une même ville.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 13\n\nRéférence exercice : TCPIP-INFRA-073`",
    "reponse_v": "MAN",
    "reponse_f1": "PAN",
    "reponse_f2": "SAN",
    "explication": "Un MAN couvre typiquement une agglomération."
  },
  {
    "id": 74,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes périphériques personnels communiquent autour d'un utilisateur via Bluetooth.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 14\n\nRéférence exercice : TCPIP-INFRA-074`",
    "reponse_v": "PAN",
    "reponse_f1": "WAN",
    "reponse_f2": "MAN",
    "explication": "Un PAN couvre une très courte portée autour d'une personne."
  },
  {
    "id": 75,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes serveurs accèdent à des baies de stockage via Fibre Channel.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 15\n\nRéférence exercice : TCPIP-INFRA-075`",
    "reponse_v": "SAN",
    "reponse_f1": "WLAN",
    "reponse_f2": "PAN",
    "explication": "Un SAN est dédié au transport de données de stockage en bloc."
  },
  {
    "id": 76,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes terminaux se connectent par Wi-Fi au réseau de l'entreprise.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 16\n\nRéférence exercice : TCPIP-INFRA-076`",
    "reponse_v": "WLAN",
    "reponse_f1": "SAN",
    "reponse_f2": "MAN",
    "explication": "Un WLAN est un réseau local sans fil."
  },
  {
    "id": 77,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUne architecture relie chaque nœud à tous les autres pour maximiser la redondance.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 17\n\nRéférence exercice : TCPIP-INFRA-077`",
    "reponse_v": "Topologie maillée complète",
    "reponse_f1": "Topologie en bus",
    "reponse_f2": "Topologie en étoile simple",
    "explication": "Une maille complète multiplie les chemins entre nœuds."
  },
  {
    "id": 78,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nTous les postes sont reliés à un commutateur central.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 18\n\nRéférence exercice : TCPIP-INFRA-078`",
    "reponse_v": "Topologie en étoile",
    "reponse_f1": "Topologie en anneau",
    "reponse_f2": "Topologie en bus",
    "explication": "L'étoile repose sur un point de concentration central."
  },
  {
    "id": 79,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nLes commutateurs d'accès remontent vers une couche distribution puis cœur.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 19\n\nRéférence exercice : TCPIP-INFRA-079`",
    "reponse_v": "Topologie hiérarchique",
    "reponse_f1": "Topologie point-à-point uniquement",
    "reponse_f2": "Topologie en bus partagé",
    "explication": "Le modèle accès-distribution-cœur structure les réseaux d'entreprise."
  },
  {
    "id": 80,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDans un datacenter leaf-spine, chaque leaf est connecté à chaque spine.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 20\n\nRéférence exercice : TCPIP-INFRA-080`",
    "reponse_v": "Topologie Clos favorisant des chemins est-ouest prévisibles",
    "reponse_f1": "Topologie en anneau unique",
    "reponse_f2": "Topologie en bus Ethernet",
    "explication": "Leaf-spine fournit une faible profondeur et plusieurs chemins équivalents."
  },
  {
    "id": 81,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn réseau couvre un bâtiment et relie postes, imprimantes et serveurs locaux.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 21\n\nRéférence exercice : TCPIP-INFRA-081`",
    "reponse_v": "LAN",
    "reponse_f1": "WAN",
    "reponse_f2": "SAN",
    "explication": "Un LAN couvre une zone locale limitée."
  },
  {
    "id": 82,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn opérateur relie plusieurs sites distants à l'échelle nationale.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 22\n\nRéférence exercice : TCPIP-INFRA-082`",
    "reponse_v": "WAN",
    "reponse_f1": "LAN",
    "reponse_f2": "PAN",
    "explication": "Un WAN interconnecte des réseaux sur de grandes distances."
  },
  {
    "id": 83,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn réseau métropolitain relie plusieurs bâtiments d'une même ville.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 23\n\nRéférence exercice : TCPIP-INFRA-083`",
    "reponse_v": "MAN",
    "reponse_f1": "PAN",
    "reponse_f2": "SAN",
    "explication": "Un MAN couvre typiquement une agglomération."
  },
  {
    "id": 84,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes périphériques personnels communiquent autour d'un utilisateur via Bluetooth.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 24\n\nRéférence exercice : TCPIP-INFRA-084`",
    "reponse_v": "PAN",
    "reponse_f1": "WAN",
    "reponse_f2": "MAN",
    "explication": "Un PAN couvre une très courte portée autour d'une personne."
  },
  {
    "id": 85,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes serveurs accèdent à des baies de stockage via Fibre Channel.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 25\n\nRéférence exercice : TCPIP-INFRA-085`",
    "reponse_v": "SAN",
    "reponse_f1": "WLAN",
    "reponse_f2": "PAN",
    "explication": "Un SAN est dédié au transport de données de stockage en bloc."
  },
  {
    "id": 86,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes terminaux se connectent par Wi-Fi au réseau de l'entreprise.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 26\n\nRéférence exercice : TCPIP-INFRA-086`",
    "reponse_v": "WLAN",
    "reponse_f1": "SAN",
    "reponse_f2": "MAN",
    "explication": "Un WLAN est un réseau local sans fil."
  },
  {
    "id": 87,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUne architecture relie chaque nœud à tous les autres pour maximiser la redondance.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 27\n\nRéférence exercice : TCPIP-INFRA-087`",
    "reponse_v": "Topologie maillée complète",
    "reponse_f1": "Topologie en bus",
    "reponse_f2": "Topologie en étoile simple",
    "explication": "Une maille complète multiplie les chemins entre nœuds."
  },
  {
    "id": 88,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nTous les postes sont reliés à un commutateur central.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 28\n\nRéférence exercice : TCPIP-INFRA-088`",
    "reponse_v": "Topologie en étoile",
    "reponse_f1": "Topologie en anneau",
    "reponse_f2": "Topologie en bus",
    "explication": "L'étoile repose sur un point de concentration central."
  },
  {
    "id": 89,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nLes commutateurs d'accès remontent vers une couche distribution puis cœur.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 29\n\nRéférence exercice : TCPIP-INFRA-089`",
    "reponse_v": "Topologie hiérarchique",
    "reponse_f1": "Topologie point-à-point uniquement",
    "reponse_f2": "Topologie en bus partagé",
    "explication": "Le modèle accès-distribution-cœur structure les réseaux d'entreprise."
  },
  {
    "id": 90,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDans un datacenter leaf-spine, chaque leaf est connecté à chaque spine.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 30\n\nRéférence exercice : TCPIP-INFRA-090`",
    "reponse_v": "Topologie Clos favorisant des chemins est-ouest prévisibles",
    "reponse_f1": "Topologie en anneau unique",
    "reponse_f2": "Topologie en bus Ethernet",
    "explication": "Leaf-spine fournit une faible profondeur et plusieurs chemins équivalents."
  },
  {
    "id": 91,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn réseau couvre un bâtiment et relie postes, imprimantes et serveurs locaux.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 31\n\nRéférence exercice : TCPIP-INFRA-091`",
    "reponse_v": "LAN",
    "reponse_f1": "WAN",
    "reponse_f2": "SAN",
    "explication": "Un LAN couvre une zone locale limitée."
  },
  {
    "id": 92,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn opérateur relie plusieurs sites distants à l'échelle nationale.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 32\n\nRéférence exercice : TCPIP-INFRA-092`",
    "reponse_v": "WAN",
    "reponse_f1": "LAN",
    "reponse_f2": "PAN",
    "explication": "Un WAN interconnecte des réseaux sur de grandes distances."
  },
  {
    "id": 93,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn réseau métropolitain relie plusieurs bâtiments d'une même ville.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 33\n\nRéférence exercice : TCPIP-INFRA-093`",
    "reponse_v": "MAN",
    "reponse_f1": "PAN",
    "reponse_f2": "SAN",
    "explication": "Un MAN couvre typiquement une agglomération."
  },
  {
    "id": 94,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes périphériques personnels communiquent autour d'un utilisateur via Bluetooth.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 34\n\nRéférence exercice : TCPIP-INFRA-094`",
    "reponse_v": "PAN",
    "reponse_f1": "WAN",
    "reponse_f2": "MAN",
    "explication": "Un PAN couvre une très courte portée autour d'une personne."
  },
  {
    "id": 95,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes serveurs accèdent à des baies de stockage via Fibre Channel.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 35\n\nRéférence exercice : TCPIP-INFRA-095`",
    "reponse_v": "SAN",
    "reponse_f1": "WLAN",
    "reponse_f2": "PAN",
    "explication": "Un SAN est dédié au transport de données de stockage en bloc."
  },
  {
    "id": 96,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes terminaux se connectent par Wi-Fi au réseau de l'entreprise.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 36\n\nRéférence exercice : TCPIP-INFRA-096`",
    "reponse_v": "WLAN",
    "reponse_f1": "SAN",
    "reponse_f2": "MAN",
    "explication": "Un WLAN est un réseau local sans fil."
  },
  {
    "id": 97,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUne architecture relie chaque nœud à tous les autres pour maximiser la redondance.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 37\n\nRéférence exercice : TCPIP-INFRA-097`",
    "reponse_v": "Topologie maillée complète",
    "reponse_f1": "Topologie en bus",
    "reponse_f2": "Topologie en étoile simple",
    "explication": "Une maille complète multiplie les chemins entre nœuds."
  },
  {
    "id": 98,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nTous les postes sont reliés à un commutateur central.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 38\n\nRéférence exercice : TCPIP-INFRA-098`",
    "reponse_v": "Topologie en étoile",
    "reponse_f1": "Topologie en anneau",
    "reponse_f2": "Topologie en bus",
    "explication": "L'étoile repose sur un point de concentration central."
  },
  {
    "id": 99,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nLes commutateurs d'accès remontent vers une couche distribution puis cœur.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 39\n\nRéférence exercice : TCPIP-INFRA-099`",
    "reponse_v": "Topologie hiérarchique",
    "reponse_f1": "Topologie point-à-point uniquement",
    "reponse_f2": "Topologie en bus partagé",
    "explication": "Le modèle accès-distribution-cœur structure les réseaux d'entreprise."
  },
  {
    "id": 100,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDans un datacenter leaf-spine, chaque leaf est connecté à chaque spine.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 40\n\nRéférence exercice : TCPIP-INFRA-100`",
    "reponse_v": "Topologie Clos favorisant des chemins est-ouest prévisibles",
    "reponse_f1": "Topologie en anneau unique",
    "reponse_f2": "Topologie en bus Ethernet",
    "explication": "Leaf-spine fournit une faible profondeur et plusieurs chemins équivalents."
  },
  {
    "id": 101,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn réseau couvre un bâtiment et relie postes, imprimantes et serveurs locaux.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 41\n\nRéférence exercice : TCPIP-INFRA-101`",
    "reponse_v": "LAN",
    "reponse_f1": "WAN",
    "reponse_f2": "SAN",
    "explication": "Un LAN couvre une zone locale limitée."
  },
  {
    "id": 102,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn opérateur relie plusieurs sites distants à l'échelle nationale.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 42\n\nRéférence exercice : TCPIP-INFRA-102`",
    "reponse_v": "WAN",
    "reponse_f1": "LAN",
    "reponse_f2": "PAN",
    "explication": "Un WAN interconnecte des réseaux sur de grandes distances."
  },
  {
    "id": 103,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUn réseau métropolitain relie plusieurs bâtiments d'une même ville.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 43\n\nRéférence exercice : TCPIP-INFRA-103`",
    "reponse_v": "MAN",
    "reponse_f1": "PAN",
    "reponse_f2": "SAN",
    "explication": "Un MAN couvre typiquement une agglomération."
  },
  {
    "id": 104,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes périphériques personnels communiquent autour d'un utilisateur via Bluetooth.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 44\n\nRéférence exercice : TCPIP-INFRA-104`",
    "reponse_v": "PAN",
    "reponse_f1": "WAN",
    "reponse_f2": "MAN",
    "explication": "Un PAN couvre une très courte portée autour d'une personne."
  },
  {
    "id": 105,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes serveurs accèdent à des baies de stockage via Fibre Channel.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 45\n\nRéférence exercice : TCPIP-INFRA-105`",
    "reponse_v": "SAN",
    "reponse_f1": "WLAN",
    "reponse_f2": "PAN",
    "explication": "Un SAN est dédié au transport de données de stockage en bloc."
  },
  {
    "id": 106,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDes terminaux se connectent par Wi-Fi au réseau de l'entreprise.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 46\n\nRéférence exercice : TCPIP-INFRA-106`",
    "reponse_v": "WLAN",
    "reponse_f1": "SAN",
    "reponse_f2": "MAN",
    "explication": "Un WLAN est un réseau local sans fil."
  },
  {
    "id": 107,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nUne architecture relie chaque nœud à tous les autres pour maximiser la redondance.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 47\n\nRéférence exercice : TCPIP-INFRA-107`",
    "reponse_v": "Topologie maillée complète",
    "reponse_f1": "Topologie en bus",
    "reponse_f2": "Topologie en étoile simple",
    "explication": "Une maille complète multiplie les chemins entre nœuds."
  },
  {
    "id": 108,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nTous les postes sont reliés à un commutateur central.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 48\n\nRéférence exercice : TCPIP-INFRA-108`",
    "reponse_v": "Topologie en étoile",
    "reponse_f1": "Topologie en anneau",
    "reponse_f2": "Topologie en bus",
    "explication": "L'étoile repose sur un point de concentration central."
  },
  {
    "id": 109,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nLes commutateurs d'accès remontent vers une couche distribution puis cœur.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 49\n\nRéférence exercice : TCPIP-INFRA-109`",
    "reponse_v": "Topologie hiérarchique",
    "reponse_f1": "Topologie point-à-point uniquement",
    "reponse_f2": "Topologie en bus partagé",
    "explication": "Le modèle accès-distribution-cœur structure les réseaux d'entreprise."
  },
  {
    "id": 110,
    "question": "`Mini-TP Typologies de réseaux\n\nContexte :\nDans un datacenter leaf-spine, chaque leaf est connecté à chaque spine.\n\nQuelle typologie ou catégorie correspond le mieux ?\n\nCas typologie : 50\n\nRéférence exercice : TCPIP-INFRA-110`",
    "reponse_v": "Topologie Clos favorisant des chemins est-ouest prévisibles",
    "reponse_f1": "Topologie en anneau unique",
    "reponse_f2": "Topologie en bus Ethernet",
    "explication": "Leaf-spine fournit une faible profondeur et plusieurs chemins équivalents."
  },
  {
    "id": 111,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn port doit transporter les trames d'un seul VLAN vers un poste utilisateur.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 01\n\nRéférence exercice : TCPIP-INFRA-111`",
    "reponse_v": "Configurer le port en mode access dans le VLAN concerné",
    "reponse_f1": "Configurer le port en trunk avec tous les VLAN",
    "reponse_f2": "Configurer le port comme routeur OSPF",
    "explication": "Un port access associe les trames non taguées à un seul VLAN."
  },
  {
    "id": 112,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn lien entre deux commutateurs doit transporter plusieurs VLAN.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 02\n\nRéférence exercice : TCPIP-INFRA-112`",
    "reponse_v": "Configurer un trunk 802.1Q",
    "reponse_f1": "Configurer un port access unique",
    "reponse_f2": "Configurer uniquement une route statique",
    "explication": "Un trunk transporte plusieurs VLAN avec marquage."
  },
  {
    "id": 113,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDeux commutateurs forment une boucle de couche 2.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 03\n\nRéférence exercice : TCPIP-INFRA-113`",
    "reponse_v": "STP bloque logiquement un chemin redondant",
    "reponse_f1": "OSPF bloque automatiquement un port Ethernet",
    "reponse_f2": "ARP désactive le lien redondant",
    "explication": "STP évite les boucles de trames et tempêtes de broadcast."
  },
  {
    "id": 114,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nTous les commutateurs ont la même priorité STP.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 04\n\nRéférence exercice : TCPIP-INFRA-114`",
    "reponse_v": "Le plus petit Bridge ID, donc généralement la plus petite MAC, devient root",
    "reponse_f1": "Le commutateur avec la plus grande MAC devient root",
    "reponse_f2": "Le premier commutateur démarré devient toujours root",
    "explication": "À priorité égale, la MAC départage les Bridge ID."
  },
  {
    "id": 115,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDeux liens sont agrégés avec LACP active d'un côté et passive de l'autre.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 05\n\nRéférence exercice : TCPIP-INFRA-115`",
    "reponse_v": "L'agrégat peut se former",
    "reponse_f1": "L'agrégat ne peut jamais se former",
    "reponse_f2": "Les liens passent automatiquement en routage L3",
    "explication": "En LACP, active/passive est compatible."
  },
  {
    "id": 116,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn port edge reçoit une BPDU alors que BPDU Guard est actif.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 06\n\nRéférence exercice : TCPIP-INFRA-116`",
    "reponse_v": "Le port peut être placé en état err-disabled",
    "reponse_f1": "Le port devient automatiquement root port",
    "reponse_f2": "Le VLAN est converti en routage OSPF",
    "explication": "BPDU Guard protège les ports d'accès contre l'ajout de commutateurs."
  },
  {
    "id": 117,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUne trame arrive avec une MAC destination inconnue.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 07\n\nRéférence exercice : TCPIP-INFRA-117`",
    "reponse_v": "Le switch la diffuse dans le VLAN sauf sur le port d'entrée",
    "reponse_f1": "Le switch la transmet uniquement à la passerelle IP",
    "reponse_f2": "Le switch la supprime toujours",
    "explication": "Un unknown unicast est floodé dans le domaine de broadcast."
  },
  {
    "id": 118,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUne adresse MAC source est observée sur un port.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 08\n\nRéférence exercice : TCPIP-INFRA-118`",
    "reponse_v": "Le switch apprend cette MAC sur le port source",
    "reponse_f1": "Le switch apprend la MAC destination sur le port source",
    "reponse_f2": "Le routeur met à jour sa table OSPF",
    "explication": "L'apprentissage MAC utilise l'adresse source des trames."
  },
  {
    "id": 119,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn VLAN natif est mal configuré entre deux extrémités de trunk.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 09\n\nRéférence exercice : TCPIP-INFRA-119`",
    "reponse_v": "Des trames non taguées peuvent être associées à des VLAN différents",
    "reponse_f1": "Le trunk convertit automatiquement les VLAN",
    "reponse_f2": "Seul le routage BGP est affecté",
    "explication": "Un native VLAN mismatch crée des incohérences de couche 2."
  },
  {
    "id": 120,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDes téléphones IP et des postes partagent le même port physique.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 10\n\nRéférence exercice : TCPIP-INFRA-120`",
    "reponse_v": "Utiliser un VLAN voix et un VLAN données adaptés",
    "reponse_f1": "Utiliser une seule adresse MAC pour les deux équipements",
    "reponse_f2": "Supprimer tout marquage VLAN",
    "explication": "Les switches peuvent distinguer VLAN voix et données sur un port d'accès."
  },
  {
    "id": 121,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn port doit transporter les trames d'un seul VLAN vers un poste utilisateur.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 11\n\nRéférence exercice : TCPIP-INFRA-121`",
    "reponse_v": "Configurer le port en mode access dans le VLAN concerné",
    "reponse_f1": "Configurer le port en trunk avec tous les VLAN",
    "reponse_f2": "Configurer le port comme routeur OSPF",
    "explication": "Un port access associe les trames non taguées à un seul VLAN."
  },
  {
    "id": 122,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn lien entre deux commutateurs doit transporter plusieurs VLAN.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 12\n\nRéférence exercice : TCPIP-INFRA-122`",
    "reponse_v": "Configurer un trunk 802.1Q",
    "reponse_f1": "Configurer un port access unique",
    "reponse_f2": "Configurer uniquement une route statique",
    "explication": "Un trunk transporte plusieurs VLAN avec marquage."
  },
  {
    "id": 123,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDeux commutateurs forment une boucle de couche 2.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 13\n\nRéférence exercice : TCPIP-INFRA-123`",
    "reponse_v": "STP bloque logiquement un chemin redondant",
    "reponse_f1": "OSPF bloque automatiquement un port Ethernet",
    "reponse_f2": "ARP désactive le lien redondant",
    "explication": "STP évite les boucles de trames et tempêtes de broadcast."
  },
  {
    "id": 124,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nTous les commutateurs ont la même priorité STP.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 14\n\nRéférence exercice : TCPIP-INFRA-124`",
    "reponse_v": "Le plus petit Bridge ID, donc généralement la plus petite MAC, devient root",
    "reponse_f1": "Le commutateur avec la plus grande MAC devient root",
    "reponse_f2": "Le premier commutateur démarré devient toujours root",
    "explication": "À priorité égale, la MAC départage les Bridge ID."
  },
  {
    "id": 125,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDeux liens sont agrégés avec LACP active d'un côté et passive de l'autre.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 15\n\nRéférence exercice : TCPIP-INFRA-125`",
    "reponse_v": "L'agrégat peut se former",
    "reponse_f1": "L'agrégat ne peut jamais se former",
    "reponse_f2": "Les liens passent automatiquement en routage L3",
    "explication": "En LACP, active/passive est compatible."
  },
  {
    "id": 126,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn port edge reçoit une BPDU alors que BPDU Guard est actif.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 16\n\nRéférence exercice : TCPIP-INFRA-126`",
    "reponse_v": "Le port peut être placé en état err-disabled",
    "reponse_f1": "Le port devient automatiquement root port",
    "reponse_f2": "Le VLAN est converti en routage OSPF",
    "explication": "BPDU Guard protège les ports d'accès contre l'ajout de commutateurs."
  },
  {
    "id": 127,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUne trame arrive avec une MAC destination inconnue.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 17\n\nRéférence exercice : TCPIP-INFRA-127`",
    "reponse_v": "Le switch la diffuse dans le VLAN sauf sur le port d'entrée",
    "reponse_f1": "Le switch la transmet uniquement à la passerelle IP",
    "reponse_f2": "Le switch la supprime toujours",
    "explication": "Un unknown unicast est floodé dans le domaine de broadcast."
  },
  {
    "id": 128,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUne adresse MAC source est observée sur un port.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 18\n\nRéférence exercice : TCPIP-INFRA-128`",
    "reponse_v": "Le switch apprend cette MAC sur le port source",
    "reponse_f1": "Le switch apprend la MAC destination sur le port source",
    "reponse_f2": "Le routeur met à jour sa table OSPF",
    "explication": "L'apprentissage MAC utilise l'adresse source des trames."
  },
  {
    "id": 129,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn VLAN natif est mal configuré entre deux extrémités de trunk.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 19\n\nRéférence exercice : TCPIP-INFRA-129`",
    "reponse_v": "Des trames non taguées peuvent être associées à des VLAN différents",
    "reponse_f1": "Le trunk convertit automatiquement les VLAN",
    "reponse_f2": "Seul le routage BGP est affecté",
    "explication": "Un native VLAN mismatch crée des incohérences de couche 2."
  },
  {
    "id": 130,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDes téléphones IP et des postes partagent le même port physique.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 20\n\nRéférence exercice : TCPIP-INFRA-130`",
    "reponse_v": "Utiliser un VLAN voix et un VLAN données adaptés",
    "reponse_f1": "Utiliser une seule adresse MAC pour les deux équipements",
    "reponse_f2": "Supprimer tout marquage VLAN",
    "explication": "Les switches peuvent distinguer VLAN voix et données sur un port d'accès."
  },
  {
    "id": 131,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn port doit transporter les trames d'un seul VLAN vers un poste utilisateur.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 21\n\nRéférence exercice : TCPIP-INFRA-131`",
    "reponse_v": "Configurer le port en mode access dans le VLAN concerné",
    "reponse_f1": "Configurer le port en trunk avec tous les VLAN",
    "reponse_f2": "Configurer le port comme routeur OSPF",
    "explication": "Un port access associe les trames non taguées à un seul VLAN."
  },
  {
    "id": 132,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn lien entre deux commutateurs doit transporter plusieurs VLAN.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 22\n\nRéférence exercice : TCPIP-INFRA-132`",
    "reponse_v": "Configurer un trunk 802.1Q",
    "reponse_f1": "Configurer un port access unique",
    "reponse_f2": "Configurer uniquement une route statique",
    "explication": "Un trunk transporte plusieurs VLAN avec marquage."
  },
  {
    "id": 133,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDeux commutateurs forment une boucle de couche 2.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 23\n\nRéférence exercice : TCPIP-INFRA-133`",
    "reponse_v": "STP bloque logiquement un chemin redondant",
    "reponse_f1": "OSPF bloque automatiquement un port Ethernet",
    "reponse_f2": "ARP désactive le lien redondant",
    "explication": "STP évite les boucles de trames et tempêtes de broadcast."
  },
  {
    "id": 134,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nTous les commutateurs ont la même priorité STP.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 24\n\nRéférence exercice : TCPIP-INFRA-134`",
    "reponse_v": "Le plus petit Bridge ID, donc généralement la plus petite MAC, devient root",
    "reponse_f1": "Le commutateur avec la plus grande MAC devient root",
    "reponse_f2": "Le premier commutateur démarré devient toujours root",
    "explication": "À priorité égale, la MAC départage les Bridge ID."
  },
  {
    "id": 135,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDeux liens sont agrégés avec LACP active d'un côté et passive de l'autre.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 25\n\nRéférence exercice : TCPIP-INFRA-135`",
    "reponse_v": "L'agrégat peut se former",
    "reponse_f1": "L'agrégat ne peut jamais se former",
    "reponse_f2": "Les liens passent automatiquement en routage L3",
    "explication": "En LACP, active/passive est compatible."
  },
  {
    "id": 136,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn port edge reçoit une BPDU alors que BPDU Guard est actif.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 26\n\nRéférence exercice : TCPIP-INFRA-136`",
    "reponse_v": "Le port peut être placé en état err-disabled",
    "reponse_f1": "Le port devient automatiquement root port",
    "reponse_f2": "Le VLAN est converti en routage OSPF",
    "explication": "BPDU Guard protège les ports d'accès contre l'ajout de commutateurs."
  },
  {
    "id": 137,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUne trame arrive avec une MAC destination inconnue.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 27\n\nRéférence exercice : TCPIP-INFRA-137`",
    "reponse_v": "Le switch la diffuse dans le VLAN sauf sur le port d'entrée",
    "reponse_f1": "Le switch la transmet uniquement à la passerelle IP",
    "reponse_f2": "Le switch la supprime toujours",
    "explication": "Un unknown unicast est floodé dans le domaine de broadcast."
  },
  {
    "id": 138,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUne adresse MAC source est observée sur un port.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 28\n\nRéférence exercice : TCPIP-INFRA-138`",
    "reponse_v": "Le switch apprend cette MAC sur le port source",
    "reponse_f1": "Le switch apprend la MAC destination sur le port source",
    "reponse_f2": "Le routeur met à jour sa table OSPF",
    "explication": "L'apprentissage MAC utilise l'adresse source des trames."
  },
  {
    "id": 139,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn VLAN natif est mal configuré entre deux extrémités de trunk.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 29\n\nRéférence exercice : TCPIP-INFRA-139`",
    "reponse_v": "Des trames non taguées peuvent être associées à des VLAN différents",
    "reponse_f1": "Le trunk convertit automatiquement les VLAN",
    "reponse_f2": "Seul le routage BGP est affecté",
    "explication": "Un native VLAN mismatch crée des incohérences de couche 2."
  },
  {
    "id": 140,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDes téléphones IP et des postes partagent le même port physique.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 30\n\nRéférence exercice : TCPIP-INFRA-140`",
    "reponse_v": "Utiliser un VLAN voix et un VLAN données adaptés",
    "reponse_f1": "Utiliser une seule adresse MAC pour les deux équipements",
    "reponse_f2": "Supprimer tout marquage VLAN",
    "explication": "Les switches peuvent distinguer VLAN voix et données sur un port d'accès."
  },
  {
    "id": 141,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn port doit transporter les trames d'un seul VLAN vers un poste utilisateur.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 31\n\nRéférence exercice : TCPIP-INFRA-141`",
    "reponse_v": "Configurer le port en mode access dans le VLAN concerné",
    "reponse_f1": "Configurer le port en trunk avec tous les VLAN",
    "reponse_f2": "Configurer le port comme routeur OSPF",
    "explication": "Un port access associe les trames non taguées à un seul VLAN."
  },
  {
    "id": 142,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn lien entre deux commutateurs doit transporter plusieurs VLAN.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 32\n\nRéférence exercice : TCPIP-INFRA-142`",
    "reponse_v": "Configurer un trunk 802.1Q",
    "reponse_f1": "Configurer un port access unique",
    "reponse_f2": "Configurer uniquement une route statique",
    "explication": "Un trunk transporte plusieurs VLAN avec marquage."
  },
  {
    "id": 143,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDeux commutateurs forment une boucle de couche 2.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 33\n\nRéférence exercice : TCPIP-INFRA-143`",
    "reponse_v": "STP bloque logiquement un chemin redondant",
    "reponse_f1": "OSPF bloque automatiquement un port Ethernet",
    "reponse_f2": "ARP désactive le lien redondant",
    "explication": "STP évite les boucles de trames et tempêtes de broadcast."
  },
  {
    "id": 144,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nTous les commutateurs ont la même priorité STP.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 34\n\nRéférence exercice : TCPIP-INFRA-144`",
    "reponse_v": "Le plus petit Bridge ID, donc généralement la plus petite MAC, devient root",
    "reponse_f1": "Le commutateur avec la plus grande MAC devient root",
    "reponse_f2": "Le premier commutateur démarré devient toujours root",
    "explication": "À priorité égale, la MAC départage les Bridge ID."
  },
  {
    "id": 145,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDeux liens sont agrégés avec LACP active d'un côté et passive de l'autre.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 35\n\nRéférence exercice : TCPIP-INFRA-145`",
    "reponse_v": "L'agrégat peut se former",
    "reponse_f1": "L'agrégat ne peut jamais se former",
    "reponse_f2": "Les liens passent automatiquement en routage L3",
    "explication": "En LACP, active/passive est compatible."
  },
  {
    "id": 146,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn port edge reçoit une BPDU alors que BPDU Guard est actif.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 36\n\nRéférence exercice : TCPIP-INFRA-146`",
    "reponse_v": "Le port peut être placé en état err-disabled",
    "reponse_f1": "Le port devient automatiquement root port",
    "reponse_f2": "Le VLAN est converti en routage OSPF",
    "explication": "BPDU Guard protège les ports d'accès contre l'ajout de commutateurs."
  },
  {
    "id": 147,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUne trame arrive avec une MAC destination inconnue.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 37\n\nRéférence exercice : TCPIP-INFRA-147`",
    "reponse_v": "Le switch la diffuse dans le VLAN sauf sur le port d'entrée",
    "reponse_f1": "Le switch la transmet uniquement à la passerelle IP",
    "reponse_f2": "Le switch la supprime toujours",
    "explication": "Un unknown unicast est floodé dans le domaine de broadcast."
  },
  {
    "id": 148,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUne adresse MAC source est observée sur un port.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 38\n\nRéférence exercice : TCPIP-INFRA-148`",
    "reponse_v": "Le switch apprend cette MAC sur le port source",
    "reponse_f1": "Le switch apprend la MAC destination sur le port source",
    "reponse_f2": "Le routeur met à jour sa table OSPF",
    "explication": "L'apprentissage MAC utilise l'adresse source des trames."
  },
  {
    "id": 149,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn VLAN natif est mal configuré entre deux extrémités de trunk.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 39\n\nRéférence exercice : TCPIP-INFRA-149`",
    "reponse_v": "Des trames non taguées peuvent être associées à des VLAN différents",
    "reponse_f1": "Le trunk convertit automatiquement les VLAN",
    "reponse_f2": "Seul le routage BGP est affecté",
    "explication": "Un native VLAN mismatch crée des incohérences de couche 2."
  },
  {
    "id": 150,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDes téléphones IP et des postes partagent le même port physique.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 40\n\nRéférence exercice : TCPIP-INFRA-150`",
    "reponse_v": "Utiliser un VLAN voix et un VLAN données adaptés",
    "reponse_f1": "Utiliser une seule adresse MAC pour les deux équipements",
    "reponse_f2": "Supprimer tout marquage VLAN",
    "explication": "Les switches peuvent distinguer VLAN voix et données sur un port d'accès."
  },
  {
    "id": 151,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn port doit transporter les trames d'un seul VLAN vers un poste utilisateur.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 41\n\nRéférence exercice : TCPIP-INFRA-151`",
    "reponse_v": "Configurer le port en mode access dans le VLAN concerné",
    "reponse_f1": "Configurer le port en trunk avec tous les VLAN",
    "reponse_f2": "Configurer le port comme routeur OSPF",
    "explication": "Un port access associe les trames non taguées à un seul VLAN."
  },
  {
    "id": 152,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn lien entre deux commutateurs doit transporter plusieurs VLAN.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 42\n\nRéférence exercice : TCPIP-INFRA-152`",
    "reponse_v": "Configurer un trunk 802.1Q",
    "reponse_f1": "Configurer un port access unique",
    "reponse_f2": "Configurer uniquement une route statique",
    "explication": "Un trunk transporte plusieurs VLAN avec marquage."
  },
  {
    "id": 153,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDeux commutateurs forment une boucle de couche 2.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 43\n\nRéférence exercice : TCPIP-INFRA-153`",
    "reponse_v": "STP bloque logiquement un chemin redondant",
    "reponse_f1": "OSPF bloque automatiquement un port Ethernet",
    "reponse_f2": "ARP désactive le lien redondant",
    "explication": "STP évite les boucles de trames et tempêtes de broadcast."
  },
  {
    "id": 154,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nTous les commutateurs ont la même priorité STP.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 44\n\nRéférence exercice : TCPIP-INFRA-154`",
    "reponse_v": "Le plus petit Bridge ID, donc généralement la plus petite MAC, devient root",
    "reponse_f1": "Le commutateur avec la plus grande MAC devient root",
    "reponse_f2": "Le premier commutateur démarré devient toujours root",
    "explication": "À priorité égale, la MAC départage les Bridge ID."
  },
  {
    "id": 155,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDeux liens sont agrégés avec LACP active d'un côté et passive de l'autre.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 45\n\nRéférence exercice : TCPIP-INFRA-155`",
    "reponse_v": "L'agrégat peut se former",
    "reponse_f1": "L'agrégat ne peut jamais se former",
    "reponse_f2": "Les liens passent automatiquement en routage L3",
    "explication": "En LACP, active/passive est compatible."
  },
  {
    "id": 156,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn port edge reçoit une BPDU alors que BPDU Guard est actif.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 46\n\nRéférence exercice : TCPIP-INFRA-156`",
    "reponse_v": "Le port peut être placé en état err-disabled",
    "reponse_f1": "Le port devient automatiquement root port",
    "reponse_f2": "Le VLAN est converti en routage OSPF",
    "explication": "BPDU Guard protège les ports d'accès contre l'ajout de commutateurs."
  },
  {
    "id": 157,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUne trame arrive avec une MAC destination inconnue.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 47\n\nRéférence exercice : TCPIP-INFRA-157`",
    "reponse_v": "Le switch la diffuse dans le VLAN sauf sur le port d'entrée",
    "reponse_f1": "Le switch la transmet uniquement à la passerelle IP",
    "reponse_f2": "Le switch la supprime toujours",
    "explication": "Un unknown unicast est floodé dans le domaine de broadcast."
  },
  {
    "id": 158,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUne adresse MAC source est observée sur un port.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 48\n\nRéférence exercice : TCPIP-INFRA-158`",
    "reponse_v": "Le switch apprend cette MAC sur le port source",
    "reponse_f1": "Le switch apprend la MAC destination sur le port source",
    "reponse_f2": "Le routeur met à jour sa table OSPF",
    "explication": "L'apprentissage MAC utilise l'adresse source des trames."
  },
  {
    "id": 159,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nUn VLAN natif est mal configuré entre deux extrémités de trunk.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 49\n\nRéférence exercice : TCPIP-INFRA-159`",
    "reponse_v": "Des trames non taguées peuvent être associées à des VLAN différents",
    "reponse_f1": "Le trunk convertit automatiquement les VLAN",
    "reponse_f2": "Seul le routage BGP est affecté",
    "explication": "Un native VLAN mismatch crée des incohérences de couche 2."
  },
  {
    "id": 160,
    "question": "`Mini-TP Infrastructure L2\n\nSituation :\nDes téléphones IP et des postes partagent le même port physique.\n\nQuelle solution ou conséquence est correcte ?\n\nCas commutation : 50\n\nRéférence exercice : TCPIP-INFRA-160`",
    "reponse_v": "Utiliser un VLAN voix et un VLAN données adaptés",
    "reponse_f1": "Utiliser une seule adresse MAC pour les deux équipements",
    "reponse_f2": "Supprimer tout marquage VLAN",
    "explication": "Les switches peuvent distinguer VLAN voix et données sur un port d'accès."
  },
  {
    "id": 161,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux chemins OSPF existent vers le même préfixe avec des coûts 20 et 30.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 01\n\nRéférence exercice : TCPIP-INFRA-161`",
    "reponse_v": "Le chemin de coût 20 est préféré",
    "reponse_f1": "Le chemin de coût 30 est préféré",
    "reponse_f2": "OSPF choisit toujours le chemin avec le moins de routeurs sans regarder le coût",
    "explication": "OSPF privilégie le coût cumulé le plus faible."
  },
  {
    "id": 162,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux routes de protocoles différents mènent au même préfixe.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 02\n\nRéférence exercice : TCPIP-INFRA-162`",
    "reponse_v": "La distance administrative départage d'abord les sources de route",
    "reponse_f1": "La MTU départage toujours les routes",
    "reponse_f2": "Le port TCP du protocole décide du chemin",
    "explication": "La préférence entre protocoles dépend de la distance administrative."
  },
  {
    "id": 163,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUne route plus spécifique et une route par défaut correspondent à la destination.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 03\n\nRéférence exercice : TCPIP-INFRA-163`",
    "reponse_v": "La route la plus spécifique est choisie",
    "reponse_f1": "La route par défaut est toujours prioritaire",
    "reponse_f2": "Les deux routes sont ignorées",
    "explication": "Le longest prefix match prime."
  },
  {
    "id": 164,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux entreprises échangent des routes Internet entre systèmes autonomes.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 04\n\nRéférence exercice : TCPIP-INFRA-164`",
    "reponse_v": "Utiliser BGP",
    "reponse_f1": "Utiliser STP",
    "reponse_f2": "Utiliser ARP",
    "explication": "BGP est le protocole de routage inter-domaine."
  },
  {
    "id": 165,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn IGP à état de liens est requis dans un réseau d'entreprise.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 05\n\nRéférence exercice : TCPIP-INFRA-165`",
    "reponse_v": "OSPF ou IS-IS",
    "reponse_f1": "BGP uniquement",
    "reponse_f2": "RARP",
    "explication": "OSPF et IS-IS construisent une base d'état de liens."
  },
  {
    "id": 166,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn protocole ancien utilise principalement le nombre de sauts.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 06\n\nRéférence exercice : TCPIP-INFRA-166`",
    "reponse_v": "RIP",
    "reponse_f1": "OSPF",
    "reponse_f2": "BGP",
    "explication": "RIP utilise le hop count comme métrique."
  },
  {
    "id": 167,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux routeurs fournissent une passerelle virtuelle redondante.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 07\n\nRéférence exercice : TCPIP-INFRA-167`",
    "reponse_v": "VRRP ou HSRP",
    "reponse_f1": "STP uniquement",
    "reponse_f2": "LACP uniquement",
    "explication": "Les FHRP assurent la redondance de passerelle par défaut."
  },
  {
    "id": 168,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn fournisseur veut transporter plusieurs VPN clients sur un backbone MPLS.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 08\n\nRéférence exercice : TCPIP-INFRA-168`",
    "reponse_v": "Utiliser des labels MPLS et des VRF",
    "reponse_f1": "Utiliser uniquement des VLAN locaux de bout en bout",
    "reponse_f2": "Utiliser ARP entre tous les sites",
    "explication": "MPLS VPN sépare les clients via VRF et labels."
  },
  {
    "id": 169,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn routeur BGP reçoit deux routes avec des attributs différents.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 09\n\nRéférence exercice : TCPIP-INFRA-169`",
    "reponse_v": "La sélection dépend d'attributs BGP comme local preference et AS path",
    "reponse_f1": "La sélection dépend uniquement du TTL",
    "reponse_f2": "La route la plus récente gagne toujours",
    "explication": "BGP applique un processus de décision basé sur plusieurs attributs."
  },
  {
    "id": 170,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUne route statique de secours doit être utilisée seulement si la principale disparaît.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 10\n\nRéférence exercice : TCPIP-INFRA-170`",
    "reponse_v": "Configurer une route flottante avec une distance supérieure",
    "reponse_f1": "Configurer deux routes strictement identiques sans suivi",
    "reponse_f2": "Supprimer la route principale",
    "explication": "Une route flottante reste inactive tant qu'une route plus préférée existe."
  },
  {
    "id": 171,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn réseau OSPF est divisé en plusieurs zones.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 11\n\nRéférence exercice : TCPIP-INFRA-171`",
    "reponse_v": "L'area 0 sert de backbone",
    "reponse_f1": "Chaque zone doit être isolée de l'area 0",
    "reponse_f2": "Les ABR ne participent pas au routage",
    "explication": "Les zones OSPF doivent être reliées logiquement au backbone."
  },
  {
    "id": 172,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn voisin OSPF reste bloqué en EXSTART.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 12\n\nRéférence exercice : TCPIP-INFRA-172`",
    "reponse_v": "Suspecter notamment une incohérence de MTU ou négociation DBD",
    "reponse_f1": "Suspecter uniquement DNS",
    "reponse_f2": "Suspecter uniquement le VLAN natif de l'utilisateur",
    "explication": "EXSTART/EXCHANGE peut révéler un problème de MTU ou de négociation."
  },
  {
    "id": 173,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux chemins OSPF existent vers le même préfixe avec des coûts 20 et 30.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 13\n\nRéférence exercice : TCPIP-INFRA-173`",
    "reponse_v": "Le chemin de coût 20 est préféré",
    "reponse_f1": "Le chemin de coût 30 est préféré",
    "reponse_f2": "OSPF choisit toujours le chemin avec le moins de routeurs sans regarder le coût",
    "explication": "OSPF privilégie le coût cumulé le plus faible."
  },
  {
    "id": 174,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux routes de protocoles différents mènent au même préfixe.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 14\n\nRéférence exercice : TCPIP-INFRA-174`",
    "reponse_v": "La distance administrative départage d'abord les sources de route",
    "reponse_f1": "La MTU départage toujours les routes",
    "reponse_f2": "Le port TCP du protocole décide du chemin",
    "explication": "La préférence entre protocoles dépend de la distance administrative."
  },
  {
    "id": 175,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUne route plus spécifique et une route par défaut correspondent à la destination.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 15\n\nRéférence exercice : TCPIP-INFRA-175`",
    "reponse_v": "La route la plus spécifique est choisie",
    "reponse_f1": "La route par défaut est toujours prioritaire",
    "reponse_f2": "Les deux routes sont ignorées",
    "explication": "Le longest prefix match prime."
  },
  {
    "id": 176,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux entreprises échangent des routes Internet entre systèmes autonomes.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 16\n\nRéférence exercice : TCPIP-INFRA-176`",
    "reponse_v": "Utiliser BGP",
    "reponse_f1": "Utiliser STP",
    "reponse_f2": "Utiliser ARP",
    "explication": "BGP est le protocole de routage inter-domaine."
  },
  {
    "id": 177,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn IGP à état de liens est requis dans un réseau d'entreprise.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 17\n\nRéférence exercice : TCPIP-INFRA-177`",
    "reponse_v": "OSPF ou IS-IS",
    "reponse_f1": "BGP uniquement",
    "reponse_f2": "RARP",
    "explication": "OSPF et IS-IS construisent une base d'état de liens."
  },
  {
    "id": 178,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn protocole ancien utilise principalement le nombre de sauts.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 18\n\nRéférence exercice : TCPIP-INFRA-178`",
    "reponse_v": "RIP",
    "reponse_f1": "OSPF",
    "reponse_f2": "BGP",
    "explication": "RIP utilise le hop count comme métrique."
  },
  {
    "id": 179,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux routeurs fournissent une passerelle virtuelle redondante.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 19\n\nRéférence exercice : TCPIP-INFRA-179`",
    "reponse_v": "VRRP ou HSRP",
    "reponse_f1": "STP uniquement",
    "reponse_f2": "LACP uniquement",
    "explication": "Les FHRP assurent la redondance de passerelle par défaut."
  },
  {
    "id": 180,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn fournisseur veut transporter plusieurs VPN clients sur un backbone MPLS.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 20\n\nRéférence exercice : TCPIP-INFRA-180`",
    "reponse_v": "Utiliser des labels MPLS et des VRF",
    "reponse_f1": "Utiliser uniquement des VLAN locaux de bout en bout",
    "reponse_f2": "Utiliser ARP entre tous les sites",
    "explication": "MPLS VPN sépare les clients via VRF et labels."
  },
  {
    "id": 181,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn routeur BGP reçoit deux routes avec des attributs différents.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 21\n\nRéférence exercice : TCPIP-INFRA-181`",
    "reponse_v": "La sélection dépend d'attributs BGP comme local preference et AS path",
    "reponse_f1": "La sélection dépend uniquement du TTL",
    "reponse_f2": "La route la plus récente gagne toujours",
    "explication": "BGP applique un processus de décision basé sur plusieurs attributs."
  },
  {
    "id": 182,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUne route statique de secours doit être utilisée seulement si la principale disparaît.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 22\n\nRéférence exercice : TCPIP-INFRA-182`",
    "reponse_v": "Configurer une route flottante avec une distance supérieure",
    "reponse_f1": "Configurer deux routes strictement identiques sans suivi",
    "reponse_f2": "Supprimer la route principale",
    "explication": "Une route flottante reste inactive tant qu'une route plus préférée existe."
  },
  {
    "id": 183,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn réseau OSPF est divisé en plusieurs zones.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 23\n\nRéférence exercice : TCPIP-INFRA-183`",
    "reponse_v": "L'area 0 sert de backbone",
    "reponse_f1": "Chaque zone doit être isolée de l'area 0",
    "reponse_f2": "Les ABR ne participent pas au routage",
    "explication": "Les zones OSPF doivent être reliées logiquement au backbone."
  },
  {
    "id": 184,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn voisin OSPF reste bloqué en EXSTART.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 24\n\nRéférence exercice : TCPIP-INFRA-184`",
    "reponse_v": "Suspecter notamment une incohérence de MTU ou négociation DBD",
    "reponse_f1": "Suspecter uniquement DNS",
    "reponse_f2": "Suspecter uniquement le VLAN natif de l'utilisateur",
    "explication": "EXSTART/EXCHANGE peut révéler un problème de MTU ou de négociation."
  },
  {
    "id": 185,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux chemins OSPF existent vers le même préfixe avec des coûts 20 et 30.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 25\n\nRéférence exercice : TCPIP-INFRA-185`",
    "reponse_v": "Le chemin de coût 20 est préféré",
    "reponse_f1": "Le chemin de coût 30 est préféré",
    "reponse_f2": "OSPF choisit toujours le chemin avec le moins de routeurs sans regarder le coût",
    "explication": "OSPF privilégie le coût cumulé le plus faible."
  },
  {
    "id": 186,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux routes de protocoles différents mènent au même préfixe.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 26\n\nRéférence exercice : TCPIP-INFRA-186`",
    "reponse_v": "La distance administrative départage d'abord les sources de route",
    "reponse_f1": "La MTU départage toujours les routes",
    "reponse_f2": "Le port TCP du protocole décide du chemin",
    "explication": "La préférence entre protocoles dépend de la distance administrative."
  },
  {
    "id": 187,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUne route plus spécifique et une route par défaut correspondent à la destination.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 27\n\nRéférence exercice : TCPIP-INFRA-187`",
    "reponse_v": "La route la plus spécifique est choisie",
    "reponse_f1": "La route par défaut est toujours prioritaire",
    "reponse_f2": "Les deux routes sont ignorées",
    "explication": "Le longest prefix match prime."
  },
  {
    "id": 188,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux entreprises échangent des routes Internet entre systèmes autonomes.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 28\n\nRéférence exercice : TCPIP-INFRA-188`",
    "reponse_v": "Utiliser BGP",
    "reponse_f1": "Utiliser STP",
    "reponse_f2": "Utiliser ARP",
    "explication": "BGP est le protocole de routage inter-domaine."
  },
  {
    "id": 189,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn IGP à état de liens est requis dans un réseau d'entreprise.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 29\n\nRéférence exercice : TCPIP-INFRA-189`",
    "reponse_v": "OSPF ou IS-IS",
    "reponse_f1": "BGP uniquement",
    "reponse_f2": "RARP",
    "explication": "OSPF et IS-IS construisent une base d'état de liens."
  },
  {
    "id": 190,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn protocole ancien utilise principalement le nombre de sauts.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 30\n\nRéférence exercice : TCPIP-INFRA-190`",
    "reponse_v": "RIP",
    "reponse_f1": "OSPF",
    "reponse_f2": "BGP",
    "explication": "RIP utilise le hop count comme métrique."
  },
  {
    "id": 191,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux routeurs fournissent une passerelle virtuelle redondante.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 31\n\nRéférence exercice : TCPIP-INFRA-191`",
    "reponse_v": "VRRP ou HSRP",
    "reponse_f1": "STP uniquement",
    "reponse_f2": "LACP uniquement",
    "explication": "Les FHRP assurent la redondance de passerelle par défaut."
  },
  {
    "id": 192,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn fournisseur veut transporter plusieurs VPN clients sur un backbone MPLS.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 32\n\nRéférence exercice : TCPIP-INFRA-192`",
    "reponse_v": "Utiliser des labels MPLS et des VRF",
    "reponse_f1": "Utiliser uniquement des VLAN locaux de bout en bout",
    "reponse_f2": "Utiliser ARP entre tous les sites",
    "explication": "MPLS VPN sépare les clients via VRF et labels."
  },
  {
    "id": 193,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn routeur BGP reçoit deux routes avec des attributs différents.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 33\n\nRéférence exercice : TCPIP-INFRA-193`",
    "reponse_v": "La sélection dépend d'attributs BGP comme local preference et AS path",
    "reponse_f1": "La sélection dépend uniquement du TTL",
    "reponse_f2": "La route la plus récente gagne toujours",
    "explication": "BGP applique un processus de décision basé sur plusieurs attributs."
  },
  {
    "id": 194,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUne route statique de secours doit être utilisée seulement si la principale disparaît.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 34\n\nRéférence exercice : TCPIP-INFRA-194`",
    "reponse_v": "Configurer une route flottante avec une distance supérieure",
    "reponse_f1": "Configurer deux routes strictement identiques sans suivi",
    "reponse_f2": "Supprimer la route principale",
    "explication": "Une route flottante reste inactive tant qu'une route plus préférée existe."
  },
  {
    "id": 195,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn réseau OSPF est divisé en plusieurs zones.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 35\n\nRéférence exercice : TCPIP-INFRA-195`",
    "reponse_v": "L'area 0 sert de backbone",
    "reponse_f1": "Chaque zone doit être isolée de l'area 0",
    "reponse_f2": "Les ABR ne participent pas au routage",
    "explication": "Les zones OSPF doivent être reliées logiquement au backbone."
  },
  {
    "id": 196,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn voisin OSPF reste bloqué en EXSTART.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 36\n\nRéférence exercice : TCPIP-INFRA-196`",
    "reponse_v": "Suspecter notamment une incohérence de MTU ou négociation DBD",
    "reponse_f1": "Suspecter uniquement DNS",
    "reponse_f2": "Suspecter uniquement le VLAN natif de l'utilisateur",
    "explication": "EXSTART/EXCHANGE peut révéler un problème de MTU ou de négociation."
  },
  {
    "id": 197,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux chemins OSPF existent vers le même préfixe avec des coûts 20 et 30.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 37\n\nRéférence exercice : TCPIP-INFRA-197`",
    "reponse_v": "Le chemin de coût 20 est préféré",
    "reponse_f1": "Le chemin de coût 30 est préféré",
    "reponse_f2": "OSPF choisit toujours le chemin avec le moins de routeurs sans regarder le coût",
    "explication": "OSPF privilégie le coût cumulé le plus faible."
  },
  {
    "id": 198,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux routes de protocoles différents mènent au même préfixe.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 38\n\nRéférence exercice : TCPIP-INFRA-198`",
    "reponse_v": "La distance administrative départage d'abord les sources de route",
    "reponse_f1": "La MTU départage toujours les routes",
    "reponse_f2": "Le port TCP du protocole décide du chemin",
    "explication": "La préférence entre protocoles dépend de la distance administrative."
  },
  {
    "id": 199,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUne route plus spécifique et une route par défaut correspondent à la destination.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 39\n\nRéférence exercice : TCPIP-INFRA-199`",
    "reponse_v": "La route la plus spécifique est choisie",
    "reponse_f1": "La route par défaut est toujours prioritaire",
    "reponse_f2": "Les deux routes sont ignorées",
    "explication": "Le longest prefix match prime."
  },
  {
    "id": 200,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux entreprises échangent des routes Internet entre systèmes autonomes.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 40\n\nRéférence exercice : TCPIP-INFRA-200`",
    "reponse_v": "Utiliser BGP",
    "reponse_f1": "Utiliser STP",
    "reponse_f2": "Utiliser ARP",
    "explication": "BGP est le protocole de routage inter-domaine."
  },
  {
    "id": 201,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn IGP à état de liens est requis dans un réseau d'entreprise.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 41\n\nRéférence exercice : TCPIP-INFRA-201`",
    "reponse_v": "OSPF ou IS-IS",
    "reponse_f1": "BGP uniquement",
    "reponse_f2": "RARP",
    "explication": "OSPF et IS-IS construisent une base d'état de liens."
  },
  {
    "id": 202,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn protocole ancien utilise principalement le nombre de sauts.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 42\n\nRéférence exercice : TCPIP-INFRA-202`",
    "reponse_v": "RIP",
    "reponse_f1": "OSPF",
    "reponse_f2": "BGP",
    "explication": "RIP utilise le hop count comme métrique."
  },
  {
    "id": 203,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux routeurs fournissent une passerelle virtuelle redondante.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 43\n\nRéférence exercice : TCPIP-INFRA-203`",
    "reponse_v": "VRRP ou HSRP",
    "reponse_f1": "STP uniquement",
    "reponse_f2": "LACP uniquement",
    "explication": "Les FHRP assurent la redondance de passerelle par défaut."
  },
  {
    "id": 204,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn fournisseur veut transporter plusieurs VPN clients sur un backbone MPLS.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 44\n\nRéférence exercice : TCPIP-INFRA-204`",
    "reponse_v": "Utiliser des labels MPLS et des VRF",
    "reponse_f1": "Utiliser uniquement des VLAN locaux de bout en bout",
    "reponse_f2": "Utiliser ARP entre tous les sites",
    "explication": "MPLS VPN sépare les clients via VRF et labels."
  },
  {
    "id": 205,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn routeur BGP reçoit deux routes avec des attributs différents.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 45\n\nRéférence exercice : TCPIP-INFRA-205`",
    "reponse_v": "La sélection dépend d'attributs BGP comme local preference et AS path",
    "reponse_f1": "La sélection dépend uniquement du TTL",
    "reponse_f2": "La route la plus récente gagne toujours",
    "explication": "BGP applique un processus de décision basé sur plusieurs attributs."
  },
  {
    "id": 206,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUne route statique de secours doit être utilisée seulement si la principale disparaît.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 46\n\nRéférence exercice : TCPIP-INFRA-206`",
    "reponse_v": "Configurer une route flottante avec une distance supérieure",
    "reponse_f1": "Configurer deux routes strictement identiques sans suivi",
    "reponse_f2": "Supprimer la route principale",
    "explication": "Une route flottante reste inactive tant qu'une route plus préférée existe."
  },
  {
    "id": 207,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn réseau OSPF est divisé en plusieurs zones.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 47\n\nRéférence exercice : TCPIP-INFRA-207`",
    "reponse_v": "L'area 0 sert de backbone",
    "reponse_f1": "Chaque zone doit être isolée de l'area 0",
    "reponse_f2": "Les ABR ne participent pas au routage",
    "explication": "Les zones OSPF doivent être reliées logiquement au backbone."
  },
  {
    "id": 208,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn voisin OSPF reste bloqué en EXSTART.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 48\n\nRéférence exercice : TCPIP-INFRA-208`",
    "reponse_v": "Suspecter notamment une incohérence de MTU ou négociation DBD",
    "reponse_f1": "Suspecter uniquement DNS",
    "reponse_f2": "Suspecter uniquement le VLAN natif de l'utilisateur",
    "explication": "EXSTART/EXCHANGE peut révéler un problème de MTU ou de négociation."
  },
  {
    "id": 209,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux chemins OSPF existent vers le même préfixe avec des coûts 20 et 30.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 49\n\nRéférence exercice : TCPIP-INFRA-209`",
    "reponse_v": "Le chemin de coût 20 est préféré",
    "reponse_f1": "Le chemin de coût 30 est préféré",
    "reponse_f2": "OSPF choisit toujours le chemin avec le moins de routeurs sans regarder le coût",
    "explication": "OSPF privilégie le coût cumulé le plus faible."
  },
  {
    "id": 210,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux routes de protocoles différents mènent au même préfixe.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 50\n\nRéférence exercice : TCPIP-INFRA-210`",
    "reponse_v": "La distance administrative départage d'abord les sources de route",
    "reponse_f1": "La MTU départage toujours les routes",
    "reponse_f2": "Le port TCP du protocole décide du chemin",
    "explication": "La préférence entre protocoles dépend de la distance administrative."
  },
  {
    "id": 211,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUne route plus spécifique et une route par défaut correspondent à la destination.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 51\n\nRéférence exercice : TCPIP-INFRA-211`",
    "reponse_v": "La route la plus spécifique est choisie",
    "reponse_f1": "La route par défaut est toujours prioritaire",
    "reponse_f2": "Les deux routes sont ignorées",
    "explication": "Le longest prefix match prime."
  },
  {
    "id": 212,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux entreprises échangent des routes Internet entre systèmes autonomes.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 52\n\nRéférence exercice : TCPIP-INFRA-212`",
    "reponse_v": "Utiliser BGP",
    "reponse_f1": "Utiliser STP",
    "reponse_f2": "Utiliser ARP",
    "explication": "BGP est le protocole de routage inter-domaine."
  },
  {
    "id": 213,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn IGP à état de liens est requis dans un réseau d'entreprise.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 53\n\nRéférence exercice : TCPIP-INFRA-213`",
    "reponse_v": "OSPF ou IS-IS",
    "reponse_f1": "BGP uniquement",
    "reponse_f2": "RARP",
    "explication": "OSPF et IS-IS construisent une base d'état de liens."
  },
  {
    "id": 214,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn protocole ancien utilise principalement le nombre de sauts.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 54\n\nRéférence exercice : TCPIP-INFRA-214`",
    "reponse_v": "RIP",
    "reponse_f1": "OSPF",
    "reponse_f2": "BGP",
    "explication": "RIP utilise le hop count comme métrique."
  },
  {
    "id": 215,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nDeux routeurs fournissent une passerelle virtuelle redondante.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 55\n\nRéférence exercice : TCPIP-INFRA-215`",
    "reponse_v": "VRRP ou HSRP",
    "reponse_f1": "STP uniquement",
    "reponse_f2": "LACP uniquement",
    "explication": "Les FHRP assurent la redondance de passerelle par défaut."
  },
  {
    "id": 216,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn fournisseur veut transporter plusieurs VPN clients sur un backbone MPLS.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 56\n\nRéférence exercice : TCPIP-INFRA-216`",
    "reponse_v": "Utiliser des labels MPLS et des VRF",
    "reponse_f1": "Utiliser uniquement des VLAN locaux de bout en bout",
    "reponse_f2": "Utiliser ARP entre tous les sites",
    "explication": "MPLS VPN sépare les clients via VRF et labels."
  },
  {
    "id": 217,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn routeur BGP reçoit deux routes avec des attributs différents.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 57\n\nRéférence exercice : TCPIP-INFRA-217`",
    "reponse_v": "La sélection dépend d'attributs BGP comme local preference et AS path",
    "reponse_f1": "La sélection dépend uniquement du TTL",
    "reponse_f2": "La route la plus récente gagne toujours",
    "explication": "BGP applique un processus de décision basé sur plusieurs attributs."
  },
  {
    "id": 218,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUne route statique de secours doit être utilisée seulement si la principale disparaît.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 58\n\nRéférence exercice : TCPIP-INFRA-218`",
    "reponse_v": "Configurer une route flottante avec une distance supérieure",
    "reponse_f1": "Configurer deux routes strictement identiques sans suivi",
    "reponse_f2": "Supprimer la route principale",
    "explication": "Une route flottante reste inactive tant qu'une route plus préférée existe."
  },
  {
    "id": 219,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn réseau OSPF est divisé en plusieurs zones.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 59\n\nRéférence exercice : TCPIP-INFRA-219`",
    "reponse_v": "L'area 0 sert de backbone",
    "reponse_f1": "Chaque zone doit être isolée de l'area 0",
    "reponse_f2": "Les ABR ne participent pas au routage",
    "explication": "Les zones OSPF doivent être reliées logiquement au backbone."
  },
  {
    "id": 220,
    "question": "`Mini-TP Routage d'infrastructure\n\nSituation :\nUn voisin OSPF reste bloqué en EXSTART.\n\nQuelle analyse est la plus correcte ?\n\nCas routage : 60\n\nRéférence exercice : TCPIP-INFRA-220`",
    "reponse_v": "Suspecter notamment une incohérence de MTU ou négociation DBD",
    "reponse_f1": "Suspecter uniquement DNS",
    "reponse_f2": "Suspecter uniquement le VLAN natif de l'utilisateur",
    "explication": "EXSTART/EXCHANGE peut révéler un problème de MTU ou de négociation."
  },
  {
    "id": 221,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn poste obtient automatiquement adresse IP, masque, passerelle et DNS.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 01\n\nRéférence exercice : TCPIP-INFRA-221`",
    "reponse_v": "DHCP",
    "reponse_f1": "DNS",
    "reponse_f2": "SNMP",
    "explication": "DHCP distribue les paramètres réseau."
  },
  {
    "id": 222,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn client DHCP et le serveur se trouvent dans des sous-réseaux différents.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 02\n\nRéférence exercice : TCPIP-INFRA-222`",
    "reponse_v": "Utiliser un relais DHCP",
    "reponse_f1": "Utiliser un proxy HTTP",
    "reponse_f2": "Utiliser STP",
    "explication": "Le relais transfère les broadcasts DHCP vers le serveur."
  },
  {
    "id": 223,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn nom d'hôte doit être traduit en adresse IP.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 03\n\nRéférence exercice : TCPIP-INFRA-223`",
    "reponse_v": "DNS",
    "reponse_f1": "NTP",
    "reponse_f2": "Syslog",
    "explication": "DNS assure la résolution de noms."
  },
  {
    "id": 224,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nDes équipements doivent partager une heure cohérente.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 04\n\nRéférence exercice : TCPIP-INFRA-224`",
    "reponse_v": "NTP",
    "reponse_f1": "SNMP",
    "reponse_f2": "DHCP",
    "explication": "NTP synchronise les horloges."
  },
  {
    "id": 225,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn superviseur interroge des compteurs d'interface.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 05\n\nRéférence exercice : TCPIP-INFRA-225`",
    "reponse_v": "SNMP",
    "reponse_f1": "NTP",
    "reponse_f2": "ARP",
    "explication": "SNMP permet la supervision et la collecte de métriques."
  },
  {
    "id": 226,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn équipement envoie des événements vers un serveur central.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 06\n\nRéférence exercice : TCPIP-INFRA-226`",
    "reponse_v": "Syslog",
    "reponse_f1": "BGP",
    "reponse_f2": "LACP",
    "explication": "Syslog centralise les journaux réseau."
  },
  {
    "id": 227,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne version de SNMP doit assurer authentification et chiffrement.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 07\n\nRéférence exercice : TCPIP-INFRA-227`",
    "reponse_v": "SNMPv3",
    "reponse_f1": "SNMPv1",
    "reponse_f2": "RMON uniquement",
    "explication": "SNMPv3 ajoute sécurité et confidentialité."
  },
  {
    "id": 228,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne requête DNS doit retrouver le serveur de messagerie d'un domaine.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 08\n\nRéférence exercice : TCPIP-INFRA-228`",
    "reponse_v": "Enregistrement MX",
    "reponse_f1": "Enregistrement PTR",
    "reponse_f2": "Enregistrement TXT uniquement",
    "explication": "MX désigne les serveurs de messagerie."
  },
  {
    "id": 229,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne adresse IP doit être résolue vers un nom.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 09\n\nRéférence exercice : TCPIP-INFRA-229`",
    "reponse_v": "Requête DNS inverse avec PTR",
    "reponse_f1": "Requête A directe",
    "reponse_f2": "Requête DHCP Discover",
    "explication": "Les zones inverses utilisent des enregistrements PTR."
  },
  {
    "id": 230,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn poste obtient automatiquement adresse IP, masque, passerelle et DNS.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 10\n\nRéférence exercice : TCPIP-INFRA-230`",
    "reponse_v": "DHCP",
    "reponse_f1": "DNS",
    "reponse_f2": "SNMP",
    "explication": "DHCP distribue les paramètres réseau."
  },
  {
    "id": 231,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn client DHCP et le serveur se trouvent dans des sous-réseaux différents.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 11\n\nRéférence exercice : TCPIP-INFRA-231`",
    "reponse_v": "Utiliser un relais DHCP",
    "reponse_f1": "Utiliser un proxy HTTP",
    "reponse_f2": "Utiliser STP",
    "explication": "Le relais transfère les broadcasts DHCP vers le serveur."
  },
  {
    "id": 232,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn nom d'hôte doit être traduit en adresse IP.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 12\n\nRéférence exercice : TCPIP-INFRA-232`",
    "reponse_v": "DNS",
    "reponse_f1": "NTP",
    "reponse_f2": "Syslog",
    "explication": "DNS assure la résolution de noms."
  },
  {
    "id": 233,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nDes équipements doivent partager une heure cohérente.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 13\n\nRéférence exercice : TCPIP-INFRA-233`",
    "reponse_v": "NTP",
    "reponse_f1": "SNMP",
    "reponse_f2": "DHCP",
    "explication": "NTP synchronise les horloges."
  },
  {
    "id": 234,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn superviseur interroge des compteurs d'interface.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 14\n\nRéférence exercice : TCPIP-INFRA-234`",
    "reponse_v": "SNMP",
    "reponse_f1": "NTP",
    "reponse_f2": "ARP",
    "explication": "SNMP permet la supervision et la collecte de métriques."
  },
  {
    "id": 235,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn équipement envoie des événements vers un serveur central.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 15\n\nRéférence exercice : TCPIP-INFRA-235`",
    "reponse_v": "Syslog",
    "reponse_f1": "BGP",
    "reponse_f2": "LACP",
    "explication": "Syslog centralise les journaux réseau."
  },
  {
    "id": 236,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne version de SNMP doit assurer authentification et chiffrement.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 16\n\nRéférence exercice : TCPIP-INFRA-236`",
    "reponse_v": "SNMPv3",
    "reponse_f1": "SNMPv1",
    "reponse_f2": "RMON uniquement",
    "explication": "SNMPv3 ajoute sécurité et confidentialité."
  },
  {
    "id": 237,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne requête DNS doit retrouver le serveur de messagerie d'un domaine.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 17\n\nRéférence exercice : TCPIP-INFRA-237`",
    "reponse_v": "Enregistrement MX",
    "reponse_f1": "Enregistrement PTR",
    "reponse_f2": "Enregistrement TXT uniquement",
    "explication": "MX désigne les serveurs de messagerie."
  },
  {
    "id": 238,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne adresse IP doit être résolue vers un nom.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 18\n\nRéférence exercice : TCPIP-INFRA-238`",
    "reponse_v": "Requête DNS inverse avec PTR",
    "reponse_f1": "Requête A directe",
    "reponse_f2": "Requête DHCP Discover",
    "explication": "Les zones inverses utilisent des enregistrements PTR."
  },
  {
    "id": 239,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn poste obtient automatiquement adresse IP, masque, passerelle et DNS.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 19\n\nRéférence exercice : TCPIP-INFRA-239`",
    "reponse_v": "DHCP",
    "reponse_f1": "DNS",
    "reponse_f2": "SNMP",
    "explication": "DHCP distribue les paramètres réseau."
  },
  {
    "id": 240,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn client DHCP et le serveur se trouvent dans des sous-réseaux différents.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 20\n\nRéférence exercice : TCPIP-INFRA-240`",
    "reponse_v": "Utiliser un relais DHCP",
    "reponse_f1": "Utiliser un proxy HTTP",
    "reponse_f2": "Utiliser STP",
    "explication": "Le relais transfère les broadcasts DHCP vers le serveur."
  },
  {
    "id": 241,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn nom d'hôte doit être traduit en adresse IP.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 21\n\nRéférence exercice : TCPIP-INFRA-241`",
    "reponse_v": "DNS",
    "reponse_f1": "NTP",
    "reponse_f2": "Syslog",
    "explication": "DNS assure la résolution de noms."
  },
  {
    "id": 242,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nDes équipements doivent partager une heure cohérente.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 22\n\nRéférence exercice : TCPIP-INFRA-242`",
    "reponse_v": "NTP",
    "reponse_f1": "SNMP",
    "reponse_f2": "DHCP",
    "explication": "NTP synchronise les horloges."
  },
  {
    "id": 243,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn superviseur interroge des compteurs d'interface.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 23\n\nRéférence exercice : TCPIP-INFRA-243`",
    "reponse_v": "SNMP",
    "reponse_f1": "NTP",
    "reponse_f2": "ARP",
    "explication": "SNMP permet la supervision et la collecte de métriques."
  },
  {
    "id": 244,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn équipement envoie des événements vers un serveur central.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 24\n\nRéférence exercice : TCPIP-INFRA-244`",
    "reponse_v": "Syslog",
    "reponse_f1": "BGP",
    "reponse_f2": "LACP",
    "explication": "Syslog centralise les journaux réseau."
  },
  {
    "id": 245,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne version de SNMP doit assurer authentification et chiffrement.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 25\n\nRéférence exercice : TCPIP-INFRA-245`",
    "reponse_v": "SNMPv3",
    "reponse_f1": "SNMPv1",
    "reponse_f2": "RMON uniquement",
    "explication": "SNMPv3 ajoute sécurité et confidentialité."
  },
  {
    "id": 246,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne requête DNS doit retrouver le serveur de messagerie d'un domaine.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 26\n\nRéférence exercice : TCPIP-INFRA-246`",
    "reponse_v": "Enregistrement MX",
    "reponse_f1": "Enregistrement PTR",
    "reponse_f2": "Enregistrement TXT uniquement",
    "explication": "MX désigne les serveurs de messagerie."
  },
  {
    "id": 247,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne adresse IP doit être résolue vers un nom.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 27\n\nRéférence exercice : TCPIP-INFRA-247`",
    "reponse_v": "Requête DNS inverse avec PTR",
    "reponse_f1": "Requête A directe",
    "reponse_f2": "Requête DHCP Discover",
    "explication": "Les zones inverses utilisent des enregistrements PTR."
  },
  {
    "id": 248,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn poste obtient automatiquement adresse IP, masque, passerelle et DNS.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 28\n\nRéférence exercice : TCPIP-INFRA-248`",
    "reponse_v": "DHCP",
    "reponse_f1": "DNS",
    "reponse_f2": "SNMP",
    "explication": "DHCP distribue les paramètres réseau."
  },
  {
    "id": 249,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn client DHCP et le serveur se trouvent dans des sous-réseaux différents.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 29\n\nRéférence exercice : TCPIP-INFRA-249`",
    "reponse_v": "Utiliser un relais DHCP",
    "reponse_f1": "Utiliser un proxy HTTP",
    "reponse_f2": "Utiliser STP",
    "explication": "Le relais transfère les broadcasts DHCP vers le serveur."
  },
  {
    "id": 250,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn nom d'hôte doit être traduit en adresse IP.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 30\n\nRéférence exercice : TCPIP-INFRA-250`",
    "reponse_v": "DNS",
    "reponse_f1": "NTP",
    "reponse_f2": "Syslog",
    "explication": "DNS assure la résolution de noms."
  },
  {
    "id": 251,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nDes équipements doivent partager une heure cohérente.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 31\n\nRéférence exercice : TCPIP-INFRA-251`",
    "reponse_v": "NTP",
    "reponse_f1": "SNMP",
    "reponse_f2": "DHCP",
    "explication": "NTP synchronise les horloges."
  },
  {
    "id": 252,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn superviseur interroge des compteurs d'interface.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 32\n\nRéférence exercice : TCPIP-INFRA-252`",
    "reponse_v": "SNMP",
    "reponse_f1": "NTP",
    "reponse_f2": "ARP",
    "explication": "SNMP permet la supervision et la collecte de métriques."
  },
  {
    "id": 253,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn équipement envoie des événements vers un serveur central.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 33\n\nRéférence exercice : TCPIP-INFRA-253`",
    "reponse_v": "Syslog",
    "reponse_f1": "BGP",
    "reponse_f2": "LACP",
    "explication": "Syslog centralise les journaux réseau."
  },
  {
    "id": 254,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne version de SNMP doit assurer authentification et chiffrement.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 34\n\nRéférence exercice : TCPIP-INFRA-254`",
    "reponse_v": "SNMPv3",
    "reponse_f1": "SNMPv1",
    "reponse_f2": "RMON uniquement",
    "explication": "SNMPv3 ajoute sécurité et confidentialité."
  },
  {
    "id": 255,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne requête DNS doit retrouver le serveur de messagerie d'un domaine.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 35\n\nRéférence exercice : TCPIP-INFRA-255`",
    "reponse_v": "Enregistrement MX",
    "reponse_f1": "Enregistrement PTR",
    "reponse_f2": "Enregistrement TXT uniquement",
    "explication": "MX désigne les serveurs de messagerie."
  },
  {
    "id": 256,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne adresse IP doit être résolue vers un nom.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 36\n\nRéférence exercice : TCPIP-INFRA-256`",
    "reponse_v": "Requête DNS inverse avec PTR",
    "reponse_f1": "Requête A directe",
    "reponse_f2": "Requête DHCP Discover",
    "explication": "Les zones inverses utilisent des enregistrements PTR."
  },
  {
    "id": 257,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn poste obtient automatiquement adresse IP, masque, passerelle et DNS.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 37\n\nRéférence exercice : TCPIP-INFRA-257`",
    "reponse_v": "DHCP",
    "reponse_f1": "DNS",
    "reponse_f2": "SNMP",
    "explication": "DHCP distribue les paramètres réseau."
  },
  {
    "id": 258,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn client DHCP et le serveur se trouvent dans des sous-réseaux différents.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 38\n\nRéférence exercice : TCPIP-INFRA-258`",
    "reponse_v": "Utiliser un relais DHCP",
    "reponse_f1": "Utiliser un proxy HTTP",
    "reponse_f2": "Utiliser STP",
    "explication": "Le relais transfère les broadcasts DHCP vers le serveur."
  },
  {
    "id": 259,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn nom d'hôte doit être traduit en adresse IP.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 39\n\nRéférence exercice : TCPIP-INFRA-259`",
    "reponse_v": "DNS",
    "reponse_f1": "NTP",
    "reponse_f2": "Syslog",
    "explication": "DNS assure la résolution de noms."
  },
  {
    "id": 260,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nDes équipements doivent partager une heure cohérente.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 40\n\nRéférence exercice : TCPIP-INFRA-260`",
    "reponse_v": "NTP",
    "reponse_f1": "SNMP",
    "reponse_f2": "DHCP",
    "explication": "NTP synchronise les horloges."
  },
  {
    "id": 261,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn superviseur interroge des compteurs d'interface.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 41\n\nRéférence exercice : TCPIP-INFRA-261`",
    "reponse_v": "SNMP",
    "reponse_f1": "NTP",
    "reponse_f2": "ARP",
    "explication": "SNMP permet la supervision et la collecte de métriques."
  },
  {
    "id": 262,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUn équipement envoie des événements vers un serveur central.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 42\n\nRéférence exercice : TCPIP-INFRA-262`",
    "reponse_v": "Syslog",
    "reponse_f1": "BGP",
    "reponse_f2": "LACP",
    "explication": "Syslog centralise les journaux réseau."
  },
  {
    "id": 263,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne version de SNMP doit assurer authentification et chiffrement.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 43\n\nRéférence exercice : TCPIP-INFRA-263`",
    "reponse_v": "SNMPv3",
    "reponse_f1": "SNMPv1",
    "reponse_f2": "RMON uniquement",
    "explication": "SNMPv3 ajoute sécurité et confidentialité."
  },
  {
    "id": 264,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne requête DNS doit retrouver le serveur de messagerie d'un domaine.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 44\n\nRéférence exercice : TCPIP-INFRA-264`",
    "reponse_v": "Enregistrement MX",
    "reponse_f1": "Enregistrement PTR",
    "reponse_f2": "Enregistrement TXT uniquement",
    "explication": "MX désigne les serveurs de messagerie."
  },
  {
    "id": 265,
    "question": "`Mini-TP Protocoles d'infrastructure\n\nBesoin :\nUne adresse IP doit être résolue vers un nom.\n\nQuel protocole ou mécanisme est le plus adapté ?\n\nCas services : 45\n\nRéférence exercice : TCPIP-INFRA-265`",
    "reponse_v": "Requête DNS inverse avec PTR",
    "reponse_f1": "Requête A directe",
    "reponse_f2": "Requête DHCP Discover",
    "explication": "Les zones inverses utilisent des enregistrements PTR."
  },
  {
    "id": 266,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nDeux sites doivent être reliés par un tunnel chiffré sur Internet.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 01\n\nRéférence exercice : TCPIP-INFRA-266`",
    "reponse_v": "VPN IPsec site-à-site",
    "reponse_f1": "VLAN access",
    "reponse_f2": "NTP",
    "explication": "IPsec protège les échanges entre réseaux distants."
  },
  {
    "id": 267,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUn utilisateur nomade doit accéder au SI depuis Internet.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 02\n\nRéférence exercice : TCPIP-INFRA-267`",
    "reponse_v": "VPN d'accès distant",
    "reponse_f1": "MPLS L2 local uniquement",
    "reponse_f2": "STP",
    "explication": "Le VPN remote access authentifie et chiffre la connexion utilisateur."
  },
  {
    "id": 268,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nLa voix IP doit être prioritaire sur les sauvegardes.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 03\n\nRéférence exercice : TCPIP-INFRA-268`",
    "reponse_v": "Appliquer une QoS avec classification et file à faible latence",
    "reponse_f1": "Augmenter uniquement le TTL",
    "reponse_f2": "Désactiver UDP",
    "explication": "La voix est sensible au délai, à la gigue et aux pertes."
  },
  {
    "id": 269,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nDeux liens WAN doivent être utilisés en parallèle avec bascule.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 04\n\nRéférence exercice : TCPIP-INFRA-269`",
    "reponse_v": "Utiliser routage dynamique ou SD-WAN avec suivi de qualité",
    "reponse_f1": "Utiliser uniquement ARP",
    "reponse_f2": "Configurer deux adresses MAC identiques",
    "explication": "Le pilotage WAN doit prendre en compte disponibilité et performance."
  },
  {
    "id": 270,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUne ACL doit bloquer uniquement HTTPS d'un sous-réseau vers un serveur précis.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 05\n\nRéférence exercice : TCPIP-INFRA-270`",
    "reponse_v": "Utiliser une ACL étendue proche de la source",
    "reponse_f1": "Utiliser une ACL standard proche de la source",
    "reponse_f2": "Utiliser STP",
    "explication": "Une ACL étendue filtre adresses, protocole et ports."
  },
  {
    "id": 271,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUn pare-feu suit les connexions TCP établies.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 06\n\nRéférence exercice : TCPIP-INFRA-271`",
    "reponse_v": "Pare-feu stateful",
    "reponse_f1": "Hub passif",
    "reponse_f2": "Bridge transparent sans filtrage",
    "explication": "Le suivi d'état permet d'autoriser les paquets de retour cohérents."
  },
  {
    "id": 272,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUne attaque surcharge un serveur avec de nombreuses connexions.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 07\n\nRéférence exercice : TCPIP-INFRA-272`",
    "reponse_v": "Mettre en place protections DDoS, rate limiting et capacité adaptée",
    "reponse_f1": "Désactiver les journaux",
    "reponse_f2": "Augmenter uniquement le numéro de port",
    "explication": "La mitigation combine filtrage, absorption et limitation."
  },
  {
    "id": 273,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nDeux sites doivent être reliés par un tunnel chiffré sur Internet.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 08\n\nRéférence exercice : TCPIP-INFRA-273`",
    "reponse_v": "VPN IPsec site-à-site",
    "reponse_f1": "VLAN access",
    "reponse_f2": "NTP",
    "explication": "IPsec protège les échanges entre réseaux distants."
  },
  {
    "id": 274,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUn utilisateur nomade doit accéder au SI depuis Internet.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 09\n\nRéférence exercice : TCPIP-INFRA-274`",
    "reponse_v": "VPN d'accès distant",
    "reponse_f1": "MPLS L2 local uniquement",
    "reponse_f2": "STP",
    "explication": "Le VPN remote access authentifie et chiffre la connexion utilisateur."
  },
  {
    "id": 275,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nLa voix IP doit être prioritaire sur les sauvegardes.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 10\n\nRéférence exercice : TCPIP-INFRA-275`",
    "reponse_v": "Appliquer une QoS avec classification et file à faible latence",
    "reponse_f1": "Augmenter uniquement le TTL",
    "reponse_f2": "Désactiver UDP",
    "explication": "La voix est sensible au délai, à la gigue et aux pertes."
  },
  {
    "id": 276,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nDeux liens WAN doivent être utilisés en parallèle avec bascule.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 11\n\nRéférence exercice : TCPIP-INFRA-276`",
    "reponse_v": "Utiliser routage dynamique ou SD-WAN avec suivi de qualité",
    "reponse_f1": "Utiliser uniquement ARP",
    "reponse_f2": "Configurer deux adresses MAC identiques",
    "explication": "Le pilotage WAN doit prendre en compte disponibilité et performance."
  },
  {
    "id": 277,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUne ACL doit bloquer uniquement HTTPS d'un sous-réseau vers un serveur précis.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 12\n\nRéférence exercice : TCPIP-INFRA-277`",
    "reponse_v": "Utiliser une ACL étendue proche de la source",
    "reponse_f1": "Utiliser une ACL standard proche de la source",
    "reponse_f2": "Utiliser STP",
    "explication": "Une ACL étendue filtre adresses, protocole et ports."
  },
  {
    "id": 278,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUn pare-feu suit les connexions TCP établies.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 13\n\nRéférence exercice : TCPIP-INFRA-278`",
    "reponse_v": "Pare-feu stateful",
    "reponse_f1": "Hub passif",
    "reponse_f2": "Bridge transparent sans filtrage",
    "explication": "Le suivi d'état permet d'autoriser les paquets de retour cohérents."
  },
  {
    "id": 279,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUne attaque surcharge un serveur avec de nombreuses connexions.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 14\n\nRéférence exercice : TCPIP-INFRA-279`",
    "reponse_v": "Mettre en place protections DDoS, rate limiting et capacité adaptée",
    "reponse_f1": "Désactiver les journaux",
    "reponse_f2": "Augmenter uniquement le numéro de port",
    "explication": "La mitigation combine filtrage, absorption et limitation."
  },
  {
    "id": 280,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nDeux sites doivent être reliés par un tunnel chiffré sur Internet.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 15\n\nRéférence exercice : TCPIP-INFRA-280`",
    "reponse_v": "VPN IPsec site-à-site",
    "reponse_f1": "VLAN access",
    "reponse_f2": "NTP",
    "explication": "IPsec protège les échanges entre réseaux distants."
  },
  {
    "id": 281,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUn utilisateur nomade doit accéder au SI depuis Internet.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 16\n\nRéférence exercice : TCPIP-INFRA-281`",
    "reponse_v": "VPN d'accès distant",
    "reponse_f1": "MPLS L2 local uniquement",
    "reponse_f2": "STP",
    "explication": "Le VPN remote access authentifie et chiffre la connexion utilisateur."
  },
  {
    "id": 282,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nLa voix IP doit être prioritaire sur les sauvegardes.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 17\n\nRéférence exercice : TCPIP-INFRA-282`",
    "reponse_v": "Appliquer une QoS avec classification et file à faible latence",
    "reponse_f1": "Augmenter uniquement le TTL",
    "reponse_f2": "Désactiver UDP",
    "explication": "La voix est sensible au délai, à la gigue et aux pertes."
  },
  {
    "id": 283,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nDeux liens WAN doivent être utilisés en parallèle avec bascule.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 18\n\nRéférence exercice : TCPIP-INFRA-283`",
    "reponse_v": "Utiliser routage dynamique ou SD-WAN avec suivi de qualité",
    "reponse_f1": "Utiliser uniquement ARP",
    "reponse_f2": "Configurer deux adresses MAC identiques",
    "explication": "Le pilotage WAN doit prendre en compte disponibilité et performance."
  },
  {
    "id": 284,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUne ACL doit bloquer uniquement HTTPS d'un sous-réseau vers un serveur précis.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 19\n\nRéférence exercice : TCPIP-INFRA-284`",
    "reponse_v": "Utiliser une ACL étendue proche de la source",
    "reponse_f1": "Utiliser une ACL standard proche de la source",
    "reponse_f2": "Utiliser STP",
    "explication": "Une ACL étendue filtre adresses, protocole et ports."
  },
  {
    "id": 285,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUn pare-feu suit les connexions TCP établies.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 20\n\nRéférence exercice : TCPIP-INFRA-285`",
    "reponse_v": "Pare-feu stateful",
    "reponse_f1": "Hub passif",
    "reponse_f2": "Bridge transparent sans filtrage",
    "explication": "Le suivi d'état permet d'autoriser les paquets de retour cohérents."
  },
  {
    "id": 286,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUne attaque surcharge un serveur avec de nombreuses connexions.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 21\n\nRéférence exercice : TCPIP-INFRA-286`",
    "reponse_v": "Mettre en place protections DDoS, rate limiting et capacité adaptée",
    "reponse_f1": "Désactiver les journaux",
    "reponse_f2": "Augmenter uniquement le numéro de port",
    "explication": "La mitigation combine filtrage, absorption et limitation."
  },
  {
    "id": 287,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nDeux sites doivent être reliés par un tunnel chiffré sur Internet.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 22\n\nRéférence exercice : TCPIP-INFRA-287`",
    "reponse_v": "VPN IPsec site-à-site",
    "reponse_f1": "VLAN access",
    "reponse_f2": "NTP",
    "explication": "IPsec protège les échanges entre réseaux distants."
  },
  {
    "id": 288,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUn utilisateur nomade doit accéder au SI depuis Internet.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 23\n\nRéférence exercice : TCPIP-INFRA-288`",
    "reponse_v": "VPN d'accès distant",
    "reponse_f1": "MPLS L2 local uniquement",
    "reponse_f2": "STP",
    "explication": "Le VPN remote access authentifie et chiffre la connexion utilisateur."
  },
  {
    "id": 289,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nLa voix IP doit être prioritaire sur les sauvegardes.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 24\n\nRéférence exercice : TCPIP-INFRA-289`",
    "reponse_v": "Appliquer une QoS avec classification et file à faible latence",
    "reponse_f1": "Augmenter uniquement le TTL",
    "reponse_f2": "Désactiver UDP",
    "explication": "La voix est sensible au délai, à la gigue et aux pertes."
  },
  {
    "id": 290,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nDeux liens WAN doivent être utilisés en parallèle avec bascule.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 25\n\nRéférence exercice : TCPIP-INFRA-290`",
    "reponse_v": "Utiliser routage dynamique ou SD-WAN avec suivi de qualité",
    "reponse_f1": "Utiliser uniquement ARP",
    "reponse_f2": "Configurer deux adresses MAC identiques",
    "explication": "Le pilotage WAN doit prendre en compte disponibilité et performance."
  },
  {
    "id": 291,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUne ACL doit bloquer uniquement HTTPS d'un sous-réseau vers un serveur précis.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 26\n\nRéférence exercice : TCPIP-INFRA-291`",
    "reponse_v": "Utiliser une ACL étendue proche de la source",
    "reponse_f1": "Utiliser une ACL standard proche de la source",
    "reponse_f2": "Utiliser STP",
    "explication": "Une ACL étendue filtre adresses, protocole et ports."
  },
  {
    "id": 292,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUn pare-feu suit les connexions TCP établies.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 27\n\nRéférence exercice : TCPIP-INFRA-292`",
    "reponse_v": "Pare-feu stateful",
    "reponse_f1": "Hub passif",
    "reponse_f2": "Bridge transparent sans filtrage",
    "explication": "Le suivi d'état permet d'autoriser les paquets de retour cohérents."
  },
  {
    "id": 293,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUne attaque surcharge un serveur avec de nombreuses connexions.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 28\n\nRéférence exercice : TCPIP-INFRA-293`",
    "reponse_v": "Mettre en place protections DDoS, rate limiting et capacité adaptée",
    "reponse_f1": "Désactiver les journaux",
    "reponse_f2": "Augmenter uniquement le numéro de port",
    "explication": "La mitigation combine filtrage, absorption et limitation."
  },
  {
    "id": 294,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nDeux sites doivent être reliés par un tunnel chiffré sur Internet.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 29\n\nRéférence exercice : TCPIP-INFRA-294`",
    "reponse_v": "VPN IPsec site-à-site",
    "reponse_f1": "VLAN access",
    "reponse_f2": "NTP",
    "explication": "IPsec protège les échanges entre réseaux distants."
  },
  {
    "id": 295,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUn utilisateur nomade doit accéder au SI depuis Internet.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 30\n\nRéférence exercice : TCPIP-INFRA-295`",
    "reponse_v": "VPN d'accès distant",
    "reponse_f1": "MPLS L2 local uniquement",
    "reponse_f2": "STP",
    "explication": "Le VPN remote access authentifie et chiffre la connexion utilisateur."
  },
  {
    "id": 296,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nLa voix IP doit être prioritaire sur les sauvegardes.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 31\n\nRéférence exercice : TCPIP-INFRA-296`",
    "reponse_v": "Appliquer une QoS avec classification et file à faible latence",
    "reponse_f1": "Augmenter uniquement le TTL",
    "reponse_f2": "Désactiver UDP",
    "explication": "La voix est sensible au délai, à la gigue et aux pertes."
  },
  {
    "id": 297,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nDeux liens WAN doivent être utilisés en parallèle avec bascule.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 32\n\nRéférence exercice : TCPIP-INFRA-297`",
    "reponse_v": "Utiliser routage dynamique ou SD-WAN avec suivi de qualité",
    "reponse_f1": "Utiliser uniquement ARP",
    "reponse_f2": "Configurer deux adresses MAC identiques",
    "explication": "Le pilotage WAN doit prendre en compte disponibilité et performance."
  },
  {
    "id": 298,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUne ACL doit bloquer uniquement HTTPS d'un sous-réseau vers un serveur précis.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 33\n\nRéférence exercice : TCPIP-INFRA-298`",
    "reponse_v": "Utiliser une ACL étendue proche de la source",
    "reponse_f1": "Utiliser une ACL standard proche de la source",
    "reponse_f2": "Utiliser STP",
    "explication": "Une ACL étendue filtre adresses, protocole et ports."
  },
  {
    "id": 299,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUn pare-feu suit les connexions TCP établies.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 34\n\nRéférence exercice : TCPIP-INFRA-299`",
    "reponse_v": "Pare-feu stateful",
    "reponse_f1": "Hub passif",
    "reponse_f2": "Bridge transparent sans filtrage",
    "explication": "Le suivi d'état permet d'autoriser les paquets de retour cohérents."
  },
  {
    "id": 300,
    "question": "`Mini-TP WAN et sécurité réseau\n\nSituation :\nUne attaque surcharge un serveur avec de nombreuses connexions.\n\nQuelle solution d'infrastructure est la plus pertinente ?\n\nCas WAN : 35\n\nRéférence exercice : TCPIP-INFRA-300`",
    "reponse_v": "Mettre en place protections DDoS, rate limiting et capacité adaptée",
    "reponse_f1": "Désactiver les journaux",
    "reponse_f2": "Augmenter uniquement le numéro de port",
    "explication": "La mitigation combine filtrage, absorption et limitation."
  }
]
