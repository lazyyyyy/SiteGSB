var selectNomCommercial = document.getElementById("nomCommercial");

var data = new FormData();
data.append("nom_produit", "");

ajaxPost("http://localhost:8080/api/getProduitByName.php", data, function(reponse){
    var produits = JSON.parse(reponse);
    
    produits.forEach(function(produit){
        var optionElt = document.createElement("option");
        optionElt.textContent = produit.libelle;
        optionElt.value = produit.id;
        
        selectNomCommercial.appendChild(optionElt);
    });
});

var formElt = document.querySelector("form");
formElt.addEventListener("submit", function(e){
    
});