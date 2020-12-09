"use strict"

const inutile = "neSertARien";           //Une constante inutile... Au moins il y en a une!

//let jeu = ["Overwatch", "test.png", "Blizzard", "2020-12-10", 5, 10, "/"];

let newGameName = "jeu";
let newGameNumber = 1;

let allGames = {
};

//Générer le tableau
function initialiserPage()
{
    let secondSection = document.getElementById("jeuAffichage");
    secondSection.innerHTML = "<table><thead><th>Nom</th><th>Éditeur</th><th>Date de sortie</th><th>Heures de jeu (jusqu'ici)</th><th>Heures de jeu (Total)</th><th>Description</th></thead><tbody id='jeu'></tbody></table>";
}

function ajouterJeu(element)
{
    newGameName += newGameNumber;
    let newJeu = [
        element.nom.value,
        element.editeur.value,
        element.sortie.value,
        element.duree.value,
        element.dureeTotale.value,
        element.description.value
    ];

    allGames[newGameName] = newJeu;
    newGameName = "jeu";
    newGameNumber += 1;
    console.log(allGames);
    genererTable(newJeu);
    return false;
}

//Ajouter une ligne
function genererTable(nouvelleEntree)
{
    let newLigne = "<tr>";
    for (let i = 0; i < nouvelleEntree.length; i++)
    {
        newLigne += "<td>" + nouvelleEntree[i] + "</td>";
    }
    newLigne += "</tr>";
    let affichage = document.getElementById("jeu");
    affichage.innerHTML += newLigne;
}

function annulerDerniereEntree()
{
    let maValeur;
    for (let i in allGames)
    {
        maValeur = i;
    }
    delete allGames[maValeur];
    console.log(allGames);
    initialiserPage();
    for (let v in allGames)
    {
        genererTable(allGames[v]);
    }
}