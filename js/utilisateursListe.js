window.addEventListener("load", function(){
    var loginElt = document.getElementById("login");
    var mdpElt = document.getElementById("mdp");
    if(loginElt !== null && mdpElt !== null)
        {
            alert("Nouvel utilisateur créé.\nLogin: " + loginElt.value + "\nPassword: " + mdpElt.value);
        }
});

var tableau = document.getElementById("tableau");
var data = new FormData();
data.append("nom", "");
ajaxPost("http://localhost:8080/api/getUtilisateurByName.php", data, function(reponse){
    var users = JSON.parse(reponse);
    users.forEach(function(user){
        var trElt = document.createElement("tr");
        tableau.appendChild(trElt);
        
        var aElt = document.createElement("a");
        aElt.href = "utilisateurDetails.php?id=" + user.id;
        trElt.appendChild(aElt);
        
        var nomElt = document.createElement("td");
        nomElt.textContent = user.nom.toUpperCase() + " " + user.prenom[0].toUpperCase() + user.prenom.toLowerCase().slice(1);
        aElt.appendChild(nomElt);
        
        var droitElt = document.createElement("td");
        droitElt.textContent = user.fonction_utilisateur.libelle;
        trElt.appendChild(droitElt);
    });
});