export const dataQuizzJavaAffichage = [
  {
    id: 0,
    question:
      "Que va afficher ce code ?\n\nint x = 5;\nSystem.out.println(x + 2);",
    reponse_f1: "52",
    reponse_v: "7",
    reponse_f2: "Erreur",
  },
  {
    id: 1,
    question:
      'Que va afficher ce code ?\n\nint x = 5;\nSystem.out.println("x = " + x);',
    reponse_f1: "x = x",
    reponse_v: "x = 5",
    reponse_f2: "5",
  },
  {
    id: 2,
    question:
      "Que va afficher ce code ?\n\nint a = 4;\nint b = 3;\nSystem.out.println(a * b);",
    reponse_f1: "7",
    reponse_v: "12",
    reponse_f2: "43",
  },
  {
    id: 3,
    question:
      "Que va afficher ce code ?\n\nint a = 10;\nint b = 3;\nSystem.out.println(a / b);",
    reponse_f1: "3.33",
    reponse_v: "3",
    reponse_f2: "4",
  },
  {
    id: 4,
    question:
      "Que va afficher ce code ?\n\nint a = 10;\nint b = 3;\nSystem.out.println(a % b);",
    reponse_f1: "3",
    reponse_v: "1",
    reponse_f2: "0",
  },
  {
    id: 5,
    question:
      "Que va afficher ce code ?\n\nint x = 5;\nx++;\nSystem.out.println(x);",
    reponse_f1: "5",
    reponse_v: "6",
    reponse_f2: "Erreur",
  },
  {
    id: 6,
    question:
      "Que va afficher ce code ?\n\nint x = 5;\n++x;\nSystem.out.println(x);",
    reponse_f1: "5",
    reponse_v: "6",
    reponse_f2: "Erreur",
  },
  {
    id: 7,
    question:
      "Que va afficher ce code ?\n\nint x = 5;\nSystem.out.println(x++);",
    reponse_f1: "6",
    reponse_v: "5",
    reponse_f2: "Erreur",
  },
  {
    id: 8,
    question:
      "Que va afficher ce code ?\n\nint x = 5;\nSystem.out.println(++x);",
    reponse_f1: "5",
    reponse_v: "6",
    reponse_f2: "Erreur",
  },
  {
    id: 9,
    question:
      'Que va afficher ce code ?\n\nint x = 10;\nif (x > 5) {\n System.out.println("OK");\n} else {\n System.out.println("NON");\n}',
    reponse_f1: "NON",
    reponse_v: "OK",
    reponse_f2: "Erreur",
  },
  {
    id: 10,
    question:
      'Que va afficher ce code ?\n\nint x = 3;\nif (x >= 5) {\n System.out.println("A");\n} else {\n System.out.println("B");\n}',
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "Erreur",
  },
  {
    id: 11,
    question:
      'Que va afficher ce code ?\n\nint x = 4;\nif (x == 4) {\n System.out.println("Oui");\n}',
    reponse_f1: "Non",
    reponse_v: "Oui",
    reponse_f2: "Erreur",
  },
  {
    id: 12,
    question:
      'Que va afficher ce code ?\n\nint x = 4;\nif (x != 4) {\n System.out.println("A");\n} else {\n System.out.println("B");\n}',
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "Erreur",
  },
  {
    id: 13,
    question:
      'Que va afficher ce code ?\n\nboolean test = true;\nif (test) {\n System.out.println("Vrai");\n}',
    reponse_f1: "Faux",
    reponse_v: "Vrai",
    reponse_f2: "Erreur",
  },
  {
    id: 14,
    question:
      'Que va afficher ce code ?\n\nboolean test = false;\nif (!test) {\n System.out.println("OK");\n}',
    reponse_f1: "Rien",
    reponse_v: "OK",
    reponse_f2: "Erreur",
  },
  {
    id: 15,
    question:
      "Que va afficher ce code ?\n\nfor (int i = 0; i < 3; i++) {\n System.out.println(i);\n}",
    reponse_f1: "1 2 3",
    reponse_v: "0 1 2",
    reponse_f2: "0 1 2 3",
  },
  {
    id: 16,
    question:
      "Combien de fois la boucle s'exécute-t-elle ?\n\nfor (int i = 1; i <= 5; i++) {\n System.out.println(i);\n}",
    reponse_f1: "4 fois",
    reponse_v: "5 fois",
    reponse_f2: "6 fois",
  },
  {
    id: 17,
    question:
      "Que va afficher ce code ?\n\nfor (int i = 0; i < 5; i += 2) {\n System.out.println(i);\n}",
    reponse_f1: "0 1 2 3 4",
    reponse_v: "0 2 4",
    reponse_f2: "2 4",
  },
  {
    id: 18,
    question:
      "Que va afficher ce code ?\n\nint i = 0;\nwhile (i < 3) {\n System.out.println(i);\n i++;\n}",
    reponse_f1: "1 2 3",
    reponse_v: "0 1 2",
    reponse_f2: "Boucle infinie",
  },
  {
    id: 19,
    question:
      "Que va afficher ce code ?\n\nint i = 5;\nwhile (i < 3) {\n System.out.println(i);\n}",
    reponse_f1: "5",
    reponse_v: "Rien",
    reponse_f2: "Boucle infinie",
  },
  {
    id: 20,
    question:
      "Que va afficher ce code ?\n\nint i = 5;\ndo {\n System.out.println(i);\n} while (i < 3);",
    reponse_f1: "Rien",
    reponse_v: "5",
    reponse_f2: "Boucle infinie",
  },
  {
    id: 21,
    question:
      "Que va afficher ce code ?\n\nint somme = 0;\nfor (int i = 1; i <= 3; i++) {\n somme += i;\n}\nSystem.out.println(somme);",
    reponse_f1: "3",
    reponse_v: "6",
    reponse_f2: "7",
  },
  {
    id: 22,
    question:
      "Que va afficher ce code ?\n\nint x = 2;\nx = x * 3;\nSystem.out.println(x);",
    reponse_f1: "5",
    reponse_v: "6",
    reponse_f2: "23",
  },
  {
    id: 23,
    question:
      'Que va afficher ce code ?\n\nString a = "Java";\nString b = "Script";\nSystem.out.println(a + b);',
    reponse_f1: "Java Script",
    reponse_v: "JavaScript",
    reponse_f2: "Erreur",
  },
  {
    id: 24,
    question: 'Que va afficher ce code ?\n\nSystem.out.println("Java" + 8);',
    reponse_f1: "Erreur",
    reponse_v: "Java8",
    reponse_f2: "Java + 8",
  },
  {
    id: 25,
    question:
      'Que va afficher ce code ?\n\nSystem.out.println(5 + 3 + "Java");',
    reponse_f1: "53Java",
    reponse_v: "8Java",
    reponse_f2: "Java8",
  },
  {
    id: 26,
    question:
      'Que va afficher ce code ?\n\nSystem.out.println("Java" + 5 + 3);',
    reponse_f1: "Java8",
    reponse_v: "Java53",
    reponse_f2: "8Java",
  },
  {
    id: 27,
    question:
      'Que va afficher ce code ?\n\nString mot = "Bonjour";\nSystem.out.println(mot.length());',
    reponse_f1: "6",
    reponse_v: "7",
    reponse_f2: "8",
  },
  {
    id: 28,
    question:
      'Que va afficher ce code ?\n\nString mot = "Java";\nSystem.out.println(mot.charAt(0));',
    reponse_f1: "a",
    reponse_v: "J",
    reponse_f2: "Erreur",
  },
  {
    id: 29,
    question:
      'Que va afficher ce code ?\n\nString mot = "Java";\nSystem.out.println(mot.charAt(4));',
    reponse_f1: "a",
    reponse_v: "Erreur",
    reponse_f2: "v",
  },
  {
    id: 30,
    question:
      'Que va afficher ce code ?\n\nString mot = "Java";\nSystem.out.println(mot.substring(1, 3));',
    reponse_f1: "Jav",
    reponse_v: "av",
    reponse_f2: "ava",
  },
  {
    id: 31,
    question:
      'Que va afficher ce code ?\n\nString mot = "Bonjour";\nSystem.out.println(mot.toUpperCase());',
    reponse_f1: "bonjour",
    reponse_v: "BONJOUR",
    reponse_f2: "Bonjour",
  },
  {
    id: 32,
    question:
      'Que va afficher ce code ?\n\nString mot = "JAVA";\nSystem.out.println(mot.toLowerCase());',
    reponse_f1: "JAVA",
    reponse_v: "java",
    reponse_f2: "Java",
  },
  {
    id: 33,
    question:
      'Que va afficher ce code ?\n\nString mot = " test ";\nSystem.out.println(mot.trim());',
    reponse_f1: " test",
    reponse_v: "test",
    reponse_f2: "test ",
  },
  {
    id: 34,
    question:
      'Que va afficher ce code ?\n\nString mot = "Java";\nSystem.out.println(mot.equals("Java"));',
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
  {
    id: 35,
    question:
      'Que va afficher ce code ?\n\nString mot = "Java";\nSystem.out.println(mot.equals("java"));',
    reponse_f1: "true",
    reponse_v: "false",
    reponse_f2: "Erreur",
  },
  {
    id: 36,
    question:
      'Que va afficher ce code ?\n\nString mot = "Java";\nSystem.out.println(mot.equalsIgnoreCase("java"));',
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
  {
    id: 37,
    question:
      "Que va afficher ce code ?\n\nint[] nombres = {2, 4, 6};\nSystem.out.println(nombres[0]);",
    reponse_f1: "4",
    reponse_v: "2",
    reponse_f2: "6",
  },
  {
    id: 38,
    question:
      "Que va afficher ce code ?\n\nint[] nombres = {2, 4, 6};\nSystem.out.println(nombres[2]);",
    reponse_f1: "4",
    reponse_v: "6",
    reponse_f2: "Erreur",
  },
  {
    id: 39,
    question:
      "Que va afficher ce code ?\n\nint[] nombres = {2, 4, 6};\nSystem.out.println(nombres.length);",
    reponse_f1: "2",
    reponse_v: "3",
    reponse_f2: "6",
  },
  {
    id: 40,
    question:
      "Que va afficher ce code ?\n\nint[] nombres = {2, 4, 6};\nSystem.out.println(nombres[3]);",
    reponse_f1: "6",
    reponse_v: "Erreur",
    reponse_f2: "0",
  },
  {
    id: 41,
    question:
      "Que va afficher ce code ?\n\nint[] tab = new int[3];\nSystem.out.println(tab[0]);",
    reponse_f1: "null",
    reponse_v: "0",
    reponse_f2: "Erreur",
  },
  {
    id: 42,
    question:
      "Que va afficher ce code ?\n\nString[] noms = new String[2];\nSystem.out.println(noms[0]);",
    reponse_f1: "0",
    reponse_v: "null",
    reponse_f2: "Erreur",
  },
  {
    id: 43,
    question:
      "Que va afficher ce code ?\n\nint[] tab = {1, 2, 3};\nfor (int n : tab) {\n System.out.println(n);\n}",
    reponse_f1: "0 1 2",
    reponse_v: "1 2 3",
    reponse_f2: "Erreur",
  },
  {
    id: 44,
    question:
      "Que va afficher ce code ?\n\nint[] tab = {1, 2, 3};\nint somme = 0;\nfor (int n : tab) {\n somme += n;\n}\nSystem.out.println(somme);",
    reponse_f1: "3",
    reponse_v: "6",
    reponse_f2: "123",
  },
  {
    id: 45,
    question:
      "Que va afficher ce code ?\n\npublic static int doubleValeur(int x) {\n return x * 2;\n}\n\nSystem.out.println(doubleValeur(4));",
    reponse_f1: "4",
    reponse_v: "8",
    reponse_f2: "Erreur",
  },
  {
    id: 46,
    question:
      'Que va afficher ce code ?\n\npublic static void afficher() {\n System.out.println("OK");\n}\n\nafficher();',
    reponse_f1: "Rien",
    reponse_v: "OK",
    reponse_f2: "Erreur",
  },
  {
    id: 47,
    question:
      "Que va afficher ce code ?\n\npublic static int addition(int a, int b) {\n return a + b;\n}\n\nSystem.out.println(addition(2, 5));",
    reponse_f1: "25",
    reponse_v: "7",
    reponse_f2: "Erreur",
  },
  {
    id: 48,
    question:
      "Que va afficher ce code ?\n\npublic static int test() {\n return 10;\n}\n\nSystem.out.println(test());",
    reponse_f1: "test",
    reponse_v: "10",
    reponse_f2: "Erreur",
  },
  {
    id: 49,
    question:
      'Que va afficher ce code ?\n\npublic static void test() {\n return;\n}\n\nSystem.out.println("Fin");',
    reponse_f1: "Rien",
    reponse_v: "Fin",
    reponse_f2: "Erreur",
  },
  {
    id: 50,
    question:
      'Que va afficher ce code ?\n\nclass Personne {\n String nom = "Paul";\n}\n\nPersonne p = new Personne();\nSystem.out.println(p.nom);',
    reponse_f1: "null",
    reponse_v: "Paul",
    reponse_f2: "Erreur",
  },
  {
    id: 51,
    question:
      "Que va afficher ce code ?\n\nclass Test {\n int x = 5;\n}\n\nTest t = new Test();\nSystem.out.println(t.x);",
    reponse_f1: "0",
    reponse_v: "5",
    reponse_f2: "Erreur",
  },
  {
    id: 52,
    question:
      'Que va afficher ce code ?\n\nclass Chat {\n void miauler() {\n System.out.println("Miaou");\n }\n}\n\nnew Chat().miauler();',
    reponse_f1: "Chat",
    reponse_v: "Miaou",
    reponse_f2: "Erreur",
  },
  {
    id: 53,
    question:
      "Que va afficher ce code ?\n\nclass Test {\n int valeur;\n}\n\nTest t = new Test();\nSystem.out.println(t.valeur);",
    reponse_f1: "null",
    reponse_v: "0",
    reponse_f2: "Erreur",
  },
  {
    id: 54,
    question:
      "Que va afficher ce code ?\n\nclass Test {\n boolean actif;\n}\n\nSystem.out.println(new Test().actif);",
    reponse_f1: "true",
    reponse_v: "false",
    reponse_f2: "Erreur",
  },
  {
    id: 55,
    question:
      "Que va afficher ce code ?\n\nclass Test {\n String nom;\n}\n\nSystem.out.println(new Test().nom);",
    reponse_f1: '""',
    reponse_v: "null",
    reponse_f2: "Erreur",
  },
  {
    id: 56,
    question:
      "Que va afficher ce code ?\n\nclass Compteur {\n int valeur = 2;\n\n void incrementer() {\n valeur++;\n }\n}\n\nCompteur c = new Compteur();\nc.incrementer();\nSystem.out.println(c.valeur);",
    reponse_f1: "2",
    reponse_v: "3",
    reponse_f2: "4",
  },
  {
    id: 57,
    question:
      "Que va afficher ce code ?\n\nclass Calcul {\n int carre(int x) {\n return x * x;\n }\n}\n\nSystem.out.println(new Calcul().carre(4));",
    reponse_f1: "8",
    reponse_v: "16",
    reponse_f2: "20",
  },
  {
    id: 58,
    question:
      'Que va afficher ce code ?\n\nclass A {\n void afficher() {\n System.out.println("A");\n }\n}\n\nnew A().afficher();',
    reponse_f1: "a",
    reponse_v: "A",
    reponse_f2: "Erreur",
  },
  {
    id: 59,
    question:
      'Que va afficher ce code ?\n\nclass Personne {\n String nom;\n\n Personne(String n) {\n nom = n;\n }\n}\n\nSystem.out.println(new Personne("Luc").nom);',
    reponse_f1: "Personne",
    reponse_v: "Luc",
    reponse_f2: "null",
  },
  {
    id: 60,
    question:
      'Que va afficher ce code ?\n\nclass Animal {\n void parler() {\n System.out.println("Animal");\n }\n}\n\nclass Chien extends Animal {}\n\nnew Chien().parler();',
    reponse_f1: "Chien",
    reponse_v: "Animal",
    reponse_f2: "Erreur",
  },
  {
    id: 61,
    question:
      'Que va afficher ce code ?\n\nclass Animal {\n void parler() {\n System.out.println("Animal");\n }\n}\n\nclass Chat extends Animal {\n void parler() {\n System.out.println("Chat");\n }\n}\n\nnew Chat().parler();',
    reponse_f1: "Animal",
    reponse_v: "Chat",
    reponse_f2: "Erreur",
  },
  {
    id: 62,
    question:
      'Que va afficher ce code ?\n\nString s = "Bonjour";\nSystem.out.println(s.contains("jour"));',
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
  {
    id: 63,
    question:
      'Que va afficher ce code ?\n\nString s = "Java";\nSystem.out.println(s.startsWith("Ja"));',
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
  {
    id: 64,
    question:
      'Que va afficher ce code ?\n\nString s = "Java";\nSystem.out.println(s.endsWith("va"));',
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
  {
    id: 65,
    question:
      'Que va afficher ce code ?\n\nString s = "Java";\nSystem.out.println(s.indexOf("v"));',
    reponse_f1: "1",
    reponse_v: "2",
    reponse_f2: "3",
  },
  {
    id: 66,
    question:
      'Que va afficher ce code ?\n\nString s = "Java";\nSystem.out.println(s.replace("a", "o"));',
    reponse_f1: "Jova",
    reponse_v: "Jovo",
    reponse_f2: "Java",
  },
  {
    id: 67,
    question:
      "Que va afficher ce code ?\n\nint[] t = {1,2,3,4};\nSystem.out.println(t.length);",
    reponse_f1: "3",
    reponse_v: "4",
    reponse_f2: "5",
  },
  {
    id: 68,
    question:
      "Que va afficher ce code ?\n\nint[][] tab = {{1,2},{3,4}};\nSystem.out.println(tab[1][0]);",
    reponse_f1: "2",
    reponse_v: "3",
    reponse_f2: "4",
  },
  {
    id: 69,
    question:
      'Que va afficher ce code ?\n\nString[] t = {"A", "B", "C"};\nSystem.out.println(t[2]);',
    reponse_f1: "B",
    reponse_v: "C",
    reponse_f2: "Erreur",
  },
  {
    id: 70,
    question:
      "Que va afficher ce code ?\n\nint somme = 0;\nfor(int i=1;i<=5;i++) somme += i;\nSystem.out.println(somme);",
    reponse_f1: "10",
    reponse_v: "15",
    reponse_f2: "20",
  },
  {
    id: 71,
    question:
      "Que va afficher ce code ?\n\nint i = 0;\nwhile(i<2){\n System.out.print(i);\n i++;\n}",
    reponse_f1: "0 1",
    reponse_v: "01",
    reponse_f2: "12",
  },
  {
    id: 72,
    question: "Que va afficher ce code ?\n\nSystem.out.println(Math.max(8,5));",
    reponse_f1: "5",
    reponse_v: "8",
    reponse_f2: "13",
  },
  {
    id: 73,
    question: "Que va afficher ce code ?\n\nSystem.out.println(Math.min(8,5));",
    reponse_f1: "8",
    reponse_v: "5",
    reponse_f2: "13",
  },
  {
    id: 74,
    question: "Que va afficher ce code ?\n\nSystem.out.println(Math.abs(-12));",
    reponse_f1: "-12",
    reponse_v: "12",
    reponse_f2: "0",
  },
  {
    id: 75,
    question:
      'Que va afficher ce code ?\n\nString a = new String("Java");\nString b = new String("Java");\nSystem.out.println(a == b);',
    reponse_f1: "true",
    reponse_v: "false",
    reponse_f2: "Erreur",
  },
  {
    id: 76,
    question:
      'Que va afficher ce code ?\n\nString a = new String("Java");\nString b = new String("Java");\nSystem.out.println(a.equals(b));',
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
  {
    id: 77,
    question:
      'Que va afficher ce code ?\n\nString a = "Java";\nString b = "Java";\nSystem.out.println(a == b);',
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
  {
    id: 78,
    question:
      "Que va afficher ce code ?\n\nInteger a = 100;\nInteger b = 100;\nSystem.out.println(a == b);",
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
  {
    id: 79,
    question:
      "Que va afficher ce code ?\n\nInteger a = 200;\nInteger b = 200;\nSystem.out.println(a == b);",
    reponse_f1: "true",
    reponse_v: "false",
    reponse_f2: "Erreur",
  },
  {
    id: 80,
    question:
      'Que va afficher ce code ?\n\nArrayList<String> liste = new ArrayList<>();\nliste.add("Java");\nSystem.out.println(liste.size());',
    reponse_f1: "0",
    reponse_v: "1",
    reponse_f2: "Erreur",
  },
  {
    id: 81,
    question:
      "Que va afficher ce code ?\n\nArrayList<Integer> liste = new ArrayList<>();\nliste.add(10);\nliste.add(20);\nSystem.out.println(liste.get(1));",
    reponse_f1: "10",
    reponse_v: "20",
    reponse_f2: "Erreur",
  },
  {
    id: 82,
    question:
      'Que va afficher ce code ?\n\nHashMap<String,Integer> map = new HashMap<>();\nmap.put("A",5);\nSystem.out.println(map.get("A"));',
    reponse_f1: "A",
    reponse_v: "5",
    reponse_f2: "Erreur",
  },
  {
    id: 83,
    question:
      'Que va afficher ce code ?\n\nHashMap<String,Integer> map = new HashMap<>();\nSystem.out.println(map.get("X"));',
    reponse_f1: "0",
    reponse_v: "null",
    reponse_f2: "Erreur",
  },
  {
    id: 84,
    question:
      'Que va afficher ce code ?\n\ntry {\n int x = 5 / 0;\n} catch(Exception e) {\n System.out.println("Erreur");\n}',
    reponse_f1: "5",
    reponse_v: "Erreur",
    reponse_f2: "Rien",
  },
  {
    id: 85,
    question:
      'Que va afficher ce code ?\n\ntry {\n System.out.println("A");\n} finally {\n System.out.println("B");\n}',
    reponse_f1: "A",
    reponse_v: "A puis B",
    reponse_f2: "B",
  },
  {
    id: 86,
    question:
      'Que va afficher ce code ?\n\nclass Animal {\n void parler(){System.out.println("Animal");}\n}\nclass Chien extends Animal {\n void parler(){System.out.println("Chien");}\n}\nAnimal a = new Chien();\na.parler();',
    reponse_f1: "Animal",
    reponse_v: "Chien",
    reponse_f2: "Erreur",
  },
  {
    id: 87,
    question:
      "Que va afficher ce code ?\n\nclass Test {\n static int x = 5;\n}\nSystem.out.println(Test.x);",
    reponse_f1: "0",
    reponse_v: "5",
    reponse_f2: "Erreur",
  },
  {
    id: 88,
    question: "Que signifie le mot-clé final sur une variable ?",
    reponse_f1: "Elle est privée",
    reponse_v: "Elle ne peut plus être modifiée",
    reponse_f2: "Elle devient statique",
  },
  {
    id: 89,
    question:
      'Que va afficher ce code ?\n\nStringBuilder sb = new StringBuilder("Ja");\nsb.append("va");\nSystem.out.println(sb);',
    reponse_f1: "Ja",
    reponse_v: "Java",
    reponse_f2: "Erreur",
  },
  {
    id: 90,
    question:
      'Que va afficher ce code ?\n\nString s = "Java";\ns = s.concat("17");\nSystem.out.println(s);',
    reponse_f1: "Java",
    reponse_v: "Java17",
    reponse_f2: "Erreur",
  },
  {
    id: 91,
    question:
      "Que va afficher ce code ?\n\nint[] t = {1,2,3};\nArrays.sort(t);\nSystem.out.println(t[0]);",
    reponse_f1: "3",
    reponse_v: "1",
    reponse_f2: "Erreur",
  },
  {
    id: 92,
    question:
      'Que va afficher ce code ?\n\nList<String> l = List.of("A","B","C");\nSystem.out.println(l.size());',
    reponse_f1: "2",
    reponse_v: "3",
    reponse_f2: "Erreur",
  },
  {
    id: 93,
    question:
      'Que va afficher ce code ?\n\nOptional<String> o = Optional.of("Java");\nSystem.out.println(o.get());',
    reponse_f1: "Optional",
    reponse_v: "Java",
    reponse_f2: "null",
  },
  {
    id: 94,
    question:
      "Que va afficher ce code ?\n\nOptional<String> o = Optional.empty();\nSystem.out.println(o.isPresent());",
    reponse_f1: "true",
    reponse_v: "false",
    reponse_f2: "Erreur",
  },
  {
    id: 95,
    question: "Que fait l'instruction 'break' dans une boucle ?",
    reponse_f1: "Passe à l'itération suivante",
    reponse_v: "Quitte immédiatement la boucle",
    reponse_f2: "Relance la boucle",
  },
  {
    id: 96,
    question: "Que fait l'instruction 'continue' ?",
    reponse_f1: "Quitte définitivement la boucle",
    reponse_v: "Passe directement à l'itération suivante",
    reponse_f2: "Arrête le programme",
  },
  {
    id: 97,
    question:
      'Que va afficher ce code ?\n\nint x = 5;\nswitch(x){\ncase 5: System.out.println("A"); break;\ndefault: System.out.println("B");\n}',
    reponse_f1: "B",
    reponse_v: "A",
    reponse_f2: "Erreur",
  },
  {
    id: 98,
    question: "Que va afficher ce code ?\n\nSystem.out.println(Math.pow(2,3));",
    reponse_f1: "6",
    reponse_v: "8.0",
    reponse_f2: "8",
  },
  {
    id: 99,
    question:
      "Que va afficher ce code ?\n\nList<Integer> liste = Arrays.asList(1,2,3);\nSystem.out.println(liste.contains(2));",
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
];
