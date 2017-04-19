var tableau = document.getElementById("tableau");

var data = new FormData();
data.append("nom_produit", "");

ajaxPost("http://localhost:8080/api/getProduitByName.php", data, function(reponse){
    var medicaments = JSON.parse(reponse);
    medicaments.forEach(function(medicament){
        
        var trElement = document.createElement("tr");
        
        var libelle = document.createElement("td");
        var aElement = document.createElement("a");
        aElement.href = "medicamentsDetail.php?id=" + medicament.id;
        aElement.textContent = medicament.libelle;
        libelle.appendChild(aElement);
        trElement.appendChild(libelle);
        
        var famille = document.createElement("td");
        famille.textContent = medicament.famille.libelle;
        trElement.appendChild(famille);
        
        tableau.appendChild(trElement);
    });
});