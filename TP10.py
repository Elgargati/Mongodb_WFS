# -db.livres.insertMany([
#   {
#     "_id": 1,
#     "titre": "Le Petit Prince",
#     "auteur": "Antoine de Saint-Exupéry",
#     "annee_publication": 1943,
#     "genres": ["Fiction", "Jeunesse"],
#     "exemplaires": [
#       {"numero": 1, "disponible": true},
#       {"numero": 2, "disponible": false},
#       {"numero": 3, "disponible": true}
#     ]
#   },
#   {
#     "_id": 2,
#     "titre": "1984",
#     "auteur": "George Orwell",
#     "annee_publication": 1949,
#     "genres": ["Dystopie", "Politique"],
#     "exemplaires": [
#       {"numero": 1, "disponible": true},
#       {"numero": 2, "disponible": true}
#     ]
#   },
#   {
#     "_id": 3,
#     "titre": "Harry Potter à l'école des sorciers",
#     "auteur": "J.K. Rowling",
#     "annee_publication": 1997,
#     "genres": ["Fantastique", "Jeunesse"],
#     "exemplaires": [
#       {"numero": 1, "disponible": false},
#       {"numero": 2, "disponible": true},
#       {"numero": 3, "disponible": false}
#     ]
#   },
#   {
#     "_id": 4,
#     "titre": "Les Misérables",
#     "auteur": "Victor Hugo",
#     "annee_publication": 1862,
#     "genres": ["Classique", "Historique"],
#     "exemplaires": [
#       {"numero": 1, "disponible": true}
#     ]
#   },
#   {
#     "_id": 5,
#     "titre": "La Peste",
#     "auteur": "Albert Camus",
#     "annee_publication": 1947,
#     "genres": ["Philosophie", "Fiction"],
#     "exemplaires": [
#       {"numero": 1, "disponible": true},
#       {"numero": 2, "disponible": false}
#     ]
#   },
#   {
#     "_id": 6,
#     "titre": "Don Quichotte",
#     "auteur": "Miguel de Cervantes",
#     "annee_publication": 1605,
#     "genres": ["Classique", "Aventure"],
#     "exemplaires": [
#       {"numero": 1, "disponible": true}
#     ]
#   },
#   {
#     "_id": 7,
#     "titre": "L'Étranger",
#     "auteur": "Albert Camus",
#     "annee_publication": 1942,
#     "genres": ["Philosophie", "Roman"],
#     "exemplaires": [
#       {"numero": 1, "disponible": true},
#       {"numero": 2, "disponible": true}
#     ]
#   },
#   {
#     "_id": 8,
#     "titre": "Madame Bovary",
#     "auteur": "Gustave Flaubert",
#     "annee_publication": 1857,
#     "genres": ["Roman", "Classique"],
#     "exemplaires": [
#       {"numero": 1, "disponible": false}
#     ]
#   },
#   {
#     "_id": 9,
#     "titre": "Fahrenheit 451",
#     "auteur": "Ray Bradbury",
#     "annee_publication": 1953,
#     "genres": ["Science-Fiction", "Dystopie"],
#     "exemplaires": [
#       {"numero": 1, "disponible": true},
#       {"numero": 2, "disponible": false}
#     ]
#   },
#   {
#     "_id": 10,
#     "titre": "Crime et Châtiment",
#     "auteur": "Fiodor Dostoïevski",
#     "annee_publication": 1866,
#     "genres": ["Classique", "Philosophie"],
#     "exemplaires": [
#       {"numero": 1, "disponible": true},
#       {"numero": 2, "disponible": true}
#     ]
#   },
#   {
#     "_id": 11,
#     "titre": "L'Odyssée",
#     "auteur": "Homère",
#     "annee_publication": -800,
#     "genres": ["Épopée", "Aventure"],
#     "exemplaires": [
#       {"numero": 1, "disponible": true}
#     ]
#   },
#   {
#     "_id": 12,
#     "titre": "La Divine Comédie",
#     "auteur": "Dante Alighieri",
#     "annee_publication": 1320,
#     "genres": ["Poésie", "Classique"],
#     "exemplaires": [
#       {"numero": 1, "disponible": true}
#     ]
#   },
#   {
#     "_id": 13,
#     "titre": "Moby Dick",
#     "auteur": "Herman Melville",
#     "annee_publication": 1851,
#     "genres": ["Aventure", "Classique"],
#     "exemplaires": [
#       {"numero": 1, "disponible": true},
#       {"numero": 2, "disponible": false}
#     ]
#   },
#   {
#     "_id": 14,
#     "titre": "Jane Eyre",
#     "auteur": "Charlotte Brontë",
#     "annee_publication": 1847,
#     "genres": ["Roman", "Classique"],
#     "exemplaires": [
#       {"numero": 1, "disponible": false},
#       {"numero": 2, "disponible": true}
#     ]
#   },
#   {
#     "_id": 15,
#     "titre": "Dracula",
#     "auteur": "Bram Stoker",
#     "annee_publication": 1897,
#     "genres": ["Horreur", "Fantastique"],
#     "exemplaires": [
#       {"numero": 1, "disponible": true}
#     ]
#   }
# ]
# );


# Q1
from pymongo import MongoClient
client =MongoClient("mongodb://localhost:27017");
# print(client)
db =client.rh4
collection =db.livres

# Q2

# document = [ {
#         "_id": 16,
#         "titre": "Le Comte de Monte-Cristo",
#         "auteur": "Alexandre Dumas",
#         "annee_publication": 1844,
#         "genres": ["Aventure", "Historique"],
#         "exemplaires": [
#         {"numero": 1, "disponible": True},
#         {"numero": 2, "disponible": False}
#         ]
#     },
#     {
#         "_id": 17,
#         "titre": "Le Rouge et le Noir",
#         "auteur": "Stendhal",
#         "annee_publication": 1830,
#         "genres": ["Roman", "Classique"],
#         "exemplaires": [
#         {"numero": 1, "disponible": True}
#         ]
#     },
#     {
#         "_id": 18,
#         "titre": "Les Fleurs du Mal",
#         "auteur": "Charles Baudelaire",
#         "annee_publication": 1857,
#         "genres": ["Poésie", "Classique"],
#         "exemplaires": [
#         {"numero": 1, "disponible": False},
#         {"numero": 2, "disponible": True}
#         ]
#     }]
# try: 
#     collection.insert_many(document);
#     print("documents inserer")
# except Exception as e:
#     print("Erreur lors de l'insertion")


# Q3
# result= collection.aggregate([{"$project": {"_id": 0,  "titre": 1,"auteur": 1,"annee_publication": 1}}]);
# lisRes=list(result)
# for e in lisRes:
#     print(e)

# Q4
# result=collection.aggregate([{"$sort":{"annee_publication":1}},{"$limit":5}])
# lisRes=list(result)
# for e in lisRes:
#     print(e)

# Q5
# result=collection.aggregate([{"$limit":2}])
# lisRes=list(result)
# for e in lisRes:
#     print(e)

# Q6
# auteur=input("donner le nom de l'auteur");
# result=collection.aggregate([{"$match":{"auteur":auteur}}])
# lisRes=list(result)
# if(len(lisRes)!=0):
#     for e in lisRes:
#         print(e)
# else:
#     print("Aucun");

# Q7
# id_livre = 16

# try:
#     collection.update_one(
#         {"_id": id_livre, "exemplaires.numero": 2},  
#         {"$set": {"exemplaires.$.disponible": True}} 
#     )
#     print("Statut de disponibilité mis à jour avec succès.")
# except Exception as e:
#     print("Error de modification")

# Q8
# date_limite = 1320
# date_limite = int(input("donner le annee"));
# resultat = collection.delete_many({"annee_publication": {"$lt": date_limite}})
# print("Bien supprimer")

# Q9
# resultat = collection.aggregate([{"$group":{"_id":{},"Nombre totale des livres":{"$count":{}}}},{"$project":{"_id":0}}])
# for e in resultat:
#     print(e);

# Q10
# genre = input("Donner un genre de livre ) : ")
# resultats = collection.aggregate([{"$match": {"genres": genre, "exemplaires.disponible": True  }}])
# lisRes=list(resultats)
# if(len(lisRes)>0):
#     for livre in lisRes:
#         print(livre);
# else:
#     print("Aucun");

# Q11
# resultat=collection.aggregate([{"$group":{"_id":"$auteur","Nombre des livre":{"$count":{}}}},{"$project":{"_id":0,"Auteur":"$_id","Nombre des livre":1}}]);
# for e in resultat:
#     print(e);

