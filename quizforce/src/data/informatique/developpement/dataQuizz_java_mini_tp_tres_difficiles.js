export const dataQuizz_java_mini_tp_tres_difficiles = [
  {
    id: 1,
    question:
      '`Java — post-incrémentation\n\nQuelle valeur est affichée ?\n\nint x = 5;\nint y = x++ + ++x;\nSystem.out.println(x + ":" + y);\n\nRéférence exercice : JAVA-001`',
    reponse_v: "7:12",
    reponse_f1: "6:11",
    reponse_f2: "7:11",
    explication:
      "x++ utilise l'ancienne valeur, puis ++x incrémente avant lecture.",
  },
  {
    id: 2,
    question:
      '`Java — concaténation et priorité\n\nQuelle sortie produit ce code ?\n\nSystem.out.println(1 + 2 + "3" + 4 + 5);\n\nRéférence exercice : JAVA-002`',
    reponse_v: "3345",
    reponse_f1: "12345",
    reponse_f2: "3349",
    explication:
      "1 + 2 est calculé numériquement, puis les opérations deviennent des concaténations.",
  },
  {
    id: 3,
    question:
      "`Java — division entière\n\nQuelle valeur est affichée ?\n\ndouble d = 2 / 2;\nSystem.out.println(d);\n\nRéférence exercice : JAVA-003`",
    reponse_v: "1.0",
    reponse_f1: "1.0 (variante)",
    reponse_f2: "1.0 (autre variante)",
    explication:
      "Les deux opérandes sont int, donc la division entière a lieu avant l'affectation en double.",
  },
  {
    id: 4,
    question:
      '`Java — comparaison de chaînes\n\nQuelle sortie produit ce code ?\n\nString a = "java";\nString b = new String("java");\nSystem.out.println((a == b) + ":" + a.equals(b));\n\nRéférence exercice : JAVA-004`',
    reponse_v: "false:true",
    reponse_f1: "true:true",
    reponse_f2: "false:false",
    explication: "== compare les références ; equals compare le contenu.",
  },
  {
    id: 5,
    question:
      '`Java — String immuable\n\nQuelle sortie produit ce code ?\n\nString s = "abc";\ns.concat("def");\nSystem.out.println(s);\n\nRéférence exercice : JAVA-005`',
    reponse_v: "abc",
    reponse_f1: "abcdef",
    reponse_f2: "Compilation impossible",
    explication:
      "String est immuable ; concat retourne une nouvelle chaîne qui n'est pas réaffectée.",
  },
  {
    id: 6,
    question:
      '`Java — switch expression\n\nQuelle valeur reçoit result ?\n\nint n = 2;\nString result = switch (n) {\n    case 1 -> "A";\n    case 2, 3 -> "B";\n    default -> "C";\n};\n\nRéférence exercice : JAVA-006`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "C",
    explication: "La valeur 2 correspond au groupe case 2, 3.",
  },
  {
    id: 7,
    question:
      "`Java — opérateur ternaire et promotion\n\nQuel est le type de la variable x ?\n\nvar x = true ? 1 : 2.0;\n\nRéférence exercice : JAVA-007`",
    reponse_v: "double",
    reponse_f1: "int",
    reponse_f2: "Number",
    explication:
      "Le ternaire applique une promotion numérique commune vers double.",
  },
  {
    id: 8,
    question:
      "`Java — Unicode et char\n\nQuelle valeur est affichée ?\n\nchar c = 'A';\nc += 2;\nSystem.out.println(c);\n\nRéférence exercice : JAVA-008`",
    reponse_v: "C",
    reponse_f1: "67",
    reponse_f2: "Compilation impossible",
    explication:
      "L'opérateur composé effectue la conversion implicite vers char après l'addition.",
  },
  {
    id: 9,
    question:
      "`Java — overflow entier\n\nQuelle valeur est affichée ?\n\nint x = Integer.MAX_VALUE;\nx++;\nSystem.out.println(x);\n\nRéférence exercice : JAVA-009`",
    reponse_v: "-2147483648",
    reponse_f1: "2147483648",
    reponse_f2: "ArithmeticException",
    explication:
      "Le dépassement d'un int provoque un retour modulo 2^32, sans exception.",
  },
  {
    id: 10,
    question:
      '`Java — promotions numériques\n\nQuel est le résultat de ce code ?\n\npublic class Test {\n    public static void main(String[] args) {\n        byte a = 5;\n        byte b = 2;\n        var c = a + b;\n        System.out.println(((Object) c).getClass().getSimpleName() + ":" + c);\n    }\n}\n\nRéférence exercice : JAVA-010`',
    reponse_v: "Integer:7",
    reponse_f1: "Byte:7",
    reponse_f2: "Short:7",
    explication:
      "En Java, les opérandes byte sont promues en int lors d'une addition.",
  },
  {
    id: 11,
    question:
      '`Java — post-incrémentation\n\nQuelle valeur est affichée ?\n\nint x = 8;\nint y = x++ + ++x;\nSystem.out.println(x + ":" + y);\n\nRéférence exercice : JAVA-011`',
    reponse_v: "10:18",
    reponse_f1: "9:17",
    reponse_f2: "10:17",
    explication:
      "x++ utilise l'ancienne valeur, puis ++x incrémente avant lecture.",
  },
  {
    id: 12,
    question:
      '`Java — concaténation et priorité\n\nQuelle sortie produit ce code ?\n\nSystem.out.println(1 + 2 + "3" + 4 + 5);\n\nRéférence exercice : JAVA-012`',
    reponse_v: "3345",
    reponse_f1: "12345",
    reponse_f2: "3349",
    explication:
      "1 + 2 est calculé numériquement, puis les opérations deviennent des concaténations.",
  },
  {
    id: 13,
    question:
      "`Java — division entière\n\nQuelle valeur est affichée ?\n\ndouble d = 5 / 3;\nSystem.out.println(d);\n\nRéférence exercice : JAVA-013`",
    reponse_v: "1.0",
    reponse_f1: "1.6666666666666667",
    reponse_f2: "1.67",
    explication:
      "Les deux opérandes sont int, donc la division entière a lieu avant l'affectation en double.",
  },
  {
    id: 14,
    question:
      '`Java — comparaison de chaînes\n\nQuelle sortie produit ce code ?\n\nString a = "java";\nString b = new String("java");\nSystem.out.println((a == b) + ":" + a.equals(b));\n\nRéférence exercice : JAVA-014`',
    reponse_v: "false:true",
    reponse_f1: "true:true",
    reponse_f2: "false:false",
    explication: "== compare les références ; equals compare le contenu.",
  },
  {
    id: 15,
    question:
      '`Java — String immuable\n\nQuelle sortie produit ce code ?\n\nString s = "abc";\ns.concat("def");\nSystem.out.println(s);\n\nRéférence exercice : JAVA-015`',
    reponse_v: "abc",
    reponse_f1: "abcdef",
    reponse_f2: "Compilation impossible",
    explication:
      "String est immuable ; concat retourne une nouvelle chaîne qui n'est pas réaffectée.",
  },
  {
    id: 16,
    question:
      '`Java — switch expression\n\nQuelle valeur reçoit result ?\n\nint n = 2;\nString result = switch (n) {\n    case 1 -> "A";\n    case 2, 3 -> "B";\n    default -> "C";\n};\n\nRéférence exercice : JAVA-016`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "C",
    explication: "La valeur 2 correspond au groupe case 2, 3.",
  },
  {
    id: 17,
    question:
      "`Java — opérateur ternaire et promotion\n\nQuel est le type de la variable x ?\n\nvar x = true ? 1 : 2.0;\n\nRéférence exercice : JAVA-017`",
    reponse_v: "double",
    reponse_f1: "int",
    reponse_f2: "Number",
    explication:
      "Le ternaire applique une promotion numérique commune vers double.",
  },
  {
    id: 18,
    question:
      "`Java — Unicode et char\n\nQuelle valeur est affichée ?\n\nchar c = 'A';\nc += 2;\nSystem.out.println(c);\n\nRéférence exercice : JAVA-018`",
    reponse_v: "C",
    reponse_f1: "67",
    reponse_f2: "Compilation impossible",
    explication:
      "L'opérateur composé effectue la conversion implicite vers char après l'addition.",
  },
  {
    id: 19,
    question:
      "`Java — overflow entier\n\nQuelle valeur est affichée ?\n\nint x = Integer.MAX_VALUE;\nx++;\nSystem.out.println(x);\n\nRéférence exercice : JAVA-019`",
    reponse_v: "-2147483648",
    reponse_f1: "2147483648",
    reponse_f2: "ArithmeticException",
    explication:
      "Le dépassement d'un int provoque un retour modulo 2^32, sans exception.",
  },
  {
    id: 20,
    question:
      '`Java — promotions numériques\n\nQuel est le résultat de ce code ?\n\npublic class Test {\n    public static void main(String[] args) {\n        byte a = 8;\n        byte b = 3;\n        var c = a + b;\n        System.out.println(((Object) c).getClass().getSimpleName() + ":" + c);\n    }\n}\n\nRéférence exercice : JAVA-020`',
    reponse_v: "Integer:11",
    reponse_f1: "Byte:11",
    reponse_f2: "Short:11",
    explication:
      "En Java, les opérandes byte sont promues en int lors d'une addition.",
  },
  {
    id: 21,
    question:
      '`Java — post-incrémentation\n\nQuelle valeur est affichée ?\n\nint x = 2;\nint y = x++ + ++x;\nSystem.out.println(x + ":" + y);\n\nRéférence exercice : JAVA-021`',
    reponse_v: "4:6",
    reponse_f1: "3:5",
    reponse_f2: "4:5",
    explication:
      "x++ utilise l'ancienne valeur, puis ++x incrémente avant lecture.",
  },
  {
    id: 22,
    question:
      '`Java — concaténation et priorité\n\nQuelle sortie produit ce code ?\n\nSystem.out.println(1 + 2 + "3" + 4 + 5);\n\nRéférence exercice : JAVA-022`',
    reponse_v: "3345",
    reponse_f1: "12345",
    reponse_f2: "3349",
    explication:
      "1 + 2 est calculé numériquement, puis les opérations deviennent des concaténations.",
  },
  {
    id: 23,
    question:
      "`Java — division entière\n\nQuelle valeur est affichée ?\n\ndouble d = 8 / 4;\nSystem.out.println(d);\n\nRéférence exercice : JAVA-023`",
    reponse_v: "2.0",
    reponse_f1: "2.0 (variante)",
    reponse_f2: "2.0 (autre variante)",
    explication:
      "Les deux opérandes sont int, donc la division entière a lieu avant l'affectation en double.",
  },
  {
    id: 24,
    question:
      '`Java — comparaison de chaînes\n\nQuelle sortie produit ce code ?\n\nString a = "java";\nString b = new String("java");\nSystem.out.println((a == b) + ":" + a.equals(b));\n\nRéférence exercice : JAVA-024`',
    reponse_v: "false:true",
    reponse_f1: "true:true",
    reponse_f2: "false:false",
    explication: "== compare les références ; equals compare le contenu.",
  },
  {
    id: 25,
    question:
      '`Java — String immuable\n\nQuelle sortie produit ce code ?\n\nString s = "abc";\ns.concat("def");\nSystem.out.println(s);\n\nRéférence exercice : JAVA-025`',
    reponse_v: "abc",
    reponse_f1: "abcdef",
    reponse_f2: "Compilation impossible",
    explication:
      "String est immuable ; concat retourne une nouvelle chaîne qui n'est pas réaffectée.",
  },
  {
    id: 26,
    question:
      '`Java — switch expression\n\nQuelle valeur reçoit result ?\n\nint n = 2;\nString result = switch (n) {\n    case 1 -> "A";\n    case 2, 3 -> "B";\n    default -> "C";\n};\n\nRéférence exercice : JAVA-026`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "C",
    explication: "La valeur 2 correspond au groupe case 2, 3.",
  },
  {
    id: 27,
    question:
      "`Java — opérateur ternaire et promotion\n\nQuel est le type de la variable x ?\n\nvar x = true ? 1 : 2.0;\n\nRéférence exercice : JAVA-027`",
    reponse_v: "double",
    reponse_f1: "int",
    reponse_f2: "Number",
    explication:
      "Le ternaire applique une promotion numérique commune vers double.",
  },
  {
    id: 28,
    question:
      "`Java — Unicode et char\n\nQuelle valeur est affichée ?\n\nchar c = 'A';\nc += 2;\nSystem.out.println(c);\n\nRéférence exercice : JAVA-028`",
    reponse_v: "C",
    reponse_f1: "67",
    reponse_f2: "Compilation impossible",
    explication:
      "L'opérateur composé effectue la conversion implicite vers char après l'addition.",
  },
  {
    id: 29,
    question:
      "`Java — overflow entier\n\nQuelle valeur est affichée ?\n\nint x = Integer.MAX_VALUE;\nx++;\nSystem.out.println(x);\n\nRéférence exercice : JAVA-029`",
    reponse_v: "-2147483648",
    reponse_f1: "2147483648",
    reponse_f2: "ArithmeticException",
    explication:
      "Le dépassement d'un int provoque un retour modulo 2^32, sans exception.",
  },
  {
    id: 30,
    question:
      '`Java — promotions numériques\n\nQuel est le résultat de ce code ?\n\npublic class Test {\n    public static void main(String[] args) {\n        byte a = 2;\n        byte b = 4;\n        var c = a + b;\n        System.out.println(((Object) c).getClass().getSimpleName() + ":" + c);\n    }\n}\n\nRéférence exercice : JAVA-030`',
    reponse_v: "Integer:6",
    reponse_f1: "Byte:6",
    reponse_f2: "Short:6",
    explication:
      "En Java, les opérandes byte sont promues en int lors d'une addition.",
  },
  {
    id: 31,
    question:
      '`Java — post-incrémentation\n\nQuelle valeur est affichée ?\n\nint x = 5;\nint y = x++ + ++x;\nSystem.out.println(x + ":" + y);\n\nRéférence exercice : JAVA-031`',
    reponse_v: "7:12",
    reponse_f1: "6:11",
    reponse_f2: "7:11",
    explication:
      "x++ utilise l'ancienne valeur, puis ++x incrémente avant lecture.",
  },
  {
    id: 32,
    question:
      '`Java — concaténation et priorité\n\nQuelle sortie produit ce code ?\n\nSystem.out.println(1 + 2 + "3" + 4 + 5);\n\nRéférence exercice : JAVA-032`',
    reponse_v: "3345",
    reponse_f1: "12345",
    reponse_f2: "3349",
    explication:
      "1 + 2 est calculé numériquement, puis les opérations deviennent des concaténations.",
  },
  {
    id: 33,
    question:
      "`Java — division entière\n\nQuelle valeur est affichée ?\n\ndouble d = 2 / 5;\nSystem.out.println(d);\n\nRéférence exercice : JAVA-033`",
    reponse_v: "0.0",
    reponse_f1: "0.4",
    reponse_f2: "0.4 (autre variante)",
    explication:
      "Les deux opérandes sont int, donc la division entière a lieu avant l'affectation en double.",
  },
  {
    id: 34,
    question:
      '`Java — comparaison de chaînes\n\nQuelle sortie produit ce code ?\n\nString a = "java";\nString b = new String("java");\nSystem.out.println((a == b) + ":" + a.equals(b));\n\nRéférence exercice : JAVA-034`',
    reponse_v: "false:true",
    reponse_f1: "true:true",
    reponse_f2: "false:false",
    explication: "== compare les références ; equals compare le contenu.",
  },
  {
    id: 35,
    question:
      '`Java — String immuable\n\nQuelle sortie produit ce code ?\n\nString s = "abc";\ns.concat("def");\nSystem.out.println(s);\n\nRéférence exercice : JAVA-035`',
    reponse_v: "abc",
    reponse_f1: "abcdef",
    reponse_f2: "Compilation impossible",
    explication:
      "String est immuable ; concat retourne une nouvelle chaîne qui n'est pas réaffectée.",
  },
  {
    id: 36,
    question:
      '`Java — switch expression\n\nQuelle valeur reçoit result ?\n\nint n = 2;\nString result = switch (n) {\n    case 1 -> "A";\n    case 2, 3 -> "B";\n    default -> "C";\n};\n\nRéférence exercice : JAVA-036`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "C",
    explication: "La valeur 2 correspond au groupe case 2, 3.",
  },
  {
    id: 37,
    question:
      "`Java — opérateur ternaire et promotion\n\nQuel est le type de la variable x ?\n\nvar x = true ? 1 : 2.0;\n\nRéférence exercice : JAVA-037`",
    reponse_v: "double",
    reponse_f1: "int",
    reponse_f2: "Number",
    explication:
      "Le ternaire applique une promotion numérique commune vers double.",
  },
  {
    id: 38,
    question:
      "`Java — Unicode et char\n\nQuelle valeur est affichée ?\n\nchar c = 'A';\nc += 2;\nSystem.out.println(c);\n\nRéférence exercice : JAVA-038`",
    reponse_v: "C",
    reponse_f1: "67",
    reponse_f2: "Compilation impossible",
    explication:
      "L'opérateur composé effectue la conversion implicite vers char après l'addition.",
  },
  {
    id: 39,
    question:
      "`Java — overflow entier\n\nQuelle valeur est affichée ?\n\nint x = Integer.MAX_VALUE;\nx++;\nSystem.out.println(x);\n\nRéférence exercice : JAVA-039`",
    reponse_v: "-2147483648",
    reponse_f1: "2147483648",
    reponse_f2: "ArithmeticException",
    explication:
      "Le dépassement d'un int provoque un retour modulo 2^32, sans exception.",
  },
  {
    id: 40,
    question:
      '`Java — promotions numériques\n\nQuel est le résultat de ce code ?\n\npublic class Test {\n    public static void main(String[] args) {\n        byte a = 5;\n        byte b = 5;\n        var c = a + b;\n        System.out.println(((Object) c).getClass().getSimpleName() + ":" + c);\n    }\n}\n\nRéférence exercice : JAVA-040`',
    reponse_v: "Integer:10",
    reponse_f1: "Byte:10",
    reponse_f2: "Short:10",
    explication:
      "En Java, les opérandes byte sont promues en int lors d'une addition.",
  },
  {
    id: 41,
    question:
      '`Java — post-incrémentation\n\nQuelle valeur est affichée ?\n\nint x = 8;\nint y = x++ + ++x;\nSystem.out.println(x + ":" + y);\n\nRéférence exercice : JAVA-041`',
    reponse_v: "10:18",
    reponse_f1: "9:17",
    reponse_f2: "10:17",
    explication:
      "x++ utilise l'ancienne valeur, puis ++x incrémente avant lecture.",
  },
  {
    id: 42,
    question:
      '`Java — concaténation et priorité\n\nQuelle sortie produit ce code ?\n\nSystem.out.println(1 + 2 + "3" + 4 + 5);\n\nRéférence exercice : JAVA-042`',
    reponse_v: "3345",
    reponse_f1: "12345",
    reponse_f2: "3349",
    explication:
      "1 + 2 est calculé numériquement, puis les opérations deviennent des concaténations.",
  },
  {
    id: 43,
    question:
      "`Java — division entière\n\nQuelle valeur est affichée ?\n\ndouble d = 5 / 6;\nSystem.out.println(d);\n\nRéférence exercice : JAVA-043`",
    reponse_v: "0.0",
    reponse_f1: "0.8333333333333334",
    reponse_f2: "0.83",
    explication:
      "Les deux opérandes sont int, donc la division entière a lieu avant l'affectation en double.",
  },
  {
    id: 44,
    question:
      '`Java — comparaison de chaînes\n\nQuelle sortie produit ce code ?\n\nString a = "java";\nString b = new String("java");\nSystem.out.println((a == b) + ":" + a.equals(b));\n\nRéférence exercice : JAVA-044`',
    reponse_v: "false:true",
    reponse_f1: "true:true",
    reponse_f2: "false:false",
    explication: "== compare les références ; equals compare le contenu.",
  },
  {
    id: 45,
    question:
      '`Java — String immuable\n\nQuelle sortie produit ce code ?\n\nString s = "abc";\ns.concat("def");\nSystem.out.println(s);\n\nRéférence exercice : JAVA-045`',
    reponse_v: "abc",
    reponse_f1: "abcdef",
    reponse_f2: "Compilation impossible",
    explication:
      "String est immuable ; concat retourne une nouvelle chaîne qui n'est pas réaffectée.",
  },
  {
    id: 46,
    question:
      '`Java — switch expression\n\nQuelle valeur reçoit result ?\n\nint n = 2;\nString result = switch (n) {\n    case 1 -> "A";\n    case 2, 3 -> "B";\n    default -> "C";\n};\n\nRéférence exercice : JAVA-046`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "C",
    explication: "La valeur 2 correspond au groupe case 2, 3.",
  },
  {
    id: 47,
    question:
      "`Java — opérateur ternaire et promotion\n\nQuel est le type de la variable x ?\n\nvar x = true ? 1 : 2.0;\n\nRéférence exercice : JAVA-047`",
    reponse_v: "double",
    reponse_f1: "int",
    reponse_f2: "Number",
    explication:
      "Le ternaire applique une promotion numérique commune vers double.",
  },
  {
    id: 48,
    question:
      "`Java — Unicode et char\n\nQuelle valeur est affichée ?\n\nchar c = 'A';\nc += 2;\nSystem.out.println(c);\n\nRéférence exercice : JAVA-048`",
    reponse_v: "C",
    reponse_f1: "67",
    reponse_f2: "Compilation impossible",
    explication:
      "L'opérateur composé effectue la conversion implicite vers char après l'addition.",
  },
  {
    id: 49,
    question:
      "`Java — overflow entier\n\nQuelle valeur est affichée ?\n\nint x = Integer.MAX_VALUE;\nx++;\nSystem.out.println(x);\n\nRéférence exercice : JAVA-049`",
    reponse_v: "-2147483648",
    reponse_f1: "2147483648",
    reponse_f2: "ArithmeticException",
    explication:
      "Le dépassement d'un int provoque un retour modulo 2^32, sans exception.",
  },
  {
    id: 50,
    question:
      '`Java — promotions numériques\n\nQuel est le résultat de ce code ?\n\npublic class Test {\n    public static void main(String[] args) {\n        byte a = 8;\n        byte b = 6;\n        var c = a + b;\n        System.out.println(((Object) c).getClass().getSimpleName() + ":" + c);\n    }\n}\n\nRéférence exercice : JAVA-050`',
    reponse_v: "Integer:14",
    reponse_f1: "Byte:14",
    reponse_f2: "Short:14",
    explication:
      "En Java, les opérandes byte sont promues en int lors d'une addition.",
  },
  {
    id: 51,
    question:
      '`Java — masquage de méthode statique\n\nQuelle sortie produit ce code ?\n\nclass A {\n    static void f() { System.out.print("A"); }\n}\nclass B extends A {\n    static void f() { System.out.print("B"); }\n}\nA x = new B();\nx.f();\n\nRéférence exercice : JAVA-051`',
    reponse_v: "A",
    reponse_f1: "B",
    reponse_f2: "Compilation impossible",
    explication:
      "Les méthodes statiques sont masquées et résolues selon le type déclaré de la référence.",
  },
  {
    id: 52,
    question:
      "`Java — accès aux attributs\n\nQuelle sortie produit ce code ?\n\nclass A { int x = 1; }\nclass B extends A { int x = 2; }\n\nA ref = new B();\nSystem.out.println(ref.x);\n\nRéférence exercice : JAVA-052`",
    reponse_v: "1",
    reponse_f1: "2",
    reponse_f2: "Compilation impossible",
    explication:
      "Les champs ne sont pas polymorphes ; l'accès dépend du type déclaré.",
  },
  {
    id: 53,
    question:
      '`Java — appel de constructeur\n\nQuelle sortie produit ce code ?\n\nclass A {\n    A() { System.out.print("A"); }\n}\nclass B extends A {\n    B() { System.out.print("B"); }\n}\nnew B();\n\nRéférence exercice : JAVA-053`',
    reponse_v: "AB",
    reponse_f1: "BA",
    reponse_f2: "B",
    explication:
      "Le constructeur de la superclasse est exécuté avant celui de la sous-classe.",
  },
  {
    id: 54,
    question:
      "`Java — méthode privée\n\nCe code compile-t-il ?\n\nclass A {\n    private void f() {}\n}\nclass B extends A {\n    @Override\n    private void f() {}\n}\n\nRéférence exercice : JAVA-054`",
    reponse_v: "Non, @Override provoque une erreur de compilation",
    reponse_f1: "Oui, B redéfinit f()",
    reponse_f2: "Non, une méthode private est interdite dans B",
    explication:
      "Une méthode private n'est pas héritée ; elle ne peut donc pas être redéfinie.",
  },
  {
    id: 55,
    question:
      "`Java — classe abstraite\n\nQuelle affirmation est correcte ?\n\nabstract class A {\n    abstract void f();\n    void g() {}\n}\n\nRéférence exercice : JAVA-055`",
    reponse_v: "A peut contenir à la fois des méthodes abstraites et concrètes",
    reponse_f1: "Toutes les méthodes de A doivent être abstraites",
    reponse_f2: "A peut être instanciée directement",
    explication:
      "Une classe abstraite peut mélanger méthodes abstraites et concrètes.",
  },
  {
    id: 56,
    question:
      '`Java — méthode default d\'interface\n\nQuelle sortie produit ce code ?\n\ninterface I {\n    default void f() { System.out.print("I"); }\n}\nclass A implements I {}\nnew A().f();\n\nRéférence exercice : JAVA-056`',
    reponse_v: "I",
    reponse_f1: "A",
    reponse_f2: "Compilation impossible",
    explication:
      "La classe hérite de la méthode default si elle ne la redéfinit pas.",
  },
  {
    id: 57,
    question:
      "`Java — conflit de méthodes default\n\nCe code compile-t-il ?\n\ninterface I1 { default void f() {} }\ninterface I2 { default void f() {} }\nclass A implements I1, I2 {}\n\nRéférence exercice : JAVA-057`",
    reponse_v: "Non, A doit redéfinir f()",
    reponse_f1: "Oui, I1 est prioritaire",
    reponse_f2: "Oui, I2 est prioritaire",
    explication:
      "Deux méthodes default incompatibles imposent une résolution explicite dans la classe.",
  },
  {
    id: 58,
    question:
      "`Java — covariante de retour\n\nQuelle redéfinition est valide ?\n\nclass A {\n    Number f() { return 1; }\n}\nclass B extends A {\n    // ?\n}\n\nRéférence exercice : JAVA-058`",
    reponse_v: "Integer f() { return 1; }",
    reponse_f1: "Object f() { return 1; }",
    reponse_f2: "void f() {}",
    explication:
      "Le type de retour d'une redéfinition peut être un sous-type du type original.",
  },
  {
    id: 59,
    question:
      '`Java — instanceof avec pattern matching\n\nQuelle sortie produit ce code ?\n\nObject o = "java";\nif (o instanceof String s && s.length() == 4) {\n    System.out.println(s.toUpperCase());\n}\n\nRéférence exercice : JAVA-059`',
    reponse_v: "JAVA",
    reponse_f1: "java",
    reponse_f2: "Compilation impossible",
    explication:
      "Le pattern variable s est disponible dans la partie droite du && et dans le bloc.",
  },
  {
    id: 60,
    question:
      '`Java — liaison dynamique\n\nQuelle sortie produit ce code ?\n\nclass A {\n    void f() { System.out.print("A"); }\n}\nclass B extends A {\n    @Override void f() { System.out.print("B"); }\n}\nA x = new B();\nx.f();\n\nRéférence exercice : JAVA-060`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "Compilation impossible",
    explication:
      "Les méthodes d'instance redéfinies sont résolues dynamiquement selon le type réel.",
  },
  {
    id: 61,
    question:
      '`Java — masquage de méthode statique\n\nQuelle sortie produit ce code ?\n\nclass A {\n    static void f() { System.out.print("A"); }\n}\nclass B extends A {\n    static void f() { System.out.print("B"); }\n}\nA x = new B();\nx.f();\n\nRéférence exercice : JAVA-061`',
    reponse_v: "A",
    reponse_f1: "B",
    reponse_f2: "Compilation impossible",
    explication:
      "Les méthodes statiques sont masquées et résolues selon le type déclaré de la référence.",
  },
  {
    id: 62,
    question:
      "`Java — accès aux attributs\n\nQuelle sortie produit ce code ?\n\nclass A { int x = 1; }\nclass B extends A { int x = 2; }\n\nA ref = new B();\nSystem.out.println(ref.x);\n\nRéférence exercice : JAVA-062`",
    reponse_v: "1",
    reponse_f1: "2",
    reponse_f2: "Compilation impossible",
    explication:
      "Les champs ne sont pas polymorphes ; l'accès dépend du type déclaré.",
  },
  {
    id: 63,
    question:
      '`Java — appel de constructeur\n\nQuelle sortie produit ce code ?\n\nclass A {\n    A() { System.out.print("A"); }\n}\nclass B extends A {\n    B() { System.out.print("B"); }\n}\nnew B();\n\nRéférence exercice : JAVA-063`',
    reponse_v: "AB",
    reponse_f1: "BA",
    reponse_f2: "B",
    explication:
      "Le constructeur de la superclasse est exécuté avant celui de la sous-classe.",
  },
  {
    id: 64,
    question:
      "`Java — méthode privée\n\nCe code compile-t-il ?\n\nclass A {\n    private void f() {}\n}\nclass B extends A {\n    @Override\n    private void f() {}\n}\n\nRéférence exercice : JAVA-064`",
    reponse_v: "Non, @Override provoque une erreur de compilation",
    reponse_f1: "Oui, B redéfinit f()",
    reponse_f2: "Non, une méthode private est interdite dans B",
    explication:
      "Une méthode private n'est pas héritée ; elle ne peut donc pas être redéfinie.",
  },
  {
    id: 65,
    question:
      "`Java — classe abstraite\n\nQuelle affirmation est correcte ?\n\nabstract class A {\n    abstract void f();\n    void g() {}\n}\n\nRéférence exercice : JAVA-065`",
    reponse_v: "A peut contenir à la fois des méthodes abstraites et concrètes",
    reponse_f1: "Toutes les méthodes de A doivent être abstraites",
    reponse_f2: "A peut être instanciée directement",
    explication:
      "Une classe abstraite peut mélanger méthodes abstraites et concrètes.",
  },
  {
    id: 66,
    question:
      '`Java — méthode default d\'interface\n\nQuelle sortie produit ce code ?\n\ninterface I {\n    default void f() { System.out.print("I"); }\n}\nclass A implements I {}\nnew A().f();\n\nRéférence exercice : JAVA-066`',
    reponse_v: "I",
    reponse_f1: "A",
    reponse_f2: "Compilation impossible",
    explication:
      "La classe hérite de la méthode default si elle ne la redéfinit pas.",
  },
  {
    id: 67,
    question:
      "`Java — conflit de méthodes default\n\nCe code compile-t-il ?\n\ninterface I1 { default void f() {} }\ninterface I2 { default void f() {} }\nclass A implements I1, I2 {}\n\nRéférence exercice : JAVA-067`",
    reponse_v: "Non, A doit redéfinir f()",
    reponse_f1: "Oui, I1 est prioritaire",
    reponse_f2: "Oui, I2 est prioritaire",
    explication:
      "Deux méthodes default incompatibles imposent une résolution explicite dans la classe.",
  },
  {
    id: 68,
    question:
      "`Java — covariante de retour\n\nQuelle redéfinition est valide ?\n\nclass A {\n    Number f() { return 1; }\n}\nclass B extends A {\n    // ?\n}\n\nRéférence exercice : JAVA-068`",
    reponse_v: "Integer f() { return 1; }",
    reponse_f1: "Object f() { return 1; }",
    reponse_f2: "void f() {}",
    explication:
      "Le type de retour d'une redéfinition peut être un sous-type du type original.",
  },
  {
    id: 69,
    question:
      '`Java — instanceof avec pattern matching\n\nQuelle sortie produit ce code ?\n\nObject o = "java";\nif (o instanceof String s && s.length() == 4) {\n    System.out.println(s.toUpperCase());\n}\n\nRéférence exercice : JAVA-069`',
    reponse_v: "JAVA",
    reponse_f1: "java",
    reponse_f2: "Compilation impossible",
    explication:
      "Le pattern variable s est disponible dans la partie droite du && et dans le bloc.",
  },
  {
    id: 70,
    question:
      '`Java — liaison dynamique\n\nQuelle sortie produit ce code ?\n\nclass A {\n    void f() { System.out.print("A"); }\n}\nclass B extends A {\n    @Override void f() { System.out.print("B"); }\n}\nA x = new B();\nx.f();\n\nRéférence exercice : JAVA-070`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "Compilation impossible",
    explication:
      "Les méthodes d'instance redéfinies sont résolues dynamiquement selon le type réel.",
  },
  {
    id: 71,
    question:
      '`Java — masquage de méthode statique\n\nQuelle sortie produit ce code ?\n\nclass A {\n    static void f() { System.out.print("A"); }\n}\nclass B extends A {\n    static void f() { System.out.print("B"); }\n}\nA x = new B();\nx.f();\n\nRéférence exercice : JAVA-071`',
    reponse_v: "A",
    reponse_f1: "B",
    reponse_f2: "Compilation impossible",
    explication:
      "Les méthodes statiques sont masquées et résolues selon le type déclaré de la référence.",
  },
  {
    id: 72,
    question:
      "`Java — accès aux attributs\n\nQuelle sortie produit ce code ?\n\nclass A { int x = 1; }\nclass B extends A { int x = 2; }\n\nA ref = new B();\nSystem.out.println(ref.x);\n\nRéférence exercice : JAVA-072`",
    reponse_v: "1",
    reponse_f1: "2",
    reponse_f2: "Compilation impossible",
    explication:
      "Les champs ne sont pas polymorphes ; l'accès dépend du type déclaré.",
  },
  {
    id: 73,
    question:
      '`Java — appel de constructeur\n\nQuelle sortie produit ce code ?\n\nclass A {\n    A() { System.out.print("A"); }\n}\nclass B extends A {\n    B() { System.out.print("B"); }\n}\nnew B();\n\nRéférence exercice : JAVA-073`',
    reponse_v: "AB",
    reponse_f1: "BA",
    reponse_f2: "B",
    explication:
      "Le constructeur de la superclasse est exécuté avant celui de la sous-classe.",
  },
  {
    id: 74,
    question:
      "`Java — méthode privée\n\nCe code compile-t-il ?\n\nclass A {\n    private void f() {}\n}\nclass B extends A {\n    @Override\n    private void f() {}\n}\n\nRéférence exercice : JAVA-074`",
    reponse_v: "Non, @Override provoque une erreur de compilation",
    reponse_f1: "Oui, B redéfinit f()",
    reponse_f2: "Non, une méthode private est interdite dans B",
    explication:
      "Une méthode private n'est pas héritée ; elle ne peut donc pas être redéfinie.",
  },
  {
    id: 75,
    question:
      "`Java — classe abstraite\n\nQuelle affirmation est correcte ?\n\nabstract class A {\n    abstract void f();\n    void g() {}\n}\n\nRéférence exercice : JAVA-075`",
    reponse_v: "A peut contenir à la fois des méthodes abstraites et concrètes",
    reponse_f1: "Toutes les méthodes de A doivent être abstraites",
    reponse_f2: "A peut être instanciée directement",
    explication:
      "Une classe abstraite peut mélanger méthodes abstraites et concrètes.",
  },
  {
    id: 76,
    question:
      '`Java — méthode default d\'interface\n\nQuelle sortie produit ce code ?\n\ninterface I {\n    default void f() { System.out.print("I"); }\n}\nclass A implements I {}\nnew A().f();\n\nRéférence exercice : JAVA-076`',
    reponse_v: "I",
    reponse_f1: "A",
    reponse_f2: "Compilation impossible",
    explication:
      "La classe hérite de la méthode default si elle ne la redéfinit pas.",
  },
  {
    id: 77,
    question:
      "`Java — conflit de méthodes default\n\nCe code compile-t-il ?\n\ninterface I1 { default void f() {} }\ninterface I2 { default void f() {} }\nclass A implements I1, I2 {}\n\nRéférence exercice : JAVA-077`",
    reponse_v: "Non, A doit redéfinir f()",
    reponse_f1: "Oui, I1 est prioritaire",
    reponse_f2: "Oui, I2 est prioritaire",
    explication:
      "Deux méthodes default incompatibles imposent une résolution explicite dans la classe.",
  },
  {
    id: 78,
    question:
      "`Java — covariante de retour\n\nQuelle redéfinition est valide ?\n\nclass A {\n    Number f() { return 1; }\n}\nclass B extends A {\n    // ?\n}\n\nRéférence exercice : JAVA-078`",
    reponse_v: "Integer f() { return 1; }",
    reponse_f1: "Object f() { return 1; }",
    reponse_f2: "void f() {}",
    explication:
      "Le type de retour d'une redéfinition peut être un sous-type du type original.",
  },
  {
    id: 79,
    question:
      '`Java — instanceof avec pattern matching\n\nQuelle sortie produit ce code ?\n\nObject o = "java";\nif (o instanceof String s && s.length() == 4) {\n    System.out.println(s.toUpperCase());\n}\n\nRéférence exercice : JAVA-079`',
    reponse_v: "JAVA",
    reponse_f1: "java",
    reponse_f2: "Compilation impossible",
    explication:
      "Le pattern variable s est disponible dans la partie droite du && et dans le bloc.",
  },
  {
    id: 80,
    question:
      '`Java — liaison dynamique\n\nQuelle sortie produit ce code ?\n\nclass A {\n    void f() { System.out.print("A"); }\n}\nclass B extends A {\n    @Override void f() { System.out.print("B"); }\n}\nA x = new B();\nx.f();\n\nRéférence exercice : JAVA-080`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "Compilation impossible",
    explication:
      "Les méthodes d'instance redéfinies sont résolues dynamiquement selon le type réel.",
  },
  {
    id: 81,
    question:
      '`Java — masquage de méthode statique\n\nQuelle sortie produit ce code ?\n\nclass A {\n    static void f() { System.out.print("A"); }\n}\nclass B extends A {\n    static void f() { System.out.print("B"); }\n}\nA x = new B();\nx.f();\n\nRéférence exercice : JAVA-081`',
    reponse_v: "A",
    reponse_f1: "B",
    reponse_f2: "Compilation impossible",
    explication:
      "Les méthodes statiques sont masquées et résolues selon le type déclaré de la référence.",
  },
  {
    id: 82,
    question:
      "`Java — accès aux attributs\n\nQuelle sortie produit ce code ?\n\nclass A { int x = 1; }\nclass B extends A { int x = 2; }\n\nA ref = new B();\nSystem.out.println(ref.x);\n\nRéférence exercice : JAVA-082`",
    reponse_v: "1",
    reponse_f1: "2",
    reponse_f2: "Compilation impossible",
    explication:
      "Les champs ne sont pas polymorphes ; l'accès dépend du type déclaré.",
  },
  {
    id: 83,
    question:
      '`Java — appel de constructeur\n\nQuelle sortie produit ce code ?\n\nclass A {\n    A() { System.out.print("A"); }\n}\nclass B extends A {\n    B() { System.out.print("B"); }\n}\nnew B();\n\nRéférence exercice : JAVA-083`',
    reponse_v: "AB",
    reponse_f1: "BA",
    reponse_f2: "B",
    explication:
      "Le constructeur de la superclasse est exécuté avant celui de la sous-classe.",
  },
  {
    id: 84,
    question:
      "`Java — méthode privée\n\nCe code compile-t-il ?\n\nclass A {\n    private void f() {}\n}\nclass B extends A {\n    @Override\n    private void f() {}\n}\n\nRéférence exercice : JAVA-084`",
    reponse_v: "Non, @Override provoque une erreur de compilation",
    reponse_f1: "Oui, B redéfinit f()",
    reponse_f2: "Non, une méthode private est interdite dans B",
    explication:
      "Une méthode private n'est pas héritée ; elle ne peut donc pas être redéfinie.",
  },
  {
    id: 85,
    question:
      "`Java — classe abstraite\n\nQuelle affirmation est correcte ?\n\nabstract class A {\n    abstract void f();\n    void g() {}\n}\n\nRéférence exercice : JAVA-085`",
    reponse_v: "A peut contenir à la fois des méthodes abstraites et concrètes",
    reponse_f1: "Toutes les méthodes de A doivent être abstraites",
    reponse_f2: "A peut être instanciée directement",
    explication:
      "Une classe abstraite peut mélanger méthodes abstraites et concrètes.",
  },
  {
    id: 86,
    question:
      '`Java — méthode default d\'interface\n\nQuelle sortie produit ce code ?\n\ninterface I {\n    default void f() { System.out.print("I"); }\n}\nclass A implements I {}\nnew A().f();\n\nRéférence exercice : JAVA-086`',
    reponse_v: "I",
    reponse_f1: "A",
    reponse_f2: "Compilation impossible",
    explication:
      "La classe hérite de la méthode default si elle ne la redéfinit pas.",
  },
  {
    id: 87,
    question:
      "`Java — conflit de méthodes default\n\nCe code compile-t-il ?\n\ninterface I1 { default void f() {} }\ninterface I2 { default void f() {} }\nclass A implements I1, I2 {}\n\nRéférence exercice : JAVA-087`",
    reponse_v: "Non, A doit redéfinir f()",
    reponse_f1: "Oui, I1 est prioritaire",
    reponse_f2: "Oui, I2 est prioritaire",
    explication:
      "Deux méthodes default incompatibles imposent une résolution explicite dans la classe.",
  },
  {
    id: 88,
    question:
      "`Java — covariante de retour\n\nQuelle redéfinition est valide ?\n\nclass A {\n    Number f() { return 1; }\n}\nclass B extends A {\n    // ?\n}\n\nRéférence exercice : JAVA-088`",
    reponse_v: "Integer f() { return 1; }",
    reponse_f1: "Object f() { return 1; }",
    reponse_f2: "void f() {}",
    explication:
      "Le type de retour d'une redéfinition peut être un sous-type du type original.",
  },
  {
    id: 89,
    question:
      '`Java — instanceof avec pattern matching\n\nQuelle sortie produit ce code ?\n\nObject o = "java";\nif (o instanceof String s && s.length() == 4) {\n    System.out.println(s.toUpperCase());\n}\n\nRéférence exercice : JAVA-089`',
    reponse_v: "JAVA",
    reponse_f1: "java",
    reponse_f2: "Compilation impossible",
    explication:
      "Le pattern variable s est disponible dans la partie droite du && et dans le bloc.",
  },
  {
    id: 90,
    question:
      '`Java — liaison dynamique\n\nQuelle sortie produit ce code ?\n\nclass A {\n    void f() { System.out.print("A"); }\n}\nclass B extends A {\n    @Override void f() { System.out.print("B"); }\n}\nA x = new B();\nx.f();\n\nRéférence exercice : JAVA-090`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "Compilation impossible",
    explication:
      "Les méthodes d'instance redéfinies sont résolues dynamiquement selon le type réel.",
  },
  {
    id: 91,
    question:
      '`Java — masquage de méthode statique\n\nQuelle sortie produit ce code ?\n\nclass A {\n    static void f() { System.out.print("A"); }\n}\nclass B extends A {\n    static void f() { System.out.print("B"); }\n}\nA x = new B();\nx.f();\n\nRéférence exercice : JAVA-091`',
    reponse_v: "A",
    reponse_f1: "B",
    reponse_f2: "Compilation impossible",
    explication:
      "Les méthodes statiques sont masquées et résolues selon le type déclaré de la référence.",
  },
  {
    id: 92,
    question:
      "`Java — accès aux attributs\n\nQuelle sortie produit ce code ?\n\nclass A { int x = 1; }\nclass B extends A { int x = 2; }\n\nA ref = new B();\nSystem.out.println(ref.x);\n\nRéférence exercice : JAVA-092`",
    reponse_v: "1",
    reponse_f1: "2",
    reponse_f2: "Compilation impossible",
    explication:
      "Les champs ne sont pas polymorphes ; l'accès dépend du type déclaré.",
  },
  {
    id: 93,
    question:
      '`Java — appel de constructeur\n\nQuelle sortie produit ce code ?\n\nclass A {\n    A() { System.out.print("A"); }\n}\nclass B extends A {\n    B() { System.out.print("B"); }\n}\nnew B();\n\nRéférence exercice : JAVA-093`',
    reponse_v: "AB",
    reponse_f1: "BA",
    reponse_f2: "B",
    explication:
      "Le constructeur de la superclasse est exécuté avant celui de la sous-classe.",
  },
  {
    id: 94,
    question:
      "`Java — méthode privée\n\nCe code compile-t-il ?\n\nclass A {\n    private void f() {}\n}\nclass B extends A {\n    @Override\n    private void f() {}\n}\n\nRéférence exercice : JAVA-094`",
    reponse_v: "Non, @Override provoque une erreur de compilation",
    reponse_f1: "Oui, B redéfinit f()",
    reponse_f2: "Non, une méthode private est interdite dans B",
    explication:
      "Une méthode private n'est pas héritée ; elle ne peut donc pas être redéfinie.",
  },
  {
    id: 95,
    question:
      "`Java — classe abstraite\n\nQuelle affirmation est correcte ?\n\nabstract class A {\n    abstract void f();\n    void g() {}\n}\n\nRéférence exercice : JAVA-095`",
    reponse_v: "A peut contenir à la fois des méthodes abstraites et concrètes",
    reponse_f1: "Toutes les méthodes de A doivent être abstraites",
    reponse_f2: "A peut être instanciée directement",
    explication:
      "Une classe abstraite peut mélanger méthodes abstraites et concrètes.",
  },
  {
    id: 96,
    question:
      '`Java — méthode default d\'interface\n\nQuelle sortie produit ce code ?\n\ninterface I {\n    default void f() { System.out.print("I"); }\n}\nclass A implements I {}\nnew A().f();\n\nRéférence exercice : JAVA-096`',
    reponse_v: "I",
    reponse_f1: "A",
    reponse_f2: "Compilation impossible",
    explication:
      "La classe hérite de la méthode default si elle ne la redéfinit pas.",
  },
  {
    id: 97,
    question:
      "`Java — conflit de méthodes default\n\nCe code compile-t-il ?\n\ninterface I1 { default void f() {} }\ninterface I2 { default void f() {} }\nclass A implements I1, I2 {}\n\nRéférence exercice : JAVA-097`",
    reponse_v: "Non, A doit redéfinir f()",
    reponse_f1: "Oui, I1 est prioritaire",
    reponse_f2: "Oui, I2 est prioritaire",
    explication:
      "Deux méthodes default incompatibles imposent une résolution explicite dans la classe.",
  },
  {
    id: 98,
    question:
      "`Java — covariante de retour\n\nQuelle redéfinition est valide ?\n\nclass A {\n    Number f() { return 1; }\n}\nclass B extends A {\n    // ?\n}\n\nRéférence exercice : JAVA-098`",
    reponse_v: "Integer f() { return 1; }",
    reponse_f1: "Object f() { return 1; }",
    reponse_f2: "void f() {}",
    explication:
      "Le type de retour d'une redéfinition peut être un sous-type du type original.",
  },
  {
    id: 99,
    question:
      '`Java — instanceof avec pattern matching\n\nQuelle sortie produit ce code ?\n\nObject o = "java";\nif (o instanceof String s && s.length() == 4) {\n    System.out.println(s.toUpperCase());\n}\n\nRéférence exercice : JAVA-099`',
    reponse_v: "JAVA",
    reponse_f1: "java",
    reponse_f2: "Compilation impossible",
    explication:
      "Le pattern variable s est disponible dans la partie droite du && et dans le bloc.",
  },
  {
    id: 100,
    question:
      '`Java — liaison dynamique\n\nQuelle sortie produit ce code ?\n\nclass A {\n    void f() { System.out.print("A"); }\n}\nclass B extends A {\n    @Override void f() { System.out.print("B"); }\n}\nA x = new B();\nx.f();\n\nRéférence exercice : JAVA-100`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "Compilation impossible",
    explication:
      "Les méthodes d'instance redéfinies sont résolues dynamiquement selon le type réel.",
  },
  {
    id: 101,
    question:
      "`Java — wildcard super\n\nQuelle opération est autorisée ?\n\nList<? super Integer> list = new ArrayList<Number>();\n\nRéférence exercice : JAVA-101`",
    reponse_v: "list.add(42);",
    reponse_f1: "Integer x = list.get(0);",
    reponse_f2: "Double d = list.get(0);",
    explication:
      "Avec ? super Integer, on peut ajouter des Integer, mais la lecture sûre se fait comme Object.",
  },
  {
    id: 102,
    question:
      "`Java — effacement de type\n\nQuelle affirmation est correcte ?\n\nList<String> a = new ArrayList<>();\nList<Integer> b = new ArrayList<>();\n\nRéférence exercice : JAVA-102`",
    reponse_v: "a et b ont la même classe à l'exécution",
    reponse_f1: "a et b ont des classes différentes à l'exécution",
    reponse_f2: "Le code ne compile pas à cause de l'effacement",
    explication:
      "L'effacement de type supprime les paramètres génériques à l'exécution.",
  },
  {
    id: 103,
    question:
      "`Java — HashSet et equals/hashCode\n\nQuel comportement est garanti si equals est redéfini mais hashCode ne l'est pas correctement ?\n\nRéférence exercice : JAVA-103`",
    reponse_v:
      "Deux objets égaux peuvent se retrouver dans des compartiments différents",
    reponse_f1: "HashSet appellera toujours equals avant hashCode",
    reponse_f2: "HashSet interdira automatiquement le second objet",
    explication:
      "Le contrat exige que deux objets égaux aient le même hashCode.",
  },
  {
    id: 104,
    question:
      "`Java — LinkedHashMap\n\nQuelle caractéristique distingue LinkedHashMap de HashMap ?\n\nRéférence exercice : JAVA-104`",
    reponse_v: "Elle conserve un ordre d'itération prévisible",
    reponse_f1: "Elle trie toujours les clés naturellement",
    reponse_f2: "Elle interdit les valeurs null",
    explication:
      "LinkedHashMap maintient l'ordre d'insertion, ou d'accès selon sa configuration.",
  },
  {
    id: 105,
    question:
      '`Java — TreeSet\n\nQue se passe-t-il ici ?\n\nSet<String> s = new TreeSet<>();\ns.add("b");\ns.add("a");\nSystem.out.println(s);\n\nRéférence exercice : JAVA-105`',
    reponse_v: "[a, b]",
    reponse_f1: "[b, a]",
    reponse_f2: "Ordre indéterminé",
    explication: "TreeSet trie les éléments selon leur ordre naturel.",
  },
  {
    id: 106,
    question:
      "`Java — modification pendant itération\n\nQue provoque ce code ?\n\nList<Integer> l = new ArrayList<>(List.of(1,2,3));\nfor (Integer x : l) {\n    if (x == 2) l.remove(x);\n}\n\nRéférence exercice : JAVA-106`",
    reponse_v: "ConcurrentModificationException",
    reponse_f1: "[1, 3] sans exception",
    reponse_f2: "IndexOutOfBoundsException",
    explication:
      "La boucle for-each utilise un itérateur fail-fast ; modifier directement la liste est interdit.",
  },
  {
    id: 107,
    question:
      "`Java — méthode remove sur List<Integer>\n\nQue fait ce code ?\n\nList<Integer> l = new ArrayList<>(List.of(10, 20, 30));\nl.remove(1);\nSystem.out.println(l);\n\nRéférence exercice : JAVA-107`",
    reponse_v: "[10, 30]",
    reponse_f1: "[10, 20, 30]",
    reponse_f2: "[20, 30]",
    explication: "remove(int) supprime l'élément à l'indice 1.",
  },
  {
    id: 108,
    question:
      '`Java — Map.computeIfAbsent\n\nQuelle sortie produit ce code ?\n\nMap<String, List<Integer>> m = new HashMap<>();\nm.computeIfAbsent("a", k -> new ArrayList<>()).add(1);\nSystem.out.println(m.get("a"));\n\nRéférence exercice : JAVA-108`',
    reponse_v: "[1]",
    reponse_f1: "null",
    reponse_f2: "Compilation impossible",
    explication: "computeIfAbsent crée puis associe la liste avant l'ajout.",
  },
  {
    id: 109,
    question:
      "`Java — record et égalité\n\nQuelle affirmation est correcte ?\n\nrecord Point(int x, int y) {}\n\nRéférence exercice : JAVA-109`",
    reponse_v: "equals et hashCode sont générés à partir des composants",
    reponse_f1: "equals compare uniquement les références",
    reponse_f2: "Les composants du record sont mutables",
    explication:
      "Les records génèrent une égalité structurelle basée sur leurs composants.",
  },
  {
    id: 110,
    question:
      "`Java — invariance des génériques\n\nQuelle instruction compile ?\n\nList<Integer> ints = new ArrayList<>();\n\nRéférence exercice : JAVA-110`",
    reponse_v: "List<? extends Number> nums = ints;",
    reponse_f1: "List<Number> nums = ints;",
    reponse_f2: "List<Object> nums = ints;",
    explication:
      "Les génériques Java sont invariants ; un wildcard extends permet une vue en lecture.",
  },
  {
    id: 111,
    question:
      "`Java — wildcard super\n\nQuelle opération est autorisée ?\n\nList<? super Integer> list = new ArrayList<Number>();\n\nRéférence exercice : JAVA-111`",
    reponse_v: "list.add(42);",
    reponse_f1: "Integer x = list.get(0);",
    reponse_f2: "Double d = list.get(0);",
    explication:
      "Avec ? super Integer, on peut ajouter des Integer, mais la lecture sûre se fait comme Object.",
  },
  {
    id: 112,
    question:
      "`Java — effacement de type\n\nQuelle affirmation est correcte ?\n\nList<String> a = new ArrayList<>();\nList<Integer> b = new ArrayList<>();\n\nRéférence exercice : JAVA-112`",
    reponse_v: "a et b ont la même classe à l'exécution",
    reponse_f1: "a et b ont des classes différentes à l'exécution",
    reponse_f2: "Le code ne compile pas à cause de l'effacement",
    explication:
      "L'effacement de type supprime les paramètres génériques à l'exécution.",
  },
  {
    id: 113,
    question:
      "`Java — HashSet et equals/hashCode\n\nQuel comportement est garanti si equals est redéfini mais hashCode ne l'est pas correctement ?\n\nRéférence exercice : JAVA-113`",
    reponse_v:
      "Deux objets égaux peuvent se retrouver dans des compartiments différents",
    reponse_f1: "HashSet appellera toujours equals avant hashCode",
    reponse_f2: "HashSet interdira automatiquement le second objet",
    explication:
      "Le contrat exige que deux objets égaux aient le même hashCode.",
  },
  {
    id: 114,
    question:
      "`Java — LinkedHashMap\n\nQuelle caractéristique distingue LinkedHashMap de HashMap ?\n\nRéférence exercice : JAVA-114`",
    reponse_v: "Elle conserve un ordre d'itération prévisible",
    reponse_f1: "Elle trie toujours les clés naturellement",
    reponse_f2: "Elle interdit les valeurs null",
    explication:
      "LinkedHashMap maintient l'ordre d'insertion, ou d'accès selon sa configuration.",
  },
  {
    id: 115,
    question:
      '`Java — TreeSet\n\nQue se passe-t-il ici ?\n\nSet<String> s = new TreeSet<>();\ns.add("b");\ns.add("a");\nSystem.out.println(s);\n\nRéférence exercice : JAVA-115`',
    reponse_v: "[a, b]",
    reponse_f1: "[b, a]",
    reponse_f2: "Ordre indéterminé",
    explication: "TreeSet trie les éléments selon leur ordre naturel.",
  },
  {
    id: 116,
    question:
      "`Java — modification pendant itération\n\nQue provoque ce code ?\n\nList<Integer> l = new ArrayList<>(List.of(1,2,3));\nfor (Integer x : l) {\n    if (x == 2) l.remove(x);\n}\n\nRéférence exercice : JAVA-116`",
    reponse_v: "ConcurrentModificationException",
    reponse_f1: "[1, 3] sans exception",
    reponse_f2: "IndexOutOfBoundsException",
    explication:
      "La boucle for-each utilise un itérateur fail-fast ; modifier directement la liste est interdit.",
  },
  {
    id: 117,
    question:
      "`Java — méthode remove sur List<Integer>\n\nQue fait ce code ?\n\nList<Integer> l = new ArrayList<>(List.of(10, 20, 30));\nl.remove(1);\nSystem.out.println(l);\n\nRéférence exercice : JAVA-117`",
    reponse_v: "[10, 30]",
    reponse_f1: "[10, 20, 30]",
    reponse_f2: "[20, 30]",
    explication: "remove(int) supprime l'élément à l'indice 1.",
  },
  {
    id: 118,
    question:
      '`Java — Map.computeIfAbsent\n\nQuelle sortie produit ce code ?\n\nMap<String, List<Integer>> m = new HashMap<>();\nm.computeIfAbsent("a", k -> new ArrayList<>()).add(1);\nSystem.out.println(m.get("a"));\n\nRéférence exercice : JAVA-118`',
    reponse_v: "[1]",
    reponse_f1: "null",
    reponse_f2: "Compilation impossible",
    explication: "computeIfAbsent crée puis associe la liste avant l'ajout.",
  },
  {
    id: 119,
    question:
      "`Java — record et égalité\n\nQuelle affirmation est correcte ?\n\nrecord Point(int x, int y) {}\n\nRéférence exercice : JAVA-119`",
    reponse_v: "equals et hashCode sont générés à partir des composants",
    reponse_f1: "equals compare uniquement les références",
    reponse_f2: "Les composants du record sont mutables",
    explication:
      "Les records génèrent une égalité structurelle basée sur leurs composants.",
  },
  {
    id: 120,
    question:
      "`Java — invariance des génériques\n\nQuelle instruction compile ?\n\nList<Integer> ints = new ArrayList<>();\n\nRéférence exercice : JAVA-120`",
    reponse_v: "List<? extends Number> nums = ints;",
    reponse_f1: "List<Number> nums = ints;",
    reponse_f2: "List<Object> nums = ints;",
    explication:
      "Les génériques Java sont invariants ; un wildcard extends permet une vue en lecture.",
  },
  {
    id: 121,
    question:
      "`Java — wildcard super\n\nQuelle opération est autorisée ?\n\nList<? super Integer> list = new ArrayList<Number>();\n\nRéférence exercice : JAVA-121`",
    reponse_v: "list.add(42);",
    reponse_f1: "Integer x = list.get(0);",
    reponse_f2: "Double d = list.get(0);",
    explication:
      "Avec ? super Integer, on peut ajouter des Integer, mais la lecture sûre se fait comme Object.",
  },
  {
    id: 122,
    question:
      "`Java — effacement de type\n\nQuelle affirmation est correcte ?\n\nList<String> a = new ArrayList<>();\nList<Integer> b = new ArrayList<>();\n\nRéférence exercice : JAVA-122`",
    reponse_v: "a et b ont la même classe à l'exécution",
    reponse_f1: "a et b ont des classes différentes à l'exécution",
    reponse_f2: "Le code ne compile pas à cause de l'effacement",
    explication:
      "L'effacement de type supprime les paramètres génériques à l'exécution.",
  },
  {
    id: 123,
    question:
      "`Java — HashSet et equals/hashCode\n\nQuel comportement est garanti si equals est redéfini mais hashCode ne l'est pas correctement ?\n\nRéférence exercice : JAVA-123`",
    reponse_v:
      "Deux objets égaux peuvent se retrouver dans des compartiments différents",
    reponse_f1: "HashSet appellera toujours equals avant hashCode",
    reponse_f2: "HashSet interdira automatiquement le second objet",
    explication:
      "Le contrat exige que deux objets égaux aient le même hashCode.",
  },
  {
    id: 124,
    question:
      "`Java — LinkedHashMap\n\nQuelle caractéristique distingue LinkedHashMap de HashMap ?\n\nRéférence exercice : JAVA-124`",
    reponse_v: "Elle conserve un ordre d'itération prévisible",
    reponse_f1: "Elle trie toujours les clés naturellement",
    reponse_f2: "Elle interdit les valeurs null",
    explication:
      "LinkedHashMap maintient l'ordre d'insertion, ou d'accès selon sa configuration.",
  },
  {
    id: 125,
    question:
      '`Java — TreeSet\n\nQue se passe-t-il ici ?\n\nSet<String> s = new TreeSet<>();\ns.add("b");\ns.add("a");\nSystem.out.println(s);\n\nRéférence exercice : JAVA-125`',
    reponse_v: "[a, b]",
    reponse_f1: "[b, a]",
    reponse_f2: "Ordre indéterminé",
    explication: "TreeSet trie les éléments selon leur ordre naturel.",
  },
  {
    id: 126,
    question:
      "`Java — modification pendant itération\n\nQue provoque ce code ?\n\nList<Integer> l = new ArrayList<>(List.of(1,2,3));\nfor (Integer x : l) {\n    if (x == 2) l.remove(x);\n}\n\nRéférence exercice : JAVA-126`",
    reponse_v: "ConcurrentModificationException",
    reponse_f1: "[1, 3] sans exception",
    reponse_f2: "IndexOutOfBoundsException",
    explication:
      "La boucle for-each utilise un itérateur fail-fast ; modifier directement la liste est interdit.",
  },
  {
    id: 127,
    question:
      "`Java — méthode remove sur List<Integer>\n\nQue fait ce code ?\n\nList<Integer> l = new ArrayList<>(List.of(10, 20, 30));\nl.remove(1);\nSystem.out.println(l);\n\nRéférence exercice : JAVA-127`",
    reponse_v: "[10, 30]",
    reponse_f1: "[10, 20, 30]",
    reponse_f2: "[20, 30]",
    explication: "remove(int) supprime l'élément à l'indice 1.",
  },
  {
    id: 128,
    question:
      '`Java — Map.computeIfAbsent\n\nQuelle sortie produit ce code ?\n\nMap<String, List<Integer>> m = new HashMap<>();\nm.computeIfAbsent("a", k -> new ArrayList<>()).add(1);\nSystem.out.println(m.get("a"));\n\nRéférence exercice : JAVA-128`',
    reponse_v: "[1]",
    reponse_f1: "null",
    reponse_f2: "Compilation impossible",
    explication: "computeIfAbsent crée puis associe la liste avant l'ajout.",
  },
  {
    id: 129,
    question:
      "`Java — record et égalité\n\nQuelle affirmation est correcte ?\n\nrecord Point(int x, int y) {}\n\nRéférence exercice : JAVA-129`",
    reponse_v: "equals et hashCode sont générés à partir des composants",
    reponse_f1: "equals compare uniquement les références",
    reponse_f2: "Les composants du record sont mutables",
    explication:
      "Les records génèrent une égalité structurelle basée sur leurs composants.",
  },
  {
    id: 130,
    question:
      "`Java — invariance des génériques\n\nQuelle instruction compile ?\n\nList<Integer> ints = new ArrayList<>();\n\nRéférence exercice : JAVA-130`",
    reponse_v: "List<? extends Number> nums = ints;",
    reponse_f1: "List<Number> nums = ints;",
    reponse_f2: "List<Object> nums = ints;",
    explication:
      "Les génériques Java sont invariants ; un wildcard extends permet une vue en lecture.",
  },
  {
    id: 131,
    question:
      "`Java — wildcard super\n\nQuelle opération est autorisée ?\n\nList<? super Integer> list = new ArrayList<Number>();\n\nRéférence exercice : JAVA-131`",
    reponse_v: "list.add(42);",
    reponse_f1: "Integer x = list.get(0);",
    reponse_f2: "Double d = list.get(0);",
    explication:
      "Avec ? super Integer, on peut ajouter des Integer, mais la lecture sûre se fait comme Object.",
  },
  {
    id: 132,
    question:
      "`Java — effacement de type\n\nQuelle affirmation est correcte ?\n\nList<String> a = new ArrayList<>();\nList<Integer> b = new ArrayList<>();\n\nRéférence exercice : JAVA-132`",
    reponse_v: "a et b ont la même classe à l'exécution",
    reponse_f1: "a et b ont des classes différentes à l'exécution",
    reponse_f2: "Le code ne compile pas à cause de l'effacement",
    explication:
      "L'effacement de type supprime les paramètres génériques à l'exécution.",
  },
  {
    id: 133,
    question:
      "`Java — HashSet et equals/hashCode\n\nQuel comportement est garanti si equals est redéfini mais hashCode ne l'est pas correctement ?\n\nRéférence exercice : JAVA-133`",
    reponse_v:
      "Deux objets égaux peuvent se retrouver dans des compartiments différents",
    reponse_f1: "HashSet appellera toujours equals avant hashCode",
    reponse_f2: "HashSet interdira automatiquement le second objet",
    explication:
      "Le contrat exige que deux objets égaux aient le même hashCode.",
  },
  {
    id: 134,
    question:
      "`Java — LinkedHashMap\n\nQuelle caractéristique distingue LinkedHashMap de HashMap ?\n\nRéférence exercice : JAVA-134`",
    reponse_v: "Elle conserve un ordre d'itération prévisible",
    reponse_f1: "Elle trie toujours les clés naturellement",
    reponse_f2: "Elle interdit les valeurs null",
    explication:
      "LinkedHashMap maintient l'ordre d'insertion, ou d'accès selon sa configuration.",
  },
  {
    id: 135,
    question:
      '`Java — TreeSet\n\nQue se passe-t-il ici ?\n\nSet<String> s = new TreeSet<>();\ns.add("b");\ns.add("a");\nSystem.out.println(s);\n\nRéférence exercice : JAVA-135`',
    reponse_v: "[a, b]",
    reponse_f1: "[b, a]",
    reponse_f2: "Ordre indéterminé",
    explication: "TreeSet trie les éléments selon leur ordre naturel.",
  },
  {
    id: 136,
    question:
      "`Java — modification pendant itération\n\nQue provoque ce code ?\n\nList<Integer> l = new ArrayList<>(List.of(1,2,3));\nfor (Integer x : l) {\n    if (x == 2) l.remove(x);\n}\n\nRéférence exercice : JAVA-136`",
    reponse_v: "ConcurrentModificationException",
    reponse_f1: "[1, 3] sans exception",
    reponse_f2: "IndexOutOfBoundsException",
    explication:
      "La boucle for-each utilise un itérateur fail-fast ; modifier directement la liste est interdit.",
  },
  {
    id: 137,
    question:
      "`Java — méthode remove sur List<Integer>\n\nQue fait ce code ?\n\nList<Integer> l = new ArrayList<>(List.of(10, 20, 30));\nl.remove(1);\nSystem.out.println(l);\n\nRéférence exercice : JAVA-137`",
    reponse_v: "[10, 30]",
    reponse_f1: "[10, 20, 30]",
    reponse_f2: "[20, 30]",
    explication: "remove(int) supprime l'élément à l'indice 1.",
  },
  {
    id: 138,
    question:
      '`Java — Map.computeIfAbsent\n\nQuelle sortie produit ce code ?\n\nMap<String, List<Integer>> m = new HashMap<>();\nm.computeIfAbsent("a", k -> new ArrayList<>()).add(1);\nSystem.out.println(m.get("a"));\n\nRéférence exercice : JAVA-138`',
    reponse_v: "[1]",
    reponse_f1: "null",
    reponse_f2: "Compilation impossible",
    explication: "computeIfAbsent crée puis associe la liste avant l'ajout.",
  },
  {
    id: 139,
    question:
      "`Java — record et égalité\n\nQuelle affirmation est correcte ?\n\nrecord Point(int x, int y) {}\n\nRéférence exercice : JAVA-139`",
    reponse_v: "equals et hashCode sont générés à partir des composants",
    reponse_f1: "equals compare uniquement les références",
    reponse_f2: "Les composants du record sont mutables",
    explication:
      "Les records génèrent une égalité structurelle basée sur leurs composants.",
  },
  {
    id: 140,
    question:
      "`Java — invariance des génériques\n\nQuelle instruction compile ?\n\nList<Integer> ints = new ArrayList<>();\n\nRéférence exercice : JAVA-140`",
    reponse_v: "List<? extends Number> nums = ints;",
    reponse_f1: "List<Number> nums = ints;",
    reponse_f2: "List<Object> nums = ints;",
    explication:
      "Les génériques Java sont invariants ; un wildcard extends permet une vue en lecture.",
  },
  {
    id: 141,
    question:
      "`Java — wildcard super\n\nQuelle opération est autorisée ?\n\nList<? super Integer> list = new ArrayList<Number>();\n\nRéférence exercice : JAVA-141`",
    reponse_v: "list.add(42);",
    reponse_f1: "Integer x = list.get(0);",
    reponse_f2: "Double d = list.get(0);",
    explication:
      "Avec ? super Integer, on peut ajouter des Integer, mais la lecture sûre se fait comme Object.",
  },
  {
    id: 142,
    question:
      "`Java — effacement de type\n\nQuelle affirmation est correcte ?\n\nList<String> a = new ArrayList<>();\nList<Integer> b = new ArrayList<>();\n\nRéférence exercice : JAVA-142`",
    reponse_v: "a et b ont la même classe à l'exécution",
    reponse_f1: "a et b ont des classes différentes à l'exécution",
    reponse_f2: "Le code ne compile pas à cause de l'effacement",
    explication:
      "L'effacement de type supprime les paramètres génériques à l'exécution.",
  },
  {
    id: 143,
    question:
      "`Java — HashSet et equals/hashCode\n\nQuel comportement est garanti si equals est redéfini mais hashCode ne l'est pas correctement ?\n\nRéférence exercice : JAVA-143`",
    reponse_v:
      "Deux objets égaux peuvent se retrouver dans des compartiments différents",
    reponse_f1: "HashSet appellera toujours equals avant hashCode",
    reponse_f2: "HashSet interdira automatiquement le second objet",
    explication:
      "Le contrat exige que deux objets égaux aient le même hashCode.",
  },
  {
    id: 144,
    question:
      "`Java — LinkedHashMap\n\nQuelle caractéristique distingue LinkedHashMap de HashMap ?\n\nRéférence exercice : JAVA-144`",
    reponse_v: "Elle conserve un ordre d'itération prévisible",
    reponse_f1: "Elle trie toujours les clés naturellement",
    reponse_f2: "Elle interdit les valeurs null",
    explication:
      "LinkedHashMap maintient l'ordre d'insertion, ou d'accès selon sa configuration.",
  },
  {
    id: 145,
    question:
      '`Java — TreeSet\n\nQue se passe-t-il ici ?\n\nSet<String> s = new TreeSet<>();\ns.add("b");\ns.add("a");\nSystem.out.println(s);\n\nRéférence exercice : JAVA-145`',
    reponse_v: "[a, b]",
    reponse_f1: "[b, a]",
    reponse_f2: "Ordre indéterminé",
    explication: "TreeSet trie les éléments selon leur ordre naturel.",
  },
  {
    id: 146,
    question:
      "`Java — modification pendant itération\n\nQue provoque ce code ?\n\nList<Integer> l = new ArrayList<>(List.of(1,2,3));\nfor (Integer x : l) {\n    if (x == 2) l.remove(x);\n}\n\nRéférence exercice : JAVA-146`",
    reponse_v: "ConcurrentModificationException",
    reponse_f1: "[1, 3] sans exception",
    reponse_f2: "IndexOutOfBoundsException",
    explication:
      "La boucle for-each utilise un itérateur fail-fast ; modifier directement la liste est interdit.",
  },
  {
    id: 147,
    question:
      "`Java — méthode remove sur List<Integer>\n\nQue fait ce code ?\n\nList<Integer> l = new ArrayList<>(List.of(10, 20, 30));\nl.remove(1);\nSystem.out.println(l);\n\nRéférence exercice : JAVA-147`",
    reponse_v: "[10, 30]",
    reponse_f1: "[10, 20, 30]",
    reponse_f2: "[20, 30]",
    explication: "remove(int) supprime l'élément à l'indice 1.",
  },
  {
    id: 148,
    question:
      '`Java — Map.computeIfAbsent\n\nQuelle sortie produit ce code ?\n\nMap<String, List<Integer>> m = new HashMap<>();\nm.computeIfAbsent("a", k -> new ArrayList<>()).add(1);\nSystem.out.println(m.get("a"));\n\nRéférence exercice : JAVA-148`',
    reponse_v: "[1]",
    reponse_f1: "null",
    reponse_f2: "Compilation impossible",
    explication: "computeIfAbsent crée puis associe la liste avant l'ajout.",
  },
  {
    id: 149,
    question:
      "`Java — record et égalité\n\nQuelle affirmation est correcte ?\n\nrecord Point(int x, int y) {}\n\nRéférence exercice : JAVA-149`",
    reponse_v: "equals et hashCode sont générés à partir des composants",
    reponse_f1: "equals compare uniquement les références",
    reponse_f2: "Les composants du record sont mutables",
    explication:
      "Les records génèrent une égalité structurelle basée sur leurs composants.",
  },
  {
    id: 150,
    question:
      "`Java — invariance des génériques\n\nQuelle instruction compile ?\n\nList<Integer> ints = new ArrayList<>();\n\nRéférence exercice : JAVA-150`",
    reponse_v: "List<? extends Number> nums = ints;",
    reponse_f1: "List<Number> nums = ints;",
    reponse_f2: "List<Object> nums = ints;",
    explication:
      "Les génériques Java sont invariants ; un wildcard extends permet une vue en lecture.",
  },
  {
    id: 151,
    question:
      "`Java — multi-catch\n\nQuelle syntaxe est valide ?\n\nRéférence exercice : JAVA-151`",
    reponse_v: "catch (IOException | SQLException e)",
    reponse_f1: "catch (IOException || SQLException e)",
    reponse_f2: "catch (IOException, SQLException e)",
    explication: "Le multi-catch utilise le séparateur |.",
  },
  {
    id: 152,
    question:
      "`Java — try-with-resources\n\nQuel ordre de fermeture est appliqué ?\n\ntry (A a = new A(); B b = new B()) {\n}\n\nRéférence exercice : JAVA-152`",
    reponse_v: "b puis a",
    reponse_f1: "a puis b",
    reponse_f2: "ordre indéterminé",
    explication:
      "Les ressources sont fermées dans l'ordre inverse de leur déclaration.",
  },
  {
    id: 153,
    question:
      "`Java — exception supprimée\n\nSi le bloc try lève E1 et close() lève E2 dans un try-with-resources, quelle exception principale est propagée ?\n\nRéférence exercice : JAVA-153`",
    reponse_v: "E1, avec E2 comme exception supprimée",
    reponse_f1: "E2, avec E1 comme cause",
    reponse_f2: "Une exception composite automatique",
    explication:
      "L'exception du bloc try reste principale ; celle de fermeture devient suppressed.",
  },
  {
    id: 154,
    question:
      "`Java — lambda et variable locale\n\nCe code compile-t-il ?\n\nint x = 1;\nRunnable r = () -> System.out.println(x);\nx++;\n\nRéférence exercice : JAVA-154`",
    reponse_v: "Non, x n'est pas effectivement finale",
    reponse_f1: "Oui, car x est un int",
    reponse_f2: "Oui, la lambda capture la valeur initiale",
    explication:
      "Une variable locale capturée doit être finale ou effectivement finale.",
  },
  {
    id: 155,
    question:
      "`Java — Stream lazy\n\nQuelle sortie produit ce code ?\n\nStream.of(1,2,3)\n      .peek(System.out::print)\n      .map(x -> x * 2);\n\nRéférence exercice : JAVA-155`",
    reponse_v: "Aucune sortie",
    reponse_f1: "123",
    reponse_f2: "246",
    explication:
      "Sans opération terminale, le pipeline stream n'est pas exécuté.",
  },
  {
    id: 156,
    question:
      "`Java — distinct\n\nQuelle sortie produit ce code ?\n\nSystem.out.println(\n    Stream.of(1,2,2,3,1)\n          .distinct()\n          .toList()\n);\n\nRéférence exercice : JAVA-156`",
    reponse_v: "[1, 2, 3]",
    reponse_f1: "[1, 2, 2, 3, 1]",
    reponse_f2: "[3, 2, 1]",
    explication:
      "distinct conserve le premier ordre de rencontre sur un stream ordonné.",
  },
  {
    id: 157,
    question:
      "`Java — reduce\n\nQuelle valeur est produite ?\n\nint r = Stream.of(1,2,3,4)\n              .reduce(0, Integer::sum);\n\nRéférence exercice : JAVA-157`",
    reponse_v: "10",
    reponse_f1: "9",
    reponse_f2: "24",
    explication: "L'identité 0 est additionnée à tous les éléments.",
  },
  {
    id: 158,
    question:
      '`Java — Optional\n\nQuelle valeur est affichée ?\n\nOptional<String> o = Optional.of("java");\nSystem.out.println(o.map(String::length).orElse(0));\n\nRéférence exercice : JAVA-158`',
    reponse_v: "4",
    reponse_f1: "0",
    reponse_f2: "Optional[4]",
    explication: "map transforme la valeur en Integer puis orElse extrait 4.",
  },
  {
    id: 159,
    question:
      '`Java — checked exception dans une lambda\n\nPourquoi ce code ne compile-t-il pas ?\n\nList<Path> paths = List.of(Path.of("a"));\npaths.stream().map(Files::readString).toList();\n\nRéférence exercice : JAVA-159`',
    reponse_v:
      "Files.readString lève une IOException incompatible avec Function",
    reponse_f1: "Stream.map interdit les références de méthode",
    reponse_f2: "Path ne peut pas être utilisé dans un stream",
    explication:
      "Function.apply ne déclare pas IOException ; il faut gérer ou adapter l'exception.",
  },
  {
    id: 160,
    question:
      "`Java — finally et return\n\nQuelle valeur retourne f() ?\n\nstatic int f() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}\n\nRéférence exercice : JAVA-160`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "Compilation impossible",
    explication:
      "Le return du finally remplace celui du try, pratique déconseillée.",
  },
  {
    id: 161,
    question:
      "`Java — multi-catch\n\nQuelle syntaxe est valide ?\n\nRéférence exercice : JAVA-161`",
    reponse_v: "catch (IOException | SQLException e)",
    reponse_f1: "catch (IOException || SQLException e)",
    reponse_f2: "catch (IOException, SQLException e)",
    explication: "Le multi-catch utilise le séparateur |.",
  },
  {
    id: 162,
    question:
      "`Java — try-with-resources\n\nQuel ordre de fermeture est appliqué ?\n\ntry (A a = new A(); B b = new B()) {\n}\n\nRéférence exercice : JAVA-162`",
    reponse_v: "b puis a",
    reponse_f1: "a puis b",
    reponse_f2: "ordre indéterminé",
    explication:
      "Les ressources sont fermées dans l'ordre inverse de leur déclaration.",
  },
  {
    id: 163,
    question:
      "`Java — exception supprimée\n\nSi le bloc try lève E1 et close() lève E2 dans un try-with-resources, quelle exception principale est propagée ?\n\nRéférence exercice : JAVA-163`",
    reponse_v: "E1, avec E2 comme exception supprimée",
    reponse_f1: "E2, avec E1 comme cause",
    reponse_f2: "Une exception composite automatique",
    explication:
      "L'exception du bloc try reste principale ; celle de fermeture devient suppressed.",
  },
  {
    id: 164,
    question:
      "`Java — lambda et variable locale\n\nCe code compile-t-il ?\n\nint x = 1;\nRunnable r = () -> System.out.println(x);\nx++;\n\nRéférence exercice : JAVA-164`",
    reponse_v: "Non, x n'est pas effectivement finale",
    reponse_f1: "Oui, car x est un int",
    reponse_f2: "Oui, la lambda capture la valeur initiale",
    explication:
      "Une variable locale capturée doit être finale ou effectivement finale.",
  },
  {
    id: 165,
    question:
      "`Java — Stream lazy\n\nQuelle sortie produit ce code ?\n\nStream.of(1,2,3)\n      .peek(System.out::print)\n      .map(x -> x * 2);\n\nRéférence exercice : JAVA-165`",
    reponse_v: "Aucune sortie",
    reponse_f1: "123",
    reponse_f2: "246",
    explication:
      "Sans opération terminale, le pipeline stream n'est pas exécuté.",
  },
  {
    id: 166,
    question:
      "`Java — distinct\n\nQuelle sortie produit ce code ?\n\nSystem.out.println(\n    Stream.of(1,2,2,3,1)\n          .distinct()\n          .toList()\n);\n\nRéférence exercice : JAVA-166`",
    reponse_v: "[1, 2, 3]",
    reponse_f1: "[1, 2, 2, 3, 1]",
    reponse_f2: "[3, 2, 1]",
    explication:
      "distinct conserve le premier ordre de rencontre sur un stream ordonné.",
  },
  {
    id: 167,
    question:
      "`Java — reduce\n\nQuelle valeur est produite ?\n\nint r = Stream.of(1,2,3,4)\n              .reduce(0, Integer::sum);\n\nRéférence exercice : JAVA-167`",
    reponse_v: "10",
    reponse_f1: "9",
    reponse_f2: "24",
    explication: "L'identité 0 est additionnée à tous les éléments.",
  },
  {
    id: 168,
    question:
      '`Java — Optional\n\nQuelle valeur est affichée ?\n\nOptional<String> o = Optional.of("java");\nSystem.out.println(o.map(String::length).orElse(0));\n\nRéférence exercice : JAVA-168`',
    reponse_v: "4",
    reponse_f1: "0",
    reponse_f2: "Optional[4]",
    explication: "map transforme la valeur en Integer puis orElse extrait 4.",
  },
  {
    id: 169,
    question:
      '`Java — checked exception dans une lambda\n\nPourquoi ce code ne compile-t-il pas ?\n\nList<Path> paths = List.of(Path.of("a"));\npaths.stream().map(Files::readString).toList();\n\nRéférence exercice : JAVA-169`',
    reponse_v:
      "Files.readString lève une IOException incompatible avec Function",
    reponse_f1: "Stream.map interdit les références de méthode",
    reponse_f2: "Path ne peut pas être utilisé dans un stream",
    explication:
      "Function.apply ne déclare pas IOException ; il faut gérer ou adapter l'exception.",
  },
  {
    id: 170,
    question:
      "`Java — finally et return\n\nQuelle valeur retourne f() ?\n\nstatic int f() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}\n\nRéférence exercice : JAVA-170`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "Compilation impossible",
    explication:
      "Le return du finally remplace celui du try, pratique déconseillée.",
  },
  {
    id: 171,
    question:
      "`Java — multi-catch\n\nQuelle syntaxe est valide ?\n\nRéférence exercice : JAVA-171`",
    reponse_v: "catch (IOException | SQLException e)",
    reponse_f1: "catch (IOException || SQLException e)",
    reponse_f2: "catch (IOException, SQLException e)",
    explication: "Le multi-catch utilise le séparateur |.",
  },
  {
    id: 172,
    question:
      "`Java — try-with-resources\n\nQuel ordre de fermeture est appliqué ?\n\ntry (A a = new A(); B b = new B()) {\n}\n\nRéférence exercice : JAVA-172`",
    reponse_v: "b puis a",
    reponse_f1: "a puis b",
    reponse_f2: "ordre indéterminé",
    explication:
      "Les ressources sont fermées dans l'ordre inverse de leur déclaration.",
  },
  {
    id: 173,
    question:
      "`Java — exception supprimée\n\nSi le bloc try lève E1 et close() lève E2 dans un try-with-resources, quelle exception principale est propagée ?\n\nRéférence exercice : JAVA-173`",
    reponse_v: "E1, avec E2 comme exception supprimée",
    reponse_f1: "E2, avec E1 comme cause",
    reponse_f2: "Une exception composite automatique",
    explication:
      "L'exception du bloc try reste principale ; celle de fermeture devient suppressed.",
  },
  {
    id: 174,
    question:
      "`Java — lambda et variable locale\n\nCe code compile-t-il ?\n\nint x = 1;\nRunnable r = () -> System.out.println(x);\nx++;\n\nRéférence exercice : JAVA-174`",
    reponse_v: "Non, x n'est pas effectivement finale",
    reponse_f1: "Oui, car x est un int",
    reponse_f2: "Oui, la lambda capture la valeur initiale",
    explication:
      "Une variable locale capturée doit être finale ou effectivement finale.",
  },
  {
    id: 175,
    question:
      "`Java — Stream lazy\n\nQuelle sortie produit ce code ?\n\nStream.of(1,2,3)\n      .peek(System.out::print)\n      .map(x -> x * 2);\n\nRéférence exercice : JAVA-175`",
    reponse_v: "Aucune sortie",
    reponse_f1: "123",
    reponse_f2: "246",
    explication:
      "Sans opération terminale, le pipeline stream n'est pas exécuté.",
  },
  {
    id: 176,
    question:
      "`Java — distinct\n\nQuelle sortie produit ce code ?\n\nSystem.out.println(\n    Stream.of(1,2,2,3,1)\n          .distinct()\n          .toList()\n);\n\nRéférence exercice : JAVA-176`",
    reponse_v: "[1, 2, 3]",
    reponse_f1: "[1, 2, 2, 3, 1]",
    reponse_f2: "[3, 2, 1]",
    explication:
      "distinct conserve le premier ordre de rencontre sur un stream ordonné.",
  },
  {
    id: 177,
    question:
      "`Java — reduce\n\nQuelle valeur est produite ?\n\nint r = Stream.of(1,2,3,4)\n              .reduce(0, Integer::sum);\n\nRéférence exercice : JAVA-177`",
    reponse_v: "10",
    reponse_f1: "9",
    reponse_f2: "24",
    explication: "L'identité 0 est additionnée à tous les éléments.",
  },
  {
    id: 178,
    question:
      '`Java — Optional\n\nQuelle valeur est affichée ?\n\nOptional<String> o = Optional.of("java");\nSystem.out.println(o.map(String::length).orElse(0));\n\nRéférence exercice : JAVA-178`',
    reponse_v: "4",
    reponse_f1: "0",
    reponse_f2: "Optional[4]",
    explication: "map transforme la valeur en Integer puis orElse extrait 4.",
  },
  {
    id: 179,
    question:
      '`Java — checked exception dans une lambda\n\nPourquoi ce code ne compile-t-il pas ?\n\nList<Path> paths = List.of(Path.of("a"));\npaths.stream().map(Files::readString).toList();\n\nRéférence exercice : JAVA-179`',
    reponse_v:
      "Files.readString lève une IOException incompatible avec Function",
    reponse_f1: "Stream.map interdit les références de méthode",
    reponse_f2: "Path ne peut pas être utilisé dans un stream",
    explication:
      "Function.apply ne déclare pas IOException ; il faut gérer ou adapter l'exception.",
  },
  {
    id: 180,
    question:
      "`Java — finally et return\n\nQuelle valeur retourne f() ?\n\nstatic int f() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}\n\nRéférence exercice : JAVA-180`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "Compilation impossible",
    explication:
      "Le return du finally remplace celui du try, pratique déconseillée.",
  },
  {
    id: 181,
    question:
      "`Java — multi-catch\n\nQuelle syntaxe est valide ?\n\nRéférence exercice : JAVA-181`",
    reponse_v: "catch (IOException | SQLException e)",
    reponse_f1: "catch (IOException || SQLException e)",
    reponse_f2: "catch (IOException, SQLException e)",
    explication: "Le multi-catch utilise le séparateur |.",
  },
  {
    id: 182,
    question:
      "`Java — try-with-resources\n\nQuel ordre de fermeture est appliqué ?\n\ntry (A a = new A(); B b = new B()) {\n}\n\nRéférence exercice : JAVA-182`",
    reponse_v: "b puis a",
    reponse_f1: "a puis b",
    reponse_f2: "ordre indéterminé",
    explication:
      "Les ressources sont fermées dans l'ordre inverse de leur déclaration.",
  },
  {
    id: 183,
    question:
      "`Java — exception supprimée\n\nSi le bloc try lève E1 et close() lève E2 dans un try-with-resources, quelle exception principale est propagée ?\n\nRéférence exercice : JAVA-183`",
    reponse_v: "E1, avec E2 comme exception supprimée",
    reponse_f1: "E2, avec E1 comme cause",
    reponse_f2: "Une exception composite automatique",
    explication:
      "L'exception du bloc try reste principale ; celle de fermeture devient suppressed.",
  },
  {
    id: 184,
    question:
      "`Java — lambda et variable locale\n\nCe code compile-t-il ?\n\nint x = 1;\nRunnable r = () -> System.out.println(x);\nx++;\n\nRéférence exercice : JAVA-184`",
    reponse_v: "Non, x n'est pas effectivement finale",
    reponse_f1: "Oui, car x est un int",
    reponse_f2: "Oui, la lambda capture la valeur initiale",
    explication:
      "Une variable locale capturée doit être finale ou effectivement finale.",
  },
  {
    id: 185,
    question:
      "`Java — Stream lazy\n\nQuelle sortie produit ce code ?\n\nStream.of(1,2,3)\n      .peek(System.out::print)\n      .map(x -> x * 2);\n\nRéférence exercice : JAVA-185`",
    reponse_v: "Aucune sortie",
    reponse_f1: "123",
    reponse_f2: "246",
    explication:
      "Sans opération terminale, le pipeline stream n'est pas exécuté.",
  },
  {
    id: 186,
    question:
      "`Java — distinct\n\nQuelle sortie produit ce code ?\n\nSystem.out.println(\n    Stream.of(1,2,2,3,1)\n          .distinct()\n          .toList()\n);\n\nRéférence exercice : JAVA-186`",
    reponse_v: "[1, 2, 3]",
    reponse_f1: "[1, 2, 2, 3, 1]",
    reponse_f2: "[3, 2, 1]",
    explication:
      "distinct conserve le premier ordre de rencontre sur un stream ordonné.",
  },
  {
    id: 187,
    question:
      "`Java — reduce\n\nQuelle valeur est produite ?\n\nint r = Stream.of(1,2,3,4)\n              .reduce(0, Integer::sum);\n\nRéférence exercice : JAVA-187`",
    reponse_v: "10",
    reponse_f1: "9",
    reponse_f2: "24",
    explication: "L'identité 0 est additionnée à tous les éléments.",
  },
  {
    id: 188,
    question:
      '`Java — Optional\n\nQuelle valeur est affichée ?\n\nOptional<String> o = Optional.of("java");\nSystem.out.println(o.map(String::length).orElse(0));\n\nRéférence exercice : JAVA-188`',
    reponse_v: "4",
    reponse_f1: "0",
    reponse_f2: "Optional[4]",
    explication: "map transforme la valeur en Integer puis orElse extrait 4.",
  },
  {
    id: 189,
    question:
      '`Java — checked exception dans une lambda\n\nPourquoi ce code ne compile-t-il pas ?\n\nList<Path> paths = List.of(Path.of("a"));\npaths.stream().map(Files::readString).toList();\n\nRéférence exercice : JAVA-189`',
    reponse_v:
      "Files.readString lève une IOException incompatible avec Function",
    reponse_f1: "Stream.map interdit les références de méthode",
    reponse_f2: "Path ne peut pas être utilisé dans un stream",
    explication:
      "Function.apply ne déclare pas IOException ; il faut gérer ou adapter l'exception.",
  },
  {
    id: 190,
    question:
      "`Java — finally et return\n\nQuelle valeur retourne f() ?\n\nstatic int f() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}\n\nRéférence exercice : JAVA-190`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "Compilation impossible",
    explication:
      "Le return du finally remplace celui du try, pratique déconseillée.",
  },
  {
    id: 191,
    question:
      "`Java — multi-catch\n\nQuelle syntaxe est valide ?\n\nRéférence exercice : JAVA-191`",
    reponse_v: "catch (IOException | SQLException e)",
    reponse_f1: "catch (IOException || SQLException e)",
    reponse_f2: "catch (IOException, SQLException e)",
    explication: "Le multi-catch utilise le séparateur |.",
  },
  {
    id: 192,
    question:
      "`Java — try-with-resources\n\nQuel ordre de fermeture est appliqué ?\n\ntry (A a = new A(); B b = new B()) {\n}\n\nRéférence exercice : JAVA-192`",
    reponse_v: "b puis a",
    reponse_f1: "a puis b",
    reponse_f2: "ordre indéterminé",
    explication:
      "Les ressources sont fermées dans l'ordre inverse de leur déclaration.",
  },
  {
    id: 193,
    question:
      "`Java — exception supprimée\n\nSi le bloc try lève E1 et close() lève E2 dans un try-with-resources, quelle exception principale est propagée ?\n\nRéférence exercice : JAVA-193`",
    reponse_v: "E1, avec E2 comme exception supprimée",
    reponse_f1: "E2, avec E1 comme cause",
    reponse_f2: "Une exception composite automatique",
    explication:
      "L'exception du bloc try reste principale ; celle de fermeture devient suppressed.",
  },
  {
    id: 194,
    question:
      "`Java — lambda et variable locale\n\nCe code compile-t-il ?\n\nint x = 1;\nRunnable r = () -> System.out.println(x);\nx++;\n\nRéférence exercice : JAVA-194`",
    reponse_v: "Non, x n'est pas effectivement finale",
    reponse_f1: "Oui, car x est un int",
    reponse_f2: "Oui, la lambda capture la valeur initiale",
    explication:
      "Une variable locale capturée doit être finale ou effectivement finale.",
  },
  {
    id: 195,
    question:
      "`Java — Stream lazy\n\nQuelle sortie produit ce code ?\n\nStream.of(1,2,3)\n      .peek(System.out::print)\n      .map(x -> x * 2);\n\nRéférence exercice : JAVA-195`",
    reponse_v: "Aucune sortie",
    reponse_f1: "123",
    reponse_f2: "246",
    explication:
      "Sans opération terminale, le pipeline stream n'est pas exécuté.",
  },
  {
    id: 196,
    question:
      "`Java — distinct\n\nQuelle sortie produit ce code ?\n\nSystem.out.println(\n    Stream.of(1,2,2,3,1)\n          .distinct()\n          .toList()\n);\n\nRéférence exercice : JAVA-196`",
    reponse_v: "[1, 2, 3]",
    reponse_f1: "[1, 2, 2, 3, 1]",
    reponse_f2: "[3, 2, 1]",
    explication:
      "distinct conserve le premier ordre de rencontre sur un stream ordonné.",
  },
  {
    id: 197,
    question:
      "`Java — reduce\n\nQuelle valeur est produite ?\n\nint r = Stream.of(1,2,3,4)\n              .reduce(0, Integer::sum);\n\nRéférence exercice : JAVA-197`",
    reponse_v: "10",
    reponse_f1: "9",
    reponse_f2: "24",
    explication: "L'identité 0 est additionnée à tous les éléments.",
  },
  {
    id: 198,
    question:
      '`Java — Optional\n\nQuelle valeur est affichée ?\n\nOptional<String> o = Optional.of("java");\nSystem.out.println(o.map(String::length).orElse(0));\n\nRéférence exercice : JAVA-198`',
    reponse_v: "4",
    reponse_f1: "0",
    reponse_f2: "Optional[4]",
    explication: "map transforme la valeur en Integer puis orElse extrait 4.",
  },
  {
    id: 199,
    question:
      '`Java — checked exception dans une lambda\n\nPourquoi ce code ne compile-t-il pas ?\n\nList<Path> paths = List.of(Path.of("a"));\npaths.stream().map(Files::readString).toList();\n\nRéférence exercice : JAVA-199`',
    reponse_v:
      "Files.readString lève une IOException incompatible avec Function",
    reponse_f1: "Stream.map interdit les références de méthode",
    reponse_f2: "Path ne peut pas être utilisé dans un stream",
    explication:
      "Function.apply ne déclare pas IOException ; il faut gérer ou adapter l'exception.",
  },
  {
    id: 200,
    question:
      "`Java — finally et return\n\nQuelle valeur retourne f() ?\n\nstatic int f() {\n    try {\n        return 1;\n    } finally {\n        return 2;\n    }\n}\n\nRéférence exercice : JAVA-200`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "Compilation impossible",
    explication:
      "Le return du finally remplace celui du try, pratique déconseillée.",
  },
  {
    id: 201,
    question:
      "`Java — volatile\n\nQuelle garantie fournit volatile sur un champ partagé ?\n\nRéférence exercice : JAVA-201`",
    reponse_v: "visibilité des écritures et ordre mémoire associé",
    reponse_f1: "atomicité de toutes les opérations composées",
    reponse_f2: "exclusion mutuelle automatique",
    explication:
      "volatile garantit surtout la visibilité, pas l'atomicité de x++.",
  },
  {
    id: 202,
    question:
      "`Java — synchronized\n\nQue garantit un bloc synchronized(obj) ?\n\nRéférence exercice : JAVA-202`",
    reponse_v: "exclusion mutuelle sur le moniteur de obj",
    reponse_f1: "verrouillage global de toute la JVM",
    reponse_f2: "exécution dans un thread dédié",
    explication: "Le verrou est associé à l'objet utilisé comme moniteur.",
  },
  {
    id: 203,
    question:
      "`Java — AtomicInteger\n\nPourquoi incrementAndGet() est-il préférable à x++ sur un int partagé ?\n\nRéférence exercice : JAVA-203`",
    reponse_v: "l'incrément est atomique",
    reponse_f1: "la variable devient automatiquement volatile et immutable",
    reponse_f2: "l'opération évite toute allocation",
    explication:
      "incrementAndGet réalise l'opération de lecture-modification-écriture atomiquement.",
  },
  {
    id: 204,
    question:
      "`Java — ExecutorService\n\nQuelle méthode arrête l'acceptation de nouvelles tâches tout en laissant finir celles déjà soumises ?\n\nRéférence exercice : JAVA-204`",
    reponse_v: "shutdown()",
    reponse_f1: "shutdownNow()",
    reponse_f2: "awaitTermination()",
    explication:
      "shutdown refuse les nouvelles tâches mais laisse les tâches existantes se terminer.",
  },
  {
    id: 205,
    question:
      "`Java — Future.get\n\nQuel comportement a get() si la tâche n'est pas terminée ?\n\nRéférence exercice : JAVA-205`",
    reponse_v: "il bloque jusqu'au résultat ou à une exception",
    reponse_f1: "il retourne immédiatement null",
    reponse_f2: "il annule automatiquement la tâche",
    explication: "Future.get est bloquant sans timeout.",
  },
  {
    id: 206,
    question:
      "`Java — CompletableFuture\n\nQuelle méthode transforme le résultat sans créer un niveau imbriqué de CompletableFuture ?\n\nRéférence exercice : JAVA-206`",
    reponse_v: "thenCompose",
    reponse_f1: "thenApply",
    reponse_f2: "handle",
    explication:
      "thenCompose aplatit une fonction retournant elle-même un CompletableFuture.",
  },
  {
    id: 207,
    question:
      "`Java — deadlock\n\nQuel scénario caractérise le mieux un interblocage ?\n\nRéférence exercice : JAVA-207`",
    reponse_v: "deux threads attendent chacun un verrou détenu par l'autre",
    reponse_f1: "deux threads lisent simultanément une variable volatile",
    reponse_f2: "un thread dort pendant qu'un autre travaille",
    explication:
      "L'attente circulaire de verrous constitue un deadlock classique.",
  },
  {
    id: 208,
    question:
      "`Java — wait/notify\n\nSur quel objet faut-il appeler wait() ?\n\nRéférence exercice : JAVA-208`",
    reponse_v: "sur l'objet dont le moniteur est détenu par le thread courant",
    reponse_f1: "sur n'importe quel objet accessible",
    reponse_f2: "uniquement sur Thread.currentThread()",
    explication:
      "wait exige que le thread possède le moniteur de l'objet concerné.",
  },
  {
    id: 209,
    question:
      "`Java — ConcurrentHashMap\n\nQuelle caractéristique est correcte ?\n\nRéférence exercice : JAVA-209`",
    reponse_v: "elle autorise des accès concurrents sans verrou global unique",
    reponse_f1: "elle accepte les clés null",
    reponse_f2: "elle garantit un ordre naturel des clés",
    explication:
      "ConcurrentHashMap segmente ou affine la synchronisation et interdit les clés/valeurs null.",
  },
  {
    id: 210,
    question:
      '`Java — start versus run\n\nQuelle différence principale existe entre ces deux appels ?\n\nThread t = new Thread(() -> System.out.println("X"));\nt.run();\nt.start();\n\nRéférence exercice : JAVA-210`',
    reponse_v:
      "run s'exécute dans le thread courant, start crée un nouveau thread",
    reponse_f1: "run et start créent tous deux un nouveau thread",
    reponse_f2: "start appelle run sans créer de thread",
    explication:
      "run est un appel de méthode ordinaire ; start demande à la JVM de lancer un thread.",
  },
  {
    id: 211,
    question:
      "`Java — volatile\n\nQuelle garantie fournit volatile sur un champ partagé ?\n\nRéférence exercice : JAVA-211`",
    reponse_v: "visibilité des écritures et ordre mémoire associé",
    reponse_f1: "atomicité de toutes les opérations composées",
    reponse_f2: "exclusion mutuelle automatique",
    explication:
      "volatile garantit surtout la visibilité, pas l'atomicité de x++.",
  },
  {
    id: 212,
    question:
      "`Java — synchronized\n\nQue garantit un bloc synchronized(obj) ?\n\nRéférence exercice : JAVA-212`",
    reponse_v: "exclusion mutuelle sur le moniteur de obj",
    reponse_f1: "verrouillage global de toute la JVM",
    reponse_f2: "exécution dans un thread dédié",
    explication: "Le verrou est associé à l'objet utilisé comme moniteur.",
  },
  {
    id: 213,
    question:
      "`Java — AtomicInteger\n\nPourquoi incrementAndGet() est-il préférable à x++ sur un int partagé ?\n\nRéférence exercice : JAVA-213`",
    reponse_v: "l'incrément est atomique",
    reponse_f1: "la variable devient automatiquement volatile et immutable",
    reponse_f2: "l'opération évite toute allocation",
    explication:
      "incrementAndGet réalise l'opération de lecture-modification-écriture atomiquement.",
  },
  {
    id: 214,
    question:
      "`Java — ExecutorService\n\nQuelle méthode arrête l'acceptation de nouvelles tâches tout en laissant finir celles déjà soumises ?\n\nRéférence exercice : JAVA-214`",
    reponse_v: "shutdown()",
    reponse_f1: "shutdownNow()",
    reponse_f2: "awaitTermination()",
    explication:
      "shutdown refuse les nouvelles tâches mais laisse les tâches existantes se terminer.",
  },
  {
    id: 215,
    question:
      "`Java — Future.get\n\nQuel comportement a get() si la tâche n'est pas terminée ?\n\nRéférence exercice : JAVA-215`",
    reponse_v: "il bloque jusqu'au résultat ou à une exception",
    reponse_f1: "il retourne immédiatement null",
    reponse_f2: "il annule automatiquement la tâche",
    explication: "Future.get est bloquant sans timeout.",
  },
  {
    id: 216,
    question:
      "`Java — CompletableFuture\n\nQuelle méthode transforme le résultat sans créer un niveau imbriqué de CompletableFuture ?\n\nRéférence exercice : JAVA-216`",
    reponse_v: "thenCompose",
    reponse_f1: "thenApply",
    reponse_f2: "handle",
    explication:
      "thenCompose aplatit une fonction retournant elle-même un CompletableFuture.",
  },
  {
    id: 217,
    question:
      "`Java — deadlock\n\nQuel scénario caractérise le mieux un interblocage ?\n\nRéférence exercice : JAVA-217`",
    reponse_v: "deux threads attendent chacun un verrou détenu par l'autre",
    reponse_f1: "deux threads lisent simultanément une variable volatile",
    reponse_f2: "un thread dort pendant qu'un autre travaille",
    explication:
      "L'attente circulaire de verrous constitue un deadlock classique.",
  },
  {
    id: 218,
    question:
      "`Java — wait/notify\n\nSur quel objet faut-il appeler wait() ?\n\nRéférence exercice : JAVA-218`",
    reponse_v: "sur l'objet dont le moniteur est détenu par le thread courant",
    reponse_f1: "sur n'importe quel objet accessible",
    reponse_f2: "uniquement sur Thread.currentThread()",
    explication:
      "wait exige que le thread possède le moniteur de l'objet concerné.",
  },
  {
    id: 219,
    question:
      "`Java — ConcurrentHashMap\n\nQuelle caractéristique est correcte ?\n\nRéférence exercice : JAVA-219`",
    reponse_v: "elle autorise des accès concurrents sans verrou global unique",
    reponse_f1: "elle accepte les clés null",
    reponse_f2: "elle garantit un ordre naturel des clés",
    explication:
      "ConcurrentHashMap segmente ou affine la synchronisation et interdit les clés/valeurs null.",
  },
  {
    id: 220,
    question:
      '`Java — start versus run\n\nQuelle différence principale existe entre ces deux appels ?\n\nThread t = new Thread(() -> System.out.println("X"));\nt.run();\nt.start();\n\nRéférence exercice : JAVA-220`',
    reponse_v:
      "run s'exécute dans le thread courant, start crée un nouveau thread",
    reponse_f1: "run et start créent tous deux un nouveau thread",
    reponse_f2: "start appelle run sans créer de thread",
    explication:
      "run est un appel de méthode ordinaire ; start demande à la JVM de lancer un thread.",
  },
  {
    id: 221,
    question:
      "`Java — volatile\n\nQuelle garantie fournit volatile sur un champ partagé ?\n\nRéférence exercice : JAVA-221`",
    reponse_v: "visibilité des écritures et ordre mémoire associé",
    reponse_f1: "atomicité de toutes les opérations composées",
    reponse_f2: "exclusion mutuelle automatique",
    explication:
      "volatile garantit surtout la visibilité, pas l'atomicité de x++.",
  },
  {
    id: 222,
    question:
      "`Java — synchronized\n\nQue garantit un bloc synchronized(obj) ?\n\nRéférence exercice : JAVA-222`",
    reponse_v: "exclusion mutuelle sur le moniteur de obj",
    reponse_f1: "verrouillage global de toute la JVM",
    reponse_f2: "exécution dans un thread dédié",
    explication: "Le verrou est associé à l'objet utilisé comme moniteur.",
  },
  {
    id: 223,
    question:
      "`Java — AtomicInteger\n\nPourquoi incrementAndGet() est-il préférable à x++ sur un int partagé ?\n\nRéférence exercice : JAVA-223`",
    reponse_v: "l'incrément est atomique",
    reponse_f1: "la variable devient automatiquement volatile et immutable",
    reponse_f2: "l'opération évite toute allocation",
    explication:
      "incrementAndGet réalise l'opération de lecture-modification-écriture atomiquement.",
  },
  {
    id: 224,
    question:
      "`Java — ExecutorService\n\nQuelle méthode arrête l'acceptation de nouvelles tâches tout en laissant finir celles déjà soumises ?\n\nRéférence exercice : JAVA-224`",
    reponse_v: "shutdown()",
    reponse_f1: "shutdownNow()",
    reponse_f2: "awaitTermination()",
    explication:
      "shutdown refuse les nouvelles tâches mais laisse les tâches existantes se terminer.",
  },
  {
    id: 225,
    question:
      "`Java — Future.get\n\nQuel comportement a get() si la tâche n'est pas terminée ?\n\nRéférence exercice : JAVA-225`",
    reponse_v: "il bloque jusqu'au résultat ou à une exception",
    reponse_f1: "il retourne immédiatement null",
    reponse_f2: "il annule automatiquement la tâche",
    explication: "Future.get est bloquant sans timeout.",
  },
  {
    id: 226,
    question:
      "`Java — CompletableFuture\n\nQuelle méthode transforme le résultat sans créer un niveau imbriqué de CompletableFuture ?\n\nRéférence exercice : JAVA-226`",
    reponse_v: "thenCompose",
    reponse_f1: "thenApply",
    reponse_f2: "handle",
    explication:
      "thenCompose aplatit une fonction retournant elle-même un CompletableFuture.",
  },
  {
    id: 227,
    question:
      "`Java — deadlock\n\nQuel scénario caractérise le mieux un interblocage ?\n\nRéférence exercice : JAVA-227`",
    reponse_v: "deux threads attendent chacun un verrou détenu par l'autre",
    reponse_f1: "deux threads lisent simultanément une variable volatile",
    reponse_f2: "un thread dort pendant qu'un autre travaille",
    explication:
      "L'attente circulaire de verrous constitue un deadlock classique.",
  },
  {
    id: 228,
    question:
      "`Java — wait/notify\n\nSur quel objet faut-il appeler wait() ?\n\nRéférence exercice : JAVA-228`",
    reponse_v: "sur l'objet dont le moniteur est détenu par le thread courant",
    reponse_f1: "sur n'importe quel objet accessible",
    reponse_f2: "uniquement sur Thread.currentThread()",
    explication:
      "wait exige que le thread possède le moniteur de l'objet concerné.",
  },
  {
    id: 229,
    question:
      "`Java — ConcurrentHashMap\n\nQuelle caractéristique est correcte ?\n\nRéférence exercice : JAVA-229`",
    reponse_v: "elle autorise des accès concurrents sans verrou global unique",
    reponse_f1: "elle accepte les clés null",
    reponse_f2: "elle garantit un ordre naturel des clés",
    explication:
      "ConcurrentHashMap segmente ou affine la synchronisation et interdit les clés/valeurs null.",
  },
  {
    id: 230,
    question:
      '`Java — start versus run\n\nQuelle différence principale existe entre ces deux appels ?\n\nThread t = new Thread(() -> System.out.println("X"));\nt.run();\nt.start();\n\nRéférence exercice : JAVA-230`',
    reponse_v:
      "run s'exécute dans le thread courant, start crée un nouveau thread",
    reponse_f1: "run et start créent tous deux un nouveau thread",
    reponse_f2: "start appelle run sans créer de thread",
    explication:
      "run est un appel de méthode ordinaire ; start demande à la JVM de lancer un thread.",
  },
  {
    id: 231,
    question:
      "`Java — volatile\n\nQuelle garantie fournit volatile sur un champ partagé ?\n\nRéférence exercice : JAVA-231`",
    reponse_v: "visibilité des écritures et ordre mémoire associé",
    reponse_f1: "atomicité de toutes les opérations composées",
    reponse_f2: "exclusion mutuelle automatique",
    explication:
      "volatile garantit surtout la visibilité, pas l'atomicité de x++.",
  },
  {
    id: 232,
    question:
      "`Java — synchronized\n\nQue garantit un bloc synchronized(obj) ?\n\nRéférence exercice : JAVA-232`",
    reponse_v: "exclusion mutuelle sur le moniteur de obj",
    reponse_f1: "verrouillage global de toute la JVM",
    reponse_f2: "exécution dans un thread dédié",
    explication: "Le verrou est associé à l'objet utilisé comme moniteur.",
  },
  {
    id: 233,
    question:
      "`Java — AtomicInteger\n\nPourquoi incrementAndGet() est-il préférable à x++ sur un int partagé ?\n\nRéférence exercice : JAVA-233`",
    reponse_v: "l'incrément est atomique",
    reponse_f1: "la variable devient automatiquement volatile et immutable",
    reponse_f2: "l'opération évite toute allocation",
    explication:
      "incrementAndGet réalise l'opération de lecture-modification-écriture atomiquement.",
  },
  {
    id: 234,
    question:
      "`Java — ExecutorService\n\nQuelle méthode arrête l'acceptation de nouvelles tâches tout en laissant finir celles déjà soumises ?\n\nRéférence exercice : JAVA-234`",
    reponse_v: "shutdown()",
    reponse_f1: "shutdownNow()",
    reponse_f2: "awaitTermination()",
    explication:
      "shutdown refuse les nouvelles tâches mais laisse les tâches existantes se terminer.",
  },
  {
    id: 235,
    question:
      "`Java — Future.get\n\nQuel comportement a get() si la tâche n'est pas terminée ?\n\nRéférence exercice : JAVA-235`",
    reponse_v: "il bloque jusqu'au résultat ou à une exception",
    reponse_f1: "il retourne immédiatement null",
    reponse_f2: "il annule automatiquement la tâche",
    explication: "Future.get est bloquant sans timeout.",
  },
  {
    id: 236,
    question:
      "`Java — CompletableFuture\n\nQuelle méthode transforme le résultat sans créer un niveau imbriqué de CompletableFuture ?\n\nRéférence exercice : JAVA-236`",
    reponse_v: "thenCompose",
    reponse_f1: "thenApply",
    reponse_f2: "handle",
    explication:
      "thenCompose aplatit une fonction retournant elle-même un CompletableFuture.",
  },
  {
    id: 237,
    question:
      "`Java — deadlock\n\nQuel scénario caractérise le mieux un interblocage ?\n\nRéférence exercice : JAVA-237`",
    reponse_v: "deux threads attendent chacun un verrou détenu par l'autre",
    reponse_f1: "deux threads lisent simultanément une variable volatile",
    reponse_f2: "un thread dort pendant qu'un autre travaille",
    explication:
      "L'attente circulaire de verrous constitue un deadlock classique.",
  },
  {
    id: 238,
    question:
      "`Java — wait/notify\n\nSur quel objet faut-il appeler wait() ?\n\nRéférence exercice : JAVA-238`",
    reponse_v: "sur l'objet dont le moniteur est détenu par le thread courant",
    reponse_f1: "sur n'importe quel objet accessible",
    reponse_f2: "uniquement sur Thread.currentThread()",
    explication:
      "wait exige que le thread possède le moniteur de l'objet concerné.",
  },
  {
    id: 239,
    question:
      "`Java — ConcurrentHashMap\n\nQuelle caractéristique est correcte ?\n\nRéférence exercice : JAVA-239`",
    reponse_v: "elle autorise des accès concurrents sans verrou global unique",
    reponse_f1: "elle accepte les clés null",
    reponse_f2: "elle garantit un ordre naturel des clés",
    explication:
      "ConcurrentHashMap segmente ou affine la synchronisation et interdit les clés/valeurs null.",
  },
  {
    id: 240,
    question:
      '`Java — start versus run\n\nQuelle différence principale existe entre ces deux appels ?\n\nThread t = new Thread(() -> System.out.println("X"));\nt.run();\nt.start();\n\nRéférence exercice : JAVA-240`',
    reponse_v:
      "run s'exécute dans le thread courant, start crée un nouveau thread",
    reponse_f1: "run et start créent tous deux un nouveau thread",
    reponse_f2: "start appelle run sans créer de thread",
    explication:
      "run est un appel de méthode ordinaire ; start demande à la JVM de lancer un thread.",
  },
  {
    id: 241,
    question:
      "`Java — volatile\n\nQuelle garantie fournit volatile sur un champ partagé ?\n\nRéférence exercice : JAVA-241`",
    reponse_v: "visibilité des écritures et ordre mémoire associé",
    reponse_f1: "atomicité de toutes les opérations composées",
    reponse_f2: "exclusion mutuelle automatique",
    explication:
      "volatile garantit surtout la visibilité, pas l'atomicité de x++.",
  },
  {
    id: 242,
    question:
      "`Java — synchronized\n\nQue garantit un bloc synchronized(obj) ?\n\nRéférence exercice : JAVA-242`",
    reponse_v: "exclusion mutuelle sur le moniteur de obj",
    reponse_f1: "verrouillage global de toute la JVM",
    reponse_f2: "exécution dans un thread dédié",
    explication: "Le verrou est associé à l'objet utilisé comme moniteur.",
  },
  {
    id: 243,
    question:
      "`Java — AtomicInteger\n\nPourquoi incrementAndGet() est-il préférable à x++ sur un int partagé ?\n\nRéférence exercice : JAVA-243`",
    reponse_v: "l'incrément est atomique",
    reponse_f1: "la variable devient automatiquement volatile et immutable",
    reponse_f2: "l'opération évite toute allocation",
    explication:
      "incrementAndGet réalise l'opération de lecture-modification-écriture atomiquement.",
  },
  {
    id: 244,
    question:
      "`Java — ExecutorService\n\nQuelle méthode arrête l'acceptation de nouvelles tâches tout en laissant finir celles déjà soumises ?\n\nRéférence exercice : JAVA-244`",
    reponse_v: "shutdown()",
    reponse_f1: "shutdownNow()",
    reponse_f2: "awaitTermination()",
    explication:
      "shutdown refuse les nouvelles tâches mais laisse les tâches existantes se terminer.",
  },
  {
    id: 245,
    question:
      "`Java — Future.get\n\nQuel comportement a get() si la tâche n'est pas terminée ?\n\nRéférence exercice : JAVA-245`",
    reponse_v: "il bloque jusqu'au résultat ou à une exception",
    reponse_f1: "il retourne immédiatement null",
    reponse_f2: "il annule automatiquement la tâche",
    explication: "Future.get est bloquant sans timeout.",
  },
  {
    id: 246,
    question:
      "`Java — CompletableFuture\n\nQuelle méthode transforme le résultat sans créer un niveau imbriqué de CompletableFuture ?\n\nRéférence exercice : JAVA-246`",
    reponse_v: "thenCompose",
    reponse_f1: "thenApply",
    reponse_f2: "handle",
    explication:
      "thenCompose aplatit une fonction retournant elle-même un CompletableFuture.",
  },
  {
    id: 247,
    question:
      "`Java — deadlock\n\nQuel scénario caractérise le mieux un interblocage ?\n\nRéférence exercice : JAVA-247`",
    reponse_v: "deux threads attendent chacun un verrou détenu par l'autre",
    reponse_f1: "deux threads lisent simultanément une variable volatile",
    reponse_f2: "un thread dort pendant qu'un autre travaille",
    explication:
      "L'attente circulaire de verrous constitue un deadlock classique.",
  },
  {
    id: 248,
    question:
      "`Java — wait/notify\n\nSur quel objet faut-il appeler wait() ?\n\nRéférence exercice : JAVA-248`",
    reponse_v: "sur l'objet dont le moniteur est détenu par le thread courant",
    reponse_f1: "sur n'importe quel objet accessible",
    reponse_f2: "uniquement sur Thread.currentThread()",
    explication:
      "wait exige que le thread possède le moniteur de l'objet concerné.",
  },
  {
    id: 249,
    question:
      "`Java — ConcurrentHashMap\n\nQuelle caractéristique est correcte ?\n\nRéférence exercice : JAVA-249`",
    reponse_v: "elle autorise des accès concurrents sans verrou global unique",
    reponse_f1: "elle accepte les clés null",
    reponse_f2: "elle garantit un ordre naturel des clés",
    explication:
      "ConcurrentHashMap segmente ou affine la synchronisation et interdit les clés/valeurs null.",
  },
  {
    id: 250,
    question:
      '`Java — start versus run\n\nQuelle différence principale existe entre ces deux appels ?\n\nThread t = new Thread(() -> System.out.println("X"));\nt.run();\nt.start();\n\nRéférence exercice : JAVA-250`',
    reponse_v:
      "run s'exécute dans le thread courant, start crée un nouveau thread",
    reponse_f1: "run et start créent tous deux un nouveau thread",
    reponse_f2: "start appelle run sans créer de thread",
    explication:
      "run est un appel de méthode ordinaire ; start demande à la JVM de lancer un thread.",
  },
  {
    id: 251,
    question:
      "`Java — garbage collector\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : JAVA-251`",
    reponse_v: "un objet devient éligible lorsqu'il n'est plus atteignable",
    reponse_f1: "un objet est collecté dès qu'une référence devient null",
    reponse_f2: "System.gc() garantit une collecte immédiate",
    explication:
      "L'éligibilité dépend de l'absence de chemin de références depuis les racines GC.",
  },
  {
    id: 252,
    question:
      '`Java — String pool\n\nQuelle sortie produit ce code ?\n\nString a = "java";\nString b = "ja" + "va";\nSystem.out.println(a == b);\n\nRéférence exercice : JAVA-252`',
    reponse_v: "true",
    reponse_f1: "false",
    reponse_f2: "Compilation impossible",
    explication:
      "Les concaténations constantes sont évaluées à la compilation et internées.",
  },
  {
    id: 253,
    question:
      "`Java — class loader\n\nQuel composant charge les classes de l'application depuis le classpath ou module path ?\n\nRéférence exercice : JAVA-253`",
    reponse_v: "Application ClassLoader",
    reponse_f1: "Bootstrap ClassLoader uniquement",
    reponse_f2: "Garbage Collector",
    explication: "L'Application ClassLoader charge les classes applicatives.",
  },
  {
    id: 254,
    question:
      "`Java — réflexion\n\nQuelle méthode permet d'obtenir toutes les méthodes déclarées directement dans une classe, y compris privées ?\n\nRéférence exercice : JAVA-254`",
    reponse_v: "getDeclaredMethods()",
    reponse_f1: "getMethods()",
    reponse_f2: "methods()",
    explication:
      "getDeclaredMethods retourne les méthodes déclarées dans la classe, quel que soit leur niveau d'accès.",
  },
  {
    id: 255,
    question:
      "`Java — annotation runtime\n\nQuelle rétention rend une annotation accessible par réflexion à l'exécution ?\n\nRéférence exercice : JAVA-255`",
    reponse_v: "RetentionPolicy.RUNTIME",
    reponse_f1: "RetentionPolicy.CLASS",
    reponse_f2: "RetentionPolicy.SOURCE",
    explication:
      "RUNTIME conserve l'annotation dans le bytecode et la rend visible à la réflexion.",
  },
  {
    id: 256,
    question:
      "`Java — sealed class\n\nQuelle déclaration limite explicitement les sous-classes autorisées ?\n\nRéférence exercice : JAVA-256`",
    reponse_v: "sealed class A permits B, C {}",
    reponse_f1: "final class A extends B, C {}",
    reponse_f2: "abstract class A restricts B, C {}",
    explication:
      "sealed et permits définissent l'ensemble autorisé de sous-types directs.",
  },
  {
    id: 257,
    question:
      "`Java — module system\n\nQuel fichier décrit les dépendances et exports d'un module Java ?\n\nRéférence exercice : JAVA-257`",
    reponse_v: "module-info.java",
    reponse_f1: "package-info.java",
    reponse_f2: "manifest.java",
    explication:
      "module-info.java contient requires, exports, opens, uses et provides.",
  },
  {
    id: 258,
    question:
      "`Java — sérialisation\n\nQuel champ n'est pas sérialisé par défaut lorsqu'il est marqué avec un mot-clé dédié ?\n\nRéférence exercice : JAVA-258`",
    reponse_v: "transient",
    reponse_f1: "volatile",
    reponse_f2: "final",
    explication: "transient exclut le champ de la sérialisation Java standard.",
  },
  {
    id: 259,
    question:
      "`Java — référence faible\n\nQuel usage correspond le mieux à WeakReference ?\n\nRéférence exercice : JAVA-259`",
    reponse_v:
      "permettre la collecte de l'objet s'il n'existe plus de référence forte",
    reponse_f1: "empêcher définitivement la collecte",
    reponse_f2: "rendre l'objet immutable",
    explication:
      "Une référence faible n'empêche pas le garbage collector de récupérer l'objet.",
  },
  {
    id: 260,
    question:
      "`Java — pile et tas\n\nOù sont généralement stockés les objets créés avec new ?\n\nRéférence exercice : JAVA-260`",
    reponse_v: "dans le tas",
    reponse_f1: "dans la pile du thread appelant",
    reponse_f2: "dans le metaspace",
    explication:
      "Les objets vivent généralement dans le heap ; les références locales peuvent être sur la pile.",
  },
  {
    id: 261,
    question:
      "`Java — garbage collector\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : JAVA-261`",
    reponse_v: "un objet devient éligible lorsqu'il n'est plus atteignable",
    reponse_f1: "un objet est collecté dès qu'une référence devient null",
    reponse_f2: "System.gc() garantit une collecte immédiate",
    explication:
      "L'éligibilité dépend de l'absence de chemin de références depuis les racines GC.",
  },
  {
    id: 262,
    question:
      '`Java — String pool\n\nQuelle sortie produit ce code ?\n\nString a = "java";\nString b = "ja" + "va";\nSystem.out.println(a == b);\n\nRéférence exercice : JAVA-262`',
    reponse_v: "true",
    reponse_f1: "false",
    reponse_f2: "Compilation impossible",
    explication:
      "Les concaténations constantes sont évaluées à la compilation et internées.",
  },
  {
    id: 263,
    question:
      "`Java — class loader\n\nQuel composant charge les classes de l'application depuis le classpath ou module path ?\n\nRéférence exercice : JAVA-263`",
    reponse_v: "Application ClassLoader",
    reponse_f1: "Bootstrap ClassLoader uniquement",
    reponse_f2: "Garbage Collector",
    explication: "L'Application ClassLoader charge les classes applicatives.",
  },
  {
    id: 264,
    question:
      "`Java — réflexion\n\nQuelle méthode permet d'obtenir toutes les méthodes déclarées directement dans une classe, y compris privées ?\n\nRéférence exercice : JAVA-264`",
    reponse_v: "getDeclaredMethods()",
    reponse_f1: "getMethods()",
    reponse_f2: "methods()",
    explication:
      "getDeclaredMethods retourne les méthodes déclarées dans la classe, quel que soit leur niveau d'accès.",
  },
  {
    id: 265,
    question:
      "`Java — annotation runtime\n\nQuelle rétention rend une annotation accessible par réflexion à l'exécution ?\n\nRéférence exercice : JAVA-265`",
    reponse_v: "RetentionPolicy.RUNTIME",
    reponse_f1: "RetentionPolicy.CLASS",
    reponse_f2: "RetentionPolicy.SOURCE",
    explication:
      "RUNTIME conserve l'annotation dans le bytecode et la rend visible à la réflexion.",
  },
  {
    id: 266,
    question:
      "`Java — sealed class\n\nQuelle déclaration limite explicitement les sous-classes autorisées ?\n\nRéférence exercice : JAVA-266`",
    reponse_v: "sealed class A permits B, C {}",
    reponse_f1: "final class A extends B, C {}",
    reponse_f2: "abstract class A restricts B, C {}",
    explication:
      "sealed et permits définissent l'ensemble autorisé de sous-types directs.",
  },
  {
    id: 267,
    question:
      "`Java — module system\n\nQuel fichier décrit les dépendances et exports d'un module Java ?\n\nRéférence exercice : JAVA-267`",
    reponse_v: "module-info.java",
    reponse_f1: "package-info.java",
    reponse_f2: "manifest.java",
    explication:
      "module-info.java contient requires, exports, opens, uses et provides.",
  },
  {
    id: 268,
    question:
      "`Java — sérialisation\n\nQuel champ n'est pas sérialisé par défaut lorsqu'il est marqué avec un mot-clé dédié ?\n\nRéférence exercice : JAVA-268`",
    reponse_v: "transient",
    reponse_f1: "volatile",
    reponse_f2: "final",
    explication: "transient exclut le champ de la sérialisation Java standard.",
  },
  {
    id: 269,
    question:
      "`Java — référence faible\n\nQuel usage correspond le mieux à WeakReference ?\n\nRéférence exercice : JAVA-269`",
    reponse_v:
      "permettre la collecte de l'objet s'il n'existe plus de référence forte",
    reponse_f1: "empêcher définitivement la collecte",
    reponse_f2: "rendre l'objet immutable",
    explication:
      "Une référence faible n'empêche pas le garbage collector de récupérer l'objet.",
  },
  {
    id: 270,
    question:
      "`Java — pile et tas\n\nOù sont généralement stockés les objets créés avec new ?\n\nRéférence exercice : JAVA-270`",
    reponse_v: "dans le tas",
    reponse_f1: "dans la pile du thread appelant",
    reponse_f2: "dans le metaspace",
    explication:
      "Les objets vivent généralement dans le heap ; les références locales peuvent être sur la pile.",
  },
  {
    id: 271,
    question:
      "`Java — garbage collector\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : JAVA-271`",
    reponse_v: "un objet devient éligible lorsqu'il n'est plus atteignable",
    reponse_f1: "un objet est collecté dès qu'une référence devient null",
    reponse_f2: "System.gc() garantit une collecte immédiate",
    explication:
      "L'éligibilité dépend de l'absence de chemin de références depuis les racines GC.",
  },
  {
    id: 272,
    question:
      '`Java — String pool\n\nQuelle sortie produit ce code ?\n\nString a = "java";\nString b = "ja" + "va";\nSystem.out.println(a == b);\n\nRéférence exercice : JAVA-272`',
    reponse_v: "true",
    reponse_f1: "false",
    reponse_f2: "Compilation impossible",
    explication:
      "Les concaténations constantes sont évaluées à la compilation et internées.",
  },
  {
    id: 273,
    question:
      "`Java — class loader\n\nQuel composant charge les classes de l'application depuis le classpath ou module path ?\n\nRéférence exercice : JAVA-273`",
    reponse_v: "Application ClassLoader",
    reponse_f1: "Bootstrap ClassLoader uniquement",
    reponse_f2: "Garbage Collector",
    explication: "L'Application ClassLoader charge les classes applicatives.",
  },
  {
    id: 274,
    question:
      "`Java — réflexion\n\nQuelle méthode permet d'obtenir toutes les méthodes déclarées directement dans une classe, y compris privées ?\n\nRéférence exercice : JAVA-274`",
    reponse_v: "getDeclaredMethods()",
    reponse_f1: "getMethods()",
    reponse_f2: "methods()",
    explication:
      "getDeclaredMethods retourne les méthodes déclarées dans la classe, quel que soit leur niveau d'accès.",
  },
  {
    id: 275,
    question:
      "`Java — annotation runtime\n\nQuelle rétention rend une annotation accessible par réflexion à l'exécution ?\n\nRéférence exercice : JAVA-275`",
    reponse_v: "RetentionPolicy.RUNTIME",
    reponse_f1: "RetentionPolicy.CLASS",
    reponse_f2: "RetentionPolicy.SOURCE",
    explication:
      "RUNTIME conserve l'annotation dans le bytecode et la rend visible à la réflexion.",
  },
  {
    id: 276,
    question:
      "`Java — sealed class\n\nQuelle déclaration limite explicitement les sous-classes autorisées ?\n\nRéférence exercice : JAVA-276`",
    reponse_v: "sealed class A permits B, C {}",
    reponse_f1: "final class A extends B, C {}",
    reponse_f2: "abstract class A restricts B, C {}",
    explication:
      "sealed et permits définissent l'ensemble autorisé de sous-types directs.",
  },
  {
    id: 277,
    question:
      "`Java — module system\n\nQuel fichier décrit les dépendances et exports d'un module Java ?\n\nRéférence exercice : JAVA-277`",
    reponse_v: "module-info.java",
    reponse_f1: "package-info.java",
    reponse_f2: "manifest.java",
    explication:
      "module-info.java contient requires, exports, opens, uses et provides.",
  },
  {
    id: 278,
    question:
      "`Java — sérialisation\n\nQuel champ n'est pas sérialisé par défaut lorsqu'il est marqué avec un mot-clé dédié ?\n\nRéférence exercice : JAVA-278`",
    reponse_v: "transient",
    reponse_f1: "volatile",
    reponse_f2: "final",
    explication: "transient exclut le champ de la sérialisation Java standard.",
  },
  {
    id: 279,
    question:
      "`Java — référence faible\n\nQuel usage correspond le mieux à WeakReference ?\n\nRéférence exercice : JAVA-279`",
    reponse_v:
      "permettre la collecte de l'objet s'il n'existe plus de référence forte",
    reponse_f1: "empêcher définitivement la collecte",
    reponse_f2: "rendre l'objet immutable",
    explication:
      "Une référence faible n'empêche pas le garbage collector de récupérer l'objet.",
  },
  {
    id: 280,
    question:
      "`Java — pile et tas\n\nOù sont généralement stockés les objets créés avec new ?\n\nRéférence exercice : JAVA-280`",
    reponse_v: "dans le tas",
    reponse_f1: "dans la pile du thread appelant",
    reponse_f2: "dans le metaspace",
    explication:
      "Les objets vivent généralement dans le heap ; les références locales peuvent être sur la pile.",
  },
  {
    id: 281,
    question:
      "`Java — garbage collector\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : JAVA-281`",
    reponse_v: "un objet devient éligible lorsqu'il n'est plus atteignable",
    reponse_f1: "un objet est collecté dès qu'une référence devient null",
    reponse_f2: "System.gc() garantit une collecte immédiate",
    explication:
      "L'éligibilité dépend de l'absence de chemin de références depuis les racines GC.",
  },
  {
    id: 282,
    question:
      '`Java — String pool\n\nQuelle sortie produit ce code ?\n\nString a = "java";\nString b = "ja" + "va";\nSystem.out.println(a == b);\n\nRéférence exercice : JAVA-282`',
    reponse_v: "true",
    reponse_f1: "false",
    reponse_f2: "Compilation impossible",
    explication:
      "Les concaténations constantes sont évaluées à la compilation et internées.",
  },
  {
    id: 283,
    question:
      "`Java — class loader\n\nQuel composant charge les classes de l'application depuis le classpath ou module path ?\n\nRéférence exercice : JAVA-283`",
    reponse_v: "Application ClassLoader",
    reponse_f1: "Bootstrap ClassLoader uniquement",
    reponse_f2: "Garbage Collector",
    explication: "L'Application ClassLoader charge les classes applicatives.",
  },
  {
    id: 284,
    question:
      "`Java — réflexion\n\nQuelle méthode permet d'obtenir toutes les méthodes déclarées directement dans une classe, y compris privées ?\n\nRéférence exercice : JAVA-284`",
    reponse_v: "getDeclaredMethods()",
    reponse_f1: "getMethods()",
    reponse_f2: "methods()",
    explication:
      "getDeclaredMethods retourne les méthodes déclarées dans la classe, quel que soit leur niveau d'accès.",
  },
  {
    id: 285,
    question:
      "`Java — annotation runtime\n\nQuelle rétention rend une annotation accessible par réflexion à l'exécution ?\n\nRéférence exercice : JAVA-285`",
    reponse_v: "RetentionPolicy.RUNTIME",
    reponse_f1: "RetentionPolicy.CLASS",
    reponse_f2: "RetentionPolicy.SOURCE",
    explication:
      "RUNTIME conserve l'annotation dans le bytecode et la rend visible à la réflexion.",
  },
  {
    id: 286,
    question:
      "`Java — sealed class\n\nQuelle déclaration limite explicitement les sous-classes autorisées ?\n\nRéférence exercice : JAVA-286`",
    reponse_v: "sealed class A permits B, C {}",
    reponse_f1: "final class A extends B, C {}",
    reponse_f2: "abstract class A restricts B, C {}",
    explication:
      "sealed et permits définissent l'ensemble autorisé de sous-types directs.",
  },
  {
    id: 287,
    question:
      "`Java — module system\n\nQuel fichier décrit les dépendances et exports d'un module Java ?\n\nRéférence exercice : JAVA-287`",
    reponse_v: "module-info.java",
    reponse_f1: "package-info.java",
    reponse_f2: "manifest.java",
    explication:
      "module-info.java contient requires, exports, opens, uses et provides.",
  },
  {
    id: 288,
    question:
      "`Java — sérialisation\n\nQuel champ n'est pas sérialisé par défaut lorsqu'il est marqué avec un mot-clé dédié ?\n\nRéférence exercice : JAVA-288`",
    reponse_v: "transient",
    reponse_f1: "volatile",
    reponse_f2: "final",
    explication: "transient exclut le champ de la sérialisation Java standard.",
  },
  {
    id: 289,
    question:
      "`Java — référence faible\n\nQuel usage correspond le mieux à WeakReference ?\n\nRéférence exercice : JAVA-289`",
    reponse_v:
      "permettre la collecte de l'objet s'il n'existe plus de référence forte",
    reponse_f1: "empêcher définitivement la collecte",
    reponse_f2: "rendre l'objet immutable",
    explication:
      "Une référence faible n'empêche pas le garbage collector de récupérer l'objet.",
  },
  {
    id: 290,
    question:
      "`Java — pile et tas\n\nOù sont généralement stockés les objets créés avec new ?\n\nRéférence exercice : JAVA-290`",
    reponse_v: "dans le tas",
    reponse_f1: "dans la pile du thread appelant",
    reponse_f2: "dans le metaspace",
    explication:
      "Les objets vivent généralement dans le heap ; les références locales peuvent être sur la pile.",
  },
  {
    id: 291,
    question:
      "`Java — garbage collector\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : JAVA-291`",
    reponse_v: "un objet devient éligible lorsqu'il n'est plus atteignable",
    reponse_f1: "un objet est collecté dès qu'une référence devient null",
    reponse_f2: "System.gc() garantit une collecte immédiate",
    explication:
      "L'éligibilité dépend de l'absence de chemin de références depuis les racines GC.",
  },
  {
    id: 292,
    question:
      '`Java — String pool\n\nQuelle sortie produit ce code ?\n\nString a = "java";\nString b = "ja" + "va";\nSystem.out.println(a == b);\n\nRéférence exercice : JAVA-292`',
    reponse_v: "true",
    reponse_f1: "false",
    reponse_f2: "Compilation impossible",
    explication:
      "Les concaténations constantes sont évaluées à la compilation et internées.",
  },
  {
    id: 293,
    question:
      "`Java — class loader\n\nQuel composant charge les classes de l'application depuis le classpath ou module path ?\n\nRéférence exercice : JAVA-293`",
    reponse_v: "Application ClassLoader",
    reponse_f1: "Bootstrap ClassLoader uniquement",
    reponse_f2: "Garbage Collector",
    explication: "L'Application ClassLoader charge les classes applicatives.",
  },
  {
    id: 294,
    question:
      "`Java — réflexion\n\nQuelle méthode permet d'obtenir toutes les méthodes déclarées directement dans une classe, y compris privées ?\n\nRéférence exercice : JAVA-294`",
    reponse_v: "getDeclaredMethods()",
    reponse_f1: "getMethods()",
    reponse_f2: "methods()",
    explication:
      "getDeclaredMethods retourne les méthodes déclarées dans la classe, quel que soit leur niveau d'accès.",
  },
  {
    id: 295,
    question:
      "`Java — annotation runtime\n\nQuelle rétention rend une annotation accessible par réflexion à l'exécution ?\n\nRéférence exercice : JAVA-295`",
    reponse_v: "RetentionPolicy.RUNTIME",
    reponse_f1: "RetentionPolicy.CLASS",
    reponse_f2: "RetentionPolicy.SOURCE",
    explication:
      "RUNTIME conserve l'annotation dans le bytecode et la rend visible à la réflexion.",
  },
  {
    id: 296,
    question:
      "`Java — sealed class\n\nQuelle déclaration limite explicitement les sous-classes autorisées ?\n\nRéférence exercice : JAVA-296`",
    reponse_v: "sealed class A permits B, C {}",
    reponse_f1: "final class A extends B, C {}",
    reponse_f2: "abstract class A restricts B, C {}",
    explication:
      "sealed et permits définissent l'ensemble autorisé de sous-types directs.",
  },
  {
    id: 297,
    question:
      "`Java — module system\n\nQuel fichier décrit les dépendances et exports d'un module Java ?\n\nRéférence exercice : JAVA-297`",
    reponse_v: "module-info.java",
    reponse_f1: "package-info.java",
    reponse_f2: "manifest.java",
    explication:
      "module-info.java contient requires, exports, opens, uses et provides.",
  },
  {
    id: 298,
    question:
      "`Java — sérialisation\n\nQuel champ n'est pas sérialisé par défaut lorsqu'il est marqué avec un mot-clé dédié ?\n\nRéférence exercice : JAVA-298`",
    reponse_v: "transient",
    reponse_f1: "volatile",
    reponse_f2: "final",
    explication: "transient exclut le champ de la sérialisation Java standard.",
  },
  {
    id: 299,
    question:
      "`Java — référence faible\n\nQuel usage correspond le mieux à WeakReference ?\n\nRéférence exercice : JAVA-299`",
    reponse_v:
      "permettre la collecte de l'objet s'il n'existe plus de référence forte",
    reponse_f1: "empêcher définitivement la collecte",
    reponse_f2: "rendre l'objet immutable",
    explication:
      "Une référence faible n'empêche pas le garbage collector de récupérer l'objet.",
  },
  {
    id: 300,
    question:
      "`Java — pile et tas\n\nOù sont généralement stockés les objets créés avec new ?\n\nRéférence exercice : JAVA-300`",
    reponse_v: "dans le tas",
    reponse_f1: "dans la pile du thread appelant",
    reponse_f2: "dans le metaspace",
    explication:
      "Les objets vivent généralement dans le heap ; les références locales peuvent être sur la pile.",
  },
];
