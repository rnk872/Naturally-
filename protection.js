function protectPage(){
let user=localStorage.getItem("currentUser");
if(!user){
window.location="login.html";
}
}
