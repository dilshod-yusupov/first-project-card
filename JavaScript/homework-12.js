   
class AppleProducts {
    constructor(type, name, color, price) {
        this.type = type;
        this.name = name;
        this.color = color;
        this.price = price;
    }

    showInfo() {
        console.log(`Продукт Apple, Тип - ${this.type}, Имя - ${this.name}, Цвет - ${this.color}, Цена - ${this.price}`)
    }
}

class Iphone extends AppleProducts {
    constructor(type, name, color, price, memory) {
        super(type, name, color, price);
        this.memory = memory
    }

     showInfo() {
        super.showInfo();
        console.log(`Обем памяти ${this.memory}`)
     }
}

const macbook = new AppleProducts('MacBook', 'MacBook Pro M1', 'Sliver', '2000$')
macbook.showInfo()

const iphone = new Iphone('iPhone', 'iPhone 11', 'Black', '1000$', '256 GB')
iphone.showInfo()