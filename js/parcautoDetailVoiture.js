var data = new FormData();
var immatricule = document.getElementById("immatricule").value;
var idUser = document.getElementById("idUser").value;
var parcAutoId = document.getElementById("parcAutoId").value;
data.append("immatricule_vehicule", immatricule);
ajaxPost("http://localhost:8080/api/getVehicule.php", data, function(reponse){
    var vehicule = JSON.parse(reponse);
    var contenu = document.getElementById("contenu");
    
    if(vehicule.image !== null)
        {
            var divElt = document.createElement("div");
            contenu.insertBefore(divElt, document.getElementById("immatriculeElt"));
            var image = document.createElement("img");
            image.src = vehicule.image;
            image.height = "108";
            image.width = "192";
            divElt.appendChild(image);
        }
    
    document.getElementById("immatricul").textContent = immatricule;
    document.getElementById("marque").textContent = vehicule.marque.libelle;
    document.getElementById("modele").textContent = vehicule.modele.libelle;
    document.getElementById("description").textContent = vehicule.description;
    document.getElementById("kilometrage").textContent = vehicule.kilometrage;
    document.getElementById("equipement").textContent = vehicule.equipement;
    document.getElementById("energie").textContent = vehicule.energie.libelle;
    document.getElementById("typeVehicule").textContent = vehicule.type_vehicule.libelle;
    
});

document.getElementById("reserver").addEventListener("click", function(){
    var data = new FormData();
    data.append("immatricule_vehicule", immatricule);
    data.append("id_utilisateur", idUser);
    ajaxPost("http://localhost:8080/api/reservationVehicule.php", data, function(reponse){
        var rep = JSON.parse(reponse);
        if(rep === null)
            {
                alert("Vous ne pouvez pas réserver de véhicules, car vous en possédez déjà un actuellement. Veuillez le restituer avant d'en réserver un autre.");
            }
        else if(rep === 0)
            {
                alert("Ce véhicule n'est plus disponible");
                document.location.href = "parcautoVoiture.php?id=" + parcAutoId;
            }
        else if(rep){
            document.location.href="mesReservationsVehicules.php?id=" + idUser;
        }
        else{
            alert("Une erreur est survenue, merci de réessayer plus tard");
        }
    });
});

document.getElementById("supprimer").addEventListener("click", function(e){
    e.preventDefault();
    var data = new FormData();
    data.append("immatricule", document.getElementById("immatricule").value);
    ajaxPost("http://localhost:8080/api/getReservationsByImmatriculeVehicule.php", data, function(reponse){
        var reservations = JSON.parse(reponse);
        if(reservations !== null)
            {
                alert("Impossible de supprimer ce véhicule, car des réservations ont déjà été éffectuées sur ce véhicule");
            }
        else{
            var repUser = confirm("Etes-vous sûr de vouloir supprimer ce véhicule?");
            if(repUser)
                {
                    var data = new FormData();
                    data.append("immatricule_vehicule", document.getElementById("immatricule").value);
                    ajaxPost("http://localhost:8080/api/removeVehiculeByImmatricule.php", data, function(reponse2){
                        console.log(reponse2);
                        var rep = JSON.parse(reponse2);
                        if(rep)
                            {
                                document.location.href = "parcautoVoiture.php?id=" + document.getElementById("immatricule").value;
                            }
                        else{
                            alert("Opération échouée");
                        }
                    });
                }
        }
        
    });
});