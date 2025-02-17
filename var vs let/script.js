console.log(a);
var a = 20;

//var → Hoisted but initialized as undefined

console.log(b);
let b = 21;

// let → Hoisted but not initialized

function testVar(){
    if(true){
        var c = 90;
    }
    console.log(c);
}
testVar();

// var -> function scope outside function it is global variable

function testLet(){
    if(true){
        let d = 32;
    }
    console.log(d);
}

// let -> block scope

var x = 20;
var x = 21;

// var -> Redeclared 
// let -> Can not redeclared

