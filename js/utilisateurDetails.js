var nomElt = document.getElementById("nom");
var prenomElt = document.getElementById("prenom");
var dateNaissanceElt = document.getElementById("dateNaissance");
var dateEmbaucheElt = document.getElementById("dateEmbauche");
var telFixeElt = document.getElementById("telFixe");
var telPortableElt = document.getElementById("telPortable");
var mailElt = document.getElementById("mail");
var laboElt = document.getElementById("labo");
var droitElt = document.getElementById("droit");

var idUser = document.getElementById("id_user").value;
var data =  new FormData();
data.append("id_utilisateur", idUser);
ajaxPost("http://localhost:8080/api/getUtilisateurById.php", data, function(reponse){
    var user = JSON.parse(reponse);
    
    var nom = document.createElement("div");
    nom.textContent = user.nom.toUpperCase();
    nomElt.appendChild(nom);
    
    var prenom = document.createElement("div");
    prenom.textContent = user.prenom[0].toUpperCase() + user.prenom.toLowerCase().slice(1);
    prenomElt.appendChild(prenom);
    
    var dateNaissance = document.createElement("div");
    dateNaissance.textContent = user.date_naissance.substring(0, 11);
    dateNaissanceElt.appendChild(dateNaissance);
    
    var dateEmbauche = document.createElement("div");
    dateEmbauche.textContent = user.date_embauche.substring(0, 11);
    dateEmbaucheElt.appendChild(dateEmbauche);
    
    var telFixe = document.createElement("div");
    telFixe.textContent = user.telephone_fixe;
    telFixeElt.appendChild(telFixe);
    
    var telPortable = document.createElement("div");
    telPortable.textContent = user.telephone_portable;
    telPortableElt.appendChild(telPortable);
    
    var mail = document.createElement("div");
    mail.textContent = user.mail;
    mailElt.appendChild(mail);
    
    var labo = document.createElement("div");
    labo.textContent = user.laboratoire.nom;
    laboElt.appendChild(labo);
    
    var droit = document.createElement("div");
    droit.textContent = user.fonction_utilisateur.libelle;
    droitElt.appendChild(droit);
});


document.getElementById("supprimer").addEventListener("click", function(){
    var data = new FormData();
    data.append("id_utilisateur", idUser);
    ajaxPost("http://localhost:8080/api/getCompteRenduByUtilisateurId.php", data, function(reponse){
        var comptesRendus = JSON.parse(reponse);
        if(comptesRendus === null || comptesRendus.size < 1)
            {
                var data2 = new FormData();
                data2.append("id_utilisateur", idUser);
                ajaxPost("http://localhost:8080/api/getFraisByUtilisateurId.php", data2, function(reponse2){
                    var frais = JSON.parse(reponse2);
                    if(frais === null || frais.size < 1)
                        {
                            var data3 = new FormData();
                            data3.append("id_utilisateur", idUser);
                            ajaxPost("http://localhost:8080/api/removeUtilisateur.php", data3, function(reponse3){
                                var rep = JSON.parse(reponse3);
                                if(rep)
                                    {
                                        document.location.href="utilisateursListe.php";
                                    }
                                else{
                                    alert("Suppression échouée");
                                }
                            });
                        }
                    else{
                        alert("Impossible de supprimer cet utilisateur car il a rédigé des fiches de frais. Veuilez supprimer ces derniers avant de supprimer cet utilisateur");
                    }
                });
            }
        else
            {
                alert("Impossible de supprimer cet utilisateur car il a rédigé des comptes-rendus. Veuilez supprimer ces derniers avant de supprimer cet utilisateur");
            }
    });
});

document.getElementById("reinitialiserMdp").addEventListener("click", function(e){
    e.preventDefault();
    var data = new FormData();
    data.append("id_utilisateur", idUser);
    ajaxPost("http://localhost:8080/api/getUtilisateurById.php", data, function(reponse){
        var user = JSON.parse(reponse);
        var mois = user.date_naissance.substr(5, 2);
			switch(mois)
			{
				case "01" : mois = "jan";
				break;
				case "02" : mois = "feb";
				break;
				case "03" : mois = "mar";
				break;
				case "04" : mois = "apr";
				break;
				case "05" : mois = "may";
				break;
				case "06" : mois = "jun";
				break;
				case "07" : mois = "jul";
				break;
				case "08" : mois = "aug";
				break;
				case "09" : mois = "sep";
				break;
				case "10" : mois = "oct";
				break;
				case "11" : mois = "nov";
				break;
				case "12" : mois = "dec";
				break;
			}
		var mdp = user.date_naissance.substr(8, 2) + "-" + mois + "-" + user.date_naissance.substr(0, 4);
        var repUser = confirm("Le nouveau mot de passe sera: " + mdp);
        if(repUser){
            var data2 = new FormData();
            data2.append("mdp", mdp);
            data2.append("id_utilisateur", idUser);
            ajaxPost("http://localhost:8080/api/modifierMdp.php", data2, function(reponse2){
                var rep = JSON.parse(reponse2);
                if(rep){
                    alert("Mot de passe réinitialisé avec succès");
                }
                else{
                    alert("Opération échouée");
                }
            });
        }
    });
});