export const dataQuizz_javascript_mini_tp_tres_difficiles = [
  {
    id: 1,
    question:
      `JavaScript — égalité abstraite\n\nQuelle sortie produit ce code ?\n\nconsole.log(0 == false, 0 === false);\n\nRéférence exercice : JS-001`,
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication:
      "== effectue une coercition, tandis que === compare aussi les types.",
  },
  {
    id: 2,
    question:
      "`JavaScript — typeof\n\nQuelle sortie produit ce code ?\n\nconsole.log(typeof null);\n\nRéférence exercice : JS-002`",
    reponse_v: "object",
    reponse_f1: "null",
    reponse_f2: "undefined",
    explication: "typeof null renvoie historiquement 'object'.",
  },
  {
    id: 3,
    question:
      '`JavaScript — addition et soustraction\n\nQuelle sortie produit ce code ?\n\nconsole.log("5" + 2, "5" - 2);\n\nRéférence exercice : JS-003`',
    reponse_v: "52 3",
    reponse_f1: "7 3",
    reponse_f2: "52 NaN",
    explication:
      "L'opérateur + concatène avec une chaîne ; - force une conversion numérique.",
  },
  {
    id: 4,
    question:
      "`JavaScript — NaN\n\nQuelle sortie produit ce code ?\n\nconsole.log(NaN === NaN, Object.is(NaN, NaN));\n\nRéférence exercice : JS-004`",
    reponse_v: "false true",
    reponse_f1: "true true",
    reponse_f2: "false false",
    explication:
      "NaN n'est jamais égal à lui-même avec ===, mais Object.is le reconnaît.",
  },
  {
    id: 5,
    question:
      "`JavaScript — -0\n\nQuelle sortie produit ce code ?\n\nconsole.log(0 === -0, Object.is(0, -0));\n\nRéférence exercice : JS-005`",
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication: "=== considère 0 et -0 égaux, contrairement à Object.is.",
  },
  {
    id: 6,
    question:
      "`JavaScript — hoisting avec var\n\nQuelle valeur est affichée ?\n\nconsole.log(x);\nvar x = 10;\n\nRéférence exercice : JS-006`",
    reponse_v: "undefined",
    reponse_f1: "10",
    reponse_f2: "ReferenceError",
    explication:
      "La déclaration var est remontée, mais pas son initialisation.",
  },
  {
    id: 7,
    question:
      "`JavaScript — zone morte temporelle\n\nQue provoque ce code ?\n\nconsole.log(x);\nlet x = 10;\n\nRéférence exercice : JS-007`",
    reponse_v: "ReferenceError",
    reponse_f1: "undefined",
    reponse_f2: "10",
    explication:
      "Une variable let existe dans la TDZ avant son initialisation.",
  },
  {
    id: 8,
    question:
      '`JavaScript — opérateur logique\n\nQuelle valeur reçoit result ?\n\nconst result = 0 || "fallback";\n\nRéférence exercice : JS-008`',
    reponse_v: "fallback",
    reponse_f1: "0",
    reponse_f2: "undefined",
    explication: "0 est falsy, donc || retourne l'opérande de droite.",
  },
  {
    id: 9,
    question:
      '`JavaScript — coalescence nulle\n\nQuelle valeur reçoit result ?\n\nconst result = 0 ?? "fallback";\n\nRéférence exercice : JS-009`',
    reponse_v: "0",
    reponse_f1: "fallback",
    reponse_f2: "null",
    explication: "?? ne bascule que pour null ou undefined, pas pour 0.",
  },
  {
    id: 10,
    question:
      "`JavaScript — coercition implicite\n\nQuelle valeur est affichée ?\n\nconsole.log([] + {});\n\nRéférence exercice : JS-010`",
    reponse_v: "[object Object]",
    reponse_f1: "{}",
    reponse_f2: "NaN",
    explication:
      "Le tableau vide devient une chaîne vide, puis l'objet devient '[object Object]'.",
  },
  {
    id: 11,
    question:
      "`JavaScript — égalité abstraite\n\nQuelle sortie produit ce code ?\n\nconsole.log(0 == false, 0 === false);\n\nRéférence exercice : JS-011`",
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication:
      "== effectue une coercition, tandis que === compare aussi les types.",
  },
  {
    id: 12,
    question:
      "`JavaScript — typeof\n\nQuelle sortie produit ce code ?\n\nconsole.log(typeof null);\n\nRéférence exercice : JS-012`",
    reponse_v: "object",
    reponse_f1: "null",
    reponse_f2: "undefined",
    explication: "typeof null renvoie historiquement 'object'.",
  },
  {
    id: 13,
    question:
      '`JavaScript — addition et soustraction\n\nQuelle sortie produit ce code ?\n\nconsole.log("5" + 2, "5" - 2);\n\nRéférence exercice : JS-013`',
    reponse_v: "52 3",
    reponse_f1: "7 3",
    reponse_f2: "52 NaN",
    explication:
      "L'opérateur + concatène avec une chaîne ; - force une conversion numérique.",
  },
  {
    id: 14,
    question:
      "`JavaScript — NaN\n\nQuelle sortie produit ce code ?\n\nconsole.log(NaN === NaN, Object.is(NaN, NaN));\n\nRéférence exercice : JS-014`",
    reponse_v: "false true",
    reponse_f1: "true true",
    reponse_f2: "false false",
    explication:
      "NaN n'est jamais égal à lui-même avec ===, mais Object.is le reconnaît.",
  },
  {
    id: 15,
    question:
      "`JavaScript — -0\n\nQuelle sortie produit ce code ?\n\nconsole.log(0 === -0, Object.is(0, -0));\n\nRéférence exercice : JS-015`",
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication: "=== considère 0 et -0 égaux, contrairement à Object.is.",
  },
  {
    id: 16,
    question:
      "`JavaScript — hoisting avec var\n\nQuelle valeur est affichée ?\n\nconsole.log(x);\nvar x = 10;\n\nRéférence exercice : JS-016`",
    reponse_v: "undefined",
    reponse_f1: "10",
    reponse_f2: "ReferenceError",
    explication:
      "La déclaration var est remontée, mais pas son initialisation.",
  },
  {
    id: 17,
    question:
      "`JavaScript — zone morte temporelle\n\nQue provoque ce code ?\n\nconsole.log(x);\nlet x = 10;\n\nRéférence exercice : JS-017`",
    reponse_v: "ReferenceError",
    reponse_f1: "undefined",
    reponse_f2: "10",
    explication:
      "Une variable let existe dans la TDZ avant son initialisation.",
  },
  {
    id: 18,
    question:
      '`JavaScript — opérateur logique\n\nQuelle valeur reçoit result ?\n\nconst result = 0 || "fallback";\n\nRéférence exercice : JS-018`',
    reponse_v: "fallback",
    reponse_f1: "0",
    reponse_f2: "undefined",
    explication: "0 est falsy, donc || retourne l'opérande de droite.",
  },
  {
    id: 19,
    question:
      '`JavaScript — coalescence nulle\n\nQuelle valeur reçoit result ?\n\nconst result = 0 ?? "fallback";\n\nRéférence exercice : JS-019`',
    reponse_v: "0",
    reponse_f1: "fallback",
    reponse_f2: "null",
    explication: "?? ne bascule que pour null ou undefined, pas pour 0.",
  },
  {
    id: 20,
    question:
      "`JavaScript — coercition implicite\n\nQuelle valeur est affichée ?\n\nconsole.log([] + {});\n\nRéférence exercice : JS-020`",
    reponse_v: "[object Object]",
    reponse_f1: "{}",
    reponse_f2: "NaN",
    explication:
      "Le tableau vide devient une chaîne vide, puis l'objet devient '[object Object]'.",
  },
  {
    id: 21,
    question:
      "`JavaScript — égalité abstraite\n\nQuelle sortie produit ce code ?\n\nconsole.log(0 == false, 0 === false);\n\nRéférence exercice : JS-021`",
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication:
      "== effectue une coercition, tandis que === compare aussi les types.",
  },
  {
    id: 22,
    question:
      "`JavaScript — typeof\n\nQuelle sortie produit ce code ?\n\nconsole.log(typeof null);\n\nRéférence exercice : JS-022`",
    reponse_v: "object",
    reponse_f1: "null",
    reponse_f2: "undefined",
    explication: "typeof null renvoie historiquement 'object'.",
  },
  {
    id: 23,
    question:
      '`JavaScript — addition et soustraction\n\nQuelle sortie produit ce code ?\n\nconsole.log("5" + 2, "5" - 2);\n\nRéférence exercice : JS-023`',
    reponse_v: "52 3",
    reponse_f1: "7 3",
    reponse_f2: "52 NaN",
    explication:
      "L'opérateur + concatène avec une chaîne ; - force une conversion numérique.",
  },
  {
    id: 24,
    question:
      "`JavaScript — NaN\n\nQuelle sortie produit ce code ?\n\nconsole.log(NaN === NaN, Object.is(NaN, NaN));\n\nRéférence exercice : JS-024`",
    reponse_v: "false true",
    reponse_f1: "true true",
    reponse_f2: "false false",
    explication:
      "NaN n'est jamais égal à lui-même avec ===, mais Object.is le reconnaît.",
  },
  {
    id: 25,
    question:
      "`JavaScript — -0\n\nQuelle sortie produit ce code ?\n\nconsole.log(0 === -0, Object.is(0, -0));\n\nRéférence exercice : JS-025`",
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication: "=== considère 0 et -0 égaux, contrairement à Object.is.",
  },
  {
    id: 26,
    question:
      "`JavaScript — hoisting avec var\n\nQuelle valeur est affichée ?\n\nconsole.log(x);\nvar x = 10;\n\nRéférence exercice : JS-026`",
    reponse_v: "undefined",
    reponse_f1: "10",
    reponse_f2: "ReferenceError",
    explication:
      "La déclaration var est remontée, mais pas son initialisation.",
  },
  {
    id: 27,
    question:
      "`JavaScript — zone morte temporelle\n\nQue provoque ce code ?\n\nconsole.log(x);\nlet x = 10;\n\nRéférence exercice : JS-027`",
    reponse_v: "ReferenceError",
    reponse_f1: "undefined",
    reponse_f2: "10",
    explication:
      "Une variable let existe dans la TDZ avant son initialisation.",
  },
  {
    id: 28,
    question:
      '`JavaScript — opérateur logique\n\nQuelle valeur reçoit result ?\n\nconst result = 0 || "fallback";\n\nRéférence exercice : JS-028`',
    reponse_v: "fallback",
    reponse_f1: "0",
    reponse_f2: "undefined",
    explication: "0 est falsy, donc || retourne l'opérande de droite.",
  },
  {
    id: 29,
    question:
      '`JavaScript — coalescence nulle\n\nQuelle valeur reçoit result ?\n\nconst result = 0 ?? "fallback";\n\nRéférence exercice : JS-029`',
    reponse_v: "0",
    reponse_f1: "fallback",
    reponse_f2: "null",
    explication: "?? ne bascule que pour null ou undefined, pas pour 0.",
  },
  {
    id: 30,
    question:
      "`JavaScript — coercition implicite\n\nQuelle valeur est affichée ?\n\nconsole.log([] + {});\n\nRéférence exercice : JS-030`",
    reponse_v: "[object Object]",
    reponse_f1: "{}",
    reponse_f2: "NaN",
    explication:
      "Le tableau vide devient une chaîne vide, puis l'objet devient '[object Object]'.",
  },
  {
    id: 31,
    question:
      "`JavaScript — égalité abstraite\n\nQuelle sortie produit ce code ?\n\nconsole.log(0 == false, 0 === false);\n\nRéférence exercice : JS-031`",
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication:
      "== effectue une coercition, tandis que === compare aussi les types.",
  },
  {
    id: 32,
    question:
      "`JavaScript — typeof\n\nQuelle sortie produit ce code ?\n\nconsole.log(typeof null);\n\nRéférence exercice : JS-032`",
    reponse_v: "object",
    reponse_f1: "null",
    reponse_f2: "undefined",
    explication: "typeof null renvoie historiquement 'object'.",
  },
  {
    id: 33,
    question:
      '`JavaScript — addition et soustraction\n\nQuelle sortie produit ce code ?\n\nconsole.log("5" + 2, "5" - 2);\n\nRéférence exercice : JS-033`',
    reponse_v: "52 3",
    reponse_f1: "7 3",
    reponse_f2: "52 NaN",
    explication:
      "L'opérateur + concatène avec une chaîne ; - force une conversion numérique.",
  },
  {
    id: 34,
    question:
      "`JavaScript — NaN\n\nQuelle sortie produit ce code ?\n\nconsole.log(NaN === NaN, Object.is(NaN, NaN));\n\nRéférence exercice : JS-034`",
    reponse_v: "false true",
    reponse_f1: "true true",
    reponse_f2: "false false",
    explication:
      "NaN n'est jamais égal à lui-même avec ===, mais Object.is le reconnaît.",
  },
  {
    id: 35,
    question:
      "`JavaScript — -0\n\nQuelle sortie produit ce code ?\n\nconsole.log(0 === -0, Object.is(0, -0));\n\nRéférence exercice : JS-035`",
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication: "=== considère 0 et -0 égaux, contrairement à Object.is.",
  },
  {
    id: 36,
    question:
      "`JavaScript — hoisting avec var\n\nQuelle valeur est affichée ?\n\nconsole.log(x);\nvar x = 10;\n\nRéférence exercice : JS-036`",
    reponse_v: "undefined",
    reponse_f1: "10",
    reponse_f2: "ReferenceError",
    explication:
      "La déclaration var est remontée, mais pas son initialisation.",
  },
  {
    id: 37,
    question:
      "`JavaScript — zone morte temporelle\n\nQue provoque ce code ?\n\nconsole.log(x);\nlet x = 10;\n\nRéférence exercice : JS-037`",
    reponse_v: "ReferenceError",
    reponse_f1: "undefined",
    reponse_f2: "10",
    explication:
      "Une variable let existe dans la TDZ avant son initialisation.",
  },
  {
    id: 38,
    question:
      '`JavaScript — opérateur logique\n\nQuelle valeur reçoit result ?\n\nconst result = 0 || "fallback";\n\nRéférence exercice : JS-038`',
    reponse_v: "fallback",
    reponse_f1: "0",
    reponse_f2: "undefined",
    explication: "0 est falsy, donc || retourne l'opérande de droite.",
  },
  {
    id: 39,
    question:
      '`JavaScript — coalescence nulle\n\nQuelle valeur reçoit result ?\n\nconst result = 0 ?? "fallback";\n\nRéférence exercice : JS-039`',
    reponse_v: "0",
    reponse_f1: "fallback",
    reponse_f2: "null",
    explication: "?? ne bascule que pour null ou undefined, pas pour 0.",
  },
  {
    id: 40,
    question:
      "`JavaScript — coercition implicite\n\nQuelle valeur est affichée ?\n\nconsole.log([] + {});\n\nRéférence exercice : JS-040`",
    reponse_v: "[object Object]",
    reponse_f1: "{}",
    reponse_f2: "NaN",
    explication:
      "Le tableau vide devient une chaîne vide, puis l'objet devient '[object Object]'.",
  },
  {
    id: 41,
    question:
      "`JavaScript — égalité abstraite\n\nQuelle sortie produit ce code ?\n\nconsole.log(0 == false, 0 === false);\n\nRéférence exercice : JS-041`",
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication:
      "== effectue une coercition, tandis que === compare aussi les types.",
  },
  {
    id: 42,
    question:
      "`JavaScript — typeof\n\nQuelle sortie produit ce code ?\n\nconsole.log(typeof null);\n\nRéférence exercice : JS-042`",
    reponse_v: "object",
    reponse_f1: "null",
    reponse_f2: "undefined",
    explication: "typeof null renvoie historiquement 'object'.",
  },
  {
    id: 43,
    question:
      '`JavaScript — addition et soustraction\n\nQuelle sortie produit ce code ?\n\nconsole.log("5" + 2, "5" - 2);\n\nRéférence exercice : JS-043`',
    reponse_v: "52 3",
    reponse_f1: "7 3",
    reponse_f2: "52 NaN",
    explication:
      "L'opérateur + concatène avec une chaîne ; - force une conversion numérique.",
  },
  {
    id: 44,
    question:
      "`JavaScript — NaN\n\nQuelle sortie produit ce code ?\n\nconsole.log(NaN === NaN, Object.is(NaN, NaN));\n\nRéférence exercice : JS-044`",
    reponse_v: "false true",
    reponse_f1: "true true",
    reponse_f2: "false false",
    explication:
      "NaN n'est jamais égal à lui-même avec ===, mais Object.is le reconnaît.",
  },
  {
    id: 45,
    question:
      "`JavaScript — -0\n\nQuelle sortie produit ce code ?\n\nconsole.log(0 === -0, Object.is(0, -0));\n\nRéférence exercice : JS-045`",
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication: "=== considère 0 et -0 égaux, contrairement à Object.is.",
  },
  {
    id: 46,
    question:
      "`JavaScript — hoisting avec var\n\nQuelle valeur est affichée ?\n\nconsole.log(x);\nvar x = 10;\n\nRéférence exercice : JS-046`",
    reponse_v: "undefined",
    reponse_f1: "10",
    reponse_f2: "ReferenceError",
    explication:
      "La déclaration var est remontée, mais pas son initialisation.",
  },
  {
    id: 47,
    question:
      "`JavaScript — zone morte temporelle\n\nQue provoque ce code ?\n\nconsole.log(x);\nlet x = 10;\n\nRéférence exercice : JS-047`",
    reponse_v: "ReferenceError",
    reponse_f1: "undefined",
    reponse_f2: "10",
    explication:
      "Une variable let existe dans la TDZ avant son initialisation.",
  },
  {
    id: 48,
    question:
      '`JavaScript — opérateur logique\n\nQuelle valeur reçoit result ?\n\nconst result = 0 || "fallback";\n\nRéférence exercice : JS-048`',
    reponse_v: "fallback",
    reponse_f1: "0",
    reponse_f2: "undefined",
    explication: "0 est falsy, donc || retourne l'opérande de droite.",
  },
  {
    id: 49,
    question:
      '`JavaScript — coalescence nulle\n\nQuelle valeur reçoit result ?\n\nconst result = 0 ?? "fallback";\n\nRéférence exercice : JS-049`',
    reponse_v: "0",
    reponse_f1: "fallback",
    reponse_f2: "null",
    explication: "?? ne bascule que pour null ou undefined, pas pour 0.",
  },
  {
    id: 50,
    question:
      "`JavaScript — coercition implicite\n\nQuelle valeur est affichée ?\n\nconsole.log([] + {});\n\nRéférence exercice : JS-050`",
    reponse_v: "[object Object]",
    reponse_f1: "{}",
    reponse_f2: "NaN",
    explication:
      "Le tableau vide devient une chaîne vide, puis l'objet devient '[object Object]'.",
  },
  {
    id: 51,
    question:
      "`JavaScript — boucle et var\n\nQuelle sortie est la plus probable ?\n\nconst fns = [];\nfor (var i = 0; i < 3; i++) {\n  fns.push(() => i);\n}\nconsole.log(fns.map(f => f()));\n\nRéférence exercice : JS-051`",
    reponse_v: "[3, 3, 3]",
    reponse_f1: "[0, 1, 2]",
    reponse_f2: "[2, 2, 2]",
    explication: "var crée une seule liaison partagée par toutes les closures.",
  },
  {
    id: 52,
    question:
      "`JavaScript — boucle et let\n\nQuelle sortie produit ce code ?\n\nconst fns = [];\nfor (let i = 0; i < 3; i++) {\n  fns.push(() => i);\n}\nconsole.log(fns.map(f => f()));\n\nRéférence exercice : JS-052`",
    reponse_v: "[0, 1, 2]",
    reponse_f1: "[3, 3, 3]",
    reponse_f2: "[2, 2, 2]",
    explication: "let crée une liaison distincte à chaque itération.",
  },
  {
    id: 53,
    question:
      "`JavaScript — this dans une méthode\n\nQuelle valeur est affichée ?\n\nconst obj = {\n  x: 42,\n  getX() { return this.x; }\n};\nconsole.log(obj.getX());\n\nRéférence exercice : JS-053`",
    reponse_v: "42",
    reponse_f1: "undefined",
    reponse_f2: "ReferenceError",
    explication: "Appelée comme méthode, la fonction reçoit obj comme this.",
  },
  {
    id: 54,
    question:
      "`JavaScript — perte de contexte\n\nQue renvoie généralement ce code en mode strict ?\n\nconst obj = {\n  x: 42,\n  getX() { return this.x; }\n};\nconst fn = obj.getX;\nconsole.log(fn());\n\nRéférence exercice : JS-054`",
    reponse_v: "TypeError",
    reponse_f1: "42",
    reponse_f2: "undefined sans erreur",
    explication:
      "En mode strict, this vaut undefined dans un appel de fonction simple.",
  },
  {
    id: 55,
    question:
      "`JavaScript — fonction fléchée et this\n\nQuelle affirmation est correcte ?\n\nconst obj = {\n  x: 10,\n  f: () => this.x\n};\n\nRéférence exercice : JS-055`",
    reponse_v: "La fonction fléchée ne lie pas son propre this",
    reponse_f1: "this désigne toujours obj",
    reponse_f2: "this vaut toujours null",
    explication: "Une arrow function capture lexicalement this.",
  },
  {
    id: 56,
    question:
      "`JavaScript — bind\n\nQuelle valeur est affichée ?\n\nfunction f() { return this.x; }\nconst g = f.bind({ x: 7 });\nconsole.log(g.call({ x: 9 }));\n\nRéférence exercice : JS-056`",
    reponse_v: "7",
    reponse_f1: "9",
    reponse_f2: "undefined",
    explication:
      "bind fixe définitivement this, même si call tente d'en fournir un autre.",
  },
  {
    id: 57,
    question:
      "`JavaScript — chaîne de prototypes\n\nQuelle sortie produit ce code ?\n\nconst proto = { x: 1 };\nconst obj = Object.create(proto);\nobj.x = 2;\ndelete obj.x;\nconsole.log(obj.x);\n\nRéférence exercice : JS-057`",
    reponse_v: "1",
    reponse_f1: "2",
    reponse_f2: "undefined",
    explication:
      "Après suppression de la propriété propre, la recherche remonte au prototype.",
  },
  {
    id: 58,
    question:
      '`JavaScript — propriété propre\n\nQuelle sortie produit ce code ?\n\nconst proto = { x: 1 };\nconst obj = Object.create(proto);\nconsole.log("x" in obj, Object.hasOwn(obj, "x"));\n\nRéférence exercice : JS-058`',
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication:
      "in inspecte toute la chaîne de prototypes, Object.hasOwn uniquement l'objet.",
  },
  {
    id: 59,
    question:
      "`JavaScript — class et prototype\n\nQuelle affirmation est correcte ?\n\nclass A {\n  f() {}\n}\n\nRéférence exercice : JS-059`",
    reponse_v: "f est placée sur A.prototype",
    reponse_f1: "f est copiée dans chaque instance",
    reponse_f2: "f est une propriété statique de A",
    explication:
      "Les méthodes d'instance déclarées dans une class sont stockées sur le prototype.",
  },
  {
    id: 60,
    question:
      "`JavaScript — closure\n\nQuelle sortie produit ce code ?\n\nfunction outer() {\n  let x = 1;\n  return () => ++x;\n}\nconst f = outer();\nconsole.log(f(), f());\n\nRéférence exercice : JS-060`",
    reponse_v: "2 3",
    reponse_f1: "1 2",
    reponse_f2: "2 2",
    explication: "La closure conserve la même variable x entre les appels.",
  },
  {
    id: 61,
    question:
      "`JavaScript — boucle et var\n\nQuelle sortie est la plus probable ?\n\nconst fns = [];\nfor (var i = 0; i < 3; i++) {\n  fns.push(() => i);\n}\nconsole.log(fns.map(f => f()));\n\nRéférence exercice : JS-061`",
    reponse_v: "[3, 3, 3]",
    reponse_f1: "[0, 1, 2]",
    reponse_f2: "[2, 2, 2]",
    explication: "var crée une seule liaison partagée par toutes les closures.",
  },
  {
    id: 62,
    question:
      "`JavaScript — boucle et let\n\nQuelle sortie produit ce code ?\n\nconst fns = [];\nfor (let i = 0; i < 3; i++) {\n  fns.push(() => i);\n}\nconsole.log(fns.map(f => f()));\n\nRéférence exercice : JS-062`",
    reponse_v: "[0, 1, 2]",
    reponse_f1: "[3, 3, 3]",
    reponse_f2: "[2, 2, 2]",
    explication: "let crée une liaison distincte à chaque itération.",
  },
  {
    id: 63,
    question:
      "`JavaScript — this dans une méthode\n\nQuelle valeur est affichée ?\n\nconst obj = {\n  x: 42,\n  getX() { return this.x; }\n};\nconsole.log(obj.getX());\n\nRéférence exercice : JS-063`",
    reponse_v: "42",
    reponse_f1: "undefined",
    reponse_f2: "ReferenceError",
    explication: "Appelée comme méthode, la fonction reçoit obj comme this.",
  },
  {
    id: 64,
    question:
      "`JavaScript — perte de contexte\n\nQue renvoie généralement ce code en mode strict ?\n\nconst obj = {\n  x: 42,\n  getX() { return this.x; }\n};\nconst fn = obj.getX;\nconsole.log(fn());\n\nRéférence exercice : JS-064`",
    reponse_v: "TypeError",
    reponse_f1: "42",
    reponse_f2: "undefined sans erreur",
    explication:
      "En mode strict, this vaut undefined dans un appel de fonction simple.",
  },
  {
    id: 65,
    question:
      "`JavaScript — fonction fléchée et this\n\nQuelle affirmation est correcte ?\n\nconst obj = {\n  x: 10,\n  f: () => this.x\n};\n\nRéférence exercice : JS-065`",
    reponse_v: "La fonction fléchée ne lie pas son propre this",
    reponse_f1: "this désigne toujours obj",
    reponse_f2: "this vaut toujours null",
    explication: "Une arrow function capture lexicalement this.",
  },
  {
    id: 66,
    question:
      "`JavaScript — bind\n\nQuelle valeur est affichée ?\n\nfunction f() { return this.x; }\nconst g = f.bind({ x: 7 });\nconsole.log(g.call({ x: 9 }));\n\nRéférence exercice : JS-066`",
    reponse_v: "7",
    reponse_f1: "9",
    reponse_f2: "undefined",
    explication:
      "bind fixe définitivement this, même si call tente d'en fournir un autre.",
  },
  {
    id: 67,
    question:
      "`JavaScript — chaîne de prototypes\n\nQuelle sortie produit ce code ?\n\nconst proto = { x: 1 };\nconst obj = Object.create(proto);\nobj.x = 2;\ndelete obj.x;\nconsole.log(obj.x);\n\nRéférence exercice : JS-067`",
    reponse_v: "1",
    reponse_f1: "2",
    reponse_f2: "undefined",
    explication:
      "Après suppression de la propriété propre, la recherche remonte au prototype.",
  },
  {
    id: 68,
    question:
      '`JavaScript — propriété propre\n\nQuelle sortie produit ce code ?\n\nconst proto = { x: 1 };\nconst obj = Object.create(proto);\nconsole.log("x" in obj, Object.hasOwn(obj, "x"));\n\nRéférence exercice : JS-068`',
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication:
      "in inspecte toute la chaîne de prototypes, Object.hasOwn uniquement l'objet.",
  },
  {
    id: 69,
    question:
      "`JavaScript — class et prototype\n\nQuelle affirmation est correcte ?\n\nclass A {\n  f() {}\n}\n\nRéférence exercice : JS-069`",
    reponse_v: "f est placée sur A.prototype",
    reponse_f1: "f est copiée dans chaque instance",
    reponse_f2: "f est une propriété statique de A",
    explication:
      "Les méthodes d'instance déclarées dans une class sont stockées sur le prototype.",
  },
  {
    id: 70,
    question:
      "`JavaScript — closure\n\nQuelle sortie produit ce code ?\n\nfunction outer() {\n  let x = 1;\n  return () => ++x;\n}\nconst f = outer();\nconsole.log(f(), f());\n\nRéférence exercice : JS-070`",
    reponse_v: "2 3",
    reponse_f1: "1 2",
    reponse_f2: "2 2",
    explication: "La closure conserve la même variable x entre les appels.",
  },
  {
    id: 71,
    question:
      "`JavaScript — boucle et var\n\nQuelle sortie est la plus probable ?\n\nconst fns = [];\nfor (var i = 0; i < 3; i++) {\n  fns.push(() => i);\n}\nconsole.log(fns.map(f => f()));\n\nRéférence exercice : JS-071`",
    reponse_v: "[3, 3, 3]",
    reponse_f1: "[0, 1, 2]",
    reponse_f2: "[2, 2, 2]",
    explication: "var crée une seule liaison partagée par toutes les closures.",
  },
  {
    id: 72,
    question:
      "`JavaScript — boucle et let\n\nQuelle sortie produit ce code ?\n\nconst fns = [];\nfor (let i = 0; i < 3; i++) {\n  fns.push(() => i);\n}\nconsole.log(fns.map(f => f()));\n\nRéférence exercice : JS-072`",
    reponse_v: "[0, 1, 2]",
    reponse_f1: "[3, 3, 3]",
    reponse_f2: "[2, 2, 2]",
    explication: "let crée une liaison distincte à chaque itération.",
  },
  {
    id: 73,
    question:
      "`JavaScript — this dans une méthode\n\nQuelle valeur est affichée ?\n\nconst obj = {\n  x: 42,\n  getX() { return this.x; }\n};\nconsole.log(obj.getX());\n\nRéférence exercice : JS-073`",
    reponse_v: "42",
    reponse_f1: "undefined",
    reponse_f2: "ReferenceError",
    explication: "Appelée comme méthode, la fonction reçoit obj comme this.",
  },
  {
    id: 74,
    question:
      "`JavaScript — perte de contexte\n\nQue renvoie généralement ce code en mode strict ?\n\nconst obj = {\n  x: 42,\n  getX() { return this.x; }\n};\nconst fn = obj.getX;\nconsole.log(fn());\n\nRéférence exercice : JS-074`",
    reponse_v: "TypeError",
    reponse_f1: "42",
    reponse_f2: "undefined sans erreur",
    explication:
      "En mode strict, this vaut undefined dans un appel de fonction simple.",
  },
  {
    id: 75,
    question:
      "`JavaScript — fonction fléchée et this\n\nQuelle affirmation est correcte ?\n\nconst obj = {\n  x: 10,\n  f: () => this.x\n};\n\nRéférence exercice : JS-075`",
    reponse_v: "La fonction fléchée ne lie pas son propre this",
    reponse_f1: "this désigne toujours obj",
    reponse_f2: "this vaut toujours null",
    explication: "Une arrow function capture lexicalement this.",
  },
  {
    id: 76,
    question:
      "`JavaScript — bind\n\nQuelle valeur est affichée ?\n\nfunction f() { return this.x; }\nconst g = f.bind({ x: 7 });\nconsole.log(g.call({ x: 9 }));\n\nRéférence exercice : JS-076`",
    reponse_v: "7",
    reponse_f1: "9",
    reponse_f2: "undefined",
    explication:
      "bind fixe définitivement this, même si call tente d'en fournir un autre.",
  },
  {
    id: 77,
    question:
      "`JavaScript — chaîne de prototypes\n\nQuelle sortie produit ce code ?\n\nconst proto = { x: 1 };\nconst obj = Object.create(proto);\nobj.x = 2;\ndelete obj.x;\nconsole.log(obj.x);\n\nRéférence exercice : JS-077`",
    reponse_v: "1",
    reponse_f1: "2",
    reponse_f2: "undefined",
    explication:
      "Après suppression de la propriété propre, la recherche remonte au prototype.",
  },
  {
    id: 78,
    question:
      '`JavaScript — propriété propre\n\nQuelle sortie produit ce code ?\n\nconst proto = { x: 1 };\nconst obj = Object.create(proto);\nconsole.log("x" in obj, Object.hasOwn(obj, "x"));\n\nRéférence exercice : JS-078`',
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication:
      "in inspecte toute la chaîne de prototypes, Object.hasOwn uniquement l'objet.",
  },
  {
    id: 79,
    question:
      "`JavaScript — class et prototype\n\nQuelle affirmation est correcte ?\n\nclass A {\n  f() {}\n}\n\nRéférence exercice : JS-079`",
    reponse_v: "f est placée sur A.prototype",
    reponse_f1: "f est copiée dans chaque instance",
    reponse_f2: "f est une propriété statique de A",
    explication:
      "Les méthodes d'instance déclarées dans une class sont stockées sur le prototype.",
  },
  {
    id: 80,
    question:
      "`JavaScript — closure\n\nQuelle sortie produit ce code ?\n\nfunction outer() {\n  let x = 1;\n  return () => ++x;\n}\nconst f = outer();\nconsole.log(f(), f());\n\nRéférence exercice : JS-080`",
    reponse_v: "2 3",
    reponse_f1: "1 2",
    reponse_f2: "2 2",
    explication: "La closure conserve la même variable x entre les appels.",
  },
  {
    id: 81,
    question:
      "`JavaScript — boucle et var\n\nQuelle sortie est la plus probable ?\n\nconst fns = [];\nfor (var i = 0; i < 3; i++) {\n  fns.push(() => i);\n}\nconsole.log(fns.map(f => f()));\n\nRéférence exercice : JS-081`",
    reponse_v: "[3, 3, 3]",
    reponse_f1: "[0, 1, 2]",
    reponse_f2: "[2, 2, 2]",
    explication: "var crée une seule liaison partagée par toutes les closures.",
  },
  {
    id: 82,
    question:
      "`JavaScript — boucle et let\n\nQuelle sortie produit ce code ?\n\nconst fns = [];\nfor (let i = 0; i < 3; i++) {\n  fns.push(() => i);\n}\nconsole.log(fns.map(f => f()));\n\nRéférence exercice : JS-082`",
    reponse_v: "[0, 1, 2]",
    reponse_f1: "[3, 3, 3]",
    reponse_f2: "[2, 2, 2]",
    explication: "let crée une liaison distincte à chaque itération.",
  },
  {
    id: 83,
    question:
      "`JavaScript — this dans une méthode\n\nQuelle valeur est affichée ?\n\nconst obj = {\n  x: 42,\n  getX() { return this.x; }\n};\nconsole.log(obj.getX());\n\nRéférence exercice : JS-083`",
    reponse_v: "42",
    reponse_f1: "undefined",
    reponse_f2: "ReferenceError",
    explication: "Appelée comme méthode, la fonction reçoit obj comme this.",
  },
  {
    id: 84,
    question:
      "`JavaScript — perte de contexte\n\nQue renvoie généralement ce code en mode strict ?\n\nconst obj = {\n  x: 42,\n  getX() { return this.x; }\n};\nconst fn = obj.getX;\nconsole.log(fn());\n\nRéférence exercice : JS-084`",
    reponse_v: "TypeError",
    reponse_f1: "42",
    reponse_f2: "undefined sans erreur",
    explication:
      "En mode strict, this vaut undefined dans un appel de fonction simple.",
  },
  {
    id: 85,
    question:
      "`JavaScript — fonction fléchée et this\n\nQuelle affirmation est correcte ?\n\nconst obj = {\n  x: 10,\n  f: () => this.x\n};\n\nRéférence exercice : JS-085`",
    reponse_v: "La fonction fléchée ne lie pas son propre this",
    reponse_f1: "this désigne toujours obj",
    reponse_f2: "this vaut toujours null",
    explication: "Une arrow function capture lexicalement this.",
  },
  {
    id: 86,
    question:
      "`JavaScript — bind\n\nQuelle valeur est affichée ?\n\nfunction f() { return this.x; }\nconst g = f.bind({ x: 7 });\nconsole.log(g.call({ x: 9 }));\n\nRéférence exercice : JS-086`",
    reponse_v: "7",
    reponse_f1: "9",
    reponse_f2: "undefined",
    explication:
      "bind fixe définitivement this, même si call tente d'en fournir un autre.",
  },
  {
    id: 87,
    question:
      "`JavaScript — chaîne de prototypes\n\nQuelle sortie produit ce code ?\n\nconst proto = { x: 1 };\nconst obj = Object.create(proto);\nobj.x = 2;\ndelete obj.x;\nconsole.log(obj.x);\n\nRéférence exercice : JS-087`",
    reponse_v: "1",
    reponse_f1: "2",
    reponse_f2: "undefined",
    explication:
      "Après suppression de la propriété propre, la recherche remonte au prototype.",
  },
  {
    id: 88,
    question:
      '`JavaScript — propriété propre\n\nQuelle sortie produit ce code ?\n\nconst proto = { x: 1 };\nconst obj = Object.create(proto);\nconsole.log("x" in obj, Object.hasOwn(obj, "x"));\n\nRéférence exercice : JS-088`',
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication:
      "in inspecte toute la chaîne de prototypes, Object.hasOwn uniquement l'objet.",
  },
  {
    id: 89,
    question:
      "`JavaScript — class et prototype\n\nQuelle affirmation est correcte ?\n\nclass A {\n  f() {}\n}\n\nRéférence exercice : JS-089`",
    reponse_v: "f est placée sur A.prototype",
    reponse_f1: "f est copiée dans chaque instance",
    reponse_f2: "f est une propriété statique de A",
    explication:
      "Les méthodes d'instance déclarées dans une class sont stockées sur le prototype.",
  },
  {
    id: 90,
    question:
      "`JavaScript — closure\n\nQuelle sortie produit ce code ?\n\nfunction outer() {\n  let x = 1;\n  return () => ++x;\n}\nconst f = outer();\nconsole.log(f(), f());\n\nRéférence exercice : JS-090`",
    reponse_v: "2 3",
    reponse_f1: "1 2",
    reponse_f2: "2 2",
    explication: "La closure conserve la même variable x entre les appels.",
  },
  {
    id: 91,
    question:
      "`JavaScript — boucle et var\n\nQuelle sortie est la plus probable ?\n\nconst fns = [];\nfor (var i = 0; i < 3; i++) {\n  fns.push(() => i);\n}\nconsole.log(fns.map(f => f()));\n\nRéférence exercice : JS-091`",
    reponse_v: "[3, 3, 3]",
    reponse_f1: "[0, 1, 2]",
    reponse_f2: "[2, 2, 2]",
    explication: "var crée une seule liaison partagée par toutes les closures.",
  },
  {
    id: 92,
    question:
      "`JavaScript — boucle et let\n\nQuelle sortie produit ce code ?\n\nconst fns = [];\nfor (let i = 0; i < 3; i++) {\n  fns.push(() => i);\n}\nconsole.log(fns.map(f => f()));\n\nRéférence exercice : JS-092`",
    reponse_v: "[0, 1, 2]",
    reponse_f1: "[3, 3, 3]",
    reponse_f2: "[2, 2, 2]",
    explication: "let crée une liaison distincte à chaque itération.",
  },
  {
    id: 93,
    question:
      "`JavaScript — this dans une méthode\n\nQuelle valeur est affichée ?\n\nconst obj = {\n  x: 42,\n  getX() { return this.x; }\n};\nconsole.log(obj.getX());\n\nRéférence exercice : JS-093`",
    reponse_v: "42",
    reponse_f1: "undefined",
    reponse_f2: "ReferenceError",
    explication: "Appelée comme méthode, la fonction reçoit obj comme this.",
  },
  {
    id: 94,
    question:
      "`JavaScript — perte de contexte\n\nQue renvoie généralement ce code en mode strict ?\n\nconst obj = {\n  x: 42,\n  getX() { return this.x; }\n};\nconst fn = obj.getX;\nconsole.log(fn());\n\nRéférence exercice : JS-094`",
    reponse_v: "TypeError",
    reponse_f1: "42",
    reponse_f2: "undefined sans erreur",
    explication:
      "En mode strict, this vaut undefined dans un appel de fonction simple.",
  },
  {
    id: 95,
    question:
      "`JavaScript — fonction fléchée et this\n\nQuelle affirmation est correcte ?\n\nconst obj = {\n  x: 10,\n  f: () => this.x\n};\n\nRéférence exercice : JS-095`",
    reponse_v: "La fonction fléchée ne lie pas son propre this",
    reponse_f1: "this désigne toujours obj",
    reponse_f2: "this vaut toujours null",
    explication: "Une arrow function capture lexicalement this.",
  },
  {
    id: 96,
    question:
      "`JavaScript — bind\n\nQuelle valeur est affichée ?\n\nfunction f() { return this.x; }\nconst g = f.bind({ x: 7 });\nconsole.log(g.call({ x: 9 }));\n\nRéférence exercice : JS-096`",
    reponse_v: "7",
    reponse_f1: "9",
    reponse_f2: "undefined",
    explication:
      "bind fixe définitivement this, même si call tente d'en fournir un autre.",
  },
  {
    id: 97,
    question:
      "`JavaScript — chaîne de prototypes\n\nQuelle sortie produit ce code ?\n\nconst proto = { x: 1 };\nconst obj = Object.create(proto);\nobj.x = 2;\ndelete obj.x;\nconsole.log(obj.x);\n\nRéférence exercice : JS-097`",
    reponse_v: "1",
    reponse_f1: "2",
    reponse_f2: "undefined",
    explication:
      "Après suppression de la propriété propre, la recherche remonte au prototype.",
  },
  {
    id: 98,
    question:
      '`JavaScript — propriété propre\n\nQuelle sortie produit ce code ?\n\nconst proto = { x: 1 };\nconst obj = Object.create(proto);\nconsole.log("x" in obj, Object.hasOwn(obj, "x"));\n\nRéférence exercice : JS-098`',
    reponse_v: "true false",
    reponse_f1: "false false",
    reponse_f2: "true true",
    explication:
      "in inspecte toute la chaîne de prototypes, Object.hasOwn uniquement l'objet.",
  },
  {
    id: 99,
    question:
      "`JavaScript — class et prototype\n\nQuelle affirmation est correcte ?\n\nclass A {\n  f() {}\n}\n\nRéférence exercice : JS-099`",
    reponse_v: "f est placée sur A.prototype",
    reponse_f1: "f est copiée dans chaque instance",
    reponse_f2: "f est une propriété statique de A",
    explication:
      "Les méthodes d'instance déclarées dans une class sont stockées sur le prototype.",
  },
  {
    id: 100,
    question:
      "`JavaScript — closure\n\nQuelle sortie produit ce code ?\n\nfunction outer() {\n  let x = 1;\n  return () => ++x;\n}\nconst f = outer();\nconsole.log(f(), f());\n\nRéférence exercice : JS-100`",
    reponse_v: "2 3",
    reponse_f1: "1 2",
    reponse_f2: "2 2",
    explication: "La closure conserve la même variable x entre les appels.",
  },
  {
    id: 101,
    question:
      "`JavaScript — destructuration\n\nQuelle valeur reçoit x ?\n\nconst { a: { x = 5 } = {} } = { a: {} };\n\nRéférence exercice : JS-101`",
    reponse_v: "5",
    reponse_f1: "undefined",
    reponse_f2: "ReferenceError",
    explication:
      "La valeur par défaut x = 5 s'applique car la propriété x est absente.",
  },
  {
    id: 102,
    question:
      "`JavaScript — trous dans les tableaux\n\nQuelle sortie produit ce code ?\n\nconst a = new Array(3);\nconsole.log(a.length, a.map(() => 1));\n\nRéférence exercice : JS-102`",
    reponse_v: "3 [ <3 empty items> ]",
    reponse_f1: "3 [1, 1, 1]",
    reponse_f2: "0 []",
    explication: "map ignore les emplacements vides d'un tableau creux.",
  },
  {
    id: 103,
    question:
      "`JavaScript — delete sur tableau\n\nQuelle sortie produit ce code ?\n\nconst a = [1, 2, 3];\ndelete a[1];\nconsole.log(a.length, 1 in a);\n\nRéférence exercice : JS-103`",
    reponse_v: "3 false",
    reponse_f1: "2 false",
    reponse_f2: "3 true",
    explication: "delete crée un trou mais ne réduit pas la longueur.",
  },
  {
    id: 104,
    question:
      "`JavaScript — sort par défaut\n\nQuelle sortie produit ce code ?\n\nconsole.log([10, 2, 1].sort());\n\nRéférence exercice : JS-104`",
    reponse_v: "[1, 10, 2]",
    reponse_f1: "[1, 2, 10]",
    reponse_f2: "[10, 2, 1]",
    explication:
      "Sans comparateur, sort compare les éléments comme des chaînes.",
  },
  {
    id: 105,
    question:
      "`JavaScript — Set\n\nQuelle valeur est affichée ?\n\nconst s = new Set([NaN, NaN, 0, -0]);\nconsole.log(s.size);\n\nRéférence exercice : JS-105`",
    reponse_v: "2",
    reponse_f1: "3",
    reponse_f2: "4",
    explication: "Set utilise SameValueZero : NaN égale NaN et 0 égale -0.",
  },
  {
    id: 106,
    question:
      "`JavaScript — Map et clés objet\n\nQuelle valeur est affichée ?\n\nconst m = new Map();\nm.set({}, 1);\nm.set({}, 2);\nconsole.log(m.size);\n\nRéférence exercice : JS-106`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "0",
    explication: "Chaque littéral objet crée une référence distincte.",
  },
  {
    id: 107,
    question:
      "`JavaScript — Object.freeze\n\nQuelle affirmation est correcte ?\n\nconst o = Object.freeze({ nested: { x: 1 } });\no.nested.x = 2;\n\nRéférence exercice : JS-107`",
    reponse_v: "La propriété imbriquée peut encore être modifiée",
    reponse_f1: "Toute la structure est profondément gelée",
    reponse_f2: "Une TypeError est toujours levée",
    explication: "Object.freeze est superficiel.",
  },
  {
    id: 108,
    question:
      '`JavaScript — descripteur de propriété\n\nQuelle caractéristique a une propriété créée avec Object.defineProperty sans options explicites ?\n\nObject.defineProperty({}, "x", { value: 1 });\n\nRéférence exercice : JS-108`',
    reponse_v: "non enumerable, non writable et non configurable",
    reponse_f1: "enumerable, writable et configurable",
    reponse_f2: "writable mais non configurable",
    explication: "Les attributs booléens valent false par défaut.",
  },
  {
    id: 109,
    question:
      "`JavaScript — JSON.stringify\n\nQuelle sortie produit ce code ?\n\nconsole.log(JSON.stringify({\n  a: undefined,\n  b: function(){},\n  c: Symbol()\n}));\n\nRéférence exercice : JS-109`",
    reponse_v: "{}",
    reponse_f1: '{"a":null,"b":null,"c":null}',
    reponse_f2: "TypeError",
    explication:
      "Dans un objet, undefined, fonctions et symboles sont omis par JSON.stringify.",
  },
  {
    id: 110,
    question:
      "`JavaScript — copie superficielle\n\nQuelle sortie produit ce code ?\n\nconst a = { nested: { x: 1 } };\nconst b = { ...a };\nb.nested.x = 2;\nconsole.log(a.nested.x);\n\nRéférence exercice : JS-110`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "undefined",
    explication:
      "Le spread réalise une copie superficielle ; l'objet nested reste partagé.",
  },
  {
    id: 111,
    question:
      "`JavaScript — destructuration\n\nQuelle valeur reçoit x ?\n\nconst { a: { x = 5 } = {} } = { a: {} };\n\nRéférence exercice : JS-111`",
    reponse_v: "5",
    reponse_f1: "undefined",
    reponse_f2: "ReferenceError",
    explication:
      "La valeur par défaut x = 5 s'applique car la propriété x est absente.",
  },
  {
    id: 112,
    question:
      "`JavaScript — trous dans les tableaux\n\nQuelle sortie produit ce code ?\n\nconst a = new Array(3);\nconsole.log(a.length, a.map(() => 1));\n\nRéférence exercice : JS-112`",
    reponse_v: "3 [ <3 empty items> ]",
    reponse_f1: "3 [1, 1, 1]",
    reponse_f2: "0 []",
    explication: "map ignore les emplacements vides d'un tableau creux.",
  },
  {
    id: 113,
    question:
      "`JavaScript — delete sur tableau\n\nQuelle sortie produit ce code ?\n\nconst a = [1, 2, 3];\ndelete a[1];\nconsole.log(a.length, 1 in a);\n\nRéférence exercice : JS-113`",
    reponse_v: "3 false",
    reponse_f1: "2 false",
    reponse_f2: "3 true",
    explication: "delete crée un trou mais ne réduit pas la longueur.",
  },
  {
    id: 114,
    question:
      "`JavaScript — sort par défaut\n\nQuelle sortie produit ce code ?\n\nconsole.log([10, 2, 1].sort());\n\nRéférence exercice : JS-114`",
    reponse_v: "[1, 10, 2]",
    reponse_f1: "[1, 2, 10]",
    reponse_f2: "[10, 2, 1]",
    explication:
      "Sans comparateur, sort compare les éléments comme des chaînes.",
  },
  {
    id: 115,
    question:
      "`JavaScript — Set\n\nQuelle valeur est affichée ?\n\nconst s = new Set([NaN, NaN, 0, -0]);\nconsole.log(s.size);\n\nRéférence exercice : JS-115`",
    reponse_v: "2",
    reponse_f1: "3",
    reponse_f2: "4",
    explication: "Set utilise SameValueZero : NaN égale NaN et 0 égale -0.",
  },
  {
    id: 116,
    question:
      "`JavaScript — Map et clés objet\n\nQuelle valeur est affichée ?\n\nconst m = new Map();\nm.set({}, 1);\nm.set({}, 2);\nconsole.log(m.size);\n\nRéférence exercice : JS-116`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "0",
    explication: "Chaque littéral objet crée une référence distincte.",
  },
  {
    id: 117,
    question:
      "`JavaScript — Object.freeze\n\nQuelle affirmation est correcte ?\n\nconst o = Object.freeze({ nested: { x: 1 } });\no.nested.x = 2;\n\nRéférence exercice : JS-117`",
    reponse_v: "La propriété imbriquée peut encore être modifiée",
    reponse_f1: "Toute la structure est profondément gelée",
    reponse_f2: "Une TypeError est toujours levée",
    explication: "Object.freeze est superficiel.",
  },
  {
    id: 118,
    question:
      '`JavaScript — descripteur de propriété\n\nQuelle caractéristique a une propriété créée avec Object.defineProperty sans options explicites ?\n\nObject.defineProperty({}, "x", { value: 1 });\n\nRéférence exercice : JS-118`',
    reponse_v: "non enumerable, non writable et non configurable",
    reponse_f1: "enumerable, writable et configurable",
    reponse_f2: "writable mais non configurable",
    explication: "Les attributs booléens valent false par défaut.",
  },
  {
    id: 119,
    question:
      "`JavaScript — JSON.stringify\n\nQuelle sortie produit ce code ?\n\nconsole.log(JSON.stringify({\n  a: undefined,\n  b: function(){},\n  c: Symbol()\n}));\n\nRéférence exercice : JS-119`",
    reponse_v: "{}",
    reponse_f1: '{"a":null,"b":null,"c":null}',
    reponse_f2: "TypeError",
    explication:
      "Dans un objet, undefined, fonctions et symboles sont omis par JSON.stringify.",
  },
  {
    id: 120,
    question:
      "`JavaScript — copie superficielle\n\nQuelle sortie produit ce code ?\n\nconst a = { nested: { x: 1 } };\nconst b = { ...a };\nb.nested.x = 2;\nconsole.log(a.nested.x);\n\nRéférence exercice : JS-120`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "undefined",
    explication:
      "Le spread réalise une copie superficielle ; l'objet nested reste partagé.",
  },
  {
    id: 121,
    question:
      "`JavaScript — destructuration\n\nQuelle valeur reçoit x ?\n\nconst { a: { x = 5 } = {} } = { a: {} };\n\nRéférence exercice : JS-121`",
    reponse_v: "5",
    reponse_f1: "undefined",
    reponse_f2: "ReferenceError",
    explication:
      "La valeur par défaut x = 5 s'applique car la propriété x est absente.",
  },
  {
    id: 122,
    question:
      "`JavaScript — trous dans les tableaux\n\nQuelle sortie produit ce code ?\n\nconst a = new Array(3);\nconsole.log(a.length, a.map(() => 1));\n\nRéférence exercice : JS-122`",
    reponse_v: "3 [ <3 empty items> ]",
    reponse_f1: "3 [1, 1, 1]",
    reponse_f2: "0 []",
    explication: "map ignore les emplacements vides d'un tableau creux.",
  },
  {
    id: 123,
    question:
      "`JavaScript — delete sur tableau\n\nQuelle sortie produit ce code ?\n\nconst a = [1, 2, 3];\ndelete a[1];\nconsole.log(a.length, 1 in a);\n\nRéférence exercice : JS-123`",
    reponse_v: "3 false",
    reponse_f1: "2 false",
    reponse_f2: "3 true",
    explication: "delete crée un trou mais ne réduit pas la longueur.",
  },
  {
    id: 124,
    question:
      "`JavaScript — sort par défaut\n\nQuelle sortie produit ce code ?\n\nconsole.log([10, 2, 1].sort());\n\nRéférence exercice : JS-124`",
    reponse_v: "[1, 10, 2]",
    reponse_f1: "[1, 2, 10]",
    reponse_f2: "[10, 2, 1]",
    explication:
      "Sans comparateur, sort compare les éléments comme des chaînes.",
  },
  {
    id: 125,
    question:
      "`JavaScript — Set\n\nQuelle valeur est affichée ?\n\nconst s = new Set([NaN, NaN, 0, -0]);\nconsole.log(s.size);\n\nRéférence exercice : JS-125`",
    reponse_v: "2",
    reponse_f1: "3",
    reponse_f2: "4",
    explication: "Set utilise SameValueZero : NaN égale NaN et 0 égale -0.",
  },
  {
    id: 126,
    question:
      "`JavaScript — Map et clés objet\n\nQuelle valeur est affichée ?\n\nconst m = new Map();\nm.set({}, 1);\nm.set({}, 2);\nconsole.log(m.size);\n\nRéférence exercice : JS-126`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "0",
    explication: "Chaque littéral objet crée une référence distincte.",
  },
  {
    id: 127,
    question:
      "`JavaScript — Object.freeze\n\nQuelle affirmation est correcte ?\n\nconst o = Object.freeze({ nested: { x: 1 } });\no.nested.x = 2;\n\nRéférence exercice : JS-127`",
    reponse_v: "La propriété imbriquée peut encore être modifiée",
    reponse_f1: "Toute la structure est profondément gelée",
    reponse_f2: "Une TypeError est toujours levée",
    explication: "Object.freeze est superficiel.",
  },
  {
    id: 128,
    question:
      '`JavaScript — descripteur de propriété\n\nQuelle caractéristique a une propriété créée avec Object.defineProperty sans options explicites ?\n\nObject.defineProperty({}, "x", { value: 1 });\n\nRéférence exercice : JS-128`',
    reponse_v: "non enumerable, non writable et non configurable",
    reponse_f1: "enumerable, writable et configurable",
    reponse_f2: "writable mais non configurable",
    explication: "Les attributs booléens valent false par défaut.",
  },
  {
    id: 129,
    question:
      "`JavaScript — JSON.stringify\n\nQuelle sortie produit ce code ?\n\nconsole.log(JSON.stringify({\n  a: undefined,\n  b: function(){},\n  c: Symbol()\n}));\n\nRéférence exercice : JS-129`",
    reponse_v: "{}",
    reponse_f1: '{"a":null,"b":null,"c":null}',
    reponse_f2: "TypeError",
    explication:
      "Dans un objet, undefined, fonctions et symboles sont omis par JSON.stringify.",
  },
  {
    id: 130,
    question:
      "`JavaScript — copie superficielle\n\nQuelle sortie produit ce code ?\n\nconst a = { nested: { x: 1 } };\nconst b = { ...a };\nb.nested.x = 2;\nconsole.log(a.nested.x);\n\nRéférence exercice : JS-130`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "undefined",
    explication:
      "Le spread réalise une copie superficielle ; l'objet nested reste partagé.",
  },
  {
    id: 131,
    question:
      "`JavaScript — destructuration\n\nQuelle valeur reçoit x ?\n\nconst { a: { x = 5 } = {} } = { a: {} };\n\nRéférence exercice : JS-131`",
    reponse_v: "5",
    reponse_f1: "undefined",
    reponse_f2: "ReferenceError",
    explication:
      "La valeur par défaut x = 5 s'applique car la propriété x est absente.",
  },
  {
    id: 132,
    question:
      "`JavaScript — trous dans les tableaux\n\nQuelle sortie produit ce code ?\n\nconst a = new Array(3);\nconsole.log(a.length, a.map(() => 1));\n\nRéférence exercice : JS-132`",
    reponse_v: "3 [ <3 empty items> ]",
    reponse_f1: "3 [1, 1, 1]",
    reponse_f2: "0 []",
    explication: "map ignore les emplacements vides d'un tableau creux.",
  },
  {
    id: 133,
    question:
      "`JavaScript — delete sur tableau\n\nQuelle sortie produit ce code ?\n\nconst a = [1, 2, 3];\ndelete a[1];\nconsole.log(a.length, 1 in a);\n\nRéférence exercice : JS-133`",
    reponse_v: "3 false",
    reponse_f1: "2 false",
    reponse_f2: "3 true",
    explication: "delete crée un trou mais ne réduit pas la longueur.",
  },
  {
    id: 134,
    question:
      "`JavaScript — sort par défaut\n\nQuelle sortie produit ce code ?\n\nconsole.log([10, 2, 1].sort());\n\nRéférence exercice : JS-134`",
    reponse_v: "[1, 10, 2]",
    reponse_f1: "[1, 2, 10]",
    reponse_f2: "[10, 2, 1]",
    explication:
      "Sans comparateur, sort compare les éléments comme des chaînes.",
  },
  {
    id: 135,
    question:
      "`JavaScript — Set\n\nQuelle valeur est affichée ?\n\nconst s = new Set([NaN, NaN, 0, -0]);\nconsole.log(s.size);\n\nRéférence exercice : JS-135`",
    reponse_v: "2",
    reponse_f1: "3",
    reponse_f2: "4",
    explication: "Set utilise SameValueZero : NaN égale NaN et 0 égale -0.",
  },
  {
    id: 136,
    question:
      "`JavaScript — Map et clés objet\n\nQuelle valeur est affichée ?\n\nconst m = new Map();\nm.set({}, 1);\nm.set({}, 2);\nconsole.log(m.size);\n\nRéférence exercice : JS-136`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "0",
    explication: "Chaque littéral objet crée une référence distincte.",
  },
  {
    id: 137,
    question:
      "`JavaScript — Object.freeze\n\nQuelle affirmation est correcte ?\n\nconst o = Object.freeze({ nested: { x: 1 } });\no.nested.x = 2;\n\nRéférence exercice : JS-137`",
    reponse_v: "La propriété imbriquée peut encore être modifiée",
    reponse_f1: "Toute la structure est profondément gelée",
    reponse_f2: "Une TypeError est toujours levée",
    explication: "Object.freeze est superficiel.",
  },
  {
    id: 138,
    question:
      '`JavaScript — descripteur de propriété\n\nQuelle caractéristique a une propriété créée avec Object.defineProperty sans options explicites ?\n\nObject.defineProperty({}, "x", { value: 1 });\n\nRéférence exercice : JS-138`',
    reponse_v: "non enumerable, non writable et non configurable",
    reponse_f1: "enumerable, writable et configurable",
    reponse_f2: "writable mais non configurable",
    explication: "Les attributs booléens valent false par défaut.",
  },
  {
    id: 139,
    question:
      "`JavaScript — JSON.stringify\n\nQuelle sortie produit ce code ?\n\nconsole.log(JSON.stringify({\n  a: undefined,\n  b: function(){},\n  c: Symbol()\n}));\n\nRéférence exercice : JS-139`",
    reponse_v: "{}",
    reponse_f1: '{"a":null,"b":null,"c":null}',
    reponse_f2: "TypeError",
    explication:
      "Dans un objet, undefined, fonctions et symboles sont omis par JSON.stringify.",
  },
  {
    id: 140,
    question:
      "`JavaScript — copie superficielle\n\nQuelle sortie produit ce code ?\n\nconst a = { nested: { x: 1 } };\nconst b = { ...a };\nb.nested.x = 2;\nconsole.log(a.nested.x);\n\nRéférence exercice : JS-140`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "undefined",
    explication:
      "Le spread réalise une copie superficielle ; l'objet nested reste partagé.",
  },
  {
    id: 141,
    question:
      "`JavaScript — destructuration\n\nQuelle valeur reçoit x ?\n\nconst { a: { x = 5 } = {} } = { a: {} };\n\nRéférence exercice : JS-141`",
    reponse_v: "5",
    reponse_f1: "undefined",
    reponse_f2: "ReferenceError",
    explication:
      "La valeur par défaut x = 5 s'applique car la propriété x est absente.",
  },
  {
    id: 142,
    question:
      "`JavaScript — trous dans les tableaux\n\nQuelle sortie produit ce code ?\n\nconst a = new Array(3);\nconsole.log(a.length, a.map(() => 1));\n\nRéférence exercice : JS-142`",
    reponse_v: "3 [ <3 empty items> ]",
    reponse_f1: "3 [1, 1, 1]",
    reponse_f2: "0 []",
    explication: "map ignore les emplacements vides d'un tableau creux.",
  },
  {
    id: 143,
    question:
      "`JavaScript — delete sur tableau\n\nQuelle sortie produit ce code ?\n\nconst a = [1, 2, 3];\ndelete a[1];\nconsole.log(a.length, 1 in a);\n\nRéférence exercice : JS-143`",
    reponse_v: "3 false",
    reponse_f1: "2 false",
    reponse_f2: "3 true",
    explication: "delete crée un trou mais ne réduit pas la longueur.",
  },
  {
    id: 144,
    question:
      "`JavaScript — sort par défaut\n\nQuelle sortie produit ce code ?\n\nconsole.log([10, 2, 1].sort());\n\nRéférence exercice : JS-144`",
    reponse_v: "[1, 10, 2]",
    reponse_f1: "[1, 2, 10]",
    reponse_f2: "[10, 2, 1]",
    explication:
      "Sans comparateur, sort compare les éléments comme des chaînes.",
  },
  {
    id: 145,
    question:
      "`JavaScript — Set\n\nQuelle valeur est affichée ?\n\nconst s = new Set([NaN, NaN, 0, -0]);\nconsole.log(s.size);\n\nRéférence exercice : JS-145`",
    reponse_v: "2",
    reponse_f1: "3",
    reponse_f2: "4",
    explication: "Set utilise SameValueZero : NaN égale NaN et 0 égale -0.",
  },
  {
    id: 146,
    question:
      "`JavaScript — Map et clés objet\n\nQuelle valeur est affichée ?\n\nconst m = new Map();\nm.set({}, 1);\nm.set({}, 2);\nconsole.log(m.size);\n\nRéférence exercice : JS-146`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "0",
    explication: "Chaque littéral objet crée une référence distincte.",
  },
  {
    id: 147,
    question:
      "`JavaScript — Object.freeze\n\nQuelle affirmation est correcte ?\n\nconst o = Object.freeze({ nested: { x: 1 } });\no.nested.x = 2;\n\nRéférence exercice : JS-147`",
    reponse_v: "La propriété imbriquée peut encore être modifiée",
    reponse_f1: "Toute la structure est profondément gelée",
    reponse_f2: "Une TypeError est toujours levée",
    explication: "Object.freeze est superficiel.",
  },
  {
    id: 148,
    question:
      '`JavaScript — descripteur de propriété\n\nQuelle caractéristique a une propriété créée avec Object.defineProperty sans options explicites ?\n\nObject.defineProperty({}, "x", { value: 1 });\n\nRéférence exercice : JS-148`',
    reponse_v: "non enumerable, non writable et non configurable",
    reponse_f1: "enumerable, writable et configurable",
    reponse_f2: "writable mais non configurable",
    explication: "Les attributs booléens valent false par défaut.",
  },
  {
    id: 149,
    question:
      "`JavaScript — JSON.stringify\n\nQuelle sortie produit ce code ?\n\nconsole.log(JSON.stringify({\n  a: undefined,\n  b: function(){},\n  c: Symbol()\n}));\n\nRéférence exercice : JS-149`",
    reponse_v: "{}",
    reponse_f1: '{"a":null,"b":null,"c":null}',
    reponse_f2: "TypeError",
    explication:
      "Dans un objet, undefined, fonctions et symboles sont omis par JSON.stringify.",
  },
  {
    id: 150,
    question:
      "`JavaScript — copie superficielle\n\nQuelle sortie produit ce code ?\n\nconst a = { nested: { x: 1 } };\nconst b = { ...a };\nb.nested.x = 2;\nconsole.log(a.nested.x);\n\nRéférence exercice : JS-150`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "undefined",
    explication:
      "Le spread réalise une copie superficielle ; l'objet nested reste partagé.",
  },
  {
    id: 151,
    question:
      "`JavaScript — async\n\nQue retourne toujours une fonction async ?\n\nasync function f() {\n  return 42;\n}\n\nRéférence exercice : JS-151`",
    reponse_v: "Une Promise résolue avec 42",
    reponse_f1: "Le nombre 42 directement",
    reponse_f2: "Un itérateur asynchrone",
    explication:
      "Une fonction async enveloppe sa valeur de retour dans une Promise.",
  },
  {
    id: 152,
    question:
      "`JavaScript — await\n\nQuelle sortie produit ce code ?\n\nasync function f() {\n  console.log(1);\n  await 0;\n  console.log(2);\n}\nconsole.log(3);\nf();\nconsole.log(4);\n\nRéférence exercice : JS-152`",
    reponse_v: "3 1 4 2",
    reponse_f1: "3 1 2 4",
    reponse_f2: "1 3 4 2",
    explication:
      "Le code avant await est synchrone ; la suite est reprise en microtask.",
  },
  {
    id: 153,
    question:
      "`JavaScript — chaînage de Promise\n\nQuelle valeur finale est produite ?\n\nPromise.resolve(1)\n  .then(x => x + 1)\n  .then(x => Promise.resolve(x * 2));\n\nRéférence exercice : JS-153`",
    reponse_v: "4",
    reponse_f1: "2",
    reponse_f2: "Promise<Promise<4>>",
    explication:
      "Les Promises retournées par then sont automatiquement aplaties.",
  },
  {
    id: 154,
    question:
      '`JavaScript — catch\n\nQuelle valeur résout la Promise finale ?\n\nPromise.reject("err")\n  .catch(() => 5)\n  .then(x => x + 1);\n\nRéférence exercice : JS-154`',
    reponse_v: "6",
    reponse_f1: "5",
    reponse_f2: "La Promise reste rejetée",
    explication:
      "catch transforme le rejet en résolution avec 5, puis then ajoute 1.",
  },
  {
    id: 155,
    question:
      "`JavaScript — finally\n\nQuelle valeur finale est produite ?\n\nPromise.resolve(3)\n  .finally(() => 10)\n  .then(x => x);\n\nRéférence exercice : JS-155`",
    reponse_v: "3",
    reponse_f1: "10",
    reponse_f2: "undefined",
    explication:
      "finally ne remplace pas la valeur résolue sauf s'il lève ou retourne une Promise rejetée.",
  },
  {
    id: 156,
    question:
      '`JavaScript — Promise.all\n\nQuel est le comportement de Promise.all ?\n\nPromise.all([\n  Promise.resolve(1),\n  Promise.reject("E"),\n  new Promise(r => setTimeout(() => r(3), 10))\n]);\n\nRéférence exercice : JS-156`',
    reponse_v: "Elle rejette dès le premier rejet observé",
    reponse_f1: "Elle attend toujours toutes les Promises avant de rejeter",
    reponse_f2: "Elle renvoie [1, 'E', 3]",
    explication: "Promise.all est fail-fast sur les rejets.",
  },
  {
    id: 157,
    question:
      "`JavaScript — Promise.allSettled\n\nQue renvoie Promise.allSettled ?\n\nRéférence exercice : JS-157`",
    reponse_v: "Un tableau décrivant le statut de chaque Promise",
    reponse_f1: "La première valeur résolue",
    reponse_f2: "Une Promise rejetée dès la première erreur",
    explication:
      "allSettled attend toutes les Promises et conserve succès comme échecs.",
  },
  {
    id: 158,
    question:
      "`JavaScript — Promise.race\n\nQuelle Promise détermine le résultat de Promise.race ?\n\nRéférence exercice : JS-158`",
    reponse_v: "La première Promise réglée, résolue ou rejetée",
    reponse_f1: "La première Promise résolue uniquement",
    reponse_f2: "La dernière Promise terminée",
    explication: "race adopte l'état de la première Promise settled.",
  },
  {
    id: 159,
    question:
      "`JavaScript — AbortController\n\nQuel est le rôle principal d'AbortController ?\n\nRéférence exercice : JS-159`",
    reponse_v: "Signaler l'annulation à une API compatible via un AbortSignal",
    reponse_f1: "Forcer l'arrêt immédiat de n'importe quelle Promise",
    reponse_f2: "Supprimer une microtask de la file",
    explication:
      "AbortController fournit un signal coopératif ; il ne tue pas arbitrairement une Promise.",
  },
  {
    id: 160,
    question:
      '`JavaScript — event loop\n\nQuel ordre d\'affichage est correct ?\n\nconsole.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");\n\nRéférence exercice : JS-160`',
    reponse_v: "A D C B",
    reponse_f1: "A C D B",
    reponse_f2: "A D B C",
    explication:
      "Les microtasks de Promise sont exécutées avant les macrotasks de setTimeout.",
  },
  {
    id: 161,
    question:
      "`JavaScript — async\n\nQue retourne toujours une fonction async ?\n\nasync function f() {\n  return 42;\n}\n\nRéférence exercice : JS-161`",
    reponse_v: "Une Promise résolue avec 42",
    reponse_f1: "Le nombre 42 directement",
    reponse_f2: "Un itérateur asynchrone",
    explication:
      "Une fonction async enveloppe sa valeur de retour dans une Promise.",
  },
  {
    id: 162,
    question:
      "`JavaScript — await\n\nQuelle sortie produit ce code ?\n\nasync function f() {\n  console.log(1);\n  await 0;\n  console.log(2);\n}\nconsole.log(3);\nf();\nconsole.log(4);\n\nRéférence exercice : JS-162`",
    reponse_v: "3 1 4 2",
    reponse_f1: "3 1 2 4",
    reponse_f2: "1 3 4 2",
    explication:
      "Le code avant await est synchrone ; la suite est reprise en microtask.",
  },
  {
    id: 163,
    question:
      "`JavaScript — chaînage de Promise\n\nQuelle valeur finale est produite ?\n\nPromise.resolve(1)\n  .then(x => x + 1)\n  .then(x => Promise.resolve(x * 2));\n\nRéférence exercice : JS-163`",
    reponse_v: "4",
    reponse_f1: "2",
    reponse_f2: "Promise<Promise<4>>",
    explication:
      "Les Promises retournées par then sont automatiquement aplaties.",
  },
  {
    id: 164,
    question:
      '`JavaScript — catch\n\nQuelle valeur résout la Promise finale ?\n\nPromise.reject("err")\n  .catch(() => 5)\n  .then(x => x + 1);\n\nRéférence exercice : JS-164`',
    reponse_v: "6",
    reponse_f1: "5",
    reponse_f2: "La Promise reste rejetée",
    explication:
      "catch transforme le rejet en résolution avec 5, puis then ajoute 1.",
  },
  {
    id: 165,
    question:
      "`JavaScript — finally\n\nQuelle valeur finale est produite ?\n\nPromise.resolve(3)\n  .finally(() => 10)\n  .then(x => x);\n\nRéférence exercice : JS-165`",
    reponse_v: "3",
    reponse_f1: "10",
    reponse_f2: "undefined",
    explication:
      "finally ne remplace pas la valeur résolue sauf s'il lève ou retourne une Promise rejetée.",
  },
  {
    id: 166,
    question:
      '`JavaScript — Promise.all\n\nQuel est le comportement de Promise.all ?\n\nPromise.all([\n  Promise.resolve(1),\n  Promise.reject("E"),\n  new Promise(r => setTimeout(() => r(3), 10))\n]);\n\nRéférence exercice : JS-166`',
    reponse_v: "Elle rejette dès le premier rejet observé",
    reponse_f1: "Elle attend toujours toutes les Promises avant de rejeter",
    reponse_f2: "Elle renvoie [1, 'E', 3]",
    explication: "Promise.all est fail-fast sur les rejets.",
  },
  {
    id: 167,
    question:
      "`JavaScript — Promise.allSettled\n\nQue renvoie Promise.allSettled ?\n\nRéférence exercice : JS-167`",
    reponse_v: "Un tableau décrivant le statut de chaque Promise",
    reponse_f1: "La première valeur résolue",
    reponse_f2: "Une Promise rejetée dès la première erreur",
    explication:
      "allSettled attend toutes les Promises et conserve succès comme échecs.",
  },
  {
    id: 168,
    question:
      "`JavaScript — Promise.race\n\nQuelle Promise détermine le résultat de Promise.race ?\n\nRéférence exercice : JS-168`",
    reponse_v: "La première Promise réglée, résolue ou rejetée",
    reponse_f1: "La première Promise résolue uniquement",
    reponse_f2: "La dernière Promise terminée",
    explication: "race adopte l'état de la première Promise settled.",
  },
  {
    id: 169,
    question:
      "`JavaScript — AbortController\n\nQuel est le rôle principal d'AbortController ?\n\nRéférence exercice : JS-169`",
    reponse_v: "Signaler l'annulation à une API compatible via un AbortSignal",
    reponse_f1: "Forcer l'arrêt immédiat de n'importe quelle Promise",
    reponse_f2: "Supprimer une microtask de la file",
    explication:
      "AbortController fournit un signal coopératif ; il ne tue pas arbitrairement une Promise.",
  },
  {
    id: 170,
    question:
      '`JavaScript — event loop\n\nQuel ordre d\'affichage est correct ?\n\nconsole.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");\n\nRéférence exercice : JS-170`',
    reponse_v: "A D C B",
    reponse_f1: "A C D B",
    reponse_f2: "A D B C",
    explication:
      "Les microtasks de Promise sont exécutées avant les macrotasks de setTimeout.",
  },
  {
    id: 171,
    question:
      "`JavaScript — async\n\nQue retourne toujours une fonction async ?\n\nasync function f() {\n  return 42;\n}\n\nRéférence exercice : JS-171`",
    reponse_v: "Une Promise résolue avec 42",
    reponse_f1: "Le nombre 42 directement",
    reponse_f2: "Un itérateur asynchrone",
    explication:
      "Une fonction async enveloppe sa valeur de retour dans une Promise.",
  },
  {
    id: 172,
    question:
      "`JavaScript — await\n\nQuelle sortie produit ce code ?\n\nasync function f() {\n  console.log(1);\n  await 0;\n  console.log(2);\n}\nconsole.log(3);\nf();\nconsole.log(4);\n\nRéférence exercice : JS-172`",
    reponse_v: "3 1 4 2",
    reponse_f1: "3 1 2 4",
    reponse_f2: "1 3 4 2",
    explication:
      "Le code avant await est synchrone ; la suite est reprise en microtask.",
  },
  {
    id: 173,
    question:
      "`JavaScript — chaînage de Promise\n\nQuelle valeur finale est produite ?\n\nPromise.resolve(1)\n  .then(x => x + 1)\n  .then(x => Promise.resolve(x * 2));\n\nRéférence exercice : JS-173`",
    reponse_v: "4",
    reponse_f1: "2",
    reponse_f2: "Promise<Promise<4>>",
    explication:
      "Les Promises retournées par then sont automatiquement aplaties.",
  },
  {
    id: 174,
    question:
      '`JavaScript — catch\n\nQuelle valeur résout la Promise finale ?\n\nPromise.reject("err")\n  .catch(() => 5)\n  .then(x => x + 1);\n\nRéférence exercice : JS-174`',
    reponse_v: "6",
    reponse_f1: "5",
    reponse_f2: "La Promise reste rejetée",
    explication:
      "catch transforme le rejet en résolution avec 5, puis then ajoute 1.",
  },
  {
    id: 175,
    question:
      "`JavaScript — finally\n\nQuelle valeur finale est produite ?\n\nPromise.resolve(3)\n  .finally(() => 10)\n  .then(x => x);\n\nRéférence exercice : JS-175`",
    reponse_v: "3",
    reponse_f1: "10",
    reponse_f2: "undefined",
    explication:
      "finally ne remplace pas la valeur résolue sauf s'il lève ou retourne une Promise rejetée.",
  },
  {
    id: 176,
    question:
      '`JavaScript — Promise.all\n\nQuel est le comportement de Promise.all ?\n\nPromise.all([\n  Promise.resolve(1),\n  Promise.reject("E"),\n  new Promise(r => setTimeout(() => r(3), 10))\n]);\n\nRéférence exercice : JS-176`',
    reponse_v: "Elle rejette dès le premier rejet observé",
    reponse_f1: "Elle attend toujours toutes les Promises avant de rejeter",
    reponse_f2: "Elle renvoie [1, 'E', 3]",
    explication: "Promise.all est fail-fast sur les rejets.",
  },
  {
    id: 177,
    question:
      "`JavaScript — Promise.allSettled\n\nQue renvoie Promise.allSettled ?\n\nRéférence exercice : JS-177`",
    reponse_v: "Un tableau décrivant le statut de chaque Promise",
    reponse_f1: "La première valeur résolue",
    reponse_f2: "Une Promise rejetée dès la première erreur",
    explication:
      "allSettled attend toutes les Promises et conserve succès comme échecs.",
  },
  {
    id: 178,
    question:
      "`JavaScript — Promise.race\n\nQuelle Promise détermine le résultat de Promise.race ?\n\nRéférence exercice : JS-178`",
    reponse_v: "La première Promise réglée, résolue ou rejetée",
    reponse_f1: "La première Promise résolue uniquement",
    reponse_f2: "La dernière Promise terminée",
    explication: "race adopte l'état de la première Promise settled.",
  },
  {
    id: 179,
    question:
      "`JavaScript — AbortController\n\nQuel est le rôle principal d'AbortController ?\n\nRéférence exercice : JS-179`",
    reponse_v: "Signaler l'annulation à une API compatible via un AbortSignal",
    reponse_f1: "Forcer l'arrêt immédiat de n'importe quelle Promise",
    reponse_f2: "Supprimer une microtask de la file",
    explication:
      "AbortController fournit un signal coopératif ; il ne tue pas arbitrairement une Promise.",
  },
  {
    id: 180,
    question:
      '`JavaScript — event loop\n\nQuel ordre d\'affichage est correct ?\n\nconsole.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");\n\nRéférence exercice : JS-180`',
    reponse_v: "A D C B",
    reponse_f1: "A C D B",
    reponse_f2: "A D B C",
    explication:
      "Les microtasks de Promise sont exécutées avant les macrotasks de setTimeout.",
  },
  {
    id: 181,
    question:
      "`JavaScript — async\n\nQue retourne toujours une fonction async ?\n\nasync function f() {\n  return 42;\n}\n\nRéférence exercice : JS-181`",
    reponse_v: "Une Promise résolue avec 42",
    reponse_f1: "Le nombre 42 directement",
    reponse_f2: "Un itérateur asynchrone",
    explication:
      "Une fonction async enveloppe sa valeur de retour dans une Promise.",
  },
  {
    id: 182,
    question:
      "`JavaScript — await\n\nQuelle sortie produit ce code ?\n\nasync function f() {\n  console.log(1);\n  await 0;\n  console.log(2);\n}\nconsole.log(3);\nf();\nconsole.log(4);\n\nRéférence exercice : JS-182`",
    reponse_v: "3 1 4 2",
    reponse_f1: "3 1 2 4",
    reponse_f2: "1 3 4 2",
    explication:
      "Le code avant await est synchrone ; la suite est reprise en microtask.",
  },
  {
    id: 183,
    question:
      "`JavaScript — chaînage de Promise\n\nQuelle valeur finale est produite ?\n\nPromise.resolve(1)\n  .then(x => x + 1)\n  .then(x => Promise.resolve(x * 2));\n\nRéférence exercice : JS-183`",
    reponse_v: "4",
    reponse_f1: "2",
    reponse_f2: "Promise<Promise<4>>",
    explication:
      "Les Promises retournées par then sont automatiquement aplaties.",
  },
  {
    id: 184,
    question:
      '`JavaScript — catch\n\nQuelle valeur résout la Promise finale ?\n\nPromise.reject("err")\n  .catch(() => 5)\n  .then(x => x + 1);\n\nRéférence exercice : JS-184`',
    reponse_v: "6",
    reponse_f1: "5",
    reponse_f2: "La Promise reste rejetée",
    explication:
      "catch transforme le rejet en résolution avec 5, puis then ajoute 1.",
  },
  {
    id: 185,
    question:
      "`JavaScript — finally\n\nQuelle valeur finale est produite ?\n\nPromise.resolve(3)\n  .finally(() => 10)\n  .then(x => x);\n\nRéférence exercice : JS-185`",
    reponse_v: "3",
    reponse_f1: "10",
    reponse_f2: "undefined",
    explication:
      "finally ne remplace pas la valeur résolue sauf s'il lève ou retourne une Promise rejetée.",
  },
  {
    id: 186,
    question:
      '`JavaScript — Promise.all\n\nQuel est le comportement de Promise.all ?\n\nPromise.all([\n  Promise.resolve(1),\n  Promise.reject("E"),\n  new Promise(r => setTimeout(() => r(3), 10))\n]);\n\nRéférence exercice : JS-186`',
    reponse_v: "Elle rejette dès le premier rejet observé",
    reponse_f1: "Elle attend toujours toutes les Promises avant de rejeter",
    reponse_f2: "Elle renvoie [1, 'E', 3]",
    explication: "Promise.all est fail-fast sur les rejets.",
  },
  {
    id: 187,
    question:
      "`JavaScript — Promise.allSettled\n\nQue renvoie Promise.allSettled ?\n\nRéférence exercice : JS-187`",
    reponse_v: "Un tableau décrivant le statut de chaque Promise",
    reponse_f1: "La première valeur résolue",
    reponse_f2: "Une Promise rejetée dès la première erreur",
    explication:
      "allSettled attend toutes les Promises et conserve succès comme échecs.",
  },
  {
    id: 188,
    question:
      "`JavaScript — Promise.race\n\nQuelle Promise détermine le résultat de Promise.race ?\n\nRéférence exercice : JS-188`",
    reponse_v: "La première Promise réglée, résolue ou rejetée",
    reponse_f1: "La première Promise résolue uniquement",
    reponse_f2: "La dernière Promise terminée",
    explication: "race adopte l'état de la première Promise settled.",
  },
  {
    id: 189,
    question:
      "`JavaScript — AbortController\n\nQuel est le rôle principal d'AbortController ?\n\nRéférence exercice : JS-189`",
    reponse_v: "Signaler l'annulation à une API compatible via un AbortSignal",
    reponse_f1: "Forcer l'arrêt immédiat de n'importe quelle Promise",
    reponse_f2: "Supprimer une microtask de la file",
    explication:
      "AbortController fournit un signal coopératif ; il ne tue pas arbitrairement une Promise.",
  },
  {
    id: 190,
    question:
      '`JavaScript — event loop\n\nQuel ordre d\'affichage est correct ?\n\nconsole.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");\n\nRéférence exercice : JS-190`',
    reponse_v: "A D C B",
    reponse_f1: "A C D B",
    reponse_f2: "A D B C",
    explication:
      "Les microtasks de Promise sont exécutées avant les macrotasks de setTimeout.",
  },
  {
    id: 191,
    question:
      "`JavaScript — async\n\nQue retourne toujours une fonction async ?\n\nasync function f() {\n  return 42;\n}\n\nRéférence exercice : JS-191`",
    reponse_v: "Une Promise résolue avec 42",
    reponse_f1: "Le nombre 42 directement",
    reponse_f2: "Un itérateur asynchrone",
    explication:
      "Une fonction async enveloppe sa valeur de retour dans une Promise.",
  },
  {
    id: 192,
    question:
      "`JavaScript — await\n\nQuelle sortie produit ce code ?\n\nasync function f() {\n  console.log(1);\n  await 0;\n  console.log(2);\n}\nconsole.log(3);\nf();\nconsole.log(4);\n\nRéférence exercice : JS-192`",
    reponse_v: "3 1 4 2",
    reponse_f1: "3 1 2 4",
    reponse_f2: "1 3 4 2",
    explication:
      "Le code avant await est synchrone ; la suite est reprise en microtask.",
  },
  {
    id: 193,
    question:
      "`JavaScript — chaînage de Promise\n\nQuelle valeur finale est produite ?\n\nPromise.resolve(1)\n  .then(x => x + 1)\n  .then(x => Promise.resolve(x * 2));\n\nRéférence exercice : JS-193`",
    reponse_v: "4",
    reponse_f1: "2",
    reponse_f2: "Promise<Promise<4>>",
    explication:
      "Les Promises retournées par then sont automatiquement aplaties.",
  },
  {
    id: 194,
    question:
      '`JavaScript — catch\n\nQuelle valeur résout la Promise finale ?\n\nPromise.reject("err")\n  .catch(() => 5)\n  .then(x => x + 1);\n\nRéférence exercice : JS-194`',
    reponse_v: "6",
    reponse_f1: "5",
    reponse_f2: "La Promise reste rejetée",
    explication:
      "catch transforme le rejet en résolution avec 5, puis then ajoute 1.",
  },
  {
    id: 195,
    question:
      "`JavaScript — finally\n\nQuelle valeur finale est produite ?\n\nPromise.resolve(3)\n  .finally(() => 10)\n  .then(x => x);\n\nRéférence exercice : JS-195`",
    reponse_v: "3",
    reponse_f1: "10",
    reponse_f2: "undefined",
    explication:
      "finally ne remplace pas la valeur résolue sauf s'il lève ou retourne une Promise rejetée.",
  },
  {
    id: 196,
    question:
      '`JavaScript — Promise.all\n\nQuel est le comportement de Promise.all ?\n\nPromise.all([\n  Promise.resolve(1),\n  Promise.reject("E"),\n  new Promise(r => setTimeout(() => r(3), 10))\n]);\n\nRéférence exercice : JS-196`',
    reponse_v: "Elle rejette dès le premier rejet observé",
    reponse_f1: "Elle attend toujours toutes les Promises avant de rejeter",
    reponse_f2: "Elle renvoie [1, 'E', 3]",
    explication: "Promise.all est fail-fast sur les rejets.",
  },
  {
    id: 197,
    question:
      "`JavaScript — Promise.allSettled\n\nQue renvoie Promise.allSettled ?\n\nRéférence exercice : JS-197`",
    reponse_v: "Un tableau décrivant le statut de chaque Promise",
    reponse_f1: "La première valeur résolue",
    reponse_f2: "Une Promise rejetée dès la première erreur",
    explication:
      "allSettled attend toutes les Promises et conserve succès comme échecs.",
  },
  {
    id: 198,
    question:
      "`JavaScript — Promise.race\n\nQuelle Promise détermine le résultat de Promise.race ?\n\nRéférence exercice : JS-198`",
    reponse_v: "La première Promise réglée, résolue ou rejetée",
    reponse_f1: "La première Promise résolue uniquement",
    reponse_f2: "La dernière Promise terminée",
    explication: "race adopte l'état de la première Promise settled.",
  },
  {
    id: 199,
    question:
      "`JavaScript — AbortController\n\nQuel est le rôle principal d'AbortController ?\n\nRéférence exercice : JS-199`",
    reponse_v: "Signaler l'annulation à une API compatible via un AbortSignal",
    reponse_f1: "Forcer l'arrêt immédiat de n'importe quelle Promise",
    reponse_f2: "Supprimer une microtask de la file",
    explication:
      "AbortController fournit un signal coopératif ; il ne tue pas arbitrairement une Promise.",
  },
  {
    id: 200,
    question:
      '`JavaScript — event loop\n\nQuel ordre d\'affichage est correct ?\n\nconsole.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");\n\nRéférence exercice : JS-200`',
    reponse_v: "A D C B",
    reponse_f1: "A C D B",
    reponse_f2: "A D B C",
    explication:
      "Les microtasks de Promise sont exécutées avant les macrotasks de setTimeout.",
  },
  {
    id: 201,
    question:
      "`JavaScript — générateur\n\nQuelle valeur renvoie le premier appel à next() ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconst it = g();\nconsole.log(it.next());\n\nRéférence exercice : JS-201`",
    reponse_v: "{ value: 1, done: false }",
    reponse_f1: "{ value: 2, done: true }",
    reponse_f2: "{ value: 1, done: true }",
    explication: "Le premier yield suspend le générateur avec done à false.",
  },
  {
    id: 202,
    question:
      "`JavaScript — valeur finale d'un générateur\n\nQuelle valeur renvoie le second appel à next() ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconst it = g();\nit.next();\nconsole.log(it.next());\n\nRéférence exercice : JS-202`",
    reponse_v: "{ value: 2, done: true }",
    reponse_f1: "{ value: 1, done: false }",
    reponse_f2: "{ value: undefined, done: true }",
    explication: "Le return termine le générateur et fournit sa valeur finale.",
  },
  {
    id: 203,
    question:
      "`JavaScript — for...of et générateur\n\nQuelle sortie produit ce code ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconsole.log([...g()]);\n\nRéférence exercice : JS-203`",
    reponse_v: "[1]",
    reponse_f1: "[1, 2]",
    reponse_f2: "[2]",
    explication:
      "La valeur de return n'est pas incluse dans l'itération for...of ou le spread.",
  },
  {
    id: 204,
    question:
      "`JavaScript — modules ES\n\nQuelle caractéristique distingue les imports ES modules ?\n\nRéférence exercice : JS-204`",
    reponse_v:
      "Les bindings importés sont vivants et en lecture seule côté importateur",
    reponse_f1: "Les valeurs sont toujours copiées une fois",
    reponse_f2: "Les imports sont évalués dynamiquement à chaque accès",
    explication: "Les imports sont des live bindings sur les exports.",
  },
  {
    id: 205,
    question:
      "`JavaScript — export default\n\nCombien d'exports default un module ES peut-il déclarer ?\n\nRéférence exercice : JS-205`",
    reponse_v: "Un seul",
    reponse_f1: "Autant que d'exports nommés",
    reponse_f2: "Aucun si le module contient des classes",
    explication: "Un module ne peut avoir qu'un export default.",
  },
  {
    id: 206,
    question:
      "`JavaScript — champs privés\n\nQuelle affirmation est correcte ?\n\nclass A {\n  #x = 1;\n}\n\nRéférence exercice : JS-206`",
    reponse_v: "#x n'est accessible que dans le corps lexical de la classe",
    reponse_f1: "#x est accessible via obj['#x']",
    reponse_f2: "#x est une convention sans effet",
    explication:
      "Les champs privés utilisent une vérification syntaxique stricte.",
  },
  {
    id: 207,
    question:
      "`JavaScript — méthode statique\n\nQuelle affirmation est correcte ?\n\nclass A {\n  static f() { return 1; }\n}\n\nRéférence exercice : JS-207`",
    reponse_v: "f est appelée via A.f()",
    reponse_f1: "f est disponible sur chaque instance",
    reponse_f2: "f est stockée sur A.prototype",
    explication:
      "Une méthode statique appartient au constructeur, pas aux instances.",
  },
  {
    id: 208,
    question:
      "`JavaScript — super dans une classe dérivée\n\nQue doit faire un constructeur dérivé avant d'utiliser this ?\n\nRéférence exercice : JS-208`",
    reponse_v: "Appeler super()",
    reponse_f1: "Appeler Object.create()",
    reponse_f2: "Initialiser manuellement le prototype",
    explication:
      "Dans une classe dérivée, this n'est disponible qu'après super().",
  },
  {
    id: 209,
    question:
      "`JavaScript — Proxy\n\nQuel piège intercepte la lecture d'une propriété ?\n\nnew Proxy(target, {\n  // ?\n});\n\nRéférence exercice : JS-209`",
    reponse_v: "get(target, prop, receiver)",
    reponse_f1: "set(target, prop, value)",
    reponse_f2: "hasOwn(target, prop)",
    explication: "Le trap get intercepte l'accès en lecture.",
  },
  {
    id: 210,
    question:
      "`JavaScript — itérateur personnalisé\n\nQuelle méthode rend un objet itérable avec for...of ?\n\nRéférence exercice : JS-210`",
    reponse_v: "[Symbol.iterator]()",
    reponse_f1: "iterator()",
    reponse_f2: "[Symbol.asyncIterator]() uniquement",
    explication:
      "Un itérable synchrone expose une méthode sous Symbol.iterator.",
  },
  {
    id: 211,
    question:
      "`JavaScript — générateur\n\nQuelle valeur renvoie le premier appel à next() ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconst it = g();\nconsole.log(it.next());\n\nRéférence exercice : JS-211`",
    reponse_v: "{ value: 1, done: false }",
    reponse_f1: "{ value: 2, done: true }",
    reponse_f2: "{ value: 1, done: true }",
    explication: "Le premier yield suspend le générateur avec done à false.",
  },
  {
    id: 212,
    question:
      "`JavaScript — valeur finale d'un générateur\n\nQuelle valeur renvoie le second appel à next() ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconst it = g();\nit.next();\nconsole.log(it.next());\n\nRéférence exercice : JS-212`",
    reponse_v: "{ value: 2, done: true }",
    reponse_f1: "{ value: 1, done: false }",
    reponse_f2: "{ value: undefined, done: true }",
    explication: "Le return termine le générateur et fournit sa valeur finale.",
  },
  {
    id: 213,
    question:
      "`JavaScript — for...of et générateur\n\nQuelle sortie produit ce code ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconsole.log([...g()]);\n\nRéférence exercice : JS-213`",
    reponse_v: "[1]",
    reponse_f1: "[1, 2]",
    reponse_f2: "[2]",
    explication:
      "La valeur de return n'est pas incluse dans l'itération for...of ou le spread.",
  },
  {
    id: 214,
    question:
      "`JavaScript — modules ES\n\nQuelle caractéristique distingue les imports ES modules ?\n\nRéférence exercice : JS-214`",
    reponse_v:
      "Les bindings importés sont vivants et en lecture seule côté importateur",
    reponse_f1: "Les valeurs sont toujours copiées une fois",
    reponse_f2: "Les imports sont évalués dynamiquement à chaque accès",
    explication: "Les imports sont des live bindings sur les exports.",
  },
  {
    id: 215,
    question:
      "`JavaScript — export default\n\nCombien d'exports default un module ES peut-il déclarer ?\n\nRéférence exercice : JS-215`",
    reponse_v: "Un seul",
    reponse_f1: "Autant que d'exports nommés",
    reponse_f2: "Aucun si le module contient des classes",
    explication: "Un module ne peut avoir qu'un export default.",
  },
  {
    id: 216,
    question:
      "`JavaScript — champs privés\n\nQuelle affirmation est correcte ?\n\nclass A {\n  #x = 1;\n}\n\nRéférence exercice : JS-216`",
    reponse_v: "#x n'est accessible que dans le corps lexical de la classe",
    reponse_f1: "#x est accessible via obj['#x']",
    reponse_f2: "#x est une convention sans effet",
    explication:
      "Les champs privés utilisent une vérification syntaxique stricte.",
  },
  {
    id: 217,
    question:
      "`JavaScript — méthode statique\n\nQuelle affirmation est correcte ?\n\nclass A {\n  static f() { return 1; }\n}\n\nRéférence exercice : JS-217`",
    reponse_v: "f est appelée via A.f()",
    reponse_f1: "f est disponible sur chaque instance",
    reponse_f2: "f est stockée sur A.prototype",
    explication:
      "Une méthode statique appartient au constructeur, pas aux instances.",
  },
  {
    id: 218,
    question:
      "`JavaScript — super dans une classe dérivée\n\nQue doit faire un constructeur dérivé avant d'utiliser this ?\n\nRéférence exercice : JS-218`",
    reponse_v: "Appeler super()",
    reponse_f1: "Appeler Object.create()",
    reponse_f2: "Initialiser manuellement le prototype",
    explication:
      "Dans une classe dérivée, this n'est disponible qu'après super().",
  },
  {
    id: 219,
    question:
      "`JavaScript — Proxy\n\nQuel piège intercepte la lecture d'une propriété ?\n\nnew Proxy(target, {\n  // ?\n});\n\nRéférence exercice : JS-219`",
    reponse_v: "get(target, prop, receiver)",
    reponse_f1: "set(target, prop, value)",
    reponse_f2: "hasOwn(target, prop)",
    explication: "Le trap get intercepte l'accès en lecture.",
  },
  {
    id: 220,
    question:
      "`JavaScript — itérateur personnalisé\n\nQuelle méthode rend un objet itérable avec for...of ?\n\nRéférence exercice : JS-220`",
    reponse_v: "[Symbol.iterator]()",
    reponse_f1: "iterator()",
    reponse_f2: "[Symbol.asyncIterator]() uniquement",
    explication:
      "Un itérable synchrone expose une méthode sous Symbol.iterator.",
  },
  {
    id: 221,
    question:
      "`JavaScript — générateur\n\nQuelle valeur renvoie le premier appel à next() ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconst it = g();\nconsole.log(it.next());\n\nRéférence exercice : JS-221`",
    reponse_v: "{ value: 1, done: false }",
    reponse_f1: "{ value: 2, done: true }",
    reponse_f2: "{ value: 1, done: true }",
    explication: "Le premier yield suspend le générateur avec done à false.",
  },
  {
    id: 222,
    question:
      "`JavaScript — valeur finale d'un générateur\n\nQuelle valeur renvoie le second appel à next() ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconst it = g();\nit.next();\nconsole.log(it.next());\n\nRéférence exercice : JS-222`",
    reponse_v: "{ value: 2, done: true }",
    reponse_f1: "{ value: 1, done: false }",
    reponse_f2: "{ value: undefined, done: true }",
    explication: "Le return termine le générateur et fournit sa valeur finale.",
  },
  {
    id: 223,
    question:
      "`JavaScript — for...of et générateur\n\nQuelle sortie produit ce code ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconsole.log([...g()]);\n\nRéférence exercice : JS-223`",
    reponse_v: "[1]",
    reponse_f1: "[1, 2]",
    reponse_f2: "[2]",
    explication:
      "La valeur de return n'est pas incluse dans l'itération for...of ou le spread.",
  },
  {
    id: 224,
    question:
      "`JavaScript — modules ES\n\nQuelle caractéristique distingue les imports ES modules ?\n\nRéférence exercice : JS-224`",
    reponse_v:
      "Les bindings importés sont vivants et en lecture seule côté importateur",
    reponse_f1: "Les valeurs sont toujours copiées une fois",
    reponse_f2: "Les imports sont évalués dynamiquement à chaque accès",
    explication: "Les imports sont des live bindings sur les exports.",
  },
  {
    id: 225,
    question:
      "`JavaScript — export default\n\nCombien d'exports default un module ES peut-il déclarer ?\n\nRéférence exercice : JS-225`",
    reponse_v: "Un seul",
    reponse_f1: "Autant que d'exports nommés",
    reponse_f2: "Aucun si le module contient des classes",
    explication: "Un module ne peut avoir qu'un export default.",
  },
  {
    id: 226,
    question:
      "`JavaScript — champs privés\n\nQuelle affirmation est correcte ?\n\nclass A {\n  #x = 1;\n}\n\nRéférence exercice : JS-226`",
    reponse_v: "#x n'est accessible que dans le corps lexical de la classe",
    reponse_f1: "#x est accessible via obj['#x']",
    reponse_f2: "#x est une convention sans effet",
    explication:
      "Les champs privés utilisent une vérification syntaxique stricte.",
  },
  {
    id: 227,
    question:
      "`JavaScript — méthode statique\n\nQuelle affirmation est correcte ?\n\nclass A {\n  static f() { return 1; }\n}\n\nRéférence exercice : JS-227`",
    reponse_v: "f est appelée via A.f()",
    reponse_f1: "f est disponible sur chaque instance",
    reponse_f2: "f est stockée sur A.prototype",
    explication:
      "Une méthode statique appartient au constructeur, pas aux instances.",
  },
  {
    id: 228,
    question:
      "`JavaScript — super dans une classe dérivée\n\nQue doit faire un constructeur dérivé avant d'utiliser this ?\n\nRéférence exercice : JS-228`",
    reponse_v: "Appeler super()",
    reponse_f1: "Appeler Object.create()",
    reponse_f2: "Initialiser manuellement le prototype",
    explication:
      "Dans une classe dérivée, this n'est disponible qu'après super().",
  },
  {
    id: 229,
    question:
      "`JavaScript — Proxy\n\nQuel piège intercepte la lecture d'une propriété ?\n\nnew Proxy(target, {\n  // ?\n});\n\nRéférence exercice : JS-229`",
    reponse_v: "get(target, prop, receiver)",
    reponse_f1: "set(target, prop, value)",
    reponse_f2: "hasOwn(target, prop)",
    explication: "Le trap get intercepte l'accès en lecture.",
  },
  {
    id: 230,
    question:
      "`JavaScript — itérateur personnalisé\n\nQuelle méthode rend un objet itérable avec for...of ?\n\nRéférence exercice : JS-230`",
    reponse_v: "[Symbol.iterator]()",
    reponse_f1: "iterator()",
    reponse_f2: "[Symbol.asyncIterator]() uniquement",
    explication:
      "Un itérable synchrone expose une méthode sous Symbol.iterator.",
  },
  {
    id: 231,
    question:
      "`JavaScript — générateur\n\nQuelle valeur renvoie le premier appel à next() ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconst it = g();\nconsole.log(it.next());\n\nRéférence exercice : JS-231`",
    reponse_v: "{ value: 1, done: false }",
    reponse_f1: "{ value: 2, done: true }",
    reponse_f2: "{ value: 1, done: true }",
    explication: "Le premier yield suspend le générateur avec done à false.",
  },
  {
    id: 232,
    question:
      "`JavaScript — valeur finale d'un générateur\n\nQuelle valeur renvoie le second appel à next() ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconst it = g();\nit.next();\nconsole.log(it.next());\n\nRéférence exercice : JS-232`",
    reponse_v: "{ value: 2, done: true }",
    reponse_f1: "{ value: 1, done: false }",
    reponse_f2: "{ value: undefined, done: true }",
    explication: "Le return termine le générateur et fournit sa valeur finale.",
  },
  {
    id: 233,
    question:
      "`JavaScript — for...of et générateur\n\nQuelle sortie produit ce code ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconsole.log([...g()]);\n\nRéférence exercice : JS-233`",
    reponse_v: "[1]",
    reponse_f1: "[1, 2]",
    reponse_f2: "[2]",
    explication:
      "La valeur de return n'est pas incluse dans l'itération for...of ou le spread.",
  },
  {
    id: 234,
    question:
      "`JavaScript — modules ES\n\nQuelle caractéristique distingue les imports ES modules ?\n\nRéférence exercice : JS-234`",
    reponse_v:
      "Les bindings importés sont vivants et en lecture seule côté importateur",
    reponse_f1: "Les valeurs sont toujours copiées une fois",
    reponse_f2: "Les imports sont évalués dynamiquement à chaque accès",
    explication: "Les imports sont des live bindings sur les exports.",
  },
  {
    id: 235,
    question:
      "`JavaScript — export default\n\nCombien d'exports default un module ES peut-il déclarer ?\n\nRéférence exercice : JS-235`",
    reponse_v: "Un seul",
    reponse_f1: "Autant que d'exports nommés",
    reponse_f2: "Aucun si le module contient des classes",
    explication: "Un module ne peut avoir qu'un export default.",
  },
  {
    id: 236,
    question:
      "`JavaScript — champs privés\n\nQuelle affirmation est correcte ?\n\nclass A {\n  #x = 1;\n}\n\nRéférence exercice : JS-236`",
    reponse_v: "#x n'est accessible que dans le corps lexical de la classe",
    reponse_f1: "#x est accessible via obj['#x']",
    reponse_f2: "#x est une convention sans effet",
    explication:
      "Les champs privés utilisent une vérification syntaxique stricte.",
  },
  {
    id: 237,
    question:
      "`JavaScript — méthode statique\n\nQuelle affirmation est correcte ?\n\nclass A {\n  static f() { return 1; }\n}\n\nRéférence exercice : JS-237`",
    reponse_v: "f est appelée via A.f()",
    reponse_f1: "f est disponible sur chaque instance",
    reponse_f2: "f est stockée sur A.prototype",
    explication:
      "Une méthode statique appartient au constructeur, pas aux instances.",
  },
  {
    id: 238,
    question:
      "`JavaScript — super dans une classe dérivée\n\nQue doit faire un constructeur dérivé avant d'utiliser this ?\n\nRéférence exercice : JS-238`",
    reponse_v: "Appeler super()",
    reponse_f1: "Appeler Object.create()",
    reponse_f2: "Initialiser manuellement le prototype",
    explication:
      "Dans une classe dérivée, this n'est disponible qu'après super().",
  },
  {
    id: 239,
    question:
      "`JavaScript — Proxy\n\nQuel piège intercepte la lecture d'une propriété ?\n\nnew Proxy(target, {\n  // ?\n});\n\nRéférence exercice : JS-239`",
    reponse_v: "get(target, prop, receiver)",
    reponse_f1: "set(target, prop, value)",
    reponse_f2: "hasOwn(target, prop)",
    explication: "Le trap get intercepte l'accès en lecture.",
  },
  {
    id: 240,
    question:
      "`JavaScript — itérateur personnalisé\n\nQuelle méthode rend un objet itérable avec for...of ?\n\nRéférence exercice : JS-240`",
    reponse_v: "[Symbol.iterator]()",
    reponse_f1: "iterator()",
    reponse_f2: "[Symbol.asyncIterator]() uniquement",
    explication:
      "Un itérable synchrone expose une méthode sous Symbol.iterator.",
  },
  {
    id: 241,
    question:
      "`JavaScript — générateur\n\nQuelle valeur renvoie le premier appel à next() ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconst it = g();\nconsole.log(it.next());\n\nRéférence exercice : JS-241`",
    reponse_v: "{ value: 1, done: false }",
    reponse_f1: "{ value: 2, done: true }",
    reponse_f2: "{ value: 1, done: true }",
    explication: "Le premier yield suspend le générateur avec done à false.",
  },
  {
    id: 242,
    question:
      "`JavaScript — valeur finale d'un générateur\n\nQuelle valeur renvoie le second appel à next() ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconst it = g();\nit.next();\nconsole.log(it.next());\n\nRéférence exercice : JS-242`",
    reponse_v: "{ value: 2, done: true }",
    reponse_f1: "{ value: 1, done: false }",
    reponse_f2: "{ value: undefined, done: true }",
    explication: "Le return termine le générateur et fournit sa valeur finale.",
  },
  {
    id: 243,
    question:
      "`JavaScript — for...of et générateur\n\nQuelle sortie produit ce code ?\n\nfunction* g() {\n  yield 1;\n  return 2;\n}\nconsole.log([...g()]);\n\nRéférence exercice : JS-243`",
    reponse_v: "[1]",
    reponse_f1: "[1, 2]",
    reponse_f2: "[2]",
    explication:
      "La valeur de return n'est pas incluse dans l'itération for...of ou le spread.",
  },
  {
    id: 244,
    question:
      "`JavaScript — modules ES\n\nQuelle caractéristique distingue les imports ES modules ?\n\nRéférence exercice : JS-244`",
    reponse_v:
      "Les bindings importés sont vivants et en lecture seule côté importateur",
    reponse_f1: "Les valeurs sont toujours copiées une fois",
    reponse_f2: "Les imports sont évalués dynamiquement à chaque accès",
    explication: "Les imports sont des live bindings sur les exports.",
  },
  {
    id: 245,
    question:
      "`JavaScript — export default\n\nCombien d'exports default un module ES peut-il déclarer ?\n\nRéférence exercice : JS-245`",
    reponse_v: "Un seul",
    reponse_f1: "Autant que d'exports nommés",
    reponse_f2: "Aucun si le module contient des classes",
    explication: "Un module ne peut avoir qu'un export default.",
  },
  {
    id: 246,
    question:
      "`JavaScript — champs privés\n\nQuelle affirmation est correcte ?\n\nclass A {\n  #x = 1;\n}\n\nRéférence exercice : JS-246`",
    reponse_v: "#x n'est accessible que dans le corps lexical de la classe",
    reponse_f1: "#x est accessible via obj['#x']",
    reponse_f2: "#x est une convention sans effet",
    explication:
      "Les champs privés utilisent une vérification syntaxique stricte.",
  },
  {
    id: 247,
    question:
      "`JavaScript — méthode statique\n\nQuelle affirmation est correcte ?\n\nclass A {\n  static f() { return 1; }\n}\n\nRéférence exercice : JS-247`",
    reponse_v: "f est appelée via A.f()",
    reponse_f1: "f est disponible sur chaque instance",
    reponse_f2: "f est stockée sur A.prototype",
    explication:
      "Une méthode statique appartient au constructeur, pas aux instances.",
  },
  {
    id: 248,
    question:
      "`JavaScript — super dans une classe dérivée\n\nQue doit faire un constructeur dérivé avant d'utiliser this ?\n\nRéférence exercice : JS-248`",
    reponse_v: "Appeler super()",
    reponse_f1: "Appeler Object.create()",
    reponse_f2: "Initialiser manuellement le prototype",
    explication:
      "Dans une classe dérivée, this n'est disponible qu'après super().",
  },
  {
    id: 249,
    question:
      "`JavaScript — Proxy\n\nQuel piège intercepte la lecture d'une propriété ?\n\nnew Proxy(target, {\n  // ?\n});\n\nRéférence exercice : JS-249`",
    reponse_v: "get(target, prop, receiver)",
    reponse_f1: "set(target, prop, value)",
    reponse_f2: "hasOwn(target, prop)",
    explication: "Le trap get intercepte l'accès en lecture.",
  },
  {
    id: 250,
    question:
      "`JavaScript — itérateur personnalisé\n\nQuelle méthode rend un objet itérable avec for...of ?\n\nRéférence exercice : JS-250`",
    reponse_v: "[Symbol.iterator]()",
    reponse_f1: "iterator()",
    reponse_f2: "[Symbol.asyncIterator]() uniquement",
    explication:
      "Un itérable synchrone expose une méthode sous Symbol.iterator.",
  },
  {
    id: 251,
    question:
      "`JavaScript — Date\n\nQue représente Date.now() ?\n\nRéférence exercice : JS-251`",
    reponse_v: "Le nombre de millisecondes depuis l'époque Unix",
    reponse_f1: "Une instance Date",
    reponse_f2: "Le nombre de secondes depuis minuit",
    explication: "Date.now retourne un timestamp en millisecondes.",
  },
  {
    id: 252,
    question:
      "`JavaScript — WeakMap\n\nQuelle caractéristique est correcte ?\n\nRéférence exercice : JS-252`",
    reponse_v: "Ses clés doivent être des objets et ne sont pas énumérables",
    reponse_f1: "Elle accepte uniquement des clés primitives",
    reponse_f2: "Elle empêche la collecte de ses clés",
    explication:
      "WeakMap conserve faiblement ses clés objets et n'est pas itérable.",
  },
  {
    id: 253,
    question:
      "`JavaScript — WeakSet\n\nQuel usage convient le mieux à WeakSet ?\n\nRéférence exercice : JS-253`",
    reponse_v: "Mémoriser faiblement des objets déjà traités",
    reponse_f1: "Stocker des nombres triés",
    reponse_f2: "Conserver un historique énumérable",
    explication:
      "WeakSet est adapté au marquage d'objets sans empêcher leur collecte.",
  },
  {
    id: 254,
    question:
      "`JavaScript — structuredClone\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : JS-254`",
    reponse_v: "Il réalise une copie profonde de nombreuses structures natives",
    reponse_f1: "Il copie les fonctions exécutables",
    reponse_f2: "Il partage toujours les objets imbriqués",
    explication:
      "structuredClone copie profondément de nombreux types mais pas les fonctions.",
  },
  {
    id: 255,
    question:
      "`JavaScript — optional chaining\n\nQuelle valeur reçoit x ?\n\nconst obj = null;\nconst x = obj?.a?.b;\n\nRéférence exercice : JS-255`",
    reponse_v: "undefined",
    reponse_f1: "null",
    reponse_f2: "TypeError",
    explication: "L'optional chaining arrête l'accès et produit undefined.",
  },
  {
    id: 256,
    question:
      '`JavaScript — opérateur in\n\nQuelle sortie produit ce code ?\n\nconst a = [];\na[2] = "x";\nconsole.log(0 in a, 2 in a);\n\nRéférence exercice : JS-256`',
    reponse_v: "false true",
    reponse_f1: "true true",
    reponse_f2: "false false",
    explication: "Les indices 0 et 1 sont des trous ; l'indice 2 existe.",
  },
  {
    id: 257,
    question:
      "`JavaScript — microtask explicite\n\nQuel mécanisme planifie directement une microtask ?\n\nRéférence exercice : JS-257`",
    reponse_v: "queueMicrotask(callback)",
    reponse_f1: "setTimeout(callback, 0)",
    reponse_f2: "requestAnimationFrame(callback)",
    explication:
      "queueMicrotask ajoute directement un callback à la file des microtasks.",
  },
  {
    id: 258,
    question:
      "`JavaScript — strict mode\n\nQuel effet a le mode strict sur une affectation à une variable non déclarée ?\n\nRéférence exercice : JS-258`",
    reponse_v: "Il provoque une ReferenceError",
    reponse_f1: "Il crée une propriété globale",
    reponse_f2: "Il crée une variable de bloc",
    explication:
      "Le mode strict interdit la création implicite de variables globales.",
  },
  {
    id: 259,
    question:
      "`JavaScript — BigInt\n\nQuelle opération provoque une TypeError ?\n\n1n + 1\n\nRéférence exercice : JS-259`",
    reponse_v: "L'addition entre BigInt et Number",
    reponse_f1: "L'addition entre deux BigInt",
    reponse_f2: "La comparaison 1n < 2",
    explication:
      "Les opérations arithmétiques ne mélangent pas directement BigInt et Number.",
  },
  {
    id: 260,
    question:
      "`JavaScript — RegExp globale\n\nQuelle subtilité concerne une RegExp avec le drapeau g utilisée plusieurs fois avec test() ?\n\nRéférence exercice : JS-260`",
    reponse_v: "lastIndex est modifié entre les appels",
    reponse_f1: "La RegExp devient automatiquement immuable",
    reponse_f2: "test() ignore toujours le drapeau g",
    explication: "Les RegExp globales sont stateful via lastIndex.",
  },
  {
    id: 261,
    question:
      "`JavaScript — Date\n\nQue représente Date.now() ?\n\nRéférence exercice : JS-261`",
    reponse_v: "Le nombre de millisecondes depuis l'époque Unix",
    reponse_f1: "Une instance Date",
    reponse_f2: "Le nombre de secondes depuis minuit",
    explication: "Date.now retourne un timestamp en millisecondes.",
  },
  {
    id: 262,
    question:
      "`JavaScript — WeakMap\n\nQuelle caractéristique est correcte ?\n\nRéférence exercice : JS-262`",
    reponse_v: "Ses clés doivent être des objets et ne sont pas énumérables",
    reponse_f1: "Elle accepte uniquement des clés primitives",
    reponse_f2: "Elle empêche la collecte de ses clés",
    explication:
      "WeakMap conserve faiblement ses clés objets et n'est pas itérable.",
  },
  {
    id: 263,
    question:
      "`JavaScript — WeakSet\n\nQuel usage convient le mieux à WeakSet ?\n\nRéférence exercice : JS-263`",
    reponse_v: "Mémoriser faiblement des objets déjà traités",
    reponse_f1: "Stocker des nombres triés",
    reponse_f2: "Conserver un historique énumérable",
    explication:
      "WeakSet est adapté au marquage d'objets sans empêcher leur collecte.",
  },
  {
    id: 264,
    question:
      "`JavaScript — structuredClone\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : JS-264`",
    reponse_v: "Il réalise une copie profonde de nombreuses structures natives",
    reponse_f1: "Il copie les fonctions exécutables",
    reponse_f2: "Il partage toujours les objets imbriqués",
    explication:
      "structuredClone copie profondément de nombreux types mais pas les fonctions.",
  },
  {
    id: 265,
    question:
      "`JavaScript — optional chaining\n\nQuelle valeur reçoit x ?\n\nconst obj = null;\nconst x = obj?.a?.b;\n\nRéférence exercice : JS-265`",
    reponse_v: "undefined",
    reponse_f1: "null",
    reponse_f2: "TypeError",
    explication: "L'optional chaining arrête l'accès et produit undefined.",
  },
  {
    id: 266,
    question:
      '`JavaScript — opérateur in\n\nQuelle sortie produit ce code ?\n\nconst a = [];\na[2] = "x";\nconsole.log(0 in a, 2 in a);\n\nRéférence exercice : JS-266`',
    reponse_v: "false true",
    reponse_f1: "true true",
    reponse_f2: "false false",
    explication: "Les indices 0 et 1 sont des trous ; l'indice 2 existe.",
  },
  {
    id: 267,
    question:
      "`JavaScript — microtask explicite\n\nQuel mécanisme planifie directement une microtask ?\n\nRéférence exercice : JS-267`",
    reponse_v: "queueMicrotask(callback)",
    reponse_f1: "setTimeout(callback, 0)",
    reponse_f2: "requestAnimationFrame(callback)",
    explication:
      "queueMicrotask ajoute directement un callback à la file des microtasks.",
  },
  {
    id: 268,
    question:
      "`JavaScript — strict mode\n\nQuel effet a le mode strict sur une affectation à une variable non déclarée ?\n\nRéférence exercice : JS-268`",
    reponse_v: "Il provoque une ReferenceError",
    reponse_f1: "Il crée une propriété globale",
    reponse_f2: "Il crée une variable de bloc",
    explication:
      "Le mode strict interdit la création implicite de variables globales.",
  },
  {
    id: 269,
    question:
      "`JavaScript — BigInt\n\nQuelle opération provoque une TypeError ?\n\n1n + 1\n\nRéférence exercice : JS-269`",
    reponse_v: "L'addition entre BigInt et Number",
    reponse_f1: "L'addition entre deux BigInt",
    reponse_f2: "La comparaison 1n < 2",
    explication:
      "Les opérations arithmétiques ne mélangent pas directement BigInt et Number.",
  },
  {
    id: 270,
    question:
      "`JavaScript — RegExp globale\n\nQuelle subtilité concerne une RegExp avec le drapeau g utilisée plusieurs fois avec test() ?\n\nRéférence exercice : JS-270`",
    reponse_v: "lastIndex est modifié entre les appels",
    reponse_f1: "La RegExp devient automatiquement immuable",
    reponse_f2: "test() ignore toujours le drapeau g",
    explication: "Les RegExp globales sont stateful via lastIndex.",
  },
  {
    id: 271,
    question:
      "`JavaScript — Date\n\nQue représente Date.now() ?\n\nRéférence exercice : JS-271`",
    reponse_v: "Le nombre de millisecondes depuis l'époque Unix",
    reponse_f1: "Une instance Date",
    reponse_f2: "Le nombre de secondes depuis minuit",
    explication: "Date.now retourne un timestamp en millisecondes.",
  },
  {
    id: 272,
    question:
      "`JavaScript — WeakMap\n\nQuelle caractéristique est correcte ?\n\nRéférence exercice : JS-272`",
    reponse_v: "Ses clés doivent être des objets et ne sont pas énumérables",
    reponse_f1: "Elle accepte uniquement des clés primitives",
    reponse_f2: "Elle empêche la collecte de ses clés",
    explication:
      "WeakMap conserve faiblement ses clés objets et n'est pas itérable.",
  },
  {
    id: 273,
    question:
      "`JavaScript — WeakSet\n\nQuel usage convient le mieux à WeakSet ?\n\nRéférence exercice : JS-273`",
    reponse_v: "Mémoriser faiblement des objets déjà traités",
    reponse_f1: "Stocker des nombres triés",
    reponse_f2: "Conserver un historique énumérable",
    explication:
      "WeakSet est adapté au marquage d'objets sans empêcher leur collecte.",
  },
  {
    id: 274,
    question:
      "`JavaScript — structuredClone\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : JS-274`",
    reponse_v: "Il réalise une copie profonde de nombreuses structures natives",
    reponse_f1: "Il copie les fonctions exécutables",
    reponse_f2: "Il partage toujours les objets imbriqués",
    explication:
      "structuredClone copie profondément de nombreux types mais pas les fonctions.",
  },
  {
    id: 275,
    question:
      "`JavaScript — optional chaining\n\nQuelle valeur reçoit x ?\n\nconst obj = null;\nconst x = obj?.a?.b;\n\nRéférence exercice : JS-275`",
    reponse_v: "undefined",
    reponse_f1: "null",
    reponse_f2: "TypeError",
    explication: "L'optional chaining arrête l'accès et produit undefined.",
  },
  {
    id: 276,
    question:
      '`JavaScript — opérateur in\n\nQuelle sortie produit ce code ?\n\nconst a = [];\na[2] = "x";\nconsole.log(0 in a, 2 in a);\n\nRéférence exercice : JS-276`',
    reponse_v: "false true",
    reponse_f1: "true true",
    reponse_f2: "false false",
    explication: "Les indices 0 et 1 sont des trous ; l'indice 2 existe.",
  },
  {
    id: 277,
    question:
      "`JavaScript — microtask explicite\n\nQuel mécanisme planifie directement une microtask ?\n\nRéférence exercice : JS-277`",
    reponse_v: "queueMicrotask(callback)",
    reponse_f1: "setTimeout(callback, 0)",
    reponse_f2: "requestAnimationFrame(callback)",
    explication:
      "queueMicrotask ajoute directement un callback à la file des microtasks.",
  },
  {
    id: 278,
    question:
      "`JavaScript — strict mode\n\nQuel effet a le mode strict sur une affectation à une variable non déclarée ?\n\nRéférence exercice : JS-278`",
    reponse_v: "Il provoque une ReferenceError",
    reponse_f1: "Il crée une propriété globale",
    reponse_f2: "Il crée une variable de bloc",
    explication:
      "Le mode strict interdit la création implicite de variables globales.",
  },
  {
    id: 279,
    question:
      "`JavaScript — BigInt\n\nQuelle opération provoque une TypeError ?\n\n1n + 1\n\nRéférence exercice : JS-279`",
    reponse_v: "L'addition entre BigInt et Number",
    reponse_f1: "L'addition entre deux BigInt",
    reponse_f2: "La comparaison 1n < 2",
    explication:
      "Les opérations arithmétiques ne mélangent pas directement BigInt et Number.",
  },
  {
    id: 280,
    question:
      "`JavaScript — RegExp globale\n\nQuelle subtilité concerne une RegExp avec le drapeau g utilisée plusieurs fois avec test() ?\n\nRéférence exercice : JS-280`",
    reponse_v: "lastIndex est modifié entre les appels",
    reponse_f1: "La RegExp devient automatiquement immuable",
    reponse_f2: "test() ignore toujours le drapeau g",
    explication: "Les RegExp globales sont stateful via lastIndex.",
  },
  {
    id: 281,
    question:
      "`JavaScript — Date\n\nQue représente Date.now() ?\n\nRéférence exercice : JS-281`",
    reponse_v: "Le nombre de millisecondes depuis l'époque Unix",
    reponse_f1: "Une instance Date",
    reponse_f2: "Le nombre de secondes depuis minuit",
    explication: "Date.now retourne un timestamp en millisecondes.",
  },
  {
    id: 282,
    question:
      "`JavaScript — WeakMap\n\nQuelle caractéristique est correcte ?\n\nRéférence exercice : JS-282`",
    reponse_v: "Ses clés doivent être des objets et ne sont pas énumérables",
    reponse_f1: "Elle accepte uniquement des clés primitives",
    reponse_f2: "Elle empêche la collecte de ses clés",
    explication:
      "WeakMap conserve faiblement ses clés objets et n'est pas itérable.",
  },
  {
    id: 283,
    question:
      "`JavaScript — WeakSet\n\nQuel usage convient le mieux à WeakSet ?\n\nRéférence exercice : JS-283`",
    reponse_v: "Mémoriser faiblement des objets déjà traités",
    reponse_f1: "Stocker des nombres triés",
    reponse_f2: "Conserver un historique énumérable",
    explication:
      "WeakSet est adapté au marquage d'objets sans empêcher leur collecte.",
  },
  {
    id: 284,
    question:
      "`JavaScript — structuredClone\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : JS-284`",
    reponse_v: "Il réalise une copie profonde de nombreuses structures natives",
    reponse_f1: "Il copie les fonctions exécutables",
    reponse_f2: "Il partage toujours les objets imbriqués",
    explication:
      "structuredClone copie profondément de nombreux types mais pas les fonctions.",
  },
  {
    id: 285,
    question:
      "`JavaScript — optional chaining\n\nQuelle valeur reçoit x ?\n\nconst obj = null;\nconst x = obj?.a?.b;\n\nRéférence exercice : JS-285`",
    reponse_v: "undefined",
    reponse_f1: "null",
    reponse_f2: "TypeError",
    explication: "L'optional chaining arrête l'accès et produit undefined.",
  },
  {
    id: 286,
    question:
      '`JavaScript — opérateur in\n\nQuelle sortie produit ce code ?\n\nconst a = [];\na[2] = "x";\nconsole.log(0 in a, 2 in a);\n\nRéférence exercice : JS-286`',
    reponse_v: "false true",
    reponse_f1: "true true",
    reponse_f2: "false false",
    explication: "Les indices 0 et 1 sont des trous ; l'indice 2 existe.",
  },
  {
    id: 287,
    question:
      "`JavaScript — microtask explicite\n\nQuel mécanisme planifie directement une microtask ?\n\nRéférence exercice : JS-287`",
    reponse_v: "queueMicrotask(callback)",
    reponse_f1: "setTimeout(callback, 0)",
    reponse_f2: "requestAnimationFrame(callback)",
    explication:
      "queueMicrotask ajoute directement un callback à la file des microtasks.",
  },
  {
    id: 288,
    question:
      "`JavaScript — strict mode\n\nQuel effet a le mode strict sur une affectation à une variable non déclarée ?\n\nRéférence exercice : JS-288`",
    reponse_v: "Il provoque une ReferenceError",
    reponse_f1: "Il crée une propriété globale",
    reponse_f2: "Il crée une variable de bloc",
    explication:
      "Le mode strict interdit la création implicite de variables globales.",
  },
  {
    id: 289,
    question:
      "`JavaScript — BigInt\n\nQuelle opération provoque une TypeError ?\n\n1n + 1\n\nRéférence exercice : JS-289`",
    reponse_v: "L'addition entre BigInt et Number",
    reponse_f1: "L'addition entre deux BigInt",
    reponse_f2: "La comparaison 1n < 2",
    explication:
      "Les opérations arithmétiques ne mélangent pas directement BigInt et Number.",
  },
  {
    id: 290,
    question:
      "`JavaScript — RegExp globale\n\nQuelle subtilité concerne une RegExp avec le drapeau g utilisée plusieurs fois avec test() ?\n\nRéférence exercice : JS-290`",
    reponse_v: "lastIndex est modifié entre les appels",
    reponse_f1: "La RegExp devient automatiquement immuable",
    reponse_f2: "test() ignore toujours le drapeau g",
    explication: "Les RegExp globales sont stateful via lastIndex.",
  },
  {
    id: 291,
    question:
      "`JavaScript — Date\n\nQue représente Date.now() ?\n\nRéférence exercice : JS-291`",
    reponse_v: "Le nombre de millisecondes depuis l'époque Unix",
    reponse_f1: "Une instance Date",
    reponse_f2: "Le nombre de secondes depuis minuit",
    explication: "Date.now retourne un timestamp en millisecondes.",
  },
  {
    id: 292,
    question:
      "`JavaScript — WeakMap\n\nQuelle caractéristique est correcte ?\n\nRéférence exercice : JS-292`",
    reponse_v: "Ses clés doivent être des objets et ne sont pas énumérables",
    reponse_f1: "Elle accepte uniquement des clés primitives",
    reponse_f2: "Elle empêche la collecte de ses clés",
    explication:
      "WeakMap conserve faiblement ses clés objets et n'est pas itérable.",
  },
  {
    id: 293,
    question:
      "`JavaScript — WeakSet\n\nQuel usage convient le mieux à WeakSet ?\n\nRéférence exercice : JS-293`",
    reponse_v: "Mémoriser faiblement des objets déjà traités",
    reponse_f1: "Stocker des nombres triés",
    reponse_f2: "Conserver un historique énumérable",
    explication:
      "WeakSet est adapté au marquage d'objets sans empêcher leur collecte.",
  },
  {
    id: 294,
    question:
      "`JavaScript — structuredClone\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : JS-294`",
    reponse_v: "Il réalise une copie profonde de nombreuses structures natives",
    reponse_f1: "Il copie les fonctions exécutables",
    reponse_f2: "Il partage toujours les objets imbriqués",
    explication:
      "structuredClone copie profondément de nombreux types mais pas les fonctions.",
  },
  {
    id: 295,
    question:
      "`JavaScript — optional chaining\n\nQuelle valeur reçoit x ?\n\nconst obj = null;\nconst x = obj?.a?.b;\n\nRéférence exercice : JS-295`",
    reponse_v: "undefined",
    reponse_f1: "null",
    reponse_f2: "TypeError",
    explication: "L'optional chaining arrête l'accès et produit undefined.",
  },
  {
    id: 296,
    question:
      '`JavaScript — opérateur in\n\nQuelle sortie produit ce code ?\n\nconst a = [];\na[2] = "x";\nconsole.log(0 in a, 2 in a);\n\nRéférence exercice : JS-296`',
    reponse_v: "false true",
    reponse_f1: "true true",
    reponse_f2: "false false",
    explication: "Les indices 0 et 1 sont des trous ; l'indice 2 existe.",
  },
  {
    id: 297,
    question:
      "`JavaScript — microtask explicite\n\nQuel mécanisme planifie directement une microtask ?\n\nRéférence exercice : JS-297`",
    reponse_v: "queueMicrotask(callback)",
    reponse_f1: "setTimeout(callback, 0)",
    reponse_f2: "requestAnimationFrame(callback)",
    explication:
      "queueMicrotask ajoute directement un callback à la file des microtasks.",
  },
  {
    id: 298,
    question:
      "`JavaScript — strict mode\n\nQuel effet a le mode strict sur une affectation à une variable non déclarée ?\n\nRéférence exercice : JS-298`",
    reponse_v: "Il provoque une ReferenceError",
    reponse_f1: "Il crée une propriété globale",
    reponse_f2: "Il crée une variable de bloc",
    explication:
      "Le mode strict interdit la création implicite de variables globales.",
  },
  {
    id: 299,
    question:
      "`JavaScript — BigInt\n\nQuelle opération provoque une TypeError ?\n\n1n + 1\n\nRéférence exercice : JS-299`",
    reponse_v: "L'addition entre BigInt et Number",
    reponse_f1: "L'addition entre deux BigInt",
    reponse_f2: "La comparaison 1n < 2",
    explication:
      "Les opérations arithmétiques ne mélangent pas directement BigInt et Number.",
  },
  {
    id: 300,
    question:
      "`JavaScript — RegExp globale\n\nQuelle subtilité concerne une RegExp avec le drapeau g utilisée plusieurs fois avec test() ?\n\nRéférence exercice : JS-300`",
    reponse_v: "lastIndex est modifié entre les appels",
    reponse_f1: "La RegExp devient automatiquement immuable",
    reponse_f2: "test() ignore toujours le drapeau g",
    explication: "Les RegExp globales sont stateful via lastIndex.",
  },
];
