import { Stagiaire } from "./stagiaire";
import { Formation } from "./formation";

export class Main {
	public static main():void{
		console.log("TESTS CLASS STAGIAIRE\n");
		const stagiaire1 = new Stagiaire("Alice", [8, 9, 10, 11]);
		const stagiaire2 = new Stagiaire("Claudio Beauvue", [12, 14, 13, 11]);
		const stagiaire3 = new Stagiaire("Cristiano Ronaldo", [12, 14, 13, 11]);
		const stagiaires:Stagiaire[]=[stagiaire1, stagiaire2, stagiaire3];
		let formation = new Formation("Développement Front-End", 50, [
			stagiaire1,
			stagiaire2,
		]);

		console.log("\n INFORMATIONS");
		console.log(`Formation: ${formation.getIntitule()}`);
		console.log(`Durée: ${formation.getNbrJours()} jours`);
		console.log(`Nombre de stagiaires: ${formation.getStagiaires().length}`);

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

		console.log("\nSTAGIAIRE 3");
		console.log("Nom : " + stagiaire3.getNom());
		console.log("Notes : " + stagiaire3.getNotes());
		console.log("Moyenne : " + stagiaire3.calculerMoyenne());
		console.log("Note max : " + stagiaire3.trouverMax());
		console.log("Note min : " + stagiaire3.trouverMin());

		console.log("\n\n TESTS CLASSE FORMATION\n");

		//test getters formation
		console.log("Intitulé : " + formation.getIntitule());
		console.log("Nombre de jours : " + formation.getNbrJours());
		console.log("Nombre de stagiaires : " + formation.getStagiaires().length);

		//test calculerMoyenneFormation()
		console.log(
			"\nMoyenne de la formation : " + formation.calculerMoyenneFormation()
		);

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
		}
	}

Main.main();