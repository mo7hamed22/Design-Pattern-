class Developer{
    constructor(name)
    {
        this.name=name;
        this.type="Developer"
    }
    
}
class Tester{
    constructor(name)
    {
        this.name=name;
        this.type="tester"
    }
    
}
class buildFactoty{
    createEmp(name,type){
        switch(type)
        {
            case 1 : return new Developer(name);
            case 2 :return new Tester(name)
        }
    }
}
function say(){
    return `Welcome ${this.name} for your new role as ${this.type}`;
}

let emp =new buildFactoty();
let arr=[];
arr.push(emp.createEmp("mohamed",1));
arr.push(emp.createEmp("Ahmed",2));
arr.push(emp.createEmp("mohamed mahmoud",1));
arr.forEach((emp)=>{
   console.log( say.call(emp))
})


/**
 * 
 * 
 * Factory Pattern
The factory pattern abstracts object creation by providing an interface, where we can specify the type of factory object to be created.

The Factory pattern can be especially useful when applied to the following situations:

When our object or component setup involves a high level of complexity, e.g. if it strongly depends on dynamic factors or application configuration.
When we need to easily generate different instances of objects depending on the environment we are in
When we're working with many small objects or components that share the same properties
When composing objects with instances of other objects that need only satisfy an API contract (aka, duck typing) to work. This is useful for decoupling.
 */


 /////================
 //Another Ex For test
 /**
  * // A class for defining new cars

    class Car {
     constructor(doors, state, color) {
     this.doors = doors || 4;
     this.state = state || "brand new";
     this.color = color || "silver";
     }
    
     props(){
     return `I am a ${this.state} ${this.color} car and I have ${this.doors} doors`
     }
    }
    
    // A class for defining new trucks
    class Truck {
     constructor(state, wheelSize, color) {
     this.state = state || "used";
     this.wheelSize = wheelSize || "large";
     this.color = color || "blue";
     }
    
     props(){
     return `I am a ${this.state} ${this.color} truck and I have a ${this.wheelSize} wheels`
     }
    }
    
    // Define a factory
    
    class VehicleFactory {
     constructor(options) {
    
     let vehicle;
     switch (options.type) {
     case "car":
     vehicle = new Car(options.doors, options.state, options.color)
     break;
     case "truck":
     vehicle = new Truck(options.state, options.wheelSize, options.color);
     break;
     }
     return vehicle;
     }
    
    }
    
    // Usage
    
    let options1 = {
     type: "car",
     color: "yellow",
     doors: 6
    }
    let options2 = {
     type: "truck",
     state: "like new",
     color: "red",
     wheelSize: "small"
    }
    
    let car = new VehicleFactory(options1);
    let truck = new VehicleFactory(options2);
    
    console.log(car.state) // brand new
    console.log(car.color) // yellow
    console.log(car.props()) // I am a brand new yellow car and I have 6 doors
    console.log(truck.state) // used
    console.log(truck.color)// red
    console.log(truck.props())// I am a used red truck and I have a small wheels
     
    
  */