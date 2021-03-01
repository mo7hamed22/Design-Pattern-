/**
 * Proptotype Pattern
The prototype pattern is based on prototypal 
inheritance. We create objects which act as prototypes
 for other objects. The prototype object itself is 
effectively used as a blueprint for creating 
other objects.
 */


class Animal{
    constructor(anmimalName)
    {
        this.anmimalName=anmimalName;
        this.speed =0 ;
    }
    run(speed)
    {
        this.speed+=speed;
        console.log(`this animal ${this.anmimalName}
        Run with speed ${this.speed}`)
    }
    stop(){
        this.speed=0;
        console.log(`this animal ${this.anmimalName}
        Stopped`)

    }
}
class dog extends Animal{
    bit(){
        console.log(`${this.anmimalName} bits people`)
    }
}
const dog1 = new dog("Boxer");
dog1.run(20);
dog1.bit();



