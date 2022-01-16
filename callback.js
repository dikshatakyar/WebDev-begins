setTimeout(() => {
    console.log("Just a timer");
    z();
}, 6000);

//callbacks allows us to do async things in js

function z(){
    console.log("z");
}

function x(y){
        console.log("x");
        y();
}

x(function y(){
console.log("y");
});