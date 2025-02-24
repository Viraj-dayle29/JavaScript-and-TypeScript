let map = new Map();
map.set("Name","Viraj");
map.set("Name","Raghu");
map.set("Age",29);

console.log(map.get("Name"));

map.forEach((value,key,map)=>{
    console.log(`${key} , ${value} ,${map}`);
})