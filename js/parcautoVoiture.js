var data = new FormData();
data.append("id_parc_auto", document.getElementById("id_parcauto").value);

ajaxPost("http://localhost:8080/api/getVehiculeByParcAutoId.php", data, function(reponse){
    var vehicules = JSON.parse(reponse);
    var tableau = document.getElementById("tableau");
    vehicules.forEach(function(vehicule){
        var trElt = document.createElement("tr");
        tableau.appendChild(trElt);
        
        var aElt = document.createElement("a");
        aElt.href = "parcautoDetailVoiture.php?id=" + vehicule.immatricule;
        trElt.appendChild(aElt);
        
        var immatriculeElt = document.createElement("td");
        immatriculeElt.textContent = vehicule.immatricule;
        aElt.appendChild(immatriculeElt);
        
        var modeleElt = document.createElement("td");
        modeleElt.textContent = vehicule.modele;
        trElt.appendChild(modeleElt);
        
        var marqueElt = document.createElement("td");
        marqueElt.textContent = vehicule.marque;
        trElt.appendChild(marqueElt);
    });
});