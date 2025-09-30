// elemnet select
let signupbtn = document.querySelector(".signnin");
let registrationBox =document.querySelector(".box");
let loginbox = document.querySelector(".logobox");
let pass1 =document.querySelector(".iconpassword");
let pass2 =document.querySelector(".icon2password");

let pasinput =document.querySelector("#passinput");
let pasinput2 =document.querySelector("#cfinput");


// signup btn click event

signupbtn.addEventListener("click" ,(e)=>{

  e.preventDefault()

  registrationBox.style = "display:none"
  loginbox.style ="display:block"

})
// login btn click event
loginbox.addEventListener("click" ,(e)=>{
    e.preventDefault()
})


// registration eye icon toggle
pass1.addEventListener("click" ,()=>{
    
   if(pasinput.type === "password"){

       pasinput.type = "text";
       pass1.classList.remove("fa-eye");
       pass1.classList.add("fa-eye-slash");

   } else{

       pasinput.type = "password";
       pass1.classList.remove("fa-eye-slash");
       pass1.classList.add("fa-eye");
       

   }
    

} )


pass2.addEventListener("click" ,()=>{

    if(pasinput2.type === "password"){

       pasinput2.type = "text";
       pass2.classList.remove("fa-eye");
       pass2.classList.add("fa-eye-slash");

   } else{

       pasinput2.type = "password";
       pass2.classList.remove("fa-eye-slash");
       pass2.classList.add("fa-eye");
       

   }
    


})

// login eye icon toggle

let pass3 = document.querySelector(".iconLoginPass");
let logopassinput = document.querySelector("#loginPassword");

pass3.addEventListener("click", () => {
        if (logopassinput.type === "password") {
            logopassinput.type = "text";
            pass3.classList.remove("fa-eye");
            pass3.classList.add("fa-eye-slash");
        } else {
            logopassinput.type = "password";
            pass3.classList.remove("fa-eye-slash");
            pass3.classList.add("fa-eye");
        }
});



