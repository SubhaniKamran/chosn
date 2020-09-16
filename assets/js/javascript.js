var path = window.location.pathname;
var page = path.split("/").pop();

if(page === ""){
        
    window.setTimeout(function(){
        
        window.location.href = "./login.html";

    }, 5000);
}
