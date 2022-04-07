//an icecream production example to understand async and callbacks.


const stocks = {
    fruits : ["grapes", "almonds", "cherry", "nuts"],
    liquid : ["water","ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"],
    flavors : ["mango","vanilla","strawberry"]
};

let is_shop_open = true;

function time(ms){
    return new Promise((resolve,reject) => {
        if(is_shop_open){
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log("Shop is closed"));
        }
    });
}


async function kitchen () {
    try{
         await time (2000);
        console.log(`${stocks.fruits[0]}`);

        await time(0);
        console.log("Start the production");

        await time(2000);
        console.log("cut the fruit");


    }
    catch{
        console.log("Customer left",error);
    }
    finally{
        console.log("Day ended, shop is closed");
    }
}

kitchen();



// let toppings_choice = () => {


//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(console.log("Which topping would you like?"));          
//         },3000);
//     });
// }


// async function kitchen(){
//     console.log("A")
//     console.log("B")
//     console.log("C")

//     await toppings_choice();
//     console.log("D")
//     console.log("E")
// }

// kitchen();

// console.log("cleaning the dishes");
// console.log("cleaning the table");
// console.log("taking other order");


// let order = (time, work) => {
//     return new Promise((resolve, reject) => {
//         if(is_shop_open){
//             setTimeout(() => {
//                 resolve(work());
//             }, time);
//             // resolve(work())
//         }

//         else{
//             reject(console.log("Our shop is closed"));
//         }
   
   
//     })
// }

// order(2000,() => console.log(`${stocks.fruits[0]} was selected`))

// .then(() => {
//     return order(0,() => console.log("Production has started"));
// })

// .then(() => {
//     return order(2000,() => console.log("Fruit was chopped"));
// })

// .then(() => {
//     return order(1000,() => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
// })

// .then(() => {
//     return order(1000, () => console.log("Start the machine"));
// })

// .then(() => {
//     return order(2000, () => console.log(`icecream placed on ${stocks.holder[0]}`))
// })

// .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} was selected`))
// })

// .then(() => {
//     return order(1000, () => console.log("ice cream was served"))
// })


// .catch(() => {
//     console.log("Customer left");
// })


// .finally(() => {
//     console.log("day ended, shop is closed");
// })


// async function order(){
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc does not exist", error);
//     }
//     finally{
//         console.log("runs code anyways");
//     }
// }

// order()
//  .then(()=>{
//     console.log("blahhhhhhhhhhh")
// })




// const order = (fruit_name, start_product) => {
//     // console.log("Order Placed");

//     setTimeout(()=>{
//         console.log(`${stocks.fruits[fruit_name]} was selected`);
//         // console.log(stocks.fruits[fruit_name]+" was selected");     
//         start_product(fruit_name);
//     },2000);
// }

// const production = (fruit_name) => {
//     // console.log("Production started");
//     setTimeout(() => {
//         console.log("Production was started");

//         setTimeout(()=>{
//             console.log(`${stocks.fruits[fruit_name]} was chopped`);

//             setTimeout(() =>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//                 setTimeout(() => {
//                     console.log("Machine has been started");

//                     setTimeout(() => {
//                         console.log(`icecream was placed on ${stocks.holder[0]}`);

//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[0]} was added as toppings`);

//                             setTimeout(() => {
//                                 console.log("Serve icecream");
//                             },2000);

//                         },3000);

                      
//                     },2000);


//                 },1000);


//             },1000)

//         },2000);

//     },0);
// }

// order(2,production);

// console.log("end");