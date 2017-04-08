var selectTypeDeFrais = document.getElementById("typeDeFrais");


ajaxGet("http://localhost:8080/api/getTypesDeFrais.php", function(reponse){
    var typesDeFrais = JSON.parse(reponse);
    
    typesDeFrais.forEach(function(typeFrais){
        var optionElt = document.createElement("option");
        optionElt.value =  typeFrais.libelle;
        optionElt.textContent = typeFrais.libelle;
        
        selectTypeDeFrais.appendChild(optionElt);
    });
});

var date = document.getElementById("date");
date.addEventListener("blur", function(e){
    var messageDate = document.getElementById("messageDate");
    var regexDate = /\d\d\/\d\d\/\d\d\d\d/;
    if(!regexDate.test(e.target.value))
        {
            messageDate.textContent = "Le format de la date n'est pas correct. Veuillez entrer une date au format 'jj/mm/aaaa'";
            messageDate.style.color = "red";
        }
    else
        {
            messageDate.textContent = "";
        }
});