let nom = document.querySelector('.nom');
let level = document.querySelector('.level');
let keys = document.querySelector('.keys');
let timer = document.querySelector('.timer');
let cards = document.querySelectorAll('.grid-item');
let challenges = document.querySelector('.voir-challenge');
let questions = document.querySelector('.contenue-challenge');
let numEcercice = document.querySelector('.numEcercice');
let validerKey = document.querySelector('#valider');
let challengeKey = document.querySelector('.challenge-key');
let question = JSON.parse(localStorage.getItem('questions'));
let reponses = JSON.parse(localStorage.getItem('reponses'));


let reponseQuestion = "";
let questionIndex= -1

let utilisateurConnecter = JSON.parse(localStorage.getItem('utilisateurConnecte'));
let users = JSON.parse(localStorage.getItem('users'));

nom.textContent = utilisateurConnecter.name;
level.textContent= utilisateurConnecter.level;
keys.textContent = utilisateurConnecter.point;

// =============== timer ============
let remainingTime = parseInt(localStorage.getItem('remainingTime')) || (5*60);

// Fonction pour mettre à jour le compteur de temps restant
function updateRemainingTime() {
    if (remainingTime <= 0) {
        // Le temps est écoulé, arrêtez le décompte
        clearInterval(intervalId);
    } else {
        remainingTime--;
        miseAJourCompteur(remainingTime);
        localStorage.setItem('remainingTime', JSON.stringify(remainingTime)); // Sauvegardez le temps restant
        console.log('hehehe');
    }
}

// Mettez à jour le compteur de temps restant toutes les secondes
const intervalId = setInterval(updateRemainingTime, 1000);

// Fonction pour mettre à jour le compteur d'affichage du temps
function miseAJourCompteur(tempsRestant) {
    const heures = Math.floor(tempsRestant / 3600);
    const minutes = Math.floor((tempsRestant % 3600) / 60);
    const secondes = tempsRestant % 60;
    const compteur = document.getElementById('compteur');
    timer.textContent = `0${heures}:${minutes}:${secondes}`;
}

// Réinitialisez le chrono si l'utilisateur se connecte avec succès
function resetChrono() {
    remainingTime = 0; // Le compte à rebours est terminé
    localStorage.removeItem('remainingTime'); // Supprimez le temps restant
}
// =============== timer ============

// =============== voir challenge ============
// Ajoutez un gestionnaire d'événements de clic à chaque carte

cards.forEach(function (card, index) {
    
    card.addEventListener('click', function () {
       console.log('card cliquer : ',index);
       questionIndex = index;
       challenges.style.display='block';
       questions.innerHTML = `<p>${question[index].question}</p>`
        numEcercice.textContent = question[index].id;
    });
});
// =============== voir challenge ============
// =============== soumettre challenge ============
valider.addEventListener('click', function () {
    console.log('reponse index : ',questionIndex);
   reponseQuestion = reponses[questionIndex].reponse;
   console.log('reponse :',reponseQuestion);
   console.log('reponse proposée: ',challengeKey.value);
   let repQuestion = challengeKey.value;
   if (repQuestion.trim() === reponseQuestion){
     alert(`bonne réponse vous passer au niveau: ${questionIndex+2}`);
     utilisateurConnecter.level = (utilisateurConnecter.level + 1);
     utilisateurConnecter.point +=5 ;
     localStorage.setItem('utilisateurConnecte', JSON.stringify(utilisateurConnecter));
     users.forEach(element => {
        if(element.id === utilisateurConnecter.id ){
            element.level = utilisateurConnecter.level;
            element.point = utilisateurConnecter.point;
            localStorage.setItem('users', JSON.stringify(users));

        }
     });
     //  window.location.href = "./dashboard.html"
    window.location.reload();
   }else{
     alert("Oupppsss c'est pas la cléf recherchée");
   }
 });
// =============== soumettre challenge ============