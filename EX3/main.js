"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adresse_1 = require("./adresse");
var personne_1 = require("./personne");
var listepersonnes_1 = require("./listepersonnes");
// Création d'adresses
var adresses1 = [
    new adresse_1.Adresse("123 Rue Principale", "Paris", "75001"),
    new adresse_1.Adresse("456 Avenue des Champs", "Lyon", "69001")
];
var adresses2 = [
    new adresse_1.Adresse("789 Boulevard Central", "Paris", "75002")
];
var adresses3 = [
    new adresse_1.Adresse("321 Rue du Commerce", "Marseille", "13001")
];
// Création de personnes
var personnes = [
    new personne_1.Personne("Dupont", "M", adresses1),
    new personne_1.Personne("Martin", "F", adresses2),
    new personne_1.Personne("Bernard", "M", adresses3)
];
// Création de la liste de personnes
var liste = new listepersonnes_1.ListePersonnes(personnes);
// Tests des méthodes
console.log("=== Tests des méthodes ===");
// 3. Test de la méthode findByNom
var personneTrouvee = liste.findByNom("Dupont");
console.log("Recherche Dupont:", personneTrouvee ? "Trouvé" : "Non trouvé");
// 4. Test de la méthode findByCodePostal
console.log("Code postal 75001 existe:", liste.findByCodePostal("75001"));
console.log("Code postal 00000 existe:", liste.findByCodePostal("00000"));
// 5. Test de la méthode countPersonneVille
console.log("Personnes à Paris:", liste.countPersonneVille("Paris"));
console.log("Personnes à Lyon:", liste.countPersonneVille("Lyon"));
// 6. Test de la méthode editPersonneNom
console.log("\nAvant modification - Nom Dupont:", liste.findByNom("Dupont") !== null);
liste.editPersonneNom("Dupont", "Durand");
console.log("Après modification - Nom Dupont:", liste.findByNom("Dupont") !== null);
console.log("Après modification - Nom Durand:", liste.findByNom("Durand") !== null);
// 7. Test de la méthode editPersonneVille
console.log("\nAvant modification - Ville de Martin:");
var martinAvant = liste.findByNom("Martin");
if (martinAvant) {
    console.log("Adresses:", martinAvant.adresses.map(function (a) { return "".concat(a.rue, ", ").concat(a.ville, " ").concat(a.codePostal); }));
}
liste.editPersonneVille("Martin", "Nice");
console.log("Après modification - Ville de Martin:");
var martinApres = liste.findByNom("Martin");
if (martinApres) {
    console.log("Adresses:", martinApres.adresses.map(function (a) { return "".concat(a.rue, ", ").concat(a.ville, " ").concat(a.codePostal); }));
}
