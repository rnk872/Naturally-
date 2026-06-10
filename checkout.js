function checkout(){
let cart=DB.get("cart");
let order={
id:Date.now(),
items:cart,
date:new Date().toLocaleString()
};
DB.push("orders",order);
DB.set("cart",[]);
alert("Order Done");
}
