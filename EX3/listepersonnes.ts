import { Personne } from './personne';

export class ListePersonnes {
    private _personnes: Personne[];

    // Constructeur qui initialise la liste avec un tableau de personnes
    constructor(personnes: Personne[]) {
        this._personnes = personnes;
    }

    // Getters et Setters

    // Getter pour le tableau de personnes
    get personnes(): Personne[] {
        return this._personnes;
    }

    // Setter pour le tableau de personnes
    set personnes(personnes: Personne[]) {
        this._personnes = personnes;
    }

    // 3. Méthode findByNom qui cherche une personne par son nom
    findByNom(s: string): Personne | null {
        for (const personne of this._personnes) {
            if (personne.nom === s) {
                return personne;
            }
        }
        return null;
    }

    // 4. Méthode findByCodePostal qui vérifie si une personne a une adresse avec le code postal donné
    findByCodePostal(cp: string): boolean {
        for (const personne of this._personnes) {
            const adresses = personne.adresses;
            for (const adresse of adresses) {
                if (adresse.codePostal === cp) {
                    return true;
                }
            }
        }
        return false;
    }

    // 5. Méthode countPersonneVille qui compte le nombre de personnes ayant une adresse dans une ville donnée
    countPersonneVille(ville: string): number {
        let count = 0;
        for (const personne of this._personnes) {
            const adresses = personne.adresses;
            for (const adresse of adresses) {
                if (adresse.ville === ville) {
                    count++;
                    break; 
                }
            }
        }
        return count;
    }

    // 6. Méthode editPersonneNom qui remplace les noms des personnes ayant l'ancien nom par le nouveau nom
    editPersonneNom(oldNom: string, newNom: string): void {
        for (const personne of this._personnes) {
            if (personne.nom === oldNom) {
                personne.nom = newNom;
            }
        }
    }

    // 7. Méthode editPersonneVille qui remplace la ville de toutes les adresses d'une personne spécifique
    editPersonneVille(nom: string, newVille: string): void {
        const personne = this.findByNom(nom);
        if (personne !== null) {
            const adresses = personne.adresses;
            for (const adresse of adresses) {
                adresse.ville = newVille;
            }
        }
    }
}