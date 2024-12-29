// Exercice 1:
1 -
  db.utilisateurs.insertOne({
    nom: "el gargati",
    prenom: "mohammed",
    age: 20,
    adresse: "marrakech",
  });

2 -
  db.utilisateurs.insertMany([
    {
      nom: "oussama",
      prenom: "ali",
      age: 25,
      adresse: "marrakech",
    },
    {
      nom: "soufiane",
      prenom: "hamid",
      age: 40,
      adresse: "marrakech",
    },
    {
      nom: "salah",
      prenom: "ayoub",
      age: 35,
      adresse: "marrakech",
    },
  ]);

3 - db.utilisateurs.deleteOne({ nom: "salah" });

4 - db.utilisateurs.deleteMany({ age: { $lt: 25 } });

5 - db.utilisateurs.updateOne({ nom: "oussama" }, { $set: { age: 21 } });

6 -
  db.utilisateurs.updateMany(
    { age: { $gt: 30 } },
    { $set: { "numero de telephone": "" } }
  );

7 -
  db.utilisateurs.updateMany(
    { $and: [{ age: { $lt: 30 } }, { age: { $gt: 20 } }] },
    { $set: { statu: "actif" } }
  );
-db.users.updateMany(
  {
    age: {
      $gte: 20,
      $lte: 30,
    },
  },
  { $set: { statu: "actif" } }
);

8 -
  db.utilisateurs.updateMany(
    { competences: { $ne: "JavaScript" } },
    { $addToSet: { competences: "JavaScript" } }
  );

-db.utilisateurs.updateMany(
  { competences: { $exists: true } },
  { $addToSet: { competences: "C" } }
);

2 -
  db.produits.updateMany({ nom: "Ordinateur Portable" }, [
    {
      $set: {
        prix: { $multiply: ["$prix", 0.9] },
      },
    },
  ]);

-db.produits.updateMany(
  { nom: "Ordinateur Portable" },
  { $mul: { prix: 0.9 } }
);

3 - db.produits.deleteMany({ quantiteEnStock: 0 });

4 -
  db.produits.updateMany(
    { nom: "Souris sans fil" },
    { $inc: { quantiteEnStock: 5 } }
  );

5 -
  db.produits.updateMany({ nom: "Stylo" }, { $addToSet: { couleurs: "Bleu" } });

6 -
  db.produits.updateMany({ description: "" }, { $unset: { description: "" } });

7 -
  db.produits.updateMany(
    { quantiteEnStock: { $gte: 10 } },
    { $set: { disponible: true } }
  );

8 -
  db.produits.deleteMany({
    $or: [
      { categorie: { $eq: "Vieux stock" } },
      { categorie: { $eq: "Epuise" } },
    ],
  });

// Exercice 3:

1 -
  db.evenements.insertMany([
    {
      nom: "Conference Developpement Web",
      date: new Date("2024-12-15"),
      categorie: "Conference",
      lieu: "Casablanca, Maroc",
      invites: ["Ahmed El Idrissi", "Youssef Benjelloun", "Khalid Amrani"],
    },
    {
      nom: "Atelier ReactJS",
      date: new Date("2024-12-20"),
      categorie: "Atelier",
      lieu: "Rabat, Maroc",
      invites: ["Fatima Zahra El Makhfi", "Omar Bensalem", "Mouna Fassi"],
    },
    {
      nom: "Hackathon Startups",
      date: new Date("2024-12-25"),
      categorie: "Hackathon",
      lieu: "Marrakech, Maroc",
      invites: ["Rachid El Hachimi", "Imane Bouzidi", "Sami Tazi"],
    },
  ]);

2 - db.evenements.updateMany({}, { $addToSet: { invites: "Ali" } });

3 - db.evenements.deleteMany({ invites: [] });

4 - db.evenements.updateMany({}, { $pull: { invites: "Ali" } });

5 - db.evenements.deleteMany({ categorie: "Annule" });

6 -
  db.evenements.deleteMany(
    { date: { $lt: new Date() } },
    { $unset: { lieu: "" } }
  );
