class Bird{
    protected name:string;
    constructor(name:string){
        this.name=name;
    }

    protected makeSound():void{
        console.log('From protected method');
        console.log("Th sparrow makes a sound");
    }
}

class Sparrow extends Bird{
    public chrip():void{
        console.log(`${this.name}chrips!`);
        this.makeSound();
    }
}

//creating an instance of the Sparrow Class
const bird=new Sparrow("Alice");
bird.chrip();
//bird.makeSound(); //error
