var data = new FormData();
var idUser = document.getElementById("idUser").value;
var login = null;
data.append("id_utilisateur", idUser);
ajaxPost("http://localhost:8080/api/getIdentifiantByUtilisateurId.php", data, function(reponse){
    login = JSON.parse(reponse);
});

document.getElementById("formulaire").addEventListener("submit", function(e){
    e.preventDefault();
    var mdp1 = document.getElementById("mdp1").value;
    var mdp2 = document.getElementById("mdp2").value;
    if(mdp1 === mdp2)
        {
            var mdpUser = prompt("Veuillez entrer votre mot de passe actuel pour confirmer cette action");
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
                    data2.append("mdp", document.getElementById("mdp1").value);
                    data2.append("id_utilisateur", idUser);
                    ajaxPost("http://localhost:8080/api/modifierMdp.php", data2, function(reponse){
                        var rep = JSON.parse(reponse);
                        if(rep)
                            {
                                document.location.href = "monCompte.php?newMdp=true";
                            }
                        else{
                            alert("Opération échouée");
                        }
                    });
                }
            });
        }
    else{
        alert("Les deux mots de passe entrés ne sont pas identiques");
        
    }
});