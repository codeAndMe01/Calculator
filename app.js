
let inpEle = document.querySelector('input');

let clearInp = document.querySelector('.clear')
let calc = document.querySelector('.result')

let numbers = document.querySelectorAll('.nums')
let oprBtn = document.querySelectorAll('.opr')

//Sounds
let pressNum = document.querySelector('#numPress')
let pressClear = document.querySelector('#clearPress')
let pressEqual = document.querySelector('#equalPress')



numbers.forEach(btnValue => {  //collecting all the numbers in an array
    
    btnValue.addEventListener('click', ()=>{
          
        pressNum.play();
        appendDisplay(btnValue.textContent)  //using text content cause we   
        
    })
    
})

oprBtn.forEach(btnValue => {  //collecting all operators in an array 
    
    btnValue.addEventListener('click' , function(){
        
        pressNum.play();
        appendDisplay(btnValue.textContent)   
    })
})




function appendDisplay(value){

    inpEle.value += value;

}

calc.addEventListener('click',()=>{   //for  sound
    pressEqual.play();
})


calc.addEventListener('click',totalResult);


function totalResult(){
   
    try {
        let result = eval(inpEle.value)

         inpEle.value = result;
    } catch (error) {
        inpEle.value = "error"
    }

}

 

clearInp.addEventListener('click',()=>{  // to clear input
     
    pressClear.play()

    inpEle.value = ""
})













