"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
//classe formation + attributs + constructeur
var Formation = /** @class */ (function () {
    function Formation(intitule, nbrJours, stagiaires) {
        this.intitule = intitule;
        this.nbrJours = nbrJours;
        this.stagiaires = stagiaires;
    }
    //Getters et Setters
    Formation.prototype.getIntitule = function () {
        return this.intitule;
    };
    Formation.prototype.setIntitule = function (intitule) {
        this.intitule = intitule;
    };
    Formation.prototype.getNbrJours = function () {
        return this.nbrJours;
    };
    Formation.prototype.setNbrJours = function (nbrJours) {
        this.nbrJours = nbrJours;
    };
    Formation.prototype.getStagiaires = function () {
        return this.stagiaires;
    };
    Formation.prototype.setStagiaires = function (stagiaires) {
        this.stagiaires = stagiaires;
    };
    //Cette fonction calcule la moyenne de la formation.
    Formation.prototype.calculerMoyenneFormation = function () {
        var somme = 0;
        for (var _i = 0, _a = this.stagiaires; _i < _a.length; _i++) {
            var stagiaire = _a[_i];
            somme += stagiaire.calculerMoyenne();
        }
        return somme / this.stagiaires.length;
    };
    //Cette fonction cherche la meilleure moyenne.
    Formation.prototype.getIndexMax = function () {
        if (this.stagiaires.length === 0)
            return -1; //-1 convention pour inexistant
        var max = this.stagiaires[0].calculerMoyenne();
        var indexMax = 0;
        for (var i = 1; i < this.stagiaires.length; i++) {
            if (max < this.stagiaires[i].calculerMoyenne()) {
                max = this.stagiaires[i].calculerMoyenne();
                indexMax = i;
            }
        }
        return indexMax;
    };
    //Cette fonction affiche le stagiaire avec la meilleure moyenne. 
    Formation.prototype.afficherNomMax = function () {
        var indexMax = this.getIndexMax();
        if (indexMax !== -1) {
            console.log("Le stagiaire avec la meilleure moyenne est : " + this.stagiaires[this.getIndexMax()].getNom());
        }
        else {
            console.log("Aucun stagiaire dans la formation.");
        }
    };
    //Cette fonction affiche la note minimale de la meilleure moyenne.
    Formation.prototype.afficherMinMax = function () {
        var indexMax = this.getIndexMax();
        if (indexMax !== -1) {
            var meilleurStagiaire = this.stagiaires[indexMax];
            var noteMin = meilleurStagiaire.trouverMin();
            console.log("La note du meilleur stagiaire ".concat(meilleurStagiaire.getNom, " est ").concat(noteMin));
        }
        else {
            console.log("Aucun stagiaire dans la formation.");
        }
    };
    //Cette fonction cherche la moyenne par nom en inscrivant le nom en paramètre 
    Formation.prototype.trouverMoyenneParNom = function (nom) {
        for (var _i = 0, _a = this.stagiaires; _i < _a.length; _i++) {
            var stagiaire = _a[_i];
            if (stagiaire.getNom() === nom) {
                console.log("La moyenne de " + nom + " est de : " + stagiaire.calculerMoyenne());
                return;
            }
        }
        console.log("Stagiaire " + nom + " non trouvé");
    };
    return Formation;
}());
exports.Formation = Formation;
