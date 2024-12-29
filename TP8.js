// Exercice 1:
db.utilisateurs.insertMany([
  {
    id: 1,
    nom: "El Haddadi",
    prenom: "Yassine",
    age: 28,
    email: "yassine.elhaddadi@gmail.com",
    profil: "Developpeur Web",
  },
  {
    id: 2,
    nom: "Bennani",
    prenom: "Amal",
    age: 32,
    email: "amal.bennani@hotmail.com",
    profil: "Graphiste",
  },
  {
    id: 3,
    nom: "Zaidi",
    prenom: "Mohamed",
    age: 25,
    email: "mohamed.zaidi@yahoo.com",
    profil: "Ingenieur Reseaux",
  },
  {
    id: 4,
    nom: "Essadik",
    prenom: "Khadija",
    age: 30,
    email: "khadija.essadik@gmail.com",
    profil: "Chef de Projet",
  },
  {
    id: 5,
    nom: "Rami",
    prenom: "Ahmed",
    age: 27,
    email: "ahmed.rami@outlook.com",
    profil: "Designer UX/UI",
  },
  {
    id: 6,
    nom: "Fassi",
    prenom: "Fatima",
    age: 35,
    email: "fatima.fassi@gmail.com",
    profil: "Consultante Marketing",
  },
  {
    id: 7,
    nom: "El Amrani",
    prenom: "Hicham",
    age: 29,
    email: "hicham.elamrani@gmail.com",
    profil: "Analyste Donnees",
  },
  {
    id: 8,
    nom: "Boussaid",
    prenom: "Noura",
    age: 24,
    email: "noura.boussaid@gmail.com",
    profil: "Etudiante",
  },
  {
    id: 9,
    nom: "Taleb",
    prenom: "Ibrahim",
    age: 40,
    email: "ibrahim.taleb@gmail.com",
    profil: "Professeur",
  },
  {
    id: 10,
    nom: "Jabiri",
    prenom: "Sara",
    age: 22,
    email: "sara.jabiri@gmail.com",
    profil: "Freelance",
  },
]);

2 - db.utilisateurs.find({});

3 - db.utilisateurs.find({ age: { $gte: 40 } });

4 - db.utilisateurs.find({ nom: { $regex: /^J*/ } });

5 - db.utilisateurs.find({ email: { $regex: "gmail", $options: "i" } });

6 - db.utilisateurs.find({ age: { $gte: 25, $lte: 35 } });

7 - db.utilisateurs.find({ profil: "JavaScript" });
7 - db.utilisateurs.find({ profil: { $regex: "JavaScript", $options: "i" } });

8 - db.utilisateurs.find({}, { nom: 1, email: 1, _id: 0 });

9 - db.utilisateurs.find().sort({ age: -1 });

10 - db.utilisateurs.find().limit(3);

11 - db.utilisateurs.countDocuments({ profil: "Node.js" });

12 - db.utilisateurs.distinct("profil");

// Exercice 2

1 -
  db.articles.insertMany([
    {
      id: 1,
      nom: "Smartphone Atlas",
      marque: "TeckGo",
      caractéristiques: {
        écran: 6.5,
        processeur: "Mediatek P90",
        mémoire: 128,
        caméra: "48 MP",
      },
      prix: 1999.99,
      disponible: true,
    },
    {
      id: 2,
      nom: "Laptop Sahra",
      marque: "MarocPC",
      caractéristiques: {
        écran: 15.6,
        processeur: "Intel Core i5",
        mémoire: 256,
        caméra: "HD",
      },
      prix: 7499.99,
      disponible: false,
    },
    {
      id: 3,
      nom: "TV Amazigh",
      marque: "ElectroMaroc",
      caractéristiques: {
        écran: 55,
        processeur: "Quad-Core",
        mémoire: 8,
        caméra: "None",
      },
      prix: 5999.99,
      disponible: true,
    },
  ]);

2 - db.articles.find({ marque: "TeckGo" });

3 - db.articles.find({ marque: "ElectroMaroc", disponible: true });

4 - db.articles.find({ disponible: true, prix: { $lt: 1000 } });

5 - db.articles.find({ marque: "TeckGo", prix: { $gte: 500, $lte: 1000 } });

6 - db.articles.find({ "caractéristiques.écran": { $gt: 15 } });

7 - db.articles.find({ "caractéristiques.mémoire": 512 });

8 - db.articles.find({ "caractéristiques.processeur": "Intel Core i7" });

9 - db.articles.find({ marque: { $not: /Tech/ } });

10 - db.articles.find().sort({ prix: 1 });

11 - db.articles.find().sort({ marque: -1 }).limit(5);

12 - db.articles.distinct("marque").sort();

13 - db.articles.countDocuments({ disponible: true });

14 - db.articles.find().sort({ disponible: -1, prix: 1 }).limit(10);

// Exercice 3
1 -
  db.livres.insertMany([
    {
      id: 1,
      titre: "L'Etranger",
      auteur: "Albert Camus",
      annéePublication: 1942,
      genres: ["Roman", "Philosophie"],
      critiques: [
        { nom: "CritiqueA", note: 4.5 },
        { nom: "CritiqueB", note: 3.8 },
      ],
    },
    {
      id: 2,
      titre: "1984",
      auteur: "George Orwell",
      annéePublication: 1949,
      genres: ["Science-Fiction", "Politique"],
      critiques: [{ nom: "CritiqueC", note: 4.7 }],
    },
    {
      id: 3,
      titre: "La Boîte à merveilles",
      auteur: "Ahmed Sefrioui",
      annéePublication: 1954,
      genres: ["Roman", "Autobiographie"],
      critiques: [],
    },
  ]);
-db.livres.insertMany([
  {
    id: 4,
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    annéePublication: 1943,
    genres: ["Conte", "Philosophie"],
    critiques: [
      { nom: "CritiqueD", note: 4.9 },
      { nom: "CritiqueE", note: 4.8 },
    ],
  },
  {
    id: 5,
    titre: "Crime et Châtiment",
    auteur: "Fiodor Dostoïevski",
    annéePublication: 1866,
    genres: ["Roman", "Psychologie"],
    critiques: [
      { nom: "CritiqueF", note: 4.6 },
      { nom: "CritiqueG", note: 4.4 },
    ],
  },
  {
    id: 6,
    titre: "Moby Dick",
    auteur: "Herman Melville",
    annéePublication: 1851,
    genres: ["Aventure", "Classique"],
    critiques: [{ nom: "CritiqueH", note: 4.3 }],
  },
  {
    id: 7,
    titre: "Fahrenheit 451",
    auteur: "Ray Bradbury",
    annéePublication: 1953,
    genres: ["Science-Fiction", "Dystopie"],
    critiques: [
      { nom: "CritiqueI", note: 4.5 },
      { nom: "CritiqueJ", note: 4.2 },
    ],
  },
  {
    id: 8,
    titre: "Les Misérables",
    auteur: "Victor Hugo",
    annéePublication: 1862,
    genres: ["Roman", "Historique"],
    critiques: [
      { nom: "CritiqueK", note: 4.8 },
      { nom: "CritiqueL", note: 4.7 },
    ],
  },
]);

2 - db.livres.find({ auteur: "George Orwell" });

3 - db.livres.find({ annéePublication: { $lt: 1950 } });

4 - db.livres.find({ genres: "Science-Fiction" });

5 - db.livres.find({ critiques: { $elemMatch: { note: 4.7 } } });

6 - db.livres.find({ critiques: { $elemMatch: { note: { $gt: 4 } } } });

7 - db.livres.find({ annéePublication: 1942, genres: "Roman" });

8 - db.livres.find({ $where: "this.genres.length > 1" });
db.livres.find({ "genres.1": { $exists: true } });

9 - db.livres.find({ critiques: { $size: 0 } });
db.livres.find({ "critiques.0": { $exists: false } });
10 - db.livres.find({ critiques: { $size: { $gt: 1 } } });

11 - db.livres.distinct("genres");

12 -
  db.livres.aggregate([
    { $unwind: "$critiques" },
    { $sort: { "critiques.note": -1 } },
  ]);

13 -
  db.livres.aggregate([
    { $addFields: { nb_critiques: { $size: "$critiques" } } },
    { $match: { "critiques.note": { $gt: 3 } } },
    { $sort: { nb_critiques: -1 } },
    { $limit: 3 },
  ]);

14 - db.livres.countDocuments({ annéePublication: { $lt: 1950 } });

15 - db.livres.countDocuments({ critiques: { $size: { $gte: 2 } } });
