// Fonction pour ajouter le prix du téléphone et afficher le prix total
function ajouterAuPanier(prix) {
    // Vérifier si le prix est un nombre
    if (!isNaN(prix)) {
        // Récupérer l'élément où le prix total sera affiché
        var prixTotalElement = document.getElementById("prix-total");

        // Vérifier si l'élément existe
        if (prixTotalElement) {
            // Récupérer le prix total actuel
            var prixTotal = parseFloat(prixTotalElement.textContent);

            // Ajouter le prix du téléphone au prix total
            prixTotal += prix;

            // Mettre à jour le texte affichant le prix total
            prixTotalElement.textContent = prixTotal.toFixed(2) + " dt"; // Afficher le prix total avec deux décimales
        }
    }
}

// Ajouter un gestionnaire d'événement à tous les boutons "Ajouter au panier"
var boutonsAjouter = document.querySelectorAll(".card button");

// Parcourir tous les boutons et ajouter un gestionnaire d'événement pour le clic
boutonsAjouter.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        // Récupérer le prix du téléphone à partir de l'élément parent du bouton
        var parent = this.parentNode;
        var prix = parent.querySelector("prix").textContent; // Récupérer le prix sous forme de texte
        prix = parseFloat(prix.replace("dt", "")); // Convertir le prix en nombre, en supprimant le texte "dt"

        // Appeler la fonction pour ajouter le prix au panier
        ajouterAuPanier(prix);
    });
});
// Fonction pour supprimer le prix du téléphone et mettre à jour le prix total
function supprimerDuPanier(prix) {
    // Vérifier si le prix est un nombre
    if (!isNaN(prix)) {
        // Récupérer l'élément où le prix total sera affiché
        var prixTotalElement = document.getElementById("prix-total");

        // Vérifier si l'élément existe
        if (prixTotalElement) {
            // Récupérer le prix total actuel
            var prixTotal = parseFloat(prixTotalElement.textContent);

            // Soustraire le prix du téléphone du prix total
            prixTotal -= prix;

            // Mettre à jour le texte affichant le prix total
            prixTotalElement.textContent = prixTotal.toFixed(2) + " dt"; // Afficher le prix total avec deux décimales
        }
    }
}

// Ajouter un gestionnaire d'événement à tous les boutons "Supprimer du panier"
var boutonsSupprimer = document.querySelectorAll(".card button:nth-of-type(2)");

// Parcourir tous les boutons et ajouter un gestionnaire d'événement pour le clic
boutonsSupprimer.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        // Récupérer le prix du téléphone à partir de l'élément parent du bouton
        var parent = this.parentNode;
        var prix = parent.querySelector("prix").textContent; // Récupérer le prix sous forme de texte
        prix = parseFloat(prix.replace("dt", "")); // Convertir le prix en nombre, en supprimant le texte "dt"

        // Appeler la fonction pour supprimer le prix du panier
        supprimerDuPanier(prix);
    });
});
