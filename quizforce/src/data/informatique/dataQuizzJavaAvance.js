export const dataQuizzJavaExpert = [
  {
    id: 0,
    question:
      "Que va afficher ce code ?\n\nint x = 5;\nSystem.out.println(x++ + ++x);",
    reponse_f1: "11",
    reponse_v: "12",
    reponse_f2: "13",
  },
  {
    id: 1,
    question:
      "Quelle exception sera levée ?\n\nString s = null;\nSystem.out.println(s.length());",
    reponse_f1: "IllegalArgumentException",
    reponse_v: "NullPointerException",
    reponse_f2: "IndexOutOfBoundsException",
  },
  {
    id: 2,
    question:
      "Quelle ligne provoque une erreur de compilation ?\n\n1. int a = 5;\n2. String s = a;\n3. System.out.println(s);",
    reponse_f1: "Ligne 1",
    reponse_v: "Ligne 2",
    reponse_f2: "Ligne 3",
  },
  {
    id: 3,
    question:
      "Quel sera le contenu final de la liste ?\n\nList<Integer> list = new ArrayList<>();\nlist.add(1);\nlist.add(2);\nlist.remove(0);",
    reponse_f1: "[1]",
    reponse_v: "[2]",
    reponse_f2: "[]",
  },
  {
    id: 4,
    question:
      "Quel principe objet est illustré ?\n\nclass Chien extends Animal {}",
    reponse_f1: "Polymorphisme",
    reponse_v: "Héritage",
    reponse_f2: "Encapsulation",
  },
  {
    id: 5,
    question:
      'Que va afficher ce code ?\n\nSystem.out.println("Java".substring(1));',
    reponse_f1: "Ja",
    reponse_v: "ava",
    reponse_f2: "av",
  },
  {
    id: 6,
    question:
      "Quelle exception sera levée ?\n\nint[] t = {1,2};\nSystem.out.println(t[2]);",
    reponse_f1: "NullPointerException",
    reponse_v: "ArrayIndexOutOfBoundsException",
    reponse_f2: "IllegalStateException",
  },
  {
    id: 7,
    question:
      "Quelle est la valeur finale de x ?\n\nint x = 10;\nx += 5;\nx /= 3;",
    reponse_f1: "4",
    reponse_v: "5",
    reponse_f2: "6",
  },
  {
    id: 8,
    question:
      "Que contient le Set après exécution ?\n\nSet<Integer> set = new HashSet<>();\nset.add(3);\nset.add(3);\nset.add(5);",
    reponse_f1: "[3,3,5]",
    reponse_v: "Deux éléments",
    reponse_f2: "Trois éléments",
  },
  {
    id: 9,
    question: "Quelle méthode compare le contenu de deux String ?",
    reponse_f1: "==",
    reponse_v: "equals()",
    reponse_f2: "compare()",
  },
  {
    id: 10,
    question:
      "Que va afficher ce code ?\n\nInteger a = 127;\nInteger b = 127;\nSystem.out.println(a == b);",
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
  {
    id: 11,
    question:
      "Que va afficher ce code ?\n\nInteger a = 128;\nInteger b = 128;\nSystem.out.println(a.equals(b));",
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
  {
    id: 12,
    question:
      'Quel sera le contenu de la Map ?\n\nMap<String,Integer> map = new HashMap<>();\nmap.put("A",1);\nmap.put("A",2);',
    reponse_f1: "{A=1, A=2}",
    reponse_v: "{A=2}",
    reponse_f2: "{A=1}",
  },
  {
    id: 13,
    question:
      "Quelle est la meilleure correction ?\n\nString s = null;\nSystem.out.println(s.length());",
    reponse_f1: "Mettre s en final",
    reponse_v: "Tester que s != null avant length()",
    reponse_f2: "Utiliser == au lieu de .length()",
  },
  {
    id: 14,
    question: "Quelle exception sera levée ?\n\nint x = 10 / 0;",
    reponse_f1: "NullPointerException",
    reponse_v: "ArithmeticException",
    reponse_f2: "IOException",
  },
  {
    id: 15,
    question:
      'Que va afficher ce code ?\n\nStringBuilder sb = new StringBuilder();\nsb.append("A");\nsb.append("B");\nSystem.out.println(sb);',
    reponse_f1: "A B",
    reponse_v: "AB",
    reponse_f2: "Erreur",
  },
  {
    id: 16,
    question:
      "Quelle est la complexité de la recherche d'un élément dans un tableau non trié ?",
    reponse_f1: "O(log n)",
    reponse_v: "O(n)",
    reponse_f2: "O(1)",
  },
  {
    id: 17,
    question:
      'Que va afficher ce code ?\n\nList<String> l = Arrays.asList("A","B","C");\nSystem.out.println(l.contains("B"));',
    reponse_f1: "Erreur",
    reponse_v: "true",
    reponse_f2: "false",
  },
  {
    id: 18,
    question: "Quel mot-clé interdit la redéfinition d'une méthode ?",
    reponse_f1: "static",
    reponse_v: "final",
    reponse_f2: "private",
  },
  {
    id: 19,
    question: "Quel sera le résultat ?\n\nint x = Math.max(5, Math.min(8,3));",
    reponse_f1: "3",
    reponse_v: "5",
    reponse_f2: "8",
  },
  {
    id: 20,
    question:
      'Que va afficher ce code ?\n\nSystem.out.println("abc".replace("b","x"));',
    reponse_f1: "xbc",
    reponse_v: "axc",
    reponse_f2: "abx",
  },
  {
    id: 21,
    question:
      "Quel est l'état final de i ?\n\nint i = 0;\nfor(; i < 5; i++){}\n",
    reponse_f1: "4",
    reponse_v: "5",
    reponse_f2: "6",
  },
  {
    id: 22,
    question: "Quel type de collection garantit l'absence de doublons ?",
    reponse_f1: "ArrayList",
    reponse_v: "HashSet",
    reponse_f2: "LinkedList",
  },
  {
    id: 23,
    question:
      "Quelle exception sera levée ?\n\nObject o = null;\no.toString();",
    reponse_f1: "IllegalArgumentException",
    reponse_v: "NullPointerException",
    reponse_f2: "ClassCastException",
  },
  {
    id: 24,
    question:
      "Quelle est la meilleure pratique pour comparer deux objets pouvant être null ?",
    reponse_f1: "Utiliser ==",
    reponse_v: "Utiliser Objects.equals(a, b)",
    reponse_f2: "Caster en String puis utiliser ==",
  },
  {
    id: 25,
    question:
      "Que va afficher ce code ?\n\nList<Integer> list = Arrays.asList(1,2,3);\nSystem.out.println(list.stream().map(i -> i * 2).toList());",
    reponse_f1: "[1, 2, 3]",
    reponse_v: "[2, 4, 6]",
    reponse_f2: "[3, 6, 9]",
  },
  {
    id: 26,
    question:
      "Quelle exception sera levée ?\n\nOptional<String> opt = Optional.empty();\nSystem.out.println(opt.get());",
    reponse_f1: "NullPointerException",
    reponse_v: "NoSuchElementException",
    reponse_f2: "IllegalStateException",
  },
  {
    id: 27,
    question:
      "Quelle est la meilleure correction ?\n\nOptional<String> opt = Optional.empty();\nSystem.out.println(opt.get());",
    reponse_f1: "Utiliser Objects.requireNonNull()",
    reponse_v: 'Utiliser opt.orElse("Valeur par défaut")',
    reponse_f2: "Utiliser opt.equals(null)",
  },
  {
    id: 28,
    question:
      'Que va afficher ce code ?\n\nList<String> l = Arrays.asList("C", "A", "B");\nl.sort(String::compareTo);\nSystem.out.println(l);',
    reponse_f1: "[C, A, B]",
    reponse_v: "[A, B, C]",
    reponse_f2: "[C, B, A]",
  },
  {
    id: 29,
    question:
      "Quel est le résultat ?\n\nSet<Integer> set = new LinkedHashSet<>();\nset.add(3);\nset.add(1);\nset.add(2);\nSystem.out.println(set);",
    reponse_f1: "[1, 2, 3]",
    reponse_v: "[3, 1, 2]",
    reponse_f2: "Ordre aléatoire garanti",
  },
  {
    id: 30,
    question: "Quel type de collection trie automatiquement ses éléments ?",
    reponse_f1: "HashSet",
    reponse_v: "TreeSet",
    reponse_f2: "ArrayList",
  },
  {
    id: 31,
    question:
      'Que va afficher ce code ?\n\nvar message = "Java";\nSystem.out.println(message.getClass().getSimpleName());',
    reponse_f1: "var",
    reponse_v: "String",
    reponse_f2: "Object",
  },
  {
    id: 32,
    question:
      "Quelle ligne provoque une erreur de compilation ?\n\n1. var x = 10;\n2. var y;\n3. System.out.println(x);",
    reponse_f1: "Ligne 1",
    reponse_v: "Ligne 2",
    reponse_f2: "Ligne 3",
  },
  {
    id: 33,
    question:
      "Que va afficher ce code ?\n\nSystem.out.println(List.of(1,2,3).contains(2));",
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
  {
    id: 34,
    question:
      "Quelle exception sera levée ?\n\nList<Integer> l = List.of(1,2,3);\nl.add(4);",
    reponse_f1: "NullPointerException",
    reponse_v: "UnsupportedOperationException",
    reponse_f2: "IllegalArgumentException",
  },
  {
    id: 35,
    question:
      "Quel sera le contenu final ?\n\nList<Integer> l = new ArrayList<>(List.of(1,2,3));\nl.remove(Integer.valueOf(2));",
    reponse_f1: "[2, 3]",
    reponse_v: "[1, 3]",
    reponse_f2: "[1, 2]",
  },
  {
    id: 36,
    question:
      "Que va afficher ce code ?\n\nSystem.out.println(Stream.of(1,2,3).count());",
    reponse_f1: "2",
    reponse_v: "3",
    reponse_f2: "6",
  },
  {
    id: 37,
    question:
      "Quelle est la complexité moyenne d'une recherche dans une HashMap ?",
    reponse_f1: "O(n)",
    reponse_v: "O(1)",
    reponse_f2: "O(log n)",
  },
  {
    id: 38,
    question:
      "Quel principe permet de masquer les données internes d'une classe ?",
    reponse_f1: "Héritage",
    reponse_v: "Encapsulation",
    reponse_f2: "Polymorphisme",
  },
  {
    id: 39,
    question:
      "Que va afficher ce code ?\n\nList<Integer> l = Arrays.asList(1,2,3);\nSystem.out.println(l.stream().filter(i -> i % 2 == 1).count());",
    reponse_f1: "1",
    reponse_v: "2",
    reponse_f2: "3",
  },
  {
    id: 40,
    question:
      'Que va afficher ce code ?\n\nSystem.out.println(Stream.of("a","b","c").map(String::toUpperCase).toList());',
    reponse_f1: "[a, b, c]",
    reponse_v: "[A, B, C]",
    reponse_f2: "[ABC]",
  },
  {
    id: 41,
    question:
      "Quelle est la meilleure méthode pour parcourir une collection avec un traitement fonctionnel ?",
    reponse_f1: "while",
    reponse_v: "forEach()",
    reponse_f2: "goto",
  },
  {
    id: 42,
    question:
      'Que va afficher ce code ?\n\nString s = "java";\nSystem.out.println(s.repeat(2));',
    reponse_f1: "java java",
    reponse_v: "javajava",
    reponse_f2: "Erreur",
  },
  {
    id: 43,
    question:
      "Quelle est la valeur finale ?\n\nint x = Stream.of(1,2,3).reduce(0, Integer::sum);\n",
    reponse_f1: "5",
    reponse_v: "6",
    reponse_f2: "7",
  },
  {
    id: 44,
    question: "Quelle interface est utilisée par une expression lambda ?",
    reponse_f1: "Serializable",
    reponse_v: "Interface fonctionnelle",
    reponse_f2: "Cloneable",
  },
  {
    id: 45,
    question:
      "Quelle annotation permet de vérifier qu'une méthode redéfinit bien celle de la classe mère ?",
    reponse_f1: "@Inherited",
    reponse_v: "@Override",
    reponse_f2: "@FunctionalInterface",
  },
  {
    id: 46,
    question:
      "Que va afficher ce code ?\n\nSystem.out.println(Math.clamp(5,0,10));",
    reponse_f1: "5",
    reponse_v: "Erreur de compilation",
    reponse_f2: "0",
  },
  {
    id: 47,
    question: "Quel type est retourné par Stream.toList() ?",
    reponse_f1: "ArrayList modifiable",
    reponse_v: "Liste non modifiable",
    reponse_f2: "LinkedList",
  },
  {
    id: 48,
    question: "Quelle méthode transforme un Stream en une seule valeur ?",
    reponse_f1: "filter()",
    reponse_v: "reduce()",
    reponse_f2: "map()",
  },
  {
    id: 49,
    question:
      'Quel sera le résultat ?\n\nList<String> l = List.of("A","B","C");\nSystem.out.println(l.indexOf("B"));',
    reponse_f1: "2",
    reponse_v: "1",
    reponse_f2: "-1",
  },
  {
    id: 50,
    question:
      'Quel sera le résultat ?\n\nrecord User(String name, int age) {}\nUser u = new User("Ana", 30);\nSystem.out.println(u.name());',
    reponse_f1: "null",
    reponse_v: "Ana",
    reponse_f2: "Erreur de compilation",
  },
  {
    id: 51,
    question: "Quel avantage principal apporte un record Java ?",
    reponse_f1: "Créer des threads automatiquement",
    reponse_v: "Réduire le code des classes immuables de données",
    reponse_f2: "Remplacer les interfaces",
  },
  {
    id: 52,
    question:
      'Que va afficher ce code ?\n\nString jour = "LUNDI";\nString type = switch (jour) {\n    case "SAMEDI", "DIMANCHE" -> "week-end";\n    default -> "semaine";\n};\nSystem.out.println(type);',
    reponse_f1: "week-end",
    reponse_v: "semaine",
    reponse_f2: "Erreur de compilation",
  },
  {
    id: 53,
    question:
      "Quelle interface représente une condition retournant true ou false ?",
    reponse_f1: "Consumer<T>",
    reponse_v: "Predicate<T>",
    reponse_f2: "Supplier<T>",
  },
  {
    id: 54,
    question:
      "Quelle interface représente une transformation d'un type vers un autre ?",
    reponse_f1: "Predicate<T>",
    reponse_v: "Function<T,R>",
    reponse_f2: "Consumer<T>",
  },
  {
    id: 55,
    question:
      "Que va afficher ce code ?\n\nPredicate<Integer> p = n -> n > 10;\nSystem.out.println(p.test(12));",
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "12",
  },
  {
    id: 56,
    question:
      'Que va afficher ce code ?\n\nFunction<String, Integer> f = s -> s.length();\nSystem.out.println(f.apply("Java"));',
    reponse_f1: "3",
    reponse_v: "4",
    reponse_f2: "Java",
  },
  {
    id: 57,
    question:
      "Quelle interface consomme une valeur sans retourner de résultat ?",
    reponse_f1: "Supplier<T>",
    reponse_v: "Consumer<T>",
    reponse_f2: "Predicate<T>",
  },
  {
    id: 58,
    question:
      'Quel sera le contenu de la Map ?\n\nMap<String, Integer> map = new HashMap<>();\nmap.computeIfAbsent("A", k -> 10);\nmap.computeIfAbsent("A", k -> 20);',
    reponse_f1: "{A=20}",
    reponse_v: "{A=10}",
    reponse_f2: "{}",
  },
  {
    id: 59,
    question:
      'Que va afficher ce code ?\n\nList<String> noms = List.of("Bob", "Alice", "Tom");\nnoms.stream()\n    .sorted(Comparator.comparingInt(String::length))\n    .forEach(System.out::print);',
    reponse_f1: "AliceBobTom",
    reponse_v: "BobTomAlice",
    reponse_f2: "TomBobAlice",
  },
  {
    id: 60,
    question: "Quelle interface permet de définir l'ordre naturel d'un objet ?",
    reponse_f1: "Comparator",
    reponse_v: "Comparable",
    reponse_f2: "Iterable",
  },
  {
    id: 61,
    question:
      "Quelle interface permet de définir un ordre externe à la classe comparée ?",
    reponse_f1: "Comparable",
    reponse_v: "Comparator",
    reponse_f2: "Cloneable",
  },
  {
    id: 62,
    question:
      "Quelle exception est généralement évitée par try-with-resources ?",
    reponse_f1: "ArithmeticException",
    reponse_v: "Fuite de ressource non fermée",
    reponse_f2: "ClassCastException",
  },
  {
    id: 63,
    question:
      'Que fait try-with-resources ?\n\ntry (BufferedReader br = new BufferedReader(new FileReader("a.txt"))) {\n    br.readLine();\n}',
    reponse_f1: "Il ignore les exceptions",
    reponse_v: "Il ferme automatiquement br à la fin du bloc",
    reponse_f2: "Il transforme br en variable globale",
  },
  {
    id: 64,
    question:
      "Quelle condition est nécessaire pour utiliser un objet dans try-with-resources ?",
    reponse_f1: "Il doit être static",
    reponse_v: "Il doit implémenter AutoCloseable",
    reponse_f2: "Il doit être final",
  },
  {
    id: 65,
    question:
      'Que va afficher ce code ?\n\nObject o = "Java";\nif (o instanceof String s) {\n    System.out.println(s.toUpperCase());\n}',
    reponse_f1: "Java",
    reponse_v: "JAVA",
    reponse_f2: "Erreur de compilation",
  },
  {
    id: 66,
    question:
      "Quel concept est utilisé ici ?\n\nif (obj instanceof String s) {\n    System.out.println(s.length());\n}",
    reponse_f1: "Héritage multiple",
    reponse_v: "Pattern matching avec instanceof",
    reponse_f2: "Surcharge de constructeur",
  },
  {
    id: 67,
    question:
      "Quel mot-clé permet de limiter les classes pouvant hériter d'une classe ?",
    reponse_f1: "final",
    reponse_v: "sealed",
    reponse_f2: "static",
  },
  {
    id: 68,
    question:
      "Dans une classe sealed, quel mot-clé liste les sous-classes autorisées ?",
    reponse_f1: "extends",
    reponse_v: "permits",
    reponse_f2: "allows",
  },
  {
    id: 69,
    question:
      'Quel sera le résultat ?\n\nList<String> list = List.of("aa", "b", "ccc");\nMap<Integer, List<String>> map = list.stream()\n    .collect(Collectors.groupingBy(String::length));\nSystem.out.println(map.get(2));',
    reponse_f1: "[b]",
    reponse_v: "[aa]",
    reponse_f2: "[ccc]",
  },
  {
    id: 70,
    question: "Quelle opération Stream est intermédiaire ?",
    reponse_f1: "count()",
    reponse_v: "filter()",
    reponse_f2: "collect()",
  },
  {
    id: 71,
    question: "Quelle opération Stream est terminale ?",
    reponse_f1: "map()",
    reponse_v: "collect()",
    reponse_f2: "filter()",
  },
  {
    id: 72,
    question:
      "Que va afficher ce code ?\n\nList<Integer> nums = List.of(1, 2, 3, 4);\nSystem.out.println(nums.stream().filter(n -> n % 2 == 0).toList());",
    reponse_f1: "[1, 3]",
    reponse_v: "[2, 4]",
    reponse_f2: "[1, 2, 3, 4]",
  },
  {
    id: 73,
    question:
      "Quelle déclaration générique accepte une liste de Number ou de ses sous-classes en lecture ?",
    reponse_f1: "List<? super Number>",
    reponse_v: "List<? extends Number>",
    reponse_f2: "List<Number only>",
  },
  {
    id: 74,
    question:
      "Quelle déclaration générique accepte une liste de Number ou de ses super-classes pour y ajouter des Number ?",
    reponse_f1: "List<? extends Number>",
    reponse_v: "List<? super Number>",
    reponse_f2: "List<? final Number>",
  },
  {
    id: 75,
    question:
      'Quelle exception sera levée ?\n\nObject o = "Java";\nInteger i = (Integer) o;',
    reponse_f1: "NullPointerException",
    reponse_v: "ClassCastException",
    reponse_f2: "NumberFormatException",
  },
  {
    id: 76,
    question:
      'Que va afficher ce code ?\n\nString s = "42";\nint n = Integer.parseInt(s);\nSystem.out.println(n + 8);',
    reponse_f1: "428",
    reponse_v: "50",
    reponse_f2: "Erreur",
  },
  {
    id: 77,
    question:
      'Quelle exception sera levée ?\n\nString s = "abc";\nint n = Integer.parseInt(s);',
    reponse_f1: "ClassCastException",
    reponse_v: "NumberFormatException",
    reponse_f2: "ArithmeticException",
  },
  {
    id: 78,
    question:
      'Quel sera le contenu final ?\n\nList<String> list = new ArrayList<>();\nlist.add("A");\nlist.add("B");\nlist.add(1, "C");',
    reponse_f1: "[A, B, C]",
    reponse_v: "[A, C, B]",
    reponse_f2: "[C, A, B]",
  },
  {
    id: 79,
    question:
      'Quelle exception sera levée ?\n\nList<String> list = new ArrayList<>();\nlist.add("A");\nSystem.out.println(list.get(1));',
    reponse_f1: "NullPointerException",
    reponse_v: "IndexOutOfBoundsException",
    reponse_f2: "NoSuchElementException",
  },
  {
    id: 80,
    question:
      "Que va afficher ce code ?\n\nList<Integer> list = new ArrayList<>(List.of(1, 2, 3));\nlist.remove(1);\nSystem.out.println(list);",
    reponse_f1: "[1, 3]",
    reponse_v: "[1, 3]",
    reponse_f2: "[2, 3]",
  },
  {
    id: 81,
    question:
      "Que va afficher ce code ?\n\nList<Integer> list = new ArrayList<>(List.of(1, 2, 3));\nlist.remove(Integer.valueOf(1));\nSystem.out.println(list);",
    reponse_f1: "[1, 3]",
    reponse_v: "[2, 3]",
    reponse_f2: "[1, 2, 3]",
  },
  {
    id: 82,
    question:
      "Quelle est la meilleure correction pour supprimer la valeur 2 d'une List<Integer> ?\n\nlist.remove(2);",
    reponse_f1: "list.delete(2);",
    reponse_v: "list.remove(Integer.valueOf(2));",
    reponse_f2: "list.removeValueAt(2);",
  },
  {
    id: 83,
    question:
      'Quel sera le résultat ?\n\nMap<String, Integer> map = new HashMap<>();\nmap.put("A", 1);\nmap.put("B", 2);\nSystem.out.println(map.containsKey("A"));',
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "1",
  },
  {
    id: 84,
    question:
      'Que va afficher ce code ?\n\nMap<String, Integer> map = new HashMap<>();\nmap.put("A", 1);\nSystem.out.println(map.getOrDefault("B", 0));',
    reponse_f1: "null",
    reponse_v: "0",
    reponse_f2: "Erreur",
  },
  {
    id: 85,
    question:
      'Quel sera le contenu final ?\n\nMap<String, Integer> map = new HashMap<>();\nmap.put("A", 1);\nmap.merge("A", 5, Integer::sum);',
    reponse_f1: "{A=5}",
    reponse_v: "{A=6}",
    reponse_f2: "{A=1}",
  },
  {
    id: 86,
    question:
      'Quel sera le résultat ?\n\nSet<String> set = new TreeSet<>();\nset.add("B");\nset.add("A");\nset.add("C");\nSystem.out.println(set);',
    reponse_f1: "[B, A, C]",
    reponse_v: "[A, B, C]",
    reponse_f2: "Ordre imprévisible",
  },
  {
    id: 87,
    question:
      "Quelle collection conserve l'ordre d'insertion tout en refusant les doublons ?",
    reponse_f1: "HashSet",
    reponse_v: "LinkedHashSet",
    reponse_f2: "TreeSet",
  },
  {
    id: 88,
    question:
      'Que va afficher ce code ?\n\nQueue<String> q = new LinkedList<>();\nq.add("A");\nq.add("B");\nSystem.out.println(q.poll());',
    reponse_f1: "B",
    reponse_v: "A",
    reponse_f2: "null",
  },
  {
    id: 89,
    question:
      'Quel sera l\'état final de la file ?\n\nQueue<String> q = new LinkedList<>();\nq.add("A");\nq.add("B");\nq.poll();',
    reponse_f1: "[A]",
    reponse_v: "[B]",
    reponse_f2: "[]",
  },
  {
    id: 90,
    question:
      "Que va afficher ce code ?\n\nDeque<Integer> d = new ArrayDeque<>();\nd.push(1);\nd.push(2);\nSystem.out.println(d.pop());",
    reponse_f1: "1",
    reponse_v: "2",
    reponse_f2: "null",
  },
  {
    id: 91,
    question:
      "Quelle est la complexité moyenne de add() sur une ArrayList en fin de liste ?",
    reponse_f1: "O(n)",
    reponse_v: "O(1) amorti",
    reponse_f2: "O(log n)",
  },
  {
    id: 92,
    question: "Quelle est la complexité de get(index) sur une LinkedList ?",
    reponse_f1: "O(1)",
    reponse_v: "O(n)",
    reponse_f2: "O(log n)",
  },
  {
    id: 93,
    question:
      "Quelle est la complexité de contains() sur une HashSet en moyenne ?",
    reponse_f1: "O(n)",
    reponse_v: "O(1)",
    reponse_f2: "O(log n)",
  },
  {
    id: 94,
    question:
      'Que va afficher ce code ?\n\nList<String> list = new ArrayList<>(List.of("A", "B"));\nlist.clear();\nSystem.out.println(list.size());',
    reponse_f1: "2",
    reponse_v: "0",
    reponse_f2: "null",
  },
  {
    id: 95,
    question:
      'Quelle exception sera levée ?\n\nList<String> list = null;\nlist.add("A");',
    reponse_f1: "IndexOutOfBoundsException",
    reponse_v: "NullPointerException",
    reponse_f2: "UnsupportedOperationException",
  },
  {
    id: 96,
    question:
      "Que va afficher ce code ?\n\nList<String> list = new ArrayList<>();\nSystem.out.println(list.isEmpty());",
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "null",
  },
  {
    id: 97,
    question: "Quelle méthode permet de trier une liste modifiable ?",
    reponse_f1: "list.order()",
    reponse_v: "list.sort(comparator)",
    reponse_f2: "list.sorted()",
  },
  {
    id: 98,
    question:
      'Quel sera le résultat ?\n\nList<String> list = new ArrayList<>(List.of("C", "A", "B"));\nCollections.sort(list);\nSystem.out.println(list);',
    reponse_f1: "[C, B, A]",
    reponse_v: "[A, B, C]",
    reponse_f2: "[C, A, B]",
  },
  {
    id: 99,
    question:
      'Quelle exception sera levée ?\n\nList<String> list = List.of("A", "B");\nlist.set(0, "C");',
    reponse_f1: "IndexOutOfBoundsException",
    reponse_v: "UnsupportedOperationException",
    reponse_f2: "NullPointerException",
  },
  {
    id: 100,
    question:
      "Quelle exception sera levée ?\n\nString s = null;\nSystem.out.println(s.toUpperCase());",
    reponse_f1: "IllegalStateException",
    reponse_v: "NullPointerException",
    reponse_f2: "ClassCastException",
  },
  {
    id: 101,
    question:
      "Quelle est la meilleure correction ?\n\nString s = null;\nSystem.out.println(s.toUpperCase());",
    reponse_f1: "Utiliser s.equals(null)",
    reponse_v: "Tester s != null avant d'appeler toUpperCase()",
    reponse_f2: "Caster s en Object",
  },
  {
    id: 102,
    question:
      'Que va afficher ce code ?\n\ntry {\n    System.out.println("A");\n} catch (Exception e) {\n    System.out.println("B");\n} finally {\n    System.out.println("C");\n}',
    reponse_f1: "A",
    reponse_v: "A puis C",
    reponse_f2: "B puis C",
  },
  {
    id: 103,
    question:
      'Que va afficher ce code ?\n\ntry {\n    int x = 10 / 0;\n    System.out.println("A");\n} catch (ArithmeticException e) {\n    System.out.println("B");\n} finally {\n    System.out.println("C");\n}',
    reponse_f1: "A puis C",
    reponse_v: "B puis C",
    reponse_f2: "C uniquement",
  },
  {
    id: 104,
    question:
      'Quelle exception sera levée ?\n\nString[] tab = {"A", "B"};\nSystem.out.println(tab[-1]);',
    reponse_f1: "NullPointerException",
    reponse_v: "ArrayIndexOutOfBoundsException",
    reponse_f2: "IllegalArgumentException",
  },
  {
    id: 105,
    question:
      'Quelle ligne provoque une erreur de compilation ?\n\n1. try {\n2.     System.out.println("A");\n3. } catch (IOException e) {\n4.     System.out.println("Erreur");\n5. }',
    reponse_f1: "Ligne 2",
    reponse_v: "Ligne 3",
    reponse_f2: "Aucune ligne",
  },
  {
    id: 106,
    question:
      'Que va afficher ce code ?\n\ntry {\n    throw new RuntimeException();\n} catch (Exception e) {\n    System.out.println("Exception");\n}',
    reponse_f1: "RuntimeException",
    reponse_v: "Exception",
    reponse_f2: "Erreur de compilation",
  },
  {
    id: 107,
    question:
      "Quel type d'exception n'oblige pas à utiliser try/catch ou throws ?",
    reponse_f1: "IOException",
    reponse_v: "RuntimeException",
    reponse_f2: "SQLException",
  },
  {
    id: 108,
    question:
      "Quel mot-clé permet de déclarer qu'une méthode peut lever une exception ?",
    reponse_f1: "throw",
    reponse_v: "throws",
    reponse_f2: "catch",
  },
  {
    id: 109,
    question: "Quel mot-clé permet de lancer explicitement une exception ?",
    reponse_f1: "throws",
    reponse_v: "throw",
    reponse_f2: "try",
  },
  {
    id: 110,
    question:
      'Que va afficher ce code ?\n\ntry {\n    System.out.println("A");\n    return;\n} finally {\n    System.out.println("B");\n}',
    reponse_f1: "A uniquement",
    reponse_v: "A puis B",
    reponse_f2: "B uniquement",
  },
  {
    id: 111,
    question:
      'Quelle exception sera levée ?\n\nObject o = "123";\nInteger n = (Integer) o;',
    reponse_f1: "NumberFormatException",
    reponse_v: "ClassCastException",
    reponse_f2: "ArithmeticException",
  },
  {
    id: 112,
    question:
      'Quelle est la meilleure correction ?\n\nObject o = "123";\nInteger n = (Integer) o;',
    reponse_f1: "Integer n = (int) o;",
    reponse_v: "Integer n = Integer.parseInt((String) o);",
    reponse_f2: "Integer n = o.toInteger();",
  },
  {
    id: 113,
    question:
      "Quelle exception sera levée ?\n\nOptional<String> opt = Optional.of(null);",
    reponse_f1: "NoSuchElementException",
    reponse_v: "NullPointerException",
    reponse_f2: "IllegalAccessException",
  },
  {
    id: 114,
    question:
      "Quelle est la meilleure correction ?\n\nOptional<String> opt = Optional.of(possiblyNull);",
    reponse_f1: "Optional.empty(possiblyNull)",
    reponse_v: "Optional.ofNullable(possiblyNull)",
    reponse_f2: "Optional.nullable(possiblyNull)",
  },
  {
    id: 115,
    question:
      'Que va afficher ce code ?\n\nOptional<String> opt = Optional.ofNullable(null);\nSystem.out.println(opt.orElse("default"));',
    reponse_f1: "null",
    reponse_v: "default",
    reponse_f2: "Optional.empty",
  },
  {
    id: 116,
    question:
      'Que va afficher ce code ?\n\ntry {\n    System.out.println("A");\n} catch (RuntimeException e) {\n    System.out.println("B");\n} catch (Exception e) {\n    System.out.println("C");\n}',
    reponse_f1: "B",
    reponse_v: "A",
    reponse_f2: "C",
  },
  {
    id: 117,
    question:
      'Quelle ligne provoque une erreur de compilation ?\n\n1. try {\n2.     throw new RuntimeException();\n3. } catch (Exception e) {\n4.     System.out.println("Exception");\n5. } catch (RuntimeException e) {\n6.     System.out.println("Runtime");\n7. }',
    reponse_f1: "Ligne 2",
    reponse_v: "Ligne 5",
    reponse_f2: "Ligne 3",
  },
  {
    id: 118,
    question:
      "Pourquoi la ligne 5 provoque-t-elle une erreur ?\n\ncatch (Exception e) { }\ncatch (RuntimeException e) { }",
    reponse_f1: "RuntimeException est checked",
    reponse_v: "Le second catch est inaccessible",
    reponse_f2: "Exception ne peut pas être catchée",
  },
  {
    id: 119,
    question:
      'Quelle exception sera levée ?\n\nString s = "abc";\nSystem.out.println(s.charAt(5));',
    reponse_f1: "ArrayIndexOutOfBoundsException",
    reponse_v: "StringIndexOutOfBoundsException",
    reponse_f2: "NullPointerException",
  },
  {
    id: 120,
    question:
      'Que va afficher ce code ?\n\nString s = "abc";\ntry {\n    System.out.println(s.charAt(5));\n} catch (IndexOutOfBoundsException e) {\n    System.out.println("Index invalide");\n}',
    reponse_f1: "abc",
    reponse_v: "Index invalide",
    reponse_f2: "Erreur de compilation",
  },
  {
    id: 121,
    question:
      "Quelle exception sera levée ?\n\nint[] t = null;\nSystem.out.println(t.length);",
    reponse_f1: "ArrayIndexOutOfBoundsException",
    reponse_v: "NullPointerException",
    reponse_f2: "IllegalStateException",
  },
  {
    id: 122,
    question:
      'Que va afficher ce code ?\n\ntry {\n    System.out.println(10 / 2);\n} catch (ArithmeticException e) {\n    System.out.println("Erreur");\n} finally {\n    System.out.println("Fin");\n}',
    reponse_f1: "5",
    reponse_v: "5 puis Fin",
    reponse_f2: "Erreur puis Fin",
  },
  {
    id: 123,
    question: "Quel bloc est toujours exécuté, sauf arrêt brutal de la JVM ?",
    reponse_f1: "catch",
    reponse_v: "finally",
    reponse_f2: "throws",
  },
  {
    id: 124,
    question: "Quel est l'intérêt principal de try-with-resources ?",
    reponse_f1: "Accélérer le code",
    reponse_v: "Fermer automatiquement les ressources",
    reponse_f2: "Empêcher toutes les exceptions",
  },

  {
    id: 125,
    question:
      "Quel principe objet permet à une variable de type parent de référencer un objet enfant ?\n\nAnimal a = new Chien();",
    reponse_f1: "Encapsulation",
    reponse_v: "Polymorphisme",
    reponse_f2: "Surcharge",
  },
  {
    id: 126,
    question:
      'Que va afficher ce code ?\n\nclass A {\n    void test() { System.out.println("A"); }\n}\nclass B extends A {\n    void test() { System.out.println("B"); }\n}\nA obj = new B();\nobj.test();',
    reponse_f1: "A",
    reponse_v: "B",
    reponse_f2: "Erreur",
  },
  {
    id: 127,
    question:
      "Quelle notion est illustrée ici ?\n\nvoid calculer(int x) {}\nvoid calculer(double x) {}",
    reponse_f1: "Redéfinition",
    reponse_v: "Surcharge",
    reponse_f2: "Encapsulation",
  },
  {
    id: 128,
    question:
      "Quelle notion est illustrée ici ?\n\nclass B extends A {\n    @Override\n    void afficher() {}\n}",
    reponse_f1: "Surcharge",
    reponse_v: "Redéfinition",
    reponse_f2: "Composition",
  },
  {
    id: 129,
    question:
      "Quelle ligne provoque une erreur de compilation ?\n\n1. class Animal {}\n2. class Chien extends Animal {}\n3. Chien c = new Animal();",
    reponse_f1: "Ligne 1",
    reponse_v: "Ligne 3",
    reponse_f2: "Ligne 2",
  },
  {
    id: 130,
    question: "Quelle est la meilleure correction ?\n\nChien c = new Animal();",
    reponse_f1: 'Animal c = "Chien";',
    reponse_v: "Animal c = new Chien();",
    reponse_f2: "Chien c = Animal();",
  },
  {
    id: 131,
    question:
      "Que va afficher ce code ?\n\nclass Test {\n    static int compteur = 0;\n    Test() { compteur++; }\n}\nnew Test();\nnew Test();\nSystem.out.println(Test.compteur);",
    reponse_f1: "1",
    reponse_v: "2",
    reponse_f2: "0",
  },
  {
    id: 132,
    question: "Que signifie le mot-clé static pour un attribut ?",
    reponse_f1: "Il appartient uniquement à chaque objet",
    reponse_v: "Il appartient à la classe",
    reponse_f2: "Il ne peut jamais changer",
  },
  {
    id: 133,
    question:
      'Que va afficher ce code ?\n\nclass A {\n    static void test() { System.out.println("A"); }\n}\nclass B extends A {\n    static void test() { System.out.println("B"); }\n}\nA obj = new B();\nobj.test();',
    reponse_f1: "B",
    reponse_v: "A",
    reponse_f2: "Erreur",
  },
  {
    id: 134,
    question: "Pourquoi le code précédent affiche-t-il A ?",
    reponse_f1: "Parce que B n'hérite pas de A",
    reponse_v:
      "Parce que les méthodes static sont résolues selon le type de référence",
    reponse_f2: "Parce que static force toujours une erreur",
  },
  {
    id: 135,
    question:
      "Quelle ligne provoque une erreur de compilation ?\n\n1. final int x = 5;\n2. x = 10;\n3. System.out.println(x);",
    reponse_f1: "Ligne 1",
    reponse_v: "Ligne 2",
    reponse_f2: "Ligne 3",
  },
  {
    id: 136,
    question: "Quel mot-clé empêche une classe d'être héritée ?",
    reponse_f1: "static",
    reponse_v: "final",
    reponse_f2: "private",
  },
  {
    id: 137,
    question:
      'Quelle ligne provoque une erreur ?\n\n1. final class A {}\n2. class B extends A {}\n3. System.out.println("test");',
    reponse_f1: "Ligne 1",
    reponse_v: "Ligne 2",
    reponse_f2: "Ligne 3",
  },
  {
    id: 138,
    question:
      "Quel principe consiste à cacher les attributs et fournir des getters/setters ?",
    reponse_f1: "Héritage",
    reponse_v: "Encapsulation",
    reponse_f2: "Polymorphisme",
  },
  {
    id: 139,
    question:
      "Quelle visibilité limite l'accès à l'intérieur de la classe uniquement ?",
    reponse_f1: "public",
    reponse_v: "private",
    reponse_f2: "protected",
  },
  {
    id: 140,
    question:
      "Quelle visibilité permet l'accès depuis le même package et les classes filles ?",
    reponse_f1: "private",
    reponse_v: "protected",
    reponse_f2: "final",
  },
  {
    id: 141,
    question:
      'Que va afficher ce code ?\n\nclass Parent {\n    Parent() { System.out.println("Parent"); }\n}\nclass Enfant extends Parent {\n    Enfant() { System.out.println("Enfant"); }\n}\nnew Enfant();',
    reponse_f1: "Enfant uniquement",
    reponse_v: "Parent puis Enfant",
    reponse_f2: "Erreur",
  },
  {
    id: 142,
    question:
      "Quel appel est implicitement fait au début d'un constructeur enfant si rien n'est indiqué ?",
    reponse_f1: "this()",
    reponse_v: "super()",
    reponse_f2: "parent()",
  },
  {
    id: 143,
    question:
      "Quelle ligne provoque une erreur de compilation ?\n\n1. class Parent { Parent(String nom) {} }\n2. class Enfant extends Parent { Enfant() {} }\n3. new Enfant();",
    reponse_f1: "Ligne 1",
    reponse_v: "Ligne 2",
    reponse_f2: "Ligne 3",
  },
  {
    id: 144,
    question:
      "Quelle est la meilleure correction ?\n\nclass Parent { Parent(String nom) {} }\nclass Enfant extends Parent { Enfant() {} }",
    reponse_f1: "Supprimer extends Parent",
    reponse_v: 'Ajouter super("nom") dans le constructeur Enfant',
    reponse_f2: "Mettre Parent en static",
  },
  {
    id: 145,
    question:
      "Quel mot-clé permet d'appeler un constructeur de la même classe ?",
    reponse_f1: "super()",
    reponse_v: "this()",
    reponse_f2: "self()",
  },
  {
    id: 146,
    question:
      "Quel mot-clé permet d'appeler un constructeur de la classe mère ?",
    reponse_f1: "this()",
    reponse_v: "super()",
    reponse_f2: "parent()",
  },
  {
    id: 147,
    question:
      'Que va afficher ce code ?\n\ninterface Animal {\n    void parler();\n}\nclass Chien implements Animal {\n    public void parler() { System.out.println("Wouf"); }\n}\nAnimal a = new Chien();\na.parler();',
    reponse_f1: "Animal",
    reponse_v: "Wouf",
    reponse_f2: "Erreur",
  },
  {
    id: 148,
    question:
      "Quelle ligne provoque une erreur ?\n\n1. interface A { void test(); }\n2. class B implements A {}\n3. new B();",
    reponse_f1: "Ligne 1",
    reponse_v: "Ligne 2",
    reponse_f2: "Ligne 3",
  },
  {
    id: 149,
    question:
      "Quelle est la meilleure correction ?\n\ninterface A { void test(); }\nclass B implements A {}",
    reponse_f1: "Remplacer interface par class",
    reponse_v: "Implémenter la méthode test() dans B",
    reponse_f2: "Supprimer les accolades de A",
  },
  {
    id: 150,
    question:
      "Quel principe est illustré ici ?\n\nList<String> list = new ArrayList<>();",
    reponse_f1: "Utiliser une classe concrète comme type principal",
    reponse_v: "Programmer contre une interface",
    reponse_f2: "Empêcher le polymorphisme",
  },

  {
    id: 151,
    question:
      "Que va afficher ce code ?\n\nList<Integer> nums = List.of(1, 2, 3, 4, 5);\nint result = nums.stream()\n    .filter(n -> n % 2 == 0)\n    .mapToInt(n -> n * 2)\n    .sum();\nSystem.out.println(result);",
    reponse_f1: "6",
    reponse_v: "12",
    reponse_f2: "30",
  },
  {
    id: 152,
    question:
      'Quel sera le résultat ?\n\nList<String> mots = List.of("java", "spring", "api");\nlong count = mots.stream()\n    .filter(m -> m.length() > 3)\n    .count();\nSystem.out.println(count);',
    reponse_f1: "1",
    reponse_v: "2",
    reponse_f2: "3",
  },
  {
    id: 153,
    question: "Quelle opération Stream est paresseuse ?",
    reponse_f1: "count()",
    reponse_v: "filter()",
    reponse_f2: "collect()",
  },
  {
    id: 154,
    question:
      'Que va afficher ce code ?\n\nStream.of("A", "B", "C")\n    .map(String::toLowerCase)\n    .forEach(System.out::print);',
    reponse_f1: "ABC",
    reponse_v: "abc",
    reponse_f2: "[a, b, c]",
  },
  {
    id: 155,
    question:
      "Quelle exception sera levée ?\n\nStream<Integer> s = Stream.of(1, 2, 3);\ns.count();\ns.count();",
    reponse_f1: "NullPointerException",
    reponse_v: "IllegalStateException",
    reponse_f2: "UnsupportedOperationException",
  },
  {
    id: 156,
    question:
      "Pourquoi ce code échoue-t-il ?\n\nStream<Integer> s = Stream.of(1, 2, 3);\ns.count();\ns.count();",
    reponse_f1: "Un Stream ne peut contenir que deux éléments",
    reponse_v: "Un Stream ne peut être consommé qu'une seule fois",
    reponse_f2: "count() modifie les éléments",
  },
  {
    id: 157,
    question:
      "Que va afficher ce code ?\n\nList<Integer> nums = List.of(1, 2, 3);\nSystem.out.println(nums.stream().reduce(1, (a, b) -> a * b));",
    reponse_f1: "0",
    reponse_v: "6",
    reponse_f2: "7",
  },
  {
    id: 158,
    question:
      'Quel sera le résultat ?\n\nList<String> mots = List.of("aa", "bbb", "c");\nString r = mots.stream()\n    .max(Comparator.comparingInt(String::length))\n    .orElse("none");\nSystem.out.println(r);',
    reponse_f1: "aa",
    reponse_v: "bbb",
    reponse_f2: "none",
  },
  {
    id: 159,
    question:
      "Quelle méthode transforme chaque élément en un autre élément dans un Stream ?",
    reponse_f1: "filter()",
    reponse_v: "map()",
    reponse_f2: "peek()",
  },
  {
    id: 160,
    question:
      "Que va afficher ce code ?\n\nList<List<Integer>> data = List.of(List.of(1, 2), List.of(3, 4));\nSystem.out.println(data.stream().flatMap(List::stream).toList());",
    reponse_f1: "[[1, 2], [3, 4]]",
    reponse_v: "[1, 2, 3, 4]",
    reponse_f2: "[1, 3]",
  },
  {
    id: 161,
    question: "À quoi sert flatMap() dans un Stream ?",
    reponse_f1: "Trier les éléments",
    reponse_v: "Aplatir des structures imbriquées",
    reponse_f2: "Supprimer les doublons uniquement",
  },
  {
    id: 162,
    question:
      "Que va afficher ce code ?\n\nList<Integer> nums = List.of(1, 2, 2, 3);\nSystem.out.println(nums.stream().distinct().toList());",
    reponse_f1: "[1, 2, 2, 3]",
    reponse_v: "[1, 2, 3]",
    reponse_f2: "[2]",
  },
  {
    id: 163,
    question:
      "Quel sera le résultat ?\n\nList<Integer> nums = List.of(5, 1, 3);\nSystem.out.println(nums.stream().sorted().toList());",
    reponse_f1: "[5, 3, 1]",
    reponse_v: "[1, 3, 5]",
    reponse_f2: "[5, 1, 3]",
  },
  {
    id: 164,
    question:
      'Que va afficher ce code ?\n\nList<String> noms = List.of("Bob", "Alice", "Tom");\nSystem.out.println(noms.stream().anyMatch(n -> n.length() == 3));',
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "3",
  },
  {
    id: 165,
    question:
      "Que va afficher ce code ?\n\nList<Integer> nums = List.of(2, 4, 6);\nSystem.out.println(nums.stream().allMatch(n -> n % 2 == 0));",
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "6",
  },
  {
    id: 166,
    question:
      "Que va afficher ce code ?\n\nList<Integer> nums = List.of(1, 3, 5);\nSystem.out.println(nums.stream().noneMatch(n -> n % 2 == 0));",
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "1",
  },
  {
    id: 167,
    question: "Quelle méthode Stream permet de limiter le nombre d'éléments ?",
    reponse_f1: "skip()",
    reponse_v: "limit()",
    reponse_f2: "take()",
  },
  {
    id: 168,
    question:
      "Que va afficher ce code ?\n\nList<Integer> nums = List.of(1, 2, 3, 4);\nSystem.out.println(nums.stream().skip(2).toList());",
    reponse_f1: "[1, 2]",
    reponse_v: "[3, 4]",
    reponse_f2: "[2, 3, 4]",
  },
  {
    id: 169,
    question:
      "Quelle interface fonctionnelle ne prend aucun argument et retourne une valeur ?",
    reponse_f1: "Consumer<T>",
    reponse_v: "Supplier<T>",
    reponse_f2: "Predicate<T>",
  },
  {
    id: 170,
    question:
      'Que va afficher ce code ?\n\nSupplier<String> s = () -> "Java";\nSystem.out.println(s.get());',
    reponse_f1: "Supplier",
    reponse_v: "Java",
    reponse_f2: "get",
  },
  {
    id: 171,
    question:
      "Quelle interface fonctionnelle prend deux arguments et retourne une valeur ?",
    reponse_f1: "Function<T,R>",
    reponse_v: "BiFunction<T,U,R>",
    reponse_f2: "BiConsumer<T,U>",
  },
  {
    id: 172,
    question:
      "Que va afficher ce code ?\n\nBiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;\nSystem.out.println(add.apply(3, 4));",
    reponse_f1: "34",
    reponse_v: "7",
    reponse_f2: "Erreur",
  },
  {
    id: 173,
    question: "Quelle méthode référence correctement une méthode statique ?",
    reponse_f1: "String->valueOf",
    reponse_v: "String::valueOf",
    reponse_f2: "String.valueOf::",
  },
  {
    id: 174,
    question:
      "Que va afficher ce code ?\n\nFunction<Integer, String> f = String::valueOf;\nSystem.out.println(f.apply(123).length());",
    reponse_f1: "123",
    reponse_v: "3",
    reponse_f2: "Erreur",
  },
  {
    id: 175,
    question:
      "Quelle opération Stream sert surtout au debug sans transformer les éléments ?",
    reponse_f1: "map()",
    reponse_v: "peek()",
    reponse_f2: "reduce()",
  },
  {
    id: 176,
    question:
      "Que va afficher ce code ?\n\nList<Integer> nums = List.of(1, 2, 3);\nnums.stream()\n    .peek(System.out::print)\n    .count();",
    reponse_f1: "1233",
    reponse_v: "123",
    reponse_f2: "Rien",
  },
  {
    id: 177,
    question: "Quelle opération déclenche réellement l'exécution d'un Stream ?",
    reponse_f1: "map()",
    reponse_v: "Une opération terminale comme collect()",
    reponse_f2: "filter()",
  },
  {
    id: 178,
    question:
      'Que va afficher ce code ?\n\nList<String> l = List.of("Java", "Spring");\nSystem.out.println(l.stream().map(String::length).toList());',
    reponse_f1: "[Java, Spring]",
    reponse_v: "[4, 6]",
    reponse_f2: "[5, 7]",
  },
  {
    id: 179,
    question:
      "Quel Collectors permet de regrouper des éléments selon un critère ?",
    reponse_f1: "Collectors.mapping()",
    reponse_v: "Collectors.groupingBy()",
    reponse_f2: "Collectors.partitioningBy()",
  },
  {
    id: 180,
    question:
      'Que va afficher ce code ?\n\nList<String> mots = List.of("aa", "bbb", "cc");\nSystem.out.println(mots.stream().collect(Collectors.groupingBy(String::length)).keySet());',
    reponse_f1: "[aa, bbb]",
    reponse_v: "[2, 3]",
    reponse_f2: "[1, 2, 3]",
  },
  {
    id: 181,
    question:
      "Quelle différence principale existe entre groupingBy() et partitioningBy() ?",
    reponse_f1: "Aucune",
    reponse_v: "partitioningBy() ne crée que deux groupes (true/false)",
    reponse_f2: "groupingBy() est plus lent mais obligatoire",
  },
  {
    id: 182,
    question:
      "Que va afficher ce code ?\n\nList<Integer> l = List.of(2, 4, 6);\nSystem.out.println(l.stream().findFirst().get());",
    reponse_f1: "6",
    reponse_v: "2",
    reponse_f2: "4",
  },
  {
    id: 183,
    question:
      "Quelle exception est levée ?\n\nOptional<Integer> opt = Stream.<Integer>empty().findFirst();\nSystem.out.println(opt.get());",
    reponse_f1: "NullPointerException",
    reponse_v: "NoSuchElementException",
    reponse_f2: "IllegalStateException",
  },
  {
    id: 184,
    question:
      "Que va afficher ce code ?\n\nSystem.out.println(Stream.of(4,2,9).max(Integer::compareTo).get());",
    reponse_f1: "2",
    reponse_v: "9",
    reponse_f2: "4",
  },
  {
    id: 185,
    question:
      "Quelle méthode permet de convertir un Stream<Integer> en IntStream ?",
    reponse_f1: "toIntStream()",
    reponse_v: "mapToInt()",
    reponse_f2: "asIntStream()",
  },
  {
    id: 186,
    question:
      "Que va afficher ce code ?\n\nint somme = Stream.of(1,2,3).mapToInt(Integer::intValue).sum();\nSystem.out.println(somme);",
    reponse_f1: "5",
    reponse_v: "6",
    reponse_f2: "123",
  },
  {
    id: 187,
    question:
      "Quelle opération permet de supprimer les doublons dans un Stream ?",
    reponse_f1: "unique()",
    reponse_v: "distinct()",
    reponse_f2: "removeDuplicates()",
  },
  {
    id: 188,
    question:
      "Quelle méthode permet d'obtenir le plus petit élément d'un Stream ?",
    reponse_f1: "first()",
    reponse_v: "min()",
    reponse_f2: "least()",
  },
  {
    id: 189,
    question:
      "Que va afficher ce code ?\n\nSystem.out.println(Stream.of(3,5,1).min(Integer::compareTo).get());",
    reponse_f1: "5",
    reponse_v: "1",
    reponse_f2: "3",
  },
  {
    id: 190,
    question: "Quelle méthode permet de concaténer deux Stream ?",
    reponse_f1: "merge()",
    reponse_v: "Stream.concat()",
    reponse_f2: "append()",
  },
  {
    id: 191,
    question:
      "Que va afficher ce code ?\n\nStream<Integer> s = Stream.concat(Stream.of(1,2), Stream.of(3,4));\nSystem.out.println(s.toList());",
    reponse_f1: "[1,2]",
    reponse_v: "[1, 2, 3, 4]",
    reponse_f2: "[3,4]",
  },
  {
    id: 192,
    question:
      "Quelle est la meilleure structure pour rechercher rapidement une clé ?",
    reponse_f1: "ArrayList",
    reponse_v: "HashMap",
    reponse_f2: "LinkedList",
  },
  {
    id: 193,
    question:
      "Quelle est la complexité moyenne d'une insertion dans une HashMap ?",
    reponse_f1: "O(n)",
    reponse_v: "O(1)",
    reponse_f2: "O(log n)",
  },
  {
    id: 194,
    question:
      'Que va afficher ce code ?\n\nMap<String,Integer> map = Map.of("A",1,"B",2);\nSystem.out.println(map.containsValue(2));',
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "Erreur",
  },
  {
    id: 195,
    question: "Quelle méthode retourne toutes les clés d'une Map ?",
    reponse_f1: "keys()",
    reponse_v: "keySet()",
    reponse_f2: "getKeys()",
  },
  {
    id: 196,
    question: "Quelle méthode retourne toutes les valeurs d'une Map ?",
    reponse_f1: "valuesSet()",
    reponse_v: "values()",
    reponse_f2: "getValues()",
  },
  {
    id: 197,
    question:
      "Quelle boucle est la plus adaptée pour parcourir une Map (clé + valeur) ?",
    reponse_f1: "for(Object o : map)",
    reponse_v: "for(Map.Entry<K,V> e : map.entrySet())",
    reponse_f2: "for(K k : map.values())",
  },
  {
    id: 198,
    question:
      'Que va afficher ce code ?\n\nMap<String,Integer> map = new HashMap<>();\nmap.put("A",1);\nmap.replace("A",2);\nSystem.out.println(map.get("A"));',
    reponse_f1: "1",
    reponse_v: "2",
    reponse_f2: "null",
  },
  {
    id: 199,
    question:
      "Quelle méthode remplace une valeur uniquement si la clé existe déjà ?",
    reponse_f1: "put()",
    reponse_v: "replace()",
    reponse_f2: "merge()",
  },
  {
    id: 200,
    question:
      "Quel sera le résultat ?\n\nMap<String,Integer> map = new HashMap<>();\nSystem.out.println(map.isEmpty());",
    reponse_f1: "false",
    reponse_v: "true",
    reponse_f2: "null",
  },
  {
    id: 201,
    question:
      "Que va afficher ce code ?\n\nExecutorService executor = Executors.newSingleThreadExecutor();\nFuture<Integer> future = executor.submit(() -> 42);\nSystem.out.println(future.get());\nexecutor.shutdown();",
    reponse_f1: "null",
    reponse_v: "42",
    reponse_f2: "Erreur",
  },
  {
    id: 202,
    question: "Quelle exception peut lever Future.get() ?",
    reponse_f1: "NumberFormatException",
    reponse_v: "InterruptedException",
    reponse_f2: "ClassCastException",
  },
  {
    id: 203,
    question:
      "Quelle est la meilleure pratique après l'utilisation d'un ExecutorService ?",
    reponse_f1: "Le laisser être détruit par le GC",
    reponse_v: "Appeler shutdown()",
    reponse_f2: "Mettre l'objet à null",
  },
  {
    id: 204,
    question: "Quel est l'intérêt principal de CompletableFuture ?",
    reponse_f1: "Créer des threads manuellement",
    reponse_v: "Chaîner des traitements asynchrones",
    reponse_f2: "Remplacer les Streams",
  },
  {
    id: 205,
    question: "Que fait l'annotation @Override ?",
    reponse_f1: "Elle rend la méthode finale",
    reponse_v: "Elle vérifie qu'une méthode redéfinit bien celle du parent",
    reponse_f2: "Elle améliore les performances",
  },
  {
    id: 206,
    question: "Quelle annotation Spring déclare un composant métier ?",
    reponse_f1: "@Controller",
    reponse_v: "@Service",
    reponse_f2: "@RepositoryRestResource",
  },
  {
    id: 207,
    question:
      "Quelle annotation Spring est spécialisée pour l'accès aux données ?",
    reponse_f1: "@Component",
    reponse_v: "@Repository",
    reponse_f2: "@Configuration",
  },
  {
    id: 208,
    question: "Quelle annotation permet l'injection de dépendances ?",
    reponse_f1: "@Injectable",
    reponse_v: "@Autowired",
    reponse_f2: "@Import",
  },
  {
    id: 209,
    question:
      "Quelle est aujourd'hui la pratique recommandée par Spring pour l'injection ?",
    reponse_f1: "Injection par champ (@Autowired sur les attributs)",
    reponse_v: "Injection par constructeur",
    reponse_f2: "Variables statiques",
  },
  {
    id: 210,
    question: "Quelle annotation marque une classe comme contrôleur REST ?",
    reponse_f1: "@Controller",
    reponse_v: "@RestController",
    reponse_f2: "@Endpoint",
  },
  {
    id: 211,
    question: "Quelle annotation permet de mapper une requête HTTP GET ?",
    reponse_f1: "@Request",
    reponse_v: "@GetMapping",
    reponse_f2: "@Route",
  },
  {
    id: 212,
    question: "Quelle annotation permet de récupérer une variable d'URL ?",
    reponse_f1: "@RequestParam",
    reponse_v: "@PathVariable",
    reponse_f2: "@Variable",
  },
  {
    id: 213,
    question: "Quelle annotation permet de récupérer un paramètre de requête ?",
    reponse_f1: "@PathVariable",
    reponse_v: "@RequestParam",
    reponse_f2: "@BodyParam",
  },
  {
    id: 214,
    question:
      "Quelle annotation permet de récupérer le corps JSON d'une requête ?",
    reponse_f1: "@JsonBody",
    reponse_v: "@RequestBody",
    reponse_f2: "@PostBody",
  },
  {
    id: 215,
    question: "Quelle annotation démarre une transaction Spring ?",
    reponse_f1: "@TransactionalService",
    reponse_v: "@Transactional",
    reponse_f2: "@Commit",
  },
  {
    id: 216,
    question:
      "Quel est le comportement par défaut de @Transactional lorsqu'une RuntimeException est levée ?",
    reponse_f1: "La transaction est validée",
    reponse_v: "La transaction est annulée (rollback)",
    reponse_f2: "Spring ignore l'exception",
  },
  {
    id: 217,
    question: "Quelle annotation JPA indique la clé primaire ?",
    reponse_f1: "@Column",
    reponse_v: "@Id",
    reponse_f2: "@Primary",
  },
  {
    id: 218,
    question:
      "Quelle annotation génère automatiquement la valeur d'une clé primaire ?",
    reponse_f1: "@AutoIncrement",
    reponse_v: "@GeneratedValue",
    reponse_f2: "@Identity",
  },
  {
    id: 219,
    question: "Quelle annotation représente une relation plusieurs-à-un ?",
    reponse_f1: "@OneToMany",
    reponse_v: "@ManyToOne",
    reponse_f2: "@ManyRelation",
  },
  {
    id: 220,
    question: "Quelle annotation représente une relation un-à-plusieurs ?",
    reponse_f1: "@ManyToOne",
    reponse_v: "@OneToMany",
    reponse_f2: "@OneRelation",
  },
  {
    id: 221,
    question:
      "Quel mode de chargement est utilisé par défaut pour @ManyToOne ?",
    reponse_f1: "EAGER uniquement sur demande",
    reponse_v: "EAGER",
    reponse_f2: "LAZY",
  },
  {
    id: 222,
    question:
      "Quel mode de chargement est utilisé par défaut pour @OneToMany ?",
    reponse_f1: "EAGER",
    reponse_v: "LAZY",
    reponse_f2: "AUTO",
  },
  {
    id: 223,
    question:
      "Quel problème Hibernate est lié à un trop grand nombre de requêtes SQL lors du chargement d'entités ?",
    reponse_f1: "Deadlock",
    reponse_v: "Problème N+1",
    reponse_f2: "Dirty Read",
  },
  {
    id: 224,
    question: "Quelle est la meilleure solution pour limiter le problème N+1 ?",
    reponse_f1: "Utiliser plus de HashMap",
    reponse_v: "Utiliser un JOIN FETCH ou EntityGraph",
    reponse_f2: "Passer toutes les relations en EAGER",
  },
  {
    id: 225,
    question:
      "Quelle annotation JPA indique le côté propriétaire d'une relation bidirectionnelle ?",
    reponse_f1: "mappedBy",
    reponse_v: "@JoinColumn",
    reponse_f2: "@Owner",
  },
  {
    id: 226,
    question:
      "Quelle annotation permet de définir le côté inverse d'une relation bidirectionnelle JPA ?",
    reponse_f1: "@JoinColumn",
    reponse_v: "mappedBy",
    reponse_f2: "@Inverse",
  },
  {
    id: 227,
    question: "Quel est l'intérêt principal de mappedBy ?",
    reponse_f1: "Créer une clé primaire",
    reponse_v: "Éviter une seconde table de jointure inutile",
    reponse_f2: "Créer automatiquement les index SQL",
  },
  {
    id: 228,
    question:
      "Quel CascadeType permet de persister automatiquement les entités enfants ?",
    reponse_f1: "CascadeType.REFRESH",
    reponse_v: "CascadeType.PERSIST",
    reponse_f2: "CascadeType.DETACH",
  },
  {
    id: 229,
    question: "Quel CascadeType supprime également les entités enfants ?",
    reponse_f1: "CascadeType.MERGE",
    reponse_v: "CascadeType.REMOVE",
    reponse_f2: "CascadeType.REFRESH",
  },
  {
    id: 230,
    question: "À quoi sert orphanRemoval = true ?",
    reponse_f1: "Supprimer les tables orphelines",
    reponse_v: "Supprimer automatiquement un enfant retiré de la collection",
    reponse_f2: "Supprimer les clés étrangères",
  },
  {
    id: 231,
    question:
      "Quelle est la différence principale entre persist() et merge() ?",
    reponse_f1: "Aucune",
    reponse_v:
      "persist crée une nouvelle entité, merge rattache une entité détachée",
    reponse_f2: "merge supprime l'entité",
  },
  {
    id: 232,
    question:
      "Quelle annotation permet d'exécuter une requête JPQL personnalisée ?",
    reponse_f1: "@SQL",
    reponse_v: "@Query",
    reponse_f2: "@Select",
  },
  {
    id: 233,
    question: "Quel langage est utilisé dans @Query par défaut ?",
    reponse_f1: "SQL",
    reponse_v: "JPQL",
    reponse_f2: "HQL uniquement",
  },
  {
    id: 234,
    question:
      "Que faut-il ajouter pour exécuter une requête UPDATE avec @Query ?",
    reponse_f1: "@Transactional uniquement",
    reponse_v: "@Modifying",
    reponse_f2: "@Update",
  },
  {
    id: 235,
    question: "Quelle annotation permet de déclarer une requête SQL native ?",
    reponse_f1: "@SQLQuery",
    reponse_v: "@Query(nativeQuery = true)",
    reponse_f2: "@Native",
  },
  {
    id: 236,
    question: "Quel est le rôle principal de l'EntityManager ?",
    reponse_f1: "Créer les tables SQL",
    reponse_v: "Gérer le cycle de vie des entités",
    reponse_f2: "Créer les contrôleurs Spring",
  },
  {
    id: 237,
    question:
      "Comment appelle-t-on une entité actuellement suivie par Hibernate ?",
    reponse_f1: "Detached",
    reponse_v: "Managed",
    reponse_f2: "Transient",
  },
  {
    id: 238,
    question: "Dans quel état se trouve une nouvelle entité créée avec new ?",
    reponse_f1: "Managed",
    reponse_v: "Transient",
    reponse_f2: "Detached",
  },
  {
    id: 239,
    question: "Une entité devient Detached lorsqu'elle...",
    reponse_f1: "est sauvegardée",
    reponse_v: "n'est plus gérée par le contexte de persistance",
    reponse_f2: "est supprimée de la base",
  },
  {
    id: 240,
    question:
      "Quelle méthode Spring Data JPA permet de récupérer une entité par son identifiant ?",
    reponse_f1: "getById()",
    reponse_v: "findById()",
    reponse_f2: "selectById()",
  },
  {
    id: 241,
    question: "Que retourne findById() ?",
    reponse_f1: "L'entité directement",
    reponse_v: "Optional<T>",
    reponse_f2: "Future<T>",
  },
  {
    id: 242,
    question: "Quelle méthode permet de vérifier l'existence d'une entité ?",
    reponse_f1: "findExists()",
    reponse_v: "existsById()",
    reponse_f2: "hasId()",
  },
  {
    id: 243,
    question:
      "Quelle méthode permet de supprimer une entité par son identifiant ?",
    reponse_f1: "remove(id)",
    reponse_v: "deleteById(id)",
    reponse_f2: "erase(id)",
  },
  {
    id: 244,
    question: "Quelle méthode permet de compter toutes les entités ?",
    reponse_f1: "size()",
    reponse_v: "count()",
    reponse_f2: "length()",
  },
  {
    id: 245,
    question:
      "Quel est l'avantage principal de JpaRepository par rapport à CrudRepository ?",
    reponse_f1: "Aucun",
    reponse_v: "Il ajoute des fonctionnalités comme le tri et la pagination",
    reponse_f2: "Il est réservé à Spring Boot 3",
  },
  {
    id: 246,
    question: "Quelle interface Spring permet de gérer la pagination ?",
    reponse_f1: "PageableResult",
    reponse_v: "Pageable",
    reponse_f2: "Paginator",
  },
  {
    id: 247,
    question: "Quel objet représente une page de résultats Spring Data ?",
    reponse_f1: "ResultPage",
    reponse_v: "Page<T>",
    reponse_f2: "SliceResult",
  },
  {
    id: 248,
    question: "Quelle méthode permet de créer un Pageable ?",
    reponse_f1: "new Pageable()",
    reponse_v: "PageRequest.of(page, size)",
    reponse_f2: "Page.of(page, size)",
  },
  {
    id: 249,
    question:
      "Quelle méthode permet également de préciser un tri lors de la pagination ?",
    reponse_f1: "Pageable.sort()",
    reponse_v: "PageRequest.of(page, size, Sort.by(...))",
    reponse_f2: "Page.sorted()",
  },
  {
    id: 250,
    question:
      "Quelle est la meilleure pratique pour éviter de retourner directement les entités JPA dans une API REST ?",
    reponse_f1: "Utiliser Serializable",
    reponse_v: "Retourner des DTO",
    reponse_f2: "Utiliser uniquement des records",
  },
  {
    id: 251,
    question:
      "Quelle annotation JUnit 5 permet de déclarer une méthode de test ?",
    reponse_f1: "@TestCase",
    reponse_v: "@Test",
    reponse_f2: "@JUnit",
  },
  {
    id: 252,
    question: "Quelle annotation est exécutée avant chaque test ?",
    reponse_f1: "@Before",
    reponse_v: "@BeforeEach",
    reponse_f2: "@InitTest",
  },
  {
    id: 253,
    question:
      "Quelle annotation est exécutée une seule fois avant tous les tests ?",
    reponse_f1: "@Before",
    reponse_v: "@BeforeAll",
    reponse_f2: "@Init",
  },
  {
    id: 254,
    question: "Quelle annotation est exécutée après chaque test ?",
    reponse_f1: "@After",
    reponse_v: "@AfterEach",
    reponse_f2: "@Destroy",
  },
  {
    id: 255,
    question:
      "Quelle annotation est exécutée une seule fois après tous les tests ?",
    reponse_f1: "@After",
    reponse_v: "@AfterAll",
    reponse_f2: "@DestroyAll",
  },
  {
    id: 256,
    question: "Quelle méthode permet de vérifier deux valeurs dans JUnit ?",
    reponse_f1: "Assertions.checkEquals()",
    reponse_v: "Assertions.assertEquals()",
    reponse_f2: "Assertions.verifyEquals()",
  },
  {
    id: 257,
    question: "Quelle assertion permet de vérifier qu'une valeur est nulle ?",
    reponse_f1: "assertEmpty()",
    reponse_v: "assertNull()",
    reponse_f2: "assertFalse()",
  },
  {
    id: 258,
    question: "Quelle assertion permet de vérifier qu'un booléen vaut true ?",
    reponse_f1: "assertBoolean()",
    reponse_v: "assertTrue()",
    reponse_f2: "assertEquals(true)",
  },
  {
    id: 259,
    question:
      "Quelle assertion permet de vérifier qu'une exception est levée ?",
    reponse_f1: "assertThrow()",
    reponse_v: "assertThrows()",
    reponse_f2: "assertException()",
  },
  {
    id: 260,
    question:
      "Que vérifie ce code ?\n\nassertThrows(IllegalArgumentException.class,\n () -> service.save(null));",
    reponse_f1: "Que save() retourne null",
    reponse_v: "Que save() lance IllegalArgumentException",
    reponse_f2: "Que save() retourne false",
  },
  {
    id: 261,
    question: "Quelle bibliothèque est utilisée pour créer des mocks en Java ?",
    reponse_f1: "JUnit",
    reponse_v: "Mockito",
    reponse_f2: "Jackson",
  },
  {
    id: 262,
    question: "Quelle annotation crée un mock Mockito ?",
    reponse_f1: "@Spy",
    reponse_v: "@Mock",
    reponse_f2: "@Fake",
  },
  {
    id: 263,
    question:
      "Quelle annotation injecte automatiquement les mocks dans la classe testée ?",
    reponse_f1: "@Autowired",
    reponse_v: "@InjectMocks",
    reponse_f2: "@MockBean",
  },
  {
    id: 264,
    question:
      "Que fait ce code ?\n\nwhen(userRepository.findById(1L)).thenReturn(Optional.of(user));",
    reponse_f1: "Appelle réellement la base",
    reponse_v: "Configure le comportement du mock",
    reponse_f2: "Supprime l'utilisateur",
  },
  {
    id: 265,
    question:
      "Quelle méthode Mockito vérifie qu'une méthode a bien été appelée ?",
    reponse_f1: "check()",
    reponse_v: "verify()",
    reponse_f2: "assertCall()",
  },
  {
    id: 266,
    question: "Que vérifie ce code ?\n\nverify(repository).save(user);",
    reponse_f1: "Que save() retourne true",
    reponse_v: "Que save(user) a été appelé",
    reponse_f2: "Que user est enregistré en base",
  },
  {
    id: 267,
    question: "Quelle méthode Mockito permet de simuler une exception ?",
    reponse_f1: "throwException()",
    reponse_v: "thenThrow()",
    reponse_f2: "throwMock()",
  },
  {
    id: 268,
    question:
      "Que fait ce code ?\n\nwhen(repo.findAll()).thenReturn(List.of());",
    reponse_f1: "Vide réellement la base",
    reponse_v: "Le mock renverra une liste vide",
    reponse_f2: "Le test échouera",
  },
  {
    id: 269,
    question: "Quelle annotation démarre tout le contexte Spring Boot ?",
    reponse_f1: "@ContextTest",
    reponse_v: "@SpringBootTest",
    reponse_f2: "@SpringTest",
  },
  {
    id: 270,
    question: "Quelle annotation teste uniquement la couche MVC ?",
    reponse_f1: "@ControllerTest",
    reponse_v: "@WebMvcTest",
    reponse_f2: "@RestControllerTest",
  },
  {
    id: 271,
    question: "Quelle annotation remplace un Bean Spring par un mock ?",
    reponse_f1: "@Mock",
    reponse_v: "@MockBean",
    reponse_f2: "@FakeBean",
  },
  {
    id: 272,
    question: "Quelle annotation injecte MockMvc ?",
    reponse_f1: "@InjectMockMvc",
    reponse_v: "@AutoConfigureMockMvc",
    reponse_f2: "@MockMvcTest",
  },
  {
    id: 273,
    question:
      "Quel objet permet de tester les contrôleurs Spring sans lancer Tomcat ?",
    reponse_f1: "RestTemplate",
    reponse_v: "MockMvc",
    reponse_f2: "WebClient",
  },
  {
    id: 274,
    question: "Que permet de faire MockMvc ?",
    reponse_f1: "Créer une base H2",
    reponse_v: "Exécuter des requêtes HTTP simulées",
    reponse_f2: "Créer des mocks Mockito",
  },
  {
    id: 275,
    question: "Quelle méthode MockMvc exécute une requête GET ?",
    reponse_f1: "mockMvc.get()",
    reponse_v: "mockMvc.perform(get(...))",
    reponse_f2: "mockMvc.request(GET)",
  },
];
