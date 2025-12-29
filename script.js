function like(btn) {
    let span = btn.querySelector("span");
    span.textContent = parseInt(span.textContent) + 1;
}

function ajouterCommentaire() {
    let nom = document.getElementById("nomCommentaire").value;
    let msg = document.getElementById("message").value;

    if (nom === "" || msg === "") return;

    let div = document.createElement("div");
    div.innerHTML = "<strong>" + nom + "</strong><p>" + msg + "</p><hr>";

    document.getElementById("listeCommentaires").appendChild(div);

    document.getElementById("nomCommentaire").value = "";
    document.getElementById("message").value = "";
}

function filtrer(categorie) {
    var produits = document.getElementsByClassName('produit');
    for (var i = 0; i < produits.length; i++) {
        if (categorie === 'tous') {
            produits[i].style.display = 'inline-block';
        } else {
            if (produits[i].classList.contains(categorie)) {
                produits[i].style.display = 'inline-block';
            } else {
                produits[i].style.display = 'none';
            }
        }
    }
}
function envoyerCommande() {
    const nom = document.getElementById("nom").value;
    const article = document.getElementById("article").value;
    const quantite = document.getElementById("quantite").value;
    const telephone = document.getElementById("telephone").value;
    const adresse = document.getElementById("adresse").value;

    if (!nom || !article || !quantite || !telephone || !adresse) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const message = 
        "🧸 *NOUVELLE COMMANDE – GL SALES* 🧸\n\n" +
        "👤 Nom : " + nom + "\n" +
        "👕 Article : " + article + "\n" +
        "📦 Quantité : " + quantite + "\n" +
        "📞 Téléphone : " + telephone + "\n" +
        "📍 Adresse : " + adresse;

    const numeroWhatsApp = "243998862508"; // TON NUMÉRO
    const url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}

function envoyerAvis() {
    const nom = document.getElementById("nom-client").value;
    const commentaire = document.getElementById("commentaire").value;

    if (!nom || !commentaire) {
        alert("Veuillez remplir votre nom et votre avis.");
        return;
    }

    const message =
        "⭐ *NOUVEL AVIS CLIENT – GL SALES* ⭐\n\n" +
        "👤 Nom : " + nom + "\n" +
        "💬 Avis : " + commentaire;

    const numeroWhatsApp = "243998862508"; // TON NUMÉRO
    const url = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
