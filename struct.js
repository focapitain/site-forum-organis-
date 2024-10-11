/*function openTab(evt, tabName) {
    // Cache tous les contenus des onglets
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Retire la classe "active" de tous les boutons des onglets
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Affiche l'onglet sélectionné et ajoute la classe "active" au bouton
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Affiche l'onglet par défaut (Accueil) au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
});

// Simulation de conversion LaTeX vers PDF
document.getElementById("latexForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fileInput = document.getElementById("latexFile");
    var file = fileInput.files[0];
    
    if (file) {
        var resultText = "Le fichier " + file.name + " a été converti avec succès en PDF (simulation).";
        document.getElementById("conversionResult").innerText = resultText;
    } else {
        alert("Veuillez choisir un fichier .tex à convertir.");
    }
});*/
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Cache tous les contenus des onglets
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Retire la classe "active" de tous les boutons d'onglets
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Affiche l'onglet sélectionné et ajoute la classe "active"
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Affiche l'onglet par défaut (Accueil) au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablinks").click();
});

// Simulation de conversion LaTeX vers PDF
document.getElementById("latexForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fileInput = document.getElementById("latexFile");
    var file = fileInput.files[0];

    if (file) {
        var resultText = "Le fichier " + file.name + " a été converti avec succès en PDF (simulation).";
        document.getElementById("conversionResult").innerText = resultText;
    } else {
        alert("Veuillez choisir un fichier .tex à convertir.");
    }
});

