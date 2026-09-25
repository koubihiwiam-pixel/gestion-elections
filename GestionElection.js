let prompt = require("prompt-sync")();
let candidats = [
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Independant",
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
        partiPolitique: "Independant",
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
        partiPolitique: "Independant",
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
        cin: "CN123231",
        nom: "Merzak",
        prenom: "Mostapha",
        partiPolitique: "Independant",
        age: 61,
        electeurs: []
    },
    {
        cin: "DC546738",
        nom: "El idrissi",
        prenom: "Fatiha",
        partiPolitique: "Independant",
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
        cin: "DC265396",
        nom: "Alami",
        prenom: "Maria",
        partiPolitique: "Independant",
        age: 41,
        electeurs: []
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
        partiPolitique: "Independant",
        age: 51,
        electeurs: []
    },
    {
        cin: "DN278676",
        nom: "Mahmoudi",
        prenom: "Alae",
        partiPolitique: "Independant",
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
        partiPolitique: "Independant",
        age: 25,
        electeurs: []
    },
    {
        cin: "HH509352",
        nom: "Zeroual",
        prenom: "Youssef",
        partiPolitique: "Independant",
        age: 48,
        electeurs: []
    }
]
//Pour ajouter un nouveau candidat

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
//Pour ajouter plusieur candidats
function AjouterPlusieurCandidat(candidat) {
    let nombre = +prompt("combien du candidat voulez-vous ajouter : ");
    for (let i = 0; i < nombre; i++) {
        AjouterCandidat(candidat)
    }
}
//Pour afficher la liste des candidats
function AfficherListeCandidats(candidat) {
    console.log("1 --> Affichage tri par nombre de vote  ");
    console.log("2 --> Affichage filtre par partie politique");
    let choix = prompt('ton choix : ');
    if (choix == 1) {
        for (let i = 0; i < candidat.length - 1; i++) {
            for (let j = 0; j < candidat.length - 1 - i; j++) {
                if (candidat[j].electeurs.length < candidat[j + 1].electeurs.length) {
                    let temp = candidat[j];
                    candidat[j] = candidat[j + 1];
                    candidat[j + 1] = temp;
                }
            }
        }
        for (let i = 0; i < candidat.length; i++) {
            console.log("Identifiant : ", candidat[i].cin);
            console.log("nom : ", candidat[i].nom);
            console.log("prénom : ", candidat[i].prenom);
            console.log("Parti politique : ", candidat[i].partiPolitique);
            console.log("Âge : ", candidat[i].age);
            console.log("Nombre de votes : ", candidat[i].electeurs.length);
        }
    }
    if (choix == 2) {
        let partpolitique = prompt("entrez la partie politique : ")
        for (let i = 0; i < candidat.length; i++) {
            if (candidat[i].partiPolitique == partpolitique) {
                console.log("Identifiant : ", candidat[i].cin);
                console.log("nom : ", candidat[i].nom);
                console.log("prénom : ", candidat[i].prenom);
                console.log("Parti politique : ", candidat[i].partiPolitique);
                console.log("Âge : ", candidat[i].age);
                console.log("Nombre de votes : ", candidat[i].electeurs.length);
            }

        }
    }
    else {
                console.log("choix invalide !");
            }


}





// menu principal
let choix;
while (choix != "0") {
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
        case "3":
            AfficherListeCandidats(candidats);
            break;

    }
}
