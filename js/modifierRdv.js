var listeLieux = [];

document.getElementById("heures").addEventListener("blur", function(e){
    
    if(e.target.value.length === 1)
        {
            e.target.value = "0" + e.target.value;
        }
});

document.getElementById("minutes").addEventListener("blur", function(e){
    
    if(e.target.value.length === 1)
        {
            e.target.value = "0" + e.target.value;
        }
});

var data = new FormData();
data.append("nom", "");

ajaxPost("http://localhost:8080/api/getPraticienByName.php", data, function(reponse){
    var praticiens = JSON.parse(reponse);
    praticiens.forEach(function(praticien){
        var optionElt = document.createElement("option");
        optionElt.value = praticien.id;
        optionElt.textContent = praticien.nom.toUpperCase() + " " + praticien.prenom.charAt(0).toUpperCase() + praticien.prenom.slice(1).toLowerCase();
        document.getElementById("praticien").appendChild(optionElt);
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
            
            document.getElementById("libelleLieu").appendChild(optionElt);
            listeLieux.push(lieu);
            
        });
    });

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

var data2 = new FormData();
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

window.addEventListener("load", function(){
    var libelleLieu = document.getElementById("libelleLieu");
    for(var i = 0; i < listeLieux.length; i++)
        {
            if(libelleLieu.value === listeLieux[i].id)
               {
                    document.getElementById("adresselieu").value = listeLieux[i].adresse;
                    document.getElementById("cpLieu").value = listeLieux[i].cp;
                    document.getElementById("villeLieu").value = listeLieux[i].ville;
                    document.getElementById("paysLieu").value = listeLieux[i].pays;
                    document.getElementById("region").value = listeLieux[i].region.id;
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

var data = new FormData();
data.append("id_rdv", document.getElementById("idRdv").value);
ajaxPost("http://localhost:8080/api/getRdvById.php", data, function(reponse){
    var rdv = JSON.parse(reponse);
    
    document.getElementById("date").addEventListener("blur", function(e){
    var regexDate = /^\d{4}\-\d{2}\-\d{2}$/;
        if(!regexDate.test(e.target.value))
        {
            console.log("OK");
            alert("Le format de la date n'est pas valable, veuillez entrer une date au format yyyy-mm-jj");
            document.getElementById("date").value = rdv.date.slice(0, 10);
        }
        else{
            console.log("NOT OK");
            var date_temp = e.target.value.split('-');
            date_temp[1] -=1;        // On rectifie le mois !!!
            var ma_date = new Date();
            ma_date.setFullYear(date_temp[0]);
            ma_date.setMonth(date_temp[1]);
            ma_date.setDate(date_temp[2]);
            if(ma_date.getFullYear()==date_temp[0] && ma_date.getMonth()==date_temp[1] && ma_date.getDate()==date_temp[2]){
            }
            else{
                alert('Date non valable : veuillez entrer une date au forat AAAA-MM-JJ');
                document.getElementById("date").value = rdv.date.slice(0, 10);
            }
        }
});
    
    document.getElementById("date").value = rdv.date.slice(0, 10);
    document.getElementById("heures").value = rdv.date.slice(11, 13);
    document.getElementById("minutes").value = rdv.date.slice(14, 16);
    document.getElementById("praticien").value = rdv.praticien.id;
    document.getElementById("libelleLieu").value = rdv.lieu.id;
    document.getElementById("cpLieu").value = rdv.lieu.cp;
    document.getElementById("adresselieu").value = rdv.lieu.adresse;
    document.getElementById("villeLieu").value = rdv.lieu.ville;
    document.getElementById("paysLieu").value = rdv.lieu.pays;
    document.getElementById("region").value = rdv.lieu.region.id;
    document.getElementById("titre").value = rdv.titre;
    document.getElementById("description").value = rdv.description;
    
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
        
        var heure = document.getElementById("heures").value;
        if(heure.length === 1)
            {
                heure = "0" + heure;
            }
        var minute = document.getElementById("minutes").value;
        if(minute.length === 1)
            {
                minute = "0" + minute;
            }
        var horaire = document.getElementById("date").value + " " + heure + ":" + minute + ":00";
        
        if(document.getElementById("libelleLieu").value == "0")
            {
                var data = new FormData();
                data.append("libelle", document.getElementById("newLieu").textContent);
                data.append("adresse", document.getElementById("adresselieu").value);
                data.append("cp", document.getElementById("cpLieu").value);
                data.append("ville", document.getElementById("villeLieu").value);
                data.append("pays", document.getElementById("paysLieu").value);
                data.append("region_id", document.getElementById("region").value);
                ajaxPost("http://localhost:8080/api/addLieu.php", data, function(reponse){
                    var rep = JSON.parse(reponse);
                });
                
                var data2 = new FormData();
                data2.append("nom_lieu", document.getElementById("newLieu").textContent);
                ajaxPost("http://localhost:8080/api/getLieuByName.php", data2, function(reponse2){
                    var lieux = JSON.parse(reponse2);
                    lieux.forEach(function(lieu){
                        var idLieu = lieu.id;
                        
                    });
                    
                    var data3 = new FormData();
                    data3.append("id");
                    data3.append("date", horaire);
                    data3.append("description", document.getElementById("description").value);
                    data3.append("id_praticien", document.getElementById("praticien").value);
                    data3.append("id_lieu", idLieu);
                    data3.append("titre", document.getElementById("titre").value);
                    data3.append("id_utilisateur", document.getElementById("idUser").value);
                    data3.append("adresseLieu", document.getElementById("adresselieu").value);
                    data3.append("cpLieu", document.getElementById("cpLieu").value);
                    data3.append("villeLieu", document.getElementById("villeLieu").value);
                    data3.append("paysLieu", document.getElementById("paysLieu").value);
                    data3.append("regionLieu", document.getElementById("region").value);

                    ajaxPost("http://localhost:8080/api/modifierRdv.php", data3, function(reponse2){
                        var rep2 = JSON.parse(reponse2);
                        if(rep2)
                            {
                                var repUtilisateur = alert("Le nouveau lieu ainsi que les nouvelles modifications du rendez-vous ont bien été ajouté");
                                document.location.href = "agenda.php?annee=2017";
                            }
                        else{
                                alert("Une erreur est survenue: veuillez vérifier les informations saisies (Attention : le nom du nouveau lieu doit être différent de ceux déjà existant)");
                        }
                    });
                });
            }
            else
                {
                    var idLieu = document.getElementById("libelleLieu").value;
                    var data3 = new FormData();
                    data3.append("id", document.getElementById("idRdv").value);
                    data3.append("date", horaire);
                    data3.append("description", document.getElementById("description").value);
                    data3.append("id_praticien", document.getElementById("praticien").value);
                    data3.append("id_lieu", idLieu);
                    data3.append("titre", document.getElementById("titre").value);
                    data3.append("id_utilisateur", document.getElementById("idUser").value);
                    data3.append("adresseLieu", document.getElementById("adresselieu").value);
                    data3.append("cpLieu", document.getElementById("cpLieu").value);
                    data3.append("villeLieu", document.getElementById("villeLieu").value);
                    data3.append("paysLieu", document.getElementById("paysLieu").value);
                    data3.append("regionLieu", document.getElementById("region").value);

                    ajaxPost("http://localhost:8080/api/modifierRdv.php", data3, function(reponse2){
                        console.log(reponse2);
                        var rep2 = JSON.parse(reponse2);
                        if(rep2)
                            {
                                alert("Rendez-vous modifié");
                                document.location.href = "agenda.php?annee=2017";
                            }
                        else{
                            alert("Erreur : Opération échouée, veuillez vérifier vos informations saisies ou votre connexion Internet");
                        }
                    });
                }
                    
        }
});