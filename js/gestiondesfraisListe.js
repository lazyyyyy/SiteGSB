ajaxGet("http://localhost:8080/api/getFrais.php", function(reponse){
    var frais = JSON.parse(reponse);
    frais.forEach(function(leFrais){
        var trElt = document.createElement("tr");
        
        var aElt = document.createElement("a");
        aElt.href = "detailsFrais.php?id=" + leFrais.id;
        trElt.appendChild(aElt);
        
        var numFiche = document.createElement("td");
        numFiche.textContent = leFrais.id;
        aElt.appendChild(numFiche);
        
        var utilisateur = document.createElement("td");
        var nom = leFrais.utilisateur.nom.toUpperCase() + " " + leFrais.utilisateur.prenom[0].toUpperCase() + leFrais.utilisateur.prenom.toLowerCase().slice(1);
        utilisateur.textContent = nom;
        trElt.appendChild(utilisateur);
        
        var date = document.createElement("td");
        date.textContent = leFrais.date_creation;
        trElt.appendChild(date);
        
        document.getElementById("tableau").appendChild(trElt);
        
    });
});