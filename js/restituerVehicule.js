/*var parcAutoByRegion = new Array();
var regionElt = document.getElementById("region");
var parcAutoElt = document.getElementById("parcAuto");
var data =  new FormData();
var num = 0;
data.append("nom_region", "");
ajaxPost("http://localhost:8080/api/getRegionByName.php", data, function(reponse){
    var regions = JSON.parse(reponse);
    regions.forEach(function(region){
        var optionElt = document.createElement("option");
        optionElt.value = region.id;
        num = region.id;
        parcAutoByRegion[num] = new Array();
        optionElt.textContent = region.libelle;
        regionElt.appendChild(optionElt);
        
        var data2 = new FormData();
        data2.append("id_region", region.id);
        ajaxPost("http://localhost:8080/api/getParcAutoByIdRegion.php", data2, function(reponse2){
            var i = 0;
            var parcsAutos = JSON.parse(reponse2);
            if(parcsAutos !== null)
                {
                    parcsAutos.forEach(function(parcAuto){
                    parcAutoByRegion[num][i] = parcAuto;
                    i++;
                    });
                }
        });
    });
});
*/

ajaxGet("http://localhost:8080/api/getParcAuto.php", function(reponse){
    var parcsAutos = JSON.parse(reponse);
    parcsAutos.forEach(function(parcAuto){
        var optionElt = document.createElement("option");
        optionElt.value = parcAuto.id;
        optionElt.textContent = parcAuto.libelle + " (" + parcAuto.lieu.adresse + ", " + parcAuto.lieu.cp + " " + parcAuto.lieu.ville + ", " + parcAuto.lieu.pays + ")";
        document.getElementById("parcAuto").appendChild(optionElt);
    });
});

document.getElementById("formulaire").addEventListener("submit", function(e){
    e.preventDefault();
    var data = new FormData();
    data.append("id_reservation", document.getElementById("idReservation").value);
    ajaxPost("http://localhost:8080/api/getReservationById.php", data, function(reponse){
        var reservation = JSON.parse(reponse);
        var data2 = new FormData();
        data2.append("id_parc_automobile", document.getElementById("parcAuto").value);
        data2.append("id_utilisateur", reservation.utilisateur.id);
        data2.append("distance_parcourue", document.getElementById("distance").value);
        ajaxPost("http://localhost:8080/api/rendreVehicule.php", data2, function(reponse2){
            var rep = JSON.parse(reponse2);
            if(rep)
            {
                document.location.href = "mesReservationsVehicules.php?id=" + reservation.utilisateur.id;
            }
            else{
                alert("Une erreur est survenue: veuillez réessayer plus tard");
            }
        });
    });
});