function addToCart(id){
let cart=DB.get("cart");
let p=Products.find(x=>x.id==id);
let f=cart.find(x=>x.id==id);
if(f){f.qty++;}
else{cart.push({...p,qty:1});}
DB.set("cart",cart);
}

function loadCart(){
let c=DB.get("cart");
let box=document.getElementById("cart");
box.innerHTML="";
c.forEach(i=>{
box.innerHTML+=`<p>${i.name} x ${i.qty}</p>`;
});
}
