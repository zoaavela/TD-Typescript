//classe stagiaire + attributs + constructeur
export class Stagiaire {
	private nom: string; //variable nom en chaîne de caractère
	private notes: number[]; //variable notes en number accompagné d'un array
	
	constructor(nom: string, notes: number[]) { //constructor de l'objet utilisable dans le main 
		this.nom = nom;
		this.notes = notes;
	}

	//getters et setters
	public getNom(): string {
		return this.nom;
	}

	public getNotes(): number[] {
		return this.notes;
	}

	public setNom(nom: string) {
		this.nom = nom;
	}

	public setNote(note: number) {
		this.notes.push(note);
	}

	//moyenne 
	public calculerMoyenne(): number {
		let somme = 0;
		for (let note of this.notes) {
			somme += note;
		}
		return somme / this.notes.length; // retourne la somme trouvée divisé par la longueur du tableau
	}

	
	//méthode maximum qui va parcourir le tableau 
	public trouverMax(): number {
		let max = this.notes[0];
		for (let note of this.notes) {
			if (max < note) {
				max = note;
			}
		}
		return max;
	}


	//méthode minimum qui va parcourir le tableau  
	public trouverMin(): number {
		let min = this.notes[0];
		for (let note of this.notes) {
			if (min > note) {
				min = note;
			}
		}
		return min;
	}
}
