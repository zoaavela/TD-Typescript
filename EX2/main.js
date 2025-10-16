"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
var stagiaire_1 = require("./stagiaire");
var formation_1 = require("./formation");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        console.log("TESTS CLASS STAGIAIRE\n");
        var stagiaire1 = new stagiaire_1.Stagiaire("Alice", [8, 9, 10, 11]);
        var stagiaire2 = new stagiaire_1.Stagiaire("Claudio Beauvue", [12, 14, 13, 11]);
        var stagiaire3 = new stagiaire_1.Stagiaire("Cristiano Ronaldo", [12, 14, 13, 11]);
        var stagiaires = [stagiaire1, stagiaire2, stagiaire3];
        var formation = new formation_1.Formation("Développement Front-End", 50, [
            stagiaire1,
            stagiaire2,
        ]);
        console.log("\n INFORMATIONS");
        console.log("Formation: ".concat(formation.getIntitule()));
        console.log("Dur\u00E9e: ".concat(formation.getNbrJours(), " jours"));
        console.log("Nombre de stagiaires: ".concat(formation.getStagiaires().length));
        console.log("\n LISTE DES STAGIAIRES");
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
        formation.trouverMoyenneParNom("Alice");
        formation.trouverMoyenneParNom("Claudio Beauvue");
    };
    return Main;
}());
exports.Main = Main;
Main.main();
