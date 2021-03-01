/**
 * Decorator Pattern
The decorator pattern is a structural pattern that 
focuses on adding new functionality to a class. The idea
 was that the decoration_itself wasn't essential to the base 
 functionality of the 
class, otherwise, it would be baked into the superclass itself.
 */

class animal
{
    voice(){

    }
    walk()
    {

    }
}
//===========
//cats
class feline extends animal {
    constructor(voice){
    super();
    this.voice=voice;
    console.log("feline contractor")
    }
    voice(){
    return`feline Voice  for ${this.voice}`;
    }

}
//========================

class lion extends feline{
    constructor(canine,name,voice)
    {
    super(voice);
    
    
    //take canine_loyalty 
    this.canine=canine.canine_loyalty();
    
    
    this.name=name;
    console.log("Lion")
    }
    voice(){
    super.voice();

    console.log(`lion name ${this.name}`);
    
    }

}
//===========================

//dogs
class canine extends animal{
    constructor(){
    super();
    console.log("canine constructor")

    }
    voice(){
    console.log("canine Voice")
    }
    canine_loyalty(){
   
     return "canine_loyalty";
    }
}

var dog =new canine();

var asd=new lion(dog,"asd","roar");

console.log(asd);
