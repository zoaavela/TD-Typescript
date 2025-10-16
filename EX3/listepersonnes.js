"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListePersonnes = void 0;
var ListePersonnes = /** @class */ (function () {
    // Constructeur qui initialise la liste avec un tableau de personnes
    function ListePersonnes(personnes) {
        this._personnes = personnes;
    }
    Object.defineProperty(ListePersonnes.prototype, "personnes", {
        // Getters et Setters
        // Getter pour le tableau de personnes
        get: function () {
            return this._personnes;
        },
        // Setter pour le tableau de personnes
        set: function (personnes) {
            this._personnes = personnes;
        },
        enumerable: false,
        configurable: true
    });
    // 3. Méthode findByNom qui cherche une personne par son nom
    ListePersonnes.prototype.findByNom = function (s) {
        for (var _i = 0, _a = this._personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            if (personne.nom === s) {
                return personne;
            }
        }
        return null;
    };
    // 4. Méthode findByCodePostal qui vérifie si une personne a une adresse avec le code postal donné
    ListePersonnes.prototype.findByCodePostal = function (cp) {
        for (var _i = 0, _a = this._personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            var adresses = personne.adresses;
            for (var _b = 0, adresses_1 = adresses; _b < adresses_1.length; _b++) {
                var adresse = adresses_1[_b];
                if (adresse.codePostal === cp) {
                    return true;
                }
            }
        }
        return false;
    };
    // 5. Méthode countPersonneVille qui compte le nombre de personnes ayant une adresse dans une ville donnée
    ListePersonnes.prototype.countPersonneVille = function (ville) {
        var count = 0;
        for (var _i = 0, _a = this._personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            var adresses = personne.adresses;
            for (var _b = 0, adresses_2 = adresses; _b < adresses_2.length; _b++) {
                var adresse = adresses_2[_b];
                if (adresse.ville === ville) {
                    count++;
                    break;
                }
            }
        }
        return count;
    };
    // 6. Méthode editPersonneNom qui remplace les noms des personnes ayant l'ancien nom par le nouveau nom
    ListePersonnes.prototype.editPersonneNom = function (oldNom, newNom) {
        for (var _i = 0, _a = this._personnes; _i < _a.length; _i++) {
            var personne = _a[_i];
            if (personne.nom === oldNom) {
                personne.nom = newNom;
            }
        }
    };
    // 7. Méthode editPersonneVille qui remplace la ville de toutes les adresses d'une personne spécifique
    ListePersonnes.prototype.editPersonneVille = function (nom, newVille) {
        var personne = this.findByNom(nom);
        if (personne !== null) {
            var adresses = personne.adresses;
            for (var _i = 0, adresses_3 = adresses; _i < adresses_3.length; _i++) {
                var adresse = adresses_3[_i];
                adresse.ville = newVille;
            }
        }
    };
    return ListePersonnes;
}());
exports.ListePersonnes = ListePersonnes;
