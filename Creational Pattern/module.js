/*
The module pattern 
allows you to keep units of code 
cleanly separated and organized. 
Modules promote encapsulation, which means 
the variables and functions or classes are kept private inside 
the module body and can't be overwritten. Creating a 
module in ES6 is quite simple.
In ES6 the export/import mechanism is used to 
implement modularity. The export keyword is used 
when we want to make a component accessible somewhere,
 and the import 
is used to access what export has made available.
*/


class Car{
    constructor(carName,color,price)
    {
        this.color=color;
        this.carName=carName ;
        this.price=price;
    }
    carEvaluate()
    {
        //do something 
        console.log(`Excellent Car this one name ${this.carName}`);
    }
}
module.exports = Car 



