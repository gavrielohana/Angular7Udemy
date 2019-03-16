export class CounterService{
   
    counter:number=0;
  
    increaseCounter():number{
        this.counter++;
        return this.counter;
    }
}