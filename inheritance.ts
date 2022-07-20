abstract class Animal {
    name?: string;

    setName(): void {
        this.name = "Test";
    }
}

class Dog extends Animal {
    constructor() {
        super();
    }

    callFromDog() {
        console.log("Call from dog...")
        this.setName();

        console.log("Checking name from >>> ", this.name)
    }
}

class Cat extends Animal {
    constructor() {
        super();
    }

    callFromCat() {
        console.log("Call from cat...")
        console.log("Checking name from >>> ", this.name)
    }
}




if (typeof window !== 'undefined') {

    const doggy = new Dog();
    doggy.callFromDog();

    const cat = new Cat();
    cat.callFromCat();

    const element = document.getElementById("inheritance");
    if (element) {
        element.innerHTML = "Typescript inheritance works!";
    }
}