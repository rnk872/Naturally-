const Products=[
{id:1,name:"Apple",price:100},
{id:2,name:"Mango",price:150},
{id:3,name:"Banana",price:50}
];

function loadProducts(){
const c=document.getElementById("products");
Products.forEach(p=>{
let div=document.createElement("div");
div.innerHTML=`
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add</button>
`;
c.appendChild(div);
});
}
