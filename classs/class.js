class Mobile {
    constructor(price,model,color){
        this.price = price;
        this.model = model;
        this.color = color;
    }

    maket(){
        const afterPrice = this.price * 2;
        return afterPrice;
    }
}

let sams = new Mobile(1200,"a2s","red");
let after = () => sams.maket();
console.log(after());