import { Adresse } from './adresse';

export class Personne {
    private _nom: string;
    private _sexe: string;
    private _adresses: Adresse[];

    // Constructeur qui initialise une personne avec nom, sexe et liste d'adresses
    constructor(nom: string, sexe: string, adresses: Adresse[]) {
        this._nom = nom;
        // Vérification que le sexe est 'M' ou 'F'
        if (sexe === 'M' || sexe === 'F') {
            this._sexe = sexe;
        } else {
            throw new Error("Le sexe doit être 'M' ou 'F'");
        }
        this._adresses = adresses;
    }

    // Getters et Setters

    // Getter pour le nom
    get nom(): string {
        return this._nom;
    }

    // Setter pour le nom
    set nom(nom: string) {
        this._nom = nom;
    }

    // Getter pour le sexe
    get sexe(): string {
        return this._sexe;
    }

    // Setter pour le sexe avec validation
    set sexe(sexe: string) {
        if (sexe === 'M' || sexe === 'F') {
            this._sexe = sexe;
        } else {
            throw new Error("Le sexe doit être 'M' ou 'F'");
        }
    }

    // Getter pour les adresses
    get adresses(): Adresse[] {
        return this._adresses;
    }

    // Setter pour les adresses
    set adresses(adresses: Adresse[]) {
        this._adresses = adresses;
    }
}