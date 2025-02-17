alert('1' + 2);
alert(1 + 1 + '4');
alert(1 + '2' + 3 + 3);

// if any string detect they convert it as whole string
// before string if any number then it is operates as a number
// only in case of concatenation '+'

alert(typeof(6 - '2'));
// datatype -> number int

alert(typeof('6'/'2'));
// datatype -> number int

alert(typeof(+"yash"));
// Not a number (NaN)

// + unary opertator convert to string into number if possible

let a = "21";
let b = "32";

alert(+a + +b);
// 53

let c = 21,d = 9;

alert(c++);
// they give exact before increment
alert(++d);
// they first increment


