let obj = {
    name : null,
    surName : undefined,
}

let obj2 = {
    "+1" : "mm",
    "+4" : "yan",
    "+3" : "run",
}

for(let num in obj2){
    alert(num);
}

// function for check empty object 

function isEmpty(obj){
    if(Object.keys(obj).length == 0) return true;
    return false;
}

let abc = {};
alert(isEmpty(abc));

// Multiply numeric value by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj){
    for(let num in obj){
        obj[num] = (!isNaN(obj[num])) ? obj[num] * 2 : obj[num];
    }
}

multiplyNumeric(menu);

for(let num in menu){
    alert(menu[num]);
}

let x = structuredClone(menu);
alert(x === menu)