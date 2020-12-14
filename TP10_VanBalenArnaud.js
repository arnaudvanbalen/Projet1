"use strict"

/**
 * Fonction permettant de générer une ligne du tableau à partir d'un Array fournit
 *
 * @param {array} L'array dont la ligne va être créer
 */

/**
 * Fonction permettant d'ajouter une ligne de donnée sur base des informations reçues via
 * le formulaire, de d'abord les mettre dans un array pour ensuite les ajouter
 * à l'objet global
 *
 * @param {form} L'accès à l'ensemble des données récoltées via le formulaire
 * @return {boolean} false: On ne souhaite pas envoyer le formulaire
 */



const inutile = "neSertARienPourLInstant";           //Une constante inutile... Au moins il y en a une...

//let jeu = ["jeu1", S"Overwatch", "Blizzard", "2020-12-10", 5, 10, "/"];

let newGameName = "jeu";
let newGameNumber = 1;

let allGames = {
};

//Générer le tableau
function initialiserPage()
{
    let secondSection = document.getElementById("jeuAffichage");
    secondSection.innerHTML = "<table><thead><th>Code</th><th>Nom</th><th>Éditeur</th><th>Date de sortie</th><th>Heures de jeu (jusqu'ici)</th><th>Heures de jeu (Total)</th><th>Description</th></thead><tbody id='jeu'></tbody></table>";
}

function ajouterJeu(element)
{
    newGameName += newGameNumber;
    let newJeu = [
        newGameName,
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
    initialiserPage();
    for (let v in allGames)
    {
        genererTable(allGames[v]);
    }
}

function marquerJeuTermine()
{
    for (let k in allGames)
    {
        if (k == document.getElementById("nomJeuTermine").value)
        {
            delete allGames[k];
            console.log(allGames);
            initialiserPage();
            for (let k in allGames)
            {
                genererTable(allGames[k]);
            }
        }
    }
}

/*
function afficherDureeTotaleJeu()
{
    let mesValeurs = Object.values((allGames));
    console.log(mesValeurs);
    let totalHeures = 0;
    let (var j = 0; j <= mesValeurs.length; j++)
    {
        totalHeures += mesValeurs[j][5];
    }
    console.log(totalHeures);
}
*/
//Cette fonction cause des problèmes à cause du "use strict" mais je ne comprend pas pourquoi...
//Lorsque cette fonction est active, la console me dit que d'autres fonctions ne sont pas définies...Pour aucune raison apparente.
