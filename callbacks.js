function anyone(arg){
    console.log("Anyone was called "+arg);
}


function myDisplayer(some) {
    console.log("My displayer was called "+some);
  }

  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1+num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, anyone);