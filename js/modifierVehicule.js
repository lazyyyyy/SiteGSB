var immatricule = document.getElementById("immat").value;
var listeImmatriculations = new Array();
var data = new FormData();
data.append("immatricule_vehicule", immatricule);
ajaxPost("http://localhost:8080/api/getVehicule.php", data, function(reponse){
    var ceVehicule = JSON.parse(reponse);
    
    ajaxGet("http://localhost:8080/api/getVehiculesListe.php", function(reponse){
        var vehicules = JSON.parse(reponse);
        vehicules.forEach(function(vehicule){
            if(vehicule.immatricule !== ceVehicule.immatricule)
                {
                    listeImmatriculations.push(vehicule.immatricule);
                }
        });
        document.getElementById("immatricule").addEventListener("blur", function(e){
        var regex = /^([A-Z][A-Z]-\d\d\d-[A-Z][A-Z]){1}$/;
        if(!regex.test(e.target.value))
            {
                alert("Plaque d'immatriculation invalide. Veuillez entrer une plaque sous le format: AA-111-AA");
                document.getElementById("immatricule").value = "";
            }
        else if(listeImmatriculations.indexOf(e.target.value) !== -1)
            {
                alert("Cette immatriculation existe déjà");
                document.getElementById("immatricule").value = immatricule;
            }
        else{
            document.getElementById("erreurImmatricule").textContent = "";
        }
    });
    });
    
    var listeMarques = new Array();
    var listeModels = new Array();
    var data = new FormData();
    data.append("nom", "");
    ajaxPost("http://localhost:8080/api/getMarquesVehiculesByName.php", data, function(reponse){
        var marques = JSON.parse(reponse);
        marques.forEach(function(marque){
            listeMarques.push(marque);
            var optionElt = document.createElement("option");
            optionElt.value = marque.id;
            optionElt.textContent = marque.libelle;
            if(marque.id === ceVehicule.marque.id)
                {
                    optionElt.selected = true;
                    
                    var data = new FormData();
                    data.append("id_marque", marque.id);
                    ajaxPost("http://localhost:8080/api/getModelsVehiculesByMarqueId.php", data, function(reponse){
                        var models = JSON.parse(reponse);
                        models.forEach(function(model){
                            listeModels.push(model);
                            var optionElt2 = document.createElement("option");
                            optionElt2.value = model.id;
                            optionElt2.textContent = model.libelle;
                            if(model.id === ceVehicule.modele.id)
                                {
                                    optionElt2.selected = true;
                                }
                            
                            document.getElementById("model").appendChild(optionElt2);
                        });
                    });
                }
            document.getElementById("marque").appendChild(optionElt);

        });


        /*for(var i = 0; i < listeMarques.length; i++)
            {
                if(listeMarques[i].id === document.getElementById("marque").value)
                    {
                        for(var j = 0; j < listeModels.length; j++)
                            {
                                if(listeModels[j].marque.id === document.getElementById("marque").value)
                                    {
                                        console/log("OK");
                                        var optionElt = document.createElement("option");
                                        optionElt.value = listeModels[j].id;
                                        optionElt.textContent = listeModels[j].libelle;
                                        document.getElementById("model").appendChild(optionElt);
                                    }
                                else{
                                    console.log("model correspond pas");
                                }
                            }
                    }
                else{
                    console.log("marque correspond pas");
                }
            }*/
    });
});

document.getElementById("marque").addEventListener("change", function(e){
    document.getElementById("model").innerHTML = "";
    var data = new FormData();
        data.append("id_marque", document.getElementById("marque").value);
        ajaxPost("http://localhost:8080/api/getModelsVehiculesByMarqueId.php", data, function(reponse){
            var models = JSON.parse(reponse);
            models.forEach(function(model){
                listeModels.push(model);
                var optionElt = document.createElement("option");
                optionElt.value = model.id;
                optionElt.textContent = model.libelle;
                document.getElementById("model").appendChild(optionElt);
            });
        });
});

/*window.addEventListener("load", function(){
    document.getElementById("model").innerHTML = "";
    var data = new FormData();
        data.append("id_marque", document.getElementById("marque").value);
        ajaxPost("http://localhost:8080/api/getModelsVehiculesByMarqueId.php", data, function(reponse){
            var models = JSON.parse(reponse);
            var data2 = new FormData();
            data2.append("immatricule_vehicule", immatricule);
            ajaxPost("http://localhost:8080/api/getVehicule.php", data2, function(reponse2){
                var vehic = JSON.parse(reponse2);
                models.forEach(function(model){
                    var optionElt = document.createElement("option");
                    optionElt.value = model.id;
                    optionElt.textContent = model.libelle;
                    document.getElementById("model").appendChild(optionElt);
                });
            });
        });
});*/

var data = new FormData();
data.append("libelle_energie", "");
ajaxPost("http://localhost:8080/api/getEnergieVehiculeByName.php", data, function(reponse){
    var energies = JSON.parse(reponse);
    energies.forEach(function(energie){
        var optionElt = document.createElement("option");
        optionElt.value = energie.id;
        optionElt.textContent = energie.libelle;
        document.getElementById("energie").appendChild(optionElt);
    });
});

var data = new FormData();
data.append("libelle_type_vehicule", "");
ajaxPost("http://localhost:8080/api/getTypeVehiculeByName.php", data, function(reponse){
    var typesVehicules = JSON.parse(reponse);
    typesVehicules.forEach(function(typeVehicule){
        var optionElt = document.createElement("option");
        optionElt.value = typeVehicule.id;
        optionElt.textContent = typeVehicule.libelle;
        document.getElementById("type_vehicule").appendChild(optionElt);
    });
});

document.getElementById("fichier").addEventListener("change", function(e){
    var fichiers = e.target.files;
    for(var i = 0; i < fichiers.length; i++)
        {
            var name = fichiers[i].name;
            if(name.split('.').reverse()[0].toUpperCase() !== "PNG" && name.split('.').reverse()[0].toUpperCase() !== "JPG" && name.split('.').reverse()[0].toUpperCase() !== "JPEG")
                {
                    alert("Veuillez choisir uniquement des images au format .png, .jpg ou .jpeg");
                    document.getElementById("fichier").value = null;
                }
            else{
                document.getElementById("erreurFichier").textContent = "";
            }
        }
    /*console.log(e.target.value.split('.').reverse()[0].toUpperCase());
    */
});

var data = new FormData();
data.append("immatricule_vehicule", immatricule);
ajaxPost("http://localhost:8080/api/getVehicule.php", data, function(reponse){
    var vehicule = JSON.parse(reponse);
    
    document.getElementById("immatricule").value = vehicule.immatricule;
    //document.getElementById("marque").value = vehicule.marque.id;
    //document.getElementById("model").value = vehicule.modele.id;
    document.getElementById("description").value = vehicule.description;
    document.getElementById("km").value = vehicule.kilometrage;
    document.getElementById("equipement").value = vehicule.equipement;
    document.getElementById("energie").value = vehicule.energie.id;
    document.getElementById("type_vehicule").value = vehicule.type_vehicule.id;
});

var data = new FormData();
data.append("immatricule", immatricule);
ajaxPost("http://localhost:8080/api/getImagesVehicule.php", data, function(reponse){
    var liste = new Array();
    var images = JSON.parse(reponse);
    images.forEach(function(image){
        liste.push(image);
        var img = document.createElement("img");
        img.height = "100";
        img.width = "100";
        img.id = image.id;
        img.src = image.image;
        
        img.addEventListener("click", function(e){
            var repUser = confirm("Supprimer cette image? (Le changement ne sera pris en compte que lorsque vous validerez le formulaire)");
            if(repUser)
                {
                    var imgElt = document.getElementById(e.target.id);
                    document.getElementById("anciennesImages").removeChild(imgElt);
                    for(var i = 0; i < liste.length; i++)
                        {
                            if(liste[i].id === e.target.id)
                                {
                                    liste.splice(i, 1);
                                }
                        }
                    document.getElementById("listeAnciennesImages").value = JSON.stringify(liste);
                }
        });
        document.getElementById("anciennesImages").appendChild(img);
    });
    document.getElementById("listeAnciennesImages").value = JSON.stringify(liste);
});


/*for(var i = 0; i < listeImages.length; i++)
    {
        console.log(listeImages.length);
        var img = document.createElement("img");
        img.height = "50";
        img.width = "50";
        img.src = listeImages[i].image;
        document.getElementById("anciennesImages").appendChild(img);
    }

*/