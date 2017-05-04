var data = new FormData();
var idUser = document.getElementById("idUser").value;
var login = null;
data.append("id_utilisateur", idUser);
ajaxPost("http://localhost:8080/api/getIdentifiantByUtilisateurId.php", data, function(reponse){
    login = JSON.parse(reponse);
    document.getElementById("loginActuel").textContent += login;
});

document.getElementById("formulaire").addEventListener("submit", function(e){
    e.preventDefault();
    var mdpUser = prompt("Veuillez entrer votre mot de passe pour pouvoir valider ce changement");
    var data = new FormData();
    data.append("login", login);
    data.append("mdp", mdpUser);
    ajaxPost("http://localhost:8080/api/login.php", data, function(reponse){
        var user = JSON.parse(reponse);
        if(user.id === null)
            {
                alert("Mot de passe incorrect");
            }
        else{
            var data2 = new FormData();
            data2.append("login", document.getElementById("newLogin").value);
            data2.append("id_utilisateur", idUser);
            ajaxPost("http://localhost:8080/api/modifierLogin.php", data2, function(reponse){
                var rep = JSON.parse(reponse);
                if(rep)
                    {
                        document.location.href = "monCompte.php?newLogin=true";
                    }
                else{
                    alert("Opération échouée");
                }
            });
        }
    });
});