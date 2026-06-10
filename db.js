const DB={
get:k=>JSON.parse(localStorage.getItem(k))||[],
set:(k,v)=>localStorage.setItem(k,JSON.stringify(v)),
push:(k,v)=>{let d=DB.get(k);d.push(v);DB.set(k,d);}
}
