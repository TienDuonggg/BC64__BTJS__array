var arrNumber = []
var elementTotal = 0
var elementCount = 0
var arrInteger = []
var elementInteger = 0

function handleArray(){
    var addNumber = document.getElementById('addNumber').value * 1
    arrNumber.push(addNumber)
    console.log(arrNumber)
    return arrNumber

}

// Bai 1

function CaculatorTotal(){
    for (let i = 0; i < arrNumber.length; i++) {
      elementTotal += arrNumber[i];
        
    }
    return elementTotal
}

// Bai 2

function CountNumber(){
    for (let i = 0; i < arrNumber.length; i++) {
        if(arrNumber[i] > 0){
            elementCount++
        }
          
      }
      return elementCount
}

// Bai 3


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

// Bai 4

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

// Bai 5

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

// Bai 6

function increaNumber(){
    arrNumber.sort()
    return arrNumber
           
          
   }

   // Bai 7
   
function isPrime(num){

    if(num <= 1){
        return false
    }
    for(var i = 2; i< Math.sqrt(num); i++){

        if(num % i == 0){
            return false
    
        }
        return num
    }
    // return arrNumber.map(function(item){
    //      isPrime(item)
    // })
           
         
   }

   // Bai 8

   function FindPrime(){
   
    return arrNumber.filter(item => isPrime(item));
   }

   // Bai 9


   function handleArrayInteger(){
    var addNumber = document.getElementById('addInteger').value * 1
    arrInteger.push(addNumber)
    console.log(arrInteger)
    return arrInteger

}

function IntegerNumber(arr){
    for (let i = 0; i < arr.length; i++) {
     var integer =  Number.isInteger(arr[i])
     if(integer){
        elementInteger++
        
     }

        
    }
    return elementInteger

}

// Bai 10

function handleCompare(arr) {
    console.log(arr);
    let positiveNumbers = 0;
    let negativeNumbers = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumbers++;
            
        } else if (arr[i] < 0) {
            negativeNumbers++;
            
        }
    }

    if (positiveNumbers > negativeNumbers) {
        return 'Số dương > hơn số âm';
    } else if (positiveNumbers < negativeNumbers) {
        return 'Số âm > số dương';
    } else {
        return 'Số dương = số âm';
    }
}





/*-------------------------------------------------------------------------*/


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
        
        document.getElementById(element).innerHTML =  FindPrime()
     }
    
}

handleBtn('.btnPrime', 'primeNumber') 

document.querySelector('.btnNumber').onclick = function(){

    document.getElementById('arrayNumberInteger').innerHTML = handleArrayInteger()
}

function handleBtn(btn, element){
    document.querySelector(btn).onclick = function(){
        
        document.getElementById(element).innerHTML =  `Số nguyên: ${IntegerNumber(arrInteger)}`
     }
    
}

handleBtn('.btnInteger', 'IntegerNumber')


document.querySelector('.btnCompare').onclick = function () {
    const result = handleCompare(arrNumber);
    document.getElementById('resultNumber').innerHTML = result;
};

