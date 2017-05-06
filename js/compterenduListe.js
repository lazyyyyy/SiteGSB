ajaxGet("http://localhost:8080/api/getComptesRendus.php", function(reponse){
    var comptesRendus = JSON.parse(reponse);
    comptesRendus.forEach(function(compteRendu){
        var trElt = document.createElement("tr");
        tableau.appendChild(trElt);
        
        var aElt = document.createElement("a");
        aElt.href = "compteRenduDetails.php?id=" + compteRendu.id;
        trElt.appendChild(aElt);
        
        var numero = document.createElement("td");
        numero.textContent = compteRendu.id;
        aElt.appendChild(numero);
        
        var utilisateur = document.createElement("td");
        utilisateur.textContent = compteRendu.utilisateur.nom.toUpperCase() + " " + compteRendu.utilisateur.prenom[0].toUpperCase() + compteRendu.utilisateur.prenom.toLowerCase().slice(1);
        trElt.appendChild(utilisateur);
        
        var praticien = document.createElement("td");
        praticien.textContent = compteRendu.praticien.nom.toUpperCase() + " " + compteRendu.praticien.prenom[0].toUpperCase() + compteRendu.praticien.prenom.toLowerCase().slice(1);
        trElt.appendChild(praticien);
        
        var date = document.createElement("td");
        date.textContent = compteRendu.date_creation;
        trElt.appendChild(date);
    });
});