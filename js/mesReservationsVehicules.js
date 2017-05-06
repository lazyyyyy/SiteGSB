var idUser = document.getElementById("idUser").value;
var enCours = document.getElementById("enCours");
var anciennes = document.getElementById("anciennes");
var data = new FormData();
data.append("id_utilisateur", idUser);
ajaxPost("http://localhost:8080/api/getVehiculesReservesByUtilisateurId.php", data, function(reponse){
    var reservations = JSON.parse(reponse);
    reservations.forEach(function(reservation){
        var trElt = document.createElement("tr");
        var url = null;
        if(reservation.date_arrivee === null)
            {
                enCours.appendChild(trElt);
                url = "reservationEnCours.php?id=" + reservation.id;
            }
        else{
            anciennes.appendChild(trElt);
            url = "reservationAncienne.php?id=" + reservation.id;
        }
        
        var aElt = document.createElement("a");
        aElt.href = url;
        trElt.appendChild(aElt);
        
        var immatriculeElt = document.createElement("td");
        immatriculeElt.textContent = reservation.vehicule.immatricule;
        aElt.appendChild(immatriculeElt);
        
        var modeleElt = document.createElement("td");
        modeleElt.textContent = reservation.vehicule.modele;
        trElt.appendChild(modeleElt);
        
        var marqueElt = document.createElement("td");
        marqueElt.textContent = reservation.vehicule.marque;
        trElt.appendChild(marqueElt);
    });
});