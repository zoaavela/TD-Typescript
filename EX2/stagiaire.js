"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stagiaire = void 0;
//classe stagiaire + attributs + constructeur
var Stagiaire = /** @class */ (function () {
    function Stagiaire(nom, notes) {
        this.nom = nom;
        this.notes = notes;
    }
    //getters et setters
    Stagiaire.prototype.getNom = function () {
        return this.nom;
    };
    Stagiaire.prototype.getNotes = function () {
        return this.notes;
    };
    Stagiaire.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Stagiaire.prototype.setNote = function (note) {
        this.notes.push(note);
    };
    //moyenne 
    Stagiaire.prototype.calculerMoyenne = function () {
        var somme = 0;
        for (var _i = 0, _a = this.notes; _i < _a.length; _i++) {
            var note = _a[_i];
            somme += note;
        }
        return somme / this.notes.length; // retourne la somme trouvée divisé par la longueur du tableau
    };
    //méthode maximum qui va parcourir le tableau 
    Stagiaire.prototype.trouverMax = function () {
        var max = this.notes[0];
        for (var _i = 0, _a = this.notes; _i < _a.length; _i++) {
            var note = _a[_i];
            if (max < note) {
                max = note;
            }
        }
        return max;
    };
    //méthode minimum qui va parcourir le tableau  
    Stagiaire.prototype.trouverMin = function () {
        var min = this.notes[0];
        for (var _i = 0, _a = this.notes; _i < _a.length; _i++) {
            var note = _a[_i];
            if (min > note) {
                min = note;
            }
        }
        return min;
    };
    return Stagiaire;
}());
exports.Stagiaire = Stagiaire;
