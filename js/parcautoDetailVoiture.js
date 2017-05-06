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
    document.getElementById("marque").textContent = vehicule.marque;
    document.getElementById("modele").textContent = vehicule.modele;
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