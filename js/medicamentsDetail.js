var idProduit = document.getElementById("id_produit").value;

var data = new FormData();
data.append("id_produit", idProduit);

ajaxPost("http://localhost:8080/api/getProduitById.php", data, function(reponse){
    var produit = JSON.parse(reponse);
    
    var nomElement = document.getElementById("nom");
    var divNom = document.createElement("div");
    divNom.textContent = produit.libelle;
    nomElement.appendChild(divNom);
    
    var laboElement = document.getElementById("labo");
    var divLabo = document.createElement("div");
    divLabo.textContent = produit.laboratoire.nom;
    laboElement.appendChild(divLabo);
    
    var familleElement = document.getElementById("famille");
    var divFamille = document.createElement("div");
    divFamille.textContent = produit.famille.libelle;
    familleElement.appendChild(divFamille);
    
    var compositionElement = document.getElementById("composition");
    var divComposition = document.createElement("div");
    if(produit.composant !== null)
        {
            for(var i = 0; i < produit.composant.length; i++)
            {
                if(i == produit.composant.length -1)
                    {
                        divComposition.textContent += produit.composant[i].libelle;
                    }
                else
                    {
                        divComposition.textContent += produit.composant[i].libelle + ", ";
                    }
            }
            compositionElement.appendChild(divComposition);
        }
    
    var effetsElement = document.getElementById("effets");
    var divEffets = document.createElement("div");
    divEffets.textContent = produit.effets;
    effetsElement.appendChild(divEffets);
    
    var contreIndicationsElement = document.getElementById("contreIndication");
    var divCI = document.createElement("div");
    divCI.textContent = produit.contre_indications;
    contreIndicationsElement.appendChild(divCI);
    
    var dosageElement = document.getElementById("dosage");
    var divDosage = document.createElement("div");
    divDosage.textContent = produit.dosage;
    dosageElement.appendChild(divDosage);
    
    var typeIndividuElement = document.getElementById("typeIndividu");
    var divTypeIndividu = document.createElement("div");
    divTypeIndividu.textContent = produit.type_individu;
    typeIndividuElement.appendChild(divTypeIndividu);
});


document.getElementById("supprimer").addEventListener("click", function(){
    var data = new FormData();
    data.append("id_produit", idProduit);
    ajaxPost("http://localhost:8080/api/getCompteRenduByIdProduit.php", data, function(reponse){
        var comptesRendus = JSON.parse(reponse);
        if(comptesRendus !== null && comptesRendus.size > 0)
            {
                alert("Vous ne pouvez pas supprimer ce produit car un compte rendu est basé sur ce médicament");
            }
        else
            {
                var repUtilisateur = confirm("Etes-vous sûr de vouloir supprimer ce produit?");
                if(repUtilisateur)
                    {
                        var data = new FormData();
                        data.append("id_produit", idProduit);

                        ajaxPost("http://localhost:8080/api/removeProduitById.php", data, function(reponse){
                            var rep = JSON.parse(reponse);
                            if(rep)
                                {
                                    document.location.href="medicamentsListe.php";
                                }
                            else{
                                alert("Suppression échouée");
                            }
                        });
                    }
            }
    });
    
});