var data = new FormData();
data.append("id_praticien", document.getElementById("id_praticien").value);

ajaxPost("http://localhost:8080/api/getPraticienById.php", data, function(reponse){
    var praticien = JSON.parse(reponse);
    
    var nomElt = document.getElementById("nom");
    var nom = document.createElement("div");
    nom.textContent = praticien.nom;
    nomElt.appendChild(nom);
    
    var prenomElt = document.getElementById("prenom");
    var prenom = document.createElement("div");
    prenom.textContent = praticien.prenom;
    prenomElt.appendChild(prenom);
    
    var telFixeElt = document.getElementById("telFixe");
    var telFixe = document.createElement("div");
    telFixe.textContent = praticien.telephone_fixe;
    telFixeElt.appendChild(telFixe);
    
    var telPortableElt = document.getElementById("telPortable");
    var telPortable = document.createElement("div");
    telPortable.textContent = praticien.telephone_portable;
    telPortableElt.appendChild(telPortable);
    
    var mailElt = document.getElementById("mail");
    var mail = document.createElement("div");
    mail.textContent = praticien.mail;
    mailElt.appendChild(mail);
    
    var typePraticienElt = document.getElementById("typePraticien");
    var typePraticien = document.createElement("div");
    typePraticien.textContent = praticien.type_praticien.libelle;
    typePraticienElt.appendChild(typePraticien);
    
    var specialiteElt = document.getElementById("specialite");
    var specialite = document.createElement("div");
    specialite.textContent = praticien.specialite.libelle;
    specialiteElt.appendChild(specialite);
    
    var lieuElt = document.getElementById("lieu");
    var lieu = document.createElement("div");
    lieu.textContent = praticien.lieu.libelle + " (" + praticien.lieu.adresse + ", " + praticien.lieu.cp + " " + praticien.lieu.ville + ", " + praticien.lieu.pays + ")";
    lieuElt.appendChild(lieu);
    
    var regionElt = document.getElementById("region");
    var region = document.createElement("div");
    region.textContent = praticien.lieu.region.libelle;
    regionElt.appendChild(region);
    
    var derniereVisiteElt = document.getElementById("derniereVisite");
    var derniereVisite = document.createElement("div");
    derniereVisite.textContent = praticien.date_derniere_visite;
    derniereVisiteElt.appendChild(derniereVisite);
});

//Pour gérer le bouton "Supprimer"
document.getElementById("supprimer").addEventListener("click", function(){
    console.log("click");
    var reponse = confirm("Voulez-vous supprimer ce praticien?");
    if(reponse)
        {
            var data2 = new FormData();
            data2.append("id_praticien", document.getElementById("id_praticien").value);
            
            ajaxPost("http://localhost:8080/api/removePraticien.php", data2, function(response){
                var resultat = JSON.parse(response);
                if(resultat)
                    {
                        document.location.href = "http://localhost:8080/html/praticiensListe.php";
                    }
                else
                    {
                        alert("Erreur : Suppression annulée");
                    }
            });
        }
});