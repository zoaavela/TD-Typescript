import { Stagiaire } from "./stagiaire";

//classe formation + attributs + constructeur
export class Formation {
	private intitule: string;
	private nbrJours: number;
	private stagiaires: Stagiaire[];

	constructor(intitule: string, nbrJours: number, stagiaires: Stagiaire[]) {
		this.intitule = intitule;
		this.nbrJours = nbrJours;
		this.stagiaires = stagiaires;
	}

	//Getters et Setters
	public getIntitule(): string {
		return this.intitule;
	}

	public setIntitule(intitule: string): void {
		this.intitule = intitule;
	}

	public getNbrJours(): number {
		return this.nbrJours;
	}

	public setNbrJours(nbrJours: number): void {
		this.nbrJours = nbrJours;
	}

	public getStagiaires(): Stagiaire[] {
		return this.stagiaires;
	}

	public setStagiaires(stagiaires: Stagiaire[]): void {
		this.stagiaires = stagiaires;
	}

	//Cette fonction calcule la moyenne de la formation.
	public calculerMoyenneFormation(): number {
		let somme = 0;
		for (let stagiaire of this.stagiaires) {
			somme += stagiaire.calculerMoyenne();
		}
		return somme / this.stagiaires.length;
	}

	//Cette fonction cherche la meilleure moyenne.
	public getIndexMax(): number {
		if(this.stagiaires.length===0) return -1; //-1 convention pour inexistant
		let max = this.stagiaires[0].calculerMoyenne();
		let indexMax = 0;
		for (let i = 1; i < this.stagiaires.length; i++) {
			if (max < this.stagiaires[i].calculerMoyenne()) {
				max = this.stagiaires[i].calculerMoyenne();
				indexMax = i;
			}
		}
		return indexMax;
	}

	//Cette fonction affiche le stagiaire avec la meilleure moyenne. 
	public afficherNomMax(): void {
		const indexMax=this.getIndexMax();
		if(indexMax!==-1){
		console.log("Le stagiaire avec la meilleure moyenne est : " + this.stagiaires[this.getIndexMax()].getNom());	
		} else {
			console.log("Aucun stagiaire dans la formation.");
		}
	}

	//Cette fonction affiche la note minimale de la meilleure moyenne.
	public afficherMinMax(): void {
		const indexMax=this.getIndexMax();
		if(indexMax!==-1){
			const meilleurStagiaire = this.stagiaires[indexMax];
			const noteMin = meilleurStagiaire.trouverMin();
			console.log(`La note du meilleur stagiaire ${meilleurStagiaire.getNom} est ${noteMin}`);
		} else {
			console.log("Aucun stagiaire dans la formation.");
		} 
	}

	//Cette fonction cherche la moyenne par nom en inscrivant le nom en paramètre 
	public trouverMoyenneParNom(nom: string): void {
		for (let stagiaire of this.stagiaires) {
			if (stagiaire.getNom() === nom) {
				console.log(
					"La moyenne de " + nom + " est de : " + stagiaire.calculerMoyenne()
				);
				return;
			}
		}
		console.log("Stagiaire " + nom + " non trouvé");
	}
}
