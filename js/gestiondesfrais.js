var selectTypeDeFrais = document.getElementById("typeDeFrais");


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
    if(!regexDate.test(e.target.value)){messageDate.textContent = "Le format de la date n'est pas valable, veuillez entrer une date au format yyyy-mm-jj"}
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

var formElt = document.querySelector("form");
formElt.addEventListener("submit", function(e){
    if(messageDate.textContent !== "")
        {
            e.preventDefault();
        }
});

document.getElementById("json").style.display = "none";
var json = document.getElementById("json").textContent;
console.log(json);
var user = JSON.parse(json);
document.getElementById("id_utilisateur").value = user.id;

document.getElementById("echec").style.color = "red";
document.getElementById("reussite").style.color = "green";

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

