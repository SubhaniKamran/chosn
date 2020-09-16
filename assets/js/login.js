//Login

var email_login_key="";
var password_login_key="";

var webStateUrl = "./";


var l_email = document.getElementById('l_email');
if(l_email){
  l_email.addEventListener("keyup", function(){
        
        email_login_key = $(this).val().toLowerCase();

 });
}


var l_pass = document.getElementById('l_pass');
if(l_pass){
  l_pass.addEventListener("keyup", function(){
        
        password_login_key = $(this).val().toLowerCase();

 });
}

var signInBtn = document.getElementById('signInBtn');
if(signInBtn){

signInBtn.addEventListener("click", function(){
      
        if(email_login_key == "")
        {
                document.getElementById("l_email").style.border="2px solid #DC3F79";
                document.getElementById('l_email').style.borderRadius = '0.3em'; // w3c
                
                
                console.log("Email Required!");
        }
        if(password_login_key == "")
        {
                document.getElementById("l_pass").style.border="2px solid #DC3F79";
                document.getElementById('l_pass').style.borderRadius = '0.3em'; // w3c


                console.log("Password Required!");
        }
        if(password_login_key !== "" && email_login_key !=="")
        {
                
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_login_key))
                  {
                        var u_email = localStorage.getItem("u_email");
                        var u_pass = localStorage.getItem("u_pass");
                          if(u_email == null)
                          {
                                alert("Register your account");     
                          }else
                          {
                                 
                                 if(u_email == email_login_key && u_pass                      ==password_login_key)
                                {
                                      window.location.href = webStateUrl+"questions.html"
                                }else{
                                        alert("Check your login Credentials")
                                }
                          }
                        
                  }else
                  {
                        alert("Not varified Email");
                  }


        }
        
        
});



}


