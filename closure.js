function far(){
    let c=20;
function outer(b){
    function inner(){
        console.log(a,b,c);
    }
    let a=10;
    return inner;
}
return outer;
}
let a=50;
//50 will not be printed,when the copy of inner function gets called, it remembers the value of a which points to 10 
var z=far()("diksha");
z(); //it will execute the function attached to z
// if console.log(z) : whole function will be printed