var data = new FormData();
data.append("id_produit", document.getElementById("idProduit").value);
ajaxPost("http://localhost:8080/api/getProduitById.php", data, function(reponse){
    produit = JSON.parse(reponse);
    var data2 = new FormData();
    data2.append("labo_libelle", "");
    ajaxPost("http://localhost:8080/api/getLaboratoireByName.php", data2, function(reponse2){
        var labos = JSON.parse(reponse2);
        labos.forEach(function(labo){
            var optionElt = document.createElement("option");
            optionElt.value = labo.id;
            optionElt.textContent = labo.nom;
            if(labo.id === produit.laboratoire.id)
                {
                    optionElt.selected = true;
                }
            document.getElementById("labo").appendChild(optionElt);
        });
    });

    var data2 = new FormData();
    data2.append("famille_libelle", "");
    ajaxPost("http://localhost:8080/api/getFamilleProduitByName.php", data2, function(reponse2){
        var familles = JSON.parse(reponse2);
        familles.forEach(function(famille){
            var optionElt = document.createElement("option");
            optionElt.value = famille.id;
            optionElt.textContent = famille.libelle;
            if(famille.id === produit.famille.id)
                {
                    optionElt.selected = true;
                }
            document.getElementById("famille").appendChild(optionElt);
        });
    });

    var data2 = new FormData();
    data2.append("libelle_composant", "");
    ajaxPost("http://localhost:8080/api/getComposantByName.php", data2, function(reponse2){
        var composants = JSON.parse(reponse2);
        composants.forEach(function(composant){
            var divElt = document.createElement("div");
            document.getElementById("composants").appendChild(divElt);

            var inputElt = document.createElement("input");
            inputElt.type = "checkbox";
            inputElt.name = composant.id;
            inputElt.setAttribute("class", "checkbox");
            inputElt.id = composant.id;
            if(produit.composant !== null)
                {
                    for(var i = 0; i < produit.composant.length; i++)
                        {
                            if(produit.composant[i].id === composant.id)
                                {
                                    inputElt.checked = true;
                                }
                        }
                }
            divElt.appendChild(inputElt);

            var labelElt = document.createElement("label");
            labelElt.setAttribute("for", composant.id);
            labelElt.textContent = composant.libelle;
            divElt.appendChild(labelElt);
        });
    });

    document.getElementById("nom").value = produit.libelle;
    document.getElementById("effets").value = produit.effets;
    document.getElementById("contreIndications").value = produit.contre_indications;
    document.getElementById("dosage").value = produit.dosage;
    document.getElementById("typeIndividu").value = produit.type_individu;

});