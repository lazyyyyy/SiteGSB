var check = new Array();
var listeProduits = new Array();

var data = new FormData();
data.append("nom_produit", "");
ajaxPost("http://localhost:8080/api/getProduitByName.php", data, function(reponse){
    var produits = JSON.parse(reponse);
    produits.forEach(function(produit){
        listeProduits.push(produit.libelle);
    });
});

var data = new FormData();
data.append("labo_libelle", "");
ajaxPost("http://localhost:8080/api/getLaboratoireByName.php", data, function(reponse){
    var labos = JSON.parse(reponse);
    labos.forEach(function(labo){
        var optionElt = document.createElement("option");
        optionElt.value = labo.id;
        optionElt.textContent = labo.nom;
        document.getElementById("labo").appendChild(optionElt);
    });
});

var data = new FormData();
data.append("famille_libelle", "");
ajaxPost("http://localhost:8080/api/getFamilleProduitByName.php", data, function(reponse){
    var familles = JSON.parse(reponse);
    familles.forEach(function(famille){
        var optionElt = document.createElement("option");
        optionElt.value = famille.id;
        optionElt.textContent = famille.libelle;
        document.getElementById("famille").appendChild(optionElt);
    });
});

var data = new FormData();
data.append("libelle_composant", "");
ajaxPost("http://localhost:8080/api/getComposantByName.php", data, function(reponse){
    var composants = JSON.parse(reponse);
    composants.forEach(function(composant){
        var divElt = document.createElement("div");
        document.getElementById("composants").appendChild(divElt);
        
        var inputElt = document.createElement("input");
        inputElt.type = "checkbox";
        inputElt.name = composant.id;
        inputElt.setAttribute("class", "checkbox");
        inputElt.id = composant.id;
        inputElt.addEventListener("change", function(e){
            if(e.target.checked)
                {
                    check.push(e.target.name);
                }
            else{
                if(check.length > 0)
                    {
                        for(var i = 0; i < check.length; i++)
                        {
                            if(check[i] === e.target.name)
                                {
                                    check.splice(i, 1);
                                }
                        }
                    }
            }
        });
        divElt.appendChild(inputElt);
        
        var labelElt = document.createElement("label");
        labelElt.setAttribute("for", composant.id);
        labelElt.textContent = composant.libelle;
        divElt.appendChild(labelElt);
    });
});

document.getElementById("formulaire").addEventListener("submit", function(e){
    e.preventDefault();
    var probleme = false;
    for(var i = 0; i < listeProduits.length; i++)
        {
            if(listeProduits[i].toUpperCase() === document.getElementById("nom").value.toUpperCase())
                {
                    probleme = true;
                }
        }
    if(probleme)
        {
            alert("Ce nom existe déjà, veuillez en choisir un autre");
        }
    else{
                /*document.getElementById("serialElt").innerHTML = "<input type='hidden' name='serial' id='serial' value='<?php echo serialize(json_decode(" + JSON.stringify(check) + ")) ?>' /> "; */      
        
                var data = new FormData();
                data.append("libelle", document.getElementById("nom").value);
                data.append("effets", document.getElementById("effets").value);
                data.append("contre_indications", document.getElementById("contreIndications").value);
                data.append("dosage", document.getElementById("dosage").value);
                data.append("type_individu", document.getElementById("typeIndividu").value);
                data.append("id_laboratoire", document.getElementById("labo").value);
                data.append("id_famille", document.getElementById("famille").value);
                data.append("composants", JSON.stringify(check));
                ajaxPost("http://localhost:8080/api/addProduit.php", data, function(reponse){
                    console.log(reponse);
                    var rep = JSON.parse(reponse);
                    if(rep)
                        {
                            document.location.href = "medicamentsListe.php";
                        }
                    else{
                        alert("Opération échouée");
                    }
                });
            }
});