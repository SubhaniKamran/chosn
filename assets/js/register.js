var webStateUrl = "./";    
  // SignUp

var email_reg_key="";
var password_reg_key="";

var r_email = document.getElementById('r_email');
if(r_email){
  r_email.addEventListener("keyup", function(){
        
        email_reg_key = $(this).val().toLowerCase();

 });

}


var r_pass = document.getElementById('r_pass');
if(r_pass){
  r_pass.addEventListener("keyup", function(){
        
        password_reg_key = $(this).val().toLowerCase();

 });

}


var reg_btn = document.getElementById('reg_btn');
if(reg_btn){
  reg_btn.addEventListener("click", function(){

        if(email_reg_key == "")
        {
                document.getElementById("r_email").style.border="2px solid #DC3F79";
                document.getElementById('r_email').style.borderRadius = '0.3em'; // w3c
                
                
                console.log("Email Required!");
        }
        if(password_reg_key == "")
        {
                document.getElementById("r_pass").style.border="2px solid #DC3F79";
                document.getElementById('r_pass').style.borderRadius = '0.3em'; // w3c


                console.log("Password Required!");
        }
        if(password_reg_key !== "" && email_reg_key !=="")
        {
                
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_reg_key))
                  {

                         localStorage.setItem("u_email",email_reg_key);
                         localStorage.setItem("u_pass",password_reg_key);
                         window.location.href = webStateUrl+"login.html"
                  }else
                  {
                        alert("Not Correct Email");
                  }


        }
        
        
});
       


}
