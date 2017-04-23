var tableau = document.getElementById("tableau");

var data = new FormData();
data.append("nom", "");

ajaxPost("http://localhost:8080/api/getPraticienByName.php", data, function(reponse){
    var praticiens = JSON.parse(reponse);
    
    praticiens.forEach(function(praticien){
        var trElt = document.createElement("tr");
        
        var tdElt = document.createElement("td");
        var aElt = document.createElement("a");
        aElt.href = "praticienDetails.php?id=" + praticien.id;
        var nom = praticien.nom.toUpperCase();
        var prenom = praticien.prenom.toLowerCase();
        prenom = prenom.charAt(0).toUpperCase() + prenom.slice(1);
        aElt.textContent = nom + " " + prenom;
        tdElt.appendChild(aElt);
        trElt.appendChild(tdElt);
        
        var typeElt = document.createElement("td");
        typeElt.textContent = praticien.type_praticien.libelle;
        trElt.appendChild(typeElt);
        
        var lieuElt = document.createElement("td");
        lieuElt.textContent = praticien.lieu.libelle + " (" + praticien.lieu.cp + " " + praticien.lieu.ville + ")";
        trElt.appendChild(lieuElt);
        
        tableau.appendChild(trElt);
    });
});