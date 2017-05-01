var data = new FormData();

data.append("id_frais", document.getElementById("idFrais").value);
ajaxPost("http://localhost:8080/api/getFraisById.php", data, function(reponse){
    var frais = JSON.parse(reponse);
    
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
    });
    
});