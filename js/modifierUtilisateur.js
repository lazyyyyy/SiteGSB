var listeLaboratoires = [];
var idUser = document.getElementById("id_user").value;

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
    
var messageDateNaissance = document.getElementById("erreurDateNaissance");

var dateElt = document.getElementById("dateNaissance");
dateElt.addEventListener("blur", function(e){
        var regexDate = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
        if(!regexDate.test(e.target.value)){messageDateNaissance.textContent = "Le format de la date n'est pas valable, veuillez entrer une date au format yyyy-mm-jj"}
        else{
            var date_temp = e.target.value.split('-');
            date_temp[1] -=1;        // On rectifie le mois !!!
            var ma_date = new Date();
            ma_date.setFullYear(date_temp[0]);
            ma_date.setMonth(date_temp[1]);
            ma_date.setDate(date_temp[2]);
            if(ma_date.getFullYear()==date_temp[0] && ma_date.getMonth()==date_temp[1] && ma_date.getDate()==date_temp[2]){
                messageDateNaissance.textContent = '';
            }
            else{
                messageDateNaissance.textContent = 'Date non valable : veuillez entrer une date au forat AAAA-MM-JJ';
            }
        }
    });


var messageDateEmbauche = document.getElementById("erreurDateEmbauche");
var dateElt = document.getElementById("dateEmbauche");
dateElt.addEventListener("blur", function(e){
        var regexDate = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
        if(!regexDate.test(e.target.value)){messageDateEmbauche.textContent = "Le format de la date n'est pas valable, veuillez entrer une date au format yyyy-mm-jj"}
        else{
            var date_temp = e.target.value.split('-');
            date_temp[1] -=1;        // On rectifie le mois !!!
            var ma_date = new Date();
            ma_date.setFullYear(date_temp[0]);
            ma_date.setMonth(date_temp[1]);
            ma_date.setDate(date_temp[2]);
            if(ma_date.getFullYear()==date_temp[0] && ma_date.getMonth()==date_temp[1] && ma_date.getDate()==date_temp[2]){
                messageDateEmbauche.textContent = '';
            }
            else{
                messageDateEmbauche.textContent = 'Date non valable : veuillez entrer une date au forat AAAA-MM-JJ';
            }
        }
    });


var droitsElt = document.getElementById("droits");
var data = new FormData();
data.append("libelle_fonction", "");
ajaxPost("http://localhost:8080/api/getFonctionUtilisateurByName.php", data, function(reponse){
    var fonctions = JSON.parse(reponse);
    fonctions.forEach(function(fonction){
        var optionElt = document.createElement("option");
        optionElt.value = fonction.id;
        optionElt.textContent = fonction.libelle;
        droitsElt.appendChild(optionElt);
    });
});

document.getElementById("formulaire").addEventListener("submit", function(e){
    e.preventDefault();
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
            alert("Le formulaire n'a pas été complété correctement");
        }
    else{
             var data = new FormData();
            data.append("id", idUser);
            data.append("nom", document.getElementById("nom").value);
            data.append("prenom", document.getElementById("prenom").value);
            data.append("date_naissance", document.getElementById("dateNaissance").value);
            data.append("date_embauche", document.getElementById("dateEmbauche").value);
            data.append("telephone_portable", document.getElementById("telPortable").value);
            data.append("telephone_fixe", document.getElementById("telFixe").value);
            data.append("mail", document.getElementById("mail").value);
            data.append("id_laboratoire", document.getElementById("laboratoire").value);
            data.append("id_fonction_utilisateur", document.getElementById("droits").value);
            ajaxPost("http://localhost:8080/api/modifierUtilisateur.php", data, function(reponse){
                console.log(reponse);
                var rep = JSON.parse(reponse);
                if(rep)
                    {
                        
                        document.location.href = "utilisateurDetails.php?id=" + idUser;
                    }
                else{
                    alert("Opération échouée: une erreur est survenue");
                }
            });
        }
});


var laboElt = document.getElementById("laboratoire");
var data = new FormData();
data.append("labo_libelle", "");
ajaxPost("http://localhost:8080/api/getLaboratoireByName.php", data, function(reponse){
    var labos = JSON.parse(reponse);
    labos.forEach(function(labo){
        listeLaboratoires.push(labo);
        var optionElt = document.createElement("option");
        optionElt.value = labo.id;
        optionElt.textContent = labo.nom;
        laboElt.appendChild(optionElt);
        
    });
});

/*var data2 = new FormData();
    data2.append("nom_region", "");
    ajaxPost("http://localhost:8080/api/getRegionByName.php", data2, function(reponse2){
        var regions = JSON.parse(reponse2);
        regions.forEach(function(region){
            var optionElt = document.createElement("option");
            optionElt.value = region.id;
            optionElt.textContent = region.libelle;
            
            
            document.getElementById("region").appendChild(optionElt);
        });
    });

document.getElementById("laboratoire").addEventListener("change", function(e){
    if(e.target.value == "0")
        {
            document.getElementById("adresselieu").value = null;
            document.getElementById("cpLieu").value = null;
            document.getElementById("villeLieu").value = null;
            document.getElementById("paysLieu").value = null;
            document.getElementById("region").value = null;
        }
    else{
        for(var i = 0; i < listeLaboratoires.length; i++)
        {
            if(e.target.value === listeLaboratoires[i].id)
               {
                    document.getElementById("adresselieu").value = listeLaboratoires[i].lieu.adresse;
                    document.getElementById("cpLieu").value = listeLaboratoires[i].lieu.cp;
                    document.getElementById("villeLieu").value = listeLaboratoires[i].lieu.ville;
                    document.getElementById("paysLieu").value = listeLaboratoires[i].lieu.pays;
                    document.getElementById("region").value = listeLaboratoires[i].lieu.region.id;
               }
        }
    }
    
});

window.addEventListener("load", function(){
    var libelleLieu = document.getElementById("laboratoire");
    for(var i = 0; i < listeLaboratoires.length; i++)
        {
            if(libelleLieu.value === listeLaboratoires[i].id)
               {
                    document.getElementById("adresselieu").value = listeLaboratoires[i].lieu.adresse;
                    document.getElementById("cpLieu").value = listeLaboratoires[i].lieu.cp;
                    document.getElementById("villeLieu").value = listeLaboratoires[i].lieu.ville;
                    document.getElementById("paysLieu").value = listeLaboratoires[i].lieu.pays;
                    document.getElementById("region").value = listeLaboratoires[i].lieu.region.id;
                   console.log(listeLaboratoires[i].lieu.region.id);
               }
        }
});*/

var data = new FormData();
data.append("id_utilisateur", idUser);
ajaxPost("http://localhost:8080/api/getUtilisateurById.php", data, function(reponse){
    var user = JSON.parse(reponse);
    document.getElementById("nom").value = user.nom;
    document.getElementById("prenom").value = user.prenom;
    document.getElementById("dateNaissance").value = user.date_naissance;
    document.getElementById("dateEmbauche").value = user.date_embauche;
    document.getElementById("telFixe").value = user.telephone_fixe;
    document.getElementById("telPortable").value = user.telephone_portable;
    document.getElementById("mail").value = user.mail;
    document.getElementById("droits").value = user.fonction_utilisateur.id;
    document.getElementById("laboratoire").value = user.laboratoire.id;
});