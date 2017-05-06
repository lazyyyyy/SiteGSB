var data = new FormData();
data.append("compte_rendu_id", document.getElementById("idCompteRendu").value);
ajaxPost("http://localhost:8080/api/getCompteRenduById.php", data, function(reponse){
    var compteRendu = JSON.parse(reponse);
    document.getElementById("numero").textContent = compteRendu.id;
    document.getElementById("dateCreation").textContent = compteRendu.date_creation;
    document.getElementById("utilisateur").textContent = compteRendu.utilisateur.nom.toUpperCase() + " " + compteRendu.utilisateur.prenom[0].toUpperCase() + compteRendu.utilisateur.prenom.toLowerCase().slice(1);
    document.getElementById("praticien").textContent = compteRendu.praticien.nom.toUpperCase() + " " + compteRendu.praticien.prenom[0].toUpperCase() + compteRendu.praticien.prenom.toLowerCase().slice(1);;
    document.getElementById("dateVisite").textContent = compteRendu.date;
    document.getElementById("produit").textContent = compteRendu.produit.libelle;
    document.getElementById("echantillons").textContent = compteRendu.nb_echantillons;
    document.getElementById("confiance").textContent = compteRendu.coef_confiance;
    document.getElementById("notoriete").textContent = compteRendu.coef_notoriete;
    document.getElementById("prescription").textContent = compteRendu.coef_prescription;
    document.getElementById("motif").textContent = compteRendu.motif.libelle;
    document.getElementById("bilan").textContent = compteRendu.bilan;
});