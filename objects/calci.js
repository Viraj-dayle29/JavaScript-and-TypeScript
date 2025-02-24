let calculator = {
    sum(){
        return this.num1 + this.num2;
    },
    mul(){
        return this.num1 * this.num2;
    },
    read(){
        this.num1 = +prompt("first num : ", "");
        this.num2 = +prompt("second num : ", "");
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());