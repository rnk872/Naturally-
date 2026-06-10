let orders=DB.get("orders");

document.getElementById("revenue").innerHTML=
"Total Orders: "+orders.length;

document.getElementById("inventory").innerHTML=
"Products Loaded: "+Products.length;
