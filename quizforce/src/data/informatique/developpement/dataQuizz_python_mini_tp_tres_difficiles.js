export const dataQuizz_python_mini_tp_tres_difficiles = [
  {
    id: 1,
    question:
      "`Python — mutabilité\n\nQuelle valeur est affichée ?\n\na = [1, 2]\nb = a\nb.append(3)\nprint(a)\n\nRéférence exercice : PY-001`",
    reponse_v: "[1, 2, 3]",
    reponse_f1: "[1, 2]",
    reponse_f2: "[3]",
    explication: "a et b référencent la même liste mutable.",
  },
  {
    id: 2,
    question:
      "`Python — copie superficielle\n\nQuelle sortie produit ce code ?\n\na = [[1], [2]]\nb = a.copy()\nb[0].append(9)\nprint(a)\n\nRéférence exercice : PY-002`",
    reponse_v: "[[1, 9], [2]]",
    reponse_f1: "[[1], [2]]",
    reponse_f2: "[[1], [2, 9]]",
    explication:
      "copy() est superficielle : les sous-listes restent partagées.",
  },
  {
    id: 3,
    question:
      '`Python — opérateurs booléens\n\nQuelle valeur reçoit x ?\n\nx = 0 or [] or "python" or 42\n\nRéférence exercice : PY-003`',
    reponse_v: "python",
    reponse_f1: "42",
    reponse_f2: "[]",
    explication: "or retourne le premier opérande truthy.",
  },
  {
    id: 4,
    question:
      '`Python — and\n\nQuelle valeur reçoit x ?\n\nx = "abc" and [] and 42\n\nRéférence exercice : PY-004`',
    reponse_v: "[]",
    reponse_f1: "42",
    reponse_f2: "abc",
    explication: "and retourne le premier opérande falsy.",
  },
  {
    id: 5,
    question:
      "`Python — division\n\nQuelle sortie produit ce code ?\n\nprint(7 / 2, 7 // 2, 7 % 2)\n\nRéférence exercice : PY-005`",
    reponse_v: "3.5 3 1",
    reponse_f1: "3 3 1",
    reponse_f2: "3.5 4 -1",
    explication:
      "/ produit un float, // une division entière par plancher, % le reste.",
  },
  {
    id: 6,
    question:
      '`Python — chaînes immuables\n\nQue provoque ce code ?\n\ns = "abc"\ns[0] = "A" \n\nRéférence exercice : PY-006`',
    reponse_v: "TypeError",
    reponse_f1: "s devient 'Abc'",
    reponse_f2: "IndexError",
    explication: "Les chaînes sont immuables.",
  },
  {
    id: 7,
    question:
      "`Python — unpacking\n\nQuelle valeur reçoit rest ?\n\na, *rest, b = [1, 2, 3, 4]\n\nRéférence exercice : PY-007`",
    reponse_v: "[2, 3]",
    reponse_f1: "[1, 2, 3]",
    reponse_f2: "[3, 4]",
    explication: "Le premier et le dernier élément sont affectés séparément.",
  },
  {
    id: 8,
    question:
      "`Python — expression conditionnelle\n\nQuelle valeur reçoit x ?\n\nx = 10 if 0 else 20\n\nRéférence exercice : PY-008`",
    reponse_v: "20",
    reponse_f1: "10",
    reponse_f2: "0",
    explication: "0 est falsy, donc l'expression choisit 20.",
  },
  {
    id: 9,
    question:
      "`Python — bool et int\n\nQuelle sortie produit ce code ?\n\nprint(True + True * 2)\n\nRéférence exercice : PY-009`",
    reponse_v: "3",
    reponse_f1: "2",
    reponse_f2: "True",
    explication: "bool est un sous-type de int : True vaut 1.",
  },
  {
    id: 10,
    question:
      "`Python — identité et égalité\n\nQuelle sortie produit ce code ?\n\na = [1, 2]\nb = [1, 2]\nprint(a == b, a is b)\n\nRéférence exercice : PY-010`",
    reponse_v: "True False",
    reponse_f1: "True True",
    reponse_f2: "False False",
    explication: "== compare les valeurs ; is compare l'identité des objets.",
  },
  {
    id: 11,
    question:
      "`Python — mutabilité\n\nQuelle valeur est affichée ?\n\na = [1, 2]\nb = a\nb.append(3)\nprint(a)\n\nRéférence exercice : PY-011`",
    reponse_v: "[1, 2, 3]",
    reponse_f1: "[1, 2]",
    reponse_f2: "[3]",
    explication: "a et b référencent la même liste mutable.",
  },
  {
    id: 12,
    question:
      "`Python — copie superficielle\n\nQuelle sortie produit ce code ?\n\na = [[1], [2]]\nb = a.copy()\nb[0].append(9)\nprint(a)\n\nRéférence exercice : PY-012`",
    reponse_v: "[[1, 9], [2]]",
    reponse_f1: "[[1], [2]]",
    reponse_f2: "[[1], [2, 9]]",
    explication:
      "copy() est superficielle : les sous-listes restent partagées.",
  },
  {
    id: 13,
    question:
      '`Python — opérateurs booléens\n\nQuelle valeur reçoit x ?\n\nx = 0 or [] or "python" or 42\n\nRéférence exercice : PY-013`',
    reponse_v: "python",
    reponse_f1: "42",
    reponse_f2: "[]",
    explication: "or retourne le premier opérande truthy.",
  },
  {
    id: 14,
    question:
      '`Python — and\n\nQuelle valeur reçoit x ?\n\nx = "abc" and [] and 42\n\nRéférence exercice : PY-014`',
    reponse_v: "[]",
    reponse_f1: "42",
    reponse_f2: "abc",
    explication: "and retourne le premier opérande falsy.",
  },
  {
    id: 15,
    question:
      "`Python — division\n\nQuelle sortie produit ce code ?\n\nprint(7 / 2, 7 // 2, 7 % 2)\n\nRéférence exercice : PY-015`",
    reponse_v: "3.5 3 1",
    reponse_f1: "3 3 1",
    reponse_f2: "3.5 4 -1",
    explication:
      "/ produit un float, // une division entière par plancher, % le reste.",
  },
  {
    id: 16,
    question:
      '`Python — chaînes immuables\n\nQue provoque ce code ?\n\ns = "abc"\ns[0] = "A" \n\nRéférence exercice : PY-016`',
    reponse_v: "TypeError",
    reponse_f1: "s devient 'Abc'",
    reponse_f2: "IndexError",
    explication: "Les chaînes sont immuables.",
  },
  {
    id: 17,
    question:
      "`Python — unpacking\n\nQuelle valeur reçoit rest ?\n\na, *rest, b = [1, 2, 3, 4]\n\nRéférence exercice : PY-017`",
    reponse_v: "[2, 3]",
    reponse_f1: "[1, 2, 3]",
    reponse_f2: "[3, 4]",
    explication: "Le premier et le dernier élément sont affectés séparément.",
  },
  {
    id: 18,
    question:
      "`Python — expression conditionnelle\n\nQuelle valeur reçoit x ?\n\nx = 10 if 0 else 20\n\nRéférence exercice : PY-018`",
    reponse_v: "20",
    reponse_f1: "10",
    reponse_f2: "0",
    explication: "0 est falsy, donc l'expression choisit 20.",
  },
  {
    id: 19,
    question:
      "`Python — bool et int\n\nQuelle sortie produit ce code ?\n\nprint(True + True * 2)\n\nRéférence exercice : PY-019`",
    reponse_v: "3",
    reponse_f1: "2",
    reponse_f2: "True",
    explication: "bool est un sous-type de int : True vaut 1.",
  },
  {
    id: 20,
    question:
      "`Python — identité et égalité\n\nQuelle sortie produit ce code ?\n\na = [1, 2]\nb = [1, 2]\nprint(a == b, a is b)\n\nRéférence exercice : PY-020`",
    reponse_v: "True False",
    reponse_f1: "True True",
    reponse_f2: "False False",
    explication: "== compare les valeurs ; is compare l'identité des objets.",
  },
  {
    id: 21,
    question:
      "`Python — mutabilité\n\nQuelle valeur est affichée ?\n\na = [1, 2]\nb = a\nb.append(3)\nprint(a)\n\nRéférence exercice : PY-021`",
    reponse_v: "[1, 2, 3]",
    reponse_f1: "[1, 2]",
    reponse_f2: "[3]",
    explication: "a et b référencent la même liste mutable.",
  },
  {
    id: 22,
    question:
      "`Python — copie superficielle\n\nQuelle sortie produit ce code ?\n\na = [[1], [2]]\nb = a.copy()\nb[0].append(9)\nprint(a)\n\nRéférence exercice : PY-022`",
    reponse_v: "[[1, 9], [2]]",
    reponse_f1: "[[1], [2]]",
    reponse_f2: "[[1], [2, 9]]",
    explication:
      "copy() est superficielle : les sous-listes restent partagées.",
  },
  {
    id: 23,
    question:
      '`Python — opérateurs booléens\n\nQuelle valeur reçoit x ?\n\nx = 0 or [] or "python" or 42\n\nRéférence exercice : PY-023`',
    reponse_v: "python",
    reponse_f1: "42",
    reponse_f2: "[]",
    explication: "or retourne le premier opérande truthy.",
  },
  {
    id: 24,
    question:
      '`Python — and\n\nQuelle valeur reçoit x ?\n\nx = "abc" and [] and 42\n\nRéférence exercice : PY-024`',
    reponse_v: "[]",
    reponse_f1: "42",
    reponse_f2: "abc",
    explication: "and retourne le premier opérande falsy.",
  },
  {
    id: 25,
    question:
      "`Python — division\n\nQuelle sortie produit ce code ?\n\nprint(7 / 2, 7 // 2, 7 % 2)\n\nRéférence exercice : PY-025`",
    reponse_v: "3.5 3 1",
    reponse_f1: "3 3 1",
    reponse_f2: "3.5 4 -1",
    explication:
      "/ produit un float, // une division entière par plancher, % le reste.",
  },
  {
    id: 26,
    question:
      '`Python — chaînes immuables\n\nQue provoque ce code ?\n\ns = "abc"\ns[0] = "A" \n\nRéférence exercice : PY-026`',
    reponse_v: "TypeError",
    reponse_f1: "s devient 'Abc'",
    reponse_f2: "IndexError",
    explication: "Les chaînes sont immuables.",
  },
  {
    id: 27,
    question:
      "`Python — unpacking\n\nQuelle valeur reçoit rest ?\n\na, *rest, b = [1, 2, 3, 4]\n\nRéférence exercice : PY-027`",
    reponse_v: "[2, 3]",
    reponse_f1: "[1, 2, 3]",
    reponse_f2: "[3, 4]",
    explication: "Le premier et le dernier élément sont affectés séparément.",
  },
  {
    id: 28,
    question:
      "`Python — expression conditionnelle\n\nQuelle valeur reçoit x ?\n\nx = 10 if 0 else 20\n\nRéférence exercice : PY-028`",
    reponse_v: "20",
    reponse_f1: "10",
    reponse_f2: "0",
    explication: "0 est falsy, donc l'expression choisit 20.",
  },
  {
    id: 29,
    question:
      "`Python — bool et int\n\nQuelle sortie produit ce code ?\n\nprint(True + True * 2)\n\nRéférence exercice : PY-029`",
    reponse_v: "3",
    reponse_f1: "2",
    reponse_f2: "True",
    explication: "bool est un sous-type de int : True vaut 1.",
  },
  {
    id: 30,
    question:
      "`Python — identité et égalité\n\nQuelle sortie produit ce code ?\n\na = [1, 2]\nb = [1, 2]\nprint(a == b, a is b)\n\nRéférence exercice : PY-030`",
    reponse_v: "True False",
    reponse_f1: "True True",
    reponse_f2: "False False",
    explication: "== compare les valeurs ; is compare l'identité des objets.",
  },
  {
    id: 31,
    question:
      "`Python — mutabilité\n\nQuelle valeur est affichée ?\n\na = [1, 2]\nb = a\nb.append(3)\nprint(a)\n\nRéférence exercice : PY-031`",
    reponse_v: "[1, 2, 3]",
    reponse_f1: "[1, 2]",
    reponse_f2: "[3]",
    explication: "a et b référencent la même liste mutable.",
  },
  {
    id: 32,
    question:
      "`Python — copie superficielle\n\nQuelle sortie produit ce code ?\n\na = [[1], [2]]\nb = a.copy()\nb[0].append(9)\nprint(a)\n\nRéférence exercice : PY-032`",
    reponse_v: "[[1, 9], [2]]",
    reponse_f1: "[[1], [2]]",
    reponse_f2: "[[1], [2, 9]]",
    explication:
      "copy() est superficielle : les sous-listes restent partagées.",
  },
  {
    id: 33,
    question:
      '`Python — opérateurs booléens\n\nQuelle valeur reçoit x ?\n\nx = 0 or [] or "python" or 42\n\nRéférence exercice : PY-033`',
    reponse_v: "python",
    reponse_f1: "42",
    reponse_f2: "[]",
    explication: "or retourne le premier opérande truthy.",
  },
  {
    id: 34,
    question:
      '`Python — and\n\nQuelle valeur reçoit x ?\n\nx = "abc" and [] and 42\n\nRéférence exercice : PY-034`',
    reponse_v: "[]",
    reponse_f1: "42",
    reponse_f2: "abc",
    explication: "and retourne le premier opérande falsy.",
  },
  {
    id: 35,
    question:
      "`Python — division\n\nQuelle sortie produit ce code ?\n\nprint(7 / 2, 7 // 2, 7 % 2)\n\nRéférence exercice : PY-035`",
    reponse_v: "3.5 3 1",
    reponse_f1: "3 3 1",
    reponse_f2: "3.5 4 -1",
    explication:
      "/ produit un float, // une division entière par plancher, % le reste.",
  },
  {
    id: 36,
    question:
      '`Python — chaînes immuables\n\nQue provoque ce code ?\n\ns = "abc"\ns[0] = "A" \n\nRéférence exercice : PY-036`',
    reponse_v: "TypeError",
    reponse_f1: "s devient 'Abc'",
    reponse_f2: "IndexError",
    explication: "Les chaînes sont immuables.",
  },
  {
    id: 37,
    question:
      "`Python — unpacking\n\nQuelle valeur reçoit rest ?\n\na, *rest, b = [1, 2, 3, 4]\n\nRéférence exercice : PY-037`",
    reponse_v: "[2, 3]",
    reponse_f1: "[1, 2, 3]",
    reponse_f2: "[3, 4]",
    explication: "Le premier et le dernier élément sont affectés séparément.",
  },
  {
    id: 38,
    question:
      "`Python — expression conditionnelle\n\nQuelle valeur reçoit x ?\n\nx = 10 if 0 else 20\n\nRéférence exercice : PY-038`",
    reponse_v: "20",
    reponse_f1: "10",
    reponse_f2: "0",
    explication: "0 est falsy, donc l'expression choisit 20.",
  },
  {
    id: 39,
    question:
      "`Python — bool et int\n\nQuelle sortie produit ce code ?\n\nprint(True + True * 2)\n\nRéférence exercice : PY-039`",
    reponse_v: "3",
    reponse_f1: "2",
    reponse_f2: "True",
    explication: "bool est un sous-type de int : True vaut 1.",
  },
  {
    id: 40,
    question:
      "`Python — identité et égalité\n\nQuelle sortie produit ce code ?\n\na = [1, 2]\nb = [1, 2]\nprint(a == b, a is b)\n\nRéférence exercice : PY-040`",
    reponse_v: "True False",
    reponse_f1: "True True",
    reponse_f2: "False False",
    explication: "== compare les valeurs ; is compare l'identité des objets.",
  },
  {
    id: 41,
    question:
      "`Python — mutabilité\n\nQuelle valeur est affichée ?\n\na = [1, 2]\nb = a\nb.append(3)\nprint(a)\n\nRéférence exercice : PY-041`",
    reponse_v: "[1, 2, 3]",
    reponse_f1: "[1, 2]",
    reponse_f2: "[3]",
    explication: "a et b référencent la même liste mutable.",
  },
  {
    id: 42,
    question:
      "`Python — copie superficielle\n\nQuelle sortie produit ce code ?\n\na = [[1], [2]]\nb = a.copy()\nb[0].append(9)\nprint(a)\n\nRéférence exercice : PY-042`",
    reponse_v: "[[1, 9], [2]]",
    reponse_f1: "[[1], [2]]",
    reponse_f2: "[[1], [2, 9]]",
    explication:
      "copy() est superficielle : les sous-listes restent partagées.",
  },
  {
    id: 43,
    question:
      '`Python — opérateurs booléens\n\nQuelle valeur reçoit x ?\n\nx = 0 or [] or "python" or 42\n\nRéférence exercice : PY-043`',
    reponse_v: "python",
    reponse_f1: "42",
    reponse_f2: "[]",
    explication: "or retourne le premier opérande truthy.",
  },
  {
    id: 44,
    question:
      '`Python — and\n\nQuelle valeur reçoit x ?\n\nx = "abc" and [] and 42\n\nRéférence exercice : PY-044`',
    reponse_v: "[]",
    reponse_f1: "42",
    reponse_f2: "abc",
    explication: "and retourne le premier opérande falsy.",
  },
  {
    id: 45,
    question:
      "`Python — division\n\nQuelle sortie produit ce code ?\n\nprint(7 / 2, 7 // 2, 7 % 2)\n\nRéférence exercice : PY-045`",
    reponse_v: "3.5 3 1",
    reponse_f1: "3 3 1",
    reponse_f2: "3.5 4 -1",
    explication:
      "/ produit un float, // une division entière par plancher, % le reste.",
  },
  {
    id: 46,
    question:
      '`Python — chaînes immuables\n\nQue provoque ce code ?\n\ns = "abc"\ns[0] = "A" \n\nRéférence exercice : PY-046`',
    reponse_v: "TypeError",
    reponse_f1: "s devient 'Abc'",
    reponse_f2: "IndexError",
    explication: "Les chaînes sont immuables.",
  },
  {
    id: 47,
    question:
      "`Python — unpacking\n\nQuelle valeur reçoit rest ?\n\na, *rest, b = [1, 2, 3, 4]\n\nRéférence exercice : PY-047`",
    reponse_v: "[2, 3]",
    reponse_f1: "[1, 2, 3]",
    reponse_f2: "[3, 4]",
    explication: "Le premier et le dernier élément sont affectés séparément.",
  },
  {
    id: 48,
    question:
      "`Python — expression conditionnelle\n\nQuelle valeur reçoit x ?\n\nx = 10 if 0 else 20\n\nRéférence exercice : PY-048`",
    reponse_v: "20",
    reponse_f1: "10",
    reponse_f2: "0",
    explication: "0 est falsy, donc l'expression choisit 20.",
  },
  {
    id: 49,
    question:
      "`Python — bool et int\n\nQuelle sortie produit ce code ?\n\nprint(True + True * 2)\n\nRéférence exercice : PY-049`",
    reponse_v: "3",
    reponse_f1: "2",
    reponse_f2: "True",
    explication: "bool est un sous-type de int : True vaut 1.",
  },
  {
    id: 50,
    question:
      "`Python — identité et égalité\n\nQuelle sortie produit ce code ?\n\na = [1, 2]\nb = [1, 2]\nprint(a == b, a is b)\n\nRéférence exercice : PY-050`",
    reponse_v: "True False",
    reponse_f1: "True True",
    reponse_f2: "False False",
    explication: "== compare les valeurs ; is compare l'identité des objets.",
  },
  {
    id: 51,
    question:
      "`Python — portée locale\n\nQue provoque ce code ?\n\nx = 10\n\ndef f():\n    print(x)\n    x = 20\n\nf()\n\nRéférence exercice : PY-051`",
    reponse_v: "UnboundLocalError",
    reponse_f1: "10",
    reponse_f2: "20",
    explication:
      "L'affectation rend x locale à f, donc sa lecture précède son initialisation.",
  },
  {
    id: 52,
    question:
      "`Python — nonlocal\n\nQuelle sortie produit ce code ?\n\ndef outer():\n    x = 1\n    def inner():\n        nonlocal x\n        x += 1\n        return x\n    return inner\n\nf = outer()\nprint(f(), f())\n\nRéférence exercice : PY-052`",
    reponse_v: "2 3",
    reponse_f1: "1 2",
    reponse_f2: "2 2",
    explication: "nonlocal modifie la variable de la portée englobante.",
  },
  {
    id: 53,
    question:
      "`Python — late binding\n\nQuelle sortie produit ce code ?\n\nfuncs = [lambda: i for i in range(3)]\nprint([f() for f in funcs])\n\nRéférence exercice : PY-053`",
    reponse_v: "[2, 2, 2]",
    reponse_f1: "[0, 1, 2]",
    reponse_f2: "[3, 3, 3]",
    explication:
      "Les lambdas capturent la variable i, évaluée au moment de l'appel.",
  },
  {
    id: 54,
    question:
      "`Python — capture par argument par défaut\n\nQuelle sortie produit ce code ?\n\nfuncs = [lambda i=i: i for i in range(3)]\nprint([f() for f in funcs])\n\nRéférence exercice : PY-054`",
    reponse_v: "[0, 1, 2]",
    reponse_f1: "[2, 2, 2]",
    reponse_f2: "[3, 3, 3]",
    explication:
      "L'argument par défaut capture la valeur courante à chaque itération.",
  },
  {
    id: 55,
    question:
      "`Python — paramètres positionnels seulement\n\nQue signifie le / dans cette signature ?\n\ndef f(a, b, /, c):\n    pass\n\nRéférence exercice : PY-055`",
    reponse_v: "a et b doivent être passés positionnellement",
    reponse_f1: "c doit être passé par mot-clé",
    reponse_f2: "tous les paramètres sont positionnels seulement",
    explication: "Les paramètres avant / sont positional-only.",
  },
  {
    id: 56,
    question:
      "`Python — paramètres nommés seulement\n\nQue signifie le * dans cette signature ?\n\ndef f(a, *, b):\n    pass\n\nRéférence exercice : PY-056`",
    reponse_v: "b doit être passé par mot-clé",
    reponse_f1: "a doit être passé par mot-clé",
    reponse_f2: "b est optionnel",
    explication: "Les paramètres après * sont keyword-only.",
  },
  {
    id: 57,
    question:
      '`Python — décorateur\n\nQuelle sortie produit ce code ?\n\ndef deco(f):\n    def wrapper():\n        return "X" + f()\n    return wrapper\n\n@deco\ndef g():\n    return "Y"\n\nprint(g())\n\nRéférence exercice : PY-057`',
    reponse_v: "XY",
    reponse_f1: "Y",
    reponse_f2: "YX",
    explication: "g est remplacée par wrapper, qui préfixe le résultat.",
  },
  {
    id: 58,
    question:
      "`Python — *args et **kwargs\n\nQuelle sortie produit ce code ?\n\ndef f(*args, **kwargs):\n    print(len(args), sorted(kwargs))\n\nf(1, 2, x=3, y=4)\n\nRéférence exercice : PY-058`",
    reponse_v: "2 ['x', 'y']",
    reponse_f1: "4 []",
    reponse_f2: "2 [3, 4]",
    explication:
      "*args collecte les positionnels, **kwargs les noms de paramètres.",
  },
  {
    id: 59,
    question:
      "`Python — annotation\n\nQuelle affirmation est correcte ?\n\ndef f(x: int) -> str:\n    return x\n\nRéférence exercice : PY-059`",
    reponse_v: "Le code s'exécute malgré le type de retour incohérent",
    reponse_f1: "Python lève automatiquement TypeError",
    reponse_f2: "La fonction ne peut pas être définie",
    explication:
      "Les annotations ne sont pas imposées à l'exécution par Python seul.",
  },
  {
    id: 60,
    question:
      "`Python — argument mutable par défaut\n\nQuelle sortie produit ce code ?\n\ndef f(x, acc=[]):\n    acc.append(x)\n    return acc\n\nprint(f(1), f(2))\n\nRéférence exercice : PY-060`",
    reponse_v: "[1] [1, 2]",
    reponse_f1: "[1] [2]",
    reponse_f2: "[1, 2] [1, 2]",
    explication: "L'objet par défaut est créé une seule fois et réutilisé.",
  },
  {
    id: 61,
    question:
      "`Python — portée locale\n\nQue provoque ce code ?\n\nx = 10\n\ndef f():\n    print(x)\n    x = 20\n\nf()\n\nRéférence exercice : PY-061`",
    reponse_v: "UnboundLocalError",
    reponse_f1: "10",
    reponse_f2: "20",
    explication:
      "L'affectation rend x locale à f, donc sa lecture précède son initialisation.",
  },
  {
    id: 62,
    question:
      "`Python — nonlocal\n\nQuelle sortie produit ce code ?\n\ndef outer():\n    x = 1\n    def inner():\n        nonlocal x\n        x += 1\n        return x\n    return inner\n\nf = outer()\nprint(f(), f())\n\nRéférence exercice : PY-062`",
    reponse_v: "2 3",
    reponse_f1: "1 2",
    reponse_f2: "2 2",
    explication: "nonlocal modifie la variable de la portée englobante.",
  },
  {
    id: 63,
    question:
      "`Python — late binding\n\nQuelle sortie produit ce code ?\n\nfuncs = [lambda: i for i in range(3)]\nprint([f() for f in funcs])\n\nRéférence exercice : PY-063`",
    reponse_v: "[2, 2, 2]",
    reponse_f1: "[0, 1, 2]",
    reponse_f2: "[3, 3, 3]",
    explication:
      "Les lambdas capturent la variable i, évaluée au moment de l'appel.",
  },
  {
    id: 64,
    question:
      "`Python — capture par argument par défaut\n\nQuelle sortie produit ce code ?\n\nfuncs = [lambda i=i: i for i in range(3)]\nprint([f() for f in funcs])\n\nRéférence exercice : PY-064`",
    reponse_v: "[0, 1, 2]",
    reponse_f1: "[2, 2, 2]",
    reponse_f2: "[3, 3, 3]",
    explication:
      "L'argument par défaut capture la valeur courante à chaque itération.",
  },
  {
    id: 65,
    question:
      "`Python — paramètres positionnels seulement\n\nQue signifie le / dans cette signature ?\n\ndef f(a, b, /, c):\n    pass\n\nRéférence exercice : PY-065`",
    reponse_v: "a et b doivent être passés positionnellement",
    reponse_f1: "c doit être passé par mot-clé",
    reponse_f2: "tous les paramètres sont positionnels seulement",
    explication: "Les paramètres avant / sont positional-only.",
  },
  {
    id: 66,
    question:
      "`Python — paramètres nommés seulement\n\nQue signifie le * dans cette signature ?\n\ndef f(a, *, b):\n    pass\n\nRéférence exercice : PY-066`",
    reponse_v: "b doit être passé par mot-clé",
    reponse_f1: "a doit être passé par mot-clé",
    reponse_f2: "b est optionnel",
    explication: "Les paramètres après * sont keyword-only.",
  },
  {
    id: 67,
    question:
      '`Python — décorateur\n\nQuelle sortie produit ce code ?\n\ndef deco(f):\n    def wrapper():\n        return "X" + f()\n    return wrapper\n\n@deco\ndef g():\n    return "Y"\n\nprint(g())\n\nRéférence exercice : PY-067`',
    reponse_v: "XY",
    reponse_f1: "Y",
    reponse_f2: "YX",
    explication: "g est remplacée par wrapper, qui préfixe le résultat.",
  },
  {
    id: 68,
    question:
      "`Python — *args et **kwargs\n\nQuelle sortie produit ce code ?\n\ndef f(*args, **kwargs):\n    print(len(args), sorted(kwargs))\n\nf(1, 2, x=3, y=4)\n\nRéférence exercice : PY-068`",
    reponse_v: "2 ['x', 'y']",
    reponse_f1: "4 []",
    reponse_f2: "2 [3, 4]",
    explication:
      "*args collecte les positionnels, **kwargs les noms de paramètres.",
  },
  {
    id: 69,
    question:
      "`Python — annotation\n\nQuelle affirmation est correcte ?\n\ndef f(x: int) -> str:\n    return x\n\nRéférence exercice : PY-069`",
    reponse_v: "Le code s'exécute malgré le type de retour incohérent",
    reponse_f1: "Python lève automatiquement TypeError",
    reponse_f2: "La fonction ne peut pas être définie",
    explication:
      "Les annotations ne sont pas imposées à l'exécution par Python seul.",
  },
  {
    id: 70,
    question:
      "`Python — argument mutable par défaut\n\nQuelle sortie produit ce code ?\n\ndef f(x, acc=[]):\n    acc.append(x)\n    return acc\n\nprint(f(1), f(2))\n\nRéférence exercice : PY-070`",
    reponse_v: "[1] [1, 2]",
    reponse_f1: "[1] [2]",
    reponse_f2: "[1, 2] [1, 2]",
    explication: "L'objet par défaut est créé une seule fois et réutilisé.",
  },
  {
    id: 71,
    question:
      "`Python — portée locale\n\nQue provoque ce code ?\n\nx = 10\n\ndef f():\n    print(x)\n    x = 20\n\nf()\n\nRéférence exercice : PY-071`",
    reponse_v: "UnboundLocalError",
    reponse_f1: "10",
    reponse_f2: "20",
    explication:
      "L'affectation rend x locale à f, donc sa lecture précède son initialisation.",
  },
  {
    id: 72,
    question:
      "`Python — nonlocal\n\nQuelle sortie produit ce code ?\n\ndef outer():\n    x = 1\n    def inner():\n        nonlocal x\n        x += 1\n        return x\n    return inner\n\nf = outer()\nprint(f(), f())\n\nRéférence exercice : PY-072`",
    reponse_v: "2 3",
    reponse_f1: "1 2",
    reponse_f2: "2 2",
    explication: "nonlocal modifie la variable de la portée englobante.",
  },
  {
    id: 73,
    question:
      "`Python — late binding\n\nQuelle sortie produit ce code ?\n\nfuncs = [lambda: i for i in range(3)]\nprint([f() for f in funcs])\n\nRéférence exercice : PY-073`",
    reponse_v: "[2, 2, 2]",
    reponse_f1: "[0, 1, 2]",
    reponse_f2: "[3, 3, 3]",
    explication:
      "Les lambdas capturent la variable i, évaluée au moment de l'appel.",
  },
  {
    id: 74,
    question:
      "`Python — capture par argument par défaut\n\nQuelle sortie produit ce code ?\n\nfuncs = [lambda i=i: i for i in range(3)]\nprint([f() for f in funcs])\n\nRéférence exercice : PY-074`",
    reponse_v: "[0, 1, 2]",
    reponse_f1: "[2, 2, 2]",
    reponse_f2: "[3, 3, 3]",
    explication:
      "L'argument par défaut capture la valeur courante à chaque itération.",
  },
  {
    id: 75,
    question:
      "`Python — paramètres positionnels seulement\n\nQue signifie le / dans cette signature ?\n\ndef f(a, b, /, c):\n    pass\n\nRéférence exercice : PY-075`",
    reponse_v: "a et b doivent être passés positionnellement",
    reponse_f1: "c doit être passé par mot-clé",
    reponse_f2: "tous les paramètres sont positionnels seulement",
    explication: "Les paramètres avant / sont positional-only.",
  },
  {
    id: 76,
    question:
      "`Python — paramètres nommés seulement\n\nQue signifie le * dans cette signature ?\n\ndef f(a, *, b):\n    pass\n\nRéférence exercice : PY-076`",
    reponse_v: "b doit être passé par mot-clé",
    reponse_f1: "a doit être passé par mot-clé",
    reponse_f2: "b est optionnel",
    explication: "Les paramètres après * sont keyword-only.",
  },
  {
    id: 77,
    question:
      '`Python — décorateur\n\nQuelle sortie produit ce code ?\n\ndef deco(f):\n    def wrapper():\n        return "X" + f()\n    return wrapper\n\n@deco\ndef g():\n    return "Y"\n\nprint(g())\n\nRéférence exercice : PY-077`',
    reponse_v: "XY",
    reponse_f1: "Y",
    reponse_f2: "YX",
    explication: "g est remplacée par wrapper, qui préfixe le résultat.",
  },
  {
    id: 78,
    question:
      "`Python — *args et **kwargs\n\nQuelle sortie produit ce code ?\n\ndef f(*args, **kwargs):\n    print(len(args), sorted(kwargs))\n\nf(1, 2, x=3, y=4)\n\nRéférence exercice : PY-078`",
    reponse_v: "2 ['x', 'y']",
    reponse_f1: "4 []",
    reponse_f2: "2 [3, 4]",
    explication:
      "*args collecte les positionnels, **kwargs les noms de paramètres.",
  },
  {
    id: 79,
    question:
      "`Python — annotation\n\nQuelle affirmation est correcte ?\n\ndef f(x: int) -> str:\n    return x\n\nRéférence exercice : PY-079`",
    reponse_v: "Le code s'exécute malgré le type de retour incohérent",
    reponse_f1: "Python lève automatiquement TypeError",
    reponse_f2: "La fonction ne peut pas être définie",
    explication:
      "Les annotations ne sont pas imposées à l'exécution par Python seul.",
  },
  {
    id: 80,
    question:
      "`Python — argument mutable par défaut\n\nQuelle sortie produit ce code ?\n\ndef f(x, acc=[]):\n    acc.append(x)\n    return acc\n\nprint(f(1), f(2))\n\nRéférence exercice : PY-080`",
    reponse_v: "[1] [1, 2]",
    reponse_f1: "[1] [2]",
    reponse_f2: "[1, 2] [1, 2]",
    explication: "L'objet par défaut est créé une seule fois et réutilisé.",
  },
  {
    id: 81,
    question:
      "`Python — portée locale\n\nQue provoque ce code ?\n\nx = 10\n\ndef f():\n    print(x)\n    x = 20\n\nf()\n\nRéférence exercice : PY-081`",
    reponse_v: "UnboundLocalError",
    reponse_f1: "10",
    reponse_f2: "20",
    explication:
      "L'affectation rend x locale à f, donc sa lecture précède son initialisation.",
  },
  {
    id: 82,
    question:
      "`Python — nonlocal\n\nQuelle sortie produit ce code ?\n\ndef outer():\n    x = 1\n    def inner():\n        nonlocal x\n        x += 1\n        return x\n    return inner\n\nf = outer()\nprint(f(), f())\n\nRéférence exercice : PY-082`",
    reponse_v: "2 3",
    reponse_f1: "1 2",
    reponse_f2: "2 2",
    explication: "nonlocal modifie la variable de la portée englobante.",
  },
  {
    id: 83,
    question:
      "`Python — late binding\n\nQuelle sortie produit ce code ?\n\nfuncs = [lambda: i for i in range(3)]\nprint([f() for f in funcs])\n\nRéférence exercice : PY-083`",
    reponse_v: "[2, 2, 2]",
    reponse_f1: "[0, 1, 2]",
    reponse_f2: "[3, 3, 3]",
    explication:
      "Les lambdas capturent la variable i, évaluée au moment de l'appel.",
  },
  {
    id: 84,
    question:
      "`Python — capture par argument par défaut\n\nQuelle sortie produit ce code ?\n\nfuncs = [lambda i=i: i for i in range(3)]\nprint([f() for f in funcs])\n\nRéférence exercice : PY-084`",
    reponse_v: "[0, 1, 2]",
    reponse_f1: "[2, 2, 2]",
    reponse_f2: "[3, 3, 3]",
    explication:
      "L'argument par défaut capture la valeur courante à chaque itération.",
  },
  {
    id: 85,
    question:
      "`Python — paramètres positionnels seulement\n\nQue signifie le / dans cette signature ?\n\ndef f(a, b, /, c):\n    pass\n\nRéférence exercice : PY-085`",
    reponse_v: "a et b doivent être passés positionnellement",
    reponse_f1: "c doit être passé par mot-clé",
    reponse_f2: "tous les paramètres sont positionnels seulement",
    explication: "Les paramètres avant / sont positional-only.",
  },
  {
    id: 86,
    question:
      "`Python — paramètres nommés seulement\n\nQue signifie le * dans cette signature ?\n\ndef f(a, *, b):\n    pass\n\nRéférence exercice : PY-086`",
    reponse_v: "b doit être passé par mot-clé",
    reponse_f1: "a doit être passé par mot-clé",
    reponse_f2: "b est optionnel",
    explication: "Les paramètres après * sont keyword-only.",
  },
  {
    id: 87,
    question:
      '`Python — décorateur\n\nQuelle sortie produit ce code ?\n\ndef deco(f):\n    def wrapper():\n        return "X" + f()\n    return wrapper\n\n@deco\ndef g():\n    return "Y"\n\nprint(g())\n\nRéférence exercice : PY-087`',
    reponse_v: "XY",
    reponse_f1: "Y",
    reponse_f2: "YX",
    explication: "g est remplacée par wrapper, qui préfixe le résultat.",
  },
  {
    id: 88,
    question:
      "`Python — *args et **kwargs\n\nQuelle sortie produit ce code ?\n\ndef f(*args, **kwargs):\n    print(len(args), sorted(kwargs))\n\nf(1, 2, x=3, y=4)\n\nRéférence exercice : PY-088`",
    reponse_v: "2 ['x', 'y']",
    reponse_f1: "4 []",
    reponse_f2: "2 [3, 4]",
    explication:
      "*args collecte les positionnels, **kwargs les noms de paramètres.",
  },
  {
    id: 89,
    question:
      "`Python — annotation\n\nQuelle affirmation est correcte ?\n\ndef f(x: int) -> str:\n    return x\n\nRéférence exercice : PY-089`",
    reponse_v: "Le code s'exécute malgré le type de retour incohérent",
    reponse_f1: "Python lève automatiquement TypeError",
    reponse_f2: "La fonction ne peut pas être définie",
    explication:
      "Les annotations ne sont pas imposées à l'exécution par Python seul.",
  },
  {
    id: 90,
    question:
      "`Python — argument mutable par défaut\n\nQuelle sortie produit ce code ?\n\ndef f(x, acc=[]):\n    acc.append(x)\n    return acc\n\nprint(f(1), f(2))\n\nRéférence exercice : PY-090`",
    reponse_v: "[1] [1, 2]",
    reponse_f1: "[1] [2]",
    reponse_f2: "[1, 2] [1, 2]",
    explication: "L'objet par défaut est créé une seule fois et réutilisé.",
  },
  {
    id: 91,
    question:
      "`Python — portée locale\n\nQue provoque ce code ?\n\nx = 10\n\ndef f():\n    print(x)\n    x = 20\n\nf()\n\nRéférence exercice : PY-091`",
    reponse_v: "UnboundLocalError",
    reponse_f1: "10",
    reponse_f2: "20",
    explication:
      "L'affectation rend x locale à f, donc sa lecture précède son initialisation.",
  },
  {
    id: 92,
    question:
      "`Python — nonlocal\n\nQuelle sortie produit ce code ?\n\ndef outer():\n    x = 1\n    def inner():\n        nonlocal x\n        x += 1\n        return x\n    return inner\n\nf = outer()\nprint(f(), f())\n\nRéférence exercice : PY-092`",
    reponse_v: "2 3",
    reponse_f1: "1 2",
    reponse_f2: "2 2",
    explication: "nonlocal modifie la variable de la portée englobante.",
  },
  {
    id: 93,
    question:
      "`Python — late binding\n\nQuelle sortie produit ce code ?\n\nfuncs = [lambda: i for i in range(3)]\nprint([f() for f in funcs])\n\nRéférence exercice : PY-093`",
    reponse_v: "[2, 2, 2]",
    reponse_f1: "[0, 1, 2]",
    reponse_f2: "[3, 3, 3]",
    explication:
      "Les lambdas capturent la variable i, évaluée au moment de l'appel.",
  },
  {
    id: 94,
    question:
      "`Python — capture par argument par défaut\n\nQuelle sortie produit ce code ?\n\nfuncs = [lambda i=i: i for i in range(3)]\nprint([f() for f in funcs])\n\nRéférence exercice : PY-094`",
    reponse_v: "[0, 1, 2]",
    reponse_f1: "[2, 2, 2]",
    reponse_f2: "[3, 3, 3]",
    explication:
      "L'argument par défaut capture la valeur courante à chaque itération.",
  },
  {
    id: 95,
    question:
      "`Python — paramètres positionnels seulement\n\nQue signifie le / dans cette signature ?\n\ndef f(a, b, /, c):\n    pass\n\nRéférence exercice : PY-095`",
    reponse_v: "a et b doivent être passés positionnellement",
    reponse_f1: "c doit être passé par mot-clé",
    reponse_f2: "tous les paramètres sont positionnels seulement",
    explication: "Les paramètres avant / sont positional-only.",
  },
  {
    id: 96,
    question:
      "`Python — paramètres nommés seulement\n\nQue signifie le * dans cette signature ?\n\ndef f(a, *, b):\n    pass\n\nRéférence exercice : PY-096`",
    reponse_v: "b doit être passé par mot-clé",
    reponse_f1: "a doit être passé par mot-clé",
    reponse_f2: "b est optionnel",
    explication: "Les paramètres après * sont keyword-only.",
  },
  {
    id: 97,
    question:
      '`Python — décorateur\n\nQuelle sortie produit ce code ?\n\ndef deco(f):\n    def wrapper():\n        return "X" + f()\n    return wrapper\n\n@deco\ndef g():\n    return "Y"\n\nprint(g())\n\nRéférence exercice : PY-097`',
    reponse_v: "XY",
    reponse_f1: "Y",
    reponse_f2: "YX",
    explication: "g est remplacée par wrapper, qui préfixe le résultat.",
  },
  {
    id: 98,
    question:
      "`Python — *args et **kwargs\n\nQuelle sortie produit ce code ?\n\ndef f(*args, **kwargs):\n    print(len(args), sorted(kwargs))\n\nf(1, 2, x=3, y=4)\n\nRéférence exercice : PY-098`",
    reponse_v: "2 ['x', 'y']",
    reponse_f1: "4 []",
    reponse_f2: "2 [3, 4]",
    explication:
      "*args collecte les positionnels, **kwargs les noms de paramètres.",
  },
  {
    id: 99,
    question:
      "`Python — annotation\n\nQuelle affirmation est correcte ?\n\ndef f(x: int) -> str:\n    return x\n\nRéférence exercice : PY-099`",
    reponse_v: "Le code s'exécute malgré le type de retour incohérent",
    reponse_f1: "Python lève automatiquement TypeError",
    reponse_f2: "La fonction ne peut pas être définie",
    explication:
      "Les annotations ne sont pas imposées à l'exécution par Python seul.",
  },
  {
    id: 100,
    question:
      "`Python — argument mutable par défaut\n\nQuelle sortie produit ce code ?\n\ndef f(x, acc=[]):\n    acc.append(x)\n    return acc\n\nprint(f(1), f(2))\n\nRéférence exercice : PY-100`",
    reponse_v: "[1] [1, 2]",
    reponse_f1: "[1] [2]",
    reponse_f2: "[1, 2] [1, 2]",
    explication: "L'objet par défaut est créé une seule fois et réutilisé.",
  },
  {
    id: 101,
    question:
      '`Python — résolution de méthode\n\nQuelle sortie produit ce code ?\n\nclass A:\n    def f(self): return "A"\n\nclass B(A):\n    def f(self): return "B"\n\nx: A = B()\nprint(x.f())\n\nRéférence exercice : PY-101`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "TypeError",
    explication:
      "La résolution est dynamique selon la classe réelle de l'objet.",
  },
  {
    id: 102,
    question:
      '`Python — super()\n\nQuelle sortie produit ce code ?\n\nclass A:\n    def __init__(self):\n        print("A")\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        print("B")\n\nB()\n\nRéférence exercice : PY-102`',
    reponse_v: "A puis B",
    reponse_f1: "B puis A",
    reponse_f2: "B uniquement",
    explication: "super().__init__ appelle d'abord le constructeur parent.",
  },
  {
    id: 103,
    question:
      '`Python — MRO\n\nQuelle méthode est appelée ?\n\nclass A:\n    def f(self): return "A"\nclass B(A):\n    pass\nclass C(A):\n    def f(self): return "C"\nclass D(B, C):\n    pass\n\nprint(D().f())\n\nRéférence exercice : PY-103`',
    reponse_v: "C",
    reponse_f1: "A",
    reponse_f2: "Erreur de MRO",
    explication: "La MRO de D recherche B puis C, où f est trouvée.",
  },
  {
    id: 104,
    question:
      "`Python — staticmethod\n\nQuelle affirmation est correcte ?\n\nclass A:\n    @staticmethod\n    def f(x):\n        return x\n\nRéférence exercice : PY-104`",
    reponse_v: "f ne reçoit automatiquement ni self ni cls",
    reponse_f1: "f reçoit automatiquement cls",
    reponse_f2: "f reçoit automatiquement self",
    explication: "staticmethod désactive la liaison automatique.",
  },
  {
    id: 105,
    question:
      "`Python — classmethod\n\nQuelle valeur est passée automatiquement en premier argument ?\n\nclass A:\n    @classmethod\n    def f(cls):\n        return cls\n\nRéférence exercice : PY-105`",
    reponse_v: "la classe utilisée pour l'appel",
    reponse_f1: "l'instance courante",
    reponse_f2: "le module contenant la classe",
    explication: "classmethod reçoit la classe comme premier argument.",
  },
  {
    id: 106,
    question:
      "`Python — property\n\nQuel est le rôle principal de @property ?\n\nRéférence exercice : PY-106`",
    reponse_v: "Exposer une méthode comme un attribut calculé",
    reponse_f1: "Créer un attribut de classe constant",
    reponse_f2: "Rendre automatiquement l'objet immuable",
    explication:
      "@property permet un accès de type attribut tout en exécutant du code.",
  },
  {
    id: 107,
    question:
      "`Python — __slots__\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-107`",
    reponse_v: "__slots__ peut empêcher la création d'attributs non déclarés",
    reponse_f1: "__slots__ rend toujours la classe immutable",
    reponse_f2: "__slots__ interdit l'héritage",
    explication:
      "__slots__ contrôle les attributs d'instance et peut supprimer __dict__.",
  },
  {
    id: 108,
    question:
      "`Python — dataclass frozen\n\nQuelle conséquence a @dataclass(frozen=True) ?\n\nRéférence exercice : PY-108`",
    reponse_v:
      "Les attributs ne peuvent plus être affectés normalement après création",
    reponse_f1: "Les attributs deviennent profondément immuables",
    reponse_f2: "La classe ne peut plus être instanciée",
    explication:
      "frozen bloque les affectations ordinaires mais ne garantit pas une immutabilité profonde.",
  },
  {
    id: 109,
    question:
      "`Python — __eq__ et __hash__\n\nQuelle conséquence fréquente a la redéfinition de __eq__ sans __hash__ ?\n\nRéférence exercice : PY-109`",
    reponse_v: "Les instances deviennent généralement non hashables",
    reponse_f1: "Les instances utilisent toujours object.__hash__",
    reponse_f2: "Les instances deviennent automatiquement ordonnables",
    explication:
      "Python désactive généralement __hash__ pour préserver le contrat d'égalité.",
  },
  {
    id: 110,
    question:
      "`Python — attribut de classe\n\nQuelle sortie produit ce code ?\n\nclass A:\n    x = 1\n\na = A()\na.x = 2\nprint(A.x, a.x)\n\nRéférence exercice : PY-110`",
    reponse_v: "1 2",
    reponse_f1: "2 2",
    reponse_f2: "1 1",
    explication:
      "L'affectation sur l'instance crée un attribut d'instance distinct.",
  },
  {
    id: 111,
    question:
      '`Python — résolution de méthode\n\nQuelle sortie produit ce code ?\n\nclass A:\n    def f(self): return "A"\n\nclass B(A):\n    def f(self): return "B"\n\nx: A = B()\nprint(x.f())\n\nRéférence exercice : PY-111`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "TypeError",
    explication:
      "La résolution est dynamique selon la classe réelle de l'objet.",
  },
  {
    id: 112,
    question:
      '`Python — super()\n\nQuelle sortie produit ce code ?\n\nclass A:\n    def __init__(self):\n        print("A")\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        print("B")\n\nB()\n\nRéférence exercice : PY-112`',
    reponse_v: "A puis B",
    reponse_f1: "B puis A",
    reponse_f2: "B uniquement",
    explication: "super().__init__ appelle d'abord le constructeur parent.",
  },
  {
    id: 113,
    question:
      '`Python — MRO\n\nQuelle méthode est appelée ?\n\nclass A:\n    def f(self): return "A"\nclass B(A):\n    pass\nclass C(A):\n    def f(self): return "C"\nclass D(B, C):\n    pass\n\nprint(D().f())\n\nRéférence exercice : PY-113`',
    reponse_v: "C",
    reponse_f1: "A",
    reponse_f2: "Erreur de MRO",
    explication: "La MRO de D recherche B puis C, où f est trouvée.",
  },
  {
    id: 114,
    question:
      "`Python — staticmethod\n\nQuelle affirmation est correcte ?\n\nclass A:\n    @staticmethod\n    def f(x):\n        return x\n\nRéférence exercice : PY-114`",
    reponse_v: "f ne reçoit automatiquement ni self ni cls",
    reponse_f1: "f reçoit automatiquement cls",
    reponse_f2: "f reçoit automatiquement self",
    explication: "staticmethod désactive la liaison automatique.",
  },
  {
    id: 115,
    question:
      "`Python — classmethod\n\nQuelle valeur est passée automatiquement en premier argument ?\n\nclass A:\n    @classmethod\n    def f(cls):\n        return cls\n\nRéférence exercice : PY-115`",
    reponse_v: "la classe utilisée pour l'appel",
    reponse_f1: "l'instance courante",
    reponse_f2: "le module contenant la classe",
    explication: "classmethod reçoit la classe comme premier argument.",
  },
  {
    id: 116,
    question:
      "`Python — property\n\nQuel est le rôle principal de @property ?\n\nRéférence exercice : PY-116`",
    reponse_v: "Exposer une méthode comme un attribut calculé",
    reponse_f1: "Créer un attribut de classe constant",
    reponse_f2: "Rendre automatiquement l'objet immuable",
    explication:
      "@property permet un accès de type attribut tout en exécutant du code.",
  },
  {
    id: 117,
    question:
      "`Python — __slots__\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-117`",
    reponse_v: "__slots__ peut empêcher la création d'attributs non déclarés",
    reponse_f1: "__slots__ rend toujours la classe immutable",
    reponse_f2: "__slots__ interdit l'héritage",
    explication:
      "__slots__ contrôle les attributs d'instance et peut supprimer __dict__.",
  },
  {
    id: 118,
    question:
      "`Python — dataclass frozen\n\nQuelle conséquence a @dataclass(frozen=True) ?\n\nRéférence exercice : PY-118`",
    reponse_v:
      "Les attributs ne peuvent plus être affectés normalement après création",
    reponse_f1: "Les attributs deviennent profondément immuables",
    reponse_f2: "La classe ne peut plus être instanciée",
    explication:
      "frozen bloque les affectations ordinaires mais ne garantit pas une immutabilité profonde.",
  },
  {
    id: 119,
    question:
      "`Python — __eq__ et __hash__\n\nQuelle conséquence fréquente a la redéfinition de __eq__ sans __hash__ ?\n\nRéférence exercice : PY-119`",
    reponse_v: "Les instances deviennent généralement non hashables",
    reponse_f1: "Les instances utilisent toujours object.__hash__",
    reponse_f2: "Les instances deviennent automatiquement ordonnables",
    explication:
      "Python désactive généralement __hash__ pour préserver le contrat d'égalité.",
  },
  {
    id: 120,
    question:
      "`Python — attribut de classe\n\nQuelle sortie produit ce code ?\n\nclass A:\n    x = 1\n\na = A()\na.x = 2\nprint(A.x, a.x)\n\nRéférence exercice : PY-120`",
    reponse_v: "1 2",
    reponse_f1: "2 2",
    reponse_f2: "1 1",
    explication:
      "L'affectation sur l'instance crée un attribut d'instance distinct.",
  },
  {
    id: 121,
    question:
      '`Python — résolution de méthode\n\nQuelle sortie produit ce code ?\n\nclass A:\n    def f(self): return "A"\n\nclass B(A):\n    def f(self): return "B"\n\nx: A = B()\nprint(x.f())\n\nRéférence exercice : PY-121`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "TypeError",
    explication:
      "La résolution est dynamique selon la classe réelle de l'objet.",
  },
  {
    id: 122,
    question:
      '`Python — super()\n\nQuelle sortie produit ce code ?\n\nclass A:\n    def __init__(self):\n        print("A")\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        print("B")\n\nB()\n\nRéférence exercice : PY-122`',
    reponse_v: "A puis B",
    reponse_f1: "B puis A",
    reponse_f2: "B uniquement",
    explication: "super().__init__ appelle d'abord le constructeur parent.",
  },
  {
    id: 123,
    question:
      '`Python — MRO\n\nQuelle méthode est appelée ?\n\nclass A:\n    def f(self): return "A"\nclass B(A):\n    pass\nclass C(A):\n    def f(self): return "C"\nclass D(B, C):\n    pass\n\nprint(D().f())\n\nRéférence exercice : PY-123`',
    reponse_v: "C",
    reponse_f1: "A",
    reponse_f2: "Erreur de MRO",
    explication: "La MRO de D recherche B puis C, où f est trouvée.",
  },
  {
    id: 124,
    question:
      "`Python — staticmethod\n\nQuelle affirmation est correcte ?\n\nclass A:\n    @staticmethod\n    def f(x):\n        return x\n\nRéférence exercice : PY-124`",
    reponse_v: "f ne reçoit automatiquement ni self ni cls",
    reponse_f1: "f reçoit automatiquement cls",
    reponse_f2: "f reçoit automatiquement self",
    explication: "staticmethod désactive la liaison automatique.",
  },
  {
    id: 125,
    question:
      "`Python — classmethod\n\nQuelle valeur est passée automatiquement en premier argument ?\n\nclass A:\n    @classmethod\n    def f(cls):\n        return cls\n\nRéférence exercice : PY-125`",
    reponse_v: "la classe utilisée pour l'appel",
    reponse_f1: "l'instance courante",
    reponse_f2: "le module contenant la classe",
    explication: "classmethod reçoit la classe comme premier argument.",
  },
  {
    id: 126,
    question:
      "`Python — property\n\nQuel est le rôle principal de @property ?\n\nRéférence exercice : PY-126`",
    reponse_v: "Exposer une méthode comme un attribut calculé",
    reponse_f1: "Créer un attribut de classe constant",
    reponse_f2: "Rendre automatiquement l'objet immuable",
    explication:
      "@property permet un accès de type attribut tout en exécutant du code.",
  },
  {
    id: 127,
    question:
      "`Python — __slots__\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-127`",
    reponse_v: "__slots__ peut empêcher la création d'attributs non déclarés",
    reponse_f1: "__slots__ rend toujours la classe immutable",
    reponse_f2: "__slots__ interdit l'héritage",
    explication:
      "__slots__ contrôle les attributs d'instance et peut supprimer __dict__.",
  },
  {
    id: 128,
    question:
      "`Python — dataclass frozen\n\nQuelle conséquence a @dataclass(frozen=True) ?\n\nRéférence exercice : PY-128`",
    reponse_v:
      "Les attributs ne peuvent plus être affectés normalement après création",
    reponse_f1: "Les attributs deviennent profondément immuables",
    reponse_f2: "La classe ne peut plus être instanciée",
    explication:
      "frozen bloque les affectations ordinaires mais ne garantit pas une immutabilité profonde.",
  },
  {
    id: 129,
    question:
      "`Python — __eq__ et __hash__\n\nQuelle conséquence fréquente a la redéfinition de __eq__ sans __hash__ ?\n\nRéférence exercice : PY-129`",
    reponse_v: "Les instances deviennent généralement non hashables",
    reponse_f1: "Les instances utilisent toujours object.__hash__",
    reponse_f2: "Les instances deviennent automatiquement ordonnables",
    explication:
      "Python désactive généralement __hash__ pour préserver le contrat d'égalité.",
  },
  {
    id: 130,
    question:
      "`Python — attribut de classe\n\nQuelle sortie produit ce code ?\n\nclass A:\n    x = 1\n\na = A()\na.x = 2\nprint(A.x, a.x)\n\nRéférence exercice : PY-130`",
    reponse_v: "1 2",
    reponse_f1: "2 2",
    reponse_f2: "1 1",
    explication:
      "L'affectation sur l'instance crée un attribut d'instance distinct.",
  },
  {
    id: 131,
    question:
      '`Python — résolution de méthode\n\nQuelle sortie produit ce code ?\n\nclass A:\n    def f(self): return "A"\n\nclass B(A):\n    def f(self): return "B"\n\nx: A = B()\nprint(x.f())\n\nRéférence exercice : PY-131`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "TypeError",
    explication:
      "La résolution est dynamique selon la classe réelle de l'objet.",
  },
  {
    id: 132,
    question:
      '`Python — super()\n\nQuelle sortie produit ce code ?\n\nclass A:\n    def __init__(self):\n        print("A")\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        print("B")\n\nB()\n\nRéférence exercice : PY-132`',
    reponse_v: "A puis B",
    reponse_f1: "B puis A",
    reponse_f2: "B uniquement",
    explication: "super().__init__ appelle d'abord le constructeur parent.",
  },
  {
    id: 133,
    question:
      '`Python — MRO\n\nQuelle méthode est appelée ?\n\nclass A:\n    def f(self): return "A"\nclass B(A):\n    pass\nclass C(A):\n    def f(self): return "C"\nclass D(B, C):\n    pass\n\nprint(D().f())\n\nRéférence exercice : PY-133`',
    reponse_v: "C",
    reponse_f1: "A",
    reponse_f2: "Erreur de MRO",
    explication: "La MRO de D recherche B puis C, où f est trouvée.",
  },
  {
    id: 134,
    question:
      "`Python — staticmethod\n\nQuelle affirmation est correcte ?\n\nclass A:\n    @staticmethod\n    def f(x):\n        return x\n\nRéférence exercice : PY-134`",
    reponse_v: "f ne reçoit automatiquement ni self ni cls",
    reponse_f1: "f reçoit automatiquement cls",
    reponse_f2: "f reçoit automatiquement self",
    explication: "staticmethod désactive la liaison automatique.",
  },
  {
    id: 135,
    question:
      "`Python — classmethod\n\nQuelle valeur est passée automatiquement en premier argument ?\n\nclass A:\n    @classmethod\n    def f(cls):\n        return cls\n\nRéférence exercice : PY-135`",
    reponse_v: "la classe utilisée pour l'appel",
    reponse_f1: "l'instance courante",
    reponse_f2: "le module contenant la classe",
    explication: "classmethod reçoit la classe comme premier argument.",
  },
  {
    id: 136,
    question:
      "`Python — property\n\nQuel est le rôle principal de @property ?\n\nRéférence exercice : PY-136`",
    reponse_v: "Exposer une méthode comme un attribut calculé",
    reponse_f1: "Créer un attribut de classe constant",
    reponse_f2: "Rendre automatiquement l'objet immuable",
    explication:
      "@property permet un accès de type attribut tout en exécutant du code.",
  },
  {
    id: 137,
    question:
      "`Python — __slots__\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-137`",
    reponse_v: "__slots__ peut empêcher la création d'attributs non déclarés",
    reponse_f1: "__slots__ rend toujours la classe immutable",
    reponse_f2: "__slots__ interdit l'héritage",
    explication:
      "__slots__ contrôle les attributs d'instance et peut supprimer __dict__.",
  },
  {
    id: 138,
    question:
      "`Python — dataclass frozen\n\nQuelle conséquence a @dataclass(frozen=True) ?\n\nRéférence exercice : PY-138`",
    reponse_v:
      "Les attributs ne peuvent plus être affectés normalement après création",
    reponse_f1: "Les attributs deviennent profondément immuables",
    reponse_f2: "La classe ne peut plus être instanciée",
    explication:
      "frozen bloque les affectations ordinaires mais ne garantit pas une immutabilité profonde.",
  },
  {
    id: 139,
    question:
      "`Python — __eq__ et __hash__\n\nQuelle conséquence fréquente a la redéfinition de __eq__ sans __hash__ ?\n\nRéférence exercice : PY-139`",
    reponse_v: "Les instances deviennent généralement non hashables",
    reponse_f1: "Les instances utilisent toujours object.__hash__",
    reponse_f2: "Les instances deviennent automatiquement ordonnables",
    explication:
      "Python désactive généralement __hash__ pour préserver le contrat d'égalité.",
  },
  {
    id: 140,
    question:
      "`Python — attribut de classe\n\nQuelle sortie produit ce code ?\n\nclass A:\n    x = 1\n\na = A()\na.x = 2\nprint(A.x, a.x)\n\nRéférence exercice : PY-140`",
    reponse_v: "1 2",
    reponse_f1: "2 2",
    reponse_f2: "1 1",
    explication:
      "L'affectation sur l'instance crée un attribut d'instance distinct.",
  },
  {
    id: 141,
    question:
      '`Python — résolution de méthode\n\nQuelle sortie produit ce code ?\n\nclass A:\n    def f(self): return "A"\n\nclass B(A):\n    def f(self): return "B"\n\nx: A = B()\nprint(x.f())\n\nRéférence exercice : PY-141`',
    reponse_v: "B",
    reponse_f1: "A",
    reponse_f2: "TypeError",
    explication:
      "La résolution est dynamique selon la classe réelle de l'objet.",
  },
  {
    id: 142,
    question:
      '`Python — super()\n\nQuelle sortie produit ce code ?\n\nclass A:\n    def __init__(self):\n        print("A")\n\nclass B(A):\n    def __init__(self):\n        super().__init__()\n        print("B")\n\nB()\n\nRéférence exercice : PY-142`',
    reponse_v: "A puis B",
    reponse_f1: "B puis A",
    reponse_f2: "B uniquement",
    explication: "super().__init__ appelle d'abord le constructeur parent.",
  },
  {
    id: 143,
    question:
      '`Python — MRO\n\nQuelle méthode est appelée ?\n\nclass A:\n    def f(self): return "A"\nclass B(A):\n    pass\nclass C(A):\n    def f(self): return "C"\nclass D(B, C):\n    pass\n\nprint(D().f())\n\nRéférence exercice : PY-143`',
    reponse_v: "C",
    reponse_f1: "A",
    reponse_f2: "Erreur de MRO",
    explication: "La MRO de D recherche B puis C, où f est trouvée.",
  },
  {
    id: 144,
    question:
      "`Python — staticmethod\n\nQuelle affirmation est correcte ?\n\nclass A:\n    @staticmethod\n    def f(x):\n        return x\n\nRéférence exercice : PY-144`",
    reponse_v: "f ne reçoit automatiquement ni self ni cls",
    reponse_f1: "f reçoit automatiquement cls",
    reponse_f2: "f reçoit automatiquement self",
    explication: "staticmethod désactive la liaison automatique.",
  },
  {
    id: 145,
    question:
      "`Python — classmethod\n\nQuelle valeur est passée automatiquement en premier argument ?\n\nclass A:\n    @classmethod\n    def f(cls):\n        return cls\n\nRéférence exercice : PY-145`",
    reponse_v: "la classe utilisée pour l'appel",
    reponse_f1: "l'instance courante",
    reponse_f2: "le module contenant la classe",
    explication: "classmethod reçoit la classe comme premier argument.",
  },
  {
    id: 146,
    question:
      "`Python — property\n\nQuel est le rôle principal de @property ?\n\nRéférence exercice : PY-146`",
    reponse_v: "Exposer une méthode comme un attribut calculé",
    reponse_f1: "Créer un attribut de classe constant",
    reponse_f2: "Rendre automatiquement l'objet immuable",
    explication:
      "@property permet un accès de type attribut tout en exécutant du code.",
  },
  {
    id: 147,
    question:
      "`Python — __slots__\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-147`",
    reponse_v: "__slots__ peut empêcher la création d'attributs non déclarés",
    reponse_f1: "__slots__ rend toujours la classe immutable",
    reponse_f2: "__slots__ interdit l'héritage",
    explication:
      "__slots__ contrôle les attributs d'instance et peut supprimer __dict__.",
  },
  {
    id: 148,
    question:
      "`Python — dataclass frozen\n\nQuelle conséquence a @dataclass(frozen=True) ?\n\nRéférence exercice : PY-148`",
    reponse_v:
      "Les attributs ne peuvent plus être affectés normalement après création",
    reponse_f1: "Les attributs deviennent profondément immuables",
    reponse_f2: "La classe ne peut plus être instanciée",
    explication:
      "frozen bloque les affectations ordinaires mais ne garantit pas une immutabilité profonde.",
  },
  {
    id: 149,
    question:
      "`Python — __eq__ et __hash__\n\nQuelle conséquence fréquente a la redéfinition de __eq__ sans __hash__ ?\n\nRéférence exercice : PY-149`",
    reponse_v: "Les instances deviennent généralement non hashables",
    reponse_f1: "Les instances utilisent toujours object.__hash__",
    reponse_f2: "Les instances deviennent automatiquement ordonnables",
    explication:
      "Python désactive généralement __hash__ pour préserver le contrat d'égalité.",
  },
  {
    id: 150,
    question:
      "`Python — attribut de classe\n\nQuelle sortie produit ce code ?\n\nclass A:\n    x = 1\n\na = A()\na.x = 2\nprint(A.x, a.x)\n\nRéférence exercice : PY-150`",
    reponse_v: "1 2",
    reponse_f1: "2 2",
    reponse_f2: "1 1",
    explication:
      "L'affectation sur l'instance crée un attribut d'instance distinct.",
  },
  {
    id: 151,
    question:
      "`Python — générateur\n\nQuelle sortie produit ce code ?\n\ndef g():\n    yield 1\n    return 2\n\nit = g()\nprint(next(it))\ntry:\n    next(it)\nexcept StopIteration as e:\n    print(e.value)\n\nRéférence exercice : PY-151`",
    reponse_v: "1 puis 2",
    reponse_f1: "1 puis None",
    reponse_f2: "1 puis StopIteration sans valeur",
    explication:
      "La valeur de return devient l'attribut value de StopIteration.",
  },
  {
    id: 152,
    question:
      "`Python — yield from\n\nQuel est le rôle de yield from iterable ?\n\nRéférence exercice : PY-152`",
    reponse_v: "Déléguer l'itération à un sous-itérable",
    reponse_f1: "Créer une copie complète de l'itérable",
    reponse_f2: "Transformer automatiquement l'itérable en liste",
    explication:
      "yield from relaie les valeurs et certains échanges avec le sous-générateur.",
  },
  {
    id: 153,
    question:
      "`Python — compréhension et portée\n\nQuelle sortie produit ce code en Python 3 ?\n\nx = 10\nlst = [x for x in range(3)]\nprint(x)\n\nRéférence exercice : PY-153`",
    reponse_v: "10",
    reponse_f1: "2",
    reponse_f2: "NameError",
    explication: "La variable de compréhension possède sa propre portée.",
  },
  {
    id: 154,
    question:
      "`Python — générateur consommé\n\nQuelle sortie produit ce code ?\n\ng = (x * 2 for x in range(3))\nprint(list(g))\nprint(list(g))\n\nRéférence exercice : PY-154`",
    reponse_v: "[0, 2, 4] puis []",
    reponse_f1: "[0, 2, 4] puis [0, 2, 4]",
    reponse_f2: "[] puis []",
    explication: "Un générateur est consommé après une première itération.",
  },
  {
    id: 155,
    question:
      '`Python — enumerate\n\nQuelle sortie produit ce code ?\n\nprint(list(enumerate(["a", "b"], start=1)))\n\nRéférence exercice : PY-155`',
    reponse_v: "[(1, 'a'), (2, 'b')]",
    reponse_f1: "[(0, 'a'), (1, 'b')]",
    reponse_f2: "[('a', 1), ('b', 2)]",
    explication: "start=1 fixe le premier indice à 1.",
  },
  {
    id: 156,
    question:
      '`Python — zip\n\nQuelle sortie produit ce code ?\n\nprint(list(zip([1, 2, 3], ["a", "b"])))\n\nRéférence exercice : PY-156`',
    reponse_v: "[(1, 'a'), (2, 'b')]",
    reponse_f1: "[(1, 'a'), (2, 'b'), (3, None)]",
    reponse_f2: "[(1, 2, 3), ('a', 'b')]",
    explication: "zip s'arrête sur l'itérable le plus court.",
  },
  {
    id: 157,
    question:
      "`Python — context manager\n\nQuel protocole implémente un gestionnaire de contexte classique ?\n\nRéférence exercice : PY-157`",
    reponse_v: "__enter__() et __exit__()",
    reponse_f1: "__iter__() et __next__()",
    reponse_f2: "__aenter__() uniquement",
    explication: "with utilise __enter__ puis __exit__.",
  },
  {
    id: 158,
    question:
      "`Python — suppress\n\nQuel est l'effet de contextlib.suppress(ValueError) ?\n\nRéférence exercice : PY-158`",
    reponse_v: "Ignorer les ValueError levées dans le bloc",
    reponse_f1: "Convertir ValueError en warning",
    reponse_f2: "Relancer ValueError après le bloc",
    explication: "suppress absorbe les exceptions indiquées.",
  },
  {
    id: 159,
    question:
      "`Python — map paresseux\n\nQuelle affirmation est correcte en Python 3 ?\n\nRéférence exercice : PY-159`",
    reponse_v: "map retourne un itérateur paresseux",
    reponse_f1: "map retourne toujours une liste",
    reponse_f2: "map évalue immédiatement toutes les valeurs",
    explication: "map produit un objet itérable paresseux.",
  },
  {
    id: 160,
    question:
      "`Python — itérateur\n\nQuel protocole doit respecter un itérateur ?\n\nRéférence exercice : PY-160`",
    reponse_v: "__iter__() et __next__()",
    reponse_f1: "__len__() et __getitem__()",
    reponse_f2: "__enter__() et __exit__()",
    explication:
      "Un itérateur retourne lui-même via __iter__ et avance via __next__.",
  },
  {
    id: 161,
    question:
      "`Python — générateur\n\nQuelle sortie produit ce code ?\n\ndef g():\n    yield 1\n    return 2\n\nit = g()\nprint(next(it))\ntry:\n    next(it)\nexcept StopIteration as e:\n    print(e.value)\n\nRéférence exercice : PY-161`",
    reponse_v: "1 puis 2",
    reponse_f1: "1 puis None",
    reponse_f2: "1 puis StopIteration sans valeur",
    explication:
      "La valeur de return devient l'attribut value de StopIteration.",
  },
  {
    id: 162,
    question:
      "`Python — yield from\n\nQuel est le rôle de yield from iterable ?\n\nRéférence exercice : PY-162`",
    reponse_v: "Déléguer l'itération à un sous-itérable",
    reponse_f1: "Créer une copie complète de l'itérable",
    reponse_f2: "Transformer automatiquement l'itérable en liste",
    explication:
      "yield from relaie les valeurs et certains échanges avec le sous-générateur.",
  },
  {
    id: 163,
    question:
      "`Python — compréhension et portée\n\nQuelle sortie produit ce code en Python 3 ?\n\nx = 10\nlst = [x for x in range(3)]\nprint(x)\n\nRéférence exercice : PY-163`",
    reponse_v: "10",
    reponse_f1: "2",
    reponse_f2: "NameError",
    explication: "La variable de compréhension possède sa propre portée.",
  },
  {
    id: 164,
    question:
      "`Python — générateur consommé\n\nQuelle sortie produit ce code ?\n\ng = (x * 2 for x in range(3))\nprint(list(g))\nprint(list(g))\n\nRéférence exercice : PY-164`",
    reponse_v: "[0, 2, 4] puis []",
    reponse_f1: "[0, 2, 4] puis [0, 2, 4]",
    reponse_f2: "[] puis []",
    explication: "Un générateur est consommé après une première itération.",
  },
  {
    id: 165,
    question:
      '`Python — enumerate\n\nQuelle sortie produit ce code ?\n\nprint(list(enumerate(["a", "b"], start=1)))\n\nRéférence exercice : PY-165`',
    reponse_v: "[(1, 'a'), (2, 'b')]",
    reponse_f1: "[(0, 'a'), (1, 'b')]",
    reponse_f2: "[('a', 1), ('b', 2)]",
    explication: "start=1 fixe le premier indice à 1.",
  },
  {
    id: 166,
    question:
      '`Python — zip\n\nQuelle sortie produit ce code ?\n\nprint(list(zip([1, 2, 3], ["a", "b"])))\n\nRéférence exercice : PY-166`',
    reponse_v: "[(1, 'a'), (2, 'b')]",
    reponse_f1: "[(1, 'a'), (2, 'b'), (3, None)]",
    reponse_f2: "[(1, 2, 3), ('a', 'b')]",
    explication: "zip s'arrête sur l'itérable le plus court.",
  },
  {
    id: 167,
    question:
      "`Python — context manager\n\nQuel protocole implémente un gestionnaire de contexte classique ?\n\nRéférence exercice : PY-167`",
    reponse_v: "__enter__() et __exit__()",
    reponse_f1: "__iter__() et __next__()",
    reponse_f2: "__aenter__() uniquement",
    explication: "with utilise __enter__ puis __exit__.",
  },
  {
    id: 168,
    question:
      "`Python — suppress\n\nQuel est l'effet de contextlib.suppress(ValueError) ?\n\nRéférence exercice : PY-168`",
    reponse_v: "Ignorer les ValueError levées dans le bloc",
    reponse_f1: "Convertir ValueError en warning",
    reponse_f2: "Relancer ValueError après le bloc",
    explication: "suppress absorbe les exceptions indiquées.",
  },
  {
    id: 169,
    question:
      "`Python — map paresseux\n\nQuelle affirmation est correcte en Python 3 ?\n\nRéférence exercice : PY-169`",
    reponse_v: "map retourne un itérateur paresseux",
    reponse_f1: "map retourne toujours une liste",
    reponse_f2: "map évalue immédiatement toutes les valeurs",
    explication: "map produit un objet itérable paresseux.",
  },
  {
    id: 170,
    question:
      "`Python — itérateur\n\nQuel protocole doit respecter un itérateur ?\n\nRéférence exercice : PY-170`",
    reponse_v: "__iter__() et __next__()",
    reponse_f1: "__len__() et __getitem__()",
    reponse_f2: "__enter__() et __exit__()",
    explication:
      "Un itérateur retourne lui-même via __iter__ et avance via __next__.",
  },
  {
    id: 171,
    question:
      "`Python — générateur\n\nQuelle sortie produit ce code ?\n\ndef g():\n    yield 1\n    return 2\n\nit = g()\nprint(next(it))\ntry:\n    next(it)\nexcept StopIteration as e:\n    print(e.value)\n\nRéférence exercice : PY-171`",
    reponse_v: "1 puis 2",
    reponse_f1: "1 puis None",
    reponse_f2: "1 puis StopIteration sans valeur",
    explication:
      "La valeur de return devient l'attribut value de StopIteration.",
  },
  {
    id: 172,
    question:
      "`Python — yield from\n\nQuel est le rôle de yield from iterable ?\n\nRéférence exercice : PY-172`",
    reponse_v: "Déléguer l'itération à un sous-itérable",
    reponse_f1: "Créer une copie complète de l'itérable",
    reponse_f2: "Transformer automatiquement l'itérable en liste",
    explication:
      "yield from relaie les valeurs et certains échanges avec le sous-générateur.",
  },
  {
    id: 173,
    question:
      "`Python — compréhension et portée\n\nQuelle sortie produit ce code en Python 3 ?\n\nx = 10\nlst = [x for x in range(3)]\nprint(x)\n\nRéférence exercice : PY-173`",
    reponse_v: "10",
    reponse_f1: "2",
    reponse_f2: "NameError",
    explication: "La variable de compréhension possède sa propre portée.",
  },
  {
    id: 174,
    question:
      "`Python — générateur consommé\n\nQuelle sortie produit ce code ?\n\ng = (x * 2 for x in range(3))\nprint(list(g))\nprint(list(g))\n\nRéférence exercice : PY-174`",
    reponse_v: "[0, 2, 4] puis []",
    reponse_f1: "[0, 2, 4] puis [0, 2, 4]",
    reponse_f2: "[] puis []",
    explication: "Un générateur est consommé après une première itération.",
  },
  {
    id: 175,
    question:
      '`Python — enumerate\n\nQuelle sortie produit ce code ?\n\nprint(list(enumerate(["a", "b"], start=1)))\n\nRéférence exercice : PY-175`',
    reponse_v: "[(1, 'a'), (2, 'b')]",
    reponse_f1: "[(0, 'a'), (1, 'b')]",
    reponse_f2: "[('a', 1), ('b', 2)]",
    explication: "start=1 fixe le premier indice à 1.",
  },
  {
    id: 176,
    question:
      '`Python — zip\n\nQuelle sortie produit ce code ?\n\nprint(list(zip([1, 2, 3], ["a", "b"])))\n\nRéférence exercice : PY-176`',
    reponse_v: "[(1, 'a'), (2, 'b')]",
    reponse_f1: "[(1, 'a'), (2, 'b'), (3, None)]",
    reponse_f2: "[(1, 2, 3), ('a', 'b')]",
    explication: "zip s'arrête sur l'itérable le plus court.",
  },
  {
    id: 177,
    question:
      "`Python — context manager\n\nQuel protocole implémente un gestionnaire de contexte classique ?\n\nRéférence exercice : PY-177`",
    reponse_v: "__enter__() et __exit__()",
    reponse_f1: "__iter__() et __next__()",
    reponse_f2: "__aenter__() uniquement",
    explication: "with utilise __enter__ puis __exit__.",
  },
  {
    id: 178,
    question:
      "`Python — suppress\n\nQuel est l'effet de contextlib.suppress(ValueError) ?\n\nRéférence exercice : PY-178`",
    reponse_v: "Ignorer les ValueError levées dans le bloc",
    reponse_f1: "Convertir ValueError en warning",
    reponse_f2: "Relancer ValueError après le bloc",
    explication: "suppress absorbe les exceptions indiquées.",
  },
  {
    id: 179,
    question:
      "`Python — map paresseux\n\nQuelle affirmation est correcte en Python 3 ?\n\nRéférence exercice : PY-179`",
    reponse_v: "map retourne un itérateur paresseux",
    reponse_f1: "map retourne toujours une liste",
    reponse_f2: "map évalue immédiatement toutes les valeurs",
    explication: "map produit un objet itérable paresseux.",
  },
  {
    id: 180,
    question:
      "`Python — itérateur\n\nQuel protocole doit respecter un itérateur ?\n\nRéférence exercice : PY-180`",
    reponse_v: "__iter__() et __next__()",
    reponse_f1: "__len__() et __getitem__()",
    reponse_f2: "__enter__() et __exit__()",
    explication:
      "Un itérateur retourne lui-même via __iter__ et avance via __next__.",
  },
  {
    id: 181,
    question:
      "`Python — générateur\n\nQuelle sortie produit ce code ?\n\ndef g():\n    yield 1\n    return 2\n\nit = g()\nprint(next(it))\ntry:\n    next(it)\nexcept StopIteration as e:\n    print(e.value)\n\nRéférence exercice : PY-181`",
    reponse_v: "1 puis 2",
    reponse_f1: "1 puis None",
    reponse_f2: "1 puis StopIteration sans valeur",
    explication:
      "La valeur de return devient l'attribut value de StopIteration.",
  },
  {
    id: 182,
    question:
      "`Python — yield from\n\nQuel est le rôle de yield from iterable ?\n\nRéférence exercice : PY-182`",
    reponse_v: "Déléguer l'itération à un sous-itérable",
    reponse_f1: "Créer une copie complète de l'itérable",
    reponse_f2: "Transformer automatiquement l'itérable en liste",
    explication:
      "yield from relaie les valeurs et certains échanges avec le sous-générateur.",
  },
  {
    id: 183,
    question:
      "`Python — compréhension et portée\n\nQuelle sortie produit ce code en Python 3 ?\n\nx = 10\nlst = [x for x in range(3)]\nprint(x)\n\nRéférence exercice : PY-183`",
    reponse_v: "10",
    reponse_f1: "2",
    reponse_f2: "NameError",
    explication: "La variable de compréhension possède sa propre portée.",
  },
  {
    id: 184,
    question:
      "`Python — générateur consommé\n\nQuelle sortie produit ce code ?\n\ng = (x * 2 for x in range(3))\nprint(list(g))\nprint(list(g))\n\nRéférence exercice : PY-184`",
    reponse_v: "[0, 2, 4] puis []",
    reponse_f1: "[0, 2, 4] puis [0, 2, 4]",
    reponse_f2: "[] puis []",
    explication: "Un générateur est consommé après une première itération.",
  },
  {
    id: 185,
    question:
      '`Python — enumerate\n\nQuelle sortie produit ce code ?\n\nprint(list(enumerate(["a", "b"], start=1)))\n\nRéférence exercice : PY-185`',
    reponse_v: "[(1, 'a'), (2, 'b')]",
    reponse_f1: "[(0, 'a'), (1, 'b')]",
    reponse_f2: "[('a', 1), ('b', 2)]",
    explication: "start=1 fixe le premier indice à 1.",
  },
  {
    id: 186,
    question:
      '`Python — zip\n\nQuelle sortie produit ce code ?\n\nprint(list(zip([1, 2, 3], ["a", "b"])))\n\nRéférence exercice : PY-186`',
    reponse_v: "[(1, 'a'), (2, 'b')]",
    reponse_f1: "[(1, 'a'), (2, 'b'), (3, None)]",
    reponse_f2: "[(1, 2, 3), ('a', 'b')]",
    explication: "zip s'arrête sur l'itérable le plus court.",
  },
  {
    id: 187,
    question:
      "`Python — context manager\n\nQuel protocole implémente un gestionnaire de contexte classique ?\n\nRéférence exercice : PY-187`",
    reponse_v: "__enter__() et __exit__()",
    reponse_f1: "__iter__() et __next__()",
    reponse_f2: "__aenter__() uniquement",
    explication: "with utilise __enter__ puis __exit__.",
  },
  {
    id: 188,
    question:
      "`Python — suppress\n\nQuel est l'effet de contextlib.suppress(ValueError) ?\n\nRéférence exercice : PY-188`",
    reponse_v: "Ignorer les ValueError levées dans le bloc",
    reponse_f1: "Convertir ValueError en warning",
    reponse_f2: "Relancer ValueError après le bloc",
    explication: "suppress absorbe les exceptions indiquées.",
  },
  {
    id: 189,
    question:
      "`Python — map paresseux\n\nQuelle affirmation est correcte en Python 3 ?\n\nRéférence exercice : PY-189`",
    reponse_v: "map retourne un itérateur paresseux",
    reponse_f1: "map retourne toujours une liste",
    reponse_f2: "map évalue immédiatement toutes les valeurs",
    explication: "map produit un objet itérable paresseux.",
  },
  {
    id: 190,
    question:
      "`Python — itérateur\n\nQuel protocole doit respecter un itérateur ?\n\nRéférence exercice : PY-190`",
    reponse_v: "__iter__() et __next__()",
    reponse_f1: "__len__() et __getitem__()",
    reponse_f2: "__enter__() et __exit__()",
    explication:
      "Un itérateur retourne lui-même via __iter__ et avance via __next__.",
  },
  {
    id: 191,
    question:
      "`Python — générateur\n\nQuelle sortie produit ce code ?\n\ndef g():\n    yield 1\n    return 2\n\nit = g()\nprint(next(it))\ntry:\n    next(it)\nexcept StopIteration as e:\n    print(e.value)\n\nRéférence exercice : PY-191`",
    reponse_v: "1 puis 2",
    reponse_f1: "1 puis None",
    reponse_f2: "1 puis StopIteration sans valeur",
    explication:
      "La valeur de return devient l'attribut value de StopIteration.",
  },
  {
    id: 192,
    question:
      "`Python — yield from\n\nQuel est le rôle de yield from iterable ?\n\nRéférence exercice : PY-192`",
    reponse_v: "Déléguer l'itération à un sous-itérable",
    reponse_f1: "Créer une copie complète de l'itérable",
    reponse_f2: "Transformer automatiquement l'itérable en liste",
    explication:
      "yield from relaie les valeurs et certains échanges avec le sous-générateur.",
  },
  {
    id: 193,
    question:
      "`Python — compréhension et portée\n\nQuelle sortie produit ce code en Python 3 ?\n\nx = 10\nlst = [x for x in range(3)]\nprint(x)\n\nRéférence exercice : PY-193`",
    reponse_v: "10",
    reponse_f1: "2",
    reponse_f2: "NameError",
    explication: "La variable de compréhension possède sa propre portée.",
  },
  {
    id: 194,
    question:
      "`Python — générateur consommé\n\nQuelle sortie produit ce code ?\n\ng = (x * 2 for x in range(3))\nprint(list(g))\nprint(list(g))\n\nRéférence exercice : PY-194`",
    reponse_v: "[0, 2, 4] puis []",
    reponse_f1: "[0, 2, 4] puis [0, 2, 4]",
    reponse_f2: "[] puis []",
    explication: "Un générateur est consommé après une première itération.",
  },
  {
    id: 195,
    question:
      '`Python — enumerate\n\nQuelle sortie produit ce code ?\n\nprint(list(enumerate(["a", "b"], start=1)))\n\nRéférence exercice : PY-195`',
    reponse_v: "[(1, 'a'), (2, 'b')]",
    reponse_f1: "[(0, 'a'), (1, 'b')]",
    reponse_f2: "[('a', 1), ('b', 2)]",
    explication: "start=1 fixe le premier indice à 1.",
  },
  {
    id: 196,
    question:
      '`Python — zip\n\nQuelle sortie produit ce code ?\n\nprint(list(zip([1, 2, 3], ["a", "b"])))\n\nRéférence exercice : PY-196`',
    reponse_v: "[(1, 'a'), (2, 'b')]",
    reponse_f1: "[(1, 'a'), (2, 'b'), (3, None)]",
    reponse_f2: "[(1, 2, 3), ('a', 'b')]",
    explication: "zip s'arrête sur l'itérable le plus court.",
  },
  {
    id: 197,
    question:
      "`Python — context manager\n\nQuel protocole implémente un gestionnaire de contexte classique ?\n\nRéférence exercice : PY-197`",
    reponse_v: "__enter__() et __exit__()",
    reponse_f1: "__iter__() et __next__()",
    reponse_f2: "__aenter__() uniquement",
    explication: "with utilise __enter__ puis __exit__.",
  },
  {
    id: 198,
    question:
      "`Python — suppress\n\nQuel est l'effet de contextlib.suppress(ValueError) ?\n\nRéférence exercice : PY-198`",
    reponse_v: "Ignorer les ValueError levées dans le bloc",
    reponse_f1: "Convertir ValueError en warning",
    reponse_f2: "Relancer ValueError après le bloc",
    explication: "suppress absorbe les exceptions indiquées.",
  },
  {
    id: 199,
    question:
      "`Python — map paresseux\n\nQuelle affirmation est correcte en Python 3 ?\n\nRéférence exercice : PY-199`",
    reponse_v: "map retourne un itérateur paresseux",
    reponse_f1: "map retourne toujours une liste",
    reponse_f2: "map évalue immédiatement toutes les valeurs",
    explication: "map produit un objet itérable paresseux.",
  },
  {
    id: 200,
    question:
      "`Python — itérateur\n\nQuel protocole doit respecter un itérateur ?\n\nRéférence exercice : PY-200`",
    reponse_v: "__iter__() et __next__()",
    reponse_f1: "__len__() et __getitem__()",
    reponse_f2: "__enter__() et __exit__()",
    explication:
      "Un itérateur retourne lui-même via __iter__ et avance via __next__.",
  },
  {
    id: 201,
    question:
      "`Python — ordre des except\n\nPourquoi cet ordre est-il incorrect ?\n\ntry:\n    ...\nexcept Exception:\n    ...\nexcept ValueError:\n    ...\n\nRéférence exercice : PY-201`",
    reponse_v: "ValueError ne sera jamais atteint",
    reponse_f1: "Exception ne capture pas ValueError",
    reponse_f2: "Python trie automatiquement les except",
    explication:
      "ValueError hérite de Exception ; le handler général intercepte d'abord.",
  },
  {
    id: 202,
    question:
      "`Python — raise from\n\nQuel est le rôle de cette syntaxe ?\n\nraise CustomError() from exc\n\nRéférence exercice : PY-202`",
    reponse_v: "Chaîner explicitement l'exception d'origine",
    reponse_f1: "Supprimer toute trace de l'exception d'origine",
    reponse_f2: "Relancer exactement exc",
    explication: "raise ... from ... établit une cause explicite.",
  },
  {
    id: 203,
    question:
      "`Python — else après try\n\nQuand le bloc else d'un try s'exécute-t-il ?\n\nRéférence exercice : PY-203`",
    reponse_v: "Si aucune exception n'est levée dans le try",
    reponse_f1: "Toujours après finally",
    reponse_f2: "Uniquement si une exception est capturée",
    explication: "Le else s'exécute en cas de succès du bloc try.",
  },
  {
    id: 204,
    question:
      "`Python — ouverture de fichier\n\nQuel mode ouvre un fichier binaire en ajout à la fin ?\n\nRéférence exercice : PY-204`",
    reponse_v: "'ab'",
    reponse_f1: "'wb'",
    reponse_f2: "'a+'",
    explication: "a ajoute à la fin ; b sélectionne le mode binaire.",
  },
  {
    id: 205,
    question:
      "`Python — import\n\nQuelle affirmation est correcte ?\n\nimport module\n\nRéférence exercice : PY-205`",
    reponse_v:
      "Le corps du module est normalement exécuté une seule fois par processus",
    reponse_f1: "Le corps est réexécuté à chaque import",
    reponse_f2: "Le module n'est jamais ajouté à sys.modules",
    explication: "Le cache sys.modules évite une réexécution ordinaire.",
  },
  {
    id: 206,
    question:
      "`Python — __name__\n\nQuelle valeur a généralement __name__ dans un fichier exécuté directement ?\n\nRéférence exercice : PY-206`",
    reponse_v: "__main__",
    reponse_f1: "main",
    reponse_f2: "nom_du_fichier.py",
    explication: "Le module principal reçoit __name__ == '__main__'.",
  },
  {
    id: 207,
    question:
      "`Python — pickle\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-207`",
    reponse_v: "Il ne faut pas désérialiser des données pickle non fiables",
    reponse_f1: "pickle produit toujours un format interopérable avec JSON",
    reponse_f2: "pickle ne peut sérialiser aucun objet utilisateur",
    explication: "Le chargement pickle peut exécuter du code arbitraire.",
  },
  {
    id: 208,
    question:
      "`Python — JSON\n\nQue se passe-t-il avec json.dumps({1, 2, 3}) ?\n\nRéférence exercice : PY-208`",
    reponse_v: "TypeError",
    reponse_f1: '"{1, 2, 3}"',
    reponse_f2: "[1, 2, 3]",
    explication: "Un set n'est pas sérialisable en JSON par défaut.",
  },
  {
    id: 209,
    question:
      "`Python — pathlib\n\nQuelle méthode de Path lit directement le contenu texte d'un fichier ?\n\nRéférence exercice : PY-209`",
    reponse_v: "read_text()",
    reponse_f1: "read()",
    reponse_f2: "load_text()",
    explication: "Path.read_text lit le fichier et retourne une chaîne.",
  },
  {
    id: 210,
    question:
      "`Python — finally et return\n\nQuelle valeur retourne f() ?\n\ndef f():\n    try:\n        return 1\n    finally:\n        return 2\n\nRéférence exercice : PY-210`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "None",
    explication: "Le return du finally remplace celui du try.",
  },
  {
    id: 211,
    question:
      "`Python — ordre des except\n\nPourquoi cet ordre est-il incorrect ?\n\ntry:\n    ...\nexcept Exception:\n    ...\nexcept ValueError:\n    ...\n\nRéférence exercice : PY-211`",
    reponse_v: "ValueError ne sera jamais atteint",
    reponse_f1: "Exception ne capture pas ValueError",
    reponse_f2: "Python trie automatiquement les except",
    explication:
      "ValueError hérite de Exception ; le handler général intercepte d'abord.",
  },
  {
    id: 212,
    question:
      "`Python — raise from\n\nQuel est le rôle de cette syntaxe ?\n\nraise CustomError() from exc\n\nRéférence exercice : PY-212`",
    reponse_v: "Chaîner explicitement l'exception d'origine",
    reponse_f1: "Supprimer toute trace de l'exception d'origine",
    reponse_f2: "Relancer exactement exc",
    explication: "raise ... from ... établit une cause explicite.",
  },
  {
    id: 213,
    question:
      "`Python — else après try\n\nQuand le bloc else d'un try s'exécute-t-il ?\n\nRéférence exercice : PY-213`",
    reponse_v: "Si aucune exception n'est levée dans le try",
    reponse_f1: "Toujours après finally",
    reponse_f2: "Uniquement si une exception est capturée",
    explication: "Le else s'exécute en cas de succès du bloc try.",
  },
  {
    id: 214,
    question:
      "`Python — ouverture de fichier\n\nQuel mode ouvre un fichier binaire en ajout à la fin ?\n\nRéférence exercice : PY-214`",
    reponse_v: "'ab'",
    reponse_f1: "'wb'",
    reponse_f2: "'a+'",
    explication: "a ajoute à la fin ; b sélectionne le mode binaire.",
  },
  {
    id: 215,
    question:
      "`Python — import\n\nQuelle affirmation est correcte ?\n\nimport module\n\nRéférence exercice : PY-215`",
    reponse_v:
      "Le corps du module est normalement exécuté une seule fois par processus",
    reponse_f1: "Le corps est réexécuté à chaque import",
    reponse_f2: "Le module n'est jamais ajouté à sys.modules",
    explication: "Le cache sys.modules évite une réexécution ordinaire.",
  },
  {
    id: 216,
    question:
      "`Python — __name__\n\nQuelle valeur a généralement __name__ dans un fichier exécuté directement ?\n\nRéférence exercice : PY-216`",
    reponse_v: "__main__",
    reponse_f1: "main",
    reponse_f2: "nom_du_fichier.py",
    explication: "Le module principal reçoit __name__ == '__main__'.",
  },
  {
    id: 217,
    question:
      "`Python — pickle\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-217`",
    reponse_v: "Il ne faut pas désérialiser des données pickle non fiables",
    reponse_f1: "pickle produit toujours un format interopérable avec JSON",
    reponse_f2: "pickle ne peut sérialiser aucun objet utilisateur",
    explication: "Le chargement pickle peut exécuter du code arbitraire.",
  },
  {
    id: 218,
    question:
      "`Python — JSON\n\nQue se passe-t-il avec json.dumps({1, 2, 3}) ?\n\nRéférence exercice : PY-218`",
    reponse_v: "TypeError",
    reponse_f1: '"{1, 2, 3}"',
    reponse_f2: "[1, 2, 3]",
    explication: "Un set n'est pas sérialisable en JSON par défaut.",
  },
  {
    id: 219,
    question:
      "`Python — pathlib\n\nQuelle méthode de Path lit directement le contenu texte d'un fichier ?\n\nRéférence exercice : PY-219`",
    reponse_v: "read_text()",
    reponse_f1: "read()",
    reponse_f2: "load_text()",
    explication: "Path.read_text lit le fichier et retourne une chaîne.",
  },
  {
    id: 220,
    question:
      "`Python — finally et return\n\nQuelle valeur retourne f() ?\n\ndef f():\n    try:\n        return 1\n    finally:\n        return 2\n\nRéférence exercice : PY-220`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "None",
    explication: "Le return du finally remplace celui du try.",
  },
  {
    id: 221,
    question:
      "`Python — ordre des except\n\nPourquoi cet ordre est-il incorrect ?\n\ntry:\n    ...\nexcept Exception:\n    ...\nexcept ValueError:\n    ...\n\nRéférence exercice : PY-221`",
    reponse_v: "ValueError ne sera jamais atteint",
    reponse_f1: "Exception ne capture pas ValueError",
    reponse_f2: "Python trie automatiquement les except",
    explication:
      "ValueError hérite de Exception ; le handler général intercepte d'abord.",
  },
  {
    id: 222,
    question:
      "`Python — raise from\n\nQuel est le rôle de cette syntaxe ?\n\nraise CustomError() from exc\n\nRéférence exercice : PY-222`",
    reponse_v: "Chaîner explicitement l'exception d'origine",
    reponse_f1: "Supprimer toute trace de l'exception d'origine",
    reponse_f2: "Relancer exactement exc",
    explication: "raise ... from ... établit une cause explicite.",
  },
  {
    id: 223,
    question:
      "`Python — else après try\n\nQuand le bloc else d'un try s'exécute-t-il ?\n\nRéférence exercice : PY-223`",
    reponse_v: "Si aucune exception n'est levée dans le try",
    reponse_f1: "Toujours après finally",
    reponse_f2: "Uniquement si une exception est capturée",
    explication: "Le else s'exécute en cas de succès du bloc try.",
  },
  {
    id: 224,
    question:
      "`Python — ouverture de fichier\n\nQuel mode ouvre un fichier binaire en ajout à la fin ?\n\nRéférence exercice : PY-224`",
    reponse_v: "'ab'",
    reponse_f1: "'wb'",
    reponse_f2: "'a+'",
    explication: "a ajoute à la fin ; b sélectionne le mode binaire.",
  },
  {
    id: 225,
    question:
      "`Python — import\n\nQuelle affirmation est correcte ?\n\nimport module\n\nRéférence exercice : PY-225`",
    reponse_v:
      "Le corps du module est normalement exécuté une seule fois par processus",
    reponse_f1: "Le corps est réexécuté à chaque import",
    reponse_f2: "Le module n'est jamais ajouté à sys.modules",
    explication: "Le cache sys.modules évite une réexécution ordinaire.",
  },
  {
    id: 226,
    question:
      "`Python — __name__\n\nQuelle valeur a généralement __name__ dans un fichier exécuté directement ?\n\nRéférence exercice : PY-226`",
    reponse_v: "__main__",
    reponse_f1: "main",
    reponse_f2: "nom_du_fichier.py",
    explication: "Le module principal reçoit __name__ == '__main__'.",
  },
  {
    id: 227,
    question:
      "`Python — pickle\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-227`",
    reponse_v: "Il ne faut pas désérialiser des données pickle non fiables",
    reponse_f1: "pickle produit toujours un format interopérable avec JSON",
    reponse_f2: "pickle ne peut sérialiser aucun objet utilisateur",
    explication: "Le chargement pickle peut exécuter du code arbitraire.",
  },
  {
    id: 228,
    question:
      "`Python — JSON\n\nQue se passe-t-il avec json.dumps({1, 2, 3}) ?\n\nRéférence exercice : PY-228`",
    reponse_v: "TypeError",
    reponse_f1: '"{1, 2, 3}"',
    reponse_f2: "[1, 2, 3]",
    explication: "Un set n'est pas sérialisable en JSON par défaut.",
  },
  {
    id: 229,
    question:
      "`Python — pathlib\n\nQuelle méthode de Path lit directement le contenu texte d'un fichier ?\n\nRéférence exercice : PY-229`",
    reponse_v: "read_text()",
    reponse_f1: "read()",
    reponse_f2: "load_text()",
    explication: "Path.read_text lit le fichier et retourne une chaîne.",
  },
  {
    id: 230,
    question:
      "`Python — finally et return\n\nQuelle valeur retourne f() ?\n\ndef f():\n    try:\n        return 1\n    finally:\n        return 2\n\nRéférence exercice : PY-230`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "None",
    explication: "Le return du finally remplace celui du try.",
  },
  {
    id: 231,
    question:
      "`Python — ordre des except\n\nPourquoi cet ordre est-il incorrect ?\n\ntry:\n    ...\nexcept Exception:\n    ...\nexcept ValueError:\n    ...\n\nRéférence exercice : PY-231`",
    reponse_v: "ValueError ne sera jamais atteint",
    reponse_f1: "Exception ne capture pas ValueError",
    reponse_f2: "Python trie automatiquement les except",
    explication:
      "ValueError hérite de Exception ; le handler général intercepte d'abord.",
  },
  {
    id: 232,
    question:
      "`Python — raise from\n\nQuel est le rôle de cette syntaxe ?\n\nraise CustomError() from exc\n\nRéférence exercice : PY-232`",
    reponse_v: "Chaîner explicitement l'exception d'origine",
    reponse_f1: "Supprimer toute trace de l'exception d'origine",
    reponse_f2: "Relancer exactement exc",
    explication: "raise ... from ... établit une cause explicite.",
  },
  {
    id: 233,
    question:
      "`Python — else après try\n\nQuand le bloc else d'un try s'exécute-t-il ?\n\nRéférence exercice : PY-233`",
    reponse_v: "Si aucune exception n'est levée dans le try",
    reponse_f1: "Toujours après finally",
    reponse_f2: "Uniquement si une exception est capturée",
    explication: "Le else s'exécute en cas de succès du bloc try.",
  },
  {
    id: 234,
    question:
      "`Python — ouverture de fichier\n\nQuel mode ouvre un fichier binaire en ajout à la fin ?\n\nRéférence exercice : PY-234`",
    reponse_v: "'ab'",
    reponse_f1: "'wb'",
    reponse_f2: "'a+'",
    explication: "a ajoute à la fin ; b sélectionne le mode binaire.",
  },
  {
    id: 235,
    question:
      "`Python — import\n\nQuelle affirmation est correcte ?\n\nimport module\n\nRéférence exercice : PY-235`",
    reponse_v:
      "Le corps du module est normalement exécuté une seule fois par processus",
    reponse_f1: "Le corps est réexécuté à chaque import",
    reponse_f2: "Le module n'est jamais ajouté à sys.modules",
    explication: "Le cache sys.modules évite une réexécution ordinaire.",
  },
  {
    id: 236,
    question:
      "`Python — __name__\n\nQuelle valeur a généralement __name__ dans un fichier exécuté directement ?\n\nRéférence exercice : PY-236`",
    reponse_v: "__main__",
    reponse_f1: "main",
    reponse_f2: "nom_du_fichier.py",
    explication: "Le module principal reçoit __name__ == '__main__'.",
  },
  {
    id: 237,
    question:
      "`Python — pickle\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-237`",
    reponse_v: "Il ne faut pas désérialiser des données pickle non fiables",
    reponse_f1: "pickle produit toujours un format interopérable avec JSON",
    reponse_f2: "pickle ne peut sérialiser aucun objet utilisateur",
    explication: "Le chargement pickle peut exécuter du code arbitraire.",
  },
  {
    id: 238,
    question:
      "`Python — JSON\n\nQue se passe-t-il avec json.dumps({1, 2, 3}) ?\n\nRéférence exercice : PY-238`",
    reponse_v: "TypeError",
    reponse_f1: '"{1, 2, 3}"',
    reponse_f2: "[1, 2, 3]",
    explication: "Un set n'est pas sérialisable en JSON par défaut.",
  },
  {
    id: 239,
    question:
      "`Python — pathlib\n\nQuelle méthode de Path lit directement le contenu texte d'un fichier ?\n\nRéférence exercice : PY-239`",
    reponse_v: "read_text()",
    reponse_f1: "read()",
    reponse_f2: "load_text()",
    explication: "Path.read_text lit le fichier et retourne une chaîne.",
  },
  {
    id: 240,
    question:
      "`Python — finally et return\n\nQuelle valeur retourne f() ?\n\ndef f():\n    try:\n        return 1\n    finally:\n        return 2\n\nRéférence exercice : PY-240`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "None",
    explication: "Le return du finally remplace celui du try.",
  },
  {
    id: 241,
    question:
      "`Python — ordre des except\n\nPourquoi cet ordre est-il incorrect ?\n\ntry:\n    ...\nexcept Exception:\n    ...\nexcept ValueError:\n    ...\n\nRéférence exercice : PY-241`",
    reponse_v: "ValueError ne sera jamais atteint",
    reponse_f1: "Exception ne capture pas ValueError",
    reponse_f2: "Python trie automatiquement les except",
    explication:
      "ValueError hérite de Exception ; le handler général intercepte d'abord.",
  },
  {
    id: 242,
    question:
      "`Python — raise from\n\nQuel est le rôle de cette syntaxe ?\n\nraise CustomError() from exc\n\nRéférence exercice : PY-242`",
    reponse_v: "Chaîner explicitement l'exception d'origine",
    reponse_f1: "Supprimer toute trace de l'exception d'origine",
    reponse_f2: "Relancer exactement exc",
    explication: "raise ... from ... établit une cause explicite.",
  },
  {
    id: 243,
    question:
      "`Python — else après try\n\nQuand le bloc else d'un try s'exécute-t-il ?\n\nRéférence exercice : PY-243`",
    reponse_v: "Si aucune exception n'est levée dans le try",
    reponse_f1: "Toujours après finally",
    reponse_f2: "Uniquement si une exception est capturée",
    explication: "Le else s'exécute en cas de succès du bloc try.",
  },
  {
    id: 244,
    question:
      "`Python — ouverture de fichier\n\nQuel mode ouvre un fichier binaire en ajout à la fin ?\n\nRéférence exercice : PY-244`",
    reponse_v: "'ab'",
    reponse_f1: "'wb'",
    reponse_f2: "'a+'",
    explication: "a ajoute à la fin ; b sélectionne le mode binaire.",
  },
  {
    id: 245,
    question:
      "`Python — import\n\nQuelle affirmation est correcte ?\n\nimport module\n\nRéférence exercice : PY-245`",
    reponse_v:
      "Le corps du module est normalement exécuté une seule fois par processus",
    reponse_f1: "Le corps est réexécuté à chaque import",
    reponse_f2: "Le module n'est jamais ajouté à sys.modules",
    explication: "Le cache sys.modules évite une réexécution ordinaire.",
  },
  {
    id: 246,
    question:
      "`Python — __name__\n\nQuelle valeur a généralement __name__ dans un fichier exécuté directement ?\n\nRéférence exercice : PY-246`",
    reponse_v: "__main__",
    reponse_f1: "main",
    reponse_f2: "nom_du_fichier.py",
    explication: "Le module principal reçoit __name__ == '__main__'.",
  },
  {
    id: 247,
    question:
      "`Python — pickle\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-247`",
    reponse_v: "Il ne faut pas désérialiser des données pickle non fiables",
    reponse_f1: "pickle produit toujours un format interopérable avec JSON",
    reponse_f2: "pickle ne peut sérialiser aucun objet utilisateur",
    explication: "Le chargement pickle peut exécuter du code arbitraire.",
  },
  {
    id: 248,
    question:
      "`Python — JSON\n\nQue se passe-t-il avec json.dumps({1, 2, 3}) ?\n\nRéférence exercice : PY-248`",
    reponse_v: "TypeError",
    reponse_f1: '"{1, 2, 3}"',
    reponse_f2: "[1, 2, 3]",
    explication: "Un set n'est pas sérialisable en JSON par défaut.",
  },
  {
    id: 249,
    question:
      "`Python — pathlib\n\nQuelle méthode de Path lit directement le contenu texte d'un fichier ?\n\nRéférence exercice : PY-249`",
    reponse_v: "read_text()",
    reponse_f1: "read()",
    reponse_f2: "load_text()",
    explication: "Path.read_text lit le fichier et retourne une chaîne.",
  },
  {
    id: 250,
    question:
      "`Python — finally et return\n\nQuelle valeur retourne f() ?\n\ndef f():\n    try:\n        return 1\n    finally:\n        return 2\n\nRéférence exercice : PY-250`",
    reponse_v: "2",
    reponse_f1: "1",
    reponse_f2: "None",
    explication: "Le return du finally remplace celui du try.",
  },
  {
    id: 251,
    question:
      "`Python — asyncio.gather\n\nQuel comportement a asyncio.gather(a(), b()) par défaut si une coroutine lève une exception ?\n\nRéférence exercice : PY-251`",
    reponse_v: "L'exception est propagée au caller",
    reponse_f1: "Toutes les exceptions sont toujours converties en valeurs",
    reponse_f2: "La boucle d'événements est détruite",
    explication: "Sans return_exceptions=True, gather propage l'exception.",
  },
  {
    id: 252,
    question:
      "`Python — create_task\n\nQuel est le rôle de asyncio.create_task(coro()) ?\n\nRéférence exercice : PY-252`",
    reponse_v: "Planifier l'exécution concurrente de la coroutine",
    reponse_f1:
      "Exécuter immédiatement la coroutine jusqu'à la fin de façon bloquante",
    reponse_f2: "Créer un nouveau thread système",
    explication: "create_task inscrit la coroutine dans la boucle courante.",
  },
  {
    id: 253,
    question:
      "`Python — GIL\n\nQuelle affirmation est la plus correcte pour CPython ?\n\nRéférence exercice : PY-253`",
    reponse_v:
      "Un seul thread exécute du bytecode Python à la fois dans un processus",
    reponse_f1: "Aucun thread ne peut effectuer d'E/S en parallèle",
    reponse_f2: "Le GIL interdit tout parallélisme natif",
    explication:
      "Le GIL limite le bytecode Python, mais les extensions natives et processus peuvent paralléliser.",
  },
  {
    id: 254,
    question:
      "`Python — multiprocessing\n\nQuel avantage principal apporte multiprocessing pour une tâche CPU-bound ?\n\nRéférence exercice : PY-254`",
    reponse_v: "Utiliser plusieurs processus et contourner le GIL",
    reponse_f1: "Partager automatiquement tous les objets sans sérialisation",
    reponse_f2: "Éviter toute copie mémoire sur toutes les plateformes",
    explication: "Chaque processus possède son interpréteur et son GIL.",
  },
  {
    id: 255,
    question:
      "`Python — weakref\n\nQuel est l'effet d'une référence faible ?\n\nRéférence exercice : PY-255`",
    reponse_v: "Elle n'empêche pas la collecte de l'objet",
    reponse_f1: "Elle rend l'objet immutable",
    reponse_f2: "Elle force la conservation de l'objet",
    explication: "Une weak reference ne compte pas comme référence forte.",
  },
  {
    id: 256,
    question:
      "`Python — garbage collector\n\nQue complète le garbage collector cyclique de CPython ?\n\nRéférence exercice : PY-256`",
    reponse_v: "Le comptage de références pour récupérer certains cycles",
    reponse_f1: "Le typage statique",
    reponse_f2: "La compilation du bytecode",
    explication:
      "Le GC cyclique détecte des groupes d'objets qui se référencent mutuellement.",
  },
  {
    id: 257,
    question:
      "`Python — metaclass\n\nQuel est le rôle principal d'une métaclasse ?\n\nRéférence exercice : PY-257`",
    reponse_v: "Contrôler la création des classes",
    reponse_f1: "Contrôler uniquement la création des instances",
    reponse_f2: "Remplacer le garbage collector",
    explication: "Une métaclasse est la classe d'une classe.",
  },
  {
    id: 258,
    question:
      "`Python — __getattr__\n\nQuand __getattr__ est-il appelé ?\n\nRéférence exercice : PY-258`",
    reponse_v: "Après l'échec de la recherche normale d'un attribut",
    reponse_f1: "Pour chaque accès d'attribut sans exception",
    reponse_f2: "Uniquement lors d'une affectation",
    explication: "__getattr__ sert de mécanisme de repli.",
  },
  {
    id: 259,
    question:
      "`Python — __getattribute__\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-259`",
    reponse_v: "Il intercepte presque tous les accès aux attributs",
    reponse_f1: "Il n'est appelé que si l'attribut manque",
    reponse_f2: "Il ne peut pas provoquer de récursion",
    explication:
      "__getattribute__ est invoqué avant la recherche normale et doit être utilisé prudemment.",
  },
  {
    id: 260,
    question:
      "`Python — coroutine\n\nQue retourne l'appel d'une fonction async sans await ?\n\nasync def f():\n    return 42\n\nx = f()\n\nRéférence exercice : PY-260`",
    reponse_v: "Un objet coroutine",
    reponse_f1: "42",
    reponse_f2: "Une Future déjà terminée",
    explication:
      "L'appel crée une coroutine ; elle doit être attendue ou planifiée.",
  },
  {
    id: 261,
    question:
      "`Python — asyncio.gather\n\nQuel comportement a asyncio.gather(a(), b()) par défaut si une coroutine lève une exception ?\n\nRéférence exercice : PY-261`",
    reponse_v: "L'exception est propagée au caller",
    reponse_f1: "Toutes les exceptions sont toujours converties en valeurs",
    reponse_f2: "La boucle d'événements est détruite",
    explication: "Sans return_exceptions=True, gather propage l'exception.",
  },
  {
    id: 262,
    question:
      "`Python — create_task\n\nQuel est le rôle de asyncio.create_task(coro()) ?\n\nRéférence exercice : PY-262`",
    reponse_v: "Planifier l'exécution concurrente de la coroutine",
    reponse_f1:
      "Exécuter immédiatement la coroutine jusqu'à la fin de façon bloquante",
    reponse_f2: "Créer un nouveau thread système",
    explication: "create_task inscrit la coroutine dans la boucle courante.",
  },
  {
    id: 263,
    question:
      "`Python — GIL\n\nQuelle affirmation est la plus correcte pour CPython ?\n\nRéférence exercice : PY-263`",
    reponse_v:
      "Un seul thread exécute du bytecode Python à la fois dans un processus",
    reponse_f1: "Aucun thread ne peut effectuer d'E/S en parallèle",
    reponse_f2: "Le GIL interdit tout parallélisme natif",
    explication:
      "Le GIL limite le bytecode Python, mais les extensions natives et processus peuvent paralléliser.",
  },
  {
    id: 264,
    question:
      "`Python — multiprocessing\n\nQuel avantage principal apporte multiprocessing pour une tâche CPU-bound ?\n\nRéférence exercice : PY-264`",
    reponse_v: "Utiliser plusieurs processus et contourner le GIL",
    reponse_f1: "Partager automatiquement tous les objets sans sérialisation",
    reponse_f2: "Éviter toute copie mémoire sur toutes les plateformes",
    explication: "Chaque processus possède son interpréteur et son GIL.",
  },
  {
    id: 265,
    question:
      "`Python — weakref\n\nQuel est l'effet d'une référence faible ?\n\nRéférence exercice : PY-265`",
    reponse_v: "Elle n'empêche pas la collecte de l'objet",
    reponse_f1: "Elle rend l'objet immutable",
    reponse_f2: "Elle force la conservation de l'objet",
    explication: "Une weak reference ne compte pas comme référence forte.",
  },
  {
    id: 266,
    question:
      "`Python — garbage collector\n\nQue complète le garbage collector cyclique de CPython ?\n\nRéférence exercice : PY-266`",
    reponse_v: "Le comptage de références pour récupérer certains cycles",
    reponse_f1: "Le typage statique",
    reponse_f2: "La compilation du bytecode",
    explication:
      "Le GC cyclique détecte des groupes d'objets qui se référencent mutuellement.",
  },
  {
    id: 267,
    question:
      "`Python — metaclass\n\nQuel est le rôle principal d'une métaclasse ?\n\nRéférence exercice : PY-267`",
    reponse_v: "Contrôler la création des classes",
    reponse_f1: "Contrôler uniquement la création des instances",
    reponse_f2: "Remplacer le garbage collector",
    explication: "Une métaclasse est la classe d'une classe.",
  },
  {
    id: 268,
    question:
      "`Python — __getattr__\n\nQuand __getattr__ est-il appelé ?\n\nRéférence exercice : PY-268`",
    reponse_v: "Après l'échec de la recherche normale d'un attribut",
    reponse_f1: "Pour chaque accès d'attribut sans exception",
    reponse_f2: "Uniquement lors d'une affectation",
    explication: "__getattr__ sert de mécanisme de repli.",
  },
  {
    id: 269,
    question:
      "`Python — __getattribute__\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-269`",
    reponse_v: "Il intercepte presque tous les accès aux attributs",
    reponse_f1: "Il n'est appelé que si l'attribut manque",
    reponse_f2: "Il ne peut pas provoquer de récursion",
    explication:
      "__getattribute__ est invoqué avant la recherche normale et doit être utilisé prudemment.",
  },
  {
    id: 270,
    question:
      "`Python — coroutine\n\nQue retourne l'appel d'une fonction async sans await ?\n\nasync def f():\n    return 42\n\nx = f()\n\nRéférence exercice : PY-270`",
    reponse_v: "Un objet coroutine",
    reponse_f1: "42",
    reponse_f2: "Une Future déjà terminée",
    explication:
      "L'appel crée une coroutine ; elle doit être attendue ou planifiée.",
  },
  {
    id: 271,
    question:
      "`Python — asyncio.gather\n\nQuel comportement a asyncio.gather(a(), b()) par défaut si une coroutine lève une exception ?\n\nRéférence exercice : PY-271`",
    reponse_v: "L'exception est propagée au caller",
    reponse_f1: "Toutes les exceptions sont toujours converties en valeurs",
    reponse_f2: "La boucle d'événements est détruite",
    explication: "Sans return_exceptions=True, gather propage l'exception.",
  },
  {
    id: 272,
    question:
      "`Python — create_task\n\nQuel est le rôle de asyncio.create_task(coro()) ?\n\nRéférence exercice : PY-272`",
    reponse_v: "Planifier l'exécution concurrente de la coroutine",
    reponse_f1:
      "Exécuter immédiatement la coroutine jusqu'à la fin de façon bloquante",
    reponse_f2: "Créer un nouveau thread système",
    explication: "create_task inscrit la coroutine dans la boucle courante.",
  },
  {
    id: 273,
    question:
      "`Python — GIL\n\nQuelle affirmation est la plus correcte pour CPython ?\n\nRéférence exercice : PY-273`",
    reponse_v:
      "Un seul thread exécute du bytecode Python à la fois dans un processus",
    reponse_f1: "Aucun thread ne peut effectuer d'E/S en parallèle",
    reponse_f2: "Le GIL interdit tout parallélisme natif",
    explication:
      "Le GIL limite le bytecode Python, mais les extensions natives et processus peuvent paralléliser.",
  },
  {
    id: 274,
    question:
      "`Python — multiprocessing\n\nQuel avantage principal apporte multiprocessing pour une tâche CPU-bound ?\n\nRéférence exercice : PY-274`",
    reponse_v: "Utiliser plusieurs processus et contourner le GIL",
    reponse_f1: "Partager automatiquement tous les objets sans sérialisation",
    reponse_f2: "Éviter toute copie mémoire sur toutes les plateformes",
    explication: "Chaque processus possède son interpréteur et son GIL.",
  },
  {
    id: 275,
    question:
      "`Python — weakref\n\nQuel est l'effet d'une référence faible ?\n\nRéférence exercice : PY-275`",
    reponse_v: "Elle n'empêche pas la collecte de l'objet",
    reponse_f1: "Elle rend l'objet immutable",
    reponse_f2: "Elle force la conservation de l'objet",
    explication: "Une weak reference ne compte pas comme référence forte.",
  },
  {
    id: 276,
    question:
      "`Python — garbage collector\n\nQue complète le garbage collector cyclique de CPython ?\n\nRéférence exercice : PY-276`",
    reponse_v: "Le comptage de références pour récupérer certains cycles",
    reponse_f1: "Le typage statique",
    reponse_f2: "La compilation du bytecode",
    explication:
      "Le GC cyclique détecte des groupes d'objets qui se référencent mutuellement.",
  },
  {
    id: 277,
    question:
      "`Python — metaclass\n\nQuel est le rôle principal d'une métaclasse ?\n\nRéférence exercice : PY-277`",
    reponse_v: "Contrôler la création des classes",
    reponse_f1: "Contrôler uniquement la création des instances",
    reponse_f2: "Remplacer le garbage collector",
    explication: "Une métaclasse est la classe d'une classe.",
  },
  {
    id: 278,
    question:
      "`Python — __getattr__\n\nQuand __getattr__ est-il appelé ?\n\nRéférence exercice : PY-278`",
    reponse_v: "Après l'échec de la recherche normale d'un attribut",
    reponse_f1: "Pour chaque accès d'attribut sans exception",
    reponse_f2: "Uniquement lors d'une affectation",
    explication: "__getattr__ sert de mécanisme de repli.",
  },
  {
    id: 279,
    question:
      "`Python — __getattribute__\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-279`",
    reponse_v: "Il intercepte presque tous les accès aux attributs",
    reponse_f1: "Il n'est appelé que si l'attribut manque",
    reponse_f2: "Il ne peut pas provoquer de récursion",
    explication:
      "__getattribute__ est invoqué avant la recherche normale et doit être utilisé prudemment.",
  },
  {
    id: 280,
    question:
      "`Python — coroutine\n\nQue retourne l'appel d'une fonction async sans await ?\n\nasync def f():\n    return 42\n\nx = f()\n\nRéférence exercice : PY-280`",
    reponse_v: "Un objet coroutine",
    reponse_f1: "42",
    reponse_f2: "Une Future déjà terminée",
    explication:
      "L'appel crée une coroutine ; elle doit être attendue ou planifiée.",
  },
  {
    id: 281,
    question:
      "`Python — asyncio.gather\n\nQuel comportement a asyncio.gather(a(), b()) par défaut si une coroutine lève une exception ?\n\nRéférence exercice : PY-281`",
    reponse_v: "L'exception est propagée au caller",
    reponse_f1: "Toutes les exceptions sont toujours converties en valeurs",
    reponse_f2: "La boucle d'événements est détruite",
    explication: "Sans return_exceptions=True, gather propage l'exception.",
  },
  {
    id: 282,
    question:
      "`Python — create_task\n\nQuel est le rôle de asyncio.create_task(coro()) ?\n\nRéférence exercice : PY-282`",
    reponse_v: "Planifier l'exécution concurrente de la coroutine",
    reponse_f1:
      "Exécuter immédiatement la coroutine jusqu'à la fin de façon bloquante",
    reponse_f2: "Créer un nouveau thread système",
    explication: "create_task inscrit la coroutine dans la boucle courante.",
  },
  {
    id: 283,
    question:
      "`Python — GIL\n\nQuelle affirmation est la plus correcte pour CPython ?\n\nRéférence exercice : PY-283`",
    reponse_v:
      "Un seul thread exécute du bytecode Python à la fois dans un processus",
    reponse_f1: "Aucun thread ne peut effectuer d'E/S en parallèle",
    reponse_f2: "Le GIL interdit tout parallélisme natif",
    explication:
      "Le GIL limite le bytecode Python, mais les extensions natives et processus peuvent paralléliser.",
  },
  {
    id: 284,
    question:
      "`Python — multiprocessing\n\nQuel avantage principal apporte multiprocessing pour une tâche CPU-bound ?\n\nRéférence exercice : PY-284`",
    reponse_v: "Utiliser plusieurs processus et contourner le GIL",
    reponse_f1: "Partager automatiquement tous les objets sans sérialisation",
    reponse_f2: "Éviter toute copie mémoire sur toutes les plateformes",
    explication: "Chaque processus possède son interpréteur et son GIL.",
  },
  {
    id: 285,
    question:
      "`Python — weakref\n\nQuel est l'effet d'une référence faible ?\n\nRéférence exercice : PY-285`",
    reponse_v: "Elle n'empêche pas la collecte de l'objet",
    reponse_f1: "Elle rend l'objet immutable",
    reponse_f2: "Elle force la conservation de l'objet",
    explication: "Une weak reference ne compte pas comme référence forte.",
  },
  {
    id: 286,
    question:
      "`Python — garbage collector\n\nQue complète le garbage collector cyclique de CPython ?\n\nRéférence exercice : PY-286`",
    reponse_v: "Le comptage de références pour récupérer certains cycles",
    reponse_f1: "Le typage statique",
    reponse_f2: "La compilation du bytecode",
    explication:
      "Le GC cyclique détecte des groupes d'objets qui se référencent mutuellement.",
  },
  {
    id: 287,
    question:
      "`Python — metaclass\n\nQuel est le rôle principal d'une métaclasse ?\n\nRéférence exercice : PY-287`",
    reponse_v: "Contrôler la création des classes",
    reponse_f1: "Contrôler uniquement la création des instances",
    reponse_f2: "Remplacer le garbage collector",
    explication: "Une métaclasse est la classe d'une classe.",
  },
  {
    id: 288,
    question:
      "`Python — __getattr__\n\nQuand __getattr__ est-il appelé ?\n\nRéférence exercice : PY-288`",
    reponse_v: "Après l'échec de la recherche normale d'un attribut",
    reponse_f1: "Pour chaque accès d'attribut sans exception",
    reponse_f2: "Uniquement lors d'une affectation",
    explication: "__getattr__ sert de mécanisme de repli.",
  },
  {
    id: 289,
    question:
      "`Python — __getattribute__\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-289`",
    reponse_v: "Il intercepte presque tous les accès aux attributs",
    reponse_f1: "Il n'est appelé que si l'attribut manque",
    reponse_f2: "Il ne peut pas provoquer de récursion",
    explication:
      "__getattribute__ est invoqué avant la recherche normale et doit être utilisé prudemment.",
  },
  {
    id: 290,
    question:
      "`Python — coroutine\n\nQue retourne l'appel d'une fonction async sans await ?\n\nasync def f():\n    return 42\n\nx = f()\n\nRéférence exercice : PY-290`",
    reponse_v: "Un objet coroutine",
    reponse_f1: "42",
    reponse_f2: "Une Future déjà terminée",
    explication:
      "L'appel crée une coroutine ; elle doit être attendue ou planifiée.",
  },
  {
    id: 291,
    question:
      "`Python — asyncio.gather\n\nQuel comportement a asyncio.gather(a(), b()) par défaut si une coroutine lève une exception ?\n\nRéférence exercice : PY-291`",
    reponse_v: "L'exception est propagée au caller",
    reponse_f1: "Toutes les exceptions sont toujours converties en valeurs",
    reponse_f2: "La boucle d'événements est détruite",
    explication: "Sans return_exceptions=True, gather propage l'exception.",
  },
  {
    id: 292,
    question:
      "`Python — create_task\n\nQuel est le rôle de asyncio.create_task(coro()) ?\n\nRéférence exercice : PY-292`",
    reponse_v: "Planifier l'exécution concurrente de la coroutine",
    reponse_f1:
      "Exécuter immédiatement la coroutine jusqu'à la fin de façon bloquante",
    reponse_f2: "Créer un nouveau thread système",
    explication: "create_task inscrit la coroutine dans la boucle courante.",
  },
  {
    id: 293,
    question:
      "`Python — GIL\n\nQuelle affirmation est la plus correcte pour CPython ?\n\nRéférence exercice : PY-293`",
    reponse_v:
      "Un seul thread exécute du bytecode Python à la fois dans un processus",
    reponse_f1: "Aucun thread ne peut effectuer d'E/S en parallèle",
    reponse_f2: "Le GIL interdit tout parallélisme natif",
    explication:
      "Le GIL limite le bytecode Python, mais les extensions natives et processus peuvent paralléliser.",
  },
  {
    id: 294,
    question:
      "`Python — multiprocessing\n\nQuel avantage principal apporte multiprocessing pour une tâche CPU-bound ?\n\nRéférence exercice : PY-294`",
    reponse_v: "Utiliser plusieurs processus et contourner le GIL",
    reponse_f1: "Partager automatiquement tous les objets sans sérialisation",
    reponse_f2: "Éviter toute copie mémoire sur toutes les plateformes",
    explication: "Chaque processus possède son interpréteur et son GIL.",
  },
  {
    id: 295,
    question:
      "`Python — weakref\n\nQuel est l'effet d'une référence faible ?\n\nRéférence exercice : PY-295`",
    reponse_v: "Elle n'empêche pas la collecte de l'objet",
    reponse_f1: "Elle rend l'objet immutable",
    reponse_f2: "Elle force la conservation de l'objet",
    explication: "Une weak reference ne compte pas comme référence forte.",
  },
  {
    id: 296,
    question:
      "`Python — garbage collector\n\nQue complète le garbage collector cyclique de CPython ?\n\nRéférence exercice : PY-296`",
    reponse_v: "Le comptage de références pour récupérer certains cycles",
    reponse_f1: "Le typage statique",
    reponse_f2: "La compilation du bytecode",
    explication:
      "Le GC cyclique détecte des groupes d'objets qui se référencent mutuellement.",
  },
  {
    id: 297,
    question:
      "`Python — metaclass\n\nQuel est le rôle principal d'une métaclasse ?\n\nRéférence exercice : PY-297`",
    reponse_v: "Contrôler la création des classes",
    reponse_f1: "Contrôler uniquement la création des instances",
    reponse_f2: "Remplacer le garbage collector",
    explication: "Une métaclasse est la classe d'une classe.",
  },
  {
    id: 298,
    question:
      "`Python — __getattr__\n\nQuand __getattr__ est-il appelé ?\n\nRéférence exercice : PY-298`",
    reponse_v: "Après l'échec de la recherche normale d'un attribut",
    reponse_f1: "Pour chaque accès d'attribut sans exception",
    reponse_f2: "Uniquement lors d'une affectation",
    explication: "__getattr__ sert de mécanisme de repli.",
  },
  {
    id: 299,
    question:
      "`Python — __getattribute__\n\nQuelle affirmation est correcte ?\n\nRéférence exercice : PY-299`",
    reponse_v: "Il intercepte presque tous les accès aux attributs",
    reponse_f1: "Il n'est appelé que si l'attribut manque",
    reponse_f2: "Il ne peut pas provoquer de récursion",
    explication:
      "__getattribute__ est invoqué avant la recherche normale et doit être utilisé prudemment.",
  },
  {
    id: 300,
    question:
      "`Python — coroutine\n\nQue retourne l'appel d'une fonction async sans await ?\n\nasync def f():\n    return 42\n\nx = f()\n\nRéférence exercice : PY-300`",
    reponse_v: "Un objet coroutine",
    reponse_f1: "42",
    reponse_f2: "Une Future déjà terminée",
    explication:
      "L'appel crée une coroutine ; elle doit être attendue ou planifiée.",
  },
];
