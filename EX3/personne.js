"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    // Constructeur qui initialise une personne avec nom, sexe et liste d'adresses
    function Personne(nom, sexe, adresses) {
        this._nom = nom;
        // Vérification que le sexe est 'M' ou 'F'
        if (sexe === 'M' || sexe === 'F') {
            this._sexe = sexe;
        }
        else {
            throw new Error("Le sexe doit être 'M' ou 'F'");
        }
        this._adresses = adresses;
    }
    Object.defineProperty(Personne.prototype, "nom", {
        // Getters et Setters
        // Getter pour le nom
        get: function () {
            return this._nom;
        },
        // Setter pour le nom
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "sexe", {
        // Getter pour le sexe
        get: function () {
            return this._sexe;
        },
        // Setter pour le sexe avec validation
        set: function (sexe) {
            if (sexe === 'M' || sexe === 'F') {
                this._sexe = sexe;
            }
            else {
                throw new Error("Le sexe doit être 'M' ou 'F'");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "adresses", {
        // Getter pour les adresses
        get: function () {
            return this._adresses;
        },
        // Setter pour les adresses
        set: function (adresses) {
            this._adresses = adresses;
        },
        enumerable: false,
        configurable: true
    });
    return Personne;
}());
exports.Personne = Personne;
