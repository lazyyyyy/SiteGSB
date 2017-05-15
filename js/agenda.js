document.getElementById("formulaire").addEventListener("submit", function(e){
    e.preventDefault();
    document.location.href = "agenda.php?annee=" + document.getElementById("an").value;
});

var data = new FormData();
data.append("annee", document.getElementById("annee").value);
data.append("id_utilisateur", document.getElementById("idUser").value);
ajaxPost("http://localhost:8080/api/getRdvUtilisateurByAnnee.php", data, function(reponse2){
    var rdvAnnee = JSON.parse(reponse2);
    
    var cases = document.getElementsByClassName("caseJour");

    for(var i = 0; i < cases.length; i++)
        {
            cases[i].addEventListener("click", function(e){
                
                for(var j = 0; j < cases.length; j++)
                    {
                        cases[j].style.backgroundColor = "white";
                    }
                
                e.target.style.backgroundColor = "grey";
                e.stopPropagation();
                document.getElementById("listeRdvElt").style.display = "block";
                var id = e.target.getAttribute("id");
                var tab = id.split("-");
                if(tab[1].length < 2)
                    {
                        tab[1] = "0" + tab[1];
                    }
                if(tab[2].length < 2)
                    {
                        tab[2] = "0" + tab[2];
                    }
                var date = tab[0] + "-" + tab[1] + "-" + tab[2];
                document.getElementById("ajouter").href = "ajouterRdv.php?id=" + date;
                
                var listeRdv = new Array();
                rdvAnnee.forEach(function(rdv){
                    var dateRdv = rdv.date;
                    dateRdv = dateRdv.slice(0, 10);
                    if(date === dateRdv)
                        {
                            listeRdv.push(rdv);
                        }
                document.getElementById("listeRdv").innerHTML = "";
                if(listeRdv.length > 0)
                        {
                            listeRdv.forEach(function(rdv){
                                var divElt = document.createElement("div");
                                divElt.style.border = "5px solid black";
                                divElt.style.marginBottom = "10px";
                                divElt.style.marginTop = "10px";
                                document.getElementById("listeRdv").appendChild(divElt);
                                
                                var aModifierButton = document.createElement("a");
                                aModifierButton.href = "modifierRdv.php?id=" + rdv.id;
                                divElt.appendChild(aModifierButton);
                                var modifierButton = document.createElement("button");
                                modifierButton.textContent = "Modifier";
                                aModifierButton.appendChild(modifierButton);
                                
                                var aSupprimerButton = document.createElement("a");
                                aSupprimerButton.href = "js/supprimerRdv.php?id=" + rdv.id;
                                divElt.appendChild(aSupprimerButton);
                                var supprimerButton = document.createElement("button");
                                supprimerButton.textContent = "Supprimer";
                                aSupprimerButton.appendChild(supprimerButton);
                                
                                var titre = document.createElement("h1");
                                titre.textContent = rdv.titre;
                                titre.style.textAlign = "center";
                                divElt.appendChild(titre);

                                var dateElt = document.createElement("div");
                                divElt.appendChild(dateElt);
                                var dateLabel = document.createElement("label");
                                dateLabel.textContent = "Date: ";
                                dateLabel.style.fontWeight = "bold";
                                dateElt.appendChild(dateLabel);
                                var dateValeur = document.createElement("span");
                                dateValeur.textContent = rdv.date;
                                dateElt.appendChild(dateValeur);
                                
                                var praticienElt = document.createElement("div");
                                divElt.appendChild(praticienElt);
                                var praticienLabel = document.createElement("label");
                                praticienLabel.textContent = "Praticien: ";
                                praticienLabel.style.fontWeight = "bold";
                                praticienElt.appendChild(praticienLabel);
                                var praticienLien = document.createElement("a");
                                praticienLien.href = "praticienDetails.php?id=" + rdv.praticien.id;
                                praticienElt.appendChild(praticienLien);
                                var praticienValeur = document.createElement("span");
                                praticienValeur.textContent = rdv.praticien.nom.toUpperCase() + " " + rdv.praticien.prenom.charAt(0).toUpperCase() + rdv.praticien.prenom.slice(1).toLowerCase();
                                praticienLien.appendChild(praticienValeur);
                                
                                var lieuElt = document.createElement("div");
                                divElt.appendChild(lieuElt);
                                var lieuLabel = document.createElement("label");
                                lieuLabel.textContent = "Lieu: ";
                                lieuLabel.style.fontWeight = "bold";
                                lieuElt.appendChild(lieuLabel);
                                var lieuValeur = document.createElement("span");
                                lieuValeur.textContent = rdv.lieu.libelle + " (" + rdv.lieu.adresse + ", " + rdv.lieu.cp + " " + rdv.lieu.ville + ", " + rdv.lieu.pays + ")";
                                lieuElt.appendChild(lieuValeur);
                                
                                var descriptionElt = document.createElement("div");
                                divElt.appendChild(descriptionElt);
                                var descriptionLabel = document.createElement("label");
                                descriptionLabel.textContent = "Description: ";
                                descriptionLabel.style.fontWeight = "bold";
                                descriptionElt.appendChild(descriptionLabel);
                                var descriptionValeur = document.createElement("span");
                                descriptionValeur.textContent = rdv.description;
                                descriptionElt.appendChild(descriptionValeur);
                            });
                        }
                });
                
                
                /*var data = new FormData();
                data.append("date", date);
                data.append("id_utilisateur", document.getElementById("idUser").value);
                ajaxPost("http://localhost:8080/api/getRdvUtilisateurByDate.php", data, function(reponse){
                    var listeRdv = JSON.parse(reponse);
                    console.log(listeRdv);
                    if(listeRdv !== null)
                        {
                            document.getElementById("listeRdv").innerHTML = "";
                            document.getElementById("listeRdv").style.display = "block";
                            listeRdv.forEach(function(rdv){
                                var divElt = document.createElement("div");
                                divElt.style.border = "5px solid black";
                                divElt.style.marginBottom = "10px";
                                document.getElementById("listeRdv").appendChild(divElt);

                                var table = document.createElement("table");
                                divElt.appendChild(table);
                                var trElt = document.createElement("tr");
                                table.appendChild(trElt);
                                var thElt = document.createElement("th");
                                thElt.textContent = "TEST";
                                trElt.appendChild(thElt);
                            });
                        }
                    else{
                        document.getElementById("listeRdv").innerHTML = "";
                        document.getElementById("listeRdv").style.display = "none";
                    }
                });*/
            });
            
            /*var numeroJourElt = document.getElementsByClassName("relative");
            for(var k = 0; k < numeroJourElt.length; k++)
                {
                    numeroJourElt[k].addEventListener("click", function(e){
                        e.preventDefault();
                        e.target.parentElement.click();
                    });
                }
            
            var numeroJour = document.getElementsByClassName("day");
            for(var l = 0; l < numeroJour.length; l++)
                {
                    numeroJour[l].addEventListener("click", function(e){
                        e.preventDefault();
                        e.target.parentElement.parentElement.click();
                    });
                }*/
        }
    
    if(document.getElementById("annee").value === "2017")
        {
            var mois = document.getElementById("mois").value;
            if(mois.charAt(0) === '0')
                {
                    mois = mois.slice(1);
                }
            document.getElementById("linkMonth" + mois).click();
            
            var tabJours = document.getElementById("dateDuJour").value.split("-");
            if(tabJours[1].charAt(0) === "0")
                {
                    tabJours[1] = tabJours[1].slice(1);
                }
            if(tabJours[2].charAt(0) === "0")
                {
                    tabJours[2] = tabJours[2].slice(1);
                }
            var dateJour = tabJours[0] + "-" + tabJours[1] + "-" + tabJours[2];
            document.getElementById(dateJour).click();
        }
});