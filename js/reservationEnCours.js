var idReservation = document.getElementById("idReservation").value;
var data2 = new FormData();
data2.append("id_reservation", idReservation);
ajaxPost("http://localhost:8080/api/getReservationById.php", data2, function(reponse2){
    var reservation = JSON.parse(reponse2);
    document.getElementById("dateDepart").textContent = reservation.date_depart;
    document.getElementById("parcAutoDepart").textContent = reservation.parc_auto_depart.libelle + " (" + reservation.parc_auto_depart.lieu.adresse + ", " + reservation.parc_auto_depart.lieu.cp + " " + reservation.parc_auto_depart.lieu.ville + ", " + reservation.parc_auto_depart.lieu.pays + ")";
    
    var data = new FormData();
    data.append("immatricule_vehicule", reservation.vehicule.immatricule);
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
        
        document.getElementById("immatricul").textContent = vehicule.immatricule;
        document.getElementById("marque").textContent = vehicule.marque.libelle;
        document.getElementById("modele").textContent = vehicule.modele.libelle;
        document.getElementById("description").textContent = vehicule.description;
        document.getElementById("kilometrage").textContent = vehicule.kilometrage;
        document.getElementById("equipement").textContent = vehicule.equipement;
        document.getElementById("energie").textContent = vehicule.energie.libelle;
        document.getElementById("typeVehicule").textContent = vehicule.type_vehicule.libelle;

    });
});



