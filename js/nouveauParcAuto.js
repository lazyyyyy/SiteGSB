ajaxGet("http://localhost:8080/api/getParcAuto.php", function(reponse){
    var parcsAutos = JSON.parse(reponse);
    var listeParcsAutos = new Array();
    var listeLieux = new Array();
    parcsAutos.forEach(function(parcAuto){
        listeParcsAutos.push(parcAuto.libelle);
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
    
    
    document.getElementById("formulaire").addEventListener("submit", function(e){
        e.preventDefault();
        var probleme = false;
        for(var i = 0; i < listeParcsAutos.length; i++)
            {
                if(listeParcsAutos[i].toUpperCase() === document.getElementById("nom").value.toUpperCase())
                    {
                        probleme = true;
                    }
            }
        if(probleme)
            {
                alert("Ce nom de parc automobile existe déjà, veuillez en choisir un autre");
            }
        else{
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
                        console.log(reponse);
                        var rep = JSON.parse(reponse);
                    });

                    var data2 = new FormData();
                    data2.append("nom_lieu", document.getElementById("newLieu").textContent);
                    console.log(document.getElementById("newLieu").textContent);
                    ajaxPost("http://localhost:8080/api/getLieuByName.php", data2, function(reponse2){
                        console.log("getLieuByName " + reponse2);
                        var lieux = JSON.parse(reponse2);
                        var idLieu = null;
                        lieux.forEach(function(lieu){
                            idLieu = lieu.id;

                        });
                        var data3 = new FormData();
                        data3.append("libelle", document.getElementById("nom").value);
                        data3.append("id_lieu", idLieu);
                        console.log("idLieu = " + idLieu);
                        data3.append("adresseLieu", document.getElementById("adresselieu").value);
                        data3.append("cpLieu", document.getElementById("cpLieu").value);
                        data3.append("villeLieu", document.getElementById("villeLieu").value);
                        data3.append("paysLieu", document.getElementById("paysLieu").value);
                        data3.append("regionLieu", document.getElementById("region").value);

                        ajaxPost("http://localhost:8080/api/addParcAuto.php", data3, function(reponse2){
                            console.log("addParcAuto = " + reponse2);
                            var rep2 = JSON.parse(reponse2);
                            if(rep2)
                                {
                                    var repUtilisateur = alert("Le nouveau lieu ainsi que le nouveau parc automobile ont bien été ajouté");
                                    document.location.href = "parcauto.php?id=" + document.getElementById("region").value;
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
                        data3.append("libelle", document.getElementById("nom").value);
                        data3.append("id_lieu", idLieu);
                        data3.append("adresseLieu", document.getElementById("adresselieu").value);
                        data3.append("cpLieu", document.getElementById("cpLieu").value);
                        data3.append("villeLieu", document.getElementById("villeLieu").value);
                        data3.append("paysLieu", document.getElementById("paysLieu").value);
                        data3.append("regionLieu", document.getElementById("region").value);

                        ajaxPost("http://localhost:8080/api/addParcAuto.php", data3, function(reponse2){
                            console.log(reponse2);
                            var rep2 = JSON.parse(reponse2);
                            if(rep2)
                                {
                                    alert("Nouveau Parc automobile ajouté");
                                    document.location.href = "parcauto.php?id=" + document.getElementById("region").value;
                                }
                            else{
                                alert("Erreur : Opération échouée, veuillez vérifier vos informations saisies ou votre connexion Internet");
                            }
                        });
                    }
        }
    });
});