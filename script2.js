/*const input = document.getElementById('input');
const submit = document.getElementById('submit');
const random = document.getElementById('random');

// Génère une chaîne de caractères aléatoires de longueur 6
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Chaînes de caractères aléatoires
const compareString = generateRandomString(6);

// Affiche la chaîne de caractères aléatoires sur la page web
random.textContent = compareString;


// Fonction qui renvoie une promesse qui résout si la chaîne de caractères est égale à la chaîne de comparaison et rejette sinon
async function verifyString(stringToVerify) {
    //retourner une promesse, qui vérifie si l'input a la même valeur 
    //que compareString
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        if(stringToVerify === compareString) {
            resolve("Opération réussie");
        }
        else {
            reject("echec de l'opération");
        }
       }, 2000)
    });
}

submit.addEventListener('click', () => {
    // Récupère la valeur de l'input
    const inputString = input.value;

    //appeler la méthode verifyString
    verifyString(inputString)
    //et faire un alert de la valeur de retour
    .then((message) => {
        alert(message);
    })
    .catch((error) => {
        alert(error);
    })
})*/

import { BehaviorSubject } from 'rxjs';

class Tache {
  constructor(titre, description, statut = 'en attente') {
    this._titre = titre;
    this._description = description;
    this._statut = statut;
    this._subject = new BehaviorSubject({ titre: this._titre, statut: this._statut });
  }

//…
  set statut(nouveauStatut) {
  this._statut = nouveauStatut;
  this._subject.next({ titre: this._titre, statut : this._statut });
  }

  subscribe(observer) {
  this._subject.subscribe(observer);
  }
}

const tache = new Tache('Tache 1', 'Description');
const observer1 = {
  next: data => console.log(`La tâche "${data.titre}" a un nouveau statut : ${data.statut}`),
  error: err => console.error(err),
  complete: () => console.log('Terminé')
};

tache.subscribe(observer1);
tache.statut = 'en cours';

const tache1 = new Tache('Tache 1', 'Première tâche');
const tache2 = new Tache('Tache 2', 'Deuxième tâche');
const tache3 = new Tache('Tache 3', 'Troisième tâche');

const observer = {
  next: data => console.log(`La tâche "${data.titre}" a un nouveau statut : ${data.statut}`),
  error: err => console.error(err),
  complete: () => console.log('Terminé')
};

tache1.subscribe(observer);
tache2.subscribe(observer);
tache3.subscribe(observer);

projet.ajouterTache(tache1);
projet.ajouterTache(tache2);
projet.ajouterTache(tache3);

tache1.statut = 'en cours';
tache2.statut = 'terminée';
tache3.statut = 'en attente';

console.log(projet.recupererTache('Tache 1'));
console.log(projet.recupererTache('Tache 2'));
console.log(projet.recupererTache('Tache 3'));

projet.supprimerTache('Tache 2');
console.log(projet.recupererTache('Tache 2'));