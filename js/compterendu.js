/*var form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    var data = new FormData(form);
    
    
    ajaxPost("../api/addCompteRendu.php", data, function(){}, false);
});*/

var selectPraticien = document.getElementById("menu_destination");

var data = new FormData();
data.append("nom", "");

ajaxPost("../api/getPraticienByName.php", data, function(reponse){
    console.log(reponse);
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