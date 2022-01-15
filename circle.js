const radius = [5,3,4,9];

// function area(){
//     const output = [];
//     for(let i=0 ; i< radius.length ; ++i ){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

function area(radius){
    return Math.PI * radius * radius;
}
function diameter(radius){
    return 2 * radius;
}

function calculate(radius,logic){
    const output=[];
    for(let i = 0 ; i < radius.length ; ++i){
        console.log("Here we go...")
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(calculate(radius,diameter));


