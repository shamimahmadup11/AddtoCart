const decreasingButton = document.querySelector('.dicreasing');
const showHereDiv3 = document.querySelector('.sowHere3');
const increasingButton = document.querySelector('.increasing');
const decreasingButton1 = document.querySelector('.dicreasing1');
const showHereDiv1 = document.querySelector('.sowHere1');
const increasingButton1 = document.querySelector('.increasing1');
const decreasingButton2 = document.querySelector('.dicreasing2');
const showHereDiv2 = document.querySelector('.sowHere2');
const increasingButton2 = document.querySelector('.increasing2');

const AddtoCartBTn=document.querySelectorAll(".Items")[0];

let count=0; 
decreasingButton.addEventListener("click", function(e){
    if(count>=0){
        count=0;
    }
    e.stopPropagation();
    count--;
    if(count>=0){
        showHereDiv1.innerHTML=count;
    }

    onlyCahngeInValue1(count);
})

increasingButton.addEventListener("click", function(e){
    e.stopPropagation();
    count++;
    showHereDiv1.innerHTML=count;
    onlyCahngeInValue1(count,showHereDiv1);
})

decreasingButton1.addEventListener("click", function(e){
    
    e.stopPropagation();
    count--;
    if(count>=0){
        showHereDiv2.innerHTML=count;
    }
    onlyCahngeInValue2(count ,showHereDiv1);
})
increasingButton1.addEventListener("click", function(e){
    e.stopPropagation();
    count++;
    showHereDiv2.innerHTML=count;
    onlyCahngeInValue2(count ,showHereDiv1);
})

decreasingButton2.addEventListener("click", function(e){
    e.stopPropagation();
    count--;
    if(count>=0){
        showHereDiv3.innerHTML=count;
    }
    onlyCahngeInValue3(count ,showHereDiv1);
})
increasingButton2.addEventListener("click", function(e){
    e.stopPropagation();
    count++;
    showHereDiv3.innerHTML=count;
    onlyCahngeInValue3(count ,showHereDiv1);
})
const item1=document.querySelector(".item1")
const item2=document.querySelector(".item2")
const item3=document.querySelector(".item3")
item1.addEventListener("click",()=>{
      let product =document.querySelector(".product1").innerHTML
      let val =document.querySelector(".sowHere1").innerHTML
      let amount=document.querySelector(".amount1").innerHTML
      console.log(amount);
     AddCart( product ,val,amount)
})


item2.addEventListener("click",()=>{
    let product =document.querySelector(".product2").innerHTML
    let val =document.querySelector(".sowHere2").innerHTML
    let amount=document.querySelector(".amount2").innerHTML
    console.log(amount);
   AddCart( product ,val,amount)
})


item3.addEventListener("click",()=>{
    let product =document.querySelector(".product3").innerHTML
    let val =document.querySelector(".sowHere3").innerHTML
    let amount=document.querySelector(".amount3").innerHTML
    console.log(amount);
   AddCart( product ,val,amount)
});
const cart =document.querySelector(".cart");
function AddCart(product,val,amount){
    let myDiv=document.createElement("div");
    myDiv.className="myDiv";
    let para=document.createElement("p");
    let span=document.createElement("span");
    span.className="span"
      para.innerHTML=product;
      span.innerHTML=val+"*"+amount;
    myDiv.append(para,span);
    cart.appendChild(myDiv);
    
}

function onlyCahngeInValue1(count ){ 
    const spans = document.querySelector('.span');
   spans.innerHTML=count+"*"+"100";
}
function onlyCahngeInValue2(count ){ 
    const spans = document.querySelector('.span');
   spans.innerHTML=count+"*"+"100";
}
function onlyCahngeInValue3(count ){ 
    const spans = document.querySelector('.span');
   spans.innerHTML=count+"*"+"100";
}