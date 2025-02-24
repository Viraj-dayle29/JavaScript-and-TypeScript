let obj = {
    "Name":"Viraj",
    "class":10,
    work : function(){
        console.log("Yes");
    }
}

let map = new Map(Object.entries(obj));
console.log(map.get("Name"));
map.get("work")();