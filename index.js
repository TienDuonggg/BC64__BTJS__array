var arrNumber = []
var elementTotal = 0
var elementCount = 0

function handleArray(){
    var addNumber = document.getElementById('addNumber').value * 1
    arrNumber.push(addNumber)
    console.log(arrNumber)
    return arrNumber

}

function CaculatorTotal(){
    for (let i = 0; i < arrNumber.length; i++) {
      elementTotal += arrNumber[i];
        
    }
    return elementTotal
}

function CountNumber(){
    for (let i = 0; i < arrNumber.length; i++) {
        if(arrNumber[i] > 0){
            elementCount++
        }
          
      }
      return elementCount
}

console.log(arrNumber)


function SmallNumber(){
    var small = arrNumber[0]
    for (let i = 0; i < arrNumber.length; i++) {
        
        if(small> arrNumber[i]){
            console.log(small)
            small = arrNumber[i]
        }
          
      }
      return small
}

function minNumber(){
    var min = arrNumber[0]
    for (let i = 0; i < arrNumber.length; i++) {
        
        if(min> arrNumber[i] && arrNumber[i] > 0){
            console.log(min)
            min = arrNumber[i]
        }
          
      }
      return min
}


function EvenNumber(){
    var even = arrNumber[0]
    for (let i = 0; i < arrNumber.length; i++) {
        
        if( arrNumber[i] % 2 == 0){
            console.log(even)
            even = arrNumber[i]
        }
        else{
            return -1
        }
      }
      return even
}


function placeNumber(){
 var indexFirst =   document.getElementById('index1').value * 1
 var indexSecond =  document.getElementById('index2').value * 1
 var temp = arrNumber[indexFirst]
 arrNumber[indexFirst] = arrNumber[indexSecond]
 arrNumber[indexSecond] = temp
 if(!temp){
    return -1
 }
 
 return arrNumber
    
        
       
}

function increaNumber(){
    arrNumber.sort()
    return arrNumber
           
          
   }

   
// function PrimeNumber(){
//     return arrNumber.map(function(item){
//          isPrime(item)
//     })
           
         
//    }





document.querySelector('.btn__add').onclick = function(){
   document.getElementById('arrayNumber').innerHTML = handleArray()
}


function handleBtn(btn, element){
    document.querySelector(btn).onclick = function(){
        document.getElementById(element).innerHTML = CaculatorTotal()
     }
    
}

handleBtn('.btnTotal', 'arrayTotal') 

function handleBtn(btn, element){
    document.querySelector(btn).onclick = function(){
        document.getElementById(element).innerHTML =  CountNumber()
     }
    
}

handleBtn('.btnCount', 'countNumber') 

function handleBtn(btn, element){
    document.querySelector(btn).onclick = function(){
        document.getElementById(element).innerHTML =   SmallNumber()
     }
    
}

handleBtn('.btnSmall', 'smallNumber') 

function handleBtn(btn, element){
    document.querySelector(btn).onclick = function(){
        document.getElementById(element).innerHTML =   minNumber()
     }
    
}

handleBtn('.btnMin', 'minNumber') 

function handleBtn(btn, element){
    document.querySelector(btn).onclick = function(){
        document.getElementById(element).innerHTML =   EvenNumber()
     }
    
}

handleBtn('.btnEven', 'EvenNumber') 

function handleBtn(btn, element){
    document.querySelector(btn).onclick = function(){
        document.getElementById(element).innerHTML =   placeNumber()
     }
    
}

handleBtn('.btnPlace', 'PlaceNumber') 

function handleBtn(btn, element){
    document.querySelector(btn).onclick = function(){
        document.getElementById(element).innerHTML =  increaNumber()
     }
    
}

handleBtn('.btnIncrea', 'increaNumber') 

function handleBtn(btn, element){
    document.querySelector(btn).onclick = function(){
        document.getElementById(element).innerHTML =  PrimeNumber()
     }
    
}

handleBtn('.btnPrime', 'primeNumber') 