"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stagiaire_1 = require("./stagiaire");
var formation_1 = require("./formation");
//création stagiaires + notes
var stagiaire1 = new stagiaire_1.Stagiaire("A", [8, 9, 10, 11]);
var stagiaire2 = new stagiaire_1.Stagiaire("B", [12, 14, 13, 11]);
console.log("TESTS CLASS STAGIAIRE\n");
//test méthodes stagiaire
console.log("\nSTAGIAIRE 1");
console.log("Nom : " + stagiaire1.getNom());
console.log("Notes : " + stagiaire1.getNotes());
console.log("Moyenne : " + stagiaire1.calculerMoyenne());
console.log("Note max : " + stagiaire1.trouverMax());
console.log("Note min : " + stagiaire1.trouverMin());
console.log("\nSTAGIAIRE 2");
console.log("Nom : " + stagiaire2.getNom());
console.log("Notes : " + stagiaire2.getNotes());
console.log("Moyenne : " + stagiaire2.calculerMoyenne());
console.log("Note max : " + stagiaire2.trouverMax());
console.log("Note min : " + stagiaire2.trouverMin());
//création formation avec stagiaires
var formation = new formation_1.Formation("Développement Front-End", 50, [
    stagiaire1,
    stagiaire2,
]);
console.log("\n\n TESTS CLASSE FORMATION\n");
//test getters formation
console.log("Intitulé : " + formation.getIntitule());
console.log("Nombre de jours : " + formation.getNbrJours());
console.log("Nombre de stagiaires : " + formation.getStagiaires().length);
//test calculerMoyenneFormation()
console.log("\nMoyenne de la formation : " + formation.calculerMoyenneFormation());
//test getIndexMax()
console.log("\nIndice du meilleur stagiaire : " + formation.getIndexMax());
//test afficherNomMax()
console.log();
formation.afficherNomMax();
//test afficherMinMax()
formation.afficherMinMax();
//test trouverMoyenneParNom()
console.log("\nRECHERCHE PAR NOM\n");
formation.trouverMoyenneParNom("A");
formation.trouverMoyenneParNom("B");
