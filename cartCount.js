function cartCount(){
return DB.get("cart").reduce((a,b)=>a+b.qty,0);
}
