function loadOrders(){
let o=DB.get("orders");
let box=document.getElementById("orders");
box.innerHTML="";
o.forEach(x=>{
box.innerHTML+=`
<div>
<h3>Order ${x.id}</h3>
<p>${x.date}</p>
</div>
`;
});
}
