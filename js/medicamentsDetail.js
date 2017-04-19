var idProduit = document.getElementById("id_produit").value;
console.log(idProduit);

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