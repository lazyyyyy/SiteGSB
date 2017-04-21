/*var form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    var data = new FormData(form);
    
    
    ajaxPost("../api/addCompteRendu.php", data, function(){}, false);
});*/

var selectPraticien = document.getElementById("selectPraticien");

var data = new FormData();
data.append("nom", "");

ajaxPost("http://localhost:8080/api/getPraticienByName.php", data, function(reponse){
    var praticiens = JSON.parse(reponse);
    
    praticiens.forEach(function(praticien){
        var optionElt = document.createElement("option");
        var nom = praticien.nom.toUpperCase();
        var prenom = praticien.prenom.toLowerCase();
        optionElt.textContent = nom + " " + prenom.charAt(0).toUpperCase() + prenom.slice(1);
        
        var optionName = praticien.nom.toLowerCase() + praticien.id;
        optionElt.value = optionName;
        
        selectPraticien.appendChild(optionElt);
    });
}, false);

var motifElt = document.getElementById("motif");
var data2 = new FormData();
data2.append("nom_motif", "");

ajaxPost("http://localhost:8080/api/getMotifByName.php", data2, function(reponse){
    var motifs = JSON.parse(reponse);
    
    motifs.forEach(function(motif){
        var optionElt = document.createElement("option");
        optionElt.value = motif.id;
        optionElt.textContent = motif.libelle;
        motifElt.appendChild(optionElt);
    });
});