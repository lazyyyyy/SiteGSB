var selectNomCommercial = document.getElementById("nomCommercial");

var data = new FormData();
data.append("nom_produit", "");

ajaxPost("http://localhost:8080/api/getProduitByName.php", data, function(reponse){
    var libelles = JSON.parse(reponse);
    
    libelles.forEach(function(libelle){
        var optionElt = document.createElement("option");
        optionElt.textContent = libelle;
        optionElt.value = libelle;
        
        selectNomCommercial.appendChild(optionElt);
    });
});