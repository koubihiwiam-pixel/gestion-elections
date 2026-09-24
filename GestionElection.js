let prompt = require("prompt-sync")();
let candidats = [
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Indépendant",
        age: 40,
        electeurs: []
    },
    {
        cin: "HH190923",
        nom: "Koubihi",
        prenom: "Wiam",
        partiPolitique: "RNI",
        age: 22,
        electeurs: ["AB123456", "DC635473", "HH509352"]
    },
    {
        cin: "HH178356",
        nom: "El glouani",
        prenom: "Rabiaa",
        partiPolitique: "Indépendant",
        age: 30,
        electeurs: []
    },
    {
        cin: "AB763894",
        nom: "El othmani",
        prenom: "Khalid",
        partiPolitique: "PAM",
        age: 33,
        electeurs: []
    },
    {
        cin: "DC635473",
        nom: "Mebrouki",
        prenom: "Abd slam",
        partiPolitique: "Indépendant",
        age: 45,
        electeurs: []
    },
    {
        cin: "SD647583",
        nom: "Berada",
        prenom: "Monir",
        partiPolitique: "PI",
        age: 29,
        electeurs: ["HH178356"]
    },
    {
        cin: "DC546738",
        nom: "El idrissi",
        prenom: "Fatiha",
        partiPolitique: "Indépendant",
        age: 28,
        electeurs: []
    },
    {
        cin: "HH376290",
        nom: "Benchakroun",
        prenom: "Ibrahim",
        partiPolitique: "PAM",
        age: 36,
        electeurs: ["DN278676"]
    },
    {
        cin: "SD364789",
        nom: "Wadaa",
        prenom: "Aya",
        partiPolitique: "RNI",
        age: 44,
        electeurs: ["DN674853", "DC546738"]
    },
    {
        cin: "HH839462",
        nom: "Elmajhad",
        prenom: "Ayoub",
        partiPolitique: "RNI",
        age: 19,
        electeurs: ["HH973527"]
    },
    {
        cin: "DN674853",
        nom: "Amrani",
        prenom: "Moad",
        partiPolitique: "Indépendant",
        age: 51,
        electeurs: []
    },
    {
        cin: "DN278676",
        nom: "Mahmoudi",
        prenom: "Alae",
        partiPolitique: "Indépendant",
        age: 37,
        electeurs: []
    },
    {
        cin: "CD456372",
        nom: "bouanani",
        prenom: "Wiam",
        partiPolitique: "PAM",
        age: 20,
        electeurs: ["DC265396", "CN123231"]
    },
    {
        cin: "HH973527",
        nom: "Benzima",
        prenom: "Leila",
        partiPolitique: "Indépendant",
        age: 25,
        electeurs: []
    },
    {
        cin: "DC265396",
        nom: "Alami",
        prenom: "Maria",
        partiPolitique: "Indépendant",
        age: 41,
        electeurs: []
    },
    {
        cin: "CN123231",
        nom: "Merzak",
        prenom: "Mostapha",
        partiPolitique: "Indépendant",
        age: 61,
        electeurs: []
    },
    {
        cin: "HH509352",
        nom: "Zeroual",
        prenom: "Youssef",
        partiPolitique: "Indépendant",
        age: 48,
        electeurs: []
    }
]
function AjouterCandidat(candidat) {
    let obj = {};
    let cin = prompt('entrez CIN de candidat : ');
    let nom = prompt('entrez le nom de candidat: ');
    let prenom = prompt('entrez le prenom : ');
    let partipolitique = prompt('quel partie politique : ');
    let age = +prompt("l'age : ");
    let index = candidats.findIndex(function (c) {
        return c.cin === cin;
    });
    if (index === -1) {

        obj.cin = cin;
        obj.nom = nom;
        obj.prenom = prenom;
        obj.partiPolitique = partipolitique;
        obj.age = age;
        obj.electeurs = [];
        candidat.push(obj);
        console.log("Le candidat a été ajouté avec succès");
    } else {
        console.log("Ce CIN existe déjà");
    }

}
function AjouterPlusieurCandidat(candidat) {
    let nombre = +prompt("combien du candidat voulez-vous ajouter : ");
    for (let i = 0; i < nombre; i++) {
        AjouterCandidat(candidat)
    }
}






let choix;
while (choix !== "0") {
    console.log("*********************************");
    console.log("      GESTION DES ÉLECTIONS      ");
    console.log("*********************************");
    console.log("1 --> Ajouter un nouveau candidat");
    console.log("2 --> Ajouter plusieurs candidats ");
    console.log("3 --> Afficher la liste des candidats");
    console.log("4 --> Voter pour un candidat");
    console.log("5 --> Modifier les informations d'un candidat");
    console.log("6 --> Supprimer un candidat");
    console.log("7 --> Rechercher des candidats");
    console.log("8 --> Statistiques de l'élection");
    console.log("0 --> Quitter");

    choix = prompt("Votre choix : ");
    switch (choix) {
        case "1":
            AjouterCandidat(candidats);
            break;

        case "2":
            AjouterPlusieurCandidat(candidats);
            break;
        default:
            console.log("Choix invalide !");

    }
}
