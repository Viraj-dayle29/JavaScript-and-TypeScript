class Shape{
    constructor(color){
        this.color = color;
    }

    paint(){
        console.log(`${this.color} is used for painting.`);
    }

    area(){
        throw new Error(`Area is not implemented here`);
    }
}

class Rectangle extends Shape{
    constructor(width,height,color){
        super(color);
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }
}

class Circle extends Shape{
    constructor(radius,color){
        super(color);
        this.radius = radius;
    }

    area(){
        return (Math.PI * this.radius * this.radius).toFixed(2);
    }
}

let rect1 = new Rectangle(10,20,"blue");
rect1.paint();
let rec2 = new Circle(10,"red");
console.log(rec2.area());
