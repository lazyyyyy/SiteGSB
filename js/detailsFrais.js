var data = new FormData();

data.append("id_frais", document.getElementById("idFrais").value);
ajaxPost("http://localhost:8080/api/getFraisById.php", data, function(reponse){
    var frais = JSON.parse(reponse);
    
    if(frais.date_modification !== null)
        {
            document.getElementById("modifElt").style.display = "block";
            document.getElementById("dateModif").textContent = frais.date_modification;
        }
    else{
        document.getElementById("modifElt").style.display = "none";
    }
    
    document.getElementById("numero").textContent = frais.id;
    document.getElementById("dateCreation").textContent = frais.date_creation;
    document.getElementById("utilisateur").textContent = frais.utilisateur.nom.toUpperCase() + " " + frais.utilisateur.prenom[0].toUpperCase() + frais.utilisateur.prenom.toLowerCase().slice(1);
    document.getElementById("typeFrais").textContent = frais.type_frais.libelle;
    document.getElementById("date").textContent = frais.date;
    document.getElementById("montant").textContent = frais.montant;
    document.getElementById("commentaire").textContent = frais.commentaire;
    
    
    var data2 = new FormData();
    data2.append("id_frais", document.getElementById("idFrais").value);
    ajaxPost("http://localhost:8080/api/getPjByIdFrais.php", data2, function(reponse2){
        var piecesJointes = JSON.parse(reponse2);
        if(piecesJointes !== null)
            {
                piecesJointes.forEach(function(pj){
                    var divElt = document.createElement("div");
                    document.getElementById("pj").appendChild(divElt);

                    var aElt = document.createElement("a");
                    aElt.href = pj.url;
                    divElt.appendChild(aElt);

                    var nomPj = document.createElement("label");
                    nomPj.textContent = pj.libelle;
                    aElt.appendChild(nomPj);
                });
            }
    });
    
});

document.getElementById("supprimer").addEventListener("click", function(){
    var repUtilisateur = confirm("Etes-vous sûr de vouloir supprimer cette fiche de frais?");
    if(repUtilisateur)
        {
            var idFrais = document.getElementById("idFrais").value;
    
            var data = new FormData();
            data.append("id_frais", idFrais);
            console.log(idFrais);

            ajaxPost("http://localhost:8080/api/removeFraisById.php", data, function(reponse){
                document.location.href = "gestiondesfraisListe.php";
            });
        }
});