let mybtn=document.querySelector('button');
mybtn.addEventListener('click',inputMsg);

function inputMsg(){
   let name= prompt('Enter name of Student');
   mybtn.textContent='Roll no. 29 :'+name;
}
