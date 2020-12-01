"use strict"

const inutile = "neSertARien";           //Une constante inutile... Au moins il y en a une!

let jeu = ["Overwatch", "test.png", "Blizzard", "28-01-2020", 5, 10, "/"];

let newGameName = "jeu";
let newGameNumber = 2;

let allGames = {
    "jeu1": jeu
}

//Générer le tableau
function initialiserPage()
{
    let secondSection = document.getElementById("jeuAffichage");
    secondSection.innerHTML = "<table><thead><th>Nom</th><th>Image</th><th>Éditeur</th><th>Date de sortie</th><th>Heures de jeu (jusqu'ici)</th><th>Heures de jeu (Total)</th><th>Description</th></thead><tbody id='jeu'></tbody></table>";
    genererTable();
}

function ajouterJeu(element)
{
    newGameName += newGameNumber;


}


//Ajouter une ligne
function genererTable()
{
    let newLigne = "<tr>";
    for (let i = 0; i < jeu.length; i++)
    {
        newLigne += "<td>" + jeu[i] + "</td>";
    }
    newLigne += "</tr>";
    let affichage = document.getElementById("jeu");
    affichage.innerHTML += newLigne;
}