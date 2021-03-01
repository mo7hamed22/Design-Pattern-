class market{

  constructor(name){
      this.name=name;
      this.arryIntersted=[];

  }
  newproduct(p_name,price)
  {
     this.p_name=p_name;
     this.price=price;
      this.notify()
  }


    subscription(subcriper){

        this.arryIntersted.push(subcriper);
       


    }
    un_subscripe(subcriper){
        this.arryIntersted.filter(sub=>sub!=subcriper)
    }
    notify(){
            this.arryIntersted.forEach(sub=>{
                sub.update(this)
            })
    }


}
  class subscriper{
      update(market){
          console.log(`Product name 
          ${market.p_name} and his price is ${market.price}`)
      }
  }
  const xx =new market("anmy name");
const person=new subscriper();
xx.subscription(person);
xx.newproduct("hhhh",33);
