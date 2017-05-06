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
        
        optionElt.value = praticien.id;
        
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

var produits = new Array();
var i = 1;
var data = new FormData();
data.append("nom_produit", "");
ajaxPost("http://localhost:8080/api/getProduitByName.php", data, function(reponse){
    var produits = JSON.parse(reponse);
    var produitsElt = document.getElementById("produits");
    produits.forEach(function(produit){
        var optionElt = document.createElement("option");
        optionElt.value = produit.id;
        optionElt.textContent = produit.libelle;
        produitsElt.appendChild(optionElt);
    });
});

document.getElementById("date").addEventListener("blur", function(e){
    var messageDate = document.getElementById("erreurDate");
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
                messageDate.textContent = 'Date non valable : veuillez entrer une date au forat AAAA-MM-JJ';
            }
        }
});

document.getElementById("formulaire").addEventListener("submit", function(e){
    e.preventDefault();
    if(document.getElementById("erreurDate").textContent === "")
        {
            var data = new FormData();
            data.append("date", document.getElementById("date").value);
            data.append("bilan", document.getElementById("bilan").value);
            data.append("coef_confiance", document.getElementById("confiance").value);
            data.append("coef_notoriete", document.getElementById("notoriete").value);
            data.append("coef_prescription", document.getElementById("prescription").value);
            data.append("id_motif", document.getElementById("motif").value);
            data.append("id_praticien", document.getElementById("selectPraticien").value);
            data.append("id_produit", document.getElementById("produits").value);
            data.append("id_utilisateur", document.getElementById("idUser").value);
            data.append("nb_echantillons", document.getElementById("echantillons").value);
            
            /*console.log("Date = " + document.getElementById("date").value);
            console.log("bilan = " + document.getElementById("bilan").value);
            console.log("confiance = " + document.getElementById("confiance").value);
            console.log("notoriete = " + document.getElementById("notoriete").value);
            console.log("prescription = " + document.getElementById("prescription").value);
            console.log("motif = " + document.getElementById("motif").value);
            console.log("praticien = " + document.getElementById("selectPraticien").value);
            console.log("produit = " + document.getElementById("produits").value);
            console.log("user = " + document.getElementById("idUser").value);
            console.log("echantillons = " + document.getElementById("echantillons").value);*/
            
            ajaxPost("http://localhost:8080/api/addCompteRendu.php", data, function(reponse){
                console.log(reponse);
                var rep = JSON.parse(reponse);
                if(rep)
                    {
                        document.location.href = "mesComptesRendus.php?id=" + idUser;
                    }
                else{
                    alert("Opération échouée");
                }
            });
        }
});