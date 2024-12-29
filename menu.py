from pymongo import MongoClient
from datetime import datetime


def connecter_mongodb():
    try:
        client = MongoClient("mongodb://localhost:27017/")
        db = client.rh4  
        collection = db.livres
        print("Connexion réussie à la base de données MongoDB")
        return collection
    except Exception as e:
        print(f"Erreur de connexion à MongoDB : {e}")
        return None


def inserer_livres(collection):
    livres = [
        {"titre": "Le Comte de Monte-Cristo", "auteur": "Alexandre Dumas", "annee_publication": 1844, "genres": ["Aventure", "Historique"], "exemplaires": [{"numero": 1, "disponible": True}, {"numero": 2, "disponible": False}]},
        {"titre": "Le Rouge et le Noir", "auteur": "Stendhal", "annee_publication": 1830, "genres": ["Roman", "Classique"], "exemplaires": [{"numero": 1, "disponible": True}]},
        {"titre": "Les Fleurs du Mal", "auteur": "Charles Baudelaire", "annee_publication": 1857, "genres": ["Poésie", "Classique"], "exemplaires": [{"numero": 1, "disponible": False}, {"numero": 2, "disponible": True}]}
    ]
    try:
        collection.insert_many(livres)
        print("Livres insérés avec succès.")
    except Exception as e:
        print(f"Erreur lors de l'insertion des livres : {e}")


def projection_livres(collection):
    try:
        resultats = collection.find({}, {"_id": 0, "titre": 1, "auteur": 1, "annee_publication": 1})
        for livre in resultats:
            print(livre)
    except Exception as e:
        print(f"Erreur lors de la projection des livres : {e}")


def trier_livres(collection):
    try:
        resultats = collection.find({}).sort("annee_publication", -1)
        for livre in resultats:
            print(livre)
    except Exception as e:
        print(f"Erreur lors du tri des livres : {e}")


def limiter_livres(collection):
    try:
        resultats = collection.find({}).limit(2)
        for livre in resultats:
            print(livre)
    except Exception as e:
        print(f"Erreur lors de la limitation des résultats : {e}")


def recherche_auteur(collection):
    auteur = input("Entrez le nom de l'auteur : ")
    try:
        resultats = collection.find({"auteur": auteur})
        for livre in resultats:
            print(livre)
    except Exception as e:
        print(f"Erreur lors de la recherche des livres par auteur : {e}")


def mise_a_jour_exemplaire(collection):
    livre_id = int(input("Entrez l'ID du livre à mettre à jour : "))
    try:
        collection.update_one(
            {"_id": livre_id, "exemplaires.numero": 2},
            {"$set": {"exemplaires.$.disponible": True}}
        )
        print(f"Le deuxième exemplaire du livre avec l'ID {livre_id} est maintenant disponible.")
    except Exception as e:
        print(f"Erreur lors de la mise à jour du livre : {e}")


def suppression_livres(collection):
    annee = int(input("Entrez l'année limite pour la suppression des livres : "))
    try:
        resultats = collection.delete_many({"annee_publication": {"$lt": annee}})
        print(f"{resultats.deleted_count} livres supprimés.")
    except Exception as e:
        print(f"Erreur lors de la suppression des livres : {e}")


def compter_livres(collection):
    try:
        count = collection.count_documents({})
        print(f"Il y a {count} livres dans la collection.")
    except Exception as e:
        print(f"Erreur lors du comptage des livres : {e}")


def recherche_filtre_genre(collection):
    genre = input("Entrez un genre de livre : ")
    try:
        resultats = collection.find({"genres": genre, "exemplaires.disponible": True})
        for livre in resultats:
            print(livre)
    except Exception as e:
        print(f"Erreur lors de la recherche des livres par genre : {e}")


def groupement_comptage(collection):
    try:
        resultats = collection.aggregate([
            {"$group": {"_id": "$auteur", "nombre_livres": {"$sum": 1}}}
        ])
        for resultat in resultats:
            print(f"Auteur : {resultat['_id']}, Nombre de livres : {resultat['nombre_livres']}")
    except Exception as e:
        print(f"Erreur lors du groupement et comptage des livres : {e}")


def afficher_menu():
    print("\nMenu :")
    print("1. Connexion à la base de données")
    print("2. Insertion de documents")
    print("3. Projection de champs")
    print("4. Tri des résultats")
    print("5. Limitation des résultats")
    print("6. Recherche de livres par auteur")
    print("7. Mise à jour de documents")
    print("8. Suppression de documents")
    print("9. Affichage du nombre de livres")
    print("10. Recherche avec filtre complexe")
    print("11. Groupement et comptage des livres")
    print("12. Quitter")

def menu():
    collection = None
    while True:
        afficher_menu()
        choix = int(input("Choisissez une option : "))

        try:
            if choix == 1:
                collection = connecter_mongodb()
            elif choix == 2 and collection:
                inserer_livres(collection)
            elif choix == 3 and collection:
                projection_livres(collection)
            elif choix == 4 and collection:
                trier_livres(collection)
            elif choix == 5 and collection:
                limiter_livres(collection)
            elif choix == 6 and collection:
                recherche_auteur(collection)
            elif choix == 7 and collection:
                mise_a_jour_exemplaire(collection)
            elif choix == 8 and collection:
                suppression_livres(collection)
            elif choix == 9 and collection:
                compter_livres(collection)
            elif choix == 10 and collection:
                recherche_filtre_genre(collection)
            elif choix == 11 and collection:
                groupement_comptage(collection)
            elif choix == 12:
                print("Au revoir !")
                break
            else:
                print("Option invalide ou vous devez vous connecter à la base de données.")
        except Exception as e:
            print(f"Erreur : {e}")


if __name__ == "__main__":
    menu()
