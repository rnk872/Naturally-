function notify(msg){
let box=document.createElement("div");
box.innerText=msg;
box.style.position="fixed";
box.style.bottom="20px";
box.style.right="20px";
box.style.background="black";
box.style.color="white";
box.style.padding="10px";
box.style.borderRadius="10px";
document.body.appendChild(box);

setTimeout(()=>box.remove(),3000);
}
