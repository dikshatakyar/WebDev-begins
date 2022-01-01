function x(){
    for(var i=1;i<=5;++i){
        //if we don't use closure here,the copy of i will refer to the same memory location
        function close(x){
            setTimeout(function (){
                console.log(x);
            },x*1000);
        }
        //everytime the close function is called a new copy of i is created(it is refering to different memory location)
        close(i);
    }
    console.log("Hi, Everyone!");
}
console.log("Everything begins...");
x();

//if we use let here.....

function f1(){
    for(let j=8;j<=13;++j){
            setTimeout(() => {
                console.log(j);
            }, j*1000);
    }
    console.log("Here we see the working of let variable ");
}

//let is block scope so copy of variable in each iteration will be new

f1();
