window.addEventListener("load", function(){
    var loginElt = document.getElementById("login");
    var mdpElt = document.getElementById("mdp");
    if(loginElt !== null && mdpElt !== null)
        {
            alert.title("Nouvel utilisateur créé");
            alert("Nouvel utilisateur créé\nLogin: " + loginElt.value + "\nPassword: " + mdpElt.value);
        }
});