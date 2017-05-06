var idUser = document.getElementById("idUser").value;
var data = new FormData();
data.append("id_utilisateur", idUser);

ajaxPost("http://localhost:8080/api/getFraisByUtilisateurId.php", data, function(reponse){
    var frais = JSON.parse(reponse);
    frais.forEach(function(leFrais){
        var trElt = document.createElement("tr");
        
        var aElt = document.createElement("a");
        aElt.href = "detailsFrais.php?id=" + leFrais.id;
        trElt.appendChild(aElt);
        
        var numFiche = document.createElement("td");
        numFiche.textContent = leFrais.id;
        aElt.appendChild(numFiche);
        
        var date = document.createElement("td");
        date.textContent = leFrais.date_creation;
        trElt.appendChild(date);
        
        document.getElementById("tableau").appendChild(trElt);
        
    });
});