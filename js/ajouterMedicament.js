var data = new FormData();
data.append("labo_libelle", "");
ajaxPost("http://localhost:8080/api/getLaboratoireByName.php", data, function(reponse){
    var labos = JSON.parse(reponse);
    labos.forEach(function(labo){
        var optionElt = document.createElement("option");
        optionElt.value = labo.id;
        optionElt.textContent = labo.nom;
        document.getElementById("labo").appendChild(optionElt);
    });
});

var data = new FormData();
data.append("famille_libelle", "");
ajaxPost("http://localhost:8080/api/getFamilleProduitByName.php", data, function(reponse){
    var familles = JSON.parse(reponse);
    familles.forEach(function(famille){
        var optionElt = document.createElement("option");
        optionElt.value = famille.id;
        optionElt.textContent = famille.libelle;
        document.getElementById("famille").appendChild(optionElt);
    });
});

var data = new FormData();
data.append("libelle_composant", "");
ajaxPost("http://localhost:8080/api/getComposantByName.php", data, function(reponse){
    var composants = JSON.parse(reponse);
    composants.forEach(function(composant){
        var divElt = document.createElement("div");
        document.getElementById("composants").appendChild(divElt);
        
        var inputElt = document.createElement("input");
        inputElt.type = "checkbox";
        inputElt.name = composant.id;
        inputElt.setAttribute("class", "checkbox");
        inputElt.id = composant.id;
        divElt.appendChild(inputElt);
        
        var labelElt = document.createElement("label");
        labelElt.setAttribute("for", composant.id);
        labelElt.textContent = composant.libelle;
        divElt.appendChild(labelElt);
    });
});

console.log(document.getElementsByClassName("checkb").length);