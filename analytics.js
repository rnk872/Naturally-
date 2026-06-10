function getAnalytics(){

let orders = DB.get("orders");
let revenue = orders.length * 100;

return {
totalOrders: orders.length,
estimatedRevenue: revenue
};
}

function showAnalytics(){

let data = getAnalytics();

console.log("Orders:", data.totalOrders);
console.log("Revenue:", data.estimatedRevenue);
}
