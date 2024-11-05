// Sélection des éléments du DOM
const bouton = document.getElementById('monBouton');
const texteAffichage = document.getElementById('texteAffichage');
const nombreClics = document.getElementById('nombreClics');

// Initialisation du compteur
let compteur = 0;

// Tableau de messages aléatoires
const messages = [
    "Bravo ! Vous avez cliqué !",
    "Continuez comme ça !",
    "Excellent choix !",
    "Vous êtes doué(e) !",
    "C'est parfait !",
    "Super clic !",
    "Magnifique !",
    "Vous maîtrisez le clic !"
];

// Fonction pour obtenir un message aléatoire
function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

// Gestionnaire d'événement pour le clic sur le bouton
bouton.addEventListener('click', () => {
    // Incrémentation du compteur
    compteur++;
    
    // Mise à jour du texte
    texteAffichage.textContent = getRandomMessage();
    
    // Mise à jour du compteur
    nombreClics.textContent = compteur;
    
    // Animation du bouton
    bouton.classList.add('clicked');
    setTimeout(() => {
        bouton.classList.remove('clicked');
    }, 200);
});

// Initialisation de la page
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page chargée avec succès !');
});