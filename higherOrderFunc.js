const arr = [21,3,4,5,6];
//to convert into binary
const output = arr.map(x => x.toString(2));

const square = arr.map(x => x*x);

console.log(output);
console.log(square);    

//filter
const even=arr.filter(x=>x%2);
console.log(even);

//reduce
// function sum(){
    // let sum =0;
//     for(let i = 0 ; i < arr.length ; ++i){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// function maxm(){
//         let max=0;
//     for(let i=0;i<arr.length;++i){
//         if(arr[i]>max)
//         max=arr[i];
//     }
//     return maxm;
// }

const sum = arr.reduce((acc,curr)=>{
        acc=acc+curr;
        return acc;
},0);
console.log(sum);

const max=arr.reduce((acc,curr)=>{
    if(curr>acc)
    acc=curr;
    return acc;
},0);

console.log(max);

