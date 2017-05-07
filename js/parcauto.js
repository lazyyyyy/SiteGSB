var idRegion = document.getElementById("id_region").value;

var data = new FormData();
data.append("id_region", idRegion);

ajaxPost("http://localhost:8080/api/getParcAutoByIdRegion.php", data, function(reponse){
    var parcsAutos = JSON.parse(reponse);
    var tableau = document.getElementById("tableau");
    parcsAutos.forEach(function(parcAuto){
        var trElt = document.createElement("tr");
        tableau.appendChild(trElt);
        
        var aElt = document.createElement("a");
        aElt.href = "parcautoVoiture.php?id=" + parcAuto.id+"&region=" + idRegion;
        trElt.appendChild(aElt);
        
        var libelleElt = document.createElement("td");
        libelleElt.textContent = parcAuto.libelle;
        aElt.appendChild(libelleElt);
        
        var adresseElt = document.createElement("td");
        adresseElt.textContent = parcAuto.lieu.libelle + " (" + parcAuto.lieu.adresse + ", " + parcAuto.lieu.cp + " " + parcAuto.lieu.ville + ", " + parcAuto.lieu.pays + ")";
        trElt.appendChild(adresseElt);
    });
});