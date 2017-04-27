var listeLieux = [];

window.addEventListener("load", function(){
    var data = new FormData();
data.append("id_praticien", document.getElementById("id_praticien").value);

ajaxPost("http://localhost:8080/api/getPraticienById.php", data, function(reponse){
    var praticien = JSON.parse(reponse);
    
    document.getElementById("nom").value = praticien.nom;
    document.getElementById("prenom").value = praticien.prenom;
    
    document.getElementById("telFixe").value = praticien.telephone_fixe;
    document.getElementById("telFixe").addEventListener("blur", function(e){
        var regex = /\d\d\d\d\d\d\d\d\d\d/;
        if(!regex.test(e.target.value))
            {
                document.getElementById("erreurTelFixe").textContent = "Numéro de téléphone incorrect";
            }
        else
            {
                document.getElementById("erreurTelFixe").textContent = "";
            }
    });
    
    document.getElementById("telPortable").value = praticien.telephone_portable;
    document.getElementById("telPortable").addEventListener("blur", function(e){
        var regex = /\d\d\d\d\d\d\d\d\d\d/;
        if(!regex.test(e.target.value))
            {
                document.getElementById("erreurTelPortable").textContent = "Numéro de téléphone incorrect";
            }
        else
            {
                document.getElementById("erreurTelPortable").textContent = "";
            }
    });
    
    document.getElementById("mail").value = praticien.mail;
    document.getElementById("mail").addEventListener("blur", function(e){
        var regex = /.+@.+\..+/;
        if(!regex.test(e.target.value))
            {
                document.getElementById("erreurMail").textContent = "Adresse mail incorrect";
            }
        else
            {
                document.getElementById("erreurMail").textContent = "";
            } 
    });
    
    var data2 = new FormData();
    data2.append("nom_type", ""); 
    ajaxPost("http://localhost:8080/api/getTypePraticienByName.php", data2, function(reponse2){
        var types = JSON.parse(reponse2);
        
        types.forEach(function(type){
            var optionElt = document.createElement("option");
            optionElt.value = type.id;
            optionElt.textContent = type.libelle;
            if(optionElt.value === praticien.type_praticien.id)
                {
                    optionElt.selected = true;
                }
            
            document.getElementById("typePraticien").appendChild(optionElt);
        });
    });
    
    var data2 = new FormData();
    data2.append("nom_specialite", "");
    ajaxPost("http://localhost:8080/api/getSpecialitePraticienByName.php", data2, function(reponse2){
        var specialites = JSON.parse(reponse2);
        
        specialites.forEach(function(specialite){
            var optionElt = document.createElement("option");
            optionElt.value = specialite.id;
            optionElt.textContent = specialite.libelle;
            if(optionElt.value === praticien.specialite.id)
                {
                    optionElt.selected = true;
                }
            
            document.getElementById("specialite").appendChild(optionElt);
        });
    });
    
    var data2 = new FormData();
    data2.append("nom_lieu", "");
    ajaxPost("http://localhost:8080/api/getLieuByName.php", data2, function(reponse2){
        var lieux = JSON.parse(reponse2);
        
        lieux.forEach(function(lieu){
            var optionElt = document.createElement("option");
            optionElt.value = lieu.id;
            optionElt.textContent = lieu.libelle;
            if(optionElt.value === lieu.id)
                {
                    optionElt.selected = true;
                }
            
            document.getElementById("libelleLieu").appendChild(optionElt);
            listeLieux.push(lieu);
        });
    });
    
    
    document.getElementById("adresselieu").value = praticien.lieu.adresse;
    
    document.getElementById("cpLieu").value = praticien.lieu.cp;
    document.getElementById("cpLieu").addEventListener("blur", function(e){
        var messageErreur = document.getElementById("erreurCp");
        var regex = /\d\d\d\d\d/;
        if(!regex.test(e.target.value))
            {
                messageErreur.textContent = "Code postal invalide";
            }
        else
            {
                messageErreur.textContent = "";
            }
    });
    
    
    document.getElementById("villeLieu").value = praticien.lieu.ville;
    document.getElementById("paysLieu").value = praticien.lieu.pays;
    
    var data2 = new FormData();
    data2.append("nom_region", "");
    ajaxPost("http://localhost:8080/api/getRegionByName.php", data2, function(reponse2){
        var regions = JSON.parse(reponse2);
        regions.forEach(function(region){
            var optionElt = document.createElement("option");
            optionElt.value = region.id;
            optionElt.textContent = region.libelle;
            
            if(optionElt.value === praticien.lieu.region.id)
                {
                    optionElt.selected = true;
                }
            
            document.getElementById("region").appendChild(optionElt);
        });
    });
    
    //Je coupe la chaine pour que les hures n'apparaissent pas
    var messageDate = document.getElementById("erreurDate");
    var dateElt = document.getElementById("dateDerniereVisite");
    dateElt.value = praticien.date_derniere_visite.slice(0,10);
    dateElt.addEventListener("blur", function(e){
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
});
    
});

document.getElementById("formulaire").addEventListener("submit", function(e){
    var probleme = false;
    var erreurs = document.getElementsByClassName("erreur");
    for(var i = 0; i < erreurs.length; i++)
        {
            if(erreurs[i].textContent !== "")
            {
                probleme = true;
            }
        }
    if(probleme)
        {
            e.preventDefault();
            alert("Le formulaire n'a pas été complété correctement");
        }
});

document.getElementById("libelleLieu").addEventListener("change", function(e){
    for(var i = 0; i < listeLieux.length; i++)
        {
            if(e.target.value === listeLieux[i].id)
               {
                    document.getElementById("adresselieu").value = listeLieux[i].adresse;
                    document.getElementById("cpLieu").value = listeLieux[i].cp;
                    document.getElementById("villeLieu").value = listeLieux[i].ville;
                    document.getElementById("paysLieu").value = listeLieux[i].pays;
                    document.getElementById("region").value = listeLieux[i].region.id;
               }
        }
});