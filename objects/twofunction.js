let obj = {};

function A(){
    return obj;
}
function B(){
    return obj;
}

let a = new A();
let b = new B();

alert(a == b);

let c = Symbol("id");
alert(c.valueOf());