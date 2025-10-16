"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
var Adresse = /** @class */ (function () {
    // Constructeur qui initialise une adresse avec rue, ville et code postal
    function Adresse(rue, ville, codePostal) {
        this._rue = rue;
        this._ville = ville;
        this._codePostal = codePostal;
    }
    Object.defineProperty(Adresse.prototype, "rue", {
        // Getters et Setters
        // Getter pour la rue
        get: function () {
            return this._rue;
        },
        // Setter pour la rue
        set: function (rue) {
            this._rue = rue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "ville", {
        // Getter pour la ville
        get: function () {
            return this._ville;
        },
        // Setter pour la ville
        set: function (ville) {
            this._ville = ville;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "codePostal", {
        // Getter pour le code postal
        get: function () {
            return this._codePostal;
        },
        // Setter pour le code postal
        set: function (codePostal) {
            this._codePostal = codePostal;
        },
        enumerable: false,
        configurable: true
    });
    return Adresse;
}());
exports.Adresse = Adresse;
