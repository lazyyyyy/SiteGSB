function ajaxGet(url, callback)
{
    var req = new XMLHttpRequest();
    
    req.open("GET", url);
    
    req.addEventListener("load", function(reponse){
        if(req.status >= 200 && req.status < 400)
            {
                callback(reponse);
            }
        else{
            console.error(req.status + " " + req.statusText);
        }
    });
    
    req.addEventListener("error", function(){
        console.error("Erreur réseau");
    });
    
    req.send(null);
}

function ajaxPost(url, data, callback, isJson)
{
    var req = new XMLHttpRequest();
    
    req.open("POST", url);
    
    req.addEventListener("load", function(reponse){
        if(req.status >= 200 && req.status < 400)
            {
                callback(reponse);
            }
        else{
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    
    req.addEventListener("error", function(){
        console.error("Erreur réseau: " + url);
    });
    
    if (isJson) {
        // Définit le contenu de la requête comme étant du JSON
        req.setRequestHeader("Content-Type", "application/json");
        // Transforme la donnée du format JSON vers le format texte avant l'envoi
        data = JSON.stringify(data);
    }
    
    req.send(data);
}