// Exercice 1
1 -
  db.Employe.insertMany([
    {
      id: 1,
      nom: "Mohamed Ali",
      departement: "Informatique",
      salaire: 6500,
      dateEmbauche: new Date("2018-03-15"),
    },
    {
      id: 2,
      nom: "Fatima Zahra",
      departement: "Ressources Humaines",
      salaire: 5200,
      dateEmbauche: new Date("2020-05-10"),
    },
    {
      id: 3,
      nom: "Omar El Hajji",
      departement: "Finance",
      salaire: 7800,
      dateEmbauche: new Date("2017-11-01"),
    },
    {
      id: 4,
      nom: "Aya Bensalah",
      departement: "Marketing",
      salaire: 4900,
      dateEmbauche: new Date("2019-06-20"),
    },
    {
      id: 5,
      nom: "Yassine Fassi",
      departement: "Logistique",
      salaire: 6000,
      dateEmbauche: new Date("2021-01-12"),
    },
    {
      id: 6,
      nom: "Khadija Amrani",
      departement: "Informatique",
      salaire: 7200,
      dateEmbauche: new Date("2022-08-05"),
    },
    {
      id: 7,
      nom: "Said El Koutbi",
      departement: "Ventes",
      salaire: 5800,
      dateEmbauche: new Date("2016-12-09"),
    },
    {
      id: 8,
      nom: "Rachid El Fadili",
      departement: "Informatique",
      salaire: 6800,
      dateEmbauche: new Date("2023-01-25"),
    },
    {
      id: 9,
      nom: "Leila Najah",
      departement: "Comptabilité",
      salaire: 5600,
      dateEmbauche: new Date("2020-03-15"),
    },
    {
      id: 10,
      nom: "Hamid Toufik",
      departement: "Transport",
      salaire: 6100,
      dateEmbauche: new Date("2019-07-22"),
    },
  ]);

2 -
  db.Employe.aggregate([
    {
      $group: {
        _id: "$departement",
        "Moyenne des salaire": { $avg: "$salaire" },
      },
    },
  ]);

3 -
  db.Employe.aggregate([
    {
      $group: { _id: "$departement", "Salaire Maximum": { $max: "$salaire" } },
    },
  ]);

4 -
  db.Employe.aggregate([
    { $group: { _id: {}, "somme des salaire": { $sum: "$salaire" } } },
  ]);

5 -
  db.Employe.aggregate([
    {
      $group: {
        _id: {},
        "Salaire Maximun": { $max: "$salaire" },
        "salaire minimum": { $min: "$salaire" },
      },
    },
  ]);

6 - db.Employe.aggregate([{ $sort: { salaire: -1 } }, { $limit: 5 }]);

7 - db.Employe.aggregate([{ $sort: { dateEmbauche: 1 } }, { $limit: 1 }]);

8;

// Exercice 2
db.Livre.insertMany([
  {
    id: 1,
    titre: "Le Voyage Interstellaire",
    auteur: "Jean Dupont",
    anneePublication: 2018,
    motsCles: ["Science-Fiction", "Aventure", "Espace"],
  },
  {
    id: 2,
    titre: "L'Ombre du Passé",
    auteur: "Claire Martin",
    anneePublication: 2020,
    motsCles: ["Thriller", "Mystère", "Suspense"],
  },
  {
    id: 3,
    titre: "Les Secrets de la Forêt",
    auteur: "Alexandre Morel",
    anneePublication: 2017,
    motsCles: ["Fantaisie", "Nature", "Aventure"],
  },
  {
    id: 4,
    titre: "Intelligence Artificielle : L'Avenir",
    auteur: "Sophie Dubois",
    anneePublication: 2021,
    motsCles: ["Science-Fiction", "Technologie", "Innovation"],
  },
  {
    id: 5,
    titre: "L'Art Perdu de la Magie",
    auteur: "Lucas Bernard",
    anneePublication: 2015,
    motsCles: ["Fantaisie", "Magie", "Aventure"],
  },
  {
    id: 6,
    titre: "Mystères Profonds",
    auteur: "Isabelle Lefèvre",
    anneePublication: 2019,
    motsCles: ["Enquête", "Suspense", "Mystère"],
  },
  {
    id: 7,
    titre: "Aux Confins de l'Univers",
    auteur: "Paul Durand",
    anneePublication: 2022,
    motsCles: ["Science-Fiction", "Exploration", "Espace"],
  },
  {
    id: 8,
    titre: "La Guerre des Clans",
    auteur: "Marie Leroy",
    anneePublication: 2016,
    motsCles: ["Fantaisie", "Aventure", "Conflit"],
  },
  {
    id: 9,
    titre: "Le Dernier Survivant",
    auteur: "Thomas Dubreuil",
    anneePublication: 2020,
    motsCles: ["Post-Apocalyptique", "Survie", "Action"],
  },
  {
    id: 10,
    titre: "La Mémoire Cachée",
    auteur: "Alice Moreau",
    anneePublication: 2021,
    motsCles: ["Mystère", "Psychologie", "Suspense"],
  },
  {
    id: 11,
    titre: "Chroniques du Futur",
    auteur: "Pierre Marchal",
    anneePublication: 2019,
    motsCles: ["Science-Fiction", "Technologie", "Futur"],
  },
  {
    id: 12,
    titre: "L'Héritage Oublié",
    auteur: "Caroline Fontaine",
    anneePublication: 2018,
    motsCles: ["Aventure", "Historique", "Quête"],
  },
  {
    id: 13,
    titre: "Le Réveil des Anciens",
    auteur: "François Simon",
    anneePublication: 2017,
    motsCles: ["Fantaisie", "Mythologie", "Épopée"],
  },
]);

1 -
  db.Livre.aggregate({
    $match: { motsCles: "Science-Fiction", anneePublication: { $lt: 2019 } },
  });
2 -
  db.Livre.aggregate([
    { $unwind: "$motsCles" },
    { $group: { _id: "$motsCles", "Nombre des livres": { $count: {} } } },
  ]);

3 -
  db.Livre.aggregate([
    { $unwind: "$motsCles" },
    { $group: { _id: "$titre", "Nombre des motsCles": { $count: {} } } },
  ]);

4 -
  db.Livre.aggregate([
    { $match: { motsCles: { $all: ["Science_Fiction", "Aventure"] } } },
    { $sort: { Aventure: 1 } },
  ]);

5 -
  db.Livre.aggregate([
    {
      $project: {
        _id: 0,
        titre: 1,
        auteur: 1,
        anneePublication: 1,
        nombreDeMotsCles: { $size: "$motsCles" },
      },
    },
    {
      $sort: { nombreDeMotsCles: -1 },
    },
  ]);

6 -
  db.Livre.aggregate([
    { $group: { _id: "$auteur", "Nombre des livres": { $count: {} } } },
    { $sort: { "Nombre des livres": -1 } },
    { $limit: 5 },
  ]);

// Exercice 3

-db.Article.insertMany([
  {
    _id: 1,
    nom: "Smartphone X",
    marque: "TechCo",
    caractéristiques: {
      écran: 6,
      processeur: "Snapdragon 865",
      mémoire: 128,
      caméra: "Triple caméra 48 MP",
    },
    prix: 699.99,
    disponible: true,
  },
  {
    _id: 2,
    nom: "Smartphone Y",
    marque: "GigaMobile",
    caractéristiques: {
      écran: 6.5,
      processeur: "Exynos 990",
      mémoire: 256,
      caméra: "Quad caméra 64 MP",
    },
    prix: 799.99,
    disponible: false,
  },
  {
    _id: 3,
    nom: "Smartphone Z",
    marque: "NanoTech",
    caractéristiques: {
      écran: 5.8,
      processeur: "A14 Bionic",
      mémoire: 64,
      caméra: "Double caméra 12 MP",
    },
    prix: 899.5,
    disponible: true,
  },
  {
    _id: 4,
    nom: "Smartphone Ultra",
    marque: "TechCo",
    caractéristiques: {
      écran: 6.7,
      processeur: "Snapdragon 888",
      mémoire: 512,
      caméra: "Penta caméra 108 MP",
    },
    prix: 1299.99,
    disponible: true,
  },
  {
    _id: 5,
    nom: "Smartphone Lite",
    marque: "GigaMobile",
    caractéristiques: {
      écran: 6.2,
      processeur: "Snapdragon 732G",
      mémoire: 128,
      caméra: "Triple caméra 48 MP",
    },
    prix: 499.99,
    disponible: false,
  },
  {
    _id: 6,
    nom: "Phone A1",
    marque: "AlphaPhones",
    caractéristiques: {
      écran: 5.5,
      processeur: "Helio P90",
      mémoire: 64,
      caméra: "Double caméra 16 MP",
    },
    prix: 299.99,
    disponible: true,
  },
  {
    _id: 7,
    nom: "Phone B2 Pro",
    marque: "AlphaPhones",
    caractéristiques: {
      écran: 6.1,
      processeur: "Snapdragon 845",
      mémoire: 128,
      caméra: "Triple caméra 24 MP",
    },
    prix: 599.99,
    disponible: false,
  },
  {
    _id: 8,
    nom: "Galaxy R",
    marque: "SkyTech",
    caractéristiques: {
      écran: 6.3,
      processeur: "Snapdragon 750G",
      mémoire: 256,
      caméra: "Quad caméra 48 MP",
    },
    prix: 749.99,
    disponible: true,
  },
  {
    _id: 9,
    nom: "Galaxy S Ultra",
    marque: "SkyTech",
    caractéristiques: {
      écran: 6.9,
      processeur: "Snapdragon 888+",
      mémoire: 512,
      caméra: "Quad caméra 108 MP",
    },
    prix: 1499.99,
    disponible: true,
  },
  {
    _id: 10,
    nom: "Phone Edge",
    marque: "NanoTech",
    caractéristiques: {
      écran: 6.0,
      processeur: "Dimensity 1200",
      mémoire: 128,
      caméra: "Triple caméra 50 MP",
    },
    prix: 659.99,
    disponible: false,
  },
  {
    _id: 11,
    nom: "Omega Lite",
    marque: "OmegaTech",
    caractéristiques: {
      écran: 5.8,
      processeur: "Kirin 710A",
      mémoire: 64,
      caméra: "Double caméra 20 MP",
    },
    prix: 399.99,
    disponible: true,
  },
  {
    _id: 12,
    nom: "Omega Pro Max",
    marque: "OmegaTech",
    caractéristiques: {
      écran: 6.4,
      processeur: "Kirin 9000",
      mémoire: 256,
      caméra: "Quad caméra 64 MP",
    },
    prix: 999.99,
    disponible: false,
  },
  {
    _id: 13,
    nom: "SmartLite 4G",
    marque: "TechCo",
    caractéristiques: {
      écran: 5.6,
      processeur: "Snapdragon 662",
      mémoire: 32,
      caméra: "Double caméra 12 MP",
    },
    prix: 249.99,
    disponible: true,
  },
  {
    _id: 14,
    nom: "XPhone Max",
    marque: "XTech",
    caractéristiques: {
      écran: 6.8,
      processeur: "Snapdragon 870",
      mémoire: 512,
      caméra: "Triple caméra 50 MP",
    },
    prix: 1199.99,
    disponible: true,
  },
  {
    _id: 15,
    nom: "XPhone Mini",
    marque: "XTech",
    caractéristiques: {
      écran: 5.4,
      processeur: "Snapdragon 690",
      mémoire: 64,
      caméra: "Double caméra 13 MP",
    },
    prix: 349.99,
    disponible: false,
  },
]);
1 -
  db.Article.aggregate([
    { $match: { disponible: true, "caractéristiques.écran": { $gte: 6.4 } } },
  ]);
2 -
  db.Article.aggregate([
    { $group: { _id: null, "Moyenne des prix": { $avg: "$prix" } } },
  ]);
3 -
  db.Article.aggregate([
    { $match: { disponible: true } },
    { $group: { _id: null, "Sommes des produits": { $sum: "$prix" } } },
    { $project: { _id: 0 } },
  ]);
4 -
  db.Article.aggregate([
    {
      $group: {
        _id: "$caractéristiques.écran",
        "Nombre des article": { $count: {} },
      },
    },
  ]);
5 -
  db.Article.aggregate([
    {
      $group: {
        _id: {
          écran: "$caractéristiques.écran",
          mémoire: "$caractéristiques.mémoire",
        },
        "Nombre des article": { $count: {} },
      },
    },
  ]);
6 -
  db.Article.aggregate(
    {
      $match: {
        "caractéristiques.processeur": /^Snapdragon/i,
        "caractéristiques.mémoire": { $gte: 64 },
      },
    },
    { $group: { _id: null, "Nombre des produits": { $count: {} } } }
  );

// Exercice 4
-db.Etudiant.insertMany([
  {
    _id: 1,
    nom: "Ali Kamel",
    age: 20,
    matieres: [
      { nom: "Mathématiques", note: 15 },
      { nom: "Histoire", note: 14 },
      { nom: "Informatique", note: 12 },
    ],
    adresse: "123 Rue Principale, Ville A",
  },
  {
    _id: 2,
    nom: "Sophie Martin",
    age: 22,
    matieres: [
      { nom: "Mathématiques", note: 18 },
      { nom: "Histoire", note: 12 },
      { nom: "Informatique", note: 16 },
    ],
    adresse: "456 Avenue B, Ville B",
  },
  {
    _id: 3,
    nom: "Mohamed Said",
    age: 21,
    matieres: [
      { nom: "Mathématiques", note: 10 },
      { nom: "Histoire", note: 13 },
      { nom: "Informatique", note: 19 },
    ],
    adresse: "789 Rue C, Ville C",
  },
  {
    _id: 4,
    nom: "Julie Durand",
    age: 19,
    matieres: [
      { nom: "Mathématiques", note: 14 },
      { nom: "Histoire", note: 17 },
      { nom: "Informatique", note: 15 },
    ],
    adresse: "1010 Boulevard D, Ville D",
  },
  {
    _id: 5,
    nom: "Karim Ahmed",
    age: 23,
    matieres: [
      { nom: "Mathématiques", note: 20 },
      { nom: "Histoire", note: 11 },
      { nom: "Informatique", note: 18 },
    ],
    adresse: "111 Rue E, Ville E",
  },
  {
    _id: 6,
    nom: "Laura Dupont",
    age: 20,
    matieres: [
      { nom: "Mathématiques", note: 12 },
      { nom: "Histoire", note: 16 },
      { nom: "Informatique", note: 14 },
    ],
    adresse: "222 Avenue F, Ville F",
  },
  {
    _id: 7,
    nom: "Omar Ben Salah",
    age: 24,
    matieres: [
      { nom: "Mathématiques", note: 17 },
      { nom: "Histoire", note: 15 },
      { nom: "Informatique", note: 19 },
    ],
    adresse: "333 Rue G, Ville G",
  },
  {
    _id: 8,
    nom: "Nadia Belkacem",
    age: 18,
    matieres: [
      { nom: "Mathématiques", note: 11 },
      { nom: "Histoire", note: 10 },
      { nom: "Informatique", note: 13 },
    ],
    adresse: "444 Boulevard H, Ville H",
  },
  {
    _id: 9,
    nom: "Lucas Bernard",
    age: 22,
    matieres: [
      { nom: "Mathématiques", note: 16 },
      { nom: "Histoire", note: 17 },
      { nom: "Informatique", note: 15 },
    ],
    adresse: "555 Rue I, Ville I",
  },
  {
    _id: 10,
    nom: "Fatima Zohra",
    age: 21,
    matieres: [
      { nom: "Mathématiques", note: 19 },
      { nom: "Histoire", note: 13 },
      { nom: "Informatique", note: 17 },
    ],
    adresse: "666 Avenue J, Ville J",
  },
  {
    _id: 11,
    nom: "Clara Lopez",
    age: 20,
    matieres: [
      { nom: "Mathématiques", note: 15 },
      { nom: "Histoire", note: 18 },
      { nom: "Informatique", note: 16 },
    ],
    adresse: "777 Rue K, Ville K",
  },
  {
    _id: 12,
    nom: "Youssef Benaissa",
    age: 25,
    matieres: [
      { nom: "Mathématiques", note: 10 },
      { nom: "Histoire", note: 14 },
      { nom: "Informatique", note: 18 },
    ],
    adresse: "888 Boulevard L, Ville L",
  },
  {
    _id: 13,
    nom: "Emma Rousseau",
    age: 19,
    matieres: [
      { nom: "Mathématiques", note: 13 },
      { nom: "Histoire", note: 12 },
      { nom: "Informatique", note: 11 },
    ],
    adresse: "999 Avenue M, Ville M",
  },
  {
    _id: 14,
    nom: "Amine El Madi",
    age: 23,
    matieres: [
      { nom: "Mathématiques", note: 17 },
      { nom: "Histoire", note: 16 },
      { nom: "Informatique", note: 20 },
    ],
    adresse: "101 Rue N, Ville N",
  },
  {
    _id: 15,
    nom: "Sarah Ben Ali",
    age: 22,
    matieres: [
      { nom: "Mathématiques", note: 14 },
      { nom: "Histoire", note: 12 },
      { nom: "Informatique", note: 15 },
    ],
    adresse: "202 Boulevard O, Ville O",
  },
]);
1 -
  db.Etudiant.aggregate([
    { $unwind: "$matieres" },
    {
      $group: { _id: "$_id", "Moyenne des notes": { $avg: "$matieres.note" } },
    },
    { $sort: { _id: 1 } },
  ]);
2 -
  db.Etudiant.aggregate([
    { $unwind: "$matieres" },
    {
      $group: { _id: "$_id", "Moyenne des notes": { $sum: "$matieres.note" } },
    },
    { $sort: { _id: 1 } },
  ]);
