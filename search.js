function searchProducts(key){
return Products.filter(p =>
p.name.toLowerCase().includes(key.toLowerCase())
);
}
