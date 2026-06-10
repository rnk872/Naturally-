function login(){
let email=document.getElementById("email").value;
let pass=document.getElementById("password").value;

let users=DB.get("users");

let u=users.find(x=>x.email==email && x.password==pass);

if(u){
localStorage.setItem("currentUser",JSON.stringify(u));
alert("Login Success");
window.location="dashboard.html";
}else{
alert("Invalid");
}
}

function requireLogin(){
if(!localStorage.getItem("currentUser")){
window.location="login.html";
}
}
