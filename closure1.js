//closure helps in data hiding and encapsulation

function counter(){
    var count=0;
    return function fincrement(){
        count++;
        console.log(count);
    }
} 
// var x=counter()
// x();

var x = () => {
    counter();
}

//here again closure will be created,which will be new independent copy
var y = counter();
 y();
 y();
 y();
 y();
 y();

 //creating a constructor for increment and decrement

 function Counter1(){
     var ctr=0;
     this.incr=function(){
         ctr++;
         console.log(ctr);
     }
     this.dcr=function(){
         --ctr;
         console.log(ctr);
     }
 }

 var d=new Counter1();
 d.incr();
 d.incr();
 d.incr();
 d.dcr();