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
            if(praticien.lieu.id === lieu.id)
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
    
    //Je coupe la chaine pour que les heures n'apparaissent pas
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
            e.preventDefault();
            alert("Le formulaire n'a pas été complété correctement");
        }
    else{
        if(document.getElementById("libelleLieu").value == 0)
            {
                console.log("Bon endroit");
                var data = new FormData();
                data.append("libelle", document.getElementById("newLieu").textContent);
                console.log(document.getElementById("newLieu").textContent);
                data.append("adresse", document.getElementById("adresselieu").value);
                data.append("cp", document.getElementById("cpLieu").value);
                data.append("ville", document.getElementById("villeLieu").value);
                data.append("pays", document.getElementById("paysLieu").value);
                data.append("region_id", document.getElementById("region").value);
                ajaxPost("http://localhost:8080/api/addLieu.php", data, function(reponse){
                    console.log(reponse);
                    var rep = JSON.parse(reponse);
                    var data2 = new FormData();
                data2.append("nom_lieu", document.getElementById("newLieu").textContent);
                ajaxPost("http://localhost:8080/api/getLieuByName.php", data2, function(reponse2){
                    var lieux = JSON.parse(reponse2);
                    var idLieu = null;
                    lieux.forEach(function(lieu){
                        idLieu = lieu.id;
                        
                    });
                    var data3 = new FormData();
                    data3.append("id", document.getElementById("id_praticien").value);
                    console.log(document.getElementById("id_praticien").value);
                    data3.append("nom", document.getElementById("nom").value);
                    data3.append("prenom", document.getElementById("prenom").value);
                    data3.append("telFixe", document.getElementById("telFixe").value);
                    data3.append("telPortable", document.getElementById("telPortable").value);
                    data3.append("mail", document.getElementById("mail").value);
                    data3.append("dateDerniereVisiste", document.getElementById("dateDerniereVisite").value);
                    data3.append("typePraticien", document.getElementById("typePraticien").value);
                    data3.append("specialite", document.getElementById("specialite").value);
                    data3.append("idLieu", idLieu);
                    data3.append("adresseLieu", document.getElementById("adresselieu").value);
                    data3.append("cpLieu", document.getElementById("cpLieu").value);
                    data3.append("villeLieu", document.getElementById("villeLieu").value);
                    data3.append("paysLieu", document.getElementById("paysLieu").value);
                    data3.append("region", document.getElementById("region").value);

                    ajaxPost("http://localhost:8080/api/modifierPraticien.php", data3, function(reponse2){
                        console.log(reponse2);
                        var rep2 = JSON.parse(reponse2);
                        if(rep2)
                            {
                                var repUtilisateur = alert("Le nouveau lieu ainsi que la modification du Praticien ont bien été ajouté");
                                document.location.href = "praticiensListe.php";
                            }
                        else{
                                alert("Une erreur est survenue: veuillez vérifier les informations saisies (Attention : le nom du nouveau lieu doit être différent de ceux déjà existant)");
                        }
                    });
                });
                });
            }
            else
                {
                    console.log("Pas au bon endroit");
                    var idLieu = document.getElementById("libelleLieu").value;
                    var data3 = new FormData();
                    data3.append("id", document.getElementById("id_praticien").value);
                    data3.append("nom", document.getElementById("nom").value);
                    data3.append("prenom", document.getElementById("prenom").value);
                    data3.append("telFixe", document.getElementById("telFixe").value);
                    data3.append("telPortable", document.getElementById("telPortable").value);
                    data3.append("mail", document.getElementById("mail").value);
                    data3.append("dateDerniereVisiste", document.getElementById("dateDerniereVisite").value);
                    data3.append("typePraticien", document.getElementById("typePraticien").value);
                    data3.append("specialite", document.getElementById("specialite").value);
                    data3.append("idLieu", idLieu);
                    data3.append("adresseLieu", document.getElementById("adresselieu").value);
                    data3.append("cpLieu", document.getElementById("cpLieu").value);
                    data3.append("villeLieu", document.getElementById("villeLieu").value);
                    data3.append("paysLieu", document.getElementById("paysLieu").value);
                    data3.append("region", document.getElementById("region").value);

                    ajaxPost("http://localhost:8080/api/modifierPraticien.php", data3, function(reponse2){
                        console.log(reponse2);
                        var rep2 = JSON.parse(reponse2);
                        if(rep2)
                            {
                                alert("Modification praticien effectuée");
                                document.location.href = "praticiensListe.php";
                            }
                        else{
                            alert("Erreur : Opération échouée, veuillez vérifier vos informations saisies ou votre connexion Internet");
                        }
                    });
                }
                    
        }
});

document.getElementById("libelleLieu").addEventListener("change", function(e){
    if(e.target.value == "0")
        {
            document.getElementById("adresselieu").value = null;
            document.getElementById("cpLieu").value = null;
            document.getElementById("villeLieu").value = null;
            document.getElementById("paysLieu").value = null;
            document.getElementById("region").value = null;
        }
    else{
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
    }
});

document.getElementById("nouveauLieu").addEventListener("click", function(e){
    e.preventDefault();
    var newLieu = prompt("Veuillez entrer le libelle du nouveau lieu: ");
    for(var i = 0; i < listeLieux.length; i++)
        {
            if(listeLieux[i].libelle.toUpperCase() === newLieu.toUpperCase())
                {
                    console.log(newLieu.toUpperCase());
                    alert("Ce libelle existe déjà");
                    newLieu = null;
                }
        }
    if(newLieu !== null)
        {
            if(document.getElementById("newLieu") !== null)
                {
                    document.getElementById("newLieu").textContent = newLieu;
                }
            else{
                var optionElt = document.createElement("option");
                optionElt.textContent = newLieu;
                optionElt.value = 0;
                optionElt.id="newLieu";
                document.getElementById("libelleLieu").appendChild(optionElt);
            }
            
            document.getElementById("libelleLieu").value = 0;
            document.getElementById("adresselieu").value = null;
            document.getElementById("cpLieu").value = null;
            document.getElementById("villeLieu").value = null;
            document.getElementById("paysLieu").value = null;
            document.getElementById("region").value = null;
        }
    
});