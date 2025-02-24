// create a wrapper aroun primitive data type then function on it
function Numbers(num){
    this.num = num;
    this.cntDigit = function(){
        let cnt = 0;
        let temp = this.num;
        while(temp!= 0){
            temp = Math.floor(temp / 10);
            cnt++;
        }
        return cnt;
    }
}
let n = 12345;
let temp = new Numbers(n);
let result = temp.cntDigit();
alert(result);

// for checking length of string

function Strings(str){
    this.test = function(){
        return str.length;
    }
}

let str = "viraj";
let temp1 = new Strings(str);
let result1 = temp1.test();
alert(result1);

String.prototype.test = function(){
    let stri = this;
    return stri.length;
}

alert("raju".test());