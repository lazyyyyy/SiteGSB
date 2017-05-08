var selectTypeDeFrais = document.getElementById("typeDeFrais");
var idFrais = document.getElementById("idFrais").value;

if(document.getElementById("erreur") !== null)
    {
        alert("Une erreur est survenue");
    }


ajaxGet("http://localhost:8080/api/getTypesDeFrais.php", function(reponse){
    var typesDeFrais = JSON.parse(reponse);
    
    typesDeFrais.forEach(function(typeFrais){
        var optionElt = document.createElement("option");
        optionElt.value =  typeFrais.id;
        optionElt.textContent = typeFrais.libelle;
        
        selectTypeDeFrais.appendChild(optionElt);
    });
});

var date = document.getElementById("date");
var messageDate = document.getElementById("messageDate");
messageDate.style.color = "red";
date.addEventListener("blur", function(e){
    var regexDate = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
    if(!regexDate.test(e.target.value)){messageDate.textContent = "Le format de la date n'est pas valable, veuillez entrer une date au format AAAA-MM-JJ"}
    else{
        var date_temp = e.target.value.split('-');
        date_temp[1] -=1;        // On rectifie le mois !!!
        var ma_date = new Date();
        ma_date.setFullYear(date_temp[0]);
        ma_date.setMonth(date_temp[1]);
        ma_date.setDate(date_temp[2]);
        if(ma_date.getFullYear()==date_temp[0] && ma_date.getMonth()==date_temp[1] && ma_date.getDate()==date_temp[2]){
            messageDate.textContent = '';
        }
        else{
            messageDate.textContent = 'Date non valable !';
        }
    }
});

var data = new FormData();
data.append("id_frais", idFrais);
ajaxPost("http://localhost:8080/api/getFraisById.php", data, function(reponse){
    var frais = JSON.parse(reponse);
    document.getElementById("typeDeFrais").value = frais.type_frais.id;
    document.getElementById("date").value = frais.date;
    document.getElementById("montant").value = frais.montant;
    document.getElementById("commentaire").value = frais.commentaire;
    
});

var formElt = document.querySelector("form");
formElt.addEventListener("submit", function(e){
    if(messageDate.textContent !== "")
        {
            e.preventDefault();
        }
});

/*
//Pour ajouter des pieces jointes quand on clique sur "buttonElt"
var divPj = document.getElementById("divPj");
var buttonElt = document.getElementById("ajoutPj");
var i = 0;
buttonElt.addEventListener("click", function(){
    if(i < 5)
        {
            i++;
            divPj.innerHTML += "</br><input type='file' class='form-control' name='fichier" + i  + " />";
        }
});*/

