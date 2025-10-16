import { Adresse } from './adresse';
import { Personne } from './personne';
import { ListePersonnes } from './listepersonnes';

// Création d'adresses
const adresses1: Adresse[] = [
    new Adresse("123 Rue Principale", "Paris", "75001"),
    new Adresse("456 Avenue des Champs", "Lyon", "69001")
];

const adresses2: Adresse[] = [
    new Adresse("789 Boulevard Central", "Paris", "75002")
];

const adresses3: Adresse[] = [
    new Adresse("321 Rue du Commerce", "Marseille", "13001")
];

// Création de personnes
const personnes: Personne[] = [
    new Personne("Dupont", "M", adresses1),
    new Personne("Martin", "F", adresses2),
    new Personne("Bernard", "M", adresses3)
];

// Création de la liste de personnes
const liste = new ListePersonnes(personnes);

// Tests des méthodes
console.log("=== Tests des méthodes ===");

// 3. Test de la méthode findByNom
const personneTrouvee = liste.findByNom("Dupont");
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
const martinAvant = liste.findByNom("Martin");
if (martinAvant) {
    console.log("Adresses:", martinAvant.adresses.map(a => `${a.rue}, ${a.ville} ${a.codePostal}`));
}

liste.editPersonneVille("Martin", "Nice");

console.log("Après modification - Ville de Martin:");
const martinApres = liste.findByNom("Martin");
if (martinApres) {
    console.log("Adresses:", martinApres.adresses.map(a => `${a.rue}, ${a.ville} ${a.codePostal}`));
}