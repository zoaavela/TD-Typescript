export class Adresse {
    private _rue: string;
    private _ville: string;
    private _codePostal: string;

    // Constructeur qui initialise une adresse avec rue, ville et code postal
    constructor(rue: string, ville: string, codePostal: string) {
        this._rue = rue;
        this._ville = ville;
        this._codePostal = codePostal;
    }

    // Getters et Setters

    // Getter pour la rue
    get rue(): string {
        return this._rue;
    }

    // Setter pour la rue
    set rue(rue: string) {
        this._rue = rue;
    }

    // Getter pour la ville
    get ville(): string {
        return this._ville;
    }

    // Setter pour la ville
    set ville(ville: string) {
        this._ville = ville;
    }

    // Getter pour le code postal
    get codePostal(): string {
        return this._codePostal;
    }

    // Setter pour le code postal
    set codePostal(codePostal: string) {
        this._codePostal = codePostal;
    }
}