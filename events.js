// console.clear();


function outer(){
    let count = 0;
    document.querySelector('.mybtn').addEventListener("click",function xyz() {
        console.log("Button Clicked !",++count);
    });
}


outer();