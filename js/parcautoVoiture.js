var data = new FormData();
data.append("id_parc_auto", document.getElementById("id_parcauto").value);

ajaxPost("http://localhost:8080/api/getVehiculeByParcAutoId.php", data, function(reponse){
    var vehicules = JSON.parse(reponse);
    var tableau = document.getElementById("tableau");
    if(vehicules !== null)
        {
            vehicules.forEach(function(vehicule){
        var trElt = document.createElement("tr");
        tableau.appendChild(trElt);
        
        var aElt = document.createElement("a");
        aElt.href = "parcautoDetailVoiture.php?id=" + vehicule.immatricule + "&parcAutoId=" + document.getElementById("id_parcauto").value;
        trElt.appendChild(aElt);
        
        var immatriculeElt = document.createElement("td");
        immatriculeElt.textContent = vehicule.immatricule;
        aElt.appendChild(immatriculeElt);
        
        var modeleElt = document.createElement("td");
        modeleElt.textContent = vehicule.modele.libelle;
        trElt.appendChild(modeleElt);
        
        var marqueElt = document.createElement("td");
        marqueElt.textContent = vehicule.marque.libelle;
        trElt.appendChild(marqueElt);
    });
        }
});

document.getElementById("supprimer").addEventListener("click", function(e){
    e.preventDefault();
    var data = new FormData();
    data.append("id_parc_auto", document.getElementById("id_parcauto").value);
    ajaxPost("http://localhost:8080/api/getVehiculeByParcAutoId.php", data, function(reponse){
        var vehicules = JSON.parse(reponse);
        if(vehicules !== null)
            {
                alert("Vous ne pouvez pas supprimer ce parc automobile car il contient des vehicules");
            }
        else{
            var data = new FormData();
            data.append("id_parc_auto", document.getElementById("id_parcauto").value);
            ajaxPost("http://localhost:8080/api/getReservationByParcAutoId.php", data, function(reponse2){
                var reservations = JSON.parse(reponse2);
                if(reservations !== null)
                    {
                        alert("Vous ne pouvez pas supprimer ce parc automobile car des réservations ont déjà été effectuées sur celui-ci");
                    }
                else{
                    var repUser = confirm("Etes-vous sûr de vouloir supprimer ce parc automobile?");
                    if(repUser)
                        {
                            var data = new FormData();
                            data.append("id_parc_auto", document.getElementById("id_parcauto").value);
                            ajaxPost("http://localhost:8080/api/removeParcAutoById.php", data, function(reponse3){
                                var rep = JSON.parse(reponse3);
                                if(rep)
                                    {
                                        document.location.href="parcauto.php?id=" + document.getElementById("idRegion").value;
                                    }
                                else{
                                    alert("Opération échouée");
                                }
                            });
                        }
                }
            });
        }
    });
});